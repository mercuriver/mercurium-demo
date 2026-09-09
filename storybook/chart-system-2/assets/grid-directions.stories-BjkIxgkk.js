import{c as r}from"./chart-showcase-D6LVIqI-.js";import{c as t}from"./chart-story-initialization-BYlsHDAa.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const m={title:"Features/Axes and Grid",parameters:{controls:{disable:!0}}},e={name:"Cartesian grid directions",parameters:{storyHeader:{eyebrow:"Axes · Grid",title:"축 눈금과 기준선 방향",description:"같은 데이터와 축에서 X·Y·양방향·숨김을 비교합니다. Grid를 숨겨도 축과 눈금은 유지됩니다."}},render:()=>r(["x","y","both","hidden"].map(n=>({title:n==="hidden"?"Hidden":n.toUpperCase(),description:n==="hidden"?"기준선 없이 축만 표시합니다.":`grid.direction: ${n}`,initialization:t([{month:"Jan",value:20},{month:"Feb",value:50},{month:"Mar",value:35},{month:"Apr",value:70}],{grid:{direction:n==="hidden"?"both":n,visible:n!=="hidden"},line:{dots:!0},xAxis:{scale:"category"},yAxis:{scale:"linear",min:0,max:80}},{id:"value",encoding:{x:"month",y:"value"}})})))},a={name:"Alternating backgrounds",parameters:{storyHeader:{eyebrow:"Grid bands",title:"값의 구간을 읽기 위한 교대 배경",description:"X/Y 중 배경 구간의 기준 축을 지정합니다. Invert는 논리 축의 의미를 유지한 채 화면 방향을 바꿉니다. 구간은 현재 눈금 간격을 따릅니다."}},render:()=>r([!1,!0].flatMap(n=>["x","y"].map(i=>({title:`${i.toUpperCase()} bands · inverted ${n}`,description:`grid.alternateAxis: ${i}`,initialization:t([{x:0,y:10},{x:1,y:35},{x:2,y:20},{x:3,y:50},{x:4,y:30}],{inverted:n,animation:{enabled:!1},xAxis:{scale:"linear",min:0,max:4},yAxis:{scale:"linear",min:0,max:60},grid:{alternateAxis:i,alternateColor:"#eaf0f8"}},{id:"value",encoding:{x:"x",y:"y"}})}))))};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Cartesian grid directions',
  parameters: {
    storyHeader: {
      eyebrow: 'Axes · Grid',
      title: '축 눈금과 기준선 방향',
      description: '같은 데이터와 축에서 X·Y·양방향·숨김을 비교합니다. Grid를 숨겨도 축과 눈금은 유지됩니다.'
    }
  },
  render: () => createChartShowcase((['x', 'y', 'both', 'hidden'] as const).map(direction => ({
    title: direction === 'hidden' ? 'Hidden' : direction.toUpperCase(),
    description: direction === 'hidden' ? '기준선 없이 축만 표시합니다.' : \`grid.direction: \${direction}\`,
    initialization: createCartesianStoryInitialization([{
      month: 'Jan',
      value: 20
    }, {
      month: 'Feb',
      value: 50
    }, {
      month: 'Mar',
      value: 35
    }, {
      month: 'Apr',
      value: 70
    }], {
      grid: {
        direction: direction === 'hidden' ? 'both' : direction,
        visible: direction !== 'hidden'
      },
      line: {
        dots: true
      },
      xAxis: {
        scale: 'category'
      },
      yAxis: {
        scale: 'linear',
        min: 0,
        max: 80
      }
    }, {
      id: 'value',
      encoding: {
        x: 'month',
        y: 'value'
      }
    })
  })))
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Alternating backgrounds',
  parameters: {
    storyHeader: {
      eyebrow: 'Grid bands',
      title: '값의 구간을 읽기 위한 교대 배경',
      description: 'X/Y 중 배경 구간의 기준 축을 지정합니다. Invert는 논리 축의 의미를 유지한 채 화면 방향을 바꿉니다. 구간은 현재 눈금 간격을 따릅니다.'
    }
  },
  render: () => createChartShowcase(([false, true] as const).flatMap(inverted => (['x', 'y'] as const).map(alternateAxis => ({
    title: \`\${alternateAxis.toUpperCase()} bands · inverted \${inverted}\`,
    description: \`grid.alternateAxis: \${alternateAxis}\`,
    initialization: createCartesianStoryInitialization([{
      x: 0,
      y: 10
    }, {
      x: 1,
      y: 35
    }, {
      x: 2,
      y: 20
    }, {
      x: 3,
      y: 50
    }, {
      x: 4,
      y: 30
    }], {
      inverted,
      animation: {
        enabled: false
      },
      xAxis: {
        scale: 'linear',
        min: 0,
        max: 4
      },
      yAxis: {
        scale: 'linear',
        min: 0,
        max: 60
      },
      grid: {
        alternateAxis,
        alternateColor: '#eaf0f8'
      }
    }, {
      id: 'value',
      encoding: {
        x: 'x',
        y: 'y'
      }
    })
  }))))
}`,...a.parameters?.docs?.source}}};const x=["GridDirections","AlternateBands"];export{a as AlternateBands,e as GridDirections,x as __namedExportsOrder,m as default};
