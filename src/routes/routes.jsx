// src/routes/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import Feed from "../pages/Feed";
import Profile from "../pages/Profile";
import Layout from "../layout/Layout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, // Layout wraps all routes
        children: [
            { path: "/", element: <Feed /> },
            { path: "/reader", element: <Profile /> }
        ]
    }
])

export default router;
