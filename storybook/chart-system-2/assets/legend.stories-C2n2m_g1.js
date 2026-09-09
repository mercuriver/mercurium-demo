import{c as h}from"./chart-showcase-D6LVIqI-.js";import{c as b}from"./chart-story-content-DqL3FnFI.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const A={title:"Features/Interactions/Legend",parameters:{controls:{disable:!0}}},a={legend:{visible:!0},animation:{enabled:!0,duration:0,updateDuration:350}},u=e=>b({height:420,width:800,initialization:e,summary:"Legend buttons · click / Enter / Space · update animation"}),t=e=>({data:[{month:"Jan",current:28,previous:20},{month:"Feb",current:35,previous:29},{month:"Mar",current:31,previous:25},{month:"Apr",current:40,previous:30}],view:{paradigm:"cartesian",options:{...a,legend:e,padding:16,xAxis:{scale:"category"},yAxis:{scale:"linear",max:70}},series:[{id:"current",name:"Current",encoding:{x:"month",y:"current"}},{id:"previous",name:"Previous",encoding:{x:"month",y:"previous"}}]}}),m=e=>({data:Array.from({length:24},(i,n)=>({id:`segment-${n}`,label:`Subscription segment ${n+1} · annual plan`,value:5+n%7})),dataIdKey:"id",view:{paradigm:"polar",options:{...a,innerRadius:.55,legend:e},series:{id:"subscriptions",encoding:{label:"label",value:"value"}}}}),v=e=>({id:`service-${e}`,name:`Service ${e+1}`,encoding:{x:"week",y:`service-${e}`}}),y=e=>({data:Array.from({length:6},(i,n)=>({week:`Week ${n+1}`,...Object.fromEntries(Array.from({length:12},(x,g)=>[`service-${g}`,25+g*3+Math.sin(n+g/3)*8]))})),view:{paradigm:"cartesian",options:{...a,legend:e,padding:16,tooltip:{enabled:!0},xAxis:{scale:"category"},yAxis:{scale:"linear",min:0,max:70}},series:[v(0),...Array.from({length:11},(i,n)=>v(n+1))]}}),r={name:"Position and layout",parameters:{storyHeader:{eyebrow:"Legend presentation",title:"범례 공간과 항목 방향을 독립적으로 지정",description:"Outside는 graph 공간을 예약하고 Inside는 padding 안쪽의 graph 영역에 겹칩니다. Position은 배치 가장자리, layout은 항목 방향, alignment는 항목 방향의 정렬을 제어합니다."}},render:()=>h([{title:"Outside · top · horizontal",description:"alignment를 생략하면 중앙 정렬합니다.",initialization:t({})},{title:"Outside · right · vertical",description:"오른쪽 공간을 예약하고 항목은 위에서부터 쌓습니다.",initialization:t({position:"right",alignment:"start"})},{title:"Outside · top · vertical",description:"같은 상단 배치에서도 layout으로 세로 방향을 명시할 수 있습니다.",initialization:t({position:"top",layout:"vertical",size:76})},{title:"Inside · top · end",description:"Graph 크기를 유지하면서 내부 상단 오른쪽에 범례를 겹칩니다.",initialization:t({placement:"inside",alignment:"end"})}])},o={name:"Long labels and overflow",parameters:{storyHeader:{eyebrow:"Legend presentation",title:"많은 항목과 긴 이름도 탐색 가능한 범례",description:"Scroll은 한 줄 또는 한 열을 유지하고 Wrap은 남는 방향으로 줄을 늘립니다. 공간을 넘은 항목은 스크롤과 Tab으로 탐색합니다. 축약된 이름의 전체 텍스트는 마우스를 올리거나 보조 기술로 확인합니다."}},render:()=>h([{title:"One row · horizontal scroll",description:"기본 scroll · maxLabelWidth: 100 · toggle 후 초점과 스크롤 유지",initialization:m({maxLabelWidth:100})},{title:"Multiple rows · vertical scroll",description:"overflow: wrap · size: 104 · 레이아웃을 넘는 행은 스크롤",initialization:m({overflow:"wrap",maxLabelWidth:100,size:104})},{title:"One column · vertical scroll",description:"position: right · maxLabelWidth: 100 · 범례 영역도 키보드 초점 가능",initialization:m({position:"right",maxLabelWidth:100,size:160})}])},s={parameters:{storyHeader:{eyebrow:"Legend pagination",title:"스크롤 대신 페이지로 탐색하는 범례",description:"Paginate는 한 행 또는 한 열에 들어가는 항목을 페이지로 묶습니다. 공간을 넘을 때만 이전·다음 화살표와 현재/전체 페이지 수가 나타납니다. 현재 페이지의 항목을 토글해도 페이지와 초점을 유지하고, 페이지 밖 항목은 Tab 탐색에서 제외합니다."}},render:()=>h([{title:"Horizontal · twelve Cartesian series",description:"상단 한 행을 페이지로 나눕니다. 항목을 중간에서 자르지 않으며, 페이지를 넘겨 다른 계열도 숨기거나 복원할 수 있습니다.",height:360,initialization:y({overflow:"paginate",maxLabelWidth:100})},{title:"Vertical · long Donut labels",description:"오른쪽 한 열에 24개 조각을 나누어 표시합니다. 긴 이름은 축약하고 전체 이름은 마우스를 올리거나 보조 기술로 확인합니다.",height:360,initialization:m({overflow:"paginate",position:"right",maxLabelWidth:100,size:160})},{title:"Fits in one page · no controls",description:"같은 paginate 설정도 두 항목이 모두 들어가면 화살표와 페이지 수를 표시하지 않습니다. 화면 크기가 달라지면 페이지 구성을 다시 계산합니다.",height:320,initialization:t({overflow:"paginate"})}])},l={name:"Series membership",parameters:{storyHeader:{eyebrow:"Legend membership",title:"색상 지표가 있는 Heatmap은 범례에서 제외",description:"B 계열의 showInLegend: false는 범례 항목만 제외합니다. A와 C를 모두 토글해도 B의 셀·색상 지표·툴팁은 유지됩니다. 범례에서 제외해도 C의 palette 순서는 바뀌지 않습니다."}},render:()=>u({data:[{month:"Jan",current:28,previous:20,load:35,band:"Load"},{month:"Feb",current:35,previous:29,load:68,band:"Load"},{month:"Mar",current:31,previous:25,load:52,band:"Load"},{month:"Apr",current:40,previous:30,load:89,band:"Load"}],view:{paradigm:"cartesian",panels:{columns:1,items:[{id:"comparison",seriesIds:["current","previous"],title:"A / C · comparison"},{id:"load",seriesIds:["load"],title:"B · load with its own color indicator"}]},options:{...a,heatmap:{colorScale:{domain:{min:0,max:100},range:["#f0fdfa","#0f766e"]},indicator:{visible:!0,title:"Load",valueSuffix:"%"}},line:{dots:!0},xAxis:{scale:"category"},yAxis:[{id:"metric",scale:"linear",min:0,max:50},{id:"load-band",scale:"category"}]},series:[{id:"current",name:"A · Current",encoding:{x:"month",y:"current"}},{id:"load",name:"B · Load",showInLegend:!1,type:"heatmap",encoding:{x:"month",y:"band",value:"load"},yAxisId:"load-band"},{id:"previous",name:"C · Previous",encoding:{x:"month",y:"previous"}}]}})},d={name:"Cartesian stacks",parameters:{storyHeader:{eyebrow:"Legend visibility",title:"비교 축을 유지하며 누적 계열 숨기기",description:"표시된 범례는 기본으로 토글할 수 있습니다. 범례 버튼을 눌러 채널별 매출을 숨기거나 복원합니다. 원본 데이터와 축 범위·색상은 유지하고, 보이는 계열끼리 누적 위치를 다시 계산합니다."}},render:()=>u({data:[{month:"Jan",online:24,retail:18},{month:"Feb",online:40,retail:24},{month:"Mar",online:32,retail:28},{month:"Apr",online:48,retail:32}],view:{paradigm:"cartesian",options:{...a,xAxis:{scale:"category"},yAxis:{scale:"linear"},tooltip:{shared:!0}},series:[{id:"online",name:"Online",type:"area",stack:"sales",encoding:{x:"month",y:"online"}},{id:"retail",name:"Retail",type:"bar",stack:"sales",encoding:{x:"month",y:"retail"}}]}})},c={name:"Donut shares",parameters:{storyHeader:{eyebrow:"Legend visibility",title:"보이는 조각 기준으로 비율 재계산",description:"조각을 숨기면 나머지 조각이 원을 채우도록 다시 계산합니다. 전부 숨겨도 범례가 남아 복원할 수 있습니다. 데이터 ID를 지정하면 갱신 뒤에도 같은 항목의 숨김 상태를 유지합니다."}},render:()=>u({dataIdKey:"id",data:[{id:"a",label:"Web",value:45},{id:"b",label:"App",value:35},{id:"c",label:"Partner",value:20}],view:{paradigm:"polar",options:{...a,innerRadius:.5,tooltip:{enabled:!0},dataLabels:{visible:!0}},series:{id:"traffic",encoding:{label:"label",value:"value"}}}})},p={name:"Radar groups",parameters:{storyHeader:{eyebrow:"Legend visibility",title:"동일한 평가 축에서 그룹 비교",description:"릴리스별 Radar를 독립적으로 숨기고 복원합니다. 평가 축과 수치 범위는 유지되어 그룹 사이의 비교 기준이 바뀌지 않습니다."}},render:()=>u({data:["Reliability","Speed","Usability","Coverage","Efficiency"].flatMap((e,i)=>[{axis:e,group:"Current",value:[80,65,75,90,70][i]},{axis:e,group:"Next",value:[90,80,85,85,88][i]}]),view:{paradigm:"polar",type:"radar",series:{id:"scores",encoding:{axis:"axis",series:"group",value:"value"}},options:{...a,tooltip:{shared:!0},radialAxis:{min:0,max:100}}}})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Position and layout',
  parameters: {
    storyHeader: {
      eyebrow: 'Legend presentation',
      title: '범례 공간과 항목 방향을 독립적으로 지정',
      description: 'Outside는 graph 공간을 예약하고 Inside는 padding 안쪽의 graph 영역에 겹칩니다. Position은 배치 가장자리, layout은 항목 방향, alignment는 항목 방향의 정렬을 제어합니다.'
    }
  },
  render: () => createChartShowcase([{
    title: 'Outside · top · horizontal',
    description: 'alignment를 생략하면 중앙 정렬합니다.',
    initialization: createPlacementExample({})
  }, {
    title: 'Outside · right · vertical',
    description: '오른쪽 공간을 예약하고 항목은 위에서부터 쌓습니다.',
    initialization: createPlacementExample({
      position: 'right',
      alignment: 'start'
    })
  }, {
    title: 'Outside · top · vertical',
    description: '같은 상단 배치에서도 layout으로 세로 방향을 명시할 수 있습니다.',
    initialization: createPlacementExample({
      position: 'top',
      layout: 'vertical',
      size: 76
    })
  }, {
    title: 'Inside · top · end',
    description: 'Graph 크기를 유지하면서 내부 상단 오른쪽에 범례를 겹칩니다.',
    initialization: createPlacementExample({
      placement: 'inside',
      alignment: 'end'
    })
  }])
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Long labels and overflow',
  parameters: {
    storyHeader: {
      eyebrow: 'Legend presentation',
      title: '많은 항목과 긴 이름도 탐색 가능한 범례',
      description: 'Scroll은 한 줄 또는 한 열을 유지하고 Wrap은 남는 방향으로 줄을 늘립니다. 공간을 넘은 항목은 스크롤과 Tab으로 탐색합니다. 축약된 이름의 전체 텍스트는 마우스를 올리거나 보조 기술로 확인합니다.'
    }
  },
  render: () => createChartShowcase([{
    title: 'One row · horizontal scroll',
    description: '기본 scroll · maxLabelWidth: 100 · toggle 후 초점과 스크롤 유지',
    initialization: createOverflowExample({
      maxLabelWidth: 100
    })
  }, {
    title: 'Multiple rows · vertical scroll',
    description: 'overflow: wrap · size: 104 · 레이아웃을 넘는 행은 스크롤',
    initialization: createOverflowExample({
      overflow: 'wrap',
      maxLabelWidth: 100,
      size: 104
    })
  }, {
    title: 'One column · vertical scroll',
    description: 'position: right · maxLabelWidth: 100 · 범례 영역도 키보드 초점 가능',
    initialization: createOverflowExample({
      position: 'right',
      maxLabelWidth: 100,
      size: 160
    })
  }])
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Legend pagination',
      title: '스크롤 대신 페이지로 탐색하는 범례',
      description: 'Paginate는 한 행 또는 한 열에 들어가는 항목을 페이지로 묶습니다. 공간을 넘을 때만 이전·다음 화살표와 현재/전체 페이지 수가 나타납니다. 현재 페이지의 항목을 토글해도 페이지와 초점을 유지하고, 페이지 밖 항목은 Tab 탐색에서 제외합니다.'
    }
  },
  render: () => createChartShowcase([{
    title: 'Horizontal · twelve Cartesian series',
    description: '상단 한 행을 페이지로 나눕니다. 항목을 중간에서 자르지 않으며, 페이지를 넘겨 다른 계열도 숨기거나 복원할 수 있습니다.',
    height: 360,
    initialization: createManySeriesExample({
      overflow: 'paginate',
      maxLabelWidth: 100
    })
  }, {
    title: 'Vertical · long Donut labels',
    description: '오른쪽 한 열에 24개 조각을 나누어 표시합니다. 긴 이름은 축약하고 전체 이름은 마우스를 올리거나 보조 기술로 확인합니다.',
    height: 360,
    initialization: createOverflowExample({
      overflow: 'paginate',
      position: 'right',
      maxLabelWidth: 100,
      size: 160
    })
  }, {
    title: 'Fits in one page · no controls',
    description: '같은 paginate 설정도 두 항목이 모두 들어가면 화살표와 페이지 수를 표시하지 않습니다. 화면 크기가 달라지면 페이지 구성을 다시 계산합니다.',
    height: 320,
    initialization: createPlacementExample({
      overflow: 'paginate'
    })
  }])
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Series membership',
  parameters: {
    storyHeader: {
      eyebrow: 'Legend membership',
      title: '색상 지표가 있는 Heatmap은 범례에서 제외',
      description: 'B 계열의 showInLegend: false는 범례 항목만 제외합니다. A와 C를 모두 토글해도 B의 셀·색상 지표·툴팁은 유지됩니다. 범례에서 제외해도 C의 palette 순서는 바뀌지 않습니다.'
    }
  },
  render: () => renderChart({
    data: [{
      month: 'Jan',
      current: 28,
      previous: 20,
      load: 35,
      band: 'Load'
    }, {
      month: 'Feb',
      current: 35,
      previous: 29,
      load: 68,
      band: 'Load'
    }, {
      month: 'Mar',
      current: 31,
      previous: 25,
      load: 52,
      band: 'Load'
    }, {
      month: 'Apr',
      current: 40,
      previous: 30,
      load: 89,
      band: 'Load'
    }],
    view: {
      paradigm: 'cartesian',
      panels: {
        columns: 1,
        items: [{
          id: 'comparison',
          seriesIds: ['current', 'previous'],
          title: 'A / C · comparison'
        }, {
          id: 'load',
          seriesIds: ['load'],
          title: 'B · load with its own color indicator'
        }]
      },
      options: {
        ...COMMON,
        heatmap: {
          colorScale: {
            domain: {
              min: 0,
              max: 100
            },
            range: ['#f0fdfa', '#0f766e']
          },
          indicator: {
            visible: true,
            title: 'Load',
            valueSuffix: '%'
          }
        },
        line: {
          dots: true
        },
        xAxis: {
          scale: 'category'
        },
        yAxis: [{
          id: 'metric',
          scale: 'linear',
          min: 0,
          max: 50
        }, {
          id: 'load-band',
          scale: 'category'
        }]
      },
      series: [{
        id: 'current',
        name: 'A · Current',
        encoding: {
          x: 'month',
          y: 'current'
        }
      }, {
        id: 'load',
        name: 'B · Load',
        showInLegend: false,
        type: 'heatmap',
        encoding: {
          x: 'month',
          y: 'band',
          value: 'load'
        },
        yAxisId: 'load-band'
      }, {
        id: 'previous',
        name: 'C · Previous',
        encoding: {
          x: 'month',
          y: 'previous'
        }
      }]
    }
  })
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Cartesian stacks',
  parameters: {
    storyHeader: {
      eyebrow: 'Legend visibility',
      title: '비교 축을 유지하며 누적 계열 숨기기',
      description: '표시된 범례는 기본으로 토글할 수 있습니다. 범례 버튼을 눌러 채널별 매출을 숨기거나 복원합니다. 원본 데이터와 축 범위·색상은 유지하고, 보이는 계열끼리 누적 위치를 다시 계산합니다.'
    }
  },
  render: () => renderChart({
    data: [{
      month: 'Jan',
      online: 24,
      retail: 18
    }, {
      month: 'Feb',
      online: 40,
      retail: 24
    }, {
      month: 'Mar',
      online: 32,
      retail: 28
    }, {
      month: 'Apr',
      online: 48,
      retail: 32
    }],
    view: {
      paradigm: 'cartesian',
      options: {
        ...COMMON,
        xAxis: {
          scale: 'category'
        },
        yAxis: {
          scale: 'linear'
        },
        tooltip: {
          shared: true
        }
      },
      series: [{
        id: 'online',
        name: 'Online',
        type: 'area',
        stack: 'sales',
        encoding: {
          x: 'month',
          y: 'online'
        }
      }, {
        id: 'retail',
        name: 'Retail',
        type: 'bar',
        stack: 'sales',
        encoding: {
          x: 'month',
          y: 'retail'
        }
      }]
    }
  })
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Donut shares',
  parameters: {
    storyHeader: {
      eyebrow: 'Legend visibility',
      title: '보이는 조각 기준으로 비율 재계산',
      description: '조각을 숨기면 나머지 조각이 원을 채우도록 다시 계산합니다. 전부 숨겨도 범례가 남아 복원할 수 있습니다. 데이터 ID를 지정하면 갱신 뒤에도 같은 항목의 숨김 상태를 유지합니다.'
    }
  },
  render: () => renderChart({
    dataIdKey: 'id',
    data: [{
      id: 'a',
      label: 'Web',
      value: 45
    }, {
      id: 'b',
      label: 'App',
      value: 35
    }, {
      id: 'c',
      label: 'Partner',
      value: 20
    }],
    view: {
      paradigm: 'polar',
      options: {
        ...COMMON,
        innerRadius: 0.5,
        tooltip: {
          enabled: true
        },
        dataLabels: {
          visible: true
        }
      },
      series: {
        id: 'traffic',
        encoding: {
          label: 'label',
          value: 'value'
        }
      }
    }
  })
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Radar groups',
  parameters: {
    storyHeader: {
      eyebrow: 'Legend visibility',
      title: '동일한 평가 축에서 그룹 비교',
      description: '릴리스별 Radar를 독립적으로 숨기고 복원합니다. 평가 축과 수치 범위는 유지되어 그룹 사이의 비교 기준이 바뀌지 않습니다.'
    }
  },
  render: () => renderChart({
    data: ['Reliability', 'Speed', 'Usability', 'Coverage', 'Efficiency'].flatMap((axis, index) => [{
      axis,
      group: 'Current',
      value: [80, 65, 75, 90, 70][index]
    }, {
      axis,
      group: 'Next',
      value: [90, 80, 85, 85, 88][index]
    }]),
    view: {
      paradigm: 'polar',
      type: 'radar',
      series: {
        id: 'scores',
        encoding: {
          axis: 'axis',
          series: 'group',
          value: 'value'
        }
      },
      options: {
        ...COMMON,
        tooltip: {
          shared: true
        },
        radialAxis: {
          min: 0,
          max: 100
        }
      }
    }
  })
}`,...p.parameters?.docs?.source}}};const O=["PositionModes","OverflowModes","Pagination","SeriesMembership","CartesianToggle","DonutToggle","RadarToggle"];export{d as CartesianToggle,c as DonutToggle,o as OverflowModes,s as Pagination,r as PositionModes,p as RadarToggle,l as SeriesMembership,O as __namedExportsOrder,A as default};
