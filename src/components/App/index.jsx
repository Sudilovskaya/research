import React from 'react';
import { Header } from '../Header'
import { Main } from "../Main";
import './style.css'
import { BrowserRouter as Router, } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header/>
      <Main/>
    </Router>
  )
}

export default App;