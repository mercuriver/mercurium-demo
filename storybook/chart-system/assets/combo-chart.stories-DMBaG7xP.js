import{a as s,c as o,r as i,b as n}from"./story-utils-DPJnPqbZ.js";import"./chart-engine-BdkGv5ec.js";import"./tooltip-plugin-DmLF6MzB.js";import"./crosshair-plugin-DmSVPU7d.js";import"./mock-data-DLH8EjXc.js";const d={xAxisType:"category",series:[{key:"orders",label:"Orders",seriesType:"bar",data:[{x:"Q1",y:320},{x:"Q2",y:410},{x:"Q3",y:380},{x:"Q4",y:520}]},{key:"cumulative",label:"Cumulative Revenue",seriesType:"area",opacity:.25,data:[{x:"Q1",y:320},{x:"Q2",y:730},{x:"Q3",y:1110},{x:"Q4",y:1630}]}]},h={xAxisType:"category",series:[{key:"revenue",label:"Revenue ($K)",seriesType:"bar",data:[{x:"Q1",y:520},{x:"Q2",y:610},{x:"Q3",y:580},{x:"Q4",y:720}]},{key:"growth",label:"Growth (%)",seriesType:"line",data:[{x:"Q1",y:12},{x:"Q2",y:17},{x:"Q3",y:-5},{x:"Q4",y:24}]}]},y={xAxisType:"category",series:[{key:"sales",label:"Sales",seriesType:"bar",data:[{x:"Jan",y:150},{x:"Feb",y:200},{x:"Mar",y:180},{x:"Apr",y:240},{x:"May",y:220},{x:"Jun",y:280}]},{key:"forecast",label:"Forecast",seriesType:"area",opacity:.2,data:[{x:"Jan",y:140},{x:"Feb",y:190},{x:"Mar",y:175},{x:"Apr",y:230},{x:"May",y:210},{x:"Jun",y:270}]},{key:"target",label:"Target",seriesType:"line",data:[{x:"Jan",y:160},{x:"Feb",y:180},{x:"Mar",y:200},{x:"Apr",y:220},{x:"May",y:240},{x:"Jun",y:260}]}]},p={title:"Charts/Types/Combo",args:{...s},argTypes:{barRadius:{control:{type:"range",min:0,max:10,step:1},description:"바 모서리 라운딩",table:{defaultValue:{summary:"0"},category:"Bar"}},barWidth:{control:{type:"range",min:.2,max:1,step:.1},description:"바 너비 비율",table:{defaultValue:{summary:"0.8"},category:"Bar"}},lineWidth:{control:{type:"range",min:1,max:5,step:.5},description:"선 두께",table:{defaultValue:{summary:"2"},category:"Line"}},dots:{control:"boolean",description:"라인 데이터 포인트 표시",table:{defaultValue:{summary:"true"},category:"Line"}},...o}},r={args:{barRadius:2,barWidth:.8,lineWidth:2,dots:!1},render:e=>i("combo",d,{fitContainer:e.fitContainer,width:e.width,height:e.height,...n(e),bar:{radius:e.barRadius,barWidth:e.barWidth},line:{width:e.lineWidth,curve:"smooth"},area:{opacity:.25}})},a={args:{barRadius:2,barWidth:.8,lineWidth:2,dots:!0},render:e=>i("combo",y,{fitContainer:e.fitContainer,width:e.width,height:e.height,...n(e),bar:{radius:e.barRadius,barWidth:e.barWidth},line:{width:e.lineWidth,dots:e.dots,curve:"smooth"},area:{opacity:.2}})},t={args:{...s,barRadius:2,barWidth:.8,lineWidth:2,dots:!0,width:700,yAxis2SeriesKeys:"growth",yAxis2Label:"Growth (%)"},render:e=>i("combo",h,{fitContainer:e.fitContainer,width:e.width,height:e.height,...n(e),bar:{radius:e.barRadius,barWidth:e.barWidth},line:{width:e.lineWidth,dots:e.dots}})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    barRadius: 2,
    barWidth: 0.8,
    lineWidth: 2,
    dots: false
  },
  render: args => renderChart('combo', COMBO_BAR_AREA, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    bar: {
      radius: args.barRadius,
      barWidth: args.barWidth
    },
    line: {
      width: args.lineWidth,
      curve: 'smooth'
    },
    area: {
      opacity: 0.25
    }
  })
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    barRadius: 2,
    barWidth: 0.8,
    lineWidth: 2,
    dots: true
  },
  render: args => renderChart('combo', COMBO_THREE_TYPES, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    bar: {
      radius: args.barRadius,
      barWidth: args.barWidth
    },
    line: {
      width: args.lineWidth,
      dots: args.dots,
      curve: 'smooth'
    },
    area: {
      opacity: 0.2
    }
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    barRadius: 2,
    barWidth: 0.8,
    lineWidth: 2,
    dots: true,
    width: 700,
    yAxis2SeriesKeys: 'growth',
    yAxis2Label: 'Growth (%)'
  },
  render: args => renderChart('combo', COMBO_DUAL_AXIS, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    bar: {
      radius: args.barRadius,
      barWidth: args.barWidth
    },
    line: {
      width: args.lineWidth,
      dots: args.dots
    }
  })
}`,...t.parameters?.docs?.source}}};const x=["BarAndArea","ThreeTypes","DualYAxis"];export{r as BarAndArea,t as DualYAxis,a as ThreeTypes,x as __namedExportsOrder,p as default};
