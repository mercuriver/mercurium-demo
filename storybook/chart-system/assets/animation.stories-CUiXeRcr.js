import{C as p}from"./chart-engine-BmtyFlsE.js";import{T as u,L as x}from"./tooltip-plugin-B9rRNLzl.js";import{L as s,N as R,r as S}from"./mock-data-BShfxM5i.js";import{d as P}from"./story-utils-Sq0wUdi9.js";import{c as h,a as f,b as T,d as w}from"./interaction-helpers-Dh259fVa.js";import"./crosshair-plugin-lsuhlxfG.js";const V={title:"Charts/Interactions/Animation",argTypes:{frameTheme:{control:"select",options:["light","dark","minimal"],description:"차트 프레임 테마",table:{defaultValue:{summary:"light"},category:"Common"}}},args:{frameTheme:"light"}},b={name:"Animation -- Fade-in",args:{dataset:"numeric-basic",animationDuration:500,frameTheme:"light"},argTypes:{dataset:P(s),animationDuration:{control:{type:"range",min:100,max:2e3,step:100},description:"애니메이션 지속 시간 (ms)",table:{defaultValue:{summary:"500"}}}},render:r=>{const e=h();e.appendChild(f('"Reload data" 버튼을 클릭하면 fade-in 애니메이션이 재생됩니다.'));const a=document.createElement("div");a.style.marginBottom="0.5rem";const l=w();e.appendChild(a),e.appendChild(l);const n=new p(l,"line",{width:600,height:360,frameTheme:r.frameTheme||"light",animation:{enabled:!0,duration:r.animationDuration}});n.installPlugin(new x),n.installPlugin(new u),n.setData(S(s,r.dataset));let t=!1;const i=s.filter(o=>["numeric-basic","numeric-multi","numeric-large","numeric-small"].includes(o.key));return a.appendChild(T("Reload data",()=>{t=!t,n.setData(i[t?1:0].data)})),e}},D={name:"Animation -- Draw (좌->우)",args:{dataset:"numeric-basic",animationDuration:600,frameTheme:"light"},argTypes:{dataset:P(s),animationDuration:{control:{type:"range",min:100,max:2e3,step:100},description:"애니메이션 지속 시간 (ms)",table:{defaultValue:{summary:"600"}}}},render:r=>{const e=h();e.appendChild(f('데이터가 왼쪽에서 오른쪽으로 그려지며 나타납니다. "Reload data" 버튼을 클릭해보세요.'));const a=document.createElement("div");a.style.marginBottom="0.5rem";const l=w();e.appendChild(a),e.appendChild(l);const n=new p(l,"line",{frameTheme:r.frameTheme||"light",animation:{enabled:!0,duration:r.animationDuration,type:"draw"}});n.installPlugin(new x),n.installPlugin(new u),n.setData(S(s,r.dataset));let t=!1;const i=s.filter(o=>["numeric-basic","numeric-multi","numeric-large"].includes(o.key));return a.appendChild(T("Reload data",()=>{t=!t,n.setData(i[t?1:0].data)})),e}},A={name:"Animation -- Draw (우->좌)",args:{dataset:"numeric-basic",animationDuration:600,frameTheme:"light"},argTypes:{dataset:P(s),animationDuration:{control:{type:"range",min:100,max:2e3,step:100},description:"애니메이션 지속 시간 (ms)",table:{defaultValue:{summary:"600"}}}},render:r=>{const e=h();e.appendChild(f('데이터가 오른쪽에서 왼쪽으로 그려지며 나타납니다. "Reload data" 버튼을 클릭해보세요.'));const a=document.createElement("div");a.style.marginBottom="0.5rem";const l=w();e.appendChild(a),e.appendChild(l);const n=new p(l,"bar",{frameTheme:r.frameTheme||"light",animation:{enabled:!0,duration:r.animationDuration,type:"draw-rtl"}});n.installPlugin(new x),n.installPlugin(new u),n.setData(S(s,r.dataset));let t=!1;const i=s.filter(o=>["numeric-basic","numeric-multi","numeric-large"].includes(o.key));return a.appendChild(T("Reload data",()=>{t=!t,n.setData(i[t?1:0].data)})),e}},C={name:"Animation -- Legend 토글 Y보간",args:{animationDuration:500,frameTheme:"light"},argTypes:{animationDuration:{control:{type:"range",min:100,max:2e3,step:100},description:"애니메이션 지속 시간 (ms)",table:{defaultValue:{summary:"500"}}}},render:r=>{const e=h();e.appendChild(f(`Legend 클릭으로 시리즈를 켜고 끌 때 Y축이 부드럽게 변합니다.
High(200~300) / Mid(80~120) / Low(10~30) -- 시리즈 간 Y 범위 차이가 커 토글 시 변화가 뚜렷합니다.`));const a=w();e.appendChild(a);const l={xAxisType:"number",series:[{key:"high",label:"High (200~300)",data:Array.from({length:8},(t,i)=>({x:i+1,y:200+i*15}))},{key:"mid",label:"Mid (80~120)",data:Array.from({length:8},(t,i)=>({x:i+1,y:80+i*5}))},{key:"low",label:"Low (10~30)",data:Array.from({length:8},(t,i)=>({x:i+1,y:10+i*2.5}))}]},n=new p(a,"line",{width:600,height:360,frameTheme:r.frameTheme||"light",animation:{enabled:!0,duration:r.animationDuration},tooltip:{show:!0,shared:!0}});return n.installPlugin(new x),n.installPlugin(new u),n.setData(l),e}},E={name:"Animation -- 유형 비교 (fade / draw / draw-rtl)",args:{animationDuration:600,frameTheme:"light"},argTypes:{animationDuration:{control:{type:"range",min:100,max:2e3,step:100},description:"애니메이션 지속 시간 (ms)",table:{defaultValue:{summary:"600"}}}},render:r=>{const e=h();e.appendChild(f('"Reload all" 버튼을 누르면 세 가지 animation 유형을 동시에 확인할 수 있습니다.'));const a=T("Reload all",()=>{});a.style.marginBottom="1rem",e.appendChild(a);const l=[{label:"fade (기본)",type:"fade"},{label:"draw (좌->우)",type:"draw"},{label:"draw-rtl (우->좌)",type:"draw-rtl"}],n=[];let t=!1;const i=s.filter(o=>["numeric-basic","numeric-multi"].includes(o.key));for(const{label:o,type:d}of l){const m=document.createElement("div"),c=document.createElement("p");c.textContent=o,c.style.cssText="font-size:0.8125rem;font-weight:600;margin-bottom:0.25rem;color:#374151",m.appendChild(c);const y=w(580,220);m.appendChild(y),e.appendChild(m);const g=new p(y,"line",{width:580,height:220,frameTheme:r.frameTheme||"light",animation:{enabled:!0,duration:r.animationDuration,type:d},legend:{show:!1}});g.installPlugin(new u),g.setData(R),n.push(g)}return a.addEventListener("click",()=>{t=!t;const o=i[t?1:0].data;n.forEach(d=>d.setData(o))}),e}},L={name:"Animation -- Duration 비교",args:{frameTheme:"light"},render:r=>{const e=h();e.appendChild(f('서로 다른 duration의 애니메이션을 동시에 확인합니다. "Reload" 버튼을 눌러보세요.'));const a=T("Reload all",()=>{});a.style.marginBottom="1rem",e.appendChild(a);const l=[{label:"Fast (200ms)",duration:200},{label:"Default (400ms)",duration:400},{label:"Slow (800ms)",duration:800}],n=[];for(const{label:o,duration:d}of l){const m=document.createElement("div"),c=document.createElement("p");c.textContent=o,c.style.cssText="font-size:0.8125rem;font-weight:600;margin-bottom:0.25rem;color:#374151",m.appendChild(c);const y=w(580,220);m.appendChild(y),e.appendChild(m);const g=new p(y,"bar",{width:580,height:220,frameTheme:r.frameTheme||"light",animation:{enabled:!0,duration:d},legend:{show:!1}});g.installPlugin(new u),g.setData(R),n.push(g)}let t=!1;const i=s.filter(o=>["numeric-basic","numeric-multi"].includes(o.key));return a.addEventListener("click",()=>{t=!t;const o=i[t?1:0].data;n.forEach(d=>d.setData(o))}),e}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Animation -- Fade-in',
  args: {
    dataset: 'numeric-basic',
    animationDuration: 500,
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
          summary: '500'
        }
      }
    }
  },
  render: (args: AnimationArgs) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('"Reload data" 버튼을 클릭하면 fade-in 애니메이션이 재생됩니다.'));
    const controls = document.createElement('div');
    controls.style.marginBottom = '0.5rem';
    const container = createContainer();
    wrapper.appendChild(controls);
    wrapper.appendChild(container);
    const engine = new ChartEngine(container, 'line', {
      width: 600,
      height: 360,
      frameTheme: args.frameTheme || 'light',
      animation: {
        enabled: true,
        duration: args.animationDuration
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.setData(resolveDataset(LINE_DATASETS, args.dataset));
    let toggle = false;
    const datasets = LINE_DATASETS.filter(d => ['numeric-basic', 'numeric-multi', 'numeric-large', 'numeric-small'].includes(d.key));
    controls.appendChild(btn('Reload data', () => {
      toggle = !toggle;
      engine.setData(datasets[toggle ? 1 : 0].data);
    }));
    return wrapper;
  }
}`,...b.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Animation -- Draw (좌->우)',
  args: {
    dataset: 'numeric-basic',
    animationDuration: 600,
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
          summary: '600'
        }
      }
    }
  },
  render: (args: AnimationArgs) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('데이터가 왼쪽에서 오른쪽으로 그려지며 나타납니다. "Reload data" 버튼을 클릭해보세요.'));
    const controls = document.createElement('div');
    controls.style.marginBottom = '0.5rem';
    const container = createContainer();
    wrapper.appendChild(controls);
    wrapper.appendChild(container);
    const engine = new ChartEngine(container, 'line', {
      frameTheme: args.frameTheme || 'light',
      animation: {
        enabled: true,
        duration: args.animationDuration,
        type: 'draw'
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.setData(resolveDataset(LINE_DATASETS, args.dataset));
    let toggle = false;
    const datasets = LINE_DATASETS.filter(d => ['numeric-basic', 'numeric-multi', 'numeric-large'].includes(d.key));
    controls.appendChild(btn('Reload data', () => {
      toggle = !toggle;
      engine.setData(datasets[toggle ? 1 : 0].data);
    }));
    return wrapper;
  }
}`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Animation -- Draw (우->좌)',
  args: {
    dataset: 'numeric-basic',
    animationDuration: 600,
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
          summary: '600'
        }
      }
    }
  },
  render: (args: AnimationArgs) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('데이터가 오른쪽에서 왼쪽으로 그려지며 나타납니다. "Reload data" 버튼을 클릭해보세요.'));
    const controls = document.createElement('div');
    controls.style.marginBottom = '0.5rem';
    const container = createContainer();
    wrapper.appendChild(controls);
    wrapper.appendChild(container);
    const engine = new ChartEngine(container, 'bar', {
      frameTheme: args.frameTheme || 'light',
      animation: {
        enabled: true,
        duration: args.animationDuration,
        type: 'draw-rtl'
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.setData(resolveDataset(LINE_DATASETS, args.dataset));
    let toggle = false;
    const datasets = LINE_DATASETS.filter(d => ['numeric-basic', 'numeric-multi', 'numeric-large'].includes(d.key));
    controls.appendChild(btn('Reload data', () => {
      toggle = !toggle;
      engine.setData(datasets[toggle ? 1 : 0].data);
    }));
    return wrapper;
  }
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Animation -- Legend 토글 Y보간',
  args: {
    animationDuration: 500,
    frameTheme: 'light'
  },
  argTypes: {
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
          summary: '500'
        }
      }
    }
  },
  render: (args: {
    animationDuration: number;
    frameTheme: string;
  }) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('Legend 클릭으로 시리즈를 켜고 끌 때 Y축이 부드럽게 변합니다.\\n' + 'High(200~300) / Mid(80~120) / Low(10~30) -- 시리즈 간 Y 범위 차이가 커 토글 시 변화가 뚜렷합니다.'));
    const container = createContainer();
    wrapper.appendChild(container);

    // Y range varies significantly across series to make legend toggle Y changes obvious
    const data: ChartData = {
      xAxisType: 'number',
      series: [{
        key: 'high',
        label: 'High (200~300)',
        data: Array.from({
          length: 8
        }, (_, i) => ({
          x: i + 1,
          y: 200 + i * 15
        }))
      }, {
        key: 'mid',
        label: 'Mid (80~120)',
        data: Array.from({
          length: 8
        }, (_, i) => ({
          x: i + 1,
          y: 80 + i * 5
        }))
      }, {
        key: 'low',
        label: 'Low (10~30)',
        data: Array.from({
          length: 8
        }, (_, i) => ({
          x: i + 1,
          y: 10 + i * 2.5
        }))
      }]
    };
    const engine = new ChartEngine(container, 'line', {
      width: 600,
      height: 360,
      frameTheme: args.frameTheme || 'light',
      animation: {
        enabled: true,
        duration: args.animationDuration
      },
      tooltip: {
        show: true,
        shared: true
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.setData(data);
    return wrapper;
  }
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Animation -- 유형 비교 (fade / draw / draw-rtl)',
  args: {
    animationDuration: 600,
    frameTheme: 'light'
  },
  argTypes: {
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
          summary: '600'
        }
      }
    }
  },
  render: (args: {
    animationDuration: number;
    frameTheme: string;
  }) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('"Reload all" 버튼을 누르면 세 가지 animation 유형을 동시에 확인할 수 있습니다.'));
    const reloadBtn = btn('Reload all', () => undefined);
    reloadBtn.style.marginBottom = '1rem';
    wrapper.appendChild(reloadBtn);
    const configs: {
      label: string;
      type: 'fade' | 'draw' | 'draw-rtl';
    }[] = [{
      label: 'fade (기본)',
      type: 'fade'
    }, {
      label: 'draw (좌->우)',
      type: 'draw'
    }, {
      label: 'draw-rtl (우->좌)',
      type: 'draw-rtl'
    }];
    const engines: ChartEngine[] = [];
    let toggle = false;
    const datasets = LINE_DATASETS.filter(d => ['numeric-basic', 'numeric-multi'].includes(d.key));
    for (const {
      label,
      type
    } of configs) {
      const section = document.createElement('div');
      const heading = document.createElement('p');
      heading.textContent = label;
      heading.style.cssText = 'font-size:0.8125rem;font-weight:600;margin-bottom:0.25rem;color:#374151';
      section.appendChild(heading);
      const container = createContainer(580, 220);
      section.appendChild(container);
      wrapper.appendChild(section);
      const engine = new ChartEngine(container, 'line', {
        width: 580,
        height: 220,
        frameTheme: args.frameTheme || 'light',
        animation: {
          enabled: true,
          duration: args.animationDuration,
          type
        },
        legend: {
          show: false
        }
      });
      engine.installPlugin(new TooltipPlugin());
      engine.setData(NUMERIC_BASIC);
      engines.push(engine);
    }
    reloadBtn.addEventListener('click', () => {
      toggle = !toggle;
      const next = datasets[toggle ? 1 : 0].data;
      engines.forEach(e => e.setData(next));
    });
    return wrapper;
  }
}`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Animation -- Duration 비교',
  args: {
    frameTheme: 'light'
  },
  render: (args: {
    frameTheme: string;
  }) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('서로 다른 duration의 애니메이션을 동시에 확인합니다. "Reload" 버튼을 눌러보세요.'));
    const reloadBtn = btn('Reload all', () => undefined);
    reloadBtn.style.marginBottom = '1rem';
    wrapper.appendChild(reloadBtn);
    const configs: {
      label: string;
      duration: number;
    }[] = [{
      label: 'Fast (200ms)',
      duration: 200
    }, {
      label: 'Default (400ms)',
      duration: 400
    }, {
      label: 'Slow (800ms)',
      duration: 800
    }];
    const engines: ChartEngine[] = [];
    for (const {
      label,
      duration
    } of configs) {
      const section = document.createElement('div');
      const heading = document.createElement('p');
      heading.textContent = label;
      heading.style.cssText = 'font-size:0.8125rem;font-weight:600;margin-bottom:0.25rem;color:#374151';
      section.appendChild(heading);
      const container = createContainer(580, 220);
      section.appendChild(container);
      wrapper.appendChild(section);
      const engine = new ChartEngine(container, 'bar', {
        width: 580,
        height: 220,
        frameTheme: args.frameTheme || 'light',
        animation: {
          enabled: true,
          duration
        },
        legend: {
          show: false
        }
      });
      engine.installPlugin(new TooltipPlugin());
      engine.setData(NUMERIC_BASIC);
      engines.push(engine);
    }
    let toggle = false;
    const datasets = LINE_DATASETS.filter(d => ['numeric-basic', 'numeric-multi'].includes(d.key));
    reloadBtn.addEventListener('click', () => {
      toggle = !toggle;
      const nextData = datasets[toggle ? 1 : 0].data;
      engines.forEach(e => e.setData(nextData));
    });
    return wrapper;
  }
}`,...L.parameters?.docs?.source}}};const Y=["AnimationFadeIn","AnimationDraw","AnimationDrawRtl","AnimationLegendToggle","AnimationAllTypes","AnimationDuration"];export{E as AnimationAllTypes,D as AnimationDraw,A as AnimationDrawRtl,L as AnimationDuration,b as AnimationFadeIn,C as AnimationLegendToggle,Y as __namedExportsOrder,V as default};
