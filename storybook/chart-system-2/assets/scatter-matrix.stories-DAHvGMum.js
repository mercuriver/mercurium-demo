import{r as t,C as n}from"./chart-playground-Cf0d2JJL.js";import{f as i}from"./chart-playground-data-DVQ9OxHY.js";import"./chart-BUQmp9vc.js";import"./chart-story-content-DqL3FnFI.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";import"./chart-theme-controls-8C4PR6_3.js";const c={...n,title:"Charts/Scatter Matrix"},e={args:{gridAssigned:!1,height:680,legendAssigned:!1,scatterMatrixOptions:{colorScaleType:"categorical",gap:5,labels:{billDepth:"Bill depth",billLength:"Bill length",bodyMass:"Body mass",flipperLength:"Flipper length"},padding:9,pointRadius:3,stroke:"#ffffff",strokeWidth:.75},seriesOptions:[{encoding:{color:"species",dimensions:["billLength","billDepth","flipperLength","bodyMass"]},id:"penguins",name:"Penguin measurements",opacity:.78,type:"scatterMatrix"}],storyData:i,timeAssigned:!1,width:760,xAxisOptions:{scale:"linear"},yAxisOptions:{scale:"linear"}},name:"Scatter Matrix",parameters:{storyHeader:{description:"여러 수치 dimension의 모든 쌍을 독립 도메인의 mini scatter cell로 확장하여 상관관계를 한 화면에서 비교합니다.",eyebrow:"Charts · Scatter Matrix",title:"Scatterplot matrix"}},render:t};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    gridAssigned: false,
    height: 680,
    legendAssigned: false,
    scatterMatrixOptions: {
      colorScaleType: 'categorical',
      gap: 5,
      labels: {
        billDepth: 'Bill depth',
        billLength: 'Bill length',
        bodyMass: 'Body mass',
        flipperLength: 'Flipper length'
      },
      padding: 9,
      pointRadius: 3,
      stroke: '#ffffff',
      strokeWidth: 0.75
    },
    seriesOptions: [{
      encoding: {
        color: 'species',
        dimensions: ['billLength', 'billDepth', 'flipperLength', 'bodyMass']
      },
      id: 'penguins',
      name: 'Penguin measurements',
      opacity: 0.78,
      type: 'scatterMatrix'
    }],
    storyData: CARTESIAN_SCATTER_MATRIX_DATA,
    timeAssigned: false,
    width: 760,
    xAxisOptions: {
      scale: 'linear'
    },
    yAxisOptions: {
      scale: 'linear'
    }
  },
  name: 'Scatter Matrix',
  parameters: {
    storyHeader: {
      description: '여러 수치 dimension의 모든 쌍을 독립 도메인의 mini scatter cell로 확장하여 상관관계를 한 화면에서 비교합니다.',
      eyebrow: 'Charts · Scatter Matrix',
      title: 'Scatterplot matrix'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...e.parameters?.docs?.source}}};const g=["ScatterMatrix"];export{e as ScatterMatrix,g as __namedExportsOrder,c as default};
