import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logo from "../../images/icon-pizza.png";
import { postUsser } from "../../services/ussers";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getUssers } from "../../services/ussers";

const CreateUser = () => {
  const navigate = useNavigate();
  //////////////////////USE FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  ////////////////FUNCIÓN PARA VALIDAR LA CONTRASEÑA
  const validatePassword = (passwordValue) => {
    if (!passwordValue.length) {
      return "Este campo es obligatorio!";
    } else if (passwordValue.length < 8) {
      return "La contraseña debe contener más de 8 caracteres";
    } else if (passwordValue.length > 19) {
      return "la contraseña debe contener menos de 16 caracteres";
    }
  };

  ////////////////////FUNCIÓN PARA VALIDAR QUE EL USUARIO SEA DIFERENTE DE UNO EXISTENTE
  const validateUser = async (userValue) => {
    if (!userValue.length) {
      return "Este campo es obligatorio!";
    } else {
      const usersLoginData = await getUssers();
      const users = [];
      usersLoginData.map((user) => users.push(user.usser));
      // console.log(users);
      users.map((findUser) => {
        if (findUser === userValue) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Este nombre de usuario ya está en uso!",
          });
        }
      });
    }
  };
  ///////////////////FUNCIÓN PARA ENVIAR FORMULARIO
  const onSubmit = async (data) => {
    //////////////VALIDACIÓN IGUALDAD DE CONTRASEÑAS
    if (data.password === data.password2) {
      console.log(data);
      /////////////////////LLAMAMOS LA FUNCIÓN QUE CREA UN NUEVO USUARIO
      postUsser({
        usser: data.usser,
        password: data.password,
        profile_image: data.profile_image,
      });
      Swal.fire("Perfecto!", "Usuario creado exitosamente!", "success");
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "las contraseñas no coinciden!",
      });
    }
  };

  return (
    <main className="main-form">
      <aside className="logo-container">
        <figure>
          <img className="logo-container__img" src={logo} alt="Pizza logo" />
        </figure>
        <h1 className="logo-container__title">PiSassScript</h1>
      </aside>
      <section className="form-container">
        <h2 className="form-container__title">Crea una nueva cuenta</h2>
        <p className="form-container__text">
          Disfruta de la mejor pizza creada para las personas amantes del
          Código.
        </p>

        {/* FORMULARIOO */}
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="container-inputs">
            <input
              className="input-container__input"
              type="text"
              placeholder="Ingresa un usuario"
              {...register("usser", {
                required: {
                  type: true,
                  message: "Este campo es obligatorio!",
                },
                validate: validateUser,
              })}
            />
          </div>
          {errors.usser && <p className="error">{errors.usser.message}</p>}
          <div className="container-inputs">
            <input
              className="input-container__input"
              type="url"
              placeholder="Ingresa la imagen de usuario"
              {...register("profile_image", {
                required: true,
              })}
            />
          </div>
          {errors.profile_image && (
            <p className="error">Este campo es obligatorio!</p>
          )}
          <div className="container-inputs">
            <input
              className="input-container__input"
              type="password"
              placeholder="Contraseña"
              {...register("password", {
                required: {
                  type: true,
                  message: "Este campo es obligatorio!",
                },
                validate: validatePassword,
              })}
            />
          </div>
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
          <div className="container-inputs">
            <input
              className="input-container__input"
              type="password"
              placeholder="Confirma la contraseña"
              {...register("password2", {
                required: true,
              })}
            />
          </div>
          {errors.password2 && (
            <p className="error">Este campo es obligatorio!</p>
          )}
          <button className="submit-button" type="submit">
            Crear cuenta
          </button>
        </form>
        {/* ////////////////////////////////////////////////////////// */}

        <footer className="footer-form">
          <div className="register-container">
            <p className="register-container__text">¿Ya tienes una cuenta?</p>
            <Link to="/" className="register-container__link">
              Inicia sesión
            </Link>
          </div>
        </footer>
      </section>
    </main>
  );
};

export default CreateUser;
