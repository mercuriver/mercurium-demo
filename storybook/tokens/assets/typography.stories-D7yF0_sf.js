import{j as e}from"./iframe-D2ZfZh3C.js";import"./preload-helper-PPVm8Dsz.js";const s={xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"},a={thin:100,extralight:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},c=s,d=a,m={sans:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',serif:'Georgia, Cambria, "Times New Roman", Times, serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},f={h1:{fontSize:"2.5rem",lineHeight:1.2,fontWeight:600},h2:{fontSize:"2rem",lineHeight:1.25,fontWeight:600},h3:{fontSize:"1.5rem",lineHeight:1.33,fontWeight:600},h4:{fontSize:"1.125rem",lineHeight:1.4,fontWeight:600},h5:{fontSize:"1rem",lineHeight:1.5,fontWeight:600},h6:{fontSize:"0.875rem",lineHeight:1.43,fontWeight:500}},h={lg:{fontSize:"1.125rem",lineHeight:1.56,fontWeight:400},md:{fontSize:"1rem",lineHeight:1.5,fontWeight:400},sm:{fontSize:"0.875rem",lineHeight:1.43,fontWeight:400},xs:{fontSize:"0.75rem",lineHeight:1.33,fontWeight:400}},y={lg:{fontSize:"1rem",lineHeight:1.5,fontWeight:500},md:{fontSize:"0.875rem",lineHeight:1.43,fontWeight:500},sm:{fontSize:"0.75rem",lineHeight:1.33,fontWeight:500}},v={title:"Tokens/Typography"},o={render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:32,color:"var(--color-text-default, inherit)"},children:"Font Size"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:Object.entries(c).map(([t,n])=>e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:16},children:[e.jsx("span",{style:{width:60,fontSize:12,color:"var(--color-text-subtle, #64748b)"},children:t}),e.jsx("span",{style:{fontSize:n,color:"var(--color-text-default, inherit)"},children:"The quick brown fox"}),e.jsx("span",{style:{fontSize:12,color:"var(--color-text-muted, #94a3b8)"},children:n})]},t))})]})},i={render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:32,color:"var(--color-text-default, inherit)"},children:"Font Weight"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:Object.entries(d).map(([t,n])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{width:80,fontSize:12,color:"var(--color-text-subtle, #64748b)"},children:t}),e.jsx("span",{style:{fontSize:20,fontWeight:n,color:"var(--color-text-default, inherit)"},children:"The quick brown fox"}),e.jsx("span",{style:{fontSize:12,color:"var(--color-text-muted, #94a3b8)"},children:n})]},t))})]})},l={render:()=>e.jsxs("div",{style:{padding:32},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:32,fontFamily:"system-ui, sans-serif",color:"var(--color-text-default, inherit)"},children:"Font Family"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:Object.entries(m).map(([t,n])=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"var(--color-text-subtle, #64748b)",marginBottom:8,fontFamily:"system-ui"},children:t}),e.jsx("div",{style:{fontSize:24,fontFamily:n,color:"var(--color-text-default, inherit)"},children:"The quick brown fox jumps over the lazy dog"}),e.jsx("div",{style:{fontSize:11,color:"var(--color-text-muted, #94a3b8)",marginTop:4,fontFamily:"monospace"},children:n})]},t))})]})},r={render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:32,color:"var(--color-text-default, inherit)"},children:"Typography Presets"}),e.jsx("h2",{style:{fontSize:16,color:"var(--color-text-subtle, #64748b)",marginBottom:16},children:"Heading"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:32},children:Object.entries(f).map(([t,n])=>e.jsxs("div",{style:{fontSize:n.fontSize,fontWeight:n.fontWeight,lineHeight:n.lineHeight,color:"var(--color-text-default, inherit)"},children:[t,": The quick brown fox"]},t))}),e.jsx("h2",{style:{fontSize:16,color:"var(--color-text-subtle, #64748b)",marginBottom:16},children:"Body"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:32},children:Object.entries(h).map(([t,n])=>e.jsxs("div",{style:{fontSize:n.fontSize,fontWeight:n.fontWeight,lineHeight:n.lineHeight,color:"var(--color-text-default, inherit)"},children:[t,": The quick brown fox jumps over the lazy dog"]},t))}),e.jsx("h2",{style:{fontSize:16,color:"var(--color-text-subtle, #64748b)",marginBottom:16},children:"Label"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Object.entries(y).map(([t,n])=>e.jsxs("div",{style:{fontSize:n.fontSize,fontWeight:n.fontWeight,lineHeight:n.lineHeight,color:"var(--color-text-default, inherit)"},children:[t,": Form Label Text"]},t))})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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

      <h2 style={{
      fontSize: 16,
      color: 'var(--color-text-subtle, #64748b)',
      marginBottom: 16
    }}>
        Body
      </h2>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginBottom: 32
    }}>
        {Object.entries(body).map(([key, value]) => <div key={key} style={{
        fontSize: value.fontSize,
        fontWeight: value.fontWeight,
        lineHeight: value.lineHeight,
        color: 'var(--color-text-default, inherit)'
      }}>
            {key}: The quick brown fox jumps over the lazy dog
          </div>)}
      </div>

      <h2 style={{
      fontSize: 16,
      color: 'var(--color-text-subtle, #64748b)',
      marginBottom: 16
    }}>
        Label
      </h2>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        {Object.entries(label).map(([key, value]) => <div key={key} style={{
        fontSize: value.fontSize,
        fontWeight: value.fontWeight,
        lineHeight: value.lineHeight,
        color: 'var(--color-text-default, inherit)'
      }}>
            {key}: Form Label Text
          </div>)}
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};const p=["FontSize","FontWeight","FontFamily","Presets"];export{l as FontFamily,o as FontSize,i as FontWeight,r as Presets,p as __namedExportsOrder,v as default};
