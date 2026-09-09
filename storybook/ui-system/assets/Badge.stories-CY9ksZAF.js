import{j as n}from"./iframe-B352m8Ic.js";import{B as e}from"./Badge-Cay6W6rc.js";import{c as l,r as s}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Components/Badge",component:e,tags:["autodocs"]},i={args:{variant:"info",size:"md",dot:!1,children:"Badge"}},d={parameters:{controls:{disable:!0}},render:()=>{const v=["info","success","warning","danger"],g=["sm","md"];return n.jsx("div",{style:l,children:g.map(r=>n.jsxs("div",{children:[n.jsxs("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:['size="',r,'"']}),n.jsxs("div",{style:s,children:[v.map(a=>n.jsx(e,{variant:a,size:r,children:a},a)),v.map(a=>n.jsx(e,{variant:a,size:r,dot:!0,children:a},`${a}-dot`))]})]},r))})}},t={render:()=>n.jsxs("div",{style:l,children:[n.jsxs("div",{style:s,children:[n.jsx(e,{variant:"info",children:"Info"}),n.jsx(e,{variant:"success",children:"Success"}),n.jsx(e,{variant:"warning",children:"Warning"}),n.jsx(e,{variant:"danger",children:"Danger"})]}),n.jsxs("div",{style:s,children:[n.jsx(e,{variant:"info",dot:!0,children:"Info"}),n.jsx(e,{variant:"success",dot:!0,children:"Success"}),n.jsx(e,{variant:"warning",dot:!0,children:"Warning"}),n.jsx(e,{variant:"danger",dot:!0,children:"Danger"})]})]})},o={render:()=>n.jsxs("div",{style:l,children:[n.jsxs("div",{style:s,children:[n.jsx(e,{variant:"info",size:"sm",children:"Small"}),n.jsx(e,{variant:"info",size:"md",children:"Medium"})]}),n.jsxs("div",{style:s,children:[n.jsx(e,{variant:"success",size:"sm",dot:!0,children:"Small"}),n.jsx(e,{variant:"success",size:"md",dot:!0,children:"Medium"})]})]})},c={render:()=>n.jsxs("div",{style:l,children:[n.jsx(e,{variant:"success",dot:!0,children:"Connected"}),n.jsx(e,{variant:"danger",dot:!0,children:"Disconnected"}),n.jsx(e,{variant:"info",children:"v2.1.0"}),n.jsx(e,{variant:"warning",children:"Beta"}),n.jsx(e,{variant:"info",size:"sm",children:"3 items"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    size: 'md',
    dot: false,
    children: 'Badge'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const variants = ['info', 'success', 'warning', 'danger'] as const;
    const sizes = ['sm', 'md'] as const;
    return <div style={column}>
        {sizes.map(size => <div key={size}>
            <p style={{
          fontSize: 11,
          color: 'var(--color-text-subtle)',
          margin: '0 0 4px'
        }}>
              size="{size}"
            </p>
            <div style={row}>
              {variants.map(v => <Badge key={v} variant={v} size={size}>
                  {v}
                </Badge>)}
              {variants.map(v => <Badge key={\`\${v}-dot\`} variant={v} size={size} dot>
                  {v}
                </Badge>)}
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
