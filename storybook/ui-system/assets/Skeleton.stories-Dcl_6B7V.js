import{j as e}from"./iframe-CehWmMV7.js";import{S as r}from"./Skeleton-uiRj0Ssb.js";import{c as d,s as m,l as o}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/Loading/Skeleton",component:r,tags:["autodocs"]},t={args:{variant:"text",width:"20rem",animated:!0}},a={render:()=>e.jsxs("div",{style:{...d,width:"20rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:o,children:"text"}),e.jsx(r,{variant:"text"})]}),e.jsxs("div",{children:[e.jsx("p",{style:o,children:"circular"}),e.jsx(r,{variant:"circular",width:"3rem"})]}),e.jsxs("div",{children:[e.jsx("p",{style:o,children:"rectangular"}),e.jsx(r,{variant:"rectangular",height:"6rem"})]})]})},i={render:()=>e.jsxs("div",{style:{...m,width:"24rem"},children:[e.jsx(r,{variant:"text",lines:1}),e.jsx(r,{variant:"text",lines:3}),e.jsx(r,{variant:"text",lines:5})]})},s={render:()=>e.jsxs("div",{style:{...d,gap:"0.75rem",width:"20rem"},children:[e.jsx(r,{variant:"rectangular",height:"10rem"}),e.jsx(r,{variant:"text",width:"70%"}),e.jsx(r,{variant:"text",lines:2})]})},n={render:()=>e.jsx("div",{style:{...d,gap:"1rem",width:"24rem"},children:Array.from({length:4},(x,c)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[e.jsx(r,{variant:"circular",width:"2.5rem"}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"0.375rem"},children:[e.jsx(r,{variant:"text",width:"60%"}),e.jsx(r,{variant:"text",width:"90%"})]})]},c))})},l={render:()=>e.jsxs("div",{style:{...d,gap:"0.75rem",width:"20rem"},children:[e.jsx(r,{variant:"rectangular",height:"6rem",animated:!1}),e.jsx(r,{variant:"text",lines:2,animated:!1})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: '20rem',
    animated: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...column,
    width: '20rem'
  }}>
      <div>
        <p style={label}>text</p>
        <Skeleton variant="text" />
      </div>
      <div>
        <p style={label}>circular</p>
        <Skeleton variant="circular" width="3rem" />
      </div>
      <div>
        <p style={label}>rectangular</p>
        <Skeleton variant="rectangular" height="6rem" />
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...section,
    width: '24rem'
  }}>
      <Skeleton variant="text" lines={1} />
      <Skeleton variant="text" lines={3} />
      <Skeleton variant="text" lines={5} />
    </div>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...column,
    gap: '0.75rem',
    width: '20rem'
  }}>
      <Skeleton variant="rectangular" height="10rem" />
      <Skeleton variant="text" width="70%" />
      <Skeleton variant="text" lines={2} />
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...column,
    gap: '1rem',
    width: '24rem'
  }}>
      {Array.from({
      length: 4
    }, (_, i) => <div key={i} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }}>
          <Skeleton variant="circular" width="2.5rem" />
          <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.375rem'
      }}>
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="90%" />
          </div>
        </div>)}
    </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...column,
    gap: '0.75rem',
    width: '20rem'
  }}>
      <Skeleton variant="rectangular" height="6rem" animated={false} />
      <Skeleton variant="text" lines={2} animated={false} />
    </div>
}`,...l.parameters?.docs?.source}}};const j=["Playground","Variants","TextLines","CardPlaceholder","ListPlaceholder","NoAnimation"];export{s as CardPlaceholder,n as ListPlaceholder,l as NoAnimation,t as Playground,i as TextLines,a as Variants,j as __namedExportsOrder,g as default};
