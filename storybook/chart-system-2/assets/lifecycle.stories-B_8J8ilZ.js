import{e as m}from"./chart-BUQmp9vc.js";import{o as u}from"./chart-story-lifecycle-BYb_YbhB.js";const p={CONTAINER:"Container"},f={title:"API Examples/Container Mount",args:{height:440,width:800},argTypes:{height:{control:{max:720,min:160,step:20,type:"range"},name:"container.height",table:{category:p.CONTAINER}},width:{control:{max:1080,min:280,step:20,type:"range"},name:"container.width",table:{category:p.CONTAINER}}},parameters:{controls:{sort:"none"}}},h=({height:c,width:n})=>{const o=document.createElement("section"),r=document.createElement("div"),a=document.createElement("code"),e=document.createElement("div"),s=document.createElement("span");Object.assign(o.style,{display:"grid",gap:"12px",minWidth:"0"}),Object.assign(r.style,{alignItems:"center",display:"flex",flexWrap:"wrap",gap:"16px",justifyContent:"space-between"}),a.textContent=`${n} × ${c}px`,Object.assign(a.style,{color:"#596780",fontSize:"13px"}),Object.assign(e.style,{background:"#ffffff",border:"1px solid #8190a8",height:`${c}px`,maxWidth:`${n}px`,position:"relative",width:`${n}px`}),s.textContent="container child · preserved",Object.assign(s.style,{background:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"4px",color:"#475569",fontSize:"12px",left:"12px",padding:"4px 8px",pointerEvents:"none",position:"absolute",top:"12px",zIndex:"1"}),e.append(s);const l=new m(e,{view:{options:{xAxis:{scale:"time",visible:!1},yAxis:{scale:"linear",visible:!1}},paradigm:"cartesian",series:{encoding:{x:"date",y:"value"},id:"value"}}});u(e,()=>l.destroy()),e.style.width="100%";const d=e.querySelector("[data-mercurium-chart-root]"),i=document.createElement("span");return i.textContent=d===null?"Root not found":"Chart root mounted",Object.assign(i.style,{color:d===null?"#b42318":"#287a4d",fontSize:"13px",fontWeight:"700"}),r.append(i,a),o.append(r,e),o},t={name:"컨테이너 마운트",parameters:{controls:{include:["container.height","container.width"]},storyHeader:{description:"Chart가 유효한 paradigm 초기화 뒤 HTML 컨테이너에 전용 root를 생성하고 기존 자식을 보존하는지 확인합니다.",eyebrow:"Chart host",title:"컨테이너 기반 마운트"}},render:h};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '컨테이너 마운트',
  parameters: {
    controls: {
      include: ['container.height', 'container.width']
    },
    storyHeader: {
      description: 'Chart가 유효한 paradigm 초기화 뒤 HTML 컨테이너에 전용 root를 생성하고 기존 자식을 보존하는지 확인합니다.',
      eyebrow: 'Chart host',
      title: '컨테이너 기반 마운트'
    } satisfies StoryHeaderParameters
  },
  render: createMountContent
}`,...t.parameters?.docs?.source}}};const y=["ContainerMount"];export{t as ContainerMount,y as __namedExportsOrder,f as default};
