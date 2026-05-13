import{c as t,d as n,f as s,g as i,r as o}from"./story-utils-CJT9BIct.js";import"./style-CugFjfBU.js";import"./option-to-id-BJrSKRCI.js";const y={xAxisType:"category",series:[{key:"orders",label:"Orders",seriesType:"bar",data:[{x:"Q1",y:320},{x:"Q2",y:410},{x:"Q3",y:380},{x:"Q4",y:520}]},{key:"cumulative",label:"Cumulative Revenue",seriesType:"area",opacity:.25,data:[{x:"Q1",y:320},{x:"Q2",y:730},{x:"Q3",y:1110},{x:"Q4",y:1630}]}]},d={xAxisType:"category",series:[{key:"revenue",label:"Revenue ($K)",seriesType:"bar",data:[{x:"Q1",y:520},{x:"Q2",y:610},{x:"Q3",y:580},{x:"Q4",y:720}]},{key:"growth",label:"Growth (%)",seriesType:"line",data:[{x:"Q1",y:12},{x:"Q2",y:17},{x:"Q3",y:-5},{x:"Q4",y:24}]}]},m={xAxisType:"category",series:[{key:"sales",label:"Sales",seriesType:"bar",data:[{x:"Jan",y:150},{x:"Feb",y:200},{x:"Mar",y:180},{x:"Apr",y:240},{x:"May",y:220},{x:"Jun",y:280}]},{key:"forecast",label:"Forecast",seriesType:"area",opacity:.2,data:[{x:"Jan",y:140},{x:"Feb",y:190},{x:"Mar",y:175},{x:"Apr",y:230},{x:"May",y:210},{x:"Jun",y:270}]},{key:"target",label:"Target",seriesType:"line",data:[{x:"Jan",y:160},{x:"Feb",y:180},{x:"Mar",y:200},{x:"Apr",y:220},{x:"May",y:240},{x:"Jun",y:260}]}]},u={title:"Chart Types/Combo",args:{...t},argTypes:{barRadius:{control:{type:"range",min:0,max:10,step:1},description:"바 모서리 라운딩",table:{defaultValue:{summary:"0"},category:"Bar"}},barWidth:{control:{type:"range",min:.2,max:1,step:.1},description:"바 너비 비율",table:{defaultValue:{summary:"0.8"},category:"Bar"}},lineWidth:{control:{type:"range",min:1,max:5,step:.5},description:"선 두께",table:{defaultValue:{summary:"2"},category:"Line"}},dots:{control:"boolean",description:"라인 데이터 포인트 표시",table:{defaultValue:{summary:"true"},category:"Line"}},...n}},a={parameters:{controls:{disable:!0}},render:e=>o([{type:"combo",data:y,options:{frameTheme:e.frameTheme,bar:{radius:2},line:{curve:"smooth"},area:{opacity:.25}},label:"Bar + Area"},{type:"combo",data:m,options:{frameTheme:e.frameTheme,bar:{radius:2},line:{curve:"smooth",dots:!0},area:{opacity:.2}},label:"Bar + Area + Line"}],{columns:2,cardHeight:280,hideDataSummary:!0})},r={args:{...t,barRadius:2,barWidth:.8,lineWidth:2,dots:!0,width:700,yAxis2SeriesKeys:"growth",yAxis2Title:"Growth (%)"},render:e=>s("combo",d,{...i(e),bar:{radius:e.barRadius,barWidth:e.barWidth},line:{width:e.lineWidth,dots:e.dots}},{fitContainer:e.fitContainer,width:e.width,height:e.height})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([{
    type: 'combo',
    data: COMBO_BAR_AREA,
    options: {
      frameTheme: args.frameTheme,
      bar: {
        radius: 2
      },
      line: {
        curve: 'smooth'
      },
      area: {
        opacity: 0.25
      }
    },
    label: 'Bar + Area'
  }, {
    type: 'combo',
    data: COMBO_THREE_TYPES,
    options: {
      frameTheme: args.frameTheme,
      bar: {
        radius: 2
      },
      line: {
        curve: 'smooth',
        dots: true
      },
      area: {
        opacity: 0.2
      }
    },
    label: 'Bar + Area + Line'
  }], {
    columns: 2,
    cardHeight: 280,
    hideDataSummary: true
  })
}`,...a.parameters?.docs?.source},description:{story:"Series-type combinations — Bar+Area / Bar+Area+Line (three types).",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    barRadius: 2,
    barWidth: 0.8,
    lineWidth: 2,
    dots: true,
    width: 700,
    yAxis2SeriesKeys: 'growth',
    yAxis2Title: 'Growth (%)'
  },
  render: args => renderChartSingle('combo', COMBO_DUAL_AXIS, {
    ...commonOptionsFrom(args),
    bar: {
      radius: args.barRadius,
      barWidth: args.barWidth
    },
    line: {
      width: args.lineWidth,
      dots: args.dots
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...r.parameters?.docs?.source},description:{story:"Combo의 대표 시나리오 -- Revenue(bar) + Growth(line) dual-Y axis.",...r.parameters?.docs?.description}}};const h=["SeriesTypeMixes","DualYAxis"];export{r as DualYAxis,a as SeriesTypeMixes,h as __namedExportsOrder,u as default};
