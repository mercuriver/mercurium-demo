import{r as q,R as h,j as e,s as S}from"./iframe-80ZV6wNn.js";import{R as D}from"./Radio-C28VAPyr.js";import{s as H,a as O,r as j,c as b}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./use-toggle-Df05WQoJ.js";import"./use-machine-88aMQJYn.js";import"./use-interaction-state-B50cmliQ.js";function M(t){return typeof t=="string"?t:String(t)}function _(t){return typeof t=="string"?t:String(t)}function r(t){const{items:s,getItemValue:v=M,getItemLabel:f=_,value:n,defaultValue:I,onChange:V,disabled:C=!1,name:A,orientation:x="vertical"}=t,y=n!==void 0,[R,z]=q.useState(I),B=y?n:R,T=a=>{y||z(a),V?.(a)},U=A||`radio-group-${h.useId()}`,G={display:"flex",flexDirection:x==="vertical"?"column":"row",gap:x==="vertical"?S[3]:S[4]};return e.jsx("div",{style:G,role:"radiogroup",children:s.map((a,N)=>{const i=v(a),w=f(a),L=B===i;return e.jsx(D,{label:w,checked:L,disabled:C,onCheckedChange:()=>T(i),name:U,value:i},i||N)})})}r.displayName="RadioGroup";r.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},getItemValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},getItemLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T) => string",signature:{arguments:[{type:{name:"T"},name:"item"}],return:{name:"string"}}},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:""}}};const K={title:"Components/RadioGroup",component:r,tags:["autodocs"]},o={args:{items:["Apple","Banana","Cherry"],defaultValue:"Apple",orientation:"vertical"}},l={render:()=>e.jsx(r,{items:["Option A","Option B","Option C"],defaultValue:"Option A"})},d={render:()=>{const t=[{id:"1",name:"Apple"},{id:"2",name:"Banana"},{id:"3",name:"Cherry"}];return e.jsx(r,{items:t,getItemValue:s=>s.id,getItemLabel:s=>s.name,defaultValue:"1"})}},u={render:()=>e.jsx(r,{items:["Small","Medium","Large"],defaultValue:"Medium",orientation:"horizontal"})},c={render:()=>e.jsx(r,{items:["Option A","Option B","Option C"],defaultValue:"Option B",disabled:!0})},p={render:()=>{const[t,s]=h.useState("Option A");return e.jsxs("div",{style:b,children:[e.jsx(r,{items:["Option A","Option B","Option C"],value:t,onChange:s}),e.jsxs("p",{children:["Selected: ",e.jsx("strong",{children:t})]})]})}},m={render:()=>{const t=["Option A","Option B","Option C"];return e.jsxs("div",{style:H,children:[e.jsxs("div",{children:[e.jsx("h4",{style:O,children:"Vertical"}),e.jsxs("div",{style:{...j,gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:"Selected"}),e.jsx(r,{items:t,defaultValue:"Option B",orientation:"vertical"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:"Disabled"}),e.jsx(r,{items:t,defaultValue:"Option A",orientation:"vertical",disabled:!0})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:O,children:"Horizontal"}),e.jsxs("div",{style:{...j,gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:"Selected"}),e.jsx(r,{items:t,defaultValue:"Option C",orientation:"horizontal"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:"Disabled"}),e.jsx(r,{items:t,defaultValue:"Option A",orientation:"horizontal",disabled:!0})]})]})]})]})}},g={render:()=>{const t=[{userId:"u1",userName:"Alice Johnson"},{userId:"u2",userName:"Bob Smith"},{userId:"u3",userName:"Charlie Brown"}],[s,v]=h.useState("u1"),f=t.find(n=>n.userId===s);return e.jsxs("div",{style:b,children:[e.jsx(r,{items:t,getItemValue:n=>n.userId,getItemLabel:n=>n.userName,value:s,onChange:v}),e.jsxs("div",{children:[e.jsxs("p",{children:["Selected User ID: ",e.jsx("strong",{children:s})]}),e.jsxs("p",{children:["Selected User Name: ",e.jsx("strong",{children:f?.userName})]})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['Apple', 'Banana', 'Cherry'],
    defaultValue: 'Apple',
    orientation: 'vertical'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup items={['Option A', 'Option B', 'Option C']} defaultValue="Option A" />
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
    }];
    return <RadioGroup items={fruits} getItemValue={fruit => fruit.id} getItemLabel={fruit => fruit.name} defaultValue="1" />;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup items={['Small', 'Medium', 'Large']} defaultValue="Medium" orientation="horizontal" />
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup items={['Option A', 'Option B', 'Option C']} defaultValue="Option B" disabled={true} />
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState('Option A');
    return <div style={column}>
        <RadioGroup items={['Option A', 'Option B', 'Option C']} value={selected} onChange={setSelected} />
        <p>Selected: <strong>{selected}</strong></p>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
            }}>Selected</p>
              <RadioGroup items={items} defaultValue="Option B" orientation="vertical" />
            </div>
            <div>
              <p style={{
              fontSize: 11,
              color: 'var(--color-text-subtle)',
              margin: '0 0 4px'
            }}>Disabled</p>
              <RadioGroup items={items} defaultValue="Option A" orientation="vertical" disabled />
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
            }}>Selected</p>
              <RadioGroup items={items} defaultValue="Option C" orientation="horizontal" />
            </div>
            <div>
              <p style={{
              fontSize: 11,
              color: 'var(--color-text-subtle)',
              margin: '0 0 4px'
            }}>Disabled</p>
              <RadioGroup items={items} defaultValue="Option A" orientation="horizontal" disabled />
            </div>
          </div>
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const Q=["Playground","StringArray","ObjectArray","Horizontal","Disabled","Controlled","AllStates","ControlledWithObjects"];export{m as AllStates,p as Controlled,g as ControlledWithObjects,c as Disabled,u as Horizontal,d as ObjectArray,o as Playground,l as StringArray,Q as __namedExportsOrder,K as default};
