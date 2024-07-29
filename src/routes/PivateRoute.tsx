import { Navigate } from "react-router-dom";
import { authStatusStore } from "../store/authStatusStore";
import Loader from "../components/loader";

type PrivateRouteType = {
  children: React.ReactNode
}

export const PrivateRoute = ({ children }: PrivateRouteType) => {

  const { status } = authStatusStore();

  if (status == "checking") {
    return <Loader />;
  }

  if (status == "not-authenticated") {
    return <Navigate to="/login" />;
  }
  return children;
};