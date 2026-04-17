import{a as n,c as l,r,b as e,d as p}from"./story-utils-DPJnPqbZ.js";import{r as s,B as t}from"./mock-data-DLH8EjXc.js";import"./chart-engine-BdkGv5ec.js";import"./tooltip-plugin-DmLF6MzB.js";import"./crosshair-plugin-DmSVPU7d.js";const y={title:"Charts/Types/Bar",args:{...n,dataset:"category-multi"},argTypes:{dataset:p(t),stacked:{control:"boolean",description:"스택 모드",table:{defaultValue:{summary:"false"}}},radius:{control:{type:"range",min:0,max:10,step:1},description:"모서리 라운딩",table:{defaultValue:{summary:"0"}}},barWidth:{control:{type:"range",min:.2,max:1,step:.1},description:"바 너비 비율",table:{defaultValue:{summary:"0.8"}}},...l}},i={args:{dataset:"category-basic",stacked:!1,radius:4,barWidth:.8},render:a=>r("bar",s(t,a.dataset),{fitContainer:a.fitContainer,width:a.width,height:a.height,...e(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}})},d={args:{dataset:"category-multi",stacked:!1,radius:2,barWidth:.8},render:a=>r("bar",s(t,a.dataset),{fitContainer:a.fitContainer,width:a.width,height:a.height,...e(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}})},o={args:{dataset:"category-multi",stacked:!0,radius:4,barWidth:.8},render:a=>r("bar",s(t,a.dataset),{fitContainer:a.fitContainer,width:a.width,height:a.height,...e(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}})},c={args:{...n,dataset:"dual-axis-category",stacked:!1,radius:0,barWidth:.8,width:700,yAxis2SeriesKeys:"margin",yAxis2Label:"Profit Margin (%)"},render:a=>r("bar",s(t,a.dataset),{fitContainer:a.fitContainer,width:a.width,height:a.height,...e(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}})},h={args:{dataset:"category-basic",stacked:!1,radius:8,barWidth:.8,colorPalette:"coral-sunset"},render:a=>r("bar",s(t,a.dataset),{fitContainer:a.fitContainer,width:a.width,height:a.height,...e(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}})},u={name:"Stacked + Dual Y-Axis",args:{...n,dataset:"dual-axis-category",stacked:!0,radius:2,barWidth:.8,width:700,yAxis2SeriesKeys:"margin",yAxis2Label:"Profit Margin (%)"},render:a=>r("bar",s(t,a.dataset),{fitContainer:a.fitContainer,width:a.width,height:a.height,...e(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}})},m={name:"Inverted + Grouped",args:{...n,dataset:"category-multi",stacked:!1,radius:2,barWidth:.8,inverted:!0},render:a=>r("bar",s(t,a.dataset),{fitContainer:a.fitContainer,width:a.width,height:a.height,...e(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}})},g={name:"Stacked + Data Labels",args:{...n,dataset:"category-multi",stacked:!0,radius:0,barWidth:.8,showDataLabel:!0,dataLabelBackground:!0},render:a=>r("bar",s(t,a.dataset),{fitContainer:a.fitContainer,width:a.width,height:a.height,...e(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}})},b={name:"Color By Point",args:{...n,dataset:"category-basic",stacked:!1,radius:4,barWidth:.8,colorByPoint:!0},render:a=>r("bar",s(t,a.dataset),{fitContainer:a.fitContainer,width:a.width,height:a.height,...e(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'category-basic',
    stacked: false,
    radius: 4,
    barWidth: 0.8
  },
  render: args => renderChart('bar', resolveDataset(BAR_DATASETS, args.dataset), {
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'category-multi',
    stacked: false,
    radius: 2,
    barWidth: 0.8
  },
  render: args => renderChart('bar', resolveDataset(BAR_DATASETS, args.dataset), {
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
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'category-multi',
    stacked: true,
    radius: 4,
    barWidth: 0.8
  },
  render: args => renderChart('bar', resolveDataset(BAR_DATASETS, args.dataset), {
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'dual-axis-category',
    stacked: false,
    radius: 0,
    barWidth: 0.8,
    width: 700,
    yAxis2SeriesKeys: 'margin',
    yAxis2Label: 'Profit Margin (%)'
  },
  render: args => renderChart('bar', resolveDataset(BAR_DATASETS, args.dataset), {
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
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'category-basic',
    stacked: false,
    radius: 8,
    barWidth: 0.8,
    colorPalette: 'coral-sunset'
  },
  render: args => renderChart('bar', resolveDataset(BAR_DATASETS, args.dataset), {
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
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Stacked + Dual Y-Axis',
  args: {
    ...commonDefaults,
    dataset: 'dual-axis-category',
    stacked: true,
    radius: 2,
    barWidth: 0.8,
    width: 700,
    yAxis2SeriesKeys: 'margin',
    yAxis2Label: 'Profit Margin (%)'
  },
  render: args => renderChart('bar', resolveDataset(BAR_DATASETS, args.dataset), {
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Inverted + Grouped',
  args: {
    ...commonDefaults,
    dataset: 'category-multi',
    stacked: false,
    radius: 2,
    barWidth: 0.8,
    inverted: true
  },
  render: args => renderChart('bar', resolveDataset(BAR_DATASETS, args.dataset), {
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Stacked + Data Labels',
  args: {
    ...commonDefaults,
    dataset: 'category-multi',
    stacked: true,
    radius: 0,
    barWidth: 0.8,
    showDataLabel: true,
    dataLabelBackground: true
  },
  render: args => renderChart('bar', resolveDataset(BAR_DATASETS, args.dataset), {
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Color By Point',
  args: {
    ...commonDefaults,
    dataset: 'category-basic',
    stacked: false,
    radius: 4,
    barWidth: 0.8,
    colorByPoint: true
  },
  render: args => renderChart('bar', resolveDataset(BAR_DATASETS, args.dataset), {
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
}`,...b.parameters?.docs?.source}}};const A=["SingleSeries","Grouped","Stacked","DualYAxis","RoundedCorners","StackedDualYAxis","InvertedGrouped","StackedWithDataLabels","ColorByPoint"];export{b as ColorByPoint,c as DualYAxis,d as Grouped,m as InvertedGrouped,h as RoundedCorners,i as SingleSeries,o as Stacked,u as StackedDualYAxis,g as StackedWithDataLabels,A as __namedExportsOrder,y as default};
