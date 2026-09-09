import{j as e}from"./iframe-B352m8Ic.js";import{S as r}from"./Skeleton-UCPDzLWe.js";import{c as a,l as t,s as v}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./vanilla-extract-dynamic.esm-BUlnp6I2.js";const y={title:"Components/Loading/Skeleton",component:r,tags:["autodocs"]},i={args:{variant:"text",width:"20rem",animated:!0}},s={render:()=>e.jsxs("div",{style:{...a,width:"20rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:t,children:"text"}),e.jsx(r,{variant:"text"})]}),e.jsxs("div",{children:[e.jsx("p",{style:t,children:"circular"}),e.jsx(r,{variant:"circular",width:"3rem"})]}),e.jsxs("div",{children:[e.jsx("p",{style:t,children:"rectangular"}),e.jsx(r,{variant:"rectangular",height:"6rem"})]})]})},n={render:()=>e.jsxs("div",{style:{...v,width:"24rem"},children:[e.jsx(r,{variant:"text",lines:1}),e.jsx(r,{variant:"text",lines:3}),e.jsx(r,{variant:"text",lines:5})]})},l={render:()=>e.jsxs("div",{style:{...a,gap:"0.75rem",width:"20rem"},children:[e.jsx(r,{variant:"rectangular",height:"10rem"}),e.jsx(r,{variant:"text",width:"70%"}),e.jsx(r,{variant:"text",lines:2})]})},d={render:()=>e.jsx("div",{style:{...a,gap:"1rem",width:"24rem"},children:Array.from({length:4},(x,m)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[e.jsx(r,{variant:"circular",width:"2.5rem"}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"0.375rem"},children:[e.jsx(r,{variant:"text",width:"60%"}),e.jsx(r,{variant:"text",width:"90%"})]})]},m))})},c={render:()=>e.jsxs("div",{style:{...a,gap:"0.75rem",width:"20rem"},children:[e.jsx(r,{variant:"rectangular",height:"6rem",animated:!1}),e.jsx(r,{variant:"text",lines:2,animated:!1})]})},o={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{...a,width:"20rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:t,children:'variant="text"'}),e.jsx(r,{variant:"text"})]}),e.jsxs("div",{children:[e.jsx("p",{style:t,children:'variant="circular"'}),e.jsx(r,{variant:"circular",width:"3rem"})]}),e.jsxs("div",{children:[e.jsx("p",{style:t,children:'variant="rectangular"'}),e.jsx(r,{variant:"rectangular",height:"6rem"})]}),e.jsxs("div",{children:[e.jsxs("p",{style:t,children:["animated=","{false}"]}),e.jsx(r,{variant:"rectangular",height:"6rem",animated:!1})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: '20rem',
    animated: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...section,
    width: '24rem'
  }}>
      <Skeleton variant="text" lines={1} />
      <Skeleton variant="text" lines={3} />
      <Skeleton variant="text" lines={5} />
    </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...column,
    gap: '0.75rem',
    width: '20rem'
  }}>
      <Skeleton variant="rectangular" height="10rem" />
      <Skeleton variant="text" width="70%" />
      <Skeleton variant="text" lines={2} />
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...column,
    gap: '0.75rem',
    width: '20rem'
  }}>
      <Skeleton variant="rectangular" height="6rem" animated={false} />
      <Skeleton variant="text" lines={2} animated={false} />
    </div>
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    ...column,
    width: '20rem'
  }}>
      <div>
        <p style={label}>variant="text"</p>
        <Skeleton variant="text" />
      </div>
      <div>
        <p style={label}>variant="circular"</p>
        <Skeleton variant="circular" width="3rem" />
      </div>
      <div>
        <p style={label}>variant="rectangular"</p>
        <Skeleton variant="rectangular" height="6rem" />
      </div>
      <div>
        <p style={label}>animated={'{false}'}</p>
        <Skeleton variant="rectangular" height="6rem" animated={false} />
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};const S=["Playground","Variants","TextLines","CardPlaceholder","ListPlaceholder","NoAnimation","AllStates"];export{o as AllStates,l as CardPlaceholder,d as ListPlaceholder,c as NoAnimation,i as Playground,n as TextLines,s as Variants,S as __namedExportsOrder,y as default};
