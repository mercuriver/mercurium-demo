import{j as e,r as s}from"./iframe-80ZV6wNn.js";import{B as C}from"./Button-IhXIeE3_.js";import{S as T}from"./Switch-EDWFt5CN.js";import{C as y}from"./Checkbox-B1xSnbsq.js";import{R as L}from"./Radio-C28VAPyr.js";import{I}from"./Input-DTV-1EYh.js";import{S as E}from"./Select-Dmrm30P5.js";import{M as w}from"./MultiSelect-Cp2SLCDM.js";import{S as D}from"./Slider-BAXI296s.js";import{T as _,C as B}from"./Code-Dx44NRNL.js";import{C as M}from"./ColorPicker-B1ZmXMw3.js";import{D as R}from"./DateTimePicker-YU-IMLvv.js";import{S as V}from"./SegmentedControl-CZAfVOSr.js";import{S as O}from"./Spinner-C67j0iO7.js";import{P}from"./Pagination-Dg7b-qid.js";import{T as k,a as A,b as i}from"./Tabs-BKwSX_y4.js";import{B as n}from"./Badge-B64UUVni.js";import{M as N}from"./Menu-D9u5jCS6.js";import{B as Y}from"./fixtures-BbUB3PbG.js";import"./preload-helper-PPVm8Dsz.js";import"./use-machine-88aMQJYn.js";import"./use-interaction-state-B50cmliQ.js";import"./use-toggle-Df05WQoJ.js";import"./FormField-BRcbmOkw.js";import"./index-C7sFdwys.js";import"./index-B22eKvk1.js";import"./use-popup-close-C8nQF-a0.js";import"./use-merged-ref-B44D9xfZ.js";import"./Tooltip-DVTtRN1y.js";import"./index-BxD26iQO.js";const ve={title:"Foundations/Scale",tags:["!autodocs"]},F={fontSize:"11px",fontWeight:500,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"12px"},c={borderBottom:"1px solid var(--color-border-subtle)",marginTop:"32px"},U={fontSize:"11px",color:"var(--color-text-subtle)",margin:"0 0 8px"},W=[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],z=[{value:"edit",label:"Edit"},{value:"duplicate",label:"Duplicate"},{value:"delete",label:"Delete"}];function l({children:t}){return e.jsx(_,{as:"p",size:"sm",color:"subtle",style:F,children:t})}function a({children:t}){return e.jsx("p",{style:U,children:t})}function r({size:t}){const[p,m]=s.useState(null),[d,x]=s.useState(["a"]),[u,S]=s.useState(40),[j,h]=s.useState("#3b82f6"),[f,b]=s.useState(1),[g,v]=s.useState("one");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx(a,{children:"Form controls"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",alignItems:"center"},children:[e.jsx(C,{size:t,children:"Button"}),e.jsx(E,{options:Y,value:p,onChange:m,placeholder:"Select",size:t,style:{width:"120px"}}),e.jsx(w,{options:W,values:d,onChange:x,placeholder:"Multi",size:t,style:{width:"140px"}}),e.jsx(I,{placeholder:"Input",size:t,style:{width:"120px"}}),e.jsx(D,{size:t,value:u,onValueChange:S,style:{width:"120px"}}),e.jsx(T,{size:t,label:"Switch"}),e.jsx(y,{size:t,label:"Checkbox"}),e.jsx(L,{size:t,label:"Radio"}),e.jsx(M,{size:t,value:j,onValueChange:h,showLabel:!0}),e.jsx(R,{mode:"date",size:t,valueFormat:"iso-8601",placeholder:"Date"})]})]}),e.jsxs("div",{children:[e.jsx(a,{children:"Actions & menus"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",alignItems:"center"},children:[e.jsx(V,{items:[{value:"a",label:"A"},{value:"b",label:"B"}],defaultValue:"a",size:t}),e.jsx(N,{items:z,onSelect:()=>{},trigger:"Menu",size:t}),e.jsx(O,{size:t})]})]}),e.jsxs("div",{children:[e.jsx(a,{children:"Data display"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",alignItems:"center"},children:[e.jsx(k,{value:g,onChange:v,size:t,children:e.jsxs(A,{children:[e.jsx(i,{value:"one",children:"One"}),e.jsx(i,{value:"two",children:"Two"})]})}),e.jsx(P,{total:30,pageSize:10,page:f,onPageChange:b,size:t}),e.jsx(n,{size:t,variant:"info",children:"Info"}),e.jsx(n,{size:t,variant:"success",children:"Success"}),e.jsx(B,{size:t,children:"npm install"})]})]})]})}const o={name:"Component sizes",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("section",{children:[e.jsx(l,{children:"Small (sm)"}),e.jsx(r,{size:"sm"}),e.jsx("div",{style:c})]}),e.jsxs("section",{children:[e.jsx(l,{children:"Medium (md)"}),e.jsx(r,{size:"md"}),e.jsx("div",{style:c})]}),e.jsxs("section",{children:[e.jsx(l,{children:"Large (lg)"}),e.jsx(r,{size:"lg"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Component sizes',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <section>
        <SectionLabel>Small (sm)</SectionLabel>
        <SizeRow size="sm" />
        <div style={DIVIDER_STYLE} />
      </section>
      <section>
        <SectionLabel>Medium (md)</SectionLabel>
        <SizeRow size="md" />
        <div style={DIVIDER_STYLE} />
      </section>
      <section>
        <SectionLabel>Large (lg)</SectionLabel>
        <SizeRow size="lg" />
      </section>
    </div>
}`,...o.parameters?.docs?.source}}};const Ce=["ComponentSizes"];export{o as ComponentSizes,Ce as __namedExportsOrder,ve as default};
