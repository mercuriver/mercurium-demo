import{j as e,r as j}from"./iframe-Bbzk5SKL.js";import{B as t}from"./Button-Ct2CbUN0.js";import{I as z,c as T,f as A,a as k}from"./Icon-hA1FLlR4.js";import{s as x,a as r,r as n}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ZcSIculg.js";import"./use-interaction-state-C5rBqqWh.js";const V={title:"Components/Button",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
Button 컴포넌트는 사용자 인터랙션을 위한 기본 컴포넌트입니다.

## Features
- **Shape**: 버튼의 시각적 형태 — \`solid\`, \`outline\`, \`ghost\`, \`soft\`
- **Intent**: 버튼의 의미/색상 — \`primary\`, \`default\`, \`secondary\`, \`danger\`, \`warning\`, \`info\`
- **Sizes**: sm, md, lg
- **States**: disabled, loading

## Usage
\`\`\`tsx
import { Button } from '@mercurium/ui-system-react';

// 기본 (solid + primary)
<Button>저장</Button>

// 보조 액션
<Button shape="outline">취소</Button>

// 위험한 액션
<Button intent="danger">삭제</Button>

// 아이콘 버튼
<Button shape="ghost"><Icon /></Button>
\`\`\`

## 권장 조합

| shape \\ intent | primary | default | danger | warning | info |
|---|---|---|---|---|---|
| **solid** | 주 CTA | 보조 solid | 삭제(복구불가) | 주의 필요 액션 | 정보성 액션 |
| **outline** | 주 outline | 보조/취소 | 삭제 outline | 경고 outline | 정보 outline |
| **ghost** | 텍스트 CTA | 아이콘 버튼, 툴바 | 삭제 ghost | 경고 ghost | 정보 ghost |
| **soft** | 부드러운 CTA | 중립 soft | 삭제 soft | 경고 soft | 정보 soft |
        `}}},argTypes:{shape:{control:"select",options:["solid","outline","ghost","soft"],description:"버튼의 시각적 형태",table:{type:{summary:"ButtonShape"},defaultValue:{summary:"solid"}}},intent:{control:"select",options:["primary","default","secondary","danger","warning","info"],description:"버튼의 의미/색상",table:{type:{summary:"ButtonIntent"},defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md","lg"],description:"버튼의 크기",table:{type:{summary:"ComponentSize"},defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"버튼 비활성화 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"로딩 상태 표시",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{control:"text",description:"버튼 내용"}}},d={args:{children:"Button",shape:"solid",intent:"primary",size:"md",disabled:!1,loading:!1}},c={render:()=>{const o=["primary","default","secondary","danger","warning","info"],s=["solid","outline","ghost","soft"],B=["sm","md","lg"];return e.jsx("div",{style:x,children:s.map(i=>e.jsxs("div",{children:[e.jsxs("h4",{style:r,children:['shape="',i,'"']}),B.map(l=>e.jsxs("div",{style:{marginBottom:12},children:[e.jsxs("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:['size="',l,'"']}),e.jsxs("div",{style:n,children:[o.map(a=>e.jsx(t,{shape:i,intent:a,size:l,children:a},a)),e.jsx(t,{shape:i,size:l,disabled:!0,children:"disabled"}),e.jsx(t,{shape:i,size:l,loading:!0,children:"loading"})]})]},l))]},i))})}},p={args:{children:"Disabled Button",disabled:!0}},u={args:{children:"Loading Button",loading:!0}},b=["primary","default","secondary","danger","warning","info"],S=["solid","outline","ghost","soft"],h={render:()=>e.jsx("div",{style:x,children:S.map(o=>e.jsxs("div",{children:[e.jsxs("h4",{style:r,children:['shape="',o,'"']}),e.jsx("div",{style:n,children:b.map(s=>e.jsx(t,{shape:o,intent:s,size:"sm",children:s},s))})]},o))}),parameters:{docs:{description:{story:"4가지 shape × 6가지 intent 전체 조합입니다. 자유 조합이 허용되며, 권장 조합은 컴포넌트 설명의 표를 참고하세요."}}}},m={render:()=>e.jsxs("div",{style:x,children:[e.jsxs("div",{children:[e.jsx("h4",{style:r,children:"주 액션 (solid + primary)"}),e.jsxs("div",{style:n,children:[e.jsx(t,{children:"저장"}),e.jsx(t,{children:"확인"}),e.jsx(t,{loading:!0,children:"저장 중..."}),e.jsx(t,{disabled:!0,children:"저장"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:r,children:"보조/취소 (outline + default)"}),e.jsxs("div",{style:n,children:[e.jsx(t,{shape:"outline",children:"취소"}),e.jsx(t,{shape:"outline",children:"뒤로"}),e.jsx(t,{shape:"outline",disabled:!0,children:"취소"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:r,children:"아이콘/툴바 버튼 (ghost + default)"}),e.jsxs("div",{style:n,children:[e.jsx(t,{shape:"ghost",size:"sm",children:"필터"}),e.jsx(t,{shape:"ghost",size:"sm",children:"가져오기"}),e.jsx(t,{shape:"ghost",size:"sm",disabled:!0,children:"편집"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:r,children:"위험한 액션 (solid + danger)"}),e.jsxs("div",{style:n,children:[e.jsx(t,{intent:"danger",children:"영구 삭제"}),e.jsx(t,{shape:"outline",intent:"danger",children:"삭제"}),e.jsx(t,{shape:"ghost",intent:"danger",children:"삭제"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:r,children:"주의 액션 (solid + warning)"}),e.jsxs("div",{style:n,children:[e.jsx(t,{intent:"warning",children:"초기화"}),e.jsx(t,{shape:"outline",intent:"warning",children:"초기화"}),e.jsx(t,{shape:"soft",intent:"warning",children:"초기화"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:r,children:"정보/안내 (soft + info)"}),e.jsxs("div",{style:n,children:[e.jsx(t,{shape:"soft",intent:"info",children:"자세히"}),e.jsx(t,{shape:"outline",intent:"info",children:"안내"})]})]})]}),parameters:{docs:{description:{story:"실제 UI에서 자주 쓰이는 권장 조합들입니다."}}}},g={render:()=>e.jsx("div",{style:x,children:S.map(o=>e.jsxs("div",{children:[e.jsxs("h4",{style:r,children:['shape="',o,'"']}),e.jsx("div",{style:n,children:b.map(s=>e.jsx(t,{shape:o,intent:s,size:"sm",loading:!0,children:s},s))})]},o))}),parameters:{docs:{description:{story:"loading 스피너는 `currentColor`로 그려져 shape/intent 조합의 텍스트 색상을 자동으로 따릅니다. 별도의 변형 없이 모든 조합에서 일관된 UX를 제공합니다."}}}},y={render:()=>e.jsxs("div",{style:n,children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"})]})},v={render:function(){const[s,B]=j.useState(!0),[i,l]=j.useState(!1),[a,w]=j.useState(!1),f=C=>({padding:"0.375rem",minHeight:"auto",...C&&{color:"var(--color-action-primary)",backgroundColor:"var(--color-surface-subtle)"}});return e.jsx("div",{style:x,children:e.jsxs("div",{children:[e.jsx("h4",{style:r,children:"Icon Toggle Buttons (ghost + active state)"}),e.jsxs("div",{style:n,children:[e.jsx(t,{shape:"ghost",size:"sm",style:f(s),onClick:()=>B(!s),"aria-pressed":s,"aria-label":"Auto-save",children:e.jsx(z,{icon:T,size:14})}),e.jsx(t,{shape:"ghost",size:"sm",style:f(i),onClick:()=>l(!i),"aria-pressed":i,"aria-label":"Filter",children:e.jsx(z,{icon:A,size:14})}),e.jsx(t,{shape:"ghost",size:"sm",style:f(a),onClick:()=>w(!a),"aria-pressed":a,"aria-label":"Settings panel",children:e.jsx(z,{icon:k,size:16})})]}),e.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--color-text-subtle)",marginTop:8},children:["Auto-save: ",s?"ON":"OFF"," | Filter: ",i?"ON":"OFF"," | Panel: ",a?"Open":"Closed"]})]})})},parameters:{docs:{description:{story:"\n`ghost` shape 버튼을 토글 스위치처럼 사용하는 패턴입니다.\n\n**핵심 포인트:**\n- `aria-pressed`로 접근성 토글 상태 전달\n- 활성 상태에서 `backgroundColor: surface-subtle`, `color: action-primary` 적용\n- `Tooltip`과 함께 사용하여 아이콘 버튼의 기능 설명 (이 스토리에서는 생략)\n- 아이콘 크기: 14px (표준) 또는 16px (강조)\n        "}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    shape: 'solid',
    intent: 'primary',
    size: 'md',
    disabled: false,
    loading: false
  }
}`,...d.parameters?.docs?.source},description:{story:"기본 Playground - Controls 패널에서 모든 props를 조작할 수 있습니다.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const intents = ['primary', 'default', 'secondary', 'danger', 'warning', 'info'] as const;
    const shapes = ['solid', 'outline', 'ghost', 'soft'] as const;
    const sizes = ['sm', 'md', 'lg'] as const;
    return <div style={section}>
        {shapes.map(shape => <div key={shape}>
            <h4 style={sectionTitle}>shape="{shape}"</h4>
            {sizes.map(size => <div key={size} style={{
          marginBottom: 12
        }}>
                <p style={{
            fontSize: 11,
            color: 'var(--color-text-subtle)',
            margin: '0 0 4px'
          }}>size="{size}"</p>
                <div style={row}>
                  {intents.map(intent => <Button key={intent} shape={shape} intent={intent} size={size}>{intent}</Button>)}
                  <Button shape={shape} size={size} disabled>disabled</Button>
                  <Button shape={shape} size={size} loading>loading</Button>
                </div>
              </div>)}
          </div>)}
      </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:`전체 shape x intent x size x state 조합 매트릭스.
QA 검증용 시각 아티팩트입니다.`,...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...p.parameters?.docs?.source},description:{story:"비활성화 상태의 버튼",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Loading Button',
    loading: true
  }
}`,...u.parameters?.docs?.source},description:{story:"로딩 상태의 버튼 (Playground용)",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={section}>
      {shapes.map(shape => <div key={shape}>
          <h4 style={sectionTitle}>shape="{shape}"</h4>
          <div style={row}>
            {intents.map(intent => <Button key={intent} shape={shape} intent={intent} size="sm">
                {intent}
              </Button>)}
          </div>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: '4가지 shape × 6가지 intent 전체 조합입니다. 자유 조합이 허용되며, 권장 조합은 컴포넌트 설명의 표를 참고하세요.'
      }
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`shape × intent 전체 조합 매트릭스입니다.
각 셀에 권장 여부가 표시됩니다.`,...h.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={section}>
      <div>
        <h4 style={sectionTitle}>주 액션 (solid + primary)</h4>
        <div style={row}>
          <Button>저장</Button>
          <Button>확인</Button>
          <Button loading>저장 중...</Button>
          <Button disabled>저장</Button>
        </div>
      </div>
      <div>
        <h4 style={sectionTitle}>보조/취소 (outline + default)</h4>
        <div style={row}>
          <Button shape="outline">취소</Button>
          <Button shape="outline">뒤로</Button>
          <Button shape="outline" disabled>
            취소
          </Button>
        </div>
      </div>
      <div>
        <h4 style={sectionTitle}>아이콘/툴바 버튼 (ghost + default)</h4>
        <div style={row}>
          <Button shape="ghost" size="sm">
            필터
          </Button>
          <Button shape="ghost" size="sm">
            가져오기
          </Button>
          <Button shape="ghost" size="sm" disabled>
            편집
          </Button>
        </div>
      </div>
      <div>
        <h4 style={sectionTitle}>위험한 액션 (solid + danger)</h4>
        <div style={row}>
          <Button intent="danger">영구 삭제</Button>
          <Button shape="outline" intent="danger">
            삭제
          </Button>
          <Button shape="ghost" intent="danger">
            삭제
          </Button>
        </div>
      </div>
      <div>
        <h4 style={sectionTitle}>주의 액션 (solid + warning)</h4>
        <div style={row}>
          <Button intent="warning">초기화</Button>
          <Button shape="outline" intent="warning">
            초기화
          </Button>
          <Button shape="soft" intent="warning">
            초기화
          </Button>
        </div>
      </div>
      <div>
        <h4 style={sectionTitle}>정보/안내 (soft + info)</h4>
        <div style={row}>
          <Button shape="soft" intent="info">
            자세히
          </Button>
          <Button shape="outline" intent="info">
            안내
          </Button>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '실제 UI에서 자주 쓰이는 권장 조합들입니다.'
      }
    }
  }
}`,...m.parameters?.docs?.source},description:{story:"실제 UI에서 자주 사용하는 권장 조합 예시입니다.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={section}>
      {shapes.map(shape => <div key={shape}>
          <h4 style={sectionTitle}>shape="{shape}"</h4>
          <div style={row}>
            {intents.map(intent => <Button key={intent} shape={shape} intent={intent} size="sm" loading>
                {intent}
              </Button>)}
          </div>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'loading 스피너는 \`currentColor\`로 그려져 shape/intent 조합의 텍스트 색상을 자동으로 따릅니다. 별도의 변형 없이 모든 조합에서 일관된 UX를 제공합니다.'
      }
    }
  }
}`,...g.parameters?.docs?.source},description:{story:"loading 상태는 shape/intent에 관계없이 현재 버튼 색상에 맞는 스피너로 표현됩니다.\n`currentColor`를 사용하므로 각 조합의 텍스트 색상을 그대로 따릅니다.",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={row}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...y.parameters?.docs?.source},description:{story:"크기 비교",...y.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function IconToggleDemo() {
    const [autoSave, setAutoSave] = useState(true);
    const [filterActive, setFilterActive] = useState(false);
    const [panelOpen, setPanelOpen] = useState(false);
    const toggleStyle = (active: boolean) => ({
      padding: '0.375rem',
      minHeight: 'auto' as const,
      ...(active && {
        color: 'var(--color-action-primary)',
        backgroundColor: 'var(--color-surface-subtle)'
      })
    });
    return <div style={section}>
        <div>
          <h4 style={sectionTitle}>Icon Toggle Buttons (ghost + active state)</h4>
          <div style={row}>
            <Button shape="ghost" size="sm" style={toggleStyle(autoSave)} onClick={() => setAutoSave(!autoSave)} aria-pressed={autoSave} aria-label="Auto-save">
              <Icon icon={cloudCheck} size={14} />
            </Button>
            <Button shape="ghost" size="sm" style={toggleStyle(filterActive)} onClick={() => setFilterActive(!filterActive)} aria-pressed={filterActive} aria-label="Filter">
              <Icon icon={filter} size={14} />
            </Button>
            <Button shape="ghost" size="sm" style={toggleStyle(panelOpen)} onClick={() => setPanelOpen(!panelOpen)} aria-pressed={panelOpen} aria-label="Settings panel">
              <Icon icon={fadersHorizontal} size={16} />
            </Button>
          </div>
          <p style={{
          fontSize: '0.75rem',
          color: 'var(--color-text-subtle)',
          marginTop: 8
        }}>
            Auto-save: {autoSave ? 'ON' : 'OFF'} | Filter: {filterActive ? 'ON' : 'OFF'} | Panel: {panelOpen ? 'Open' : 'Closed'}
          </p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
\\\`ghost\\\` shape 버튼을 토글 스위치처럼 사용하는 패턴입니다.

**핵심 포인트:**
- \\\`aria-pressed\\\`로 접근성 토글 상태 전달
- 활성 상태에서 \\\`backgroundColor: surface-subtle\\\`, \\\`color: action-primary\\\` 적용
- \\\`Tooltip\\\`과 함께 사용하여 아이콘 버튼의 기능 설명 (이 스토리에서는 생략)
- 아이콘 크기: 14px (표준) 또는 16px (강조)
        \`
      }
    }
  }
}`,...v.parameters?.docs?.source},description:{story:"아이콘 토글 버튼 — 활성/비활성 상태를 시각적으로 구분하는 패턴.\n\n`ghost` shape 버튼에 `aria-pressed`로 토글 상태를 전달하고,\n활성 상태일 때 `backgroundColor`과 `color`를 변경하여 구분합니다.\n`Tooltip`과 함께 사용하여 버튼의 기능을 설명합니다.\n\n사용 예: Auto-save 토글, 필터 활성화, 패널 열기/닫기",...v.parameters?.docs?.description}}};const H=["Playground","AllStates","Disabled","Loading","ShapeIntentMatrix","RecommendedCombinations","LoadingStates","Sizes","IconToggle"];export{c as AllStates,p as Disabled,v as IconToggle,u as Loading,g as LoadingStates,d as Playground,m as RecommendedCombinations,h as ShapeIntentMatrix,y as Sizes,H as __namedExportsOrder,V as default};
