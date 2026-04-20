const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jspdf.es.min-PvKOBEWS.js","./preload-helper-PPVm8Dsz.js"])))=>i.map(i=>d[i]);
import{_ as E}from"./preload-helper-PPVm8Dsz.js";import{s as w,k as P,d as R,c as G,f as S,j as T}from"./story-utils-BiNSZ_VQ.js";import{b as f}from"./interaction-helpers-BzULOBsR.js";const B='canvas[data-role="main"]';class l{static exportPNG(t,e){const n=typeof e=="number"?{scale:e,transparent:!0}:{scale:2,transparent:!0,...e},r=n.transparent?t:l.withBackground(t,w.white);return l.exportScaledCanvas(r,n.scale,"image/png")}static exportJPG(t,e=.92){const n=l.withBackground(t,w.white);return l.exportScaledCanvas(n,1,"image/jpeg",e)}static async exportPDF(t,e){let n;try{n=await E(()=>import("./jspdf.es.min-PvKOBEWS.js").then(y=>y.j),__vite__mapDeps([0,1]),import.meta.url)}catch{throw new Error("jspdf is required for PDF export. Install it with: pnpm add jspdf")}const r=e?.orientation??"landscape",a=e?.margin??0,o=new n.jsPDF({orientation:r,unit:"px"}),s=o.internal.pageSize.getWidth(),c=o.internal.pageSize.getHeight(),i=t.toDataURL("image/png"),d=s-a*2,p=c-a*2,b=t.width/t.height;let u=d,g=d/b;g>p&&(g=p,u=p*b);const v=(s-u)/2,C=(c-g)/2;return o.addImage(i,"PNG",v,C,u,g),o.output("blob")}static async exportContainer(t,e){const n=e.format==="jpg"?!1:e.transparent,r=await l.composeContainerCanvas(t,{scale:e.scale,transparent:n}),a=e.format==="jpg"?"image/jpeg":"image/png";return new Promise((o,s)=>{r.toBlob(c=>c?o(c):s(new Error("Failed to export container")),a,e.quality)})}static async exportContainerPDF(t,e){const n=await l.composeContainerCanvas(t,{transparent:!1});return l.exportPDF(n,e)}static async composeContainerCanvas(t,e){document.fonts?.ready&&await document.fonts.ready;const n=t.getRootElement(),r=n.getBoundingClientRect(),a=r.width,o=r.height;if(a<=0||o<=0)throw new Error(`Cannot export: chart container has zero size (${a}x${o}). Ensure the container is visible and has non-zero dimensions.`);const s=e.scale??window.devicePixelRatio??2,c=document.createElement("canvas");c.width=Math.max(1,Math.round(a*s)),c.height=Math.max(1,Math.round(o*s));const i=c.getContext("2d");if(!i)throw new Error("Failed to acquire 2D context for export");i.scale(s,s),e.transparent||(i.fillStyle=w.white,i.fillRect(0,0,a,o));const d=n.querySelector(B);if(d){const p=P(d,n);p.width>0&&p.height>0&&i.drawImage(d,p.x,p.y,p.width,p.height)}return await t.renderToCanvas(i,{x:0,y:0,width:a,height:o}),c}static withBackground(t,e){const n=document.createElement("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");return r.fillStyle=e,r.fillRect(0,0,n.width,n.height),r.drawImage(t,0,0),n}static exportScaledCanvas(t,e,n,r){return new Promise((a,o)=>{if(e===1){t.toBlob(i=>{i?a(i):o(new Error("Failed to export canvas"))},n,r);return}const s=document.createElement("canvas");s.width=t.width*e,s.height=t.height*e;const c=s.getContext("2d");c.scale(e,e),c.drawImage(t,0,0),s.toBlob(i=>{i?a(i):o(new Error("Failed to export canvas"))},n,r)})}}function x(m,t){const e=URL.createObjectURL(m),n=document.createElement("a");n.href=e,n.download=t,n.click(),URL.revokeObjectURL(e)}const I={title:"Interactions/Export",args:{...G},argTypes:{...R}},h={parameters:{controls:{disable:!0}},render:m=>{const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:16px;";let e=null;const n=S("bar",T,{frameTheme:m.frameTheme,bar:{radius:4},line:{curve:"smooth"}},{width:600,height:400,onEngine:a=>{e=a}});t.appendChild(n);const r=document.createElement("div");return r.style.cssText="display:flex;gap:8px;",r.appendChild(f("PNG (transparent)",async()=>{const a=e?.getCanvas();if(!a)return;const o=await l.exportPNG(a,{transparent:!0});x(o,"chart-transparent.png")})),r.appendChild(f("PNG (white bg)",async()=>{const a=e?.getCanvas();if(!a)return;const o=await l.exportPNG(a,{transparent:!1});x(o,"chart-white.png")})),r.appendChild(f("Export JPG",async()=>{const a=e?.getCanvas();if(!a)return;const o=await l.exportJPG(a);x(o,"chart.jpg")})),t.appendChild(r),t}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"PNG (투명/흰 배경) / JPG export 버튼 데모.",...h.parameters?.docs?.description}}};const A=["ExportDemo"];export{h as ExportDemo,A as __namedExportsOrder,I as default};
