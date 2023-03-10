import React, {useContext} from "react";
import { Context } from '../../../Context/context';

const Header = () => { 
    const  {user} = useContext(Context);
    return(
        <section className="header">
            <div>
                <h1>Home</h1>
                <p>¡Qué bueno verte {user.usser}!</p>
            </div>
            <figure>
                <img src={user.profile_image} alt="user"/>
            </figure>
        </section>
    )
}

export default Header;