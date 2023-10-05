import React from 'react';
import './input.css'
import Navigation from './Components/Navigation';
import {  Route, Routes } from 'react-router-dom';
import Home from './Components/Home.js'
import Missing from './Components/Missing.js'
import Trending from './Components/Trending';
import Business from './Components/Business';
import SignIn from './Components/SignIn';
import UserDetails from './Components/UserDetails';



function App() {
  return (
    <div className='flex justify-center items-center'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Trending' element={<Trending />} />
          <Route path='/Business' element={<Business />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/userdetails' element={ <UserDetails/> }/>
          <Route path='*' element={<Missing />} />
        </Routes>
    </div>
  );
}

export default App;
