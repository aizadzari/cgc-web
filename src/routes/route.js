import React from "react";
import { Redirect, Route } from "react-router-dom";
import Navbar from "../pages/TopNav/Navbar";

const AppRoute = ({
	component: Component,
	isAuthProtected,
	...rest
}) => {
	console.log(isAuthProtected);
	return (
		<Route
			{...rest}
			render={props => {
				if (isAuthProtected && JSON.parse(localStorage.getItem("authUser")) === null) {
					return (
						<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
					);
				}
				return (
					<>
						{isAuthProtected && <Navbar {...props} />}
						<Component {...props} />
					</>
				);
			}}
		/>
	)
};

export default AppRoute;