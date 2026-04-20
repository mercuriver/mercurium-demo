import{j as s}from"./iframe-YdnAYsPN.js";import{T as y,u as n}from"./use-toast-DFY9SFD5.js";import{B as e}from"./Button-DH3bSrnu.js";import{s as j,a as x,r as a,c as T}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-PyyeKIV_.js";import"./index-DVLD4hVV.js";import"./index-J-6yexAb.js";import"./index-BsSSspqq.js";import"./use-machine-C2uSFtL6.js";import"./Tooltip-DXguWgja.js";import"./use-popup-close-BHGKtUoJ.js";import"./use-interaction-state-8WjI9ubo.js";const F={title:"Components/Toast",tags:["autodocs"],parameters:{docs:{description:{component:`
Toast 컴포넌트는 사용자에게 일시적 알림 메시지를 표시하는 오버레이 컴포넌트입니다.

## Features
- **타입**: info, success, warning, danger — 색상 + 아이콘 구분
- **Progress Bar**: 남은 시간 시각화, hover 시 일시정지
- **액션 버튼**: 확인/취소 버튼으로 사용자 응답 수집
- **Persistent**: duration: 0으로 사용자 확인 필수 토스트
- **위치**: 6방향 positioning
- **애니메이션**: slide-in/out + fade

## Usage
\`\`\`tsx
import { ToastProvider, useToast } from '@mercurium/ui-system-react';

// App 최상위에 Provider 배치
<ToastProvider position="top-right" maxCount={5}>
  <App />
</ToastProvider>

// 어디서든 hook으로 사용
const toast = useToast();
toast.info('저장되었습니다');
toast.danger('오류가 발생했습니다');
\`\`\`
        `}}},decorators:[(t,o)=>{const i=o.args.position??"top-right";return s.jsx(y,{position:i,maxCount:5,children:s.jsx(t,{})})}],argTypes:{position:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],description:"토스트 표시 위치",table:{type:{summary:"ToastPosition"},defaultValue:{summary:"top-right"}}}}};function f(){const t=n();return s.jsx("div",{style:{...T,padding:"24px"},children:s.jsxs("div",{style:a,children:[s.jsx(e,{onClick:()=>t.info("This is an info message"),children:"Info"}),s.jsx(e,{onClick:()=>t.success("Operation completed successfully"),children:"Success"}),s.jsx(e,{onClick:()=>t.warning("Please check your input"),children:"Warning"}),s.jsx(e,{onClick:()=>t.danger("An error occurred"),children:"Danger"})]})})}const c={args:{position:"top-right"},render:()=>s.jsx(f,{})};function C(){const t=n(),o=()=>{t.info("Info: 일반 정보 메시지입니다"),t.success("Success: 작업이 완료되었습니다"),t.warning("Warning: 주의가 필요합니다"),t.danger("Danger: 오류가 발생했습니다")};return s.jsx("div",{style:{padding:"24px"},children:s.jsx(e,{onClick:o,children:"Show All Types"})})}const d={args:{position:"top-right"},render:()=>s.jsx(C,{})};function v(){const t=n(),o=()=>{t.show({message:"This toast requires user action to dismiss",type:"info",duration:0,showClose:!1,showProgress:!1,action:{label:"Confirm",onClick:()=>{}},cancelAction:{label:"Cancel",onClick:()=>{}}})};return s.jsx("div",{style:{padding:"24px"},children:s.jsx(e,{onClick:o,children:"Show Persistent Toast"})})}const l={args:{position:"top-right"},render:()=>s.jsx(v,{})};function w(){const t=n(),o=()=>{t.show({message:"File has been deleted",type:"warning",duration:8e3,action:{label:"Undo",onClick:()=>t.success("Restored")}})},i=()=>{t.show({title:"Recover Previous Work",message:"Would you like to restore the previous session?",type:"info",duration:0,showProgress:!1,showClose:!1,action:{label:"Restore",onClick:()=>t.success("Session restored")},cancelAction:{label:"Discard",onClick:()=>t.info("Session discarded")}})};return s.jsxs("div",{style:{...a,padding:"24px"},children:[s.jsx(e,{onClick:o,children:"Undo Action"}),s.jsx(e,{onClick:i,children:"Confirm Toast"})]})}const p={args:{position:"top-right"},render:()=>s.jsx(w,{})};function k(){const t=n();return s.jsxs("div",{style:{...a,padding:"24px"},children:[s.jsx(e,{onClick:()=>t.info("2 seconds",{duration:2e3}),children:"2s"}),s.jsx(e,{onClick:()=>t.info("5 seconds (default)",{duration:5e3}),children:"5s"}),s.jsx(e,{onClick:()=>t.info("10 seconds",{duration:1e4}),children:"10s"})]})}const u={args:{position:"top-right"},render:()=>s.jsx(k,{})};function P(){const t=n();return s.jsxs("div",{style:{...a,padding:"24px"},children:[s.jsx(e,{onClick:()=>t.info("Your changes have been saved automatically.",{title:"Auto Saved"}),children:"Info with Title"}),s.jsx(e,{onClick:()=>t.success("All 12 rows have been imported successfully.",{title:"Import Complete"}),children:"Success with Title"}),s.jsx(e,{onClick:()=>t.warning("Some columns have missing values.",{title:"Data Warning"}),children:"Warning with Title"}),s.jsx(e,{onClick:()=>t.danger("Unable to connect to the server.",{title:"Connection Error"}),children:"Danger with Title"}),s.jsx(e,{shape:"outline",onClick:()=>t.info("This toast has no title for comparison."),children:"Without Title"})]})}const m={args:{position:"top-right"},render:()=>s.jsx(P,{})};function A(){const t=n();let o=0;const i=()=>{o++,t.info(`Toast #${o}`)};return s.jsxs("div",{style:{...a,padding:"24px"},children:[s.jsx(e,{onClick:i,children:"Add Toast"}),s.jsx(e,{shape:"ghost",onClick:()=>t.dismissAll(),children:"Dismiss All"})]})}const h={render:()=>{function t(){const o=n(),i=["info","success","warning","danger"];return s.jsxs("div",{style:j,children:[s.jsxs("div",{children:[s.jsx("h4",{style:x,children:"Type variants"}),s.jsx("div",{style:a,children:i.map(r=>s.jsx(e,{size:"sm",onClick:()=>o[r](`${r} message`),children:r},r))})]}),s.jsxs("div",{children:[s.jsx("h4",{style:x,children:"With title"}),s.jsx("div",{style:a,children:i.map(r=>s.jsxs(e,{size:"sm",shape:"outline",onClick:()=>o.show({type:r,title:"Title",message:`${r} with title`}),children:[r," + title"]},r))})]}),s.jsxs("div",{children:[s.jsx("h4",{style:x,children:"Persistent (duration=0)"}),s.jsx(e,{size:"sm",onClick:()=>o.show({type:"warning",message:"Persistent toast",duration:0}),children:"Show persistent"})]})]})}return s.jsx(y,{position:"top-right",children:s.jsx(t,{})})}},g={args:{position:"top-right"},render:()=>s.jsx(A,{})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <ToastDemo />
}`,...c.parameters?.docs?.source},description:{story:"기본 토스트 유형별 표시. 각 버튼을 클릭하여 토스트를 확인할 수 있습니다.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <AllTypesDemo />
}`,...d.parameters?.docs?.source},description:{story:"모든 토스트 타입을 동시에 표시합니다.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <PersistentDemo />
}`,...l.parameters?.docs?.source},description:{story:`duration: 0으로 사용자가 직접 닫아야 하는 토스트입니다.
확인/취소 버튼이 포함됩니다.`,...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <WithActionsDemo />
}`,...p.parameters?.docs?.source},description:{story:`액션 버튼이 포함된 토스트입니다.
Undo Action: 단일 액션 버튼, Confirm Toast: 확인/취소 2개 버튼.`,...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <CustomDurationDemo />
}`,...u.parameters?.docs?.source},description:{story:"다양한 duration 설정. Progress bar가 남은 시간을 시각화합니다.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <WithTitleDemo />
}`,...m.parameters?.docs?.source},description:{story:`title 속성을 사용한 토스트입니다.
title이 있으면 굵은 제목이 표시되고, message는 보조 텍스트로 표시됩니다.`,...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    function ToastGrid() {
      const toast = useToast();
      const types = ['info', 'success', 'warning', 'danger'] as const;
      return <div style={section}>
          <div>
            <h4 style={sectionTitle}>Type variants</h4>
            <div style={row}>
              {types.map(t => <Button key={t} size="sm" onClick={() => toast[t](\`\${t} message\`)}>
                  {t}
                </Button>)}
            </div>
          </div>
          <div>
            <h4 style={sectionTitle}>With title</h4>
            <div style={row}>
              {types.map(t => <Button key={t} size="sm" shape="outline" onClick={() => toast.show({
              type: t,
              title: 'Title',
              message: \`\${t} with title\`
            })}>
                  {t} + title
                </Button>)}
            </div>
          </div>
          <div>
            <h4 style={sectionTitle}>Persistent (duration=0)</h4>
            <Button size="sm" onClick={() => toast.show({
            type: 'warning',
            message: 'Persistent toast',
            duration: 0
          })}>
              Show persistent
            </Button>
          </div>
        </div>;
    }
    return <ToastProvider position="top-right">
        <ToastGrid />
      </ToastProvider>;
  }
}`,...h.parameters?.docs?.source},description:{story:"maxCount(기본 5)를 초과하면 가장 오래된 토스트가 자동 제거됩니다.",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <MaxCountDemo />
}`,...g.parameters?.docs?.source}}};const O=["Playground","AllTypes","Persistent","WithActions","CustomDuration","WithTitle","AllStates","MaxCount"];export{h as AllStates,d as AllTypes,u as CustomDuration,g as MaxCount,l as Persistent,c as Playground,p as WithActions,m as WithTitle,O as __namedExportsOrder,F as default};
