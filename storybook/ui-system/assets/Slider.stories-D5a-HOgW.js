import{j as e,R as c}from"./iframe-B352m8Ic.js";import{S as a}from"./Slider-BzQrYsh5.js";import{B as x}from"./Button-Dn8y6vOd.js";import{s as V,c as b,i as f,r as v}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./vanilla-extract-dynamic.esm-BUlnp6I2.js";import"./use-machine-D8fwiq3C.js";import"./use-machine-sync-CSenzpo8.js";const k={title:"Components/Slider",component:a,tags:["autodocs"]},r={args:{defaultValue:50,min:0,max:100,step:1,disabled:!1,orientation:"horizontal",size:"md",showValue:!0}},t={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:V,children:[e.jsx(a,{label:"Default",defaultValue:50,showValue:!0}),e.jsx(a,{label:"Disabled",defaultValue:30,disabled:!0,showValue:!0}),e.jsx(a,{label:"Min/Max (0-10)",min:0,max:10,defaultValue:5,showValue:!0}),e.jsx(a,{label:"Step (25)",step:25,defaultValue:50,showValue:!0})]})},n={render:()=>e.jsxs("div",{style:V,children:[e.jsx(a,{label:"Small",size:"sm",defaultValue:30,showValue:!0}),e.jsx(a,{label:"Medium (default)",size:"md",defaultValue:50,showValue:!0}),e.jsx(a,{label:"Large",size:"lg",defaultValue:70,showValue:!0})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-end"},children:[e.jsx(a,{orientation:"vertical",defaultValue:30,showValue:!0,size:"sm"}),e.jsx(a,{orientation:"vertical",defaultValue:50,showValue:!0,size:"md"}),e.jsx(a,{orientation:"vertical",defaultValue:70,showValue:!0,size:"lg"}),e.jsx(a,{orientation:"vertical",defaultValue:40,disabled:!0,showValue:!0,size:"md"})]})},o={render:()=>e.jsxs("div",{style:V,children:[e.jsx(a,{label:"Volume",defaultValue:75,showValue:!0}),e.jsx(a,{label:"Brightness",defaultValue:50,showValue:!0}),e.jsx(a,{label:"Temperature (°C)",min:0,max:40,defaultValue:22,showValue:!0})]})},i={render:()=>e.jsxs("div",{style:V,children:[e.jsx(a,{label:"Price ($10-$100)",min:10,max:100,defaultValue:50,showValue:!0}),e.jsx(a,{label:"Age (18-65)",min:18,max:65,defaultValue:30,showValue:!0}),e.jsx(a,{label:"Rating (1-5)",min:1,max:5,step:.5,defaultValue:3.5,showValue:!0})]})},d={render:()=>{const[l,s]=c.useState(50);return e.jsxs("div",{style:b,children:[e.jsx(a,{label:"Controlled Slider",value:l,onValueChange:s,showValue:!0}),e.jsxs("p",{style:f,children:["Current value: ",l]}),e.jsxs("div",{style:v,children:[e.jsx(x,{shape:"outline",size:"sm",onClick:()=>s(0),children:"Min"}),e.jsx(x,{shape:"ghost",size:"sm",onClick:()=>s(50),children:"Reset"}),e.jsx(x,{shape:"outline",size:"sm",onClick:()=>s(100),children:"Max"})]})]})}},m={render:()=>{const[l,s]=c.useState(128),[h,g]=c.useState(128),[p,S]=c.useState(128);return e.jsxs("div",{style:b,children:[e.jsx("h3",{style:{margin:0,color:"var(--color-text-default)",fontSize:"14px",fontWeight:500},children:"RGB Color Picker"}),e.jsx(a,{label:"Red",min:0,max:255,value:l,onValueChange:s,showValue:!0}),e.jsx(a,{label:"Green",min:0,max:255,value:h,onValueChange:g,showValue:!0}),e.jsx(a,{label:"Blue",min:0,max:255,value:p,onValueChange:S,showValue:!0}),e.jsx("div",{style:{width:"200px",height:"100px",backgroundColor:`rgb(${l}, ${h}, ${p})`,border:"1px solid var(--color-border-default)",borderRadius:"4px",marginTop:"0.5rem"}}),e.jsxs("p",{style:f,children:["rgb(",l,", ",h,", ",p,")"]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    controls: {
      disable: true
    }
  },
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
          <Button shape="outline" size="sm" onClick={() => setValue(0)}>
            Min
          </Button>
          <Button shape="ghost" size="sm" onClick={() => setValue(50)}>
            Reset
          </Button>
          <Button shape="outline" size="sm" onClick={() => setValue(100)}>
            Max
          </Button>
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
      }}>
          RGB Color Picker
        </h3>
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
        <p style={infoText}>
          rgb({red}, {green}, {blue})
        </p>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const $=["Playground","AllStates","Sizes","Vertical","WithLabel","CustomRange","Controlled","MultipleSliders"];export{t as AllStates,d as Controlled,i as CustomRange,m as MultipleSliders,r as Playground,n as Sizes,u as Vertical,o as WithLabel,$ as __namedExportsOrder,k as default};
