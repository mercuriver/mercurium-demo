import{j as e,r as c}from"./iframe-omubX4Zv.js";import{T as t}from"./Tooltip-PvwIEMNF.js";import{B as o}from"./Button-DG6WR4JD.js";import{C as m}from"./Checkbox-DOGkGTq4.js";import{i as p}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtU5-7b1.js";import"./index-BT36lJMY.js";import"./use-interaction-state-Dtf1cT8c.js";import"./index-ZcSIculg.js";import"./use-popup-close-BqcHjELS.js";import"./use-toggle-Ngt-NwjI.js";const B={title:"Components/Tooltip",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
Tooltip 컴포넌트는 요소에 마우스를 올리거나 포커스할 때 추가 정보를 보여주는 컴포넌트입니다.

## Features
- **Placements**: top, bottom, left, right
- **Delay**: 표시 지연 시간 설정
- **Auto Ellipsis**: 텍스트가 잘릴 때만 자동 표시
- **Rich Content**: string 외에 ReactNode도 지원

## Usage
\`\`\`tsx
import { Tooltip } from '@mercurium/ui-system-react';

<Tooltip content="저장합니다">
  <Button>Save</Button>
</Tooltip>
\`\`\`
        `}}},argTypes:{content:{control:"text",description:"툴팁에 표시할 내용"},placement:{control:"select",options:["top","bottom","left","right"],description:"툴팁 표시 위치",table:{type:{summary:"TooltipPlacement"},defaultValue:{summary:"top"}}},showDelay:{control:{type:"number",min:0,max:2e3,step:100},description:"표시 지연 시간 (ms)",table:{type:{summary:"number"},defaultValue:{summary:"500"}}},disabled:{control:"boolean",description:"툴팁 비활성화",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},autoEllipsis:{control:"boolean",description:"텍스트 잘림 시에만 표시",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},offset:{control:{type:"number",min:0,max:24,step:2},description:"trigger-tooltip 간격 (px)",table:{type:{summary:"number"},defaultValue:{summary:"8"}}}}},i={args:{content:"이것은 툴팁입니다",placement:"top",showDelay:500,disabled:!1,autoEllipsis:!1,offset:8},render:s=>e.jsx("div",{style:{padding:"80px",display:"flex",justifyContent:"center"},children:e.jsx(t,{...s,children:e.jsx(o,{children:"Hover me"})})})},r={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"40px",padding:"80px",maxWidth:"400px",margin:"0 auto"},children:[e.jsx(t,{content:"Top tooltip",placement:"top",showDelay:0,children:e.jsx(o,{style:{width:"100%"},children:"Top"})}),e.jsx(t,{content:"Bottom tooltip",placement:"bottom",showDelay:0,children:e.jsx(o,{style:{width:"100%"},children:"Bottom"})}),e.jsx(t,{content:"Left tooltip",placement:"left",showDelay:0,children:e.jsx(o,{style:{width:"100%"},children:"Left"})}),e.jsx(t,{content:"Right tooltip",placement:"right",showDelay:0,children:e.jsx(o,{style:{width:"100%"},children:"Right"})})]}),parameters:{docs:{description:{story:"top, bottom, left, right 네 방향을 지원합니다."}}}},l={render:()=>e.jsxs("div",{style:{padding:"80px",maxWidth:"300px"},children:[e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("p",{style:{...p,marginBottom:"8px",fontSize:"13px"},children:"텍스트가 잘리면 툴팁 표시"}),e.jsx(t,{content:"이것은 아주 긴 파일 이름입니다_최종_진짜최종_수정완료.pdf",autoEllipsis:!0,showDelay:200,children:e.jsx("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:"8px 12px",border:"1px solid var(--color-border-default)",borderRadius:"6px"},children:"이것은 아주 긴 파일 이름입니다_최종_진짜최종_수정완료.pdf"})})]}),e.jsxs("div",{children:[e.jsx("p",{style:{...p,marginBottom:"8px",fontSize:"13px"},children:"텍스트가 잘리지 않으면 툴팁 미표시"}),e.jsx(t,{content:"짧은 텍스트",autoEllipsis:!0,showDelay:200,children:e.jsx("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px"},children:"짧은 텍스트"})})]})]}),parameters:{docs:{description:{story:"autoEllipsis가 true이면 텍스트가 잘릴 때(scrollWidth > clientWidth)만 툴팁을 표시합니다."}}}},n={render:()=>e.jsx("div",{style:{padding:"80px",display:"flex",justifyContent:"center"},children:e.jsx(t,{content:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx("strong",{children:"데이터 포인트"}),e.jsx("span",{children:"날짜: 2024-01-15"}),e.jsx("span",{children:"값: 1,234"})]}),placement:"right",showDelay:0,children:e.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",backgroundColor:"#3b82f6",cursor:"pointer"}})})}),parameters:{docs:{description:{story:"content에 ReactNode를 전달하여 차트 hover 등에 활용할 수 있습니다."}}}},a={render:()=>{const[s,d]=c.useState(!1);return e.jsxs("div",{style:{padding:"80px",display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[e.jsx(t,{content:"이 툴팁은 비활성화할 수 있습니다",disabled:s,showDelay:0,children:e.jsx(o,{children:"Hover me"})}),e.jsx(m,{label:"Tooltip disabled",checked:s,onCheckedChange:d})]})},parameters:{docs:{description:{story:"disabled prop으로 툴팁을 동적으로 비활성화할 수 있습니다."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    content: '이것은 툴팁입니다',
    placement: 'top',
    showDelay: 500,
    disabled: false,
    autoEllipsis: false,
    offset: 8
  },
  render: args => <div style={{
    padding: '80px',
    display: 'flex',
    justifyContent: 'center'
  }}>
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    padding: '80px',
    maxWidth: '400px',
    margin: '0 auto'
  }}>
      <Tooltip content="Top tooltip" placement="top" showDelay={0}>
        <Button style={{
        width: '100%'
      }}>Top</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" placement="bottom" showDelay={0}>
        <Button style={{
        width: '100%'
      }}>Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" placement="left" showDelay={0}>
        <Button style={{
        width: '100%'
      }}>Left</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" placement="right" showDelay={0}>
        <Button style={{
        width: '100%'
      }}>Right</Button>
      </Tooltip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'top, bottom, left, right 네 방향을 지원합니다.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '80px',
    maxWidth: '300px'
  }}>
      <div style={{
      marginBottom: '24px'
    }}>
        <p style={{
        ...infoText,
        marginBottom: '8px',
        fontSize: '13px'
      }}>
          텍스트가 잘리면 툴팁 표시
        </p>
        <Tooltip content="이것은 아주 긴 파일 이름입니다_최종_진짜최종_수정완료.pdf" autoEllipsis showDelay={200}>
          <div style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          padding: '8px 12px',
          border: '1px solid var(--color-border-default)',
          borderRadius: '6px'
        }}>
            이것은 아주 긴 파일 이름입니다_최종_진짜최종_수정완료.pdf
          </div>
        </Tooltip>
      </div>
      <div>
        <p style={{
        ...infoText,
        marginBottom: '8px',
        fontSize: '13px'
      }}>
          텍스트가 잘리지 않으면 툴팁 미표시
        </p>
        <Tooltip content="짧은 텍스트" autoEllipsis showDelay={200}>
          <div style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          padding: '8px 12px',
          border: '1px solid #e2e8f0',
          borderRadius: '6px'
        }}>
            짧은 텍스트
          </div>
        </Tooltip>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'autoEllipsis가 true이면 텍스트가 잘릴 때(scrollWidth > clientWidth)만 툴팁을 표시합니다.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '80px',
    display: 'flex',
    justifyContent: 'center'
  }}>
      <Tooltip content={<div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }}>
            <strong>데이터 포인트</strong>
            <span>날짜: 2024-01-15</span>
            <span>값: 1,234</span>
          </div>} placement="right" showDelay={0}>
        <div style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: '#3b82f6',
        cursor: 'pointer'
      }} />
      </Tooltip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'content에 ReactNode를 전달하여 차트 hover 등에 활용할 수 있습니다.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [disabled, setDisabled] = useState(false);
    return <div style={{
      padding: '80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px'
    }}>
        <Tooltip content="이 툴팁은 비활성화할 수 있습니다" disabled={disabled} showDelay={0}>
          <Button>Hover me</Button>
        </Tooltip>
        <Checkbox label="Tooltip disabled" checked={disabled} onCheckedChange={setDisabled} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'disabled prop으로 툴팁을 동적으로 비활성화할 수 있습니다.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const C=["Playground","AllPlacements","AutoEllipsis","RichContent","Disabled"];export{r as AllPlacements,l as AutoEllipsis,a as Disabled,i as Playground,n as RichContent,C as __namedExportsOrder,B as default};
