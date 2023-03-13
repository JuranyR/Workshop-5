import React, { useContext } from "react";
import { Context } from "../../Context/context.jsx";
import { Link } from "react-router-dom";

const UserModal = ({ setShowModal, showModal }) => {
  const { user } = useContext(Context);
  function hiddenModal() {
    setShowModal(!showModal);
  }
  return (
    <>
      <div className="transparent-background "></div>
      <aside className="modal">
        <figure className="close-icon__container">
          <span
            onClick={hiddenModal}
            className="material-symbols-outlined close-icon"
          >
            close
          </span>
        </figure>
        <div className="img-text__container">
          <figure className="figure-modal">
            <img
              className="img-modal"
              src={user.profile_image}
              alt="user-img"
            />
          </figure>
          <p className="text-modal">
            ¿Ya te vas <span className="user-name">{user.usser}</span>?
          </p>
        </div>
        <div className="text-button__container">
          <p className="back-again-text">¡Vuelve pronto!</p>
          <Link to="/" className="close-session-button">
            Cerrar sesión
          </Link>
        </div>
      </aside>
    </>
  );
};

export default UserModal;
