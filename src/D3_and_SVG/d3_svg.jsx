/**
 * Using d3 to create svgs
 */


import React, {Component} from 'react';
import '../App.css';
import * as d3 from 'd3';

class D3_SVG extends Component{


    componentDidMount(){
        const canvas = d3.select(".canvas");
        console.log(canvas)
        const svg = canvas.append('svg')
            .attr('height', 600)
            .attr('width', 600);

        const group = svg.append('g')
            .attr('transform', 'translate(0, 100)'); //translate to 100px below
        //append shapes to svg container using group
        group.append('rect')
            .attr('width',200)
            .attr('height',100)
            .attr('fill','blue')
            .attr('x',20)
            .attr('y',20);
        group.append('circle')
            .attr('r',50)
            .attr('cx',300)
            .attr('cy', 70)
            .attr('fill','pink');
        group.append('line')
            .attr('x1',370)
            .attr('x2',400)
            .attr('y1',20)
            .attr('y2',120)
            .attr('stroke','red');

        svg.append('text')
            .attr('x',20)
            .attr('y',200)
            .attr('fill','grey')
            .text('Hello D3!')
            .style('font-family','arial')
        
    }

    render(){
        // const a = document.querySelectorAll('div')
        // const b = d3.selectAll('div')
        // console.log(a,b)

        // const canvas = d3.select(".canvas");
        // console.log(canvas)
        // const svg = canvas.append('svg');
        

        return(
            <div className='App'>
                <div className='canvas'>
                <h2>SVG using D3</h2>
                </div>
            </div>
        )
    }
}

export default D3_SVG;