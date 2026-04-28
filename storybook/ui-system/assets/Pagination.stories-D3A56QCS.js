import{j as e,r as m}from"./iframe-80ZV6wNn.js";import{P as s}from"./Pagination-Dg7b-qid.js";import{s as c,a as t,c as p,i as u}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BxD26iQO.js";import"./use-machine-88aMQJYn.js";import"./Button-IhXIeE3_.js";import"./use-interaction-state-B50cmliQ.js";import"./Code-Dx44NRNL.js";const b={title:"Components/Pagination",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
Pagination 컴포넌트는 대량 데이터를 페이지 단위로 탐색할 수 있게 합니다.

## Features
- **Controlled / Uncontrolled**: \`page\` + \`onPageChange\` 또는 \`defaultPage\`
- **Sizes**: sm, md, lg
- **Info 표시**: \`showInfo\`로 "Showing X–Y of Z entries" 텍스트 표시
- **Ellipsis**: 페이지 수가 많으면 boundary/sibling 기반으로 자동 생략

## Usage
\`\`\`tsx
import { Pagination } from '@mercurium/ui-system-react';

<Pagination total={100} pageSize={10} defaultPage={1} showInfo />
\`\`\`
        `}}},argTypes:{total:{control:"number",description:"전체 항목 수"},pageSize:{control:"number",description:"페이지당 항목 수",table:{defaultValue:{summary:"10"}}},size:{control:"select",options:["sm","md","lg"],description:"컴포넌트 크기",table:{type:{summary:"ComponentSize"},defaultValue:{summary:"sm"}}},disabled:{control:"boolean",description:"전체 비활성화",table:{defaultValue:{summary:"false"}}},showInfo:{control:"boolean",description:'"Showing X–Y of Z entries" 텍스트 표시',table:{defaultValue:{summary:"false"}}},siblingCount:{control:"number",description:"현재 페이지 좌우 표시할 페이지 수",table:{defaultValue:{summary:"1"}}},boundaryCount:{control:"number",description:"시작/끝에 항상 표시할 페이지 수",table:{defaultValue:{summary:"1"}}}}},o={args:{total:200,pageSize:10,defaultPage:1,size:"sm",showInfo:!0,disabled:!1}},n={render:()=>e.jsxs("div",{style:c,children:[["sm","md","lg"].map(a=>e.jsxs("div",{children:[e.jsxs("h4",{style:t,children:['size="',a,'"']}),e.jsxs("div",{style:p,children:[e.jsx(s,{total:100,pageSize:10,defaultPage:5,size:a,showInfo:!0}),e.jsx(s,{total:100,pageSize:10,defaultPage:5,size:a,showInfo:!0,disabled:!0})]})]},a)),e.jsxs("div",{children:[e.jsx("h4",{style:t,children:"Few pages (no ellipsis)"}),e.jsx(s,{total:30,pageSize:10,defaultPage:2,showInfo:!0})]})]})},r={render:()=>{const[a,g]=m.useState(1);return e.jsxs("div",{style:p,children:[e.jsx(s,{total:100,pageSize:10,page:a,onPageChange:g,showInfo:!0}),e.jsxs("span",{style:u,children:["Current page: ",a]})]})},parameters:{docs:{description:{story:"`page`와 `onPageChange`를 사용한 제어 컴포넌트 예제입니다."}}}},i={render:()=>e.jsxs("div",{style:c,children:[e.jsxs("div",{children:[e.jsx("h4",{style:t,children:"Small"}),e.jsx(s,{total:100,pageSize:10,defaultPage:3,size:"sm",showInfo:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:t,children:"Medium"}),e.jsx(s,{total:100,pageSize:10,defaultPage:3,size:"md",showInfo:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:t,children:"Large"}),e.jsx(s,{total:100,pageSize:10,defaultPage:3,size:"lg",showInfo:!0})]})]}),parameters:{docs:{description:{story:"sm, md, lg 세 가지 크기를 지원합니다."}}}},l={args:{total:30,pageSize:10,defaultPage:2,showInfo:!0},parameters:{docs:{description:{story:"총 페이지 수가 적은 경우 ellipsis 없이 모든 페이지가 표시됩니다."}}}},d={args:{total:100,pageSize:10,defaultPage:5,disabled:!0,showInfo:!0},parameters:{docs:{description:{story:"전체 비활성화 상태에서는 모든 버튼이 클릭 불가능합니다."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    total: 200,
    pageSize: 10,
    defaultPage: 1,
    size: 'sm',
    showInfo: true,
    disabled: false
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={section}>
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size}>
          <h4 style={sectionTitle}>size="{size}"</h4>
          <div style={column}>
            <Pagination total={100} pageSize={10} defaultPage={5} size={size} showInfo />
            <Pagination total={100} pageSize={10} defaultPage={5} size={size} showInfo disabled />
          </div>
        </div>)}
      <div>
        <h4 style={sectionTitle}>Few pages (no ellipsis)</h4>
        <Pagination total={30} pageSize={10} defaultPage={2} showInfo />
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <div style={column}>
        <Pagination total={100} pageSize={10} page={page} onPageChange={setPage} showInfo />
        <span style={infoText}>
          Current page: {page}
        </span>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '\`page\`와 \`onPageChange\`를 사용한 제어 컴포넌트 예제입니다.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={section}>
      <div>
        <h4 style={sectionTitle}>Small</h4>
        <Pagination total={100} pageSize={10} defaultPage={3} size="sm" showInfo />
      </div>
      <div>
        <h4 style={sectionTitle}>Medium</h4>
        <Pagination total={100} pageSize={10} defaultPage={3} size="md" showInfo />
      </div>
      <div>
        <h4 style={sectionTitle}>Large</h4>
        <Pagination total={100} pageSize={10} defaultPage={3} size="lg" showInfo />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'sm, md, lg 세 가지 크기를 지원합니다.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    total: 30,
    pageSize: 10,
    defaultPage: 2,
    showInfo: true
  },
  parameters: {
    docs: {
      description: {
        story: '총 페이지 수가 적은 경우 ellipsis 없이 모든 페이지가 표시됩니다.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    total: 100,
    pageSize: 10,
    defaultPage: 5,
    disabled: true,
    showInfo: true
  },
  parameters: {
    docs: {
      description: {
        story: '전체 비활성화 상태에서는 모든 버튼이 클릭 불가능합니다.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const j=["Playground","AllStates","Controlled","Sizes","FewPages","Disabled"];export{n as AllStates,r as Controlled,d as Disabled,l as FewPages,o as Playground,i as Sizes,j as __namedExportsOrder,b as default};
