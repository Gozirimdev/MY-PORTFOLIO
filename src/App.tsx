import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


// import pages 
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Project from './page/Project';

import './App.css'

const App: React.FC = () => {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
