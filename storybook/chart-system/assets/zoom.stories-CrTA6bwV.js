import{C as i}from"./chart-engine-DYlwJQty.js";import{L as s,T as m}from"./tooltip-plugin-BG30u2XK.js";import{r as l,L as o}from"./mock-data--NCvz5h5.js";import{d as p}from"./story-utils-B5NCYHrN.js";import{c as d,a as c,d as g,b as w}from"./interaction-helpers-Dh259fVa.js";import"./crosshair-plugin-D5F2v-An.js";const k={title:"Charts/Interactions/Zoom",argTypes:{frameTheme:{control:"select",options:["light","dark","minimal"],description:"차트 프레임 테마",table:{defaultValue:{summary:"light"},category:"Common"}}},args:{frameTheme:"light"}},T={name:"Zoom -- 드래그로 범위 선택",args:{dataset:"numeric-large",frameTheme:"light"},argTypes:{dataset:p(o)},render:a=>{const e=d();e.appendChild(c("드래그로 X축 범위를 선택해 zoom in. 더블클릭으로 원래 범위로 복귀. 휠로 줌 인/아웃."));const n=g();e.appendChild(n);const t=new i(n,"line",{frameTheme:a.frameTheme||"light",zoom:{enabled:!0},tooltip:{show:!0,shared:!0}});return t.installPlugin(new s),t.installPlugin(new m),t.setData(l(o,a.dataset)),e}},f={name:"Zoom -- 프로그래밍 방식 제어",args:{dataset:"numeric-large",frameTheme:"light"},argTypes:{dataset:p(o)},render:a=>{const e=d();e.appendChild(c("버튼으로 줌 도메인을 직접 설정하거나 초기화합니다."));const n=document.createElement("div");n.style.cssText="display:flex;gap:0.5rem;margin-bottom:0.5rem";const t=g();e.appendChild(n),e.appendChild(t);const r=new i(t,"bar",{frameTheme:a.frameTheme||"light",zoom:{enabled:!0}});return r.installPlugin(new s),r.installPlugin(new m),r.setData(l(o,a.dataset)),n.appendChild(w("Zoom x: 2--5",()=>r.setZoomDomain(2,5))),n.appendChild(w("Zoom x: 3--6",()=>r.setZoomDomain(3,6))),n.appendChild(w("Reset",()=>r.resetZoom())),e}},C={name:"Zoom -- 휠로 패닝 (wheelMode: pan)",args:{dataset:"numeric-large",frameTheme:"light"},argTypes:{dataset:p(o)},render:a=>{const e=d();e.appendChild(c("wheelMode: 'pan' -- 드래그로 zoom, 휠로 pan. zoom 상태일 때만 휠 pan이 동작합니다."));const n=g();e.appendChild(n);const t=new i(n,"line",{frameTheme:a.frameTheme||"light",zoom:{enabled:!0,wheelMode:"pan"},tooltip:{show:!0,shared:!0}});return t.installPlugin(new s),t.installPlugin(new m),t.setData(l(o,a.dataset)),e}},Z={name:"Zoom -- wheelMode: zoom vs pan 비교",args:{dataset:"numeric-large",frameTheme:"light"},argTypes:{dataset:p(o)},render:a=>{const e=d();e.appendChild(c("좌: wheelMode zoom -- 휠=zoom, 드래그=pan. 우: wheelMode pan -- 드래그=zoom, 휠=pan(zoom 상태일 때)."));const n=document.createElement("div");n.style.cssText="display:grid;grid-template-columns:1fr 1fr;gap:1rem";const t=x=>{const P=document.createElement("div"),S=document.createElement("p");S.textContent=x,S.style.cssText="font-size:0.8125rem;font-weight:600;margin-bottom:0.25rem;color:#374151";const y=document.createElement("div");return y.style.cssText="width:100%;height:280px;border:1px solid #e2e8f0;border-radius:4px;",P.appendChild(S),P.appendChild(y),{section:P,container:y}},{section:r,container:h}=t("wheelMode: zoom -- 휠=zoom, 드래그=pan (항상)"),u=new i(h,"line",{frameTheme:a.frameTheme||"light",zoom:{enabled:!0,wheelMode:"zoom"},tooltip:{show:!0},responsive:!0});u.installPlugin(new s),u.installPlugin(new m),u.setData(l(o,a.dataset));const{section:b,container:L}=t("wheelMode: pan -- 드래그=zoom, 휠=pan (zoom 상태일 때)"),D=new i(L,"line",{frameTheme:a.frameTheme||"light",zoom:{enabled:!0,wheelMode:"pan"},tooltip:{show:!0},responsive:!0});return D.installPlugin(new s),D.installPlugin(new m),D.setData(l(o,a.dataset)),n.appendChild(r),n.appendChild(b),e.appendChild(n),e}},z={name:"Zoom -- 인터랙션 모드 전환 (zoom -> pan)",args:{dataset:"numeric-large",frameTheme:"light"},argTypes:{dataset:p(o)},render:a=>{const e=d();e.appendChild(c("wheelMode: zoom (기본) -- 휠=zoom, 드래그=pan (항상). 더블클릭으로 zoom을 초기화합니다."));const n=g();e.appendChild(n);const t=new i(n,"line",{frameTheme:a.frameTheme||"light",zoom:{enabled:!0,wheelMode:"zoom"},tooltip:{show:!0,shared:!0}});return t.installPlugin(new s),t.installPlugin(new m),t.setData(l(o,a.dataset)),e}},E={name:"Zoom -- minZoom 옵션",args:{dataset:"numeric-large",minZoom:3,frameTheme:"light"},argTypes:{dataset:p(o),minZoom:{control:{type:"number",min:1,step:1},description:"최소 zoom 범위 (데이터 단위). 데이터 범위보다 크면 zoom 전체 비활성화.",table:{defaultValue:{summary:"3"}}}},render:a=>{const e=d();e.appendChild(c(`minZoom: ${a.minZoom} -- 이 값 이하로 zoom 불가. 데이터 전체 범위가 minZoom보다 작으면 zoom 자체가 비활성화됩니다.`));const n=g();e.appendChild(n);const t=new i(n,"line",{frameTheme:a.frameTheme||"light",zoom:{enabled:!0,minZoom:a.minZoom}});return t.installPlugin(new s),t.installPlugin(new m),t.setData(l(o,a.dataset)),e}},A={name:"Zoom + Animation 동시 활성",args:{dataset:"numeric-large",animationDuration:400,frameTheme:"light"},argTypes:{dataset:p(o),animationDuration:{control:{type:"range",min:100,max:2e3,step:100},description:"애니메이션 지속 시간 (ms)",table:{defaultValue:{summary:"400"}}}},render:a=>{const e=d();e.appendChild(c("Zoom(드래그/더블클릭/휠)과 Animation(데이터 교체 시 fade-in)을 동시에 사용합니다."));const n=document.createElement("div");n.style.cssText="display:flex;gap:0.5rem;margin-bottom:0.5rem";const t=g();e.appendChild(n),e.appendChild(t);const r=new i(t,"line",{frameTheme:a.frameTheme||"light",zoom:{enabled:!0},animation:{enabled:!0,duration:a.animationDuration}});r.installPlugin(new s),r.installPlugin(new m),r.setData(l(o,a.dataset));let h=!1;const u=o.filter(b=>["numeric-basic","numeric-multi"].includes(b.key));return n.appendChild(w("Switch data",()=>{h=!h,r.setData(u[h?1:0].data)})),n.appendChild(w("Reset zoom",()=>r.resetZoom())),e}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Zoom -- 드래그로 범위 선택',
  args: {
    dataset: 'numeric-large',
    frameTheme: 'light'
  } as ZoomArgs,
  argTypes: {
    dataset: datasetArgType(LINE_DATASETS)
  },
  render: (args: ZoomArgs) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('드래그로 X축 범위를 선택해 zoom in. 더블클릭으로 원래 범위로 복귀. 휠로 줌 인/아웃.'));
    const container = createContainer();
    wrapper.appendChild(container);
    const engine = new ChartEngine(container, 'line', {
      frameTheme: args.frameTheme || 'light',
      zoom: {
        enabled: true
      },
      tooltip: {
        show: true,
        shared: true
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.setData(resolveDataset(LINE_DATASETS, args.dataset));
    return wrapper;
  }
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Zoom -- 프로그래밍 방식 제어',
  args: {
    dataset: 'numeric-large',
    frameTheme: 'light'
  } as ZoomArgs,
  argTypes: {
    dataset: datasetArgType(LINE_DATASETS)
  },
  render: (args: ZoomArgs) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('버튼으로 줌 도메인을 직접 설정하거나 초기화합니다.'));
    const controls = document.createElement('div');
    controls.style.cssText = 'display:flex;gap:0.5rem;margin-bottom:0.5rem';
    const container = createContainer();
    wrapper.appendChild(controls);
    wrapper.appendChild(container);
    const engine = new ChartEngine(container, 'bar', {
      frameTheme: args.frameTheme || 'light',
      zoom: {
        enabled: true
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.setData(resolveDataset(LINE_DATASETS, args.dataset));
    controls.appendChild(btn('Zoom x: 2--5', () => engine.setZoomDomain(2, 5)));
    controls.appendChild(btn('Zoom x: 3--6', () => engine.setZoomDomain(3, 6)));
    controls.appendChild(btn('Reset', () => engine.resetZoom()));
    return wrapper;
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Zoom -- 휠로 패닝 (wheelMode: pan)',
  args: {
    dataset: 'numeric-large',
    frameTheme: 'light'
  } as ZoomArgs,
  argTypes: {
    dataset: datasetArgType(LINE_DATASETS)
  },
  render: (args: ZoomArgs) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel("wheelMode: 'pan' -- 드래그로 zoom, 휠로 pan. zoom 상태일 때만 휠 pan이 동작합니다."));
    const container = createContainer();
    wrapper.appendChild(container);
    const engine = new ChartEngine(container, 'line', {
      frameTheme: args.frameTheme || 'light',
      zoom: {
        enabled: true,
        wheelMode: 'pan'
      },
      tooltip: {
        show: true,
        shared: true
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.setData(resolveDataset(LINE_DATASETS, args.dataset));
    return wrapper;
  }
}`,...C.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Zoom -- wheelMode: zoom vs pan 비교',
  args: {
    dataset: 'numeric-large',
    frameTheme: 'light'
  } as ZoomArgs,
  argTypes: {
    dataset: datasetArgType(LINE_DATASETS)
  },
  render: (args: ZoomArgs) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('좌: wheelMode zoom -- 휠=zoom, 드래그=pan. 우: wheelMode pan -- 드래그=zoom, 휠=pan(zoom 상태일 때).'));
    const row = document.createElement('div');
    row.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:1rem';
    const makeSection = (labelText: string): {
      section: HTMLDivElement;
      container: HTMLDivElement;
    } => {
      const section = document.createElement('div');
      const label = document.createElement('p');
      label.textContent = labelText;
      label.style.cssText = 'font-size:0.8125rem;font-weight:600;margin-bottom:0.25rem;color:#374151';
      const container = document.createElement('div');
      container.style.cssText = 'width:100%;height:280px;border:1px solid #e2e8f0;border-radius:4px;';
      section.appendChild(label);
      section.appendChild(container);
      return {
        section,
        container
      };
    };

    // zoom chart
    const {
      section: leftSection,
      container: leftContainer
    } = makeSection('wheelMode: zoom -- 휠=zoom, 드래그=pan (항상)');
    const zoomEngine = new ChartEngine(leftContainer, 'line', {
      frameTheme: args.frameTheme || 'light',
      zoom: {
        enabled: true,
        wheelMode: 'zoom'
      },
      tooltip: {
        show: true
      },
      responsive: true
    });
    zoomEngine.installPlugin(new LegendPlugin());
    zoomEngine.installPlugin(new TooltipPlugin());
    zoomEngine.setData(resolveDataset(LINE_DATASETS, args.dataset));

    // pan chart
    const {
      section: rightSection,
      container: rightContainer
    } = makeSection('wheelMode: pan -- 드래그=zoom, 휠=pan (zoom 상태일 때)');
    const panEngine = new ChartEngine(rightContainer, 'line', {
      frameTheme: args.frameTheme || 'light',
      zoom: {
        enabled: true,
        wheelMode: 'pan'
      },
      tooltip: {
        show: true
      },
      responsive: true
    });
    panEngine.installPlugin(new LegendPlugin());
    panEngine.installPlugin(new TooltipPlugin());
    panEngine.setData(resolveDataset(LINE_DATASETS, args.dataset));
    row.appendChild(leftSection);
    row.appendChild(rightSection);
    wrapper.appendChild(row);
    return wrapper;
  }
}`,...Z.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Zoom -- 인터랙션 모드 전환 (zoom -> pan)',
  args: {
    dataset: 'numeric-large',
    frameTheme: 'light'
  } as ZoomArgs,
  argTypes: {
    dataset: datasetArgType(LINE_DATASETS)
  },
  render: (args: ZoomArgs) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('wheelMode: zoom (기본) -- 휠=zoom, 드래그=pan (항상). 더블클릭으로 zoom을 초기화합니다.'));
    const container = createContainer();
    wrapper.appendChild(container);
    const engine = new ChartEngine(container, 'line', {
      frameTheme: args.frameTheme || 'light',
      zoom: {
        enabled: true,
        wheelMode: 'zoom'
      },
      tooltip: {
        show: true,
        shared: true
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.setData(resolveDataset(LINE_DATASETS, args.dataset));
    return wrapper;
  }
}`,...z.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Zoom -- minZoom 옵션',
  args: {
    dataset: 'numeric-large',
    minZoom: 3,
    frameTheme: 'light'
  } as ZoomMinZoomArgs,
  argTypes: {
    dataset: datasetArgType(LINE_DATASETS),
    minZoom: {
      control: {
        type: 'number',
        min: 1,
        step: 1
      },
      description: '최소 zoom 범위 (데이터 단위). 데이터 범위보다 크면 zoom 전체 비활성화.',
      table: {
        defaultValue: {
          summary: '3'
        }
      }
    }
  },
  render: (args: ZoomMinZoomArgs) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel(\`minZoom: \${args.minZoom} -- 이 값 이하로 zoom 불가. 데이터 전체 범위가 minZoom보다 작으면 zoom 자체가 비활성화됩니다.\`));
    const container = createContainer();
    wrapper.appendChild(container);
    const engine = new ChartEngine(container, 'line', {
      frameTheme: args.frameTheme || 'light',
      zoom: {
        enabled: true,
        minZoom: args.minZoom
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.setData(resolveDataset(LINE_DATASETS, args.dataset));
    return wrapper;
  }
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Zoom + Animation 동시 활성',
  args: {
    dataset: 'numeric-large',
    animationDuration: 400,
    frameTheme: 'light'
  } as AnimationArgs,
  argTypes: {
    dataset: datasetArgType(LINE_DATASETS),
    animationDuration: {
      control: {
        type: 'range',
        min: 100,
        max: 2000,
        step: 100
      },
      description: '애니메이션 지속 시간 (ms)',
      table: {
        defaultValue: {
          summary: '400'
        }
      }
    }
  },
  render: (args: AnimationArgs) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('Zoom(드래그/더블클릭/휠)과 Animation(데이터 교체 시 fade-in)을 동시에 사용합니다.'));
    const controls = document.createElement('div');
    controls.style.cssText = 'display:flex;gap:0.5rem;margin-bottom:0.5rem';
    const container = createContainer();
    wrapper.appendChild(controls);
    wrapper.appendChild(container);
    const engine = new ChartEngine(container, 'line', {
      frameTheme: args.frameTheme || 'light',
      zoom: {
        enabled: true
      },
      animation: {
        enabled: true,
        duration: args.animationDuration
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.setData(resolveDataset(LINE_DATASETS, args.dataset));
    let toggle = false;
    const datasets = LINE_DATASETS.filter(d => ['numeric-basic', 'numeric-multi'].includes(d.key));
    controls.appendChild(btn('Switch data', () => {
      toggle = !toggle;
      engine.setData(datasets[toggle ? 1 : 0].data);
    }));
    controls.appendChild(btn('Reset zoom', () => engine.resetZoom()));
    return wrapper;
  }
}`,...A.parameters?.docs?.source}}};const V=["ZoomBasic","ZoomWithControls","ZoomWheelPan","ZoomWheelPanVsZoom","ZoomInteractionMode","ZoomMinZoom","ZoomAndAnimation"];export{A as ZoomAndAnimation,T as ZoomBasic,z as ZoomInteractionMode,E as ZoomMinZoom,C as ZoomWheelPan,Z as ZoomWheelPanVsZoom,f as ZoomWithControls,V as __namedExportsOrder,k as default};
