import{j as e}from"./iframe-Bbzk5SKL.js";import{S as r}from"./Spinner-CCj5S2HB.js";import{T as d}from"./Code-CcSl0fqR.js";import{r as s}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/Loading/Spinner",component:r,tags:["autodocs"]},o={args:{size:"md",showTrack:!0}},a={render:()=>e.jsxs("div",{style:{...s,gap:"1.5rem"},children:[e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"})]})},n={render:()=>e.jsxs("div",{style:{...s,gap:"1.5rem"},children:[e.jsx(r,{customSize:.75}),e.jsx(r,{customSize:2}),e.jsx(r,{customSize:4})]})},t={render:()=>e.jsxs("div",{style:{...s,gap:"1.5rem"},children:[e.jsx(r,{color:"var(--color-action-primary)"}),e.jsx(r,{color:"var(--color-state-success-default)"}),e.jsx(r,{color:"var(--color-state-warning-default)"}),e.jsx(r,{color:"var(--color-state-danger-default)"})]})},i={render:()=>e.jsxs("div",{style:{...s,gap:"1.5rem"},children:[e.jsx(r,{showTrack:!1,size:"sm"}),e.jsx(r,{showTrack:!1,size:"md"}),e.jsx(r,{showTrack:!1,size:"lg"})]})},c={render:()=>e.jsxs("div",{style:s,children:[e.jsx(r,{size:"sm"}),e.jsx(d,{size:"sm",as:"span",children:"Loading data..."})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
      <Spinner color="var(--color-action-primary)" />
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
