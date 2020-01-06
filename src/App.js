import React from 'react';
import './App.css';
import D3_1 from './D3_and_SVG/d3_1';
import D3_SVG from './D3_and_SVG/d3_svg';

class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <h1>D3 Visualizations</h1>
        <D3_1 />
        <D3_SVG />
      </div>
    )
  }
}

export default App;
