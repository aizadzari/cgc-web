import React from 'react'
import { BrowserRouter as Switch, Router } from "react-router-dom";
import "./App.css"
import { publicRoutes, authProtectedRoutes } from "./routes"
import AppRoute from './routes/route';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <AppRoute
              path={route.path}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}

          {authProtectedRoutes.map((route, idx) => (
            <AppRoute
              path={route.path}
              // layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
