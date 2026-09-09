import{r,C as a}from"./chart-playground-Cf0d2JJL.js";import{j as t}from"./chart-playground-data-DVQ9OxHY.js";import"./chart-BUQmp9vc.js";import"./chart-story-content-DqL3FnFI.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";import"./chart-theme-controls-8C4PR6_3.js";const m={...a,title:"Charts/Dumbbell"},e={args:{dumbbellOptions:{connectorWidth:3,endColor:"#2563eb",pointRadius:6,startColor:"#94a3b8"},legendAssigned:!1,seriesOptions:[{encoding:{xEnd:"current",xStart:"previous",y:"category"},id:"change",name:"Period change",type:"dumbbell"}],storyData:t,xAxisOptions:{scale:"linear",title:"Score"},yAxisOptions:{scale:"category",title:"Metric"}},name:"Dumbbell",parameters:{storyHeader:{description:"각 Y category에서 이전·현재 값의 두 점과 가로 변화 구간 연결선을 확인합니다.",eyebrow:"Charts · Dumbbell",title:"Dumbbell 차트"}},render:r},n={args:{dumbbellOptions:{connectorWidth:3,endColor:"#2563eb",pointRadius:6,startColor:"#94a3b8"},legendAssigned:!1,seriesOptions:[{encoding:{x:"category",yEnd:"current",yStart:"previous"},id:"vertical-change",name:"Period change",type:"dumbbell"}],storyData:t,timeAssigned:!1,xAxisOptions:{scale:"category",title:"Metric"},yAxisOptions:{scale:"linear",title:"Score"}},name:"Vertical",parameters:{storyHeader:{description:"동일한 시작·종료 필드를 category X축과 연속 Y축에 매핑해 세로 방향 변화 구간을 표현합니다.",eyebrow:"Charts · Dumbbell",title:"Vertical Dumbbell 차트"}},render:r};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    dumbbellOptions: {
      connectorWidth: 3,
      endColor: '#2563eb',
      pointRadius: 6,
      startColor: '#94a3b8'
    },
    legendAssigned: false,
    seriesOptions: [{
      encoding: {
        xEnd: 'current',
        xStart: 'previous',
        y: 'category'
      },
      id: 'change',
      name: 'Period change',
      type: 'dumbbell'
    }],
    storyData: CARTESIAN_DUMBBELL_DATA,
    xAxisOptions: {
      scale: 'linear',
      title: 'Score'
    },
    yAxisOptions: {
      scale: 'category',
      title: 'Metric'
    }
  },
  name: 'Dumbbell',
  parameters: {
    storyHeader: {
      description: '각 Y category에서 이전·현재 값의 두 점과 가로 변화 구간 연결선을 확인합니다.',
      eyebrow: 'Charts · Dumbbell',
      title: 'Dumbbell 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    dumbbellOptions: {
      connectorWidth: 3,
      endColor: '#2563eb',
      pointRadius: 6,
      startColor: '#94a3b8'
    },
    legendAssigned: false,
    seriesOptions: [{
      encoding: {
        x: 'category',
        yEnd: 'current',
        yStart: 'previous'
      },
      id: 'vertical-change',
      name: 'Period change',
      type: 'dumbbell'
    }],
    storyData: CARTESIAN_DUMBBELL_DATA,
    timeAssigned: false,
    xAxisOptions: {
      scale: 'category',
      title: 'Metric'
    },
    yAxisOptions: {
      scale: 'linear',
      title: 'Score'
    }
  },
  name: 'Vertical',
  parameters: {
    storyHeader: {
      description: '동일한 시작·종료 필드를 category X축과 연속 Y축에 매핑해 세로 방향 변화 구간을 표현합니다.',
      eyebrow: 'Charts · Dumbbell',
      title: 'Vertical Dumbbell 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...n.parameters?.docs?.source}}};const p=["Dumbbell","VerticalDumbbell"];export{e as Dumbbell,n as VerticalDumbbell,p as __namedExportsOrder,m as default};
