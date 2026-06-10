import{r as j,q as N,j as e,u as C,v as y,w,x as B}from"./iframe-CLvh9l4s.js";import{I as T}from"./index-CDaqnAFW.js";import{i as b}from"./intent-icon-CwY1l8al.js";import{B as R}from"./Badge-BFkcAhnm.js";import{B as a}from"./Button-C4d0tbhX.js";import{c as i,l as v}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./use-machine-BLRTH7Vb.js";const s=j.forwardRef(({intent:t="info",label:r,actions:c,children:m,className:p,...h},g)=>{const x=[N({intent:t}),p].filter(Boolean).join(" "),f=b[t];return e.jsxs("div",{ref:g,role:"status",className:x,...h,children:[r!=null&&e.jsxs(R,{variant:t,className:C,children:[e.jsx(T,{icon:f,size:"sm",className:y({intent:t})}),r]}),e.jsx("div",{className:w,children:m}),c!=null&&e.jsx("div",{className:B,children:c})]})});s.displayName="Callout";s.__docgenInfo={description:"",methods:[],displayName:"Callout",props:{intent:{required:!1,tsType:{name:"BadgeVariant"},description:"시맨틱 색상 변형 @default 'info'",defaultValue:{value:"'info'",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"좌측 칩 레이블. 미지정 시 칩 미표시"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"우측 액션 슬롯 (Button 등). 미지정 시 액션 영역 미렌더"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"메시지 본문"}}};const F={title:"Components/Callout",component:s,tags:["autodocs"]},d={info:"안내",success:"완료",warning:"주의",danger:"오류"},o={args:{intent:"info",label:"안내",children:"쿠키 사용에 동의하면 더 나은 분석 경험을 제공합니다.",actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{shape:"ghost",size:"sm",children:"거부"}),e.jsx(a,{size:"sm",children:"동의"})]})},argTypes:{intent:{control:"select",options:["info","success","warning","danger"]},label:{control:"text"},children:{control:"text"},actions:{control:!1}}},E=["info","success","warning","danger"],u=e.jsxs(e.Fragment,{children:[e.jsx(a,{shape:"ghost",size:"sm",children:"거부"}),e.jsx(a,{size:"sm",children:"동의"})]}),n={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:i,children:E.map(t=>e.jsxs("div",{style:{...i,gap:"0.75rem"},children:[e.jsxs("span",{style:v,children:['intent="',t,'"']}),e.jsx(s,{intent:t,label:d[t],actions:u,children:"칩과 액션이 모두 있는 기본 형태입니다."}),e.jsx(s,{intent:t,label:d[t],children:"칩만 있고 액션은 없습니다."}),e.jsx(s,{intent:t,actions:u,children:"칩 없이 메시지와 액션만 있습니다."}),e.jsx(s,{intent:t,children:"메시지만 있는 가장 단순한 형태입니다."})]},t))})},l={render:()=>e.jsx(s,{intent:"warning",label:"주의",actions:e.jsx(a,{size:"sm",onClick:()=>{window.alert("확인했습니다.")},children:"확인"}),children:"저장되지 않은 변경 사항이 있습니다. 페이지를 떠나기 전에 확인하세요."})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    intent: 'info',
    label: '안내',
    children: '쿠키 사용에 동의하면 더 나은 분석 경험을 제공합니다.',
    actions: <>
        <Button shape="ghost" size="sm">
          거부
        </Button>
        <Button size="sm">동의</Button>
      </>
  },
  argTypes: {
    intent: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger']
    },
    label: {
      control: 'text'
    },
    children: {
      control: 'text'
    },
    actions: {
      control: false
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={column}>
      {INTENTS.map(intent => <div key={intent} style={{
      ...column,
      gap: '0.75rem'
    }}>
          <span style={labelStyle}>intent="{intent}"</span>

          {/* chip + actions */}
          <Callout intent={intent} label={INTENT_LABEL[intent]} actions={actionsSlot}>
            칩과 액션이 모두 있는 기본 형태입니다.
          </Callout>

          {/* chip, no actions */}
          <Callout intent={intent} label={INTENT_LABEL[intent]}>
            칩만 있고 액션은 없습니다.
          </Callout>

          {/* no chip, actions */}
          <Callout intent={intent} actions={actionsSlot}>
            칩 없이 메시지와 액션만 있습니다.
          </Callout>

          {/* no chip, no actions */}
          <Callout intent={intent}>메시지만 있는 가장 단순한 형태입니다.</Callout>
        </div>)}
    </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Callout intent="warning" label="주의" actions={<Button size="sm" onClick={() => {
    // selection / click result is owned by the caller, not the Callout.
    window.alert('확인했습니다.');
  }}>
          확인
        </Button>}>
      저장되지 않은 변경 사항이 있습니다. 페이지를 떠나기 전에 확인하세요.
    </Callout>
}`,...l.parameters?.docs?.source}}};const M=["Playground","AllStates","Controlled"];export{n as AllStates,l as Controlled,o as Playground,M as __namedExportsOrder,F as default};
