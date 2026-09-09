import{c as n}from"./chart-showcase-D6LVIqI-.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const u={title:"Charts/Pie",parameters:{controls:{disable:!0}}},a=(e,r=0)=>({data:e,view:{paradigm:"polar",type:"pie",series:{id:"share",encoding:{label:"category",value:"value"}},options:{innerRadius:r,grid:{visible:!1},legend:{visible:!0},tooltip:{enabled:!0},dataLabels:{visible:!0}}}}),t={name:"Distribution cases",parameters:{storyHeader:{eyebrow:"Charts · Pie",title:"구성비와 데이터 경계 사례",description:"동일 비중, 지배적인 항목, 단일 유효 항목, 표시할 비중이 없는 입력을 비교합니다. 가상 데이터입니다."}},render:()=>n([{title:"Equal shares",description:"네 항목에 같은 각도를 부여합니다.",initialization:a(["A","B","C","D"].map(e=>({category:e,value:25})))},{title:"Dominant category",description:"작은 조각의 라벨은 공간이 부족하면 생략하고 tooltip으로 확인합니다.",initialization:a([{category:"Core",value:97},{category:"Edge",value:2},{category:"Other",value:1}])},{title:"Single valid category",description:"유효한 항목 하나는 전체 원을 차지합니다. 음수·null은 제외합니다.",initialization:a([{category:"Active",value:10},{category:"Invalid",value:-2},{category:"Missing",value:null}])},{title:"No positive values",description:"0만 있을 때 임의로 같은 비율의 조각을 만들지 않습니다.",initialization:a([{category:"A",value:0},{category:"B",value:0}])}])},i={name:"Donut label density",parameters:{storyHeader:{eyebrow:"Charts · Donut",title:"링 두께에 따른 라벨 생략",description:"같은 구독 플랜 구성비를 두 링 두께로 비교합니다. 라벨이 구멍이나 외곽을 침범하면 생략합니다."}},render:()=>n([.45,.85].map(e=>({title:`Inner radius ${e}`,description:"가상 플랜 구성비 · Pro 60 / Team 25 / Basic 15",height:340,initialization:a([{category:"Pro",value:60},{category:"Team",value:25},{category:"Basic",value:15}],e)})))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Distribution cases',
  parameters: {
    storyHeader: {
      eyebrow: 'Charts · Pie',
      title: '구성비와 데이터 경계 사례',
      description: '동일 비중, 지배적인 항목, 단일 유효 항목, 표시할 비중이 없는 입력을 비교합니다. 가상 데이터입니다.'
    }
  },
  render: () => createChartShowcase([{
    title: 'Equal shares',
    description: '네 항목에 같은 각도를 부여합니다.',
    initialization: createPie(['A', 'B', 'C', 'D'].map(category => ({
      category,
      value: 25
    })))
  }, {
    title: 'Dominant category',
    description: '작은 조각의 라벨은 공간이 부족하면 생략하고 tooltip으로 확인합니다.',
    initialization: createPie([{
      category: 'Core',
      value: 97
    }, {
      category: 'Edge',
      value: 2
    }, {
      category: 'Other',
      value: 1
    }])
  }, {
    title: 'Single valid category',
    description: '유효한 항목 하나는 전체 원을 차지합니다. 음수·null은 제외합니다.',
    initialization: createPie([{
      category: 'Active',
      value: 10
    }, {
      category: 'Invalid',
      value: -2
    }, {
      category: 'Missing',
      value: null
    }])
  }, {
    title: 'No positive values',
    description: '0만 있을 때 임의로 같은 비율의 조각을 만들지 않습니다.',
    initialization: createPie([{
      category: 'A',
      value: 0
    }, {
      category: 'B',
      value: 0
    }])
  }])
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Donut label density',
  parameters: {
    storyHeader: {
      eyebrow: 'Charts · Donut',
      title: '링 두께에 따른 라벨 생략',
      description: '같은 구독 플랜 구성비를 두 링 두께로 비교합니다. 라벨이 구멍이나 외곽을 침범하면 생략합니다.'
    }
  },
  render: () => createChartShowcase([0.45, 0.85].map(innerRadius => ({
    title: \`Inner radius \${innerRadius}\`,
    description: '가상 플랜 구성비 · Pro 60 / Team 25 / Basic 15',
    height: 340,
    initialization: createPie([{
      category: 'Pro',
      value: 60
    }, {
      category: 'Team',
      value: 25
    }, {
      category: 'Basic',
      value: 15
    }], innerRadius)
  })))
}`,...i.parameters?.docs?.source}}};const d=["DistributionCases","DonutLabelDensity"];export{t as DistributionCases,i as DonutLabelDensity,d as __namedExportsOrder,u as default};
