import { Outlet } from "react-router-dom";
import "../assets/style.css";
import Sidebar from "../components/sidebar";
import { init, setKeyMap } from "@noriginmedia/norigin-spatial-navigation";


init({
    // debug: true,
    // visualDebug: true,
});
setKeyMap({
    left: 37, // 'ArrowLeft'
    up: 38, // 'ArrowUp'
    right: 39, // 'ArrowRight'
    down: 40, // 'ArrowDown'
    enter: 13, // 'Enter'
});




function HomeRoot() {

    return (
        <>
            <Sidebar focusKey="SIDEBAR" />

            <div className="container">
                <div className="title">
                    <h1>Theranet</h1>
                </div>

                <Outlet />
            </div>
        </>

    );
}

export default HomeRoot;