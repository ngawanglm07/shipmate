import React from 'react'
import '../components/header.css'
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <section>
  <div className='header'>
      <h1 className='ship'>Ship<span className='mate'>mate</span></h1>
      <div className='header-right'>
      <Button className='Login-button'>Login</Button>{'   '}
      <Button  variant="outline-warning" className='Learn-more'>Learn more</Button>
      </div>
    </div>
    </section>
  
  )
}

export default Header
