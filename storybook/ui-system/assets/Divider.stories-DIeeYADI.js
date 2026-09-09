import{j as e}from"./iframe-B352m8Ic.js";import{D as t}from"./Divider-Cz80iKGA.js";import{T as r}from"./Code-D3L6RGzg.js";import{c as a,r as d}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";const v={title:"Components/Divider",component:t,tags:["autodocs"]},i={args:{orientation:"horizontal"},decorators:[c=>e.jsx("div",{style:{width:300},children:e.jsx(c,{})})]},o={render:()=>e.jsxs("div",{style:{...a,gap:"0.75rem",width:400},children:[e.jsx(r,{children:"Section A"}),e.jsx(t,{}),e.jsx(r,{children:"Section B"}),e.jsx(t,{}),e.jsx(r,{children:"Section C"})]})},s={render:()=>e.jsxs("div",{style:{...d,gap:"0.75rem",height:40},children:[e.jsx(r,{children:"Left"}),e.jsx(t,{orientation:"vertical"}),e.jsx(r,{children:"Center"}),e.jsx(t,{orientation:"vertical"}),e.jsx(r,{children:"Right"})]})},n={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{...a,gap:"1rem",width:400},children:[e.jsxs("div",{style:{...a,gap:"0.5rem"},children:[e.jsx(r,{children:'orientation="horizontal"'}),e.jsx(t,{})]}),e.jsxs("div",{style:{...d,gap:"0.75rem",height:40},children:[e.jsx(r,{children:"orientation"}),e.jsx(t,{orientation:"vertical"}),e.jsx(r,{children:"vertical"})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  decorators: [Story => <div style={{
    width: 300
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    ...column,
    gap: '1rem',
    width: 400
  }}>
      <div style={{
      ...column,
      gap: '0.5rem'
    }}>
        <Text>orientation="horizontal"</Text>
        <Divider />
      </div>
      <div style={{
      ...row,
      gap: '0.75rem',
      height: 40
    }}>
        <Text>orientation</Text>
        <Divider orientation="vertical" />
        <Text>vertical</Text>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};const g=["Playground","Horizontal","Vertical","AllStates"];export{n as AllStates,o as Horizontal,i as Playground,s as Vertical,g as __namedExportsOrder,v as default};
