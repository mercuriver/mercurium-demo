import{k as i,l as R,e as X}from"./chart-BUQmp9vc.js";import{c as $}from"./chart-story-inspector-CDhlPLCD.js";const G={animationDelay:0,animationDuration:700,animationEasing:R.EASE_OUT,animationEnabled:!0,animationInitial:i.DRAW,animationThreshold:2e3,animationUpdateDuration:500,height:440,width:860},m="Animation",W="Container",V={animationDelay:{control:{max:1e3,min:0,step:50,type:"range"},name:"options.animation.delay",table:{category:m}},animationDuration:{control:{max:2500,min:0,step:50,type:"range"},name:"options.animation.duration",table:{category:m}},animationEasing:{control:"select",name:"options.animation.easing",options:Object.values(R),table:{category:m}},animationEnabled:{control:"boolean",name:"options.animation.enabled",table:{category:m}},animationInitial:{control:"select",name:"options.animation.initial",options:Object.values(i),table:{category:m}},animationThreshold:{control:{max:1e4,min:0,step:100,type:"range"},name:"options.animation.threshold",table:{category:m}},animationUpdateDuration:{control:{max:2500,min:0,step:50,type:"range"},name:"options.animation.updateDuration",table:{category:m}},height:{control:{max:720,min:240,step:20,type:"range"},name:"container.height",table:{category:W}},width:{control:{max:1200,min:320,step:20,type:"range"},name:"container.width",table:{category:W}}},I=(e,a)=>{const t=document.createElement("button");return t.type="button",t.textContent=e,Object.assign(t.style,{background:"#ffffff",border:"1px solid #94a3b8",borderRadius:"6px",color:"#1e293b",cursor:"pointer",font:"inherit",fontSize:"13px",fontWeight:"650",padding:"8px 11px"}),t.addEventListener("click",a),t},L=(e,a,t)=>({data:t,dataIdKey:"id",...a.theme===void 0?{}:{theme:a.theme},view:{options:{...a.options,animation:{delay:e.animationDelay,duration:e.animationDuration,easing:e.animationEasing,enabled:e.animationEnabled,initial:e.animationInitial,threshold:e.animationThreshold,updateDuration:e.animationUpdateDuration}},paradigm:"cartesian",series:a.series}}),u=(e,a)=>{const t=document.createElement("section"),r=document.createElement("div"),_=document.createElement("div"),s=document.createElement("output"),k=document.createElement("div"),M=a.data.find(({id:n})=>n===a.updatedDatum.id);if(M===void 0)throw new Error(`Animation story update target ${a.updatedDatum.id} does not exist.`);let d,o=[...a.data],l=!1,A=!1,c;Object.assign(t.style,{display:"grid",gap:"12px",minWidth:"0"}),Object.assign(r.style,{display:"flex",flexWrap:"wrap",gap:"8px"}),Object.assign(_.style,{background:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"8px",height:`${e.height}px`,maxWidth:`${e.width}px`,minWidth:"0",overflow:"hidden",position:"relative",width:"100%"}),Object.assign(s.style,{background:"#f8fafc",borderRadius:"5px",color:"#334155",display:"block",fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:"12px",maxWidth:`${e.width}px`,minHeight:"36px",overflowWrap:"anywhere",padding:"9px 10px"}),k.style.maxWidth=`${e.width}px`;const p=()=>{c!==void 0&&(window.clearTimeout(c),c=void 0)},N=()=>{k.replaceChildren($(L(e,a,o)))},B=n=>{p(),d?.destroy(),d=new X(_,L(e,a,o)),N(),s.textContent=n},C=(n,Y)=>{const y=n?a.updatedDatum:M;if(d?.updateDatum(y.id,y)!==!0){s.textContent="갱신 대상 데이터를 찾지 못했습니다.";return}o=o.map(U=>U.id===y.id?y:U),l=n,N(),s.textContent=Y},Z=()=>{o=[...a.data],l=!1,A=!1,B(`${e.animationInitial} 초기 애니메이션을 다시 재생했습니다.`)},P=()=>{p(),C(!l,l?"갱신한 값을 원래 범위로 되돌렸습니다.":"단일 datum의 값과 연관된 표시 범위를 함께 갱신했습니다.")},j=()=>{p(),A?(d?.removeDatum(a.extraDatum.id),o=o.filter(({id:n})=>n!==a.extraDatum.id),A=!1,s.textContent="끝 datum을 제거하고 X축 범위를 축소했습니다."):(d?.addDatum(a.extraDatum),o=[...o,a.extraDatum],A=!0,s.textContent="끝 datum을 추가하고 X축 범위를 확장했습니다."),N()},F=()=>{p();const n=!l;C(n,"첫 번째 갱신을 시작했습니다. 진행 도중 반대 값으로 다시 갱신합니다."),c=window.setTimeout(()=>{c=void 0,C(!n,"진행 중이던 애니메이션의 현재 화면에서 반대 방향 갱신을 이어갔습니다.")},Math.max(80,e.animationUpdateDuration*.32))};r.append(I("초기 애니메이션 재생",Z),I("값·표시 범위 갱신",P),I("끝 데이터 추가·제거",j),I("진행 도중 재갱신",F)),t.append(r,_,s,k),B(`${e.animationInitial} 초기 애니메이션을 재생했습니다.`);const O=new MutationObserver(()=>{t.isConnected||(p(),d?.destroy(),d=void 0,O.disconnect())});return O.observe(t.ownerDocument.body,{childList:!0,subtree:!0}),t},J=[{area:44,date:new Date("2026-01-01T00:00:00.000Z"),id:"jan",line:52},{area:51,date:new Date("2026-02-01T00:00:00.000Z"),id:"feb",line:61},{area:47,date:new Date("2026-03-01T00:00:00.000Z"),id:"mar",line:58},{area:59,date:new Date("2026-04-01T00:00:00.000Z"),id:"apr",line:72},{area:65,date:new Date("2026-05-01T00:00:00.000Z"),id:"may",line:77},{area:57,date:new Date("2026-06-01T00:00:00.000Z"),id:"jun",line:69},{area:71,date:new Date("2026-07-01T00:00:00.000Z"),id:"jul",line:84},{area:76,date:new Date("2026-08-01T00:00:00.000Z"),id:"aug",line:91}],q={data:J,extraDatum:{area:84,date:new Date("2026-09-01T00:00:00.000Z"),id:"sep",line:102},options:{area:{curve:"smooth",fillOpacity:.24,lineWidth:1.5},grid:{direction:"both",visible:!0},line:{curve:"smooth",dots:!0,lineWidth:3,pointRadius:4},title:{text:"Line · Area animated transition"},xAxis:{scale:"time",ticks:{count:7},title:"Month · 2026"},yAxis:{scale:"linear",ticks:{count:6},title:"Observed value"}},series:[{color:"#93c5fd",encoding:{x:"date",y:"area"},id:"range",name:"Baseline",type:"area"},{color:"#2563eb",encoding:{x:"date",y:"line"},id:"signal",name:"Signal",type:"line"}],updatedDatum:{area:106,date:new Date("2026-06-01T00:00:00.000Z"),id:"jun",line:128}},K=[{bar:32,date:new Date("2026-01-01T00:00:00.000Z"),id:"jan",scatter:43,size:18},{bar:38,date:new Date("2026-02-01T00:00:00.000Z"),id:"feb",scatter:51,size:26},{bar:35,date:new Date("2026-03-01T00:00:00.000Z"),id:"mar",scatter:47,size:22},{bar:49,date:new Date("2026-04-01T00:00:00.000Z"),id:"apr",scatter:63,size:36},{bar:44,date:new Date("2026-05-01T00:00:00.000Z"),id:"may",scatter:58,size:31},{bar:56,date:new Date("2026-06-01T00:00:00.000Z"),id:"jun",scatter:72,size:44},{bar:61,date:new Date("2026-07-01T00:00:00.000Z"),id:"jul",scatter:79,size:52},{bar:54,date:new Date("2026-08-01T00:00:00.000Z"),id:"aug",scatter:68,size:40}],Q={data:K,extraDatum:{bar:68,date:new Date("2026-09-01T00:00:00.000Z"),id:"sep",scatter:88,size:58},options:{bar:{barWidth:.62,radius:5},grid:{direction:"y",visible:!0},scatter:{maxRadius:15,minRadius:4,pointRadius:6,stroke:"#ffffff",strokeWidth:2},title:{text:"Bar · Scatter animated transition"},xAxis:{scale:"time",ticks:{count:7},title:"Month · 2026"},yAxis:{scale:"linear",ticks:{count:6},title:"Observed value"}},series:[{color:"#93c5fd",encoding:{x:"date",y:"bar"},id:"volume",name:"Volume",opacity:.72,type:"bar"},{color:"#f97316",encoding:{size:"size",x:"date",y:"scatter"},id:"conversion",name:"Conversion",type:"scatter"}],updatedDatum:{bar:94,date:new Date("2026-05-01T00:00:00.000Z"),id:"may",scatter:116,size:80}},ee=["North","Central","South","Online"].flatMap((e,a)=>["Mon","Tue","Wed","Thu","Fri"].map((t,r)=>({date:t,group:e,id:`${e}-${t}`,value:24+a*13+r*9+(a+r)%3*5}))),ae={data:ee,extraDatum:{date:"Sat",group:"North",id:"North-Sat",value:88},options:{grid:{visible:!1},heatmap:{cell:{padding:2,radius:4,stroke:"#ffffff",strokeWidth:2},colorScale:{kind:"sequential",range:["#eff6ff","#1d4ed8"]},indicator:{title:"Activity",valueSuffix:" pts"}},legend:{visible:!1},title:{text:"Heatmap animated transition"},xAxis:{scale:"category",title:"Day"},yAxis:{scale:"category",title:"Channel"}},series:{encoding:{value:"value",x:"date",y:"group"},id:"activity",name:"Activity",type:"heatmap"},updatedDatum:{date:"Wed",group:"Central",id:"Central-Wed",value:108}},te=Array.from({length:24},(e,a)=>({date:`Sample ${a+1}`,dimensionA:18+a*2.4+a%4*3,dimensionB:86-a*1.7+a%5*2,dimensionC:24+a*13%41,dimensionD:38+a*1.3+(a+2)%3*4,group:["North","Central","South"][a%3],id:`sample-${a+1}`})),ne={data:te,extraDatum:{date:"Sample 25",dimensionA:91,dimensionB:38,dimensionC:74,dimensionD:83,group:"North",id:"sample-25"},options:{grid:{visible:!1},legend:{visible:!1},scatterMatrix:{colorScaleType:"categorical",gap:5,labels:{dimensionA:"Reach",dimensionB:"Retention",dimensionC:"Response",dimensionD:"Value"},padding:9,pointRadius:3,stroke:"#ffffff",strokeWidth:.75},title:{text:"Scatter matrix animated transition"},xAxis:{scale:"linear"},yAxis:{scale:"linear"}},series:{encoding:{color:"group",dimensions:["dimensionA","dimensionB","dimensionC","dimensionD"]},id:"matrix",name:"Sample dimensions",opacity:.78,type:"scatterMatrix"},updatedDatum:{date:"Sample 10",dimensionA:88,dimensionB:32,dimensionC:79,dimensionD:92,group:"Central",id:"sample-10"}},z=[{bar:47,date:"Jan",heatY:12,id:"jan-main",line:74,scatter:82,size:26,stackA:31,stackB:18,value:32},{bar:52,date:"Feb",heatY:12,id:"feb-main",line:79,scatter:77,size:34,stackA:34,stackB:20,value:45},{bar:49,date:"Mar",heatY:12,id:"mar-main",line:76,scatter:86,size:41,stackA:30,stackB:24,value:58},{bar:58,date:"Apr",heatY:12,id:"apr-main",line:85,scatter:91,size:53,stackA:38,stackB:23,value:72},{bar:55,date:"May",heatY:12,id:"may-main",line:81,scatter:84,size:45,stackA:36,stackB:26,value:66},{bar:63,date:"Jun",heatY:12,id:"jun-main",line:91,scatter:96,size:62,stackA:41,stackB:29,value:84},{bar:60,date:"Jul",heatY:12,id:"jul-main",line:88,scatter:92,size:57,stackA:39,stackB:31,value:76},{bar:67,date:"Aug",heatY:12,id:"aug-main",line:96,scatter:101,size:70,stackA:44,stackB:33,value:91}],ie=[...z.flatMap(({date:e},a)=>[22,32].map((t,r)=>({date:e,heatY:t,id:`${String(e).toLowerCase()}-heat-${t}`,value:24+a*7+r*17+(a+r)%3*6}))),...z],re={data:ie,extraDatum:{bar:72,date:"Sep",heatY:12,id:"sep-main",line:102,scatter:106,size:76,stackA:47,stackB:35,value:96},options:{area:{connectNulls:!0,curve:"smooth",fillOpacity:.28,lineWidth:1},bar:{barWidth:.45,radius:3},grid:{direction:"both",visible:!0},heatmap:{cell:{cellSize:{y:8},padding:2,radius:3,stroke:!1},colorScale:{range:["#fef3c7","#ea580c"]},indicator:{title:"Context density"}},line:{connectNulls:!0,curve:"smooth",dots:!0,lineWidth:3,pointRadius:3},scatter:{maxRadius:13,minRadius:4,stroke:"#ffffff",strokeWidth:2},title:{text:"Mixed multiple marks animated transition"},xAxis:{scale:"category",title:"Month · 2026"},yAxis:{max:115,min:0,scale:"linear",ticks:{count:7},title:"Composite index"}},series:[{encoding:{value:"value",x:"date",y:"heatY"},id:"context-density",name:"Context density",opacity:.42,type:"heatmap"},{color:"#93c5fd",encoding:{x:"date",y:"stackA"},id:"baseline",name:"Baseline",stack:"composition",type:"area"},{color:"#60a5fa",encoding:{x:"date",y:"stackB"},id:"increment",name:"Increment",stack:"composition",type:"area"},{color:"#a78bfa",encoding:{x:"date",y:"bar"},id:"volume",name:"Volume",opacity:.58,type:"bar"},{color:"#2563eb",encoding:{x:"date",y:"line"},id:"signal",name:"Signal",type:"line"},{color:"#db2777",encoding:{size:"size",x:"date",y:"scatter"},id:"events",name:"Events",type:"scatter"}],updatedDatum:{bar:74,date:"May",heatY:12,id:"may-main",line:104,scatter:108,size:82,stackA:49,stackB:37,value:98}},ce={title:"Features/Animation",args:G,argTypes:V,parameters:{controls:{sort:"none"}}},H=e=>u(e,q),v=e=>u(e,Q),oe=e=>u(e,ae),se=e=>u(e,ne),de=e=>u(e,re),g={name:"Initial · Draw from start",parameters:{storyHeader:{description:"Line과 Area를 X축 시작점부터 끝점까지 드러내는 기본 draw를 재생하고 duration·easing·delay를 조절합니다.",eyebrow:"Initial animation",title:"시작점에서 그리기"}},render:H},b={args:{animationInitial:i.DRAW_REVERSE},name:"Initial · Draw from end",parameters:{storyHeader:{description:"동일한 Line·Area를 X축 끝점부터 시작점 방향으로 드러내 draw-reverse의 방향 차이를 고정된 예제로 확인합니다.",eyebrow:"Initial animation",title:"끝점에서 역방향으로 그리기"}},render:H},f={args:{animationInitial:i.WIPE},name:"Initial · Wipe from start",parameters:{storyHeader:{description:"완성된 Bar·Scatter layer를 X축 시작점부터 화면에 드러내 point별 draw와 다른 wipe 전환을 확인합니다.",eyebrow:"Initial animation",title:"시작점에서 화면 걷어내기"}},render:v},D={args:{animationInitial:i.WIPE_REVERSE},name:"Initial · Wipe from end",parameters:{storyHeader:{description:"완성된 Bar·Scatter layer를 X축 끝점부터 반대 방향으로 드러내는 wipe-reverse 전환을 확인합니다.",eyebrow:"Initial animation",title:"끝점에서 화면 걷어내기"}},render:v},h={args:{animationInitial:i.FADE},name:"Initial · Fade",parameters:{storyHeader:{description:"Bar와 Scatter를 위치별 clip 없이 동시에 투명도 전환해 밀도가 높은 mark의 초기 등장 방식을 확인합니다.",eyebrow:"Initial animation",title:"전체 mark 페이드 인"}},render:v},x={args:{animationUpdateDuration:650},name:"Updates · Line and area",parameters:{storyHeader:{description:"Line point·segment와 Area 상·하단 형상이 datum 변경, 추가, 제거 및 축 domain 변화에 맞춰 연속 보간되는지 확인합니다.",eyebrow:"Geometry interpolation",title:"Line · Area 데이터 전환"}},render:H},S={args:{animationInitial:i.FADE,animationUpdateDuration:650},name:"Updates · Bar and scatter",parameters:{storyHeader:{description:"Bar의 위치·높이와 Scatter의 위치·반경이 같은 datum 변경을 따라 이동하며 축 domain과 동기화되는지 확인합니다.",eyebrow:"Geometry interpolation",title:"Bar · Scatter 데이터 전환"}},render:v},T={args:{animationInitial:i.FADE,animationUpdateDuration:550},name:"Updates · Heatmap",parameters:{storyHeader:{description:"Heatmap cell의 위치·크기·색상과 색상 indicator 범위가 하나의 타임라인에서 연속적으로 전환되는지 확인합니다.",eyebrow:"Cell geometry interpolation",title:"Heatmap 데이터 전환"}},render:oe},w={args:{animationDuration:1800,animationEasing:R.LINEAR,animationInitial:i.DRAW,animationUpdateDuration:900,height:680,width:760},name:"Updates · Scatter matrix multiples",parameters:{storyHeader:{description:"초기 draw에서는 동일 datum point가 모든 mini cell에 동시에 추가되고, 갱신 시에는 domain 변화에 맞춰 위치·반경·색상을 함께 보간합니다.",eyebrow:"Small multiples interpolation",title:"Scatter matrix 데이터 전환"}},render:se},E={args:{animationDuration:1100,animationEasing:R.EASE_IN_OUT,animationInitial:i.DRAW,animationUpdateDuration:1100},name:"Updates · Mixed multiple marks",parameters:{storyHeader:{description:"Heatmap·stacked Area·Bar·Line·Scatter의 mark별 초기 draw와 단일 datum 갱신·범주 추가 시 축과 geometry의 동시 전환을 확인하는 통합 회귀 예제입니다.",eyebrow:"Heterogeneous interpolation",title:"여러 mark 유형의 동시 전환"}},render:de};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Initial · Draw from start',
  parameters: {
    storyHeader: {
      description: 'Line과 Area를 X축 시작점부터 끝점까지 드러내는 기본 draw를 재생하고 duration·easing·delay를 조절합니다.',
      eyebrow: 'Initial animation',
      title: '시작점에서 그리기'
    } satisfies StoryHeaderParameters
  },
  render: renderLineArea
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    animationInitial: CHART_INITIAL_ANIMATION.DRAW_REVERSE
  },
  name: 'Initial · Draw from end',
  parameters: {
    storyHeader: {
      description: '동일한 Line·Area를 X축 끝점부터 시작점 방향으로 드러내 draw-reverse의 방향 차이를 고정된 예제로 확인합니다.',
      eyebrow: 'Initial animation',
      title: '끝점에서 역방향으로 그리기'
    } satisfies StoryHeaderParameters
  },
  render: renderLineArea
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    animationInitial: CHART_INITIAL_ANIMATION.WIPE
  },
  name: 'Initial · Wipe from start',
  parameters: {
    storyHeader: {
      description: '완성된 Bar·Scatter layer를 X축 시작점부터 화면에 드러내 point별 draw와 다른 wipe 전환을 확인합니다.',
      eyebrow: 'Initial animation',
      title: '시작점에서 화면 걷어내기'
    } satisfies StoryHeaderParameters
  },
  render: renderBarScatter
}`,...f.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    animationInitial: CHART_INITIAL_ANIMATION.WIPE_REVERSE
  },
  name: 'Initial · Wipe from end',
  parameters: {
    storyHeader: {
      description: '완성된 Bar·Scatter layer를 X축 끝점부터 반대 방향으로 드러내는 wipe-reverse 전환을 확인합니다.',
      eyebrow: 'Initial animation',
      title: '끝점에서 화면 걷어내기'
    } satisfies StoryHeaderParameters
  },
  render: renderBarScatter
}`,...D.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    animationInitial: CHART_INITIAL_ANIMATION.FADE
  },
  name: 'Initial · Fade',
  parameters: {
    storyHeader: {
      description: 'Bar와 Scatter를 위치별 clip 없이 동시에 투명도 전환해 밀도가 높은 mark의 초기 등장 방식을 확인합니다.',
      eyebrow: 'Initial animation',
      title: '전체 mark 페이드 인'
    } satisfies StoryHeaderParameters
  },
  render: renderBarScatter
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    animationUpdateDuration: 650
  },
  name: 'Updates · Line and area',
  parameters: {
    storyHeader: {
      description: 'Line point·segment와 Area 상·하단 형상이 datum 변경, 추가, 제거 및 축 domain 변화에 맞춰 연속 보간되는지 확인합니다.',
      eyebrow: 'Geometry interpolation',
      title: 'Line · Area 데이터 전환'
    } satisfies StoryHeaderParameters
  },
  render: renderLineArea
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    animationInitial: CHART_INITIAL_ANIMATION.FADE,
    animationUpdateDuration: 650
  },
  name: 'Updates · Bar and scatter',
  parameters: {
    storyHeader: {
      description: 'Bar의 위치·높이와 Scatter의 위치·반경이 같은 datum 변경을 따라 이동하며 축 domain과 동기화되는지 확인합니다.',
      eyebrow: 'Geometry interpolation',
      title: 'Bar · Scatter 데이터 전환'
    } satisfies StoryHeaderParameters
  },
  render: renderBarScatter
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    animationInitial: CHART_INITIAL_ANIMATION.FADE,
    animationUpdateDuration: 550
  },
  name: 'Updates · Heatmap',
  parameters: {
    storyHeader: {
      description: 'Heatmap cell의 위치·크기·색상과 색상 indicator 범위가 하나의 타임라인에서 연속적으로 전환되는지 확인합니다.',
      eyebrow: 'Cell geometry interpolation',
      title: 'Heatmap 데이터 전환'
    } satisfies StoryHeaderParameters
  },
  render: renderHeatmap
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    animationDuration: 1_800,
    animationEasing: CHART_ANIMATION_EASING.LINEAR,
    animationInitial: CHART_INITIAL_ANIMATION.DRAW,
    animationUpdateDuration: 900,
    height: 680,
    width: 760
  },
  name: 'Updates · Scatter matrix multiples',
  parameters: {
    storyHeader: {
      description: '초기 draw에서는 동일 datum point가 모든 mini cell에 동시에 추가되고, 갱신 시에는 domain 변화에 맞춰 위치·반경·색상을 함께 보간합니다.',
      eyebrow: 'Small multiples interpolation',
      title: 'Scatter matrix 데이터 전환'
    } satisfies StoryHeaderParameters
  },
  render: renderScatterMatrix
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    animationDuration: 1_100,
    animationEasing: CHART_ANIMATION_EASING.EASE_IN_OUT,
    animationInitial: CHART_INITIAL_ANIMATION.DRAW,
    animationUpdateDuration: 1_100
  },
  name: 'Updates · Mixed multiple marks',
  parameters: {
    storyHeader: {
      description: 'Heatmap·stacked Area·Bar·Line·Scatter의 mark별 초기 draw와 단일 datum 갱신·범주 추가 시 축과 geometry의 동시 전환을 확인하는 통합 회귀 예제입니다.',
      eyebrow: 'Heterogeneous interpolation',
      title: '여러 mark 유형의 동시 전환'
    } satisfies StoryHeaderParameters
  },
  render: renderMixed
}`,...E.parameters?.docs?.source}}};const pe=["InitialDraw","InitialDrawReverse","InitialWipe","InitialWipeReverse","InitialFade","LineAreaUpdates","BarScatterUpdates","ComplexMarkFallback","ScatterMatrixUpdates","MixedMultipleMarks"];export{S as BarScatterUpdates,T as ComplexMarkFallback,g as InitialDraw,b as InitialDrawReverse,h as InitialFade,f as InitialWipe,D as InitialWipeReverse,x as LineAreaUpdates,E as MixedMultipleMarks,w as ScatterMatrixUpdates,pe as __namedExportsOrder,ce as default};
