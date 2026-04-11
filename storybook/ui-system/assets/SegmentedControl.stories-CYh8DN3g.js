import{j as e,r as p}from"./iframe-omubX4Zv.js";import{S as a}from"./SegmentedControl-ByZcMvgo.js";import{c,l as u}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ZcSIculg.js";import"./use-interaction-state-Dtf1cT8c.js";const S={title:"Components/SegmentedControl",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
SegmentedControl은 2개 이상의 값 중 하나를 선택하는 컴포넌트입니다.

## Features
- **Sizes**: sm, md, lg
- **Keyboard Navigation**: Arrow keys, Home, End, Enter, Space
- **Individual Item Disabled**: 특정 세그먼트만 비활성화
- **ARIA**: role="radiogroup" / role="radio"

## Usage
\`\`\`tsx
import { SegmentedControl } from '@mercurium/ui-system-react';

<SegmentedControl
  items={[
    { value: 'list', label: 'List' },
    { value: 'grid', label: 'Grid' },
  ]}
  defaultValue="list"
  onChange={(value) => console.log(value)}
/>
\`\`\`
        `}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"세그먼트 크기",table:{type:{summary:"ComponentSize"},defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"전체 비활성화",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},s={args:{items:[{value:"list",label:"List"},{value:"grid",label:"Grid"},{value:"table",label:"Table"}],defaultValue:"list",size:"md"}},r={render:()=>{const l=[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],m=[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Disabled",disabled:!0}];return e.jsx("div",{style:{...c,alignItems:"flex-start"},children:["sm","md","lg"].map(t=>e.jsxs("div",{children:[e.jsxs("p",{style:u,children:['size="',t,'"']}),e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(a,{items:l,defaultValue:"a",size:t}),e.jsx(a,{items:m,defaultValue:"a",size:t}),e.jsx(a,{items:l,defaultValue:"a",size:t,disabled:!0})]})]},t))})}},n={render:()=>{const l=[{value:"pagination",label:"Pagination"},{value:"scroll",label:"Scroll"}];return e.jsxs("div",{style:{...c,alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("p",{style:u,children:"sm"}),e.jsx(a,{items:l,defaultValue:"pagination",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{style:u,children:"md"}),e.jsx(a,{items:l,defaultValue:"pagination",size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{style:u,children:"lg"}),e.jsx(a,{items:l,defaultValue:"pagination",size:"lg"})]})]})}},i={render:()=>{const[l,m]=p.useState("daily"),t=[{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"}];return e.jsxs("div",{style:c,children:[e.jsx(a,{items:t,value:l,onChange:m}),e.jsxs("p",{style:{fontSize:14},children:["Selected: ",e.jsx("strong",{children:l})]})]})}},o={render:()=>{const l=[{value:"chart",label:"Chart"},{value:"table",label:"Table"},{value:"raw",label:"Raw",disabled:!0}];return e.jsx(a,{items:l,defaultValue:"chart"})}},d={args:{items:[{value:"a",label:"Option A"},{value:"b",label:"Option B"}],defaultValue:"a",disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      value: 'list',
      label: 'List'
    }, {
      value: 'grid',
      label: 'Grid'
    }, {
      value: 'table',
      label: 'Table'
    }],
    defaultValue: 'list',
    size: 'md'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      value: 'a',
      label: 'Option A'
    }, {
      value: 'b',
      label: 'Option B'
    }, {
      value: 'c',
      label: 'Option C'
    }];
    const itemsWithDisabled = [{
      value: 'a',
      label: 'Option A'
    }, {
      value: 'b',
      label: 'Option B'
    }, {
      value: 'c',
      label: 'Disabled',
      disabled: true
    }];
    return <div style={{
      ...column,
      alignItems: 'flex-start'
    }}>
        {(['sm', 'md', 'lg'] as const).map(size => <div key={size}>
            <p style={label}>size="{size}"</p>
            <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
              <SegmentedControl items={items} defaultValue="a" size={size} />
              <SegmentedControl items={itemsWithDisabled} defaultValue="a" size={size} />
              <SegmentedControl items={items} defaultValue="a" size={size} disabled />
            </div>
          </div>)}
      </div>;
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      value: 'pagination',
      label: 'Pagination'
    }, {
      value: 'scroll',
      label: 'Scroll'
    }];
    return <div style={{
      ...column,
      alignItems: 'flex-start'
    }}>
        <div>
          <p style={label}>sm</p>
          <SegmentedControl items={items} defaultValue="pagination" size="sm" />
        </div>
        <div>
          <p style={label}>md</p>
          <SegmentedControl items={items} defaultValue="pagination" size="md" />
        </div>
        <div>
          <p style={label}>lg</p>
          <SegmentedControl items={items} defaultValue="pagination" size="lg" />
        </div>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('daily');
    const items = [{
      value: 'daily',
      label: 'Daily'
    }, {
      value: 'weekly',
      label: 'Weekly'
    }, {
      value: 'monthly',
      label: 'Monthly'
    }];
    return <div style={column}>
        <SegmentedControl items={items} value={value} onChange={setValue} />
        <p style={{
        fontSize: 14
      }}>
          Selected: <strong>{value}</strong>
        </p>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      value: 'chart',
      label: 'Chart'
    }, {
      value: 'table',
      label: 'Table'
    }, {
      value: 'raw',
      label: 'Raw',
      disabled: true
    }];
    return <SegmentedControl items={items} defaultValue="chart" />;
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      value: 'a',
      label: 'Option A'
    }, {
      value: 'b',
      label: 'Option B'
    }],
    defaultValue: 'a',
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};const h=["Playground","AllStates","AllSizes","Controlled","WithDisabledItems","FullDisabled"];export{n as AllSizes,r as AllStates,i as Controlled,d as FullDisabled,s as Playground,o as WithDisabledItems,h as __namedExportsOrder,S as default};
