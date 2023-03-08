import React from "react";
import { useEffect, useState } from 'react'; 
import { NavLink } from "react-router-dom";
import { getPizzas } from "../../services/pizzas";
import arrow from "../../images/arrow_left.png"
import star from "../../images/icon_estrella.png"
import star_orange from "../../images/icon_estrella_orange.png"
import shopping_basket from "../../images/icon_shopping_basket.png"

const CarShoppingPage = () => { 

    const result = async () => {
        const result = await getPizzas()
    }

    useEffect = (() => {
        result()
    }, [])

    const pizzas = {
        one: "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg",
        two: "https://www.olivetto.com.co/wp-content/uploads/PizzaItalianaClasica-ImagenDestacada-1200x1800.jpg",
        three: "https://d1uz88p17r663j.cloudfront.net/original/c12a2adac7029d9c7435aa850082e09a_37_pizzacorazon.jpg"
    }

    const [photo, setPhoto] = useState(pizzas.one)

    const handlePizzaPhoto = (e) => {
        console.log('hice click');
        const value = e.currentTarget.getAttribute("value");
        console.log(value);
        setPhoto(value);
    }

    return(
        <section className="shopping_page">
            <div className="shopping_page_modal">
                <div className="shopping_page_modal_div1" style={{backgroundImage: `url(${photo})`}}>
                    <div className="img_tittle">
                        <i><img src={arrow} alt="Icono flecha izquierda" /></i>
                        <h2>Todas las Pizzas</h2>
                    </div>
                    <div className="point_container">
                        {Object.keys(pizzas).map((propiedad) => (
                            <div key = { propiedad } className = "point" style={{ backgroundColor: photo === pizzas[propiedad] ? "#ffffff" : "#8f8f8f" }} value = { pizzas[propiedad]} onClick={(e) => handlePizzaPhoto(e)}></div>
                        ))}
                    </div>
                </div>
                <div className="shopping_page_modal_div2">
                    <section className="top">
                        <h1>Master CSS Pizza</h1>
                        <div className="price_reviews">
                            <div className="price_reviews_div1"><span>$ 89<>&nbsp;</></span>MXN</div>
                            <div className="price_reviews_div2">
                                <i><img src={star} alt="Icono de estrella" /></i>
                                <p><>&nbsp;</>445 Reviews</p>
                            </div>
                        </div>
                        <h3>Descripción</h3>
                        <p className="description">Deliciosa Pizza clásica, con orilla de pan esponjoso. Es un manjar, si estas a punto de enviar cambios a producción un viernes, necesitaras una de ellas.</p>
                        <section className="review">
                            <figure><img src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg" alt="Imagen de perfil usuario del review" className="figure_user_review"/></figure>
                            <div >
                                <div className="review_name_date">
                                    <p>Marcos Toledo</p>
                                    <span>4d ago</span>
                                </div>
                                <div className="review_stars">
                                    <figure><img src={star_orange} alt="Icono estrella" /></figure>
                                    <figure><img src={star_orange} alt="Icono estrella" /></figure>
                                    <figure><img src={star_orange} alt="Icono estrella" /></figure>
                                </div>
                                <p>De las mejores pizzas que he probado, recomendada.</p>
                            </div>
                        </section>
                    </section>
                    <section className="car">
                        <button className="car_add_reduce">-</button>
                        <span>1</span>
                        <button className="car_add_reduce">+</button>
                        <div>
                            <button className="car_shopping_basket"><img src={shopping_basket} alt="Icono cesta de compra" /></button>
                            <button className="car_order">Ordenar</button>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default CarShoppingPage;