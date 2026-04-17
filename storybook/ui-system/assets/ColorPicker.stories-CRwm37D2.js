import{r as s,j as e}from"./iframe-G7Ln-CiB.js";import{C as t}from"./ColorPicker-7OkTp6ZZ.js";import{c as i,l as n}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVA6Xkc4.js";import"./index-DSlggvS8.js";import"./Icon-DHQh6KsE.js";import"./use-toggle-CWSNKlsX.js";import"./index-J-6yexAb.js";import"./use-machine-xUSna12t.js";import"./use-interaction-state-BCWv99Vh.js";import"./use-popup-close-4EJTn_MP.js";import"./Input-UQSz3jWL.js";import"./FormField-CvxYgi6n.js";const D={title:"Components/ColorPicker",component:t,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size of the color picker button"},disabled:{control:"boolean",description:"Whether the color picker is disabled"},alpha:{control:"boolean",description:"Whether to show alpha slider"},showLabel:{control:"boolean",description:"Whether to show hex label on the button"}}},c={args:{size:"md",disabled:!1,alpha:!1,showLabel:!1,placeholder:"#3b82f6"},render:l=>{const[o,r]=s.useState(void 0);return e.jsxs("div",{style:{width:"200px"},children:[e.jsx(t,{...l,value:o,onValueChange:r}),e.jsx("p",{style:{marginTop:"12px",fontSize:"13px",fontFamily:"monospace"},children:o??"(no selection)"})]})}},p={render:()=>{const[l,o]=s.useState("#ef4444"),[r,a]=s.useState("#22c55e"),[d,v]=s.useState("#3b82f6");return e.jsxs("div",{style:{...i,width:"200px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:n,children:"Small"}),e.jsx(t,{size:"sm",value:l,onValueChange:o,showLabel:!0,style:{width:"100%"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:n,children:"Medium"}),e.jsx(t,{size:"md",value:r,onValueChange:a,showLabel:!0,style:{width:"100%"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:n,children:"Large"}),e.jsx(t,{size:"lg",value:d,onValueChange:v,showLabel:!0,style:{width:"100%"}})]})]})}},w=[{label:"Auto",width:void 0},{label:"40px",width:"40px"},{label:"120px",width:"120px"},{label:"7.5rem",width:"7.5rem"},{label:"15rem",width:"15rem"},{label:"100% (container)",width:"100%"}],h={render:()=>{const[l,o]=s.useState("#3b82f6");return e.jsx("div",{style:{...i,gap:"24px",width:"320px"},children:[!0,!1].map(r=>e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"0 0 8px",fontSize:"13px",fontWeight:600},children:["showLabel=",String(r)]}),e.jsx("div",{style:{...i,gap:"8px"},children:w.map(({label:a,width:d})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("span",{style:{fontSize:"11px",fontFamily:"monospace",width:"100px",flexShrink:0,color:"#666"},children:a}),e.jsx(t,{value:l,onValueChange:o,showLabel:r,style:d?{width:d}:void 0})]},a))})]},String(r)))})}},u={render:()=>{const[l,o]=s.useState("#3b82f6"),[r,a]=s.useState("#ef4444");return e.jsxs("div",{style:{...i,width:"200px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:n,children:"Default"}),e.jsx(t,{value:l,onValueChange:o,showLabel:!0,style:{width:"100%"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:n,children:"With Alpha"}),e.jsx(t,{value:r,onValueChange:a,alpha:!0,showLabel:!0,style:{width:"100%"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:n,children:"Without Label"}),e.jsx(t,{value:"#22c55e",showLabel:!1,style:{width:"100%"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:n,children:"Disabled"}),e.jsx(t,{value:"#6b7280",disabled:!0,showLabel:!0,style:{width:"100%"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:n,children:"Placeholder"}),e.jsx(t,{placeholder:"#a855f7",showLabel:!0,style:{width:"100%"}})]})]})}},x={render:()=>{const[l,o]=s.useState("#3b82f6"),r=["#ef4444","#f97316","#eab308","#22c55e","#3b82f6","#8b5cf6","#ec4899"];return e.jsxs("div",{style:{...i,width:"240px"},children:[e.jsx(t,{value:l,onValueChange:o,showLabel:!0,style:{width:"100%"}}),e.jsxs("div",{style:{padding:"12px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:[e.jsxs("p",{style:{margin:0,fontSize:"13px",fontFamily:"monospace"},children:["Selected: ",e.jsx("strong",{children:l})]}),e.jsx("div",{style:{marginTop:"8px",display:"flex",gap:"4px",flexWrap:"wrap"},children:r.map(a=>e.jsx("button",{onClick:()=>o(a),style:{width:"24px",height:"24px",borderRadius:"4px",backgroundColor:a,border:l===a?"2px solid #000":"1px solid #ccc",cursor:"pointer",padding:0}},a))})]}),e.jsx("div",{style:{width:"100%",height:"60px",borderRadius:"8px",backgroundColor:l,border:"1px solid #e5e7eb"}})]})}},b={render:()=>{const[l,o]=s.useState("#3b82f680");return e.jsxs("div",{style:{...i,width:"240px"},children:[e.jsx(t,{value:l,onValueChange:o,alpha:!0,showLabel:!0,style:{width:"100%"}}),e.jsx("div",{style:{width:"100%",height:"60px",borderRadius:"8px",backgroundColor:l,backgroundImage:"repeating-conic-gradient(rgba(0,0,0,0.06) 0% 25%, transparent 0% 50%) 0 0 / 12px 12px"}}),e.jsx("p",{style:{margin:0,fontSize:"13px",fontFamily:"monospace"},children:l})]})}},m={render:()=>{const[l,o]=s.useState("#6366f1"),r=["#6366f1","#8b5cf6","#a78bfa","#3b82f6","#60a5fa","#93c5fd","#06b6d4","#22d3ee","#67e8f9"];return e.jsx("div",{style:{width:"200px"},children:e.jsx(t,{value:l,onValueChange:o,swatches:r,showLabel:!0,style:{width:"100%"}})})}},y={render:()=>{const[l,o]=s.useState(""),[r,a]=s.useState(""),[d,v]=s.useState("");return e.jsxs("div",{style:{...i,gap:"20px",width:"240px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{...n,fontWeight:600},children:"Empty (no placeholder) — hatching pattern"}),e.jsx(t,{value:l,onValueChange:o,showLabel:!0,alpha:!0,style:{width:"100%"}}),e.jsxs("p",{style:{margin:"4px 0 0",fontSize:"11px",fontFamily:"monospace",color:"#666"},children:["value: ",JSON.stringify(l||"")]})]}),e.jsxs("div",{children:[e.jsx("label",{style:{...n,fontWeight:600},children:'Transparent (placeholder="transparent") — checkerboard'}),e.jsx(t,{value:r,placeholder:"transparent",onValueChange:a,showLabel:!0,alpha:!0,style:{width:"100%"}}),e.jsxs("p",{style:{margin:"4px 0 0",fontSize:"11px",fontFamily:"monospace",color:"#666"},children:["value: ",JSON.stringify(r||"")]})]}),e.jsxs("div",{children:[e.jsx("label",{style:{...n,fontWeight:600},children:'Preset hex (placeholder="#3b82f6") — shows placeholder color'}),e.jsx(t,{value:d,placeholder:"#3b82f6",onValueChange:v,showLabel:!0,alpha:!0,style:{width:"100%"}}),e.jsxs("p",{style:{margin:"4px 0 0",fontSize:"11px",fontFamily:"monospace",color:"#666"},children:["value: ",JSON.stringify(d||"")]})]})]})}},g={render:()=>{const[l,o]=s.useState(""),[r,a]=s.useState("");return e.jsxs("div",{style:{...i,gap:"20px",width:"240px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{...n,fontWeight:600},children:"With transparent default — pick a color, then reset"}),e.jsx(t,{value:l,placeholder:"transparent",onValueChange:o,showLabel:!0,alpha:!0,style:{width:"100%"}}),e.jsxs("p",{style:{margin:"4px 0 0",fontSize:"11px",fontFamily:"monospace",color:"#666"},children:["value: ",JSON.stringify(l||"")]})]}),e.jsxs("div",{children:[e.jsx("label",{style:{...n,fontWeight:600},children:"With hex default — pick a color, then reset"}),e.jsx(t,{value:r,placeholder:"#ef4444",onValueChange:a,showLabel:!0,alpha:!0,style:{width:"100%"}}),e.jsxs("p",{style:{margin:"4px 0 0",fontSize:"11px",fontFamily:"monospace",color:"#666"},children:["value: ",JSON.stringify(r||"")]})]})]})}},f={render:()=>{const[l,o]=s.useState("#3b82f6");return e.jsxs("div",{style:{width:"300px",height:"200px",overflow:"auto",border:"1px solid #e5e7eb",borderRadius:"8px",padding:"16px"},children:[e.jsx("div",{style:{height:"100px"}}),e.jsx("p",{style:{fontSize:"13px",marginBottom:"8px"},children:"Scroll down to find the picker"}),e.jsx(t,{value:l,onValueChange:o,showLabel:!0,style:{width:"100%"}}),e.jsx("div",{style:{height:"200px"}})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    disabled: false,
    alpha: false,
    showLabel: false,
    placeholder: '#3b82f6'
  },
  render: args => {
    const [color, setColor] = useState<string | undefined>(undefined);
    return <div style={{
      width: '200px'
    }}>
        <ColorPicker {...args} value={color} onValueChange={setColor} />
        <p style={{
        marginTop: '12px',
        fontSize: '13px',
        fontFamily: 'monospace'
      }}>
          {color ?? '(no selection)'}
        </p>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sm, setSm] = useState('#ef4444');
    const [md, setMd] = useState('#22c55e');
    const [lg, setLg] = useState('#3b82f6');
    return <div style={{
      ...column,
      width: '200px'
    }}>
        <div>
          <label style={label}>Small</label>
          <ColorPicker size="sm" value={sm} onValueChange={setSm} showLabel style={{
          width: '100%'
        }} />
        </div>
        <div>
          <label style={label}>Medium</label>
          <ColorPicker size="md" value={md} onValueChange={setMd} showLabel style={{
          width: '100%'
        }} />
        </div>
        <div>
          <label style={label}>Large</label>
          <ColorPicker size="lg" value={lg} onValueChange={setLg} showLabel style={{
          width: '100%'
        }} />
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#3b82f6');
    return <div style={{
      ...column,
      gap: '24px',
      width: '320px'
    }}>
        {([true, false] as const).map(showLabel => <div key={String(showLabel)}>
            <p style={{
          margin: '0 0 8px',
          fontSize: '13px',
          fontWeight: 600
        }}>
              showLabel={String(showLabel)}
            </p>
            <div style={{
          ...column,
          gap: '8px'
        }}>
              {WIDTH_OPTIONS.map(({
            label,
            width
          }) => <div key={label} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
                  <span style={{
              fontSize: '11px',
              fontFamily: 'monospace',
              width: '100px',
              flexShrink: 0,
              color: '#666'
            }}>
                    {label}
                  </span>
                  <ColorPicker value={color} onValueChange={setColor} showLabel={showLabel} style={width ? {
              width
            } : undefined} />
                </div>)}
            </div>
          </div>)}
      </div>;
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color1, setColor1] = useState('#3b82f6');
    const [color2, setColor2] = useState('#ef4444');
    return <div style={{
      ...column,
      width: '200px'
    }}>
        <div>
          <label style={label}>Default</label>
          <ColorPicker value={color1} onValueChange={setColor1} showLabel style={{
          width: '100%'
        }} />
        </div>
        <div>
          <label style={label}>With Alpha</label>
          <ColorPicker value={color2} onValueChange={setColor2} alpha showLabel style={{
          width: '100%'
        }} />
        </div>
        <div>
          <label style={label}>Without Label</label>
          <ColorPicker value="#22c55e" showLabel={false} style={{
          width: '100%'
        }} />
        </div>
        <div>
          <label style={label}>Disabled</label>
          <ColorPicker value="#6b7280" disabled showLabel style={{
          width: '100%'
        }} />
        </div>
        <div>
          <label style={label}>Placeholder</label>
          <ColorPicker placeholder="#a855f7" showLabel style={{
          width: '100%'
        }} />
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#3b82f6');
    const presets = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899'];
    return <div style={{
      ...column,
      width: '240px'
    }}>
        <ColorPicker value={color} onValueChange={setColor} showLabel style={{
        width: '100%'
      }} />
        <div style={{
        padding: '12px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
          <p style={{
          margin: 0,
          fontSize: '13px',
          fontFamily: 'monospace'
        }}>
            Selected: <strong>{color}</strong>
          </p>
          <div style={{
          marginTop: '8px',
          display: 'flex',
          gap: '4px',
          flexWrap: 'wrap'
        }}>
            {presets.map(hex => <button key={hex} onClick={() => setColor(hex)} style={{
            width: '24px',
            height: '24px',
            borderRadius: '4px',
            backgroundColor: hex,
            border: color === hex ? '2px solid #000' : '1px solid #ccc',
            cursor: 'pointer',
            padding: 0
          }} />)}
          </div>
        </div>
        <div style={{
        width: '100%',
        height: '60px',
        borderRadius: '8px',
        backgroundColor: color,
        border: '1px solid #e5e7eb'
      }} />
      </div>;
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#3b82f680');
    return <div style={{
      ...column,
      width: '240px'
    }}>
        <ColorPicker value={color} onValueChange={setColor} alpha showLabel style={{
        width: '100%'
      }} />
        <div style={{
        width: '100%',
        height: '60px',
        borderRadius: '8px',
        backgroundColor: color,
        backgroundImage: 'repeating-conic-gradient(rgba(0,0,0,0.06) 0% 25%, transparent 0% 50%) 0 0 / 12px 12px'
      }} />
        <p style={{
        margin: 0,
        fontSize: '13px',
        fontFamily: 'monospace'
      }}>{color}</p>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#6366f1');
    const brandSwatches = ['#6366f1', '#8b5cf6', '#a78bfa', '#3b82f6', '#60a5fa', '#93c5fd', '#06b6d4', '#22d3ee', '#67e8f9'];
    return <div style={{
      width: '200px'
    }}>
        <ColorPicker value={color} onValueChange={setColor} swatches={brandSwatches} showLabel style={{
        width: '100%'
      }} />
      </div>;
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [emptyColor, setEmptyColor] = useState('');
    const [transparentColor, setTransparentColor] = useState('');
    const [presetColor, setPresetColor] = useState('');
    return <div style={{
      ...column,
      gap: '20px',
      width: '240px'
    }}>
        <div>
          <label style={{
          ...label,
          fontWeight: 600
        }}>
            Empty (no placeholder) — hatching pattern
          </label>
          <ColorPicker value={emptyColor} onValueChange={setEmptyColor} showLabel alpha style={{
          width: '100%'
        }} />
          <p style={{
          margin: '4px 0 0',
          fontSize: '11px',
          fontFamily: 'monospace',
          color: '#666'
        }}>
            value: {JSON.stringify(emptyColor || '')}
          </p>
        </div>

        <div>
          <label style={{
          ...label,
          fontWeight: 600
        }}>
            Transparent (placeholder="transparent") — checkerboard
          </label>
          <ColorPicker value={transparentColor} placeholder="transparent" onValueChange={setTransparentColor} showLabel alpha style={{
          width: '100%'
        }} />
          <p style={{
          margin: '4px 0 0',
          fontSize: '11px',
          fontFamily: 'monospace',
          color: '#666'
        }}>
            value: {JSON.stringify(transparentColor || '')}
          </p>
        </div>

        <div>
          <label style={{
          ...label,
          fontWeight: 600
        }}>
            Preset hex (placeholder="#3b82f6") — shows placeholder color
          </label>
          <ColorPicker value={presetColor} placeholder="#3b82f6" onValueChange={setPresetColor} showLabel alpha style={{
          width: '100%'
        }} />
          <p style={{
          margin: '4px 0 0',
          fontSize: '11px',
          fontFamily: 'monospace',
          color: '#666'
        }}>
            value: {JSON.stringify(presetColor || '')}
          </p>
        </div>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color1, setColor1] = useState('');
    const [color2, setColor2] = useState('');
    return <div style={{
      ...column,
      gap: '20px',
      width: '240px'
    }}>
        <div>
          <label style={{
          ...label,
          fontWeight: 600
        }}>
            With transparent default — pick a color, then reset
          </label>
          <ColorPicker value={color1} placeholder="transparent" onValueChange={setColor1} showLabel alpha style={{
          width: '100%'
        }} />
          <p style={{
          margin: '4px 0 0',
          fontSize: '11px',
          fontFamily: 'monospace',
          color: '#666'
        }}>
            value: {JSON.stringify(color1 || '')}
          </p>
        </div>

        <div>
          <label style={{
          ...label,
          fontWeight: 600
        }}>
            With hex default — pick a color, then reset
          </label>
          <ColorPicker value={color2} placeholder="#ef4444" onValueChange={setColor2} showLabel alpha style={{
          width: '100%'
        }} />
          <p style={{
          margin: '4px 0 0',
          fontSize: '11px',
          fontFamily: 'monospace',
          color: '#666'
        }}>
            value: {JSON.stringify(color2 || '')}
          </p>
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#3b82f6');
    return <div style={{
      width: '300px',
      height: '200px',
      overflow: 'auto',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '16px'
    }}>
        <div style={{
        height: '100px'
      }} />
        <p style={{
        fontSize: '13px',
        marginBottom: '8px'
      }}>Scroll down to find the picker</p>
        <ColorPicker value={color} onValueChange={setColor} showLabel style={{
        width: '100%'
      }} />
        <div style={{
        height: '200px'
      }} />
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const I=["Playground","Sizes","WidthAndLabel","AllStates","Controlled","WithAlpha","CustomSwatches","DefaultValueStates","ResetToDefault","InScrollableContainer"];export{u as AllStates,x as Controlled,m as CustomSwatches,y as DefaultValueStates,f as InScrollableContainer,c as Playground,g as ResetToDefault,p as Sizes,h as WidthAndLabel,b as WithAlpha,I as __namedExportsOrder,D as default};
