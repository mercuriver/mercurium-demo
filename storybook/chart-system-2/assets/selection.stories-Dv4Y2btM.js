import{c as m}from"./chart-story-content-DqL3FnFI.js";import{c as l}from"./chart-showcase-D6LVIqI-.js";import{c as u}from"./chart-story-initialization-BYlsHDAa.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const v={title:"Features/Interactions/Selection",parameters:{controls:{disable:!0}}},t=(e,n,a)=>({title:e,description:n,height:300,initialization:u([{month:"Jan",actual:24,target:32},{month:"Feb",actual:48,target:40},{month:"Mar",actual:36,target:44},{month:"Apr",actual:64,target:56}],{line:{dots:!0,pointRadius:5},legend:{visible:!0},xAxis:{scale:"category"},yAxis:{scale:"linear",min:0,max:80},...a},[{encoding:{x:"month",y:"actual"},id:"actual",name:"Actual",type:"bar"},{encoding:{x:"month",y:"target"},id:"target",name:"Target",type:"line"}])}),r={name:"Selection distance",parameters:{storyHeader:{eyebrow:"Interaction · Selection",title:"어느 위치에서 데이터를 선택할 것인가",description:"같은 가상 데이터를 포인터로 탐색하며 실제 mark 위, 주변, 빈 영역의 선택 차이를 비교합니다. snapDistance는 그래프 크기에 비례하는 값입니다."}},render:()=>l([t("Exact hit · 0","Bar 내부 또는 Line 표본 위치에서만 선택합니다.",{tooltip:{enabled:!0,snapDistance:0}}),t("Nearby · 2","기본값. mark 주변에 제한된 선택 여유를 둡니다.",{tooltip:{enabled:!0,snapDistance:2}}),t("Nearest · 10","그래프 안의 빈 영역에서도 최근접 항목을 선택합니다.",{tooltip:{enabled:!0,snapDistance:10}})])},s={name:"Tooltip and highlight",parameters:{storyHeader:{eyebrow:"Interaction · Tooltip",title:"선택 결과와 강조 범위",description:"한 항목과 같은 datum의 여러 series를 비교하고, tooltip·mark 강조를 끌 때 남는 표현을 확인합니다."}},render:()=>l([t("Single series","가장 가까운 series 한 항목을 표시하고 강조합니다.",{tooltip:{enabled:!0,shared:!1,snapDistance:10}}),t("Shared datum","같은 행의 Actual·Target을 함께 표시하고 강조합니다.",{tooltip:{enabled:!0,shared:!0,snapDistance:10}}),t("Without highlight","Tooltip은 유지하고 mark의 추가 강조만 끕니다.",{tooltip:{enabled:!0,highlightDots:!1,snapDistance:10}}),t("Crosshair only","Tooltip과 mark 강조를 끄고 위치 가이드만 유지합니다.",{crosshair:{enabled:!0},tooltip:{enabled:!1}})])},o={name:"Crosshair directions",parameters:{storyHeader:{eyebrow:"Interaction · Crosshair",title:"위치 가이드의 방향",description:"X는 세로선, Y는 가로선입니다. Crosshair를 꺼도 tooltip과 mark 선택은 유지됩니다."}},render:()=>l([...["x","y","both"].map(e=>t(e.toUpperCase(),`crosshair.direction: ${e}`,{crosshair:{enabled:!0,direction:e},tooltip:{enabled:!0,snapDistance:10}})),t("Disabled","위치 가이드 없이 선택 데이터를 확인합니다.",{crosshair:{enabled:!1},tooltip:{enabled:!0,snapDistance:10}})])},p=e=>{const n=document.createElement("pre");n.setAttribute("role","status"),n.textContent="차트의 데이터를 클릭하거나, 차트에 Tab으로 진입한 뒤 방향키와 Enter/Space를 사용하세요.",Object.assign(n.style,{whiteSpace:"pre-wrap",fontSize:"13px",margin:"12px 0"});const a=m({width:760,height:360,initialization:{data:[{id:"web",category:"Web",value:42},{id:"app",category:"App",value:35},{id:"partner",category:"Partner",value:23}],dataIdKey:"id",view:e({onSelect:d=>{n.textContent=JSON.stringify(d,null,2)}})},summary:"Click / Enter / Space · tooltip disabled"});return a.append(n),a},i={name:"Cartesian selection event",parameters:{storyHeader:{eyebrow:"Selection events",title:"선택한 데이터를 Studio에 전달",description:"hover tooltip과 별도로 클릭·키보드 선택의 datum, seriesId, key, source를 전달합니다. 아래 출력에서 원본 데이터 ID를 확인합니다."}},render:()=>p(e=>({paradigm:"cartesian",type:"bar",series:{id:"traffic",encoding:{x:"category",y:"value"}},options:{selection:e,xAxis:{scale:"category"},yAxis:{scale:"linear",min:0,max:50},tooltip:{enabled:!1}}}))},c={name:"Polar selection event",parameters:{storyHeader:{eyebrow:"Selection events",title:"Donut 조각 선택",description:"동일한 이벤트 계약으로 선택한 조각의 원본 데이터를 전달합니다. 중앙 빈 공간은 선택 대상이 아닙니다."}},render:()=>p(e=>({paradigm:"polar",series:{id:"traffic",encoding:{label:"category",value:"value"}},options:{selection:e,innerRadius:.55,tooltip:{enabled:!1},legend:{visible:!0}}}))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Selection distance',
  parameters: {
    storyHeader: {
      eyebrow: 'Interaction · Selection',
      title: '어느 위치에서 데이터를 선택할 것인가',
      description: '같은 가상 데이터를 포인터로 탐색하며 실제 mark 위, 주변, 빈 영역의 선택 차이를 비교합니다. snapDistance는 그래프 크기에 비례하는 값입니다.'
    }
  },
  render: () => createChartShowcase([createCase('Exact hit · 0', 'Bar 내부 또는 Line 표본 위치에서만 선택합니다.', {
    tooltip: {
      enabled: true,
      snapDistance: 0
    }
  }), createCase('Nearby · 2', '기본값. mark 주변에 제한된 선택 여유를 둡니다.', {
    tooltip: {
      enabled: true,
      snapDistance: 2
    }
  }), createCase('Nearest · 10', '그래프 안의 빈 영역에서도 최근접 항목을 선택합니다.', {
    tooltip: {
      enabled: true,
      snapDistance: 10
    }
  })])
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Tooltip and highlight',
  parameters: {
    storyHeader: {
      eyebrow: 'Interaction · Tooltip',
      title: '선택 결과와 강조 범위',
      description: '한 항목과 같은 datum의 여러 series를 비교하고, tooltip·mark 강조를 끌 때 남는 표현을 확인합니다.'
    }
  },
  render: () => createChartShowcase([createCase('Single series', '가장 가까운 series 한 항목을 표시하고 강조합니다.', {
    tooltip: {
      enabled: true,
      shared: false,
      snapDistance: 10
    }
  }), createCase('Shared datum', '같은 행의 Actual·Target을 함께 표시하고 강조합니다.', {
    tooltip: {
      enabled: true,
      shared: true,
      snapDistance: 10
    }
  }), createCase('Without highlight', 'Tooltip은 유지하고 mark의 추가 강조만 끕니다.', {
    tooltip: {
      enabled: true,
      highlightDots: false,
      snapDistance: 10
    }
  }), createCase('Crosshair only', 'Tooltip과 mark 강조를 끄고 위치 가이드만 유지합니다.', {
    crosshair: {
      enabled: true
    },
    tooltip: {
      enabled: false
    }
  })])
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Crosshair directions',
  parameters: {
    storyHeader: {
      eyebrow: 'Interaction · Crosshair',
      title: '위치 가이드의 방향',
      description: 'X는 세로선, Y는 가로선입니다. Crosshair를 꺼도 tooltip과 mark 선택은 유지됩니다.'
    }
  },
  render: () => createChartShowcase([...(['x', 'y', 'both'] as const).map(direction => createCase(direction.toUpperCase(), \`crosshair.direction: \${direction}\`, {
    crosshair: {
      enabled: true,
      direction
    },
    tooltip: {
      enabled: true,
      snapDistance: 10
    }
  })), createCase('Disabled', '위치 가이드 없이 선택 데이터를 확인합니다.', {
    crosshair: {
      enabled: false
    },
    tooltip: {
      enabled: true,
      snapDistance: 10
    }
  })])
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Cartesian selection event',
  parameters: {
    storyHeader: {
      eyebrow: 'Selection events',
      title: '선택한 데이터를 Studio에 전달',
      description: 'hover tooltip과 별도로 클릭·키보드 선택의 datum, seriesId, key, source를 전달합니다. 아래 출력에서 원본 데이터 ID를 확인합니다.'
    }
  },
  render: () => createSelectionEvents(selection => ({
    paradigm: 'cartesian',
    type: 'bar',
    series: {
      id: 'traffic',
      encoding: {
        x: 'category',
        y: 'value'
      }
    },
    options: {
      selection,
      xAxis: {
        scale: 'category'
      },
      yAxis: {
        scale: 'linear',
        min: 0,
        max: 50
      },
      tooltip: {
        enabled: false
      }
    }
  }))
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Polar selection event',
  parameters: {
    storyHeader: {
      eyebrow: 'Selection events',
      title: 'Donut 조각 선택',
      description: '동일한 이벤트 계약으로 선택한 조각의 원본 데이터를 전달합니다. 중앙 빈 공간은 선택 대상이 아닙니다.'
    }
  },
  render: () => createSelectionEvents(selection => ({
    paradigm: 'polar',
    series: {
      id: 'traffic',
      encoding: {
        label: 'category',
        value: 'value'
      }
    },
    options: {
      selection,
      innerRadius: 0.55,
      tooltip: {
        enabled: false
      },
      legend: {
        visible: true
      }
    }
  }))
}`,...c.parameters?.docs?.source}}};const D=["HitTesting","TooltipContent","CrosshairDirections","CartesianEvents","PolarEvents"];export{i as CartesianEvents,o as CrosshairDirections,r as HitTesting,c as PolarEvents,s as TooltipContent,D as __namedExportsOrder,v as default};
