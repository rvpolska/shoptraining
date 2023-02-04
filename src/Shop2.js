
import { useState } from 'react';
import './App.css';
import Buttons from './Buttons';
import Shop from './Shop';
import { data } from './dataShop';
import Buttons2 from './Buttons2';





function Shop2() {

  const [shop,setShop] = useState(data)
  
  const chosenClothes = (searchTerm) =>{
    const newClothes = data.filter(element => element.searchTerm === searchTerm);
    setShop(newClothes);
  }
  
  const chosenClothes2 = (id) =>{
    const newClothes2 = data.filter(element => element.id === id);
    setShop(newClothes2);
  }

  return(<div>
    <div className='container'>
    <h2>Choose your shoes</h2>
    </div>  
      <Buttons filteredClothes = {chosenClothes}/>
      <Buttons2 filteredClothes2 = {chosenClothes2}/>
      <Shop itemsForSale={shop}/>
    </div>
  )
}

export default Shop2;
