import{c as h,a as u,r,b as e,d as g}from"./story-utils-Sq0wUdi9.js";import{r as s,B as t}from"./mock-data-BShfxM5i.js";import"./chart-engine-BmtyFlsE.js";import"./tooltip-plugin-B9rRNLzl.js";import"./crosshair-plugin-lsuhlxfG.js";const k={title:"Charts/Types/Bar",args:{...u,dataset:"category-multi"},argTypes:{dataset:g(t),stacked:{control:"boolean",description:"스택 모드",table:{defaultValue:{summary:"false"}}},radius:{control:{type:"range",min:0,max:10,step:1},description:"모서리 라운딩",table:{defaultValue:{summary:"0"}}},barWidth:{control:{type:"range",min:.2,max:1,step:.1},description:"바 너비 비율",table:{defaultValue:{summary:"0.8"}}},...h}},n={args:{dataset:"negative",stacked:!1,radius:0,barWidth:.8},render:a=>r("bar",s(t,a.dataset),{fitContainer:a.fitContainer,width:a.width,height:a.height,...e(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}})},d={args:{dataset:"category-basic",stacked:!1,radius:4,barWidth:.8},render:a=>r("bar",s(t,a.dataset),{fitContainer:a.fitContainer,width:a.width,height:a.height,...e(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}})},i={args:{dataset:"category-multi",stacked:!1,radius:2,barWidth:.8},render:a=>r("bar",s(t,a.dataset),{fitContainer:a.fitContainer,width:a.width,height:a.height,...e(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}})},o={args:{dataset:"category-multi",stacked:!0,radius:4,barWidth:.8},render:a=>r("bar",s(t,a.dataset),{fitContainer:a.fitContainer,width:a.width,height:a.height,...e(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}})},c={args:{dataset:"category-basic",stacked:!1,radius:8,barWidth:.8,colorPalette:"grand-budapest"},render:a=>r("bar",s(t,a.dataset),{fitContainer:a.fitContainer,width:a.width,height:a.height,...e(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'negative',
    stacked: false,
    radius: 0,
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
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    dataset: 'category-basic',
    stacked: false,
    radius: 8,
    barWidth: 0.8,
    colorPalette: 'grand-budapest'
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
}`,...c.parameters?.docs?.source}}};const W=["Playground","SingleSeries","Grouped","Stacked","RoundedCorners"];export{i as Grouped,n as Playground,c as RoundedCorners,d as SingleSeries,o as Stacked,W as __namedExportsOrder,k as default};
