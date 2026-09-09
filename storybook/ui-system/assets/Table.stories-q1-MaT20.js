import{r as c,j as e,R as L}from"./iframe-B352m8Ic.js";import{T as m}from"./Table-1vxVFjKF.js";import{I as W}from"./Input-Dcs7U4OP.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DJDVo0me.js";import"./Tooltip-EMnZcfWy.js";import"./index-CoG5Onai.js";import"./index-BQaWQ9Wz.js";import"./use-merged-ref-C5T0hISp.js";import"./use-popup-close-Bk1BnKz0.js";import"./use-machine-D8fwiq3C.js";import"./DateTimePicker-CYYUhVpO.js";import"./vanilla-extract-dynamic.esm-BUlnp6I2.js";import"./Button-Dn8y6vOd.js";import"./FormField-Df8M80yJ.js";import"./form-message-DMEeDgMD.js";import"./Select-BKrqXkbX.js";import"./use-popup-position-hBWmQ4ys.js";import"./use-machine-sync-CSenzpo8.js";import"./Switch-DlxcGK84.js";import"./use-toggle-C00XK3Xa.js";const u=[{id:1,name:"Kim Minjun",department:"Engineering",role:"Senior Developer",email:"minjun@example.com",salary:85e3,joinDate:"2021-03-15"},{id:2,name:"Lee Soyeon",department:"Design",role:"Lead Designer",email:"soyeon@example.com",salary:78e3,joinDate:"2020-07-22"},{id:3,name:"Park Jiwoo",department:"Engineering",role:"Frontend Developer",email:"jiwoo@example.com",salary:72e3,joinDate:"2022-01-10"},{id:4,name:"Choi Yeji",department:"Product",role:"Product Manager",email:"yeji@example.com",salary:9e4,joinDate:"2019-11-05"},{id:5,name:"Jung Hyunwoo",department:"Engineering",role:"Backend Developer",email:"hyunwoo@example.com",salary:8e4,joinDate:"2021-08-30"},{id:6,name:"Kang Seoyun",department:"Marketing",role:"Marketing Lead",email:"seoyun@example.com",salary:75e3,joinDate:"2020-04-18"},{id:7,name:"Yoon Dohyun",department:"Engineering",role:"DevOps Engineer",email:"dohyun@example.com",salary:82e3,joinDate:"2022-06-01"},{id:8,name:"Shin Minji",department:"HR",role:"HR Manager",email:"minji@example.com",salary:7e4,joinDate:"2018-09-12"}],y=[{id:"name",header:"Name",accessor:"name",width:180},{id:"department",header:"Department",accessor:"department",width:140},{id:"role",header:"Role",accessor:"role",width:200},{id:"email",header:"Email",accessor:"email",width:220},{id:"salary",header:"Salary",accessor:"salary",width:120,align:"right",cell:a=>`$${a.toLocaleString()}`},{id:"joinDate",header:"Join Date",accessor:"joinDate",width:130}],de={title:"Components/Table",component:m,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size of the table cells",defaultValue:"md"},resizable:{control:"boolean",description:"Enable column resizing by dragging header borders"},reorderable:{control:"boolean",description:"Enable column reordering by dragging headers"},autoFit:{control:"boolean",description:"Auto-fit columns to container width"},rowReorderable:{control:"boolean",description:"Enable row reordering via drag handle"},ellipsis:{control:"boolean",description:"Enable text truncation with tooltip on hover"},data:{control:!1},columns:{control:!1},sort:{control:!1},onSortChange:{control:!1},onRowReorder:{control:!1},columnOrder:{control:!1},onColumnOrderChange:{control:!1},columnWidths:{control:!1},onColumnWidthsChange:{control:!1}}},x={args:{data:u,columns:y}},v={parameters:{controls:{disable:!0}},render:()=>{const a=[{id:"name",header:"Name",accessor:"name"},{id:"department",header:"Department",accessor:"department"},{id:"role",header:"Role",accessor:"role"}],o=u.slice(0,3),s={marginBottom:"0.5rem",fontSize:12,color:"var(--color-text-subtle)"};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:s,children:'size="sm"'}),e.jsx(m,{data:o,columns:a,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{style:s,children:'size="md" (default)'}),e.jsx(m,{data:o,columns:a,size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{style:s,children:'size="lg"'}),e.jsx(m,{data:o,columns:a,size:"lg"})]}),e.jsxs("div",{children:[e.jsx("p",{style:s,children:"resizable"}),e.jsx(m,{data:o,columns:a,resizable:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:s,children:"empty data"}),e.jsx(m,{data:[],columns:a})]})]})}},D={render:()=>{const a=[{id:"name",header:"Name",accessor:"name"},{id:"department",header:"Department",accessor:"department"},{id:"role",header:"Role",accessor:"role"}],o=u.slice(0,3);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"0.5rem"},children:"Small"}),e.jsx(m,{data:o,columns:a,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"0.5rem"},children:"Medium (default)"}),e.jsx(m,{data:o,columns:a,size:"md"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"0.5rem"},children:"Large"}),e.jsx(m,{data:o,columns:a,size:"lg"})]})]})}},S={render:()=>e.jsx(m,{data:u,columns:y,resizable:!0})},f={render:()=>{const[a,o]=c.useState(null),[s,d]=c.useState(u),n=y.map(t=>({...t,sortable:t.id!=="email"})),l=c.useCallback(t=>{if(o(t),!t){d(u);return}const i=[...u].sort((r,g)=>{const h=r[t.columnId],b=g[t.columnId];let C=0;return h<b?C=-1:h>b&&(C=1),t.direction==="asc"?C:-C});d(i)},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Click column headers to sort (Name, Department, Role, Salary, Join Date). Email column is not sortable."}),e.jsx(m,{data:s,columns:n,sort:a,onSortChange:l})]})}},k={render:()=>e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Drag column headers to reorder them."}),e.jsx(m,{data:u,columns:y,reorderable:!0})]})},I={render:()=>{const[a,o]=c.useState(u),s=c.useCallback((d,n)=>{o(l=>{const t=[...l],[i]=t.splice(d,1);return t.splice(n,0,i),t})},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Drag the handle on the left to reorder rows."}),e.jsx(m,{data:a,columns:y,rowReorderable:!0,onRowReorder:s})]})}},j={render:()=>{const a=[{id:"name",header:"Name",accessor:"name",width:200,cell:o=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"#e2e8f0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:600,color:"#475569",flexShrink:0},children:o.charAt(0)}),e.jsx("span",{style:{fontWeight:500},children:o})]})},{id:"department",header:"Department",accessor:"department",width:140},{id:"role",header:"Role",accessor:"role",width:200},{id:"salary",header:"Salary",accessor:"salary",width:150,align:"right",cell:o=>{const s=o;let d="low";s>=85e3?d="high":s>=75e3&&(d="mid");const n={high:"#16a34a",mid:"#ca8a04",low:"#dc2626"};return e.jsxs("span",{style:{color:n[d],fontWeight:500},children:["$",s.toLocaleString()]})}},{id:"actions",header:"Actions",accessor:"id",width:120,align:"center",ellipsis:!1,cell:()=>e.jsxs("div",{style:{display:"flex",gap:"0.25rem",justifyContent:"center"},children:[e.jsx("button",{style:{padding:"0.25rem 0.5rem",fontSize:"0.75rem",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},children:"Edit"}),e.jsx("button",{style:{padding:"0.25rem 0.5rem",fontSize:"0.75rem",border:"1px solid #fecaca",borderRadius:"4px",background:"#fef2f2",color:"#dc2626",cursor:"pointer"},children:"Delete"})]})}];return e.jsx(m,{data:u,columns:a})}},T={render:()=>{const a=u.map(s=>({...s,role:`${s.role} - This is a very long role description that should be truncated with ellipsis`,email:`very.long.email.address.that.should.be.truncated.${s.email}`})),o=[{id:"name",header:"Name",accessor:"name",width:120},{id:"role",header:"Role",accessor:"role",width:150},{id:"email",header:"Email",accessor:"email",width:150}];return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Hover over truncated cells to see the full content in a tooltip."}),e.jsx(m,{data:a,columns:o,autoFit:!1})]})}},V={render:()=>{const[a,o]=c.useState(null),[s,d]=c.useState(u),n=y.map(i=>({...i,sortable:!0})),l=c.useCallback(i=>{if(o(i),!i){d(u);return}const r=[...u].sort((g,h)=>{const b=g[i.columnId],C=h[i.columnId];let w=0;return b<C?w=-1:b>C&&(w=1),i.direction==="asc"?w:-w});d(r)},[]),t=c.useCallback((i,r)=>{d(g=>{const h=[...g],[b]=h.splice(i,1);return h.splice(r,0,b),h})},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"All features enabled: Resize columns | Reorder columns | Sort | Row drag | Ellipsis + Tooltip"}),e.jsx(m,{data:s,columns:n,resizable:!0,reorderable:!0,rowReorderable:!0,sort:a,onSortChange:l,onRowReorder:t})]})}},p=[{id:1,name:"Wireless Mouse",category:"Accessories",price:29.99,inStock:!0,releaseDate:"2024-01-15"},{id:2,name:"Mechanical Keyboard",category:"Accessories",price:89.99,inStock:!0,releaseDate:"2023-11-20"},{id:3,name:"USB-C Hub",category:"Accessories",price:45,inStock:!1,releaseDate:"2024-03-01"},{id:4,name:'27" Monitor',category:"Displays",price:349.99,inStock:!0,releaseDate:"2024-06-10"},{id:5,name:"Webcam HD",category:"Accessories",price:59.99,inStock:!1,releaseDate:"2023-08-05"}],R={render:()=>{const[a,o]=c.useState(p),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:200,editable:!0,editorType:"text"},{id:"category",header:"Category",accessor:"category",width:140},{id:"price",header:"Price",accessor:"price",width:120,align:"right",editable:!0,editorType:"number",cell:n=>`$${n.toFixed(2)}`},{id:"releaseDate",header:"Release Date",accessor:"releaseDate",width:140}],d=c.useCallback((n,l,t)=>{o(i=>i.map(r=>r.id===n.id?{...r,[l]:l==="price"?Number(t):t}:r))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Double-click Name or Price cells to edit. Press Enter to commit, Escape to cancel."}),e.jsx(m,{data:a,columns:s,onCellValueChange:d})]})}},E={render:()=>{const[a,o]=c.useState(p),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:180,editable:!0,editorType:"text"},{id:"category",header:"Category",accessor:"category",width:160,editable:!0,editorType:"enum",editorParams:{enumValues:["Accessories","Displays","Audio","Storage"]}},{id:"price",header:"Price",accessor:"price",width:120,align:"right",editable:!0,editorType:"number",cell:n=>`$${n.toFixed(2)}`},{id:"inStock",header:"In Stock",accessor:"inStock",width:100,align:"center",editable:!0,editorType:"boolean"},{id:"releaseDate",header:"Release Date",accessor:"releaseDate",width:160,editable:!0,editorType:"date"}],d=c.useCallback((n,l,t)=>{o(i=>i.map(r=>r.id!==n.id?r:l==="price"?{...r,price:Number(t)}:{...r,[l]:t}))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"All editor types: text (Name), enum (Category), number (Price), boolean (In Stock), date (Release Date). Boolean toggles inline. Others open on double-click."}),e.jsx(m,{data:a,columns:s,onCellValueChange:d})]})}},N={render:()=>{const[a,o]=c.useState(p),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:200,editable:!0,editorType:"text"},{id:"category",header:"Category",accessor:"category",width:140},{id:"price",header:"Price",accessor:"price",width:120,align:"right",editable:!0,editorType:"number",cell:n=>`$${n.toFixed(2)}`}],d=c.useCallback((n,l,t)=>{o(i=>i.map(r=>r.id===n.id?{...r,[l]:l==="price"?Number(t):t}:r))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:'Single click to enter edit mode (editTrigger="click").'}),e.jsx(m,{data:a,columns:s,onCellValueChange:d,editTrigger:"click"})]})}},P={render:()=>{const[a,o]=c.useState(p),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:200,editable:!0,editorType:"text"},{id:"category",header:"Category",accessor:"category",width:140},{id:"price",header:"Price",accessor:"price",width:120,align:"right",editable:n=>n.inStock,editorType:"number",cell:n=>`$${n.toFixed(2)}`},{id:"inStock",header:"In Stock",accessor:"inStock",width:100,align:"center",cell:n=>n?"Yes":"No"}],d=c.useCallback((n,l,t)=>{o(i=>i.map(r=>r.id===n.id?{...r,[l]:l==="price"?Number(t):t}:r))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:'Price is only editable when "In Stock" is Yes. Out-of-stock rows have read-only prices.'}),e.jsx(m,{data:a,columns:s,onCellValueChange:d})]})}},z={render:()=>{const[a,o]=c.useState(p),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:200,editable:!0,editorType:"text",validateCell:n=>{const l=String(n).trim();return l.length===0?"Name is required":l.length<2?"Name must be at least 2 characters":null}},{id:"category",header:"Category",accessor:"category",width:140},{id:"price",header:"Price",accessor:"price",width:120,align:"right",editable:!0,editorType:"number",cell:n=>`$${n.toFixed(2)}`,validateCell:n=>{const l=Number(n);return isNaN(l)?"Must be a number":l<=0?"Price must be positive":l>1e4?"Price cannot exceed $10,000":null}}],d=c.useCallback((n,l,t)=>{o(i=>i.map(r=>r.id===n.id?{...r,[l]:l==="price"?Number(t):t}:r))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Name: required, min 2 chars. Price: must be positive, max $10,000. Invalid values show an error and remain in edit mode. Press Escape to revert."}),e.jsx(m,{data:a,columns:s,onCellValueChange:d})]})}},$={render:()=>{const[a,o]=c.useState(p),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:200,editable:!0,editorType:"text",showCellIcon:!0},{id:"category",header:"Category",accessor:"category",width:160,editable:!0,editorType:"enum",showCellIcon:!0,editorParams:{enumValues:["Accessories","Displays","Audio","Storage"]}},{id:"price",header:"Price",accessor:"price",width:120,align:"right",editable:!0,editorType:"number",showCellIcon:!0,cell:n=>`$${n.toFixed(2)}`},{id:"inStock",header:"In Stock",accessor:"inStock",width:100,align:"center",editable:!0,editorType:"boolean"},{id:"releaseDate",header:"Release Date",accessor:"releaseDate",width:160,editable:!0,editorType:"date",showCellIcon:!0}],d=c.useCallback((n,l,t)=>{o(i=>i.map(r=>r.id!==n.id?r:l==="price"?{...r,price:Number(t)}:{...r,[l]:t}))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Per-column showCellIcon: Name, Category, Price, Release Date always show Edit icon. ID has no icon. In Stock uses inline toggle (boolean). Click icon or cell to edit. Reset icon appears in edit mode."}),e.jsx(m,{data:a,columns:s,onCellValueChange:d,editTrigger:"click"})]})}},B={render:()=>{const[a,o]=c.useState(p),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:200,editable:!0,editorType:"text",showCellIcon:!0},{id:"category",header:"Category",accessor:"category",width:140,showCellIcon:!0},{id:"price",header:"Price",accessor:"price",width:120,align:"right",editable:n=>n.inStock,editorType:"number",showCellIcon:!0,cell:n=>`$${n.toFixed(2)}`},{id:"inStock",header:"In Stock",accessor:"inStock",width:100,align:"center",cell:n=>n?"Yes":"No"}],d=c.useCallback((n,l,t)=>{o(i=>i.map(r=>r.id===n.id?{...r,[l]:l==="price"?Number(t):t}:r))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:'Conditional editing + per-column showCellIcon: Price shows Edit icon when "In Stock" is Yes, Lock icon when No. Name always shows Edit icon. Category shows Lock icon (not editable). ID and In Stock have no icon.'}),e.jsx(m,{data:a,columns:s,onCellValueChange:d,editTrigger:"click"})]})}},A={render:()=>{const[a,o]=c.useState(p),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:180,editable:!0,editorType:"text",showCellIcon:!0},{id:"category",header:"Category",accessor:"category",width:160,editable:!0,editorType:"enum",showCellIcon:!0,editorParams:{enumValues:["Accessories","Displays","Audio","Storage"]}},{id:"price",header:"Price",accessor:"price",width:120,align:"right",editable:!0,editorType:"number",showCellIcon:!0,cell:n=>`$${n.toFixed(2)}`},{id:"releaseDate",header:"Release Date",accessor:"releaseDate",width:160,editable:!0,editorType:"date",showCellIcon:!0}],d=c.useCallback((n,l,t)=>{o(i=>i.map(r=>r.id!==n.id?r:l==="price"?{...r,price:Number(t)}:{...r,[l]:t}))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Click-outside detection: Click a cell to edit, then click outside the cell to commit. Portal-based editors (Category dropdown, Release Date calendar) stay open when clicking inside their popups. Clicking outside both the cell and popup commits the value."}),e.jsx(m,{data:a,columns:s,onCellValueChange:d,editTrigger:"click"}),e.jsx("div",{style:{marginTop:"2rem",padding:"1rem",background:"#f1f5f9",borderRadius:"8px"},children:e.jsx("p",{style:{color:"#475569"},children:"Click here (outside the table) while editing to test click-outside commit."})})]})}},F={render:()=>{const[a,o]=c.useState(p),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:200,editable:!0,editorType:"text"},{id:"category",header:"Category",accessor:"category",width:140},{id:"price",header:"Price",accessor:"price",width:200,align:"right",editable:!0,cell:n=>`$${n.toFixed(2)}`,renderEditCell:(n,l,t,i)=>{const[r,g]=L.useState(String(n??""));return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0 0.25rem"},children:[e.jsx("span",{children:"$"}),e.jsx(W,{value:r,onValueChange:g,size:"sm",type:"number",style:{flex:1}}),e.jsx("button",{style:{padding:"0.125rem 0.5rem",fontSize:"0.75rem",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>i.commit(Number(r)),children:"OK"}),e.jsx("button",{style:{padding:"0.125rem 0.5rem",fontSize:"0.75rem",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>i.cancel(),children:"Cancel"})]})}}],d=c.useCallback((n,l,t)=>{o(i=>i.map(r=>r.id===n.id?{...r,[l]:l==="price"?Number(t):t}:r))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Price column uses a custom editor via renderEditCell with explicit OK/Cancel buttons."}),e.jsx(m,{data:a,columns:s,onCellValueChange:d})]})}},H={name:"Header Click (Inspector pattern)",render:()=>{const[a,o]=c.useState(null);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("p",{style:{color:"#666",fontSize:"0.875rem"},children:["컬럼 헤더를 클릭하면 ",e.jsx("code",{children:"onHeaderClick"}),"이 호출됩니다. Inspector 패턴(헤더 클릭 → 설정 패널 전환)에서 사용됩니다."]}),e.jsx("div",{style:{padding:"0.5rem 0.75rem",background:a?"#eff6ff":"#f9fafb",border:`1px solid ${a?"#bfdbfe":"#e5e7eb"}`,borderRadius:6,fontSize:"0.875rem",color:a?"#1d4ed8":"#9ca3af",minHeight:36,display:"flex",alignItems:"center"},children:a?`onHeaderClick("${a}") 호출됨`:"헤더를 클릭해보세요"}),e.jsx(m,{data:u,columns:y,onHeaderClick:s=>o(s)})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: basicColumns
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const cols: ColumnDef<Employee>[] = [{
      id: 'name',
      header: 'Name',
      accessor: 'name'
    }, {
      id: 'department',
      header: 'Department',
      accessor: 'department'
    }, {
      id: 'role',
      header: 'Role',
      accessor: 'role'
    }];
    const rows = sampleData.slice(0, 3);
    const labelStyle: React.CSSProperties = {
      marginBottom: '0.5rem',
      fontSize: 12,
      color: 'var(--color-text-subtle)'
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
        <div>
          <p style={labelStyle}>size="sm"</p>
          <Table data={rows} columns={cols} size="sm" />
        </div>
        <div>
          <p style={labelStyle}>size="md" (default)</p>
          <Table data={rows} columns={cols} size="md" />
        </div>
        <div>
          <p style={labelStyle}>size="lg"</p>
          <Table data={rows} columns={cols} size="lg" />
        </div>
        <div>
          <p style={labelStyle}>resizable</p>
          <Table data={rows} columns={cols} resizable />
        </div>
        <div>
          <p style={labelStyle}>empty data</p>
          <Table data={[]} columns={cols} />
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const cols: ColumnDef<Employee>[] = [{
      id: 'name',
      header: 'Name',
      accessor: 'name'
    }, {
      id: 'department',
      header: 'Department',
      accessor: 'department'
    }, {
      id: 'role',
      header: 'Role',
      accessor: 'role'
    }];
    const rows = sampleData.slice(0, 3);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
        <div>
          <h3 style={{
          marginBottom: '0.5rem'
        }}>Small</h3>
          <Table data={rows} columns={cols} size="sm" />
        </div>
        <div>
          <h3 style={{
          marginBottom: '0.5rem'
        }}>Medium (default)</h3>
          <Table data={rows} columns={cols} size="md" />
        </div>
        <div>
          <h3 style={{
          marginBottom: '0.5rem'
        }}>Large</h3>
          <Table data={rows} columns={cols} size="lg" />
        </div>
      </div>;
  }
}`,...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table data={sampleData} columns={basicColumns} resizable />;
  }
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sort, setSort] = useState<SortState | null>(null);
    const [data, setData] = useState(sampleData);
    const sortableColumns: ColumnDef<Employee>[] = basicColumns.map(col => ({
      ...col,
      sortable: col.id !== 'email'
    }));
    const handleSortChange = useCallback((newSort: SortState | null) => {
      setSort(newSort);
      if (!newSort) {
        setData(sampleData);
        return;
      }
      const sorted = [...sampleData].sort((a, b) => {
        const aVal = a[newSort.columnId as keyof Employee];
        const bVal = b[newSort.columnId as keyof Employee];
        let cmp = 0;
        if (aVal < bVal) cmp = -1;else if (aVal > bVal) cmp = 1;
        return newSort.direction === 'asc' ? cmp : -cmp;
      });
      setData(sorted);
    }, []);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Click column headers to sort (Name, Department, Role, Salary, Join Date). Email column is
          not sortable.
        </p>
        <Table data={data} columns={sortableColumns} sort={sort} onSortChange={handleSortChange} />
      </div>;
  }
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>Drag column headers to reorder them.</p>
        <Table data={sampleData} columns={basicColumns} reorderable />
      </div>;
  }
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(sampleData);
    const handleRowReorder = useCallback((fromIndex: number, toIndex: number) => {
      setData(prev => {
        const next = [...prev];
        const [moved] = next.splice(fromIndex, 1);
        next.splice(toIndex, 0, moved);
        return next;
      });
    }, []);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Drag the handle on the left to reorder rows.
        </p>
        <Table data={data} columns={basicColumns} rowReorderable onRowReorder={handleRowReorder} />
      </div>;
  }
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const customColumns: ColumnDef<Employee>[] = [{
      id: 'name',
      header: 'Name',
      accessor: 'name',
      width: 200,
      cell: value => <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
            <div style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: '#e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.75rem',
          fontWeight: 600,
          color: '#475569',
          flexShrink: 0
        }}>
              {(value as string).charAt(0)}
            </div>
            <span style={{
          fontWeight: 500
        }}>{value as string}</span>
          </div>
    }, {
      id: 'department',
      header: 'Department',
      accessor: 'department',
      width: 140
    }, {
      id: 'role',
      header: 'Role',
      accessor: 'role',
      width: 200
    }, {
      id: 'salary',
      header: 'Salary',
      accessor: 'salary',
      width: 150,
      align: 'right',
      cell: value => {
        const salary = value as number;
        let level: 'high' | 'mid' | 'low' = 'low';
        if (salary >= 85000) level = 'high';else if (salary >= 75000) level = 'mid';
        const colors = {
          high: '#16a34a',
          mid: '#ca8a04',
          low: '#dc2626'
        };
        return <span style={{
          color: colors[level],
          fontWeight: 500
        }}>
              \${salary.toLocaleString()}
            </span>;
      }
    }, {
      id: 'actions',
      header: 'Actions',
      accessor: 'id',
      width: 120,
      align: 'center',
      ellipsis: false,
      cell: () => <div style={{
        display: 'flex',
        gap: '0.25rem',
        justifyContent: 'center'
      }}>
            <button style={{
          padding: '0.25rem 0.5rem',
          fontSize: '0.75rem',
          border: '1px solid #d1d5db',
          borderRadius: '4px',
          background: 'white',
          cursor: 'pointer'
        }}>
              Edit
            </button>
            <button style={{
          padding: '0.25rem 0.5rem',
          fontSize: '0.75rem',
          border: '1px solid #fecaca',
          borderRadius: '4px',
          background: '#fef2f2',
          color: '#dc2626',
          cursor: 'pointer'
        }}>
              Delete
            </button>
          </div>
    }];
    return <Table data={sampleData} columns={customColumns} />;
  }
}`,...j.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const longData = sampleData.map(d => ({
      ...d,
      role: \`\${d.role} - This is a very long role description that should be truncated with ellipsis\`,
      email: \`very.long.email.address.that.should.be.truncated.\${d.email}\`
    }));
    const narrowColumns: ColumnDef<Employee>[] = [{
      id: 'name',
      header: 'Name',
      accessor: 'name',
      width: 120
    }, {
      id: 'role',
      header: 'Role',
      accessor: 'role',
      width: 150
    }, {
      id: 'email',
      header: 'Email',
      accessor: 'email',
      width: 150
    }];
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Hover over truncated cells to see the full content in a tooltip.
        </p>
        <Table data={longData} columns={narrowColumns} autoFit={false} />
      </div>;
  }
}`,...T.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sort, setSort] = useState<SortState | null>(null);
    const [data, setData] = useState(sampleData);
    const allColumns: ColumnDef<Employee>[] = basicColumns.map(col => ({
      ...col,
      sortable: true
    }));
    const handleSortChange = useCallback((newSort: SortState | null) => {
      setSort(newSort);
      if (!newSort) {
        setData(sampleData);
        return;
      }
      const sorted = [...sampleData].sort((a, b) => {
        const aVal = a[newSort.columnId as keyof Employee];
        const bVal = b[newSort.columnId as keyof Employee];
        let cmp = 0;
        if (aVal < bVal) cmp = -1;else if (aVal > bVal) cmp = 1;
        return newSort.direction === 'asc' ? cmp : -cmp;
      });
      setData(sorted);
    }, []);
    const handleRowReorder = useCallback((fromIndex: number, toIndex: number) => {
      setData(prev => {
        const next = [...prev];
        const [moved] = next.splice(fromIndex, 1);
        next.splice(toIndex, 0, moved);
        return next;
      });
    }, []);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          All features enabled: Resize columns | Reorder columns | Sort | Row drag | Ellipsis +
          Tooltip
        </p>
        <Table data={data} columns={allColumns} resizable reorderable rowReorderable sort={sort} onSortChange={handleSortChange} onRowReorder={handleRowReorder} />
      </div>;
  }
}`,...V.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(editableData);
    const columns: ColumnDef<EditableProduct>[] = [{
      id: 'id',
      header: 'ID',
      accessor: 'id',
      width: 60
    }, {
      id: 'name',
      header: 'Name',
      accessor: 'name',
      width: 200,
      editable: true,
      editorType: 'text'
    }, {
      id: 'category',
      header: 'Category',
      accessor: 'category',
      width: 140
    }, {
      id: 'price',
      header: 'Price',
      accessor: 'price',
      width: 120,
      align: 'right',
      editable: true,
      editorType: 'number',
      cell: value => \`$\${(value as number).toFixed(2)}\`
    }, {
      id: 'releaseDate',
      header: 'Release Date',
      accessor: 'releaseDate',
      width: 140
    }];
    const handleCellValueChange = useCallback((row: EditableProduct, columnId: string, newValue: unknown) => {
      setData(prev => prev.map(r => r.id === row.id ? {
        ...r,
        [columnId]: columnId === 'price' ? Number(newValue) : newValue
      } : r));
    }, []);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Double-click Name or Price cells to edit. Press Enter to commit, Escape to cancel.
        </p>
        <Table data={data} columns={columns} onCellValueChange={handleCellValueChange} />
      </div>;
  }
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(editableData);
    const columns: ColumnDef<EditableProduct>[] = [{
      id: 'id',
      header: 'ID',
      accessor: 'id',
      width: 60
    }, {
      id: 'name',
      header: 'Name',
      accessor: 'name',
      width: 180,
      editable: true,
      editorType: 'text'
    }, {
      id: 'category',
      header: 'Category',
      accessor: 'category',
      width: 160,
      editable: true,
      editorType: 'enum',
      editorParams: {
        enumValues: ['Accessories', 'Displays', 'Audio', 'Storage']
      }
    }, {
      id: 'price',
      header: 'Price',
      accessor: 'price',
      width: 120,
      align: 'right',
      editable: true,
      editorType: 'number',
      cell: value => \`$\${(value as number).toFixed(2)}\`
    }, {
      id: 'inStock',
      header: 'In Stock',
      accessor: 'inStock',
      width: 100,
      align: 'center',
      editable: true,
      editorType: 'boolean'
    }, {
      id: 'releaseDate',
      header: 'Release Date',
      accessor: 'releaseDate',
      width: 160,
      editable: true,
      editorType: 'date'
    }];
    const handleCellValueChange = useCallback((row: EditableProduct, columnId: string, newValue: unknown) => {
      setData(prev => prev.map(r => {
        if (r.id !== row.id) return r;
        if (columnId === 'price') return {
          ...r,
          price: Number(newValue)
        };
        return {
          ...r,
          [columnId]: newValue
        };
      }));
    }, []);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          All editor types: text (Name), enum (Category), number (Price), boolean (In Stock), date
          (Release Date). Boolean toggles inline. Others open on double-click.
        </p>
        <Table data={data} columns={columns} onCellValueChange={handleCellValueChange} />
      </div>;
  }
}`,...E.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(editableData);
    const columns: ColumnDef<EditableProduct>[] = [{
      id: 'id',
      header: 'ID',
      accessor: 'id',
      width: 60
    }, {
      id: 'name',
      header: 'Name',
      accessor: 'name',
      width: 200,
      editable: true,
      editorType: 'text'
    }, {
      id: 'category',
      header: 'Category',
      accessor: 'category',
      width: 140
    }, {
      id: 'price',
      header: 'Price',
      accessor: 'price',
      width: 120,
      align: 'right',
      editable: true,
      editorType: 'number',
      cell: value => \`$\${(value as number).toFixed(2)}\`
    }];
    const handleCellValueChange = useCallback((row: EditableProduct, columnId: string, newValue: unknown) => {
      setData(prev => prev.map(r => r.id === row.id ? {
        ...r,
        [columnId]: columnId === 'price' ? Number(newValue) : newValue
      } : r));
    }, []);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Single click to enter edit mode (editTrigger="click").
        </p>
        <Table data={data} columns={columns} onCellValueChange={handleCellValueChange} editTrigger="click" />
      </div>;
  }
}`,...N.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(editableData);
    const columns: ColumnDef<EditableProduct>[] = [{
      id: 'id',
      header: 'ID',
      accessor: 'id',
      width: 60
    }, {
      id: 'name',
      header: 'Name',
      accessor: 'name',
      width: 200,
      editable: true,
      editorType: 'text'
    }, {
      id: 'category',
      header: 'Category',
      accessor: 'category',
      width: 140
    }, {
      id: 'price',
      header: 'Price',
      accessor: 'price',
      width: 120,
      align: 'right',
      editable: row => row.inStock,
      editorType: 'number',
      cell: value => \`$\${(value as number).toFixed(2)}\`
    }, {
      id: 'inStock',
      header: 'In Stock',
      accessor: 'inStock',
      width: 100,
      align: 'center',
      cell: value => value as boolean ? 'Yes' : 'No'
    }];
    const handleCellValueChange = useCallback((row: EditableProduct, columnId: string, newValue: unknown) => {
      setData(prev => prev.map(r => r.id === row.id ? {
        ...r,
        [columnId]: columnId === 'price' ? Number(newValue) : newValue
      } : r));
    }, []);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Price is only editable when "In Stock" is Yes. Out-of-stock rows have read-only prices.
        </p>
        <Table data={data} columns={columns} onCellValueChange={handleCellValueChange} />
      </div>;
  }
}`,...P.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(editableData);
    const columns: ColumnDef<EditableProduct>[] = [{
      id: 'id',
      header: 'ID',
      accessor: 'id',
      width: 60
    }, {
      id: 'name',
      header: 'Name',
      accessor: 'name',
      width: 200,
      editable: true,
      editorType: 'text',
      validateCell: value => {
        const str = String(value).trim();
        if (str.length === 0) return 'Name is required';
        if (str.length < 2) return 'Name must be at least 2 characters';
        return null;
      }
    }, {
      id: 'category',
      header: 'Category',
      accessor: 'category',
      width: 140
    }, {
      id: 'price',
      header: 'Price',
      accessor: 'price',
      width: 120,
      align: 'right',
      editable: true,
      editorType: 'number',
      cell: value => \`$\${(value as number).toFixed(2)}\`,
      validateCell: value => {
        const num = Number(value);
        if (isNaN(num)) return 'Must be a number';
        if (num <= 0) return 'Price must be positive';
        if (num > 10000) return 'Price cannot exceed $10,000';
        return null;
      }
    }];
    const handleCellValueChange = useCallback((row: EditableProduct, columnId: string, newValue: unknown) => {
      setData(prev => prev.map(r => r.id === row.id ? {
        ...r,
        [columnId]: columnId === 'price' ? Number(newValue) : newValue
      } : r));
    }, []);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Name: required, min 2 chars. Price: must be positive, max $10,000. Invalid values show an
          error and remain in edit mode. Press Escape to revert.
        </p>
        <Table data={data} columns={columns} onCellValueChange={handleCellValueChange} />
      </div>;
  }
}`,...z.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(editableData);
    const columns: ColumnDef<EditableProduct>[] = [{
      id: 'id',
      header: 'ID',
      accessor: 'id',
      width: 60
    }, {
      id: 'name',
      header: 'Name',
      accessor: 'name',
      width: 200,
      editable: true,
      editorType: 'text',
      showCellIcon: true
    }, {
      id: 'category',
      header: 'Category',
      accessor: 'category',
      width: 160,
      editable: true,
      editorType: 'enum',
      showCellIcon: true,
      editorParams: {
        enumValues: ['Accessories', 'Displays', 'Audio', 'Storage']
      }
    }, {
      id: 'price',
      header: 'Price',
      accessor: 'price',
      width: 120,
      align: 'right',
      editable: true,
      editorType: 'number',
      showCellIcon: true,
      cell: value => \`$\${(value as number).toFixed(2)}\`
    }, {
      id: 'inStock',
      header: 'In Stock',
      accessor: 'inStock',
      width: 100,
      align: 'center',
      editable: true,
      editorType: 'boolean'
    }, {
      id: 'releaseDate',
      header: 'Release Date',
      accessor: 'releaseDate',
      width: 160,
      editable: true,
      editorType: 'date',
      showCellIcon: true
    }];
    const handleCellValueChange = useCallback((row: EditableProduct, columnId: string, newValue: unknown) => {
      setData(prev => prev.map(r => {
        if (r.id !== row.id) return r;
        if (columnId === 'price') return {
          ...r,
          price: Number(newValue)
        };
        return {
          ...r,
          [columnId]: newValue
        };
      }));
    }, []);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Per-column showCellIcon: Name, Category, Price, Release Date always show Edit icon. ID has
          no icon. In Stock uses inline toggle (boolean). Click icon or cell to edit. Reset icon
          appears in edit mode.
        </p>
        <Table data={data} columns={columns} onCellValueChange={handleCellValueChange} editTrigger="click" />
      </div>;
  }
}`,...$.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(editableData);
    const columns: ColumnDef<EditableProduct>[] = [{
      id: 'id',
      header: 'ID',
      accessor: 'id',
      width: 60
    }, {
      id: 'name',
      header: 'Name',
      accessor: 'name',
      width: 200,
      editable: true,
      editorType: 'text',
      showCellIcon: true
    }, {
      id: 'category',
      header: 'Category',
      accessor: 'category',
      width: 140,
      showCellIcon: true
    }, {
      id: 'price',
      header: 'Price',
      accessor: 'price',
      width: 120,
      align: 'right',
      editable: row => row.inStock,
      editorType: 'number',
      showCellIcon: true,
      cell: value => \`$\${(value as number).toFixed(2)}\`
    }, {
      id: 'inStock',
      header: 'In Stock',
      accessor: 'inStock',
      width: 100,
      align: 'center',
      cell: value => value as boolean ? 'Yes' : 'No'
    }];
    const handleCellValueChange = useCallback((row: EditableProduct, columnId: string, newValue: unknown) => {
      setData(prev => prev.map(r => r.id === row.id ? {
        ...r,
        [columnId]: columnId === 'price' ? Number(newValue) : newValue
      } : r));
    }, []);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Conditional editing + per-column showCellIcon: Price shows Edit icon when "In Stock" is
          Yes, Lock icon when No. Name always shows Edit icon. Category shows Lock icon (not
          editable). ID and In Stock have no icon.
        </p>
        <Table data={data} columns={columns} onCellValueChange={handleCellValueChange} editTrigger="click" />
      </div>;
  }
}`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(editableData);
    const columns: ColumnDef<EditableProduct>[] = [{
      id: 'id',
      header: 'ID',
      accessor: 'id',
      width: 60
    }, {
      id: 'name',
      header: 'Name',
      accessor: 'name',
      width: 180,
      editable: true,
      editorType: 'text',
      showCellIcon: true
    }, {
      id: 'category',
      header: 'Category',
      accessor: 'category',
      width: 160,
      editable: true,
      editorType: 'enum',
      showCellIcon: true,
      editorParams: {
        enumValues: ['Accessories', 'Displays', 'Audio', 'Storage']
      }
    }, {
      id: 'price',
      header: 'Price',
      accessor: 'price',
      width: 120,
      align: 'right',
      editable: true,
      editorType: 'number',
      showCellIcon: true,
      cell: value => \`$\${(value as number).toFixed(2)}\`
    }, {
      id: 'releaseDate',
      header: 'Release Date',
      accessor: 'releaseDate',
      width: 160,
      editable: true,
      editorType: 'date',
      showCellIcon: true
    }];
    const handleCellValueChange = useCallback((row: EditableProduct, columnId: string, newValue: unknown) => {
      setData(prev => prev.map(r => {
        if (r.id !== row.id) return r;
        if (columnId === 'price') return {
          ...r,
          price: Number(newValue)
        };
        return {
          ...r,
          [columnId]: newValue
        };
      }));
    }, []);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Click-outside detection: Click a cell to edit, then click outside the cell to commit.
          Portal-based editors (Category dropdown, Release Date calendar) stay open when clicking
          inside their popups. Clicking outside both the cell and popup commits the value.
        </p>
        <Table data={data} columns={columns} onCellValueChange={handleCellValueChange} editTrigger="click" />
        <div style={{
        marginTop: '2rem',
        padding: '1rem',
        background: '#f1f5f9',
        borderRadius: '8px'
      }}>
          <p style={{
          color: '#475569'
        }}>
            Click here (outside the table) while editing to test click-outside commit.
          </p>
        </div>
      </div>;
  }
}`,...A.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(editableData);
    const columns: ColumnDef<EditableProduct>[] = [{
      id: 'id',
      header: 'ID',
      accessor: 'id',
      width: 60
    }, {
      id: 'name',
      header: 'Name',
      accessor: 'name',
      width: 200,
      editable: true,
      editorType: 'text'
    }, {
      id: 'category',
      header: 'Category',
      accessor: 'category',
      width: 140
    }, {
      id: 'price',
      header: 'Price',
      accessor: 'price',
      width: 200,
      align: 'right',
      editable: true,
      cell: value => \`$\${(value as number).toFixed(2)}\`,
      renderEditCell: (value, _row, _rowIndex, api: CellEditApi) => {
        const [localVal, setLocalVal] = React.useState(String(value ?? ''));
        return <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0 0.25rem'
        }}>
              <span>$</span>
              <Input value={localVal} onValueChange={setLocalVal} size="sm" type="number" style={{
            flex: 1
          }} />
              <button style={{
            padding: '0.125rem 0.5rem',
            fontSize: '0.75rem',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            background: 'white',
            cursor: 'pointer'
          }} onClick={() => api.commit(Number(localVal))}>
                OK
              </button>
              <button style={{
            padding: '0.125rem 0.5rem',
            fontSize: '0.75rem',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            background: 'white',
            cursor: 'pointer'
          }} onClick={() => api.cancel()}>
                Cancel
              </button>
            </div>;
      }
    }];
    const handleCellValueChange = useCallback((row: EditableProduct, columnId: string, newValue: unknown) => {
      setData(prev => prev.map(r => r.id === row.id ? {
        ...r,
        [columnId]: columnId === 'price' ? Number(newValue) : newValue
      } : r));
    }, []);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Price column uses a custom editor via renderEditCell with explicit OK/Cancel buttons.
        </p>
        <Table data={data} columns={columns} onCellValueChange={handleCellValueChange} />
      </div>;
  }
}`,...F.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Header Click (Inspector pattern)',
  render: () => {
    const [lastClicked, setLastClicked] = useState<string | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <p style={{
        color: '#666',
        fontSize: '0.875rem'
      }}>
          컬럼 헤더를 클릭하면 <code>onHeaderClick</code>이 호출됩니다. Inspector 패턴(헤더 클릭 →
          설정 패널 전환)에서 사용됩니다.
        </p>
        <div style={{
        padding: '0.5rem 0.75rem',
        background: lastClicked ? '#eff6ff' : '#f9fafb',
        border: \`1px solid \${lastClicked ? '#bfdbfe' : '#e5e7eb'}\`,
        borderRadius: 6,
        fontSize: '0.875rem',
        color: lastClicked ? '#1d4ed8' : '#9ca3af',
        minHeight: 36,
        display: 'flex',
        alignItems: 'center'
      }}>
          {lastClicked ? \`onHeaderClick("\${lastClicked}") 호출됨\` : '헤더를 클릭해보세요'}
        </div>
        <Table data={sampleData} columns={basicColumns} onHeaderClick={columnId => setLastClicked(columnId)} />
      </div>;
  }
}`,...H.parameters?.docs?.source}}};const ce=["Playground","AllStates","Sizes","ColumnResize","Sorting","ColumnReorder","RowReorder","CustomCellRenderer","Ellipsis","AllFeatures","CellEditBasic","CellEditAllTypes","CellEditClickTrigger","CellEditConditional","CellEditValidation","CellEditWithIcons","CellEditConditionalWithIcons","CellEditClickOutside","CellEditCustomEditor","WithHeaderClick"];export{V as AllFeatures,v as AllStates,E as CellEditAllTypes,R as CellEditBasic,A as CellEditClickOutside,N as CellEditClickTrigger,P as CellEditConditional,B as CellEditConditionalWithIcons,F as CellEditCustomEditor,z as CellEditValidation,$ as CellEditWithIcons,k as ColumnReorder,S as ColumnResize,j as CustomCellRenderer,T as Ellipsis,x as Playground,I as RowReorder,D as Sizes,f as Sorting,H as WithHeaderClick,ce as __namedExportsOrder,de as default};
