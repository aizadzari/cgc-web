import React from "react";
import { Redirect } from "react-router-dom";
import Home from "../pages/Home";
import DetailsPage from "../pages/Details/DetailsPage";
import Login from '../pages/Login'

const authProtectedRoutes = [
    { path: "/details/:id", component: DetailsPage },
    { path: "/home", component: Home },
    { path: "/", exact: true, component: () => <Redirect to="/home" /> }
]

const publicRoutes = [
    { path: "/login", component: Login },
]

export { authProtectedRoutes, publicRoutes };