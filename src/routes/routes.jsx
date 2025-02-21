// src/routes/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import Feed from "../pages/Feed";
import Profile from "../pages/Profile";
import Layout from "../layout/Layout";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Notification from "../pages/Notification";
import Settings from "../pages/Settings";
import General from "../pages/General";
import Appearance from "../pages/Appearance";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, // Layout wraps all routes
        children: [
            { path: "/", element: <Feed /> },
            { path: "/reader", element: <Profile /> },
            { path: "/reader/notification", element: <Notification /> },
            { path: "/reader/setting", element: <Settings />, children:[
                { path: "/reader/setting/general", element: <General /> },
                { path: "/reader/setting/theme", element: <Appearance /> },
            ] },
        ]
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router;
