import React, { useEffect } from 'react'
import './Slider-data'
import ImageSlider from './Slider-data'
import { useState } from 'react'

const Slider = () => {
  const [currentState,setCurrentState] = useState(0)
  useEffect(() =>{
    const timer = setTimeout(()=>{
      if(currentState===3){
        setCurrentState(0)
      }else{
        setCurrentState(currentState+1)
      }
    }, 5000)
    return ()=> clearTimeout(timer)
  },[currentState])
  const bgImageStyle = {
    backgroundImage: `url(${ImageSlider[currentState].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    BackgroundRepeat: 'none',
    height: '100%'
  }
  const goToNext = (currentState)=>{
    setCurrentState(currentState)
  }
  return (
      <div className='hero'>
       <div style={bgImageStyle} ></div>
       <div className='transparent-background'></div>
       <div className='description'>
         <div>
          <h1>{ImageSlider[currentState].title}</h1>
          <p>{ImageSlider[currentState].body}</p>
         </div>
         <div className='carousel-boult'>
          {
            ImageSlider.map((ImageSlider,currentState)=>(
              <span key={currentState} onClick={()=> goToNext(currentState) }></span>
            ))
          }
         </div>
       </div>
    </div>
  )
}

export default Slider