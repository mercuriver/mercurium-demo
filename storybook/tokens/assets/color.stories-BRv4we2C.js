import{j as e,r as u,T as b,R as x}from"./iframe-D2ZfZh3C.js";import"./preload-helper-PPVm8Dsz.js";const w={title:"Tokens/Semantic Color"},h={display:"flex",alignItems:"center",gap:8,padding:"4px 12px",borderRadius:8,border:"1px solid rgba(128,128,128,0.15)",minWidth:120,height:36,fontSize:11,fontFamily:"ui-monospace, monospace",fontWeight:500},f={fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--color-text-subtle, #64748b)",marginBottom:4,paddingBottom:8,borderBottom:"2px solid var(--color-border-default, #e2e8f0)"};function p(t){if(!t)return null;if(t.startsWith("#")){const r=t.replace("#",""),o=r.length===3?r[0]+r[0]+r[1]+r[1]+r[2]+r[2]:r;return[parseInt(o.slice(0,2),16),parseInt(o.slice(2,4),16),parseInt(o.slice(4,6),16)]}const a=t.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);return a?[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)]:null}function k(t){const a=p(t);return a&&(.299*a[0]+.587*a[1]+.114*a[2])/255>.5?"#000000":"#ffffff"}const S=({variable:t,name:a})=>{const[r,o]=u.useState("");return u.useEffect(()=>{const n=()=>{const y=getComputedStyle(document.documentElement).getPropertyValue(t).trim();o(y)};n();const i=new MutationObserver(n);return i.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>i.disconnect()},[t]),e.jsx("div",{style:{textAlign:"center",minWidth:0},children:e.jsxs("div",{style:{...h,background:`var(${t})`,color:k(r),justifyContent:"space-between"},title:`${t}: ${r}`,children:[e.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a}),e.jsx("span",{style:{opacity:.8,flexShrink:0},children:r.length>20?"rgba...":r})]})})},l=({title:t,tokens:a})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("div",{style:f,children:t}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginTop:12},children:a.map(r=>e.jsx(S,{variable:r.variable,name:r.name},r.variable))})]}),c={parameters:{docs:{description:{story:"헤더의 Theme 버튼으로 Light/Dark를 전환하면 색상이 실시간으로 업데이트됩니다."}}},render:()=>e.jsxs("div",{style:{padding:40,fontFamily:"system-ui, sans-serif",maxWidth:960},children:[e.jsx("h1",{style:{fontSize:28,fontWeight:700,marginBottom:4,color:"var(--color-text-default, inherit)"},children:"Semantic Color Tokens"}),e.jsx("p",{style:{fontSize:15,color:"var(--color-text-subtle, #64748b)",marginBottom:40,marginTop:0},children:"목적 기반 색상 토큰. 헤더의 Theme 버튼으로 테마를 전환하면 색상이 실시간 반영됩니다."}),e.jsx(l,{title:"Primary",tokens:[{variable:"--color-primary-color",name:"color"},{variable:"--color-primary-hover",name:"hover"},{variable:"--color-primary-active",name:"active"},{variable:"--color-primary-tint",name:"tint"},{variable:"--color-primary-inverse",name:"inverse"}]}),e.jsx(l,{title:"Secondary",tokens:[{variable:"--color-secondary-color",name:"color"},{variable:"--color-secondary-tint",name:"tint"},{variable:"--color-secondary-inverse",name:"inverse"}]}),e.jsx(l,{title:"Tertiary",tokens:[{variable:"--color-tertiary-color",name:"color"},{variable:"--color-tertiary-tint",name:"tint"},{variable:"--color-tertiary-inverse",name:"inverse"}]}),e.jsx(l,{title:"Text",tokens:[{variable:"--color-text-default",name:"default"},{variable:"--color-text-muted",name:"muted"},{variable:"--color-text-subtle",name:"subtle"},{variable:"--color-text-disabled",name:"disabled"},{variable:"--color-text-inverse",name:"inverse"}]}),e.jsx(l,{title:"Surface",tokens:[{variable:"--color-surface-default",name:"default"},{variable:"--color-surface-subtle",name:"subtle"},{variable:"--color-surface-muted",name:"muted"},{variable:"--color-surface-inverse",name:"inverse"},{variable:"--color-surface-overlay",name:"overlay"}]}),e.jsx(l,{title:"Border",tokens:[{variable:"--color-border-default",name:"default"},{variable:"--color-border-subtle",name:"subtle"},{variable:"--color-border-strong",name:"strong"},{variable:"--color-border-accent",name:"accent"}]}),e.jsx("div",{style:{...f,marginBottom:16},children:"State"}),["info","success","warning","danger"].map(t=>e.jsx(l,{title:t.charAt(0).toUpperCase()+t.slice(1),tokens:[{variable:`--color-state-${t}-default`,name:"default"},{variable:`--color-state-${t}-bg`,name:"bg"},{variable:`--color-state-${t}-text`,name:"text"}]},t))]})},v=[{category:"primary",key:"color",label:"Primary Color"},{category:"primary",key:"hover",label:"Primary Hover"},{category:"primary",key:"active",label:"Primary Active"},{category:"primary",key:"tint",label:"Primary Tint"},{category:"primary",key:"inverse",label:"Primary Inverse"},{category:"text",key:"default",label:"Text Default"},{category:"text",key:"muted",label:"Text Muted"},{category:"text",key:"subtle",label:"Text Subtle"},{category:"text",key:"disabled",label:"Text Disabled"},{category:"text",key:"inverse",label:"Text Inverse"},{category:"surface",key:"default",label:"Surface Default"},{category:"surface",key:"subtle",label:"Surface Subtle"},{category:"surface",key:"muted",label:"Surface Muted"},{category:"surface",key:"inverse",label:"Surface Inverse"},{category:"surface",key:"overlay",label:"Surface Overlay"},{category:"border",key:"default",label:"Border Default"},{category:"border",key:"subtle",label:"Border Subtle"},{category:"border",key:"strong",label:"Border Strong"},{category:"border",key:"accent",label:"Border Accent"},{category:"secondary",key:"color",label:"Secondary Color"},{category:"secondary",key:"tint",label:"Secondary Tint"},{category:"secondary",key:"inverse",label:"Secondary Inverse"},{category:"tertiary",key:"color",label:"Tertiary Color"},{category:"tertiary",key:"tint",label:"Tertiary Tint"},{category:"tertiary",key:"inverse",label:"Tertiary Inverse"}],d=Object.keys(b);function T(t,a,r){return t[a]?.[r]??""}function j(t){const a=p(t);return a&&(.299*a[0]+.587*a[1]+.114*a[2])/255>.5?"#000000":"#ffffff"}const E=()=>{const[t,a]=u.useState("light");return u.useEffect(()=>{const r=()=>{const n=document.documentElement.getAttribute("data-theme");a(n==="dark"?"dark":"light")};r();const o=new MutationObserver(r);return o.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>o.disconnect()},[]),e.jsxs("div",{style:{padding:40,fontFamily:"system-ui, sans-serif",maxWidth:1200},children:[e.jsx("h1",{style:{fontSize:28,fontWeight:700,margin:0,color:"var(--color-text-default, inherit)"},children:"Theme Presets"}),e.jsxs("p",{style:{fontSize:14,color:"var(--color-text-subtle, #64748b)",marginTop:4,marginBottom:32},children:[d.length," presets x ",v.length," tokens — ",t==="dark"?"Dark":"Light"," mode"]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",fontSize:12,fontFamily:"ui-monospace, monospace"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left",padding:"8px 12px",borderBottom:"2px solid rgba(128,128,128,0.2)",position:"sticky",left:0,background:"var(--color-surface-default, white)",zIndex:1},children:"Token"}),d.map(r=>e.jsx("th",{style:{textAlign:"center",padding:"8px 8px",borderBottom:"2px solid rgba(128,128,128,0.2)",minWidth:120},children:e.jsx("div",{style:{fontWeight:700,fontFamily:"system-ui, sans-serif",fontSize:11},children:b[r].name})},r))]})}),e.jsx("tbody",{children:v.map((r,o)=>{const n=o===0||v[o-1].category!==r.category;return e.jsxs(x.Fragment,{children:[n&&e.jsx("tr",{children:e.jsx("td",{colSpan:d.length+1,style:{padding:"12px 12px 4px",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--color-text-subtle, #64748b)",fontFamily:"system-ui, sans-serif"},children:r.category})}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"4px 12px",borderBottom:"1px solid rgba(128,128,128,0.08)",position:"sticky",left:0,background:"var(--color-surface-default, white)",color:"var(--color-text-muted, #334155)",zIndex:1},children:r.label}),d.map(i=>{const y=t==="dark"?b[i].dark:b[i].light,s=T(y,r.category,r.key),g=j(s);return e.jsx("td",{style:{padding:"4px 8px",borderBottom:"1px solid rgba(128,128,128,0.08)"},children:e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:28,borderRadius:6,backgroundColor:s,border:"1px solid rgba(128,128,128,0.15)",color:g,fontSize:10,fontWeight:500,padding:"0 8px"},children:s.length>20?"rgba...":s})},i)})]})]},`${r.category}.${r.key}`)})})]})})]})},m={parameters:{docs:{description:{story:"모든 테마 프리셋의 컬러셋을 한눈에 비교합니다. 헤더의 Theme 버튼으로 Light/Dark를 전환하면 실시간 반영됩니다."}}},render:()=>e.jsx(E,{})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '헤더의 Theme 버튼으로 Light/Dark를 전환하면 색상이 실시간으로 업데이트됩니다.'
      }
    }
  },
  render: () => <div style={{
    padding: 40,
    fontFamily: 'system-ui, sans-serif',
    maxWidth: 960
  }}>
      <h1 style={{
      fontSize: 28,
      fontWeight: 700,
      marginBottom: 4,
      color: 'var(--color-text-default, inherit)'
    }}>
        Semantic Color Tokens
      </h1>
      <p style={{
      fontSize: 15,
      color: 'var(--color-text-subtle, #64748b)',
      marginBottom: 40,
      marginTop: 0
    }}>
        목적 기반 색상 토큰. 헤더의 Theme 버튼으로 테마를 전환하면 색상이 실시간 반영됩니다.
      </p>

      <TokenGroup title="Primary" tokens={[{
      variable: '--color-primary-color',
      name: 'color'
    }, {
      variable: '--color-primary-hover',
      name: 'hover'
    }, {
      variable: '--color-primary-active',
      name: 'active'
    }, {
      variable: '--color-primary-tint',
      name: 'tint'
    }, {
      variable: '--color-primary-inverse',
      name: 'inverse'
    }]} />

      <TokenGroup title="Secondary" tokens={[{
      variable: '--color-secondary-color',
      name: 'color'
    }, {
      variable: '--color-secondary-tint',
      name: 'tint'
    }, {
      variable: '--color-secondary-inverse',
      name: 'inverse'
    }]} />

      <TokenGroup title="Tertiary" tokens={[{
      variable: '--color-tertiary-color',
      name: 'color'
    }, {
      variable: '--color-tertiary-tint',
      name: 'tint'
    }, {
      variable: '--color-tertiary-inverse',
      name: 'inverse'
    }]} />

      <TokenGroup title="Text" tokens={[{
      variable: '--color-text-default',
      name: 'default'
    }, {
      variable: '--color-text-muted',
      name: 'muted'
    }, {
      variable: '--color-text-subtle',
      name: 'subtle'
    }, {
      variable: '--color-text-disabled',
      name: 'disabled'
    }, {
      variable: '--color-text-inverse',
      name: 'inverse'
    }]} />

      <TokenGroup title="Surface" tokens={[{
      variable: '--color-surface-default',
      name: 'default'
    }, {
      variable: '--color-surface-subtle',
      name: 'subtle'
    }, {
      variable: '--color-surface-muted',
      name: 'muted'
    }, {
      variable: '--color-surface-inverse',
      name: 'inverse'
    }, {
      variable: '--color-surface-overlay',
      name: 'overlay'
    }]} />

      <TokenGroup title="Border" tokens={[{
      variable: '--color-border-default',
      name: 'default'
    }, {
      variable: '--color-border-subtle',
      name: 'subtle'
    }, {
      variable: '--color-border-strong',
      name: 'strong'
    }, {
      variable: '--color-border-accent',
      name: 'accent'
    }]} />

      <div style={{
      ...SECTION_HEADER_STYLES,
      marginBottom: 16
    }}>State</div>
      {(['info', 'success', 'warning', 'danger'] as const).map(state => <TokenGroup key={state} title={state.charAt(0).toUpperCase() + state.slice(1)} tokens={[{
      variable: \`--color-state-\${state}-default\`,
      name: 'default'
    }, {
      variable: \`--color-state-\${state}-bg\`,
      name: 'bg'
    }, {
      variable: \`--color-state-\${state}-text\`,
      name: 'text'
    }]} />)}
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '모든 테마 프리셋의 컬러셋을 한눈에 비교합니다. 헤더의 Theme 버튼으로 Light/Dark를 전환하면 실시간 반영됩니다.'
      }
    }
  },
  render: () => <ThemePresetsContent />
}`,...m.parameters?.docs?.source}}};const I=["Overview","ThemePresets"];export{c as Overview,m as ThemePresets,I as __namedExportsOrder,w as default};
