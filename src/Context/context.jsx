import React, { createContext } from "react";

export const Context = createContext({})

const ContextProvider = (props) => {

  const user ={
    "id": 3,
    "usser": "JuranyR",
    "password": "123456",
    "profile_image": "https://img.freepik.com/vector-premium/mujer-joven-pelo-rizado-oscuro-vector_92795-2576.jpg?w=2000"
  }

  return (
    <Context.Provider value={user} >{props.children}</Context.Provider>
  );
}

export default ContextProvider;
