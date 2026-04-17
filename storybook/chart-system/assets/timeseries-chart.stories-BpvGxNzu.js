import{a as c,c as l,r,b as s,d as m}from"./story-utils-DPJnPqbZ.js";import{r as a,T as t}from"./mock-data-DLH8EjXc.js";import"./chart-engine-BdkGv5ec.js";import"./tooltip-plugin-DmLF6MzB.js";import"./crosshair-plugin-DmSVPU7d.js";const S={title:"Charts/Types/Timeseries",args:{...c,width:700,dataset:"date-daily"},argTypes:{dataset:m(t),curve:{control:"select",options:["linear","smooth","step"],description:"선 보간 방식",table:{defaultValue:{summary:"smooth"}}},dots:{control:"boolean",description:"데이터 포인트 표시",table:{defaultValue:{summary:"false"}}},...l}},n={args:{dataset:"date-large",curve:"linear",dots:!0},render:e=>r("timeseries",a(t,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...s(e),line:{curve:e.curve,dots:e.dots}})},o={args:{dataset:"date-daily",curve:"smooth",dots:!1,colorPalette:"vintage-press",showCrosshair:!0,crosshairType:"both",crosshairColor:"hsla(215, 31%, 16%, 1)",crosshairDashStyle:"solid"},render:e=>r("timeseries",a(t,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...s(e),line:{curve:e.curve,dots:e.dots}})},i={args:{dataset:"date-monthly",curve:"linear",dots:!0,colorPalette:"ashen-twilight"},render:e=>r("timeseries",a(t,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...s(e),line:{curve:e.curve,dots:e.dots}})},d={args:{...c,dataset:"dual-axis-timeseries",curve:"smooth",dots:!1,width:700,yAxis2SeriesKeys:"bounce-rate",yAxis2Label:"Bounce Rate (%)"},render:e=>r("timeseries",a(t,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...s(e),line:{curve:e.curve,dots:e.dots}})},h={args:{dataset:"date-large",curve:"linear",dots:!1},render:e=>r("timeseries",a(t,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...s(e),line:{curve:e.curve,dots:e.dots}})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'date-daily',
    curve: 'smooth',
    dots: false,
    colorPalette: 'vintage-press',
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'date-monthly',
    curve: 'linear',
    dots: true,
    colorPalette: 'ashen-twilight'
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
    ...commonDefaults,
    dataset: 'dual-axis-timeseries',
    curve: 'smooth',
    dots: false,
    width: 700,
    yAxis2SeriesKeys: 'bounce-rate',
    yAxis2Label: 'Bounce Rate (%)'
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
}`,...h.parameters?.docs?.source}}};const C=["Hourly","Daily","Monthly","DualYAxis","LargeDataset"];export{o as Daily,d as DualYAxis,n as Hourly,h as LargeDataset,i as Monthly,C as __namedExportsOrder,S as default};
