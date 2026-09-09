import{r as e,C as t}from"./chart-playground-Cf0d2JJL.js";import{c as i}from"./chart-playground-data-DVQ9OxHY.js";import"./chart-BUQmp9vc.js";import"./chart-story-content-DqL3FnFI.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";import"./chart-theme-controls-8C4PR6_3.js";const m={...t,title:"Charts/Horizon"},n={args:{gridOptions:{direction:"x",visible:!0},height:520,horizonOptions:{bands:4,curve:"smooth",gap:5,labels:!0,negativeColors:["#fff1f2","#be123c"],padding:2,positiveColors:["#eff6ff","#1d4ed8"]},legendAssigned:!1,seriesOptions:[{encoding:{x:"date",y:"north"},id:"north",name:"North",type:"line"},{encoding:{x:"date",y:"south"},id:"south",name:"South",type:"line"},{encoding:{x:"date",y:"east"},id:"east",name:"East",type:"line"},{encoding:{x:"date",y:"west"},id:"west",name:"West",type:"line"},{encoding:{x:"date",y:"central"},id:"central",name:"Central",type:"line"},{encoding:{x:"date",y:"coast"},id:"coast",name:"Coast",type:"line"}],storyData:i,timeAssigned:!0,timeOptions:{timezone:"UTC"},width:840,xAxisOptions:{opposite:!0,scale:"time",ticks:{count:8},title:"Daily deviation · 2026"},yAxisOptions:{scale:"linear",title:"Deviation"}},name:"Horizon",parameters:{storyHeader:{description:"여러 Line series mapping을 공유 시간축의 독립 행으로 배치하고 값의 크기를 겹친 색상 band로 접어 좁은 높이에서도 변화 패턴을 비교합니다.",eyebrow:"Charts · Horizon",title:"Horizon line small multiples"}},render:e};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    gridOptions: {
      direction: 'x',
      visible: true
    },
    height: 520,
    horizonOptions: {
      bands: 4,
      curve: 'smooth',
      gap: 5,
      labels: true,
      negativeColors: ['#fff1f2', '#be123c'],
      padding: 2,
      positiveColors: ['#eff6ff', '#1d4ed8']
    },
    legendAssigned: false,
    seriesOptions: [{
      encoding: {
        x: 'date',
        y: 'north'
      },
      id: 'north',
      name: 'North',
      type: 'line'
    }, {
      encoding: {
        x: 'date',
        y: 'south'
      },
      id: 'south',
      name: 'South',
      type: 'line'
    }, {
      encoding: {
        x: 'date',
        y: 'east'
      },
      id: 'east',
      name: 'East',
      type: 'line'
    }, {
      encoding: {
        x: 'date',
        y: 'west'
      },
      id: 'west',
      name: 'West',
      type: 'line'
    }, {
      encoding: {
        x: 'date',
        y: 'central'
      },
      id: 'central',
      name: 'Central',
      type: 'line'
    }, {
      encoding: {
        x: 'date',
        y: 'coast'
      },
      id: 'coast',
      name: 'Coast',
      type: 'line'
    }],
    storyData: CARTESIAN_HORIZON_DATA,
    timeAssigned: true,
    timeOptions: {
      timezone: 'UTC'
    },
    width: 840,
    xAxisOptions: {
      opposite: true,
      scale: 'time',
      ticks: {
        count: 8
      },
      title: 'Daily deviation · 2026'
    },
    yAxisOptions: {
      scale: 'linear',
      title: 'Deviation'
    }
  },
  name: 'Horizon',
  parameters: {
    storyHeader: {
      description: '여러 Line series mapping을 공유 시간축의 독립 행으로 배치하고 값의 크기를 겹친 색상 band로 접어 좁은 높이에서도 변화 패턴을 비교합니다.',
      eyebrow: 'Charts · Horizon',
      title: 'Horizon line small multiples'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...n.parameters?.docs?.source}}};const c=["Horizon"];export{n as Horizon,c as __namedExportsOrder,m as default};
