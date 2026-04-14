import{r as a,j as e}from"./iframe-BXqFY8rp.js";import{S as s}from"./Select-CR3yLgqN.js";import{c as x,l as u,s as j}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn6gD9ek.js";import"./index-CtRH5lxK.js";import"./index-J-6yexAb.js";import"./use-machine-CEWPflNt.js";import"./use-interaction-state-DgIA7iUt.js";import"./use-popup-close-C1QJfCOl.js";import"./Tooltip-Dm-SKjB2.js";import"./FormField-NUFcKTBf.js";const P={title:"Components/Select",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size of the select"},disabled:{control:"boolean",description:"Whether the select is disabled"},placeholder:{control:"text",description:"Placeholder text when no option is selected"}}},r=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],C=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"kr",label:"South Korea"},{value:"jp",label:"Japan"},{value:"cn",label:"China"}],v={args:{size:"md",placeholder:"Select a fruit",options:r,disabled:!1},render:l=>{const[n,t]=a.useState(null);return e.jsx("div",{style:{width:"300px"},children:e.jsx(s,{...l,value:n,onChange:t})})}},h={render:()=>{const[l,n]=a.useState(null),[t,i]=a.useState(null),[o,d]=a.useState(null);return e.jsxs("div",{style:{...x,width:"300px"},children:[e.jsx(s,{size:"sm",placeholder:"Small select",options:r,value:l,onChange:n}),e.jsx(s,{size:"md",placeholder:"Medium select",options:r,value:t,onChange:i}),e.jsx(s,{size:"lg",placeholder:"Large select",options:r,value:o,onChange:d})]})}},m={render:()=>{const[l,n]=a.useState(null),[t,i]=a.useState("banana"),[o,d]=a.useState(null),[c,p]=a.useState("orange");return e.jsxs("div",{style:{...x,width:"300px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:u,children:"Default"}),e.jsx(s,{placeholder:"Select a fruit",options:r,value:l,onChange:n})]}),e.jsxs("div",{children:[e.jsx("label",{style:u,children:"Selected"}),e.jsx(s,{placeholder:"Select a fruit",options:r,value:t,onChange:i})]}),e.jsxs("div",{children:[e.jsx("label",{style:u,children:"Disabled"}),e.jsx(s,{placeholder:"Select a fruit",options:r,value:o,onChange:d,disabled:!0})]}),e.jsxs("div",{children:[e.jsx("label",{style:u,children:"Disabled with Selection"}),e.jsx(s,{placeholder:"Select a fruit",options:r,value:c,onChange:p,disabled:!0})]})]})}},g={render:()=>{const[l,n]=a.useState("apple");return e.jsxs("div",{style:{...x,width:"300px"},children:[e.jsx(s,{placeholder:"Select a fruit",options:r,value:l,onChange:n}),e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#f5f5f5",borderRadius:"0.5rem"},children:[e.jsxs("p",{style:{margin:0,fontSize:"0.875rem"},children:["Selected: ",e.jsx("strong",{children:l||"None"})]}),e.jsxs("div",{style:{marginTop:"0.5rem",display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[r.map(t=>e.jsx("button",{onClick:()=>n(t.value),style:{padding:"0.25rem 0.5rem",fontSize:"0.75rem",border:"1px solid #ccc",borderRadius:"0.25rem",backgroundColor:l===t.value?"#3b82f6":"white",color:l===t.value?"white":"black",cursor:"pointer"},children:t.label},t.value)),e.jsx("button",{onClick:()=>n(null),style:{padding:"0.25rem 0.5rem",fontSize:"0.75rem",border:"1px solid #ccc",borderRadius:"0.25rem",backgroundColor:"white",cursor:"pointer"},children:"Clear"})]})]})]})}},S={render:()=>{const[l,n]=a.useState(null),t=[{value:"🍎",label:"Apple"},{value:"🍌",label:"Banana"},{value:"🍊",label:"Orange"},{value:"🍇",label:"Grape"},{value:"🥭",label:"Mango"}];return e.jsx("div",{style:{width:"300px"},children:e.jsx(s,{placeholder:"Select a fruit",options:t,value:l,onChange:n,renderOption:(i,o,d)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"1.5rem"},children:i.value}),e.jsx("span",{children:i.label}),o&&e.jsx("span",{style:{marginLeft:"auto"},children:"✓"})]})})})}},b={render:()=>{const[l,n]=a.useState(null),t=Array.from({length:50},(i,o)=>({value:`option-${o+1}`,label:`Option ${o+1}`}));return e.jsx("div",{style:{width:"300px"},children:e.jsx(s,{placeholder:"Select an option",options:t,value:l,onChange:n})})}},f={render:()=>{const[l,n]=a.useState(null),[t,i]=a.useState(null),[o,d]=a.useState("mango"),[c,p]=a.useState(null);return e.jsxs("div",{style:{...j,width:"300px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{...u,fontWeight:500},children:"Required Field"}),e.jsx(s,{placeholder:"Please select a fruit",options:r,value:l,onChange:n,required:!0,errorMessage:l?void 0:"This field is required"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{...u,fontWeight:500},children:"Invalid Selection"}),e.jsx(s,{placeholder:"Select a fruit",options:r,value:t,onChange:i,invalid:!0,errorMessage:"This selection is not valid"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{...u,fontWeight:500},children:"Warning"}),e.jsx(s,{placeholder:"Select a fruit",options:r,value:o,onChange:d,warning:!0,warningMessage:"This option may affect other settings"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{...u,fontWeight:500},children:"Default"}),e.jsx(s,{placeholder:"Select a fruit",options:r,value:c,onChange:p})]})]})}},y={render:()=>{const[l,n]=a.useState(null),[t,i]=a.useState(null),[o,d]=a.useState(!1),c=p=>{p.preventDefault(),d(!0),l&&t&&alert(`Form submitted!
Country: ${l}
Fruit: ${t}`)};return e.jsxs("form",{onSubmit:c,style:{width:"400px"},children:[e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsxs("label",{style:{...u,fontWeight:500},children:["Country ",e.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),e.jsx(s,{placeholder:"Select your country",options:C,value:l,onChange:n,required:!0,errorMessage:o&&!l?"Please select a country":void 0})]}),e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsxs("label",{style:{...u,fontWeight:500},children:["Favorite Fruit ",e.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),e.jsx(s,{placeholder:"Select your favorite fruit",options:r,value:t,onChange:i,required:!0,errorMessage:o&&!t?"Please select a fruit":void 0})]}),e.jsx("button",{type:"submit",style:{padding:"0.5rem 1rem",fontSize:"0.875rem",fontWeight:500,color:"white",backgroundColor:"#3b82f6",border:"none",borderRadius:"0.375rem",cursor:"pointer"},children:"Submit"})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    placeholder: 'Select a fruit',
    options: fruitOptions,
    disabled: false
  },
  render: args => {
    const [value, setValue] = useState<string | null>(null);
    return <div style={{
      width: '300px'
    }}>
        <Select {...args} value={value} onChange={setValue} />
      </div>;
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [valueSm, setValueSm] = useState<string | null>(null);
    const [valueMd, setValueMd] = useState<string | null>(null);
    const [valueLg, setValueLg] = useState<string | null>(null);
    return <div style={{
      ...column,
      width: '300px'
    }}>
        <Select size="sm" placeholder="Small select" options={fruitOptions} value={valueSm} onChange={setValueSm} />
        <Select size="md" placeholder="Medium select" options={fruitOptions} value={valueMd} onChange={setValueMd} />
        <Select size="lg" placeholder="Large select" options={fruitOptions} value={valueLg} onChange={setValueLg} />
      </div>;
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [valueDefault, setValueDefault] = useState<string | null>(null);
    const [valueSelected, setValueSelected] = useState<string | null>('banana');
    const [valueDisabled, setValueDisabled] = useState<string | null>(null);
    const [valueDisabledSelected, setValueDisabledSelected] = useState<string | null>('orange');
    return <div style={{
      ...column,
      width: '300px'
    }}>
        <div>
          <label style={label}>
            Default
          </label>
          <Select placeholder="Select a fruit" options={fruitOptions} value={valueDefault} onChange={setValueDefault} />
        </div>

        <div>
          <label style={label}>
            Selected
          </label>
          <Select placeholder="Select a fruit" options={fruitOptions} value={valueSelected} onChange={setValueSelected} />
        </div>

        <div>
          <label style={label}>
            Disabled
          </label>
          <Select placeholder="Select a fruit" options={fruitOptions} value={valueDisabled} onChange={setValueDisabled} disabled />
        </div>

        <div>
          <label style={label}>
            Disabled with Selection
          </label>
          <Select placeholder="Select a fruit" options={fruitOptions} value={valueDisabledSelected} onChange={setValueDisabledSelected} disabled />
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>('apple');
    return <div style={{
      ...column,
      width: '300px'
    }}>
        <Select placeholder="Select a fruit" options={fruitOptions} value={value} onChange={setValue} />
        <div style={{
        padding: '1rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '0.5rem'
      }}>
          <p style={{
          margin: 0,
          fontSize: '0.875rem'
        }}>
            Selected: <strong>{value || 'None'}</strong>
          </p>
          <div style={{
          marginTop: '0.5rem',
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}>
            {fruitOptions.map(option => <button key={option.value} onClick={() => setValue(option.value)} style={{
            padding: '0.25rem 0.5rem',
            fontSize: '0.75rem',
            border: '1px solid #ccc',
            borderRadius: '0.25rem',
            backgroundColor: value === option.value ? '#3b82f6' : 'white',
            color: value === option.value ? 'white' : 'black',
            cursor: 'pointer'
          }}>
                {option.label}
              </button>)}
            <button onClick={() => setValue(null)} style={{
            padding: '0.25rem 0.5rem',
            fontSize: '0.75rem',
            border: '1px solid #ccc',
            borderRadius: '0.25rem',
            backgroundColor: 'white',
            cursor: 'pointer'
          }}>
              Clear
            </button>
          </div>
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    const optionsWithIcons: SelectOption[] = [{
      value: '🍎',
      label: 'Apple'
    }, {
      value: '🍌',
      label: 'Banana'
    }, {
      value: '🍊',
      label: 'Orange'
    }, {
      value: '🍇',
      label: 'Grape'
    }, {
      value: '🥭',
      label: 'Mango'
    }];
    return <div style={{
      width: '300px'
    }}>
        <Select placeholder="Select a fruit" options={optionsWithIcons} value={value} onChange={setValue} renderOption={(option, isSelected, _isHighlighted) => <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
              <span style={{
          fontSize: '1.5rem'
        }}>{option.value}</span>
              <span>{option.label}</span>
              {isSelected && <span style={{
          marginLeft: 'auto'
        }}>✓</span>}
            </div>} />
      </div>;
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    const manyOptions: SelectOption[] = Array.from({
      length: 50
    }, (_, i) => ({
      value: \`option-\${i + 1}\`,
      label: \`Option \${i + 1}\`
    }));
    return <div style={{
      width: '300px'
    }}>
        <Select placeholder="Select an option" options={manyOptions} value={value} onChange={setValue} />
      </div>;
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<string | null>(null);
    const [value2, setValue2] = useState<string | null>(null);
    const [value3, setValue3] = useState<string | null>('mango');
    const [value4, setValue4] = useState<string | null>(null);
    return <div style={{
      ...section,
      width: '300px'
    }}>
        <div>
          <label style={{
          ...label,
          fontWeight: 500
        }}>
            Required Field
          </label>
          <Select placeholder="Please select a fruit" options={fruitOptions} value={value1} onChange={setValue1} required errorMessage={!value1 ? 'This field is required' : undefined} />
        </div>

        <div>
          <label style={{
          ...label,
          fontWeight: 500
        }}>
            Invalid Selection
          </label>
          <Select placeholder="Select a fruit" options={fruitOptions} value={value2} onChange={setValue2} invalid errorMessage="This selection is not valid" />
        </div>

        <div>
          <label style={{
          ...label,
          fontWeight: 500
        }}>
            Warning
          </label>
          <Select placeholder="Select a fruit" options={fruitOptions} value={value3} onChange={setValue3} warning warningMessage="This option may affect other settings" />
        </div>

        <div>
          <label style={{
          ...label,
          fontWeight: 500
        }}>
            Default
          </label>
          <Select placeholder="Select a fruit" options={fruitOptions} value={value4} onChange={setValue4} />
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [country, setCountry] = useState<string | null>(null);
    const [fruit, setFruit] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
      if (country && fruit) {
        alert(\`Form submitted!\\nCountry: \${country}\\nFruit: \${fruit}\`);
      }
    };
    return <form onSubmit={handleSubmit} style={{
      width: '400px'
    }}>
        <div style={{
        marginBottom: '1.5rem'
      }}>
          <label style={{
          ...label,
          fontWeight: 500
        }}>
            Country <span style={{
            color: '#ef4444'
          }}>*</span>
          </label>
          <Select placeholder="Select your country" options={countryOptions} value={country} onChange={setCountry} required errorMessage={submitted && !country ? 'Please select a country' : undefined} />
        </div>

        <div style={{
        marginBottom: '1.5rem'
      }}>
          <label style={{
          ...label,
          fontWeight: 500
        }}>
            Favorite Fruit <span style={{
            color: '#ef4444'
          }}>*</span>
          </label>
          <Select placeholder="Select your favorite fruit" options={fruitOptions} value={fruit} onChange={setFruit} required errorMessage={submitted && !fruit ? 'Please select a fruit' : undefined} />
        </div>

        <button type="submit" style={{
        padding: '0.5rem 1rem',
        fontSize: '0.875rem',
        fontWeight: 500,
        color: 'white',
        backgroundColor: '#3b82f6',
        border: 'none',
        borderRadius: '0.375rem',
        cursor: 'pointer'
      }}>
          Submit
        </button>
      </form>;
  }
}`,...y.parameters?.docs?.source}}};const T=["Playground","Sizes","AllStates","Controlled","CustomRendering","ManyOptions","ValidationStates","FormExample"];export{m as AllStates,g as Controlled,S as CustomRendering,y as FormExample,b as ManyOptions,v as Playground,h as Sizes,f as ValidationStates,T as __namedExportsOrder,P as default};
