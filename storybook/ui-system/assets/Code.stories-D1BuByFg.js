import{j as e}from"./iframe-G7Ln-CiB.js";import{C as r,T as o,H as c}from"./Code-CwVYSjVH.js";import{c as l}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/Typography/Code",component:r,tags:["autodocs"]},a={args:{children:'const foo = "bar";'}},n={render:()=>e.jsxs("div",{style:l,children:[e.jsxs(o,{children:["Large: ",e.jsx(r,{size:"lg",children:"npm install"})]}),e.jsxs(o,{children:["Medium: ",e.jsx(r,{size:"md",children:"git commit"})," (default)"]}),e.jsxs(o,{children:["Small: ",e.jsx(r,{size:"sm",children:"cd ~/projects"})]})]})},t={render:()=>e.jsxs("div",{style:l,children:[e.jsxs(o,{children:["Solid: ",e.jsx(r,{variant:"solid",children:"const foo = 'bar'"})]}),e.jsxs(o,{children:["Soft: ",e.jsx(r,{variant:"soft",children:"const foo = 'bar'"})," (default)"]}),e.jsxs(o,{children:["Outline: ",e.jsx(r,{variant:"outline",children:"const foo = 'bar'"})]}),e.jsxs(o,{children:["Ghost: ",e.jsx(r,{variant:"ghost",children:"const foo = 'bar'"})]})]})},s={render:()=>e.jsxs("div",{style:l,children:[e.jsxs(o,{children:["Default: ",e.jsx(r,{color:"default",children:"npm install"})]}),e.jsxs(o,{children:["Primary: ",e.jsx(r,{color:"primary",variant:"solid",children:"git clone"})]}),e.jsxs(o,{children:["Secondary: ",e.jsx(r,{color:"secondary",variant:"soft",children:"yarn add"})]}),e.jsxs(o,{children:["Error: ",e.jsx(r,{color:"error",variant:"soft",children:"Error: ENOENT"})]}),e.jsxs(o,{children:["Warning: ",e.jsx(r,{color:"warning",variant:"soft",children:"Warning: deprecated"})]}),e.jsxs(o,{children:["Info: ",e.jsx(r,{color:"info",variant:"soft",children:"Info: v18.0.0"})]}),e.jsxs(o,{children:["Success: ",e.jsx(r,{color:"success",variant:"soft",children:"✓ Build complete"})]})]})},i={render:()=>e.jsxs(o,{children:["To install dependencies, run ",e.jsx(r,{children:"npm install"})," or ",e.jsx(r,{children:"yarn install"})," in your terminal. Make sure you have Node.js ",e.jsx(r,{color:"primary",children:"v18+"})," installed."]})},d={render:()=>e.jsxs("div",{style:{maxWidth:"800px"},children:[e.jsx(c,{level:"3",style:{marginBottom:"0.5rem"},children:"Installation"}),e.jsx(o,{style:{marginBottom:"0.5rem"},children:"Install the package using your preferred package manager:"}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"1rem",borderRadius:"0.5rem",marginBottom:"1rem"},children:e.jsx(r,{variant:"ghost",color:"default",children:"npm install @mercurium/ui-system-react"})}),e.jsx(c,{level:"3",style:{marginBottom:"0.5rem",marginTop:"2rem"},children:"Usage Example"}),e.jsx(o,{style:{marginBottom:"0.5rem"},children:"Import and use typography components in your React application:"}),e.jsxs("div",{style:{backgroundColor:"#f5f5f5",padding:"1rem",borderRadius:"0.5rem",marginBottom:"1rem",fontFamily:"monospace",fontSize:"0.875rem"},children:[e.jsx("div",{children:'import { Heading, Text, Code } from "@mercurium/ui-system-react";'}),e.jsx("div",{style:{marginTop:"0.5rem"},children:'<Heading level="1">My Title</Heading>'}),e.jsx("div",{children:"<Text>My paragraph text</Text>"}),e.jsx("div",{children:'<Code>const foo = "bar";</Code>'})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'const foo = "bar";'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Text>Large: <Code size="lg">npm install</Code></Text>
      <Text>Medium: <Code size="md">git commit</Code> (default)</Text>
      <Text>Small: <Code size="sm">cd ~/projects</Code></Text>
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Text>Solid: <Code variant="solid">const foo = 'bar'</Code></Text>
      <Text>Soft: <Code variant="soft">const foo = 'bar'</Code> (default)</Text>
      <Text>Outline: <Code variant="outline">const foo = 'bar'</Code></Text>
      <Text>Ghost: <Code variant="ghost">const foo = 'bar'</Code></Text>
    </div>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      <Text>Default: <Code color="default">npm install</Code></Text>
      <Text>Primary: <Code color="primary" variant="solid">git clone</Code></Text>
      <Text>Secondary: <Code color="secondary" variant="soft">yarn add</Code></Text>
      <Text>Error: <Code color="error" variant="soft">Error: ENOENT</Code></Text>
      <Text>Warning: <Code color="warning" variant="soft">Warning: deprecated</Code></Text>
      <Text>Info: <Code color="info" variant="soft">Info: v18.0.0</Code></Text>
      <Text>Success: <Code color="success" variant="soft">✓ Build complete</Code></Text>
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Text>
      To install dependencies, run <Code>npm install</Code> or <Code>yarn install</Code> in your terminal.
      Make sure you have Node.js <Code color="primary">v18+</Code> installed.
    </Text>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '800px'
  }}>
      <Heading level="3" style={{
      marginBottom: '0.5rem'
    }}>
        Installation
      </Heading>
      <Text style={{
      marginBottom: '0.5rem'
    }}>
        Install the package using your preferred package manager:
      </Text>
      <div style={{
      backgroundColor: '#f5f5f5',
      padding: '1rem',
      borderRadius: '0.5rem',
      marginBottom: '1rem'
    }}>
        <Code variant="ghost" color="default">npm install @mercurium/ui-system-react</Code>
      </div>

      <Heading level="3" style={{
      marginBottom: '0.5rem',
      marginTop: '2rem'
    }}>
        Usage Example
      </Heading>
      <Text style={{
      marginBottom: '0.5rem'
    }}>
        Import and use typography components in your React application:
      </Text>
      <div style={{
      backgroundColor: '#f5f5f5',
      padding: '1rem',
      borderRadius: '0.5rem',
      marginBottom: '1rem',
      fontFamily: 'monospace',
      fontSize: '0.875rem'
    }}>
        <div>{'import { Heading, Text, Code } from "@mercurium/ui-system-react";'}</div>
        <div style={{
        marginTop: '0.5rem'
      }}>{'<Heading level="1">My Title</Heading>'}</div>
        <div>{'<Text>My paragraph text</Text>'}</div>
        <div>{'<Code>const foo = "bar";</Code>'}</div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const f=["Playground","Sizes","Variants","Colors","Inline","InDocumentation"];export{s as Colors,d as InDocumentation,i as Inline,a as Playground,n as Sizes,t as Variants,f as __namedExportsOrder,g as default};
