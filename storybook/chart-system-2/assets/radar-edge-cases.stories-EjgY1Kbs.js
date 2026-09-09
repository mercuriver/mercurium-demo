import{c as s}from"./chart-showcase-D6LVIqI-.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const m={title:"Charts/Radar",parameters:{controls:{disable:!0}}},n=(e,a=!1)=>({data:e,view:{paradigm:"polar",type:"radar",series:{id:"scores",encoding:{axis:"axis",series:"group",value:"value"}},options:{radialAxis:{min:0,max:100,reversed:a},tooltip:{enabled:!0,shared:!0},legend:{visible:!0}}}}),i=["Latency","Errors","Cost","Energy","Recovery"].flatMap((e,a)=>[{axis:e,group:"Current",value:[30,20,65,55,40][a]},{axis:e,group:"Target",value:25}]),r={name:"Missing measurements",parameters:{storyHeader:{eyebrow:"Charts · Radar",title:"측정 누락과 관측된 값",description:"계열의 축 값이 누락되면 gap으로 남기고 면적을 채우지 않습니다. 0으로 대체하지 않습니다."}},render:()=>s([{title:"Incomplete current measurements",description:"Errors와 Energy의 Current 측정이 누락된 가상 데이터입니다.",height:400,initialization:n(i.map(e=>e.group==="Current"&&["Errors","Energy"].includes(e.axis)?{...e,value:null}:e))}])},t={name:"Lower is better",parameters:{storyHeader:{eyebrow:"Charts · Radar",title:"낮을수록 좋은 지표의 역방향 범위",description:"모든 축을 0–100 비용 점수로 정규화한 가상 데이터입니다. 바깥쪽일수록 낮은 비용입니다."}},render:()=>s([{title:"Cost profile · reversed",description:"숫자 눈금도 mark와 함께 뒤집힙니다. 배경은 기본 투명입니다.",height:400,initialization:n(i,!0)}])};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Missing measurements',
  parameters: {
    storyHeader: {
      eyebrow: 'Charts · Radar',
      title: '측정 누락과 관측된 값',
      description: '계열의 축 값이 누락되면 gap으로 남기고 면적을 채우지 않습니다. 0으로 대체하지 않습니다.'
    }
  },
  render: () => createChartShowcase([{
    title: 'Incomplete current measurements',
    description: 'Errors와 Energy의 Current 측정이 누락된 가상 데이터입니다.',
    height: 400,
    initialization: createRadar(DATA.map(datum => datum.group === 'Current' && ['Errors', 'Energy'].includes(datum.axis) ? {
      ...datum,
      value: null
    } : datum))
  }])
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Lower is better',
  parameters: {
    storyHeader: {
      eyebrow: 'Charts · Radar',
      title: '낮을수록 좋은 지표의 역방향 범위',
      description: '모든 축을 0–100 비용 점수로 정규화한 가상 데이터입니다. 바깥쪽일수록 낮은 비용입니다.'
    }
  },
  render: () => createChartShowcase([{
    title: 'Cost profile · reversed',
    description: '숫자 눈금도 mark와 함께 뒤집힙니다. 배경은 기본 투명입니다.',
    height: 400,
    initialization: createRadar(DATA, true)
  }])
}`,...t.parameters?.docs?.source}}};const u=["MissingMeasurements","LowerIsBetter"];export{t as LowerIsBetter,r as MissingMeasurements,u as __namedExportsOrder,m as default};
