import{r as n,T as g,j as e,t as w,o as y,p as f}from"./iframe-CLvh9l4s.js";import"./preload-helper-PPVm8Dsz.js";function o({children:r,showDivider:t=!0,minWidth:u=g}){const[c,p]=n.useState(!1),b=n.useRef(null);return n.useEffect(()=>{const v=b.current;if(!v)return;const m=new ResizeObserver(h=>{for(const x of h)p(x.contentRect.width>=u)});return m.observe(v),()=>m.disconnect()},[u]),e.jsxs("div",{ref:b,style:{position:"relative"},children:[e.jsx("div",{className:c?w:y,children:r}),c&&t&&e.jsx("div",{className:f})]})}o.displayName="TwoColumnLayout";o.__docgenInfo={description:"",methods:[],displayName:"TwoColumnLayout",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},showDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},minWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"TWO_COLUMN_MIN_WIDTH",computed:!0}}}};function l({label:r,value:t}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("span",{style:{fontSize:"0.75rem",color:"var(--color-text-subtle)",fontWeight:500},children:r}),e.jsx("div",{style:{padding:"6px 8px",border:"1px solid var(--color-border-default)",borderRadius:4,fontSize:"0.875rem",background:"var(--color-surface-input)"},children:t})]})}const W={title:"App Layout/TwoColumnLayout",component:o,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{showDivider:{control:"boolean",description:"2열 모드에서 중앙 구분선 표시",table:{defaultValue:{summary:"true"}}},minWidth:{control:{type:"range",min:200,max:800,step:50},description:"2열로 전환되는 최소 너비 (px)",table:{defaultValue:{summary:"400"}}}}},a={args:{children:null,showDivider:!0,minWidth:400},render:r=>e.jsxs("div",{style:{resize:"horizontal",overflow:"auto",minWidth:200,maxWidth:800,padding:16,border:"1px dashed var(--color-border-subtle)",borderRadius:4},children:[e.jsx("p",{style:{fontSize:"0.75rem",color:"var(--color-text-subtle)",marginBottom:12},children:"← 패널을 드래그해서 너비를 변경하면 1열 ↔ 2열 전환을 확인할 수 있습니다"}),e.jsxs(o,{showDivider:r.showDivider,minWidth:r.minWidth,children:[e.jsx(l,{label:"Label",value:"Value A"}),e.jsx(l,{label:"Color",value:"#3B82F6"}),e.jsx(l,{label:"Width",value:"2px"}),e.jsx(l,{label:"Aggregation",value:"Sum"}),e.jsx(l,{label:"Y Axis",value:"Left"}),e.jsx(l,{label:"Visible",value:"Yes"})]})]})},i={args:{children:null,showDivider:!1,minWidth:400},render:r=>e.jsx("div",{style:{width:500,padding:16,border:"1px solid var(--color-border-subtle)",borderRadius:4},children:e.jsxs(o,{showDivider:r.showDivider,minWidth:r.minWidth,children:[e.jsx(l,{label:"Label",value:"Series 1"}),e.jsx(l,{label:"Color",value:"#EF4444"}),e.jsx(l,{label:"Width",value:"1.5px"}),e.jsx(l,{label:"Dots",value:"On"})]})})},s={name:"1열 모드 (좁은 컨테이너)",args:{children:null},render:()=>e.jsx("div",{style:{width:300,padding:16,border:"1px solid var(--color-border-subtle)",borderRadius:4},children:e.jsxs(o,{children:[e.jsx(l,{label:"Label",value:"Series A"}),e.jsx(l,{label:"Color",value:"#10B981"}),e.jsx(l,{label:"Aggregation",value:"None"}),e.jsx(l,{label:"Visible",value:"Yes"})]})})},d={name:"2열 모드 (넓은 컨테이너)",args:{children:null},render:()=>e.jsx("div",{style:{width:600,padding:16,border:"1px solid var(--color-border-subtle)",borderRadius:4},children:e.jsxs(o,{children:[e.jsx(l,{label:"Label",value:"Series A"}),e.jsx(l,{label:"Color",value:"#10B981"}),e.jsx(l,{label:"Aggregation",value:"None"}),e.jsx(l,{label:"Y Axis",value:"Left"}),e.jsx(l,{label:"Visible",value:"Yes"}),e.jsx(l,{label:"Width",value:"2px"})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: null,
    showDivider: true,
    minWidth: 400
  },
  render: args => <div style={{
    resize: 'horizontal',
    overflow: 'auto',
    minWidth: 200,
    maxWidth: 800,
    padding: 16,
    border: '1px dashed var(--color-border-subtle)',
    borderRadius: 4
  }}>
      <p style={{
      fontSize: '0.75rem',
      color: 'var(--color-text-subtle)',
      marginBottom: 12
    }}>
        ← 패널을 드래그해서 너비를 변경하면 1열 ↔ 2열 전환을 확인할 수 있습니다
      </p>
      <TwoColumnLayout showDivider={args.showDivider} minWidth={args.minWidth}>
        <FieldBlock label="Label" value="Value A" />
        <FieldBlock label="Color" value="#3B82F6" />
        <FieldBlock label="Width" value="2px" />
        <FieldBlock label="Aggregation" value="Sum" />
        <FieldBlock label="Y Axis" value="Left" />
        <FieldBlock label="Visible" value="Yes" />
      </TwoColumnLayout>
    </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: null,
    showDivider: false,
    minWidth: 400
  },
  render: args => <div style={{
    width: 500,
    padding: 16,
    border: '1px solid var(--color-border-subtle)',
    borderRadius: 4
  }}>
      <TwoColumnLayout showDivider={args.showDivider} minWidth={args.minWidth}>
        <FieldBlock label="Label" value="Series 1" />
        <FieldBlock label="Color" value="#EF4444" />
        <FieldBlock label="Width" value="1.5px" />
        <FieldBlock label="Dots" value="On" />
      </TwoColumnLayout>
    </div>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '1열 모드 (좁은 컨테이너)',
  args: {
    children: null
  },
  render: () => <div style={{
    width: 300,
    padding: 16,
    border: '1px solid var(--color-border-subtle)',
    borderRadius: 4
  }}>
      <TwoColumnLayout>
        <FieldBlock label="Label" value="Series A" />
        <FieldBlock label="Color" value="#10B981" />
        <FieldBlock label="Aggregation" value="None" />
        <FieldBlock label="Visible" value="Yes" />
      </TwoColumnLayout>
    </div>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '2열 모드 (넓은 컨테이너)',
  args: {
    children: null
  },
  render: () => <div style={{
    width: 600,
    padding: 16,
    border: '1px solid var(--color-border-subtle)',
    borderRadius: 4
  }}>
      <TwoColumnLayout>
        <FieldBlock label="Label" value="Series A" />
        <FieldBlock label="Color" value="#10B981" />
        <FieldBlock label="Aggregation" value="None" />
        <FieldBlock label="Y Axis" value="Left" />
        <FieldBlock label="Visible" value="Yes" />
        <FieldBlock label="Width" value="2px" />
      </TwoColumnLayout>
    </div>
}`,...d.parameters?.docs?.source}}};const B=["Playground","NoDivider","NarrowContainer","WideContainer"];export{s as NarrowContainer,i as NoDivider,a as Playground,d as WideContainer,B as __namedExportsOrder,W as default};
