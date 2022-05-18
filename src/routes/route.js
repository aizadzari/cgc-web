import React from "react";
import { Redirect, Route } from "react-router-dom";

const AppRoute = ({
	component: Component,
	isAuthProtected,
	...rest
}) => {
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
						<Component {...props} />
					</>
				);
			}}
		/>
	)
};

export default AppRoute;