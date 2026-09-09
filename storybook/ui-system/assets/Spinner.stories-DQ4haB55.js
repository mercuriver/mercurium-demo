import{j as e}from"./iframe-B352m8Ic.js";import{S as s}from"./Spinner-BK6DVpTP.js";import{T as u}from"./Code-D3L6RGzg.js";import{c as v,l as p,r}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./vanilla-extract-dynamic.esm-BUlnp6I2.js";const y={title:"Components/Loading/Spinner",component:s,tags:["autodocs"]},n={args:{size:"md",showTrack:!0}},o={render:()=>e.jsxs("div",{style:{...r,gap:"1.5rem"},children:[e.jsx(s,{size:"sm"}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"lg"})]})},t={render:()=>e.jsxs("div",{style:{...r,gap:"1.5rem"},children:[e.jsx(s,{customSize:.75}),e.jsx(s,{customSize:2}),e.jsx(s,{customSize:4})]})},i={render:()=>e.jsxs("div",{style:{...r,gap:"1.5rem"},children:[e.jsx(s,{color:"var(--color-primary-color)"}),e.jsx(s,{color:"var(--color-state-success-default)"}),e.jsx(s,{color:"var(--color-state-warning-default)"}),e.jsx(s,{color:"var(--color-state-danger-default)"})]})},c={render:()=>e.jsxs("div",{style:{...r,gap:"1.5rem"},children:[e.jsx(s,{showTrack:!1,size:"sm"}),e.jsx(s,{showTrack:!1,size:"md"}),e.jsx(s,{showTrack:!1,size:"lg"})]})},l={render:()=>e.jsxs("div",{style:r,children:[e.jsx(s,{size:"sm"}),e.jsx(u,{size:"sm",as:"span",children:"Loading data..."})]})},d={parameters:{controls:{disable:!0}},render:()=>{const m=["sm","md","lg"];return e.jsxs("div",{style:v,children:[e.jsxs("div",{children:[e.jsx("p",{style:p,children:"showTrack (default)"}),e.jsx("div",{style:{...r,alignItems:"center"},children:m.map(a=>e.jsx(s,{size:a},a))})]}),e.jsxs("div",{children:[e.jsxs("p",{style:p,children:["showTrack=","{false}"]}),e.jsx("div",{style:{...r,alignItems:"center"},children:m.map(a=>e.jsx(s,{size:a,showTrack:!1},a))})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    showTrack: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...row,
    gap: '1.5rem'
  }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...row,
    gap: '1.5rem'
  }}>
      <Spinner customSize={0.75} />
      <Spinner customSize={2} />
      <Spinner customSize={4} />
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...row,
    gap: '1.5rem'
  }}>
      <Spinner color="var(--color-primary-color)" />
      <Spinner color="var(--color-state-success-default)" />
      <Spinner color="var(--color-state-warning-default)" />
      <Spinner color="var(--color-state-danger-default)" />
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...row,
    gap: '1.5rem'
  }}>
      <Spinner showTrack={false} size="sm" />
      <Spinner showTrack={false} size="md" />
      <Spinner showTrack={false} size="lg" />
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={row}>
      <Spinner size="sm" />
      <Text size="sm" as="span">
        Loading data...
      </Text>
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    return <div style={column}>
        <div>
          <p style={label}>showTrack (default)</p>
          <div style={{
          ...row,
          alignItems: 'center'
        }}>
            {sizes.map(s => <Spinner key={s} size={s} />)}
          </div>
        </div>
        <div>
          <p style={label}>showTrack={'{false}'}</p>
          <div style={{
          ...row,
          alignItems: 'center'
        }}>
            {sizes.map(s => <Spinner key={s} size={s} showTrack={false} />)}
          </div>
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const w=["Playground","Sizes","CustomSize","Colors","WithoutTrack","InlineWithText","AllStates"];export{d as AllStates,i as Colors,t as CustomSize,l as InlineWithText,n as Playground,o as Sizes,c as WithoutTrack,w as __namedExportsOrder,y as default};
