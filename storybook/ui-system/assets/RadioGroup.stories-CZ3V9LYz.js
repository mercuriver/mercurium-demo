import{r as L,R as h,j as r,s as S}from"./iframe-omubX4Zv.js";import{R as q}from"./Radio-rf8l2lRG.js";import{c as v}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./use-toggle-Ngt-NwjI.js";import"./index-ZcSIculg.js";import"./use-interaction-state-Dtf1cT8c.js";function w(e){return typeof e=="string"?e:String(e)}function z(e){return typeof e=="string"?e:String(e)}function s(e){const{items:t,getItemValue:g=w,getItemLabel:f=z,value:n,defaultValue:O,onChange:C,disabled:x=!1,name:j,orientation:y="vertical"}=e,I=n!==void 0,[A,V]=L.useState(O),b=I?n:A,R=a=>{I||V(a),C?.(a)},U=j||`radio-group-${h.useId()}`,B={display:"flex",flexDirection:y==="vertical"?"column":"row",gap:y==="vertical"?S[3]:S[4]};return r.jsx("div",{style:B,role:"radiogroup",children:t.map((a,N)=>{const o=g(a),T=f(a),G=b===o;return r.jsx(q,{label:T,checked:G,disabled:x,onCheckedChange:()=>R(o),name:U,value:o},o||N)})})}s.displayName="RadioGroup";s.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},getItemValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},getItemLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:""}}};const J={title:"Components/RadioGroup",component:s,tags:["autodocs"]},i={args:{items:["Apple","Banana","Cherry"],defaultValue:"Apple",orientation:"vertical"}},d={render:()=>r.jsx(s,{items:["Option A","Option B","Option C"],defaultValue:"Option A"})},u={render:()=>{const e=[{id:"1",name:"Apple"},{id:"2",name:"Banana"},{id:"3",name:"Cherry"}];return r.jsx(s,{items:e,getItemValue:t=>t.id,getItemLabel:t=>t.name,defaultValue:"1"})}},l={render:()=>r.jsx(s,{items:["Small","Medium","Large"],defaultValue:"Medium",orientation:"horizontal"})},c={render:()=>r.jsx(s,{items:["Option A","Option B","Option C"],defaultValue:"Option B",disabled:!0})},m={render:()=>{const[e,t]=h.useState("Option A");return r.jsxs("div",{style:v,children:[r.jsx(s,{items:["Option A","Option B","Option C"],value:e,onChange:t}),r.jsxs("p",{children:["Selected: ",r.jsx("strong",{children:e})]})]})}},p={render:()=>{const e=[{userId:"u1",userName:"Alice Johnson"},{userId:"u2",userName:"Bob Smith"},{userId:"u3",userName:"Charlie Brown"}],[t,g]=h.useState("u1"),f=e.find(n=>n.userId===t);return r.jsxs("div",{style:v,children:[r.jsx(s,{items:e,getItemValue:n=>n.userId,getItemLabel:n=>n.userName,value:t,onChange:g}),r.jsxs("div",{children:[r.jsxs("p",{children:["Selected User ID: ",r.jsx("strong",{children:t})]}),r.jsxs("p",{children:["Selected User Name: ",r.jsx("strong",{children:f?.userName})]})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['Apple', 'Banana', 'Cherry'],
    defaultValue: 'Apple',
    orientation: 'vertical'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup items={['Option A', 'Option B', 'Option C']} defaultValue="Option A" />
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    }];
    return <RadioGroup items={fruits} getItemValue={fruit => fruit.id} getItemLabel={fruit => fruit.name} defaultValue="1" />;
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup items={['Small', 'Medium', 'Large']} defaultValue="Medium" orientation="horizontal" />
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup items={['Option A', 'Option B', 'Option C']} defaultValue="Option B" disabled={true} />
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState('Option A');
    return <div style={column}>
        <RadioGroup items={['Option A', 'Option B', 'Option C']} value={selected} onChange={setSelected} />
        <p>Selected: <strong>{selected}</strong></p>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface User {
      userId: string;
      userName: string;
    }
    const users: User[] = [{
      userId: 'u1',
      userName: 'Alice Johnson'
    }, {
      userId: 'u2',
      userName: 'Bob Smith'
    }, {
      userId: 'u3',
      userName: 'Charlie Brown'
    }];
    const [selectedUserId, setSelectedUserId] = React.useState('u1');
    const selectedUser = users.find(u => u.userId === selectedUserId);
    return <div style={column}>
        <RadioGroup items={users} getItemValue={user => user.userId} getItemLabel={user => user.userName} value={selectedUserId} onChange={setSelectedUserId} />
        <div>
          <p>Selected User ID: <strong>{selectedUserId}</strong></p>
          <p>Selected User Name: <strong>{selectedUser?.userName}</strong></p>
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const P=["Playground","StringArray","ObjectArray","Horizontal","Disabled","Controlled","ControlledWithObjects"];export{m as Controlled,p as ControlledWithObjects,c as Disabled,l as Horizontal,u as ObjectArray,i as Playground,d as StringArray,P as __namedExportsOrder,J as default};
