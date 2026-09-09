import{r as n,C as i}from"./chart-playground-Cf0d2JJL.js";import{k as t}from"./chart-playground-data-DVQ9OxHY.js";import"./chart-BUQmp9vc.js";import"./chart-story-content-DqL3FnFI.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";import"./chart-theme-controls-8C4PR6_3.js";const m={...i,title:"Charts/Box Plot"},e={args:{boxPlotOptions:{boxWidth:.58,fillOpacity:.18,lineWidth:2,medianColor:"#172554",whiskerWidth:.55},legendAssigned:!1,seriesOptions:[{encoding:{high:"high",low:"low",median:"median",q1:"q1",q3:"q3",x:"category"},id:"distribution",name:"Regional distribution",type:"boxPlot"}],storyData:t,xAxisOptions:{scale:"category",title:"Region"},yAxisOptions:{scale:"linear",title:"Observed value"}},name:"Box Plot",parameters:{storyHeader:{description:"Low–Q1–Median–Q3–High 요약값을 whisker, quartile box와 median 선으로 표현합니다.",eyebrow:"Charts · Box Plot",title:"Box plot 차트"}},render:n};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    boxPlotOptions: {
      boxWidth: 0.58,
      fillOpacity: 0.18,
      lineWidth: 2,
      medianColor: '#172554',
      whiskerWidth: 0.55
    },
    legendAssigned: false,
    seriesOptions: [{
      encoding: {
        high: 'high',
        low: 'low',
        median: 'median',
        q1: 'q1',
        q3: 'q3',
        x: 'category'
      },
      id: 'distribution',
      name: 'Regional distribution',
      type: 'boxPlot'
    }],
    storyData: CARTESIAN_BOX_PLOT_DATA,
    xAxisOptions: {
      scale: 'category',
      title: 'Region'
    },
    yAxisOptions: {
      scale: 'linear',
      title: 'Observed value'
    }
  },
  name: 'Box Plot',
  parameters: {
    storyHeader: {
      description: 'Low–Q1–Median–Q3–High 요약값을 whisker, quartile box와 median 선으로 표현합니다.',
      eyebrow: 'Charts · Box Plot',
      title: 'Box plot 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...e.parameters?.docs?.source}}};const x=["BoxPlot"];export{e as BoxPlot,x as __namedExportsOrder,m as default};
