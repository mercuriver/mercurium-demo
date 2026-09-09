import{c as r}from"./chart-showcase-D6LVIqI-.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const y={title:"Examples/Polar Use Cases",parameters:{controls:{disable:!0}}},o={data:[{source:"Solar",energy:420},{source:"Wind",energy:310},{source:"Hydro",energy:180},{source:"Biomass",energy:90}],view:{paradigm:"polar",type:"pie",series:{id:"generation",encoding:{label:"source",value:"energy"}},options:{title:{text:"Renewable generation · 1,000 MWh"},grid:{visible:!1},legend:{visible:!0},colors:["#eab308","#0891b2","#2563eb","#16a34a"],borderWidth:2,dataLabels:{visible:!0},tooltip:{enabled:!0,valueSuffix:" MWh",valueDecimals:0}}}},l={data:[{state:"Used",capacity:640},{state:"Reserved",capacity:160},{state:"Available",capacity:200}],view:{paradigm:"polar",type:"pie",series:{id:"storage",encoding:{label:"state",value:"capacity"}},options:{title:{text:"Storage allocation · 1,000 TB"},innerRadius:.55,grid:{visible:!1},legend:{visible:!0},colors:["#2563eb","#f59e0b","#cbd5e1"],borderWidth:3,dataLabels:{visible:!0},tooltip:{enabled:!0,valueSuffix:" TB",valueDecimals:0}}}},c={data:[{dimension:"Reliability",baseline:78,candidate:91},{dimension:"Latency",baseline:85,candidate:72},{dimension:"Throughput",baseline:68,candidate:88},{dimension:"Efficiency",baseline:82,candidate:76},{dimension:"Recovery",baseline:65,candidate:90}].flatMap(({dimension:e,baseline:n,candidate:s})=>[{dimension:e,version:"Baseline",score:n},{dimension:e,version:"Candidate",score:s}]),view:{paradigm:"polar",type:"radar",series:{id:"release",encoding:{axis:"dimension",series:"version",value:"score"}},options:{title:{text:"Release benchmark · higher is better"},radialAxis:{min:0,max:100,tickCount:5,labels:{formatter:e=>`${e} pt`}},legend:{visible:!0},colors:["#64748b","#7c3aed"],fillOpacity:.12,tooltip:{enabled:!0,shared:!0,valueSuffix:" / 100",valueDecimals:0}}}},a={name:"Energy mix · Pie",parameters:{storyHeader:{eyebrow:"Examples · Composition",title:"발전원별 구성비",description:"가상의 월간 발전량입니다. 합계가 의미 있는 양수 항목 네 개의 전체 대비 비중을 비교합니다."}},render:()=>r([{title:"Energy mix",description:"발전량 MWh를 입력하고 tooltip에서 원래 단위를 확인합니다.",height:380,initialization:o}])},i={name:"Storage capacity · Donut",parameters:{storyHeader:{eyebrow:"Examples · Capacity",title:"스토리지 사용·예약·가용 용량",description:"가상의 1,000 TB 풀입니다. 사용량만 표시하지 않고 예약과 가용량을 포함해 전체 용량을 보존합니다."}},render:()=>r([{title:"Capacity allocation",description:"세 상태는 서로 배타적입니다. 중앙 수치는 별도 HTML로 덧붙이지 않고 차트 제목에 합계를 표시합니다.",height:380,initialization:l}])},t={name:"Release tradeoffs · Radar",parameters:{storyHeader:{eyebrow:"Examples · Multivariate comparison",title:"릴리스 후보의 성능 상충 관계",description:"가상의 벤치마크 점수입니다. 서로 다른 원시 단위를 섞지 않고 모든 축을 높을수록 좋은 0–100 점수로 정규화했습니다. 면적을 종합 점수로 해석하지 않습니다."}},render:()=>r([{title:"Baseline vs candidate",description:"처리량·복구 성능 개선과 지연·효율 점수 감소를 같은 축 범위에서 비교합니다.",height:420,initialization:c}])};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Energy mix · Pie',
  parameters: {
    storyHeader: {
      eyebrow: 'Examples · Composition',
      title: '발전원별 구성비',
      description: '가상의 월간 발전량입니다. 합계가 의미 있는 양수 항목 네 개의 전체 대비 비중을 비교합니다.'
    }
  },
  render: () => createChartShowcase([{
    title: 'Energy mix',
    description: '발전량 MWh를 입력하고 tooltip에서 원래 단위를 확인합니다.',
    height: 380,
    initialization: ENERGY
  }])
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Storage capacity · Donut',
  parameters: {
    storyHeader: {
      eyebrow: 'Examples · Capacity',
      title: '스토리지 사용·예약·가용 용량',
      description: '가상의 1,000 TB 풀입니다. 사용량만 표시하지 않고 예약과 가용량을 포함해 전체 용량을 보존합니다.'
    }
  },
  render: () => createChartShowcase([{
    title: 'Capacity allocation',
    description: '세 상태는 서로 배타적입니다. 중앙 수치는 별도 HTML로 덧붙이지 않고 차트 제목에 합계를 표시합니다.',
    height: 380,
    initialization: CAPACITY
  }])
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Release tradeoffs · Radar',
  parameters: {
    storyHeader: {
      eyebrow: 'Examples · Multivariate comparison',
      title: '릴리스 후보의 성능 상충 관계',
      description: '가상의 벤치마크 점수입니다. 서로 다른 원시 단위를 섞지 않고 모든 축을 높을수록 좋은 0–100 점수로 정규화했습니다. 면적을 종합 점수로 해석하지 않습니다.'
    }
  },
  render: () => createChartShowcase([{
    title: 'Baseline vs candidate',
    description: '처리량·복구 성능 개선과 지연·효율 점수 감소를 같은 축 범위에서 비교합니다.',
    height: 420,
    initialization: PROFILE
  }])
}`,...t.parameters?.docs?.source}}};const b=["EnergyMix","StorageCapacity","ReleaseTradeoffs"];export{a as EnergyMix,t as ReleaseTradeoffs,i as StorageCapacity,b as __namedExportsOrder,y as default};
