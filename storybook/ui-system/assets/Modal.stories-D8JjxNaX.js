import{j as e,r as i}from"./iframe-B352m8Ic.js";import{M as r}from"./Modal-B58p6GtS.js";import{B as o}from"./Button-Dn8y6vOd.js";import{T as l}from"./Code-D3L6RGzg.js";import{I as x}from"./Input-Dcs7U4OP.js";import{s as f,a as C,r as y,c as g}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DJDVo0me.js";import"./index-CoG5Onai.js";import"./index-BQaWQ9Wz.js";import"./use-machine-D8fwiq3C.js";import"./FormField-Df8M80yJ.js";import"./form-message-DMEeDgMD.js";import"./use-machine-sync-CSenzpo8.js";const V={title:"Components/Modal",component:r,tags:["autodocs"]};function S(){const[t,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>s(!0),children:"Open Modal"}),e.jsxs(r,{open:t,onOpenChange:s,children:[e.jsx(r.Header,{onClose:()=>s(!1),children:"Confirmation"}),e.jsx(r.Body,{children:e.jsx(l,{children:"Are you sure you want to proceed with this action?"})}),e.jsxs(r.Footer,{children:[e.jsx(o,{shape:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(o,{onClick:()=>s(!1),children:"Confirm"})]})]})]})}const a={render:()=>e.jsx(S,{})};function v(){const[t,s]=i.useState(null);return e.jsxs("div",{style:y,children:[e.jsx(o,{onClick:()=>s("sm"),children:"Small"}),e.jsx(o,{onClick:()=>s("md"),children:"Medium"}),e.jsx(o,{onClick:()=>s("lg"),children:"Large"}),t&&e.jsxs(r,{open:!0,onOpenChange:()=>s(null),size:t,children:[e.jsxs(r.Header,{onClose:()=>s(null),children:["Size: ",t]}),e.jsx(r.Body,{children:e.jsxs(l,{children:['This modal uses size="',t,'".']})}),e.jsx(r.Footer,{children:e.jsx(o,{onClick:()=>s(null),children:"Close"})})]})]})}const c={render:()=>e.jsx(v,{})};function z(){const[t,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>s(!0),children:"Edit Profile"}),e.jsxs(r,{open:t,onOpenChange:s,children:[e.jsx(r.Header,{onClose:()=>s(!1),children:"Edit Profile"}),e.jsx(r.Body,{children:e.jsxs("div",{style:g,children:[e.jsx(x,{label:"Name",defaultValue:"John Doe"}),e.jsx(x,{label:"Email",defaultValue:"john@example.com",type:"email"})]})}),e.jsxs(r.Footer,{children:[e.jsx(o,{shape:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(o,{onClick:()=>s(!1),children:"Save"})]})]})]})}const d={parameters:{controls:{disable:!0}},render:()=>{const t=["sm","md","lg"],s={sm:360,md:440,lg:640};return e.jsxs("div",{style:f,children:[e.jsx("h4",{style:C,children:"Sizes (static preview)"}),e.jsx("div",{style:{display:"flex",gap:"1.5rem",alignItems:"flex-start",flexWrap:"wrap"},children:t.map(n=>e.jsxs("div",{style:{width:s[n],border:"1px solid var(--color-border-subtle)",borderRadius:12,overflow:"hidden"},children:[e.jsx(r.Header,{children:e.jsxs(l,{weight:"semibold",children:["Modal (",n,")"]})}),e.jsx(r.Body,{children:e.jsxs(l,{size:"sm",children:['size="',n,'" content area']})}),e.jsxs(r.Footer,{children:[e.jsx(o,{size:"sm",shape:"outline",children:"Cancel"}),e.jsx(o,{size:"sm",children:"Confirm"})]})]},n))})]})}},m={render:()=>e.jsx(z,{})};function k(){const[t,s]=i.useState(!1),[n,u]=i.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>s(!0),children:"Open (sync block)"}),e.jsxs(l,{size:"sm",children:["Blocked attempts: ",n]}),e.jsxs(r,{open:t,onOpenChange:s,onCloseAttempt:()=>{if(u(j=>j+1),n<2)return!1},children:[e.jsx(r.Header,{onClose:()=>s(!1),children:"Sync interceptor"}),e.jsx(r.Body,{children:e.jsx(l,{children:"Click overlay or press Escape. The first 2 attempts are blocked; the third closes the modal. The X button bypasses the interceptor (programmatic close)."})}),e.jsx(r.Footer,{children:e.jsx(o,{onClick:()=>s(!1),children:"Close (programmatic)"})})]})]})}const p={render:()=>e.jsx(k,{})};function A(){const[t,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>s(!0),children:"Open (async confirm)"}),e.jsxs(r,{open:t,onOpenChange:s,onCloseAttempt:async()=>window.confirm("Discard unsaved changes?"),children:[e.jsx(r.Header,{onClose:()=>s(!1),children:"Async confirm"}),e.jsx(r.Body,{children:e.jsx(l,{children:"Click overlay or press Escape -- a confirm dialog gates the close."})}),e.jsx(r.Footer,{children:e.jsx(o,{onClick:()=>s(!1),children:"Close (programmatic)"})})]})]})}const h={render:()=>e.jsx(A,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <BasicDemo />
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <SizesDemo />
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    const previewWidths = {
      sm: 360,
      md: 440,
      lg: 640
    };
    return <div style={section}>
        <h4 style={sectionTitle}>Sizes (static preview)</h4>
        <div style={{
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>
          {sizes.map(size => <div key={size} style={{
          width: previewWidths[size],
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
                <Button size="sm" shape="outline">
                  Cancel
                </Button>
                <Button size="sm">Confirm</Button>
              </Modal.Footer>
            </div>)}
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <FormDemo />
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <CloseAttemptSyncDemo />
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <CloseAttemptAsyncDemo />
}`,...h.parameters?.docs?.source}}};const _=["Playground","Sizes","AllStates","WithForm","CloseAttemptSync","CloseAttemptAsync"];export{d as AllStates,h as CloseAttemptAsync,p as CloseAttemptSync,a as Playground,c as Sizes,m as WithForm,_ as __namedExportsOrder,V as default};
