import{c as p,d as l,r as i,f as d,g as c}from"./story-utils-C9PePNh8.js";const g={title:"Options/Tooltip & Crosshair",args:{...p},argTypes:{...l}},s={xAxisType:"category",series:[{key:"revenue",label:"Revenue",data:[{x:"Jan",y:120},{x:"Feb",y:180},{x:"Mar",y:150},{x:"Apr",y:210},{x:"May",y:190},{x:"Jun",y:240}]},{key:"cost",label:"Cost",data:[{x:"Jan",y:80},{x:"Feb",y:95},{x:"Mar",y:110},{x:"Apr",y:105},{x:"May",y:120},{x:"Jun",y:130}]}]},m={xAxisType:"number",series:[{key:"samples",label:"Samples",data:[{x:1,y:20},{x:2,y:35},{x:3,y:28},{x:4,y:52},{x:5,y:45},{x:6,y:60},{x:7,y:72},{x:8,y:68}]}]},u={xAxisType:"category",series:[{key:"sales",label:"Sales (bar)",seriesType:"bar",data:[{x:"Q1",y:120},{x:"Q2",y:180},{x:"Q3",y:150},{x:"Q4",y:210}]},{key:"target",label:"Target (line)",seriesType:"line",data:[{x:"Q1",y:150},{x:"Q2",y:170},{x:"Q3",y:180},{x:"Q4",y:200}]}]},t={parameters:{controls:{disable:!0}},render:e=>i([{type:"bar",data:s,options:{frameTheme:e.frameTheme,bar:{radius:2},grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!0},crosshair:{show:!0,type:"x"}},label:"Bar · rect hit-test",description:"tooltip appears only over a bar"},{type:"line",data:s,options:{frameTheme:e.frameTheme,line:{curve:"smooth",dots:!0,width:2},grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!0},crosshair:{show:!0,type:"x"}},label:"Line · nearest point (snapDistance 2)",description:"snaps to nearest point within ~10px"},{type:"scatter",data:m,options:{frameTheme:e.frameTheme,scatter:{dotSize:6},grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!0},crosshair:{show:!0,type:"x"}},label:"Scatter · nearest point",description:"snap within dot radius"},{type:"combo",data:u,options:{frameTheme:e.frameTheme,grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!0},crosshair:{show:!0,type:"x"}},label:"Combo · line nearest → bar fallback",description:"line snap first, bar rect fallback"}],{columns:2,cardHeight:260,hideDataSummary:!0})},r={parameters:{controls:{disable:!0}},render:e=>i(["x","y","both"].map(a=>({type:"line",data:s,options:{frameTheme:e.frameTheme,line:{curve:"smooth",dots:!0,width:2},grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!0},crosshair:{show:!0,type:a}},label:`crosshair.type = '${a}'`})),{columns:3,cardHeight:240,hideDataSummary:!0})},n={parameters:{controls:{disable:!0}},render:e=>i([{label:"Tooltip (nearest, highlight dots)",options:{tooltip:{show:!0,shared:!1,highlightDots:!0},crosshair:{show:!1}}},{label:"Shared Tooltip",options:{tooltip:{show:!0,shared:!0},crosshair:{show:!1}}},{label:"Crosshair (X direction)",options:{tooltip:{show:!1},crosshair:{show:!0,type:"x"}}},{label:"Combined (tooltip + crosshair + highlight)",options:{tooltip:{show:!0,shared:!0,highlightDots:!0,highlightSeries:!0},crosshair:{show:!0,type:"x"}}}].map(h=>({type:"line",data:s,options:{frameTheme:e.frameTheme,grid:{show:!0},legend:{show:!0,position:"top"},line:{curve:"smooth",dots:!0,width:2},...h.options},label:h.label})),{columns:2,cardHeight:280,hideDataSummary:!0})},o={args:{...p,showCrosshair:!0,crosshairType:"x",tooltipShared:!0,tooltipHighlightSeries:!0,width:720,height:360},render:e=>d("line",s,{...c(e),line:{curve:"smooth",dots:!0,width:2},grid:{show:!0}},{fitContainer:e.fitContainer,width:e.width,height:e.height})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([{
    type: 'bar',
    data: CATEGORY_DATA,
    options: {
      frameTheme: args.frameTheme,
      bar: {
        radius: 2
      },
      grid: {
        show: true
      },
      legend: {
        show: true,
        position: 'top'
      },
      tooltip: {
        show: true
      },
      crosshair: {
        show: true,
        type: 'x'
      }
    },
    label: 'Bar · rect hit-test',
    description: 'tooltip appears only over a bar'
  }, {
    type: 'line',
    data: CATEGORY_DATA,
    options: {
      frameTheme: args.frameTheme,
      line: {
        curve: 'smooth',
        dots: true,
        width: 2
      },
      grid: {
        show: true
      },
      legend: {
        show: true,
        position: 'top'
      },
      tooltip: {
        show: true
      },
      crosshair: {
        show: true,
        type: 'x'
      }
    },
    label: 'Line · nearest point (snapDistance 2)',
    description: 'snaps to nearest point within ~10px'
  }, {
    type: 'scatter',
    data: SCATTER_DATA,
    options: {
      frameTheme: args.frameTheme,
      scatter: {
        dotSize: 6
      },
      grid: {
        show: true
      },
      legend: {
        show: true,
        position: 'top'
      },
      tooltip: {
        show: true
      },
      crosshair: {
        show: true,
        type: 'x'
      }
    },
    label: 'Scatter · nearest point',
    description: 'snap within dot radius'
  }, {
    type: 'combo',
    data: COMBO_DATA,
    options: {
      frameTheme: args.frameTheme,
      grid: {
        show: true
      },
      legend: {
        show: true,
        position: 'top'
      },
      tooltip: {
        show: true
      },
      crosshair: {
        show: true,
        type: 'x'
      }
    },
    label: 'Combo · line nearest → bar fallback',
    description: 'line snap first, bar rect fallback'
  }], {
    columns: 2,
    cardHeight: 260,
    hideDataSummary: true
  })
}`,...t.parameters?.docs?.source},description:{story:"Tooltip tracking mode varies per chart type.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid((['x', 'y', 'both'] as const).map(type => ({
    type: 'line' as const,
    data: CATEGORY_DATA,
    options: {
      frameTheme: args.frameTheme,
      line: {
        curve: 'smooth',
        dots: true,
        width: 2
      },
      grid: {
        show: true
      },
      legend: {
        show: true,
        position: 'top'
      },
      tooltip: {
        show: true
      },
      crosshair: {
        show: true,
        type
      }
    },
    label: \`crosshair.type = '\${type}'\`
  })), {
    columns: 3,
    cardHeight: 240,
    hideDataSummary: true
  })
}`,...r.parameters?.docs?.source},description:{story:"Crosshair `type` 변형 — 'x' / 'y' / 'both'.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const modes: Array<{
      label: string;
      options: Parameters<typeof renderChartGrid>[0][number]['options'];
    }> = [{
      label: 'Tooltip (nearest, highlight dots)',
      options: {
        tooltip: {
          show: true,
          shared: false,
          highlightDots: true
        },
        crosshair: {
          show: false
        }
      }
    }, {
      label: 'Shared Tooltip',
      options: {
        tooltip: {
          show: true,
          shared: true
        },
        crosshair: {
          show: false
        }
      }
    }, {
      label: 'Crosshair (X direction)',
      options: {
        tooltip: {
          show: false
        },
        crosshair: {
          show: true,
          type: 'x'
        }
      }
    }, {
      label: 'Combined (tooltip + crosshair + highlight)',
      options: {
        tooltip: {
          show: true,
          shared: true,
          highlightDots: true,
          highlightSeries: true
        },
        crosshair: {
          show: true,
          type: 'x'
        }
      }
    }];
    return renderChartGrid(modes.map(mode => ({
      type: 'line' as const,
      data: CATEGORY_DATA,
      options: {
        frameTheme: args.frameTheme,
        grid: {
          show: true
        },
        legend: {
          show: true,
          position: 'top' as const
        },
        line: {
          curve: 'smooth',
          dots: true,
          width: 2
        },
        ...mode.options
      },
      label: mode.label
    })), {
      columns: 2,
      cardHeight: 280,
      hideDataSummary: true
    });
  }
}`,...n.parameters?.docs?.source},description:{story:`대표 tooltip / crosshair 조합 4종 -- nearest / shared / crosshair-only /
combined+highlight. 호버해서 모드 간 동작 차이 체감.`,...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    showCrosshair: true,
    crosshairType: 'x',
    tooltipShared: true,
    tooltipHighlightSeries: true,
    width: 720,
    height: 360
  },
  render: args => renderChartSingle('line', CATEGORY_DATA, {
    ...commonOptionsFrom(args),
    line: {
      curve: 'smooth',
      dots: true,
      width: 2
    },
    grid: {
      show: true
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...o.parameters?.docs?.source},description:{story:"Shared tooltip + crosshair -- multi-series 값이 한 tooltip에 나열 + highlightSeries 조합.",...o.parameters?.docs?.description}}};const w=["TrackingModeByChartType","CrosshairTypes","InteractionModes","SharedTooltipWithCrosshair"];export{r as CrosshairTypes,n as InteractionModes,o as SharedTooltipWithCrosshair,t as TrackingModeByChartType,w as __namedExportsOrder,g as default};
