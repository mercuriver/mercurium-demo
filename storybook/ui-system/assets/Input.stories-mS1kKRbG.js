import{j as e,R as b}from"./iframe-B352m8Ic.js";import{I as r}from"./Input-Dcs7U4OP.js";import{B as g}from"./Button-Dn8y6vOd.js";import{c as a,i as x}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./FormField-Df8M80yJ.js";import"./form-message-DMEeDgMD.js";import"./use-machine-D8fwiq3C.js";import"./use-machine-sync-CSenzpo8.js";const W={title:"Components/Input",component:r,tags:["autodocs"]},t={args:{placeholder:"Enter text...",size:"md",disabled:!1,readOnly:!1,required:!1,invalid:!1}},s={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{...a,width:"300px"},children:[e.jsx(r,{placeholder:"Default"}),e.jsx(r,{placeholder:"Disabled",disabled:!0}),e.jsx(r,{placeholder:"ReadOnly",readOnly:!0,value:"Read only text"}),e.jsx(r,{placeholder:"Invalid",invalid:!0,errorMessage:"Invalid input"}),e.jsx(r,{placeholder:"Warning (with message)",warningMessage:"Please double-check this value"}),e.jsx(r,{placeholder:"Warning (border only)",warning:!0}),e.jsx(r,{placeholder:"With Value",value:"Sample text"})]})},n={render:()=>e.jsxs("div",{style:{...a,width:"300px"},children:[e.jsx(r,{label:"Email",placeholder:"Enter your email",type:"email"}),e.jsx(r,{label:"Password",placeholder:"Enter your password",type:"password"}),e.jsx(r,{label:"Required Field",placeholder:"This is required",required:!0})]})},o={render:()=>e.jsxs("div",{style:{...a,width:"300px"},children:[e.jsx(r,{label:"Username",placeholder:"Enter username",hint:"Must be at least 3 characters"}),e.jsx(r,{label:"Email",placeholder:"Enter your email",hint:"We'll never share your email",type:"email"})]})},d={render:()=>e.jsxs("div",{style:{...a,width:"300px"},children:[e.jsx(r,{label:"Email",placeholder:"Enter your email",type:"email",invalid:!0,errorMessage:"Please enter a valid email address"}),e.jsx(r,{label:"Password",placeholder:"Enter your password",type:"password",invalid:!0,errorMessage:"Password must be at least 8 characters"})]})},i={render:()=>e.jsxs("div",{style:{...a,width:"300px"},children:[e.jsx(r,{label:"Username",placeholder:"Enter username",value:"admin",warningMessage:"This username is already in use by another account"}),e.jsx(r,{label:"Budget",placeholder:"Enter amount",type:"number",value:"9500",warningMessage:"Approaching the limit of 10,000"})]})},p={render:()=>e.jsxs("div",{style:{...a,width:"300px"},children:[e.jsx(r,{size:"sm",placeholder:"Small",label:"Small"}),e.jsx(r,{size:"md",placeholder:"Medium",label:"Medium"}),e.jsx(r,{size:"lg",placeholder:"Large",label:"Large"})]})},u={render:()=>e.jsxs("div",{style:{...a,width:"300px"},children:[e.jsx(r,{type:"text",label:"Text",placeholder:"Text input"}),e.jsx(r,{type:"email",label:"Email",placeholder:"email@example.com"}),e.jsx(r,{type:"password",label:"Password",placeholder:"Enter password"}),e.jsx(r,{type:"number",label:"Number",placeholder:"0"}),e.jsx(r,{type:"tel",label:"Telephone",placeholder:"+1 (555) 000-0000"}),e.jsx(r,{type:"url",label:"URL",placeholder:"https://example.com"}),e.jsx(r,{type:"search",label:"Search",placeholder:"Search..."})]})},c={render:()=>{const[l,h]=b.useState("");return e.jsxs("div",{style:{...a,width:"300px"},children:[e.jsx(r,{label:"Controlled Input",placeholder:"Type something...",value:l,onValueChange:h}),e.jsxs("p",{style:x,children:["Current value: ",l||"(empty)"]}),e.jsxs("p",{style:x,children:["Character count: ",l.length]})]})}},m={render:()=>{const[l,h]=b.useState(""),y=b.useRef(null),v=()=>{y.current&&h(y.current.value)};return e.jsxs("div",{style:{...a,width:"300px"},children:[e.jsx(r,{ref:y,label:"Uncontrolled Input",placeholder:"Type and submit...",defaultValue:"Default value"}),e.jsx(g,{onClick:v,intent:"default",shape:"outline",size:"sm",children:"Submit"}),l&&e.jsxs("p",{style:x,children:["Submitted: ",l]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    size: 'md',
    disabled: false,
    readOnly: false,
    required: false,
    invalid: false
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...column,
    width: '300px'
  }}>
      <Input label="Username" placeholder="Enter username" hint="Must be at least 3 characters" />
      <Input label="Email" placeholder="Enter your email" hint="We'll never share your email" type="email" />
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    ...column,
    width: '300px'
  }}>
      <Input label="Email" placeholder="Enter your email" type="email" invalid={true} errorMessage="Please enter a valid email address" />
      <Input label="Password" placeholder="Enter your password" type="password" invalid={true} errorMessage="Password must be at least 8 characters" />
    </div>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        <Button onClick={handleSubmit} intent="default" shape="outline" size="sm">
          Submit
        </Button>
        {submittedValue && <p style={infoText}>Submitted: {submittedValue}</p>}
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const V=["Playground","AllStates","WithLabel","WithHint","WithError","WithWarning","Sizes","Types","Controlled","Uncontrolled"];export{s as AllStates,c as Controlled,t as Playground,p as Sizes,u as Types,m as Uncontrolled,d as WithError,o as WithHint,n as WithLabel,i as WithWarning,V as __namedExportsOrder,W as default};
