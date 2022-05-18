import React from "react";
import * as Redirect from "react-router-dom";
import Login from '../pages/Login'

const authProtectedRoutes = [
    { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
]

const publicRoutes = [
    { path: "/login", component: Login },
]

export { authProtectedRoutes, publicRoutes };