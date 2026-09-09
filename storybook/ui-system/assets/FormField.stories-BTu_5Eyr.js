import{j as e}from"./iframe-B352m8Ic.js";import{F as l}from"./FormField-Df8M80yJ.js";import{S as a}from"./Slider-BzQrYsh5.js";import{c as r,l as t}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./vanilla-extract-dynamic.esm-BUlnp6I2.js";import"./use-machine-D8fwiq3C.js";import"./use-machine-sync-CSenzpo8.js";const y={title:"Components/FormField",component:l,tags:["autodocs"]},s={args:{label:"Opacity",required:!1,disabled:!1,hintText:"Adjust the layer opacity",messageStatus:"default",children:e.jsx(a,{defaultValue:40})},decorators:[d=>e.jsx("div",{style:{width:320},children:e.jsx(d,{})})]},i={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{...r,width:320},children:[e.jsxs("div",{children:[e.jsx("p",{style:t,children:"default"}),e.jsx(l,{label:"Opacity",hintText:"Adjust the layer opacity",children:e.jsx(a,{defaultValue:40})})]}),e.jsxs("div",{children:[e.jsx("p",{style:t,children:"required"}),e.jsx(l,{label:"Opacity",required:!0,hintText:"This field is required",children:e.jsx(a,{defaultValue:40})})]}),e.jsxs("div",{children:[e.jsx("p",{style:t,children:"disabled"}),e.jsx(l,{label:"Opacity",disabled:!0,hintText:"Editing is disabled",children:e.jsx(a,{defaultValue:40,disabled:!0})})]}),e.jsxs("div",{children:[e.jsx("p",{style:t,children:'messageStatus="warning"'}),e.jsx(l,{label:"Opacity",messageStatus:"warning",hintText:"Value is unusually high",children:e.jsx(a,{defaultValue:95})})]}),e.jsxs("div",{children:[e.jsx("p",{style:t,children:'messageStatus="danger"'}),e.jsx(l,{label:"Opacity",messageStatus:"danger",hintText:"Value out of range",children:e.jsx(a,{defaultValue:100})})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Opacity',
    required: false,
    disabled: false,
    hintText: 'Adjust the layer opacity',
    messageStatus: 'default',
    children: <Slider defaultValue={40} />
  },
  decorators: [Story => <div style={{
    width: 320
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    ...column,
    width: 320
  }}>
      <div>
        <p style={label}>default</p>
        <FormField label="Opacity" hintText="Adjust the layer opacity">
          <Slider defaultValue={40} />
        </FormField>
      </div>
      <div>
        <p style={label}>required</p>
        <FormField label="Opacity" required hintText="This field is required">
          <Slider defaultValue={40} />
        </FormField>
      </div>
      <div>
        <p style={label}>disabled</p>
        <FormField label="Opacity" disabled hintText="Editing is disabled">
          <Slider defaultValue={40} disabled />
        </FormField>
      </div>
      <div>
        <p style={label}>messageStatus="warning"</p>
        <FormField label="Opacity" messageStatus="warning" hintText="Value is unusually high">
          <Slider defaultValue={95} />
        </FormField>
      </div>
      <div>
        <p style={label}>messageStatus="danger"</p>
        <FormField label="Opacity" messageStatus="danger" hintText="Value out of range">
          <Slider defaultValue={100} />
        </FormField>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const g=["Playground","AllStates"];export{i as AllStates,s as Playground,g as __namedExportsOrder,y as default};
