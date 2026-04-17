import{j as e,r as c}from"./iframe-G7Ln-CiB.js";import{M as r}from"./Modal-C8EneTgQ.js";import{B as o}from"./Button-BZdrDbzj.js";import{T as d}from"./Code-CwVYSjVH.js";import{I as m}from"./Input-UQSz3jWL.js";import{s as p,a as h,r as x,c as u}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVA6Xkc4.js";import"./index-DSlggvS8.js";import"./Icon-DHQh6KsE.js";import"./use-machine-xUSna12t.js";import"./index-J-6yexAb.js";import"./use-interaction-state-BCWv99Vh.js";import"./FormField-CvxYgi6n.js";const E={title:"Components/Modal",component:r,tags:["autodocs"]};function j(){const[i,s]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>s(!0),children:"Open Modal"}),e.jsxs(r,{open:i,onOpenChange:s,children:[e.jsx(r.Header,{onClose:()=>s(!1),children:"Confirmation"}),e.jsx(r.Body,{children:e.jsx(d,{children:"Are you sure you want to proceed with this action?"})}),e.jsxs(r.Footer,{children:[e.jsx(o,{shape:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(o,{onClick:()=>s(!1),children:"Confirm"})]})]})]})}const t={render:()=>e.jsx(j,{})};function f(){const[i,s]=c.useState(null);return e.jsxs("div",{style:x,children:[e.jsx(o,{onClick:()=>s("sm"),children:"Small"}),e.jsx(o,{onClick:()=>s("md"),children:"Medium"}),e.jsx(o,{onClick:()=>s("lg"),children:"Large"}),i&&e.jsxs(r,{open:!0,onOpenChange:()=>s(null),size:i,children:[e.jsxs(r.Header,{onClose:()=>s(null),children:["Size: ",i]}),e.jsx(r.Body,{children:e.jsxs(d,{children:['This modal uses size="',i,'".']})}),e.jsx(r.Footer,{children:e.jsx(o,{onClick:()=>s(null),children:"Close"})})]})]})}const n={render:()=>e.jsx(f,{})};function C(){const[i,s]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>s(!0),children:"Edit Profile"}),e.jsxs(r,{open:i,onOpenChange:s,children:[e.jsx(r.Header,{onClose:()=>s(!1),children:"Edit Profile"}),e.jsx(r.Body,{children:e.jsxs("div",{style:u,children:[e.jsx(m,{label:"Name",defaultValue:"John Doe"}),e.jsx(m,{label:"Email",defaultValue:"john@example.com",type:"email"})]})}),e.jsxs(r.Footer,{children:[e.jsx(o,{shape:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(o,{onClick:()=>s(!1),children:"Save"})]})]})]})}const l={render:()=>{const i=["sm","md","lg"];return e.jsxs("div",{style:p,children:[e.jsx("h4",{style:h,children:"Sizes (static preview)"}),e.jsx("div",{style:{display:"flex",gap:"1.5rem",alignItems:"flex-start",flexWrap:"wrap"},children:i.map(s=>e.jsxs("div",{style:{width:s==="sm"?360:s==="md"?440:640,border:"1px solid var(--color-border-subtle)",borderRadius:12,overflow:"hidden"},children:[e.jsx(r.Header,{children:e.jsxs(d,{weight:"semibold",children:["Modal (",s,")"]})}),e.jsx(r.Body,{children:e.jsxs(d,{size:"sm",children:['size="',s,'" content area']})}),e.jsxs(r.Footer,{children:[e.jsx(o,{size:"sm",shape:"outline",children:"Cancel"}),e.jsx(o,{size:"sm",children:"Confirm"})]})]},s))})]})}},a={render:()=>e.jsx(C,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <BasicDemo />
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <SizesDemo />
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <FormDemo />
}`,...a.parameters?.docs?.source}}};const H=["Playground","Sizes","AllStates","WithForm"];export{l as AllStates,t as Playground,n as Sizes,a as WithForm,H as __namedExportsOrder,E as default};
