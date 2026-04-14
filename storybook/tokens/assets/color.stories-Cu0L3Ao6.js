import{j as e,r as x,T as p,R as f}from"./iframe-BH-yr7pr.js";import"./preload-helper-PPVm8Dsz.js";const T={title:"Tokens/Semantic Color"},y=({variable:r,name:o,description:t})=>{const[l,g]=x.useState("");return x.useEffect(()=>{const n=()=>{const i=getComputedStyle(document.documentElement).getPropertyValue(r).trim();g(i)};n();const c=new MutationObserver(n);return c.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>c.disconnect()},[r]),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,padding:"10px 0",borderBottom:"1px solid var(--color-border-subtle, rgba(0,0,0,0.06))"},children:[e.jsx("div",{style:{width:48,height:48,borderRadius:8,background:`var(${r})`,border:"1px solid rgba(128,128,128,0.15)",flexShrink:0}}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("div",{style:{fontSize:13,fontWeight:600,fontFamily:"ui-monospace, monospace",color:"var(--color-text-default, inherit)",marginBottom:2},children:r}),e.jsxs("div",{style:{fontSize:12,color:"var(--color-text-subtle, #64748b)"},children:[o," — ",t]})]}),e.jsx("div",{style:{fontSize:12,fontFamily:"ui-monospace, monospace",color:"var(--color-text-muted, #64748b)",flexShrink:0},children:l})]})},a=({title:r,tokens:o})=>e.jsxs("div",{style:{marginBottom:40},children:[e.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--color-text-subtle, #64748b)",marginBottom:4,paddingBottom:8,borderBottom:"2px solid var(--color-border-default, #e2e8f0)"},children:r}),o.map(t=>e.jsx(y,{...t},t.variable))]}),d={parameters:{docs:{description:{story:"헤더의 Theme 버튼으로 Light/Dark를 전환하면 색상이 실시간으로 업데이트됩니다."}}},render:()=>e.jsxs("div",{style:{padding:40,fontFamily:"system-ui, sans-serif",maxWidth:800},children:[e.jsx("h1",{style:{fontSize:28,fontWeight:700,marginBottom:4,color:"var(--color-text-default, inherit)"},children:"Semantic Color Tokens"}),e.jsx("p",{style:{fontSize:15,color:"var(--color-text-subtle, #64748b)",marginBottom:40,marginTop:0},children:"목적 기반 색상 토큰. 헤더의 Theme 버튼으로 테마를 전환하면 색상이 실시간 반영됩니다."}),e.jsx(a,{title:"Action",tokens:[{variable:"--color-action-primary",name:"Primary",description:"주요 인터랙티브 요소 (버튼, 링크)"},{variable:"--color-action-hover",name:"Hover",description:"hover 상태 action 색상"},{variable:"--color-action-active",name:"Active",description:"active/pressed 상태 action 색상"}]}),e.jsx(a,{title:"Text",tokens:[{variable:"--color-text-default",name:"Default",description:"기본 텍스트 색상"},{variable:"--color-text-muted",name:"Muted",description:"보조 텍스트"},{variable:"--color-text-subtle",name:"Subtle",description:"부드러운 보조 텍스트, 힌트"},{variable:"--color-text-disabled",name:"Disabled",description:"비활성화 텍스트"},{variable:"--color-text-inverse",name:"Inverse",description:"반전 배경 위 텍스트"}]}),e.jsx(a,{title:"Surface",tokens:[{variable:"--color-surface-default",name:"Default",description:"기본 배경 (page, card)"},{variable:"--color-surface-subtle",name:"Subtle",description:"약간 구분되는 배경"},{variable:"--color-surface-muted",name:"Muted",description:"더 구분되는 배경 (hover bg)"},{variable:"--color-surface-inverse",name:"Inverse",description:"반전 배경"}]}),e.jsx(a,{title:"Border",tokens:[{variable:"--color-border-default",name:"Default",description:"기본 테두리"},{variable:"--color-border-subtle",name:"Subtle",description:"약한 테두리 (구분선)"},{variable:"--color-border-strong",name:"Strong",description:"강한 테두리"},{variable:"--color-border-focus",name:"Focus",description:"포커스 링 색상"}]}),e.jsx(a,{title:"State — Info",tokens:[{variable:"--color-state-info-default",name:"Default",description:"정보 강조색"},{variable:"--color-state-info-bg",name:"Background",description:"정보 배경색"},{variable:"--color-state-info-text",name:"Text",description:"정보 텍스트 색상"}]}),e.jsx(a,{title:"State — Success",tokens:[{variable:"--color-state-success-default",name:"Default",description:"성공 강조색"},{variable:"--color-state-success-bg",name:"Background",description:"성공 배경색"},{variable:"--color-state-success-text",name:"Text",description:"성공 텍스트 색상"}]}),e.jsx(a,{title:"State — Warning",tokens:[{variable:"--color-state-warning-default",name:"Default",description:"경고 강조색"},{variable:"--color-state-warning-bg",name:"Background",description:"경고 배경색"},{variable:"--color-state-warning-text",name:"Text",description:"경고 텍스트 색상"}]}),e.jsx(a,{title:"State — Danger",tokens:[{variable:"--color-state-danger-default",name:"Default",description:"위험 강조색"},{variable:"--color-state-danger-bg",name:"Background",description:"위험 배경색"},{variable:"--color-state-danger-text",name:"Text",description:"위험 텍스트 색상"}]})]})},s=({label:r,tokens:o})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("div",{style:{fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-text-subtle, #64748b)",marginBottom:12},children:r}),e.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:o.map(t=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:64,height:64,borderRadius:12,background:`var(${t.variable})`,border:"1px solid rgba(128,128,128,0.12)",marginBottom:6}}),e.jsx("div",{style:{fontSize:11,color:"var(--color-text-subtle, #64748b)",lineHeight:1.3},children:t.name})]},t.variable))})]}),b={parameters:{docs:{description:{story:"색상 그룹별 팔레트 뷰. 테마 전환 시 실시간으로 색상이 변경됩니다."}}},render:()=>e.jsxs("div",{style:{padding:40,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:28,fontWeight:700,marginBottom:4,color:"var(--color-text-default, inherit)"},children:"Color Palette"}),e.jsx("p",{style:{fontSize:15,color:"var(--color-text-subtle, #64748b)",marginBottom:40,marginTop:0},children:"테마별 시맨틱 컬러 팔레트"}),e.jsx(s,{label:"Action",tokens:[{variable:"--color-action-primary",name:"primary"},{variable:"--color-action-hover",name:"hover"},{variable:"--color-action-active",name:"active"}]}),e.jsx(s,{label:"Text",tokens:[{variable:"--color-text-default",name:"default"},{variable:"--color-text-muted",name:"muted"},{variable:"--color-text-subtle",name:"subtle"},{variable:"--color-text-disabled",name:"disabled"},{variable:"--color-text-inverse",name:"inverse"}]}),e.jsx(s,{label:"Surface",tokens:[{variable:"--color-surface-default",name:"default"},{variable:"--color-surface-subtle",name:"subtle"},{variable:"--color-surface-muted",name:"muted"},{variable:"--color-surface-inverse",name:"inverse"}]}),e.jsx(s,{label:"Border",tokens:[{variable:"--color-border-default",name:"default"},{variable:"--color-border-subtle",name:"subtle"},{variable:"--color-border-strong",name:"strong"},{variable:"--color-border-focus",name:"focus"}]}),e.jsx("div",{style:{fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-text-subtle, #64748b)",marginBottom:16},children:"State"}),["info","success","warning","danger"].map(r=>e.jsx(s,{label:r.charAt(0).toUpperCase()+r.slice(1),tokens:[{variable:`--color-state-${r}-default`,name:"default"},{variable:`--color-state-${r}-bg`,name:"bg"},{variable:`--color-state-${r}-text`,name:"text"}]},r))]})},v=[{category:"action",key:"primary",label:"Action Primary"},{category:"action",key:"hover",label:"Action Hover"},{category:"action",key:"active",label:"Action Active"},{category:"action",key:"bg",label:"Action Bg"},{category:"text",key:"default",label:"Text Default"},{category:"text",key:"muted",label:"Text Muted"},{category:"text",key:"subtle",label:"Text Subtle"},{category:"text",key:"disabled",label:"Text Disabled"},{category:"text",key:"inverse",label:"Text Inverse"},{category:"surface",key:"default",label:"Surface Default"},{category:"surface",key:"subtle",label:"Surface Subtle"},{category:"surface",key:"muted",label:"Surface Muted"},{category:"surface",key:"inverse",label:"Surface Inverse"},{category:"border",key:"default",label:"Border Default"},{category:"border",key:"subtle",label:"Border Subtle"},{category:"border",key:"strong",label:"Border Strong"},{category:"border",key:"focus",label:"Border Focus"},{category:"accent",key:"primary",label:"Accent Primary"},{category:"accent",key:"secondary",label:"Accent Secondary"},{category:"accent",key:"tertiary",label:"Accent Tertiary"},{category:"accent",key:"primarySubtle",label:"Accent Primary Subtle"},{category:"accent",key:"secondarySubtle",label:"Accent Secondary Subtle"},{category:"accent",key:"tertiarySubtle",label:"Accent Tertiary Subtle"}],m=Object.keys(p);function h(r,o,t){return r[o]?.[t]??""}const u={parameters:{docs:{description:{story:"모든 테마 프리셋의 컬러셋을 한눈에 비교합니다. Light / Dark 모드 각각의 토큰 값을 확인할 수 있습니다."}}},render:()=>{const[r,o]=x.useState("light");return e.jsxs("div",{style:{padding:40,fontFamily:"system-ui, sans-serif",maxWidth:1200},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:32},children:[e.jsxs("div",{children:[e.jsx("h1",{style:{fontSize:28,fontWeight:700,margin:0,color:"var(--color-text-default, inherit)"},children:"Theme Presets"}),e.jsxs("p",{style:{fontSize:14,color:"var(--color-text-subtle, #64748b)",marginTop:4,marginBottom:0},children:[m.length," presets x ",v.length," tokens"]})]}),e.jsx("div",{style:{display:"flex",gap:8},children:["light","dark"].map(t=>e.jsx("button",{onClick:()=>o(t),style:{padding:"6px 16px",borderRadius:6,border:"1px solid",borderColor:r===t?"var(--color-action-primary, #06b6d4)":"rgba(128,128,128,0.2)",background:r===t?"var(--color-action-primary, #06b6d4)":"transparent",color:r===t?"white":"var(--color-text-default, inherit)",cursor:"pointer",fontSize:13,fontWeight:500},children:t.charAt(0).toUpperCase()+t.slice(1)},t))})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",fontSize:12,fontFamily:"ui-monospace, monospace"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left",padding:"8px 12px",borderBottom:"2px solid rgba(128,128,128,0.2)",position:"sticky",left:0,background:"var(--color-surface-default, white)"},children:"Token"}),m.map(t=>e.jsx("th",{style:{textAlign:"center",padding:"8px 12px",borderBottom:"2px solid rgba(128,128,128,0.2)",minWidth:120},children:p[t].name},t))]})}),e.jsx("tbody",{children:v.map((t,l)=>{const g=l===0||v[l-1].category!==t.category;return e.jsxs(f.Fragment,{children:[g&&e.jsx("tr",{children:e.jsx("td",{colSpan:m.length+1,style:{padding:"12px 12px 4px",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--color-text-subtle, #64748b)",fontFamily:"system-ui, sans-serif"},children:t.category})}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"6px 12px",borderBottom:"1px solid rgba(128,128,128,0.08)",position:"sticky",left:0,background:"var(--color-surface-default, white)",color:"var(--color-text-muted, #334155)"},children:t.label}),m.map(n=>{const c=r==="dark"?p[n].dark:p[n].light,i=h(c,t.category,t.key);return e.jsx("td",{style:{padding:"6px 12px",borderBottom:"1px solid rgba(128,128,128,0.08)",textAlign:"center"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,justifyContent:"center"},children:[e.jsx("div",{style:{width:28,height:28,borderRadius:6,backgroundColor:i,border:"1px solid rgba(128,128,128,0.15)",flexShrink:0}}),e.jsx("span",{style:{color:"var(--color-text-subtle, #64748b)",fontSize:10},children:i.length>20?"rgba...":i})]})},n)})]})]},`${t.category}.${t.key}`)})})]})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    maxWidth: 800
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

      <TokenGroup title="Action" tokens={[{
      variable: '--color-action-primary',
      name: 'Primary',
      description: '주요 인터랙티브 요소 (버튼, 링크)'
    }, {
      variable: '--color-action-hover',
      name: 'Hover',
      description: 'hover 상태 action 색상'
    }, {
      variable: '--color-action-active',
      name: 'Active',
      description: 'active/pressed 상태 action 색상'
    }]} />

      <TokenGroup title="Text" tokens={[{
      variable: '--color-text-default',
      name: 'Default',
      description: '기본 텍스트 색상'
    }, {
      variable: '--color-text-muted',
      name: 'Muted',
      description: '보조 텍스트'
    }, {
      variable: '--color-text-subtle',
      name: 'Subtle',
      description: '부드러운 보조 텍스트, 힌트'
    }, {
      variable: '--color-text-disabled',
      name: 'Disabled',
      description: '비활성화 텍스트'
    }, {
      variable: '--color-text-inverse',
      name: 'Inverse',
      description: '반전 배경 위 텍스트'
    }]} />

      <TokenGroup title="Surface" tokens={[{
      variable: '--color-surface-default',
      name: 'Default',
      description: '기본 배경 (page, card)'
    }, {
      variable: '--color-surface-subtle',
      name: 'Subtle',
      description: '약간 구분되는 배경'
    }, {
      variable: '--color-surface-muted',
      name: 'Muted',
      description: '더 구분되는 배경 (hover bg)'
    }, {
      variable: '--color-surface-inverse',
      name: 'Inverse',
      description: '반전 배경'
    }]} />

      <TokenGroup title="Border" tokens={[{
      variable: '--color-border-default',
      name: 'Default',
      description: '기본 테두리'
    }, {
      variable: '--color-border-subtle',
      name: 'Subtle',
      description: '약한 테두리 (구분선)'
    }, {
      variable: '--color-border-strong',
      name: 'Strong',
      description: '강한 테두리'
    }, {
      variable: '--color-border-focus',
      name: 'Focus',
      description: '포커스 링 색상'
    }]} />

      <TokenGroup title="State — Info" tokens={[{
      variable: '--color-state-info-default',
      name: 'Default',
      description: '정보 강조색'
    }, {
      variable: '--color-state-info-bg',
      name: 'Background',
      description: '정보 배경색'
    }, {
      variable: '--color-state-info-text',
      name: 'Text',
      description: '정보 텍스트 색상'
    }]} />

      <TokenGroup title="State — Success" tokens={[{
      variable: '--color-state-success-default',
      name: 'Default',
      description: '성공 강조색'
    }, {
      variable: '--color-state-success-bg',
      name: 'Background',
      description: '성공 배경색'
    }, {
      variable: '--color-state-success-text',
      name: 'Text',
      description: '성공 텍스트 색상'
    }]} />

      <TokenGroup title="State — Warning" tokens={[{
      variable: '--color-state-warning-default',
      name: 'Default',
      description: '경고 강조색'
    }, {
      variable: '--color-state-warning-bg',
      name: 'Background',
      description: '경고 배경색'
    }, {
      variable: '--color-state-warning-text',
      name: 'Text',
      description: '경고 텍스트 색상'
    }]} />

      <TokenGroup title="State — Danger" tokens={[{
      variable: '--color-state-danger-default',
      name: 'Default',
      description: '위험 강조색'
    }, {
      variable: '--color-state-danger-bg',
      name: 'Background',
      description: '위험 배경색'
    }, {
      variable: '--color-state-danger-text',
      name: 'Text',
      description: '위험 텍스트 색상'
    }]} />
    </div>
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '색상 그룹별 팔레트 뷰. 테마 전환 시 실시간으로 색상이 변경됩니다.'
      }
    }
  },
  render: () => <div style={{
    padding: 40,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <h1 style={{
      fontSize: 28,
      fontWeight: 700,
      marginBottom: 4,
      color: 'var(--color-text-default, inherit)'
    }}>
        Color Palette
      </h1>
      <p style={{
      fontSize: 15,
      color: 'var(--color-text-subtle, #64748b)',
      marginBottom: 40,
      marginTop: 0
    }}>
        테마별 시맨틱 컬러 팔레트
      </p>

      <PaletteGroup label="Action" tokens={[{
      variable: '--color-action-primary',
      name: 'primary'
    }, {
      variable: '--color-action-hover',
      name: 'hover'
    }, {
      variable: '--color-action-active',
      name: 'active'
    }]} />

      <PaletteGroup label="Text" tokens={[{
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

      <PaletteGroup label="Surface" tokens={[{
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
    }]} />

      <PaletteGroup label="Border" tokens={[{
      variable: '--color-border-default',
      name: 'default'
    }, {
      variable: '--color-border-subtle',
      name: 'subtle'
    }, {
      variable: '--color-border-strong',
      name: 'strong'
    }, {
      variable: '--color-border-focus',
      name: 'focus'
    }]} />

      <div style={{
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--color-text-subtle, #64748b)',
      marginBottom: 16
    }}>
        State
      </div>
      {(['info', 'success', 'warning', 'danger'] as const).map(state => <PaletteGroup key={state} label={state.charAt(0).toUpperCase() + state.slice(1)} tokens={[{
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
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '모든 테마 프리셋의 컬러셋을 한눈에 비교합니다. Light / Dark 모드 각각의 토큰 값을 확인할 수 있습니다.'
      }
    }
  },
  render: () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    return <div style={{
      padding: 40,
      fontFamily: 'system-ui, sans-serif',
      maxWidth: 1200
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32
      }}>
          <div>
            <h1 style={{
            fontSize: 28,
            fontWeight: 700,
            margin: 0,
            color: 'var(--color-text-default, inherit)'
          }}>
              Theme Presets
            </h1>
            <p style={{
            fontSize: 14,
            color: 'var(--color-text-subtle, #64748b)',
            marginTop: 4,
            marginBottom: 0
          }}>
              {PRESET_NAMES.length} presets x {TOKEN_KEYS.length} tokens
            </p>
          </div>
          <div style={{
          display: 'flex',
          gap: 8
        }}>
            {(['light', 'dark'] as const).map(m => <button key={m} onClick={() => setMode(m)} style={{
            padding: '6px 16px',
            borderRadius: 6,
            border: '1px solid',
            borderColor: mode === m ? 'var(--color-action-primary, #06b6d4)' : 'rgba(128,128,128,0.2)',
            background: mode === m ? 'var(--color-action-primary, #06b6d4)' : 'transparent',
            color: mode === m ? 'white' : 'var(--color-text-default, inherit)',
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 500
          }}>
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </button>)}
          </div>
        </div>

        <div style={{
        overflowX: 'auto'
      }}>
          <table style={{
          borderCollapse: 'collapse',
          width: '100%',
          fontSize: 12,
          fontFamily: 'ui-monospace, monospace'
        }}>
            <thead>
              <tr>
                <th style={{
                textAlign: 'left',
                padding: '8px 12px',
                borderBottom: '2px solid rgba(128,128,128,0.2)',
                position: 'sticky',
                left: 0,
                background: 'var(--color-surface-default, white)'
              }}>
                  Token
                </th>
                {PRESET_NAMES.map(name => <th key={name} style={{
                textAlign: 'center',
                padding: '8px 12px',
                borderBottom: '2px solid rgba(128,128,128,0.2)',
                minWidth: 120
              }}>
                    {THEME_PRESETS[name].name}
                  </th>)}
              </tr>
            </thead>
            <tbody>
              {TOKEN_KEYS.map((token, i) => {
              const isNewCategory = i === 0 || TOKEN_KEYS[i - 1].category !== token.category;
              return <React.Fragment key={\`\${token.category}.\${token.key}\`}>
                    {isNewCategory && <tr>
                        <td colSpan={PRESET_NAMES.length + 1} style={{
                    padding: '12px 12px 4px',
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-text-subtle, #64748b)',
                    fontFamily: 'system-ui, sans-serif'
                  }}>
                          {token.category}
                        </td>
                      </tr>}
                    <tr>
                      <td style={{
                    padding: '6px 12px',
                    borderBottom: '1px solid rgba(128,128,128,0.08)',
                    position: 'sticky',
                    left: 0,
                    background: 'var(--color-surface-default, white)',
                    color: 'var(--color-text-muted, #334155)'
                  }}>
                        {token.label}
                      </td>
                      {PRESET_NAMES.map(name => {
                    const colors = mode === 'dark' ? THEME_PRESETS[name].dark : THEME_PRESETS[name].light;
                    const color = getTokenColor(colors, token.category, token.key);
                    return <td key={name} style={{
                      padding: '6px 12px',
                      borderBottom: '1px solid rgba(128,128,128,0.08)',
                      textAlign: 'center'
                    }}>
                            <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        justifyContent: 'center'
                      }}>
                              <div style={{
                          width: 28,
                          height: 28,
                          borderRadius: 6,
                          backgroundColor: color,
                          border: '1px solid rgba(128,128,128,0.15)',
                          flexShrink: 0
                        }} />
                              <span style={{
                          color: 'var(--color-text-subtle, #64748b)',
                          fontSize: 10
                        }}>
                                {color.length > 20 ? 'rgba...' : color}
                              </span>
                            </div>
                          </td>;
                  })}
                    </tr>
                  </React.Fragment>;
            })}
            </tbody>
          </table>
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const j=["Overview","Palette","ThemePresets"];export{d as Overview,b as Palette,u as ThemePresets,j as __namedExportsOrder,T as default};
