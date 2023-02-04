import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  } from "react-router-dom";
  import Home from './Home';
  import Shop from './Shop2';
  import Training from './Training';
  import About from './About';




function App() {

  return <Router>
   <nav>
   <Link to='/'className='link'>First Page </Link> 
   
    <Link className='link' to='/shop'>Shop</Link>
    <Link className='link' to='/training'>Training</Link>
    <Link className='link' to='/about'>About</Link>
   </nav>
  
  <Routes>
  <Route path='/' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/training' element={<Training/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
  </Router>
  
}

export default App;
