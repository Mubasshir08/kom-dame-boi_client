// src/routes/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import Feed from "../pages/Feed";
import Profile from "../pages/Profile";
import Layout from "../layout/Layout";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, // Layout wraps all routes
        children: [
            { path: "/", element: <Feed /> },
            { path: "/reader", element: <Profile /> }
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
