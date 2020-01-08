import React, { useState, useEffect } from "react";
import "../App.css";
import * as d3 from "d3";
import firebase from "firebase";

const D3_firebase = () => {
  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyC5aNwZmqnGy3YFtZuL3FSBENZH_1awUSY",
      authDomain: "d3-visualizations-d6823.firebaseapp.com",
      databaseURL: "https://d3-visualizations-d6823.firebaseio.com",
      projectId: "d3-visualizations-d6823",
      storageBucket: "d3-visualizations-d6823.appspot.com",
      messagingSenderId: "89229636545",
      appId: "1:89229636545:web:47d2ce2f1f8f795fc7b540",
      measurementId: "G-WR1R8S5WLT"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

    const svg = d3.select(".data_chart_firebase");

    //create margins and dimensions
    const margin = { top: 20, right: 20, bottom: 100, left: 100 };
    const graphWidth = 600 - margin.left - margin.right;
    const graphHeight = 600 - margin.top - margin.bottom;

    const graph = svg
      .append("g")
      .attr("width", graphWidth)
      .attr("height", graphHeight)
      .attr("transform", `translate(${margin.left},${margin.top})`); //transform the graph to the center from top-left using the template string

    const xAxisGroup = graph
      .append("g")
      .attr("transform", `translate(0, ${graphHeight})`);
    const yAxisGroup = graph.append("g");

    db.collection('dishes').get().then(res => {
        var data = [];
        res.docs.forEach(doc => {
            data.push(doc.data())
        })
   
      const min = d3.min(data, d => d.orders);
      const max = d3.max(data, d => d.orders);
      const extent = d3.extent(data, d => d.orders);
      //Linear scale
      const y = d3
        .scaleLinear()
        .domain([max, 0])
        .range([0, graphHeight]);

      const x = d3
        .scaleBand()
        .domain(data.map(item => item.name))
        .range([0, 500])
        .paddingInner(0.2)
        .paddingOuter(0.2);


      const rects = graph.selectAll("rect").data(data);
      // rects.attr('width', x.bandwidth())
      //     .attr('height', d => y(d.orders))
      //     .attr('fill', 'orange')
      //     .attr('x', (d) => x(d.name)) // x direction of the bar chart of each rectangle

      //append enter selection
      rects
        .enter()
        .append("rect")

        .attr("width", x.bandwidth())
        .attr("height", d => graphHeight - y(0))
        .attr("fill", "orange")
        .attr("x", d => x(d.name))
        .attr("y", d => y(0)); //starting from y-directions

      //create and call axes
      const xAxis = d3.axisBottom(x);
      const yAxis = d3
        .axisLeft(y)
        .ticks(3)
        .tickFormat(d => d + " orders");

      xAxisGroup.call(xAxis);
      yAxisGroup.call(yAxis);

      xAxisGroup
        .selectAll("text")
        .attr("transform", "rotate(-40)")
        .attr("text-anchor", "end")
        .attr("fill", "orange");

      graph
        .selectAll("rect")
        .transition()
        .duration(800)
        .attr("height", d => graphHeight - y(d.orders))
        .attr("y", d => y(d.orders))
        .delay((d, i) => i * 100);
    });
  }, []);

  return (
    <div className="App">
      <h2>Bar Chart using Firebase Data</h2>
      <div className="canvas">
        <svg className="data_chart_firebase" width="600" height="600"></svg>
      </div>
    </div>
  );
};

export default D3_firebase;
