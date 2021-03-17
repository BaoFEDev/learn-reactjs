import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import DetailPage from "./pages/DetailPage/DetailPage";
import ListPage from "./pages/ListPage/ListPage";

const MenuContainer = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:menuId`} component={DetailPage} exact />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default MenuContainer;
