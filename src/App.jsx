import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/homePage";
import ChangePassword from "./components/LoginPage/ChangePassword";
import CreateUser from "./components/LoginPage/CreateUser";
import LoginPage from "./components/LoginPage/loginPage";
import ContextProvider from "./Context/context";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/changePassword" element={<ChangePassword />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
