import{c as r}from"./chart-showcase-D6LVIqI-.js";import{c as s}from"./chart-story-content-DqL3FnFI.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const m={title:"Features/Series style",parameters:{controls:{disable:!0}}},i=Array.from({length:8},(n,e)=>({week:`W${e+1}`,actual:34+e*4+Math.sin(e)*7,forecast:36+e*4,lower:29+e*4,upper:43+e*4})),d={data:i,view:{paradigm:"cartesian",options:{legend:{visible:!0},tooltip:{enabled:!0,shared:!0},line:{dash:[8,4],lineWidth:2},xAxis:{scale:"category",title:"Week"},yAxis:{scale:"linear",title:"Demand"}},series:[{id:"interval",name:"Expected range",type:"rangeArea",color:"#0f766e",encoding:{x:"week",yLow:"lower",yHigh:"upper"},rangeArea:{dash:[2,4],lineWidth:1,fillOpacity:.12}},{id:"actual",name:"Measured",color:"#334155",encoding:{x:"week",y:"actual"},line:{dash:[],dots:!0,lineWidth:3}},{id:"forecast",name:"Forecast",color:"#0f766e",encoding:{x:"week",y:"forecast"}}]}},a={parameters:{storyHeader:{eyebrow:"Series presentation",title:"계열별 실선·점선과 예측 구간",description:"실측은 실선, 예측은 점선, 예측 범위는 반투명 면으로 표현합니다. series.line과 series.rangeArea가 지정한 속성만 공통 설정을 덮어쓰며, 범례도 같은 스타일을 사용합니다."}},render:()=>s({height:420,width:860,initialization:d,summary:"Measured · forecast · expected interval"})},t={parameters:{storyHeader:{eyebrow:"Series presentation",title:"숫자 배열로 표현하는 선 패턴",description:"dash는 CSS px 단위의 선과 공백 길이를 번갈아 지정합니다. 빈 배열은 실선이며, Area에도 같은 방식으로 외곽선과 채움 불투명도를 지정할 수 있습니다."}},render:()=>r([{title:"Line patterns",description:"실선 / 짧은 점선 / 긴 점선 / dash-dot",height:340,initialization:{data:i.map(n=>({...n,dotted:n.actual+12,dashed:n.actual+24,dashDot:n.actual+36})),view:{paradigm:"cartesian",options:{legend:{visible:!0,overflow:"wrap",size:58},xAxis:{scale:"category"},yAxis:{scale:"linear"}},series:[{id:"actual",name:"Solid",encoding:{x:"week",y:"actual"},line:{dash:[]}},{id:"dotted",name:"Dotted",encoding:{x:"week",y:"dotted"},line:{dash:[1,5]}},{id:"dashed",name:"Dashed",encoding:{x:"week",y:"dashed"},line:{dash:[10,5]}},{id:"dashDot",name:"Dash-dot",encoding:{x:"week",y:"dashDot"},line:{dash:[10,4,1,4]}}]}}},{title:"Area outline and fill",description:"전역 Area 설정에서 계열마다 필요한 속성만 변경",height:340,initialization:{data:i,view:{paradigm:"cartesian",options:{legend:{visible:!0},area:{fillOpacity:.08,lineWidth:2},xAxis:{scale:"category"},yAxis:{scale:"linear"}},series:[{id:"actual",type:"area",name:"Measured",encoding:{x:"week",y:"actual"},area:{fillOpacity:.22}},{id:"forecast",type:"area",name:"Forecast",encoding:{x:"week",y:"forecast"},area:{dash:[8,4],fillOpacity:0}}]}}}])};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Series presentation',
      title: '계열별 실선·점선과 예측 구간',
      description: '실측은 실선, 예측은 점선, 예측 범위는 반투명 면으로 표현합니다. series.line과 series.rangeArea가 지정한 속성만 공통 설정을 덮어쓰며, 범례도 같은 스타일을 사용합니다.'
    }
  },
  render: () => createChartStoryContent({
    height: 420,
    width: 860,
    initialization: MIXED,
    summary: 'Measured · forecast · expected interval'
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Series presentation',
      title: '숫자 배열로 표현하는 선 패턴',
      description: 'dash는 CSS px 단위의 선과 공백 길이를 번갈아 지정합니다. 빈 배열은 실선이며, Area에도 같은 방식으로 외곽선과 채움 불투명도를 지정할 수 있습니다.'
    }
  },
  render: () => createChartShowcase([{
    title: 'Line patterns',
    description: '실선 / 짧은 점선 / 긴 점선 / dash-dot',
    height: 340,
    initialization: {
      data: DATA.map(datum => ({
        ...datum,
        dotted: datum.actual + 12,
        dashed: datum.actual + 24,
        dashDot: datum.actual + 36
      })),
      view: {
        paradigm: 'cartesian',
        options: {
          legend: {
            visible: true,
            overflow: 'wrap',
            size: 58
          },
          xAxis: {
            scale: 'category'
          },
          yAxis: {
            scale: 'linear'
          }
        },
        series: [{
          id: 'actual',
          name: 'Solid',
          encoding: {
            x: 'week',
            y: 'actual'
          },
          line: {
            dash: []
          }
        }, {
          id: 'dotted',
          name: 'Dotted',
          encoding: {
            x: 'week',
            y: 'dotted'
          },
          line: {
            dash: [1, 5]
          }
        }, {
          id: 'dashed',
          name: 'Dashed',
          encoding: {
            x: 'week',
            y: 'dashed'
          },
          line: {
            dash: [10, 5]
          }
        }, {
          id: 'dashDot',
          name: 'Dash-dot',
          encoding: {
            x: 'week',
            y: 'dashDot'
          },
          line: {
            dash: [10, 4, 1, 4]
          }
        }]
      }
    }
  }, {
    title: 'Area outline and fill',
    description: '전역 Area 설정에서 계열마다 필요한 속성만 변경',
    height: 340,
    initialization: {
      data: DATA,
      view: {
        paradigm: 'cartesian',
        options: {
          legend: {
            visible: true
          },
          area: {
            fillOpacity: 0.08,
            lineWidth: 2
          },
          xAxis: {
            scale: 'category'
          },
          yAxis: {
            scale: 'linear'
          }
        },
        series: [{
          id: 'actual',
          type: 'area',
          name: 'Measured',
          encoding: {
            x: 'week',
            y: 'actual'
          },
          area: {
            fillOpacity: 0.22
          }
        }, {
          id: 'forecast',
          type: 'area',
          name: 'Forecast',
          encoding: {
            x: 'week',
            y: 'forecast'
          },
          area: {
            dash: [8, 4],
            fillOpacity: 0
          }
        }]
      }
    }
  }])
}`,...t.parameters?.docs?.source}}};const y=["MeasuredAndForecast","DashPatterns"];export{t as DashPatterns,a as MeasuredAndForecast,y as __namedExportsOrder,m as default};
