import{j as e,r as i}from"./iframe-CIISAoEK.js";import{B as s}from"./Button-C4Mw6Wig.js";import{S as T}from"./Switch-C4pdVFu7.js";import{C as v}from"./Checkbox-Cam6jGqi.js";import{R as g}from"./Radio--Dq2tLX7.js";import{I as c}from"./Input-C1380uoh.js";import{S as y}from"./Select-CSmvi5DH.js";import{S as L}from"./Slider-8TZyY8dz.js";import{H as C,T as t,C as R}from"./Code-DdlxDzBl.js";import{T as ie,a as ae,b,c as f}from"./Tabs-D7FReFSs.js";import{P as O}from"./Pagination-BM5mQIp-.js";import{T as S}from"./Tooltip-Blhju7aj.js";import{T as ce}from"./Table-CVI99x8F.js";import{D as ne}from"./Dropdown-uo4wOkwe.js";import{C as w}from"./ColorPicker-iU8Z-3zZ.js";import{D as h}from"./DateTimePicker-CyBed5Ai.js";import{M as Y}from"./MultiSelect-BKvQUGbQ.js";import{S as F}from"./SegmentedControl-DWXvKcmz.js";import{M as k}from"./Modal-CD1CKjr0.js";import{T as xe,u as ue}from"./use-toast-BeKDKIQx.js";import{S as P}from"./Spinner-6T1PqS9Y.js";import{S as W}from"./Skeleton-lXNnCSXn.js";import{B as p}from"./Badge-DgPmbY1O.js";import{C as pe}from"./ContextMenu-COk77M5l.js";import{D as A}from"./Divider-BPD3IFQu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-J-6yexAb.js";import"./use-machine-CAv56gvN.js";import"./use-interaction-state-CFpnGT6F.js";import"./use-toggle-BrBAcGfa.js";import"./FormField-T_m1PQ5s.js";import"./index-DtUjKpKT.js";import"./index-CL4RNYDV.js";import"./use-popup-close-TmAMM_s8.js";import"./Icon-DrkRNV24.js";const Dl={title:"Overview",tags:["!autodocs"]},he={fontSize:"11px",fontWeight:500,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"12px"},We={...he,opacity:.45},r={borderBottom:"1px solid var(--color-border-subtle)",marginTop:"32px"},a={display:"flex",flexWrap:"wrap",gap:"12px",alignItems:"center"},de=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"grape",label:"Grape",disabled:!0}],D=[{value:"admin",label:"Admin"},{value:"editor",label:"Editor"},{value:"viewer",label:"Viewer"}],re=[{value:"edit",label:"Edit"},{value:"duplicate",label:"Duplicate"},{value:"delete",label:"Delete"}],X=[{value:"revenue",label:"Revenue"},{value:"cost",label:"Cost"},{value:"profit",label:"Profit"},{value:"margin",label:"Margin %"},{value:"growth",label:"Growth Rate"}],me=[{name:"Alice Kim",department:"Engineering",role:"Frontend",status:"Active"},{name:"Bob Lee",department:"Design",role:"Product Designer",status:"Active"},{name:"Carol Park",department:"Engineering",role:"Backend",status:"On Leave"},{name:"David Choi",department:"Marketing",role:"Growth",status:"Active"}],ve=[{id:"name",header:"Name",accessor:"name",sortable:!0},{id:"department",header:"Department",accessor:"department",sortable:!0},{id:"role",header:"Role",accessor:"role"},{id:"status",header:"Status",accessor:"status"}];function n({children:l,sizeIndependent:o}){return e.jsxs(t,{as:"p",size:"sm",color:"subtle",style:o?We:he,children:[l,o&&" · size 무관"]})}function se({size:l}){const[o,x]=i.useState(null),[B,I]=i.useState(40),[z,M]=i.useState("#3b82f6");return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"24px",alignItems:"center"},children:[e.jsx(s,{size:l,children:"Button"}),e.jsx(y,{options:de,value:o,onChange:x,placeholder:"Select",size:l,style:{width:"120px"}}),e.jsx(c,{placeholder:"Input",size:l,style:{width:"120px"}}),e.jsx(L,{size:l,value:B,onValueChange:I,style:{width:"120px"}}),e.jsx(T,{size:l,label:"Switch"}),e.jsx(v,{size:l,label:"Checkbox"}),e.jsx(g,{size:l,label:"Radio"}),e.jsx(w,{size:l,value:z,onValueChange:M,showLabel:!0}),e.jsx(h,{mode:"date",size:l,valueFormat:"iso-8601",placeholder:"Date"}),e.jsx(F,{items:[{value:"a",label:"A"},{value:"b",label:"B"}],defaultValue:"a",size:l}),e.jsx(P,{size:l})]})}const m={border:"1px solid var(--color-border-subtle)",borderRadius:"12px",padding:"24px",display:"flex",flexDirection:"column",gap:"16px"},V={fontSize:"13px",fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase",opacity:.5},te={display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(480px, 1fr))",gap:"20px"};function Ae(){const l=ue();return e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(s,{shape:"outline",intent:"info",size:"md",onClick:()=>l.info("Information"),children:"Info"}),e.jsx(s,{shape:"outline",intent:"primary",size:"md",onClick:()=>l.success("Success!"),children:"Success"}),e.jsx(s,{shape:"outline",intent:"warning",size:"md",onClick:()=>l.warning("Warning"),children:"Warning"}),e.jsx(s,{shape:"outline",intent:"danger",size:"md",onClick:()=>l.danger("Error"),children:"Danger"})]})}function Ee(){const[l,o]=i.useState(""),[x,B]=i.useState("editor"),[I,z]=i.useState(!0),[M,E]=i.useState("#3b82f6");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(c,{label:"Name",placeholder:"Enter your name",value:l,onValueChange:o,size:"md"}),e.jsx(y,{label:"Role",options:D,value:x,onChange:B,size:"md"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(w,{value:M,onValueChange:E,size:"md",showLabel:!0}),e.jsx(T,{label:"Email notifications",checked:I,onCheckedChange:z,size:"md"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[e.jsx(s,{shape:"ghost",size:"md",children:"Cancel"}),e.jsx(s,{size:"md",children:"Save"})]})]})}function Oe(){const[l,o]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{shape:"outline",size:"md",onClick:()=>o(!0),children:"Open Modal"}),e.jsxs(k,{open:l,onOpenChange:o,children:[e.jsx(k.Header,{onClose:()=>o(!1),children:"Confirm Action"}),e.jsx(k.Body,{children:e.jsx(t,{children:"Are you sure you want to proceed?"})}),e.jsxs(k.Footer,{children:[e.jsx(s,{shape:"ghost",onClick:()=>o(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>o(!1),children:"Confirm"})]})]})]})}const _={name:"Showcase",render:()=>{const[l,o]=i.useState("overview"),[x,B]=i.useState(1),[I,z]=i.useState(65),[M,E]=i.useState(null),[J,K]=i.useState(["revenue","profit"]),[Z,Q]=i.useState("monthly"),[$,H]=i.useState(null);return e.jsx(xe,{position:"top-right",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{children:[e.jsx(C,{level:"2",weight:"bold",style:{marginBottom:"8px"},children:"Mercurium UI System"}),e.jsx(t,{size:"md",color:"subtle",style:{lineHeight:"1.7"},children:"FSM-based, token-driven design system for React. 27 components with full light/dark theming, 3 size scales (sm/md/lg), and accessible interaction states."})]}),e.jsxs("div",{style:m,children:[e.jsx("div",{style:V,children:"Typography"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsx(C,{level:"1",children:"Heading 1"}),e.jsx(C,{level:"2",children:"Heading 2"}),e.jsx(C,{level:"3",children:"Heading 3"}),e.jsx(C,{level:"4",children:"Heading 4"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",alignItems:"baseline"},children:[e.jsx(t,{size:"lg",children:"Text lg"}),e.jsx(t,{size:"md",children:"Text md"}),e.jsx(t,{size:"sm",color:"subtle",children:"Text sm subtle"}),e.jsx(R,{variant:"soft",size:"sm",children:"const x = 42"}),e.jsx(R,{variant:"outline",size:"sm",children:"npm install"})]})]}),e.jsxs("div",{style:m,children:[e.jsx("div",{style:V,children:"Buttons & Actions"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(s,{intent:"primary",size:"md",children:"Primary"}),e.jsx(s,{intent:"default",size:"md",children:"Default"}),e.jsx(s,{intent:"danger",size:"md",children:"Danger"}),e.jsx(s,{intent:"warning",size:"md",children:"Warning"}),e.jsx(s,{intent:"info",size:"md",children:"Info"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(s,{shape:"outline",size:"md",children:"Outline"}),e.jsx(s,{shape:"ghost",size:"md",children:"Ghost"}),e.jsx(s,{shape:"soft",size:"md",children:"Soft"}),e.jsx(s,{size:"md",loading:!0,children:"Loading"}),e.jsx(s,{size:"md",disabled:!0,children:"Disabled"})]}),e.jsx(A,{}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(F,{items:[{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"}],value:Z,onChange:Q,size:"md"}),e.jsx(ne,{items:re,value:void 0,onSelect:()=>{},trigger:"Actions",size:"md"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...V,marginBottom:"16px",paddingLeft:"4px"},children:"Form Controls"}),e.jsxs("div",{style:te,children:[e.jsxs("div",{style:m,children:[e.jsx(c,{label:"Email",placeholder:"name@example.com",size:"md"}),e.jsx(c,{label:"Password",type:"password",placeholder:"Enter password",size:"md",hint:"At least 8 characters"}),e.jsx(c,{label:"Error",defaultValue:"invalid",size:"md",errorMessage:"This field is required"})]}),e.jsxs("div",{style:m,children:[e.jsx(y,{label:"Fruit",options:de,value:null,onChange:()=>{},placeholder:"Choose one",size:"md"}),e.jsx(Y,{options:X,values:J,onChange:j=>K(j),placeholder:"Select columns",size:"md"}),e.jsx(h,{label:"Date",mode:"date",value:M,onChange:j=>E(j),valueFormat:"iso-8601",size:"md"}),e.jsx(h,{label:"Date & Time",mode:"datetime",valueFormat:"iso-8601",size:"md"})]}),e.jsxs("div",{style:m,children:[e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(T,{label:"Active",defaultChecked:!0,size:"md"}),e.jsx(T,{label:"Disabled",disabled:!0,size:"md"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(v,{label:"Terms agreed",defaultChecked:!0,size:"md"}),e.jsx(v,{label:"Newsletter",size:"md"}),e.jsx(v,{label:"Disabled",disabled:!0,size:"md"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(g,{name:"showcase-radio",label:"Option A",value:"a",defaultChecked:!0,size:"md"}),e.jsx(g,{name:"showcase-radio",label:"Option B",value:"b",size:"md"}),e.jsx(g,{name:"showcase-radio",label:"Option C",value:"c",disabled:!0,size:"md"})]})]}),e.jsxs("div",{style:m,children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{size:"sm",color:"subtle",children:"Opacity"}),e.jsx(L,{value:I,onValueChange:z,min:0,max:100,size:"md"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(w,{value:"#3b82f6",onValueChange:()=>{},size:"md",showLabel:!0}),e.jsx(w,{value:"#ef4444",onValueChange:()=>{},size:"md",showLabel:!0}),e.jsx(w,{value:"#22c55e80",onValueChange:()=>{},size:"md",showLabel:!0,alpha:!0})]})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...V,marginBottom:"16px",paddingLeft:"4px"},children:"Data Display"}),e.jsxs("div",{style:te,children:[e.jsx("div",{style:m,children:e.jsx(ce,{data:me,columns:ve,size:"md"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx("div",{style:m,children:e.jsxs(ie,{value:l,onChange:j=>o(j),children:[e.jsxs(ae,{children:[e.jsx(b,{value:"overview",children:"Overview"}),e.jsx(b,{value:"analytics",children:"Analytics"}),e.jsx(b,{value:"settings",children:"Settings"})]}),e.jsx(f,{value:"overview",children:e.jsx(t,{size:"sm",color:"subtle",style:{padding:"8px 0"},children:"Dashboard overview content"})}),e.jsx(f,{value:"analytics",children:e.jsx(t,{size:"sm",color:"subtle",style:{padding:"8px 0"},children:"Analytics details here"})}),e.jsx(f,{value:"settings",children:e.jsx(t,{size:"sm",color:"subtle",style:{padding:"8px 0"},children:"Settings panel content"})})]})}),e.jsxs("div",{style:m,children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(p,{variant:"info",children:"Info"}),e.jsx(p,{variant:"success",children:"Success"}),e.jsx(p,{variant:"warning",children:"Warning"}),e.jsx(p,{variant:"danger",children:"Danger"}),e.jsx(p,{variant:"info",dot:!0,children:"With dot"})]}),e.jsx(O,{total:120,pageSize:10,page:x,onPageChange:B,size:"md",showInfo:!0})]})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...V,marginBottom:"16px",paddingLeft:"4px"},children:"Feedback & Overlay"}),e.jsxs("div",{style:te,children:[e.jsxs("div",{style:m,children:[e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(S,{content:"Top tooltip",placement:"top",children:e.jsx(s,{shape:"ghost",size:"md",children:"Top"})}),e.jsx(S,{content:"Bottom tooltip",placement:"bottom",children:e.jsx(s,{shape:"ghost",size:"md",children:"Bottom"})}),e.jsx(S,{content:"Left tooltip",placement:"left",children:e.jsx(s,{shape:"ghost",size:"md",children:"Left"})}),e.jsx(S,{content:"Right tooltip",placement:"right",children:e.jsx(s,{shape:"ghost",size:"md",children:"Right"})})]}),e.jsx(A,{}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(Oe,{}),e.jsx(P,{size:"md"}),e.jsx(W,{width:"120px",height:"24px",borderRadius:"4px"})]})]}),e.jsxs("div",{style:m,children:[e.jsx(t,{size:"sm",weight:"medium",children:"Toast Notifications"}),e.jsx(Ae,{}),e.jsx(A,{}),e.jsxs("div",{style:{padding:"20px",border:"1px dashed var(--color-border-subtle)",borderRadius:"8px",textAlign:"center",cursor:"context-menu"},onContextMenu:j=>{j.preventDefault(),H({x:j.clientX,y:j.clientY})},children:[e.jsx(t,{size:"sm",color:"subtle",children:"Right-click for context menu"}),e.jsx(pe,{position:$,items:ge,onClose:()=>H(null)})]})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...V,marginBottom:"16px",paddingLeft:"4px"},children:"Usage Example"}),e.jsxs("div",{style:{...m,maxWidth:"480px"},children:[e.jsx(C,{level:"4",children:"User Settings"}),e.jsx(Ee,{})]})]})]})})}},N={name:"Scale",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("section",{children:[e.jsx(n,{children:"Small (sm)"}),e.jsx(se,{size:"sm"}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"Medium (md)"}),e.jsx(se,{size:"md"}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"Large (lg)"}),e.jsx(se,{size:"lg"})]})]})};function Fe({size:l}){const[o,x]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{size:l,onClick:()=>x(!0),children:"Open Modal"}),e.jsxs(k,{open:o,onOpenChange:x,children:[e.jsx(k.Header,{onClose:()=>x(!1),children:"Confirmation"}),e.jsx(k.Body,{children:e.jsx(t,{children:"Are you sure you want to proceed with this action?"})}),e.jsxs(k.Footer,{children:[e.jsx(s,{shape:"ghost",onClick:()=>x(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>x(!1),children:"Confirm"})]})]})]})}function He(){const l=ue();return e.jsxs("div",{style:a,children:[e.jsx(s,{shape:"outline",intent:"info",size:"sm",onClick:()=>l.info("Information message"),children:"Info"}),e.jsx(s,{shape:"outline",intent:"primary",size:"sm",onClick:()=>l.success("Operation successful"),children:"Success"}),e.jsx(s,{shape:"outline",intent:"warning",size:"sm",onClick:()=>l.warning("Warning: check this"),children:"Warning"}),e.jsx(s,{shape:"outline",intent:"danger",size:"sm",onClick:()=>l.danger("An error occurred"),children:"Danger"})]})}function _e(){return e.jsx(xe,{position:"top-right",children:e.jsx(He,{})})}const ge=[{label:"Edit",onClick:()=>{}},{label:"Duplicate",onClick:()=>{}},{label:"Delete",onClick:()=>{},variant:"danger",dividerBefore:!0}];function Ne(){const[l,o]=i.useState(null);return e.jsxs("div",{style:{padding:"24px",border:"1px dashed var(--color-border-subtle)",borderRadius:"8px",textAlign:"center",cursor:"context-menu"},onContextMenu:x=>{x.preventDefault(),o({x:x.clientX,y:x.clientY})},children:[e.jsx(t,{size:"sm",color:"subtle",children:"Right-click here to open context menu"}),e.jsx(pe,{position:l,items:ge,onClose:()=>o(null)})]})}function oe({size:l}){const[o,x]=i.useState("editor"),[B,I]=i.useState(null),[z,M]=i.useState(40),[E,J]=i.useState(60),[K,Z]=i.useState(1),[Q,$]=i.useState(!0),[H,j]=i.useState(!0),[je,ye]=i.useState(!1),[ee,le]=i.useState("a"),[be,fe]=i.useState(void 0),[Ce,Se]=i.useState("#3b82f6"),[we,De]=i.useState("#ef4444"),[Te,ke]=i.useState("#22c55e80"),[Be,Ie]=i.useState(null),[ze,Me]=i.useState("2026-03-15"),[Le,Re]=i.useState(["revenue","profit"]),[Pe,Ve]=i.useState([]),d=l==="sm"?"160px":l==="md"?"200px":"240px";return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("section",{children:[e.jsx(n,{sizeIndependent:!0,children:"Typography"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(C,{level:"1",children:"Heading 1 — The quick brown fox"}),e.jsx(C,{level:"2",children:"Heading 2 — The quick brown fox"}),e.jsx(C,{level:"3",children:"Heading 3 — The quick brown fox"}),e.jsx(C,{level:"4",children:"Heading 4 — The quick brown fox"}),e.jsxs("div",{style:{marginTop:"4px",display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(t,{size:"lg",children:"Text lg — 컴포넌트 본문 텍스트입니다."}),e.jsx(t,{size:"md",children:"Text md — 컴포넌트 본문 텍스트입니다."}),e.jsx(t,{size:"sm",color:"subtle",children:"Text sm subtle — 보조 설명 텍스트입니다."}),e.jsx(t,{size:"sm",color:"muted",children:"Text sm muted — 비활성 텍스트입니다."})]}),e.jsxs("div",{style:{marginTop:"4px",display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"},children:[e.jsx(R,{variant:"solid",children:"solid"}),e.jsx(R,{variant:"soft",children:"soft"}),e.jsx(R,{variant:"outline",children:"outline"}),e.jsx(R,{variant:"ghost",children:"ghost"}),e.jsxs(t,{size:"sm",children:["인라인 코드:"," ",e.jsx(R,{variant:"soft",size:"sm",children:"const x = 42"})]})]})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"Button"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:["solid","outline","ghost","soft"].map(u=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"11px",color:"var(--color-text-subtle)",marginBottom:"8px",fontFamily:"ui-monospace, monospace"},children:u}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("div",{style:a,children:[e.jsx(s,{shape:u,intent:"primary",size:l,children:"Primary"}),e.jsx(s,{shape:u,intent:"default",size:l,children:"Default"}),e.jsx(s,{shape:u,intent:"danger",size:l,children:"Danger"}),e.jsx(s,{shape:u,intent:"warning",size:l,children:"Warning"}),e.jsx(s,{shape:u,intent:"info",size:l,children:"Info"})]}),e.jsxs("div",{style:a,children:[e.jsx(s,{shape:u,intent:"primary",size:l,disabled:!0,children:"Primary"}),e.jsx(s,{shape:u,intent:"default",size:l,disabled:!0,children:"Default"}),e.jsx(s,{shape:u,intent:"danger",size:l,disabled:!0,children:"Danger"}),e.jsx(s,{shape:u,intent:"warning",size:l,disabled:!0,children:"Warning"}),e.jsx(s,{shape:u,intent:"info",size:l,disabled:!0,children:"Info"})]}),e.jsxs("div",{style:a,children:[e.jsx(s,{shape:u,intent:"primary",size:l,loading:!0,children:"Primary"}),e.jsx(s,{shape:u,intent:"default",size:l,loading:!0,children:"Default"}),e.jsx(s,{shape:u,intent:"danger",size:l,loading:!0,children:"Danger"}),e.jsx(s,{shape:u,intent:"warning",size:l,loading:!0,children:"Warning"}),e.jsx(s,{shape:u,intent:"info",size:l,loading:!0,children:"Info"})]})]})]},u))}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"Switch"}),e.jsxs("div",{style:a,children:[e.jsx(T,{size:l,label:"Notifications",checked:Q,onCheckedChange:$}),e.jsx(T,{size:l,label:"Off"}),e.jsx(T,{size:l,label:"Disabled On",defaultChecked:!0,disabled:!0}),e.jsx(T,{size:l,label:"Disabled Off",disabled:!0})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"Checkbox"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:a,children:[e.jsx(v,{size:l,label:"Accept terms",checked:H,onCheckedChange:j}),e.jsx(v,{size:l,label:"Subscribe newsletter",checked:je,onCheckedChange:ye}),e.jsx(v,{size:l,label:"Disabled checked",defaultChecked:!0,disabled:!0}),e.jsx(v,{size:l,label:"Disabled unchecked",disabled:!0})]}),e.jsxs("div",{style:a,children:[e.jsx(v,{size:l,label:"Warning",variant:"warning"}),e.jsx(v,{size:l,label:"Warning checked",variant:"warning",defaultChecked:!0}),e.jsx(v,{size:l,label:"Danger",variant:"danger"}),e.jsx(v,{size:l,label:"Danger checked",variant:"danger",defaultChecked:!0})]})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"Radio"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:a,children:[e.jsx(g,{size:l,label:"Option A",checked:ee==="a",onCheckedChange:()=>le("a")}),e.jsx(g,{size:l,label:"Option B",checked:ee==="b",onCheckedChange:()=>le("b")}),e.jsx(g,{size:l,label:"Option C",checked:ee==="c",onCheckedChange:()=>le("c")}),e.jsx(g,{size:l,label:"Disabled",disabled:!0})]}),e.jsxs("div",{style:a,children:[e.jsx(g,{size:l,label:"Warning",variant:"warning"}),e.jsx(g,{size:l,label:"Warning checked",variant:"warning",checked:!0}),e.jsx(g,{size:l,label:"Danger",variant:"danger"}),e.jsx(g,{size:l,label:"Danger checked",variant:"danger",checked:!0})]})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"Input"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:a,children:[e.jsx(c,{placeholder:"Default",size:l,style:{width:d}}),e.jsx(c,{placeholder:"With value",defaultValue:"mercurium",size:l,style:{width:d}}),e.jsx(c,{placeholder:"Read only",readOnly:!0,value:"read only value",size:l,style:{width:d}})]}),e.jsxs("div",{style:a,children:[e.jsx(c,{label:"Email",placeholder:"Enter your email",type:"email",size:l,hint:"We'll never share your email.",style:{width:d}}),e.jsx(c,{label:"Password",placeholder:"Enter password",type:"password",required:!0,size:l,reserveMessage:!0,style:{width:d}}),e.jsx(c,{label:"Username",placeholder:"Enter username",size:l,invalid:!0,errorMessage:"Username is already taken",style:{width:d}})]}),e.jsxs("div",{style:a,children:[e.jsx(c,{label:"Disabled",placeholder:"Cannot edit",disabled:!0,size:l,reserveMessage:!0,style:{width:d}}),e.jsx(c,{placeholder:"No label",size:l,reserveLabel:!0,reserveMessage:!0,style:{width:d}}),e.jsx(c,{placeholder:"Warning",size:l,reserveLabel:!0,warningMessage:"Check this before proceeding",style:{width:d}})]})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"Select"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:a,children:[e.jsx(y,{label:"Role",options:D,value:o,onChange:x,placeholder:"Choose role",size:l,style:{width:d},reserveMessage:!0}),e.jsx(y,{label:"Fruit",options:de,value:null,onChange:()=>{},placeholder:"With disabled option",size:l,style:{width:d},reserveMessage:!0}),e.jsx(y,{label:"Disabled",options:D,value:null,onChange:()=>{},placeholder:"Disabled",size:l,disabled:!0,style:{width:d},reserveMessage:!0})]}),e.jsxs("div",{style:a,children:[e.jsx(y,{label:"Required",options:D,value:B,onChange:I,placeholder:"Required field",size:l,required:!0,errorMessage:"Please select a role",style:{width:d}}),e.jsx(y,{options:D,value:null,onChange:()=>{},placeholder:"No label",size:l,reserveLabel:!0,warningMessage:"Warning hint message",style:{width:d}})]})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"MultiSelect"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsxs("div",{style:a,children:[e.jsx(Y,{options:X,values:Le,onChange:Re,placeholder:"Select columns",size:l,style:{width:d}}),e.jsx(Y,{options:X,values:Pe,onChange:Ve,placeholder:"Empty",size:l,style:{width:d}}),e.jsx(Y,{options:X,values:["revenue"],disabled:!0,placeholder:"Disabled",size:l,style:{width:d}})]})}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"DateTimePicker"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:a,children:[e.jsx(h,{mode:"date",size:l,valueFormat:"iso-8601",value:Be,onChange:Ie,placeholder:"Date",reserveMessage:!0}),e.jsx(h,{mode:"date",size:l,valueFormat:"iso-8601",value:ze,onChange:Me,label:"With Value",reserveMessage:!0}),e.jsx(h,{mode:"date",size:l,valueFormat:"iso-8601",value:null,disabled:!0,placeholder:"Disabled",reserveLabel:!0,reserveMessage:!0})]}),e.jsxs("div",{style:a,children:[e.jsx(h,{mode:"date",size:l,valueFormat:"iso-8601",value:null,label:"Required",required:!0,invalid:!0,errorMessage:"Required",placeholder:"Select date"}),e.jsx(h,{mode:"date",size:l,valueFormat:"iso-8601",value:null,label:"Warning",warningMessage:"Expiring soon",placeholder:"Select date"}),e.jsx(h,{mode:"date",size:l,valueFormat:"iso-8601",value:null,reserveLabel:!0,hint:"Choose a date",placeholder:"With hint"})]}),e.jsxs("div",{style:a,children:[e.jsx(h,{mode:"time",size:l,placeholder:"Time",reserveMessage:!0}),e.jsx(h,{mode:"datetime",size:l,valueFormat:"iso-8601",placeholder:"DateTime",reserveMessage:!0})]})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"Form States"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{size:"xs",color:"subtle",style:{marginBottom:"10px",display:"block"},children:"Danger (invalid)"}),e.jsxs("div",{style:{...a,alignItems:"flex-start"},children:[e.jsx(c,{label:"Email",placeholder:"Enter email",size:l,invalid:!0,errorMessage:"Invalid email format",style:{width:d}}),e.jsx(y,{label:"Role",options:D,value:null,onChange:()=>{},placeholder:"Select role",size:l,invalid:!0,errorMessage:"Role is required",style:{width:d}}),e.jsx(h,{mode:"date",label:"Date",size:l,valueFormat:"iso-8601",value:null,invalid:!0,errorMessage:"Date is required",placeholder:"Select date"})]})]}),e.jsxs("div",{children:[e.jsx(t,{size:"xs",color:"subtle",style:{marginBottom:"10px",display:"block"},children:"Warning"}),e.jsxs("div",{style:{...a,alignItems:"flex-start"},children:[e.jsx(c,{label:"Password",placeholder:"Enter password",type:"password",size:l,warningMessage:"Password expires in 3 days",style:{width:d}}),e.jsx(y,{label:"Plan",options:D,value:null,onChange:()=>{},placeholder:"Select plan",size:l,warningMessage:"Trial expires in 2 days",style:{width:d}}),e.jsx(h,{mode:"date",label:"Deadline",size:l,valueFormat:"iso-8601",value:null,warningMessage:"Deadline approaching",placeholder:"Select date"})]})]}),e.jsxs("div",{children:[e.jsx(t,{size:"xs",color:"subtle",style:{marginBottom:"10px",display:"block"},children:"Mixed (label / message alignment)"}),e.jsxs("div",{style:{...a,alignItems:"flex-start"},children:[e.jsx(c,{label:"Email",placeholder:"Enter email",size:l,reserveMessage:!0,style:{width:d}}),e.jsx(y,{options:D,value:null,onChange:()=>{},placeholder:"Select role",size:l,reserveLabel:!0,reserveMessage:!0,style:{width:d}}),e.jsx(c,{placeholder:"No label",size:l,reserveLabel:!0,errorMessage:"This field is required",style:{width:d}})]})]})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"Slider"}),e.jsxs("div",{style:{display:"flex",gap:"40px",alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"240px"},children:[e.jsx(L,{size:l,label:"Volume",value:z,onValueChange:M,min:0,max:100,step:1}),e.jsx(L,{size:l,label:"Brightness",defaultValue:80,min:0,max:100}),e.jsx(L,{size:l,label:"Disabled",defaultValue:60,disabled:!0})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"flex-end"},children:[e.jsx(L,{size:l,orientation:"vertical",label:"Vertical",value:E,onValueChange:J,style:{height:"120px"}}),e.jsx(L,{size:l,orientation:"vertical",label:"Disabled",defaultValue:40,disabled:!0,style:{height:"120px"}})]})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"Tabs"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{size:"xs",color:"subtle",style:{marginBottom:"8px"},children:"Line variant"}),e.jsxs(ie,{defaultValue:"overview",size:l,variant:"line",children:[e.jsxs(ae,{children:[e.jsx(b,{value:"overview",children:"Overview"}),e.jsx(b,{value:"analytics",children:"Analytics"}),e.jsx(b,{value:"settings",children:"Settings"}),e.jsx(b,{value:"disabled",disabled:!0,children:"Disabled"})]}),e.jsx(f,{value:"overview",children:e.jsx("div",{style:{padding:"12px 0"},children:e.jsx(t,{size:"sm",color:"subtle",children:"Overview 탭 콘텐츠입니다."})})}),e.jsx(f,{value:"analytics",children:e.jsx("div",{style:{padding:"12px 0"},children:e.jsx(t,{size:"sm",color:"subtle",children:"Analytics 탭 콘텐츠입니다."})})}),e.jsx(f,{value:"settings",children:e.jsx("div",{style:{padding:"12px 0"},children:e.jsx(t,{size:"sm",color:"subtle",children:"Settings 탭 콘텐츠입니다."})})}),e.jsx(f,{value:"disabled",children:null})]})]}),e.jsxs("div",{children:[e.jsx(t,{size:"xs",color:"subtle",style:{marginBottom:"8px"},children:"Enclosed variant"}),e.jsxs(ie,{defaultValue:"a",size:l,variant:"enclosed",children:[e.jsxs(ae,{children:[e.jsx(b,{value:"a",children:"Files"}),e.jsx(b,{value:"b",children:"Changes"}),e.jsx(b,{value:"c",children:"Commits"})]}),e.jsx(f,{value:"a",children:e.jsx("div",{style:{padding:"12px 0"},children:e.jsx(t,{size:"sm",color:"subtle",children:"Files 탭 콘텐츠입니다."})})}),e.jsx(f,{value:"b",children:null}),e.jsx(f,{value:"c",children:null})]})]})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{sizeIndependent:!0,children:"Tooltip"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:a,children:[e.jsx(S,{content:"Top tooltip",placement:"top",children:e.jsx(s,{shape:"outline",intent:"default",size:l,children:"Top"})}),e.jsx(S,{content:"Bottom tooltip",placement:"bottom",children:e.jsx(s,{shape:"outline",intent:"default",size:l,children:"Bottom"})}),e.jsx(S,{content:"Left tooltip",placement:"left",children:e.jsx(s,{shape:"outline",intent:"default",size:l,children:"Left"})}),e.jsx(S,{content:"Right tooltip",placement:"right",children:e.jsx(s,{shape:"outline",intent:"default",size:l,children:"Right"})})]}),e.jsxs("div",{style:a,children:[e.jsx(S,{content:"This is a longer tooltip that provides more context about the action.",placement:"top",children:e.jsx(s,{shape:"ghost",intent:"default",size:l,children:"Long tooltip"})}),e.jsx(S,{content:"Delayed tooltip",placement:"top",showDelay:500,children:e.jsx(s,{shape:"ghost",intent:"default",size:l,children:"Delayed (500ms)"})})]})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"Pagination"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(O,{total:100,pageSize:10,page:K,onPageChange:Z,showInfo:!0,size:l}),e.jsx(O,{total:50,pageSize:10,defaultPage:3,showInfo:!0,size:l}),e.jsx(O,{total:200,pageSize:20,defaultPage:1,size:l,siblingCount:2}),e.jsx(O,{total:30,pageSize:10,defaultPage:1,size:l,disabled:!0})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"Dropdown"}),e.jsxs("div",{style:a,children:[e.jsx(ne,{items:re,value:be,onSelect:fe,trigger:"Actions",size:l}),e.jsx(ne,{items:re,trigger:"Disabled",size:l})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"ColorPicker"}),e.jsxs("div",{style:a,children:[e.jsx(w,{size:l,value:Ce,onValueChange:Se,showLabel:!0}),e.jsx(w,{size:l,value:we,onValueChange:De}),e.jsx(w,{size:l,value:Te,onValueChange:ke,alpha:!0,showLabel:!0}),e.jsx(w,{size:l,value:"#6b7280",disabled:!0,showLabel:!0})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"SegmentedControl"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(F,{items:[{value:"chart",label:"Chart"},{value:"table",label:"Table"},{value:"json",label:"JSON"}],defaultValue:"chart",size:l}),e.jsx(F,{items:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C",disabled:!0}],defaultValue:"a",size:l}),e.jsx(F,{items:[{value:"x",label:"X"},{value:"y",label:"Y"}],defaultValue:"x",size:l,disabled:!0})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"Badge"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:a,children:[e.jsx(p,{variant:"info",children:"Info"}),e.jsx(p,{variant:"success",children:"Success"}),e.jsx(p,{variant:"warning",children:"Warning"}),e.jsx(p,{variant:"danger",children:"Danger"})]}),e.jsxs("div",{style:a,children:[e.jsx(p,{variant:"info",dot:!0,children:"Active"}),e.jsx(p,{variant:"success",dot:!0,children:"Connected"}),e.jsx(p,{variant:"warning",dot:!0,children:"Pending"}),e.jsx(p,{variant:"danger",dot:!0,children:"Error"})]}),e.jsxs("div",{style:a,children:[e.jsx(p,{variant:"info",size:"sm",children:"Small"}),e.jsx(p,{variant:"info",size:"md",children:"Medium"}),e.jsx(p,{variant:"info",size:"lg",children:"Large"})]})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{sizeIndependent:!0,children:"Loading States"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{size:"xs",color:"subtle",style:{marginBottom:"10px",display:"block"},children:"Spinner"}),e.jsxs("div",{style:a,children:[e.jsx(P,{size:"sm"}),e.jsx(P,{size:"md"}),e.jsx(P,{size:"lg"}),e.jsx(P,{size:"md",color:"var(--color-state-info)"}),e.jsx(P,{size:"md",color:"var(--color-state-danger)"})]})]}),e.jsxs("div",{children:[e.jsx(t,{size:"xs",color:"subtle",style:{marginBottom:"10px",display:"block"},children:"Skeleton"}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"flex-start"},children:[e.jsxs("div",{style:{width:"240px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(W,{variant:"text",lines:3}),e.jsx(W,{variant:"rectangular",height:"60px"})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(W,{variant:"circular",width:"48px",height:"48px"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(W,{variant:"text",width:"120px"}),e.jsx(W,{variant:"text",width:"80px"})]})]})]})]})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{sizeIndependent:!0,children:"Divider"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx(t,{size:"xs",color:"subtle",style:{marginBottom:"8px",display:"block"},children:"Horizontal"}),e.jsx("div",{style:{padding:"8px 0"},children:e.jsx(A,{})})]}),e.jsxs("div",{children:[e.jsx(t,{size:"xs",color:"subtle",style:{marginBottom:"8px",display:"block"},children:"Vertical"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",height:"32px"},children:[e.jsx(t,{size:"sm",children:"Left"}),e.jsx(A,{orientation:"vertical"}),e.jsx(t,{size:"sm",children:"Middle"}),e.jsx(A,{orientation:"vertical"}),e.jsx(t,{size:"sm",children:"Right"})]})]})]}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{sizeIndependent:!0,children:"Modal"}),e.jsx(Fe,{size:l}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{sizeIndependent:!0,children:"Toast"}),e.jsx(_e,{}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{sizeIndependent:!0,children:"ContextMenu"}),e.jsx(Ne,{}),e.jsx("div",{style:r})]}),e.jsxs("section",{children:[e.jsx(n,{children:"Table"}),e.jsx(ce,{data:me,columns:ve,size:l}),e.jsx("div",{style:r})]})]})}const q={name:"Small (sm)",render:()=>e.jsx(oe,{size:"sm"})},G={name:"Medium (md)",render:()=>e.jsx(oe,{size:"md"})},U={name:"Large (lg)",render:()=>e.jsx(oe,{size:"lg"})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Showcase',
  render: () => {
    const [tab, setTab] = useState('overview');
    const [page, setPage] = useState(1);
    const [slider, setSlider] = useState(65);
    const [date, setDate] = useState<string | null>(null);
    const [multi, setMulti] = useState<string[]>(['revenue', 'profit']);
    const [segment, setSegment] = useState('monthly');
    const [menuPos, setMenuPos] = useState<{
      x: number;
      y: number;
    } | null>(null);
    return <ToastProvider position="top-right">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
          {/* Hero */}
          <div>
            <Heading level="2" weight="bold" style={{
            marginBottom: '8px'
          }}>
              Mercurium UI System
            </Heading>
            <Text size="md" color="subtle" style={{
            lineHeight: '1.7'
          }}>
              FSM-based, token-driven design system for React. 27 components with full light/dark
              theming, 3 size scales (sm/md/lg), and accessible interaction states.
            </Text>
          </div>

          {/* Typography */}
          <div style={CARD}>
            <div style={CARD_TITLE}>Typography</div>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
              <Heading level="1">Heading 1</Heading>
              <Heading level="2">Heading 2</Heading>
              <Heading level="3">Heading 3</Heading>
              <Heading level="4">Heading 4</Heading>
            </div>
            <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            alignItems: 'baseline'
          }}>
              <Text size="lg">Text lg</Text>
              <Text size="md">Text md</Text>
              <Text size="sm" color="subtle">
                Text sm subtle
              </Text>
              <Code variant="soft" size="sm">
                const x = 42
              </Code>
              <Code variant="outline" size="sm">
                npm install
              </Code>
            </div>
          </div>

          {/* Buttons & Actions */}
          <div style={CARD}>
            <div style={CARD_TITLE}>Buttons & Actions</div>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
              <div style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
                <Button intent="primary" size="md">
                  Primary
                </Button>
                <Button intent="default" size="md">
                  Default
                </Button>
                <Button intent="danger" size="md">
                  Danger
                </Button>
                <Button intent="warning" size="md">
                  Warning
                </Button>
                <Button intent="info" size="md">
                  Info
                </Button>
              </div>
              <div style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
                <Button shape="outline" size="md">
                  Outline
                </Button>
                <Button shape="ghost" size="md">
                  Ghost
                </Button>
                <Button shape="soft" size="md">
                  Soft
                </Button>
                <Button size="md" loading>
                  Loading
                </Button>
                <Button size="md" disabled>
                  Disabled
                </Button>
              </div>
              <Divider />
              <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
                <SegmentedControl items={[{
                value: 'daily',
                label: 'Daily'
              }, {
                value: 'weekly',
                label: 'Weekly'
              }, {
                value: 'monthly',
                label: 'Monthly'
              }]} value={segment} onChange={setSegment} size="md" />
                <Dropdown items={dropdownItems} value={undefined} onSelect={() => {}} trigger="Actions" size="md" />
              </div>
            </div>
          </div>

          {/* Form Controls — 2-column grid */}
          <div>
            <div style={{
            ...CARD_TITLE,
            marginBottom: '16px',
            paddingLeft: '4px'
          }}>
              Form Controls
            </div>
            <div style={GRID_2}>
              {/* Inputs */}
              <div style={CARD}>
                <Input label="Email" placeholder="name@example.com" size="md" />
                <Input label="Password" type="password" placeholder="Enter password" size="md" hint="At least 8 characters" />
                <Input label="Error" defaultValue="invalid" size="md" errorMessage="This field is required" />
              </div>

              {/* Select & MultiSelect */}
              <div style={CARD}>
                <Select label="Fruit" options={fruitOptions} value={null} onChange={() => {}} placeholder="Choose one" size="md" />
                <MultiSelect options={columnOptions} values={multi} onChange={v => setMulti(v)} placeholder="Select columns" size="md" />
                <DateTimePicker label="Date" mode="date" value={date} onChange={v => setDate(v)} valueFormat="iso-8601" size="md" />
                <DateTimePicker label="Date & Time" mode="datetime" valueFormat="iso-8601" size="md" />
              </div>

              {/* Toggle controls */}
              <div style={CARD}>
                <div style={{
                display: 'flex',
                gap: '24px',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                  <Switch label="Active" defaultChecked size="md" />
                  <Switch label="Disabled" disabled size="md" />
                </div>
                <div style={{
                display: 'flex',
                gap: '24px',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                  <Checkbox label="Terms agreed" defaultChecked size="md" />
                  <Checkbox label="Newsletter" size="md" />
                  <Checkbox label="Disabled" disabled size="md" />
                </div>
                <div style={{
                display: 'flex',
                gap: '24px',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                  <Radio name="showcase-radio" label="Option A" value="a" defaultChecked size="md" />
                  <Radio name="showcase-radio" label="Option B" value="b" size="md" />
                  <Radio name="showcase-radio" label="Option C" value="c" disabled size="md" />
                </div>
              </div>

              {/* Slider & Color */}
              <div style={CARD}>
                <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                  <Text size="sm" color="subtle">
                    Opacity
                  </Text>
                  <Slider value={slider} onValueChange={setSlider} min={0} max={100} size="md" />
                </div>
                <div style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'center'
              }}>
                  <ColorPicker value="#3b82f6" onValueChange={() => {}} size="md" showLabel />
                  <ColorPicker value="#ef4444" onValueChange={() => {}} size="md" showLabel />
                  <ColorPicker value="#22c55e80" onValueChange={() => {}} size="md" showLabel alpha />
                </div>
              </div>
            </div>
          </div>

          {/* Data Display */}
          <div>
            <div style={{
            ...CARD_TITLE,
            marginBottom: '16px',
            paddingLeft: '4px'
          }}>
              Data Display
            </div>
            <div style={GRID_2}>
              {/* Table */}
              <div style={CARD}>
                <Table data={tableData} columns={tableColumns} size="md" />
              </div>

              {/* Tabs, Pagination, Badge */}
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
                <div style={CARD}>
                  <Tabs value={tab} onChange={v => setTab(v)}>
                    <TabList>
                      <Tab value="overview">Overview</Tab>
                      <Tab value="analytics">Analytics</Tab>
                      <Tab value="settings">Settings</Tab>
                    </TabList>
                    <TabPanel value="overview">
                      <Text size="sm" color="subtle" style={{
                      padding: '8px 0'
                    }}>
                        Dashboard overview content
                      </Text>
                    </TabPanel>
                    <TabPanel value="analytics">
                      <Text size="sm" color="subtle" style={{
                      padding: '8px 0'
                    }}>
                        Analytics details here
                      </Text>
                    </TabPanel>
                    <TabPanel value="settings">
                      <Text size="sm" color="subtle" style={{
                      padding: '8px 0'
                    }}>
                        Settings panel content
                      </Text>
                    </TabPanel>
                  </Tabs>
                </div>
                <div style={CARD}>
                  <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  alignItems: 'center'
                }}>
                    <Badge variant="info">Info</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Badge variant="info" dot>
                      With dot
                    </Badge>
                  </div>
                  <Pagination total={120} pageSize={10} page={page} onPageChange={setPage} size="md" showInfo />
                </div>
              </div>
            </div>
          </div>

          {/* Feedback & Overlay */}
          <div>
            <div style={{
            ...CARD_TITLE,
            marginBottom: '16px',
            paddingLeft: '4px'
          }}>
              Feedback & Overlay
            </div>
            <div style={GRID_2}>
              <div style={CARD}>
                <div style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                  <Tooltip content="Top tooltip" placement="top">
                    <Button shape="ghost" size="md">
                      Top
                    </Button>
                  </Tooltip>
                  <Tooltip content="Bottom tooltip" placement="bottom">
                    <Button shape="ghost" size="md">
                      Bottom
                    </Button>
                  </Tooltip>
                  <Tooltip content="Left tooltip" placement="left">
                    <Button shape="ghost" size="md">
                      Left
                    </Button>
                  </Tooltip>
                  <Tooltip content="Right tooltip" placement="right">
                    <Button shape="ghost" size="md">
                      Right
                    </Button>
                  </Tooltip>
                </div>
                <Divider />
                <div style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center'
              }}>
                  <ShowcaseModal />
                  <Spinner size="md" />
                  <Skeleton width="120px" height="24px" borderRadius="4px" />
                </div>
              </div>
              <div style={CARD}>
                <Text size="sm" weight="medium">
                  Toast Notifications
                </Text>
                <ShowcaseToastButtons />
                <Divider />
                <div style={{
                padding: '20px',
                border: '1px dashed var(--color-border-subtle)',
                borderRadius: '8px',
                textAlign: 'center',
                cursor: 'context-menu'
              }} onContextMenu={e => {
                e.preventDefault();
                setMenuPos({
                  x: e.clientX,
                  y: e.clientY
                });
              }}>
                  <Text size="sm" color="subtle">
                    Right-click for context menu
                  </Text>
                  <ContextMenu position={menuPos} items={contextMenuItems} onClose={() => setMenuPos(null)} />
                </div>
              </div>
            </div>
          </div>

          {/* Usage Example */}
          <div>
            <div style={{
            ...CARD_TITLE,
            marginBottom: '16px',
            paddingLeft: '4px'
          }}>
              Usage Example
            </div>
            <div style={{
            ...CARD,
            maxWidth: '480px'
          }}>
              <Heading level="4">User Settings</Heading>
              <ShowcaseFormCard />
            </div>
          </div>
        </div>
      </ToastProvider>;
  }
}`,..._.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Scale',
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
}`,...N.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Small (sm)',
  render: () => <SizedComponents size="sm" />
}`,...q.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Medium (md)',
  render: () => <SizedComponents size="md" />
}`,...G.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Large (lg)',
  render: () => <SizedComponents size="lg" />
}`,...U.parameters?.docs?.source}}};const Tl=["Showcase","Scale","Small","Medium","Large"];export{U as Large,G as Medium,N as Scale,_ as Showcase,q as Small,Tl as __namedExportsOrder,Dl as default};
