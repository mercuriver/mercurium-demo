import{j as e,r as a}from"./iframe-Dr7tdnDG.js";import{M as i}from"./Menu-DUrqsCxh.js";import{B as x}from"./Button-DMheubLd.js";import{I as n,b as z,n as f,t as y,j}from"./index-BZkHnGtK.js";import{T as v}from"./Code-CXOz2TME.js";import{s as C,a as b}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Lz4CA8Cu.js";import"./index-Bqlosw6n.js";import"./use-popup-close-DzUpYJgy.js";import"./use-merged-ref-ZOu2dXhq.js";import"./use-interaction-state-BxPjOGDk.js";import"./use-machine-Df02H652.js";const R={title:"Components/Menu",component:i,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Trigger size (anchored mode)"},trigger:{control:"text",description:"Built-in trigger content (anchored mode)"},showChevron:{control:"boolean",description:"Render chevron beside built-in trigger (anchored mode)"},defaultOpen:{control:"boolean",description:"Initial open state (anchored, uncontrolled)"}}},o=[{value:"edit",label:"Edit",icon:e.jsx(n,{icon:f,size:"sm"})},{value:"duplicate",label:"Duplicate"},{value:"download",label:"Download",icon:e.jsx(n,{icon:j,size:"sm"})},{value:"delete",label:"Delete",variant:"danger",dividerBefore:!0,icon:e.jsx(n,{icon:y,size:"sm"})}],d={args:{size:"md",trigger:"Actions",showChevron:!0,defaultOpen:!1},render:t=>{const[s,l]=a.useState(void 0);return e.jsxs("div",{style:{width:"220px"},children:[e.jsx(i,{items:o,value:s,onSelect:r=>l(r),trigger:t.trigger,size:t.size,showChevron:t.showChevron,defaultOpen:t.defaultOpen}),e.jsxs(v,{as:"p",size:"sm",color:"muted",style:{marginTop:"0.5rem"},children:["Selected: ",s??"(none)"]})]})}},c={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:C,children:[e.jsxs("div",{children:[e.jsx("h4",{style:b,children:"Sizes"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(i,{items:o,trigger:"Small",size:"sm"}),e.jsx(i,{items:o,trigger:"Medium",size:"md"}),e.jsx(i,{items:o,trigger:"Large",size:"lg"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:b,children:"renderTrigger — custom element"}),e.jsx(i,{items:o,size:"sm",renderTrigger:({toggle:t,triggerProps:s})=>e.jsx(x,{shape:"icon",size:"sm",onClick:t,...s,children:e.jsx(n,{icon:z})})})]}),e.jsxs("div",{children:[e.jsx("h4",{style:b,children:"Item variants"}),e.jsx(i,{items:[{value:"normal",label:"Normal item"},{value:"icon",label:"With icon",icon:e.jsx(n,{icon:f,size:"sm"})},{value:"disabled",label:"Disabled item",disabled:!0},{value:"divider",label:"Below divider",dividerBefore:!0},{value:"danger",label:"Danger item",variant:"danger",dividerBefore:!0,icon:e.jsx(n,{icon:y,size:"sm"})}],trigger:"Variants",size:"md"})]})]})},u={parameters:{controls:{disable:!0}},render:()=>{const t=[{value:"a",label:"Default item"},{value:"b",label:"With icon",icon:e.jsx(n,{icon:f,size:"sm"})},{value:"c",label:"Disabled item",disabled:!0},{value:"d",label:"Below divider",dividerBefore:!0},{value:"e",label:"Danger with icon",variant:"danger",dividerBefore:!0,icon:e.jsx(n,{icon:y,size:"sm"})}];return e.jsx("div",{style:{height:320,paddingTop:"0.75rem"},children:e.jsx(i,{items:t,trigger:"Opened by default",size:"md",isOpen:!0,onOpenChange:()=>{}})})}},m={parameters:{controls:{disable:!0}},render:()=>{const[t,s]=a.useState(!1),[l,r]=a.useState(void 0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"260px"},children:[e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(x,{size:"sm",onClick:()=>s(!0),children:"Open"}),e.jsx(x,{size:"sm",shape:"ghost",onClick:()=>s(!1),children:"Close"})]}),e.jsx(i,{items:o,value:l,onSelect:g=>r(g),trigger:"Controlled menu",isOpen:t,onOpenChange:s,size:"sm"}),e.jsxs(v,{as:"p",size:"sm",color:"muted",children:["isOpen: ",String(t)," / value: ",l??"(none)"]})]})}},p={parameters:{controls:{disable:!0}},render:()=>{const[t,s]=a.useState(null),[l,r]=a.useState(null),g=[{value:"insert-above",label:"Insert above",onClick:()=>r("Insert above")},{value:"insert-below",label:"Insert below",onClick:()=>r("Insert below")},{value:"duplicate",label:"Duplicate",onClick:()=>r("Duplicate")},{value:"delete",label:"Delete",variant:"danger",dividerBefore:!0,onClick:()=>r("Delete")}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("div",{onContextMenu:h=>{h.preventDefault(),s({x:h.clientX,y:h.clientY})},style:{width:"100%",height:"300px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px dashed var(--color-border-subtle)",borderRadius:"8px"},children:e.jsx(v,{color:"muted",as:"span",children:"Right-click anywhere in this area"})}),e.jsxs(v,{as:"p",size:"sm",color:"muted",children:["Last action: ",l??"(none)"]}),e.jsx(i,{items:g,position:t,onClose:()=>s(null)})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const E=["Playground","AllStates","Opened","Controlled","Positioned"];export{c as AllStates,m as Controlled,u as Opened,d as Playground,p as Positioned,E as __namedExportsOrder,R as default};
