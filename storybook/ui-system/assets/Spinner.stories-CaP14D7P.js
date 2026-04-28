import{j as r}from"./iframe-80ZV6wNn.js";import{S as e}from"./Spinner-C67j0iO7.js";import{T as d}from"./Code-Dx44NRNL.js";import{r as s}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/Loading/Spinner",component:e,tags:["autodocs"]},o={args:{size:"md",showTrack:!0}},a={render:()=>r.jsxs("div",{style:{...s,gap:"1.5rem"},children:[r.jsx(e,{size:"sm"}),r.jsx(e,{size:"md"}),r.jsx(e,{size:"lg"})]})},n={render:()=>r.jsxs("div",{style:{...s,gap:"1.5rem"},children:[r.jsx(e,{customSize:.75}),r.jsx(e,{customSize:2}),r.jsx(e,{customSize:4})]})},t={render:()=>r.jsxs("div",{style:{...s,gap:"1.5rem"},children:[r.jsx(e,{color:"var(--color-primary-color)"}),r.jsx(e,{color:"var(--color-state-success-default)"}),r.jsx(e,{color:"var(--color-state-warning-default)"}),r.jsx(e,{color:"var(--color-state-danger-default)"})]})},i={render:()=>r.jsxs("div",{style:{...s,gap:"1.5rem"},children:[r.jsx(e,{showTrack:!1,size:"sm"}),r.jsx(e,{showTrack:!1,size:"md"}),r.jsx(e,{showTrack:!1,size:"lg"})]})},c={render:()=>r.jsxs("div",{style:s,children:[r.jsx(e,{size:"sm"}),r.jsx(d,{size:"sm",as:"span",children:"Loading data..."})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    showTrack: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...row,
    gap: '1.5rem'
  }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...row,
    gap: '1.5rem'
  }}>
      <Spinner customSize={0.75} />
      <Spinner customSize={2} />
      <Spinner customSize={4} />
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...row,
    gap: '1.5rem'
  }}>
      <Spinner color="var(--color-primary-color)" />
      <Spinner color="var(--color-state-success-default)" />
      <Spinner color="var(--color-state-warning-default)" />
      <Spinner color="var(--color-state-danger-default)" />
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...row,
    gap: '1.5rem'
  }}>
      <Spinner showTrack={false} size="sm" />
      <Spinner showTrack={false} size="md" />
      <Spinner showTrack={false} size="lg" />
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={row}>
      <Spinner size="sm" />
      <Text size="sm" as="span">Loading data...</Text>
    </div>
}`,...c.parameters?.docs?.source}}};const x=["Playground","Sizes","CustomSize","Colors","WithoutTrack","InlineWithText"];export{t as Colors,n as CustomSize,c as InlineWithText,o as Playground,a as Sizes,i as WithoutTrack,x as __namedExportsOrder,g as default};
