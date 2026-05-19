import{j as e,R as x}from"./iframe-CF94bgX3.js";import{I as a}from"./Input-VuHWirSc.js";import{B as g}from"./Button-101mMIjl.js";import{c as r,i as b}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./use-machine-DnTSAAnY.js";import"./FormField-BU92sYBa.js";const T={title:"Components/Input",component:a,tags:["autodocs"]},t={args:{placeholder:"Enter text...",size:"md",disabled:!1,readOnly:!1,required:!1,invalid:!1}},s={render:()=>e.jsxs("div",{style:{...r,width:"300px"},children:[e.jsx(a,{placeholder:"Default"}),e.jsx(a,{placeholder:"Disabled",disabled:!0}),e.jsx(a,{placeholder:"ReadOnly",readOnly:!0,value:"Read only text"}),e.jsx(a,{placeholder:"Invalid",invalid:!0,errorMessage:"Invalid input"}),e.jsx(a,{placeholder:"Warning (with message)",warningMessage:"Please double-check this value"}),e.jsx(a,{placeholder:"Warning (border only)",warning:!0}),e.jsx(a,{placeholder:"With Value",value:"Sample text"})]})},n={render:()=>e.jsxs("div",{style:{...r,width:"300px"},children:[e.jsx(a,{label:"Email",placeholder:"Enter your email",type:"email"}),e.jsx(a,{label:"Password",placeholder:"Enter your password",type:"password"}),e.jsx(a,{label:"Required Field",placeholder:"This is required",required:!0})]})},d={render:()=>e.jsxs("div",{style:{...r,width:"300px"},children:[e.jsx(a,{label:"Username",placeholder:"Enter username",hint:"Must be at least 3 characters"}),e.jsx(a,{label:"Email",placeholder:"Enter your email",hint:"We'll never share your email",type:"email"})]})},o={render:()=>e.jsxs("div",{style:{...r,width:"300px"},children:[e.jsx(a,{label:"Email",placeholder:"Enter your email",type:"email",invalid:!0,errorMessage:"Please enter a valid email address"}),e.jsx(a,{label:"Password",placeholder:"Enter your password",type:"password",invalid:!0,errorMessage:"Password must be at least 8 characters"})]})},i={render:()=>e.jsxs("div",{style:{...r,width:"300px"},children:[e.jsx(a,{label:"Username",placeholder:"Enter username",value:"admin",warningMessage:"This username is already in use by another account"}),e.jsx(a,{label:"Budget",placeholder:"Enter amount",type:"number",value:"9500",warningMessage:"Approaching the limit of 10,000"})]})},p={render:()=>e.jsxs("div",{style:{...r,width:"300px"},children:[e.jsx(a,{size:"sm",placeholder:"Small",label:"Small"}),e.jsx(a,{size:"md",placeholder:"Medium",label:"Medium"}),e.jsx(a,{size:"lg",placeholder:"Large",label:"Large"})]})},u={render:()=>e.jsxs("div",{style:{...r,width:"300px"},children:[e.jsx(a,{type:"text",label:"Text",placeholder:"Text input"}),e.jsx(a,{type:"email",label:"Email",placeholder:"email@example.com"}),e.jsx(a,{type:"password",label:"Password",placeholder:"Enter password"}),e.jsx(a,{type:"number",label:"Number",placeholder:"0"}),e.jsx(a,{type:"tel",label:"Telephone",placeholder:"+1 (555) 000-0000"}),e.jsx(a,{type:"url",label:"URL",placeholder:"https://example.com"}),e.jsx(a,{type:"search",label:"Search",placeholder:"Search..."})]})},c={render:()=>{const[l,h]=x.useState("");return e.jsxs("div",{style:{...r,width:"300px"},children:[e.jsx(a,{label:"Controlled Input",placeholder:"Type something...",value:l,onValueChange:h}),e.jsxs("p",{style:b,children:["Current value: ",l||"(empty)"]}),e.jsxs("p",{style:b,children:["Character count: ",l.length]})]})}},m={render:()=>{const[l,h]=x.useState(""),y=x.useRef(null),v=()=>{y.current&&h(y.current.value)};return e.jsxs("div",{style:{...r,width:"300px"},children:[e.jsx(a,{ref:y,label:"Uncontrolled Input",placeholder:"Type and submit...",defaultValue:"Default value"}),e.jsx(g,{onClick:v,intent:"default",shape:"outline",size:"sm",children:"Submit"}),l&&e.jsxs("p",{style:b,children:["Submitted: ",l]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    size: 'md',
    disabled: false,
    readOnly: false,
    required: false,
    invalid: false
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...column,
    width: '300px'
  }}>
      <Input placeholder="Default" />
      <Input placeholder="Disabled" disabled={true} />
      <Input placeholder="ReadOnly" readOnly={true} value="Read only text" />
      <Input placeholder="Invalid" invalid={true} errorMessage="Invalid input" />
      <Input placeholder="Warning (with message)" warningMessage="Please double-check this value" />
      <Input placeholder="Warning (border only)" warning={true} />
      <Input placeholder="With Value" value="Sample text" />
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...column,
    width: '300px'
  }}>
      <Input label="Email" placeholder="Enter your email" type="email" />
      <Input label="Password" placeholder="Enter your password" type="password" />
      <Input label="Required Field" placeholder="This is required" required={true} />
    </div>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...column,
    width: '300px'
  }}>
      <Input label="Username" placeholder="Enter username" hint="Must be at least 3 characters" />
      <Input label="Email" placeholder="Enter your email" hint="We'll never share your email" type="email" />
    </div>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...column,
    width: '300px'
  }}>
      <Input label="Email" placeholder="Enter your email" type="email" invalid={true} errorMessage="Please enter a valid email address" />
      <Input label="Password" placeholder="Enter your password" type="password" invalid={true} errorMessage="Password must be at least 8 characters" />
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...column,
    width: '300px'
  }}>
      <Input label="Username" placeholder="Enter username" value="admin" warningMessage="This username is already in use by another account" />
      <Input label="Budget" placeholder="Enter amount" type="number" value="9500" warningMessage="Approaching the limit of 10,000" />
    </div>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...column,
    width: '300px'
  }}>
      <Input size="sm" placeholder="Small" label="Small" />
      <Input size="md" placeholder="Medium" label="Medium" />
      <Input size="lg" placeholder="Large" label="Large" />
    </div>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...column,
    width: '300px'
  }}>
      <Input type="text" label="Text" placeholder="Text input" />
      <Input type="email" label="Email" placeholder="email@example.com" />
      <Input type="password" label="Password" placeholder="Enter password" />
      <Input type="number" label="Number" placeholder="0" />
      <Input type="tel" label="Telephone" placeholder="+1 (555) 000-0000" />
      <Input type="url" label="URL" placeholder="https://example.com" />
      <Input type="search" label="Search" placeholder="Search..." />
    </div>
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('');
    return <div style={{
      ...column,
      width: '300px'
    }}>
        <Input label="Controlled Input" placeholder="Type something..." value={value} onValueChange={setValue} />
        <p style={infoText}>Current value: {value || '(empty)'}</p>
        <p style={infoText}>Character count: {value.length}</p>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [submittedValue, setSubmittedValue] = React.useState('');
    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleSubmit = () => {
      if (inputRef.current) {
        setSubmittedValue(inputRef.current.value);
      }
    };
    return <div style={{
      ...column,
      width: '300px'
    }}>
        <Input ref={inputRef} label="Uncontrolled Input" placeholder="Type and submit..." defaultValue="Default value" />
        <Button onClick={handleSubmit} intent="default" shape="outline" size="sm">Submit</Button>
        {submittedValue && <p style={infoText}>Submitted: {submittedValue}</p>}
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const M=["Playground","AllStates","WithLabel","WithHint","WithError","WithWarning","Sizes","Types","Controlled","Uncontrolled"];export{s as AllStates,c as Controlled,t as Playground,p as Sizes,u as Types,m as Uncontrolled,o as WithError,d as WithHint,n as WithLabel,i as WithWarning,M as __namedExportsOrder,T as default};
