import React, {useState, useEffect} from "react";
import pizza from '../../images/pizza.svg';
import search from '../../images/search.svg';
import { getSearchPizza } from "../../services/pizzas";
import Header from "../HomePage/header/header";
import Footer from "./Footer/footer";
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";

const SearchPage = () => { 
    const [pizzas,setPizzas]= useState([])
    const [inputSearch,setInputSearh]= useState('')

    const sendData= (e)  => {
        e.preventDefault()
        console.log(e)
        getSearchPizza(inputSearch).then(pizzas=>{
            setPizzas(pizzas)
        })
    }

    useEffect(()=>{
        if(inputSearch===''){
            setPizzas([])
        }
    }, [inputSearch])
    
    //Function to format the price
    const formatPriceCard = (price) => price.toLocaleString("es-ES", { style: "decimal", minimumFractionDigits: 0, });

    return(
        <section className="search-page">
            <Header />
            <form className="search">
                <input type="search" placeholder="Pizza de peperoni,mexicana..." onChange={(e)=>setInputSearh(e.target.value)} />
                <button type="submit" onClick={(e)=>sendData(e)}>
                    <img src={search} alt="icon"/>
                </button>
            </form>
            <div className="body">
                {pizzas.length>0 ?
                        pizzas.map((pizza, index)=>(
                            <Carousel className="carousel" showArrows={false} showThumbs={false} showStatus={false} key={index}>
                                <NavLink
                                        to={`/pizza/${pizza.id}`}
                                >
                                    <div className="item-carousel">
                                        <img src={pizza.images.one} className="carrousel_pics"/>
                                        <div className="description">
                                            <p><b>{pizza.name}</b></p>
                                            <span className="price"><b>${formatPriceCard(pizza.price)}</b> COP</span>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink
                                        to={`/pizza/${pizza.id}`}
                                >
                                    <div className="item-carousel">
                                        <img src={pizza.images.two} className="carrousel_pics"/>
                                        <div className="description">
                                            <p><b>{pizza.name}</b></p>
                                            <span className="price"><b>${formatPriceCard(pizza.price)}</b> COP</span>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink
                                        to={`/pizza/${pizza.id}`}
                                >
                                    <div className="item-carousel">
                                        <img src={pizza.images.three} className="carrousel_pics"/>
                                        <div className="description">
                                            <p><b>{pizza.name}</b></p>
                                            <span className="price"><b>${formatPriceCard(pizza.price)}</b> COP</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </Carousel>
                        ))
                    :
                        <div className="text-body">
                            <img src={pizza} alt="pizza"/>
                            <p>Busca la pizza que más te gusta</p>
                        </div>
                }
            </div>
            <Footer/>
        </section>
    )
}

export default SearchPage;