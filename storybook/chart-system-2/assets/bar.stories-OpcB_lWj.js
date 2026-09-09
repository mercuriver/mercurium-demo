import{r,C as t}from"./chart-playground-Cf0d2JJL.js";import{b as s,o as i}from"./chart-playground-data-DVQ9OxHY.js";import"./chart-BUQmp9vc.js";import"./chart-story-content-DqL3FnFI.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";import"./chart-theme-controls-8C4PR6_3.js";const u={...t,title:"Charts/Bar"},n={args:{barOptions:{barWidth:.68,radius:6},seriesOptions:[{encoding:{x:"date",y:"amount"},name:"Amount"}],viewType:"bar",yAxisOptions:{labels:{thousandsSeparator:!0,valuePrefix:"$"},scale:"linear",ticks:{count:6},title:"Amount"}},name:"Bar",parameters:{storyHeader:{description:"연속 시간축 경계 안에서 bar 폭 비율과 상단 모서리 반경을 확인합니다.",eyebrow:"Charts · Bar",title:"Bar 차트"}},render:r},e={args:{barOptions:{barWidth:.7,radius:0},seriesOptions:[{encoding:{x:"month",y:"direct"},name:"Direct",stack:"revenue"},{encoding:{x:"month",y:"partner"},name:"Partner",stack:"revenue"},{encoding:{x:"month",y:"renewal"},name:"Renewal",stack:"revenue"}],storyData:i,timeAssigned:!1,xAxisOptions:{scale:"category",title:"Month"},yAxisOptions:{scale:"linear",ticks:{count:6},title:"Revenue mix"},viewType:"bar"},name:"Stacked",parameters:{storyHeader:{description:"view.type의 Bar 기본값과 encoding.y 기반 ID 추론을 사용하고, 같은 stack이 하나의 X 슬롯과 누적 domain을 공유하는지 확인합니다.",eyebrow:"Charts · Bar",title:"Stacked Bar 차트"}},render:r},a={args:{barOptions:{barWidth:.7,radius:0},seriesOptions:[{color:"#15803d",encoding:{x:"month",y:"acquisition"},name:"Acquisition",stack:"net"},{color:"#4ade80",encoding:{x:"month",y:"expansion"},name:"Expansion",stack:"net"},{color:"#b91c1c",encoding:{x:"month",y:"churn"},name:"Churn",stack:"net"},{color:"#ef4444",encoding:{x:"month",y:"contraction"},name:"Contraction",stack:"net"},{color:"#fca5a5",encoding:{x:"month",y:"refund"},name:"Refund",stack:"net"}],storyData:s,timeAssigned:!1,xAxisOptions:{scale:"category",title:"Month"},yAxisOptions:{scale:"linear",ticks:{count:7},title:"Net movement"},viewType:"bar"},name:"Diverging stacked",parameters:{storyHeader:{description:"공통 Bar 유형과 encoding.y 기반 ID를 한 번만 해석하고, 양수 성장 요인과 음수 손실 요인을 0 기준의 독립 누적으로 배치합니다.",eyebrow:"Charts · Bar",title:"Diverging Stacked Bar 차트"}},render:r};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    barOptions: {
      barWidth: 0.68,
      radius: 6
    },
    seriesOptions: [{
      encoding: {
        x: 'date',
        y: 'amount'
      },
      name: 'Amount'
    }],
    viewType: 'bar',
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
  name: 'Bar',
  parameters: {
    storyHeader: {
      description: '연속 시간축 경계 안에서 bar 폭 비율과 상단 모서리 반경을 확인합니다.',
      eyebrow: 'Charts · Bar',
      title: 'Bar 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    barOptions: {
      barWidth: 0.7,
      radius: 0
    },
    seriesOptions: [{
      encoding: {
        x: 'month',
        y: 'direct'
      },
      name: 'Direct',
      stack: 'revenue'
    }, {
      encoding: {
        x: 'month',
        y: 'partner'
      },
      name: 'Partner',
      stack: 'revenue'
    }, {
      encoding: {
        x: 'month',
        y: 'renewal'
      },
      name: 'Renewal',
      stack: 'revenue'
    }],
    storyData: CARTESIAN_STACKED_DATA,
    timeAssigned: false,
    xAxisOptions: {
      scale: 'category',
      title: 'Month'
    },
    yAxisOptions: {
      scale: 'linear',
      ticks: {
        count: 6
      },
      title: 'Revenue mix'
    },
    viewType: 'bar'
  },
  name: 'Stacked',
  parameters: {
    storyHeader: {
      description: 'view.type의 Bar 기본값과 encoding.y 기반 ID 추론을 사용하고, 같은 stack이 하나의 X 슬롯과 누적 domain을 공유하는지 확인합니다.',
      eyebrow: 'Charts · Bar',
      title: 'Stacked Bar 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    barOptions: {
      barWidth: 0.7,
      radius: 0
    },
    seriesOptions: [{
      color: '#15803d',
      encoding: {
        x: 'month',
        y: 'acquisition'
      },
      name: 'Acquisition',
      stack: 'net'
    }, {
      color: '#4ade80',
      encoding: {
        x: 'month',
        y: 'expansion'
      },
      name: 'Expansion',
      stack: 'net'
    }, {
      color: '#b91c1c',
      encoding: {
        x: 'month',
        y: 'churn'
      },
      name: 'Churn',
      stack: 'net'
    }, {
      color: '#ef4444',
      encoding: {
        x: 'month',
        y: 'contraction'
      },
      name: 'Contraction',
      stack: 'net'
    }, {
      color: '#fca5a5',
      encoding: {
        x: 'month',
        y: 'refund'
      },
      name: 'Refund',
      stack: 'net'
    }],
    storyData: CARTESIAN_DIVERGING_STACKED_DATA,
    timeAssigned: false,
    xAxisOptions: {
      scale: 'category',
      title: 'Month'
    },
    yAxisOptions: {
      scale: 'linear',
      ticks: {
        count: 7
      },
      title: 'Net movement'
    },
    viewType: 'bar'
  },
  name: 'Diverging stacked',
  parameters: {
    storyHeader: {
      description: '공통 Bar 유형과 encoding.y 기반 ID를 한 번만 해석하고, 양수 성장 요인과 음수 손실 요인을 0 기준의 독립 누적으로 배치합니다.',
      eyebrow: 'Charts · Bar',
      title: 'Diverging Stacked Bar 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...a.parameters?.docs?.source}}};const g=["Bar","StackedBar","DivergingStackedBar"];export{n as Bar,a as DivergingStackedBar,e as StackedBar,g as __namedExportsOrder,u as default};
