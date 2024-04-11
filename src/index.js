import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Analysis } from "./components/Analysis";
import { Methodology } from "./components/Methodology";
import { Evaluation } from "./components/Evaluation";
import { Graph } from "./components/Graph";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/analysis" element={<Analysis/>}/>
      <Route path="/methodology" element={<Methodology/>}/>
      <Route path="/evaluation" element={<Evaluation/>}/>
      <Route path="/graph" element={<Graph/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);