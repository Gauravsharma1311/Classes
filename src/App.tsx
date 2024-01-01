import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ContactUs from './Components/Contact-Us';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContactUs/>}></Route>
        <Route path='home' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
