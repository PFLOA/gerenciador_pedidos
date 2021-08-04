import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "../pages/Login";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";

import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/gerenciador_pedidos/" component={() => <LoginForm />} />
      <Route path="/gerenciador_pedidos/signup" component={() => <SignUp/>} />
      <PrivateRoute path="/gerenciador_pedidos/app" component={() => <Main/>} />
      <Route path="/gerenciador_pedidos/*" component={() => <NotFound/>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;