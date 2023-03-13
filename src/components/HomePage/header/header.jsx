import React, { useContext, useState } from "react";
import { Context } from "../../../Context/context";
import UserModal from "../../userModal/UserModal";

const Header = () => {
  const { user } = useContext(Context);
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }
  return (
    <section className="header">
      <div>
        <h1>Home</h1>
        <p>¡Qué bueno verte {user.usser}!</p>
      </div>
      <figure className="header-figure" onClick={toggleModal}>
        <img className="header-img" src={user.profile_image} alt="user" />
      </figure>
      {showModal ? (
        <UserModal setShowModal={setShowModal} showModal={showModal} />
      ) : (
        <></>
      )}
    </section>
  );
};

export default Header;
