import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Glossary } from "../Glossary";
import { Graph } from "../Graph";
import { Aside } from "../Aside";
import './style.scss'
import { Analysis } from "../Analysis";
import { Evaluation } from "../Evaluation";
import { Methodology } from "../Methodology";

export const Main = () => {
  return (
    <main className='main'>
      <div className='main__container'>
        <Aside/>
        <div className='main__content'>
          <Routes>
            <Route path="/" element={<Glossary/>}/>
            <Route path="/analysis" element={<Analysis/>}/>
            <Route path="/methodology" element={<Methodology/>}/>
            <Route path="/evaluation" element={<Evaluation/>}/>
            <Route path="/graph" element={<Graph/>}/>
          </Routes>
        </div>
      </div>
    </main>
  )
}