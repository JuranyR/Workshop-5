import { React, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../images/icon-pizza.png";
import user from "../../images/icon-user.svg";
import lock from "../../images/icon-lock.svg";
import { Link } from "react-router-dom";
import { getUssers } from "../../services/ussers";
import { patchUsser } from "../../services/ussers";
import Swal from "sweetalert2";

const ChangePassword = () => {
  //////////////////////USE FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /////////////FUNCIÓN PARA ENVIAR FORMULARIO
  const onSubmit = async (data) => {
    const usersLogin = await getUssers();
    /////////////FILTRO PARA BUSCAR EL OBJETO USUARIO CON EL USER
    const user = usersLogin.filter(
      (uniqueUser) => uniqueUser.usser === data.usser
    );
    if (user.length) {
      patchUsser(user);
      console.log(data);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Este usuario no existe!",
      });
    }
  };

  ///////////////////ERROR USUARIO NO ENCONTRADO
  const [errorUserNoFound, setErrorUserNoFound] = useState({
    status: false,
    message: "",
  });
  return (
    <main className="main-form">
      <aside className="logo-container">
        <figure>
          <img className="logo-container__img" src={logo} alt="Pizza logo" />
        </figure>
        <h1 className="logo-container__title">PiSassScript</h1>
      </aside>
      <section className="form-container">
        <h2 className="form-container__title">Restaura tu contraseña</h2>
        <p className="form-container__text">
          Disfruta de la mejor pizza creada para las personas amantes del
          Código.
        </p>

        {/* FORMULARIOO */}
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <img
              className="input-container__img"
              src={user}
              alt="Usuario icon"
            />
            <input
              className="input-container__input"
              type="text"
              placeholder="Ingresa tu usuario"
              {...register("usser", {
                required: true,
              })}
            />
          </div>
          {errors.usser && <p className="error">Este campo es obligatorio!</p>}
          <div className="input-container">
            <img
              className="input-container__img"
              src={lock}
              alt="Candado icon"
            />
            <input
              className="input-container__input"
              type="password"
              placeholder="Ingresa tu nueva contraseña"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          {errors.password && (
            <p className="error">Este campo es obligatorio!</p>
          )}
          <button className="submit-button" type="submit">
            Restaurar contraseña
          </button>
          {errorUserNoFound.status ? (
            <p className="error-no-found ">{errorUserNoFound.message}</p>
          ) : (
            <></>
          )}
        </form>
        {/* ////////////////////////////////////////////////////////// */}

        <footer className="footer-form">
          <div className="register-container">
            <p className="register-container__text">¿No tienes una cuenta?</p>
            <Link to="/createUser" className="register-container__link">
              Regístrate aquí
            </Link>
          </div>
        </footer>
      </section>
    </main>
  );
};

export default ChangePassword;
