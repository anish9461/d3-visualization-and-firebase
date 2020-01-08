(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{12:function(t,e,a){},49:function(t,e,a){t.exports=a(87)},54:function(t,e,a){},65:function(t,e,a){},87:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(43),i=a.n(c),l=(a(54),a(17)),s=a(18),o=a(22),u=a(19),d=a(23),f=(a(12),function(t){function e(){return Object(l.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"SVG Shapes"),r.a.createElement("svg",{width:"600",height:"350"},r.a.createElement("rect",{x:"250",y:"40",fill:"blue",width:"100",height:"200"}),r.a.createElement("circle",{cx:"200",cy:"200",r:"50",fill:"pink",stroke:"red",strokeWidth:"3"}),r.a.createElement("line",{x1:"100",y1:"100",x2:"120",y2:"220",stroke:"grey",strokeWidth:"3"}),r.a.createElement("path",{d:"M150 50 L 75 200 L 225 200 C 225 200 150 150 150 50",fill:"orange"}),r.a.createElement("circle",{cx:"150",cy:"150",r:"5",fill:"grey"}),r.a.createElement("line",{x1:"225",y1:"200",x2:"150",y2:"150",stroke:"grey"})))}}]),e}(n.Component)),h=a(3),m=function(t){function e(){return Object(l.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=h.select(".canvas").append("svg").attr("height",325).attr("width",600),e=t.append("g").attr("transform","translate(0, 100)");e.append("rect").attr("width",200).attr("height",100).attr("fill","blue").attr("x",20).attr("y",20),e.append("circle").attr("r",50).attr("cx",300).attr("cy",70).attr("fill","pink"),e.append("line").attr("x1",370).attr("x2",400).attr("y1",20).attr("y2",120).attr("stroke","red"),t.append("text").attr("x",20).attr("y",200).attr("fill","grey").text("Hello D3!").style("font-family","arial")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"canvas"},r.a.createElement("h2",null,"SVG using D3")))}}]),e}(n.Component),p=[{width:200,height:100,fill:"red"},{width:100,height:60,fill:"purple"},{width:50,height:30,fill:"yellow"}],g=function(){return Object(n.useEffect)((function(){h.select(".data_svg").selectAll("rect").data(p).attr("width",(function(t,e,a){return t.width})).attr("height",(function(t){return t.height})).attr("fill",(function(t){return t.fill})).attr("x",200).enter().append("rect").attr("width",(function(t,e,a){return t.width})).attr("height",(function(t){return t.height})).attr("fill",(function(t){return t.fill})).attr("x",200)}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Using Data with D3"),r.a.createElement("div",{className:"canvas"},r.a.createElement("svg",{className:"data_svg",width:"600",height:"200"},r.a.createElement("rect",null))))},v=function(){return Object(n.useEffect)((function(){var t=h.select(".data_svg_external");h.json("planets.json").then((function(e){var a=t.selectAll("circle").data(e);a.attr("cy",200).attr("cx",(function(t){return t.distance})).attr("r",(function(t){return t.radius})).attr("fill",(function(t){return t.fill})),a.enter().append("circle").attr("cy",200).attr("cx",(function(t){return t.distance})).attr("r",(function(t){return t.radius})).attr("fill",(function(t){return t.fill}))}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Using External JSON Data with D3"),r.a.createElement("div",{className:"canvas"},r.a.createElement("svg",{className:"data_svg_external",width:"600",height:"500"})))},E=function(){return Object(n.useEffect)((function(){var t=h.select(".data_chart"),e=20,a=100,n=600-a-20,r=600-e-100,c=t.append("g").attr("width",n).attr("height",r).attr("transform","translate(".concat(a,",").concat(e,")")),i=c.append("g").attr("transform","translate(0, ".concat(r,")")),l=c.append("g");h.json("menu.json").then((function(t){h.min(t,(function(t){return t.orders}));var e=h.max(t,(function(t){return t.orders})),a=(h.extent(t,(function(t){return t.orders})),h.scaleLinear().domain([e,0]).range([0,r])),n=h.scaleBand().domain(t.map((function(t){return t.name}))).range([0,500]).paddingInner(.2).paddingOuter(.2);c.selectAll("rect").data(t).enter().append("rect").attr("width",n.bandwidth()).attr("height",(function(t){return r-a(0)})).attr("fill","orange").attr("x",(function(t){return n(t.name)})).attr("y",(function(t){return a(0)}));var s=h.axisBottom(n),o=h.axisLeft(a).ticks(3).tickFormat((function(t){return t+" orders"}));i.call(s),l.call(o),i.selectAll("text").attr("transform","rotate(-40)").attr("text-anchor","end").attr("fill","orange"),c.selectAll("rect").transition().duration(800).attr("height",(function(t){return r-a(t.orders)})).attr("y",(function(t){return a(t.orders)})).delay((function(t,e){return 100*e}))}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Bar Chart using External JSON Data with D3"),r.a.createElement("div",{className:"canvas"},r.a.createElement("svg",{className:"data_chart",width:"600",height:"600"})))},y=a(32),w=a.n(y),b=function(){return Object(n.useEffect)((function(){w.a.initializeApp({apiKey:"AIzaSyC5aNwZmqnGy3YFtZuL3FSBENZH_1awUSY",authDomain:"d3-visualizations-d6823.firebaseapp.com",databaseURL:"https://d3-visualizations-d6823.firebaseio.com",projectId:"d3-visualizations-d6823",storageBucket:"d3-visualizations-d6823.appspot.com",messagingSenderId:"89229636545",appId:"1:89229636545:web:47d2ce2f1f8f795fc7b540",measurementId:"G-WR1R8S5WLT"});var t=w.a.firestore();t.settings({timestampsInSnapshots:!0});var e=h.select(".data_chart_firebase"),a=20,n=100,r=600-n-20,c=600-a-100,i=e.append("g").attr("width",r).attr("height",c).attr("transform","translate(".concat(n,",").concat(a,")")),l=i.append("g").attr("transform","translate(0, ".concat(c,")")),s=i.append("g");t.collection("dishes").get().then((function(t){var e=[];t.docs.forEach((function(t){e.push(t.data())}));h.min(e,(function(t){return t.orders}));var a=h.max(e,(function(t){return t.orders})),n=(h.extent(e,(function(t){return t.orders})),h.scaleLinear().domain([a,0]).range([0,c])),r=h.scaleBand().domain(e.map((function(t){return t.name}))).range([0,500]).paddingInner(.2).paddingOuter(.2);i.selectAll("rect").data(e).enter().append("rect").attr("width",r.bandwidth()).attr("height",(function(t){return c-n(0)})).attr("fill","orange").attr("x",(function(t){return r(t.name)})).attr("y",(function(t){return n(0)}));var o=h.axisBottom(r),u=h.axisLeft(n).ticks(3).tickFormat((function(t){return t+" orders"}));l.call(o),s.call(u),l.selectAll("text").attr("transform","rotate(-40)").attr("text-anchor","end").attr("fill","orange"),i.selectAll("rect").transition().duration(800).attr("height",(function(t){return c-n(t.orders)})).attr("y",(function(t){return n(t.orders)})).delay((function(t,e){return 100*e}))}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Bar Chart using Firebase Data"),r.a.createElement("div",{className:"canvas"},r.a.createElement("svg",{className:"data_chart_firebase",width:"600",height:"600"})))},x=a(48),j=(a(65),a(33));Object(j.a)(h);var O=function(){var t=Object(n.useState)(0),e=Object(x.a)(t,2),a=e[0],c=e[1];return Object(n.useEffect)((function(){var t=Math.min(500,500)/2,e=.3*t,n=h.pie().sort(null).value((function(t){return t.width})),r=Object(j.a)().attr("class","d3-tip").offset([0,0]).html((function(t){return t.data.label+": <span style='color:orangered'>"+t.data.score+"</span>"})),i=h.arc().innerRadius(e).outerRadius((function(a){return(t-e)*(a.data.score/100)+e})),l=h.arc().innerRadius(e).outerRadius(t),s=h.select(".aster").append("svg").attr("width",500).attr("height",500).append("g").attr("transform","translate(250,250)");s.call(r),h.csv("aster_data.csv").then((function(t){console.log(t),t.forEach((function(t){t.id=t.id,t.order=+t.order,t.color=t.color,t.weight=+t.weight,t.score=+t.score,t.width=+t.weight,t.label=t.label}));s.selectAll(".solidArc").data(n(t)).enter().append("path").attr("fill",(function(t){return t.data.color})).attr("class","solidArc").attr("stroke","gray").attr("d",i).on("mouseover",(function(t,e){r.show(t,this),c(t.data.score)})).on("mouseout",r.hide),s.selectAll(".outlineArc").data(n(t)).enter().append("path").attr("fill","none").attr("stroke","gray").attr("class","outlineArc").attr("d",l),t.reduce((function(t,e){return t+e.score*e.weight}),0),t.reduce((function(t,e){return t+e.weight}),0);console.log(a),s.append("svg:text").attr("class","aster-score").attr("dy",".35em").attr("text-anchor","middle")}))}),[]),Object(n.useEffect)((function(){h.select(".aster").select(".aster-score").text(a)})),r.a.createElement("div",{className:"aster"})},k=a(45),A=a.n(k),N=function(t){return r.a.createElement("div",{style:{marginTop:"50px"}},r.a.createElement(A.a,null))},_=a(46),D=a.n(_),S=function(t){return r.a.createElement("div",null,r.a.createElement(D.a,null))},B=a(47),I=a.n(B),L=function(t){return r.a.createElement("div",null,r.a.createElement(I.a,{value:40,width:400,height:320,label:"This is my Gauge"}))},z=function(t){function e(){return Object(l.a)(this,e),Object(o.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"D3 Visualizations"),r.a.createElement(f,null),r.a.createElement(m,null),r.a.createElement(g,null),r.a.createElement(v,null),r.a.createElement(E,null),r.a.createElement(b,null),r.a.createElement(O,null),r.a.createElement(N,null),r.a.createElement(S,null),r.a.createElement(L,null))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.98fb2006.chunk.js.map