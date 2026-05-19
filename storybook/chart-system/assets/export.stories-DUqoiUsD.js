import{C as c}from"./chart-exporter-D_-jz4qc.js";import{d,c as m,f as b,o as h}from"./story-utils-An5pPzk-.js";import{b as l}from"./interaction-helpers-BzULOBsR.js";import"./style-LY_0diQA.js";import"./preload-helper-PPVm8Dsz.js";import"./option-to-id-DOsJ4Sn6.js";function i(p,a){const e=URL.createObjectURL(p),t=document.createElement("a");t.href=e,t.download=a,t.click(),URL.revokeObjectURL(e)}const w={title:"Interactions/Export",args:{...m},argTypes:{...d}},s={parameters:{controls:{disable:!0}},render:p=>{const a=document.createElement("div");a.style.cssText="display:flex;flex-direction:column;gap:16px;";let e=null;const t=b("bar",h,{frameTheme:p.frameTheme,bar:{radius:4},line:{curve:"smooth"}},{width:600,height:400,onEngine:n=>{e=n}});a.appendChild(t);const r=document.createElement("div");return r.style.cssText="display:flex;gap:8px;",r.appendChild(l("PNG (transparent)",async()=>{const n=e?.getCanvas();if(!n)return;const o=await c.exportPNG(n,{transparent:!0});i(o,"chart-transparent.png")})),r.appendChild(l("PNG (white bg)",async()=>{const n=e?.getCanvas();if(!n)return;const o=await c.exportPNG(n,{transparent:!1});i(o,"chart-white.png")})),r.appendChild(l("Export JPG",async()=>{const n=e?.getCanvas();if(!n)return;const o=await c.exportJPG(n);i(o,"chart.jpg")})),a.appendChild(r),a}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"PNG (투명/흰 배경) / JPG export 버튼 데모.",...s.parameters?.docs?.description}}};const E=["ExportDemo"];export{s as ExportDemo,E as __namedExportsOrder,w as default};
