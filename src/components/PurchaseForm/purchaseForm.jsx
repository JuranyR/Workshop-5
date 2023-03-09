import arrow_fucsia from "../../images/arrow_left_fucsia.png"

const PurchaseForm = () => {

    return (
        <section className="paymentForm_container">
            <section className="paymentForm_modal">
                <div className="paymentForm_modal_header">
                    <i><img src={arrow_fucsia} alt="icono de flecha izquierda" /></i>
                    <h2>Carrito de compras</h2>
                </div>
                <div className="paymentForm_modal_pizzaCard">
                    <figure><img src="https://www.semana.com/resizer/K9XrOklr-quL_vUjZXFes67E2oA=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/V65H6NID3FBLVGRHYB7J2OFROE.jpg" alt="" /></figure>
                    <div className="paymentForm_modal_pizzaCard_div1">
                        <p className="paymentForm_modal_pizzaCard_tittle">Master CSS Pizza</p>
                        <div className="paymentForm_modal_pizzaCard_cyp">
                            <p>x2</p>
                            <p>$178</p>
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
        </section>
    )
}

export default PurchaseForm