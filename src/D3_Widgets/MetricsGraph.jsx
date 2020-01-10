import MetricsGraphics from "react-metrics-graphics";
import "metrics-graphics/dist/metricsgraphics.css";
import MG from "metrics-graphics";
import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';


const testData = [
  {
    date: new Date("2014-11-01"),
    value: 12
  },
  {
    date: new Date("2014-11-02"),
    value: 18
  }
];

const metricdata = [
  {
    date: "2014-01-01",
    value: 150000000
  },
  {
    date: "2014-01-02",
    value: 168799730
  },
  {
    date: "2014-01-03",
    value: 179473940
  },
  {
    date: "2014-01-04",
    value: 160525870
  },
  {
    date: "2014-01-05",
    value: 164091937
  },
  {
    date: "2014-01-06",
    value: 168386751
  },
  {
    date: "2014-01-07",
    value: 164583141
  },
  {
    date: "2014-01-08",
    value: 151127712
  },
  {
    date: "2014-01-09",
    value: 140122673
  },
  {
    date: "2014-01-10",
    value: 142701834
  },
  {
    date: "2014-01-11",
    value: 150132534
  },
  {
    date: "2014-01-12",
    value: 160971355
  },
  {
    date: "2014-01-13",
    value: 171888475
  },
  {
    date: "2014-01-14",
    value: 187304607
  },
  {
    date: "2014-01-15",
    value: 195860257
  },
  {
    date: "2014-01-16",
    value: 218146710
  },
  {
    date: "2014-01-17",
    value: 194292216
  },
  {
    date: "2014-01-18",
    value: 200847337
  },
  {
    date: "2014-01-19",
    value: 202888520
  },
  {
    date: "2014-01-20",
    value: 188359286
  },
  {
    date: "2014-01-21",
    value: 197986542
  },
  {
    date: "2014-01-22",
    value: 201179924
  },
  {
    date: "2014-01-23",
    value: 197109572
  },
  {
    date: "2014-01-24",
    value: 203816953
  },
  {
    date: "2014-01-25",
    value: 206437018
  },
  {
    date: "2014-01-26",
    value: 192589536
  },
  {
    date: "2014-01-27",
    value: 193870752
  },
  {
    date: "2014-01-28",
    value: 178677697
  },
  {
    date: "2014-01-29",
    value: 193082360
  },
  {
    date: "2014-01-30",
    value: 206135273
  },
  {
    date: "2014-01-31",
    value: 217716228
  },
  {
    date: "2014-02-01",
    value: 219668960
  },
  {
    date: "2014-02-02",
    value: 216560467
  },
  {
    date: "2014-02-03",
    value: 212632416
  },
  {
    date: "2014-02-04",
    value: 201790141
  },
  {
    date: "2014-02-05",
    value: 199824076
  },
  {
    date: "2014-02-06",
    value: 195496340
  },
  {
    date: "2014-02-07",
    value: 176861988
  },
  {
    date: "2014-02-08",
    value: 172693161
  },
  {
    date: "2014-02-09",
    value: 153779757
  },
  {
    date: "2014-02-10",
    value: 158907768
  },
  {
    date: "2014-02-11",
    value: 147799217
  },
  {
    date: "2014-02-12",
    value: 156781651
  },
  {
    date: "2014-02-13",
    value: 151247261
  },
  {
    date: "2014-02-14",
    value: 142783453
  },
  {
    date: "2014-02-15",
    value: 137501856
  },
  {
    date: "2014-02-16",
    value: 135170655
  },
  {
    date: "2014-02-17",
    value: 123625262
  },
  {
    date: "2014-02-18",
    value: 114841902
  },
  {
    date: "2014-02-19",
    value: 99230188
  },
  {
    date: "2014-02-20",
    value: 92192889
  },
  {
    date: "2014-02-21",
    value: 95903494
  },
  {
    date: "2014-02-22",
    value: 103475784
  },
  {
    date: "2014-02-23",
    value: 118763836
  },
  {
    date: "2014-02-24",
    value: 121488205
  },
  {
    date: "2014-02-25",
    value: 120137693
  },
  {
    date: "2014-02-26",
    value: 139207613
  },
  {
    date: "2014-02-27",
    value: 123627758
  },
  {
    date: "2014-02-28",
    value: 119696385
  },
  {
    date: "2014-03-01",
    value: 119254629
  },
  {
    date: "2014-03-02",
    value: 104733639
  },
  {
    date: "2014-03-03",
    value: 118265893
  },
  {
    date: "2014-03-04",
    value: 119990564
  },
  {
    date: "2014-03-05",
    value: 118016680
  },
  {
    date: "2014-03-06",
    value: 94543746
  },
  {
    date: "2014-03-07",
    value: 106885704
  },
  {
    date: "2014-03-08",
    value: 104838653
  },
  {
    date: "2014-03-09",
    value: 103884351
  },
  {
    date: "2014-03-10",
    value: 117445285
  },
  {
    date: "2014-03-11",
    value: 126193316
  },
  {
    date: "2014-03-12",
    value: 119012056
  },
  {
    date: "2014-03-13",
    value: 131149610
  },
  {
    date: "2014-03-14",
    value: 126886924
  },
  {
    date: "2014-03-15",
    value: 129937436
  },
  {
    date: "2014-03-16",
    value: 139663841
  },
  {
    date: "2014-03-17",
    value: 143331182
  },
  {
    date: "2014-03-18",
    value: 126935769
  },
  {
    date: "2014-03-19",
    value: 113844155
  },
  {
    date: "2014-03-20",
    value: 110360367
  },
  {
    date: "2014-03-21",
    value: 129320432
  },
  {
    date: "2014-03-22",
    value: 131909432
  },
  {
    date: "2014-03-23",
    value: 125033165
  },
  {
    date: "2014-03-24",
    value: 136642955
  },
  {
    date: "2014-03-25",
    value: 122678043
  },
  {
    date: "2014-03-26",
    value: 114541991
  },
  {
    date: "2014-03-27",
    value: 115593216
  },
  {
    date: "2014-03-28",
    value: 114127182
  },
  {
    date: "2014-03-29",
    value: 110959203
  },
  {
    date: "2014-03-30",
    value: 108933578
  },
  {
    date: "2014-03-31",
    value: 93673839
  },
  {
    date: "2014-04-01",
    value: 107371510
  },
  {
    date: "2014-04-02",
    value: 99025894
  },
  {
    date: "2014-04-03",
    value: 89663192
  },
  {
    date: "2014-04-04",
    value: 78628478
  },
  {
    date: "2014-04-05",
    value: 65319283
  },
  {
    date: "2014-04-06",
    value: 77274968
  },
  {
    date: "2014-04-07",
    value: 84998680
  },
  {
    date: "2014-04-08",
    value: 93109973
  },
  {
    date: "2014-04-09",
    value: 96142409
  },
  {
    date: "2014-04-10",
    value: 92968927
  },
  {
    date: "2014-04-11",
    value: 89943533
  },
  {
    date: "2014-04-12",
    value: 79218421
  },
  {
    date: "2014-04-13",
    value: 74473525
  },
  {
    date: "2014-04-14",
    value: 68466798
  },
  {
    date: "2014-04-15",
    value: 74822001
  },
  {
    date: "2014-04-16",
    value: 71042505
  },
  {
    date: "2014-04-17",
    value: 80304983
  },
  {
    date: "2014-04-18",
    value: 98256320
  },
  {
    date: "2014-04-19",
    value: 94119379
  },
  {
    date: "2014-04-20",
    value: 96317046
  },
  {
    date: "2014-04-21",
    value: 107713238
  },
  {
    date: "2014-04-22",
    value: 104198751
  },
  {
    date: "2014-04-23",
    value: 118067785
  },
  {
    date: "2014-04-24",
    value: 117588802
  },
  {
    date: "2014-04-25",
    value: 113531702
  },
  {
    date: "2014-04-26",
    value: 102600971
  },
  {
    date: "2014-04-27",
    value: 111673005
  },
  {
    date: "2014-04-28",
    value: 127277540
  },
  {
    date: "2014-04-29",
    value: 116293528
  },
  {
    date: "2014-04-30",
    value: 112996597
  }
];

// const MetricsGraph = () => {
//   return (
//     <div id="main">
//       <MetricsGraphics
//         title="Downloads"
//         description="This graphic shows a time-series of downloads."
//         data={[
//           { date: new Date("2014-11-01"), value: 12 },
//           { date: new Date("2014-11-02"), value: 18 }
//         ]}
//         width={600}
//         height={250}
//         x_accessor="date"
//         y_accessor="value"
//         brush="xy"
//         target="#main"
//       />
//     </div>
//   );
// };

// const MetricsGraph = () => {
//   var tdata = MG.convert.date(metricdata, "date");
//   console.log(tdata);
//   return (
//     <div id='main'>
//       <MetricsGraphics
//         title="Downloads"
//         description="This graphic shows a time-series of downloads."
//         data={tdata}
//         width={600}
//         height={250}
//         x_accessor="date"
//         y_accessor="value"
//         missing_is_hidden={true}
//         target='#main'
//         brush="xy"
//       />
//     </div>
//   );
// };

const MetricsGraph = () => {

    useEffect(() => {
        d3.json('metrics.json').then(data => {
            
            data = MG.convert.date(data, 'date');
   
     
            MG.data_graphic({
                title: "Downloads",
                data: data,
                width: 600,
                height: 250,
                missing_is_hidden: true,
                target: '#metric',
                brush: 'x'
            })


        })

        
    },[])

    return(
        <div id='metric'></div>
    )
  };


  

export default MetricsGraph;
