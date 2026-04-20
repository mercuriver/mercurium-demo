import{d as i,c,f as o,r as m}from"./story-utils-BiNSZ_VQ.js";const T={title:"Options/Zones",args:{...c},argTypes:{...i}},l={xAxisType:"category",series:[{key:"temp",label:"Temperature",data:[{x:"Jan",y:-5},{x:"Feb",y:-3},{x:"Mar",y:2},{x:"Apr",y:8},{x:"May",y:15},{x:"Jun",y:22},{x:"Jul",y:25},{x:"Aug",y:23},{x:"Sep",y:18},{x:"Oct",y:10},{x:"Nov",y:3},{x:"Dec",y:-2}],zones:[{value:0,color:"#3b82f6",dashStyle:"dashed"},{color:"#ef4444"}]}]},d={xAxisType:"category",series:[{key:"temp",label:"Temperature",data:l.series[0].data,zones:[{value:0,color:"#3b82f6",fillColor:"rgba(59,130,246,0.2)"},{value:15,color:"#f59e0b",fillColor:"rgba(245,158,11,0.2)"},{color:"#ef4444",fillColor:"rgba(239,68,68,0.2)"}]}]},y={xAxisType:"category",series:[{key:"profit",label:"Profit",data:[{x:"Q1",y:-20},{x:"Q2",y:5},{x:"Q3",y:30},{x:"Q4",y:50},{x:"Q5",y:-10},{x:"Q6",y:45}],zones:[{value:0,color:"#ef4444"},{value:25,color:"#f59e0b"},{color:"#22c55e"}]}]},h={xAxisType:"number",series:[{key:"scores",label:"Test Scores",data:[{x:1,y:35},{x:2,y:55},{x:3,y:72},{x:4,y:48},{x:5,y:90},{x:6,y:65},{x:7,y:82},{x:8,y:40},{x:9,y:95},{x:10,y:58}],zones:[{value:50,color:"#ef4444"},{value:70,color:"#f59e0b"},{color:"#22c55e"}]}]},p={xAxisType:"number",series:[{key:"signal",label:"Signal",data:Array.from({length:11},(e,t)=>({x:t,y:10+t*5+t*7%11})),zoneAxis:"x",zones:[{value:3,color:"#8b5cf6"},{value:7,color:"#06b6d4"},{color:"#22c55e"}]}]},x={xAxisType:"number",series:[{key:"forecast",label:"Forecast",data:[{x:1,y:100},{x:2,y:120},{x:3,y:110},{x:4,y:140},{x:5,y:130},{x:6,y:150},{x:7,y:145},{x:8,y:160}],zoneAxis:"x",zones:[{value:5,color:"#3b82f6"},{color:"#3b82f6",dashStyle:"dashed"}]}]},u={xAxisType:"category",series:[{key:"temp",label:"Temperature (°C)",data:l.series[0].data,zones:[{value:0,color:"#3b82f6",dashStyle:"dashed"},{value:20,color:"#f59e0b"},{color:"#ef4444"}]},{key:"rain",label:"Rainfall (mm)",data:[{x:"Jan",y:30},{x:"Feb",y:40},{x:"Mar",y:60},{x:"Apr",y:80},{x:"May",y:110},{x:"Jun",y:150},{x:"Jul",y:200},{x:"Aug",y:210},{x:"Sep",y:130},{x:"Oct",y:80},{x:"Nov",y:50},{x:"Dec",y:35}]}]},r={parameters:{controls:{disable:!0}},render:e=>m([{type:"line",data:l,options:{frameTheme:e.frameTheme,legend:{show:!0}},label:"Line · cold/hot"},{type:"area",data:d,options:{frameTheme:e.frameTheme,legend:{show:!0}},label:"Area · 3 zones with fillColor"},{type:"bar",data:y,options:{frameTheme:e.frameTheme,legend:{show:!0}},label:"Bar · loss/low/high"},{type:"scatter",data:h,options:{frameTheme:e.frameTheme,legend:{show:!0},scatter:{dotSize:6}},label:"Scatter · fail/pass/excellent"}],{columns:2,cardHeight:300,hideDataSummary:!0})},a={parameters:{controls:{disable:!0}},render:e=>o("line",p,{frameTheme:e.frameTheme,legend:{show:!0},tooltip:{show:!0,shared:!0},crosshair:{show:!0,type:"x"}},{width:600,height:360})},n={parameters:{controls:{disable:!0}},render:e=>o("line",x,{frameTheme:e.frameTheme,legend:{show:!0},tooltip:{show:!0}},{width:600,height:360})},s={parameters:{controls:{disable:!0}},render:e=>o("line",u,{frameTheme:e.frameTheme,legend:{show:!0},tooltip:{show:!0,shared:!0},crosshair:{show:!0,type:"x"},yAxis2SeriesKeys:["rain"],yAxis:{title:"Temperature (°C)"},yAxis2:{title:"Rainfall (mm)"}},{width:720,height:360})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([{
    type: 'line',
    data: TEMP_DATA,
    options: {
      frameTheme: args.frameTheme,
      legend: {
        show: true
      }
    },
    label: 'Line · cold/hot'
  }, {
    type: 'area',
    data: TEMP_AREA_DATA,
    options: {
      frameTheme: args.frameTheme,
      legend: {
        show: true
      }
    },
    label: 'Area · 3 zones with fillColor'
  }, {
    type: 'bar',
    data: PROFIT_BAR_DATA,
    options: {
      frameTheme: args.frameTheme,
      legend: {
        show: true
      }
    },
    label: 'Bar · loss/low/high'
  }, {
    type: 'scatter',
    data: SCATTER_ZONE_DATA,
    options: {
      frameTheme: args.frameTheme,
      legend: {
        show: true
      },
      scatter: {
        dotSize: 6
      }
    },
    label: 'Scatter · fail/pass/excellent'
  }], {
    columns: 2,
    cardHeight: 300,
    hideDataSummary: true
  })
}`,...r.parameters?.docs?.source},description:{story:"Y-value zones across chart types — Line / Area / Bar / Scatter.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartSingle('line', X_ZONE_DATA, {
    frameTheme: args.frameTheme,
    legend: {
      show: true
    },
    tooltip: {
      show: true,
      shared: true
    },
    crosshair: {
      show: true,
      type: 'x'
    }
  }, {
    width: 600,
    height: 360
  })
}`,...a.parameters?.docs?.source},description:{story:"`zoneAxis: 'x'` -- zones 경계가 x축 값 기준으로 전환.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartSingle('line', FORECAST_DATA, {
    frameTheme: args.frameTheme,
    legend: {
      show: true
    },
    tooltip: {
      show: true
    }
  }, {
    width: 600,
    height: 360
  })
}`,...n.parameters?.docs?.source},description:{story:"`zones[].dashStyle` + `zoneAxis: 'x'` -- 예측 구간만 점선.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartSingle('line', WEATHER_DUAL_DATA, {
    frameTheme: args.frameTheme,
    legend: {
      show: true
    },
    tooltip: {
      show: true,
      shared: true
    },
    crosshair: {
      show: true,
      type: 'x'
    },
    yAxis2SeriesKeys: ['rain'],
    yAxis: {
      title: 'Temperature (°C)'
    },
    yAxis2: {
      title: 'Rainfall (mm)'
    }
  }, {
    width: 720,
    height: 360
  })
}`,...s.parameters?.docs?.source},description:{story:"Dual Y-Axis + zones -- primary 시리즈에 zones, secondary는 별도 축.",...s.parameters?.docs?.description}}};const f=["ZonesByChartType","ZoneAxisX","ZonesDashStyle","DualYAxisWithZones"];export{s as DualYAxisWithZones,a as ZoneAxisX,r as ZonesByChartType,n as ZonesDashStyle,f as __namedExportsOrder,T as default};
