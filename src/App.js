import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/homePage";
import ContextProvider from "./Context/context";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
