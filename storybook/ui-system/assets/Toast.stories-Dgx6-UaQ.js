import{j as o}from"./iframe-Bbzk5SKL.js";import{T as h,u as r}from"./use-toast-BzngBWEQ.js";import{B as e}from"./Button-Ct2CbUN0.js";import{r as u,c as g}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-vJ4vkNJc.js";import"./index-a9jvn9Et.js";import"./index-ZcSIculg.js";import"./Icon-hA1FLlR4.js";import"./use-interaction-state-C5rBqqWh.js";import"./Tooltip-C1_HOPpM.js";import"./use-popup-close-CeMrOUwk.js";const B={title:"Components/Toast",tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},decorators:[(s,t)=>{const n=t.args.position??"top-right";return o.jsx(h,{position:n,maxCount:5,children:o.jsx(s,{})})}],argTypes:{position:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],description:"토스트 표시 위치",table:{type:{summary:"ToastPosition"},defaultValue:{summary:"top-right"}}}}};function x(){const s=r();return o.jsx("div",{style:{...g,padding:"24px"},children:o.jsxs("div",{style:u,children:[o.jsx(e,{onClick:()=>s.info("This is an info message"),children:"Info"}),o.jsx(e,{onClick:()=>s.success("Operation completed successfully"),children:"Success"}),o.jsx(e,{onClick:()=>s.warning("Please check your input"),children:"Warning"}),o.jsx(e,{onClick:()=>s.danger("An error occurred"),children:"Danger"})]})})}const i={args:{position:"top-right"},render:()=>o.jsx(x,{})};function f(){const s=r(),t=()=>{s.info("Info: 일반 정보 메시지입니다"),s.success("Success: 작업이 완료되었습니다"),s.warning("Warning: 주의가 필요합니다"),s.danger("Danger: 오류가 발생했습니다")};return o.jsx("div",{style:{padding:"24px"},children:o.jsx(e,{onClick:t,children:"Show All Types"})})}const a={args:{position:"top-right"},render:()=>o.jsx(f,{})};function C(){const s=r(),t=()=>{s.show({message:"This toast requires user action to dismiss",type:"info",duration:0,showClose:!1,showProgress:!1,action:{label:"Confirm",onClick:()=>{}},cancelAction:{label:"Cancel",onClick:()=>{}}})};return o.jsx("div",{style:{padding:"24px"},children:o.jsx(e,{onClick:t,children:"Show Persistent Toast"})})}const c={args:{position:"top-right"},render:()=>o.jsx(C,{})};function j(){const s=r(),t=()=>{s.show({message:"File has been deleted",type:"warning",duration:8e3,action:{label:"Undo",onClick:()=>s.success("Restored")}})},n=()=>{s.show({title:"Recover Previous Work",message:"Would you like to restore the previous session?",type:"info",duration:0,showProgress:!1,showClose:!1,action:{label:"Restore",onClick:()=>s.success("Session restored")},cancelAction:{label:"Discard",onClick:()=>s.info("Session discarded")}})};return o.jsxs("div",{style:{...u,padding:"24px"},children:[o.jsx(e,{onClick:t,children:"Undo Action"}),o.jsx(e,{onClick:n,children:"Confirm Toast"})]})}const d={args:{position:"top-right"},render:()=>o.jsx(j,{})};function T(){const s=r();return o.jsxs("div",{style:{...u,padding:"24px"},children:[o.jsx(e,{onClick:()=>s.info("2 seconds",{duration:2e3}),children:"2s"}),o.jsx(e,{onClick:()=>s.info("5 seconds (default)",{duration:5e3}),children:"5s"}),o.jsx(e,{onClick:()=>s.info("10 seconds",{duration:1e4}),children:"10s"})]})}const l={args:{position:"top-right"},render:()=>o.jsx(T,{})};function y(){const s=r();return o.jsxs("div",{style:{...u,padding:"24px"},children:[o.jsx(e,{onClick:()=>s.info("Your changes have been saved automatically.",{title:"Auto Saved"}),children:"Info with Title"}),o.jsx(e,{onClick:()=>s.success("All 12 rows have been imported successfully.",{title:"Import Complete"}),children:"Success with Title"}),o.jsx(e,{onClick:()=>s.warning("Some columns have missing values.",{title:"Data Warning"}),children:"Warning with Title"}),o.jsx(e,{onClick:()=>s.danger("Unable to connect to the server.",{title:"Connection Error"}),children:"Danger with Title"}),o.jsx(e,{shape:"outline",onClick:()=>s.info("This toast has no title for comparison."),children:"Without Title"})]})}const p={args:{position:"top-right"},render:()=>o.jsx(y,{})};function k(){const s=r();let t=0;const n=()=>{t++,s.info(`Toast #${t}`)};return o.jsxs("div",{style:{...u,padding:"24px"},children:[o.jsx(e,{onClick:n,children:"Add Toast"}),o.jsx(e,{shape:"ghost",onClick:()=>s.dismissAll(),children:"Dismiss All"})]})}const m={args:{position:"top-right"},render:()=>o.jsx(k,{})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <ToastDemo />
}`,...i.parameters?.docs?.source},description:{story:"기본 토스트 유형별 표시. 각 버튼을 클릭하여 토스트를 확인할 수 있습니다.",...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <AllTypesDemo />
}`,...a.parameters?.docs?.source},description:{story:"모든 토스트 타입을 동시에 표시합니다.",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <PersistentDemo />
}`,...c.parameters?.docs?.source},description:{story:`duration: 0으로 사용자가 직접 닫아야 하는 토스트입니다.
확인/취소 버튼이 포함됩니다.`,...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <WithActionsDemo />
}`,...d.parameters?.docs?.source},description:{story:`액션 버튼이 포함된 토스트입니다.
Undo Action: 단일 액션 버튼, Confirm Toast: 확인/취소 2개 버튼.`,...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <CustomDurationDemo />
}`,...l.parameters?.docs?.source},description:{story:"다양한 duration 설정. Progress bar가 남은 시간을 시각화합니다.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <WithTitleDemo />
}`,...p.parameters?.docs?.source},description:{story:`title 속성을 사용한 토스트입니다.
title이 있으면 굵은 제목이 표시되고, message는 보조 텍스트로 표시됩니다.`,...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <MaxCountDemo />
}`,...m.parameters?.docs?.source},description:{story:"maxCount(기본 5)를 초과하면 가장 오래된 토스트가 자동 제거됩니다.",...m.parameters?.docs?.description}}};const E=["Playground","AllTypes","Persistent","WithActions","CustomDuration","WithTitle","MaxCount"];export{a as AllTypes,l as CustomDuration,m as MaxCount,c as Persistent,i as Playground,d as WithActions,p as WithTitle,E as __namedExportsOrder,B as default};
