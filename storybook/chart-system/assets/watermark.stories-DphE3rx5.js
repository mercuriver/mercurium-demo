import{C}from"./chart-exporter-B35VRgVb.js";import{b as E}from"./interaction-helpers-CbB0CC5-.js";import{a as P,c as L,f as s,b as f,m as v,y as _,w as W,o as R,r as S,d as T,e as D,L as i,g as N}from"./story-utils-B9NFoQdo.js";import"./preload-helper-PPVm8Dsz.js";const M=["top-left","top-center","top-right","middle-left","middle-center","middle-right","bottom-left","bottom-center","bottom-right"],I=["inherit","sans-serif","serif","monospace",'"Nunito Sans", sans-serif','"Helvetica Neue", Arial, sans-serif',"Georgia, serif"],q={title:"Options/Watermark",args:{...L,dataset:"multi",watermarkText:"Made with Mercurium",watermarkPosition:"bottom-right",watermarkOpacity:.6,watermarkFontSize:10,watermarkFontWeight:"normal",watermarkColor:"",watermarkMargin:5,watermarkFontFamily:"inherit"},argTypes:{...P,dataset:N(i),watermarkText:{control:"text",description:"Watermark display text. Empty -> plugin no-op.",table:{defaultValue:{summary:'"Made with Mercurium"'},category:"Watermark"}},watermarkPosition:{control:"select",options:M,description:"Anchor inside the canvas frame.",table:{defaultValue:{summary:"bottom-right"},category:"Watermark"}},watermarkOpacity:{control:{type:"range",min:0,max:1,step:.05},description:"Watermark opacity in [0, 1].",table:{defaultValue:{summary:"0.6"},category:"Watermark"}},watermarkFontSize:{control:{type:"number",min:6,max:64,step:1},description:"Watermark font size (CSS px).",table:{defaultValue:{summary:"10"},category:"Watermark"}},watermarkFontWeight:{control:"select",options:["normal","bold","500","700"],description:"Watermark font weight (CSS weight).",table:{defaultValue:{summary:"normal"},category:"Watermark"}},watermarkColor:{control:"color",description:"Watermark text color override. Empty string -> theme default (text.disabled).",table:{defaultValue:{summary:"theme default"},category:"Watermark"}},watermarkMargin:{control:{type:"number",min:0,max:64,step:1},description:"Inset from the anchor edge (CSS px).",table:{defaultValue:{summary:"5"},category:"Watermark"}},watermarkFontFamily:{control:"select",options:I,description:"Watermark font family. `inherit` falls back to options.fontFamily.",table:{defaultValue:{summary:"inherit"},category:"Watermark"}}}},l={render:e=>T("line",s(i,e.dataset),{...D(e),watermark:{text:e.watermarkText,position:e.watermarkPosition,opacity:e.watermarkOpacity,fontSize:e.watermarkFontSize,fontWeight:e.watermarkFontWeight,margin:e.watermarkMargin,...e.watermarkColor?{color:e.watermarkColor}:{},...e.watermarkFontFamily&&e.watermarkFontFamily!=="inherit"?{fontFamily:e.watermarkFontFamily}:{}}},{width:640,height:360})},m={parameters:{controls:{disable:!0}},render:()=>{const e=s(i,"multi");return f([{label:"default",watermark:{text:"Default style"}},{label:"small (8px)",watermark:{text:"8px small",fontSize:8}},{label:"large (20px)",watermark:{text:"20px large",fontSize:20}},{label:"bold",watermark:{text:"Bold weight",fontWeight:"bold"}},{label:"serif family",watermark:{text:"Serif family",fontFamily:"Georgia, serif"}},{label:"monospace family",watermark:{text:"Mono family",fontFamily:"monospace"}},{label:"opacity 0.25",watermark:{text:"Faint 0.25",opacity:.25}},{label:"opacity 1.0 (solid)",watermark:{text:"Solid 1.0",opacity:1}},{label:"red color override",watermark:{text:"Red override",color:"#dc2626"}},{label:"green color override",watermark:{text:"Green override",color:"#15803d"}},{label:"large margin (32px)",watermark:{text:"Margin 32",margin:32}},{label:"long text (clipped)",watermark:{text:"A very long watermark message that will clip at the canvas edge"}}].map(n=>({type:"line",data:e,options:{watermark:n.watermark},label:n.label})),{columns:3,cardHeight:220,hideDataSummary:!0})}},d={parameters:{controls:{disable:!0}},render:()=>{const e=s(i,"multi");return f(M.map(a=>({type:"line",data:e,options:{frameTheme:"light",watermark:{text:"Made with Mercurium",position:a}},label:a})),{columns:3,cardHeight:220,hideDataSummary:!0})}},c={parameters:{controls:{disable:!0}},render:()=>{const e=s(i,"multi");return f(["light","dark"].map(a=>({type:"line",data:e,options:{frameTheme:a,watermark:{text:"Made with Mercurium"}},label:`frameTheme: ${a}`})),{columns:2,cardHeight:280,hideDataSummary:!0})}},H="Made with Mercurium",G=(e,a)=>{const n=URL.createObjectURL(e),t=document.createElement("a");t.href=n,t.download=a,t.click(),URL.revokeObjectURL(n)},p={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:12px;";let a=null;const n=T("bar",v,{bar:{radius:4},watermark:{text:H}},{width:600,height:360,onEngine:o=>{a=o}});e.appendChild(n);const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:6px;border:1px dashed rgba(0,0,0,0.2);padding:8px;border-radius:4px;";const w=document.createElement("div");w.style.cssText="font-size:11px;color:#52525b;",w.textContent="Exported PNG snapshot will appear here.",t.appendChild(w);const y=document.createElement("div");return y.style.cssText="display:flex;gap:8px;",y.appendChild(E("Export PNG -> show snapshot",async()=>{const o=a?.getCanvas();if(!o)return;const k=await C.exportPNG(o,{transparent:!1}),F=URL.createObjectURL(k);w.textContent="Exported PNG (the watermark must be visible below).";const A=t.querySelector("img");A&&A.remove();const x=document.createElement("img");x.src=F,x.style.cssText="max-width:600px;border:1px solid rgba(0,0,0,0.1);",t.appendChild(x)})),y.appendChild(E("Download PNG",async()=>{const o=a?.getCanvas();if(!o)return;const k=await C.exportPNG(o,{transparent:!1});G(k,"chart-with-watermark.png")})),e.appendChild(y),e.appendChild(t),e}},h={parameters:{controls:{disable:!0}},render:()=>S([{type:"radar",data:{axes:[{id:"a",label:"Body"},{id:"b",label:"Acidity"},{id:"c",label:"Tannin"},{id:"d",label:"Sweetness"},{id:"e",label:"Finish"}],scale:{min:0,max:5,step:1},series:[{id:"wine",name:"Cabernet",values:[4.5,3.5,4,1,4]}]},options:{watermark:{text:"Made with Mercurium"}}}],{cardHeight:460,cardWidth:520})},u={parameters:{controls:{disable:!0}},render:()=>T("heatmap",R,{heatmap:{colorScale:{kind:"diverging",domain:{min:-1,mid:0,max:1}}},watermark:{text:"Made with Mercurium"}},{width:520,height:460})},O={nodes:[{id:"src",displayName:"Source"},{id:"parse",displayName:"Parse"},{id:"normalise",displayName:"Normalise"},{id:"enrich",displayName:"Enrich"},{id:"sink",displayName:"Sink"}],links:[{id:"l1",source:"src",target:"parse"},{id:"l2",source:"parse",target:"normalise"},{id:"l3",source:"normalise",target:"enrich"},{id:"l4",source:"enrich",target:"sink"}]},g={parameters:{controls:{disable:!0}},render:()=>S([{type:"lattice",data:O,options:{watermark:{text:"Made with Mercurium"}}}],{cardHeight:460,cardWidth:520})},B={slices:[{id:"organic",label:"Organic",value:52},{id:"direct",label:"Direct",value:23},{id:"social",label:"Social",value:16},{id:"referral",label:"Referral",value:9}]},z={axes:[{id:"a",label:"Body"},{id:"b",label:"Acidity"},{id:"c",label:"Tannin"},{id:"d",label:"Sweetness"},{id:"e",label:"Finish"}],scale:{min:0,max:5,step:1},series:[{id:"wine",name:"Cabernet",values:[4.5,3.5,4,1,4]}]},r={text:"Made with Mercurium"},V=260,b={parameters:{controls:{disable:!0}},render:()=>{const e=[{type:"line",data:s(i,"multi"),options:{watermark:r},label:"Line"},{type:"bar",data:v,options:{watermark:r},label:"Bar"},{type:"area",data:s(i,"multi"),options:{watermark:r},label:"Area"},{type:"scatter",data:_,options:{watermark:r},label:"Scatter"},{type:"timeseries",data:W,options:{watermark:r},label:"Timeseries"},{type:"heatmap",data:R,options:{watermark:r,heatmap:{colorScale:{kind:"diverging",domain:{min:-1,mid:0,max:1}}}},label:"Heatmap"},{type:"radar",data:z,options:{watermark:r},label:"Radar"},{type:"pie",data:B,options:{watermark:r},label:"Pie"},{type:"lattice",data:O,options:{watermark:r},label:"Lattice"}];return S(e,{columns:3,cardHeight:V})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"Interactive playground — text, position, opacity, fontSize wired through\nStorybook controls. Frame theme is supplied by the toolbar `syncTheme`\ndecorator via `commonOptionsFrom`.",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Style-variant grid — same dataset / same anchor, different watermark
style attributes. Confirms text / fontSize / fontWeight / color / opacity /
margin / fontFamily all flow through \`resolveWatermarkStyle\` into the
canvas paint.`,...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:`9-anchor grid. Frame theme is fixed to 'light' so the visual diff is purely
positional — flip the toolbar theme on the Showcase story to confirm
dark-mode color reactivity.`,...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Light vs dark theme color reactivity. Same text, same anchor; theme flip\nalone changes the resolved color via `frameTheme.watermark.color`.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;flex-direction:column;gap:12px;';
    let engineRef: import('~/old/coordinate/cartesian/cartesian-engine').CartesianEngine | null = null;
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
}`,...p.parameters?.docs?.source},description:{story:`Export snapshot — render a chart with a watermark, then export to PNG and
display the resulting image side-by-side. Confirms the watermark rides
through the export pipeline with zero exporter-side changes.`,...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderChart([{
    type: 'radar',
    data: {
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
    },
    options: {
      watermark: {
        text: 'Made with Mercurium'
      }
    }
  }], {
    cardHeight: 460,
    cardWidth: 520
  })
}`,...h.parameters?.docs?.source},description:{story:"Polar / radar uses the same anchor formulas — `bottom-right` resolves to\nthe canvas's bottom-right, NOT the polar center.",...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`Heatmap is a cartesian chart type and routes through the same plugin
pipeline as line / bar / scatter. The watermark is painted on the same
main canvas, alongside the heatmap cells.`,...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderChart([{
    type: 'lattice',
    data: LATTICE_PIPELINE,
    options: {
      watermark: {
        text: 'Made with Mercurium'
      }
    }
  }], {
    cardHeight: 460,
    cardWidth: 520
  })
}`,...g.parameters?.docs?.source},description:{story:`Lattice (topology, SVG surface — ADR-0006) renders the watermark via
BasicWatermarkPlugin (DOM path), identical to cartesian / polar paradigms.`,...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const specs: ChartSpec[] = [{
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
    }, {
      type: 'radar',
      data: RADAR_CROSS,
      options: {
        watermark: WATERMARK_OPTS
      },
      label: 'Radar'
    }, {
      type: 'pie',
      data: PIE_TRAFFIC,
      options: {
        watermark: WATERMARK_OPTS
      },
      label: 'Pie'
    }, {
      type: 'lattice',
      data: LATTICE_PIPELINE,
      options: {
        watermark: WATERMARK_OPTS
      },
      label: 'Lattice'
    }];
    return renderChart(specs, {
      columns: 3,
      cardHeight: CARD_H
    });
  }
}`,...b.parameters?.docs?.source},description:{story:`One page showing every paradigm — cartesian (line / bar / area / scatter /
timeseries / heatmap), polar (radar / pie), and topology (lattice) — each
rendered with the same \`bottom-right\` watermark. Use this story to verify
visual consistency across all rendering backends at a glance.

Cartesian / polar / topology cards share the same wrapper / border / label
chrome because they all flow through the paradigm-agnostic \`renderChart\`.`,...b.parameters?.docs?.description}}};const X=["Focused","StyleVariants","AllStates","LightVsDark","ExportSnapshot","PolarRadarBottomRight","HeatmapBottomRight","TopologyLatticeBottomRight","CrossParadigmShowcase"];export{d as AllStates,b as CrossParadigmShowcase,p as ExportSnapshot,l as Focused,u as HeatmapBottomRight,c as LightVsDark,h as PolarRadarBottomRight,m as StyleVariants,g as TopologyLatticeBottomRight,X as __namedExportsOrder,q as default};
