import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/homePage";
import SearchPage from "./components/SearchPage/searchPage";
// import ChangePassword from "./components/LoginPage/ChangePassword";
// import CreateUser from "./components/LoginPage/CreateUser";
import LoginPage from "./components/LoginPage/loginPage";
import ContextProvider from "./Context/context";
import CarShoppingPage from "./components/CarShoppingPage/carShoppingPage";
import PurchaseForm from "./components/PurchaseForm/purchaseForm";
import EditPassword from "./components/LoginPage/EditPassword";
import Register from "./components/LoginPage/Register";
// import LoginPage from "./components/LoginPage/loginPage";
// import ContextProvider from "./Context/context";
// import CarShoppingPage from "./components/CarShoppingPage/carShoppingPage";
import Principal from "./components/LoginPage/Principal";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pizza/:idPizza" element={<CarShoppingPage />} />
          <Route path="/form" element={<PurchaseForm />} />

          <Route path="/" element={<HomePage />} />
          <Route path="loginPrincipal" element={<Principal />} />
          <Route path="/register" element={<Register />} />
          <Route path="/editPassword" element={<EditPassword />} />
          <Route path="/car" element={<CarShoppingPage />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
