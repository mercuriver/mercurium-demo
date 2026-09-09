import{c as r}from"./chart-story-content-DqL3FnFI.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const d={title:"Examples/Panels",parameters:{controls:{disable:!0}}},n={parameters:{storyHeader:{eyebrow:"Shared panel navigation",title:"한 패널에서 선택한 기간을 모든 패널에 반영",description:"매출 또는 요청 수 패널에서 기간을 확대하고 Shift+drag로 이동합니다. 각 패널의 Y축 단위를 유지하며 공통 X 범위와 Navigator를 동기화합니다. 더블클릭으로 전체 기간을 복원합니다."}},render:()=>r({width:860,height:640,summary:"Revenue and requests · shared time window",initialization:{data:Array.from({length:60},(a,e)=>({day:new Date(Date.UTC(2026,0,e+1)),revenue:4e3+Math.sin(e/4)*1600+e*30,requests:Math.round(80+Math.cos(e/5)*35+e)})),view:{paradigm:"cartesian",series:[{id:"revenue",type:"line",name:"Revenue",encoding:{x:"day",y:"revenue"},yAxisId:"revenue"},{id:"requests",type:"bar",name:"Requests",color:"#f59e0b",encoding:{x:"day",y:"requests"},yAxisId:"requests"}],panels:{items:[{id:"revenue",title:"Daily revenue",seriesIds:["revenue"]},{id:"requests",title:"Completed requests",seriesIds:["requests"]}]},options:{zoom:{axis:"x"},navigator:{enabled:!0},legend:{visible:!0},tooltip:{enabled:!0,shared:!0,synchronizePanels:!0},crosshair:{enabled:!0,direction:"x",synchronizePanels:!0},xAxis:{scale:"time",title:"Day"},yAxis:[{id:"revenue",scale:"linear",valueFormat:{valuePrefix:"$",valueDecimals:0}},{id:"requests",scale:"linear",valueFormat:{valueSuffix:" requests",valueDecimals:0}}]}}}})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Shared panel navigation',
      title: '한 패널에서 선택한 기간을 모든 패널에 반영',
      description: '매출 또는 요청 수 패널에서 기간을 확대하고 Shift+drag로 이동합니다. 각 패널의 Y축 단위를 유지하며 공통 X 범위와 Navigator를 동기화합니다. 더블클릭으로 전체 기간을 복원합니다.'
    }
  },
  render: () => createChartStoryContent({
    width: 860,
    height: 640,
    summary: 'Revenue and requests · shared time window',
    initialization: {
      data: Array.from({
        length: 60
      }, (_, index) => ({
        day: new Date(Date.UTC(2026, 0, index + 1)),
        revenue: 4000 + Math.sin(index / 4) * 1600 + index * 30,
        requests: Math.round(80 + Math.cos(index / 5) * 35 + index)
      })),
      view: {
        paradigm: 'cartesian',
        series: [{
          id: 'revenue',
          type: 'line',
          name: 'Revenue',
          encoding: {
            x: 'day',
            y: 'revenue'
          },
          yAxisId: 'revenue'
        }, {
          id: 'requests',
          type: 'bar',
          name: 'Requests',
          color: '#f59e0b',
          encoding: {
            x: 'day',
            y: 'requests'
          },
          yAxisId: 'requests'
        }],
        panels: {
          items: [{
            id: 'revenue',
            title: 'Daily revenue',
            seriesIds: ['revenue']
          }, {
            id: 'requests',
            title: 'Completed requests',
            seriesIds: ['requests']
          }]
        },
        options: {
          zoom: {
            axis: 'x'
          },
          navigator: {
            enabled: true
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
            direction: 'x',
            synchronizePanels: true
          },
          xAxis: {
            scale: 'time',
            title: 'Day'
          },
          yAxis: [{
            id: 'revenue',
            scale: 'linear',
            valueFormat: {
              valuePrefix: '$',
              valueDecimals: 0
            }
          }, {
            id: 'requests',
            scale: 'linear',
            valueFormat: {
              valueSuffix: ' requests',
              valueDecimals: 0
            }
          }]
        }
      }
    }
  })
}`,...n.parameters?.docs?.source}}};const u=["ZoomSynchronizedPanels"];export{n as ZoomSynchronizedPanels,u as __namedExportsOrder,d as default};
