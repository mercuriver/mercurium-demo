import{d as W,c as N,h as m,r as k,o as O,x as I,a as G,H as L,f as E,g as H,L as s,i as B}from"./story-utils-An5pPzk-.js";import{r as _}from"./radar-helpers-C-OlN-JX.js";import{a as z}from"./pie-helpers-DWI0kvCW.js";import{C as v}from"./chart-exporter-D_-jz4qc.js";import{b as R}from"./interaction-helpers-BzULOBsR.js";import{L as P}from"./lattice-renderer-Cg7V37jO.js";import"./style-LY_0diQA.js";import"./option-to-id-DOsJ4Sn6.js";import"./polar-plugin-install-CRDDjrTA.js";import"./preload-helper-PPVm8Dsz.js";const F=["top-left","top-center","top-right","middle-left","middle-center","middle-right","bottom-left","bottom-center","bottom-right"],V=["inherit","sans-serif","serif","monospace",'"Nunito Sans", sans-serif','"Helvetica Neue", Arial, sans-serif',"Georgia, serif"],ne={title:"Options/Watermark",args:{...N,dataset:"multi",watermarkText:"Made with Mercurium",watermarkPosition:"bottom-right",watermarkOpacity:.6,watermarkFontSize:10,watermarkFontWeight:"normal",watermarkColor:"",watermarkMargin:5,watermarkFontFamily:"inherit"},argTypes:{...W,dataset:B(s),watermarkText:{control:"text",description:"Watermark display text. Empty -> plugin no-op.",table:{defaultValue:{summary:'"Made with Mercurium"'},category:"Watermark"}},watermarkPosition:{control:"select",options:F,description:"Anchor inside the canvas frame.",table:{defaultValue:{summary:"bottom-right"},category:"Watermark"}},watermarkOpacity:{control:{type:"range",min:0,max:1,step:.05},description:"Watermark opacity in [0, 1].",table:{defaultValue:{summary:"0.6"},category:"Watermark"}},watermarkFontSize:{control:{type:"number",min:6,max:64,step:1},description:"Watermark font size (CSS px).",table:{defaultValue:{summary:"10"},category:"Watermark"}},watermarkFontWeight:{control:"select",options:["normal","bold","500","700"],description:"Watermark font weight (CSS weight).",table:{defaultValue:{summary:"normal"},category:"Watermark"}},watermarkColor:{control:"color",description:"Watermark text color override. Empty string -> theme default (text.disabled).",table:{defaultValue:{summary:"theme default"},category:"Watermark"}},watermarkMargin:{control:{type:"number",min:0,max:64,step:1},description:"Inset from the anchor edge (CSS px).",table:{defaultValue:{summary:"5"},category:"Watermark"}},watermarkFontFamily:{control:"select",options:V,description:"Watermark font family. `inherit` falls back to options.fontFamily.",table:{defaultValue:{summary:"inherit"},category:"Watermark"}}}},d={render:e=>E("line",m(s,e.dataset),{...H(e),watermark:{text:e.watermarkText,position:e.watermarkPosition,opacity:e.watermarkOpacity,fontSize:e.watermarkFontSize,fontWeight:e.watermarkFontWeight,margin:e.watermarkMargin,...e.watermarkColor?{color:e.watermarkColor}:{},...e.watermarkFontFamily&&e.watermarkFontFamily!=="inherit"?{fontFamily:e.watermarkFontFamily}:{}}},{width:640,height:360})},c={parameters:{controls:{disable:!0}},render:()=>{const e=m(s,"multi");return k([{label:"default",watermark:{text:"Default style"}},{label:"small (8px)",watermark:{text:"8px small",fontSize:8}},{label:"large (20px)",watermark:{text:"20px large",fontSize:20}},{label:"bold",watermark:{text:"Bold weight",fontWeight:"bold"}},{label:"serif family",watermark:{text:"Serif family",fontFamily:"Georgia, serif"}},{label:"monospace family",watermark:{text:"Mono family",fontFamily:"monospace"}},{label:"opacity 0.25",watermark:{text:"Faint 0.25",opacity:.25}},{label:"opacity 1.0 (solid)",watermark:{text:"Solid 1.0",opacity:1}},{label:"red color override",watermark:{text:"Red override",color:"#dc2626"}},{label:"green color override",watermark:{text:"Green override",color:"#15803d"}},{label:"large margin (32px)",watermark:{text:"Margin 32",margin:32}},{label:"long text (clipped)",watermark:{text:"A very long watermark message that will clip at the canvas edge"}}].map(t=>({type:"line",data:e,options:{watermark:t.watermark},label:t.label})),{columns:3,cardHeight:220,hideDataSummary:!0})}},p={parameters:{controls:{disable:!0}},render:()=>{const e=m(s,"multi");return k(F.map(a=>({type:"line",data:e,options:{frameTheme:"light",watermark:{text:"Made with Mercurium",position:a}},label:a})),{columns:3,cardHeight:220,hideDataSummary:!0})}},h={parameters:{controls:{disable:!0}},render:()=>{const e=m(s,"multi");return k(["light","dark"].map(a=>({type:"line",data:e,options:{frameTheme:a,watermark:{text:"Made with Mercurium"}},label:`frameTheme: ${a}`})),{columns:2,cardHeight:280,hideDataSummary:!0})}},U="Made with Mercurium";function K(e,a){const t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download=a,r.click(),URL.revokeObjectURL(t)}const u={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:12px;";let a=null;const t=E("bar",O,{bar:{radius:4},watermark:{text:U}},{width:600,height:360,onEngine:i=>{a=i}});e.appendChild(t);const r=document.createElement("div");r.style.cssText="display:flex;flex-direction:column;gap:6px;border:1px dashed rgba(0,0,0,0.2);padding:8px;border-radius:4px;";const l=document.createElement("div");l.style.cssText="font-size:11px;color:#52525b;",l.textContent="Exported PNG snapshot will appear here.",r.appendChild(l);const o=document.createElement("div");return o.style.cssText="display:flex;gap:8px;",o.appendChild(R("Export PNG -> show snapshot",async()=>{const i=a?.getCanvas();if(!i)return;const f=await v.exportPNG(i,{transparent:!1}),D=URL.createObjectURL(f);l.textContent="Exported PNG (the watermark must be visible below).";const A=r.querySelector("img");A&&A.remove();const S=document.createElement("img");S.src=D,S.style.cssText="max-width:600px;border:1px solid rgba(0,0,0,0.1);",r.appendChild(S)})),o.appendChild(R("Download PNG",async()=>{const i=a?.getCanvas();if(!i)return;const f=await v.exportPNG(i,{transparent:!1});K(f,"chart-with-watermark.png")})),e.appendChild(o),e.appendChild(r),e}},g={parameters:{controls:{disable:!0}},render:()=>_({axes:[{id:"a",label:"Body"},{id:"b",label:"Acidity"},{id:"c",label:"Tannin"},{id:"d",label:"Sweetness"},{id:"e",label:"Finish"}],scale:{min:0,max:5,step:1},series:[{id:"wine",name:"Cabernet",values:[4.5,3.5,4,1,4]}]},{width:520,height:460,options:{watermark:{text:"Made with Mercurium"}}})},w={parameters:{controls:{disable:!0}},render:()=>E("heatmap",L,{heatmap:{colorScale:{kind:"diverging",domain:{min:-1,mid:0,max:1}}},watermark:{text:"Made with Mercurium"}},{width:520,height:460})},M={nodes:[{id:"src",displayName:"Source"},{id:"parse",displayName:"Parse"},{id:"normalise",displayName:"Normalise"},{id:"enrich",displayName:"Enrich"},{id:"sink",displayName:"Sink"}],links:[{id:"l1",source:"src",target:"parse"},{id:"l2",source:"parse",target:"normalise"},{id:"l3",source:"normalise",target:"enrich"},{id:"l4",source:"enrich",target:"sink"}]},b={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");return e.style.cssText="width:520px;height:460px;border:1px solid rgba(0,0,0,0.12);border-radius:4px;overflow:hidden;",P.mount(e,{input:M,frameOptions:{watermark:{text:"Made with Mercurium"}}}),e}},Y={slices:[{id:"organic",label:"Organic",value:52},{id:"direct",label:"Direct",value:23},{id:"social",label:"Social",value:16},{id:"referral",label:"Referral",value:9}]},$={axes:[{id:"a",label:"Body"},{id:"b",label:"Acidity"},{id:"c",label:"Tannin"},{id:"d",label:"Sweetness"},{id:"e",label:"Finish"}],scale:{min:0,max:5,step:1},series:[{id:"wine",name:"Cabernet",values:[4.5,3.5,4,1,4]}]},n={text:"Made with Mercurium"},T=380,y=260;function C(e,a){const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:4px;";const r=document.createElement("div");return r.style.cssText="font-size:11px;color:#52525b;font-family:sans-serif;",r.textContent=a,t.appendChild(e),t.appendChild(r),t}const x={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:16px;";const a=[{type:"line",data:m(s,"multi"),options:{watermark:n},label:"Line"},{type:"bar",data:O,options:{watermark:n},label:"Bar"},{type:"area",data:m(s,"multi"),options:{watermark:n},label:"Area"},{type:"scatter",data:I,options:{watermark:n},label:"Scatter"},{type:"timeseries",data:G,options:{watermark:n},label:"Timeseries"},{type:"heatmap",data:L,options:{watermark:n,heatmap:{colorScale:{kind:"diverging",domain:{min:-1,mid:0,max:1}}}},label:"Heatmap"}],t=k(a,{columns:3,cardHeight:y,hideDataSummary:!0});t.style.gridColumn="1 / -1",e.appendChild(t);const r=_($,{width:T,height:y,options:{watermark:n}});e.appendChild(C(r,"Radar"));const l=z(Y,{width:T,height:y,options:{watermark:n}});e.appendChild(C(l,"Pie"));const o=document.createElement("div");return o.style.cssText=`width:${T}px;height:${y}px;border:1px solid rgba(0,0,0,0.12);border-radius:4px;overflow:hidden;`,requestAnimationFrame(()=>{P.mount(o,{input:M,frameOptions:{watermark:n}})}),e.appendChild(C(o,"Lattice")),e}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Interactive playground — text, position, opacity, fontSize wired through\nStorybook controls. Frame theme is supplied by the toolbar `syncTheme`\ndecorator via `commonOptionsFrom`.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:`Style-variant grid — same dataset / same anchor, different watermark
style attributes. Confirms text / fontSize / fontWeight / color / opacity /
margin / fontFamily all flow through \`resolveWatermarkStyle\` into the
canvas paint.`,...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`9-anchor grid. Frame theme is fixed to 'light' so the visual diff is purely
positional — flip the toolbar theme on the Showcase story to confirm
dark-mode color reactivity.`,...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"Light vs dark theme color reactivity. Same text, same anchor; theme flip\nalone changes the resolved color via `frameTheme.watermark.color`.",...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`Export snapshot — render a chart with a watermark, then export to PNG and
display the resulting image side-by-side. Confirms the watermark rides
through the export pipeline with zero exporter-side changes.`,...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Polar / radar uses the same anchor formulas — `bottom-right` resolves to\nthe canvas's bottom-right, NOT the polar center.",...g.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`Heatmap is a cartesian chart type and routes through the same plugin
pipeline as line / bar / scatter. The watermark is painted on the same
main canvas, alongside the heatmap cells.`,...w.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Lattice (topology, SVG surface — ADR-0014) paints the watermark as an SVG\n`<text>` element, NOT through the canvas plugin. Both surfaces call the\nsame `computeWatermarkAnchor` + `resolveWatermarkStyle` helpers, so the\n`bottom-right` anchor lands at the same screen-space position as the\ncartesian and polar paradigms above.",...b.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = 'display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:16px;';

    // ── Cartesian ────────────────────────────────────────────────────────────
    const cartesianCards: ChartGridCard[] = [{
      type: 'line',
      data: resolveDataset(LINE_DATASETS, 'multi'),
      options: {
        watermark: WATERMARK_OPTS
      },
      label: 'Line'
    }, {
      type: 'bar',
      data: CATEGORY_BASIC,
      options: {
        watermark: WATERMARK_OPTS
      },
      label: 'Bar'
    }, {
      type: 'area',
      data: resolveDataset(LINE_DATASETS, 'multi'),
      options: {
        watermark: WATERMARK_OPTS
      },
      label: 'Area'
    }, {
      type: 'scatter',
      data: NUMERIC_SCATTER,
      options: {
        watermark: WATERMARK_OPTS
      },
      label: 'Scatter'
    }, {
      type: 'timeseries',
      data: DATE_DAILY,
      options: {
        watermark: WATERMARK_OPTS
      },
      label: 'Timeseries'
    }, {
      type: 'heatmap',
      data: HEATMAP_CORRELATION_DATA,
      options: {
        watermark: WATERMARK_OPTS,
        heatmap: {
          colorScale: {
            kind: 'diverging',
            domain: {
              min: -1,
              mid: 0,
              max: 1
            }
          }
        }
      } as ChartOptions,
      label: 'Heatmap'
    }];
    const cartesianGrid = renderChartGrid(cartesianCards, {
      columns: 3,
      cardHeight: CARD_H,
      hideDataSummary: true
    });
    cartesianGrid.style.gridColumn = '1 / -1';
    root.appendChild(cartesianGrid);

    // ── Polar — radar ────────────────────────────────────────────────────────
    const radarEl = renderRadarSingle(RADAR_CROSS, {
      width: CARD_W,
      height: CARD_H,
      options: {
        watermark: WATERMARK_OPTS
      }
    });
    root.appendChild(withLabel(radarEl, 'Radar'));

    // ── Polar — pie ──────────────────────────────────────────────────────────
    const pieEl = renderPieSingle(PIE_TRAFFIC, {
      width: CARD_W,
      height: CARD_H,
      options: {
        watermark: WATERMARK_OPTS
      }
    });
    root.appendChild(withLabel(pieEl, 'Pie'));

    // ── Topology — lattice ───────────────────────────────────────────────────
    const latticeEl = document.createElement('div');
    latticeEl.style.cssText = \`width:\${CARD_W}px;height:\${CARD_H}px;border:1px solid rgba(0,0,0,0.12);border-radius:4px;overflow:hidden;\`;
    requestAnimationFrame(() => {
      LatticeRenderer.mount(latticeEl, {
        input: LATTICE_PIPELINE,
        frameOptions: {
          watermark: WATERMARK_OPTS
        }
      });
    });
    root.appendChild(withLabel(latticeEl, 'Lattice'));
    return root;
  }
}`,...x.parameters?.docs?.source},description:{story:`One page showing every paradigm — cartesian (line / bar / area / scatter /
timeseries / heatmap), polar (radar / pie), and topology (lattice) — each
rendered with the same \`bottom-right\` watermark. Use this story to verify
visual consistency across all rendering backends at a glance.`,...x.parameters?.docs?.description}}};const oe=["Focused","StyleVariants","AllStates","LightVsDark","ExportSnapshot","PolarRadarBottomRight","HeatmapBottomRight","TopologyLatticeBottomRight","CrossParadigmShowcase"];export{p as AllStates,x as CrossParadigmShowcase,u as ExportSnapshot,d as Focused,w as HeatmapBottomRight,h as LightVsDark,g as PolarRadarBottomRight,c as StyleVariants,b as TopologyLatticeBottomRight,oe as __namedExportsOrder,ne as default};
