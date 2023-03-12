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
    },[inputSearch])

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
                            <Carousel className="carousel" showArrows={false} showThumbs={false} showStatus={false}>
                                <div className="item-carousel">
                                    <img src={pizza.images.one} />
                                    <NavLink
                                        key={index}
                                        to={`/pizza/${pizza.id}`}
                                    >
                                        <div className="description">
                                            <p><b>{pizza.name}</b></p>
                                            <span className="price"><b>${pizza.price}</b> MXN</span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="item-carousel">
                                    <img src={pizza.images.two} />
                                    <NavLink
                                        key={index}
                                        to={`/pizza/${pizza.id}`}
                                    >
                                        <div className="description">
                                            <p><b>{pizza.name}</b></p>
                                            <span className="price"><b>${pizza.price}</b> MXN</span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="item-carousel">
                                    <img src={pizza.images.three} />
                                    <NavLink
                                        key={index}
                                        to={`/pizza/${pizza.id}`}
                                    >
                                        <div className="description">
                                            <p><b>{pizza.name}</b></p>
                                            <span className="price"><b>${pizza.price}</b> MXN</span>
                                        </div>
                                    </NavLink>
                                </div>
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