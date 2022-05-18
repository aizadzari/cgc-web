import React from "react";
import { Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Login from '../pages/Login'

const authProtectedRoutes = [
    { path: "/home", component: Home },
    { path: "/", exact: true, component: () => <Redirect to="/home" /> }
]

const publicRoutes = [
    { path: "/login", component: Login },
]

export { authProtectedRoutes, publicRoutes };