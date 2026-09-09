import{c as o}from"./chart-story-content-DqL3FnFI.js";import{r as l,C as d}from"./chart-playground-Cf0d2JJL.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";import"./chart-theme-controls-8C4PR6_3.js";import"./chart-playground-data-DVQ9OxHY.js";const h={...d,title:"Features/Interactions/Navigation"},n={args:{crosshairAssigned:!0,crosshairOptions:{direction:"both",enabled:!0,synchronizePanels:!1},lineOptions:{curve:"smooth",dots:!0,lineWidth:2,pointRadius:3},navigatorAssigned:!0,navigatorOptions:{enabled:!0,position:"bottom",size:56},seriesOptions:[{encoding:{x:"date",y:"amount"},id:"amount",name:"Amount",type:"line"},{encoding:{x:"date",y:"previous"},id:"previous",name:"Previous",type:"line"}],tooltipAssigned:!0,tooltipOptions:{enabled:!0,shared:!0,snapDistance:2,synchronizePanels:!1,valueDecimals:0,valuePrefix:"$"},yAxisOptions:{labels:{thousandsSeparator:!0,valuePrefix:"$"},scale:"linear",ticks:{count:6},title:"Amount"}},name:"Range selection",parameters:{storyHeader:{description:"하단 Navigator의 선택 구간과 양 끝 핸들을 조절해 표시 범위를 변경합니다. 범위 변경 뒤 tooltip이 현재 표시 데이터와 일치하는지 확인합니다.",eyebrow:"Cartesian interaction",title:"Navigator로 표시 범위 선택"}},render:l},a=s=>o({width:840,height:430,summary:"Daily demand · full-data overview · drag or use arrow keys",initialization:{data:Array.from({length:60},(p,e)=>({date:Date.UTC(2026,0,e+1),demand:40+Math.sin(e/5)*23+e%7*3,forecast:50+Math.sin(e/7)*16})),view:{paradigm:"cartesian",series:[{id:"demand",name:"Demand",encoding:{x:"date",y:"demand"}},{id:"forecast",name:"Forecast",encoding:{x:"date",y:"forecast"}}],options:{navigator:s,animation:{enabled:!1},margin:{left:16,right:20,top:12,bottom:12},padding:{left:12,right:12,top:12,bottom:12},legend:{visible:!0,position:"top"},tooltip:{enabled:!0,shared:!0},xAxis:{scale:"time",title:"Day"},yAxis:{scale:"linear",min:0,max:100,title:"Demand",labels:{valueSuffix:" units"}}}}}}),t={name:"X-axis overview",parameters:{controls:{disable:!0},storyHeader:{eyebrow:"Navigator presentation",title:"전체 데이터 미리보기와 표시 구간",description:"가로 Navigator는 X축 범위를 선택합니다. 확대 후에도 전체 데이터의 흐름과 눈금은 남고, 선택 핸들만 이동합니다. Navigator 양 끝은 축 여백을 제외한 실제 plot과 정렬됩니다."}},render:()=>a({enabled:!0,position:"bottom",size:68,ticks:{visible:!0},preview:{visible:!0}})},i={name:"Y-axis distribution",parameters:{controls:{disable:!0},storyHeader:{eyebrow:"Y-axis window",title:"세로 Navigator로 값 범위 선택",description:"좌우 Navigator는 Y축의 표시 범위를 좁힙니다. 원본 행과 X축 범위는 유지하며, 범위를 가로지르는 선은 plot 경계에서 잘립니다. 전체 값의 분포를 미리보기로 표시합니다."}},render:()=>a({enabled:!0,position:"right",size:76,ticks:{visible:!0},preview:{visible:!0}})},r={name:"Ticks without preview",parameters:{controls:{disable:!0},storyHeader:{eyebrow:"Independent visibility",title:"눈금만 남긴 간결한 Navigator",description:"navigator.ticks.visible과 navigator.preview.visible을 독립적으로 제어합니다. 미리보기를 꺼도 구간 선택과 plot 정렬은 유지됩니다."}},render:()=>a({enabled:!0,position:"top",size:52,ticks:{visible:!0},preview:{visible:!1}})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    crosshairAssigned: true,
    crosshairOptions: {
      direction: 'both',
      enabled: true,
      synchronizePanels: false
    },
    lineOptions: {
      curve: 'smooth',
      dots: true,
      lineWidth: 2,
      pointRadius: 3
    },
    navigatorAssigned: true,
    navigatorOptions: {
      enabled: true,
      position: 'bottom',
      size: 56
    },
    seriesOptions: [{
      encoding: {
        x: 'date',
        y: 'amount'
      },
      id: 'amount',
      name: 'Amount',
      type: 'line'
    }, {
      encoding: {
        x: 'date',
        y: 'previous'
      },
      id: 'previous',
      name: 'Previous',
      type: 'line'
    }],
    tooltipAssigned: true,
    tooltipOptions: {
      enabled: true,
      shared: true,
      snapDistance: 2,
      synchronizePanels: false,
      valueDecimals: 0,
      valuePrefix: '$'
    },
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
  name: 'Range selection',
  parameters: {
    storyHeader: {
      description: '하단 Navigator의 선택 구간과 양 끝 핸들을 조절해 표시 범위를 변경합니다. 범위 변경 뒤 tooltip이 현재 표시 데이터와 일치하는지 확인합니다.',
      eyebrow: 'Cartesian interaction',
      title: 'Navigator로 표시 범위 선택'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'X-axis overview',
  parameters: {
    controls: {
      disable: true
    },
    storyHeader: {
      eyebrow: 'Navigator presentation',
      title: '전체 데이터 미리보기와 표시 구간',
      description: '가로 Navigator는 X축 범위를 선택합니다. 확대 후에도 전체 데이터의 흐름과 눈금은 남고, 선택 핸들만 이동합니다. Navigator 양 끝은 축 여백을 제외한 실제 plot과 정렬됩니다.'
    }
  },
  render: () => renderNavigatorCase({
    enabled: true,
    position: 'bottom',
    size: 68,
    ticks: {
      visible: true
    },
    preview: {
      visible: true
    }
  })
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Y-axis distribution',
  parameters: {
    controls: {
      disable: true
    },
    storyHeader: {
      eyebrow: 'Y-axis window',
      title: '세로 Navigator로 값 범위 선택',
      description: '좌우 Navigator는 Y축의 표시 범위를 좁힙니다. 원본 행과 X축 범위는 유지하며, 범위를 가로지르는 선은 plot 경계에서 잘립니다. 전체 값의 분포를 미리보기로 표시합니다.'
    }
  },
  render: () => renderNavigatorCase({
    enabled: true,
    position: 'right',
    size: 76,
    ticks: {
      visible: true
    },
    preview: {
      visible: true
    }
  })
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Ticks without preview',
  parameters: {
    controls: {
      disable: true
    },
    storyHeader: {
      eyebrow: 'Independent visibility',
      title: '눈금만 남긴 간결한 Navigator',
      description: 'navigator.ticks.visible과 navigator.preview.visible을 독립적으로 제어합니다. 미리보기를 꺼도 구간 선택과 plot 정렬은 유지됩니다.'
    }
  },
  render: () => renderNavigatorCase({
    enabled: true,
    position: 'top',
    size: 52,
    ticks: {
      visible: true
    },
    preview: {
      visible: false
    }
  })
}`,...r.parameters?.docs?.source}}};const w=["Navigator","FullDataOverview","VerticalDistribution","TicksOnly"];export{t as FullDataOverview,n as Navigator,r as TicksOnly,i as VerticalDistribution,w as __namedExportsOrder,h as default};
