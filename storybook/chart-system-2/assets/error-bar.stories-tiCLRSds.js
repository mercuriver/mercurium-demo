import{r as e,C as n}from"./chart-playground-Cf0d2JJL.js";import{m as t}from"./chart-playground-data-DVQ9OxHY.js";import"./chart-BUQmp9vc.js";import"./chart-story-content-DqL3FnFI.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";import"./chart-theme-controls-8C4PR6_3.js";const m={...n,title:"Charts/Error Bar"},r={args:{errorBarOptions:{capWidth:.62,lineWidth:2,pointRadius:4},seriesOptions:[{encoding:{x:"cohort",y:"mean",yHigh:"high",yLow:"low"},id:"confidence-interval",name:"Mean and confidence interval",type:"errorBar"}],storyData:t,timeAssigned:!1,xAxisOptions:{scale:"category",title:"Experiment cohort"},yAxisOptions:{scale:"linear",ticks:{count:6},title:"Observed value"}},name:"Error Bar",parameters:{storyHeader:{description:"각 cohort의 Low–High stem과 cap, 중앙값 point로 개별 불확실성 구간을 표현합니다.",eyebrow:"Charts · Error Bar",title:"Error Bar 차트"}},render:e};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    errorBarOptions: {
      capWidth: 0.62,
      lineWidth: 2,
      pointRadius: 4
    },
    seriesOptions: [{
      encoding: {
        x: 'cohort',
        y: 'mean',
        yHigh: 'high',
        yLow: 'low'
      },
      id: 'confidence-interval',
      name: 'Mean and confidence interval',
      type: 'errorBar'
    }],
    storyData: CARTESIAN_ERROR_BAR_DATA,
    timeAssigned: false,
    xAxisOptions: {
      scale: 'category',
      title: 'Experiment cohort'
    },
    yAxisOptions: {
      scale: 'linear',
      ticks: {
        count: 6
      },
      title: 'Observed value'
    }
  },
  name: 'Error Bar',
  parameters: {
    storyHeader: {
      description: '각 cohort의 Low–High stem과 cap, 중앙값 point로 개별 불확실성 구간을 표현합니다.',
      eyebrow: 'Charts · Error Bar',
      title: 'Error Bar 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...r.parameters?.docs?.source}}};const l=["ErrorBar"];export{r as ErrorBar,l as __namedExportsOrder,m as default};
