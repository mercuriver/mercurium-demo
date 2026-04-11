import{j as e,r as p}from"./iframe-Bbzk5SKL.js";import{T as t,a as s,b as a,c as l}from"./Tabs-BCl2Sg2M.js";import{B as j}from"./Button-Ct2CbUN0.js";import{s as m,a as n,c as y,i as g}from"./story-helpers-CZYtc2RC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ZcSIculg.js";import"./use-interaction-state-C5rBqqWh.js";const E={title:"Components/Tabs",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
Tabs 컴포넌트는 여러 패널 간 전환을 제공하는 컴포넌트입니다.

## Features
- **Variants**: line (default), enclosed
- **Sizes**: sm, md, lg
- **Orientation**: horizontal, vertical
- **keepAlive**: 비활성 패널 DOM 유지 옵션
- **Keyboard Navigation**: Arrow keys, Home, End
- **Individual Tab Disabled**: 특정 탭만 비활성화

## Usage
\`\`\`tsx
import { Tabs, TabList, Tab, TabPanel } from '@mercurium/ui-system-react';

<Tabs defaultValue="tab1">
  <TabList>
    <Tab value="tab1">Tab 1</Tab>
    <Tab value="tab2">Tab 2</Tab>
  </TabList>
  <TabPanel value="tab1">Content 1</TabPanel>
  <TabPanel value="tab2">Content 2</TabPanel>
</Tabs>
\`\`\`
        `}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"탭 크기",table:{type:{summary:"ComponentSize"},defaultValue:{summary:"md"}}},variant:{control:"select",options:["line","enclosed"],description:"탭 스타일 변형",table:{type:{summary:"TabVariant"},defaultValue:{summary:"line"}}},orientation:{control:"select",options:["horizontal","vertical"],description:"탭 방향",table:{type:{summary:"'horizontal' | 'vertical'"},defaultValue:{summary:"horizontal"}}},disabled:{control:"boolean",description:"전체 탭 비활성화",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},keepAlive:{control:"boolean",description:"비활성 패널 DOM 유지",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},d={args:{size:"md",variant:"line",orientation:"horizontal",disabled:!1,keepAlive:!1,defaultValue:"data"},render:r=>e.jsxs(t,{...r,children:[e.jsxs(s,{children:[e.jsx(a,{value:"data",children:"데이터"}),e.jsx(a,{value:"chart",children:"차트 설정"}),e.jsx(a,{value:"preview",children:"미리보기"})]}),e.jsx(l,{value:"data",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px",color:"var(--color-text-default)"},children:"데이터 편집"}),e.jsx("p",{style:{margin:0,color:"var(--color-text-subtle)"},children:"여기서 데이터를 편집할 수 있습니다."})]})}),e.jsx(l,{value:"chart",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px",color:"var(--color-text-default)"},children:"차트 설정"}),e.jsx("p",{style:{margin:0,color:"var(--color-text-subtle)"},children:"차트 속성을 조정할 수 있습니다."})]})}),e.jsx(l,{value:"preview",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px",color:"var(--color-text-default)"},children:"미리보기"}),e.jsx("p",{style:{margin:0,color:"var(--color-text-subtle)"},children:"최종 결과를 미리 볼 수 있습니다."})]})})]})},o={render:()=>e.jsxs("div",{style:m,children:[["line","enclosed"].map(r=>e.jsxs("div",{children:[e.jsxs("h4",{style:n,children:['variant="',r,'"']}),["sm","md","lg"].map(i=>e.jsxs("div",{style:{marginBottom:16},children:[e.jsxs("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:['size="',i,'"']}),e.jsx(t,{defaultValue:"tab1",variant:r,size:i,children:e.jsxs(s,{children:[e.jsx(a,{value:"tab1",children:"Active"}),e.jsx(a,{value:"tab2",children:"Normal"}),e.jsx(a,{value:"tab3",disabled:!0,children:"Disabled"})]})})]},i)),e.jsxs("div",{style:{marginBottom:16},children:[e.jsx("p",{style:{fontSize:11,color:"var(--color-text-subtle)",margin:"0 0 4px"},children:"disabled (all)"}),e.jsx(t,{defaultValue:"tab1",variant:r,disabled:!0,children:e.jsxs(s,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"})]})})]})]},r)),e.jsxs("div",{children:[e.jsx("h4",{style:n,children:'orientation="vertical"'}),e.jsx(t,{defaultValue:"tab1",orientation:"vertical",children:e.jsxs(s,{children:[e.jsx(a,{value:"tab1",children:"Active"}),e.jsx(a,{value:"tab2",children:"Normal"}),e.jsx(a,{value:"tab3",disabled:!0,children:"Disabled"})]})})]})]})},c={render:()=>{const[r,i]=p.useState("home");return e.jsxs("div",{style:y,children:[e.jsxs("div",{style:g,children:["현재 활성 탭: ",e.jsx("strong",{style:{color:"var(--color-text-default)"},children:r})]}),e.jsxs(t,{value:r,onChange:i,children:[e.jsxs(s,{children:[e.jsx(a,{value:"home",children:"홈"}),e.jsx(a,{value:"profile",children:"프로필"}),e.jsx(a,{value:"settings",children:"설정"})]}),e.jsx(l,{value:"home",children:"홈 컨텐츠"}),e.jsx(l,{value:"profile",children:"프로필 컨텐츠"}),e.jsx(l,{value:"settings",children:"설정 컨텐츠"})]})]})},parameters:{docs:{description:{story:"value와 onChange로 탭 상태를 제어할 수 있습니다."}}}},b={render:()=>e.jsxs(t,{defaultValue:"general",orientation:"vertical",children:[e.jsxs(s,{children:[e.jsx(a,{value:"general",children:"일반"}),e.jsx(a,{value:"security",children:"보안"}),e.jsx(a,{value:"notifications",children:"알림"}),e.jsx(a,{value:"privacy",children:"프라이버시"})]}),e.jsx(l,{value:"general",children:"일반 설정"}),e.jsx(l,{value:"security",children:"보안 설정"}),e.jsx(l,{value:"notifications",children:"알림 설정"}),e.jsx(l,{value:"privacy",children:"프라이버시 설정"})]}),parameters:{docs:{description:{story:'orientation="vertical"로 세로 탭을 구성할 수 있습니다.'}}}},u={render:()=>{const[r,i]=p.useState(0),[f,P]=p.useState(0);return e.jsxs("div",{style:y,children:[e.jsx("p",{style:g,children:"keepAlive=true: 탭을 전환해도 각 패널의 상태가 유지됩니다."}),e.jsxs(t,{defaultValue:"counter1",keepAlive:!0,children:[e.jsxs(s,{children:[e.jsx(a,{value:"counter1",children:"카운터 1"}),e.jsx(a,{value:"counter2",children:"카운터 2"}),e.jsx(a,{value:"info",children:"정보"})]}),e.jsx(l,{value:"counter1",children:e.jsxs("div",{style:{padding:"16px",display:"flex",alignItems:"center",gap:"12px"},children:[e.jsxs("span",{style:{color:"var(--color-text-default)"},children:["카운터 1: ",r]}),e.jsx(j,{size:"sm",shape:"outline",onClick:()=>i(h=>h+1),children:"증가"})]})}),e.jsx(l,{value:"counter2",children:e.jsxs("div",{style:{padding:"16px",display:"flex",alignItems:"center",gap:"12px"},children:[e.jsxs("span",{style:{color:"var(--color-text-default)"},children:["카운터 2: ",f]}),e.jsx(j,{size:"sm",shape:"outline",onClick:()=>P(h=>h+1),children:"증가"})]})}),e.jsx(l,{value:"info",children:e.jsx("div",{style:{padding:"16px"},children:e.jsx("p",{style:{margin:0,color:"var(--color-text-subtle)"},children:"다른 탭의 카운터 값도 유지됩니다."})})})]})]})},parameters:{docs:{description:{story:"keepAlive가 true면 비활성 패널의 DOM이 유지되어 상태가 보존됩니다. 무거운 컴포넌트(차트 등)의 재렌더링을 방지할 때 유용합니다."}}}},v={render:()=>e.jsxs(t,{defaultValue:"enabled1",children:[e.jsxs(s,{children:[e.jsx(a,{value:"enabled1",children:"활성 탭 1"}),e.jsx(a,{value:"disabled1",disabled:!0,children:"비활성 탭"}),e.jsx(a,{value:"enabled2",children:"활성 탭 2"}),e.jsx(a,{value:"disabled2",disabled:!0,children:"비활성 탭 2"})]}),e.jsx(l,{value:"enabled1",children:"활성 탭 1 컨텐츠"}),e.jsx(l,{value:"disabled1",children:"비활성 탭 컨텐츠"}),e.jsx(l,{value:"enabled2",children:"활성 탭 2 컨텐츠"}),e.jsx(l,{value:"disabled2",children:"비활성 탭 2 컨텐츠"})]}),parameters:{docs:{description:{story:"개별 탭을 disabled 속성으로 비활성화할 수 있습니다. 키보드 네비게이션 시 비활성 탭은 자동으로 건너뜁니다."}}}},T={render:()=>e.jsxs("div",{style:m,children:[e.jsxs("div",{children:[e.jsx("h4",{style:n,children:"Line Variant (default)"}),e.jsxs(t,{defaultValue:"tab1",variant:"line",children:[e.jsxs(s,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(l,{value:"tab1",children:"Line variant content 1"}),e.jsx(l,{value:"tab2",children:"Line variant content 2"}),e.jsx(l,{value:"tab3",children:"Line variant content 3"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:n,children:"Enclosed Variant"}),e.jsxs(t,{defaultValue:"tab1",variant:"enclosed",children:[e.jsxs(s,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(l,{value:"tab1",children:"Enclosed variant content 1"}),e.jsx(l,{value:"tab2",children:"Enclosed variant content 2"}),e.jsx(l,{value:"tab3",children:"Enclosed variant content 3"})]})]})]}),parameters:{docs:{description:{story:"line과 enclosed 두 가지 스타일 변형을 제공합니다."}}}},x={render:()=>e.jsxs("div",{style:m,children:[e.jsxs("div",{children:[e.jsx("h4",{style:n,children:"Small"}),e.jsxs(t,{defaultValue:"tab1",size:"sm",children:[e.jsxs(s,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(l,{value:"tab1",children:"Small size content"}),e.jsx(l,{value:"tab2",children:"Small size content"}),e.jsx(l,{value:"tab3",children:"Small size content"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:n,children:"Medium (default)"}),e.jsxs(t,{defaultValue:"tab1",size:"md",children:[e.jsxs(s,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(l,{value:"tab1",children:"Medium size content"}),e.jsx(l,{value:"tab2",children:"Medium size content"}),e.jsx(l,{value:"tab3",children:"Medium size content"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:n,children:"Large"}),e.jsxs(t,{defaultValue:"tab1",size:"lg",children:[e.jsxs(s,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(l,{value:"tab1",children:"Large size content"}),e.jsx(l,{value:"tab2",children:"Large size content"}),e.jsx(l,{value:"tab3",children:"Large size content"})]})]})]}),parameters:{docs:{description:{story:"sm, md, lg 세 가지 크기를 지원합니다."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'line',
    orientation: 'horizontal',
    disabled: false,
    keepAlive: false,
    defaultValue: 'data'
  },
  render: args => <Tabs {...args}>
      <TabList>
        <Tab value="data">데이터</Tab>
        <Tab value="chart">차트 설정</Tab>
        <Tab value="preview">미리보기</Tab>
      </TabList>
      <TabPanel value="data">
        <div style={{
        padding: '16px'
      }}>
          <h3 style={{
          margin: '0 0 8px',
          color: 'var(--color-text-default)'
        }}>데이터 편집</h3>
          <p style={{
          margin: 0,
          color: 'var(--color-text-subtle)'
        }}>
            여기서 데이터를 편집할 수 있습니다.
          </p>
        </div>
      </TabPanel>
      <TabPanel value="chart">
        <div style={{
        padding: '16px'
      }}>
          <h3 style={{
          margin: '0 0 8px',
          color: 'var(--color-text-default)'
        }}>차트 설정</h3>
          <p style={{
          margin: 0,
          color: 'var(--color-text-subtle)'
        }}>
            차트 속성을 조정할 수 있습니다.
          </p>
        </div>
      </TabPanel>
      <TabPanel value="preview">
        <div style={{
        padding: '16px'
      }}>
          <h3 style={{
          margin: '0 0 8px',
          color: 'var(--color-text-default)'
        }}>미리보기</h3>
          <p style={{
          margin: 0,
          color: 'var(--color-text-subtle)'
        }}>
            최종 결과를 미리 볼 수 있습니다.
          </p>
        </div>
      </TabPanel>
    </Tabs>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={section}>
      {(['line', 'enclosed'] as const).map(variant => <div key={variant}>
          <h4 style={sectionTitle}>variant="{variant}"</h4>
          {(['sm', 'md', 'lg'] as const).map(size => <div key={size} style={{
        marginBottom: 16
      }}>
              <p style={{
          fontSize: 11,
          color: 'var(--color-text-subtle)',
          margin: '0 0 4px'
        }}>size="{size}"</p>
              <Tabs defaultValue="tab1" variant={variant} size={size}>
                <TabList>
                  <Tab value="tab1">Active</Tab>
                  <Tab value="tab2">Normal</Tab>
                  <Tab value="tab3" disabled>Disabled</Tab>
                </TabList>
              </Tabs>
            </div>)}
          <div style={{
        marginBottom: 16
      }}>
            <p style={{
          fontSize: 11,
          color: 'var(--color-text-subtle)',
          margin: '0 0 4px'
        }}>disabled (all)</p>
            <Tabs defaultValue="tab1" variant={variant} disabled>
              <TabList>
                <Tab value="tab1">Tab 1</Tab>
                <Tab value="tab2">Tab 2</Tab>
              </TabList>
            </Tabs>
          </div>
        </div>)}
      <div>
        <h4 style={sectionTitle}>orientation="vertical"</h4>
        <Tabs defaultValue="tab1" orientation="vertical">
          <TabList>
            <Tab value="tab1">Active</Tab>
            <Tab value="tab2">Normal</Tab>
            <Tab value="tab3" disabled>Disabled</Tab>
          </TabList>
        </Tabs>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('home');
    return <div style={column}>
        <div style={infoText}>
          현재 활성 탭: <strong style={{
          color: 'var(--color-text-default)'
        }}>{activeTab}</strong>
        </div>
        <Tabs value={activeTab} onChange={setActiveTab}>
          <TabList>
            <Tab value="home">홈</Tab>
            <Tab value="profile">프로필</Tab>
            <Tab value="settings">설정</Tab>
          </TabList>
          <TabPanel value="home">홈 컨텐츠</TabPanel>
          <TabPanel value="profile">프로필 컨텐츠</TabPanel>
          <TabPanel value="settings">설정 컨텐츠</TabPanel>
        </Tabs>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'value와 onChange로 탭 상태를 제어할 수 있습니다.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="general" orientation="vertical">
      <TabList>
        <Tab value="general">일반</Tab>
        <Tab value="security">보안</Tab>
        <Tab value="notifications">알림</Tab>
        <Tab value="privacy">프라이버시</Tab>
      </TabList>
      <TabPanel value="general">일반 설정</TabPanel>
      <TabPanel value="security">보안 설정</TabPanel>
      <TabPanel value="notifications">알림 설정</TabPanel>
      <TabPanel value="privacy">프라이버시 설정</TabPanel>
    </Tabs>,
  parameters: {
    docs: {
      description: {
        story: 'orientation="vertical"로 세로 탭을 구성할 수 있습니다.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    return <div style={column}>
        <p style={infoText}>
          keepAlive=true: 탭을 전환해도 각 패널의 상태가 유지됩니다.
        </p>
        <Tabs defaultValue="counter1" keepAlive>
          <TabList>
            <Tab value="counter1">카운터 1</Tab>
            <Tab value="counter2">카운터 2</Tab>
            <Tab value="info">정보</Tab>
          </TabList>
          <TabPanel value="counter1">
            <div style={{
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
              <span style={{
              color: 'var(--color-text-default)'
            }}>카운터 1: {counter1}</span>
              <Button size="sm" shape="outline" onClick={() => setCounter1(c => c + 1)}>
                증가
              </Button>
            </div>
          </TabPanel>
          <TabPanel value="counter2">
            <div style={{
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
              <span style={{
              color: 'var(--color-text-default)'
            }}>카운터 2: {counter2}</span>
              <Button size="sm" shape="outline" onClick={() => setCounter2(c => c + 1)}>
                증가
              </Button>
            </div>
          </TabPanel>
          <TabPanel value="info">
            <div style={{
            padding: '16px'
          }}>
              <p style={{
              margin: 0,
              color: 'var(--color-text-subtle)'
            }}>
                다른 탭의 카운터 값도 유지됩니다.
              </p>
            </div>
          </TabPanel>
        </Tabs>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'keepAlive가 true면 비활성 패널의 DOM이 유지되어 상태가 보존됩니다. 무거운 컴포넌트(차트 등)의 재렌더링을 방지할 때 유용합니다.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="enabled1">
      <TabList>
        <Tab value="enabled1">활성 탭 1</Tab>
        <Tab value="disabled1" disabled>
          비활성 탭
        </Tab>
        <Tab value="enabled2">활성 탭 2</Tab>
        <Tab value="disabled2" disabled>
          비활성 탭 2
        </Tab>
      </TabList>
      <TabPanel value="enabled1">활성 탭 1 컨텐츠</TabPanel>
      <TabPanel value="disabled1">비활성 탭 컨텐츠</TabPanel>
      <TabPanel value="enabled2">활성 탭 2 컨텐츠</TabPanel>
      <TabPanel value="disabled2">비활성 탭 2 컨텐츠</TabPanel>
    </Tabs>,
  parameters: {
    docs: {
      description: {
        story: '개별 탭을 disabled 속성으로 비활성화할 수 있습니다. 키보드 네비게이션 시 비활성 탭은 자동으로 건너뜁니다.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={section}>
      <div>
        <h4 style={sectionTitle}>
          Line Variant (default)
        </h4>
        <Tabs defaultValue="tab1" variant="line">
          <TabList>
            <Tab value="tab1">Tab 1</Tab>
            <Tab value="tab2">Tab 2</Tab>
            <Tab value="tab3">Tab 3</Tab>
          </TabList>
          <TabPanel value="tab1">Line variant content 1</TabPanel>
          <TabPanel value="tab2">Line variant content 2</TabPanel>
          <TabPanel value="tab3">Line variant content 3</TabPanel>
        </Tabs>
      </div>

      <div>
        <h4 style={sectionTitle}>
          Enclosed Variant
        </h4>
        <Tabs defaultValue="tab1" variant="enclosed">
          <TabList>
            <Tab value="tab1">Tab 1</Tab>
            <Tab value="tab2">Tab 2</Tab>
            <Tab value="tab3">Tab 3</Tab>
          </TabList>
          <TabPanel value="tab1">Enclosed variant content 1</TabPanel>
          <TabPanel value="tab2">Enclosed variant content 2</TabPanel>
          <TabPanel value="tab3">Enclosed variant content 3</TabPanel>
        </Tabs>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'line과 enclosed 두 가지 스타일 변형을 제공합니다.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={section}>
      <div>
        <h4 style={sectionTitle}>
          Small
        </h4>
        <Tabs defaultValue="tab1" size="sm">
          <TabList>
            <Tab value="tab1">Tab 1</Tab>
            <Tab value="tab2">Tab 2</Tab>
            <Tab value="tab3">Tab 3</Tab>
          </TabList>
          <TabPanel value="tab1">Small size content</TabPanel>
          <TabPanel value="tab2">Small size content</TabPanel>
          <TabPanel value="tab3">Small size content</TabPanel>
        </Tabs>
      </div>

      <div>
        <h4 style={sectionTitle}>
          Medium (default)
        </h4>
        <Tabs defaultValue="tab1" size="md">
          <TabList>
            <Tab value="tab1">Tab 1</Tab>
            <Tab value="tab2">Tab 2</Tab>
            <Tab value="tab3">Tab 3</Tab>
          </TabList>
          <TabPanel value="tab1">Medium size content</TabPanel>
          <TabPanel value="tab2">Medium size content</TabPanel>
          <TabPanel value="tab3">Medium size content</TabPanel>
        </Tabs>
      </div>

      <div>
        <h4 style={sectionTitle}>
          Large
        </h4>
        <Tabs defaultValue="tab1" size="lg">
          <TabList>
            <Tab value="tab1">Tab 1</Tab>
            <Tab value="tab2">Tab 2</Tab>
            <Tab value="tab3">Tab 3</Tab>
          </TabList>
          <TabPanel value="tab1">Large size content</TabPanel>
          <TabPanel value="tab2">Large size content</TabPanel>
          <TabPanel value="tab3">Large size content</TabPanel>
        </Tabs>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'sm, md, lg 세 가지 크기를 지원합니다.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const M=["Playground","AllStates","Controlled","Vertical","KeepAlive","DisabledTabs","Variants","Sizes"];export{o as AllStates,c as Controlled,v as DisabledTabs,u as KeepAlive,d as Playground,x as Sizes,T as Variants,b as Vertical,M as __namedExportsOrder,E as default};
