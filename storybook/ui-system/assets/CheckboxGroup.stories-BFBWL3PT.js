import{r as P,j as e,s as O,R as S}from"./iframe-DCh78EiW.js";import{C as L}from"./Checkbox-A8Xkbink.js";import{s as q,a as C,r as A,c as I}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./use-toggle-DUq2NTlW.js";import"./use-machine-DmhSCJGf.js";import"./use-interaction-state-DfbpwTE8.js";function R(t){return typeof t=="string"?t:String(t)}function H(t){return typeof t=="string"?t:String(t)}function r(t){const{items:n,getItemValue:x=R,getItemLabel:h=H,value:s,defaultValue:V=[],onChange:N,disabled:z=!1,orientation:b="vertical"}=t,j=s!==void 0,[k,B]=P.useState(V),v=j?s:k,w=(o,f)=>{const i=f?[...v,o]:v.filter(y=>y!==o);j||B(i),N?.(i)},G={display:"flex",flexDirection:b==="vertical"?"column":"row",gap:b==="vertical"?O[3]:O[4]};return e.jsx("div",{style:G,role:"group",children:n.map((o,f)=>{const i=x(o),y=h(o),T=v.includes(i);return e.jsx(L,{label:y,checked:T,disabled:z,onCheckedChange:D=>w(i,D)},i||f)})})}r.displayName="CheckboxGroup";r.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},getItemValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},getItemLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:""}}};const Q={title:"Components/CheckboxGroup",component:r,tags:["autodocs"]},a={args:{items:["Apple","Banana","Cherry"],defaultValue:["Apple"],orientation:"vertical"}},l={render:()=>e.jsx(r,{items:["Option A","Option B","Option C"],defaultValue:["Option A","Option C"]})},d={render:()=>{const t=[{id:"1",name:"Apple"},{id:"2",name:"Banana"},{id:"3",name:"Cherry"},{id:"4",name:"Date"}];return e.jsx(r,{items:t,getItemValue:n=>n.id,getItemLabel:n=>n.name,defaultValue:["1","3"]})}},c={render:()=>e.jsx(r,{items:["Small","Medium","Large"],defaultValue:["Medium"],orientation:"horizontal"})},p={render:()=>e.jsx(r,{items:["Option A","Option B","Option C"],defaultValue:["Option A","Option B"],disabled:!0})},m={render:()=>{const[t,n]=S.useState(["Option A"]);return e.jsxs("div",{style:I,children:[e.jsx(r,{items:["Option A","Option B","Option C","Option D"],value:t,onChange:n}),e.jsxs("p",{children:["Selected: ",e.jsx("strong",{children:t.join(", ")||"None"})]})]})}},u={render:()=>{const t=["Option A","Option B","Option C"];return e.jsxs("div",{style:q,children:[e.jsxs("div",{children:[e.jsx("h4",{style:C,children:"Vertical"}),e.jsxs("div",{style:{...A,gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:"Partial"}),e.jsx(r,{items:t,defaultValue:["Option A"],orientation:"vertical"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:"All checked"}),e.jsx(r,{items:t,defaultValue:t,orientation:"vertical"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:"Disabled"}),e.jsx(r,{items:t,defaultValue:["Option A"],orientation:"vertical",disabled:!0})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:C,children:"Horizontal"}),e.jsxs("div",{style:{...A,gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:"Partial"}),e.jsx(r,{items:t,defaultValue:["Option B"],orientation:"horizontal"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:"Disabled"}),e.jsx(r,{items:t,defaultValue:["Option B"],orientation:"horizontal",disabled:!0})]})]})]})]})}},g={render:()=>{const t=[{permissionId:"read",permissionName:"Read Access"},{permissionId:"write",permissionName:"Write Access"},{permissionId:"delete",permissionName:"Delete Access"},{permissionId:"admin",permissionName:"Admin Access"}],[n,x]=S.useState(["read","write"]),h=t.filter(s=>n.includes(s.permissionId));return e.jsxs("div",{style:I,children:[e.jsx(r,{items:t,getItemValue:s=>s.permissionId,getItemLabel:s=>s.permissionName,value:n,onChange:x}),e.jsxs("div",{children:[e.jsxs("p",{children:["Selected IDs: ",e.jsx("strong",{children:n.join(", ")||"None"})]}),e.jsxs("p",{children:["Selected Names: ",e.jsx("strong",{children:h.map(s=>s.permissionName).join(", ")||"None"})]})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['Apple', 'Banana', 'Cherry'],
    defaultValue: ['Apple'],
    orientation: 'vertical'
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup items={['Option A', 'Option B', 'Option C']} defaultValue={['Option A', 'Option C']} />
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Fruit {
      id: string;
      name: string;
    }
    const fruits: Fruit[] = [{
      id: '1',
      name: 'Apple'
    }, {
      id: '2',
      name: 'Banana'
    }, {
      id: '3',
      name: 'Cherry'
    }, {
      id: '4',
      name: 'Date'
    }];
    return <CheckboxGroup items={fruits} getItemValue={fruit => fruit.id} getItemLabel={fruit => fruit.name} defaultValue={['1', '3']} />;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup items={['Small', 'Medium', 'Large']} defaultValue={['Medium']} orientation="horizontal" />
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup items={['Option A', 'Option B', 'Option C']} defaultValue={['Option A', 'Option B']} disabled={true} />
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<string[]>(['Option A']);
    return <div style={column}>
        <CheckboxGroup items={['Option A', 'Option B', 'Option C', 'Option D']} value={selected} onChange={setSelected} />
        <p>Selected: <strong>{selected.join(', ') || 'None'}</strong></p>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = ['Option A', 'Option B', 'Option C'];
    return <div style={section}>
        <div>
          <h4 style={sectionTitle}>Vertical</h4>
          <div style={{
          ...row,
          gap: '2rem'
        }}>
            <div>
              <p style={{
              fontSize: 11,
              color: 'var(--color-text-subtle)',
              margin: '0 0 4px'
            }}>Partial</p>
              <CheckboxGroup items={items} defaultValue={['Option A']} orientation="vertical" />
            </div>
            <div>
              <p style={{
              fontSize: 11,
              color: 'var(--color-text-subtle)',
              margin: '0 0 4px'
            }}>All checked</p>
              <CheckboxGroup items={items} defaultValue={items} orientation="vertical" />
            </div>
            <div>
              <p style={{
              fontSize: 11,
              color: 'var(--color-text-subtle)',
              margin: '0 0 4px'
            }}>Disabled</p>
              <CheckboxGroup items={items} defaultValue={['Option A']} orientation="vertical" disabled />
            </div>
          </div>
        </div>
        <div>
          <h4 style={sectionTitle}>Horizontal</h4>
          <div style={{
          ...row,
          gap: '2rem'
        }}>
            <div>
              <p style={{
              fontSize: 11,
              color: 'var(--color-text-subtle)',
              margin: '0 0 4px'
            }}>Partial</p>
              <CheckboxGroup items={items} defaultValue={['Option B']} orientation="horizontal" />
            </div>
            <div>
              <p style={{
              fontSize: 11,
              color: 'var(--color-text-subtle)',
              margin: '0 0 4px'
            }}>Disabled</p>
              <CheckboxGroup items={items} defaultValue={['Option B']} orientation="horizontal" disabled />
            </div>
          </div>
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Permission {
      permissionId: string;
      permissionName: string;
    }
    const permissions: Permission[] = [{
      permissionId: 'read',
      permissionName: 'Read Access'
    }, {
      permissionId: 'write',
      permissionName: 'Write Access'
    }, {
      permissionId: 'delete',
      permissionName: 'Delete Access'
    }, {
      permissionId: 'admin',
      permissionName: 'Admin Access'
    }];
    const [selectedIds, setSelectedIds] = React.useState<string[]>(['read', 'write']);
    const selectedPermissions = permissions.filter(p => selectedIds.includes(p.permissionId));
    return <div style={column}>
        <CheckboxGroup items={permissions} getItemValue={perm => perm.permissionId} getItemLabel={perm => perm.permissionName} value={selectedIds} onChange={setSelectedIds} />
        <div>
          <p>Selected IDs: <strong>{selectedIds.join(', ') || 'None'}</strong></p>
          <p>Selected Names: <strong>{selectedPermissions.map(p => p.permissionName).join(', ') || 'None'}</strong></p>
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};const U=["Playground","StringArray","ObjectArray","Horizontal","Disabled","Controlled","AllStates","ControlledWithObjects"];export{u as AllStates,m as Controlled,g as ControlledWithObjects,p as Disabled,c as Horizontal,d as ObjectArray,a as Playground,l as StringArray,U as __namedExportsOrder,Q as default};
