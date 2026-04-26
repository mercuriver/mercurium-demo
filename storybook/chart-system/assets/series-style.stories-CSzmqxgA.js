import{c as l,d as c,r as d,f as m,g as h}from"./story-utils-C7AxCJZg.js";const T={title:"Options/Series Style",args:{...l},argTypes:{...c}},p={xAxisType:"number",series:[{key:"solid",label:"Solid",data:Array.from({length:6},(a,e)=>({x:e+1,y:40+e*10}))},{key:"dashed",label:"Dashed",dashStyle:"dashed",data:Array.from({length:6},(a,e)=>({x:e+1,y:30+e*10}))},{key:"dotted",label:"Dotted",dashStyle:"dotted",data:Array.from({length:6},(a,e)=>({x:e+1,y:20+e*10}))},{key:"dash-dot",label:"Dash-Dot",dashStyle:"dash-dot",data:Array.from({length:6},(a,e)=>({x:e+1,y:10+e*10}))},{key:"long-dash",label:"Long-Dash",dashStyle:"long-dash",data:Array.from({length:6},(a,e)=>({x:e+1,y:0+e*10}))}]},i={xAxisType:"number",series:[{key:"full",label:"Opacity 1.0",opacity:1,data:Array.from({length:6},(a,e)=>({x:e+1,y:80+e*12}))},{key:"mid",label:"Opacity 0.5",opacity:.5,data:Array.from({length:6},(a,e)=>({x:e+1,y:70+e*12}))},{key:"low",label:"Opacity 0.2",opacity:.2,data:Array.from({length:6},(a,e)=>({x:e+1,y:60+e*12}))}]},u={xAxisType:"category",series:[{key:"full-bar",label:"Opacity 1.0",opacity:1,data:[{x:"Q1",y:120},{x:"Q2",y:180},{x:"Q3",y:150},{x:"Q4",y:210}]},{key:"mid-bar",label:"Opacity 0.5",opacity:.5,data:[{x:"Q1",y:80},{x:"Q2",y:95},{x:"Q3",y:110},{x:"Q4",y:105}]}]},y={xAxisType:"category",series:[{key:"sales",label:"Sales",data:[{x:"Jan",y:120},{x:"Feb",y:180},{x:"Mar",y:150},{x:"Apr",y:210},{x:"May",y:190},{x:"Jun",y:250}]}]},x={xAxisType:"number",series:[{key:"points",label:"Measurements",data:[{x:10,y:45},{x:20,y:78},{x:30,y:56},{x:40,y:92},{x:50,y:67},{x:60,y:84},{x:70,y:71},{x:80,y:95}]}]},g={xAxisType:"category",series:[{key:"revenue",label:"Revenue (bar)",seriesType:"bar",opacity:.7,data:[{x:"Jan",y:120},{x:"Feb",y:180},{x:"Mar",y:150},{x:"Apr",y:210},{x:"May",y:190},{x:"Jun",y:250}]},{key:"trend",label:"Trend (dashed line)",seriesType:"line",dashStyle:"dashed",data:[{x:"Jan",y:100},{x:"Feb",y:130},{x:"Mar",y:140},{x:"Apr",y:170},{x:"May",y:180},{x:"Jun",y:220}]},{key:"target",label:"Target (dotted, 0.5)",seriesType:"line",dashStyle:"dotted",opacity:.5,data:[{x:"Jan",y:150},{x:"Feb",y:155},{x:"Mar",y:160},{x:"Apr",y:165},{x:"May",y:170},{x:"Jun",y:175}]},{key:"range",label:"Range (area, long-dash)",seriesType:"area",dashStyle:"long-dash",opacity:.6,data:[{x:"Jan",y:80},{x:"Feb",y:100},{x:"Mar",y:90},{x:"Apr",y:120},{x:"May",y:110},{x:"Jun",y:140}]}]},n={parameters:{controls:{disable:!0}},render:a=>m("line",p,{frameTheme:a.frameTheme,line:{width:2.5,curve:"smooth"},legend:{show:!0}},{width:720,height:360})},t={parameters:{controls:{disable:!0}},render:a=>d([{type:"line",data:i,options:{frameTheme:a.frameTheme,line:{width:3,dots:!0},legend:{show:!0}},label:"Line"},{type:"area",data:i,options:{frameTheme:a.frameTheme,area:{opacity:.3},legend:{show:!0}},label:"Area (area.opacity × series.opacity)"},{type:"bar",data:u,options:{frameTheme:a.frameTheme,legend:{show:!0}},label:"Bar"},{type:"scatter",data:{xAxisType:"number",series:[{key:"full",label:"Opacity 1.0",opacity:1,data:Array.from({length:20},(e,r)=>({x:10+r*3,y:50+Math.sin(r*.5)*30}))},{key:"half",label:"Opacity 0.5",opacity:.5,data:Array.from({length:20},(e,r)=>({x:12+r*3,y:40+Math.cos(r*.7)*25}))}]},options:{frameTheme:a.frameTheme,scatter:{dotSize:6},legend:{show:!0}},label:"Scatter"}],{columns:2,cardHeight:280,hideDataSummary:!0})},s={parameters:{controls:{disable:!0}},render:a=>d([{type:"bar",data:y,options:{frameTheme:a.frameTheme,colorByPoint:!0,bar:{radius:4},legend:{show:!1}},label:"Bar · single-series colorByPoint"},{type:"bar",data:y,options:{frameTheme:a.frameTheme,colorByPoint:!0,inverted:!0,bar:{radius:4},legend:{show:!1}},label:"Inverted Bar · colorByPoint"},{type:"scatter",data:x,options:{frameTheme:a.frameTheme,colorByPoint:!0,scatter:{dotSize:6},legend:{show:!1}},label:"Scatter · colorByPoint"}],{columns:3,cardHeight:260,hideDataSummary:!0})},o={args:{...l,width:720,height:400},render:a=>m("combo",g,{...h(a),line:{width:2.5},area:{opacity:.3}},{fitContainer:a.fitContainer,width:a.width,height:a.height})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartSingle('line', DASH_DATA, {
    frameTheme: args.frameTheme,
    line: {
      width: 2.5,
      curve: 'smooth'
    },
    legend: {
      show: true
    }
  }, {
    width: 720,
    height: 360
  })
}`,...n.parameters?.docs?.source},description:{story:"`series[].dashStyle` 전체 프리셋 + custom -- 한 차트에 모아 비교.",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([{
    type: 'line',
    data: OPACITY_LINE,
    options: {
      frameTheme: args.frameTheme,
      line: {
        width: 3,
        dots: true
      },
      legend: {
        show: true
      }
    },
    label: 'Line'
  }, {
    type: 'area',
    data: OPACITY_LINE,
    options: {
      frameTheme: args.frameTheme,
      area: {
        opacity: 0.3
      },
      legend: {
        show: true
      }
    },
    label: 'Area (area.opacity × series.opacity)'
  }, {
    type: 'bar',
    data: OPACITY_BAR,
    options: {
      frameTheme: args.frameTheme,
      legend: {
        show: true
      }
    },
    label: 'Bar'
  }, {
    type: 'scatter',
    data: {
      xAxisType: 'number',
      series: [{
        key: 'full',
        label: 'Opacity 1.0',
        opacity: 1.0,
        data: Array.from({
          length: 20
        }, (_, i) => ({
          x: 10 + i * 3,
          y: 50 + Math.sin(i * 0.5) * 30
        }))
      }, {
        key: 'half',
        label: 'Opacity 0.5',
        opacity: 0.5,
        data: Array.from({
          length: 20
        }, (_, i) => ({
          x: 12 + i * 3,
          y: 40 + Math.cos(i * 0.7) * 25
        }))
      }]
    },
    options: {
      frameTheme: args.frameTheme,
      scatter: {
        dotSize: 6
      },
      legend: {
        show: true
      }
    },
    label: 'Scatter'
  }], {
    columns: 2,
    cardHeight: 280,
    hideDataSummary: true
  })
}`,...t.parameters?.docs?.source},description:{story:"`series[].opacity` × 차트 타입 -- line / area / bar / scatter 그리드.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([{
    type: 'bar',
    data: BAR_SINGLE_DATA,
    options: {
      frameTheme: args.frameTheme,
      colorByPoint: true,
      bar: {
        radius: 4
      },
      legend: {
        show: false
      }
    },
    label: 'Bar · single-series colorByPoint'
  }, {
    type: 'bar',
    data: BAR_SINGLE_DATA,
    options: {
      frameTheme: args.frameTheme,
      colorByPoint: true,
      inverted: true,
      bar: {
        radius: 4
      },
      legend: {
        show: false
      }
    },
    label: 'Inverted Bar · colorByPoint'
  }, {
    type: 'scatter',
    data: SCATTER_DATA,
    options: {
      frameTheme: args.frameTheme,
      colorByPoint: true,
      scatter: {
        dotSize: 6
      },
      legend: {
        show: false
      }
    },
    label: 'Scatter · colorByPoint'
  }], {
    columns: 3,
    cardHeight: 260,
    hideDataSummary: true
  })
}`,...s.parameters?.docs?.source},description:{story:"`colorByPoint` × 차트 타입 -- bar / inverted-bar / scatter 그리드.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    width: 720,
    height: 400
  },
  render: args => renderChartSingle('combo', COMBO_MIX_DATA, {
    ...commonOptionsFrom(args),
    line: {
      width: 2.5
    },
    area: {
      opacity: 0.3
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...o.parameters?.docs?.source},description:{story:"Combo에서 series.dashStyle + series.opacity + area.opacity가 어떻게 합성되는지.",...o.parameters?.docs?.description}}};const f=["DashStyles","OpacityAcrossTypes","ColorByPointTypes","ComboDashAndOpacity"];export{s as ColorByPointTypes,o as ComboDashAndOpacity,n as DashStyles,t as OpacityAcrossTypes,f as __namedExportsOrder,T as default};
