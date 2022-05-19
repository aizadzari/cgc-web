import React from 'react'
import { Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css"
import 'remixicon/fonts/remixicon.css'
import { publicRoutes, authProtectedRoutes } from "./routes/index"
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
