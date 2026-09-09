import{c as a}from"./chart-showcase-D6LVIqI-.js";import{c as i}from"./chart-story-content-DqL3FnFI.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const c={title:"Features/Axes and Grid",parameters:{controls:{disable:!0}}},t=[{team:"Research",actual:64,target:80,low:52,high:76},{team:"Design",actual:82,target:75,low:70,high:94},{team:"Engineering",actual:91,target:90,low:79,high:98},{team:"Operations",actual:73,target:85,low:65,high:86}],e={parameters:{storyHeader:{eyebrow:"Coordinate orientation",title:"논리 X/Y축을 유지하는 가로 차트",description:"inverted는 X축을 위에서 아래로, Y축을 왼쪽에서 오른쪽으로 배치합니다. reversed는 각 축의 진행 방향만 바꿉니다. 오른쪽 Navigator는 이 차트의 논리 X 범위를 선택합니다."}},render:()=>a([{title:"Actual and target",description:"Bar와 Line은 같은 좌표 변환을 사용합니다.",height:390,initialization:{data:t,view:{paradigm:"cartesian",options:{inverted:!0,navigator:{position:"right",size:64},legend:{visible:!0},tooltip:{enabled:!0,shared:!0},crosshair:{enabled:!0,direction:"x"},xAxis:{scale:"category",title:"Team"},yAxis:{scale:"linear",min:0,max:100,title:"Delivery (%)"}},series:[{id:"actual",type:"bar",name:"Actual",encoding:{x:"team",y:"actual"}},{id:"target",type:"line",name:"Target",color:"#f28e2b",encoding:{x:"team",y:"target"},line:{dash:[6,4],dots:!0}}]}}},{title:"Range and estimate",description:"범위·중앙값의 의미도 축 방향과 독립적입니다.",height:390,initialization:{data:t,view:{paradigm:"cartesian",options:{inverted:!0,legend:{visible:!0},tooltip:{enabled:!0},xAxis:{scale:"category",reversed:!0,title:"Team (reversed)"},yAxis:{scale:"linear",min:0,max:100,title:"Confidence interval"}},series:{id:"range",type:"errorBar",name:"Estimate",encoding:{x:"team",y:"actual",yLow:"low",yHigh:"high"}}}}}])},n={parameters:{storyHeader:{eyebrow:"Panel coordinates",title:"패널별 가로 좌표와 공통 범위 제어",description:"각 패널은 자기 화면 영역에 좌표를 매핑합니다. 범례·Tooltip·crosshair는 같은 계열과 데이터를 가리키며, 아래 Navigator는 논리 Y축의 범위를 함께 조절합니다."}},render:()=>i({height:580,width:860,summary:"Inverted Cartesian panels · shared Y Navigator",initialization:{data:t,view:{paradigm:"cartesian",options:{inverted:!0,navigator:{position:"bottom"},legend:{visible:!0},tooltip:{enabled:!0,shared:!0,synchronizePanels:!0},crosshair:{enabled:!0,synchronizePanels:!0},xAxis:{scale:"category",title:"Team"},yAxis:{scale:"linear",min:0,max:100,title:"Delivery (%)"}},series:[{id:"actual",type:"bar",name:"Actual",encoding:{x:"team",y:"actual"}},{id:"target",type:"lollipop",name:"Target",encoding:{x:"team",y:"target"}}],panels:{columns:2,items:[{id:"actual",title:"Actual",seriesIds:["actual"]},{id:"target",title:"Target",seriesIds:["target"]}]}}}})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Coordinate orientation',
      title: '논리 X/Y축을 유지하는 가로 차트',
      description: 'inverted는 X축을 위에서 아래로, Y축을 왼쪽에서 오른쪽으로 배치합니다. reversed는 각 축의 진행 방향만 바꿉니다. 오른쪽 Navigator는 이 차트의 논리 X 범위를 선택합니다.'
    }
  },
  render: () => createChartShowcase([{
    title: 'Actual and target',
    description: 'Bar와 Line은 같은 좌표 변환을 사용합니다.',
    height: 390,
    initialization: {
      data,
      view: {
        paradigm: 'cartesian',
        options: {
          inverted: true,
          navigator: {
            position: 'right',
            size: 64
          },
          legend: {
            visible: true
          },
          tooltip: {
            enabled: true,
            shared: true
          },
          crosshair: {
            enabled: true,
            direction: 'x'
          },
          xAxis: {
            scale: 'category',
            title: 'Team'
          },
          yAxis: {
            scale: 'linear',
            min: 0,
            max: 100,
            title: 'Delivery (%)'
          }
        },
        series: [{
          id: 'actual',
          type: 'bar',
          name: 'Actual',
          encoding: {
            x: 'team',
            y: 'actual'
          }
        }, {
          id: 'target',
          type: 'line',
          name: 'Target',
          color: '#f28e2b',
          encoding: {
            x: 'team',
            y: 'target'
          },
          line: {
            dash: [6, 4],
            dots: true
          }
        }]
      }
    }
  }, {
    title: 'Range and estimate',
    description: '범위·중앙값의 의미도 축 방향과 독립적입니다.',
    height: 390,
    initialization: {
      data,
      view: {
        paradigm: 'cartesian',
        options: {
          inverted: true,
          legend: {
            visible: true
          },
          tooltip: {
            enabled: true
          },
          xAxis: {
            scale: 'category',
            reversed: true,
            title: 'Team (reversed)'
          },
          yAxis: {
            scale: 'linear',
            min: 0,
            max: 100,
            title: 'Confidence interval'
          }
        },
        series: {
          id: 'range',
          type: 'errorBar',
          name: 'Estimate',
          encoding: {
            x: 'team',
            y: 'actual',
            yLow: 'low',
            yHigh: 'high'
          }
        }
      }
    }
  }])
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Panel coordinates',
      title: '패널별 가로 좌표와 공통 범위 제어',
      description: '각 패널은 자기 화면 영역에 좌표를 매핑합니다. 범례·Tooltip·crosshair는 같은 계열과 데이터를 가리키며, 아래 Navigator는 논리 Y축의 범위를 함께 조절합니다.'
    }
  },
  render: () => createChartStoryContent({
    height: 580,
    width: 860,
    summary: 'Inverted Cartesian panels · shared Y Navigator',
    initialization: {
      data,
      view: {
        paradigm: 'cartesian',
        options: {
          inverted: true,
          navigator: {
            position: 'bottom'
          },
          legend: {
            visible: true
          },
          tooltip: {
            enabled: true,
            shared: true,
            synchronizePanels: true
          },
          crosshair: {
            enabled: true,
            synchronizePanels: true
          },
          xAxis: {
            scale: 'category',
            title: 'Team'
          },
          yAxis: {
            scale: 'linear',
            min: 0,
            max: 100,
            title: 'Delivery (%)'
          }
        },
        series: [{
          id: 'actual',
          type: 'bar',
          name: 'Actual',
          encoding: {
            x: 'team',
            y: 'actual'
          }
        }, {
          id: 'target',
          type: 'lollipop',
          name: 'Target',
          encoding: {
            x: 'team',
            y: 'target'
          }
        }],
        panels: {
          columns: 2,
          items: [{
            id: 'actual',
            title: 'Actual',
            seriesIds: ['actual']
          }, {
            id: 'target',
            title: 'Target',
            seriesIds: ['target']
          }]
        }
      }
    }
  })
}`,...n.parameters?.docs?.source}}};const g=["InvertedAxes","InvertedPanels"];export{e as InvertedAxes,n as InvertedPanels,g as __namedExportsOrder,c as default};
