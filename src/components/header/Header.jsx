import React from 'react'
import CTA from './CTA'
import './header.css'
const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Holangas! Soy</h5>
            <h1>Aky</h1>
            <h5 className="text-light">Desarrollador Fullstack</h5>
            <CTA />
        </div>
    </header>
  )
}

export default Header