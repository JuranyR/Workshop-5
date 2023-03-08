import React from "react";
import search from "../../../images/search.svg";
import home from "../../../images/home.svg";
import store from '../../../images/basket.svg'

const Footer = () => { 
    return(
        <>
            <div className="store">
                <div className="outer-circle">
                    <figure className="inner-circle">
                        <img src={store} alt="store"/>
                    </figure>
                </div>
            </div>
            <footer className="footer">
                <figure class="left">
                    <img src={home} alt="icon"></img>
                    <span className="home-footer">Home</span>
                </figure>
                <figure class="right">
                    <img src={search} alt="icon"></img>
                    <span className="search-footer">Buscar</span>
                </figure>
            </footer>
        </>
    )
}

export default Footer;