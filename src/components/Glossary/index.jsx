import React from 'react';
import data from './data.json'
import './style.scss'

export const Glossary = () => {
  return (
    <div className='container'>
      <div className='glossary'>
        {data.map((item, index) => (
          <div className="glossary__item" key={index}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}