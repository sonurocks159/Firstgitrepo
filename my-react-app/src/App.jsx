import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import people from './data'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';
import './index.css'




const App= ()=> {
  const [index, setIndex]= useState(0);
  const {name,job, image, text}= people[index];
  
const nextPerson = ()=>{
  
  setIndex((current)=>{
    
   const newIndex= current+1;
   if(newIndex > people.length -1 ){
    return 0;
   }
   return newIndex;
  })
}
const previousPerson = ()=>{
  setIndex((current)=>{
   const newIndex= current-1;
   if(newIndex < 0){
return (people.length-1);
   }
   return newIndex;
  })
}

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
        <FaQuoteRight/>
        </span>
        </div>
        <h4>{name}</h4>
        <p>{job}</p>
        <p>{text}</p>
        <div className='btn-container'>
      <button className='prev-button' onClick={previousPerson}>Previous Person</button>
      <button className='next-button' onClick={nextPerson}>Next Person</button>
      </div>
      </article>

      
 
   
    </main>
  )
}

export default App
