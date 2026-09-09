import{r as n,C as t}from"./chart-playground-Cf0d2JJL.js";import{l as r}from"./chart-playground-data-DVQ9OxHY.js";import"./chart-BUQmp9vc.js";import"./chart-story-content-DqL3FnFI.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";import"./chart-theme-controls-8C4PR6_3.js";const l={...t,title:"Charts/Range Area"},e={args:{lineOptions:{curve:"smooth",lineWidth:2},rangeAreaOptions:{curve:"smooth",fillOpacity:.24,lineWidth:2},seriesOptions:[{encoding:{x:"date",yHigh:"forecastHigh",yLow:"forecastLow"},id:"forecast-range",name:"Forecast interval",type:"rangeArea"},{color:"#1d4ed8",encoding:{x:"date",y:"forecast"},id:"forecast",name:"Forecast",type:"line"}],storyData:r,timeAssigned:!0,timeOptions:{timezone:"UTC"},xAxisOptions:{scale:"time",ticks:{count:6},title:"Month · 2026"},yAxisOptions:{scale:"linear",ticks:{count:6},title:"Forecast value"}},name:"Range Area",parameters:{storyHeader:{description:"월별 예측의 Low–High 구간을 연속 band로 채우고 중앙 예측 Line과 함께 비교합니다.",eyebrow:"Charts · Range Area",title:"Range Area 차트"}},render:n};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    lineOptions: {
      curve: 'smooth',
      lineWidth: 2
    },
    rangeAreaOptions: {
      curve: 'smooth',
      fillOpacity: 0.24,
      lineWidth: 2
    },
    seriesOptions: [{
      encoding: {
        x: 'date',
        yHigh: 'forecastHigh',
        yLow: 'forecastLow'
      },
      id: 'forecast-range',
      name: 'Forecast interval',
      type: 'rangeArea'
    }, {
      color: '#1d4ed8',
      encoding: {
        x: 'date',
        y: 'forecast'
      },
      id: 'forecast',
      name: 'Forecast',
      type: 'line'
    }],
    storyData: CARTESIAN_RANGE_AREA_DATA,
    timeAssigned: true,
    timeOptions: {
      timezone: 'UTC'
    },
    xAxisOptions: {
      scale: 'time',
      ticks: {
        count: 6
      },
      title: 'Month · 2026'
    },
    yAxisOptions: {
      scale: 'linear',
      ticks: {
        count: 6
      },
      title: 'Forecast value'
    }
  },
  name: 'Range Area',
  parameters: {
    storyHeader: {
      description: '월별 예측의 Low–High 구간을 연속 band로 채우고 중앙 예측 Line과 함께 비교합니다.',
      eyebrow: 'Charts · Range Area',
      title: 'Range Area 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...e.parameters?.docs?.source}}};const m=["RangeArea"];export{e as RangeArea,m as __namedExportsOrder,l as default};
