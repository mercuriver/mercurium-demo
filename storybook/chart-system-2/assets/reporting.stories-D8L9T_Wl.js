import{c as l}from"./chart-showcase-D6LVIqI-.js";import{c as d}from"./chart-story-content-DqL3FnFI.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const x={title:"Features/Reporting",parameters:{controls:{disable:!0}}},i={name:"Targets and campaign period",parameters:{storyHeader:{eyebrow:"Data labels & annotations",title:"매출 수치·목표선·캠페인 구간을 한 화면에",description:"기준선·기간 강조·좌표 주석은 데이터 좌표를 따릅니다. 범례로 매출을 숨겨도 기준 주석은 남습니다. 라벨과 주석은 Canvas 이미지에도 포함됩니다."}},render:()=>d({width:800,height:420,summary:"Monthly revenue · KRW million · target 70 · campaign Apr–Jun",initialization:{data:[42,48,46,63,79,84].map((e,n)=>({month:["Jan","Feb","Mar","Apr","May","Jun"][n],revenue:e})),view:{paradigm:"cartesian",series:{id:"revenue",name:"Revenue",type:"bar",encoding:{x:"month",y:"revenue"}},options:{xAxis:{scale:"category"},yAxis:{scale:"linear",min:0,max:110},legend:{visible:!0,toggle:!0},animation:{duration:0,updateDuration:300},dataLabels:{visible:!0,formatter:({value:e})=>`₩${e}M`},annotations:[{id:"campaign",type:"range",axis:"x",from:"Apr",to:"Jun",text:"Campaign",opacity:.06},{id:"target",type:"line",axis:"y",value:70,text:"Target ₩70M"},{id:"milestone",type:"label",x:"May",y:100,text:"First month above target"}]}}}})},r={name:"Radar score labels",parameters:{storyHeader:{eyebrow:"Report values",title:"툴팁 없이 읽는 평가 점수",description:"Radar의 평가 값에 단위를 붙입니다. 데이터 라벨은 배경과 테두리를 사용하고, 숫자 눈금의 배경은 투명합니다. 겹치는 데이터 라벨은 생략합니다."}},render:()=>d({width:800,height:420,summary:"Release readiness · score out of 100",initialization:{data:[{axis:"Reliability",score:85},{axis:"Performance",score:72},{axis:"Usability",score:90},{axis:"Coverage",score:64},{axis:"Efficiency",score:78}],view:{paradigm:"polar",type:"radar",series:{id:"readiness",name:"Release candidate",encoding:{axis:"axis",value:"score"}},options:{animation:{enabled:!1},radialAxis:{min:0,max:100},tooltip:{enabled:!1},dataLabels:{visible:!0,formatter:({value:e})=>`${e} pt`}}}}})},o={name:"Label position and rotation",parameters:{storyHeader:{eyebrow:"Report placement",title:"데이터 라벨의 위치·회전·오프셋",description:"배경·테두리·글자가 함께 회전하고 박스 전체로 충돌·경계를 검사합니다. Auto는 양수·음수의 값 끝을 따르며, Top·Bottom은 화면 기준입니다. 회전 예제에는 위쪽 offset도 적용합니다."}},render:()=>l([{title:"Top · rotation 0",position:"top",rotation:0,inverted:!1},{title:"Top · rotation -45",position:"top",rotation:-45,inverted:!1},{title:"Inside · rotation 0",position:"inside",rotation:0,inverted:!1},{title:"Bottom · rotation 0",position:"bottom",rotation:0,inverted:!1},{title:"Automatic value end",position:"auto",rotation:0,inverted:!1},{title:"Inverted value end",position:"auto",rotation:0,inverted:!0}].map(({title:e,position:n,rotation:a,inverted:t})=>({title:e,description:`${n} · rotation ${a}° · inverted ${t}`,height:320,initialization:{data:[{x:"North",y:35},{x:"South",y:-20},{x:"West",y:55}],view:{paradigm:"cartesian",type:"bar",series:{id:"sales",encoding:{x:"x",y:"y"}},options:{inverted:t,animation:{enabled:!1},xAxis:{scale:"category"},yAxis:{scale:"linear",min:-50,max:90,valueFormat:{valueSuffix:"M"}},dataLabels:{visible:!0,position:n,rotation:a,offset:{y:a===-45?-8:0}},annotations:[{id:"zero",type:"line",axis:"y",value:0}]}}}})))},p=[{title:"Default · light",description:"기본 밝은 배경과 데이터 색상의 글자·1px 테두리입니다."},{title:"Default · dark",description:"어두운 테마의 라벨 배경을 사용합니다.",theme:{preset:"dark"}},{title:"Custom box",description:"배경·글자·테두리 색상, 테두리 두께, 둥근 모서리, 내부 여백을 지정합니다.",style:{backgroundColor:"#fef3c7",borderColor:"#b45309",color:"#78350f",borderWidth:2,borderRadius:6,padding:5}},{title:"Text only",description:"backgroundColor: transparent와 borderWidth: 0으로 박스를 없앱니다.",style:{backgroundColor:"transparent",borderWidth:0,padding:0}}],s={parameters:{storyHeader:{eyebrow:"Data label appearance",title:"기본 라벨 박스와 테마·스타일 조정",description:"기본 배경은 theme.dataLabel.background를 따르고 테두리·글자는 실제 데이터 색상을 사용합니다. dataLabels의 외형 속성으로 해당 차트만 조정할 수 있습니다."}},render:()=>l(p.map(({title:e,description:n,theme:a,style:t})=>({title:e,description:n,height:300,initialization:{theme:a,data:[{month:"Jan",sales:120},{month:"Feb",sales:135},{month:"Mar",sales:128}],view:{paradigm:"cartesian",type:"bar",series:{id:"sales",name:"Sales",encoding:{x:"month",y:"sales"}},options:{animation:{enabled:!1},xAxis:{scale:"category"},yAxis:{scale:"linear",min:0,max:180},legend:{visible:!0},dataLabels:{visible:!0,...t}}}}})))};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Targets and campaign period',
  parameters: {
    storyHeader: {
      eyebrow: 'Data labels & annotations',
      title: '매출 수치·목표선·캠페인 구간을 한 화면에',
      description: '기준선·기간 강조·좌표 주석은 데이터 좌표를 따릅니다. 범례로 매출을 숨겨도 기준 주석은 남습니다. 라벨과 주석은 Canvas 이미지에도 포함됩니다.'
    }
  },
  render: () => createChartStoryContent({
    width: 800,
    height: 420,
    summary: 'Monthly revenue · KRW million · target 70 · campaign Apr–Jun',
    initialization: {
      data: [42, 48, 46, 63, 79, 84].map((revenue, index) => ({
        month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index],
        revenue
      })),
      view: {
        paradigm: 'cartesian',
        series: {
          id: 'revenue',
          name: 'Revenue',
          type: 'bar',
          encoding: {
            x: 'month',
            y: 'revenue'
          }
        },
        options: {
          xAxis: {
            scale: 'category'
          },
          yAxis: {
            scale: 'linear',
            min: 0,
            max: 110
          },
          legend: {
            visible: true,
            toggle: true
          },
          animation: {
            duration: 0,
            updateDuration: 300
          },
          dataLabels: {
            visible: true,
            formatter: ({
              value
            }) => \`₩\${value}M\`
          },
          annotations: [{
            id: 'campaign',
            type: 'range',
            axis: 'x',
            from: 'Apr',
            to: 'Jun',
            text: 'Campaign',
            opacity: 0.06
          }, {
            id: 'target',
            type: 'line',
            axis: 'y',
            value: 70,
            text: 'Target ₩70M'
          }, {
            id: 'milestone',
            type: 'label',
            x: 'May',
            y: 100,
            text: 'First month above target'
          }]
        }
      }
    }
  })
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Radar score labels',
  parameters: {
    storyHeader: {
      eyebrow: 'Report values',
      title: '툴팁 없이 읽는 평가 점수',
      description: 'Radar의 평가 값에 단위를 붙입니다. 데이터 라벨은 배경과 테두리를 사용하고, 숫자 눈금의 배경은 투명합니다. 겹치는 데이터 라벨은 생략합니다.'
    }
  },
  render: () => createChartStoryContent({
    width: 800,
    height: 420,
    summary: 'Release readiness · score out of 100',
    initialization: {
      data: [{
        axis: 'Reliability',
        score: 85
      }, {
        axis: 'Performance',
        score: 72
      }, {
        axis: 'Usability',
        score: 90
      }, {
        axis: 'Coverage',
        score: 64
      }, {
        axis: 'Efficiency',
        score: 78
      }],
      view: {
        paradigm: 'polar',
        type: 'radar',
        series: {
          id: 'readiness',
          name: 'Release candidate',
          encoding: {
            axis: 'axis',
            value: 'score'
          }
        },
        options: {
          animation: {
            enabled: false
          },
          radialAxis: {
            min: 0,
            max: 100
          },
          tooltip: {
            enabled: false
          },
          dataLabels: {
            visible: true,
            formatter: ({
              value
            }) => \`\${value} pt\`
          }
        }
      }
    }
  })
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Label position and rotation',
  parameters: {
    storyHeader: {
      eyebrow: 'Report placement',
      title: '데이터 라벨의 위치·회전·오프셋',
      description: '배경·테두리·글자가 함께 회전하고 박스 전체로 충돌·경계를 검사합니다. Auto는 양수·음수의 값 끝을 따르며, Top·Bottom은 화면 기준입니다. 회전 예제에는 위쪽 offset도 적용합니다.'
    }
  },
  render: () => createChartShowcase(([{
    title: 'Top · rotation 0',
    position: 'top',
    rotation: 0,
    inverted: false
  }, {
    title: 'Top · rotation -45',
    position: 'top',
    rotation: -45,
    inverted: false
  }, {
    title: 'Inside · rotation 0',
    position: 'inside',
    rotation: 0,
    inverted: false
  }, {
    title: 'Bottom · rotation 0',
    position: 'bottom',
    rotation: 0,
    inverted: false
  }, {
    title: 'Automatic value end',
    position: 'auto',
    rotation: 0,
    inverted: false
  }, {
    title: 'Inverted value end',
    position: 'auto',
    rotation: 0,
    inverted: true
  }] as const).map(({
    title,
    position,
    rotation,
    inverted
  }) => ({
    title,
    description: \`\${position} · rotation \${rotation}° · inverted \${inverted}\`,
    height: 320,
    initialization: {
      data: [{
        x: 'North',
        y: 35
      }, {
        x: 'South',
        y: -20
      }, {
        x: 'West',
        y: 55
      }],
      view: {
        paradigm: 'cartesian',
        type: 'bar',
        series: {
          id: 'sales',
          encoding: {
            x: 'x',
            y: 'y'
          }
        },
        options: {
          inverted,
          animation: {
            enabled: false
          },
          xAxis: {
            scale: 'category'
          },
          yAxis: {
            scale: 'linear',
            min: -50,
            max: 90,
            valueFormat: {
              valueSuffix: 'M'
            }
          },
          dataLabels: {
            visible: true,
            position,
            rotation,
            offset: {
              y: rotation === -45 ? -8 : 0
            }
          },
          annotations: [{
            id: 'zero',
            type: 'line',
            axis: 'y',
            value: 0
          }]
        }
      }
    }
  })))
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Data label appearance',
      title: '기본 라벨 박스와 테마·스타일 조정',
      description: '기본 배경은 theme.dataLabel.background를 따르고 테두리·글자는 실제 데이터 색상을 사용합니다. dataLabels의 외형 속성으로 해당 차트만 조정할 수 있습니다.'
    }
  },
  render: () => createChartShowcase(labelAppearances.map(({
    title,
    description,
    theme,
    style
  }) => ({
    title,
    description,
    height: 300,
    initialization: {
      theme,
      data: [{
        month: 'Jan',
        sales: 120
      }, {
        month: 'Feb',
        sales: 135
      }, {
        month: 'Mar',
        sales: 128
      }],
      view: {
        paradigm: 'cartesian',
        type: 'bar',
        series: {
          id: 'sales',
          name: 'Sales',
          encoding: {
            x: 'month',
            y: 'sales'
          }
        },
        options: {
          animation: {
            enabled: false
          },
          xAxis: {
            scale: 'category'
          },
          yAxis: {
            scale: 'linear',
            min: 0,
            max: 180
          },
          legend: {
            visible: true
          },
          dataLabels: {
            visible: true,
            ...style
          }
        }
      }
    }
  })))
}`,...s.parameters?.docs?.source}}};const v=["RevenueReport","RadarReport","LabelPositionAndRotation","LabelAppearance"];export{s as LabelAppearance,o as LabelPositionAndRotation,r as RadarReport,i as RevenueReport,v as __namedExportsOrder,x as default};
