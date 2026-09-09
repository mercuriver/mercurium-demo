import{j as e}from"./iframe-B352m8Ic.js";import{H as r,T as v}from"./Code-D3L6RGzg.js";import{c as i,s as H,a as h,r as p}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"Components/Typography/Heading",component:r,tags:["autodocs"]},l={args:{level:"1",children:"The quick brown fox jumps over the lazy dog"}},s={render:()=>e.jsxs("div",{style:i,children:[e.jsx(r,{level:"1",children:"Heading 1 - Main Title"}),e.jsx(r,{level:"2",children:"Heading 2 - Section Title"}),e.jsx(r,{level:"3",children:"Heading 3 - Subsection"}),e.jsx(r,{level:"4",children:"Heading 4 - Minor Heading"}),e.jsx(r,{level:"5",children:"Heading 5 - Small Heading"}),e.jsx(r,{level:"6",children:"Heading 6 - Tiny Heading"})]})},d={render:()=>e.jsxs("div",{style:i,children:[e.jsx(r,{level:"2",weight:"light",children:"Light Weight"}),e.jsx(r,{level:"2",weight:"regular",children:"Regular Weight"}),e.jsx(r,{level:"2",weight:"medium",children:"Medium Weight"}),e.jsx(r,{level:"2",weight:"semibold",children:"Semibold Weight"}),e.jsx(r,{level:"2",weight:"bold",children:"Bold Weight"})]})},a={render:()=>e.jsxs("div",{style:i,children:[e.jsx(r,{color:"default",children:"Default Color"}),e.jsx(r,{color:"muted",children:"Muted Color"}),e.jsx(r,{color:"subtle",children:"Subtle Color"}),e.jsx(r,{color:"primary",children:"Primary Color"}),e.jsx(r,{color:"secondary",children:"Secondary Color"}),e.jsx(r,{color:"error",children:"Error Color"}),e.jsx(r,{color:"warning",children:"Warning Color"}),e.jsx(r,{color:"info",children:"Info Color"}),e.jsx(r,{color:"success",children:"Success Color"})]})},o={render:()=>e.jsxs("div",{style:i,children:[e.jsx(r,{align:"left",children:"Left Aligned"}),e.jsx(r,{align:"center",children:"Center Aligned"}),e.jsx(r,{align:"right",children:"Right Aligned"})]})},t={render:()=>e.jsx("div",{style:{maxWidth:"300px"},children:e.jsx(r,{truncate:!0,children:"This is a very long heading that should be truncated with an ellipsis when it overflows"})})},c={parameters:{controls:{disable:!0}},render:()=>{const m=["1","2","3","4","5","6"],u=["light","regular","medium","semibold","bold"];return e.jsxs("div",{style:H,children:[e.jsxs("div",{children:[e.jsx("h4",{style:h,children:"All levels (default weight)"}),e.jsx("div",{style:i,children:m.map(n=>e.jsxs(r,{level:n,children:["Heading level ",n]},n))})]}),e.jsxs("div",{children:[e.jsx("h4",{style:h,children:"Weights (level 3)"}),e.jsx("div",{style:i,children:u.map(n=>e.jsx(r,{level:"3",weight:n,children:n},n))})]}),e.jsxs("div",{children:[e.jsx("h4",{style:h,children:"Colors (level 4)"}),e.jsx("div",{style:{...p,gap:"1rem",flexWrap:"wrap"},children:["default","muted","subtle","primary","error","warning","info","success"].map(n=>e.jsx(r,{level:"4",color:n,children:n},n))})]})]})}},g={render:()=>e.jsx("div",{style:i,children:e.jsxs("div",{children:[e.jsx(v,{size:"sm",color:"muted",as:"div",style:{marginBottom:"0.5rem"},children:'h3 렌더링이지만 as="span"으로 오버라이드:'}),e.jsx(r,{level:"3",as:"span",children:"Span으로 렌더링된 Heading"})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    level: '1',
    children: 'The quick brown fox jumps over the lazy dog'
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Heading level="1">Heading 1 - Main Title</Heading>
      <Heading level="2">Heading 2 - Section Title</Heading>
      <Heading level="3">Heading 3 - Subsection</Heading>
      <Heading level="4">Heading 4 - Minor Heading</Heading>
      <Heading level="5">Heading 5 - Small Heading</Heading>
      <Heading level="6">Heading 6 - Tiny Heading</Heading>
    </div>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Heading level="2" weight="light">
        Light Weight
      </Heading>
      <Heading level="2" weight="regular">
        Regular Weight
      </Heading>
      <Heading level="2" weight="medium">
        Medium Weight
      </Heading>
      <Heading level="2" weight="semibold">
        Semibold Weight
      </Heading>
      <Heading level="2" weight="bold">
        Bold Weight
      </Heading>
    </div>
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Heading color="default">Default Color</Heading>
      <Heading color="muted">Muted Color</Heading>
      <Heading color="subtle">Subtle Color</Heading>
      <Heading color="primary">Primary Color</Heading>
      <Heading color="secondary">Secondary Color</Heading>
      <Heading color="error">Error Color</Heading>
      <Heading color="warning">Warning Color</Heading>
      <Heading color="info">Info Color</Heading>
      <Heading color="success">Success Color</Heading>
    </div>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Heading align="left">Left Aligned</Heading>
      <Heading align="center">Center Aligned</Heading>
      <Heading align="right">Right Aligned</Heading>
    </div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '300px'
  }}>
      <Heading truncate>
        This is a very long heading that should be truncated with an ellipsis when it overflows
      </Heading>
    </div>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const levels = ['1', '2', '3', '4', '5', '6'] as const;
    const weights = ['light', 'regular', 'medium', 'semibold', 'bold'] as const;
    return <div style={section}>
        <div>
          <h4 style={sectionTitle}>All levels (default weight)</h4>
          <div style={column}>
            {levels.map(l => <Heading key={l} level={l}>
                Heading level {l}
              </Heading>)}
          </div>
        </div>
        <div>
          <h4 style={sectionTitle}>Weights (level 3)</h4>
          <div style={column}>
            {weights.map(w => <Heading key={w} level="3" weight={w}>
                {w}
              </Heading>)}
          </div>
        </div>
        <div>
          <h4 style={sectionTitle}>Colors (level 4)</h4>
          <div style={{
          ...row,
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
            {(['default', 'muted', 'subtle', 'primary', 'error', 'warning', 'info', 'success'] as const).map(c => <Heading key={c} level="4" color={c}>
                {c}
              </Heading>)}
          </div>
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <div>
        <Text size="sm" color="muted" as="div" style={{
        marginBottom: '0.5rem'
      }}>
          h3 렌더링이지만 as="span"으로 오버라이드:
        </Text>
        <Heading level="3" as="span">
          Span으로 렌더링된 Heading
        </Heading>
      </div>
    </div>
}`,...g.parameters?.docs?.source}}};const C=["Playground","Levels","Weights","Colors","Alignment","Truncate","AllStates","CustomElement"];export{o as Alignment,c as AllStates,a as Colors,g as CustomElement,s as Levels,l as Playground,t as Truncate,d as Weights,C as __namedExportsOrder,f as default};
