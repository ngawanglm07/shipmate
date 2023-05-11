import React from 'react'
import '../components/services.css'
import data from '../components/services-data.js'
import ServicesCards from './ServicesCards'


function Services() {


  const cards = data.map(item=>{
    return(
        <ServicesCards
        key={item.id}
        heading={item.heading}
        paragraph={item.paragraph}
        />
    )
  })
  return (
    <div className='service'>
      <h1 className='service-heading'>Services</h1>
      <section className='cards-row'>
        {cards}
      </section>
    </div>
  )
}

export default Services
