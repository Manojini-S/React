import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Fragment } from 'react';
import React from 'react';
import Button from './Components/Button';
import Form from './Components/Form';
import Ustate from './Pages/Ustate';
import Color from './Pages/Color';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Note from './Pages/Note';
import About from './Pages/About';

function App() {
  return (
    <div>
       <Routes>
          <Route path='/' element ={<Home />} />
          <Route path='/Note' element ={<Note />} />
          <Route path='/About' element ={<About />} />
          <Route path='/Contact' element ={<Contact />} />
       </Routes>
    </div>
  );

}
export default App;