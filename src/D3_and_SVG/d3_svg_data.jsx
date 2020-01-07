/**
 * Using data in d3 svgs
 */

import React, { useState, useEffect } from "react";
import "../App.css";
import * as d3 from "d3";

const data = [
  { width: 200, height: 100, fill: "red" },
  { width: 100, height: 60, fill: "purple" },
  { width: 50, height: 30, fill: "yellow" }
];

const D3_SVG_data = () => {
  useEffect(() => {
    const svg = d3.select(".data_svg");
    //adding attr to rect already in the DOM
    const rects = svg
      .selectAll("rect")
      .data(data)
      .attr(
        "width",
        (d, i, n) => d.width //no need to have return statement
      )
      .attr("height", d => d.height)
      .attr("fill", d => d.fill)
      .attr("x", 200);

    //creating virtual rects according to data present
    rects
      .enter()
      .append("rect")
      .attr(
        "width",
        (d, i, n) => d.width //no need to have return statement
      )
      .attr("height", d => d.height)
      .attr("fill", d => d.fill)
      .attr("x", 200);
  }, []);

  return (
    <div className="App">
      <h2>Using Data with D3</h2>
      <div className="canvas">
        <svg className="data_svg" width="600" height="200">
          <rect></rect>
        </svg>
      </div>
    </div>
  );
};

export default D3_SVG_data;
