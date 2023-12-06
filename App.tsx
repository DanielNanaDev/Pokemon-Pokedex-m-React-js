import React from "react";

import Navbar from "./sections/Navbar";

import Wrapper from "./sections/Wrapper";

import Footer from "./sections/Footer";

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import "./scss/style.scss";

import Search from "./pages/search";
import Pokemon from "./pages/pokemon";
import MyList from "./pages/MyList";
import Compare from "./pages/compare";



function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
       <div className="app">
        <Navbar />
        <Routes>
  <Route element={<Search />} path="/Search" />
  <Route element={<MyList />} path="/list" />
  <Route element={<Compare />} path="/compare" />
  <Route element={<Pokemon />} path="/pokemon/:id" />
  <Route element={<Navigate to="/pokemon/1" />} path="*"/>
</Routes> 

       
        <Footer /> 
        
       </div>
      </BrowserRouter>
    </div>

  );
}

export default App
