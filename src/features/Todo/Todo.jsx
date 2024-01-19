import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import TodoPage from "./pages/TodoPage";

const Todo = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={match.path} component={TodoPage} exact />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Todo;
