import React,{ useContext } from "react";
import { Context } from '../../Context/context';

const HomePage = () => { 
    const  pizzas = useContext(Context);
    return(
        <>
            {
                pizzas.map(item=>(
                    <p key={item.id}>{item.name}</p>
                ))
            }
        </>
    )
}

export default HomePage;