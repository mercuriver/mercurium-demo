const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jspdf.es.min-PvKOBEWS.js","./preload-helper-PPVm8Dsz.js"])))=>i.map(i=>d[i]);
import{a as w,C as y}from"./chart-engine-BmtyFlsE.js";import{_ as E}from"./preload-helper-PPVm8Dsz.js";import{g as P}from"./mock-data-BShfxM5i.js";class i{static exportPNG(e,n){const t=typeof n=="number"?{scale:n,transparent:!0}:{scale:2,transparent:!0,...n},s=t.transparent?e:i.withBackground(e,w.white);return i.exportScaledCanvas(s,t.scale,"image/png")}static exportJPG(e,n=.92){const t=i.withBackground(e,w.white);return i.exportScaledCanvas(t,1,"image/jpeg",n)}static async exportPDF(e,n){let t;try{t=await E(()=>import("./jspdf.es.min-PvKOBEWS.js").then(C=>C.j),__vite__mapDeps([0,1]),import.meta.url)}catch{throw new Error("jspdf is required for PDF export. Install it with: pnpm add jspdf")}const s=n?.orientation??"landscape",a=n?.margin??0,o=new t.jsPDF({orientation:s,unit:"px"}),r=o.internal.pageSize.getWidth(),l=o.internal.pageSize.getHeight(),c=e.toDataURL("image/png"),m=r-a*2,h=l-a*2,x=e.width/e.height;let b=m,p=m/x;p>h&&(p=h,b=h*x);const f=(r-b)/2,v=(l-p)/2;return o.addImage(c,"PNG",f,v,b,p),o.output("blob")}static withBackground(e,n){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");return s.fillStyle=n,s.fillRect(0,0,t.width,t.height),s.drawImage(e,0,0),t}static exportScaledCanvas(e,n,t,s){return new Promise((a,o)=>{if(n===1){e.toBlob(c=>{c?a(c):o(new Error("Failed to export canvas"))},t,s);return}const r=document.createElement("canvas");r.width=e.width*n,r.height=e.height*n;const l=r.getContext("2d");l.scale(n,n),l.drawImage(e,0,0),r.toBlob(c=>{c?a(c):o(new Error("Failed to export canvas"))},t,s)})}}function u(d,e){const n=URL.createObjectURL(d),t=document.createElement("a");t.href=n,t.download=e,t.click(),URL.revokeObjectURL(n)}const k={title:"Charts/Features/Export"},g={render:()=>{const d=document.createElement("div"),e=document.createElement("div");e.style.width="600px",e.style.height="400px",e.style.border="1px solid #e2e8f0",e.style.borderRadius="4px",d.appendChild(e);const n=new y(e,"bar",{responsive:!1,width:600,height:400,bar:{radius:4},line:{curve:"smooth"}});n.setData(P);const t=document.createElement("div");t.style.marginTop="16px",t.style.display="flex",t.style.gap="8px",d.appendChild(t);const s=(a,o)=>{const r=document.createElement("button");return r.textContent=a,r.style.padding="8px 16px",r.style.borderRadius="4px",r.style.border="1px solid #cbd5e1",r.style.cursor="pointer",r.style.backgroundColor="#f8fafc",r.addEventListener("click",o),r};return t.appendChild(s("PNG (transparent)",async()=>{const a=n.getCanvas();if(!a)return;const o=await i.exportPNG(a,{transparent:!0});u(o,"chart-transparent.png")})),t.appendChild(s("PNG (white bg)",async()=>{const a=n.getCanvas();if(!a)return;const o=await i.exportPNG(a,{transparent:!1});u(o,"chart-white.png")})),t.appendChild(s("Export JPG",async()=>{const a=n.getCanvas();if(!a)return;const o=await i.exportJPG(a);u(o,"chart.jpg")})),d}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    const container = document.createElement('div');
    container.style.width = '600px';
    container.style.height = '400px';
    container.style.border = '1px solid #e2e8f0';
    container.style.borderRadius = '4px';
    wrapper.appendChild(container);
    const engine = new ChartEngine(container, 'bar', {
      responsive: false,
      width: 600,
      height: 400,
      bar: {
        radius: 4
      },
      line: {
        curve: 'smooth'
      }
    });
    engine.setData(CATEGORY_BASIC);
    const toolbar = document.createElement('div');
    toolbar.style.marginTop = '16px';
    toolbar.style.display = 'flex';
    toolbar.style.gap = '8px';
    wrapper.appendChild(toolbar);
    const createButton = (label: string, onClick: () => void) => {
      const btn = document.createElement('button');
      btn.textContent = label;
      btn.style.padding = '8px 16px';
      btn.style.borderRadius = '4px';
      btn.style.border = '1px solid #cbd5e1';
      btn.style.cursor = 'pointer';
      btn.style.backgroundColor = '#f8fafc';
      btn.addEventListener('click', onClick);
      return btn;
    };
    toolbar.appendChild(createButton('PNG (transparent)', async () => {
      const canvas = engine.getCanvas();
      if (!canvas) return;
      const blob = await ChartExporter.exportPNG(canvas, {
        transparent: true
      });
      downloadBlob(blob, 'chart-transparent.png');
    }));
    toolbar.appendChild(createButton('PNG (white bg)', async () => {
      const canvas = engine.getCanvas();
      if (!canvas) return;
      const blob = await ChartExporter.exportPNG(canvas, {
        transparent: false
      });
      downloadBlob(blob, 'chart-white.png');
    }));
    toolbar.appendChild(createButton('Export JPG', async () => {
      const canvas = engine.getCanvas();
      if (!canvas) return;
      const blob = await ChartExporter.exportJPG(canvas);
      downloadBlob(blob, 'chart.jpg');
    }));
    return wrapper;
  }
}`,...g.parameters?.docs?.source}}};const D=["ExportDemo"];export{g as ExportDemo,D as __namedExportsOrder,k as default};
