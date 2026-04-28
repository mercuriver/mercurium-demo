import{c as i,d as u,f as c,g as l,h as o,L as a,r as h,i as p}from"./story-utils-DdhabU4Y.js";const f={title:"Chart Types/Line",args:{...i,dataset:"numeric-basic"},argTypes:{dataset:p(a),curve:{control:"select",options:["linear","smooth","step"],description:"선 보간 방식",table:{defaultValue:{summary:"linear"}}},dots:{control:"boolean",description:"데이터 포인트 표시",table:{defaultValue:{summary:"false"}}},lineWidth:{control:{type:"range",min:1,max:5,step:.5},description:"선 두께",table:{defaultValue:{summary:"2"}}},...u}},t={parameters:{controls:{disable:!0}},render:e=>h(["linear","smooth","step"].flatMap(d=>[!1,!0].map(m=>({type:"line",data:o(a,"numeric-basic"),options:{frameTheme:e.frameTheme,line:{curve:d,dots:m,width:2}},label:`${d[0].toUpperCase()}${d.slice(1)} · Dots ${m?"on":"off"}`}))),{columns:3,cardHeight:240,hideDataSummary:!0})},n={args:{...i,dataset:"numeric-multi",curve:"smooth",lineWidth:1.5,dots:!0,width:700},render:e=>c("line",o(a,e.dataset),{...l(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}},{fitContainer:e.fitContainer,width:e.width,height:e.height})},r={args:{...i,dataset:"category-basic",curve:"linear",lineWidth:2,dots:!0},render:e=>c("line",o(a,e.dataset),{...l(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}},{fitContainer:e.fitContainer,width:e.width,height:e.height})},s={name:"Data Labels + Background",args:{...i,dataset:"numeric-basic",curve:"linear",lineWidth:2,dots:!0,showDataLabel:!0,dataLabelBackground:!0},render:e=>c("line",o(a,e.dataset),{...l(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}},{fitContainer:e.fitContainer,width:e.width,height:e.height})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid((['linear', 'smooth', 'step'] as const).flatMap(curve => [false, true].map(dots => ({
    type: 'line' as const,
    data: resolveDataset(LINE_DATASETS, 'numeric-basic'),
    options: {
      frameTheme: args.frameTheme,
      line: {
        curve,
        dots,
        width: 2
      }
    },
    label: \`\${curve[0].toUpperCase()}\${curve.slice(1)} · Dots \${dots ? 'on' : 'off'}\`
  }))), {
    columns: 3,
    cardHeight: 240,
    hideDataSummary: true
  })
}`,...t.parameters?.docs?.source},description:{story:"Curve × Dots combinations — 3 curves × 2 dot modes = 6 cards.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'numeric-multi',
    curve: 'smooth',
    lineWidth: 1.5,
    dots: true,
    width: 700
  },
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots,
      width: args.lineWidth
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'category-basic',
    curve: 'linear',
    lineWidth: 2,
    dots: true
  },
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots,
      width: args.lineWidth
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Data Labels + Background',
  args: {
    ...commonDefaults,
    dataset: 'numeric-basic',
    curve: 'linear',
    lineWidth: 2,
    dots: true,
    showDataLabel: true,
    dataLabelBackground: true
  },
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots,
      width: args.lineWidth
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...s.parameters?.docs?.source}}};const v=["CurveAndDots","MultiSeries","CategoryAxis","WithDataLabels"];export{r as CategoryAxis,t as CurveAndDots,n as MultiSeries,s as WithDataLabels,v as __namedExportsOrder,f as default};
