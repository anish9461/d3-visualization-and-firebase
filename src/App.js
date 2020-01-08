import React from 'react';
import './App.css';
import D3_1 from './D3_and_SVG/d3_1';
import D3_SVG from './D3_and_SVG/d3_svg';
import D3_SVG_DATA from './D3_and_SVG/d3_svg_data';
import D3_SVG_DATA_EXTERNAL from './D3_and_SVG/d3_svg_data_external';
import D3_CHART_SCALE from './D3_and_SVG/d3_chart_scales';
import D3_FIREBASE from './D3_and_SVG/d3_firebase';
import ASTER from './D3_Widgets/AsterPlot';
import GAUGE1 from './D3_Widgets/Gauge1';
import GAUGE2 from './D3_Widgets/Gauge2';
import GAUGE3 from './D3_Widgets/Gauge3';

class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <h1>D3 Visualizations</h1>
        <D3_1 />
        <D3_SVG />
        <D3_SVG_DATA />
        <D3_SVG_DATA_EXTERNAL />
        <D3_CHART_SCALE />
        <D3_FIREBASE />
        <ASTER />
        <GAUGE1 />
        <GAUGE2 />
        <GAUGE3 />
      </div>
    )
  }
}

export default App;
