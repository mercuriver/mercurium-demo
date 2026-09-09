import{j as e}from"./iframe-DSkmGFpK.js";import"./preload-helper-PPVm8Dsz.js";const o={xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"},i={thin:100,extralight:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},r={tight:1.25,snug:1.375,normal:1.5},d=o,m=i,f={sans:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',serif:'Georgia, Cambria, "Times New Roman", Times, serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},h={h1:{fontSize:o["3xl"],lineHeight:r.tight,fontWeight:i.semibold},h2:{fontSize:o["2xl"],lineHeight:r.snug,fontWeight:i.semibold},h3:{fontSize:o.lg,lineHeight:r.snug,fontWeight:i.semibold},h4:{fontSize:o.base,lineHeight:r.normal,fontWeight:i.semibold},h5:{fontSize:o.base,lineHeight:r.normal,fontWeight:i.medium},h6:{fontSize:o.sm,lineHeight:r.snug,fontWeight:i.medium}},g={title:"Tokens/Typography"},l={render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:32,color:"var(--color-text-default, inherit)"},children:"Font Size"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:Object.entries(d).map(([t,n])=>e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:16},children:[e.jsx("span",{style:{width:60,fontSize:12,color:"var(--color-text-subtle, #64748b)"},children:t}),e.jsx("span",{style:{fontSize:n,color:"var(--color-text-default, inherit)"},children:"The quick brown fox"}),e.jsx("span",{style:{fontSize:12,color:"var(--color-text-muted, #94a3b8)"},children:n})]},t))})]})},s={render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:32,color:"var(--color-text-default, inherit)"},children:"Font Weight"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:Object.entries(m).map(([t,n])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{width:80,fontSize:12,color:"var(--color-text-subtle, #64748b)"},children:t}),e.jsx("span",{style:{fontSize:20,fontWeight:n,color:"var(--color-text-default, inherit)"},children:"The quick brown fox"}),e.jsx("span",{style:{fontSize:12,color:"var(--color-text-muted, #94a3b8)"},children:n})]},t))})]})},a={render:()=>e.jsxs("div",{style:{padding:32},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:32,fontFamily:"system-ui, sans-serif",color:"var(--color-text-default, inherit)"},children:"Font Family"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:Object.entries(f).map(([t,n])=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"var(--color-text-subtle, #64748b)",marginBottom:8,fontFamily:"system-ui"},children:t}),e.jsx("div",{style:{fontSize:24,fontFamily:n,color:"var(--color-text-default, inherit)"},children:"The quick brown fox jumps over the lazy dog"}),e.jsx("div",{style:{fontSize:11,color:"var(--color-text-muted, #94a3b8)",marginTop:4,fontFamily:"monospace"},children:n})]},t))})]})},c={render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:32,color:"var(--color-text-default, inherit)"},children:"Typography Presets"}),e.jsx("h2",{style:{fontSize:16,color:"var(--color-text-subtle, #64748b)",marginBottom:16},children:"Heading"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:32},children:Object.entries(h).map(([t,n])=>e.jsxs("div",{style:{fontSize:n.fontSize,fontWeight:n.fontWeight,lineHeight:n.lineHeight,color:"var(--color-text-default, inherit)"},children:[t,": The quick brown fox"]},t))})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <h1 style={{
      fontSize: 24,
      marginBottom: 32,
      color: 'var(--color-text-default, inherit)'
    }}>
        Font Size
      </h1>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        {Object.entries(fontSize).map(([key, value]) => <div key={key} style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 16
      }}>
            <span style={{
          width: 60,
          fontSize: 12,
          color: 'var(--color-text-subtle, #64748b)'
        }}>
              {key}
            </span>
            <span style={{
          fontSize: value,
          color: 'var(--color-text-default, inherit)'
        }}>
              The quick brown fox
            </span>
            <span style={{
          fontSize: 12,
          color: 'var(--color-text-muted, #94a3b8)'
        }}>{value}</span>
          </div>)}
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <h1 style={{
      fontSize: 24,
      marginBottom: 32,
      color: 'var(--color-text-default, inherit)'
    }}>
        Font Weight
      </h1>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        {Object.entries(fontWeight).map(([key, value]) => <div key={key} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }}>
            <span style={{
          width: 80,
          fontSize: 12,
          color: 'var(--color-text-subtle, #64748b)'
        }}>
              {key}
            </span>
            <span style={{
          fontSize: 20,
          fontWeight: value,
          color: 'var(--color-text-default, inherit)'
        }}>
              The quick brown fox
            </span>
            <span style={{
          fontSize: 12,
          color: 'var(--color-text-muted, #94a3b8)'
        }}>{value}</span>
          </div>)}
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32
  }}>
      <h1 style={{
      fontSize: 24,
      marginBottom: 32,
      fontFamily: 'system-ui, sans-serif',
      color: 'var(--color-text-default, inherit)'
    }}>
        Font Family
      </h1>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        {Object.entries(fontFamily).map(([key, value]) => <div key={key}>
            <div style={{
          fontSize: 12,
          color: 'var(--color-text-subtle, #64748b)',
          marginBottom: 8,
          fontFamily: 'system-ui'
        }}>
              {key}
            </div>
            <div style={{
          fontSize: 24,
          fontFamily: value,
          color: 'var(--color-text-default, inherit)'
        }}>
              The quick brown fox jumps over the lazy dog
            </div>
            <div style={{
          fontSize: 11,
          color: 'var(--color-text-muted, #94a3b8)',
          marginTop: 4,
          fontFamily: 'monospace'
        }}>
              {value}
            </div>
          </div>)}
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <h1 style={{
      fontSize: 24,
      marginBottom: 32,
      color: 'var(--color-text-default, inherit)'
    }}>
        Typography Presets
      </h1>

      <h2 style={{
      fontSize: 16,
      color: 'var(--color-text-subtle, #64748b)',
      marginBottom: 16
    }}>
        Heading
      </h2>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginBottom: 32
    }}>
        {Object.entries(heading).map(([key, value]) => <div key={key} style={{
        fontSize: value.fontSize,
        fontWeight: value.fontWeight,
        lineHeight: value.lineHeight,
        color: 'var(--color-text-default, inherit)'
      }}>
            {key}: The quick brown fox
          </div>)}
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};const p=["FontSize","FontWeight","FontFamily","Presets"];export{a as FontFamily,l as FontSize,s as FontWeight,c as Presets,p as __namedExportsOrder,g as default};
