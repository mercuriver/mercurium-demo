import{j as e}from"./iframe-CIISAoEK.js";import{H as i,T as v}from"./Code-DdlxDzBl.js";import{c as l,s as H,a as h,r as p}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"Components/Typography/Heading",component:i,tags:["autodocs"]},n={args:{level:"1",children:"The quick brown fox jumps over the lazy dog"}},s={render:()=>e.jsxs("div",{style:l,children:[e.jsx(i,{level:"1",children:"Heading 1 - Main Title"}),e.jsx(i,{level:"2",children:"Heading 2 - Section Title"}),e.jsx(i,{level:"3",children:"Heading 3 - Subsection"}),e.jsx(i,{level:"4",children:"Heading 4 - Minor Heading"}),e.jsx(i,{level:"5",children:"Heading 5 - Small Heading"}),e.jsx(i,{level:"6",children:"Heading 6 - Tiny Heading"})]})},d={render:()=>e.jsxs("div",{style:l,children:[e.jsx(i,{level:"2",weight:"light",children:"Light Weight"}),e.jsx(i,{level:"2",weight:"regular",children:"Regular Weight"}),e.jsx(i,{level:"2",weight:"medium",children:"Medium Weight"}),e.jsx(i,{level:"2",weight:"semibold",children:"Semibold Weight"}),e.jsx(i,{level:"2",weight:"bold",children:"Bold Weight"})]})},a={render:()=>e.jsxs("div",{style:l,children:[e.jsx(i,{color:"default",children:"Default Color"}),e.jsx(i,{color:"muted",children:"Muted Color"}),e.jsx(i,{color:"subtle",children:"Subtle Color"}),e.jsx(i,{color:"primary",children:"Primary Color"}),e.jsx(i,{color:"secondary",children:"Secondary Color"}),e.jsx(i,{color:"error",children:"Error Color"}),e.jsx(i,{color:"warning",children:"Warning Color"}),e.jsx(i,{color:"info",children:"Info Color"}),e.jsx(i,{color:"success",children:"Success Color"})]})},o={render:()=>e.jsxs("div",{style:l,children:[e.jsx(i,{align:"left",children:"Left Aligned"}),e.jsx(i,{align:"center",children:"Center Aligned"}),e.jsx(i,{align:"right",children:"Right Aligned"})]})},t={render:()=>e.jsx("div",{style:{maxWidth:"300px"},children:e.jsx(i,{truncate:!0,children:"This is a very long heading that should be truncated with an ellipsis when it overflows"})})},c={render:()=>{const m=["1","2","3","4","5","6"],u=["light","regular","medium","semibold","bold"];return e.jsxs("div",{style:H,children:[e.jsxs("div",{children:[e.jsx("h4",{style:h,children:"All levels (default weight)"}),e.jsx("div",{style:l,children:m.map(r=>e.jsxs(i,{level:r,children:["Heading level ",r]},r))})]}),e.jsxs("div",{children:[e.jsx("h4",{style:h,children:"Weights (level 3)"}),e.jsx("div",{style:l,children:u.map(r=>e.jsx(i,{level:"3",weight:r,children:r},r))})]}),e.jsxs("div",{children:[e.jsx("h4",{style:h,children:"Colors (level 4)"}),e.jsx("div",{style:{...p,gap:"1rem",flexWrap:"wrap"},children:["default","muted","subtle","primary","error","warning","info","success"].map(r=>e.jsx(i,{level:"4",color:r,children:r},r))})]})]})}},g={render:()=>e.jsx("div",{style:l,children:e.jsxs("div",{children:[e.jsx(v,{size:"sm",color:"muted",as:"div",style:{marginBottom:"0.5rem"},children:'h3 렌더링이지만 as="span"으로 오버라이드:'}),e.jsx(i,{level:"3",as:"span",children:"Span으로 렌더링된 Heading"})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    level: '1',
    children: 'The quick brown fox jumps over the lazy dog'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Heading level="1">Heading 1 - Main Title</Heading>
      <Heading level="2">Heading 2 - Section Title</Heading>
      <Heading level="3">Heading 3 - Subsection</Heading>
      <Heading level="4">Heading 4 - Minor Heading</Heading>
      <Heading level="5">Heading 5 - Small Heading</Heading>
      <Heading level="6">Heading 6 - Tiny Heading</Heading>
    </div>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Heading level="2" weight="light">Light Weight</Heading>
      <Heading level="2" weight="regular">Regular Weight</Heading>
      <Heading level="2" weight="medium">Medium Weight</Heading>
      <Heading level="2" weight="semibold">Semibold Weight</Heading>
      <Heading level="2" weight="bold">Bold Weight</Heading>
    </div>
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Heading color="default">Default Color</Heading>
      <Heading color="muted">Muted Color</Heading>
      <Heading color="subtle">Subtle Color</Heading>
      <Heading color="primary">Primary Color</Heading>
      <Heading color="secondary">Secondary Color</Heading>
      <Heading color="error">Error Color</Heading>
      <Heading color="warning">Warning Color</Heading>
      <Heading color="info">Info Color</Heading>
      <Heading color="success">Success Color</Heading>
    </div>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Heading align="left">Left Aligned</Heading>
      <Heading align="center">Center Aligned</Heading>
      <Heading align="right">Right Aligned</Heading>
    </div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '300px'
  }}>
      <Heading truncate>
        This is a very long heading that should be truncated with an ellipsis when it overflows
      </Heading>
    </div>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const levels = ['1', '2', '3', '4', '5', '6'] as const;
    const weights = ['light', 'regular', 'medium', 'semibold', 'bold'] as const;
    return <div style={section}>
        <div>
          <h4 style={sectionTitle}>All levels (default weight)</h4>
          <div style={column}>
            {levels.map(l => <Heading key={l} level={l}>Heading level {l}</Heading>)}
          </div>
        </div>
        <div>
          <h4 style={sectionTitle}>Weights (level 3)</h4>
          <div style={column}>
            {weights.map(w => <Heading key={w} level="3" weight={w}>{w}</Heading>)}
          </div>
        </div>
        <div>
          <h4 style={sectionTitle}>Colors (level 4)</h4>
          <div style={{
          ...row,
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
            {(['default', 'muted', 'subtle', 'primary', 'error', 'warning', 'info', 'success'] as const).map(c => <Heading key={c} level="4" color={c}>{c}</Heading>)}
          </div>
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <div>
        <Text size="sm" color="muted" as="div" style={{
        marginBottom: '0.5rem'
      }}>
          h3 렌더링이지만 as="span"으로 오버라이드:
        </Text>
        <Heading level="3" as="span">Span으로 렌더링된 Heading</Heading>
      </div>
    </div>
}`,...g.parameters?.docs?.source}}};const C=["Playground","Levels","Weights","Colors","Alignment","Truncate","AllStates","CustomElement"];export{o as Alignment,c as AllStates,a as Colors,g as CustomElement,s as Levels,n as Playground,t as Truncate,d as Weights,C as __namedExportsOrder,f as default};
