import React, { useEffect } from "react";
import "./App.css";
import MenuContainer from "./features/Menu/MenuContainer";
import Todo from "./features/Todo/Todo";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import categoryApi from "./api/categoryApi";
import CounterFeature from "./features/Counter/CounterFeature";
import Header from './components/Header/Header';
import { Button } from "@material-ui/core";
import { useSnackbar } from "notistack";

function App() {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const fetchCategories = async () => {
      const params = {
        _limit: 3,
      };
      const categoriesList = await categoryApi.getAll(params);
      console.log(categoriesList);
    };
    fetchCategories();
  }, []);
  const showNoti = () => {
    enqueueSnackbar('Register successfully', { variant: 'info' });
  }
  return (
    <>
      <div className="app">
        <Header />
        <Button onClick={showNoti}>Show noti</Button>
        <h1>Home</h1>
        <Switch>
          <Redirect from="/home" to="/" exact />
          <Redirect from="/todo-list" to="/todo" />

          <Route path="/" component={CounterFeature} exact />
          <Route path="/menu" component={MenuContainer} />
          <Route path="/todo" component={Todo} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
