import React from 'react';
import { Link } from 'react-router-dom';
import nike from './metcone1.webp'
import training from './training.avif'

function Home (){
    return(
        <div className='home'>
    <Link to="/shop">
      <img src={nike} height='400px' width='400px' alt="shoes" />
      <h3>Shoes</h3>
    </Link>
    <Link to="/training">
      <img src={training} height='400px' width='400px' alt="trainin" />
      <h3>Training</h3>
    </Link>
        </div>
    )
}

export default Home;