import{j as e,r}from"./iframe-CehWmMV7.js";import{M as t}from"./MultiSelect-aUB6u0qU.js";import{s as g,a as f,r as j,c as S,l as n}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-G7VngGk8.js";import"./index-CyMnd6Cw.js";import"./use-machine-BeNtetTh.js";import"./use-interaction-state-C59fShYg.js";import"./use-popup-close-IdEpJMg1.js";import"./use-merged-ref-BGrWF0GZ.js";import"./Checkbox-CImoAUis.js";import"./use-toggle-B-xrWGoJ.js";import"./Tooltip-0MoU666M.js";import"./index-peegl-AI.js";const P={title:"Components/MultiSelect",component:t,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},placeholder:{control:"text"},showSelectAll:{control:"boolean"}}},o=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"},{value:"cherry",label:"Cherry"}],h=[{value:"revenue",label:"Revenue"},{value:"cost",label:"Cost"},{value:"profit",label:"Profit"},{value:"margin",label:"Margin %"},{value:"growth",label:"Growth Rate"}],i={args:{size:"md",placeholder:"Select fruits",options:o,disabled:!1,showSelectAll:!0,selectAllLabel:"Select All"},render:a=>{const[l,s]=r.useState([]);return e.jsxs("div",{style:{width:"300px"},children:[e.jsx(t,{...a,values:l,onChange:s}),e.jsxs("p",{style:{marginTop:"1rem",fontSize:"0.875rem",color:"#666"},children:["Selected: ",l.length===0?"none":l.join(", ")]})]})}},d={render:()=>{const[a,l]=r.useState([]),[s,b]=r.useState(["apple"]),[x,y]=r.useState(["apple","banana"]);return e.jsxs("div",{style:{...S,width:"300px"},children:[e.jsx("label",{style:n,children:"Small"}),e.jsx(t,{size:"sm",options:o,values:a,onChange:l,placeholder:"Small"}),e.jsx("label",{style:n,children:"Medium"}),e.jsx(t,{size:"md",options:o,values:s,onChange:b,placeholder:"Medium"}),e.jsx("label",{style:n,children:"Large"}),e.jsx(t,{size:"lg",options:o,values:x,onChange:y,placeholder:"Large"})]})}},p={render:()=>{const[a,l]=r.useState(["revenue","profit"]);return e.jsxs("div",{style:{...S,width:"300px"},children:[e.jsx("label",{style:n,children:"Data Columns"}),e.jsx(t,{options:h,values:a,onChange:l,placeholder:"Select columns",selectAllLabel:"All Columns"}),e.jsxs("div",{style:{...g,marginTop:"0.5rem"},children:[e.jsx("label",{style:n,children:`Selected (${a.length})`}),e.jsx("div",{style:{display:"flex",gap:"0.25rem",flexWrap:"wrap"},children:a.map(s=>e.jsx("span",{style:{padding:"0.125rem 0.5rem",fontSize:"0.75rem",backgroundColor:"#e5e7eb",borderRadius:"9999px"},children:h.find(b=>b.value===s)?.label},s))})]}),e.jsx("button",{onClick:()=>l([]),style:{marginTop:"0.5rem",padding:"0.25rem 0.75rem",fontSize:"0.75rem"},children:"Clear All"})]})}},c={render:()=>{const[a,l]=r.useState([]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:o,values:a,onChange:l,showSelectAll:!1,placeholder:"Pick fruits"})})}},u={render:()=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:o,values:["apple","banana"],disabled:!0,placeholder:"Disabled"})})},m={render:()=>{const a=["sm","md","lg"],l=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"}];return e.jsx("div",{style:g,children:a.map(s=>e.jsxs("div",{children:[e.jsxs("h4",{style:f,children:['size="',s,'"']}),e.jsxs("div",{style:{...j,gap:"1rem"},children:[e.jsxs("div",{style:{width:260},children:[e.jsx("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:"Empty"}),e.jsx(t,{size:s,options:l,values:[],onChange:()=>{},placeholder:"Select..."})]}),e.jsxs("div",{style:{width:260},children:[e.jsx("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:"Selected"}),e.jsx(t,{size:s,options:l,values:["apple","banana"],onChange:()=>{}})]}),e.jsxs("div",{style:{width:260},children:[e.jsx("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:"Disabled"}),e.jsx(t,{size:s,options:l,values:["apple"],onChange:()=>{},disabled:!0})]})]})]},s))})}},v={render:()=>{const a=[{value:"a",label:"Available A"},{value:"b",label:"Disabled B",disabled:!0},{value:"c",label:"Available C"},{value:"d",label:"Disabled D",disabled:!0},{value:"e",label:"Available E"}],[l,s]=r.useState([]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{options:a,values:l,onChange:s,placeholder:"Some options disabled"})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = useState<string[]>([]);
    return <div style={{
      width: '300px'
    }}>
        <MultiSelect options={fruitOptions} values={values} onChange={setValues} showSelectAll={false} placeholder="Pick fruits" />
      </div>;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <MultiSelect options={fruitOptions} values={['apple', 'banana']} disabled placeholder="Disabled" />
    </div>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    const options: MultiSelectOption[] = [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'orange',
      label: 'Orange'
    }];
    return <div style={section}>
        {sizes.map(size => <div key={size}>
            <h4 style={sectionTitle}>size="{size}"</h4>
            <div style={{
          ...row,
          gap: '1rem'
        }}>
              <div style={{
            width: 260
          }}>
                <p style={{
              fontSize: 11,
              color: 'var(--color-text-subtle)',
              margin: '0 0 4px'
            }}>Empty</p>
                <MultiSelect size={size} options={options} values={[]} onChange={() => {}} placeholder="Select..." />
              </div>
              <div style={{
            width: 260
          }}>
                <p style={{
              fontSize: 11,
              color: 'var(--color-text-subtle)',
              margin: '0 0 4px'
            }}>Selected</p>
                <MultiSelect size={size} options={options} values={['apple', 'banana']} onChange={() => {}} />
              </div>
              <div style={{
            width: 260
          }}>
                <p style={{
              fontSize: 11,
              color: 'var(--color-text-subtle)',
              margin: '0 0 4px'
            }}>Disabled</p>
                <MultiSelect size={size} options={options} values={['apple']} onChange={() => {}} disabled />
              </div>
            </div>
          </div>)}
      </div>;
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const R=["Playground","Sizes","Controlled","WithoutSelectAll","Disabled","AllStates","WithDisabledOptions"];export{m as AllStates,p as Controlled,u as Disabled,i as Playground,d as Sizes,v as WithDisabledOptions,c as WithoutSelectAll,R as __namedExportsOrder,P as default};
