import{j as e}from"./iframe-BH-yr7pr.js";import{b as u,a as v,r as m,s as x}from"./index-CICKtDm0.js";import"./preload-helper-PPVm8Dsz.js";const i=x,d=m,h=u,t=v,o={hide:-1,base:0,raised:1,dropdown:1e3,sticky:1100,overlay:1200,modal:1300,toast:1350,popover:1400,tooltip:1500,contextMenu:1600},z={title:"Tokens/Layout"},a={render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:32,color:"var(--color-text-default, inherit)"},children:"Spacing"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Object.entries(i).map(([r,n])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{width:40,fontSize:12,color:"var(--color-text-subtle, #64748b)"},children:r}),e.jsx("div",{style:{width:n,height:24,background:"var(--color-action-primary, #0ea5e9)",borderRadius:4}}),e.jsx("span",{style:{fontSize:12,color:"var(--color-text-muted, #94a3b8)"},children:n})]},r))})]})},s={render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:32,color:"var(--color-text-default, inherit)"},children:"Border Radius"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:Object.entries(d).map(([r,n])=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:80,height:80,background:"var(--color-action-primary, #0ea5e9)",borderRadius:n,marginBottom:8}}),e.jsx("div",{style:{fontSize:13,fontWeight:500,color:"var(--color-text-default, inherit)"},children:r}),e.jsx("div",{style:{fontSize:11,color:"var(--color-text-muted, #94a3b8)"},children:n})]},r))})]})},l={render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:32,color:"var(--color-text-default, inherit)"},children:"Shadow"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:32},children:Object.entries(t).map(([r,n])=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:120,height:80,background:"var(--color-surface-subtle, #fff)",borderRadius:8,boxShadow:n,marginBottom:12}}),e.jsx("div",{style:{fontSize:13,fontWeight:500,color:"var(--color-text-default, inherit)"},children:r})]},r))})]})},y={modal:{description:"Dialog / Modal",padding:i[6],radius:d.xl,shadow:t.xl,zIndex:o.modal},popover:{description:"Popover / Menu",padding:i[4],radius:d.lg,shadow:t.lg,zIndex:o.popover},tooltip:{description:"Tooltip",padding:i[2],radius:d.md,shadow:t.md,zIndex:o.tooltip},dropdown:{description:"Dropdown",padding:i[3],radius:d.lg,shadow:t.lg,zIndex:o.dropdown},drawer:{description:"Drawer / Side Panel",padding:i[6],radius:d.none,shadow:t["2xl"],zIndex:o.modal},card:{description:"Card",padding:i[5],radius:d.xl,shadow:t.base,zIndex:o.base},panel:{description:"Panel / Section",padding:i[6],radius:d.lg,shadow:t.sm,zIndex:o.base},toast:{description:"Toast / Notification",padding:i[4],radius:d.lg,shadow:t.lg,zIndex:o.tooltip},overlay:{description:"Overlay / Backdrop",padding:i[0],radius:d.none,shadow:t.none,zIndex:o.overlay}},g=r=>Object.entries(t).find(([,n])=>n===r)?.[0]||"none",b=r=>Object.entries(o).find(([,n])=>n===r)?.[0]||"base",c={render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:8,color:"var(--color-text-default, inherit)"},children:"Layout Presets"}),e.jsx("p",{style:{color:"var(--color-text-subtle, #64748b)",marginBottom:32},children:"Common layout token combinations for UI components"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:32},children:Object.entries(y).map(([r,n])=>e.jsxs("div",{children:[e.jsx("div",{style:{padding:n.padding,borderRadius:n.radius,boxShadow:n.shadow,background:"var(--color-surface-subtle, #fff)",border:"1px solid var(--color-border-default, #e5e7eb)",marginBottom:12,minHeight:100,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{color:"var(--color-text-subtle, #64748b)",fontSize:13},children:n.description})}),e.jsx("div",{style:{fontSize:14,fontWeight:600,marginBottom:8,color:"var(--color-text-default, inherit)"},children:r}),e.jsxs("div",{style:{fontSize:11,color:"var(--color-text-subtle, #64748b)",lineHeight:1.6},children:[e.jsxs("div",{children:["padding:"," ",e.jsx("code",{style:{background:"var(--color-surface-muted, #f1f5f9)",padding:"2px 4px",borderRadius:3},children:n.padding})]}),e.jsxs("div",{children:["radius:"," ",e.jsx("code",{style:{background:"var(--color-surface-muted, #f1f5f9)",padding:"2px 4px",borderRadius:3},children:n.radius})]}),e.jsxs("div",{children:["shadow:"," ",e.jsx("code",{style:{background:"var(--color-surface-muted, #f1f5f9)",padding:"2px 4px",borderRadius:3},children:g(n.shadow)})]}),e.jsxs("div",{children:["zIndex:"," ",e.jsxs("code",{style:{background:"var(--color-surface-muted, #f1f5f9)",padding:"2px 4px",borderRadius:3},children:[b(n.zIndex)," (",n.zIndex,")"]})]})]})]},r))})]})},p={render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:32,color:"var(--color-text-default, inherit)"},children:"Z-Index"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:Object.entries(o).sort(([,r],[,n])=>r-n).map(([r,n])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{width:80,fontSize:13,fontWeight:500,color:"var(--color-text-default, inherit)"},children:r}),e.jsx("div",{style:{width:Math.max(n/10+20,20),height:24,background:n<0?"var(--color-state-danger-default, #ef4444)":n===0?"var(--color-text-disabled, #94a3b8)":"var(--color-action-primary, #0ea5e9)",borderRadius:4}}),e.jsx("span",{style:{fontSize:12,color:"var(--color-text-muted, #94a3b8)"},children:n})]},r))})]})},f={render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:32,color:"var(--color-text-default, inherit)"},children:"Border Width"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:Object.entries(h).map(([r,n])=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:80,height:80,background:"var(--color-surface-subtle, #fff)",border:`${n} solid var(--color-action-primary, #0ea5e9)`,borderRadius:8,marginBottom:8}}),e.jsx("div",{style:{fontSize:13,fontWeight:500,color:"var(--color-text-default, inherit)"},children:r}),e.jsx("div",{style:{fontSize:11,color:"var(--color-text-muted, #94a3b8)"},children:n})]},r))})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <h1 style={{
      fontSize: 24,
      marginBottom: 32,
      color: 'var(--color-text-default, inherit)'
    }}>
        Spacing
      </h1>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        {Object.entries(spacing).map(([key, value]) => <div key={key} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }}>
            <span style={{
          width: 40,
          fontSize: 12,
          color: 'var(--color-text-subtle, #64748b)'
        }}>
              {key}
            </span>
            <div style={{
          width: value,
          height: 24,
          background: 'var(--color-action-primary, #0ea5e9)',
          borderRadius: 4
        }} />
            <span style={{
          fontSize: 12,
          color: 'var(--color-text-muted, #94a3b8)'
        }}>{value}</span>
          </div>)}
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <h1 style={{
      fontSize: 24,
      marginBottom: 32,
      color: 'var(--color-text-default, inherit)'
    }}>
        Border Radius
      </h1>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24
    }}>
        {Object.entries(radius).map(([key, value]) => <div key={key} style={{
        textAlign: 'center'
      }}>
            <div style={{
          width: 80,
          height: 80,
          background: 'var(--color-action-primary, #0ea5e9)',
          borderRadius: value,
          marginBottom: 8
        }} />
            <div style={{
          fontSize: 13,
          fontWeight: 500,
          color: 'var(--color-text-default, inherit)'
        }}>
              {key}
            </div>
            <div style={{
          fontSize: 11,
          color: 'var(--color-text-muted, #94a3b8)'
        }}>{value}</div>
          </div>)}
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <h1 style={{
      fontSize: 24,
      marginBottom: 32,
      color: 'var(--color-text-default, inherit)'
    }}>
        Shadow
      </h1>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32
    }}>
        {Object.entries(shadow).map(([key, value]) => <div key={key} style={{
        textAlign: 'center'
      }}>
            <div style={{
          width: 120,
          height: 80,
          background: 'var(--color-surface-subtle, #fff)',
          borderRadius: 8,
          boxShadow: value,
          marginBottom: 12
        }} />
            <div style={{
          fontSize: 13,
          fontWeight: 500,
          color: 'var(--color-text-default, inherit)'
        }}>
              {key}
            </div>
          </div>)}
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <h1 style={{
      fontSize: 24,
      marginBottom: 8,
      color: 'var(--color-text-default, inherit)'
    }}>
        Layout Presets
      </h1>
      <p style={{
      color: 'var(--color-text-subtle, #64748b)',
      marginBottom: 32
    }}>
        Common layout token combinations for UI components
      </p>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 32
    }}>
        {Object.entries(presets).map(([name, preset]) => <div key={name}>
            <div style={{
          padding: preset.padding,
          borderRadius: preset.radius,
          boxShadow: preset.shadow,
          background: 'var(--color-surface-subtle, #fff)',
          border: '1px solid var(--color-border-default, #e5e7eb)',
          marginBottom: 12,
          minHeight: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
              <span style={{
            color: 'var(--color-text-subtle, #64748b)',
            fontSize: 13
          }}>
                {preset.description}
              </span>
            </div>
            <div style={{
          fontSize: 14,
          fontWeight: 600,
          marginBottom: 8,
          color: 'var(--color-text-default, inherit)'
        }}>
              {name}
            </div>
            <div style={{
          fontSize: 11,
          color: 'var(--color-text-subtle, #64748b)',
          lineHeight: 1.6
        }}>
              <div>
                padding:{' '}
                <code style={{
              background: 'var(--color-surface-muted, #f1f5f9)',
              padding: '2px 4px',
              borderRadius: 3
            }}>
                  {preset.padding}
                </code>
              </div>
              <div>
                radius:{' '}
                <code style={{
              background: 'var(--color-surface-muted, #f1f5f9)',
              padding: '2px 4px',
              borderRadius: 3
            }}>
                  {preset.radius}
                </code>
              </div>
              <div>
                shadow:{' '}
                <code style={{
              background: 'var(--color-surface-muted, #f1f5f9)',
              padding: '2px 4px',
              borderRadius: 3
            }}>
                  {getShadowName(preset.shadow)}
                </code>
              </div>
              <div>
                zIndex:{' '}
                <code style={{
              background: 'var(--color-surface-muted, #f1f5f9)',
              padding: '2px 4px',
              borderRadius: 3
            }}>
                  {getZIndexName(preset.zIndex)} ({preset.zIndex})
                </code>
              </div>
            </div>
          </div>)}
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <h1 style={{
      fontSize: 24,
      marginBottom: 32,
      color: 'var(--color-text-default, inherit)'
    }}>
        Z-Index
      </h1>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        {Object.entries(zIndex).sort(([, a], [, b]) => a - b).map(([key, value]) => <div key={key} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }}>
              <span style={{
          width: 80,
          fontSize: 13,
          fontWeight: 500,
          color: 'var(--color-text-default, inherit)'
        }}>
                {key}
              </span>
              <div style={{
          width: Math.max(value / 10 + 20, 20),
          height: 24,
          background: value < 0 ? 'var(--color-state-danger-default, #ef4444)' : value === 0 ? 'var(--color-text-disabled, #94a3b8)' : 'var(--color-action-primary, #0ea5e9)',
          borderRadius: 4
        }} />
              <span style={{
          fontSize: 12,
          color: 'var(--color-text-muted, #94a3b8)'
        }}>
                {value}
              </span>
            </div>)}
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <h1 style={{
      fontSize: 24,
      marginBottom: 32,
      color: 'var(--color-text-default, inherit)'
    }}>
        Border Width
      </h1>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24
    }}>
        {Object.entries(borderWidth).map(([key, value]) => <div key={key} style={{
        textAlign: 'center'
      }}>
            <div style={{
          width: 80,
          height: 80,
          background: 'var(--color-surface-subtle, #fff)',
          border: \`\${value} solid var(--color-action-primary, #0ea5e9)\`,
          borderRadius: 8,
          marginBottom: 8
        }} />
            <div style={{
          fontSize: 13,
          fontWeight: 500,
          color: 'var(--color-text-default, inherit)'
        }}>
              {key}
            </div>
            <div style={{
          fontSize: 11,
          color: 'var(--color-text-muted, #94a3b8)'
        }}>{value}</div>
          </div>)}
      </div>
    </div>
}`,...f.parameters?.docs?.source}}};const k=["Spacing","Radius","Shadow","Presets","ZIndex","BorderWidth"];export{f as BorderWidth,c as Presets,s as Radius,l as Shadow,a as Spacing,p as ZIndex,k as __namedExportsOrder,z as default};
