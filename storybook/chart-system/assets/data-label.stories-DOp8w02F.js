import{c as r,d as c,g as s,h as d,b as p,e as h}from"./story-utils-DFvoCd7a.js";const l={xAxisType:"number",series:[{key:"edge",label:"Edge Values",data:[{x:0,y:5},{x:1,y:95},{x:2,y:50},{x:3,y:10},{x:4,y:90},{x:5,y:3}]}]},u={xAxisType:"category",series:[{key:"sales",label:"Sales",data:[{x:"Jan",y:120},{x:"Feb",y:135},{x:"Mar",y:128},{x:"Apr",y:145},{x:"May",y:132},{x:"Jun",y:150}]}]},g={title:"Options/Data Label",args:{...r,showDataLabel:!0,dataLabelBackground:!0,chartType:"bar"},argTypes:{chartType:{control:"select",options:["line","bar","scatter"],description:"차트 유형",table:{defaultValue:{summary:"bar"},category:"Common"}},...c}},a={parameters:{controls:{disable:!0}},render:t=>h([{rotation:0,position:"top",label:"rotation 0 · top"},{rotation:-45,position:"top",label:"rotation -45 · top"},{rotation:-90,position:"top",label:"rotation -90 · top"},{rotation:0,position:"inside",label:"rotation 0 · inside"},{rotation:0,position:"bottom",label:"rotation 0 · bottom"},{rotation:45,position:"top",label:"rotation 45 · top"}].map(i=>({type:"bar",data:u,options:{frameTheme:t.frameTheme,dataLabel:{show:!0,rotation:i.rotation,position:i.position,background:!0}},label:i.label})),{columns:3,cardHeight:240,hideDataSummary:!0})},e={args:{...r,chartType:"line",showDataLabel:!0,dataLabelBackground:!0,dataLabelBorderRadius:8,dataLabelPadding:6},render:t=>s(t.chartType,l,{...d(t)},{fitContainer:t.fitContainer,width:t.width??600,height:t.height??360})},o={args:{...r,chartType:"line",showDataLabel:!0,dataLabelBackground:!0,dataLabelOverflow:"allow",dataLabelCrop:!0},render:t=>s(t.chartType,l,{...d(t)},{fitContainer:t.fitContainer,width:t.width??600,height:t.height??360})},n={name:"Dual Y-Axis + Data Labels",args:{...r,showDataLabel:!0,dataLabelBackground:!0,curve:"smooth",showDots:!0,width:700,yAxis2SeriesKeys:"margin",yAxis2Title:"Profit Margin (%)",tooltipShared:!0},render:t=>s("line",p,{...d(t),line:{curve:t.curve,dots:t.showDots}},{fitContainer:t.fitContainer,width:t.width,height:t.height})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([{
    rotation: 0,
    position: 'top' as const,
    label: 'rotation 0 · top'
  }, {
    rotation: -45,
    position: 'top' as const,
    label: 'rotation -45 · top'
  }, {
    rotation: -90,
    position: 'top' as const,
    label: 'rotation -90 · top'
  }, {
    rotation: 0,
    position: 'inside' as const,
    label: 'rotation 0 · inside'
  }, {
    rotation: 0,
    position: 'bottom' as const,
    label: 'rotation 0 · bottom'
  }, {
    rotation: 45,
    position: 'top' as const,
    label: 'rotation 45 · top'
  }].map(cfg => ({
    type: 'bar' as const,
    data: DENSE_DATA,
    options: {
      frameTheme: args.frameTheme,
      dataLabel: {
        show: true,
        rotation: cfg.rotation,
        position: cfg.position,
        background: true
      }
    },
    label: cfg.label
  })), {
    columns: 3,
    cardHeight: 240,
    hideDataSummary: true
  })
}`,...a.parameters?.docs?.source},description:{story:"Rotation × position — 라벨 회전 / 위치 조합.",...a.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    chartType: 'line',
    showDataLabel: true,
    dataLabelBackground: true,
    dataLabelBorderRadius: 8,
    dataLabelPadding: 6
  },
  render: args => renderChartSingle(args.chartType, EDGE_DATA, {
    ...commonOptionsFrom(args)
  }, {
    fitContainer: args.fitContainer,
    width: args.width ?? 600,
    height: args.height ?? 360
  })
}`,...e.parameters?.docs?.source},description:{story:"Background radius / padding controls -- 배경 배지 스타일 탐색.",...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    chartType: 'line',
    showDataLabel: true,
    dataLabelBackground: true,
    dataLabelOverflow: 'allow',
    dataLabelCrop: true
  },
  render: args => renderChartSingle(args.chartType, EDGE_DATA, {
    ...commonOptionsFrom(args)
  }, {
    fitContainer: args.fitContainer,
    width: args.width ?? 600,
    height: args.height ?? 360
  })
}`,...o.parameters?.docs?.source},description:{story:"Overflow / crop -- 경계 근처 라벨 처리. `dataLabelOverflow` + `dataLabelCrop` 조절.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Dual Y-Axis + Data Labels',
  args: {
    ...commonDefaults,
    showDataLabel: true,
    dataLabelBackground: true,
    curve: 'smooth',
    showDots: true,
    width: 700,
    yAxis2SeriesKeys: 'margin',
    yAxis2Title: 'Profit Margin (%)',
    tooltipShared: true
  },
  render: args => renderChartSingle('line', DUAL_AXIS_CATEGORY, {
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.showDots
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...n.parameters?.docs?.source}}};const b=["PositionAndRotation","BorderRadiusAndPadding","OverflowHandling","DualYAxisWithDataLabels"];export{e as BorderRadiusAndPadding,n as DualYAxisWithDataLabels,o as OverflowHandling,a as PositionAndRotation,b as __namedExportsOrder,g as default};
