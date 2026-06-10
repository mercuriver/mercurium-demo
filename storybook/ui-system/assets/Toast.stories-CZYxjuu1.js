import{j as s,r as T}from"./iframe-CLvh9l4s.js";import{T as v,u as n}from"./use-toast-BjnyjfX0.js";import{B as t}from"./Button-C4d0tbhX.js";import{S as C}from"./SegmentedControl-hTkccKm5.js";import{s as A,a as x,r as a,c as f}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DExcylLQ.js";import"./index-DWhmGzug.js";import"./use-machine-BLRTH7Vb.js";import"./vanilla-extract-dynamic.esm-BUlnp6I2.js";import"./index-CDaqnAFW.js";import"./intent-icon-CwY1l8al.js";import"./Tooltip-Dfr6gyvn.js";import"./use-popup-close-LXsNnXcx.js";import"./use-merged-ref-CscWG3Tt.js";const H={title:"Components/Toast",tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},decorators:[(e,o)=>{const r=o.args.position??"top-right";return s.jsx(v,{position:r,maxCount:5,children:s.jsx(e,{})})}],argTypes:{position:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],description:"토스트 표시 위치",table:{type:{summary:"ToastPosition"},defaultValue:{summary:"top-right"}}}}};function k(){const e=n();return s.jsx("div",{style:{...f,padding:"24px"},children:s.jsxs("div",{style:a,children:[s.jsx(t,{onClick:()=>e.info("This is an info message"),children:"Info"}),s.jsx(t,{onClick:()=>e.success("Operation completed successfully"),children:"Success"}),s.jsx(t,{onClick:()=>e.warning("Please check your input"),children:"Warning"}),s.jsx(t,{onClick:()=>e.danger("An error occurred"),children:"Danger"})]})})}const c={args:{position:"top-right"},render:()=>s.jsx(k,{})};function S(){const e=n(),o=()=>{e.info("Info: 일반 정보 메시지입니다"),e.success("Success: 작업이 완료되었습니다"),e.warning("Warning: 주의가 필요합니다"),e.danger("Danger: 오류가 발생했습니다")};return s.jsx("div",{style:{padding:"24px"},children:s.jsx(t,{onClick:o,children:"Show All Types"})})}const l={args:{position:"top-right"},render:()=>s.jsx(S,{})};function P(){const e=n(),o=()=>{e.show({message:"This toast requires user action to dismiss",type:"info",duration:0,showClose:!1,showProgress:!1,action:{label:"Confirm",onClick:()=>{}},cancelAction:{label:"Cancel",onClick:()=>{}}})};return s.jsx("div",{style:{padding:"24px"},children:s.jsx(t,{onClick:o,children:"Show Persistent Toast"})})}const d={args:{position:"top-right"},render:()=>s.jsx(P,{})};function D(){const e=n(),o=()=>{e.show({message:"File has been deleted",type:"warning",duration:8e3,action:{label:"Undo",onClick:()=>e.success("Restored")}})},r=()=>{e.show({title:"Recover Previous Work",message:"Would you like to restore the previous session?",type:"info",duration:0,showProgress:!1,showClose:!1,action:{label:"Restore",onClick:()=>e.success("Session restored")},cancelAction:{label:"Discard",onClick:()=>e.info("Session discarded")}})};return s.jsxs("div",{style:{...a,padding:"24px"},children:[s.jsx(t,{onClick:o,children:"Undo Action"}),s.jsx(t,{onClick:r,children:"Confirm Toast"})]})}const p={args:{position:"top-right"},render:()=>s.jsx(D,{})};function b(){const e=n();return s.jsxs("div",{style:{...a,padding:"24px"},children:[s.jsx(t,{onClick:()=>e.info("2 seconds",{duration:2e3}),children:"2s"}),s.jsx(t,{onClick:()=>e.info("5 seconds (default)",{duration:5e3}),children:"5s"}),s.jsx(t,{onClick:()=>e.info("10 seconds",{duration:1e4}),children:"10s"})]})}const h={args:{position:"top-right"},render:()=>s.jsx(b,{})};function W(){const e=n();return s.jsxs("div",{style:{...a,padding:"24px"},children:[s.jsx(t,{onClick:()=>e.info("Your changes have been saved automatically.",{title:"Auto Saved"}),children:"Info with Title"}),s.jsx(t,{onClick:()=>e.success("All 12 rows have been imported successfully.",{title:"Import Complete"}),children:"Success with Title"}),s.jsx(t,{onClick:()=>e.warning("Some columns have missing values.",{title:"Data Warning"}),children:"Warning with Title"}),s.jsx(t,{onClick:()=>e.danger("Unable to connect to the server.",{title:"Connection Error"}),children:"Danger with Title"}),s.jsx(t,{shape:"outline",onClick:()=>e.info("This toast has no title for comparison."),children:"Without Title"})]})}const u={args:{position:"top-right"},render:()=>s.jsx(W,{})};function B(){const e=n();let o=0;const r=()=>{o++,e.info(`Toast #${o}`)};return s.jsxs("div",{style:{...a,padding:"24px"},children:[s.jsx(t,{onClick:r,children:"Add Toast"}),s.jsx(t,{shape:"ghost",onClick:()=>e.dismissAll(),children:"Dismiss All"})]})}const m={render:()=>{function e(){const o=n(),r=["info","success","warning","danger"];return s.jsxs("div",{style:A,children:[s.jsxs("div",{children:[s.jsx("h4",{style:x,children:"Type variants"}),s.jsx("div",{style:a,children:r.map(i=>s.jsx(t,{size:"sm",onClick:()=>o[i](`${i} message`),children:i},i))})]}),s.jsxs("div",{children:[s.jsx("h4",{style:x,children:"With title"}),s.jsx("div",{style:a,children:r.map(i=>s.jsxs(t,{size:"sm",shape:"outline",onClick:()=>o.show({type:i,title:"Title",message:`${i} with title`}),children:[i," + title"]},i))})]}),s.jsxs("div",{children:[s.jsx("h4",{style:x,children:"Persistent (duration=0)"}),s.jsx(t,{size:"sm",onClick:()=>o.show({type:"warning",message:"Persistent toast",duration:0}),children:"Show persistent"})]}),s.jsxs("div",{children:[s.jsx("h4",{style:x,children:"With renderActions"}),s.jsx(t,{size:"sm",onClick:()=>o.show({type:"info",title:"Custom action slot",message:"renderActions replaces the default action buttons.",showProgress:!1,renderActions:s.jsx(C,{items:[{value:"a",label:"Option A"},{value:"b",label:"Option B"}],value:"a",onChange:()=>{},size:"sm"})}),children:"Show with renderActions"})]})]})}return s.jsx(v,{position:"top-right",children:s.jsx(e,{})})}},y={args:{position:"top-right"},render:()=>s.jsx(B,{})};function z(){const e=n(),[o,r]=T.useState("navigator"),i=[{value:"navigator",label:"Use Navigator"},{value:"all",label:"Show All"}],j=()=>{e.show({title:"Large dataset detected",message:"Category axis has 120+ items. Choose how to display this chart.",type:"info",showClose:!0,showProgress:!1,renderActions:s.jsx(C,{items:i,value:o,onChange:w=>r(w),size:"sm"})})};return s.jsxs("div",{style:{...f,padding:"24px"},children:[s.jsx("div",{style:a,children:s.jsx(t,{onClick:j,children:"Show Density Overflow Toast"})}),s.jsxs("div",{style:{fontSize:14},children:["Current view: ",s.jsx("strong",{children:o})]})]})}const g={args:{position:"top-right"},render:()=>s.jsx(z,{})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <ToastDemo />
}`,...c.parameters?.docs?.source},description:{story:"기본 토스트 유형별 표시. 각 버튼을 클릭하여 토스트를 확인할 수 있습니다.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <AllTypesDemo />
}`,...l.parameters?.docs?.source},description:{story:"모든 토스트 타입을 동시에 표시합니다.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <PersistentDemo />
}`,...d.parameters?.docs?.source},description:{story:`duration: 0으로 사용자가 직접 닫아야 하는 토스트입니다.
확인/취소 버튼이 포함됩니다.`,...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <WithActionsDemo />
}`,...p.parameters?.docs?.source},description:{story:`액션 버튼이 포함된 토스트입니다.
Undo Action: 단일 액션 버튼, Confirm Toast: 확인/취소 2개 버튼.`,...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <CustomDurationDemo />
}`,...h.parameters?.docs?.source},description:{story:"다양한 duration 설정. Progress bar가 남은 시간을 시각화합니다.",...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <WithTitleDemo />
}`,...u.parameters?.docs?.source},description:{story:`title 속성을 사용한 토스트입니다.
title이 있으면 굵은 제목이 표시되고, message는 보조 텍스트로 표시됩니다.`,...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <div>
            <h4 style={sectionTitle}>With renderActions</h4>
            <Button size="sm" onClick={() => toast.show({
            type: 'info',
            title: 'Custom action slot',
            message: 'renderActions replaces the default action buttons.',
            showProgress: false,
            renderActions: <SegmentedControl items={[{
              value: 'a',
              label: 'Option A'
            }, {
              value: 'b',
              label: 'Option B'
            }]} value="a" onChange={() => {}} size="sm" />
          })}>
              Show with renderActions
            </Button>
          </div>
        </div>;
    }
    return <ToastProvider position="top-right">
        <ToastGrid />
      </ToastProvider>;
  }
}`,...m.parameters?.docs?.source},description:{story:"maxCount(기본 5)를 초과하면 가장 오래된 토스트가 자동 제거됩니다.",...m.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <MaxCountDemo />
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: () => <RenderActionsDemo />
}`,...g.parameters?.docs?.source},description:{story:'`renderActions` escape hatch: SegmentedControl 같이 "어느 쪽이 선택되어 있는가" 를\n표현해야 하는 상호작용을 Toast 액션 영역에 주입합니다.\n\n규칙:\n- `action` / `cancelAction` 과 mutually exclusive -- 동시 제공 시 기본 버튼 무시.\n- duration 기반 자동 닫힘 비활성 (persistent 강제). 닫기 버튼 또는 `dismiss(id)` 필요.\n- 선택 상태는 caller 가 소유 (여기서는 `useState`). Toast 는 단순 slot.',...g.parameters?.docs?.description}}};const J=["Playground","AllTypes","Persistent","WithActions","CustomDuration","WithTitle","AllStates","MaxCount","WithRenderActions"];export{m as AllStates,l as AllTypes,h as CustomDuration,y as MaxCount,d as Persistent,c as Playground,p as WithActions,g as WithRenderActions,u as WithTitle,J as __namedExportsOrder,H as default};
