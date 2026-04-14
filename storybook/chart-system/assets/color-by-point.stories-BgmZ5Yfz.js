import{c,a as h,r as e,b as a}from"./story-utils-Bt4VoPGz.js";import"./chart-engine-Cd-FpfQK.js";import"./tooltip-plugin-CiIlC11d.js";import"./crosshair-plugin-7esPFCNd.js";import"./mock-data--NCvz5h5.js";const d={xAxisType:"category",series:[{key:"sales",label:"Sales",data:[{x:"Jan",y:120},{x:"Feb",y:180},{x:"Mar",y:150},{x:"Apr",y:210},{x:"May",y:190},{x:"Jun",y:250}]}]},l={xAxisType:"category",series:[{key:"revenue",label:"Revenue",data:[{x:"Q1",y:120},{x:"Q2",y:180},{x:"Q3",y:150},{x:"Q4",y:210}]},{key:"cost",label:"Cost",data:[{x:"Q1",y:80},{x:"Q2",y:110},{x:"Q3",y:95},{x:"Q4",y:130}]}]},u={xAxisType:"number",series:[{key:"points",label:"Measurements",data:[{x:10,y:45},{x:20,y:78},{x:30,y:56},{x:40,y:92},{x:50,y:67},{x:60,y:84},{x:70,y:71},{x:80,y:95}]}]},C={title:"Charts/Features/Color By Point",args:{...h},argTypes:{stacked:{control:"boolean",description:"Stack mode (bar)",table:{defaultValue:{summary:"false"}}},radius:{control:{type:"range",min:0,max:10,step:1},description:"Bar corner radius",table:{defaultValue:{summary:"0"}}},barWidth:{control:{type:"range",min:.2,max:1,step:.1},description:"Bar width ratio",table:{defaultValue:{summary:"0.8"}}},...c}},t={name:"Bar - Single Series",args:{stacked:!1,radius:4,barWidth:.8},render:r=>e("bar",d,{fitContainer:r.fitContainer,width:r.width,height:r.height,...a(r),colorByPoint:!0,bar:{stacked:r.stacked,radius:r.radius,barWidth:r.barWidth}})},n={name:"Bar - Color Palette",args:{stacked:!1,radius:4,barWidth:.8,colorPalette:"rose-confection"},render:r=>e("bar",d,{fitContainer:r.fitContainer,width:r.width,height:r.height,...a(r),colorByPoint:!0,bar:{stacked:r.stacked,radius:r.radius,barWidth:r.barWidth}})},i={name:"Bar - Inverted (Horizontal)",args:{stacked:!1,radius:4,barWidth:.8,inverted:!0},render:r=>e("bar",d,{fitContainer:r.fitContainer,width:r.width,height:r.height,...a(r),colorByPoint:!0,bar:{stacked:r.stacked,radius:r.radius,barWidth:r.barWidth}})},s={name:"Bar - Multi Series (colorByPoint ignored per-series)",args:{stacked:!1,radius:2,barWidth:.8},render:r=>e("bar",l,{fitContainer:r.fitContainer,width:r.width,height:r.height,...a(r),colorByPoint:!0,bar:{stacked:r.stacked,radius:r.radius,barWidth:r.barWidth}})},o={name:"Scatter - Color By Point",args:{stacked:!1,radius:0,barWidth:.8},render:r=>e("scatter",u,{fitContainer:r.fitContainer,width:r.width,height:r.height,...a(r),colorByPoint:!0,scatter:{dotSize:6}})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Bar - Single Series',
  args: {
    stacked: false,
    radius: 4,
    barWidth: 0.8
  },
  render: args => renderChart('bar', SINGLE_SERIES_CATEGORY, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    colorByPoint: true,
    bar: {
      stacked: args.stacked,
      radius: args.radius,
      barWidth: args.barWidth
    }
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Bar - Color Palette',
  args: {
    stacked: false,
    radius: 4,
    barWidth: 0.8,
    colorPalette: 'rose-confection'
  },
  render: args => renderChart('bar', SINGLE_SERIES_CATEGORY, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    colorByPoint: true,
    bar: {
      stacked: args.stacked,
      radius: args.radius,
      barWidth: args.barWidth
    }
  })
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Bar - Inverted (Horizontal)',
  args: {
    stacked: false,
    radius: 4,
    barWidth: 0.8,
    inverted: true
  },
  render: args => renderChart('bar', SINGLE_SERIES_CATEGORY, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    colorByPoint: true,
    bar: {
      stacked: args.stacked,
      radius: args.radius,
      barWidth: args.barWidth
    }
  })
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Bar - Multi Series (colorByPoint ignored per-series)',
  args: {
    stacked: false,
    radius: 2,
    barWidth: 0.8
  },
  render: args => renderChart('bar', MULTI_SERIES_CATEGORY, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    colorByPoint: true,
    bar: {
      stacked: args.stacked,
      radius: args.radius,
      barWidth: args.barWidth
    }
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Scatter - Color By Point',
  args: {
    stacked: false,
    radius: 0,
    barWidth: 0.8
  },
  render: args => renderChart('scatter', SCATTER_DATA, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    colorByPoint: true,
    scatter: {
      dotSize: 6
    }
  })
}`,...o.parameters?.docs?.source}}};const S=["BarSingleSeries","BarWithPalette","BarInverted","BarMultiSeries","ScatterColorByPoint"];export{i as BarInverted,s as BarMultiSeries,t as BarSingleSeries,n as BarWithPalette,o as ScatterColorByPoint,S as __namedExportsOrder,C as default};
