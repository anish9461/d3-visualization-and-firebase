import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import Gauge from 'react-svg-gauge';

const Gauge3 = props => {
  // useEffect(() => {

  //     });
  //   }, []);

  return (
    <div>
      <Gauge value={40} width={400} height={320} label="This is my Gauge" />
    </div>
  );
};

export default Gauge3;