import{c as a}from"./chart-showcase-D6LVIqI-.js";import{c as o}from"./chart-story-content-DqL3FnFI.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const h={title:"Charts/Radar",parameters:{controls:{disable:!0},storyHeader:{eyebrow:"Charts · Radar",title:"여러 계열의 Radar 비교",description:"공통 범위에서 계열별 다각형을 비교합니다. 누락된 축 값은 연결하거나 채우지 않습니다."}}},s=["Speed","Quality","Safety","Reach","Cost"].flatMap((n,r)=>[{axis:n,group:"Current",value:45+r*9},{axis:n,group:"Target",value:90-r*6}]),e={data:s,view:{paradigm:"polar",type:"radar",series:{id:"performance",encoding:{axis:"axis",series:"group",value:"value"}},options:{legend:{visible:!0},tooltip:{enabled:!0},radialAxis:{min:0,max:100}}}},i={render:()=>a([{title:"Filled",description:"반투명 채움과 점",height:340,initialization:e},{title:"Outline",description:"점 없는 점선 외곽선",height:340,initialization:{...e,view:{...e.view,options:{...e.view.options,fillOpacity:0,dashed:!0,dots:!1}}}}])},t={parameters:{storyHeader:{eyebrow:"Charts · Radar",title:"현재 상태와 목표를 구분하는 Radar 표현",description:"Current는 면과 점으로, Target은 채움 없는 점선으로 표현합니다. series.styles는 데이터의 group 값과 연결되며 범례 토글 이후에도 색상과 선 표현을 유지합니다. 숫자 눈금 배경은 투명합니다."}},render:()=>o({height:480,width:760,summary:"Current · solid filled polygon / Target · dashed outline",initialization:{...e,view:{...e.view,series:{...e.view.series,styles:{Current:{color:"#2563eb",fillOpacity:.18,pointRadius:4,lineWidth:3},Target:{color:"#be123c",fillOpacity:0,dash:[8,4],dots:!1}}},options:{...e.view.options,tooltip:{enabled:!0,shared:!0},radialAxis:{min:0,max:100,tickCount:6},grid:{visible:!0}}}}})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => createChartShowcase([{
    title: 'Filled',
    description: '반투명 채움과 점',
    height: 340,
    initialization
  }, {
    title: 'Outline',
    description: '점 없는 점선 외곽선',
    height: 340,
    initialization: {
      ...initialization,
      view: {
        ...initialization.view,
        options: {
          ...initialization.view.options,
          fillOpacity: 0,
          dashed: true,
          dots: false
        }
      }
    }
  }])
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Charts · Radar',
      title: '현재 상태와 목표를 구분하는 Radar 표현',
      description: 'Current는 면과 점으로, Target은 채움 없는 점선으로 표현합니다. series.styles는 데이터의 group 값과 연결되며 범례 토글 이후에도 색상과 선 표현을 유지합니다. 숫자 눈금 배경은 투명합니다.'
    }
  },
  render: () => createChartStoryContent({
    height: 480,
    width: 760,
    summary: 'Current · solid filled polygon / Target · dashed outline',
    initialization: {
      ...initialization,
      view: {
        ...initialization.view,
        series: {
          ...initialization.view.series,
          styles: {
            Current: {
              color: '#2563eb',
              fillOpacity: 0.18,
              pointRadius: 4,
              lineWidth: 3
            },
            Target: {
              color: '#be123c',
              fillOpacity: 0,
              dash: [8, 4],
              dots: false
            }
          }
        },
        options: {
          ...initialization.view.options,
          tooltip: {
            enabled: true,
            shared: true
          },
          radialAxis: {
            min: 0,
            max: 100,
            tickCount: 6
          },
          grid: {
            visible: true
          }
        }
      }
    }
  })
}`,...t.parameters?.docs?.source}}};const m=["MultipleSeries","GroupStyles"];export{t as GroupStyles,i as MultipleSeries,m as __namedExportsOrder,h as default};
