import{c as l}from"./chart-showcase-D6LVIqI-.js";import{c as i}from"./chart-story-content-DqL3FnFI.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const u={title:"Features/Interactions/Navigation",parameters:{controls:{disable:!0}}},o=Array.from({length:90},(r,e)=>({date:new Date(Date.UTC(2026,0,1+e)),actual:55+Math.sin(e/5)*18+Math.cos(e/13)*9,low:38+Math.sin(e/5)*14,high:75+Math.sin(e/5)*14})),n={parameters:{storyHeader:{eyebrow:"Direct graph navigation",title:"Wheel·영역 선택·pan을 하나의 범위로 제어",description:"마우스 휠로 포인터 중심 확대, drag로 구간 선택, Shift+drag로 이동합니다. Escape는 진행 중인 drag를 취소하고 더블클릭은 전체 범위를 복원합니다. Navigator와 그래프는 동일한 X 범위를 사용합니다."}},render:()=>i({height:450,width:860,summary:"90 days · expected range and measured demand",initialization:{data:o,view:{paradigm:"cartesian",options:{zoom:{axis:"x",drag:"zoom",minSpan:.05},navigator:{enabled:!0},legend:{visible:!0},tooltip:{enabled:!0,shared:!0},xAxis:{scale:"time",title:"Date"},yAxis:{scale:"linear",title:"Daily demand"}},series:[{id:"interval",type:"rangeArea",name:"Expected range",color:"#94a3b8",encoding:{x:"date",yLow:"low",yHigh:"high"},rangeArea:{fillOpacity:.2}},{id:"actual",type:"line",name:"Actual demand",color:"#2563eb",encoding:{x:"date",y:"actual"}}]}}})},a={parameters:{storyHeader:{eyebrow:"Independent logical windows",title:"두 축을 함께 확대하는 Scatter",description:"사각 영역을 선택하면 X/Y 범위가 함께 확대됩니다. 휠 확대와 Shift+drag 이동도 두 축에 적용되며, 오른쪽 Navigator는 Y 범위를 독립적으로 조절합니다."}},render:()=>i({height:480,width:860,summary:"Latency and throughput · wheel / rectangle / Shift pan",initialization:{data:Array.from({length:180},(r,e)=>({throughput:20+e*2.3,latency:70+Math.sin(e*1.7)*35+e*.8})),view:{paradigm:"cartesian",type:"scatter",series:{id:"requests",name:"Requests",encoding:{x:"throughput",y:"latency"}},options:{zoom:{axis:"both",minSpan:.04},navigator:{position:"right",size:68},tooltip:{enabled:!0},xAxis:{scale:"linear",title:"Throughput",valueFormat:{valueSuffix:" req/s"}},yAxis:{scale:"linear",title:"Latency",valueFormat:{valueSuffix:" ms"}}}}}})},t={parameters:{storyHeader:{eyebrow:"Navigation gesture policies",title:"이동 중심·영역 선택 중심·휠 전용 탐색",description:"그래프의 drag와 wheel 동작을 각각 선택합니다. 이동은 휠이나 Navigator로 범위를 좁힌 뒤 확인할 수 있습니다. 세 예제 모두 Navigator는 독립적으로 조작할 수 있고, 그래프 더블클릭으로 전체 범위를 복원합니다. Escape는 진행 중인 drag만 취소합니다."}},render:()=>l([{title:"Pan-first · drag to move",description:"휠로 확대하거나 Navigator 범위를 좁힌 뒤 drag로 이동합니다. Shift 없이도 이동하며 영역 선택은 하지 않습니다.",drag:"pan",wheel:!0},{title:"Brush-only · wheel passes through",description:"Drag로 구간을 선택하고 Shift+drag로 이동합니다. 휠은 차트 범위를 바꾸지 않아 문서 스크롤에 사용할 수 있습니다.",drag:"zoom",wheel:!1},{title:"Wheel-only · no graph drag",description:"휠 확대만 사용합니다. 그래프의 drag와 Shift+drag는 범위를 바꾸지 않으며, 이동이 필요하면 Navigator의 선택 구간을 끕니다.",drag:!1,wheel:!0}].map(({title:r,description:e,drag:s,wheel:d})=>({title:r,description:e,height:340,initialization:{data:o,view:{paradigm:"cartesian",type:"line",series:{id:"demand",name:"Daily demand",encoding:{x:"date",y:"actual"}},options:{animation:{enabled:!1},zoom:{axis:"x",drag:s,wheel:d,minSpan:.05},navigator:{enabled:!0},tooltip:{enabled:!0},xAxis:{scale:"time"},yAxis:{scale:"linear",valueFormat:{valueSuffix:" units"}}}}}})))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Direct graph navigation',
      title: 'Wheel·영역 선택·pan을 하나의 범위로 제어',
      description: '마우스 휠로 포인터 중심 확대, drag로 구간 선택, Shift+drag로 이동합니다. Escape는 진행 중인 drag를 취소하고 더블클릭은 전체 범위를 복원합니다. Navigator와 그래프는 동일한 X 범위를 사용합니다.'
    }
  },
  render: () => createChartStoryContent({
    height: 450,
    width: 860,
    summary: '90 days · expected range and measured demand',
    initialization: {
      data: measurements,
      view: {
        paradigm: 'cartesian',
        options: {
          zoom: {
            axis: 'x',
            drag: 'zoom',
            minSpan: 0.05
          },
          navigator: {
            enabled: true
          },
          legend: {
            visible: true
          },
          tooltip: {
            enabled: true,
            shared: true
          },
          xAxis: {
            scale: 'time',
            title: 'Date'
          },
          yAxis: {
            scale: 'linear',
            title: 'Daily demand'
          }
        },
        series: [{
          id: 'interval',
          type: 'rangeArea',
          name: 'Expected range',
          color: '#94a3b8',
          encoding: {
            x: 'date',
            yLow: 'low',
            yHigh: 'high'
          },
          rangeArea: {
            fillOpacity: 0.2
          }
        }, {
          id: 'actual',
          type: 'line',
          name: 'Actual demand',
          color: '#2563eb',
          encoding: {
            x: 'date',
            y: 'actual'
          }
        }]
      }
    }
  })
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Independent logical windows',
      title: '두 축을 함께 확대하는 Scatter',
      description: '사각 영역을 선택하면 X/Y 범위가 함께 확대됩니다. 휠 확대와 Shift+drag 이동도 두 축에 적용되며, 오른쪽 Navigator는 Y 범위를 독립적으로 조절합니다.'
    }
  },
  render: () => createChartStoryContent({
    height: 480,
    width: 860,
    summary: 'Latency and throughput · wheel / rectangle / Shift pan',
    initialization: {
      data: Array.from({
        length: 180
      }, (_, index) => ({
        throughput: 20 + index * 2.3,
        latency: 70 + Math.sin(index * 1.7) * 35 + index * 0.8
      })),
      view: {
        paradigm: 'cartesian',
        type: 'scatter',
        series: {
          id: 'requests',
          name: 'Requests',
          encoding: {
            x: 'throughput',
            y: 'latency'
          }
        },
        options: {
          zoom: {
            axis: 'both',
            minSpan: 0.04
          },
          navigator: {
            position: 'right',
            size: 68
          },
          tooltip: {
            enabled: true
          },
          xAxis: {
            scale: 'linear',
            title: 'Throughput',
            valueFormat: {
              valueSuffix: ' req/s'
            }
          },
          yAxis: {
            scale: 'linear',
            title: 'Latency',
            valueFormat: {
              valueSuffix: ' ms'
            }
          }
        }
      }
    }
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Navigation gesture policies',
      title: '이동 중심·영역 선택 중심·휠 전용 탐색',
      description: '그래프의 drag와 wheel 동작을 각각 선택합니다. 이동은 휠이나 Navigator로 범위를 좁힌 뒤 확인할 수 있습니다. 세 예제 모두 Navigator는 독립적으로 조작할 수 있고, 그래프 더블클릭으로 전체 범위를 복원합니다. Escape는 진행 중인 drag만 취소합니다.'
    }
  },
  render: () => createChartShowcase(([{
    title: 'Pan-first · drag to move',
    description: '휠로 확대하거나 Navigator 범위를 좁힌 뒤 drag로 이동합니다. Shift 없이도 이동하며 영역 선택은 하지 않습니다.',
    drag: 'pan',
    wheel: true
  }, {
    title: 'Brush-only · wheel passes through',
    description: 'Drag로 구간을 선택하고 Shift+drag로 이동합니다. 휠은 차트 범위를 바꾸지 않아 문서 스크롤에 사용할 수 있습니다.',
    drag: 'zoom',
    wheel: false
  }, {
    title: 'Wheel-only · no graph drag',
    description: '휠 확대만 사용합니다. 그래프의 drag와 Shift+drag는 범위를 바꾸지 않으며, 이동이 필요하면 Navigator의 선택 구간을 끕니다.',
    drag: false,
    wheel: true
  }] as const).map(({
    title,
    description,
    drag,
    wheel
  }) => ({
    title,
    description,
    height: 340,
    initialization: {
      data: measurements,
      view: {
        paradigm: 'cartesian',
        type: 'line',
        series: {
          id: 'demand',
          name: 'Daily demand',
          encoding: {
            x: 'date',
            y: 'actual'
          }
        },
        options: {
          animation: {
            enabled: false
          },
          zoom: {
            axis: 'x',
            drag,
            wheel,
            minSpan: 0.05
          },
          navigator: {
            enabled: true
          },
          tooltip: {
            enabled: true
          },
          xAxis: {
            scale: 'time'
          },
          yAxis: {
            scale: 'linear',
            valueFormat: {
              valueSuffix: ' units'
            }
          }
        }
      }
    }
  })))
}`,...t.parameters?.docs?.source}}};const y=["DirectZoom","TwoAxisZoom","NavigationGestureModes"];export{n as DirectZoom,t as NavigationGestureModes,a as TwoAxisZoom,y as __namedExportsOrder,u as default};
