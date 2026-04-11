import{c as d,a as u,r as i,b as o,d as m}from"./story-utils-Sq0wUdi9.js";import{r as c,A as a}from"./mock-data-BShfxM5i.js";import"./chart-engine-BmtyFlsE.js";import"./tooltip-plugin-B9rRNLzl.js";import"./crosshair-plugin-lsuhlxfG.js";const v={title:"Charts/Types/Area",args:{...u,dataset:"numeric-basic"},argTypes:{dataset:m(a),opacity:{control:{type:"range",min:.1,max:1,step:.1},description:"채우기 투명도",table:{defaultValue:{summary:"0.3"}}},stacked:{control:"boolean",description:"스택 모드",table:{defaultValue:{summary:"false"}}},curve:{control:"select",options:["linear","smooth","step"],description:"선 보간 방식",table:{defaultValue:{summary:"linear"}}},...d}},t={args:{dataset:"numeric-basic",opacity:.3,stacked:!1,curve:"smooth"},render:e=>i("area",c(a,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...o(e),area:{opacity:e.opacity,stacked:e.stacked},line:{curve:e.curve}})},r={args:{dataset:"numeric-basic",opacity:.5,stacked:!0,curve:"smooth"},render:e=>i("area",c(a,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...o(e),area:{opacity:e.opacity,stacked:e.stacked},line:{curve:e.curve}})},n={args:{dataset:"numeric-basic",opacity:.7,stacked:!1,curve:"smooth",colorPalette:"moonrise-kingdom",showDataLabel:!0,dataLabelBackground:!0,titleText:"Title",subtitleText:"Subtitle"},render:e=>i("area",c(a,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...o(e),area:{opacity:e.opacity,stacked:e.stacked},line:{curve:e.curve}})},s={args:{dataset:"numeric-basic",opacity:.4,stacked:!1,curve:"step"},render:e=>i("area",c(a,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...o(e),area:{opacity:e.opacity,stacked:e.stacked},line:{curve:e.curve}})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'numeric-basic',
    opacity: 0.3,
    stacked: false,
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'numeric-basic',
    opacity: 0.7,
    stacked: false,
    curve: 'smooth',
    colorPalette: 'moonrise-kingdom',
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const k=["Playground","Stacked","HighOpacity","StepCurve"];export{n as HighOpacity,t as Playground,r as Stacked,s as StepCurve,k as __namedExportsOrder,v as default};
