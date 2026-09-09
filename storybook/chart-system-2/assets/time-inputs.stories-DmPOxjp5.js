import{c as e}from"./chart-story-content-DqL3FnFI.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const o={title:"API Examples/Data Inputs",parameters:{controls:{disable:!0}}},n=[{amount:2400,date:new Date(Date.UTC(2026,0,1))},{amount:2520,date:Date.UTC(2026,0,2)},{amount:2610,date:"2026-01-03T00:00:00Z"},{amount:2760,date:"2026-01-04T09:00:00+09:00"},{amount:2840,date:"2026-01-05T00:00:00"},{amount:2930,date:"2026-01-06"},{amount:3020,date:"2026-01-07 00:00:00Z"},{amount:3100,date:"January 8, 2026"},{amount:3180,date:"2026-02-30T00:00:00Z"},{amount:3240,date:" 2026-01-09T00:00:00Z"}],t={name:"Strict 시간 입력",parameters:{storyHeader:{description:"Date, epoch, ISO 8601 문자열은 허용하고 Date.parse가 수용하는 느슨한 형식·잘못된 날짜·주변 공백은 거부합니다. timezone을 생략한 wall-clock 값은 UTC로 해석합니다.",eyebrow:"Time value contract",title:"엄격한 시간 파싱과 UTC 기본값"}},render:()=>e({height:420,initialization:{data:n,diagnostics:{behavior:"report",overlay:!0},theme:{font:{family:"Inter, ui-sans-serif, system-ui, sans-serif",size:12}},view:{options:{accessibility:{label:"Strict time value parsing with rejected input diagnostics"},margin:16,padding:8,xAxis:{scale:"time",ticks:{count:6},title:"Strict ISO · UTC default"},yAxis:{scale:"linear",ticks:{count:5},title:"Amount"}},paradigm:"cartesian",series:[{encoding:{x:"date",y:"amount"},id:"amount",name:"Amount"}]}},summary:"6 accepted · 4 rejected · 860 × 420px",width:860})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Strict 시간 입력',
  parameters: {
    storyHeader: {
      description: 'Date, epoch, ISO 8601 문자열은 허용하고 Date.parse가 수용하는 느슨한 형식·잘못된 날짜·주변 공백은 거부합니다. timezone을 생략한 wall-clock 값은 UTC로 해석합니다.',
      eyebrow: 'Time value contract',
      title: '엄격한 시간 파싱과 UTC 기본값'
    } satisfies StoryHeaderParameters
  },
  render: () => createChartStoryContent({
    height: 420,
    initialization: {
      data: STRICT_TIME_STORY_DATA,
      diagnostics: {
        behavior: 'report',
        overlay: true
      },
      theme: {
        font: {
          family: 'Inter, ui-sans-serif, system-ui, sans-serif',
          size: 12
        }
      },
      view: {
        options: {
          accessibility: {
            label: 'Strict time value parsing with rejected input diagnostics'
          },
          margin: 16,
          padding: 8,
          xAxis: {
            scale: 'time',
            ticks: {
              count: 6
            },
            title: 'Strict ISO · UTC default'
          },
          yAxis: {
            scale: 'linear',
            ticks: {
              count: 5
            },
            title: 'Amount'
          }
        },
        paradigm: 'cartesian',
        series: [{
          encoding: {
            x: 'date',
            y: 'amount'
          },
          id: 'amount',
          name: 'Amount'
        }]
      }
    },
    summary: \`6 accepted · 4 rejected · \${860} × \${420}px\`,
    width: 860
  })
}`,...t.parameters?.docs?.source}}};const c=["StrictTimeInputs"];export{t as StrictTimeInputs,c as __namedExportsOrder,o as default};
