import{j as e}from"./iframe-Bbzk5SKL.js";import{H as n,T as g}from"./Code-CcSl0fqR.js";import{c as r}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";const H={title:"Components/Typography/Heading",component:n,tags:["autodocs"]},i={args:{level:"1",children:"The quick brown fox jumps over the lazy dog"}},l={render:()=>e.jsxs("div",{style:r,children:[e.jsx(n,{level:"1",children:"Heading 1 - Main Title"}),e.jsx(n,{level:"2",children:"Heading 2 - Section Title"}),e.jsx(n,{level:"3",children:"Heading 3 - Subsection"}),e.jsx(n,{level:"4",children:"Heading 4 - Minor Heading"}),e.jsx(n,{level:"5",children:"Heading 5 - Small Heading"}),e.jsx(n,{level:"6",children:"Heading 6 - Tiny Heading"})]})},a={render:()=>e.jsxs("div",{style:r,children:[e.jsx(n,{level:"2",weight:"light",children:"Light Weight"}),e.jsx(n,{level:"2",weight:"regular",children:"Regular Weight"}),e.jsx(n,{level:"2",weight:"medium",children:"Medium Weight"}),e.jsx(n,{level:"2",weight:"semibold",children:"Semibold Weight"}),e.jsx(n,{level:"2",weight:"bold",children:"Bold Weight"})]})},o={render:()=>e.jsxs("div",{style:r,children:[e.jsx(n,{color:"default",children:"Default Color"}),e.jsx(n,{color:"muted",children:"Muted Color"}),e.jsx(n,{color:"subtle",children:"Subtle Color"}),e.jsx(n,{color:"primary",children:"Primary Color"}),e.jsx(n,{color:"secondary",children:"Secondary Color"}),e.jsx(n,{color:"error",children:"Error Color"}),e.jsx(n,{color:"warning",children:"Warning Color"}),e.jsx(n,{color:"info",children:"Info Color"}),e.jsx(n,{color:"success",children:"Success Color"})]})},d={render:()=>e.jsxs("div",{style:r,children:[e.jsx(n,{align:"left",children:"Left Aligned"}),e.jsx(n,{align:"center",children:"Center Aligned"}),e.jsx(n,{align:"right",children:"Right Aligned"})]})},s={render:()=>e.jsx("div",{style:{maxWidth:"300px"},children:e.jsx(n,{truncate:!0,children:"This is a very long heading that should be truncated with an ellipsis when it overflows"})})},t={render:()=>e.jsx("div",{style:r,children:e.jsxs("div",{children:[e.jsx(g,{size:"sm",color:"muted",as:"div",style:{marginBottom:"0.5rem"},children:'h3 렌더링이지만 as="span"으로 오버라이드:'}),e.jsx(n,{level:"3",as:"span",children:"Span으로 렌더링된 Heading"})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    level: '1',
    children: 'The quick brown fox jumps over the lazy dog'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Heading level="1">Heading 1 - Main Title</Heading>
      <Heading level="2">Heading 2 - Section Title</Heading>
      <Heading level="3">Heading 3 - Subsection</Heading>
      <Heading level="4">Heading 4 - Minor Heading</Heading>
      <Heading level="5">Heading 5 - Small Heading</Heading>
      <Heading level="6">Heading 6 - Tiny Heading</Heading>
    </div>
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Heading level="2" weight="light">Light Weight</Heading>
      <Heading level="2" weight="regular">Regular Weight</Heading>
      <Heading level="2" weight="medium">Medium Weight</Heading>
      <Heading level="2" weight="semibold">Semibold Weight</Heading>
      <Heading level="2" weight="bold">Bold Weight</Heading>
    </div>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Heading align="left">Left Aligned</Heading>
      <Heading align="center">Center Aligned</Heading>
      <Heading align="right">Right Aligned</Heading>
    </div>
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '300px'
  }}>
      <Heading truncate>
        This is a very long heading that should be truncated with an ellipsis when it overflows
      </Heading>
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const v=["Playground","Levels","Weights","Colors","Alignment","Truncate","CustomElement"];export{d as Alignment,o as Colors,t as CustomElement,l as Levels,i as Playground,s as Truncate,a as Weights,v as __namedExportsOrder,H as default};
