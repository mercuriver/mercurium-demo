import{a as s,c as p,r as t,b as r,d as l}from"./story-utils-DPJnPqbZ.js";import{r as n,A as a}from"./mock-data-DLH8EjXc.js";import"./chart-engine-BdkGv5ec.js";import"./tooltip-plugin-DmLF6MzB.js";import"./crosshair-plugin-DmSVPU7d.js";const A={title:"Charts/Types/Area",args:{...s,dataset:"numeric-basic"},argTypes:{dataset:l(a),opacity:{control:{type:"range",min:.1,max:1,step:.1},description:"채우기 투명도",table:{defaultValue:{summary:"0.3"}}},stacked:{control:"boolean",description:"스택 모드",table:{defaultValue:{summary:"false"}}},curve:{control:"select",options:["linear","smooth","step"],description:"선 보간 방식",table:{defaultValue:{summary:"linear"}}},...p}},i={args:{dataset:"numeric-basic",opacity:.5,stacked:!0,curve:"smooth"},render:e=>t("area",n(a,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...r(e),area:{opacity:e.opacity,stacked:e.stacked},line:{curve:e.curve}})},o={args:{dataset:"numeric-basic",opacity:.7,stacked:!1,curve:"smooth",colorPalette:"summer-meadow",showDataLabel:!0,dataLabelBackground:!0,titleText:"Title",subtitleText:"Subtitle"},render:e=>t("area",n(a,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...r(e),area:{opacity:e.opacity,stacked:e.stacked},line:{curve:e.curve}})},c={args:{...s,dataset:"dual-axis-category",opacity:.3,stacked:!1,curve:"smooth",width:700,yAxis2SeriesKeys:"margin",yAxis2Label:"Profit Margin (%)"},render:e=>t("area",n(a,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...r(e),area:{opacity:e.opacity,stacked:e.stacked},line:{curve:e.curve}})},d={args:{dataset:"numeric-basic",opacity:.4,stacked:!1,curve:"step"},render:e=>t("area",n(a,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...r(e),area:{opacity:e.opacity,stacked:e.stacked},line:{curve:e.curve}})},u={name:"Stacked + Dual Y-Axis",args:{...s,dataset:"dual-axis-category",opacity:.4,stacked:!0,curve:"smooth",width:700,yAxis2SeriesKeys:"margin",yAxis2Label:"Profit Margin (%)"},render:e=>t("area",n(a,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...r(e),area:{opacity:e.opacity,stacked:e.stacked},line:{curve:e.curve}})},m={name:"Inverted + Stacked",args:{...s,dataset:"numeric-basic",opacity:.4,stacked:!0,curve:"smooth",inverted:!0},render:e=>t("area",n(a,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...r(e),area:{opacity:e.opacity,stacked:e.stacked},line:{curve:e.curve}})},h={name:"Stacked + Data Labels (inside)",args:{...s,dataset:"numeric-basic",opacity:.5,stacked:!0,curve:"smooth",showDataLabel:!0,dataLabelPosition:"inside",dataLabelBackground:!0},render:e=>t("area",n(a,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...r(e),area:{opacity:e.opacity,stacked:e.stacked},line:{curve:e.curve}})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'numeric-basic',
    opacity: 0.5,
    stacked: true,
    curve: 'smooth'
  },
  render: args => renderChart('area', resolveDataset(AREA_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    area: {
      opacity: args.opacity,
      stacked: args.stacked
    },
    line: {
      curve: args.curve
    }
  })
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'numeric-basic',
    opacity: 0.7,
    stacked: false,
    curve: 'smooth',
    colorPalette: 'summer-meadow',
    showDataLabel: true,
    dataLabelBackground: true,
    titleText: 'Title',
    subtitleText: 'Subtitle'
  },
  render: args => renderChart('area', resolveDataset(AREA_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    area: {
      opacity: args.opacity,
      stacked: args.stacked
    },
    line: {
      curve: args.curve
    }
  })
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'dual-axis-category',
    opacity: 0.3,
    stacked: false,
    curve: 'smooth',
    width: 700,
    yAxis2SeriesKeys: 'margin',
    yAxis2Label: 'Profit Margin (%)'
  },
  render: args => renderChart('area', resolveDataset(AREA_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    area: {
      opacity: args.opacity,
      stacked: args.stacked
    },
    line: {
      curve: args.curve
    }
  })
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'numeric-basic',
    opacity: 0.4,
    stacked: false,
    curve: 'step'
  },
  render: args => renderChart('area', resolveDataset(AREA_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    area: {
      opacity: args.opacity,
      stacked: args.stacked
    },
    line: {
      curve: args.curve
    }
  })
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Stacked + Dual Y-Axis',
  args: {
    ...commonDefaults,
    dataset: 'dual-axis-category',
    opacity: 0.4,
    stacked: true,
    curve: 'smooth',
    width: 700,
    yAxis2SeriesKeys: 'margin',
    yAxis2Label: 'Profit Margin (%)'
  },
  render: args => renderChart('area', resolveDataset(AREA_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    area: {
      opacity: args.opacity,
      stacked: args.stacked
    },
    line: {
      curve: args.curve
    }
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Inverted + Stacked',
  args: {
    ...commonDefaults,
    dataset: 'numeric-basic',
    opacity: 0.4,
    stacked: true,
    curve: 'smooth',
    inverted: true
  },
  render: args => renderChart('area', resolveDataset(AREA_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    area: {
      opacity: args.opacity,
      stacked: args.stacked
    },
    line: {
      curve: args.curve
    }
  })
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Stacked + Data Labels (inside)',
  args: {
    ...commonDefaults,
    dataset: 'numeric-basic',
    opacity: 0.5,
    stacked: true,
    curve: 'smooth',
    showDataLabel: true,
    dataLabelPosition: 'inside',
    dataLabelBackground: true
  },
  render: args => renderChart('area', resolveDataset(AREA_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    area: {
      opacity: args.opacity,
      stacked: args.stacked
    },
    line: {
      curve: args.curve
    }
  })
}`,...h.parameters?.docs?.source}}};const S=["Stacked","HighOpacity","DualYAxis","StepCurve","StackedDualYAxis","InvertedStacked","StackedWithDataLabels"];export{c as DualYAxis,o as HighOpacity,m as InvertedStacked,i as Stacked,u as StackedDualYAxis,h as StackedWithDataLabels,d as StepCurve,S as __namedExportsOrder,A as default};
