import{j as e,r as l}from"./iframe-YdnAYsPN.js";import{C as s}from"./ContextMenu-CVgoTtl1.js";import{T as i}from"./Code-jE2BtpQK.js";import{s as C,a as v}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-PyyeKIV_.js";import"./index-DVLD4hVV.js";import"./use-popup-close-BHGKtUoJ.js";const R={title:"Components/ContextMenu",component:s,tags:["autodocs"]},g=[{label:"Insert above",onClick:()=>console.log("Insert above")},{label:"Insert below",onClick:()=>console.log("Insert below")},{label:"Delete",variant:"danger",dividerBefore:!0,onClick:()=>console.log("Delete")}],a={render:()=>{const[n,t]=l.useState(null);return e.jsxs("div",{onContextMenu:r=>{r.preventDefault(),t({x:r.clientX,y:r.clientY})},style:{width:"100%",height:"400px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px dashed var(--color-border-subtle)",borderRadius:"8px",margin:"2rem"},children:[e.jsx(i,{color:"muted",as:"span",children:"Right-click anywhere in this area"}),e.jsx(s,{position:n,items:g,onClose:()=>t(null)})]})}},d={render:()=>{const[n,t]=l.useState(null),r=[{label:"Edit",onClick:()=>{}},{label:"Duplicate",onClick:()=>{}},{label:"Move up",dividerBefore:!0,onClick:()=>{}},{label:"Move down",onClick:()=>{}},{label:"Delete",variant:"danger",dividerBefore:!0,onClick:()=>{}}];return e.jsxs("div",{onContextMenu:o=>{o.preventDefault(),t({x:o.clientX,y:o.clientY})},style:{width:"100%",height:"300px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px dashed var(--color-border-subtle)",borderRadius:"8px",margin:"2rem"},children:[e.jsx(i,{color:"muted",as:"span",children:"Right-click for extended menu"}),e.jsx(s,{position:n,items:r,onClose:()=>t(null)})]})}},c={render:()=>{const[n,t]=l.useState(null),r=[{label:"Copy",onClick:()=>{}},{label:"Paste",onClick:()=>{},disabled:!0},{label:"Cut",onClick:()=>{},disabled:!0},{label:"Delete",variant:"danger",dividerBefore:!0,onClick:()=>{}}];return e.jsxs("div",{onContextMenu:o=>{o.preventDefault(),t({x:o.clientX,y:o.clientY})},style:{width:"100%",height:"300px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px dashed var(--color-border-subtle)",borderRadius:"8px",margin:"2rem"},children:[e.jsx(i,{color:"muted",as:"span",children:"Right-click (some items disabled)"}),e.jsx(s,{position:n,items:r,onClose:()=>t(null)})]})}},u={render:()=>{const n=[{label:"Default item",onClick:()=>{}},{label:"Another item",onClick:()=>{}},{label:"Disabled item",onClick:()=>{},disabled:!0},{label:"Danger item",onClick:()=>{},variant:"danger",dividerBefore:!0}];return e.jsxs("div",{style:C,children:[e.jsx("h4",{style:v,children:"Item variants (static)"}),e.jsx("div",{style:{position:"relative",width:220,height:180},children:e.jsx(s,{position:{x:0,y:0},items:n,onClose:()=>{}})})]})}},m={render:()=>{const[n,t]=l.useState(null),[r,o]=l.useState(0),x=["Alice","Bob","Charlie","Diana"];return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{style:{padding:"0.5rem",textAlign:"left",borderBottom:"1px solid var(--color-border-default)"},children:e.jsx(i,{size:"sm",weight:"semibold",as:"span",children:"Name"})})})}),e.jsx("tbody",{children:x.map((h,b)=>e.jsx("tr",{onContextMenu:p=>{p.preventDefault(),o(b),t({x:p.clientX,y:p.clientY})},style:{cursor:"context-menu",borderBottom:"1px solid var(--color-border-subtle)"},children:e.jsx("td",{style:{padding:"0.5rem"},children:e.jsx(i,{size:"sm",as:"span",children:h})})},b))})]}),e.jsx(s,{position:n,items:[{label:`Insert above row ${r+1}`,onClick:()=>{}},{label:`Insert below row ${r+1}`,onClick:()=>{}},{label:"Delete row",variant:"danger",dividerBefore:!0,onClick:()=>{}}],onClose:()=>t(null)})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pos, setPos] = useState<{
      x: number;
      y: number;
    } | null>(null);
    return <div onContextMenu={e => {
      e.preventDefault();
      setPos({
        x: e.clientX,
        y: e.clientY
      });
    }} style={{
      width: '100%',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px dashed var(--color-border-subtle)',
      borderRadius: '8px',
      margin: '2rem'
    }}>
        <Text color="muted" as="span">Right-click anywhere in this area</Text>
        <ContextMenu position={pos} items={baseItems} onClose={() => setPos(null)} />
      </div>;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pos, setPos] = useState<{
      x: number;
      y: number;
    } | null>(null);
    const items: ContextMenuItem[] = [{
      label: 'Edit',
      onClick: () => {}
    }, {
      label: 'Duplicate',
      onClick: () => {}
    }, {
      label: 'Move up',
      dividerBefore: true,
      onClick: () => {}
    }, {
      label: 'Move down',
      onClick: () => {}
    }, {
      label: 'Delete',
      variant: 'danger',
      dividerBefore: true,
      onClick: () => {}
    }];
    return <div onContextMenu={e => {
      e.preventDefault();
      setPos({
        x: e.clientX,
        y: e.clientY
      });
    }} style={{
      width: '100%',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px dashed var(--color-border-subtle)',
      borderRadius: '8px',
      margin: '2rem'
    }}>
        <Text color="muted" as="span">Right-click for extended menu</Text>
        <ContextMenu position={pos} items={items} onClose={() => setPos(null)} />
      </div>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pos, setPos] = useState<{
      x: number;
      y: number;
    } | null>(null);
    const items: ContextMenuItem[] = [{
      label: 'Copy',
      onClick: () => {}
    }, {
      label: 'Paste',
      onClick: () => {},
      disabled: true
    }, {
      label: 'Cut',
      onClick: () => {},
      disabled: true
    }, {
      label: 'Delete',
      variant: 'danger',
      dividerBefore: true,
      onClick: () => {}
    }];
    return <div onContextMenu={e => {
      e.preventDefault();
      setPos({
        x: e.clientX,
        y: e.clientY
      });
    }} style={{
      width: '100%',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px dashed var(--color-border-subtle)',
      borderRadius: '8px',
      margin: '2rem'
    }}>
        <Text color="muted" as="span">Right-click (some items disabled)</Text>
        <ContextMenu position={pos} items={items} onClose={() => setPos(null)} />
      </div>;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items: ContextMenuItem[] = [{
      label: 'Default item',
      onClick: () => {}
    }, {
      label: 'Another item',
      onClick: () => {}
    }, {
      label: 'Disabled item',
      onClick: () => {},
      disabled: true
    }, {
      label: 'Danger item',
      onClick: () => {},
      variant: 'danger',
      dividerBefore: true
    }];
    return <div style={section}>
        <h4 style={sectionTitle}>Item variants (static)</h4>
        <div style={{
        position: 'relative',
        width: 220,
        height: 180
      }}>
          <ContextMenu position={{
          x: 0,
          y: 0
        }} items={items} onClose={() => {}} />
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pos, setPos] = useState<{
      x: number;
      y: number;
    } | null>(null);
    const [targetRow, setTargetRow] = useState(0);
    const rows = ['Alice', 'Bob', 'Charlie', 'Diana'];
    return <div style={{
      padding: '2rem'
    }}>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
          <thead>
            <tr>
              <th style={{
              padding: '0.5rem',
              textAlign: 'left',
              borderBottom: '1px solid var(--color-border-default)'
            }}>
                <Text size="sm" weight="semibold" as="span">Name</Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((name, i) => <tr key={i} onContextMenu={e => {
            e.preventDefault();
            setTargetRow(i);
            setPos({
              x: e.clientX,
              y: e.clientY
            });
          }} style={{
            cursor: 'context-menu',
            borderBottom: '1px solid var(--color-border-subtle)'
          }}>
                <td style={{
              padding: '0.5rem'
            }}>
                  <Text size="sm" as="span">{name}</Text>
                </td>
              </tr>)}
          </tbody>
        </table>
        <ContextMenu position={pos} items={[{
        label: \`Insert above row \${targetRow + 1}\`,
        onClick: () => {}
      }, {
        label: \`Insert below row \${targetRow + 1}\`,
        onClick: () => {}
      }, {
        label: 'Delete row',
        variant: 'danger',
        dividerBefore: true,
        onClick: () => {}
      }]} onClose={() => setPos(null)} />
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const P=["Playground","WithDividerAndDanger","WithDisabledItems","AllStates","TableRowExample"];export{u as AllStates,a as Playground,m as TableRowExample,c as WithDisabledItems,d as WithDividerAndDanger,P as __namedExportsOrder,R as default};
