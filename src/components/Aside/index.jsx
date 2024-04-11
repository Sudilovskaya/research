import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss'

export const Aside = () => {
  return (
    <div className='aside'>
      <h3>Разделы:</h3>
      <nav className="nav">
        <NavLink to='/' className='nav__link'>
          <span>Глоссарий терминов</span>
        </NavLink>
        <NavLink to='/analysis' className='nav__link'>
          <span>Анализ зарубежных и отечественных научных источников по теме исследования</span>
        </NavLink>
        <NavLink to='/methodology' className='nav__link'>
          <span>Методика проведения исследования технологий разработки CRM-системы</span>
        </NavLink>
        <NavLink to='/evaluation' className='nav__link'>
          <span>Оценка эффективности CRM-системы по сформированным критериям</span>
        </NavLink>
        <NavLink to='/graph' className='nav__link'>
          <span>Семантический граф</span>
        </NavLink>
      </nav>
    </div>
  )
}