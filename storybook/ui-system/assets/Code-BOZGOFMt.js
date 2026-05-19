import{R as c,cf as g,j as f,cg as R,ch as h}from"./iframe-ZuyUgBQM.js";const m=c.forwardRef(({level:e="1",weight:a,align:t,color:d="default",truncate:s=!1,as:l,className:o,children:n,...r},i)=>{const u=l||`h${e}`,p=[g({size:e,weight:a,align:t,color:d,truncate:s}),o].filter(Boolean).join(" ");return f.jsx(u,{ref:i,className:p,...r,children:n})});m.displayName="Heading";m.__docgenInfo={description:`Heading 컴포넌트

제목 요소를 렌더링하는 컴포넌트입니다.
level prop으로 시맨틱 레벨(h1~h6)과 시각적 크기를 동시에 지정합니다.`,methods:[],displayName:"Heading",props:{level:{required:!1,tsType:{name:"HeadingSize"},description:`Heading 레벨 (h1~h6)
HTML 시맨틱 태그와 시각적 크기를 동시에 결정
@default '1'`,defaultValue:{value:"'1'",computed:!1}},weight:{required:!1,tsType:{name:"HeadingWeight"},description:"폰트 굵기. 지정하지 않으면 heading 토큰의 레벨별 기본값 사용"},align:{required:!1,tsType:{name:"TextAlign"},description:"텍스트 정렬"},color:{required:!1,tsType:{name:"TextColor"},description:`텍스트 색상
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},truncate:{required:!1,tsType:{name:"boolean"},description:`텍스트 말줄임 활성화
@default false`,defaultValue:{value:"false",computed:!1}},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"커스텀 HTML 요소로 렌더링"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const T=c.forwardRef(({size:e="md",weight:a="regular",align:t,color:d="default",truncate:s=!1,as:l="p",className:o,children:n,...r},i)=>{const u=l,p=[R({size:e,weight:a,align:t,color:d,truncate:s}),o].filter(Boolean).join(" ");return f.jsx(u,{ref:i,className:p,...r,children:n})});T.displayName="Text";T.__docgenInfo={description:`Text 컴포넌트

본문 텍스트를 렌더링하는 컴포넌트입니다.
paragraph, span, div 등 다양한 요소로 렌더링할 수 있습니다.`,methods:[],displayName:"Text",props:{size:{required:!1,tsType:{name:"TextSize"},description:`텍스트 크기
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},weight:{required:!1,tsType:{name:"HeadingWeight"},description:`폰트 굵기
@default 'regular'`,defaultValue:{value:"'regular'",computed:!1}},align:{required:!1,tsType:{name:"TextAlign"},description:"텍스트 정렬"},color:{required:!1,tsType:{name:"TextColor"},description:`텍스트 색상
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},truncate:{required:!1,tsType:{name:"boolean"},description:`텍스트 말줄임 활성화
@default false`,defaultValue:{value:"false",computed:!1}},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:`커스텀 HTML 요소로 렌더링
@default 'p'`,defaultValue:{value:"'p'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const y=c.forwardRef(({size:e="md",variant:a="soft",color:t="default",as:d="code",className:s,children:l,...o},n)=>{const r=d,i=[h({size:e,variant:a,color:t}),s].filter(Boolean).join(" ");return f.jsx(r,{ref:n,className:i,...o,children:l})});y.displayName="Code";y.__docgenInfo={description:`Code 컴포넌트

인라인 코드를 렌더링하는 컴포넌트입니다.`,methods:[],displayName:"Code",props:{size:{required:!1,tsType:{name:"ComponentSize"},description:`코드 크기
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"CodeVariant"},description:`시각적 스타일 변형
@default 'soft'`,defaultValue:{value:"'soft'",computed:!1}},color:{required:!1,tsType:{name:"TextColor"},description:`텍스트 색상
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:`커스텀 HTML 요소로 렌더링
@default 'code'`,defaultValue:{value:"'code'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};export{y as C,m as H,T};
