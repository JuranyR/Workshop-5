import React from "react";
import pizza from '../../images/pizza.svg';
import search from '../../images/search.svg';
import Header from "../HomePage/header/header";
import Footer from "./Footer/footer";

const SearchPage = () => { 
    return(
        <section className="search-page">
            <Header />
            <form className="search">
                <input type="search" placeholder="Pizza de peperoni,mexicana..." />
                <button type="submit">
                    <img src={search} alt="icon"/>
                </button>
            </form>
            <div className="text-body">
                <img src={pizza} alt="pizza"/>
                <p>Busca la pizza que más te gusta</p>
            </div>
            <Footer/>
        </section>
    )
}

export default SearchPage;