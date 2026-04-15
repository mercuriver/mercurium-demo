import{j as e,r as d}from"./iframe-6rGBUs-Q.js";import"./preload-helper-PPVm8Dsz.js";const r={instant:"0ms",fast:"100ms",normal:"200ms",slow:"300ms",slower:"500ms",lazy:"1000ms"},i={linear:"linear",default:"cubic-bezier(0.4, 0, 0.2, 1)",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)",spring:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",bounce:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},u=r,m=i,p={fast:`${r.fast} ${i.default}`,normal:`${r.normal} ${i.default}`,slow:`${r.slow} ${i.default}`,spring:`${r.slow} ${i.spring}`,bounce:`${r.slower} ${i.bounce}`},g={title:"Tokens/Motion"},f=({name:t,value:n})=>{const[s,o]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{width:60,fontSize:13,color:"var(--color-text-subtle, #64748b)"},children:t}),e.jsx("div",{style:{flex:1,height:40,background:"var(--color-surface-muted, #f1f5f9)",borderRadius:8,position:"relative"},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:e.jsx("div",{style:{position:"absolute",left:s?"calc(100% - 32px)":0,top:4,width:32,height:32,background:"var(--color-action-primary, #0ea5e9)",borderRadius:8,transition:`left ${n} ease-in-out`}})}),e.jsx("span",{style:{fontSize:12,color:"var(--color-text-muted, #94a3b8)",width:60},children:n})]})},v=({name:t,value:n})=>{const[s,o]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{width:80,fontSize:13,color:"var(--color-text-subtle, #64748b)"},children:t}),e.jsx("div",{style:{flex:1,height:40,background:"var(--color-surface-muted, #f1f5f9)",borderRadius:8,position:"relative"},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:e.jsx("div",{style:{position:"absolute",left:s?"calc(100% - 32px)":0,top:4,width:32,height:32,background:"var(--color-action-primary, #0ea5e9)",borderRadius:8,transition:`left 1s ${n}`}})}),e.jsx("code",{style:{fontSize:11,color:"var(--color-text-muted, #94a3b8)",width:200},children:n})]})},x=({name:t,value:n})=>{const[s,o]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{width:60,fontSize:13,color:"var(--color-text-subtle, #64748b)"},children:t}),e.jsx("div",{style:{flex:1,height:40,background:"var(--color-surface-muted, #f1f5f9)",borderRadius:8,position:"relative"},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:e.jsx("div",{style:{position:"absolute",left:s?"calc(100% - 32px)":0,top:4,width:32,height:32,background:"var(--color-action-primary, #0ea5e9)",borderRadius:8,transition:`left ${n}`}})}),e.jsx("code",{style:{fontSize:12,color:"var(--color-text-muted, #94a3b8)"},children:n})]})},a={render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:16,color:"var(--color-text-default, inherit)"},children:"Duration"}),e.jsx("p",{style:{color:"var(--color-text-subtle, #64748b)",marginBottom:32},children:"Hover each row to preview the animation"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:Object.entries(u).map(([t,n])=>e.jsx(f,{name:t,value:n},t))})]})},l={render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:16,color:"var(--color-text-default, inherit)"},children:"Easing"}),e.jsx("p",{style:{color:"var(--color-text-subtle, #64748b)",marginBottom:32},children:"Hover each row to preview the animation"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:Object.entries(m).map(([t,n])=>e.jsx(v,{name:t,value:n},t))})]})},c={render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"system-ui, sans-serif"},children:[e.jsx("h1",{style:{fontSize:24,marginBottom:16,color:"var(--color-text-default, inherit)"},children:"Transition Presets"}),e.jsx("p",{style:{color:"var(--color-text-subtle, #64748b)",marginBottom:32},children:"Hover each row to preview the animation"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:Object.entries(p).map(([t,n])=>e.jsx(x,{name:t,value:n},t))})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <h1 style={{
      fontSize: 24,
      marginBottom: 16,
      color: 'var(--color-text-default, inherit)'
    }}>
        Duration
      </h1>
      <p style={{
      color: 'var(--color-text-subtle, #64748b)',
      marginBottom: 32
    }}>
        Hover each row to preview the animation
      </p>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        {Object.entries(duration).map(([key, value]) => <DurationBox key={key} name={key} value={value} />)}
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <h1 style={{
      fontSize: 24,
      marginBottom: 16,
      color: 'var(--color-text-default, inherit)'
    }}>
        Easing
      </h1>
      <p style={{
      color: 'var(--color-text-subtle, #64748b)',
      marginBottom: 32
    }}>
        Hover each row to preview the animation
      </p>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        {Object.entries(easing).map(([key, value]) => <EasingBox key={key} name={key} value={value} />)}
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    fontFamily: 'system-ui, sans-serif'
  }}>
      <h1 style={{
      fontSize: 24,
      marginBottom: 16,
      color: 'var(--color-text-default, inherit)'
    }}>
        Transition Presets
      </h1>
      <p style={{
      color: 'var(--color-text-subtle, #64748b)',
      marginBottom: 32
    }}>
        Hover each row to preview the animation
      </p>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        {Object.entries(transition).map(([key, value]) => <TransitionBox key={key} name={key} value={value} />)}
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};const b=["Duration","Easing","Transition"];export{a as Duration,l as Easing,c as Transition,b as __namedExportsOrder,g as default};
