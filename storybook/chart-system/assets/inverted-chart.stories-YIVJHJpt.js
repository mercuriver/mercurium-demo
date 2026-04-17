import{a as u,c as l,r as e,b as t}from"./story-utils-DPJnPqbZ.js";import{C as g,k as C,d as m,b as p}from"./mock-data-DLH8EjXc.js";import"./chart-engine-BdkGv5ec.js";import"./tooltip-plugin-DmLF6MzB.js";import"./crosshair-plugin-DmSVPU7d.js";const A={title:"Charts/Features/Inverted",args:{...u,inverted:!0},argTypes:{stacked:{control:"boolean",description:"스택 모드 (bar/area)",table:{defaultValue:{summary:"false"}}},radius:{control:{type:"range",min:0,max:10,step:1},description:"bar 모서리 라운딩",table:{defaultValue:{summary:"0"}}},barWidth:{control:{type:"range",min:.2,max:1,step:.1},description:"bar 너비 비율",table:{defaultValue:{summary:"0.8"}}},...l}},a={args:{inverted:!0,stacked:!1,radius:2,barWidth:.8},render:r=>e("bar",g,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t(r),bar:{stacked:r.stacked,radius:r.radius,barWidth:r.barWidth}})},n={args:{inverted:!0,stacked:!0,radius:0,barWidth:.8},render:r=>e("bar",g,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t(r),bar:{stacked:r.stacked,radius:r.radius,barWidth:r.barWidth}})},i={args:{inverted:!0,stacked:!1,radius:4,barWidth:.6},render:r=>e("bar",C,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t(r),bar:{stacked:r.stacked,radius:r.radius,barWidth:r.barWidth}})},s={args:{inverted:!0,stacked:!1,radius:0,barWidth:.8},render:r=>e("line",m,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t(r),line:{dots:!0,width:2}})},o={args:{inverted:!0,stacked:!1,radius:0,barWidth:.8},render:r=>e("area",m,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t(r),area:{opacity:.3,stacked:!1}})},d={args:{inverted:!0,stacked:!1,radius:0,barWidth:.8},render:r=>e("scatter",m,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t(r),scatter:{dotSize:5}})},h={args:{...u,inverted:!0,curve:"linear",showDots:!0,width:700,height:450,yAxis2SeriesKeys:"margin",yAxis2Label:"Profit Margin (%)",showCrosshair:!0,crosshairType:"both",tooltipShared:!0},render:r=>e("line",p,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t(r),line:{curve:r.curve,dots:r.showDots}})},c={args:{...u,inverted:!0,width:700,height:450,yAxis2SeriesKeys:"margin",yAxis2Label:"Profit Margin (%)",showCrosshair:!0,crosshairType:"both",tooltipShared:!0},render:r=>e("bar",p,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t(r)})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    inverted: true,
    stacked: false,
    radius: 2,
    barWidth: 0.8
  },
  render: args => renderChart('bar', CATEGORY_MULTI_SERIES, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    bar: {
      stacked: args.stacked,
      radius: args.radius,
      barWidth: args.barWidth
    }
  })
}`,...a.parameters?.docs?.source},description:{story:"수평 bar 차트: inverted=true로 카테고리 bar를 가로로 렌더링",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    inverted: true,
    stacked: true,
    radius: 0,
    barWidth: 0.8
  },
  render: args => renderChart('bar', CATEGORY_MULTI_SERIES, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    bar: {
      stacked: args.stacked,
      radius: args.radius,
      barWidth: args.barWidth
    }
  })
}`,...n.parameters?.docs?.source},description:{story:"수평 stacked bar 차트",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    inverted: true,
    stacked: false,
    radius: 4,
    barWidth: 0.6
  },
  render: args => renderChart('bar', CATEGORY_BASIC, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    bar: {
      stacked: args.stacked,
      radius: args.radius,
      barWidth: args.barWidth
    }
  })
}`,...i.parameters?.docs?.source},description:{story:"단일 시리즈 수평 bar",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    inverted: true,
    stacked: false,
    radius: 0,
    barWidth: 0.8
  },
  render: args => renderChart('line', NUMERIC_BASIC, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    line: {
      dots: true,
      width: 2
    }
  })
}`,...s.parameters?.docs?.source},description:{story:"inverted line 차트: 데이터가 세로축으로 전개",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    inverted: true,
    stacked: false,
    radius: 0,
    barWidth: 0.8
  },
  render: args => renderChart('area', NUMERIC_BASIC, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    area: {
      opacity: 0.3,
      stacked: false
    }
  })
}`,...o.parameters?.docs?.source},description:{story:"inverted area 차트",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    inverted: true,
    stacked: false,
    radius: 0,
    barWidth: 0.8
  },
  render: args => renderChart('scatter', NUMERIC_BASIC, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    scatter: {
      dotSize: 5
    }
  })
}`,...d.parameters?.docs?.source},description:{story:"inverted scatter 차트",...d.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    inverted: true,
    curve: 'linear',
    showDots: true,
    width: 700,
    height: 450,
    yAxis2SeriesKeys: 'margin',
    yAxis2Label: 'Profit Margin (%)',
    showCrosshair: true,
    crosshairType: 'both',
    tooltipShared: true
  },
  render: args => renderChart('line', DUAL_AXIS_CATEGORY, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.showDots
    }
  })
}`,...h.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    inverted: true,
    width: 700,
    height: 450,
    yAxis2SeriesKeys: 'margin',
    yAxis2Label: 'Profit Margin (%)',
    showCrosshair: true,
    crosshairType: 'both',
    tooltipShared: true
  },
  render: args => renderChart('bar', DUAL_AXIS_CATEGORY, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args)
  })
}`,...c.parameters?.docs?.source}}};const k=["HorizontalBar","HorizontalStackedBar","HorizontalBarSingle","InvertedLine","InvertedArea","InvertedScatter","InvertedLineDualYAxis","InvertedBarDualYAxis"];export{a as HorizontalBar,i as HorizontalBarSingle,n as HorizontalStackedBar,o as InvertedArea,c as InvertedBarDualYAxis,s as InvertedLine,h as InvertedLineDualYAxis,d as InvertedScatter,k as __namedExportsOrder,A as default};
