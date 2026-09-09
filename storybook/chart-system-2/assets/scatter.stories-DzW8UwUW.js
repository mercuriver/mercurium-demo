import{r as n,C as a}from"./chart-playground-Cf0d2JJL.js";import{e as r}from"./chart-playground-data-DVQ9OxHY.js";import"./chart-BUQmp9vc.js";import"./chart-story-content-DqL3FnFI.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";import"./chart-theme-controls-8C4PR6_3.js";const m={...a,title:"Charts/Scatter"},e={args:{scatterOptions:{colorRange:["#bfdbfe","#1e3a8a"],colorScaleType:"categorical",pointRadius:5,maxRadius:18,minRadius:3,stroke:"#ffffff",strokeWidth:2},seriesOptions:[{encoding:{color:"group",size:"volume",x:"date",y:"amount"},id:"amount",name:"Amount",type:"scatter"}],yAxisOptions:{labels:{thousandsSeparator:!0,valuePrefix:"$"},scale:"linear",ticks:{count:6},title:"Amount"}},name:"Scatter",parameters:{storyHeader:{description:"유효한 X·Y mapping 쌍만 독립적인 점으로 투영하는 Scatter mark를 확인합니다.",eyebrow:"Charts · Scatter",title:"Scatter 차트"}},render:n},t={args:{legendAssigned:!1,scatterOptions:{colorRange:["#dbeafe","#1e3a8a"],colorScaleType:"sequential",maxRadius:17,minRadius:3,pointRadius:5,stroke:"#ffffff",strokeWidth:1.5},seriesOptions:[{encoding:{color:"growth",size:"investment",x:"exposure",y:"efficiency"},id:"portfolio",name:"Portfolio performance",opacity:.86,type:"scatter"}],storyData:r,timeAssigned:!1,xAxisOptions:{scale:"linear",ticks:{count:7},title:"Exposure"},yAxisOptions:{scale:"linear",ticks:{count:6},title:"Efficiency"}},name:"Quantitative channels",parameters:{storyHeader:{description:"X·Y 위치에 더해 연속 성장률을 순차 색상으로, 투자 규모를 점 반경으로 매핑하는 다변량 Scatter입니다.",eyebrow:"Charts · Scatter",title:"Quantitative Scatter 차트"}},render:n};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    scatterOptions: {
      colorRange: ['#bfdbfe', '#1e3a8a'],
      colorScaleType: 'categorical',
      pointRadius: 5,
      maxRadius: 18,
      minRadius: 3,
      stroke: '#ffffff',
      strokeWidth: 2
    },
    seriesOptions: [{
      encoding: {
        color: 'group',
        size: 'volume',
        x: 'date',
        y: 'amount'
      },
      id: 'amount',
      name: 'Amount',
      type: 'scatter'
    }],
    yAxisOptions: {
      labels: {
        thousandsSeparator: true,
        valuePrefix: '$'
      },
      scale: 'linear',
      ticks: {
        count: 6
      },
      title: 'Amount'
    }
  },
  name: 'Scatter',
  parameters: {
    storyHeader: {
      description: '유효한 X·Y mapping 쌍만 독립적인 점으로 투영하는 Scatter mark를 확인합니다.',
      eyebrow: 'Charts · Scatter',
      title: 'Scatter 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    legendAssigned: false,
    scatterOptions: {
      colorRange: ['#dbeafe', '#1e3a8a'],
      colorScaleType: 'sequential',
      maxRadius: 17,
      minRadius: 3,
      pointRadius: 5,
      stroke: '#ffffff',
      strokeWidth: 1.5
    },
    seriesOptions: [{
      encoding: {
        color: 'growth',
        size: 'investment',
        x: 'exposure',
        y: 'efficiency'
      },
      id: 'portfolio',
      name: 'Portfolio performance',
      opacity: 0.86,
      type: 'scatter'
    }],
    storyData: CARTESIAN_QUANTITATIVE_SCATTER_DATA,
    timeAssigned: false,
    xAxisOptions: {
      scale: 'linear',
      ticks: {
        count: 7
      },
      title: 'Exposure'
    },
    yAxisOptions: {
      scale: 'linear',
      ticks: {
        count: 6
      },
      title: 'Efficiency'
    }
  },
  name: 'Quantitative channels',
  parameters: {
    storyHeader: {
      description: 'X·Y 위치에 더해 연속 성장률을 순차 색상으로, 투자 규모를 점 반경으로 매핑하는 다변량 Scatter입니다.',
      eyebrow: 'Charts · Scatter',
      title: 'Quantitative Scatter 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...t.parameters?.docs?.source}}};const u=["Scatter","QuantitativeScatter"];export{t as QuantitativeScatter,e as Scatter,u as __namedExportsOrder,m as default};
