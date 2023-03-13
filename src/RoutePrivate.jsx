import React, { useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Context } from "./Context/context";

const RoutePrivate = ({ children }) => {
  const { user } = useContext(Context);
  const navigate = useNavigate("/");

  useEffect(() => {
    if (user && Object.keys(user).length === 0) {
      navigate("/");
    }
  }, []);
  return <>{user ? <>{ children }</>: <></>}</>;
};

export default RoutePrivate;
