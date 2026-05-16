import{j as e,r as l}from"./iframe-D_UqZR7W.js";import{M as r}from"./Modal-B1JAtpYN.js";import{B as o}from"./Button-CBruKpfj.js";import{T as n}from"./Code-DLJBmAQS.js";import{I as x}from"./Input-DkNwG_0p.js";import{s as f,a as C,r as y,c as g}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ro6x8qtj.js";import"./index-CpVhW8Ac.js";import"./index-B7-q4xBT.js";import"./use-machine-CWPs25si.js";import"./use-interaction-state-DyPcSzQt.js";import"./FormField-BO42hA47.js";const R={title:"Components/Modal",component:r,tags:["autodocs"]};function S(){const[t,s]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>s(!0),children:"Open Modal"}),e.jsxs(r,{open:t,onOpenChange:s,children:[e.jsx(r.Header,{onClose:()=>s(!1),children:"Confirmation"}),e.jsx(r.Body,{children:e.jsx(n,{children:"Are you sure you want to proceed with this action?"})}),e.jsxs(r.Footer,{children:[e.jsx(o,{shape:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(o,{onClick:()=>s(!1),children:"Confirm"})]})]})]})}const i={render:()=>e.jsx(S,{})};function z(){const[t,s]=l.useState(null);return e.jsxs("div",{style:y,children:[e.jsx(o,{onClick:()=>s("sm"),children:"Small"}),e.jsx(o,{onClick:()=>s("md"),children:"Medium"}),e.jsx(o,{onClick:()=>s("lg"),children:"Large"}),t&&e.jsxs(r,{open:!0,onOpenChange:()=>s(null),size:t,children:[e.jsxs(r.Header,{onClose:()=>s(null),children:["Size: ",t]}),e.jsx(r.Body,{children:e.jsxs(n,{children:['This modal uses size="',t,'".']})}),e.jsx(r.Footer,{children:e.jsx(o,{onClick:()=>s(null),children:"Close"})})]})]})}const a={render:()=>e.jsx(z,{})};function k(){const[t,s]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>s(!0),children:"Edit Profile"}),e.jsxs(r,{open:t,onOpenChange:s,children:[e.jsx(r.Header,{onClose:()=>s(!1),children:"Edit Profile"}),e.jsx(r.Body,{children:e.jsxs("div",{style:g,children:[e.jsx(x,{label:"Name",defaultValue:"John Doe"}),e.jsx(x,{label:"Email",defaultValue:"john@example.com",type:"email"})]})}),e.jsxs(r.Footer,{children:[e.jsx(o,{shape:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(o,{onClick:()=>s(!1),children:"Save"})]})]})]})}const c={render:()=>{const t=["sm","md","lg"];return e.jsxs("div",{style:f,children:[e.jsx("h4",{style:C,children:"Sizes (static preview)"}),e.jsx("div",{style:{display:"flex",gap:"1.5rem",alignItems:"flex-start",flexWrap:"wrap"},children:t.map(s=>e.jsxs("div",{style:{width:s==="sm"?360:s==="md"?440:640,border:"1px solid var(--color-border-subtle)",borderRadius:12,overflow:"hidden"},children:[e.jsx(r.Header,{children:e.jsxs(n,{weight:"semibold",children:["Modal (",s,")"]})}),e.jsx(r.Body,{children:e.jsxs(n,{size:"sm",children:['size="',s,'" content area']})}),e.jsxs(r.Footer,{children:[e.jsx(o,{size:"sm",shape:"outline",children:"Cancel"}),e.jsx(o,{size:"sm",children:"Confirm"})]})]},s))})]})}},d={render:()=>e.jsx(k,{})};function v(){const[t,s]=l.useState(!1),[h,u]=l.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>s(!0),children:"Open (sync block)"}),e.jsxs(n,{size:"sm",children:["Blocked attempts: ",h]}),e.jsxs(r,{open:t,onOpenChange:s,onCloseAttempt:()=>{if(u(j=>j+1),h<2)return!1},children:[e.jsx(r.Header,{onClose:()=>s(!1),children:"Sync interceptor"}),e.jsx(r.Body,{children:e.jsx(n,{children:"Click overlay or press Escape. The first 2 attempts are blocked; the third closes the modal. The X button bypasses the interceptor (programmatic close)."})}),e.jsx(r.Footer,{children:e.jsx(o,{onClick:()=>s(!1),children:"Close (programmatic)"})})]})]})}const m={render:()=>e.jsx(v,{})};function A(){const[t,s]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>s(!0),children:"Open (async confirm)"}),e.jsxs(r,{open:t,onOpenChange:s,onCloseAttempt:async()=>window.confirm("Discard unsaved changes?"),children:[e.jsx(r.Header,{onClose:()=>s(!1),children:"Async confirm"}),e.jsx(r.Body,{children:e.jsx(n,{children:"Click overlay or press Escape -- a confirm dialog gates the close."})}),e.jsx(r.Footer,{children:e.jsx(o,{onClick:()=>s(!1),children:"Close (programmatic)"})})]})]})}const p={render:()=>e.jsx(A,{})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <BasicDemo />
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <SizesDemo />
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    return <div style={section}>
        <h4 style={sectionTitle}>Sizes (static preview)</h4>
        <div style={{
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>
          {sizes.map(size => <div key={size} style={{
          width: size === 'sm' ? 360 : size === 'md' ? 440 : 640,
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 12,
          overflow: 'hidden'
        }}>
              <Modal.Header>
                <Text weight="semibold">Modal ({size})</Text>
              </Modal.Header>
              <Modal.Body>
                <Text size="sm">size="{size}" content area</Text>
              </Modal.Body>
              <Modal.Footer>
                <Button size="sm" shape="outline">Cancel</Button>
                <Button size="sm">Confirm</Button>
              </Modal.Footer>
            </div>)}
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <FormDemo />
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <CloseAttemptSyncDemo />
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <CloseAttemptAsyncDemo />
}`,...p.parameters?.docs?.source}}};const V=["Playground","Sizes","AllStates","WithForm","CloseAttemptSync","CloseAttemptAsync"];export{c as AllStates,p as CloseAttemptAsync,m as CloseAttemptSync,i as Playground,a as Sizes,d as WithForm,V as __namedExportsOrder,R as default};
