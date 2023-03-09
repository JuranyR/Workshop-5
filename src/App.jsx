import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/homePage";
import SearchPage from "./components/SearchPage/searchPage";
import ChangePassword from "./components/LoginPage/ChangePassword";
import CreateUser from "./components/LoginPage/CreateUser";
import LoginPage from "./components/LoginPage/loginPage";
import ContextProvider from "./Context/context";
import CarShoppingPage from "./components/CarShoppingPage/carShoppingPage"

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/createUser" element={<CreateUser />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/car" element={<CarShoppingPage />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
