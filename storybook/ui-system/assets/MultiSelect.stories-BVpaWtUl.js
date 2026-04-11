import{r,j as e}from"./iframe-omubX4Zv.js";import{M as a}from"./MultiSelect-BKMYOQz6.js";import{c as h,l as n,s as x}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtU5-7b1.js";import"./index-BT36lJMY.js";import"./index-ZcSIculg.js";import"./use-interaction-state-Dtf1cT8c.js";import"./use-popup-close-BqcHjELS.js";import"./Checkbox-DOGkGTq4.js";import"./use-toggle-Ngt-NwjI.js";import"./Tooltip-PvwIEMNF.js";const k={title:"Components/MultiSelect",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},placeholder:{control:"text"},showSelectAll:{control:"boolean"}}},o=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"},{value:"cherry",label:"Cherry"}],v=[{value:"revenue",label:"Revenue"},{value:"cost",label:"Cost"},{value:"profit",label:"Profit"},{value:"margin",label:"Margin %"},{value:"growth",label:"Growth Rate"}],i={args:{size:"md",placeholder:"Select fruits",options:o,disabled:!1,showSelectAll:!0,selectAllLabel:"Select All"},render:s=>{const[l,t]=r.useState([]);return e.jsxs("div",{style:{width:"300px"},children:[e.jsx(a,{...s,values:l,onChange:t}),e.jsxs("p",{style:{marginTop:"1rem",fontSize:"0.875rem",color:"#666"},children:["Selected: ",l.length===0?"none":l.join(", ")]})]})}},d={render:()=>{const[s,l]=r.useState([]),[t,b]=r.useState(["apple"]),[g,S]=r.useState(["apple","banana"]);return e.jsxs("div",{style:{...h,width:"300px"},children:[e.jsx("label",{style:n,children:"Small"}),e.jsx(a,{size:"sm",options:o,values:s,onChange:l,placeholder:"Small"}),e.jsx("label",{style:n,children:"Medium"}),e.jsx(a,{size:"md",options:o,values:t,onChange:b,placeholder:"Medium"}),e.jsx("label",{style:n,children:"Large"}),e.jsx(a,{size:"lg",options:o,values:g,onChange:S,placeholder:"Large"})]})}},u={render:()=>{const[s,l]=r.useState(["revenue","profit"]);return e.jsxs("div",{style:{...h,width:"300px"},children:[e.jsx("label",{style:n,children:"Data Columns"}),e.jsx(a,{options:v,values:s,onChange:l,placeholder:"Select columns",selectAllLabel:"All Columns"}),e.jsxs("div",{style:{...x,marginTop:"0.5rem"},children:[e.jsx("label",{style:n,children:`Selected (${s.length})`}),e.jsx("div",{style:{display:"flex",gap:"0.25rem",flexWrap:"wrap"},children:s.map(t=>e.jsx("span",{style:{padding:"0.125rem 0.5rem",fontSize:"0.75rem",backgroundColor:"#e5e7eb",borderRadius:"9999px"},children:v.find(b=>b.value===t)?.label},t))})]}),e.jsx("button",{onClick:()=>l([]),style:{marginTop:"0.5rem",padding:"0.25rem 0.75rem",fontSize:"0.75rem"},children:"Clear All"})]})}},c={render:()=>{const[s,l]=r.useState([]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{options:o,values:s,onChange:l,showSelectAll:!1,placeholder:"Pick fruits"})})}},p={render:()=>e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{options:o,values:["apple","banana"],disabled:!0,placeholder:"Disabled"})})},m={render:()=>{const s=[{value:"a",label:"Available A"},{value:"b",label:"Disabled B",disabled:!0},{value:"c",label:"Available C"},{value:"d",label:"Disabled D",disabled:!0},{value:"e",label:"Available E"}],[l,t]=r.useState([]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{options:s,values:l,onChange:t,placeholder:"Some options disabled"})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    placeholder: 'Select fruits',
    options: fruitOptions,
    disabled: false,
    showSelectAll: true,
    selectAllLabel: 'Select All'
  },
  render: args => {
    const [values, setValues] = useState<string[]>([]);
    return <div style={{
      width: '300px'
    }}>
        <MultiSelect {...args} values={values} onChange={setValues} />
        <p style={{
        marginTop: '1rem',
        fontSize: '0.875rem',
        color: '#666'
      }}>
          Selected: {values.length === 0 ? 'none' : values.join(', ')}
        </p>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sm, setSm] = useState<string[]>([]);
    const [md, setMd] = useState<string[]>(['apple']);
    const [lg, setLg] = useState<string[]>(['apple', 'banana']);
    return <div style={{
      ...column,
      width: '300px'
    }}>
        <label style={label}>Small</label>
        <MultiSelect size="sm" options={fruitOptions} values={sm} onChange={setSm} placeholder="Small" />
        <label style={label}>Medium</label>
        <MultiSelect size="md" options={fruitOptions} values={md} onChange={setMd} placeholder="Medium" />
        <label style={label}>Large</label>
        <MultiSelect size="lg" options={fruitOptions} values={lg} onChange={setLg} placeholder="Large" />
      </div>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = useState<string[]>(['revenue', 'profit']);
    return <div style={{
      ...column,
      width: '300px'
    }}>
        <label style={label}>Data Columns</label>
        <MultiSelect options={columnOptions} values={values} onChange={setValues} placeholder="Select columns" selectAllLabel="All Columns" />
        <div style={{
        ...section,
        marginTop: '0.5rem'
      }}>
          <label style={label}>{\`Selected (\${values.length})\`}</label>
          <div style={{
          display: 'flex',
          gap: '0.25rem',
          flexWrap: 'wrap'
        }}>
            {values.map(v => <span key={v} style={{
            padding: '0.125rem 0.5rem',
            fontSize: '0.75rem',
            backgroundColor: '#e5e7eb',
            borderRadius: '9999px'
          }}>
                {columnOptions.find(o => o.value === v)?.label}
              </span>)}
          </div>
        </div>
        <button onClick={() => setValues([])} style={{
        marginTop: '0.5rem',
        padding: '0.25rem 0.75rem',
        fontSize: '0.75rem'
      }}>
          Clear All
        </button>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = useState<string[]>([]);
    return <div style={{
      width: '300px'
    }}>
        <MultiSelect options={fruitOptions} values={values} onChange={setValues} showSelectAll={false} placeholder="Pick fruits" />
      </div>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <MultiSelect options={fruitOptions} values={['apple', 'banana']} disabled placeholder="Disabled" />
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options: MultiSelectOption[] = [{
      value: 'a',
      label: 'Available A'
    }, {
      value: 'b',
      label: 'Disabled B',
      disabled: true
    }, {
      value: 'c',
      label: 'Available C'
    }, {
      value: 'd',
      label: 'Disabled D',
      disabled: true
    }, {
      value: 'e',
      label: 'Available E'
    }];
    const [values, setValues] = useState<string[]>([]);
    return <div style={{
      width: '300px'
    }}>
        <MultiSelect options={options} values={values} onChange={setValues} placeholder="Some options disabled" />
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const T=["Playground","Sizes","Controlled","WithoutSelectAll","Disabled","WithDisabledOptions"];export{u as Controlled,p as Disabled,i as Playground,d as Sizes,m as WithDisabledOptions,c as WithoutSelectAll,T as __namedExportsOrder,k as default};
