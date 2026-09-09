import{j as e,r as b}from"./iframe-B352m8Ic.js";import{S as a}from"./SegmentedControl-QpOiT8R2.js";import{c as p,l as m}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-EMnZcfWy.js";import"./index-CoG5Onai.js";import"./index-BQaWQ9Wz.js";import"./use-merged-ref-C5T0hISp.js";import"./use-popup-close-Bk1BnKz0.js";import"./use-machine-D8fwiq3C.js";import"./use-machine-sync-CSenzpo8.js";const w={title:"Components/SegmentedControl",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"세그먼트 크기",table:{type:{summary:"ComponentSize"},defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"전체 비활성화",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},s={args:{items:[{value:"list",label:"List"},{value:"grid",label:"Grid"},{value:"table",label:"Table"}],defaultValue:"list",size:"md"}},r={parameters:{controls:{disable:!0}},render:()=>{const l=[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],c=[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Disabled",disabled:!0}];return e.jsx("div",{style:{...p,alignItems:"flex-start"},children:["sm","md","lg"].map(t=>e.jsxs("div",{children:[e.jsxs("p",{style:m,children:['size="',t,'"']}),e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(a,{items:l,defaultValue:"a",size:t}),e.jsx(a,{items:c,defaultValue:"a",size:t}),e.jsx(a,{items:l,defaultValue:"a",size:t,disabled:!0})]})]},t))})}},i={render:()=>{const l=[{value:"pagination",label:"Pagination"},{value:"scroll",label:"Scroll"}];return e.jsxs("div",{style:{...p,alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("p",{style:m,children:"sm"}),e.jsx(a,{items:l,defaultValue:"pagination",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{style:m,children:"md"}),e.jsx(a,{items:l,defaultValue:"pagination",size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{style:m,children:"lg"}),e.jsx(a,{items:l,defaultValue:"pagination",size:"lg"})]})]})}},o={render:()=>{const[l,c]=b.useState("daily"),t=[{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"}];return e.jsxs("div",{style:p,children:[e.jsx(a,{items:t,value:l,onChange:c}),e.jsxs("p",{style:{fontSize:14},children:["Selected: ",e.jsx("strong",{children:l})]})]})}},n={render:()=>{const l=[{value:"chart",label:"Chart"},{value:"table",label:"Table"},{value:"raw",label:"Raw",disabled:!0}];return e.jsx(a,{items:l,defaultValue:"chart"})}},d={parameters:{docs:{description:{story:"Each item can carry a `tooltip` string. Useful for icon-only segments where the label alone is not self-explanatory."}}},render:()=>{const l=[{value:"list",label:"L",tooltip:"List view"},{value:"grid",label:"G",tooltip:"Grid view"},{value:"table",label:"T",tooltip:"Table view"}];return e.jsx(a,{items:l,defaultValue:"list",size:"sm"})}},u={args:{items:[{value:"a",label:"Option A"},{value:"b",label:"Option B"}],defaultValue:"a",disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    controls: {
      disable: true
    }
  },
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Each item can carry a \`tooltip\` string. Useful for icon-only segments where the label alone is not self-explanatory.'
      }
    }
  },
  render: () => {
    const items = [{
      value: 'list',
      label: 'L',
      tooltip: 'List view'
    }, {
      value: 'grid',
      label: 'G',
      tooltip: 'Grid view'
    }, {
      value: 'table',
      label: 'T',
      tooltip: 'Table view'
    }];
    return <SegmentedControl items={items} defaultValue="list" size="sm" />;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const O=["Playground","AllStates","AllSizes","Controlled","WithDisabledItems","WithTooltips","FullDisabled"];export{i as AllSizes,r as AllStates,o as Controlled,u as FullDisabled,s as Playground,n as WithDisabledItems,d as WithTooltips,O as __namedExportsOrder,w as default};
