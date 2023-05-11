import React from 'react'

function ServicesCards(props) {
  return (
    
     <div className='cards'>
      <h2 className='cards-heading'>{props.heading}</h2>
      <div className='line'></div>

      <p className='cards-paragraph'>{props.paragraph}</p>
    </div>
    
   
  )
}

export default ServicesCards
