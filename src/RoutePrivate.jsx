import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context/context";

const RoutePrivate = ({ children }) => {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate("/");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return <>{user ? { children } : <></>}</>;
};

export default RoutePrivate;
