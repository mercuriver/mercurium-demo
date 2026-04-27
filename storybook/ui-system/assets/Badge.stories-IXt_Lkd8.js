import{j as e}from"./iframe-DCh78EiW.js";import{B as n}from"./Badge-BADItEma.js";import{c as l,r as s}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Components/Badge",component:n,tags:["autodocs"]},i={args:{variant:"info",size:"md",dot:!1,children:"Badge"}},d={render:()=>{const v=["info","success","warning","danger"],g=["sm","md"];return e.jsx("div",{style:l,children:g.map(r=>e.jsxs("div",{children:[e.jsxs("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:['size="',r,'"']}),e.jsxs("div",{style:s,children:[v.map(a=>e.jsx(n,{variant:a,size:r,children:a},a)),v.map(a=>e.jsx(n,{variant:a,size:r,dot:!0,children:a},`${a}-dot`))]})]},r))})}},t={render:()=>e.jsxs("div",{style:l,children:[e.jsxs("div",{style:s,children:[e.jsx(n,{variant:"info",children:"Info"}),e.jsx(n,{variant:"success",children:"Success"}),e.jsx(n,{variant:"warning",children:"Warning"}),e.jsx(n,{variant:"danger",children:"Danger"})]}),e.jsxs("div",{style:s,children:[e.jsx(n,{variant:"info",dot:!0,children:"Info"}),e.jsx(n,{variant:"success",dot:!0,children:"Success"}),e.jsx(n,{variant:"warning",dot:!0,children:"Warning"}),e.jsx(n,{variant:"danger",dot:!0,children:"Danger"})]})]})},o={render:()=>e.jsxs("div",{style:l,children:[e.jsxs("div",{style:s,children:[e.jsx(n,{variant:"info",size:"sm",children:"Small"}),e.jsx(n,{variant:"info",size:"md",children:"Medium"})]}),e.jsxs("div",{style:s,children:[e.jsx(n,{variant:"success",size:"sm",dot:!0,children:"Small"}),e.jsx(n,{variant:"success",size:"md",dot:!0,children:"Medium"})]})]})},c={render:()=>e.jsxs("div",{style:l,children:[e.jsx(n,{variant:"success",dot:!0,children:"Connected"}),e.jsx(n,{variant:"danger",dot:!0,children:"Disconnected"}),e.jsx(n,{variant:"info",children:"v2.1.0"}),e.jsx(n,{variant:"warning",children:"Beta"}),e.jsx(n,{variant:"info",size:"sm",children:"3 items"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    size: 'md',
    dot: false,
    children: 'Badge'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants = ['info', 'success', 'warning', 'danger'] as const;
    const sizes = ['sm', 'md'] as const;
    return <div style={column}>
        {sizes.map(size => <div key={size}>
            <p style={{
          fontSize: 11,
          color: 'var(--color-text-subtle)',
          margin: '0 0 4px'
        }}>size="{size}"</p>
            <div style={row}>
              {variants.map(v => <Badge key={v} variant={v} size={size}>{v}</Badge>)}
              {variants.map(v => <Badge key={\`\${v}-dot\`} variant={v} size={size} dot>{v}</Badge>)}
            </div>
          </div>)}
      </div>;
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <div style={row}>
        <Badge variant="info">Info</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
      </div>
      <div style={row}>
        <Badge variant="info" dot>
          Info
        </Badge>
        <Badge variant="success" dot>
          Success
        </Badge>
        <Badge variant="warning" dot>
          Warning
        </Badge>
        <Badge variant="danger" dot>
          Danger
        </Badge>
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <div style={row}>
        <Badge variant="info" size="sm">
          Small
        </Badge>
        <Badge variant="info" size="md">
          Medium
        </Badge>
      </div>
      <div style={row}>
        <Badge variant="success" size="sm" dot>
          Small
        </Badge>
        <Badge variant="success" size="md" dot>
          Medium
        </Badge>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Badge variant="success" dot>
        Connected
      </Badge>
      <Badge variant="danger" dot>
        Disconnected
      </Badge>
      <Badge variant="info">v2.1.0</Badge>
      <Badge variant="warning">Beta</Badge>
      <Badge variant="info" size="sm">
        3 items
      </Badge>
    </div>
}`,...c.parameters?.docs?.source}}};const h=["Playground","AllStates","AllVariants","Sizes","UseCases"];export{d as AllStates,t as AllVariants,i as Playground,o as Sizes,c as UseCases,h as __namedExportsOrder,x as default};
