import React from "react";
import 'animate.css';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react'; 
import { NavLink, useParams } from "react-router-dom";
import { getPizza } from "../../services/pizzas";
import { getUser } from "../../services/ussers";
import arrow from "../../images/arrow_left.png"
import star from "../../images/icon_estrella.png"
import star_orange from "../../images/icon_estrella_orange.png"
import shopping_basket from "../../images/icon_shopping_basket.png"

const CarShoppingPage = () => { 

    const { idPizza } = useParams();
    const [pizza, setPizza] = useState(null);
    const [photo, setPhoto] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [amount, setAmount] = useState(1);

    //Function to obtain from the API the object that matches the idPizza
    const getPizzaAPI = async () => {
        const result = await getPizza(idPizza);
        setPizza(result);
        setPhoto(result.images.one);
        getUserImg(result.reviews[0].user);
        createArrayStars();
    }

    //Function to obtain the profile image of the user who made the review
    const getUserImg = async (userReview) => {
        const response = await getUser(userReview);
        setProfilePhoto(response[0].profile_image);
    }

    useEffect(() => {
        if (idPizza) {
            getPizzaAPI();
        }
    }, [])
    
    //Function to change the displayed pizza image
    const handlePizzaPhoto = (e) => {
        const value = e.currentTarget.getAttribute("value");
        console.log(value)
        setPhoto(value);
    }
    
    //Funtion to create array Stars 
    const createArrayStars = (stars) => {
        const starArray = []; 
        for (let i = 0; i < stars; i++) {
            starArray.push(
                <figure key={i}>
                    <img src={star_orange} alt="Icono estrella" />
                </figure>
            );
        }
        return starArray
    }

    //Function to decrease the amount of pizza
    const handleDecrease = () => {
        if (amount>1) {
            setAmount(amount-1)
        }
    }

    //Function to increase the amount of pizza
    const handleIncrease = () => {
        setAmount(amount+1)
    }

    //Function to format the price
    const formatPrice = (price) => price.toLocaleString('es-ES', { style: 'decimal', minimumFractionDigits: 0 });

    //Function to format review's date
    const formatDate = (date) => {
        const now = DateTime.local();
        const fechaObjetivo = DateTime.fromFormat(date, 'dd/MM/yyyy');
        const diffDias = Math.floor(now.diff(fechaObjetivo, 'days').toObject().days);
        const textoDias = `${Math.abs(diffDias)}d ago`;
        return textoDias
    }

    return(
        <section className="shopping_page">
            <div className="shopping_page_modal">
                <div className="shopping_page_modal_div1" style={{backgroundImage: `url(${photo})`}} >
                    <div className="img_tittle">
                        <NavLink to='/'><i><img src={arrow} alt="Icono flecha izquierda" /></i></NavLink>
                        <h2>Todas las Pizzas</h2>
                    </div>
                    <div className="point_container">
                        {pizza ? Object.keys(pizza.images).map((propiedad) => (
                            <div key = { propiedad } className = "point" style={{ backgroundColor: photo === pizza.images[propiedad] ? "#ffffff" : "#8f8f8f" }} value = { pizza.images[propiedad]} onClick={(e) => handlePizzaPhoto(e)}></div>
                        )) : ''}
                    </div>
                </div>
                <div className="shopping_page_modal_div2">
                    <section className="top">
                        <h1>{pizza?.name}</h1>
                        <div className="price_reviews">
                            <div className="price_reviews_div1"><span>$ {pizza ? formatPrice(pizza.price) : ''}<>&nbsp;</></span>COP</div>
                            <div className="price_reviews_div2">
                                <i><img src={star} alt="Icono de estrella" /></i>
                                <p><>&nbsp;</>{pizza?.reviews.length} { pizza?.reviews.length >1 ?  'Reviews' : 'Review'}</p>
                            </div>
                        </div>
                        <h3>Descripción</h3>
                        <p className="description">{pizza?.description}</p>
                        <section className="review">
                            <figure><img src={profilePhoto ? profilePhoto : ''} alt="Imagen de perfil usuario del review" className="figure_user_review"/></figure>
                            <div className="review_div" >
                                <div className="review_name_date">
                                    <p>{pizza?.reviews[0].user}</p>
                                    <span>{pizza ? formatDate(pizza?.reviews[0].date) : ''}</span>
                                </div>
                                <div className="review_stars">
                                    { pizza ? createArrayStars(pizza.reviews[0].stars) : ''}
                                </div>
                                <p>{pizza?.reviews[0].review}.</p>
                            </div>
                        </section>
                    </section>
                    <section className="car">
                        <button className="car_add_reduce" onClick={handleDecrease}>-</button>
                        <span>{amount}</span>
                        <button className="car_add_reduce" onClick={handleIncrease}>+</button>
                        <div>
                            <NavLink to='/form'><button className="car_shopping_basket"><img src={shopping_basket} alt="Icono cesta de compra" /></button></NavLink>
                            <NavLink to='/form'><button className="car_order">Ordenar</button></NavLink>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default CarShoppingPage;