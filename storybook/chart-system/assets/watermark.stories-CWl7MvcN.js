import{d as E,c as F,h as w,r as y,f as k,g as A,L as h,i as L,o as M,H as O}from"./story-utils-CJT9BIct.js";import{r as N}from"./radar-helpers-C2wqLtll.js";import{C as S}from"./chart-exporter-DjwRFcRk.js";import{b as v}from"./interaction-helpers-BzULOBsR.js";import{L as R}from"./lattice-renderer-CVL5BDVG.js";import"./style-CugFjfBU.js";import"./option-to-id-BJrSKRCI.js";import"./polar-plugin-install-Cko35AAA.js";import"./preload-helper-PPVm8Dsz.js";const T=["top-left","top-center","top-right","middle-left","middle-center","middle-right","bottom-left","bottom-center","bottom-right"],P=["inherit","sans-serif","serif","monospace",'"Nunito Sans", sans-serif','"Helvetica Neue", Arial, sans-serif',"Georgia, serif"],q={title:"Options/Watermark",args:{...F,dataset:"multi",watermarkText:"Made with Mercurium",watermarkPosition:"bottom-right",watermarkOpacity:.6,watermarkFontSize:10,watermarkFontWeight:"normal",watermarkColor:"",watermarkMargin:8,watermarkFontFamily:"inherit"},argTypes:{dataset:L(h),watermarkText:{control:"text",description:"Watermark display text. Empty -> plugin no-op.",table:{defaultValue:{summary:'"Made with Mercurium"'},category:"Watermark"}},watermarkPosition:{control:"select",options:T,description:"Anchor inside the canvas frame.",table:{defaultValue:{summary:"bottom-right"},category:"Watermark"}},watermarkOpacity:{control:{type:"range",min:0,max:1,step:.05},description:"Watermark opacity in [0, 1].",table:{defaultValue:{summary:"0.6"},category:"Watermark"}},watermarkFontSize:{control:{type:"number",min:6,max:64,step:1},description:"Watermark font size (CSS px).",table:{defaultValue:{summary:"10"},category:"Watermark"}},watermarkFontWeight:{control:"select",options:["normal","bold","500","700"],description:"Watermark font weight (CSS weight).",table:{defaultValue:{summary:"normal"},category:"Watermark"}},watermarkColor:{control:"color",description:"Watermark text color override. Empty string -> theme default (text.disabled).",table:{defaultValue:{summary:"theme default"},category:"Watermark"}},watermarkMargin:{control:{type:"number",min:0,max:64,step:1},description:"Inset from the anchor edge (CSS px).",table:{defaultValue:{summary:"8"},category:"Watermark"}},watermarkFontFamily:{control:"select",options:P,description:"Watermark font family. `inherit` falls back to options.fontFamily.",table:{defaultValue:{summary:"inherit"},category:"Watermark"}},...E}},o={render:e=>k("line",w(h,e.dataset),{...A(e),watermark:{text:e.watermarkText,position:e.watermarkPosition,opacity:e.watermarkOpacity,fontSize:e.watermarkFontSize,fontWeight:e.watermarkFontWeight,margin:e.watermarkMargin,...e.watermarkColor?{color:e.watermarkColor}:{},...e.watermarkFontFamily&&e.watermarkFontFamily!=="inherit"?{fontFamily:e.watermarkFontFamily}:{}}},{width:640,height:360})},i={parameters:{controls:{disable:!0}},render:()=>{const e=w(h,"multi");return y([{label:"default",watermark:{text:"Default style"}},{label:"small (8px)",watermark:{text:"8px small",fontSize:8}},{label:"large (20px)",watermark:{text:"20px large",fontSize:20}},{label:"bold",watermark:{text:"Bold weight",fontWeight:"bold"}},{label:"serif family",watermark:{text:"Serif family",fontFamily:"Georgia, serif"}},{label:"monospace family",watermark:{text:"Mono family",fontFamily:"monospace"}},{label:"opacity 0.25",watermark:{text:"Faint 0.25",opacity:.25}},{label:"opacity 1.0 (solid)",watermark:{text:"Solid 1.0",opacity:1}},{label:"red color override",watermark:{text:"Red override",color:"#dc2626"}},{label:"green color override",watermark:{text:"Green override",color:"#15803d"}},{label:"large margin (32px)",watermark:{text:"Margin 32",margin:32}},{label:"long text (clipped)",watermark:{text:"A very long watermark message that will clip at the canvas edge"}}].map(r=>({type:"line",data:e,options:{watermark:r.watermark},label:r.label})),{columns:3,cardHeight:220,hideDataSummary:!0})}},s={parameters:{controls:{disable:!0}},render:()=>{const e=w(h,"multi");return y(T.map(t=>({type:"line",data:e,options:{frameTheme:"light",watermark:{text:"Made with Mercurium",position:t}},label:t})),{columns:3,cardHeight:220,hideDataSummary:!0})}},l={parameters:{controls:{disable:!0}},render:()=>{const e=w(h,"multi");return y(["light","dark"].map(t=>({type:"line",data:e,options:{frameTheme:t,watermark:{text:"Made with Mercurium"}},label:`frameTheme: ${t}`})),{columns:2,cardHeight:280,hideDataSummary:!0})}},W="Made with Mercurium";function G(e,t){const r=URL.createObjectURL(e),a=document.createElement("a");a.href=r,a.download=t,a.click(),URL.revokeObjectURL(r)}const m={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:12px;";let t=null;const r=k("bar",M,{bar:{radius:4},watermark:{text:W}},{width:600,height:360,onEngine:n=>{t=n}});e.appendChild(r);const a=document.createElement("div");a.style.cssText="display:flex;flex-direction:column;gap:6px;border:1px dashed rgba(0,0,0,0.2);padding:8px;border-radius:4px;";const u=document.createElement("div");u.style.cssText="font-size:11px;color:#52525b;",u.textContent="Exported PNG snapshot will appear here.",a.appendChild(u);const g=document.createElement("div");return g.style.cssText="display:flex;gap:8px;",g.appendChild(v("Export PNG -> show snapshot",async()=>{const n=t?.getCanvas();if(!n)return;const b=await S.exportPNG(n,{transparent:!1}),C=URL.createObjectURL(b);u.textContent="Exported PNG (the watermark must be visible below).";const f=a.querySelector("img");f&&f.remove();const x=document.createElement("img");x.src=C,x.style.cssText="max-width:600px;border:1px solid rgba(0,0,0,0.1);",a.appendChild(x)})),g.appendChild(v("Download PNG",async()=>{const n=t?.getCanvas();if(!n)return;const b=await S.exportPNG(n,{transparent:!1});G(b,"chart-with-watermark.png")})),e.appendChild(g),e.appendChild(a),e}},d={parameters:{controls:{disable:!0}},render:()=>N({axes:[{id:"a",label:"Body"},{id:"b",label:"Acidity"},{id:"c",label:"Tannin"},{id:"d",label:"Sweetness"},{id:"e",label:"Finish"}],scale:{min:0,max:5,step:1},series:[{id:"wine",name:"Cabernet",values:[4.5,3.5,4,1,4]}]},{width:520,height:460,options:{watermark:{text:"Made with Mercurium"}}})},c={parameters:{controls:{disable:!0}},render:()=>k("heatmap",O,{heatmap:{colorScale:{kind:"diverging",domain:{min:-1,mid:0,max:1}}},watermark:{text:"Made with Mercurium"}},{width:520,height:460})},D={nodes:[{id:"src",displayName:"Source"},{id:"parse",displayName:"Parse"},{id:"normalise",displayName:"Normalise"},{id:"enrich",displayName:"Enrich"},{id:"sink",displayName:"Sink"}],links:[{id:"l1",source:"src",target:"parse"},{id:"l2",source:"parse",target:"normalise"},{id:"l3",source:"normalise",target:"enrich"},{id:"l4",source:"enrich",target:"sink"}]},p={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");return e.style.cssText="width:520px;height:460px;border:1px solid rgba(0,0,0,0.12);border-radius:4px;overflow:hidden;",R.mount(e,{input:D,frameOptions:{watermark:{text:"Made with Mercurium"}}}),e}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    watermark: {
      text: args.watermarkText,
      position: args.watermarkPosition,
      opacity: args.watermarkOpacity,
      fontSize: args.watermarkFontSize,
      fontWeight: args.watermarkFontWeight,
      margin: args.watermarkMargin,
      ...(args.watermarkColor ? {
        color: args.watermarkColor
      } : {}),
      ...(args.watermarkFontFamily && args.watermarkFontFamily !== 'inherit' ? {
        fontFamily: args.watermarkFontFamily
      } : {})
    }
  }, {
    width: 640,
    height: 360
  })
}`,...o.parameters?.docs?.source},description:{story:"Interactive playground — text, position, opacity, fontSize wired through\nStorybook controls. Frame theme is supplied by the toolbar `syncTheme`\ndecorator via `commonOptionsFrom`.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const data = resolveDataset(LINE_DATASETS, 'multi');
    const variants: Array<{
      label: string;
      watermark: ChartOptions['watermark'];
    }> = [{
      label: 'default',
      watermark: {
        text: 'Default style'
      }
    }, {
      label: 'small (8px)',
      watermark: {
        text: '8px small',
        fontSize: 8
      }
    }, {
      label: 'large (20px)',
      watermark: {
        text: '20px large',
        fontSize: 20
      }
    }, {
      label: 'bold',
      watermark: {
        text: 'Bold weight',
        fontWeight: 'bold'
      }
    }, {
      label: 'serif family',
      watermark: {
        text: 'Serif family',
        fontFamily: 'Georgia, serif'
      }
    }, {
      label: 'monospace family',
      watermark: {
        text: 'Mono family',
        fontFamily: 'monospace'
      }
    }, {
      label: 'opacity 0.25',
      watermark: {
        text: 'Faint 0.25',
        opacity: 0.25
      }
    }, {
      label: 'opacity 1.0 (solid)',
      watermark: {
        text: 'Solid 1.0',
        opacity: 1
      }
    }, {
      label: 'red color override',
      watermark: {
        text: 'Red override',
        color: '#dc2626'
      }
    }, {
      label: 'green color override',
      watermark: {
        text: 'Green override',
        color: '#15803d'
      }
    }, {
      label: 'large margin (32px)',
      watermark: {
        text: 'Margin 32',
        margin: 32
      }
    }, {
      label: 'long text (clipped)',
      watermark: {
        text: 'A very long watermark message that will clip at the canvas edge'
      }
    }];
    return renderChartGrid(variants.map(v => ({
      type: 'line' as const,
      data,
      options: {
        watermark: v.watermark
      } as ChartOptions,
      label: v.label
    })), {
      columns: 3,
      cardHeight: 220,
      hideDataSummary: true
    });
  }
}`,...i.parameters?.docs?.source},description:{story:`Style-variant grid — same dataset / same anchor, different watermark
style attributes. Confirms text / fontSize / fontWeight / color / opacity /
margin / fontFamily all flow through \`resolveWatermarkStyle\` into the
canvas paint.`,...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const data = resolveDataset(LINE_DATASETS, 'multi');
    return renderChartGrid(ALL_POSITIONS.map(position => ({
      type: 'line' as const,
      data,
      options: {
        frameTheme: 'light',
        watermark: {
          text: 'Made with Mercurium',
          position
        }
      } as ChartOptions,
      label: position
    })), {
      columns: 3,
      cardHeight: 220,
      hideDataSummary: true
    });
  }
}`,...s.parameters?.docs?.source},description:{story:`9-anchor grid. Frame theme is fixed to 'light' so the visual diff is purely
positional — flip the toolbar theme on the Showcase story to confirm
dark-mode color reactivity.`,...s.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const data = resolveDataset(LINE_DATASETS, 'multi');
    return renderChartGrid((['light', 'dark'] as const).map(frameTheme => ({
      type: 'line' as const,
      data,
      options: {
        frameTheme,
        watermark: {
          text: 'Made with Mercurium'
        }
      } as ChartOptions,
      label: \`frameTheme: \${frameTheme}\`
    })), {
      columns: 2,
      cardHeight: 280,
      hideDataSummary: true
    });
  }
}`,...l.parameters?.docs?.source},description:{story:"Light vs dark theme color reactivity. Same text, same anchor; theme flip\nalone changes the resolved color via `frameTheme.watermark.color`.",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;flex-direction:column;gap:12px;';
    let engineRef: import('@/cartesian/engine/graph-renderer').GraphRenderer | null = null;
    const chart = renderChartSingle('bar', CATEGORY_BASIC, {
      bar: {
        radius: 4
      },
      watermark: {
        text: SHOWCASE_TEXT
      }
    }, {
      width: 600,
      height: 360,
      onEngine: engine => {
        engineRef = engine;
      }
    });
    wrapper.appendChild(chart);
    const snapshotHolder = document.createElement('div');
    snapshotHolder.style.cssText = 'display:flex;flex-direction:column;gap:6px;border:1px dashed rgba(0,0,0,0.2);padding:8px;border-radius:4px;';
    const snapshotLabel = document.createElement('div');
    snapshotLabel.style.cssText = 'font-size:11px;color:#52525b;';
    snapshotLabel.textContent = 'Exported PNG snapshot will appear here.';
    snapshotHolder.appendChild(snapshotLabel);
    const toolbar = document.createElement('div');
    toolbar.style.cssText = 'display:flex;gap:8px;';
    toolbar.appendChild(btn('Export PNG -> show snapshot', async () => {
      const canvas = engineRef?.getCanvas();
      if (!canvas) return;
      const blob = await ChartExporter.exportPNG(canvas, {
        transparent: false
      });
      const url = URL.createObjectURL(blob);
      snapshotLabel.textContent = 'Exported PNG (the watermark must be visible below).';
      const existing = snapshotHolder.querySelector('img');
      if (existing) existing.remove();
      const img = document.createElement('img');
      img.src = url;
      img.style.cssText = 'max-width:600px;border:1px solid rgba(0,0,0,0.1);';
      snapshotHolder.appendChild(img);
    }));
    toolbar.appendChild(btn('Download PNG', async () => {
      const canvas = engineRef?.getCanvas();
      if (!canvas) return;
      const blob = await ChartExporter.exportPNG(canvas, {
        transparent: false
      });
      downloadBlob(blob, 'chart-with-watermark.png');
    }));
    wrapper.appendChild(toolbar);
    wrapper.appendChild(snapshotHolder);
    return wrapper;
  }
}`,...m.parameters?.docs?.source},description:{story:`Export snapshot — render a chart with a watermark, then export to PNG and
display the resulting image side-by-side. Confirms the watermark rides
through the export pipeline with zero exporter-side changes.`,...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    return renderRadarSingle({
      axes: [{
        id: 'a',
        label: 'Body'
      }, {
        id: 'b',
        label: 'Acidity'
      }, {
        id: 'c',
        label: 'Tannin'
      }, {
        id: 'd',
        label: 'Sweetness'
      }, {
        id: 'e',
        label: 'Finish'
      }],
      scale: {
        min: 0,
        max: 5,
        step: 1
      },
      series: [{
        id: 'wine',
        name: 'Cabernet',
        values: [4.5, 3.5, 4, 1, 4]
      }]
    }, {
      width: 520,
      height: 460,
      options: {
        watermark: {
          text: 'Made with Mercurium'
        }
      }
    });
  }
}`,...d.parameters?.docs?.source},description:{story:"Polar / radar uses the same anchor formulas — `bottom-right` resolves to\nthe canvas's bottom-right, NOT the polar center.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderChartSingle('heatmap', HEATMAP_CORRELATION_DATA, {
    heatmap: {
      colorScale: {
        kind: 'diverging',
        domain: {
          min: -1,
          mid: 0,
          max: 1
        }
      }
    },
    watermark: {
      text: 'Made with Mercurium'
    }
  } as ChartOptions, {
    width: 520,
    height: 460
  })
}`,...c.parameters?.docs?.source},description:{story:`Heatmap is a cartesian chart type and routes through the same plugin
pipeline as line / bar / scatter. The watermark is painted on the same
main canvas, alongside the heatmap cells.`,...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'width:520px;height:460px;border:1px solid rgba(0,0,0,0.12);border-radius:4px;overflow:hidden;';
    LatticeRenderer.mount(wrapper, {
      input: LATTICE_PIPELINE,
      frameOptions: {
        watermark: {
          text: 'Made with Mercurium'
        }
      }
    });
    return wrapper;
  }
}`,...p.parameters?.docs?.source},description:{story:"Lattice (topology, SVG surface — ADR-0014) paints the watermark as an SVG\n`<text>` element, NOT through the canvas plugin. Both surfaces call the\nsame `computeWatermarkAnchor` + `resolveWatermarkStyle` helpers, so the\n`bottom-right` anchor lands at the same screen-space position as the\ncartesian and polar paradigms above.",...p.parameters?.docs?.description}}};const X=["Focused","StyleVariants","AllStates","LightVsDark","ExportSnapshot","PolarRadarBottomRight","HeatmapBottomRight","TopologyLatticeBottomRight"];export{s as AllStates,m as ExportSnapshot,o as Focused,c as HeatmapBottomRight,l as LightVsDark,d as PolarRadarBottomRight,i as StyleVariants,p as TopologyLatticeBottomRight,X as __namedExportsOrder,q as default};
