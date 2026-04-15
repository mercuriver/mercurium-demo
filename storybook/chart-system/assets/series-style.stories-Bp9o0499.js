import{C as h}from"./chart-engine-DfSOGJk-.js";import{L as u,T as b}from"./tooltip-plugin-C3STccdv.js";const g={title:"Charts/Features/Series Style"};function r(e,n,a,y={}){const t=new h(e,n,{responsive:!1,width:600,height:360,legend:{show:!0},tooltip:{show:!0,shared:!0,highlightSeries:!0},...y});return t.installPlugin(new u),t.installPlugin(new b),t.setData(a),t}function o(e){const n=document.createElement("div");n.style.marginBottom="32px";const a=document.createElement("div");a.style.fontSize="14px",a.style.fontWeight="600",a.style.marginBottom="8px",a.textContent=e,n.appendChild(a);const y=document.createElement("div");return y.style.width="600px",y.style.height="360px",y.style.border="1px solid #e2e8f0",y.style.borderRadius="4px",n.appendChild(y),{wrapper:n,container:y}}const s={render:()=>{const{wrapper:e,container:n}=o("Line: dashStyle per series");return r(n,"line",{xAxisType:"number",series:[{key:"solid",label:"Solid (default)",data:[{x:1,y:50},{x:2,y:80},{x:3,y:60},{x:4,y:90},{x:5,y:70},{x:6,y:100}]},{key:"dashed",label:"Dashed",dashStyle:"dashed",data:[{x:1,y:40},{x:2,y:70},{x:3,y:55},{x:4,y:85},{x:5,y:65},{x:6,y:95}]},{key:"dotted",label:"Dotted",dashStyle:"dotted",data:[{x:1,y:30},{x:2,y:60},{x:3,y:45},{x:4,y:75},{x:5,y:55},{x:6,y:85}]},{key:"dash-dot",label:"Dash-Dot",dashStyle:"dash-dot",data:[{x:1,y:20},{x:2,y:50},{x:3,y:35},{x:4,y:65},{x:5,y:45},{x:6,y:75}]},{key:"long-dash",label:"Long-Dash",dashStyle:"long-dash",data:[{x:1,y:10},{x:2,y:40},{x:3,y:25},{x:4,y:55},{x:5,y:35},{x:6,y:65}]},{key:"custom",label:"Custom (10,5,3,5)",dashStyle:"10,5,3,5",data:[{x:1,y:5},{x:2,y:30},{x:3,y:15},{x:4,y:45},{x:5,y:25},{x:6,y:55}]}]},{line:{width:2.5,curve:"smooth"}}),e}},x={render:()=>{const{wrapper:e,container:n}=o("Line: opacity per series");return r(n,"line",{xAxisType:"number",series:[{key:"full",label:"Opacity 1.0",opacity:1,data:[{x:1,y:80},{x:2,y:120},{x:3,y:100},{x:4,y:140},{x:5,y:110},{x:6,y:150}]},{key:"mid",label:"Opacity 0.5",opacity:.5,data:[{x:1,y:70},{x:2,y:110},{x:3,y:90},{x:4,y:130},{x:5,y:100},{x:6,y:140}]},{key:"low",label:"Opacity 0.2",opacity:.2,data:[{x:1,y:60},{x:2,y:100},{x:3,y:80},{x:4,y:120},{x:5,y:90},{x:6,y:130}]}]},{line:{width:3,dots:!0}}),e}},i={render:()=>{const e=document.createElement("div"),{wrapper:n,container:a}=o("Area: series.opacity * AreaOptions.opacity (area opacity=0.3)");r(a,"area",{xAxisType:"number",series:[{key:"full",label:"Series opacity 1.0",opacity:1,data:[{x:1,y:80},{x:2,y:120},{x:3,y:100},{x:4,y:140},{x:5,y:110},{x:6,y:150}]},{key:"half",label:"Series opacity 0.5",opacity:.5,data:[{x:1,y:60},{x:2,y:100},{x:3,y:80},{x:4,y:120},{x:5,y:90},{x:6,y:130}]},{key:"quarter",label:"Series opacity 0.25",opacity:.25,dashStyle:"dashed",data:[{x:1,y:40},{x:2,y:80},{x:3,y:60},{x:4,y:100},{x:5,y:70},{x:6,y:110}]}]},{area:{opacity:.3}}),e.appendChild(n);const{wrapper:t,container:p}=o("Area: dashStyle on outline stroke");return r(p,"area",{xAxisType:"number",series:[{key:"solid-area",label:"Solid outline",data:[{x:1,y:90},{x:2,y:130},{x:3,y:110},{x:4,y:150},{x:5,y:120},{x:6,y:160}]},{key:"dashed-area",label:"Dashed outline",dashStyle:"dashed",data:[{x:1,y:50},{x:2,y:90},{x:3,y:70},{x:4,y:110},{x:5,y:80},{x:6,y:120}]},{key:"dotted-area",label:"Dotted outline",dashStyle:"dotted",data:[{x:1,y:30},{x:2,y:60},{x:3,y:45},{x:4,y:75},{x:5,y:55},{x:6,y:85}]}]},{area:{opacity:.4}}),e.appendChild(t),e}},d={render:()=>{const{wrapper:e,container:n}=o("Bar: opacity per series");return r(n,"bar",{xAxisType:"category",series:[{key:"full-bar",label:"Opacity 1.0",opacity:1,data:[{x:"Q1",y:120},{x:"Q2",y:180},{x:"Q3",y:150},{x:"Q4",y:210}]},{key:"mid-bar",label:"Opacity 0.5",opacity:.5,data:[{x:"Q1",y:80},{x:"Q2",y:95},{x:"Q3",y:110},{x:"Q4",y:105}]},{key:"low-bar",label:"Opacity 0.3",opacity:.3,data:[{x:"Q1",y:40},{x:"Q2",y:85},{x:"Q3",y:40},{x:"Q4",y:105}]}]}),e}},l={render:()=>{const{wrapper:e,container:n}=o("Scatter: opacity per series"),a={xAxisType:"number",series:[{key:"group-full",label:"Opacity 1.0",opacity:1,data:Array.from({length:20},(y,t)=>({x:10+t*3,y:50+Math.sin(t*.5)*30}))},{key:"group-half",label:"Opacity 0.5",opacity:.5,data:Array.from({length:20},(y,t)=>({x:12+t*3,y:40+Math.cos(t*.7)*25}))}]};return r(n,"scatter",a,{scatter:{dotSize:6}}),e}},c={render:()=>{const{wrapper:e,container:n}=o("Combo: line dashStyle + area opacity + bar opacity");return r(n,"combo",{xAxisType:"category",series:[{key:"revenue",label:"Revenue (bar)",seriesType:"bar",opacity:.7,data:[{x:"Jan",y:120},{x:"Feb",y:180},{x:"Mar",y:150},{x:"Apr",y:210},{x:"May",y:190},{x:"Jun",y:250}]},{key:"trend",label:"Trend (dashed line)",seriesType:"line",dashStyle:"dashed",data:[{x:"Jan",y:100},{x:"Feb",y:130},{x:"Mar",y:140},{x:"Apr",y:170},{x:"May",y:180},{x:"Jun",y:220}]},{key:"target",label:"Target (dotted line, 0.5)",seriesType:"line",dashStyle:"dotted",opacity:.5,data:[{x:"Jan",y:150},{x:"Feb",y:155},{x:"Mar",y:160},{x:"Apr",y:165},{x:"May",y:170},{x:"Jun",y:175}]},{key:"range",label:"Range (area, dashed outline)",seriesType:"area",dashStyle:"long-dash",opacity:.6,data:[{x:"Jan",y:80},{x:"Feb",y:100},{x:"Mar",y:90},{x:"Apr",y:120},{x:"May",y:110},{x:"Jun",y:140}]}]},{line:{width:2.5},area:{opacity:.3}}),e}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      wrapper,
      container
    } = makeSection('Line: dashStyle per series');
    const data: ChartData = {
      xAxisType: 'number',
      series: [{
        key: 'solid',
        label: 'Solid (default)',
        data: [{
          x: 1,
          y: 50
        }, {
          x: 2,
          y: 80
        }, {
          x: 3,
          y: 60
        }, {
          x: 4,
          y: 90
        }, {
          x: 5,
          y: 70
        }, {
          x: 6,
          y: 100
        }]
      }, {
        key: 'dashed',
        label: 'Dashed',
        dashStyle: 'dashed',
        data: [{
          x: 1,
          y: 40
        }, {
          x: 2,
          y: 70
        }, {
          x: 3,
          y: 55
        }, {
          x: 4,
          y: 85
        }, {
          x: 5,
          y: 65
        }, {
          x: 6,
          y: 95
        }]
      }, {
        key: 'dotted',
        label: 'Dotted',
        dashStyle: 'dotted',
        data: [{
          x: 1,
          y: 30
        }, {
          x: 2,
          y: 60
        }, {
          x: 3,
          y: 45
        }, {
          x: 4,
          y: 75
        }, {
          x: 5,
          y: 55
        }, {
          x: 6,
          y: 85
        }]
      }, {
        key: 'dash-dot',
        label: 'Dash-Dot',
        dashStyle: 'dash-dot',
        data: [{
          x: 1,
          y: 20
        }, {
          x: 2,
          y: 50
        }, {
          x: 3,
          y: 35
        }, {
          x: 4,
          y: 65
        }, {
          x: 5,
          y: 45
        }, {
          x: 6,
          y: 75
        }]
      }, {
        key: 'long-dash',
        label: 'Long-Dash',
        dashStyle: 'long-dash',
        data: [{
          x: 1,
          y: 10
        }, {
          x: 2,
          y: 40
        }, {
          x: 3,
          y: 25
        }, {
          x: 4,
          y: 55
        }, {
          x: 5,
          y: 35
        }, {
          x: 6,
          y: 65
        }]
      }, {
        key: 'custom',
        label: 'Custom (10,5,3,5)',
        dashStyle: '10,5,3,5',
        data: [{
          x: 1,
          y: 5
        }, {
          x: 2,
          y: 30
        }, {
          x: 3,
          y: 15
        }, {
          x: 4,
          y: 45
        }, {
          x: 5,
          y: 25
        }, {
          x: 6,
          y: 55
        }]
      }]
    };
    createChart(container, 'line', data, {
      line: {
        width: 2.5,
        curve: 'smooth'
      }
    });
    return wrapper;
  }
}`,...s.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      wrapper,
      container
    } = makeSection('Line: opacity per series');
    const data: ChartData = {
      xAxisType: 'number',
      series: [{
        key: 'full',
        label: 'Opacity 1.0',
        opacity: 1.0,
        data: [{
          x: 1,
          y: 80
        }, {
          x: 2,
          y: 120
        }, {
          x: 3,
          y: 100
        }, {
          x: 4,
          y: 140
        }, {
          x: 5,
          y: 110
        }, {
          x: 6,
          y: 150
        }]
      }, {
        key: 'mid',
        label: 'Opacity 0.5',
        opacity: 0.5,
        data: [{
          x: 1,
          y: 70
        }, {
          x: 2,
          y: 110
        }, {
          x: 3,
          y: 90
        }, {
          x: 4,
          y: 130
        }, {
          x: 5,
          y: 100
        }, {
          x: 6,
          y: 140
        }]
      }, {
        key: 'low',
        label: 'Opacity 0.2',
        opacity: 0.2,
        data: [{
          x: 1,
          y: 60
        }, {
          x: 2,
          y: 100
        }, {
          x: 3,
          y: 80
        }, {
          x: 4,
          y: 120
        }, {
          x: 5,
          y: 90
        }, {
          x: 6,
          y: 130
        }]
      }]
    };
    createChart(container, 'line', data, {
      line: {
        width: 3,
        dots: true
      }
    });
    return wrapper;
  }
}`,...x.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = document.createElement('div');

    // Area with series opacity
    const {
      wrapper: w1,
      container: c1
    } = makeSection('Area: series.opacity * AreaOptions.opacity (area opacity=0.3)');
    const areaData: ChartData = {
      xAxisType: 'number',
      series: [{
        key: 'full',
        label: 'Series opacity 1.0',
        opacity: 1.0,
        data: [{
          x: 1,
          y: 80
        }, {
          x: 2,
          y: 120
        }, {
          x: 3,
          y: 100
        }, {
          x: 4,
          y: 140
        }, {
          x: 5,
          y: 110
        }, {
          x: 6,
          y: 150
        }]
      }, {
        key: 'half',
        label: 'Series opacity 0.5',
        opacity: 0.5,
        data: [{
          x: 1,
          y: 60
        }, {
          x: 2,
          y: 100
        }, {
          x: 3,
          y: 80
        }, {
          x: 4,
          y: 120
        }, {
          x: 5,
          y: 90
        }, {
          x: 6,
          y: 130
        }]
      }, {
        key: 'quarter',
        label: 'Series opacity 0.25',
        opacity: 0.25,
        dashStyle: 'dashed',
        data: [{
          x: 1,
          y: 40
        }, {
          x: 2,
          y: 80
        }, {
          x: 3,
          y: 60
        }, {
          x: 4,
          y: 100
        }, {
          x: 5,
          y: 70
        }, {
          x: 6,
          y: 110
        }]
      }]
    };
    createChart(c1, 'area', areaData, {
      area: {
        opacity: 0.3
      }
    });
    root.appendChild(w1);

    // Area with dashStyle on outline
    const {
      wrapper: w2,
      container: c2
    } = makeSection('Area: dashStyle on outline stroke');
    const areaDashData: ChartData = {
      xAxisType: 'number',
      series: [{
        key: 'solid-area',
        label: 'Solid outline',
        data: [{
          x: 1,
          y: 90
        }, {
          x: 2,
          y: 130
        }, {
          x: 3,
          y: 110
        }, {
          x: 4,
          y: 150
        }, {
          x: 5,
          y: 120
        }, {
          x: 6,
          y: 160
        }]
      }, {
        key: 'dashed-area',
        label: 'Dashed outline',
        dashStyle: 'dashed',
        data: [{
          x: 1,
          y: 50
        }, {
          x: 2,
          y: 90
        }, {
          x: 3,
          y: 70
        }, {
          x: 4,
          y: 110
        }, {
          x: 5,
          y: 80
        }, {
          x: 6,
          y: 120
        }]
      }, {
        key: 'dotted-area',
        label: 'Dotted outline',
        dashStyle: 'dotted',
        data: [{
          x: 1,
          y: 30
        }, {
          x: 2,
          y: 60
        }, {
          x: 3,
          y: 45
        }, {
          x: 4,
          y: 75
        }, {
          x: 5,
          y: 55
        }, {
          x: 6,
          y: 85
        }]
      }]
    };
    createChart(c2, 'area', areaDashData, {
      area: {
        opacity: 0.4
      }
    });
    root.appendChild(w2);
    return root;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      wrapper,
      container
    } = makeSection('Bar: opacity per series');
    const data: ChartData = {
      xAxisType: 'category',
      series: [{
        key: 'full-bar',
        label: 'Opacity 1.0',
        opacity: 1.0,
        data: [{
          x: 'Q1',
          y: 120
        }, {
          x: 'Q2',
          y: 180
        }, {
          x: 'Q3',
          y: 150
        }, {
          x: 'Q4',
          y: 210
        }]
      }, {
        key: 'mid-bar',
        label: 'Opacity 0.5',
        opacity: 0.5,
        data: [{
          x: 'Q1',
          y: 80
        }, {
          x: 'Q2',
          y: 95
        }, {
          x: 'Q3',
          y: 110
        }, {
          x: 'Q4',
          y: 105
        }]
      }, {
        key: 'low-bar',
        label: 'Opacity 0.3',
        opacity: 0.3,
        data: [{
          x: 'Q1',
          y: 40
        }, {
          x: 'Q2',
          y: 85
        }, {
          x: 'Q3',
          y: 40
        }, {
          x: 'Q4',
          y: 105
        }]
      }]
    };
    createChart(container, 'bar', data);
    return wrapper;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      wrapper,
      container
    } = makeSection('Scatter: opacity per series');
    const data: ChartData = {
      xAxisType: 'number',
      series: [{
        key: 'group-full',
        label: 'Opacity 1.0',
        opacity: 1.0,
        data: Array.from({
          length: 20
        }, (_, i) => ({
          x: 10 + i * 3,
          y: 50 + Math.sin(i * 0.5) * 30
        }))
      }, {
        key: 'group-half',
        label: 'Opacity 0.5',
        opacity: 0.5,
        data: Array.from({
          length: 20
        }, (_, i) => ({
          x: 12 + i * 3,
          y: 40 + Math.cos(i * 0.7) * 25
        }))
      }]
    };
    createChart(container, 'scatter', data, {
      scatter: {
        dotSize: 6
      }
    });
    return wrapper;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      wrapper,
      container
    } = makeSection('Combo: line dashStyle + area opacity + bar opacity');
    const data: ChartData = {
      xAxisType: 'category',
      series: [{
        key: 'revenue',
        label: 'Revenue (bar)',
        seriesType: 'bar',
        opacity: 0.7,
        data: [{
          x: 'Jan',
          y: 120
        }, {
          x: 'Feb',
          y: 180
        }, {
          x: 'Mar',
          y: 150
        }, {
          x: 'Apr',
          y: 210
        }, {
          x: 'May',
          y: 190
        }, {
          x: 'Jun',
          y: 250
        }]
      }, {
        key: 'trend',
        label: 'Trend (dashed line)',
        seriesType: 'line',
        dashStyle: 'dashed',
        data: [{
          x: 'Jan',
          y: 100
        }, {
          x: 'Feb',
          y: 130
        }, {
          x: 'Mar',
          y: 140
        }, {
          x: 'Apr',
          y: 170
        }, {
          x: 'May',
          y: 180
        }, {
          x: 'Jun',
          y: 220
        }]
      }, {
        key: 'target',
        label: 'Target (dotted line, 0.5)',
        seriesType: 'line',
        dashStyle: 'dotted',
        opacity: 0.5,
        data: [{
          x: 'Jan',
          y: 150
        }, {
          x: 'Feb',
          y: 155
        }, {
          x: 'Mar',
          y: 160
        }, {
          x: 'Apr',
          y: 165
        }, {
          x: 'May',
          y: 170
        }, {
          x: 'Jun',
          y: 175
        }]
      }, {
        key: 'range',
        label: 'Range (area, dashed outline)',
        seriesType: 'area',
        dashStyle: 'long-dash',
        opacity: 0.6,
        data: [{
          x: 'Jan',
          y: 80
        }, {
          x: 'Feb',
          y: 100
        }, {
          x: 'Mar',
          y: 90
        }, {
          x: 'Apr',
          y: 120
        }, {
          x: 'May',
          y: 110
        }, {
          x: 'Jun',
          y: 140
        }]
      }]
    };
    createChart(container, 'combo', data, {
      line: {
        width: 2.5
      },
      area: {
        opacity: 0.3
      }
    });
    return wrapper;
  }
}`,...c.parameters?.docs?.source}}};const w=["LineDashStyles","LineOpacity","AreaOpacityCombined","BarOpacity","ScatterOpacity","ComboDashAndOpacity"];export{i as AreaOpacityCombined,d as BarOpacity,c as ComboDashAndOpacity,s as LineDashStyles,x as LineOpacity,l as ScatterOpacity,w as __namedExportsOrder,g as default};
