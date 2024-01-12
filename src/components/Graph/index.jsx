import React from 'react';
import * as d3 from "d3";
import { useEffect, useRef } from 'react';
import data from './data.json'
import { drawNetwork } from '../../drawNetwork';

const width = window.innerWidth - 80
const height = window.innerHeight

export const Graph = () => {
  const links = data.links.map((d) => ({...d}));
  const nodes = data.nodes.map((d) => ({...d}));

  const canvasRef = useRef(null);

  useEffect(() => {
    // set dimension of the canvas element
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!context) {
      return;
    }
    // run d3-force to find the position of nodes on the canvas
    d3.forceSimulation(nodes)
      // list of forces we apply to get node positions
      .force('link', d3.forceLink(links).id((d) => d.id))
      .force('collide', d3.forceCollide().radius(80).strength(1))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, (height - 80) / 2))

      .on('tick', () => {
        drawNetwork(context, width, height, nodes, links);
      });
  }, [nodes, links]);

  return (
    <div className='container'>
      <div className='graph'>
        <canvas
          ref={canvasRef}
          width={width}
          height={height - 115}
        />
      </div>
    </div>
  )
}