import{j as e,r as a}from"./iframe-D_UqZR7W.js";import{M as t}from"./Menu-7kIlHvdv.js";import{B as f}from"./Button-CBruKpfj.js";import{I as n,b as j,n as y,t as z,j as I}from"./index-B7-q4xBT.js";import{T as d}from"./Code-DLJBmAQS.js";import{s as C,a as x}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ro6x8qtj.js";import"./index-CpVhW8Ac.js";import"./use-popup-close-BtspP1ei.js";import"./use-merged-ref-B0l8httA.js";import"./use-interaction-state-DyPcSzQt.js";import"./use-machine-CWPs25si.js";const W={title:"Components/Menu",component:t,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Trigger size (anchored mode)"},trigger:{control:"text",description:"Built-in trigger content (anchored mode)"},showChevron:{control:"boolean",description:"Render chevron beside built-in trigger (anchored mode)"},defaultOpen:{control:"boolean",description:"Initial open state (anchored, uncontrolled)"}}},r=[{value:"edit",label:"Edit",icon:e.jsx(n,{icon:y,size:"sm"})},{value:"duplicate",label:"Duplicate"},{value:"download",label:"Download",icon:e.jsx(n,{icon:I,size:"sm"})},{value:"delete",label:"Delete",variant:"danger",dividerBefore:!0,icon:e.jsx(n,{icon:z,size:"sm"})}],c={args:{size:"md",trigger:"Actions",showChevron:!0,defaultOpen:!1},render:s=>{const[i,l]=a.useState(void 0);return e.jsxs("div",{style:{width:"220px"},children:[e.jsx(t,{items:r,value:i,onSelect:o=>l(o),trigger:s.trigger,size:s.size,showChevron:s.showChevron,defaultOpen:s.defaultOpen}),e.jsxs(d,{as:"p",size:"sm",color:"muted",style:{marginTop:"0.5rem"},children:["Selected: ",i??"(none)"]})]})}},m={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:C,children:[e.jsxs("div",{children:[e.jsx("h4",{style:x,children:"Sizes"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(t,{items:r,trigger:"Small",size:"sm"}),e.jsx(t,{items:r,trigger:"Medium",size:"md"}),e.jsx(t,{items:r,trigger:"Large",size:"lg"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:x,children:"renderTrigger — custom element"}),e.jsx(t,{items:r,size:"sm",renderTrigger:({toggle:s,triggerProps:i})=>e.jsx(f,{shape:"icon",size:"sm",onClick:s,...i,children:e.jsx(n,{icon:j})})})]}),e.jsxs("div",{children:[e.jsx("h4",{style:x,children:"Item variants"}),e.jsx(t,{items:[{value:"normal",label:"Normal item"},{value:"icon",label:"With icon",icon:e.jsx(n,{icon:y,size:"sm"})},{value:"disabled",label:"Disabled item",disabled:!0},{value:"divider",label:"Below divider",dividerBefore:!0},{value:"danger",label:"Danger item",variant:"danger",dividerBefore:!0,icon:e.jsx(n,{icon:z,size:"sm"})}],trigger:"Variants",size:"md"})]})]})},u={parameters:{controls:{disable:!0}},render:()=>{const s=[{value:"a",label:"Default item"},{value:"b",label:"With icon",icon:e.jsx(n,{icon:y,size:"sm"})},{value:"c",label:"Disabled item",disabled:!0},{value:"d",label:"Below divider",dividerBefore:!0},{value:"e",label:"Danger with icon",variant:"danger",dividerBefore:!0,icon:e.jsx(n,{icon:z,size:"sm"})}];return e.jsx("div",{style:{height:320,paddingTop:"0.75rem"},children:e.jsx(t,{items:s,trigger:"Opened by default",size:"md",isOpen:!0,onOpenChange:()=>{}})})}},p={parameters:{controls:{disable:!0}},render:()=>{const[s,i]=a.useState(!1),[l,o]=a.useState(void 0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"260px"},children:[e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(f,{size:"sm",onClick:()=>i(!0),children:"Open"}),e.jsx(f,{size:"sm",shape:"ghost",onClick:()=>i(!1),children:"Close"})]}),e.jsx(t,{items:r,value:l,onSelect:h=>o(h),trigger:"Controlled menu",isOpen:s,onOpenChange:i,size:"sm"}),e.jsxs(d,{as:"p",size:"sm",color:"muted",children:["isOpen: ",String(s)," / value: ",l??"(none)"]})]})}},g={parameters:{controls:{disable:!0}},render:()=>{const[s,i]=a.useState(null),[l,o]=a.useState(null),h=[{value:"insert-above",label:"Insert above",onClick:()=>o("Insert above")},{value:"insert-below",label:"Insert below",onClick:()=>o("Insert below")},{value:"duplicate",label:"Duplicate",onClick:()=>o("Duplicate")},{value:"delete",label:"Delete",variant:"danger",dividerBefore:!0,onClick:()=>o("Delete")}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("div",{onContextMenu:b=>{b.preventDefault(),i({x:b.clientX,y:b.clientY})},style:{width:"100%",height:"300px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px dashed var(--color-border-subtle)",borderRadius:"8px"},children:e.jsx(d,{color:"muted",as:"span",children:"Right-click anywhere in this area"})}),e.jsxs(d,{as:"p",size:"sm",color:"muted",children:["Last action: ",l??"(none)"]}),e.jsx(t,{items:h,position:s,onClose:()=>i(null)})]})}},v={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{position:"relative",width:"100%",height:"420px",border:"1px dashed var(--color-border-subtle)",borderRadius:"8px",padding:"0.5rem"},children:[e.jsx("div",{style:{position:"absolute",top:"0.5rem",left:"0.5rem"},children:e.jsx(t,{items:r,trigger:"top-left",size:"sm"})}),e.jsx("div",{style:{position:"absolute",top:"0.5rem",right:"0.5rem"},children:e.jsx(t,{items:r,trigger:"top-right (clamp)",size:"sm"})}),e.jsx("div",{style:{position:"absolute",bottom:"0.5rem",left:"0.5rem"},children:e.jsx(t,{items:r,trigger:"bottom-left (flip)",size:"sm"})}),e.jsx("div",{style:{position:"absolute",bottom:"0.5rem",right:"0.5rem"},children:e.jsx(t,{items:r,trigger:"bottom-right (clamp + flip)",size:"sm"})}),e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:"20rem",textAlign:"center"},children:e.jsx(d,{as:"p",size:"sm",color:"muted",children:"Open each trigger to verify the menu stays inside the viewport. Width is unchanged in every case."})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    trigger: 'Actions',
    showChevron: true,
    defaultOpen: false
  },
  render: args => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <div style={{
      width: '220px'
    }}>
        <Menu items={basicItems} value={value} onSelect={v => setValue(v)} trigger={args.trigger} size={args.size} showChevron={args.showChevron} defaultOpen={args.defaultOpen} />
        <Text as="p" size="sm" color="muted" style={{
        marginTop: '0.5rem'
      }}>
          Selected: {value ?? '(none)'}
        </Text>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    return <div style={section}>
        <div>
          <h4 style={sectionTitle}>Sizes</h4>
          <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center'
        }}>
            <Menu items={basicItems} trigger="Small" size="sm" />
            <Menu items={basicItems} trigger="Medium" size="md" />
            <Menu items={basicItems} trigger="Large" size="lg" />
          </div>
        </div>

        <div>
          <h4 style={sectionTitle}>renderTrigger — custom element</h4>
          <Menu items={basicItems} size="sm" renderTrigger={({
          toggle,
          triggerProps
        }) => <Button shape="icon" size="sm" onClick={toggle} {...triggerProps}>
                <Icon icon={plus} />
              </Button>} />
        </div>

        <div>
          <h4 style={sectionTitle}>Item variants</h4>
          <Menu items={[{
          value: 'normal',
          label: 'Normal item'
        }, {
          value: 'icon',
          label: 'With icon',
          icon: <Icon icon={notePencil} size="sm" />
        }, {
          value: 'disabled',
          label: 'Disabled item',
          disabled: true
        }, {
          value: 'divider',
          label: 'Below divider',
          dividerBefore: true
        }, {
          value: 'danger',
          label: 'Danger item',
          variant: 'danger',
          dividerBefore: true,
          icon: <Icon icon={trash} size="sm" />
        }]} trigger="Variants" size="md" />
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const items: MenuItem[] = [{
      value: 'a',
      label: 'Default item'
    }, {
      value: 'b',
      label: 'With icon',
      icon: <Icon icon={notePencil} size="sm" />
    }, {
      value: 'c',
      label: 'Disabled item',
      disabled: true
    }, {
      value: 'd',
      label: 'Below divider',
      dividerBefore: true
    }, {
      value: 'e',
      label: 'Danger with icon',
      variant: 'danger',
      dividerBefore: true,
      icon: <Icon icon={trash} size="sm" />
    }];
    // \`isOpen\` + a no-op \`onOpenChange\` keeps the panel open so the
    // portal-rendered list is visible in Storybook snapshots.
    return <div style={{
      height: 320,
      paddingTop: '0.75rem'
    }}>
        <Menu items={items} trigger="Opened by default" size="md" isOpen onOpenChange={() => {}} />
      </div>;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState<string | undefined>(undefined);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '260px'
    }}>
        <div style={{
        display: 'flex',
        gap: '0.5rem'
      }}>
          <Button size="sm" onClick={() => setIsOpen(true)}>
            Open
          </Button>
          <Button size="sm" shape="ghost" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>
        <Menu items={basicItems} value={value} onSelect={v => setValue(v)} trigger="Controlled menu" isOpen={isOpen} onOpenChange={setIsOpen} size="sm" />
        <Text as="p" size="sm" color="muted">
          isOpen: {String(isOpen)} / value: {value ?? '(none)'}
        </Text>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [position, setPosition] = useState<{
      x: number;
      y: number;
    } | null>(null);
    const [lastAction, setLastAction] = useState<string | null>(null);
    const items: MenuItem[] = [{
      value: 'insert-above',
      label: 'Insert above',
      onClick: () => setLastAction('Insert above')
    }, {
      value: 'insert-below',
      label: 'Insert below',
      onClick: () => setLastAction('Insert below')
    }, {
      value: 'duplicate',
      label: 'Duplicate',
      onClick: () => setLastAction('Duplicate')
    }, {
      value: 'delete',
      label: 'Delete',
      variant: 'danger',
      dividerBefore: true,
      onClick: () => setLastAction('Delete')
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <div onContextMenu={e => {
        e.preventDefault();
        setPosition({
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
        borderRadius: '8px'
      }}>
          <Text color="muted" as="span">
            Right-click anywhere in this area
          </Text>
        </div>
        <Text as="p" size="sm" color="muted">
          Last action: {lastAction ?? '(none)'}
        </Text>
        <Menu items={items} position={position} onClose={() => setPosition(null)} />
      </div>;
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    return <div style={{
      position: 'relative',
      width: '100%',
      height: '420px',
      border: '1px dashed var(--color-border-subtle)',
      borderRadius: '8px',
      padding: '0.5rem'
    }}>
        <div style={{
        position: 'absolute',
        top: '0.5rem',
        left: '0.5rem'
      }}>
          <Menu items={basicItems} trigger="top-left" size="sm" />
        </div>
        <div style={{
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem'
      }}>
          <Menu items={basicItems} trigger="top-right (clamp)" size="sm" />
        </div>
        <div style={{
        position: 'absolute',
        bottom: '0.5rem',
        left: '0.5rem'
      }}>
          <Menu items={basicItems} trigger="bottom-left (flip)" size="sm" />
        </div>
        <div style={{
        position: 'absolute',
        bottom: '0.5rem',
        right: '0.5rem'
      }}>
          <Menu items={basicItems} trigger="bottom-right (clamp + flip)" size="sm" />
        </div>
        <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '20rem',
        textAlign: 'center'
      }}>
          <Text as="p" size="sm" color="muted">
            Open each trigger to verify the menu stays inside the viewport.
            Width is unchanged in every case.
          </Text>
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const E=["Playground","AllStates","Opened","Controlled","Positioned","ViewportEdges"];export{m as AllStates,p as Controlled,u as Opened,c as Playground,g as Positioned,v as ViewportEdges,E as __namedExportsOrder,W as default};
