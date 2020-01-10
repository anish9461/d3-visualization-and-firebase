import React, { useState, useEffect } from "react";
import "../App.css";
import * as d3 from "d3";

const root = {
  name: "bubble",
  children: [
    {
      name: "Thing",
      description: "Atlas of Global Agriculture",
      children: [
        {
          name: "Sensor1",
          address: "http://gli.environment.umn.edu",
          note:
            "Global crop geography, including precipitation, temperature, crop area, etc."
        },
        { name: "Sensor2", address: "http://d3js.org" },
        {
            name: "Sensor 3",
            address: "http://environment.umn.edu",
            note: "Maize, wheat, rice, and soybean yields in 2000"
          },
         
      ]
    },
    // {
    //   name: "AgLab",
    //   description: "Virtual Lab of Global Agriculture",
    //   children: [
    //     {
    //       name: "Excess Nutrient",
    //       address: "http://d3js.org",
    //       note: "Prototype Infographics on Excess Fertilizer Nutrients"
    //     },
    //     {
    //       name: "Yield Gap",
    //       address: "http://d3js.org",
    //       note:
    //         "The gap between attainable yields and actual yields, with modeled yields assuming the percentage of gap closed."
    //     },
    //     { name: "Fertilizer", address: "http://sunsp.net" }
    //   ]
    // },
    // {
    //   name: "Nutshell",
    //   description: "Profiles of Country",
    //   children: [
    //     { name: "Efficiency", address: "http://d3js.org" },
    //     { name: "Excess Nutrient", address: "http://d3js.org" },
    //     { name: "Economy", address: "http://d3js.org" },
    //     { name: "Agriculture", address: "http://uis.edu/ens" }
    //   ]
    // },
    // {
    //   name: "Data",
    //   description: "Crop Data in 5 minutes grid",
    //   children: [
    //     { name: "Geography", address: "http://www.earthstat.org/" },
    //     { name: "Crop Land", address: "http://www.earthstat.org/" },
    //     { name: "Crop Yields", address: "http://www.earthstat.org/" }
    //   ]
    // }
  ]
};

const BubbleMenuSingle = () => {
  useEffect(() => {
    //var w = window.innerWidth*0.68*0.95;
    var w = 600;
    //var h = Math.ceil(w * 1);
    var h = 530;
    // var oR = 0;
    var nTop = 0;

    var svgContainer = d3
      .select("#mainBubble")
    //   .style("height", h + "px")
    //   .style("width", w + "px");

    var svg = d3
      .select("#mainBubble")
      .append("svg")
      .attr("class", "mainBubbleSVG")
      .attr("width", w + "px")
      .attr("height", h + "px")
      .on("mouseleave", function() {
        return resetBubbles();
      });

    var bubbleObj = svg
      .selectAll(".topBubble")
      .data(root.children)
      .enter()
      .append("g")
      .attr("id", function(d, i) {
        return "topBubbleAndText_" + i;
      });

    console.log(root);
    nTop = root.children.length;
    var oR = w / (1 + 6 * nTop);

    // h = Math.ceil((w / nTop) * 2);

    // svgContainer.style("height", h + "px");

    // var colVals = d3.scale.category10();
    var colVals = ["green", "blue", "red", "orange"];

    bubbleObj
      .append("circle")
      .attr("class", "topBubble")
      .attr("id", function(d, i) {
        return "topBubble" + i;
      })
      .attr("r", function(d) {
        return oR;
      })
      .attr("cx", function(d, i) {
        return oR * (3.5 * (1 + i) - 1);
      })
      .attr("cy", (h + oR) / 3)
      .style("fill", function(d, i) {
        // return colVals(i);
        return "green";
      }) // #1f77b4
      .style("opacity", 0.3)
      .on("mouseover", function(d, i) {
        return activateBubble(d, i);
      });

    bubbleObj
      .append("text")
      .attr("class", "topBubbleText")
      .attr("x", function(d, i) {
        return oR * (3.5 * (1 + i) - 1);
      })
      .attr("y", (h + oR) / 3)
      .style("fill", function(d, i) {
        // return colVals(i);
        return "red";
      }) // #1f77b4
      .attr("font-size", 30)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("alignment-baseline", "middle")
      .text(function(d) {
        return d.name;
      })
      .on("mouseover", function(d, i) {
        return activateBubble(d, i);
      });

    for (var iB = 0; iB < nTop; iB++) {
      var childBubbles = svg
        .selectAll(".childBubble" + iB)
        .data(root.children[iB].children)
        .enter()
        .append("g");

      //var nSubBubble = Math.floor(root.children[iB].children.length/2.0);

      childBubbles
        .append("circle")
        .attr("class", "childBubble" + iB)
        .attr("id", function(d, i) {
          return "childBubble_" + iB + "sub_" + i;
        })
        .attr("r", function(d) {
          return oR / 3.0;
        })
        .attr("cx", function(d, i) {
          return (
            oR * (3.5 * (iB + 1) - 1) +
            oR * 1.5 * Math.cos((((i - 1) * 45) / 180) * 3.1415926)
          );
        })
        .attr("cy", function(d, i) {
          return (
            (h + oR) / 3 +
            oR * 1.5 * Math.sin((((i - 1) * 45) / 180) * 3.1415926)
          );
        })
        .attr("cursor", "pointer")
        .style("opacity", 0.5)
        .style("fill", "#eee")
        .on("click", function(d, i) {
          window.open(d.address);
        })
        .on("mouseleave", function(d,i){
            console.log("mouse out")
            // d3.select(this).style('fill','')
        })
        .on("mouseover", function(d, i) {
        //   d3.select(this).style('fill','green')
          var noteText = "";
          if (d.note === null || d.note === "") {
            noteText = d.address;
          } else {
            noteText = d.note;
          }
          d3.select("#bubbleItemNote").text(noteText);
        })
        .append("svg:title")
        .text(function(d) {
          return d.address;
        });

      childBubbles
        .append("text")
        .attr("class", "childBubbleText" + iB)
        .attr("x", function(d, i) {
          return (
            oR * (3.5 * (iB + 1) - 1) +
            oR * 1.5 * Math.cos((((i - 1) * 45) / 180) * 3.1415926)
          );
        })
        .attr("y", function(d, i) {
          return (
            (h + oR) / 3 +
            oR * 1.5 * Math.sin((((i - 1) * 45) / 180) * 3.1415926)
          );
        })
        .style("opacity", 0.5)
        .attr("text-anchor", "middle")
        .style("fill", function(d, i) {
          //   return colVals(iB);
          return "blue";
        }) // #1f77b4
        .attr("font-size", 6)
        .attr("cursor", "pointer")
        .attr("dominant-baseline", "middle")
        .attr("alignment-baseline", "middle")
        
        .text(function(d) {
          return d.name;
        })
        .on("click", function(d, i) {
          window.open(d.address);
        });
    }

    const resetBubbles = function() {
    //   w = window.innerWidth * 0.68 * 0.95;
        w = 600;
      oR = w / (1 + 6 * nTop);

     // h = Math.ceil((w / nTop) * 2);
      h = 530;
   // h = 600
    //   svgContainer.style("height", h + "px");

      //   mainNote.attr("y", h - 15);

      svg.attr("width", w);
      svg.attr("height", h);

      d3.select("#bubbleItemNote").text(
        "D3.js bubble menu developed by Shipeng Sun (sunsp.gis@gmail.com), Institute of Environment, University of Minnesota, and University of Springfield, Illinois."
      );

      var t = svg.transition().duration(650);

      t.selectAll(".topBubble")
        .attr("r", function(d) {
          return oR;
        })
        .attr("cx", function(d, i) {
          return oR * (3.5 * (1 + i) - 1);
        })
        .attr("cy", (h + oR) / 3);

      t.selectAll(".topBubbleText")
        .attr("font-size", 30)
        .attr("x", function(d, i) {
          return oR * (3.5 * (1 + i) - 1);
        })
        .attr("y", (h + oR) / 3);

      for (var k = 0; k < nTop; k++) {
        t.selectAll(".childBubbleText" + k)
          .attr("x", function(d, i) {
            return (
              oR * (3.5 * (k + 1) - 1) +
              oR * 1.5 * Math.cos((((i - 1) * 45) / 180) * 3.1415926)
            );
          })
          .attr("y", function(d, i) {
            return (
              (h + oR) / 3 +
              oR * 1.5 * Math.sin((((i - 1) * 45) / 180) * 3.1415926)
            );
          })
          .attr("font-size", 6)
          .style("opacity", 0.5);

        t.selectAll(".childBubble" + k)
          .attr("r", function(d) {
            return oR / 3.0;
          })
          .style("opacity", 0.5)
          .attr("cx", function(d, i) {
            return (
              oR * (3.5 * (k + 1) - 1) +
              oR * 1.5 * Math.cos((((i - 1) * 45) / 180) * 3.1415926)
            );
          })
          .attr("cy", function(d, i) {
            return (
              (h + oR) / 3 +
              oR * 1.5 * Math.sin((((i - 1) * 45) / 180) * 3.1415926)
            );
          });
      }
    };

    function activateBubble(d, i) {
      // increase this bubble and decrease others
      var t = svg.transition().duration(d3.event.altKey ? 7500 : 350);

      t.selectAll(".topBubble")
        .attr("cx", function(d, ii) {
          if (i === ii) {
            // Nothing to change
            return oR * (3.5 * (1 + ii) - 1) - 0.6 * oR * (ii - 1);
          } else {
            // Push away a little bit
            if (ii < i) {
              // left side
              return oR * 0.6 * (3 * (1 + ii) - 1);
            } else {
              // right side
              return oR * (nTop * 3 + 1) - oR * 0.6 * (3 * (nTop - ii) - 1);
            }
          }
        })
        .attr("r", function(d, ii) {
          if (i === ii) return oR * 1.8;
          else return oR * 0.8;
        });

      t.selectAll(".topBubbleText")
        .attr("x", function(d, ii) {
          if (i === ii) {
            // Nothing to change
            return oR * (3.5 * (1 + ii) - 1) - 0.6 * oR * (ii - 1);
          } else {
            // Push away a little bit
            if (ii < i) {
              // left side
              return oR * 0.6 * (3.5 * (1 + ii) - 1);
            } else {
              // right side
              return oR * (nTop * 3 + 1) - oR * 0.6 * (3.5 * (nTop - ii) - 1);
            }
          }
        })
        .attr("font-size", function(d, ii) {
          if (i === ii) return 30 * 1.5;
          else return 30 * 0.6;
        });

      var signSide = -1;
      for (var k = 0; k < nTop; k++) {
        signSide = 1;
        if (k < nTop / 2) signSide = 1;
        t.selectAll(".childBubbleText" + k)
          .attr("x", function(d, i) {
            return (
              oR * (3.5 * (k + 1) - 1) -
              0.6 * oR * (k - 1) +
              signSide * oR * 2.5 * Math.cos((((i - 1) * 45) / 180) * 3.1415926)
            );
          })
          .attr("y", function(d, i) {
            return (
              (h + oR) / 3 +
              signSide * oR * 2.5 * Math.sin((((i - 1) * 45) / 180) * 3.1415926)
            );
          })
          .attr("font-size", function() {
            return k == i ? 12 : 6;
          })
          .style("opacity", function() {
            return k == i ? 1 : 0;
          });

        t.selectAll(".childBubble" + k)
          .attr("cx", function(d, i) {
            return (
              oR * (3.5 * (k + 1) - 1) -
              0.6 * oR * (k - 1) +
              signSide * oR * 2.5 * Math.cos((((i - 1) * 45) / 180) * 3.1415926)
            );
          })
          .attr("cy", function(d, i) {
            return (
              (h + oR) / 3 +
              signSide * oR * 2.5 * Math.sin((((i - 1) * 45) / 180) * 3.1415926)
            );
          })
          .attr("r", function() {
            return k == i ? oR * 0.55 : oR / 3.0;
          })
          .style("opacity", function() {
            return k == i ? 1 : 0;
          });
      }
    }
  }, []);

  return <div id="mainBubble"></div>;
};

export default BubbleMenuSingle;
