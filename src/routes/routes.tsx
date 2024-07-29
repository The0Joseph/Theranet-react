import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import PublicRoute from "./PublicRoute";
import { PrivateRoute } from "./PivateRoute";
import DevicesPage from "../pages/devices";
import PlayerPage from "../pages/player";
import HomeRoot from "../pages/home";
import ChannelsPage from "../pages/channels";


export const routes = createBrowserRouter([

    {
        path: "/",
        element: <PrivateRoute><HomeRoot /></PrivateRoute>,
        children: [
            {
                path: "",
                element: <ChannelsPage />,
            },
            {
                path: "/devices",
                element: <DevicesPage />,
            },

        ]
    },
    {
        path: "/player/:slug",
        element: <PrivateRoute><PlayerPage /></PrivateRoute>,
    },
    {
        path: "/login",
        element: <PublicRoute> <LoginPage /> </PublicRoute>
    }



]);