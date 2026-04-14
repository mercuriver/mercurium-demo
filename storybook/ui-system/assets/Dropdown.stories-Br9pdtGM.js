import{j as e,r as m}from"./iframe-BXqFY8rp.js";import{D as t}from"./Dropdown-CvqnQxyI.js";import{T as p}from"./Code-1SJkwzsV.js";import{s as h,a as x,r as d,c as g}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-J-6yexAb.js";import"./use-popup-close-C1QJfCOl.js";const E={title:"Components/Dropdown",component:t,tags:["autodocs"]},c=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"grape",label:"Grape"}];function j(){const[s,r]=m.useState();return e.jsx("div",{style:{width:"300px"},children:e.jsxs("div",{style:{...d,gap:"1rem"},children:[e.jsx(t,{items:c,value:s,onSelect:r,trigger:e.jsx("span",{children:s??"Select a fruit"})}),s&&e.jsxs(p,{size:"sm",children:["Selected: ",s]})]})})}const n={render:()=>e.jsx(j,{})};function S(){const s=["sm","md","lg"];return e.jsx("div",{style:{...g,width:"300px"},children:s.map(r=>e.jsx(t,{items:c,onSelect:()=>{},trigger:e.jsxs("span",{children:["Size: ",r]}),size:r},r))})}const i={render:()=>e.jsx(S,{})},v=[{id:"edit",name:"Edit",icon:"✏️"},{id:"duplicate",name:"Duplicate",icon:"📋"},{id:"delete",name:"Delete",icon:"🗑️"}];function y(){const[s,r]=m.useState(),u=v.map(l=>({value:l,label:l.name,icon:e.jsx("span",{children:l.icon})}));return e.jsx("div",{style:{width:"300px"},children:e.jsxs("div",{style:{...d,gap:"1rem"},children:[e.jsx(t,{items:u,value:s,onSelect:r,trigger:e.jsx("span",{children:s?.name??"Choose action"})}),s&&e.jsxs(p,{size:"sm",children:["Action: ",s.name]})]})})}const o={render:()=>{const s=["sm","md","lg"];return e.jsx("div",{style:h,children:s.map(r=>e.jsxs("div",{children:[e.jsxs("h4",{style:x,children:['size="',r,'"']}),e.jsxs("div",{style:d,children:[e.jsx(t,{size:r,items:c,onSelect:()=>{},trigger:e.jsx("span",{children:"Select fruit..."})}),e.jsx(t,{size:r,items:c,value:"cherry",onSelect:()=>{},trigger:e.jsx("span",{children:"Cherry"})})]})]},r))})}},a={render:()=>e.jsx(y,{})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <BasicDemo />
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <SizesDemo />
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    return <div style={section}>
        {sizes.map(size => <div key={size}>
            <h4 style={sectionTitle}>size="{size}"</h4>
            <div style={row}>
              <Dropdown size={size} items={fruits} onSelect={() => {}} trigger={<span>Select fruit...</span>} />
              <Dropdown size={size} items={fruits} value="cherry" onSelect={() => {}} trigger={<span>Cherry</span>} />
            </div>
          </div>)}
      </div>;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <WithIconsDemo />
}`,...a.parameters?.docs?.source}}};const I=["Playground","Sizes","AllStates","WithIcons"];export{o as AllStates,n as Playground,i as Sizes,a as WithIcons,I as __namedExportsOrder,E as default};
