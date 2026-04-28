import{R as f,by as R,j as m,bz as v,bA as h}from"./iframe-80ZV6wNn.js";const y=f.forwardRef(({level:e="1",weight:t="bold",align:a,color:n="default",truncate:l=!1,as:s,className:d,style:o,children:i,...r},p)=>{const u=s||`h${e}`,c=R({size:e,weight:t,align:a,color:n,truncate:l});return m.jsx(u,{ref:p,className:d,style:{...c,...o},...r,children:i})});y.displayName="Heading";y.__docgenInfo={description:`Heading 컴포넌트

제목 요소를 렌더링하는 컴포넌트입니다.
level prop으로 시맨틱 레벨(h1~h6)과 시각적 크기를 동시에 지정합니다.

@example
\`\`\`tsx
<Heading level="1">메인 제목</Heading>
<Heading level="2" color="primary">부제목</Heading>
<Heading level="3" weight="medium" truncate>긴 제목...</Heading>
\`\`\``,methods:[],displayName:"Heading",props:{level:{required:!1,tsType:{name:"HeadingSize"},description:`Heading 레벨 (h1~h6)
HTML 시맨틱 태그와 시각적 크기를 동시에 결정
@default '1'`,defaultValue:{value:"'1'",computed:!1}},weight:{required:!1,tsType:{name:"HeadingWeight"},description:`폰트 굵기
@default 'bold'`,defaultValue:{value:"'bold'",computed:!1}},align:{required:!1,tsType:{name:"TextAlign"},description:"텍스트 정렬"},color:{required:!1,tsType:{name:"TextColor"},description:`텍스트 색상
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},truncate:{required:!1,tsType:{name:"boolean"},description:`텍스트 말줄임 활성화
@default false`,defaultValue:{value:"false",computed:!1}},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"커스텀 HTML 요소로 렌더링"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const T=f.forwardRef(({size:e="md",weight:t="regular",align:a,color:n="default",truncate:l=!1,as:s="p",className:d,style:o,children:i,...r},p)=>{const u=s,c=v({size:e,weight:t,align:a,color:n,truncate:l});return m.jsx(u,{ref:p,className:d,style:{...c,...o},...r,children:i})});T.displayName="Text";T.__docgenInfo={description:`Text 컴포넌트

본문 텍스트를 렌더링하는 컴포넌트입니다.
paragraph, span, div 등 다양한 요소로 렌더링할 수 있습니다.

@example
\`\`\`tsx
<Text>기본 문단 텍스트</Text>
<Text size="sm" color="muted">작은 보조 텍스트</Text>
<Text as="span" weight="semibold">강조 텍스트</Text>
<Text truncate>말줄임이 적용된 긴 텍스트...</Text>
\`\`\``,methods:[],displayName:"Text",props:{size:{required:!1,tsType:{name:"TextSize"},description:`텍스트 크기
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},weight:{required:!1,tsType:{name:"HeadingWeight"},description:`폰트 굵기
@default 'regular'`,defaultValue:{value:"'regular'",computed:!1}},align:{required:!1,tsType:{name:"TextAlign"},description:"텍스트 정렬"},color:{required:!1,tsType:{name:"TextColor"},description:`텍스트 색상
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},truncate:{required:!1,tsType:{name:"boolean"},description:`텍스트 말줄임 활성화
@default false`,defaultValue:{value:"false",computed:!1}},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:`커스텀 HTML 요소로 렌더링
@default 'p'`,defaultValue:{value:"'p'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const g=f.forwardRef(({size:e="md",variant:t="soft",color:a="default",as:n="code",className:l,style:s,children:d,...o},i)=>{const r=n,u=h({size:e,variant:t,color:a});return m.jsx(r,{ref:i,className:l,style:{...u,...s},...o,children:d})});g.displayName="Code";g.__docgenInfo={description:`Code 컴포넌트

인라인 코드를 렌더링하는 컴포넌트입니다.
모노스페이스 폰트와 배경색으로 코드를 강조합니다.

@example
\`\`\`tsx
<Code>const foo = 'bar';</Code>
<Code variant="solid" color="primary">npm install</Code>
<Code size="sm" variant="outline">git commit</Code>
\`\`\``,methods:[],displayName:"Code",props:{size:{required:!1,tsType:{name:"ComponentSize"},description:`코드 크기
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"CodeVariant"},description:`시각적 스타일 변형
@default 'soft'`,defaultValue:{value:"'soft'",computed:!1}},color:{required:!1,tsType:{name:"TextColor"},description:`텍스트 색상
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:`커스텀 HTML 요소로 렌더링
@default 'code'`,defaultValue:{value:"'code'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};export{g as C,y as H,T};
