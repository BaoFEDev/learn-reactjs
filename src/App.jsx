import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from './components/Header/Header';
import NotFound from "./components/NotFound/NotFound";
import CounterFeature from "./features/Counter/CounterFeature";
import MenuContainer from "./features/Menu/MenuContainer";
import Todo from "./features/Todo/Todo";
import CartFeature from "features/Cart";
import ProductFeature from "features/Product";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/todo-list" to="/todo" />

        <Route path="/" component={CounterFeature} exact />
        <Route path="/todo" component={Todo} />
        <Route path="/menu" component={MenuContainer} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
