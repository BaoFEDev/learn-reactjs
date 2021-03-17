import React, { useState, useEffect, useMemo } from "react";
import MenuList from "../../components/MenuList/MenuList";
import "./ListPage.css";
import queryString from "query-string";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
const ListPage = () => {
  const initMenuList = [
    {
      id: 1,
      name: "Phở",
      imgUrl:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia-cache-ec0.pinimg.com%2F736x%2F5d%2F95%2F5d%2F5d955d4e378ca0ec899ff61ed58e994a.jpg&f=1&nofb=1",
      status: "new",
    },
    {
      id: 2,
      name: "Bún Bò Huế",
      imgUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8GXdq3zee4VDVmvYu8P_gQHaEQ%26pid%3DApi&f=1",
      status: "completed",
    },
    {
      id: 3,
      name: "Cơm Tấm",
      imgUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FrRtcZxAAOhQ%2Fmaxresdefault.jpg&f=1&nofb=1",
      status: "new",
    },
  ];
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const [menuList, setMenuList] = useState(initMenuList);
  const [filterStatus, setFilterStatus] = useState(() => {
    let params = queryString.parse(location.search);
    return params.status || "all";
  });
  useEffect(() => {
    let params = queryString.parse(location.search);
    setFilterStatus(params.status || "all");
  }, [location.search]);
  const showNew = () => {
    // setFilterStatus("new");
    let queryParams = { status: "new" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const showCompleted = () => {
    // setFilterStatus("completed");
    let queryParams = { status: "completed" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const showAll = () => {
    // setFilterStatus("all");
    let queryParams = { status: "all" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  // const renderFilter = useMemo(() => {
  //   return menuList.filter(
  //     (i) => filterStatus === "all" || filterStatus === i.status
  //   );
  // }, [menuList, filterStatus]);
  const renderFilter = menuList.filter(
    (i) => filterStatus === "all" || filterStatus === i.status
  );
  const handleMenuList = (menu, idx) => {
    let newMenuList = [...menuList];

    newMenuList[idx] = {
      ...newMenuList[idx],
      status: newMenuList[idx].status === "completed" ? "new" : "completed",
    };

    setMenuList(newMenuList);
  };
  return (
    <>
      <MenuList menuList={renderFilter} onMenuClick={handleMenuList} />
      <div className="button-group">
        <button onClick={showNew}>Show New</button>
        <button onClick={showCompleted}>Show completed</button>
        <button onClick={showAll}>Show All</button>
      </div>
    </>
  );
};

export default ListPage;
