import{c as r,d as z,h as o,r as N,f as a,g as i,L as t,i as S}from"./story-utils-CncgVNam.js";const A={title:"Interactions/Zoom & Navigator",args:{...r,dataset:"numeric-large",minZoom:.2,wheelMode:"zoom"},argTypes:{dataset:S(t),minZoom:{control:{type:"range",min:.05,max:1,step:.05},description:"zoom 최소 비율 (축소 한계)",table:{defaultValue:{summary:"0.2"}}},wheelMode:{control:"select",options:["zoom","pan"],description:"휠 동작 모드",table:{defaultValue:{summary:"zoom"}}},...z}},l={parameters:{controls:{disable:!0}},render:e=>{const n=o(t,"numeric-large");return N([{type:"line",data:n,options:{frameTheme:e.frameTheme,zoom:{enabled:!0,wheelMode:"zoom"},tooltip:{show:!0,shared:!0}},label:"Drag-brush + Wheel zoom",description:"드래그 범위 선택으로 zoom in, 휠로 줌 인/아웃",plugins:["zoom"]},{type:"line",data:n,options:{frameTheme:e.frameTheme,zoom:{enabled:!0,wheelMode:"pan"},tooltip:{show:!0,shared:!0}},label:"Wheel pan",description:"휠 동작이 X축 좌우 이동",plugins:["zoom"]},{type:"line",data:n,options:{frameTheme:e.frameTheme,zoom:{enabled:!0,minZoom:.5},tooltip:{show:!0,shared:!0}},label:"Min zoom = 0.5",description:"최대 50%까지만 축소",plugins:["zoom"]},{type:"line",data:n,options:{frameTheme:e.frameTheme,zoom:{enabled:!1},tooltip:{show:!0,shared:!0}},label:"Zoom disabled",description:"비교용 baseline"}],{columns:2,cardHeight:280,hideDataSummary:!0})}},d={args:{...r,dataset:"numeric-large",minZoom:.2,wheelMode:"zoom"},render:e=>a("line",o(t,e.dataset),{...i(e),zoom:{enabled:!0,wheelMode:e.wheelMode,minZoom:e.minZoom},tooltip:{show:!0,shared:!0}},{fitContainer:e.fitContainer,width:e.width??700,height:e.height??400,plugins:["zoom"]})},m={args:{...r,dataset:"numeric-large"},render:e=>a("line",o(t,e.dataset),{...i(e),zoom:{enabled:!0},xNavigator:{enabled:!0},tooltip:{show:!0,shared:!0}},{fitContainer:e.fitContainer,width:e.width??700,height:e.height??420,plugins:["zoom","navigator"]})},p={args:{...r,dataset:"numeric-large",inverted:!0},render:e=>a("bar",o(t,e.dataset),{...i(e),zoom:{enabled:!0},xNavigator:{enabled:!0},yNavigator:{enabled:!0},tooltip:{show:!0,shared:!0}},{fitContainer:e.fitContainer,width:e.width??700,height:e.height??440,plugins:["zoom","navigator","y-navigator"]})},u={args:{...r,dataset:"numeric-large"},render:e=>a("line",o(t,e.dataset),{...i(e),zoom:{enabled:!0},yNavigator:{enabled:!0,position:"right"},tooltip:{show:!0,shared:!0}},{fitContainer:e.fitContainer,width:e.width??700,height:e.height??420,plugins:["zoom","y-navigator"]})},g={args:{...r,dataset:"numeric-large"},render:e=>a("line",o(t,e.dataset),{...i(e),zoom:{enabled:!0,wheelAxis:"y"},tooltip:{show:!0,shared:!0}},{fitContainer:e.fitContainer,width:e.width??700,height:e.height??400,plugins:["zoom"]})},h={args:{...r,dataset:"numeric-large"},render:e=>a("line",o(t,e.dataset),{...i(e),zoom:{enabled:!0,wheelAxis:"both"},tooltip:{show:!0,shared:!0}},{fitContainer:e.fitContainer,width:e.width??700,height:e.height??400,plugins:["zoom"]})},c={args:{...r,dataset:"numeric-large"},render:e=>a("line",o(t,e.dataset),{...i(e),zoom:{enabled:!0,wheelMode:"pan",brushMode:"y"},tooltip:{show:!0,shared:!0}},{fitContainer:e.fitContainer,width:e.width??700,height:e.height??400,plugins:["zoom"]})},b={args:{...r,dataset:"numeric-large"},render:e=>a("line",o(t,e.dataset),{...i(e),zoom:{enabled:!0,wheelMode:"pan",brushMode:"rect"},xNavigator:{enabled:!0,position:"bottom"},yNavigator:{enabled:!0,position:"right"},tooltip:{show:!0,shared:!0}},{fitContainer:e.fitContainer,width:e.width??700,height:e.height??400,plugins:["zoom"]})},v={args:{...r,dataset:"numeric-large"},render:e=>a("line",o(t,e.dataset),{...i(e),zoom:{enabled:!0},xNavigator:{enabled:!0,position:"bottom"},yNavigator:{enabled:!0,position:"right"},tooltip:{show:!0,shared:!0}},{fitContainer:e.fitContainer,width:e.width??720,height:e.height??440,plugins:["zoom","navigator","y-navigator"]})},f={parameters:{controls:{disable:!0}},render:()=>{const e=o(t,"numeric-large"),n={zoom:{enabled:!0},tooltip:{show:!0,shared:!0}},s={};return N([{type:"line",data:e,options:{...n,xNavigator:{enabled:!0,position:"bottom"},yNavigator:{enabled:!0,position:"right"}},label:"X=bottom · Y=right (default)"},{type:"line",data:e,options:{...n,xNavigator:{enabled:!0,position:"top"},yNavigator:{enabled:!0,position:"right"}},label:"X=top · Y=right"},{type:"line",data:e,options:{...n,xNavigator:{enabled:!0,position:"bottom"},yNavigator:{enabled:!0,position:"left"}},label:"X=bottom · Y=left"},{type:"line",data:e,options:{...n,xNavigator:{enabled:!0,position:"top"},yNavigator:{enabled:!0,position:"left"}},label:"X=top · Y=left"}],s)}},y={parameters:{controls:{disable:!0}},render:()=>{const e=o(t,"numeric-large"),n={zoom:{enabled:!0},tooltip:{show:!0,shared:!0}},s={};return N([{type:"line",data:e,options:{...n,xNavigator:{enabled:!0,sparkline:!1},yNavigator:{enabled:!0}},label:"Ticks only (X · Y)"},{type:"line",data:e,options:{...n,xNavigator:{enabled:!0,sparkline:!0},yNavigator:{enabled:!0}},label:"X: ticks + sparkline (default) · Y: ticks"},{type:"line",data:e,options:{...n,xNavigator:{enabled:!0,sparkline:!1,distribution:!0},yNavigator:{enabled:!0,distribution:!0}},label:"X: ticks + distribution · Y: ticks + distribution"},{type:"line",data:e,options:{...n,xNavigator:{enabled:!0,sparkline:!0,distribution:!0},yNavigator:{enabled:!0,distribution:!0}},label:"All layers (X: t+s+d · Y: t+d)"}],s)}},w={parameters:{controls:{disable:!0}},render:()=>{const e=o(t,"numeric-large"),n={inverted:!0,zoom:{enabled:!0},tooltip:{show:!0,shared:!0}},s={};return N([{type:"line",data:e,options:{...n,xNavigator:{enabled:!0,position:"right"},yNavigator:{enabled:!0,position:"bottom"}},label:"X=right · Y=bottom (inverted default)"},{type:"line",data:e,options:{...n,xNavigator:{enabled:!0,position:"right"},yNavigator:{enabled:!0,position:"top"}},label:"X=right · Y=top"},{type:"line",data:e,options:{...n,xNavigator:{enabled:!0,position:"left"},yNavigator:{enabled:!0,position:"bottom"}},label:"X=left · Y=bottom"},{type:"line",data:e,options:{...n,xNavigator:{enabled:!0,position:"left"},yNavigator:{enabled:!0,position:"top"}},label:"X=left · Y=top"}],s)}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const data = resolveDataset(LINE_DATASETS, 'numeric-large');
    return renderChartGrid([{
      type: 'line',
      data,
      options: {
        frameTheme: args.frameTheme,
        zoom: {
          enabled: true,
          wheelMode: 'zoom'
        },
        tooltip: {
          show: true,
          shared: true
        }
      },
      label: 'Drag-brush + Wheel zoom',
      description: '드래그 범위 선택으로 zoom in, 휠로 줌 인/아웃',
      plugins: ['zoom']
    }, {
      type: 'line',
      data,
      options: {
        frameTheme: args.frameTheme,
        zoom: {
          enabled: true,
          wheelMode: 'pan'
        },
        tooltip: {
          show: true,
          shared: true
        }
      },
      label: 'Wheel pan',
      description: '휠 동작이 X축 좌우 이동',
      plugins: ['zoom']
    }, {
      type: 'line',
      data,
      options: {
        frameTheme: args.frameTheme,
        zoom: {
          enabled: true,
          minZoom: 0.5
        },
        tooltip: {
          show: true,
          shared: true
        }
      },
      label: 'Min zoom = 0.5',
      description: '최대 50%까지만 축소',
      plugins: ['zoom']
    }, {
      type: 'line',
      data,
      options: {
        frameTheme: args.frameTheme,
        zoom: {
          enabled: false
        },
        tooltip: {
          show: true,
          shared: true
        }
      },
      label: 'Zoom disabled',
      description: '비교용 baseline'
    }], {
      columns: 2,
      cardHeight: 280,
      hideDataSummary: true
    });
  }
}`,...l.parameters?.docs?.source},description:{story:`Zoom 동작 모드 비교 -- drag-brush / wheel zoom / wheel pan / 비활성 4 cards.
각 카드에서 마우스 휠 / 드래그로 동작 차이 체험.

데이터셋은 \`LINE_DATASETS.numeric-large\` (mock-data 공용) 를 사용해
다른 zoom-navigator stories 와 동일한 시각 형태를 유지한다.`,...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'numeric-large',
    minZoom: 0.2,
    wheelMode: 'zoom'
  },
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    zoom: {
      enabled: true,
      wheelMode: args.wheelMode,
      minZoom: args.minZoom
    },
    tooltip: {
      show: true,
      shared: true
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width ?? 700,
    height: args.height ?? 400,
    plugins: ['zoom']
  })
}`,...d.parameters?.docs?.source},description:{story:"Basic zoom 동작 with controls — wheel mode / minZoom 조절.",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'numeric-large'
  },
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    zoom: {
      enabled: true
    },
    xNavigator: {
      enabled: true
    },
    tooltip: {
      show: true,
      shared: true
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width ?? 700,
    height: args.height ?? 420,
    plugins: ['zoom', 'navigator']
  })
}`,...m.parameters?.docs?.source},description:{story:"Navigator + Zoom 연동 -- navigator 슬라이더로 범위 지정.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'numeric-large',
    inverted: true
  },
  render: args => renderChartSingle('bar', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    zoom: {
      enabled: true
    },
    xNavigator: {
      enabled: true
    },
    yNavigator: {
      enabled: true
    },
    tooltip: {
      show: true,
      shared: true
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width ?? 700,
    height: args.height ?? 440,
    plugins: ['zoom', 'navigator', 'y-navigator']
  })
}`,...p.parameters?.docs?.source},description:{story:"Navigator inverted -- `options.inverted: true` 차트에서 X-nav / Y-nav 가\n각각 세로 / 가로 방향으로 렌더된다. prd/navigator-inverted.md 참조.\n\n- X-nav: position 미지정 -> 기본 `'right'`, 세로 (vertical) 드래그\n- Y-nav: position 미지정 -> 기본 `'bottom'`, 가로 (horizontal) 드래그\n- 두 nav 동시 활성 시 우하단에 Reset corner 가 자동 표시.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'numeric-large'
  },
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    zoom: {
      enabled: true
    },
    yNavigator: {
      enabled: true,
      position: 'right'
    },
    tooltip: {
      show: true,
      shared: true
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width ?? 700,
    height: args.height ?? 420,
    plugins: ['zoom', 'y-navigator']
  })
}`,...u.parameters?.docs?.source},description:{story:"Y Navigator only -- Y 축 단일 네비게이터 (X-nav 비활성). Drag/resize 로\n`setViewport({ y: [...] })` 호출. 현재 Y zoom render 는 Step 2 에서 활성화\n되므로 이 story 는 주로 DOM surface + 이벤트 동작 확인 용도.",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'numeric-large'
  },
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    zoom: {
      enabled: true,
      wheelAxis: 'y'
    },
    tooltip: {
      show: true,
      shared: true
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width ?? 700,
    height: args.height ?? 400,
    plugins: ['zoom']
  })
}`,...g.parameters?.docs?.source},description:{story:"Y 축 휠 zoom (`wheelAxis: 'y'`). 휠 이벤트가 기본적으로 Y viewport 를 조작.",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'numeric-large'
  },
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    zoom: {
      enabled: true,
      wheelAxis: 'both'
    },
    tooltip: {
      show: true,
      shared: true
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width ?? 700,
    height: args.height ?? 400,
    plugins: ['zoom']
  })
}`,...h.parameters?.docs?.source},description:{story:"양축 동시 휠 zoom (`wheelAxis: 'both'`). 한 틱이 X / Y 에 동일 factor 적용.",...h.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'numeric-large'
  },
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    zoom: {
      enabled: true,
      wheelMode: 'pan',
      brushMode: 'y'
    },
    tooltip: {
      show: true,
      shared: true
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width ?? 700,
    height: args.height ?? 400,
    plugins: ['zoom']
  })
}`,...c.parameters?.docs?.source},description:{story:"`brushMode: 'y'` — drag rect 가 세로 full-width, Y 축만 zoom. wheel 은 pan.",...c.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'numeric-large'
  },
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    zoom: {
      enabled: true,
      wheelMode: 'pan',
      brushMode: 'rect'
    },
    xNavigator: {
      enabled: true,
      position: 'bottom'
    },
    yNavigator: {
      enabled: true,
      position: 'right'
    },
    tooltip: {
      show: true,
      shared: true
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width ?? 700,
    height: args.height ?? 400,
    plugins: ['zoom']
  })
}`,...b.parameters?.docs?.source},description:{story:"`brushMode: 'rect'` — 2D drag rect, 양축 동시 zoom. wheel 은 pan.\nX / Y navigator 를 함께 활성화해 rect drag 로 zoom 한 영역이 두 navigator\n의 selection overlay 에 즉시 반영되는지 시각 검증할 수 있다.",...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'numeric-large'
  },
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    zoom: {
      enabled: true
    },
    xNavigator: {
      enabled: true,
      position: 'bottom'
    },
    yNavigator: {
      enabled: true,
      position: 'right'
    },
    tooltip: {
      show: true,
      shared: true
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width ?? 720,
    height: args.height ?? 440,
    plugins: ['zoom', 'navigator', 'y-navigator']
  })
}`,...v.parameters?.docs?.source},description:{story:`2D Navigator -- X + Y 동시 활성. 두 네비게이터 교차 지점에 Reset viewport
corner 버튼이 렌더된다. 버튼 클릭 시 양축 viewport 가 초기화된다.`,...v.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const data = resolveDataset(LINE_DATASETS, 'numeric-large');
    const base = {
      zoom: {
        enabled: true
      },
      tooltip: {
        show: true,
        shared: true
      }
    };
    const config = {
      width: 520,
      height: 340,
      plugins: ['zoom', 'navigator', 'y-navigator'] as const
    };
    return renderChartGrid([{
      type: 'line',
      data,
      options: {
        ...base,
        xNavigator: {
          enabled: true,
          position: 'bottom'
        },
        yNavigator: {
          enabled: true,
          position: 'right'
        }
      },
      label: 'X=bottom · Y=right (default)'
    }, {
      type: 'line',
      data,
      options: {
        ...base,
        xNavigator: {
          enabled: true,
          position: 'top'
        },
        yNavigator: {
          enabled: true,
          position: 'right'
        }
      },
      label: 'X=top · Y=right'
    }, {
      type: 'line',
      data,
      options: {
        ...base,
        xNavigator: {
          enabled: true,
          position: 'bottom'
        },
        yNavigator: {
          enabled: true,
          position: 'left'
        }
      },
      label: 'X=bottom · Y=left'
    }, {
      type: 'line',
      data,
      options: {
        ...base,
        xNavigator: {
          enabled: true,
          position: 'top'
        },
        yNavigator: {
          enabled: true,
          position: 'left'
        }
      },
      label: 'X=top · Y=left'
    }], config);
  }
}`,...f.parameters?.docs?.source},description:{story:`Visual sanity check for all four navigator position combinations. Each
cell shows X-nav and Y-nav mounted on different edges of the plot so
reviewers can verify the plot-facing chrome gap
(CHROME_PANEL_PADDING_PX, applied as the navigator's plot-facing
padding) and the primary-axis size invariant (nav width == plot
width, nav height == plot height) hold regardless of orientation.`,...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const data = resolveDataset(LINE_DATASETS, 'numeric-large');
    const base = {
      zoom: {
        enabled: true
      },
      tooltip: {
        show: true,
        shared: true
      }
    };
    const config = {
      width: 520,
      height: 340,
      plugins: ['zoom', 'navigator', 'y-navigator'] as const
    };
    return renderChartGrid([{
      type: 'line',
      data,
      options: {
        ...base,
        xNavigator: {
          enabled: true,
          sparkline: false
        },
        yNavigator: {
          enabled: true
        }
      },
      label: 'Ticks only (X · Y)'
    }, {
      type: 'line',
      data,
      options: {
        ...base,
        xNavigator: {
          enabled: true,
          sparkline: true
        },
        yNavigator: {
          enabled: true
        }
      },
      label: 'X: ticks + sparkline (default) · Y: ticks'
    }, {
      type: 'line',
      data,
      options: {
        ...base,
        xNavigator: {
          enabled: true,
          sparkline: false,
          distribution: true
        },
        yNavigator: {
          enabled: true,
          distribution: true
        }
      },
      label: 'X: ticks + distribution · Y: ticks + distribution'
    }, {
      type: 'line',
      data,
      options: {
        ...base,
        xNavigator: {
          enabled: true,
          sparkline: true,
          distribution: true
        },
        yNavigator: {
          enabled: true,
          distribution: true
        }
      },
      label: 'All layers (X: t+s+d · Y: t+d)'
    }], config);
  }
}`,...y.parameters?.docs?.source},description:{story:`Layer toggle matrix — \`xNavigator\` / \`yNavigator\` 의 thumbnail / sparkline /
distribution 옵션 조합을 한 그리드에서 비교한다. 같은 데이터에서 어느
layer 가 어떻게 보이는지 시각적으로 확인할 수 있다.

조합 정의:
  1. ticks only          (default after C-5)         X: thumbnail; Y: thumbnail
  2. + sparkline         (X-nav 기본 동작)            X: thumbnail+sparkline
  3. + distribution      (Y-nav 분포 표현 ON)         Y: thumbnail+distribution
  4. all layers          (X: t+s+d, Y: t+d)`,...y.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const data = resolveDataset(LINE_DATASETS, 'numeric-large');
    const base = {
      inverted: true,
      zoom: {
        enabled: true
      },
      tooltip: {
        show: true,
        shared: true
      }
    };
    const config = {
      width: 520,
      height: 340,
      plugins: ['zoom', 'navigator', 'y-navigator'] as const
    };
    return renderChartGrid([{
      type: 'line',
      data,
      options: {
        ...base,
        xNavigator: {
          enabled: true,
          position: 'right'
        },
        yNavigator: {
          enabled: true,
          position: 'bottom'
        }
      },
      label: 'X=right · Y=bottom (inverted default)'
    }, {
      type: 'line',
      data,
      options: {
        ...base,
        xNavigator: {
          enabled: true,
          position: 'right'
        },
        yNavigator: {
          enabled: true,
          position: 'top'
        }
      },
      label: 'X=right · Y=top'
    }, {
      type: 'line',
      data,
      options: {
        ...base,
        xNavigator: {
          enabled: true,
          position: 'left'
        },
        yNavigator: {
          enabled: true,
          position: 'bottom'
        }
      },
      label: 'X=left · Y=bottom'
    }, {
      type: 'line',
      data,
      options: {
        ...base,
        xNavigator: {
          enabled: true,
          position: 'left'
        },
        yNavigator: {
          enabled: true,
          position: 'top'
        }
      },
      label: 'X=left · Y=top'
    }], config);
  }
}`,...w.parameters?.docs?.source},description:{story:"Mirror of `AllPositions` for `options.inverted: true`. Under inverted X-nav\n는 수직 (좌/우 column), Y-nav 는 수평 (상/하 row) 로 스왑되므로 4 조합은\n`xNavigator.position ∈ {left, right} × yNavigator.position ∈ {top, bottom}`.\nprd/navigator-inverted.md §B-3 참조.",...w.parameters?.docs?.description}}};const T=["ZoomModes","BasicZoom","NavigatorWithZoom","NavigatorInverted","YNavigatorOnly","YAxisZoom","BothAxisZoom","YAxisBrush","RectBrush","TwoDNavigator","AllPositions","LayerCombinations","AllPositionsInverted"];export{f as AllPositions,w as AllPositionsInverted,d as BasicZoom,h as BothAxisZoom,y as LayerCombinations,p as NavigatorInverted,m as NavigatorWithZoom,b as RectBrush,v as TwoDNavigator,c as YAxisBrush,g as YAxisZoom,u as YNavigatorOnly,l as ZoomModes,T as __namedExportsOrder,A as default};
