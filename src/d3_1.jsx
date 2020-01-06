import React, {Component} from 'react';
import '../src/App.css';


class D3_1 extends Component{

    render(){
        return(
            <div className='App'>
                <h2>SVG Shapes</h2>
                <svg width="600" height="600">
                    <rect x='250' y='40' fill='blue' width='100' height='200'></rect>
                    <circle cx='200' cy='200' r='50' fill='pink' stroke='red' strokeWidth='3'></circle>
                    <line x1='100' y1='100' x2='120' y2='220' stroke='grey' strokeWidth='3'></line>
                    <path d="M150 50 L 75 200 L 225 200 C 225 200 150 150 150 50" fill='orange'></path>
                    <circle cx='150' cy='150' r='5' fill='grey'></circle>
                    <line x1='225' y1='200' x2='150' y2='150' stroke='grey'></line>
                </svg>
            </div>
        )
    }
}

export default D3_1;