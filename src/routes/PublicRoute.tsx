import { Navigate } from "react-router-dom";
import Loader from "../components/loader";
import { authStatusStore } from "../store/authStatusStore";

type PublicRouteType = {
    children : React.ReactNode
}

function PublicRoute({children} : PublicRouteType) {
    const { status } = authStatusStore();

    if (status == "checking") {
        return <Loader />;
    }

    if (status == "authenticated") {
        return <Navigate to="/" replace />;
    }

    return children;
}


export default PublicRoute;