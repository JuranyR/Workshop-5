import React from "react";
import 'animate.css';
import { DateTime } from 'luxon';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'; 
import { NavLink, useParams, Link, useNavigate } from "react-router-dom";
import { getPizza } from "../../services/pizzas";
import { getUser } from "../../services/ussers";
import arrow from "../../images/arrow_left.png"
import star from "../../images/icon_estrella.png"
import star_orange from "../../images/icon_estrella_orange.png"
import shopping_basket from "../../images/icon_shopping_basket.png"
import shopping_basket_full from "../../images/icon_shopping_basket_full.png"
// import shopping_basket from "../../images/basket_white.svg"

const CarShoppingPage = () => { 

    const { idPizza } = useParams();
    const [pizza, setPizza] = useState(null);
    const [photo, setPhoto] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [amount, setAmount] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [pizzaBasket, setPizzaBasket] = useState(null)
    const navigate = useNavigate();

    //Function to obtain from the API the object that matches the idPizza
    const getPizzaAPI = () => {
        try {
            getPizza(idPizza)
                .then(result => {
                    setPizza(result);
                    setPhoto(result.images.one);
                    getUserImg(result.reviews[0].user);
                    })
        } catch (error) {
            console.log(error)
        }
    }

    //Function to obtain the profile image of the user who made the review
    const getUserImg = (userReview) => {
        try {
            getUser(userReview)
                .then(response => {
                    setProfilePhoto(response[0].profile_image);
                    setIsLoading(false);
                })
        } catch (error) {
            console.log(error)
        }
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

    //Function to fill the shopping cart
    const handleBasket = () => {
        setPizzaBasket({
            obj_pizza: pizza,
            amount_pizza: amount
        })
    }

    //Function to validate the redirection to the payment page 
    const handleOrder = () => {
        if (pizzaBasket) {
            navigate("/form", { state: pizzaBasket });
        } else {
            Swal.fire({
                icon: 'error',
                iconColor: '#f63d5d',
                background: '#2b2b2b',
                color: '#ffffff',
                text: 'Agrega una pizza a tu carrito para ordenar.',
            })
        }
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

    return (         
        <section className="shopping_page">
            { isLoading ? <UseAnimations animation={loading} size={90}/>: 
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
                                <button className="car_shopping_basket" type="button" onClick={handleBasket}><img src={ pizzaBasket ? shopping_basket_full : shopping_basket} alt="Icono cesta de compra" /></button>
                                <button className="car_order" type="button" onClick={handleOrder}>Ordenar</button>
                            </div>
                        </section>
                    </div>
                </div>
            }
        </section>
    )
}

export default CarShoppingPage;