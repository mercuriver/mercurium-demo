const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jspdf.es.min-PvKOBEWS.js","./preload-helper-PPVm8Dsz.js"])))=>i.map(i=>d[i]);
import{_ as P}from"./preload-helper-PPVm8Dsz.js";import{s as f,d as R,c as G,f as B,o as S}from"./story-utils-C7AxCJZg.js";import{b as x}from"./interaction-helpers-BzULOBsR.js";const T=0;let v=0;class p{static exportPNG(t,e){const n=typeof e=="number"?{scale:e,transparent:!0}:{scale:2,transparent:!0,...e},r=n.transparent?t:p.withBackground(t,f.white);return p.exportScaledCanvas(r,n.scale,"image/png")}static exportJPG(t,e=.92){const n=p.withBackground(t,f.white);return p.exportScaledCanvas(n,1,"image/jpeg",e)}static async exportPDF(t,e){let n;try{n=await P(()=>import("./jspdf.es.min-PvKOBEWS.js").then(E=>E.j),__vite__mapDeps([0,1]),import.meta.url)}catch{throw new Error("jspdf is required for PDF export. Install it with: pnpm add jspdf")}const r=e?.orientation??"landscape",a=e?.margin??0,o=new n.jsPDF({orientation:r,unit:"px"}),s=o.internal.pageSize.getWidth(),i=o.internal.pageSize.getHeight(),d=t.toDataURL("image/png"),g=s-a*2,h=i-a*2,l=t.width/t.height;let c=g,u=g/l;u>h&&(u=h,c=h*l);const C=(s-c)/2,y=(i-u)/2;return o.addImage(d,"PNG",C,y,c,u),o.output("blob")}static async exportContainer(t,e){const n=e.format==="jpg"?!1:e.transparent,r=await p.composeContainerCanvas(t,{scale:e.scale,transparent:n}),a=e.format==="jpg"?"image/jpeg":"image/png";return new Promise((o,s)=>{r.toBlob(i=>i?o(i):s(new Error("Failed to export container")),a,e.quality)})}static async exportContainerPDF(t,e){const n=await p.composeContainerCanvas(t,{transparent:!1});return p.exportPDF(n,e)}static async composeContainerCanvas(t,e){document.fonts?.ready&&await document.fonts.ready;const r=t.getRootElement().getBoundingClientRect(),a=r.width,o=r.height;if(a<=0||o<=0)throw new Error(`Cannot export: chart container has zero size (${a}x${o}). Ensure the container is visible and has non-zero dimensions.`);const s=e.scale??window.devicePixelRatio??2,i=document.createElement("canvas");i.width=Math.max(1,Math.round(a*s)),i.height=Math.max(1,Math.round(o*s));const d=i.getContext("2d");if(!d)throw new Error("Failed to acquire 2D context for export");d.scale(s,s);const g=t.getSurfaceRegistry();v+=1;const h=`__export-background-${v}`;g.register({id:h,type:"canvas",zOrder:T,isActive:()=>!e.transparent,measureBounds:()=>({left:0,top:0,width:a,height:o}),renderToCanvas:(l,c)=>{l.fillStyle=f.white,l.fillRect(c.left,c.top,c.width,c.height)}});try{for(const l of g.getActive()){const c=l.measureBounds();c.width<=0||c.height<=0||await l.renderToCanvas(d,c)}}finally{g.unregister(h)}return i}static withBackground(t,e){const n=document.createElement("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");return r.fillStyle=e,r.fillRect(0,0,n.width,n.height),r.drawImage(t,0,0),n}static exportScaledCanvas(t,e,n,r){return new Promise((a,o)=>{if(e===1){t.toBlob(d=>{d?a(d):o(new Error("Failed to export canvas"))},n,r);return}const s=document.createElement("canvas");s.width=t.width*e,s.height=t.height*e;const i=s.getContext("2d");i.scale(e,e),i.drawImage(t,0,0),s.toBlob(d=>{d?a(d):o(new Error("Failed to export canvas"))},n,r)})}}function b(w,t){const e=URL.createObjectURL(w),n=document.createElement("a");n.href=e,n.download=t,n.click(),URL.revokeObjectURL(e)}const _={title:"Interactions/Export",args:{...G},argTypes:{...R}},m={parameters:{controls:{disable:!0}},render:w=>{const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:16px;";let e=null;const n=B("bar",S,{frameTheme:w.frameTheme,bar:{radius:4},line:{curve:"smooth"}},{width:600,height:400,onEngine:a=>{e=a}});t.appendChild(n);const r=document.createElement("div");return r.style.cssText="display:flex;gap:8px;",r.appendChild(x("PNG (transparent)",async()=>{const a=e?.getCanvas();if(!a)return;const o=await p.exportPNG(a,{transparent:!0});b(o,"chart-transparent.png")})),r.appendChild(x("PNG (white bg)",async()=>{const a=e?.getCanvas();if(!a)return;const o=await p.exportPNG(a,{transparent:!1});b(o,"chart-white.png")})),r.appendChild(x("Export JPG",async()=>{const a=e?.getCanvas();if(!a)return;const o=await p.exportJPG(a);b(o,"chart.jpg")})),t.appendChild(r),t}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;flex-direction:column;gap:16px;';
    let engineRef: import('../engine/graph-renderer').GraphRenderer | null = null;
    const chart = renderChartSingle('bar', CATEGORY_BASIC, {
      frameTheme: args.frameTheme,
      bar: {
        radius: 4
      },
      line: {
        curve: 'smooth'
      }
    }, {
      width: 600,
      height: 400,
      onEngine: engine => {
        engineRef = engine;
      }
    });
    wrapper.appendChild(chart);
    const toolbar = document.createElement('div');
    toolbar.style.cssText = 'display:flex;gap:8px;';
    toolbar.appendChild(btn('PNG (transparent)', async () => {
      const canvas = engineRef?.getCanvas();
      if (!canvas) return;
      const blob = await ChartExporter.exportPNG(canvas, {
        transparent: true
      });
      downloadBlob(blob, 'chart-transparent.png');
    }));
    toolbar.appendChild(btn('PNG (white bg)', async () => {
      const canvas = engineRef?.getCanvas();
      if (!canvas) return;
      const blob = await ChartExporter.exportPNG(canvas, {
        transparent: false
      });
      downloadBlob(blob, 'chart-white.png');
    }));
    toolbar.appendChild(btn('Export JPG', async () => {
      const canvas = engineRef?.getCanvas();
      if (!canvas) return;
      const blob = await ChartExporter.exportJPG(canvas);
      downloadBlob(blob, 'chart.jpg');
    }));
    wrapper.appendChild(toolbar);
    return wrapper;
  }
}`,...m.parameters?.docs?.source},description:{story:"PNG (투명/흰 배경) / JPG export 버튼 데모.",...m.parameters?.docs?.description}}};const A=["ExportDemo"];export{m as ExportDemo,A as __namedExportsOrder,_ as default};
