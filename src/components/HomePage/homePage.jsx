import React from "react";
import Header from "./header/header";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.css'
import Footer from "../SearchPage/Footer/footer";

const HomePage = () => { 

    return(
        <section className="home-page">
            <Header />
            <div className="title">
                <span><b>Pizzas disponibles</b></span>
                <a>Ver todas</a>
            </div>
            <div className="body">
                <Carousel className="carousel" showArrows={true} showThumbs={false} showStatus={false}>
                    <div className="item-carousel">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.XXLN3abrSIN9wcatgp1-xwHaE6&pid=Api&P=0" />
                        <div className="description">
                            <p><b>Pizza super espacia para Frontends</b></p>
                            <span className="price"><b>$99</b> MXN</span>
                        </div>
                    </div>
                    <div>
                        <img src="assets/2.jpeg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="assets/3.jpeg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
                <Carousel className="carousel" showArrows={true} showThumbs={false} showStatus={false}>
                    <div className="item-carousel">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.XXLN3abrSIN9wcatgp1-xwHaE6&pid=Api&P=0" />
                        <div className="description">
                            <p><b>Pizza super espacia para Frontends</b></p>
                            <span className="price"><b>$99</b> MXN</span>
                        </div>
                    </div>
                    <div>
                        <img src="assets/2.jpeg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="assets/3.jpeg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
            <Footer />
        </section>
    )
}

export default HomePage;