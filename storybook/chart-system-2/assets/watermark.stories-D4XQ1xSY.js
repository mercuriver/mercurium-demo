import{c}from"./chart-showcase-D6LVIqI-.js";import{c as p}from"./chart-story-content-DqL3FnFI.js";import{n as l}from"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const g={title:"Features/Watermark",parameters:{controls:{disable:!0}}},e=t=>({data:[{month:"Jan",value:24},{month:"Feb",value:38},{month:"Mar",value:31},{month:"Apr",value:45}],view:{paradigm:"cartesian",options:{animation:{enabled:!1},watermark:t,padding:12,xAxis:{scale:"category"},yAxis:{scale:"linear"}},series:{id:"sales",name:"Sales",encoding:{x:"month",y:"value"}}}}),r={name:"Canvas anchors",parameters:{storyHeader:{eyebrow:"Watermark placement",title:"Graph Canvas의 아홉 배치 기준",description:"같은 Canvas의 마지막 레이어에 텍스트를 그립니다. 위치와 margin은 padding 안쪽 Canvas를 기준으로 하며 축·데이터와 독립적입니다. 긴 텍스트는 Canvas 경계에서 잘립니다."}},render:()=>c(Object.values(l).map(t=>({title:t,description:"Margin 12px · data-independent attribution",initialization:e({text:"Mercurium",position:t,margin:12,opacity:1})})))},i={name:"Style and theme",parameters:{storyHeader:{eyebrow:"Watermark appearance",title:"출처·초안·브랜드 표현",description:"생략한 색과 글꼴은 theme.text.disabled와 theme.font를 따릅니다. 워터마크만 다른 표현이 필요하면 color·opacity·fontSize·fontWeight·fontFamily를 지정합니다."}},render:()=>c([{title:"Default attribution",description:"Bottom-right · theme defaults · opacity 0.6",initialization:e({text:"Source: Mercurium"})},{title:"Draft",description:"Centered · large bold type · low opacity",initialization:e({text:"DRAFT",position:"middle-center",fontSize:44,fontWeight:"bold",color:"#a855f7",opacity:.25})},{title:"Brand signature",description:"Custom family · numeric weight · corner inset",initialization:e({text:"Mercurium Studio",position:"top-right",fontFamily:"Georgia, serif",fontWeight:600,fontSize:18,color:"#2563eb",opacity:1,margin:16})},{title:"Dark theme",description:"The same omitted color follows the dark semantic palette",initialization:{...e({text:"Source: Mercurium"}),theme:{preset:"dark"}}}])},o={name:"Raster snapshot",parameters:{storyHeader:{eyebrow:"Watermark raster output",title:"화면의 Canvas와 PNG가 같은 워터마크를 포함",description:"현재 graph Canvas를 PNG로 캡처해 아래에서 비교합니다. 같은 Canvas의 모든 mark·축·워터마크가 포함되며 외부 HTML title·legend는 이 캡처 범위에 포함되지 않습니다."}},render:()=>{const t=p({width:700,height:360,initialization:e({text:"Mercurium · Preview",opacity:.9,fontSize:16}),summary:"Graph Canvas · PNG snapshot"}),n=document.createElement("button"),a=document.createElement("img");return n.type="button",n.textContent="현재 Canvas를 PNG로 확인",Object.assign(n.style,{justifySelf:"start",padding:"8px 12px",cursor:"pointer"}),a.alt="Graph Canvas PNG including the watermark",Object.assign(a.style,{display:"none",width:"100%",maxWidth:"700px",background:"#fff"}),n.addEventListener("click",()=>{const s=t.querySelector("canvas");s!==null&&(a.src=s.toDataURL("image/png"),a.style.display="block")}),t.append(n,a),t}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Canvas anchors',
  parameters: {
    storyHeader: {
      eyebrow: 'Watermark placement',
      title: 'Graph Canvas의 아홉 배치 기준',
      description: '같은 Canvas의 마지막 레이어에 텍스트를 그립니다. 위치와 margin은 padding 안쪽 Canvas를 기준으로 하며 축·데이터와 독립적입니다. 긴 텍스트는 Canvas 경계에서 잘립니다.'
    }
  },
  render: () => createChartShowcase(Object.values(CHART_WATERMARK_POSITION).map(position => ({
    title: position,
    description: 'Margin 12px · data-independent attribution',
    initialization: createExample({
      text: 'Mercurium',
      position,
      margin: 12,
      opacity: 1
    })
  })))
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Style and theme',
  parameters: {
    storyHeader: {
      eyebrow: 'Watermark appearance',
      title: '출처·초안·브랜드 표현',
      description: '생략한 색과 글꼴은 theme.text.disabled와 theme.font를 따릅니다. 워터마크만 다른 표현이 필요하면 color·opacity·fontSize·fontWeight·fontFamily를 지정합니다.'
    }
  },
  render: () => createChartShowcase([{
    title: 'Default attribution',
    description: 'Bottom-right · theme defaults · opacity 0.6',
    initialization: createExample({
      text: 'Source: Mercurium'
    })
  }, {
    title: 'Draft',
    description: 'Centered · large bold type · low opacity',
    initialization: createExample({
      text: 'DRAFT',
      position: 'middle-center',
      fontSize: 44,
      fontWeight: 'bold',
      color: '#a855f7',
      opacity: 0.25
    })
  }, {
    title: 'Brand signature',
    description: 'Custom family · numeric weight · corner inset',
    initialization: createExample({
      text: 'Mercurium Studio',
      position: 'top-right',
      fontFamily: 'Georgia, serif',
      fontWeight: 600,
      fontSize: 18,
      color: '#2563eb',
      opacity: 1,
      margin: 16
    })
  }, {
    title: 'Dark theme',
    description: 'The same omitted color follows the dark semantic palette',
    initialization: {
      ...createExample({
        text: 'Source: Mercurium'
      }),
      theme: {
        preset: 'dark'
      }
    }
  }])
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Raster snapshot',
  parameters: {
    storyHeader: {
      eyebrow: 'Watermark raster output',
      title: '화면의 Canvas와 PNG가 같은 워터마크를 포함',
      description: '현재 graph Canvas를 PNG로 캡처해 아래에서 비교합니다. 같은 Canvas의 모든 mark·축·워터마크가 포함되며 외부 HTML title·legend는 이 캡처 범위에 포함되지 않습니다.'
    }
  },
  render: () => {
    const content = createChartStoryContent({
      width: 700,
      height: 360,
      initialization: createExample({
        text: 'Mercurium · Preview',
        opacity: 0.9,
        fontSize: 16
      }),
      summary: 'Graph Canvas · PNG snapshot'
    });
    const button = document.createElement('button');
    const snapshot = document.createElement('img');
    button.type = 'button';
    button.textContent = '현재 Canvas를 PNG로 확인';
    Object.assign(button.style, {
      justifySelf: 'start',
      padding: '8px 12px',
      cursor: 'pointer'
    });
    snapshot.alt = 'Graph Canvas PNG including the watermark';
    Object.assign(snapshot.style, {
      display: 'none',
      width: '100%',
      maxWidth: '700px',
      background: '#fff'
    });
    button.addEventListener('click', () => {
      const canvas = content.querySelector('canvas');
      if (canvas === null) return;
      snapshot.src = canvas.toDataURL('image/png');
      snapshot.style.display = 'block';
    });
    content.append(button, snapshot);
    return content;
  }
}`,...o.parameters?.docs?.source}}};const f=["Positions","StyleVariants","RasterSnapshot"];export{r as Positions,o as RasterSnapshot,i as StyleVariants,f as __namedExportsOrder,g as default};
