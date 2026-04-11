import{r as G,j as n,s as x,R as O}from"./iframe-Bbzk5SKL.js";import{C as D}from"./Checkbox-7UmC8pPF.js";import{c as b}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./use-toggle-DEn2eblq.js";import"./index-ZcSIculg.js";import"./use-interaction-state-C5rBqqWh.js";function L(e){return typeof e=="string"?e:String(e)}function q(e){return typeof e=="string"?e:String(e)}function s(e){const{items:t,getItemValue:g=L,getItemLabel:f=q,value:r,defaultValue:S=[],onChange:v,disabled:j=!1,orientation:I="vertical"}=e,A=r!==void 0,[V,N]=G.useState(S),h=A?r:V,k=(a,C)=>{const i=C?[...h,a]:h.filter(y=>y!==a);A||N(i),v?.(i)},w={display:"flex",flexDirection:I==="vertical"?"column":"row",gap:I==="vertical"?x[3]:x[4]};return n.jsx("div",{style:w,role:"group",children:t.map((a,C)=>{const i=g(a),y=f(a),T=h.includes(i);return n.jsx(D,{label:y,checked:T,disabled:j,onCheckedChange:B=>k(i,B)},i||C)})})}s.displayName="CheckboxGroup";s.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},getItemValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},getItemLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:""}}};const F={title:"Components/CheckboxGroup",component:s,tags:["autodocs"]},o={args:{items:["Apple","Banana","Cherry"],defaultValue:["Apple"],orientation:"vertical"}},d={render:()=>n.jsx(s,{items:["Option A","Option B","Option C"],defaultValue:["Option A","Option C"]})},l={render:()=>{const e=[{id:"1",name:"Apple"},{id:"2",name:"Banana"},{id:"3",name:"Cherry"},{id:"4",name:"Date"}];return n.jsx(s,{items:e,getItemValue:t=>t.id,getItemLabel:t=>t.name,defaultValue:["1","3"]})}},m={render:()=>n.jsx(s,{items:["Small","Medium","Large"],defaultValue:["Medium"],orientation:"horizontal"})},c={render:()=>n.jsx(s,{items:["Option A","Option B","Option C"],defaultValue:["Option A","Option B"],disabled:!0})},p={render:()=>{const[e,t]=O.useState(["Option A"]);return n.jsxs("div",{style:b,children:[n.jsx(s,{items:["Option A","Option B","Option C","Option D"],value:e,onChange:t}),n.jsxs("p",{children:["Selected: ",n.jsx("strong",{children:e.join(", ")||"None"})]})]})}},u={render:()=>{const e=[{permissionId:"read",permissionName:"Read Access"},{permissionId:"write",permissionName:"Write Access"},{permissionId:"delete",permissionName:"Delete Access"},{permissionId:"admin",permissionName:"Admin Access"}],[t,g]=O.useState(["read","write"]),f=e.filter(r=>t.includes(r.permissionId));return n.jsxs("div",{style:b,children:[n.jsx(s,{items:e,getItemValue:r=>r.permissionId,getItemLabel:r=>r.permissionName,value:t,onChange:g}),n.jsxs("div",{children:[n.jsxs("p",{children:["Selected IDs: ",n.jsx("strong",{children:t.join(", ")||"None"})]}),n.jsxs("p",{children:["Selected Names: ",n.jsx("strong",{children:f.map(r=>r.permissionName).join(", ")||"None"})]})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['Apple', 'Banana', 'Cherry'],
    defaultValue: ['Apple'],
    orientation: 'vertical'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup items={['Option A', 'Option B', 'Option C']} defaultValue={['Option A', 'Option C']} />
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup items={['Small', 'Medium', 'Large']} defaultValue={['Medium']} orientation="horizontal" />
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup items={['Option A', 'Option B', 'Option C']} defaultValue={['Option A', 'Option B']} disabled={true} />
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<string[]>(['Option A']);
    return <div style={column}>
        <CheckboxGroup items={['Option A', 'Option B', 'Option C', 'Option D']} value={selected} onChange={setSelected} />
        <p>Selected: <strong>{selected.join(', ') || 'None'}</strong></p>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const H=["Playground","StringArray","ObjectArray","Horizontal","Disabled","Controlled","ControlledWithObjects"];export{p as Controlled,u as ControlledWithObjects,c as Disabled,m as Horizontal,l as ObjectArray,o as Playground,d as StringArray,H as __namedExportsOrder,F as default};
