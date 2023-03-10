import React from "react";
import search from "../../../images/search.svg";
import searchRed from "../../../images/search-red.svg";
import home from "../../../images/home.svg";
import homeRed from "../../../images/home-red.svg";
import store from '../../../images/basket.svg'
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => { 
    const location = useLocation();

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
                <figure className="left">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "selected link-footer" : "link-footer"
                      }
                    >
                        {
                            location.pathname === '/' ?
                                <img src={homeRed} alt="icon" />
                            :
                                <img src={home} alt="icon" />
                        }
                        
                        Home
                    </NavLink>
                </figure>
                <figure className="right">
                    <NavLink
                        to="/search"
                        className={({ isActive }) =>
                            isActive ? "selected link-footer" : "link-footer"
                        }
                        >
                        {
                            location.pathname === '/search' ?
                                <img src={searchRed} alt="icon" />
                            :
                                <img src={search} alt="icon"></img>
                        }
                        Buscar
                    </NavLink>
                </figure>
            </footer>
        </>
    )
}

export default Footer;