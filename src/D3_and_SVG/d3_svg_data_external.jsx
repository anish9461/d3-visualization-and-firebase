/**
 * Using data in d3 svgs
 */

import React, { useState, useEffect } from "react";
import "../App.css";
import * as d3 from "d3";

const D3_SVG_data_external = () => {
  useEffect(() => {
    const svg = d3.select(".data_svg_external");
    d3.json("planets.json").then(data => {
      const circs = svg.selectAll('circle')
        .data(data)

        //add attrs to circs already in the DOM
      circs.attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', d => d.radius)
        .attr('fill', d => d.fill)

        //append enter selection to the DOM
      circs.enter()
        .append('circle')
        .attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', d => d.radius)
        .attr('fill', d => d.fill)
    });
  }, []);

  return (
    <div className="App">
      <h2>Using External JSON Data with D3</h2>
      <div className="canvas">
        <svg className="data_svg_external" width="600" height="500"></svg>
      </div>
    </div>
  );
};

export default D3_SVG_data_external;
