import{c as r}from"./chart-story-content-DqL3FnFI.js";import{p as l,C as d,q as m}from"./chart-playground-data-DVQ9OxHY.js";import{c as o}from"./chart-story-initialization-BYlsHDAa.js";import{N as c,a as p,c as u}from"./chart-navigator-story-D7Yqhm3h.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const L={parameters:{controls:{disable:!0}},title:"Examples/Mixed Charts"},I=o(d,{area:{curve:"smooth",fillOpacity:.16,lineWidth:2},bar:{barWidth:.6,radius:4},legend:{visible:!0},line:{curve:"smooth",dots:!0,lineWidth:3,pointRadius:4},time:{timezone:"UTC"},xAxis:{scale:"time",ticks:{count:8},title:"Date"},yAxis:[{labels:{valuePrefix:"$"},scale:"linear",title:"Amount"},{id:"rate-axis",labels:{valueSuffix:"%"},max:100,min:0,opposite:!0,scale:"linear",title:"Rate"}]},[{encoding:{x:"date",y:"amount"},id:"amount",name:"Amount",type:"area"},{encoding:{x:"date",y:"rate"},id:"rate",name:"Rate",type:"bar",yAxisId:"rate-axis"},{encoding:{x:"date",y:"previous"},id:"previous",name:"Previous",type:"line"}]),n=o(l,{grid:{visible:!1},heatmap:{cell:{padding:1,radius:2,stroke:"#ffffff",strokeWidth:1},colorScale:{domain:{max:12,min:0},kind:"sequential",range:["#f0fdfa","#0f766e"]},indicator:{title:"Days in humidity band",valueSuffix:" days"}},legend:{visible:!1},line:{curve:"smooth",dots:!0,lineWidth:3,pointRadius:4},time:{timezone:"UTC"},title:{text:"Rainfall and humidity distribution"},xAxis:{scale:"time",ticks:{count:12},title:"Month · 2025–2026"},yAxis:[{id:"rainfall-axis",labels:{valueSuffix:" mm"},max:340,min:0,scale:"linear",title:"Monthly rainfall"},{id:"humidity-axis",opposite:!0,scale:"category",title:"Daily humidity band"}]},[{encoding:{value:"humidityDays",x:"month",y:"humidityBand"},id:"humidity-distribution",name:"Humidity frequency",opacity:.88,type:"heatmap",yAxisId:"humidity-axis"},{color:"#1d4ed8",encoding:{x:"month",y:"rainfall"},id:"rainfall",name:"Monthly rainfall",type:"line",yAxisId:"rainfall-axis"}]),y=o(m,{boxPlot:{boxWidth:.54,fillOpacity:.14,lineWidth:2,medianColor:"#172554",whiskerWidth:.55},legend:{alignment:"start",position:"right",size:170,visible:!0},line:{curve:"smooth",dots:!0,lineWidth:2,pointRadius:3},title:{text:"Income range and marital status by age"},xAxis:{scale:"category",title:"Age"},yAxis:[{labels:{valueSuffix:"M"},min:0,scale:"linear",title:"Annual income · ₩M"},{id:"rate-axis",labels:{valueSuffix:"%"},max:90,min:0,opposite:!0,scale:"linear",title:"Population share"}]},[{color:"#2563eb",encoding:{high:"incomeHigh",low:"incomeLow",median:"incomeMedian",q1:"incomeQ1",q3:"incomeQ3",x:"age"},id:"income-range",name:"Income P10/P25/P50/P75/P90",type:"boxPlot"},{color:"#16a34a",encoding:{x:"age",y:"marriageRate"},id:"marriage-rate",name:"Married",type:"line",yAxisId:"rate-axis"},{color:"#dc2626",encoding:{x:"age",y:"divorceRate"},id:"divorce-rate",name:"Divorced",type:"line",yAxisId:"rate-axis"}]),e={name:"Mixed marks",parameters:{storyHeader:{description:"Area, Bar, Line을 한 plot과 두 Y축에 함께 배치한 혼합 렌더링입니다.",eyebrow:"Examples · Mixed charts",title:"Mixed Cartesian 차트"}},render:()=>r({height:520,initialization:I,summary:"Area · Bar · Line · dual Y axes",width:1e3})},a={name:"Rainfall × humidity",parameters:{storyHeader:{description:"24개월 월 강수량 Line과 5% 단위 일 습도 분포 Heatmap을 두 Y축에 합성합니다.",eyebrow:"Examples · Mixed charts",title:"강수량과 습도 분포 복합 차트"}},render:()=>r({height:560,initialization:n,summary:"Line · Heatmap · color indicator · dual Y axes",width:1e3})},i={name:"Income range × life events",parameters:{storyHeader:{description:"15–85세의 소득 분포를 Box plot으로, 혼인·이혼 상태 비율을 두 번째 Y축의 Line으로 합성합니다.",eyebrow:"Examples · Mixed charts",title:"연령별 소득 범위와 혼인 상태 복합 차트"}},render:()=>r({height:540,initialization:y,summary:"Box plot · Line · dual Y axes",width:1e3})},t={name:"Navigator controls",args:p,argTypes:c,parameters:{controls:{disable:!1},storyHeader:{description:"Line과 Heatmap을 중첩한 차트에서 양 끝 핸들로 범위를 좁힌 뒤, 선택 영역 중앙을 드래그해 이동합니다. top/bottom은 공통 시간축, left/right는 두 Y축의 비율 범위를 제어합니다. 범례로 Line·Heatmap을 숨기거나 복원하며, 미리보기는 보이는 강수량 Line을 사용합니다.",eyebrow:"Examples · Mixed charts",title:"강수량과 습도 · Navigator 제어"}},render:s=>r({height:620,initialization:{...n,view:{...n.view,options:{...n.view.options,legend:{visible:!0,toggle:s.legendToggle},navigator:u(s,["rainfall"])}}},summary:"핸들: 범위 조절 · 중앙 드래그 / Shift+방향키: 범위 이동 · Controls: 위치·미리보기·눈금",width:1e3})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Mixed marks',
  parameters: {
    storyHeader: {
      description: 'Area, Bar, Line을 한 plot과 두 Y축에 함께 배치한 혼합 렌더링입니다.',
      eyebrow: 'Examples · Mixed charts',
      title: 'Mixed Cartesian 차트'
    } satisfies StoryHeaderParameters
  },
  render: () => createChartStoryContent({
    height: 520,
    initialization: MIXED_MARKS_INITIALIZATION,
    summary: 'Area · Bar · Line · dual Y axes',
    width: 1_000
  })
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Rainfall × humidity',
  parameters: {
    storyHeader: {
      description: '24개월 월 강수량 Line과 5% 단위 일 습도 분포 Heatmap을 두 Y축에 합성합니다.',
      eyebrow: 'Examples · Mixed charts',
      title: '강수량과 습도 분포 복합 차트'
    } satisfies StoryHeaderParameters
  },
  render: () => createChartStoryContent({
    height: 560,
    initialization: RAINFALL_HUMIDITY_INITIALIZATION,
    summary: 'Line · Heatmap · color indicator · dual Y axes',
    width: 1_000
  })
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Income range × life events',
  parameters: {
    storyHeader: {
      description: '15–85세의 소득 분포를 Box plot으로, 혼인·이혼 상태 비율을 두 번째 Y축의 Line으로 합성합니다.',
      eyebrow: 'Examples · Mixed charts',
      title: '연령별 소득 범위와 혼인 상태 복합 차트'
    } satisfies StoryHeaderParameters
  },
  render: () => createChartStoryContent({
    height: 540,
    initialization: INCOME_LIFE_EVENTS_INITIALIZATION,
    summary: 'Box plot · Line · dual Y axes',
    width: 1_000
  })
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Navigator controls',
  args: NAVIGATOR_STORY_ARGS,
  argTypes: NAVIGATOR_STORY_ARG_TYPES,
  parameters: {
    controls: {
      disable: false
    },
    storyHeader: {
      description: 'Line과 Heatmap을 중첩한 차트에서 양 끝 핸들로 범위를 좁힌 뒤, 선택 영역 중앙을 드래그해 이동합니다. top/bottom은 공통 시간축, left/right는 두 Y축의 비율 범위를 제어합니다. 범례로 Line·Heatmap을 숨기거나 복원하며, 미리보기는 보이는 강수량 Line을 사용합니다.',
      eyebrow: 'Examples · Mixed charts',
      title: '강수량과 습도 · Navigator 제어'
    } satisfies StoryHeaderParameters
  },
  render: args => createChartStoryContent({
    height: 620,
    initialization: {
      ...RAINFALL_HUMIDITY_INITIALIZATION,
      view: {
        ...RAINFALL_HUMIDITY_INITIALIZATION.view,
        options: {
          ...RAINFALL_HUMIDITY_INITIALIZATION.view.options,
          legend: {
            visible: true,
            toggle: args.legendToggle
          },
          navigator: createStoryNavigator(args, ['rainfall'])
        }
      }
    },
    summary: '핸들: 범위 조절 · 중앙 드래그 / Shift+방향키: 범위 이동 · Controls: 위치·미리보기·눈금',
    width: 1_000
  })
}`,...t.parameters?.docs?.source}}};const _=["MixedMarks","RainfallHumidity","IncomeAndLifeEvents","NavigatorControls"];export{i as IncomeAndLifeEvents,e as MixedMarks,t as NavigatorControls,a as RainfallHumidity,_ as __namedExportsOrder,L as default};
