import{j as e,R as c}from"./iframe-CehWmMV7.js";import{S as l}from"./Slider-BFFqPEqu.js";import{B as x}from"./Button-jzjfASJv.js";import{s as V,c as f,i as b,r as v}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./use-machine-BeNtetTh.js";import"./use-interaction-state-C59fShYg.js";const M={title:"Components/Slider",component:l,tags:["autodocs"]},r={args:{defaultValue:50,min:0,max:100,step:1,disabled:!1,orientation:"horizontal",size:"md",showValue:!0}},t={render:()=>e.jsxs("div",{style:V,children:[e.jsx(l,{label:"Default",defaultValue:50,showValue:!0}),e.jsx(l,{label:"Disabled",defaultValue:30,disabled:!0,showValue:!0}),e.jsx(l,{label:"Min/Max (0-10)",min:0,max:10,defaultValue:5,showValue:!0}),e.jsx(l,{label:"Step (25)",step:25,defaultValue:50,showValue:!0})]})},n={render:()=>e.jsxs("div",{style:V,children:[e.jsx(l,{label:"Small",size:"sm",defaultValue:30,showValue:!0}),e.jsx(l,{label:"Medium (default)",size:"md",defaultValue:50,showValue:!0}),e.jsx(l,{label:"Large",size:"lg",defaultValue:70,showValue:!0})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-end"},children:[e.jsx(l,{orientation:"vertical",defaultValue:30,showValue:!0,size:"sm"}),e.jsx(l,{orientation:"vertical",defaultValue:50,showValue:!0,size:"md"}),e.jsx(l,{orientation:"vertical",defaultValue:70,showValue:!0,size:"lg"}),e.jsx(l,{orientation:"vertical",defaultValue:40,disabled:!0,showValue:!0,size:"md"})]})},o={render:()=>e.jsxs("div",{style:V,children:[e.jsx(l,{label:"Volume",defaultValue:75,showValue:!0}),e.jsx(l,{label:"Brightness",defaultValue:50,showValue:!0}),e.jsx(l,{label:"Temperature (°C)",min:0,max:40,defaultValue:22,showValue:!0})]})},i={render:()=>e.jsxs("div",{style:V,children:[e.jsx(l,{label:"Price ($10-$100)",min:10,max:100,defaultValue:50,showValue:!0}),e.jsx(l,{label:"Age (18-65)",min:18,max:65,defaultValue:30,showValue:!0}),e.jsx(l,{label:"Rating (1-5)",min:1,max:5,step:.5,defaultValue:3.5,showValue:!0})]})},d={render:()=>{const[a,s]=c.useState(50);return e.jsxs("div",{style:f,children:[e.jsx(l,{label:"Controlled Slider",value:a,onValueChange:s,showValue:!0}),e.jsxs("p",{style:b,children:["Current value: ",a]}),e.jsxs("div",{style:v,children:[e.jsx(x,{shape:"outline",size:"sm",onClick:()=>s(0),children:"Min"}),e.jsx(x,{shape:"ghost",size:"sm",onClick:()=>s(50),children:"Reset"}),e.jsx(x,{shape:"outline",size:"sm",onClick:()=>s(100),children:"Max"})]})]})}},m={render:()=>{const[a,s]=c.useState(128),[h,g]=c.useState(128),[p,S]=c.useState(128);return e.jsxs("div",{style:f,children:[e.jsx("h3",{style:{margin:0,color:"var(--color-text-default)",fontSize:"14px",fontWeight:500},children:"RGB Color Picker"}),e.jsx(l,{label:"Red",min:0,max:255,value:a,onValueChange:s,showValue:!0}),e.jsx(l,{label:"Green",min:0,max:255,value:h,onValueChange:g,showValue:!0}),e.jsx(l,{label:"Blue",min:0,max:255,value:p,onValueChange:S,showValue:!0}),e.jsx("div",{style:{width:"200px",height:"100px",backgroundColor:`rgb(${a}, ${h}, ${p})`,border:"1px solid var(--color-border-default)",borderRadius:"4px",marginTop:"0.5rem"}}),e.jsxs("p",{style:b,children:["rgb(",a,", ",h,", ",p,")"]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    orientation: 'horizontal',
    size: 'md',
    showValue: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={section}>
      <Slider label="Default" defaultValue={50} showValue />
      <Slider label="Disabled" defaultValue={30} disabled showValue />
      <Slider label="Min/Max (0-10)" min={0} max={10} defaultValue={5} showValue />
      <Slider label="Step (25)" step={25} defaultValue={50} showValue />
    </div>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={section}>
      <Slider label="Small" size="sm" defaultValue={30} showValue />
      <Slider label="Medium (default)" size="md" defaultValue={50} showValue />
      <Slider label="Large" size="lg" defaultValue={70} showValue />
    </div>
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-end'
  }}>
      <Slider orientation="vertical" defaultValue={30} showValue size="sm" />
      <Slider orientation="vertical" defaultValue={50} showValue size="md" />
      <Slider orientation="vertical" defaultValue={70} showValue size="lg" />
      <Slider orientation="vertical" defaultValue={40} disabled showValue size="md" />
    </div>
}`,...u.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={section}>
      <Slider label="Volume" defaultValue={75} showValue />
      <Slider label="Brightness" defaultValue={50} showValue />
      <Slider label="Temperature (°C)" min={0} max={40} defaultValue={22} showValue />
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={section}>
      <Slider label="Price ($10-$100)" min={10} max={100} defaultValue={50} showValue />
      <Slider label="Age (18-65)" min={18} max={65} defaultValue={30} showValue />
      <Slider label="Rating (1-5)" min={1} max={5} step={0.5} defaultValue={3.5} showValue />
    </div>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState(50);
    return <div style={column}>
        <Slider label="Controlled Slider" value={value} onValueChange={setValue} showValue />
        <p style={infoText}>Current value: {value}</p>
        <div style={row}>
          <Button shape="outline" size="sm" onClick={() => setValue(0)}>Min</Button>
          <Button shape="ghost" size="sm" onClick={() => setValue(50)}>Reset</Button>
          <Button shape="outline" size="sm" onClick={() => setValue(100)}>Max</Button>
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [red, setRed] = React.useState(128);
    const [green, setGreen] = React.useState(128);
    const [blue, setBlue] = React.useState(128);
    return <div style={column}>
        <h3 style={{
        margin: 0,
        color: 'var(--color-text-default)',
        fontSize: '14px',
        fontWeight: 500
      }}>RGB Color Picker</h3>
        <Slider label="Red" min={0} max={255} value={red} onValueChange={setRed} showValue />
        <Slider label="Green" min={0} max={255} value={green} onValueChange={setGreen} showValue />
        <Slider label="Blue" min={0} max={255} value={blue} onValueChange={setBlue} showValue />
        <div style={{
        width: '200px',
        height: '100px',
        backgroundColor: \`rgb(\${red}, \${green}, \${blue})\`,
        border: \`1px solid var(--color-border-default)\`,
        borderRadius: '4px',
        marginTop: '0.5rem'
      }} />
        <p style={infoText}>rgb({red}, {green}, {blue})</p>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const k=["Playground","AllStates","Sizes","Vertical","WithLabel","CustomRange","Controlled","MultipleSliders"];export{t as AllStates,d as Controlled,i as CustomRange,m as MultipleSliders,r as Playground,n as Sizes,u as Vertical,o as WithLabel,k as __namedExportsOrder,M as default};
