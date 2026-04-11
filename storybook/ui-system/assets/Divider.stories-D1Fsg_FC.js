import{j as e}from"./iframe-Bbzk5SKL.js";import{D as t}from"./Divider-CsgOOMem.js";import{T as r}from"./Code-CcSl0fqR.js";import{c as a,r as c}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Components/Layout/Divider",component:t,tags:["autodocs"]},o={args:{orientation:"horizontal"},decorators:[s=>e.jsx("div",{style:{width:300},children:e.jsx(s,{})})]},i={render:()=>e.jsxs("div",{style:{...a,gap:"0.75rem",width:400},children:[e.jsx(r,{children:"Section A"}),e.jsx(t,{}),e.jsx(r,{children:"Section B"}),e.jsx(t,{}),e.jsx(r,{children:"Section C"})]})},n={render:()=>e.jsxs("div",{style:{...c,gap:"0.75rem",height:40},children:[e.jsx(r,{children:"Left"}),e.jsx(t,{orientation:"vertical"}),e.jsx(r,{children:"Center"}),e.jsx(t,{orientation:"vertical"}),e.jsx(r,{children:"Right"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  decorators: [Story => <div style={{
    width: 300
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...column,
    gap: '0.75rem',
    width: 400
  }}>
      <Text>Section A</Text>
      <Divider />
      <Text>Section B</Text>
      <Divider />
      <Text>Section C</Text>
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...row,
    gap: '0.75rem',
    height: 40
  }}>
      <Text>Left</Text>
      <Divider orientation="vertical" />
      <Text>Center</Text>
      <Divider orientation="vertical" />
      <Text>Right</Text>
    </div>
}`,...n.parameters?.docs?.source}}};const v=["Playground","Horizontal","Vertical"];export{i as Horizontal,o as Playground,n as Vertical,v as __namedExportsOrder,h as default};
