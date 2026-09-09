import{r as n,C as i}from"./chart-playground-Cf0d2JJL.js";import{g as o}from"./chart-playground-data-DVQ9OxHY.js";import"./chart-BUQmp9vc.js";import"./chart-story-content-DqL3FnFI.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";import"./chart-theme-controls-8C4PR6_3.js";const d={...i,title:"Charts/Lollipop"},e={args:{legendAssigned:!1,lollipopOptions:{lineWidth:3,pointRadius:7},seriesOptions:[{encoding:{x:"category",y:"value"},id:"channel-share",name:"Channel share",type:"lollipop"}],storyData:o,timeAssigned:!1,xAxisOptions:{scale:"category",title:"Acquisition channel"},yAxisOptions:{labels:{valueSuffix:"%"},scale:"linear",ticks:{count:6},title:"Share"}},name:"Lollipop",parameters:{storyHeader:{description:"각 category의 값을 0 기준 stem과 강조 point로 표현하고 선 두께와 point 반경을 확인합니다.",eyebrow:"Charts · Lollipop",title:"Lollipop 차트"}},render:n};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    legendAssigned: false,
    lollipopOptions: {
      lineWidth: 3,
      pointRadius: 7
    },
    seriesOptions: [{
      encoding: {
        x: 'category',
        y: 'value'
      },
      id: 'channel-share',
      name: 'Channel share',
      type: 'lollipop'
    }],
    storyData: CARTESIAN_LOLLIPOP_DATA,
    timeAssigned: false,
    xAxisOptions: {
      scale: 'category',
      title: 'Acquisition channel'
    },
    yAxisOptions: {
      labels: {
        valueSuffix: '%'
      },
      scale: 'linear',
      ticks: {
        count: 6
      },
      title: 'Share'
    }
  },
  name: 'Lollipop',
  parameters: {
    storyHeader: {
      description: '각 category의 값을 0 기준 stem과 강조 point로 표현하고 선 두께와 point 반경을 확인합니다.',
      eyebrow: 'Charts · Lollipop',
      title: 'Lollipop 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...e.parameters?.docs?.source}}};const m=["Lollipop"];export{e as Lollipop,m as __namedExportsOrder,d as default};
