import { React, useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import logo from "../../images/icon-pizza.png";
import user from "../../images/icon-user.svg";
import lock from "../../images/icon-lock.svg";
import { getLoginUsser, getUssers } from "../../services/ussers";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from '../../Context/context';

const LoginPage = () => {
  const  {setUser} = useContext(Context);
  const navigate = useNavigate();
  //////////////////////USE FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  ///////////////////ERROR USUARIO NO ENCONTRADO
  const [errorUserNoFound, setErrorUserNoFound] = useState({
    status: false,
    message: "",
  });
  ///////////////////FUNCIÓN PARA ENVIAR FORMULARIO
  const onSubmit = async (data) => {
    // console.log(data);
    const responseLogin = await getLoginUsser(data.usser, data.password);
    if (!responseLogin.length) {
      setErrorUserNoFound({
        status: true,
        message: "Usuario o contraseña incorrectos!",
      });
    } else {
      setUser(responseLogin[0])
      navigate("/");
    }
  };

  //////////////////FUNCIÓN PARA OBTENER LOS USUARIOS DE LA API
  const getData = async () => {
    const response = await getUssers();
    console.log(response);
  };

  ///////////////////LLAMAR LA FUNCIÓN QUE OBTIENE LOS USUARIOS
  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="main-form">
      <aside className="logo-container">
        <figure>
          <img className="logo-container__img" src={logo} alt="Pizza logo" />
        </figure>
        <h1 className="logo-container__title">PiSassScript</h1>
      </aside>
      <section className="form-container">
        <h2 className="form-container__title">Inicia sesión en tu cuenta</h2>
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
              placeholder="Usuario"
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
              placeholder="Contraseña"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          {errors.password && (
            <p className="error">Este campo es obligatorio!</p>
          )}
          <button className="submit-button" type="submit">
            Iniciar sesión
          </button>
          {errorUserNoFound.status ? (
            <p className="error-no-found ">{errorUserNoFound.message}</p>
          ) : (
            <></>
          )}
        </form>
        {/* ////////////////////////////////////////////////////////// */}

        <footer className="footer-form">
          <Link to="/editPassword" className="restablecer-container__link">
            Restablecer contraseña
          </Link>
          <div className="register-container">
            <p className="register-container__text">¿No tienes una cuenta?</p>
            <Link to="/register" className="register-container__link">
              Regístrate aquí
            </Link>
          </div>
        </footer>
      </section>
    </main>
  );
};

export default LoginPage;
