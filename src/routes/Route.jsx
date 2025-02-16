import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Feed from "../pages/Feed";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Feed />
    }
])

export default Route;