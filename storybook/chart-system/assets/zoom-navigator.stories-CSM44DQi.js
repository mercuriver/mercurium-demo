import{c as i,d as p,f as d,g as l,h,L as m,r as g,i as c}from"./story-utils-C9PePNh8.js";const f={title:"Interactions/Zoom & Navigator",args:{...i,dataset:"numeric-large",minZoom:.2,wheelMode:"zoom"},argTypes:{dataset:c(m),minZoom:{control:{type:"range",min:.05,max:1,step:.05},description:"zoom 최소 비율 (축소 한계)",table:{defaultValue:{summary:"0.2"}}},wheelMode:{control:"select",options:["zoom","pan"],description:"휠 동작 모드",table:{defaultValue:{summary:"zoom"}}},...p}};function s(e=50){return{xAxisType:"number",series:[{key:"series-a",label:"Series A",data:Array.from({length:e},(u,n)=>({x:n+1,y:Math.sin(n*.3)*40+80+n%7*3}))},{key:"series-b",label:"Series B",data:Array.from({length:e},(u,n)=>({x:n+1,y:Math.cos(n*.2)*30+60+n%5*2}))}]}}const o={parameters:{controls:{disable:!0}},render:e=>g([{type:"line",data:s(),options:{frameTheme:e.frameTheme,zoom:{enabled:!0,wheelMode:"zoom"},tooltip:{show:!0,shared:!0}},label:"Drag-brush + Wheel zoom",description:"드래그 범위 선택으로 zoom in, 휠로 줌 인/아웃",plugins:["zoom"]},{type:"line",data:s(),options:{frameTheme:e.frameTheme,zoom:{enabled:!0,wheelMode:"pan"},tooltip:{show:!0,shared:!0}},label:"Wheel pan",description:"휠 동작이 X축 좌우 이동",plugins:["zoom"]},{type:"line",data:s(),options:{frameTheme:e.frameTheme,zoom:{enabled:!0,minZoom:.5},tooltip:{show:!0,shared:!0}},label:"Min zoom = 0.5",description:"최대 50%까지만 축소",plugins:["zoom"]},{type:"line",data:s(),options:{frameTheme:e.frameTheme,zoom:{enabled:!1},tooltip:{show:!0,shared:!0}},label:"Zoom disabled",description:"비교용 baseline"}],{columns:2,cardHeight:280,hideDataSummary:!0})},r={args:{...i,dataset:"numeric-large",minZoom:.2,wheelMode:"zoom"},render:e=>d("line",h(m,e.dataset),{...l(e),zoom:{enabled:!0,wheelMode:e.wheelMode,minZoom:e.minZoom},tooltip:{show:!0,shared:!0}},{fitContainer:e.fitContainer,width:e.width??700,height:e.height??400,plugins:["zoom"]})},a={args:{...i,dataset:"numeric-large"},render:e=>d("line",h(m,e.dataset),{...l(e),zoom:{enabled:!0},navigator:{enabled:!0},tooltip:{show:!0,shared:!0}},{fitContainer:e.fitContainer,width:e.width??700,height:e.height??420,plugins:["zoom","navigator"]})},t={args:{...i,dataset:"numeric-large",inverted:!0},render:e=>d("bar",h(m,e.dataset),{...l(e),zoom:{enabled:!0},navigator:{enabled:!0},tooltip:{show:!0,shared:!0}},{fitContainer:e.fitContainer,width:e.width??700,height:e.height??420,plugins:["zoom","navigator"]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([{
    type: 'line',
    data: largeData(),
    options: {
      frameTheme: args.frameTheme,
      zoom: {
        enabled: true,
        wheelMode: 'zoom'
      },
      tooltip: {
        show: true,
        shared: true
      }
    },
    label: 'Drag-brush + Wheel zoom',
    description: '드래그 범위 선택으로 zoom in, 휠로 줌 인/아웃',
    plugins: ['zoom']
  }, {
    type: 'line',
    data: largeData(),
    options: {
      frameTheme: args.frameTheme,
      zoom: {
        enabled: true,
        wheelMode: 'pan'
      },
      tooltip: {
        show: true,
        shared: true
      }
    },
    label: 'Wheel pan',
    description: '휠 동작이 X축 좌우 이동',
    plugins: ['zoom']
  }, {
    type: 'line',
    data: largeData(),
    options: {
      frameTheme: args.frameTheme,
      zoom: {
        enabled: true,
        minZoom: 0.5
      },
      tooltip: {
        show: true,
        shared: true
      }
    },
    label: 'Min zoom = 0.5',
    description: '최대 50%까지만 축소',
    plugins: ['zoom']
  }, {
    type: 'line',
    data: largeData(),
    options: {
      frameTheme: args.frameTheme,
      zoom: {
        enabled: false
      },
      tooltip: {
        show: true,
        shared: true
      }
    },
    label: 'Zoom disabled',
    description: '비교용 baseline'
  }], {
    columns: 2,
    cardHeight: 280,
    hideDataSummary: true
  })
}`,...o.parameters?.docs?.source},description:{story:`Zoom 동작 모드 비교 -- drag-brush / wheel zoom / wheel pan / 비활성 4 cards.
각 카드에서 마우스 휠 / 드래그로 동작 차이 체험.`,...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'numeric-large',
    minZoom: 0.2,
    wheelMode: 'zoom'
  },
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    zoom: {
      enabled: true,
      wheelMode: args.wheelMode,
      minZoom: args.minZoom
    },
    tooltip: {
      show: true,
      shared: true
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width ?? 700,
    height: args.height ?? 400,
    plugins: ['zoom']
  })
}`,...r.parameters?.docs?.source},description:{story:"Basic zoom 동작 with controls — wheel mode / minZoom 조절.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'numeric-large'
  },
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    zoom: {
      enabled: true
    },
    navigator: {
      enabled: true
    },
    tooltip: {
      show: true,
      shared: true
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width ?? 700,
    height: args.height ?? 420,
    plugins: ['zoom', 'navigator']
  })
}`,...a.parameters?.docs?.source},description:{story:"Navigator + Zoom 연동 -- navigator 슬라이더로 범위 지정.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'numeric-large',
    inverted: true
  },
  render: args => renderChartSingle('bar', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    zoom: {
      enabled: true
    },
    navigator: {
      enabled: true
    },
    tooltip: {
      show: true,
      shared: true
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width ?? 700,
    height: args.height ?? 420,
    plugins: ['zoom', 'navigator']
  })
}`,...t.parameters?.docs?.source},description:{story:"Navigator inverted -- 수평 bar 차트에서 navigator 동작.",...t.parameters?.docs?.description}}};const w=["ZoomModes","BasicZoom","NavigatorWithZoom","NavigatorInverted"];export{r as BasicZoom,t as NavigatorInverted,a as NavigatorWithZoom,o as ZoomModes,w as __namedExportsOrder,f as default};
