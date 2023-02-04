import { useState } from 'react';
import './App.css';


function Shop ({itemsForSale}){

  const [showMore, setShowMore] = useState (false)
   
   
   const showTextClicl = (item) =>{
    item.showMore = !item.showMore
    setShowMore(!showMore)
   }

  return (<div className="products">

 {itemsForSale.map((item =>{
  const {id,name,image,searchTerm,price,source,description,showMore} = item;

  return(
    <div className="product-info" key={id}>
    <img src={image}  width='400px' heigh='500px' alt='shop'/>

    <div className="product-info">
    <h2>{name}</h2>
    <h4>{searchTerm}</h4>
    <h4>$ {price}</h4>
    <h4> {source}</h4>
    <p>  {showMore ? description : description.substring(0,170) + '...'} 
    <button className='btn' onClick={()=> showTextClicl(item)}> {showMore ? 'Show less' : 'Show more'}</button></p>
    </div>


    </div>

  )
 }))}
  </div>)
}

export default Shop;


