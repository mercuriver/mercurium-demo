import{c as m,a as u,r as e,b as t}from"./story-utils-DuFC1K21.js";import{C as h,j as p,c}from"./mock-data--NCvz5h5.js";import"./chart-engine-BEaIKs5u.js";import"./tooltip-plugin-Bjs86Pni.js";import"./crosshair-plugin-DPAuNe78.js";const k={title:"Charts/Features/Inverted",args:{...u,inverted:!0},argTypes:{stacked:{control:"boolean",description:"스택 모드 (bar/area)",table:{defaultValue:{summary:"false"}}},radius:{control:{type:"range",min:0,max:10,step:1},description:"bar 모서리 라운딩",table:{defaultValue:{summary:"0"}}},barWidth:{control:{type:"range",min:.2,max:1,step:.1},description:"bar 너비 비율",table:{defaultValue:{summary:"0.8"}}},...m}},a={args:{inverted:!0,stacked:!1,radius:2,barWidth:.8},render:r=>e("bar",h,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t(r),bar:{stacked:r.stacked,radius:r.radius,barWidth:r.barWidth}})},n={args:{inverted:!0,stacked:!0,radius:0,barWidth:.8},render:r=>e("bar",h,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t(r),bar:{stacked:r.stacked,radius:r.radius,barWidth:r.barWidth}})},i={args:{inverted:!0,stacked:!1,radius:4,barWidth:.6},render:r=>e("bar",p,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t(r),bar:{stacked:r.stacked,radius:r.radius,barWidth:r.barWidth}})},s={args:{inverted:!0,stacked:!1,radius:0,barWidth:.8},render:r=>e("line",c,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t(r),line:{dots:!0,width:2}})},d={args:{inverted:!0,stacked:!1,radius:0,barWidth:.8},render:r=>e("area",c,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t(r),area:{opacity:.3,stacked:!1}})},o={args:{inverted:!0,stacked:!1,radius:0,barWidth:.8},render:r=>e("scatter",c,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t(r),scatter:{dotSize:5}})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"inverted line 차트: 데이터가 세로축으로 전개",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"inverted area 차트",...d.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"inverted scatter 차트",...o.parameters?.docs?.description}}};const w=["HorizontalBar","HorizontalStackedBar","HorizontalBarSingle","InvertedLine","InvertedArea","InvertedScatter"];export{a as HorizontalBar,i as HorizontalBarSingle,n as HorizontalStackedBar,d as InvertedArea,s as InvertedLine,o as InvertedScatter,w as __namedExportsOrder,k as default};
