import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/homePage";
import SearchPage from "./components/SearchPage/searchPage";
import LoginPage from "./components/LoginPage/loginPage";
import ContextProvider from "./Context/context";
import CarShoppingPage from "./components/CarShoppingPage/carShoppingPage";
import PurchaseForm from "./components/PurchaseForm/purchaseForm";
import EditPassword from "./components/LoginPage/EditPassword";
import Register from "./components/LoginPage/Register";
import PaymentConfirmation from "./components/PaymentConfirmation/PaymentConfirmation";
import RoutePrivate from "./RoutePrivate";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <RoutePrivate>
          <Routes>
            <Route path="/search" element={<SearchPage />} />
            <Route index element={<LoginPage />} />
            <Route path="/pizza/:idPizza" element={<CarShoppingPage />} />
            <Route path="/form" element={<PurchaseForm />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/editPassword" element={<EditPassword />} />
            <Route
              path="/paymentConfirmation"
              element={<PaymentConfirmation />}
            />
          </Routes>
        </RoutePrivate>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
