import{c as o,a as m,d,e as l,f as i,A as n,b as u,g as p}from"./story-utils-B9NFoQdo.js";const g={title:"Chart Types/Area",args:{...o,dataset:"numeric-basic"},argTypes:{...m,dataset:p(n),opacity:{control:{type:"range",min:.1,max:1,step:.1},description:"채우기 투명도",table:{defaultValue:{summary:"0.3"}}},stacked:{control:"boolean",description:"스택 모드",table:{defaultValue:{summary:"false"}}},curve:{control:"select",options:["linear","smooth","step"],description:"선 보간 방식",table:{defaultValue:{summary:"linear"}}}}},a={parameters:{controls:{disable:!0}},render:e=>u([!1,!0].flatMap(c=>["linear","smooth","step"].map(s=>({type:"area",data:i(n,"numeric-basic"),options:{frameTheme:e.frameTheme,area:{opacity:.35,stacked:c},line:{curve:s}},label:`${c?"Stacked":"Overlay"} · ${s[0].toUpperCase()}${s.slice(1)}`}))),{columns:3,cardHeight:240,hideDataSummary:!0})},t={args:{...o,dataset:"numeric-basic",opacity:.7,stacked:!1,curve:"smooth",colorPalette:"summer-meadow",showDataLabel:!0,dataLabelBackground:!0,titleText:"Title",subtitleText:"Subtitle"},render:e=>d("area",i(n,e.dataset),{...l(e),area:{opacity:e.opacity,stacked:e.stacked},line:{curve:e.curve}},{fitContainer:e.fitContainer,width:e.width,height:e.height})},r={name:"Stacked + Data Labels (inside)",args:{...o,dataset:"numeric-basic",opacity:.5,stacked:!0,curve:"smooth",showDataLabel:!0,dataLabelPosition:"inside",dataLabelBackground:!0},render:e=>d("area",i(n,e.dataset),{...l(e),area:{opacity:e.opacity,stacked:e.stacked},line:{curve:e.curve}},{fitContainer:e.fitContainer,width:e.width,height:e.height})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([false, true].flatMap(stacked => (['linear', 'smooth', 'step'] as const).map(curve => ({
    type: 'area' as const,
    data: resolveDataset(AREA_DATASETS, 'numeric-basic'),
    options: {
      frameTheme: args.frameTheme,
      area: {
        opacity: 0.35,
        stacked
      },
      line: {
        curve
      }
    },
    label: \`\${stacked ? 'Stacked' : 'Overlay'} · \${curve[0].toUpperCase()}\${curve.slice(1)}\`
  }))), {
    columns: 3,
    cardHeight: 240,
    hideDataSummary: true
  })
}`,...a.parameters?.docs?.source},description:{story:"Stacking × Curve — 2 stacking modes × 3 curves = 6 cards.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
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
  render: args => renderChartSingle('area', resolveDataset(AREA_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    area: {
      opacity: args.opacity,
      stacked: args.stacked
    },
    line: {
      curve: args.curve
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  render: args => renderChartSingle('area', resolveDataset(AREA_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    area: {
      opacity: args.opacity,
      stacked: args.stacked
    },
    line: {
      curve: args.curve
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...r.parameters?.docs?.source}}};const b=["StackingAndCurve","HighOpacity","StackedWithDataLabels"];export{t as HighOpacity,r as StackedWithDataLabels,a as StackingAndCurve,b as __namedExportsOrder,g as default};
