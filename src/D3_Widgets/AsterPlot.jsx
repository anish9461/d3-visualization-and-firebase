import React, { useState, useEffect } from "react";
import "../Aster.css";
import * as d3 from "d3";
import d3tip from 'd3-tip'
d3tip(d3)

const Aster = () => {

    const [count, setCount] = useState(0);

  useEffect(() => {
    var width = 500,
      height = 500,
      radius = Math.min(width, height) / 2,
      innerRadius = 0.3 * radius;

    var pie = d3
      .pie()
      .sort(null)
      .value(function(d) {
        return d.width;
      });

    var tip = d3tip()
    //   .tip()
      .attr("class", "d3-tip")
      .offset([0, 0])
      .html(function(d) {
        return (
          d.data.label +
          ": <span style='color:orangered'>" +
          d.data.score +
          "</span>"
        );
      });

    var arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(function(d) {
        return (radius - innerRadius) * (d.data.score / 100.0) + innerRadius;
      });

    var outlineArc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(radius);

    var svg = d3
      .select(".aster")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    svg.call(tip);

    d3.csv("aster_data.csv").then(data => {
   
      data.forEach(function(d) {
        d.id = d.id;
        d.order = +d.order;
        d.color = d.color;
        d.weight = +d.weight;
        d.score = +d.score;
        d.width = +d.weight;
        d.label = d.label;
      });
      // for (var i = 0; i < data.score; i++) { console.log(data[i].id) }

      var path = svg
        .selectAll(".solidArc")
        .data(pie(data))
        .enter()
        .append("path")
        .attr("fill", function(d) {
          return d.data.color;
        })
        .attr("class", "solidArc")
        .attr("stroke", "gray")
        .attr("d", arc)
        .on("mouseover",function(d,i) {
            tip.show(d,this)
            
            setCount(d.data.score)
            
        })
        // .on("mouseover", tip.show)
        .on("mouseout", tip.hide);

    //   svg.selectAll(".solidArc")
    //     .on("mouseover", d => (console.log(d)))
      var outerPath = svg
        .selectAll(".outlineArc")
        .data(pie(data))
        .enter()
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("class", "outlineArc")
        .attr("d", outlineArc);

      // calculate the weighted mean score
      var score =
        data.reduce(function(a, b) {
          //console.log('a:' + a + ', b.score: ' + b.score + ', b.weight: ' + b.weight);
          return a + b.score * b.weight;
        }, 0) /
        data.reduce(function(a, b) {
          return a + b.weight;
        }, 0);
        
      svg
        .append("svg:text")
        .attr("class", "aster-score")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle") // text-align: right
        // .text(count);
    
        // svg.select('.aster-score')
        //     .text(count)
    });
  },[]);

  useEffect(() => {
      d3.select('.aster').select('.aster-score')
            .text(count)
  })

  return (
  <div className="aster">
      {/* {console.log(count)} */}
  </div>
  );
};

export default Aster;
