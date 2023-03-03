import React, { createContext } from "react";

export const Context = createContext({})

const ContextProvider = (props) => { 
    const pizzas =[
        {id:1, name:'peperomi', price: 3200,},
        {id:2, name: 'hawaiana', price: 6200},
        {id:3, name: 'carnes', price: 4500},
    ]

  return (
    <Context.Provider value={pizzas} >{props.children}</Context.Provider>
  );
}

export default ContextProvider;
