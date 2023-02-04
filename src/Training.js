import { useState } from 'react';
import { data } from './data1';
import './App.css';

function Training() {
  const [training , setTraining] = useState(0);
  const {name, image, source, searchTerm, description} = data[training];

  const [showMore, setShowMore] = useState (false)

  const previous = () =>{      
      setTraining ((training =>{
        training --;
        if (training < 0){
          return data.length -1
        }
        return training;
      }))
  }

  const next = () =>{
    setTraining((training =>{
      training ++;
      if (training >data.length - 1){
        training = 0;
      }
      return training;
    }))
  }

return(
  <div>
    <div className='container'>
    <h1>{name}</h1>
    </div>

    <div className='container'>
    <button  onClick={previous}>Prev</button>
    <img src={image} width='400px' height='600px' alt='training'/>
    <button onClick={next}>Next</button>
    </div>

    <div className='container'>
    <h2> source: {source}</h2>
    </div>

    <div className='container'>
    <h3>{searchTerm}</h3>
    </div>

    <div className='container'>
    <p>{showMore ? description : description.substring(0,170) + '...'} 
    <button className='btn' onClick={()=> setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</button></p>
    </div>
 

  </div>


)
}

export default Training;
