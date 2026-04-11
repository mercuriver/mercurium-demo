import{r as c,j as e,R as H}from"./iframe-omubX4Zv.js";import{T as u}from"./Table-CZm2D8xD.js";import{I as L}from"./Input-P1vZQf2m.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BpsFKmMS.js";import"./use-interaction-state-Dtf1cT8c.js";import"./index-ZcSIculg.js";import"./Tooltip-PvwIEMNF.js";import"./index-CtU5-7b1.js";import"./index-BT36lJMY.js";import"./use-popup-close-BqcHjELS.js";import"./Switch-5uQTJXYB.js";import"./use-toggle-Ngt-NwjI.js";import"./Select-Brt6Gua2.js";import"./FormField-BRlJ3vLQ.js";import"./DateTimePicker-Sutiksy9.js";import"./Button-DG6WR4JD.js";const m=[{id:1,name:"Kim Minjun",department:"Engineering",role:"Senior Developer",email:"minjun@example.com",salary:85e3,joinDate:"2021-03-15"},{id:2,name:"Lee Soyeon",department:"Design",role:"Lead Designer",email:"soyeon@example.com",salary:78e3,joinDate:"2020-07-22"},{id:3,name:"Park Jiwoo",department:"Engineering",role:"Frontend Developer",email:"jiwoo@example.com",salary:72e3,joinDate:"2022-01-10"},{id:4,name:"Choi Yeji",department:"Product",role:"Product Manager",email:"yeji@example.com",salary:9e4,joinDate:"2019-11-05"},{id:5,name:"Jung Hyunwoo",department:"Engineering",role:"Backend Developer",email:"hyunwoo@example.com",salary:8e4,joinDate:"2021-08-30"},{id:6,name:"Kang Seoyun",department:"Marketing",role:"Marketing Lead",email:"seoyun@example.com",salary:75e3,joinDate:"2020-04-18"},{id:7,name:"Yoon Dohyun",department:"Engineering",role:"DevOps Engineer",email:"dohyun@example.com",salary:82e3,joinDate:"2022-06-01"},{id:8,name:"Shin Minji",department:"HR",role:"HR Manager",email:"minji@example.com",salary:7e4,joinDate:"2018-09-12"}],C=[{id:"name",header:"Name",accessor:"name",width:180},{id:"department",header:"Department",accessor:"department",width:140},{id:"role",header:"Role",accessor:"role",width:200},{id:"email",header:"Email",accessor:"email",width:220},{id:"salary",header:"Salary",accessor:"salary",width:120,align:"right",cell:o=>`$${o.toLocaleString()}`},{id:"joinDate",header:"Join Date",accessor:"joinDate",width:130}],te={title:"Components/Table",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size of the table cells",defaultValue:"md"},resizable:{control:"boolean",description:"Enable column resizing by dragging header borders"},reorderable:{control:"boolean",description:"Enable column reordering by dragging headers"},autoFit:{control:"boolean",description:"Auto-fit columns to container width"},rowReorderable:{control:"boolean",description:"Enable row reordering via drag handle"},ellipsis:{control:"boolean",description:"Enable text truncation with tooltip on hover"},data:{control:!1},columns:{control:!1},sort:{control:!1},onSortChange:{control:!1},onRowReorder:{control:!1},columnOrder:{control:!1},onColumnOrderChange:{control:!1},columnWidths:{control:!1},onColumnWidthsChange:{control:!1}}},w={args:{data:m,columns:C}},x={render:()=>{const o=[{id:"name",header:"Name",accessor:"name"},{id:"department",header:"Department",accessor:"department"},{id:"role",header:"Role",accessor:"role"}],l=m.slice(0,3);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"0.5rem"},children:"Small"}),e.jsx(u,{data:l,columns:o,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"0.5rem"},children:"Medium (default)"}),e.jsx(u,{data:l,columns:o,size:"md"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"0.5rem"},children:"Large"}),e.jsx(u,{data:l,columns:o,size:"lg"})]})]})}},D={render:()=>e.jsx(u,{data:m,columns:C,resizable:!0})},v={render:()=>{const[o,l]=c.useState(null),[s,d]=c.useState(m),n=C.map(a=>({...a,sortable:a.id!=="email"})),t=c.useCallback(a=>{if(l(a),!a){d(m);return}const i=[...m].sort((r,g)=>{const p=r[a.columnId],b=g[a.columnId],y=p<b?-1:p>b?1:0;return a.direction==="asc"?y:-y});d(i)},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Click column headers to sort (Name, Department, Role, Salary, Join Date). Email column is not sortable."}),e.jsx(u,{data:s,columns:n,sort:o,onSortChange:t})]})}},S={render:()=>e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Drag column headers to reorder them."}),e.jsx(u,{data:m,columns:C,reorderable:!0})]})},k={render:()=>{const[o,l]=c.useState(m),s=c.useCallback((d,n)=>{l(t=>{const a=[...t],[i]=a.splice(d,1);return a.splice(n,0,i),a})},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Drag the handle on the left to reorder rows."}),e.jsx(u,{data:o,columns:C,rowReorderable:!0,onRowReorder:s})]})}},f={render:()=>{const o=[{id:"name",header:"Name",accessor:"name",width:200,cell:l=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"#e2e8f0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:600,color:"#475569",flexShrink:0},children:l.charAt(0)}),e.jsx("span",{style:{fontWeight:500},children:l})]})},{id:"department",header:"Department",accessor:"department",width:140},{id:"role",header:"Role",accessor:"role",width:200},{id:"salary",header:"Salary",accessor:"salary",width:150,align:"right",cell:l=>{const s=l,d=s>=85e3?"high":s>=75e3?"mid":"low",n={high:"#16a34a",mid:"#ca8a04",low:"#dc2626"};return e.jsxs("span",{style:{color:n[d],fontWeight:500},children:["$",s.toLocaleString()]})}},{id:"actions",header:"Actions",accessor:"id",width:120,align:"center",ellipsis:!1,cell:()=>e.jsxs("div",{style:{display:"flex",gap:"0.25rem",justifyContent:"center"},children:[e.jsx("button",{style:{padding:"0.25rem 0.5rem",fontSize:"0.75rem",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},children:"Edit"}),e.jsx("button",{style:{padding:"0.25rem 0.5rem",fontSize:"0.75rem",border:"1px solid #fecaca",borderRadius:"4px",background:"#fef2f2",color:"#dc2626",cursor:"pointer"},children:"Delete"})]})}];return e.jsx(u,{data:m,columns:o})}},I={render:()=>{const o=m.map(s=>({...s,role:`${s.role} - This is a very long role description that should be truncated with ellipsis`,email:`very.long.email.address.that.should.be.truncated.${s.email}`})),l=[{id:"name",header:"Name",accessor:"name",width:120},{id:"role",header:"Role",accessor:"role",width:150},{id:"email",header:"Email",accessor:"email",width:150}];return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Hover over truncated cells to see the full content in a tooltip."}),e.jsx(u,{data:o,columns:l,autoFit:!1})]})}},V={render:()=>{const[o,l]=c.useState(null),[s,d]=c.useState(m),n=C.map(i=>({...i,sortable:!0})),t=c.useCallback(i=>{if(l(i),!i){d(m);return}const r=[...m].sort((g,p)=>{const b=g[i.columnId],y=p[i.columnId],F=b<y?-1:b>y?1:0;return i.direction==="asc"?F:-F});d(r)},[]),a=c.useCallback((i,r)=>{d(g=>{const p=[...g],[b]=p.splice(i,1);return p.splice(r,0,b),p})},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"All features enabled: Resize columns | Reorder columns | Sort | Row drag | Ellipsis + Tooltip"}),e.jsx(u,{data:s,columns:n,resizable:!0,reorderable:!0,rowReorderable:!0,sort:o,onSortChange:t,onRowReorder:a})]})}},h=[{id:1,name:"Wireless Mouse",category:"Accessories",price:29.99,inStock:!0,releaseDate:"2024-01-15"},{id:2,name:"Mechanical Keyboard",category:"Accessories",price:89.99,inStock:!0,releaseDate:"2023-11-20"},{id:3,name:"USB-C Hub",category:"Accessories",price:45,inStock:!1,releaseDate:"2024-03-01"},{id:4,name:'27" Monitor',category:"Displays",price:349.99,inStock:!0,releaseDate:"2024-06-10"},{id:5,name:"Webcam HD",category:"Accessories",price:59.99,inStock:!1,releaseDate:"2023-08-05"}],j={render:()=>{const[o,l]=c.useState(h),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:200,editable:!0,editorType:"text"},{id:"category",header:"Category",accessor:"category",width:140},{id:"price",header:"Price",accessor:"price",width:120,align:"right",editable:!0,editorType:"number",cell:n=>`$${n.toFixed(2)}`},{id:"releaseDate",header:"Release Date",accessor:"releaseDate",width:140}],d=c.useCallback((n,t,a)=>{l(i=>i.map(r=>r.id===n.id?{...r,[t]:t==="price"?Number(a):a}:r))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Double-click Name or Price cells to edit. Press Enter to commit, Escape to cancel."}),e.jsx(u,{data:o,columns:s,onCellValueChange:d})]})}},T={render:()=>{const[o,l]=c.useState(h),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:180,editable:!0,editorType:"text"},{id:"category",header:"Category",accessor:"category",width:160,editable:!0,editorType:"enum",editorParams:{enumValues:["Accessories","Displays","Audio","Storage"]}},{id:"price",header:"Price",accessor:"price",width:120,align:"right",editable:!0,editorType:"number",cell:n=>`$${n.toFixed(2)}`},{id:"inStock",header:"In Stock",accessor:"inStock",width:100,align:"center",editable:!0,editorType:"boolean"},{id:"releaseDate",header:"Release Date",accessor:"releaseDate",width:160,editable:!0,editorType:"date"}],d=c.useCallback((n,t,a)=>{l(i=>i.map(r=>r.id!==n.id?r:t==="price"?{...r,price:Number(a)}:{...r,[t]:a}))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"All editor types: text (Name), enum (Category), number (Price), boolean (In Stock), date (Release Date). Boolean toggles inline. Others open on double-click."}),e.jsx(u,{data:o,columns:s,onCellValueChange:d})]})}},R={render:()=>{const[o,l]=c.useState(h),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:200,editable:!0,editorType:"text"},{id:"category",header:"Category",accessor:"category",width:140},{id:"price",header:"Price",accessor:"price",width:120,align:"right",editable:!0,editorType:"number",cell:n=>`$${n.toFixed(2)}`}],d=c.useCallback((n,t,a)=>{l(i=>i.map(r=>r.id===n.id?{...r,[t]:t==="price"?Number(a):a}:r))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:'Single click to enter edit mode (editTrigger="click").'}),e.jsx(u,{data:o,columns:s,onCellValueChange:d,editTrigger:"click"})]})}},E={render:()=>{const[o,l]=c.useState(h),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:200,editable:!0,editorType:"text"},{id:"category",header:"Category",accessor:"category",width:140},{id:"price",header:"Price",accessor:"price",width:120,align:"right",editable:n=>n.inStock,editorType:"number",cell:n=>`$${n.toFixed(2)}`},{id:"inStock",header:"In Stock",accessor:"inStock",width:100,align:"center",cell:n=>n?"Yes":"No"}],d=c.useCallback((n,t,a)=>{l(i=>i.map(r=>r.id===n.id?{...r,[t]:t==="price"?Number(a):a}:r))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:'Price is only editable when "In Stock" is Yes. Out-of-stock rows have read-only prices.'}),e.jsx(u,{data:o,columns:s,onCellValueChange:d})]})}},N={render:()=>{const[o,l]=c.useState(h),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:200,editable:!0,editorType:"text",validateCell:n=>{const t=String(n).trim();return t.length===0?"Name is required":t.length<2?"Name must be at least 2 characters":null}},{id:"category",header:"Category",accessor:"category",width:140},{id:"price",header:"Price",accessor:"price",width:120,align:"right",editable:!0,editorType:"number",cell:n=>`$${n.toFixed(2)}`,validateCell:n=>{const t=Number(n);return isNaN(t)?"Must be a number":t<=0?"Price must be positive":t>1e4?"Price cannot exceed $10,000":null}}],d=c.useCallback((n,t,a)=>{l(i=>i.map(r=>r.id===n.id?{...r,[t]:t==="price"?Number(a):a}:r))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Name: required, min 2 chars. Price: must be positive, max $10,000. Invalid values show an error and remain in edit mode. Press Escape to revert."}),e.jsx(u,{data:o,columns:s,onCellValueChange:d})]})}},P={render:()=>{const[o,l]=c.useState(h),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:200,editable:!0,editorType:"text",showCellIcon:!0},{id:"category",header:"Category",accessor:"category",width:160,editable:!0,editorType:"enum",showCellIcon:!0,editorParams:{enumValues:["Accessories","Displays","Audio","Storage"]}},{id:"price",header:"Price",accessor:"price",width:120,align:"right",editable:!0,editorType:"number",showCellIcon:!0,cell:n=>`$${n.toFixed(2)}`},{id:"inStock",header:"In Stock",accessor:"inStock",width:100,align:"center",editable:!0,editorType:"boolean"},{id:"releaseDate",header:"Release Date",accessor:"releaseDate",width:160,editable:!0,editorType:"date",showCellIcon:!0}],d=c.useCallback((n,t,a)=>{l(i=>i.map(r=>r.id!==n.id?r:t==="price"?{...r,price:Number(a)}:{...r,[t]:a}))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Per-column showCellIcon: Name, Category, Price, Release Date always show Edit icon. ID has no icon. In Stock uses inline toggle (boolean). Click icon or cell to edit. Reset icon appears in edit mode."}),e.jsx(u,{data:o,columns:s,onCellValueChange:d,editTrigger:"click"})]})}},$={render:()=>{const[o,l]=c.useState(h),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:200,editable:!0,editorType:"text",showCellIcon:!0},{id:"category",header:"Category",accessor:"category",width:140,showCellIcon:!0},{id:"price",header:"Price",accessor:"price",width:120,align:"right",editable:n=>n.inStock,editorType:"number",showCellIcon:!0,cell:n=>`$${n.toFixed(2)}`},{id:"inStock",header:"In Stock",accessor:"inStock",width:100,align:"center",cell:n=>n?"Yes":"No"}],d=c.useCallback((n,t,a)=>{l(i=>i.map(r=>r.id===n.id?{...r,[t]:t==="price"?Number(a):a}:r))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:'Conditional editing + per-column showCellIcon: Price shows Edit icon when "In Stock" is Yes, Lock icon when No. Name always shows Edit icon. Category shows Lock icon (not editable). ID and In Stock have no icon.'}),e.jsx(u,{data:o,columns:s,onCellValueChange:d,editTrigger:"click"})]})}},B={render:()=>{const[o,l]=c.useState(h),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:180,editable:!0,editorType:"text",showCellIcon:!0},{id:"category",header:"Category",accessor:"category",width:160,editable:!0,editorType:"enum",showCellIcon:!0,editorParams:{enumValues:["Accessories","Displays","Audio","Storage"]}},{id:"price",header:"Price",accessor:"price",width:120,align:"right",editable:!0,editorType:"number",showCellIcon:!0,cell:n=>`$${n.toFixed(2)}`},{id:"releaseDate",header:"Release Date",accessor:"releaseDate",width:160,editable:!0,editorType:"date",showCellIcon:!0}],d=c.useCallback((n,t,a)=>{l(i=>i.map(r=>r.id!==n.id?r:t==="price"?{...r,price:Number(a)}:{...r,[t]:a}))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Click-outside detection: Click a cell to edit, then click outside the cell to commit. Portal-based editors (Category dropdown, Release Date calendar) stay open when clicking inside their popups. Clicking outside both the cell and popup commits the value."}),e.jsx(u,{data:o,columns:s,onCellValueChange:d,editTrigger:"click"}),e.jsx("div",{style:{marginTop:"2rem",padding:"1rem",background:"#f1f5f9",borderRadius:"8px"},children:e.jsx("p",{style:{color:"#475569"},children:"Click here (outside the table) while editing to test click-outside commit."})})]})}},z={render:()=>{const[o,l]=c.useState(h),s=[{id:"id",header:"ID",accessor:"id",width:60},{id:"name",header:"Name",accessor:"name",width:200,editable:!0,editorType:"text"},{id:"category",header:"Category",accessor:"category",width:140},{id:"price",header:"Price",accessor:"price",width:200,align:"right",editable:!0,cell:n=>`$${n.toFixed(2)}`,renderEditCell:(n,t,a,i)=>{const[r,g]=H.useState(String(n??""));return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0 0.25rem"},children:[e.jsx("span",{children:"$"}),e.jsx(L,{value:r,onValueChange:g,size:"sm",type:"number",style:{flex:1}}),e.jsx("button",{style:{padding:"0.125rem 0.5rem",fontSize:"0.75rem",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>i.commit(Number(r)),children:"OK"}),e.jsx("button",{style:{padding:"0.125rem 0.5rem",fontSize:"0.75rem",border:"1px solid #d1d5db",borderRadius:"4px",background:"white",cursor:"pointer"},onClick:()=>i.cancel(),children:"Cancel"})]})}}],d=c.useCallback((n,t,a)=>{l(i=>i.map(r=>r.id===n.id?{...r,[t]:t==="price"?Number(a):a}:r))},[]);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#666"},children:"Price column uses a custom editor via renderEditCell with explicit OK/Cancel buttons."}),e.jsx(u,{data:o,columns:s,onCellValueChange:d})]})}},A={name:"Header Click (Inspector pattern)",render:()=>{const[o,l]=c.useState(null);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("p",{style:{color:"#666",fontSize:"0.875rem"},children:["컬럼 헤더를 클릭하면 ",e.jsx("code",{children:"onHeaderClick"}),"이 호출됩니다. Inspector 패턴(헤더 클릭 → 설정 패널 전환)에서 사용됩니다."]}),e.jsx("div",{style:{padding:"0.5rem 0.75rem",background:o?"#eff6ff":"#f9fafb",border:`1px solid ${o?"#bfdbfe":"#e5e7eb"}`,borderRadius:6,fontSize:"0.875rem",color:o?"#1d4ed8":"#9ca3af",minHeight:36,display:"flex",alignItems:"center"},children:o?`onHeaderClick("${o}") 호출됨`:"헤더를 클릭해보세요"}),e.jsx(u,{data:m,columns:C,onHeaderClick:s=>l(s)})]})}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: basicColumns
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table data={sampleData} columns={basicColumns} resizable />;
  }
}`,...D.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
        const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
        return newSort.direction === 'asc' ? cmp : -cmp;
      });
      setData(sorted);
    }, []);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Click column headers to sort (Name, Department, Role, Salary, Join Date).
          Email column is not sortable.
        </p>
        <Table data={data} columns={sortableColumns} sort={sort} onSortChange={handleSortChange} />
      </div>;
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#666'
      }}>
          Drag column headers to reorder them.
        </p>
        <Table data={sampleData} columns={basicColumns} reorderable />
      </div>;
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
        const level = salary >= 85000 ? 'high' : salary >= 75000 ? 'mid' : 'low';
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
}`,...f.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
        const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
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
          All features enabled: Resize columns | Reorder columns | Sort | Row drag | Ellipsis + Tooltip
        </p>
        <Table data={data} columns={allColumns} resizable reorderable rowReorderable sort={sort} onSortChange={handleSortChange} onRowReorder={handleRowReorder} />
      </div>;
  }
}`,...V.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
          All editor types: text (Name), enum (Category), number (Price), boolean (In Stock), date (Release Date).
          Boolean toggles inline. Others open on double-click.
        </p>
        <Table data={data} columns={columns} onCellValueChange={handleCellValueChange} />
      </div>;
  }
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
          Name: required, min 2 chars. Price: must be positive, max $10,000.
          Invalid values show an error and remain in edit mode. Press Escape to revert.
        </p>
        <Table data={data} columns={columns} onCellValueChange={handleCellValueChange} />
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
          Per-column showCellIcon: Name, Category, Price, Release Date always show Edit icon.
          ID has no icon. In Stock uses inline toggle (boolean).
          Click icon or cell to edit. Reset icon appears in edit mode.
        </p>
        <Table data={data} columns={columns} onCellValueChange={handleCellValueChange} editTrigger="click" />
      </div>;
  }
}`,...P.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
          Conditional editing + per-column showCellIcon: Price shows Edit icon when "In Stock" is Yes, Lock icon when No.
          Name always shows Edit icon. Category shows Lock icon (not editable). ID and In Stock have no icon.
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
          Portal-based editors (Category dropdown, Release Date calendar) stay open when clicking inside their popups.
          Clicking outside both the cell and popup commits the value.
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
        }}>Click here (outside the table) while editing to test click-outside commit.</p>
        </div>
      </div>;
  }
}`,...B.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
          컬럼 헤더를 클릭하면 <code>onHeaderClick</code>이 호출됩니다.
          Inspector 패턴(헤더 클릭 → 설정 패널 전환)에서 사용됩니다.
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
}`,...A.parameters?.docs?.source}}};const oe=["Playground","Sizes","ColumnResize","Sorting","ColumnReorder","RowReorder","CustomCellRenderer","Ellipsis","AllFeatures","CellEditBasic","CellEditAllTypes","CellEditClickTrigger","CellEditConditional","CellEditValidation","CellEditWithIcons","CellEditConditionalWithIcons","CellEditClickOutside","CellEditCustomEditor","WithHeaderClick"];export{V as AllFeatures,T as CellEditAllTypes,j as CellEditBasic,B as CellEditClickOutside,R as CellEditClickTrigger,E as CellEditConditional,$ as CellEditConditionalWithIcons,z as CellEditCustomEditor,N as CellEditValidation,P as CellEditWithIcons,S as ColumnReorder,D as ColumnResize,f as CustomCellRenderer,I as Ellipsis,w as Playground,k as RowReorder,x as Sizes,v as Sorting,A as WithHeaderClick,oe as __namedExportsOrder,te as default};
