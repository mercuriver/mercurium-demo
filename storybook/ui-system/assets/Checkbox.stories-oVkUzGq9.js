import{j as e,R as h}from"./iframe-ZuyUgBQM.js";import{C as a}from"./Checkbox-BCC0CNNo.js";import{c as r,a as o,r as b}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./use-toggle-DAwApoL4.js";import"./use-machine-CSDefSMn.js";const g={title:"Components/Checkbox",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["warning","danger"],description:"의미적 상태 variant (체크박스 색상 변경, 미선택 시 border에도 적용)",table:{type:{summary:"StatusVariant"}}},checked:{control:"boolean",description:"제어 모드에서 현재 선택 상태",table:{type:{summary:"boolean"}}},defaultChecked:{control:"boolean",description:"비제어 모드에서 초기 선택 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onCheckedChange:{description:"선택 상태 변경 시 호출되는 콜백",table:{type:{summary:"(checked: boolean) => void"}}}}},t={args:{label:"Agree to terms",defaultChecked:!1,disabled:!1}},s={render:()=>e.jsxs("div",{style:r,children:[e.jsxs("div",{children:[e.jsx("h4",{style:o,children:"States"}),e.jsxs("div",{style:r,children:[e.jsx(a,{label:"Unchecked"}),e.jsx(a,{label:"Checked",defaultChecked:!0}),e.jsx(a,{label:"Unchecked Disabled",disabled:!0}),e.jsx(a,{label:"Checked Disabled",defaultChecked:!0,disabled:!0})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:o,children:"Variants"}),e.jsxs("div",{style:r,children:[e.jsx(a,{label:"Warning",variant:"warning"}),e.jsx(a,{label:"Warning (Checked)",variant:"warning",defaultChecked:!0}),e.jsx(a,{label:"Danger",variant:"danger"}),e.jsx(a,{label:"Danger (Checked)",variant:"danger",defaultChecked:!0})]})]})]})},n={render:()=>e.jsxs("div",{style:r,children:[e.jsx(a,{label:"I agree to the terms and conditions"}),e.jsx(a,{label:"Subscribe to newsletter",defaultChecked:!0}),e.jsx(a,{label:"Enable notifications"})]})},l={render:()=>e.jsxs("div",{style:b,children:[e.jsx(a,{}),e.jsx(a,{defaultChecked:!0}),e.jsx(a,{disabled:!0})]})},d={render:()=>{const[c,i]=h.useState(!1);return e.jsxs("div",{style:r,children:[e.jsx(a,{label:"Controlled Checkbox",checked:c,onCheckedChange:i}),e.jsxs("p",{children:["Current state: ",c?"Checked":"Unchecked"]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Agree to terms',
    defaultChecked: false,
    disabled: false
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <div>
        <h4 style={sectionTitle}>States</h4>
        <div style={column}>
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Unchecked Disabled" disabled />
          <Checkbox label="Checked Disabled" defaultChecked disabled />
        </div>
      </div>
      <div>
        <h4 style={sectionTitle}>Variants</h4>
        <div style={column}>
          <Checkbox label="Warning" variant="warning" />
          <Checkbox label="Warning (Checked)" variant="warning" defaultChecked />
          <Checkbox label="Danger" variant="danger" />
          <Checkbox label="Danger (Checked)" variant="danger" defaultChecked />
        </div>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Checkbox label="I agree to the terms and conditions" />
      <Checkbox label="Subscribe to newsletter" defaultChecked />
      <Checkbox label="Enable notifications" />
    </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={row}>
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox disabled />
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <div style={column}>
        <Checkbox label="Controlled Checkbox" checked={checked} onCheckedChange={setChecked} />
        <p>Current state: {checked ? 'Checked' : 'Unchecked'}</p>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const v=["Playground","AllStates","WithLabel","WithoutLabel","Controlled"];export{s as AllStates,d as Controlled,t as Playground,n as WithLabel,l as WithoutLabel,v as __namedExportsOrder,g as default};
