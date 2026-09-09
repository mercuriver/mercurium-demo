import{C as p}from"./chart-exporter-B35VRgVb.js";import{b as i}from"./interaction-helpers-CbB0CC5-.js";import{a as d,c as m,d as b,m as h}from"./story-utils-B9NFoQdo.js";import"./preload-helper-PPVm8Dsz.js";const l=(c,a)=>{const e=URL.createObjectURL(c),t=document.createElement("a");t.href=e,t.download=a,t.click(),URL.revokeObjectURL(e)},C={title:"Interactions/Export",args:{...m},argTypes:{...d}},s={parameters:{controls:{disable:!0}},render:c=>{const a=document.createElement("div");a.style.cssText="display:flex;flex-direction:column;gap:16px;";let e=null;const t=b("bar",h,{frameTheme:c.frameTheme,bar:{radius:4},line:{curve:"smooth"}},{width:600,height:400,onEngine:n=>{e=n}});a.appendChild(t);const r=document.createElement("div");return r.style.cssText="display:flex;gap:8px;",r.appendChild(i("PNG (transparent)",async()=>{const n=e?.getCanvas();if(!n)return;const o=await p.exportPNG(n,{transparent:!0});l(o,"chart-transparent.png")})),r.appendChild(i("PNG (white bg)",async()=>{const n=e?.getCanvas();if(!n)return;const o=await p.exportPNG(n,{transparent:!1});l(o,"chart-white.png")})),r.appendChild(i("Export JPG",async()=>{const n=e?.getCanvas();if(!n)return;const o=await p.exportJPG(n);l(o,"chart.jpg")})),a.appendChild(r),a}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;flex-direction:column;gap:16px;';
    let engineRef: import('../coordinate/cartesian/cartesian-engine').CartesianEngine | null = null;
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
}`,...s.parameters?.docs?.source},description:{story:"PNG (투명/흰 배경) / JPG export 버튼 데모.",...s.parameters?.docs?.description}}};const v=["ExportDemo"];export{s as ExportDemo,v as __namedExportsOrder,C as default};
