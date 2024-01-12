import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

export const Header = () => {
  return (
    <header className='header'>
      <nav className="nav">
        <NavLink to='/glossary' className='nav__link'>
          <span>Glossary</span>
        </NavLink>
        <NavLink to='/graph' className='nav__link'>
          <span>Graph</span>
        </NavLink>
      </nav>
    </header>
  )
}