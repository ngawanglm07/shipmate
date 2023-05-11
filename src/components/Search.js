import React from 'react'
import "../components/search.css"
import {FiArrowRight } from 'react-icons/fi'
import {RiShipLine} from 'react-icons/ri'
import {GrLocation} from 'react-icons/gr'
import {BsCalendarDate} from 'react-icons/bs'
function Search() {
  return (
    <div className='search-bar'>
      <div className='group'>
     <ul className='list'>
        <li><GrLocation  className='icon2'/>Origin,Port,City</li>
        <li className='root'> <GrLocation  className='icon2'/>Destination,Port,City</li>
        <li className='root'><BsCalendarDate className='icon2'/>13th April 2023</li>
        <li  className='root'>  <RiShipLine className='icon2'/> load</li>
        <div className='arrow'>
        <FiArrowRight className='icon1'/>
      </div>
     </ul>
      </div>
    
    </div>
  )
}

export default Search
