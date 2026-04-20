import{c as o,d as s,f as d,e as n,r as i}from"./story-utils-R14dQy-K.js";const p={title:"Options/Layout & Padding",args:{...o},argTypes:{...s}},t={parameters:{controls:{disable:!0}},render:e=>i([{type:"line",data:n,options:{frameTheme:e.frameTheme,title:{text:"Monthly Revenue"},legend:{show:!0,position:"top"}},label:"Title → Legend (top)"},{type:"line",data:n,options:{frameTheme:e.frameTheme,title:{text:"Monthly Revenue"},subtitle:{text:"Revenue vs Cost (2025)"},legend:{show:!0,position:"top"}},label:"Title → Subtitle → Legend"},{type:"line",data:n,options:{frameTheme:e.frameTheme,title:{text:"Monthly Revenue"},legend:{show:!0,position:"bottom"}},label:"Title (top) + Legend (bottom)"},{type:"line",data:n,options:{frameTheme:e.frameTheme,legend:{show:!0,position:"top"}},label:"Legend only (no title)"}],{columns:2,cardHeight:260,hideDataSummary:!0})},r={parameters:{controls:{disable:!0}},render:e=>i([{type:"line",data:n,options:{frameTheme:e.frameTheme,padding:{top:0,right:0,bottom:0,left:0},legend:{show:!0,position:"top"}},label:"padding: 0",description:"axes/grid 그대로, data area 가득"},{type:"line",data:n,options:{frameTheme:e.frameTheme,padding:{top:30,right:30,bottom:30,left:30},legend:{show:!0,position:"top"}},label:"padding: 30",description:"axes/grid 동일, data area만 축소"},{type:"line",data:n,options:{frameTheme:e.frameTheme,margin:{top:120},title:{text:"margin.top = 120"},legend:{show:!0,position:"top"}},label:"margin.top: 120",description:"title/legend/graph 모두 아래로 밀림"}],{columns:3,cardHeight:260,hideDataSummary:!0})},a={args:{...o,width:720,height:320},render:e=>d("line",n,{frameTheme:e.frameTheme,margin:{top:60,left:60},title:{text:"margin: { top: 60, left: 60 }"},legend:{show:!0,position:"top"}},{width:e.width,height:e.height})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([{
    type: 'line',
    data: NUMERIC_BASIC,
    options: {
      frameTheme: args.frameTheme,
      title: {
        text: 'Monthly Revenue'
      },
      legend: {
        show: true,
        position: 'top'
      }
    },
    label: 'Title → Legend (top)'
  }, {
    type: 'line',
    data: NUMERIC_BASIC,
    options: {
      frameTheme: args.frameTheme,
      title: {
        text: 'Monthly Revenue'
      },
      subtitle: {
        text: 'Revenue vs Cost (2025)'
      },
      legend: {
        show: true,
        position: 'top'
      }
    },
    label: 'Title → Subtitle → Legend'
  }, {
    type: 'line',
    data: NUMERIC_BASIC,
    options: {
      frameTheme: args.frameTheme,
      title: {
        text: 'Monthly Revenue'
      },
      legend: {
        show: true,
        position: 'bottom'
      }
    },
    label: 'Title (top) + Legend (bottom)'
  }, {
    type: 'line',
    data: NUMERIC_BASIC,
    options: {
      frameTheme: args.frameTheme,
      legend: {
        show: true,
        position: 'top'
      }
    },
    label: 'Legend only (no title)'
  }], {
    columns: 2,
    cardHeight: 260,
    hideDataSummary: true
  })
}`,...t.parameters?.docs?.source},description:{story:"Slot order 프리셋 -- 주요 title/subtitle/legend 조합 카드로 나란히 비교.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([{
    type: 'line',
    data: NUMERIC_BASIC,
    options: {
      frameTheme: args.frameTheme,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      legend: {
        show: true,
        position: 'top'
      }
    },
    label: 'padding: 0',
    description: 'axes/grid 그대로, data area 가득'
  }, {
    type: 'line',
    data: NUMERIC_BASIC,
    options: {
      frameTheme: args.frameTheme,
      padding: {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
      },
      legend: {
        show: true,
        position: 'top'
      }
    },
    label: 'padding: 30',
    description: 'axes/grid 동일, data area만 축소'
  }, {
    type: 'line',
    data: NUMERIC_BASIC,
    options: {
      frameTheme: args.frameTheme,
      margin: {
        top: 120
      },
      title: {
        text: 'margin.top = 120'
      },
      legend: {
        show: true,
        position: 'top'
      }
    },
    label: 'margin.top: 120',
    description: 'title/legend/graph 모두 아래로 밀림'
  }], {
    columns: 3,
    cardHeight: 260,
    hideDataSummary: true
  })
}`,...r.parameters?.docs?.source},description:{story:"padding (data area only) vs margin (all slots) 비교.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    width: 720,
    height: 320
  },
  render: args => renderChartSingle('line', NUMERIC_BASIC, {
    frameTheme: args.frameTheme,
    margin: {
      top: 60,
      left: 60
    },
    title: {
      text: 'margin: { top: 60, left: 60 }'
    },
    legend: {
      show: true,
      position: 'top'
    }
  }, {
    width: args.width,
    height: args.height
  })
}`,...a.parameters?.docs?.source},description:{story:"Margin per-side override -- 미지정 면은 기본 20px.",...a.parameters?.docs?.description}}};const m=["SlotOrderPresets","PaddingVsMargin","MarginPerSideOverride"];export{a as MarginPerSideOverride,r as PaddingVsMargin,t as SlotOrderPresets,m as __namedExportsOrder,p as default};
