import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import arrow_fucsia from "../../images/arrow_left_fucsia.png"
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading'

const PurchaseForm = () => {

    const cart = useLocation();
    const [pizzaBuy, setPizzaBuy] = useState(null);
    const [cant, setCant] = useState();

    useEffect(() => {
        setPizzaBuy(cart.state.obj_pizza);
        setCant(cart.state.amount_pizza);
        console.log(cart.state.obj_pizza);
    }, [])
    
    //Function to format the price
    const formatPrice = (price) => price.toLocaleString('es-ES', { style: 'decimal', minimumFractionDigits: 0 });

    return (
        <section className="paymentForm_container">
            {pizzaBuy ?  
                <section className="paymentForm_modal">
                    <div className="paymentForm_modal_header">
                        <i><img src={arrow_fucsia} alt="icono de flecha izquierda" /></i>
                        <h2>Carrito de compras</h2>
                    </div>
                    <div className="paymentForm_modal_pizzaCard">
                        <figure><img src={pizzaBuy.images.one} alt="pizza image" /></figure>
                        <div className="paymentForm_modal_pizzaCard_div1">
                            <p className="paymentForm_modal_pizzaCard_tittle">{pizzaBuy.name}</p>
                            <div className="paymentForm_modal_pizzaCard_cyp">
                                <p>x{cant}</p>
                                <p>${formatPrice(pizzaBuy.price)}</p>
                            </div>
                        </div>
                    </div>
                    <h1>Información de pago</h1>
                    <form className="paymentForm_form">
                        <label>Nombre completo</label>
                        <input type="text" placeholder="Ingresa tu nombre" />
                        <label>Número de Tarjeta de Crédito</label>
                        <input type="number" placeholder="1234 1234 1234 1234" />
                        <div className="paymentForm_form_div1">
                            <div className="paymentForm_form_div2">
                                <label>Fecha de vencimiento</label>
                                <input type="number" placeholder="MM/YY" />
                            </div>
                            <div className="paymentForm_form_div2">
                                <label>CW</label>
                                <input type="number" />
                            </div>    
                        </div>
                        <label>Dirección</label>
                        <input type="text" placeholder="Av.morelos #123" />
                        <button type="submit">Pagar Ahora</button>
                    </form>
                </section>
            : <UseAnimations animation={loading} size={90}/>}
        </section >
        
    )
}

export default PurchaseForm