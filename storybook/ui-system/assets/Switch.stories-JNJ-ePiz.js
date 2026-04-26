import{j as e,r as h}from"./iframe-Dr7tdnDG.js";import{S as t}from"./Switch-C_KVZ1aF.js";import{s as u,a as i,c as a,i as m,r as f}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./use-toggle-Ddm6cjK0.js";import"./use-machine-Df02H652.js";import"./use-interaction-state-BxPjOGDk.js";const y={title:"Components/Switch",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
Switch 컴포넌트는 on/off 상태를 슬라이더 형태로 전환하는 컴포넌트입니다.

## Features
- **Sizes**: sm, md, lg
- **Variants**: danger, warning (주의가 필요한 동작에 사용)
- **States**: checked, disabled
- **Controlled / Uncontrolled**: checked prop으로 제어하거나 defaultChecked로 초기값만 설정

## Usage
\`\`\`tsx
import { Switch } from '@mercurium/ui-system-react';

// Uncontrolled
<Switch defaultChecked={false} />

// Controlled
const [checked, setChecked] = useState(false);
<Switch checked={checked} onCheckedChange={setChecked} />
\`\`\`
        `}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"스위치 크기",table:{type:{summary:"ComponentSize"},defaultValue:{summary:"md"}}},checked:{control:"boolean",description:"제어 모드에서 현재 선택 상태",table:{type:{summary:"boolean"}}},defaultChecked:{control:"boolean",description:"비제어 모드에서 초기 선택 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"비활성화 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onCheckedChange:{description:"선택 상태 변경 시 호출되는 콜백",table:{type:{summary:"(checked: boolean) => void"}}},variant:{control:"select",options:["danger","warning"],description:"의미적 상태 variant (활성화 시 트랙 색상 변경)",table:{type:{summary:"StatusVariant"}}}}},s={args:{size:"md",defaultChecked:!1,disabled:!1}},n={render:()=>e.jsxs("div",{style:u,children:[e.jsxs("div",{children:[e.jsx("h4",{style:i,children:"States"}),e.jsxs("div",{style:a,children:[e.jsx(t,{label:"Off"}),e.jsx(t,{label:"On",defaultChecked:!0}),e.jsx(t,{label:"Off Disabled",disabled:!0}),e.jsx(t,{label:"On Disabled",disabled:!0,defaultChecked:!0})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:i,children:"Variants"}),e.jsxs("div",{style:a,children:[e.jsx(t,{label:"Warning (Off)",variant:"warning"}),e.jsx(t,{label:"Warning (On)",variant:"warning",defaultChecked:!0}),e.jsx(t,{label:"Danger (Off)",variant:"danger"}),e.jsx(t,{label:"Danger (On)",variant:"danger",defaultChecked:!0})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:i,children:"Sizes"}),e.jsxs("div",{style:a,children:[e.jsx(t,{label:"Small",size:"sm",defaultChecked:!0}),e.jsx(t,{label:"Medium",size:"md",defaultChecked:!0}),e.jsx(t,{label:"Large",size:"lg",defaultChecked:!0})]})]})]})},l={render:()=>e.jsxs("div",{style:a,children:[e.jsx(t,{label:"Enable notifications"}),e.jsx(t,{label:"Dark mode",defaultChecked:!0}),e.jsx(t,{label:"Auto-save"})]})},r={render:()=>e.jsxs("div",{style:f,children:[e.jsx(t,{}),e.jsx(t,{defaultChecked:!0}),e.jsx(t,{disabled:!0})]})},d={render:function(){const[c,o]=h.useState(!1);return e.jsxs("div",{style:a,children:[e.jsx(t,{checked:c,onCheckedChange:o}),e.jsxs("p",{style:m,children:["Current state: ",e.jsx("strong",{children:c?"ON":"OFF"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    defaultChecked: false,
    disabled: false
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={section}>
      <div>
        <h4 style={sectionTitle}>States</h4>
        <div style={column}>
          <Switch label="Off" />
          <Switch label="On" defaultChecked />
          <Switch label="Off Disabled" disabled />
          <Switch label="On Disabled" disabled defaultChecked />
        </div>
      </div>
      <div>
        <h4 style={sectionTitle}>Variants</h4>
        <div style={column}>
          <Switch label="Warning (Off)" variant="warning" />
          <Switch label="Warning (On)" variant="warning" defaultChecked />
          <Switch label="Danger (Off)" variant="danger" />
          <Switch label="Danger (On)" variant="danger" defaultChecked />
        </div>
      </div>
      <div>
        <h4 style={sectionTitle}>Sizes</h4>
        <div style={column}>
          <Switch label="Small" size="sm" defaultChecked />
          <Switch label="Medium" size="md" defaultChecked />
          <Switch label="Large" size="lg" defaultChecked />
        </div>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Switch label="Enable notifications" />
      <Switch label="Dark mode" defaultChecked />
      <Switch label="Auto-save" />
    </div>
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={row}>
      <Switch />
      <Switch defaultChecked />
      <Switch disabled />
    </div>
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function ControlledSwitch() {
    const [checked, setChecked] = useState(false);
    return <div style={column}>
        <Switch checked={checked} onCheckedChange={setChecked} />
        <p style={infoText}>
          Current state: <strong>{checked ? 'ON' : 'OFF'}</strong>
        </p>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const j=["Playground","AllStates","WithLabel","WithoutLabel","Controlled"];export{n as AllStates,d as Controlled,s as Playground,l as WithLabel,r as WithoutLabel,j as __namedExportsOrder,y as default};
