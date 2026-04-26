import{r as n,j as e}from"./iframe-Dr7tdnDG.js";import{S as r}from"./Select-CsLCeF9E.js";import{c as w,l as c,s as j}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Lz4CA8Cu.js";import"./index-Bqlosw6n.js";import"./use-machine-Df02H652.js";import"./use-interaction-state-BxPjOGDk.js";import"./use-popup-close-DzUpYJgy.js";import"./use-merged-ref-ZOu2dXhq.js";import"./Tooltip-J4neSWo2.js";import"./FormField-WJ4fsOdP.js";import"./index-BZkHnGtK.js";const E={title:"Components/Select",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size of the select"},disabled:{control:"boolean",description:"Whether the select is disabled"},placeholder:{control:"text",description:"Placeholder text when no option is selected"}}},o=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],V=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"kr",label:"South Korea"},{value:"jp",label:"Japan"},{value:"cn",label:"China"}],v={args:{size:"md",placeholder:"Select a fruit",options:o,disabled:!1},render:l=>{const[a,t]=n.useState(null);return e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...l,value:a,onChange:t})})}},m={render:()=>{const[l,a]=n.useState(null),[t,i]=n.useState(null),[s,u]=n.useState(null);return e.jsxs("div",{style:{...w,width:"300px"},children:[e.jsx(r,{size:"sm",placeholder:"Small select",options:o,value:l,onChange:a}),e.jsx(r,{size:"md",placeholder:"Medium select",options:o,value:t,onChange:i}),e.jsx(r,{size:"lg",placeholder:"Large select",options:o,value:s,onChange:u})]})}},h={render:()=>{const[l,a]=n.useState(null),[t,i]=n.useState("banana"),[s,u]=n.useState(null),[d,p]=n.useState("orange");return e.jsxs("div",{style:{...w,width:"300px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:c,children:"Default"}),e.jsx(r,{placeholder:"Select a fruit",options:o,value:l,onChange:a})]}),e.jsxs("div",{children:[e.jsx("label",{style:c,children:"Selected"}),e.jsx(r,{placeholder:"Select a fruit",options:o,value:t,onChange:i})]}),e.jsxs("div",{children:[e.jsx("label",{style:c,children:"Disabled"}),e.jsx(r,{placeholder:"Select a fruit",options:o,value:s,onChange:u,disabled:!0})]}),e.jsxs("div",{children:[e.jsx("label",{style:c,children:"Disabled with Selection"}),e.jsx(r,{placeholder:"Select a fruit",options:o,value:d,onChange:p,disabled:!0})]})]})}},g={render:()=>{const[l,a]=n.useState("apple");return e.jsxs("div",{style:{...w,width:"300px"},children:[e.jsx(r,{placeholder:"Select a fruit",options:o,value:l,onChange:a}),e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#f5f5f5",borderRadius:"0.5rem"},children:[e.jsxs("p",{style:{margin:0,fontSize:"0.875rem"},children:["Selected: ",e.jsx("strong",{children:l||"None"})]}),e.jsxs("div",{style:{marginTop:"0.5rem",display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[o.map(t=>e.jsx("button",{onClick:()=>a(t.value),style:{padding:"0.25rem 0.5rem",fontSize:"0.75rem",border:"1px solid #ccc",borderRadius:"0.25rem",backgroundColor:l===t.value?"#3b82f6":"white",color:l===t.value?"white":"black",cursor:"pointer"},children:t.label},t.value)),e.jsx("button",{onClick:()=>a(null),style:{padding:"0.25rem 0.5rem",fontSize:"0.75rem",border:"1px solid #ccc",borderRadius:"0.25rem",backgroundColor:"white",cursor:"pointer"},children:"Clear"})]})]})]})}},b={render:()=>{const[l,a]=n.useState(null),t=[{value:"🍎",label:"Apple"},{value:"🍌",label:"Banana"},{value:"🍊",label:"Orange"},{value:"🍇",label:"Grape"},{value:"🥭",label:"Mango"}];return e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{placeholder:"Select a fruit",options:t,value:l,onChange:a,renderOption:(i,s,u)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"1.5rem"},children:i.value}),e.jsx("span",{children:i.label}),s&&e.jsx("span",{style:{marginLeft:"auto"},children:"✓"})]})})})}},S={parameters:{controls:{disable:!0},docs:{description:{story:"Live-preview pattern via `onPreview` + `onChange` + `onClose`: hovering or arrow-navigating an option applies a temporary side effect through `onPreview`. `onChange` commits. `onClose` fires on any close (commit or cancel); callers roll back the preview if no commit occurred. In this demo the swatch reflects the active color — open the Select, hover/arrow through options, then either click (commit) or press Escape / click outside (rollback)."}}},render:()=>{const l=[{value:"crimson",label:"Crimson"},{value:"teal",label:"Teal"},{value:"gold",label:"Gold"},{value:"slate",label:"Slate"},{value:"magenta",label:"Magenta"}],a={crimson:"#dc2626",teal:"#0d9488",gold:"#d97706",slate:"#475569",magenta:"#c026d3"},[t,i]=n.useState("crimson"),[s,u]=n.useState(null),d=n.useRef(!1),p=s??t??"crimson";return e.jsxs("div",{style:{...j,width:"300px"},children:[e.jsx("label",{style:c,children:"Color (live preview)"}),e.jsx(r,{placeholder:"Pick a color",options:l,value:t,onChange:C=>{i(C),u(null),d.current=!0},onPreview:C=>{u(C)},onClose:()=>{d.current||u(null),d.current=!1}}),e.jsx("div",{style:{height:"80px",borderRadius:"4px",backgroundColor:a[p],transition:"background-color 120ms ease"}}),e.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--color-text-muted)"},children:["Committed: ",e.jsx("strong",{children:t??"(none)"}),s&&s!==t&&e.jsxs(e.Fragment,{children:[" · ","Previewing: ",e.jsx("strong",{children:s})]})]})]})}},f={render:()=>{const[l,a]=n.useState(null),t=Array.from({length:50},(i,s)=>({value:`option-${s+1}`,label:`Option ${s+1}`}));return e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{placeholder:"Select an option",options:t,value:l,onChange:a})})}},y={render:()=>{const[l,a]=n.useState(null),[t,i]=n.useState(null),[s,u]=n.useState("mango"),[d,p]=n.useState(null);return e.jsxs("div",{style:{...j,width:"300px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{...c,fontWeight:500},children:"Required Field"}),e.jsx(r,{placeholder:"Please select a fruit",options:o,value:l,onChange:a,required:!0,errorMessage:l?void 0:"This field is required"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{...c,fontWeight:500},children:"Invalid Selection"}),e.jsx(r,{placeholder:"Select a fruit",options:o,value:t,onChange:i,invalid:!0,errorMessage:"This selection is not valid"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{...c,fontWeight:500},children:"Warning"}),e.jsx(r,{placeholder:"Select a fruit",options:o,value:s,onChange:u,warning:!0,warningMessage:"This option may affect other settings"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{...c,fontWeight:500},children:"Default"}),e.jsx(r,{placeholder:"Select a fruit",options:o,value:d,onChange:p})]})]})}},x={render:()=>{const[l,a]=n.useState(null),[t,i]=n.useState(null),[s,u]=n.useState(!1),d=p=>{p.preventDefault(),u(!0),l&&t&&alert(`Form submitted!
Country: ${l}
Fruit: ${t}`)};return e.jsxs("form",{onSubmit:d,style:{width:"400px"},children:[e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsxs("label",{style:{...c,fontWeight:500},children:["Country ",e.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),e.jsx(r,{placeholder:"Select your country",options:V,value:l,onChange:a,required:!0,errorMessage:s&&!l?"Please select a country":void 0})]}),e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsxs("label",{style:{...c,fontWeight:500},children:["Favorite Fruit ",e.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),e.jsx(r,{placeholder:"Select your favorite fruit",options:o,value:t,onChange:i,required:!0,errorMessage:s&&!t?"Please select a fruit":void 0})]}),e.jsx("button",{type:"submit",style:{padding:"0.5rem 1rem",fontSize:"0.875rem",fontWeight:500,color:"white",backgroundColor:"#3b82f6",border:"none",borderRadius:"0.375rem",cursor:"pointer"},children:"Submit"})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Live-preview pattern via \`onPreview\` + \`onChange\` + \`onClose\`: hovering or arrow-navigating an option applies a temporary side effect through \`onPreview\`. \`onChange\` commits. \`onClose\` fires on any close (commit or cancel); callers roll back the preview if no commit occurred. In this demo the swatch reflects the active color — open the Select, hover/arrow through options, then either click (commit) or press Escape / click outside (rollback).'
      }
    }
  },
  render: () => {
    const colorOptions: SelectOption[] = [{
      value: 'crimson',
      label: 'Crimson'
    }, {
      value: 'teal',
      label: 'Teal'
    }, {
      value: 'gold',
      label: 'Gold'
    }, {
      value: 'slate',
      label: 'Slate'
    }, {
      value: 'magenta',
      label: 'Magenta'
    }];
    const swatchHex: Record<string, string> = {
      crimson: '#dc2626',
      teal: '#0d9488',
      gold: '#d97706',
      slate: '#475569',
      magenta: '#c026d3'
    };
    const [committed, setCommitted] = useState<string | null>('crimson');
    const [preview, setPreview] = useState<string | null>(null);
    const committedSinceOpenRef = useRef(false);
    const active = preview ?? committed ?? 'crimson';
    return <div style={{
      ...section,
      width: '300px'
    }}>
        <label style={label}>Color (live preview)</label>
        <Select placeholder="Pick a color" options={colorOptions} value={committed} onChange={v => {
        setCommitted(v);
        setPreview(null);
        committedSinceOpenRef.current = true;
      }} onPreview={v => {
        setPreview(v);
      }} onClose={() => {
        if (!committedSinceOpenRef.current) {
          setPreview(null);
        }
        committedSinceOpenRef.current = false;
      }} />
        <div style={{
        height: '80px',
        borderRadius: '4px',
        backgroundColor: swatchHex[active],
        transition: 'background-color 120ms ease'
      }} />
        <div style={{
        fontSize: '0.8rem',
        color: 'var(--color-text-muted)'
      }}>
          Committed: <strong>{committed ?? '(none)'}</strong>
          {preview && preview !== committed && <>
              {' · '}Previewing: <strong>{preview}</strong>
            </>}
        </div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const $=["Playground","Sizes","AllStates","Controlled","CustomRendering","LivePreview","ManyOptions","ValidationStates","FormExample"];export{h as AllStates,g as Controlled,b as CustomRendering,x as FormExample,S as LivePreview,f as ManyOptions,v as Playground,m as Sizes,y as ValidationStates,$ as __namedExportsOrder,E as default};
