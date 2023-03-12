import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/homePage";
import SearchPage from "./components/SearchPage/searchPage";
import LoginPage from "./components/LoginPage/loginPage";
import ContextProvider from "./Context/context";
import CarShoppingPage from "./components/CarShoppingPage/carShoppingPage";
import PurchaseForm from "./components/PurchaseForm/purchaseForm";
import EditPassword from "./components/LoginPage/EditPassword";
import Register from "./components/LoginPage/Register";
import Principal from "./components/LoginPage/Principal";
import PaymentConfirmation from "./components/PaymentConfirmation/PaymentConfirmation";
import RoutePrivate from "./RoutePrivate";


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
          <Route
            path="/home"
            element={
              <RoutePrivate>
                <HomePage />
              </RoutePrivate>
            }
          />
          {/* <Route path="/home" element={<HomePage />} /> */}
          <Route index element={<Principal />} />
          <Route path="/register" element={<Register />} />
          <Route path="/editPassword" element={<EditPassword />} />
          <Route path="/paymentConfirmation" element={<PaymentConfirmation />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
