import{c as T}from"./chart-story-content-DqL3FnFI.js";import{b as a,c as r}from"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const g=100,h=864e5,t={CONTAINER:"Container",X_AXIS:"X axis",Y_AXIS:"Y axis"},b=Array.from({length:g},(e,n)=>({amount:Math.round(2400+n*38+Math.sin(n/6)*520),cohort:`${1900+Math.floor(n/10)*10}s`,date:new Date(Date.UTC(2026,0,1)+n*h),rate:Math.round((42+Math.sin(n/8)*26+n*.2)*10)/10,traffic:10**(1+n/(g-1)*4)})),O={title:"Features/Axes and Grid",args:{height:420,width:800,xAxisOpposite:!1,xAxisShowFirst:!0,xAxisShowLast:!0,xAxisTickCount:8,xAxisTickStrategy:a.AUTO,xAxisTitleAlignment:r.CENTER,xAxisTitle:"Date (Asia/Seoul)",xAxisTitleText:"Date (Asia/Seoul)",xAxisVisible:!0,yAxisOpposite:!1,yAxisTickCount:6,yAxisTickStrategy:a.AUTO,yAxisTitleAlignment:r.CENTER,yAxisTitle:"Amount",yAxisTitleText:"Amount",yAxisVisible:!0},argTypes:{height:{control:{max:720,min:220,step:20,type:"range"},name:"container.height",table:{category:t.CONTAINER}},width:{control:{max:1080,min:280,step:20,type:"range"},name:"container.width",table:{category:t.CONTAINER}},xAxisVisible:{control:"boolean",name:"xAxis.visible",table:{category:t.X_AXIS}},xAxisOpposite:{control:"boolean",name:"xAxis.opposite",table:{category:t.X_AXIS}},xAxisTickCount:{control:{max:24,min:1,step:1,type:"range"},name:"xAxis.ticks.count",table:{category:t.X_AXIS}},xAxisTickStrategy:{control:"select",name:"xAxis.ticks.strategy",options:Object.values(a),table:{category:t.X_AXIS}},xAxisShowFirst:{control:"boolean",name:"xAxis.labels.showFirst",table:{category:t.X_AXIS}},xAxisShowLast:{control:"boolean",name:"xAxis.labels.showLast",table:{category:t.X_AXIS}},xAxisTitleText:{control:"text",name:"xAxis.title.text",table:{category:t.X_AXIS}},xAxisTitle:{control:"text",name:"xAxis.title",table:{category:t.X_AXIS}},xAxisTitleAlignment:{control:"select",name:"xAxis.title.alignment",options:Object.values(r),table:{category:t.X_AXIS}},xAxisTitleOffset:{control:{max:120,min:0,step:1,type:"number"},name:"xAxis.title.offset",table:{category:t.X_AXIS}},yAxisVisible:{control:"boolean",name:"yAxis.visible",table:{category:t.Y_AXIS}},yAxisOpposite:{control:"boolean",name:"yAxis.opposite",table:{category:t.Y_AXIS}},yAxisTickCount:{control:{max:24,min:1,step:1,type:"range"},name:"yAxis.ticks.count",table:{category:t.Y_AXIS}},yAxisTickStrategy:{control:"select",name:"yAxis.ticks.strategy",options:Object.values(a),table:{category:t.Y_AXIS}},yAxisTitleText:{control:"text",name:"yAxis.title.text",table:{category:t.Y_AXIS}},yAxisTitle:{control:"text",name:"yAxis.title",table:{category:t.Y_AXIS}},yAxisTitleAlignment:{control:"select",name:"yAxis.title.alignment",options:Object.values(r),table:{category:t.Y_AXIS}},yAxisTitleOffset:{control:{max:160,min:0,step:1,type:"number"},name:"yAxis.title.offset",table:{category:t.Y_AXIS}}},parameters:{controls:{sort:"none"}}},s=(e,n,u={encoding:{x:"date",y:"amount"},id:"amount",name:"Amount"})=>T({height:e.height,initialization:{data:b,theme:{font:{family:"Inter, ui-sans-serif, system-ui, sans-serif",size:12}},view:{options:n,paradigm:"cartesian",series:u}},summary:`${g} rows · ${e.width} × ${e.height}px`,width:e.width}),i={accessibility:{label:"Daily amount chart"},margin:12,padding:8,time:{timezone:"Asia/Seoul"},xAxis:{scale:"time",ticks:{count:8},title:"Date (Asia/Seoul)"},yAxis:{labels:{thousandsSeparator:!0,valueDecimals:0,valuePrefix:"$"},scale:"linear",ticks:{count:6},title:"Amount"}},p=e=>({...i,xAxis:{...i.xAxis,opposite:e.xAxisOpposite,ticks:{count:e.xAxisTickCount,strategy:e.xAxisTickStrategy},title:e.xAxisTitle,visible:e.xAxisVisible},yAxis:{...i.yAxis,opposite:e.yAxisOpposite,ticks:{count:e.yAxisTickCount,strategy:e.yAxisTickStrategy},title:e.yAxisTitle,visible:e.yAxisVisible}}),o={name:"기본 nice ticks",parameters:{controls:{include:["container.height","container.width","xAxis.visible","xAxis.opposite","xAxis.ticks.count","xAxis.ticks.strategy","xAxis.title","yAxis.visible","yAxis.opposite","yAxis.ticks.count","yAxis.ticks.strategy","yAxis.title"]},storyHeader:{description:"기본 auto 전략은 ticks.count를 목표값으로 사용하고, 읽기 좋은 간격과 경계로 domain을 확장합니다. Controls에서 count 전략과 직접 비교할 수 있습니다.",eyebrow:"Tick strategy · auto",title:"읽기 좋은 간격을 우선하는 nice ticks"}},render:e=>s(e,p(e))},c={name:"정확한 tick count",args:{xAxisTickStrategy:a.COUNT,yAxisTickStrategy:a.COUNT},parameters:{controls:{include:["container.height","container.width","xAxis.ticks.count","yAxis.ticks.count"]},storyHeader:{description:"count 전략은 관측 domain을 유지한 채 요청한 개수의 tick을 균등 생성합니다. 데이터 경계를 반드시 보존해야 하는 화면에서 사용합니다.",eyebrow:"Tick strategy · count",title:"요청 개수를 정확히 따르는 ticks"}},render:e=>s(e,p(e))},l={name:"첫·마지막 label",args:{xAxisShowFirst:!1,xAxisShowLast:!1},parameters:{controls:{include:["container.height","container.width","xAxis.labels.showFirst","xAxis.labels.showLast"]},storyHeader:{description:"showFirst와 showLast는 양 끝 label만 숨기며 tick과 grid line은 유지합니다. 경계에 별도 annotation이나 여백이 있는 구성을 확인할 수 있습니다.",eyebrow:"Axis label policy",title:"축 양 끝 레이블 표시 정책"}},render:e=>s(e,{...i,accessibility:{label:"Category axis with configurable endpoint labels"},xAxis:{labels:{showFirst:e.xAxisShowFirst,showLast:e.xAxisShowLast},scale:"category",ticks:{count:10,strategy:"count"},title:{text:"Birth decade"}}},[{encoding:{x:"cohort",y:"amount"},id:"amount",name:"Amount"}])},x={name:"축 Title 객체 옵션",parameters:{controls:{include:["container.height","container.width","xAxis.title.text","xAxis.title.alignment","xAxis.title.offset","yAxis.title.text","yAxis.title.alignment","yAxis.title.offset"]},storyHeader:{description:"축 title을 객체로 전달하여 text와 alignment를 제어하고, offset을 생략하면 실제 tick label 크기로 자동 간격을 계산합니다.",eyebrow:"Axis title options",title:"축 Title 객체와 자동 간격"}},render:e=>s(e,{...i,xAxis:{...i.xAxis,title:{alignment:e.xAxisTitleAlignment,text:e.xAxisTitleText,...e.xAxisTitleOffset===void 0?{}:{offset:e.xAxisTitleOffset}}},yAxis:{...i.yAxis,labels:{...i.yAxis.labels,formatter:(n,{defaultLabel:u})=>`${u} total revenue`},title:{alignment:e.yAxisTitleAlignment,text:e.yAxisTitleText,...e.yAxisTitleOffset===void 0?{}:{offset:e.yAxisTitleOffset}}}})},A={name:"Y축 숨김",parameters:{controls:{include:["container.height","container.width"]},storyHeader:{description:"필수 Y축 계약은 유지하되 visible을 false로 지정하고, 10개 출생 연대 범주만 X축에 표현합니다.",eyebrow:"Axis visibility",title:"범주형 X축과 숨긴 Y축"}},render:e=>s(e,{...i,accessibility:{label:"Birth decade categories without a visible Y axis"},xAxis:{scale:"category",ticks:{count:10,strategy:"count"},title:{text:"Birth decade"}},yAxis:{scale:"linear",visible:!1}},[{encoding:{x:"cohort",y:"amount"},id:"income",name:"Income"}])},y={name:"이중 Y축",parameters:{controls:{include:["container.height","container.width"]},storyHeader:{description:"금액은 primary Y축, 0–100 비율은 명시적인 rate Y축에 매핑하여 좌우 축의 독립 범위와 포맷을 확인합니다.",eyebrow:"Multiple axes",title:"금액과 비율을 분리한 Y축"}},render:e=>s(e,{...i,accessibility:{label:"Amount and rate with two Y axes"},yAxis:[{labels:{thousandsSeparator:!0,valueDecimals:0,valuePrefix:"$"},scale:"linear",ticks:{count:6,strategy:"count"},title:{text:"Amount"}},{id:"rate-axis",labels:{valueDecimals:0,valueSuffix:"%"},max:100,min:0,opposite:!0,scale:"linear",ticks:{count:6,strategy:"count"},title:{text:"Rate"}}]},[{encoding:{x:"date",y:"amount"},id:"amount",name:"Amount"},{encoding:{x:"date",y:"rate"},id:"rate",name:"Rate",yAxisId:"rate-axis"}])},m={name:"좁은 시간축",args:{width:420},parameters:{controls:{include:["container.height","container.width"]},storyHeader:{description:"좁은 폭에서도 요청한 18개 grid tick은 유지하고, 겹치는 날짜 label만 균일한 간격으로 줄이는지 확인합니다.",eyebrow:"Responsive ticks",title:"밀집 시간 레이블 최적화"}},render:e=>s(e,{...i,xAxis:{...i.xAxis,ticks:{count:18,strategy:"count"}}})},d={name:"로그 Y축",parameters:{controls:{include:["container.height","container.width"]},storyHeader:{description:"10부터 100,000까지 증가하는 데이터를 로그 Y축에 배치하여 픽셀 간격과 숫자 formatter를 확인합니다.",eyebrow:"Axis scale",title:"넓은 범위의 로그 축"}},render:e=>s(e,{...i,accessibility:{label:"Traffic on a logarithmic Y axis"},yAxis:{labels:{thousandsSeparator:!0,valueDecimals:0},scale:"logarithmic",ticks:{count:5},title:{text:"Traffic"}}},[{encoding:{x:"date",y:"traffic"},id:"traffic",name:"Traffic"}])};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '기본 nice ticks',
  parameters: {
    controls: {
      include: ['container.height', 'container.width', 'xAxis.visible', 'xAxis.opposite', 'xAxis.ticks.count', 'xAxis.ticks.strategy', 'xAxis.title', 'yAxis.visible', 'yAxis.opposite', 'yAxis.ticks.count', 'yAxis.ticks.strategy', 'yAxis.title']
    },
    storyHeader: {
      description: '기본 auto 전략은 ticks.count를 목표값으로 사용하고, 읽기 좋은 간격과 경계로 domain을 확장합니다. Controls에서 count 전략과 직접 비교할 수 있습니다.',
      eyebrow: 'Tick strategy · auto',
      title: '읽기 좋은 간격을 우선하는 nice ticks'
    } satisfies StoryHeaderParameters
  },
  render: args => createAxisStoryContent(args, createConfiguredAxisOptions(args))
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '정확한 tick count',
  args: {
    xAxisTickStrategy: CARTESIAN_AXIS_TICK_STRATEGY.COUNT,
    yAxisTickStrategy: CARTESIAN_AXIS_TICK_STRATEGY.COUNT
  },
  parameters: {
    controls: {
      include: ['container.height', 'container.width', 'xAxis.ticks.count', 'yAxis.ticks.count']
    },
    storyHeader: {
      description: 'count 전략은 관측 domain을 유지한 채 요청한 개수의 tick을 균등 생성합니다. 데이터 경계를 반드시 보존해야 하는 화면에서 사용합니다.',
      eyebrow: 'Tick strategy · count',
      title: '요청 개수를 정확히 따르는 ticks'
    } satisfies StoryHeaderParameters
  },
  render: args => createAxisStoryContent(args, createConfiguredAxisOptions(args))
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '첫·마지막 label',
  args: {
    xAxisShowFirst: false,
    xAxisShowLast: false
  },
  parameters: {
    controls: {
      include: ['container.height', 'container.width', 'xAxis.labels.showFirst', 'xAxis.labels.showLast']
    },
    storyHeader: {
      description: 'showFirst와 showLast는 양 끝 label만 숨기며 tick과 grid line은 유지합니다. 경계에 별도 annotation이나 여백이 있는 구성을 확인할 수 있습니다.',
      eyebrow: 'Axis label policy',
      title: '축 양 끝 레이블 표시 정책'
    } satisfies StoryHeaderParameters
  },
  render: args => createAxisStoryContent(args, {
    ...DEFAULT_OPTIONS,
    accessibility: {
      label: 'Category axis with configurable endpoint labels'
    },
    xAxis: {
      labels: {
        showFirst: args.xAxisShowFirst,
        showLast: args.xAxisShowLast
      },
      scale: 'category',
      ticks: {
        count: 10,
        strategy: 'count'
      },
      title: {
        text: 'Birth decade'
      }
    }
  }, [{
    encoding: {
      x: 'cohort',
      y: 'amount'
    },
    id: 'amount',
    name: 'Amount'
  }])
}`,...l.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '축 Title 객체 옵션',
  parameters: {
    controls: {
      include: ['container.height', 'container.width', 'xAxis.title.text', 'xAxis.title.alignment', 'xAxis.title.offset', 'yAxis.title.text', 'yAxis.title.alignment', 'yAxis.title.offset']
    },
    storyHeader: {
      description: '축 title을 객체로 전달하여 text와 alignment를 제어하고, offset을 생략하면 실제 tick label 크기로 자동 간격을 계산합니다.',
      eyebrow: 'Axis title options',
      title: '축 Title 객체와 자동 간격'
    } satisfies StoryHeaderParameters
  },
  render: args => createAxisStoryContent(args, {
    ...DEFAULT_OPTIONS,
    xAxis: {
      ...DEFAULT_OPTIONS.xAxis,
      title: {
        alignment: args.xAxisTitleAlignment,
        text: args.xAxisTitleText,
        ...(args.xAxisTitleOffset === undefined ? {} : {
          offset: args.xAxisTitleOffset
        })
      }
    },
    yAxis: {
      ...DEFAULT_OPTIONS.yAxis,
      labels: {
        ...DEFAULT_OPTIONS.yAxis.labels,
        formatter: (_value, {
          defaultLabel
        }) => \`\${defaultLabel} total revenue\`
      },
      title: {
        alignment: args.yAxisTitleAlignment,
        text: args.yAxisTitleText,
        ...(args.yAxisTitleOffset === undefined ? {} : {
          offset: args.yAxisTitleOffset
        })
      }
    }
  })
}`,...x.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Y축 숨김',
  parameters: {
    controls: {
      include: ['container.height', 'container.width']
    },
    storyHeader: {
      description: '필수 Y축 계약은 유지하되 visible을 false로 지정하고, 10개 출생 연대 범주만 X축에 표현합니다.',
      eyebrow: 'Axis visibility',
      title: '범주형 X축과 숨긴 Y축'
    } satisfies StoryHeaderParameters
  },
  render: args => createAxisStoryContent(args, {
    ...DEFAULT_OPTIONS,
    accessibility: {
      label: 'Birth decade categories without a visible Y axis'
    },
    xAxis: {
      scale: 'category',
      ticks: {
        count: 10,
        strategy: 'count'
      },
      title: {
        text: 'Birth decade'
      }
    },
    yAxis: {
      scale: 'linear',
      visible: false
    }
  }, [{
    encoding: {
      x: 'cohort',
      y: 'amount'
    },
    id: 'income',
    name: 'Income'
  }])
}`,...A.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '이중 Y축',
  parameters: {
    controls: {
      include: ['container.height', 'container.width']
    },
    storyHeader: {
      description: '금액은 primary Y축, 0–100 비율은 명시적인 rate Y축에 매핑하여 좌우 축의 독립 범위와 포맷을 확인합니다.',
      eyebrow: 'Multiple axes',
      title: '금액과 비율을 분리한 Y축'
    } satisfies StoryHeaderParameters
  },
  render: args => createAxisStoryContent(args, {
    ...DEFAULT_OPTIONS,
    accessibility: {
      label: 'Amount and rate with two Y axes'
    },
    yAxis: [{
      labels: {
        thousandsSeparator: true,
        valueDecimals: 0,
        valuePrefix: '$'
      },
      scale: 'linear',
      ticks: {
        count: 6,
        strategy: 'count'
      },
      title: {
        text: 'Amount'
      }
    }, {
      id: 'rate-axis',
      labels: {
        valueDecimals: 0,
        valueSuffix: '%'
      },
      max: 100,
      min: 0,
      opposite: true,
      scale: 'linear',
      ticks: {
        count: 6,
        strategy: 'count'
      },
      title: {
        text: 'Rate'
      }
    }]
  }, [{
    encoding: {
      x: 'date',
      y: 'amount'
    },
    id: 'amount',
    name: 'Amount'
  }, {
    encoding: {
      x: 'date',
      y: 'rate'
    },
    id: 'rate',
    name: 'Rate',
    yAxisId: 'rate-axis'
  }])
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '좁은 시간축',
  args: {
    width: 420
  },
  parameters: {
    controls: {
      include: ['container.height', 'container.width']
    },
    storyHeader: {
      description: '좁은 폭에서도 요청한 18개 grid tick은 유지하고, 겹치는 날짜 label만 균일한 간격으로 줄이는지 확인합니다.',
      eyebrow: 'Responsive ticks',
      title: '밀집 시간 레이블 최적화'
    } satisfies StoryHeaderParameters
  },
  render: args => createAxisStoryContent(args, {
    ...DEFAULT_OPTIONS,
    xAxis: {
      ...DEFAULT_OPTIONS.xAxis,
      ticks: {
        count: 18,
        strategy: 'count'
      }
    }
  })
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '로그 Y축',
  parameters: {
    controls: {
      include: ['container.height', 'container.width']
    },
    storyHeader: {
      description: '10부터 100,000까지 증가하는 데이터를 로그 Y축에 배치하여 픽셀 간격과 숫자 formatter를 확인합니다.',
      eyebrow: 'Axis scale',
      title: '넓은 범위의 로그 축'
    } satisfies StoryHeaderParameters
  },
  render: args => createAxisStoryContent(args, {
    ...DEFAULT_OPTIONS,
    accessibility: {
      label: 'Traffic on a logarithmic Y axis'
    },
    yAxis: {
      labels: {
        thousandsSeparator: true,
        valueDecimals: 0
      },
      scale: 'logarithmic',
      ticks: {
        count: 5
      },
      title: {
        text: 'Traffic'
      }
    }
  }, [{
    encoding: {
      x: 'date',
      y: 'traffic'
    },
    id: 'traffic',
    name: 'Traffic'
  }])
}`,...d.parameters?.docs?.source}}};const I=["DefaultAxes","ExactTickCounts","EndpointLabels","AxisTitleOptions","HiddenYAxis","DualYAxes","DenseTimeTicks","LogarithmicYAxis"];export{x as AxisTitleOptions,o as DefaultAxes,m as DenseTimeTicks,y as DualYAxes,l as EndpointLabels,c as ExactTickCounts,A as HiddenYAxis,d as LogarithmicYAxis,I as __namedExportsOrder,O as default};
