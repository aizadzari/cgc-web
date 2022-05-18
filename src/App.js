import React from 'react'
import { Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css"
import { publicRoutes, authProtectedRoutes } from "./routes/index"
import AppRoute from './routes/route';

const App = () => {
  return (
    <React.Fragment>
      {/* <Store> */}
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <AppRoute
              path={route.path}
              // layout={NonAuthLayout}
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
      {/* </Store> */}
    </React.Fragment>
  )
}

export default App
