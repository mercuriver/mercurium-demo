import{c,a as l,r,b as a,d as m}from"./story-utils-DuFC1K21.js";import{r as s,T as t}from"./mock-data--NCvz5h5.js";import"./chart-engine-BEaIKs5u.js";import"./tooltip-plugin-Bjs86Pni.js";import"./crosshair-plugin-DPAuNe78.js";const C={title:"Charts/Types/Timeseries",args:{...l,width:700,dataset:"date-daily"},argTypes:{dataset:m(t),curve:{control:"select",options:["linear","smooth","step"],description:"선 보간 방식",table:{defaultValue:{summary:"smooth"}}},dots:{control:"boolean",description:"데이터 포인트 표시",table:{defaultValue:{summary:"false"}}},...c}},n={args:{dataset:"date-daily",curve:"smooth",dots:!1},render:e=>r("timeseries",s(t,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...a(e),line:{curve:e.curve,dots:e.dots}})},o={args:{dataset:"date-large",curve:"linear",dots:!0},render:e=>r("timeseries",s(t,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...a(e),line:{curve:e.curve,dots:e.dots}})},i={args:{dataset:"date-daily",curve:"smooth",dots:!1,colorPalette:"french-dispatch",showCrosshair:!0,crosshairType:"both",crosshairColor:"hsla(215, 31%, 16%, 1)",crosshairDashStyle:"solid"},render:e=>r("timeseries",s(t,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...a(e),line:{curve:e.curve,dots:e.dots}})},d={args:{dataset:"date-monthly",curve:"linear",dots:!0,colorPalette:"isle-of-dogs"},render:e=>r("timeseries",s(t,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...a(e),line:{curve:e.curve,dots:e.dots}})},h={args:{dataset:"date-large",curve:"linear",dots:!1},render:e=>r("timeseries",s(t,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...a(e),line:{curve:e.curve,dots:e.dots}})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'date-daily',
    curve: 'smooth',
    dots: false
  },
  render: args => renderChart('timeseries', resolveDataset(TIMESERIES_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots
    }
  })
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'date-large',
    curve: 'linear',
    dots: true
  },
  render: args => renderChart('timeseries', resolveDataset(TIMESERIES_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots
    }
  })
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'date-daily',
    curve: 'smooth',
    dots: false,
    colorPalette: 'french-dispatch',
    showCrosshair: true,
    crosshairType: 'both',
    crosshairColor: 'hsla(215, 31%, 16%, 1)',
    crosshairDashStyle: 'solid'
  },
  render: args => renderChart('timeseries', resolveDataset(TIMESERIES_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots
    }
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'date-monthly',
    curve: 'linear',
    dots: true,
    colorPalette: 'isle-of-dogs'
  },
  render: args => renderChart('timeseries', resolveDataset(TIMESERIES_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots
    }
  })
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'date-large',
    curve: 'linear',
    dots: false
  },
  render: args => renderChart('timeseries', resolveDataset(TIMESERIES_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots
    }
  })
}`,...h.parameters?.docs?.source}}};const S=["Playground","Hourly","Daily","Monthly","LargeDataset"];export{i as Daily,o as Hourly,h as LargeDataset,d as Monthly,n as Playground,S as __namedExportsOrder,C as default};
