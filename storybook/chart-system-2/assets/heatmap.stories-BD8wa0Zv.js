import{r as t,C as s}from"./chart-playground-Cf0d2JJL.js";import{i,h as r}from"./chart-playground-data-DVQ9OxHY.js";import"./chart-BUQmp9vc.js";import"./chart-story-content-DqL3FnFI.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";import"./chart-theme-controls-8C4PR6_3.js";const f={...s,title:"Charts/Heatmap"},e={args:{heatmapOptions:{cell:{missing:"placeholder",padding:1,radius:4,shape:"rectangle",stroke:"#ffffff",strokeWidth:2},colorScale:{kind:"sequential",nullColor:"#cbd5e1",range:["#eff6ff","#1d4ed8"]},indicator:{title:"Density",valueSuffix:" pts"}},legendAssigned:!1,seriesOptions:[{encoding:{value:"value",x:"quarter",y:"region"},id:"density",name:"Density",type:"heatmap"}],storyData:r,xAxisOptions:{scale:"category",title:"Quarter"},yAxisOptions:{scale:"category",title:"Region"}},name:"Heatmap",parameters:{storyHeader:{description:"두 category 축의 셀 투영, 순차 색상 범위, 결측 placeholder와 셀 테두리·반경을 확인합니다.",eyebrow:"Charts · Heatmap",title:"Heatmap 차트"}},render:t},n={args:{heatmapOptions:{cell:{missing:"placeholder",padding:1.5,radius:3,stroke:"#ffffff",strokeWidth:1.5},colorScale:{domain:{max:32,mid:0,min:-32},kind:"custom",nullColor:"#cbd5e1",stops:[{at:0,color:"#991b1b"},{at:.28,color:"#f87171"},{at:.5,color:"#f8fafc"},{at:.72,color:"#60a5fa"},{at:1,color:"#1e3a8a"}]},indicator:{title:"Change from baseline",valueDecimals:1,valueSuffix:" pts"}},legendAssigned:!1,seriesOptions:[{encoding:{value:"delta",x:"day",y:"metric"},id:"baseline-delta",name:"Baseline delta",type:"heatmap"}],storyData:i,timeAssigned:!1,xAxisOptions:{scale:"category",title:"Day"},yAxisOptions:{scale:"category",title:"Metric"}},name:"Diverging custom stops",parameters:{storyHeader:{description:"0을 중심으로 음수·양수를 분리하고 비대칭 custom stop과 결측 색상을 함께 검증합니다.",eyebrow:"Charts · Heatmap",title:"Diverging Heatmap 차트"}},render:t},a={args:{heatmapOptions:{cell:{missing:"placeholder",padding:5,shape:"circle",stroke:"#ffffff",strokeWidth:2},colorScale:{kind:"sequential",nullColor:"#cbd5e1",range:["#ecfeff","#0e7490"]},indicator:{title:"Density",valueSuffix:" pts"}},legendAssigned:!1,seriesOptions:[{encoding:{value:"value",x:"quarter",y:"region"},id:"density",name:"Density",type:"heatmap"}],storyData:r,xAxisOptions:{scale:"category",title:"Quarter"},yAxisOptions:{scale:"category",title:"Region"}},name:"Dot cells",parameters:{storyHeader:{description:"같은 Heatmap mapping과 색상 indicator를 유지하면서 셀 shape를 원형으로 바꾼 dot matrix 표현을 확인합니다.",eyebrow:"Charts · Heatmap",title:"Dot Heatmap 차트"}},render:t};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    heatmapOptions: {
      cell: {
        missing: 'placeholder',
        padding: 1,
        radius: 4,
        shape: 'rectangle',
        stroke: '#ffffff',
        strokeWidth: 2
      },
      colorScale: {
        kind: 'sequential',
        nullColor: '#cbd5e1',
        range: ['#eff6ff', '#1d4ed8']
      },
      indicator: {
        title: 'Density',
        valueSuffix: ' pts'
      }
    },
    legendAssigned: false,
    seriesOptions: [{
      encoding: {
        value: 'value',
        x: 'quarter',
        y: 'region'
      },
      id: 'density',
      name: 'Density',
      type: 'heatmap'
    }],
    storyData: CARTESIAN_HEATMAP_DATA,
    xAxisOptions: {
      scale: 'category',
      title: 'Quarter'
    },
    yAxisOptions: {
      scale: 'category',
      title: 'Region'
    }
  },
  name: 'Heatmap',
  parameters: {
    storyHeader: {
      description: '두 category 축의 셀 투영, 순차 색상 범위, 결측 placeholder와 셀 테두리·반경을 확인합니다.',
      eyebrow: 'Charts · Heatmap',
      title: 'Heatmap 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    heatmapOptions: {
      cell: {
        missing: 'placeholder',
        padding: 1.5,
        radius: 3,
        stroke: '#ffffff',
        strokeWidth: 1.5
      },
      colorScale: {
        domain: {
          max: 32,
          mid: 0,
          min: -32
        },
        kind: 'custom',
        nullColor: '#cbd5e1',
        stops: [{
          at: 0,
          color: '#991b1b'
        }, {
          at: 0.28,
          color: '#f87171'
        }, {
          at: 0.5,
          color: '#f8fafc'
        }, {
          at: 0.72,
          color: '#60a5fa'
        }, {
          at: 1,
          color: '#1e3a8a'
        }]
      },
      indicator: {
        title: 'Change from baseline',
        valueDecimals: 1,
        valueSuffix: ' pts'
      }
    },
    legendAssigned: false,
    seriesOptions: [{
      encoding: {
        value: 'delta',
        x: 'day',
        y: 'metric'
      },
      id: 'baseline-delta',
      name: 'Baseline delta',
      type: 'heatmap'
    }],
    storyData: CARTESIAN_DIVERGING_HEATMAP_DATA,
    timeAssigned: false,
    xAxisOptions: {
      scale: 'category',
      title: 'Day'
    },
    yAxisOptions: {
      scale: 'category',
      title: 'Metric'
    }
  },
  name: 'Diverging custom stops',
  parameters: {
    storyHeader: {
      description: '0을 중심으로 음수·양수를 분리하고 비대칭 custom stop과 결측 색상을 함께 검증합니다.',
      eyebrow: 'Charts · Heatmap',
      title: 'Diverging Heatmap 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    heatmapOptions: {
      cell: {
        missing: 'placeholder',
        padding: 5,
        shape: 'circle',
        stroke: '#ffffff',
        strokeWidth: 2
      },
      colorScale: {
        kind: 'sequential',
        nullColor: '#cbd5e1',
        range: ['#ecfeff', '#0e7490']
      },
      indicator: {
        title: 'Density',
        valueSuffix: ' pts'
      }
    },
    legendAssigned: false,
    seriesOptions: [{
      encoding: {
        value: 'value',
        x: 'quarter',
        y: 'region'
      },
      id: 'density',
      name: 'Density',
      type: 'heatmap'
    }],
    storyData: CARTESIAN_HEATMAP_DATA,
    xAxisOptions: {
      scale: 'category',
      title: 'Quarter'
    },
    yAxisOptions: {
      scale: 'category',
      title: 'Region'
    }
  },
  name: 'Dot cells',
  parameters: {
    storyHeader: {
      description: '같은 Heatmap mapping과 색상 indicator를 유지하면서 셀 shape를 원형으로 바꾼 dot matrix 표현을 확인합니다.',
      eyebrow: 'Charts · Heatmap',
      title: 'Dot Heatmap 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...a.parameters?.docs?.source}}};const y=["Heatmap","DivergingHeatmap","DotHeatmap"];export{n as DivergingHeatmap,a as DotHeatmap,e as Heatmap,y as __namedExportsOrder,f as default};
