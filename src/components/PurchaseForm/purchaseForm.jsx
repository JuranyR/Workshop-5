import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import arrow_fucsia from "../../images/arrow_left_fucsia.png";
import { useForm } from "react-hook-form";
import { Context } from "../../Context/context";
import { DateTime } from "luxon";
import { postOrder } from "../../services/orders";
import Swal from 'sweetalert2'

const PurchaseForm = () => {
    const cart = useLocation();
    const navigate = useNavigate();
    const { user } = useContext(Context);
    const [pizzaBuy, setPizzaBuy] = useState(null);
    const [cant, setCant] = useState();
    const {
        register,
        handleSubmit,
        watch,
        maxLength,
        formState: { errors },
    } = useForm({
        defaultValues: {
        TC: "",
        ED: "",
        },
    });

    useEffect(() => {
        if (cart.state) {
        setPizzaBuy(cart.state.obj_pizza);
        setCant(cart.state.amount_pizza);
        }
    }, []);

    //Function to return user to the previous page
    const handleFormBack = () => {
        window.history.go(-1);
    }

    //Function to format the price
    const formatPrice = (price) =>
        price.toLocaleString("es-ES", {
        style: "decimal",
        minimumFractionDigits: 0,
        });

    //Format the credit card number
    const formattedTC = watch("TC")
        .replace(/\D/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();

    //Format de expiration date
    const formattedED = watch("ED")
        .replace(/\D/g, "")
        .replace(/^(\d{2})\/?(\d{0,2})/, (_, a, b) => a + (b ? `/${b}` : ""))
        .trim();
    
    //Function to validate complete name
    const validateName = (value) => {
        if (value.split(' ').length <= 1) {
            return 'El nombre completo es requerido'
        }
        return true
    }
    
    //Function to validate TC number
    const validateTC = (value) => {
        if (value.length < 18) {
            return 'Número de TC no puede ser menor a 15 dígitos'
        }
        return true
    }
    
    //Function to validate expiration date
    const validateED = (value) => {
        const dateComplete = `01/${value}`
        const parsedDate = DateTime.fromFormat( dateComplete, "dd/MM/yy");// Parseamos la fecha con Luxon
        const yearActual = DateTime.local().toFormat("yyyy"); // Obtenemos el año actual con Luxon
        const monthActual = DateTime.local().toFormat("MM"); // Obtenemos el año actual con Luxon
        if (value.length < 5) {
            return 'Fecha de vencieminto incompleta.'
        }
        if ( !parsedDate.month || !parsedDate.year) { 
            return 'Fecha invalida.'
        }
        if (parsedDate.year < yearActual) {
            return 'TC vencida.'
        }
        if (parsedDate.year == yearActual && parsedDate.month < monthActual) {
            return 'TC vencida.'
        }
        return true
    }

    //Function to validate CW
    const validateCW = (value) => {
        if (value.length < 3) {
            return 'Se requieren 3 dígitos.'
        }
        return true
    }

    //Function to generate an Alert
    const alertS = (message) => {
        Swal.fire({
            icon: 'error',
            iconColor: '#f63d5d',
            background: '#2b2b2b',
            color: '#ffffff',
            text: message,
        })
    }
    
    //Function on submit form
    const onSubmitPaymentForm = async (formData) => {
        const dataOrder = {
            ...formData, // Agregar los datos del formulario
            amount: cant, // Agregar la cantidad de pizzas
            pizza_id: pizzaBuy.id, // Agregar el id de la pizza comprada
            pizza_name: pizzaBuy.name, //Agregar el nombre de la pizza
            user_id: user.id, //Agregar id del usuaruo que realizó el pedido
            total_cost: pizzaBuy.price * cant, //Agregar el costo total del pedido
        };
        try {
            const status = await postOrder(dataOrder);
            if (status) {
                console.log('posteado');
                navigate("/paymentConfirmation");
            } else {
                console.log('no posteado');
                alertS('Lo sentimos, hubo un error al procesar tu pago. Por favor intenta de nuevo.')
            }
        } catch (error) {
            console.log(error);
            alertS('Lo sentimos, hubo un error al procesar tu pago. Por favor intenta de nuevo.')
        }
    };

    return (
        <section className="paymentForm_container">
        {pizzaBuy ? (
            <section className="paymentForm_modal">
            <div className="paymentForm_modal_header">
                <i>
                <img src={arrow_fucsia} alt="icono de flecha izquierda" onClick={handleFormBack}/>
                </i>
                <h2>Carrito de compras</h2>
            </div>
            <div className="paymentForm_modal_pizzaCard">
                <figure>
                <img src={pizzaBuy.images.one} alt="pizza image" />
                </figure>
                <div className="paymentForm_modal_pizzaCard_div1">
                <p className="paymentForm_modal_pizzaCard_tittle">
                    {pizzaBuy.name}
                </p>
                <div className="paymentForm_modal_pizzaCard_cyp">
                    <p>x{cant}</p>
                    <p>${formatPrice(pizzaBuy.price * cant)}</p>
                </div>
                </div>
            </div>
            <h1>Información de pago</h1>
            <form
                className="paymentForm_form"
                onSubmit={handleSubmit(onSubmitPaymentForm)}
            >
                <label>Nombre completo</label>
                <input
                type="text"
                placeholder="Ingresa tu nombre"
                {...register("name", { 
                    required: {
                        value: true,
                        message: 'El nombre es requerido.'
                    }, validate: validateName })}
                />
                { errors.name ? <span className="paymentForm_errors">{errors.name.message}</span> : <></>}
                <label>Número de Tarjeta de Crédito</label>
                <input
                type="text"
                maxLength="22"
                placeholder="1234 1234 1234 1234"
                {...register("TC", { required: {
                        value: true,
                        message: 'El número de TC es obligatorio.'
                    }, validate: validateTC })}
                value={formattedTC}
                />
                { errors.TC ? <span className="paymentForm_errors">{errors.TC.message}</span> : <></>}
                <div className="paymentForm_form_div1">
                <div className="paymentForm_form_div2">
                    <label>Fecha de vencimiento</label>
                    <input
                    type="text"
                    maxLength="5"
                    placeholder="MM/YY"
                    {...register("ED", { required: {
                        value: true,
                        message: 'La fecha de vencimiento es obligatoria.'
                    }, validate: validateED })}
                    value={formattedED}
                    />
                    { errors.ED ? <span className="paymentForm_errors">{errors.ED.message}</span> : <></>}
                </div>
                <div className="paymentForm_form_div2">
                    <label>CW</label>
                    <input
                    type="tel"
                    maxLength={3}
                    {...register("CW", { required: {
                        value: true,
                        message: 'El CW es obligatorio.'
                    }, validate: validateCW })}
                    />
                    { errors.CW ? <span className="paymentForm_errors">{errors.CW.message}</span> : <></>}
                </div>
                </div>
                <label>Dirección</label>
                <input
                type="text"
                placeholder="Av.morelos #123"
                {...register("direction", { required: {
                    value: true,
                    message: 'La dirección es obligatoria.'
                }})}
                />
                { errors.direction ? <span className="paymentForm_errors">{errors.direction.message}</span> : <></>}
                <button type="submit">Pagar Ahora</button>
            </form>
            </section>
        ) : (
            <div className="cartEmpty">No hay pizzas en tu carrito :c</div>
        )}
        </section>
    );
};

export default PurchaseForm;