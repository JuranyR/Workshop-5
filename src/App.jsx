import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/homePage";
import ContextProvider from "./Context/context";
import CarShoppingPage from "./components/CarShoppingPage/carShoppingPage"

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car" element={<CarShoppingPage />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
