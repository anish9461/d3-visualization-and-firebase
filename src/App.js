import React from 'react';
import './App.css';
import D3_1 from './D3_and_SVG/d3_1';
import D3_SVG from './D3_and_SVG/d3_svg';
import D3_SVG_DATA from './D3_and_SVG/d3_svg_data';
import D3_SVG_DATA_EXTERNAL from './D3_and_SVG/d3_svg_data_external';

class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <h1>D3 Visualizations</h1>
        <D3_1 />
        <D3_SVG />
        <D3_SVG_DATA />
        <D3_SVG_DATA_EXTERNAL />
      </div>
    )
  }
}

export default App;
