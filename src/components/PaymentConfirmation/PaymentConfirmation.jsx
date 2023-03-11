import LottieAnimation from '../lottieAnimation/LottieAnimation';
import { Link } from 'react-router-dom';

const PaymentConfirmation = () => {

    return (
        <section className="paymentConfirmation">
            <div className="paymentConfirmation_div1">
                <LottieAnimation play={true} />
                <h1>Tu pedido está en proceso</h1>
                <p>Serás notificado cuando llegue el repartidor.</p>                
            </div>
            <div className='button_container'>
                <Link to="/"><button>Aceptar</button></Link>
                </div>
        </section>
    )
}

export default PaymentConfirmation