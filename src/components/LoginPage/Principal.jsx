import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/icon-pizza.png";

const Principal = () => {
  return (
    <main className="main-form-principal">
      <aside className="logo-container">
        <figure>
          <img className="logo-container__img" src={logo} alt="Pizza logo" />
        </figure>
        <h1 className="logo-container__title">PiSassScript</h1>
      </aside>
      <section className="form-container">
        <h2 className="form-container__title">¿Programarás hasta muy tarde?</h2>
        <p className="form-container__text">
          Alimenta tus ganas de seguir escribiendo código hasta altas horas de
          la noche y ordena una pizza ahora mismo.
        </p>
        <div className="buttons-section">
          <div className="button-containers">
            <figure className="button-containers__figure">
              <img
                className="button-containers__img"
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="google icon"
              />
            </figure>
            <Link to="/login" className="button-containers__text link">
              Iniciar con Google
            </Link>
          </div>
          <div className="button-containers">
            <figure className="button-containers__figure">
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                alt="facebook icon"
                className="button-containers__img"
              />
            </figure>
            <p className="button-containers__text">Iniciar con Facebook</p>
          </div>
          <div className="button-containers">
            <figure className="button-containers__figure">
              <img
                src="https://icon2.cleanpng.com/20171220/bxe/gmail-logo-png-5a3aaffc62d223.8975386515137955804048.jpg"
                alt="email icon"
                className="button-containers__img"
              />
            </figure>
            <p className="button-containers__text">Iniciar con Email</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Principal;
