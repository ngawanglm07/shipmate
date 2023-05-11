import React from 'react'
import "../pages/booking.css"
import {GiAirplaneDeparture} from "react-icons/gi"
import {MdOutlineHomeWork} from "react-icons/md"
import {GiWeightScale} from 'react-icons/gi'
import {MdLineWeight} from "react-icons/md"


function Booking() {
  return (
    <div>
    <div className='update'>
      <div>
        
      </div>




    </div>
      <div className='frame'>
       <div className='frame0'>
      <div className='frame1'>
       <h3 className='text-frame1'>Booking summary</h3>
      
       <small className='express'>express</small>
     
      
       <div className='country-box'>
        <MdOutlineHomeWork className='country'/>
        <small>Tiruchipalli</small>
        <small>734001 India</small>
       </div>
       <div className='frame55'>
       <GiAirplaneDeparture className='express-icon'
        />
       </div>
       <div className='country-box1'>
        <MdOutlineHomeWork className='country'/>
        <small>shangai</small>
        <small>90230 china</small>
       </div>
      </div>



      <div className='frame2'>
      <div className='min'>
        <h2 className='minText'>Total Weight/Volume</h2>
        <GiWeightScale className='min-icon'/>
        <h2 className='minText2'>114.23kg</h2>
      </div>
      <div className='max'>
        <h2 className='maxText'>Load</h2>
        <h2 className='maxText2'>1X</h2>
        <div className='maxText3'>
        <MdLineWeight className='pallet'/>
        <p >
        Pallets
        </p>
        <p className='palletText'>120 X 130 X 140</p>
        </div>
        
        
        <div>

        </div>
      </div>
      </div>
      <div className='frame3'>
        <div className='first'></div>
        <div className='last'></div>
      </div>
      </div>

      <div className='frame4'>

      </div>
      </div>
    
    </div>
  )
}

export default Booking
