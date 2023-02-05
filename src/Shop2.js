

import { useState } from 'react';
import './App.css';
import Buttons from './Buttons';
import Shop from './Shop';
import { data } from './dataShop';






function Shop2() {

  const [shop,setShop] = useState(data)
  
  const chosenClothes = (searchTerm) =>{
    const newClothes = data.filter(element => element.searchTerm === searchTerm);
    setShop(newClothes);
  }
  

  return(<div>
    <div className='container'>
    <h2>Choose your shoes</h2>
    </div> 
      <Buttons data ={data} setShop={setShop} filteredClothes = {chosenClothes}/>

      <Shop itemsForSale={shop}/>
    </div>
  )
}

export default Shop2;
