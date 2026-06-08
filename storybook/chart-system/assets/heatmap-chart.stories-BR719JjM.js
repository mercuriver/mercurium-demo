import{c as y,d as f,e as h,g as l,h as d,i as c,q as o,j as m,s as A,H as u,t as S}from"./story-utils-DFvoCd7a.js";const s={...y,dataset:"correlation",cellRadius:0,cellMissing:"empty",cellStroke:!0,showCellLabels:!1,colorBarPosition:"right"},p=o.filter(e=>e.key==="activity"||e.key==="time-category"||e.key==="numeric"),g=o.filter(e=>e.key==="correlation"||e.key==="numeric"),C={title:"Chart Types/Heatmap",args:s,argTypes:{dataset:m(o),cellRadius:{control:{type:"range",min:0,max:12,step:1},description:"셀 모서리 반경 (px)",table:{defaultValue:{summary:"0"},category:"Heatmap"}},cellMissing:{control:"select",options:["empty","placeholder"],description:"결측 셀 처리 방식",table:{defaultValue:{summary:"empty"},category:"Heatmap"}},cellStroke:{control:"boolean",description:"셀 테두리 표시",table:{defaultValue:{summary:"true"},category:"Heatmap"}},showCellLabels:{control:"boolean",description:"셀 값 라벨 표시 (셀이 충분히 클 때만 자동 표시)",table:{defaultValue:{summary:"false"},category:"Heatmap"}},colorBarPosition:{control:"inline-radio",options:["top","right","bottom","left"],description:"ColorBar 위치 (4 방향)",table:{defaultValue:{summary:"right"},category:"Heatmap"}},...f}},a={args:{...s,dataset:"activity"},argTypes:{dataset:m(p)},render:e=>l("heatmap",c(p,e.dataset),{...d(e),dataLabel:{show:e.showCellLabels},heatmap:{colorScale:{kind:"sequential"},cell:{radius:e.cellRadius,missing:e.cellMissing,stroke:e.cellStroke?void 0:!1},legend:{position:e.colorBarPosition}},title:{text:"Activity by day × hour",align:"left"}},{fitContainer:e.fitContainer,width:e.width,height:e.height})},t={args:{...s,dataset:"correlation"},argTypes:{dataset:m(g)},render:e=>l("heatmap",c(g,e.dataset),{...d(e),dataLabel:{show:e.showCellLabels},heatmap:{colorScale:{kind:"diverging",domain:{min:-1,mid:0,max:1}},cell:{radius:e.cellRadius,missing:e.cellMissing,stroke:e.cellStroke?void 0:!1},legend:{position:e.colorBarPosition}},title:{text:"Correlation matrix",align:"left"}},{fitContainer:e.fitContainer,width:e.width,height:e.height})},n={args:{...s,dataset:"numeric"},render:e=>l("heatmap",c(o,e.dataset),{...d(e),dataLabel:{show:e.showCellLabels},heatmap:{colorScale:{kind:"custom",stops:[{at:0,color:"#440154"},{at:.5,color:"#21918c"},{at:1,color:"#fde725"}]},cell:{radius:e.cellRadius,missing:e.cellMissing,stroke:e.cellStroke?void 0:!1},legend:{position:e.colorBarPosition}},title:{text:"Quadratic surface (custom 3-stop ramp)",align:"left"}},{fitContainer:e.fitContainer,width:e.width,height:e.height})},r={parameters:{controls:{disable:!0}},render:()=>h([{type:"heatmap",data:A,options:{heatmap:{colorScale:{kind:"diverging",domain:{mid:0}}}},label:"Numeric × Numeric",description:"8×8 quadratic surface — diverging ramp on 0"},{type:"heatmap",data:u,options:{heatmap:{colorScale:{kind:"diverging",domain:{min:-1,mid:0,max:1}}}},label:"Category × Category",description:"Correlation matrix — theme-derived diverging"},{type:"heatmap",data:S,options:{heatmap:{colorScale:{kind:"sequential"}}},label:"Time × Category",description:"Daily KPI grid — sequential ramp"}],{columns:3,cardHeight:280,hideDataSummary:!0})},i={parameters:{controls:{disable:!0}},render:()=>h(["top","right","bottom","left"].map(e=>({type:"heatmap",data:u,options:{heatmap:{colorScale:{kind:"diverging",domain:{min:-1,mid:0,max:1}},legend:{position:e}}},label:`position: '${e}'`,description:`ColorBar attached to the ${e} edge`})),{columns:2,cardHeight:320,hideDataSummary:!0})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...heatmapDefaults,
    dataset: 'activity'
  },
  argTypes: {
    dataset: datasetArgType(SEQUENTIAL_DATASETS)
  },
  render: args => renderChartSingle('heatmap', resolveDataset(SEQUENTIAL_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    dataLabel: {
      show: args.showCellLabels
    },
    heatmap: {
      colorScale: {
        kind: 'sequential'
      },
      cell: {
        radius: args.cellRadius,
        missing: args.cellMissing,
        stroke: args.cellStroke ? undefined : false
      },
      legend: {
        position: args.colorBarPosition
      }
    },
    title: {
      text: 'Activity by day × hour',
      align: 'left'
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...a.parameters?.docs?.source},description:{story:`**Sequential ramp** — single-direction value gradient. Pick this when the
value channel only ever increases / decreases (counts, durations,
activity densities). Try the \`dataset\` toggle to compare a 7×24 activity
matrix vs. a numeric quadratic surface.`,...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...heatmapDefaults,
    dataset: 'correlation'
  },
  argTypes: {
    dataset: datasetArgType(DIVERGING_DATASETS)
  },
  render: args => renderChartSingle('heatmap', resolveDataset(DIVERGING_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    dataLabel: {
      show: args.showCellLabels
    },
    heatmap: {
      // Theme-derived diverging defaults (warm / theme bg / palette[0]).
      // Toggle \`frameTheme\` in the toolbar to verify the ramp adapts.
      colorScale: {
        kind: 'diverging',
        domain: {
          min: -1,
          mid: 0,
          max: 1
        }
      },
      cell: {
        radius: args.cellRadius,
        missing: args.cellMissing,
        stroke: args.cellStroke ? undefined : false
      },
      legend: {
        position: args.colorBarPosition
      }
    },
    title: {
      text: 'Correlation matrix',
      align: 'left'
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...t.parameters?.docs?.source},description:{story:"**Diverging ramp** — three-stop gradient pivoting on `domain.mid` (default\n0). Picks the strongest positive / negative correlations on a 5×5 matrix.\n`domain.mid` clamping is logged once per (min, mid, max) tuple via\n`console.warn` if the user passes an out-of-range mid.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...heatmapDefaults,
    dataset: 'numeric'
  },
  render: args => renderChartSingle('heatmap', resolveDataset(HEATMAP_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    dataLabel: {
      show: args.showCellLabels
    },
    heatmap: {
      colorScale: {
        kind: 'custom',
        stops: [{
          at: 0,
          color: '#440154'
        }, {
          at: 0.5,
          color: '#21918c'
        }, {
          at: 1,
          color: '#fde725'
        }]
      },
      cell: {
        radius: args.cellRadius,
        missing: args.cellMissing,
        stroke: args.cellStroke ? undefined : false
      },
      legend: {
        position: args.colorBarPosition
      }
    },
    title: {
      text: 'Quadratic surface (custom 3-stop ramp)',
      align: 'left'
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...n.parameters?.docs?.source},description:{story:`**Custom stops** — arbitrary piecewise-linear gradient. Use when neither
sequential nor diverging captures the value semantics (e.g. ordinal
traffic-light bands, branded tri-color ramps). Stops are positioned at
normalized offsets in \`[0, 1]\`.`,...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderChartGrid([{
    type: 'heatmap',
    data: HEATMAP_NUMERIC_DATA,
    options: {
      heatmap: {
        colorScale: {
          kind: 'diverging',
          domain: {
            mid: 0
          }
        }
      }
    },
    label: 'Numeric × Numeric',
    description: '8×8 quadratic surface — diverging ramp on 0'
  }, {
    type: 'heatmap',
    data: HEATMAP_CORRELATION_DATA,
    options: {
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
    },
    label: 'Category × Category',
    description: 'Correlation matrix — theme-derived diverging'
  }, {
    type: 'heatmap',
    data: HEATMAP_TIME_CATEGORY_DATA,
    options: {
      heatmap: {
        colorScale: {
          kind: 'sequential'
        }
      }
    },
    label: 'Time × Category',
    description: 'Daily KPI grid — sequential ramp'
  }], {
    columns: 3,
    cardHeight: 280,
    hideDataSummary: true
  })
}`,...r.parameters?.docs?.source},description:{story:`Three axis-kind combos in one grid. Use to confirm number / category /
time axes all render correctly under the same renderer pipeline.`,...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderChartGrid((['top', 'right', 'bottom', 'left'] as const).map(position => ({
    type: 'heatmap' as const,
    data: HEATMAP_CORRELATION_DATA,
    options: {
      heatmap: {
        colorScale: {
          kind: 'diverging' as const,
          domain: {
            min: -1,
            mid: 0,
            max: 1
          }
        },
        legend: {
          position
        }
      }
    },
    label: \`position: '\${position}'\`,
    description: \`ColorBar attached to the \${position} edge\`
  })), {
    columns: 2,
    cardHeight: 320,
    hideDataSummary: true
  })
}`,...i.parameters?.docs?.source},description:{story:`ColorBar position grid — verify the 4-side placement renders ticks
along the gradient axis and the chart cell area shrinks on the
correct side without leaking labels.`,...i.parameters?.docs?.description}}};const b=["Sequential","Diverging","Custom","AllStates","ColorBarPositions"];export{r as AllStates,i as ColorBarPositions,n as Custom,t as Diverging,a as Sequential,b as __namedExportsOrder,C as default};
