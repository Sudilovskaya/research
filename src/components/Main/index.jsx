import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import { Glossary } from "../Glossary";
import { Graph } from "../Graph";

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Glossary/>}/>
        <Route path="/glossary" element={<Glossary/>}/>
        <Route path="/graph" element={<Graph/>}/>
      </Routes>
    </main>
  )
}