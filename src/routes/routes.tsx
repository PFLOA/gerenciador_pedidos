import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "../pages/Login";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import ClientesLista from "../pages/Cliente/Lista";

import { isAuthenticated } from "../services/auth";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivateRoute = (props: any) => {
  const { component: Component, ...rest } = props;

  return (
    <Route {...rest} render={props => (
      isAuthenticated() ?
        <Component {...props} />
        : <Redirect to="/" />
    )} />
  );
};

const Routes = () => (
  <BrowserRouter>
    <div className="d-flex flex-column h-100">
      <Navbar />
      <div className="d-flex h-100">
        <Sidebar />
        <div className="d-flex flex-column p-5">
          <Switch>
            <Route exact path="/gerenciador_pedidos/" component={() => <LoginForm />} />
            <PrivateRoute path="/gerenciador_pedidos/app" component={Main} />
            <PrivateRoute path="/gerenciador_pedidos/clientes" component={() => <ClientesLista />} />
            <Route path="/gerenciador_pedidos/signup" component={() => <SignUp />} />
            <Route path="/gerenciador_pedidos/*" component={() => <NotFound />} />
          </Switch>
          <Footer />
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default Routes;