import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/homePage";
import SearchPage from "./components/SearchPage/searchPage";
import ContextProvider from "./Context/context";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
