import{c as i,a as d,d as c,e as l,b as m,f as s,x as n,g as u}from"./story-utils-B9NFoQdo.js";const S={title:"Chart Types/Scatter",args:{...i,dataset:"scatter-basic"},argTypes:{dataset:u(n),dotSize:{control:{type:"range",min:2,max:10,step:1},description:"점 크기 (bubble 모드가 아닐 때)",table:{defaultValue:{summary:"4"},category:"Scatter"}},minRadius:{control:{type:"range",min:1,max:15,step:1},description:"Bubble 모드 최소 반지름 (px)",table:{defaultValue:{summary:"3"},category:"Scatter"}},maxRadius:{control:{type:"range",min:10,max:50,step:1},description:"Bubble 모드 최대 반지름 (px)",table:{defaultValue:{summary:"20"},category:"Scatter"}},colorScaleType:{control:"select",options:["","sequential","categorical"],description:"Color scale 타입 (빈 값: 자동 감지)",table:{defaultValue:{summary:"(auto)"},category:"Scatter"}},colorRangeStart:{control:"color",description:"Sequential 색상 스케일 시작색",table:{defaultValue:{summary:"#cce5ff"},category:"Scatter"}},colorRangeEnd:{control:"color",description:"Sequential 색상 스케일 끝색",table:{defaultValue:{summary:"#004085"},category:"Scatter"}},...d}},p={xAxisType:"number",series:[{key:"countries",label:"Countries",data:[{x:3e4,y:78,size:1400},{x:45e3,y:81,size:330},{x:8e3,y:69,size:1380},{x:42e3,y:84,size:126},{x:5e4,y:83,size:84},{x:38e3,y:82,size:67},{x:12e3,y:76,size:210},{x:55e3,y:82,size:38},{x:6e4,y:83,size:10},{x:3e3,y:62,size:220},{x:2e4,y:74,size:115},{x:35e3,y:83,size:52}]}]},y={xAxisType:"number",series:[{key:"cities",label:"Cities",data:[{x:35,y:12e3,size:950,colorValue:"Asia"},{x:28,y:8500,size:870,colorValue:"Asia"},{x:22,y:15e3,size:380,colorValue:"Europe"},{x:18,y:13500,size:290,colorValue:"Europe"},{x:30,y:11e3,size:850,colorValue:"Americas"},{x:25,y:9e3,size:620,colorValue:"Americas"},{x:32,y:5e3,size:450,colorValue:"Africa"},{x:27,y:3500,size:310,colorValue:"Africa"},{x:20,y:14e3,size:510,colorValue:"Europe"},{x:33,y:7e3,size:720,colorValue:"Asia"},{x:15,y:16e3,size:170,colorValue:"Europe"},{x:29,y:6500,size:400,colorValue:"Americas"}]}]},t={parameters:{controls:{disable:!0}},render:e=>m([{type:"scatter",data:s(n,"scatter-basic"),options:{frameTheme:e.frameTheme,scatter:{dotSize:8}},label:"Large dots"},{type:"scatter",data:s(n,"scatter-basic"),options:{frameTheme:e.frameTheme,scatter:{dotSize:2}},label:"Small dots"},{type:"scatter",data:s(n,"scatter-dense"),options:{frameTheme:e.frameTheme,scatter:{dotSize:3}},label:"Dense clusters"}],{columns:3,cardHeight:260,hideDataSummary:!0})},a={args:{...i,dotSize:4,minRadius:3,maxRadius:25,colorScaleType:"",colorRangeStart:"#cce5ff",colorRangeEnd:"#004085"},render:e=>c("scatter",p,{...l(e),scatter:{dotSize:e.dotSize,minRadius:e.minRadius,maxRadius:e.maxRadius},xAxis:{title:"GDP per Capita ($)"},yAxis:{title:"Life Expectancy (years)"},title:{text:"GDP vs Life Expectancy (bubble = population)",align:"left"}},{fitContainer:e.fitContainer,width:e.width,height:e.height})},r={args:{...i,dotSize:4,minRadius:4,maxRadius:30,colorScaleType:"categorical",colorRangeStart:"#cce5ff",colorRangeEnd:"#004085"},render:e=>c("scatter",y,{...l(e),scatter:{dotSize:e.dotSize,minRadius:e.minRadius,maxRadius:e.maxRadius,colorScaleType:e.colorScaleType||void 0,colorRange:[e.colorRangeStart||"#cce5ff",e.colorRangeEnd||"#004085"]},title:{text:"Cities: Temp vs Income (bubble=pop, color=continent)",align:"left"},xAxis:{title:"Avg Temperature (°C)"},yAxis:{title:"Avg Income ($)"}},{fitContainer:e.fitContainer,width:e.width,height:e.height})},o={name:"Color By Point",args:{...i,dataset:"scatter-basic",dotSize:6,minRadius:3,maxRadius:20,colorScaleType:"",colorRangeStart:"#cce5ff",colorRangeEnd:"#004085",colorByPoint:!0},render:e=>c("scatter",s(n,e.dataset),{...l(e),scatter:{dotSize:e.dotSize}},{fitContainer:e.fitContainer,width:e.width,height:e.height})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([{
    type: 'scatter',
    data: resolveDataset(SCATTER_DATASETS, 'scatter-basic'),
    options: {
      frameTheme: args.frameTheme,
      scatter: {
        dotSize: 8
      }
    },
    label: 'Large dots'
  }, {
    type: 'scatter',
    data: resolveDataset(SCATTER_DATASETS, 'scatter-basic'),
    options: {
      frameTheme: args.frameTheme,
      scatter: {
        dotSize: 2
      }
    },
    label: 'Small dots'
  }, {
    type: 'scatter',
    data: resolveDataset(SCATTER_DATASETS, 'scatter-dense'),
    options: {
      frameTheme: args.frameTheme,
      scatter: {
        dotSize: 3
      }
    },
    label: 'Dense clusters'
  }], {
    columns: 3,
    cardHeight: 260,
    hideDataSummary: true
  })
}`,...t.parameters?.docs?.source},description:{story:"Dot size × density — 3 representative states (Large / Small / Dense).",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dotSize: 4,
    minRadius: 3,
    maxRadius: 25,
    colorScaleType: '',
    colorRangeStart: '#cce5ff',
    colorRangeEnd: '#004085'
  },
  render: args => renderChartSingle('scatter', BUBBLE_DATA, {
    ...commonOptionsFrom(args),
    scatter: {
      dotSize: args.dotSize,
      minRadius: args.minRadius,
      maxRadius: args.maxRadius
    },
    xAxis: {
      title: 'GDP per Capita ($)'
    },
    yAxis: {
      title: 'Life Expectancy (years)'
    },
    title: {
      text: 'GDP vs Life Expectancy (bubble = population)',
      align: 'left'
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...a.parameters?.docs?.source},description:{story:"**Bubble Chart** -- `size` 필드로 점 크기가 결정됩니다.\n\n`minRadius` / `maxRadius` 슬라이더로 반지름 범위를 조절해보세요.\n데이터: GDP per capita (X) vs Life expectancy (Y) vs Population (size)",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dotSize: 4,
    minRadius: 4,
    maxRadius: 30,
    colorScaleType: 'categorical',
    colorRangeStart: '#cce5ff',
    colorRangeEnd: '#004085'
  },
  render: args => renderChartSingle('scatter', BUBBLE_COLOR_DATA, {
    ...commonOptionsFrom(args),
    scatter: {
      dotSize: args.dotSize,
      minRadius: args.minRadius,
      maxRadius: args.maxRadius,
      colorScaleType: args.colorScaleType || undefined,
      colorRange: [args.colorRangeStart || '#cce5ff', args.colorRangeEnd || '#004085']
    },
    title: {
      text: 'Cities: Temp vs Income (bubble=pop, color=continent)',
      align: 'left'
    },
    xAxis: {
      title: 'Avg Temperature (°C)'
    },
    yAxis: {
      title: 'Avg Income ($)'
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...r.parameters?.docs?.source},description:{story:"**Bubble + Color** -- `size`로 크기, `colorValue`로 색상.\n\n`colorScaleType` 을 빈 값(자동)/sequential/categorical 로 바꿔 동작 확인.\nSequential 이면 `colorRangeStart` / `colorRangeEnd` 로 양 끝 색상 조절.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Color By Point',
  args: {
    ...commonDefaults,
    dataset: 'scatter-basic',
    dotSize: 6,
    minRadius: 3,
    maxRadius: 20,
    colorScaleType: '' as const,
    colorRangeStart: '#cce5ff',
    colorRangeEnd: '#004085',
    colorByPoint: true
  },
  render: args => renderChartSingle('scatter', resolveDataset(SCATTER_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    scatter: {
      dotSize: args.dotSize
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...o.parameters?.docs?.source}}};const x=["DotsAndDensity","BubbleChart","BubbleWithColor","ScatterColorByPoint"];export{a as BubbleChart,r as BubbleWithColor,t as DotsAndDensity,o as ScatterColorByPoint,x as __namedExportsOrder,S as default};
