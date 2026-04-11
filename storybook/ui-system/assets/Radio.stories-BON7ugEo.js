import{j as e,R as h}from"./iframe-omubX4Zv.js";import{R as a}from"./Radio-rf8l2lRG.js";import{c as r,a as i,r as k}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./use-toggle-Ngt-NwjI.js";import"./index-ZcSIculg.js";import"./use-interaction-state-Dtf1cT8c.js";const j={title:"Components/Radio",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["danger","warning"],description:"의미적 상태 variant (라디오 색상 변경, 미선택 시 border에도 적용)",table:{type:{summary:"StatusVariant"}}},checked:{control:"boolean",description:"제어 모드에서 현재 선택 상태",table:{type:{summary:"boolean"}}},onCheckedChange:{description:"선택 상태 변경 시 호출되는 콜백",table:{type:{summary:"(checked: boolean) => void"}}}}},s={args:{label:"Option A",checked:!1,disabled:!1}},d={render:()=>e.jsxs("div",{style:r,children:[e.jsxs("div",{children:[e.jsx("h4",{style:i,children:"States"}),e.jsxs("div",{style:r,children:[e.jsx(a,{label:"Unchecked",checked:!1}),e.jsx(a,{label:"Checked",checked:!0}),e.jsx(a,{label:"Unchecked Disabled",checked:!1,disabled:!0}),e.jsx(a,{label:"Checked Disabled",checked:!0,disabled:!0})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:i,children:"Variants"}),e.jsxs("div",{style:r,children:[e.jsx(a,{label:"Warning",variant:"warning",checked:!1}),e.jsx(a,{label:"Warning (Checked)",variant:"warning",checked:!0}),e.jsx(a,{label:"Danger",variant:"danger",checked:!1}),e.jsx(a,{label:"Danger (Checked)",variant:"danger",checked:!0})]})]})]})},n={render:()=>e.jsxs("div",{style:r,children:[e.jsx(a,{label:"Option A"}),e.jsx(a,{label:"Option B",checked:!0}),e.jsx(a,{label:"Option C"})]})},c={render:()=>e.jsxs("div",{style:k,children:[e.jsx(a,{checked:!1}),e.jsx(a,{checked:!0}),e.jsx(a,{checked:!1,disabled:!0})]})},t={render:()=>{const[l,o]=h.useState(!1);return e.jsxs("div",{style:r,children:[e.jsx(a,{label:"Controlled Radio",checked:l,onCheckedChange:o}),e.jsxs("p",{children:["Current state: ",l?"Checked":"Unchecked"]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    checked: false,
    disabled: false
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <div>
        <h4 style={sectionTitle}>States</h4>
        <div style={column}>
          <Radio label="Unchecked" checked={false} />
          <Radio label="Checked" checked={true} />
          <Radio label="Unchecked Disabled" checked={false} disabled />
          <Radio label="Checked Disabled" checked={true} disabled />
        </div>
      </div>
      <div>
        <h4 style={sectionTitle}>Variants</h4>
        <div style={column}>
          <Radio label="Warning" variant="warning" checked={false} />
          <Radio label="Warning (Checked)" variant="warning" checked={true} />
          <Radio label="Danger" variant="danger" checked={false} />
          <Radio label="Danger (Checked)" variant="danger" checked={true} />
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Radio label="Option A" />
      <Radio label="Option B" checked={true} />
      <Radio label="Option C" />
    </div>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={row}>
      <Radio checked={false} />
      <Radio checked={true} />
      <Radio checked={false} disabled />
    </div>
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <div style={column}>
        <Radio label="Controlled Radio" checked={checked} onCheckedChange={setChecked} />
        <p>Current state: {checked ? 'Checked' : 'Unchecked'}</p>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const C=["Playground","AllStates","WithLabel","WithoutLabel","Controlled"];export{d as AllStates,t as Controlled,s as Playground,n as WithLabel,c as WithoutLabel,C as __namedExportsOrder,j as default};
