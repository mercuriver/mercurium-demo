import{c as l,d as c,r as x,f as m,g as u,C as p,j as A,e as h,b as T}from"./story-utils-R14dQy-K.js";const S={title:"Options/Axis",args:{...l},argTypes:{...c}},y={xAxisType:"category",series:[{key:"temp",label:"Temperature",data:[{x:"Jan",y:-2},{x:"Feb",y:1},{x:"Mar",y:7},{x:"Apr",y:14},{x:"May",y:20},{x:"Jun",y:25},{x:"Jul",y:28},{x:"Aug",y:27},{x:"Sep",y:22},{x:"Oct",y:15},{x:"Nov",y:7},{x:"Dec",y:0}]},{key:"humidity",label:"Humidity",data:[{x:"Jan",y:65},{x:"Feb",y:60},{x:"Mar",y:55},{x:"Apr",y:50},{x:"May",y:52},{x:"Jun",y:60},{x:"Jul",y:70},{x:"Aug",y:72},{x:"Sep",y:68},{x:"Oct",y:62},{x:"Nov",y:65},{x:"Dec",y:67}]}]},o={xAxisType:"category",series:[{key:"sales",label:"Sales",data:[{x:"Q1",y:120},{x:"Q2",y:180},{x:"Q3",y:150},{x:"Q4",y:210}]}]},f={xAxisType:"category",series:[{key:"revenue",label:"Revenue",data:[{x:"Q1",y:1234567},{x:"Q2",y:2345678},{x:"Q3",y:1987654},{x:"Q4",y:3012345}]},{key:"profit-rate",label:"Profit Rate",data:[{x:"Q1",y:12.34},{x:"Q2",y:15.678},{x:"Q3",y:9.01},{x:"Q4",y:18.456}]}]},t={parameters:{controls:{disable:!0}},render:e=>x([{type:"bar",data:o,options:{frameTheme:e.frameTheme,xAxis:{title:"Quarter"},legend:{show:!0,position:"top"}},label:"xAxis title only"},{type:"bar",data:o,options:{frameTheme:e.frameTheme,yAxis:{title:"Revenue (KRW)"},legend:{show:!0,position:"top"}},label:"yAxis title only"},{type:"line",data:o,options:{frameTheme:e.frameTheme,yAxis:{placement:"end",title:"Revenue (KRW)"},legend:{show:!0,position:"top"}},label:"yAxis placement=end (right)"},{type:"line",data:o,options:{frameTheme:e.frameTheme,xAxis:{placement:"start",title:"Quarter"},legend:{show:!0,position:"bottom"}},label:"xAxis placement=start (top)"},{type:"line",data:y,options:{frameTheme:e.frameTheme,line:{curve:"smooth",dots:!0},xAxis:{title:"Month"},yAxis:{title:"Temperature (°C)"},yAxis2:{title:"Humidity (%)"},yAxis2SeriesKeys:["humidity"],legend:{show:!0,position:"bottom"},tooltip:{show:!0,shared:!0}},label:"Dual Y-Axis + all titles"}],{columns:2,cardHeight:280,hideDataSummary:!0})},n={parameters:{controls:{disable:!0}},render:e=>x([{type:"bar",data:p,options:{frameTheme:e.frameTheme,inverted:!0,bar:{radius:2}},label:"Inverted Bar (grouped)"},{type:"bar",data:p,options:{frameTheme:e.frameTheme,inverted:!0,bar:{stacked:!0}},label:"Inverted Stacked Bar"},{type:"bar",data:A,options:{frameTheme:e.frameTheme,inverted:!0,bar:{radius:4,barWidth:.6}},label:"Inverted Single-Series Bar"},{type:"line",data:h,options:{frameTheme:e.frameTheme,inverted:!0,line:{dots:!0,width:2}},label:"Inverted Line"},{type:"area",data:h,options:{frameTheme:e.frameTheme,inverted:!0,area:{opacity:.3}},label:"Inverted Area"},{type:"scatter",data:h,options:{frameTheme:e.frameTheme,inverted:!0,scatter:{dotSize:5}},label:"Inverted Scatter"}],{columns:3,cardHeight:240,hideDataSummary:!0})},r={args:{...l,xAxisTitle:"Month",yAxisTitle:"Temperature (°C)",yAxis2Title:"Humidity (%)",yAxis2SeriesKeys:"humidity",legendPosition:"bottom",tooltipShared:!0,width:720,height:360},render:e=>m("line",y,{...u(e),line:{curve:"smooth",dots:!0}},{fitContainer:e.fitContainer,width:e.width,height:e.height})},a={args:{...l,inverted:!0,curve:"linear",showDots:!0,width:700,height:450,yAxis2SeriesKeys:"margin",yAxis2Title:"Profit Margin (%)",showCrosshair:!0,crosshairType:"both",tooltipShared:!0},render:e=>m("line",T,{...u(e),line:{curve:e.curve,dots:e.showDots}},{fitContainer:e.fitContainer,width:e.width,height:e.height})},i={parameters:{controls:{disable:!0}},render:e=>m("line",y,{frameTheme:e.frameTheme,line:{curve:"smooth",dots:!0},xAxis:{title:"Month"},yAxis:{title:"Temperature",format:d=>`${d}°C`},yAxis2:{title:"Humidity",format:d=>`${d}%`},yAxis2SeriesKeys:["humidity"],tooltip:{show:!0,shared:!0,highlightDots:!0},crosshair:{show:!0,type:"x"},legend:{show:!0,position:"bottom"}},{width:720,height:360})},s={args:{...l,showDataLabel:!0,dataLabelPosition:"top",tooltipShared:!0,tooltipHighlightDots:!0,yAxisTitle:"Revenue",yValuePrefix:"$",yValueSuffix:"",yValueDecimals:0,yThousandsSeparator:!0,yAxis2Title:"Profit Rate",yAxis2ValuePrefix:"",yAxis2ValueSuffix:"%",yAxis2ValueDecimals:1,yAxis2ThousandsSeparator:!1,yAxis2SeriesKeys:"profit-rate",xAxisTitle:"Quarter",width:720,height:360},render:e=>m("line",f,{...u(e),line:{curve:"smooth",dots:!0}},{fitContainer:e.fitContainer,width:e.width,height:e.height})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([{
    type: 'bar',
    data: SALES_DATA,
    options: {
      frameTheme: args.frameTheme,
      xAxis: {
        title: 'Quarter'
      },
      legend: {
        show: true,
        position: 'top'
      }
    },
    label: 'xAxis title only'
  }, {
    type: 'bar',
    data: SALES_DATA,
    options: {
      frameTheme: args.frameTheme,
      yAxis: {
        title: 'Revenue (KRW)'
      },
      legend: {
        show: true,
        position: 'top'
      }
    },
    label: 'yAxis title only'
  }, {
    type: 'line',
    data: SALES_DATA,
    options: {
      frameTheme: args.frameTheme,
      yAxis: {
        placement: 'end',
        title: 'Revenue (KRW)'
      },
      legend: {
        show: true,
        position: 'top'
      }
    },
    label: 'yAxis placement=end (right)'
  }, {
    type: 'line',
    data: SALES_DATA,
    options: {
      frameTheme: args.frameTheme,
      xAxis: {
        placement: 'start',
        title: 'Quarter'
      },
      legend: {
        show: true,
        position: 'bottom'
      }
    },
    label: 'xAxis placement=start (top)'
  }, {
    type: 'line',
    data: WEATHER_DATA,
    options: {
      frameTheme: args.frameTheme,
      line: {
        curve: 'smooth',
        dots: true
      },
      xAxis: {
        title: 'Month'
      },
      yAxis: {
        title: 'Temperature (°C)'
      },
      yAxis2: {
        title: 'Humidity (%)'
      },
      yAxis2SeriesKeys: ['humidity'],
      legend: {
        show: true,
        position: 'bottom'
      },
      tooltip: {
        show: true,
        shared: true
      }
    },
    label: 'Dual Y-Axis + all titles'
  }], {
    columns: 2,
    cardHeight: 280,
    hideDataSummary: true
  })
}`,...t.parameters?.docs?.source},description:{story:"Axis title placements -- 각 축의 title이 렌더되는 위치 조합.\n`xAxis.title` / `yAxis.title` / `yAxis.placement=end` / `xAxis.placement=start` / all-axes.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([{
    type: 'bar',
    data: CATEGORY_MULTI_SERIES,
    options: {
      frameTheme: args.frameTheme,
      inverted: true,
      bar: {
        radius: 2
      }
    },
    label: 'Inverted Bar (grouped)'
  }, {
    type: 'bar',
    data: CATEGORY_MULTI_SERIES,
    options: {
      frameTheme: args.frameTheme,
      inverted: true,
      bar: {
        stacked: true
      }
    },
    label: 'Inverted Stacked Bar'
  }, {
    type: 'bar',
    data: CATEGORY_BASIC,
    options: {
      frameTheme: args.frameTheme,
      inverted: true,
      bar: {
        radius: 4,
        barWidth: 0.6
      }
    },
    label: 'Inverted Single-Series Bar'
  }, {
    type: 'line',
    data: NUMERIC_BASIC,
    options: {
      frameTheme: args.frameTheme,
      inverted: true,
      line: {
        dots: true,
        width: 2
      }
    },
    label: 'Inverted Line'
  }, {
    type: 'area',
    data: NUMERIC_BASIC,
    options: {
      frameTheme: args.frameTheme,
      inverted: true,
      area: {
        opacity: 0.3
      }
    },
    label: 'Inverted Area'
  }, {
    type: 'scatter',
    data: NUMERIC_BASIC,
    options: {
      frameTheme: args.frameTheme,
      inverted: true,
      scatter: {
        dotSize: 5
      }
    },
    label: 'Inverted Scatter'
  }], {
    columns: 3,
    cardHeight: 240,
    hideDataSummary: true
  })
}`,...n.parameters?.docs?.source},description:{story:"Inverted mode -- Line / Bar / Area / Scatter가 inverted:true로 어떻게 렌더되는지.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    xAxisTitle: 'Month',
    yAxisTitle: 'Temperature (°C)',
    yAxis2Title: 'Humidity (%)',
    yAxis2SeriesKeys: 'humidity',
    legendPosition: 'bottom',
    tooltipShared: true,
    width: 720,
    height: 360
  },
  render: args => renderChartSingle('line', WEATHER_DATA, {
    ...commonOptionsFrom(args),
    line: {
      curve: 'smooth',
      dots: true
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...r.parameters?.docs?.source},description:{story:"Dual Y-Axis + all axis titles -- `yAxis2SeriesKeys` / `yAxis2.title` 조합 interactive.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    inverted: true,
    curve: 'linear',
    showDots: true,
    width: 700,
    height: 450,
    yAxis2SeriesKeys: 'margin',
    yAxis2Title: 'Profit Margin (%)',
    showCrosshair: true,
    crosshairType: 'both',
    tooltipShared: true
  },
  render: args => renderChartSingle('line', DUAL_AXIS_CATEGORY, {
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.showDots
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...a.parameters?.docs?.source},description:{story:"Inverted + Dual Y-Axis 복합 -- DUAL_AXIS_CATEGORY 데이터로 margin을 secondary로.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartSingle('line', WEATHER_DATA, {
    frameTheme: args.frameTheme,
    line: {
      curve: 'smooth',
      dots: true
    },
    xAxis: {
      title: 'Month'
    },
    yAxis: {
      title: 'Temperature',
      format: v => \`\${v}°C\`
    },
    yAxis2: {
      title: 'Humidity',
      format: v => \`\${v}%\`
    },
    yAxis2SeriesKeys: ['humidity'],
    tooltip: {
      show: true,
      shared: true,
      highlightDots: true
    },
    crosshair: {
      show: true,
      type: 'x'
    },
    legend: {
      show: true,
      position: 'bottom'
    }
  }, {
    width: 720,
    height: 360
  })
}`,...i.parameters?.docs?.source},description:{story:"Per-axis format (from dual-y-axis-tooltip) -- `yAxis.format` / `yAxis2.format`를 각각\n함수로 지정해 tooltip과 tick label 모두 축별 포맷이 적용됨을 시연.",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    showDataLabel: true,
    dataLabelPosition: 'top',
    tooltipShared: true,
    tooltipHighlightDots: true,
    yAxisTitle: 'Revenue',
    yValuePrefix: '$',
    yValueSuffix: '',
    yValueDecimals: 0,
    yThousandsSeparator: true,
    yAxis2Title: 'Profit Rate',
    yAxis2ValuePrefix: '',
    yAxis2ValueSuffix: '%',
    yAxis2ValueDecimals: 1,
    yAxis2ThousandsSeparator: false,
    yAxis2SeriesKeys: 'profit-rate',
    xAxisTitle: 'Quarter',
    width: 720,
    height: 360
  },
  render: args => renderChartSingle('line', REVENUE_VS_RATE_DATA, {
    ...commonOptionsFrom(args),
    line: {
      curve: 'smooth',
      dots: true
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...s.parameters?.docs?.source},description:{story:"Declarative axis format -- `yValuePrefix` / `yValueDecimals` / `yThousandsSeparator` 등 선언형 필드로\n축별 포맷을 제어. 함수형 format 없이도 tooltip 값이 축별 접두/접미/자리수 반영.",...s.parameters?.docs?.description}}};const b=["AxisTitlePlacements","InvertedByChartType","DualYAxisTitles","InvertedDualYAxis","PerAxisFormat","DeclarativeAxisFormat"];export{t as AxisTitlePlacements,s as DeclarativeAxisFormat,r as DualYAxisTitles,n as InvertedByChartType,a as InvertedDualYAxis,i as PerAxisFormat,b as __namedExportsOrder,S as default};
