import{j as e,r as d}from"./iframe-B86mtrMf.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Tokens/Semantic Color"},v=({variable:t,name:o,description:r})=>{const[m,b]=d.useState("");return d.useEffect(()=>{const s=()=>{const u=getComputedStyle(document.documentElement).getPropertyValue(t).trim();b(u)};s();const c=new MutationObserver(s);return c.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>c.disconnect()},[t]),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,padding:"10px 0",borderBottom:"1px solid var(--color-border-subtle, rgba(0,0,0,0.06))"},children:[e.jsx("div",{style:{width:48,height:48,borderRadius:8,background:`var(${t})`,border:"1px solid rgba(128,128,128,0.15)",flexShrink:0}}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("div",{style:{fontSize:13,fontWeight:600,fontFamily:"ui-monospace, monospace",color:"var(--color-text-default, inherit)",marginBottom:2},children:t}),e.jsxs("div",{style:{fontSize:12,color:"var(--color-text-subtle, #64748b)"},children:[o," — ",r]})]}),e.jsx("div",{style:{fontSize:12,fontFamily:"ui-monospace, monospace",color:"var(--color-text-muted, #64748b)",flexShrink:0},children:m})]})},a=({title:t,tokens:o})=>e.jsxs("div",{style:{marginBottom:40},children:[e.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--color-text-subtle, #64748b)",marginBottom:4,paddingBottom:8,borderBottom:"2px solid var(--color-border-default, #e2e8f0)"},children:t}),o.map(r=>e.jsx(v,{...r},r.variable))]}),i={parameters:{docs:{description:{story:"헤더의 Theme 버튼으로 Light/Dark를 전환하면 색상이 실시간으로 업데이트됩니다."}}},render:()=>e.jsxs("div",{style:{padding:40,fontFamily:"system-ui, sans-serif",maxWidth:800},children:[e.jsx("h1",{style:{fontSize:28,fontWeight:700,marginBottom:4,color:"var(--color-text-default, inherit)"},children:"Semantic Color Tokens"}),e.jsx("p",{style:{fontSize:15,color:"var(--color-text-subtle, #64748b)",marginBottom:40,marginTop:0},children:"목적 기반 색상 토큰. 헤더의 Theme 버튼으로 테마를 전환하면 색상이 실시간 반영됩니다."}),e.jsx(a,{title:"Action",tokens:[{variable:"--color-action-primary",name:"Primary",description:"주요 인터랙티브 요소 (버튼, 링크)"},{variable:"--color-action-hover",name:"Hover",description:"hover 상태 action 색상"},{variable:"--color-action-active",name:"Active",description:"active/pressed 상태 action 색상"}]}),e.jsx(a,{title:"Text",tokens:[{variable:"--color-text-default",name:"Default",description:"기본 텍스트 색상"},{variable:"--color-text-muted",name:"Muted",description:"보조 텍스트"},{variable:"--color-text-subtle",name:"Subtle",description:"부드러운 보조 텍스트, 힌트"},{variable:"--color-text-disabled",name:"Disabled",description:"비활성화 텍스트"},{variable:"--color-text-inverse",name:"Inverse",description:"반전 배경 위 텍스트"}]}),e.jsx(a,{title:"Surface",tokens:[{variable:"--color-surface-default",name:"Default",description:"기본 배경 (page, card)"},{variable:"--color-surface-subtle",name:"Subtle",description:"약간 구분되는 배경"},{variable:"--color-surface-muted",name:"Muted",description:"더 구분되는 배경 (hover bg)"},{variable:"--color-surface-inverse",name:"Inverse",description:"반전 배경"}]}),e.jsx(a,{title:"Border",tokens:[{variable:"--color-border-default",name:"Default",description:"기본 테두리"},{variable:"--color-border-subtle",name:"Subtle",description:"약한 테두리 (구분선)"},{variable:"--color-border-strong",name:"Strong",description:"강한 테두리"},{variable:"--color-border-focus",name:"Focus",description:"포커스 링 색상"}]}),e.jsx(a,{title:"State — Info",tokens:[{variable:"--color-state-info-default",name:"Default",description:"정보 강조색"},{variable:"--color-state-info-bg",name:"Background",description:"정보 배경색"},{variable:"--color-state-info-text",name:"Text",description:"정보 텍스트 색상"}]}),e.jsx(a,{title:"State — Success",tokens:[{variable:"--color-state-success-default",name:"Default",description:"성공 강조색"},{variable:"--color-state-success-bg",name:"Background",description:"성공 배경색"},{variable:"--color-state-success-text",name:"Text",description:"성공 텍스트 색상"}]}),e.jsx(a,{title:"State — Warning",tokens:[{variable:"--color-state-warning-default",name:"Default",description:"경고 강조색"},{variable:"--color-state-warning-bg",name:"Background",description:"경고 배경색"},{variable:"--color-state-warning-text",name:"Text",description:"경고 텍스트 색상"}]}),e.jsx(a,{title:"State — Danger",tokens:[{variable:"--color-state-danger-default",name:"Default",description:"위험 강조색"},{variable:"--color-state-danger-bg",name:"Background",description:"위험 배경색"},{variable:"--color-state-danger-text",name:"Text",description:"위험 텍스트 색상"}]})]})},n=({label:t,tokens:o})=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("div",{style:{fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-text-subtle, #64748b)",marginBottom:12},children:t}),e.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:o.map(r=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:64,height:64,borderRadius:12,background:`var(${r.variable})`,border:"1px solid rgba(128,128,128,0.12)",marginBottom:6}}),e.jsx("div",{style:{fontSize:11,color:"var(--color-text-subtle, #64748b)",lineHeight:1.3},children:r.name})]},r.variable))})]}),l={parameters:{docs:{description:{story:"색상 그룹별 팔레트 뷰. 테마 전환 시 실시간으로 색상이 변경됩니다."}}},render:()=>e.jsxs("div",{style:{padding:40,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:28,fontWeight:700,marginBottom:4,color:"var(--color-text-default, inherit)"},children:"Color Palette"}),e.jsx("p",{style:{fontSize:15,color:"var(--color-text-subtle, #64748b)",marginBottom:40,marginTop:0},children:"테마별 시맨틱 컬러 팔레트"}),e.jsx(n,{label:"Action",tokens:[{variable:"--color-action-primary",name:"primary"},{variable:"--color-action-hover",name:"hover"},{variable:"--color-action-active",name:"active"}]}),e.jsx(n,{label:"Text",tokens:[{variable:"--color-text-default",name:"default"},{variable:"--color-text-muted",name:"muted"},{variable:"--color-text-subtle",name:"subtle"},{variable:"--color-text-disabled",name:"disabled"},{variable:"--color-text-inverse",name:"inverse"}]}),e.jsx(n,{label:"Surface",tokens:[{variable:"--color-surface-default",name:"default"},{variable:"--color-surface-subtle",name:"subtle"},{variable:"--color-surface-muted",name:"muted"},{variable:"--color-surface-inverse",name:"inverse"}]}),e.jsx(n,{label:"Border",tokens:[{variable:"--color-border-default",name:"default"},{variable:"--color-border-subtle",name:"subtle"},{variable:"--color-border-strong",name:"strong"},{variable:"--color-border-focus",name:"focus"}]}),e.jsx("div",{style:{fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-text-subtle, #64748b)",marginBottom:16},children:"State"}),["info","success","warning","danger"].map(t=>e.jsx(n,{label:t.charAt(0).toUpperCase()+t.slice(1),tokens:[{variable:`--color-state-${t}-default`,name:"default"},{variable:`--color-state-${t}-bg`,name:"bg"},{variable:`--color-state-${t}-text`,name:"text"}]},t))]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const g=["Overview","Palette"];export{i as Overview,l as Palette,g as __namedExportsOrder,x as default};
