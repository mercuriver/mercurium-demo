import{c as p,a as S,r as t,b as a,d as h}from"./story-utils-Sq0wUdi9.js";import{r as g,h as c}from"./mock-data-BShfxM5i.js";import"./chart-engine-BmtyFlsE.js";import"./tooltip-plugin-B9rRNLzl.js";import"./crosshair-plugin-lsuhlxfG.js";const V={title:"Charts/Types/Scatter",args:{...S,dataset:"scatter-basic"},argTypes:{dataset:h(c),dotSize:{control:{type:"range",min:2,max:10,step:1},description:"점 크기 (bubble 모드가 아닐 때)",table:{defaultValue:{summary:"4"},category:"Scatter"}},minRadius:{control:{type:"range",min:1,max:15,step:1},description:"Bubble 모드 최소 반지름 (px)",table:{defaultValue:{summary:"3"},category:"Scatter"}},maxRadius:{control:{type:"range",min:10,max:50,step:1},description:"Bubble 모드 최대 반지름 (px)",table:{defaultValue:{summary:"20"},category:"Scatter"}},colorScaleType:{control:"select",options:["","sequential","categorical"],description:"Color scale 타입 (빈 값: 자동 감지)",table:{defaultValue:{summary:"(auto)"},category:"Scatter"}},colorRangeStart:{control:"color",description:"Sequential 색상 스케일 시작색",table:{defaultValue:{summary:"#cce5ff"},category:"Scatter"}},colorRangeEnd:{control:"color",description:"Sequential 색상 스케일 끝색",table:{defaultValue:{summary:"#004085"},category:"Scatter"}},...p}},l={args:{dataset:"numeric-negative",dotSize:4},render:e=>t("scatter",g(c,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...a(e),scatter:{dotSize:e.dotSize}})},d={args:{dataset:"scatter-basic",dotSize:8,colorPalette:"asteroid-city"},render:e=>t("scatter",g(c,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...a(e),scatter:{dotSize:e.dotSize}})},u={args:{dataset:"scatter-basic",dotSize:2},render:e=>t("scatter",g(c,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...a(e),scatter:{dotSize:e.dotSize}})},m={args:{dataset:"scatter-dense",dotSize:3},render:e=>t("scatter",g(c,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...a(e),scatter:{dotSize:e.dotSize}})},y={xAxisType:"number",series:[{key:"countries",label:"Countries",data:[{x:3e4,y:78,size:1400},{x:45e3,y:81,size:330},{x:8e3,y:69,size:1380},{x:42e3,y:84,size:126},{x:5e4,y:83,size:84},{x:38e3,y:82,size:67},{x:12e3,y:76,size:210},{x:55e3,y:82,size:38},{x:6e4,y:83,size:10},{x:3e3,y:62,size:220},{x:2e4,y:74,size:115},{x:35e3,y:83,size:52}]}]},o={args:{dotSize:4,minRadius:3,maxRadius:25,colorScaleType:"",colorRangeStart:"#cce5ff",colorRangeEnd:"#004085"},render:e=>t("scatter",y,{fitContainer:e.fitContainer,width:e.width,height:e.height,...a(e),scatter:{dotSize:e.dotSize,minRadius:e.minRadius,maxRadius:e.maxRadius},xAxis:{label:"GDP per Capita ($)"},yAxis:{label:"Life Expectancy (years)"},title:{text:"GDP vs Life Expectancy (bubble = population)",align:"left"}})},x={xAxisType:"number",series:[{key:"temperature",label:"Measurements",data:Array.from({length:40},(e,r)=>({x:10+Math.cos(r*.4)*30+r*1.5,y:20+Math.sin(r*.3)*25+r*.8,colorValue:Math.round(15+Math.sin(r*.2)*15+r*.5)}))}]},n={args:{dotSize:6,minRadius:3,maxRadius:20,colorScaleType:"sequential",colorRangeStart:"#cce5ff",colorRangeEnd:"#004085"},render:e=>t("scatter",x,{fitContainer:e.fitContainer,width:e.width,height:e.height,...a(e),scatter:{dotSize:e.dotSize,colorScaleType:e.colorScaleType||void 0,colorRange:[e.colorRangeStart||"#cce5ff",e.colorRangeEnd||"#004085"]},title:{text:"Sequential Color Scale (colorValue = temperature)",align:"left"}})},C={xAxisType:"number",series:[{key:"species",label:"Iris Dataset",data:[{x:5,y:3.4,colorValue:"Setosa"},{x:4.6,y:3.1,colorValue:"Setosa"},{x:5.4,y:3.9,colorValue:"Setosa"},{x:4.9,y:3,colorValue:"Setosa"},{x:5.1,y:3.5,colorValue:"Setosa"},{x:4.8,y:3,colorValue:"Setosa"},{x:5.2,y:3.5,colorValue:"Setosa"},{x:4.7,y:3.2,colorValue:"Setosa"},{x:6,y:2.7,colorValue:"Versicolor"},{x:5.7,y:2.8,colorValue:"Versicolor"},{x:6.3,y:2.3,colorValue:"Versicolor"},{x:6.1,y:2.9,colorValue:"Versicolor"},{x:5.5,y:2.4,colorValue:"Versicolor"},{x:5.8,y:2.7,colorValue:"Versicolor"},{x:6.4,y:2.9,colorValue:"Versicolor"},{x:5.6,y:2.5,colorValue:"Versicolor"},{x:7.2,y:3.2,colorValue:"Virginica"},{x:6.9,y:3.1,colorValue:"Virginica"},{x:7.7,y:2.8,colorValue:"Virginica"},{x:6.7,y:3,colorValue:"Virginica"},{x:7.4,y:2.8,colorValue:"Virginica"},{x:7.1,y:3,colorValue:"Virginica"},{x:6.5,y:3,colorValue:"Virginica"},{x:7,y:3.2,colorValue:"Virginica"}]}]},i={args:{dotSize:6,minRadius:3,maxRadius:20,colorScaleType:"categorical",colorRangeStart:"#cce5ff",colorRangeEnd:"#004085"},render:e=>t("scatter",C,{fitContainer:e.fitContainer,width:e.width,height:e.height,...a(e),scatter:{dotSize:e.dotSize,colorScaleType:e.colorScaleType||void 0},title:{text:"Categorical Color Scale (Iris species)",align:"left"},xAxis:{label:"Sepal Length"},yAxis:{label:"Sepal Width"}})},f={xAxisType:"number",series:[{key:"cities",label:"Cities",data:[{x:35,y:12e3,size:950,colorValue:"Asia"},{x:28,y:8500,size:870,colorValue:"Asia"},{x:22,y:15e3,size:380,colorValue:"Europe"},{x:18,y:13500,size:290,colorValue:"Europe"},{x:30,y:11e3,size:850,colorValue:"Americas"},{x:25,y:9e3,size:620,colorValue:"Americas"},{x:32,y:5e3,size:450,colorValue:"Africa"},{x:27,y:3500,size:310,colorValue:"Africa"},{x:20,y:14e3,size:510,colorValue:"Europe"},{x:33,y:7e3,size:720,colorValue:"Asia"},{x:15,y:16e3,size:170,colorValue:"Europe"},{x:29,y:6500,size:400,colorValue:"Americas"}]}]},s={args:{dotSize:4,minRadius:4,maxRadius:30,colorScaleType:"categorical",colorRangeStart:"#cce5ff",colorRangeEnd:"#004085"},render:e=>t("scatter",f,{fitContainer:e.fitContainer,width:e.width,height:e.height,...a(e),scatter:{dotSize:e.dotSize,minRadius:e.minRadius,maxRadius:e.maxRadius,colorScaleType:e.colorScaleType||void 0,colorRange:[e.colorRangeStart||"#cce5ff",e.colorRangeEnd||"#004085"]},title:{text:"Cities: Temp vs Income (bubble=pop, color=continent)",align:"left"},xAxis:{label:"Avg Temperature (C)"},yAxis:{label:"Avg Income ($)"}})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'numeric-negative',
    dotSize: 4
  },
  render: args => renderChart('scatter', resolveDataset(SCATTER_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    scatter: {
      dotSize: args.dotSize
    }
  })
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'scatter-basic',
    dotSize: 8,
    colorPalette: 'asteroid-city'
  },
  render: args => renderChart('scatter', resolveDataset(SCATTER_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    scatter: {
      dotSize: args.dotSize
    }
  })
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'scatter-basic',
    dotSize: 2
  },
  render: args => renderChart('scatter', resolveDataset(SCATTER_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    scatter: {
      dotSize: args.dotSize
    }
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'scatter-dense',
    dotSize: 3
  },
  render: args => renderChart('scatter', resolveDataset(SCATTER_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    scatter: {
      dotSize: args.dotSize
    }
  })
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    dotSize: 4,
    minRadius: 3,
    maxRadius: 25,
    colorScaleType: '',
    colorRangeStart: '#cce5ff',
    colorRangeEnd: '#004085'
  },
  render: args => renderChart('scatter', BUBBLE_DATA, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    scatter: {
      dotSize: args.dotSize,
      minRadius: args.minRadius,
      maxRadius: args.maxRadius
    },
    xAxis: {
      label: 'GDP per Capita ($)'
    },
    yAxis: {
      label: 'Life Expectancy (years)'
    },
    title: {
      text: 'GDP vs Life Expectancy (bubble = population)',
      align: 'left'
    }
  })
}`,...o.parameters?.docs?.source},description:{story:"**Bubble Chart** -- `size` 필드로 점 크기가 결정됩니다.\n\n`minRadius` / `maxRadius` 슬라이더로 반지름 범위를 조절해보세요.\n데이터: GDP per capita (X) vs Life expectancy (Y) vs Population (size)",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    dotSize: 6,
    minRadius: 3,
    maxRadius: 20,
    colorScaleType: 'sequential',
    colorRangeStart: '#cce5ff',
    colorRangeEnd: '#004085'
  },
  render: args => renderChart('scatter', COLOR_SEQUENTIAL_DATA, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    scatter: {
      dotSize: args.dotSize,
      colorScaleType: args.colorScaleType || undefined,
      colorRange: [args.colorRangeStart || '#cce5ff', args.colorRangeEnd || '#004085']
    },
    title: {
      text: 'Sequential Color Scale (colorValue = temperature)',
      align: 'left'
    }
  })
}`,...n.parameters?.docs?.source},description:{story:"**Color-mapped Scatter (Sequential)** -- `colorValue`(숫자)에 따라 점 색상이 그라데이션됩니다.\n\n`colorRangeStart` / `colorRangeEnd` 컬러피커로 양 끝 색상을 변경해보세요.\n`colorScaleType`을 `sequential`로 고정하거나 빈 값(자동 감지)으로 둘 수 있습니다.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    dotSize: 6,
    minRadius: 3,
    maxRadius: 20,
    colorScaleType: 'categorical',
    colorRangeStart: '#cce5ff',
    colorRangeEnd: '#004085'
  },
  render: args => renderChart('scatter', COLOR_CATEGORICAL_DATA, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    scatter: {
      dotSize: args.dotSize,
      colorScaleType: args.colorScaleType || undefined
    },
    title: {
      text: 'Categorical Color Scale (Iris species)',
      align: 'left'
    },
    xAxis: {
      label: 'Sepal Length'
    },
    yAxis: {
      label: 'Sepal Width'
    }
  })
}`,...i.parameters?.docs?.source},description:{story:"**Color-mapped Scatter (Categorical)** -- `colorValue`(문자열)에 따라 범주별 색상이 자동 할당됩니다.\n\n`colorScaleType`을 `categorical`로 고정하거나 빈 값(자동 감지)으로 둘 수 있습니다.",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    dotSize: 4,
    minRadius: 4,
    maxRadius: 30,
    colorScaleType: 'categorical',
    colorRangeStart: '#cce5ff',
    colorRangeEnd: '#004085'
  },
  render: args => renderChart('scatter', BUBBLE_COLOR_DATA, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
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
      label: 'Avg Temperature (C)'
    },
    yAxis: {
      label: 'Avg Income ($)'
    }
  })
}`,...s.parameters?.docs?.source},description:{story:"**Bubble + Color combined** -- `size`로 점 크기, `colorValue`로 점 색상이 동시에 결정됩니다.\n\n데이터: Temperature (X) vs Average Income (Y), Population (size), Continent (color)",...s.parameters?.docs?.description}}};const E=["Playground","LargeDots","SmallDots","DenseClusters","BubbleChart","ColorSequential","ColorCategorical","BubbleWithColor"];export{o as BubbleChart,s as BubbleWithColor,i as ColorCategorical,n as ColorSequential,m as DenseClusters,d as LargeDots,l as Playground,u as SmallDots,E as __namedExportsOrder,V as default};
