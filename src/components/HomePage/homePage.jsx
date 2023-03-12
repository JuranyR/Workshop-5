import React, { useEffect, useState } from "react";
import Header from "./header/header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import Footer from "../SearchPage/Footer/footer";
import { getPizzas } from "../../services/pizzas";
import { NavLink } from "react-router-dom";

const HomePage = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        getPizzas().then((data) => {
        setPizzas(data);
        });
    }, []);
    
    //Function to format the price
    const formatPriceCard = (price) => price.toLocaleString("es-ES", { style: "decimal", minimumFractionDigits: 0, });

    return(
        <section className="home-page">
            <Header />
            <div className="title">
                <span><b>Pizzas disponibles</b></span>
                <a>Ver todas</a>
            </div>
            <div className="body">
                <Carousel centerSlidePercentage={60} showIndicators={false} centerMode showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={false}>
                    <div className="offer">
                        <p>Cupón para Frontends</p>
                        <h1><b>45% OFF</b></h1>
                    </div>
                    <div className="offer">
                        <p>Cupón para css</p>
                        <h1><b>25% OFF</b></h1>
                    </div>
                </Carousel>
                {
                    pizzas.map((pizza, index)=>(
                        <Carousel className="carousel" showArrows={false} showThumbs={false} showStatus={false} key={index}>
                            <NavLink
                                to={`/pizza/${pizza.id}`}
                                state={pizza}
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
                                state={pizza}
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
                                state={pizza}
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
                }
            </div>
            <Footer />
        </section>
    )
}

export default HomePage;