import{r,C as s}from"./chart-playground-Cf0d2JJL.js";import{b as i,o,d as c}from"./chart-playground-data-DVQ9OxHY.js";import"./chart-BUQmp9vc.js";import"./chart-story-content-DqL3FnFI.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";import"./chart-theme-controls-8C4PR6_3.js";const g={...s,title:"Charts/Area"},n={args:{areaOptions:{curve:"smooth",fillOpacity:.32,lineWidth:2},seriesOptions:[{encoding:{x:"date",y:"amount"},id:"amount",name:"Amount",type:"area"}],yAxisOptions:{labels:{thousandsSeparator:!0,valuePrefix:"$"},scale:"linear",ticks:{count:6},title:"Amount"}},name:"Area",parameters:{storyHeader:{description:"관측값을 Y축 기준선까지 채우고, 결측값에서는 영역과 상단 선을 함께 끊는 Area mark를 확인합니다.",eyebrow:"Charts · Area",title:"Area 차트"}},render:r},e={args:{areaOptions:{curve:"smooth",fillOpacity:.62,lineWidth:2},seriesOptions:[{encoding:{x:"month",y:"direct"},id:"direct",name:"Direct",stack:"revenue",type:"area"},{encoding:{x:"month",y:"partner"},id:"partner",name:"Partner",stack:"revenue",type:"area"},{encoding:{x:"month",y:"renewal"},id:"renewal",name:"Renewal",stack:"revenue",type:"area"}],storyData:o,timeAssigned:!1,xAxisOptions:{scale:"category",title:"Month"},yAxisOptions:{scale:"linear",ticks:{count:6},title:"Revenue mix"}},name:"Stacked",parameters:{storyHeader:{description:"각 Area의 하단 경계가 앞선 누적 상단을 따라가며 총합까지 연속적으로 채워지는지 확인합니다.",eyebrow:"Charts · Area",title:"Stacked Area 차트"}},render:r},a={args:{areaOptions:{fillOpacity:.72,lineWidth:1},seriesOptions:[{color:"#15803d",encoding:{x:"month",y:"acquisition"},id:"acquisition",name:"Acquisition",stack:"net",type:"area"},{color:"#4ade80",encoding:{x:"month",y:"expansion"},id:"expansion",name:"Expansion",stack:"net",type:"area"},{color:"#b91c1c",encoding:{x:"month",y:"churn"},id:"churn",name:"Churn",stack:"net",type:"area"},{color:"#ef4444",encoding:{x:"month",y:"contraction"},id:"contraction",name:"Contraction",stack:"net",type:"area"},{color:"#fca5a5",encoding:{x:"month",y:"refund"},id:"refund",name:"Refund",stack:"net",type:"area"}],storyData:i,timeAssigned:!1,xAxisOptions:{scale:"category",title:"Month"},yAxisOptions:{scale:"linear",ticks:{count:7},title:"Net movement"}},name:"Diverging stacked",parameters:{storyHeader:{description:"양수와 음수 stack을 0 기준 위·아래로 분리해 누적 면적이 부호 경계를 올바르게 유지하는지 확인합니다.",eyebrow:"Charts · Area",title:"Diverging Stacked Area 차트"}},render:r},t={args:{areaOptions:{curve:"smooth",fillOpacity:.84,lineWidth:1,stackOffset:"wiggle"},seriesOptions:[{encoding:{x:"period",y:"ambient"},id:"ambient",name:"Ambient",stack:"soundscape",type:"area"},{encoding:{x:"period",y:"bass"},id:"bass",name:"Bass",stack:"soundscape",type:"area"},{encoding:{x:"period",y:"percussion"},id:"percussion",name:"Percussion",stack:"soundscape",type:"area"},{encoding:{x:"period",y:"strings"},id:"strings",name:"Strings",stack:"soundscape",type:"area"},{encoding:{x:"period",y:"vocals"},id:"vocals",name:"Vocals",stack:"soundscape",type:"area"}],storyData:c,timeAssigned:!1,xAxisOptions:{scale:"category",ticks:{count:8},title:"Sequence"},yAxisOptions:{scale:"linear",ticks:{count:5},title:"Layer volume"}},name:"Streamgraph",parameters:{storyHeader:{description:"동일 stack의 Area를 wiggle 기준선에 누적하여 전체 흐름의 굴곡을 줄인 정적 Streamgraph를 확인합니다.",eyebrow:"Charts · Area",title:"Streamgraph"}},render:r};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    areaOptions: {
      curve: 'smooth',
      fillOpacity: 0.32,
      lineWidth: 2
    },
    seriesOptions: [{
      encoding: {
        x: 'date',
        y: 'amount'
      },
      id: 'amount',
      name: 'Amount',
      type: 'area'
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
  name: 'Area',
  parameters: {
    storyHeader: {
      description: '관측값을 Y축 기준선까지 채우고, 결측값에서는 영역과 상단 선을 함께 끊는 Area mark를 확인합니다.',
      eyebrow: 'Charts · Area',
      title: 'Area 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    areaOptions: {
      curve: 'smooth',
      fillOpacity: 0.62,
      lineWidth: 2
    },
    seriesOptions: [{
      encoding: {
        x: 'month',
        y: 'direct'
      },
      id: 'direct',
      name: 'Direct',
      stack: 'revenue',
      type: 'area'
    }, {
      encoding: {
        x: 'month',
        y: 'partner'
      },
      id: 'partner',
      name: 'Partner',
      stack: 'revenue',
      type: 'area'
    }, {
      encoding: {
        x: 'month',
        y: 'renewal'
      },
      id: 'renewal',
      name: 'Renewal',
      stack: 'revenue',
      type: 'area'
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
    }
  },
  name: 'Stacked',
  parameters: {
    storyHeader: {
      description: '각 Area의 하단 경계가 앞선 누적 상단을 따라가며 총합까지 연속적으로 채워지는지 확인합니다.',
      eyebrow: 'Charts · Area',
      title: 'Stacked Area 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    areaOptions: {
      fillOpacity: 0.72,
      lineWidth: 1
    },
    seriesOptions: [{
      color: '#15803d',
      encoding: {
        x: 'month',
        y: 'acquisition'
      },
      id: 'acquisition',
      name: 'Acquisition',
      stack: 'net',
      type: 'area'
    }, {
      color: '#4ade80',
      encoding: {
        x: 'month',
        y: 'expansion'
      },
      id: 'expansion',
      name: 'Expansion',
      stack: 'net',
      type: 'area'
    }, {
      color: '#b91c1c',
      encoding: {
        x: 'month',
        y: 'churn'
      },
      id: 'churn',
      name: 'Churn',
      stack: 'net',
      type: 'area'
    }, {
      color: '#ef4444',
      encoding: {
        x: 'month',
        y: 'contraction'
      },
      id: 'contraction',
      name: 'Contraction',
      stack: 'net',
      type: 'area'
    }, {
      color: '#fca5a5',
      encoding: {
        x: 'month',
        y: 'refund'
      },
      id: 'refund',
      name: 'Refund',
      stack: 'net',
      type: 'area'
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
    }
  },
  name: 'Diverging stacked',
  parameters: {
    storyHeader: {
      description: '양수와 음수 stack을 0 기준 위·아래로 분리해 누적 면적이 부호 경계를 올바르게 유지하는지 확인합니다.',
      eyebrow: 'Charts · Area',
      title: 'Diverging Stacked Area 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    areaOptions: {
      curve: 'smooth',
      fillOpacity: 0.84,
      lineWidth: 1,
      stackOffset: 'wiggle'
    },
    seriesOptions: [{
      encoding: {
        x: 'period',
        y: 'ambient'
      },
      id: 'ambient',
      name: 'Ambient',
      stack: 'soundscape',
      type: 'area'
    }, {
      encoding: {
        x: 'period',
        y: 'bass'
      },
      id: 'bass',
      name: 'Bass',
      stack: 'soundscape',
      type: 'area'
    }, {
      encoding: {
        x: 'period',
        y: 'percussion'
      },
      id: 'percussion',
      name: 'Percussion',
      stack: 'soundscape',
      type: 'area'
    }, {
      encoding: {
        x: 'period',
        y: 'strings'
      },
      id: 'strings',
      name: 'Strings',
      stack: 'soundscape',
      type: 'area'
    }, {
      encoding: {
        x: 'period',
        y: 'vocals'
      },
      id: 'vocals',
      name: 'Vocals',
      stack: 'soundscape',
      type: 'area'
    }],
    storyData: CARTESIAN_STREAMGRAPH_DATA,
    timeAssigned: false,
    xAxisOptions: {
      scale: 'category',
      ticks: {
        count: 8
      },
      title: 'Sequence'
    },
    yAxisOptions: {
      scale: 'linear',
      ticks: {
        count: 5
      },
      title: 'Layer volume'
    }
  },
  name: 'Streamgraph',
  parameters: {
    storyHeader: {
      description: '동일 stack의 Area를 wiggle 기준선에 누적하여 전체 흐름의 굴곡을 줄인 정적 Streamgraph를 확인합니다.',
      eyebrow: 'Charts · Area',
      title: 'Streamgraph'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...t.parameters?.docs?.source}}};const x=["Area","StackedArea","DivergingStackedArea","Streamgraph"];export{n as Area,a as DivergingStackedArea,e as StackedArea,t as Streamgraph,x as __namedExportsOrder,g as default};
