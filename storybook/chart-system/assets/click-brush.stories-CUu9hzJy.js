import{c as d,d as y,g,h as m,i as f,L as h,j as C}from"./story-utils-DFvoCd7a.js";import{c as u}from"./interaction-helpers-BzULOBsR.js";const E={title:"Interactions/Click & Brush",args:{...d,dataset:"numeric-basic"},argTypes:{dataset:C(h),...y}},c={args:{...d,dataset:"numeric-basic"},render:e=>{const{panel:o,log:s}=u(),n=document.createElement("div");n.style.cssText="display:flex;flex-direction:column;gap:12px;";const a=g("line",f(h,e.dataset),{...m(e)},{fitContainer:e.fitContainer,width:e.width??600,height:e.height??360,plugins:["click"],onEngine:i=>{i.on("point:click",t=>{s(`[click] series="${t.seriesKey}" index=${t.pointIndex} x=${JSON.stringify(t.dataPoint.x)} y=${t.dataPoint.y} px=(${Math.round(t.pixelX)}, ${Math.round(t.pixelY)})`)})}});return n.appendChild(a),n.appendChild(o),n}},l={parameters:{controls:{disable:!0}},render:e=>{const o={xAxisType:"number",series:[{key:"group-a",label:"Group A",data:Array.from({length:20},(t,r)=>({x:r*37%100,y:(r*51+10)%100}))}]},{panel:s,log:n}=u(),a=document.createElement("div");a.style.cssText="display:flex;flex-direction:column;gap:12px;";const i=g("scatter",o,{frameTheme:e.frameTheme,scatter:{dotSize:6},tooltip:{show:!0}},{width:600,height:360,plugins:["click"],onEngine:t=>{t.on("point:click",r=>{n(`[click] idx=${r.pointIndex} x=${r.dataPoint.x} y=${r.dataPoint.y}`)})}});return a.appendChild(i),a.appendChild(s),a}},p={args:{...d,dataset:"numeric-large"},render:e=>{const{panel:o,log:s}=u(),n=document.createElement("div");n.style.cssText="display:flex;flex-direction:column;gap:12px;";let a=null;const i=document.createElement("button");i.textContent="Clear brush",i.style.cssText="align-self:flex-start;padding:6px 12px;font-size:12px;border:1px solid #cbd5e1;background:#fff;border-radius:4px;cursor:pointer;",i.addEventListener("click",()=>{a?.emit("brush:clear",void 0),s("[brush:clear]")});const t=g("line",f(h,e.dataset),{...m(e)},{fitContainer:e.fitContainer,width:e.width??700,height:e.height??380,plugins:["brush"],onEngine:r=>{a=r,r.on("brush:select",x=>{s(`[brush:select] xMin=${JSON.stringify(x.xMin)} xMax=${JSON.stringify(x.xMax)}`)}),r.on("brush:clear",()=>{s("[brush:clear]")})}});return n.appendChild(i),n.appendChild(t),n.appendChild(o),n}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'numeric-basic'
  },
  render: args => {
    const {
      panel,
      log
    } = createLogPanel();
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;flex-direction:column;gap:12px;';
    const chart = renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
      ...commonOptionsFrom(args)
    }, {
      fitContainer: args.fitContainer,
      width: args.width ?? 600,
      height: args.height ?? 360,
      plugins: ['click'],
      onEngine: engine => {
        engine.on('point:click', (event: PointClickEvent) => {
          log(\`[click] series="\${event.seriesKey}" index=\${event.pointIndex} \` + \`x=\${JSON.stringify(event.dataPoint.x)} y=\${event.dataPoint.y} \` + \`px=(\${Math.round(event.pixelX)}, \${Math.round(event.pixelY)})\`);
        });
      }
    });
    wrapper.appendChild(chart);
    wrapper.appendChild(panel);
    return wrapper;
  }
}`,...c.parameters?.docs?.source},description:{story:"데이터 포인트 클릭 이벤트 로깅 -- drag(5px 이상)는 클릭으로 판정 안 됨.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const data: ChartData = {
      xAxisType: 'number',
      series: [{
        key: 'group-a',
        label: 'Group A',
        data: Array.from({
          length: 20
        }, (_, i) => ({
          x: i * 37 % 100,
          y: (i * 51 + 10) % 100
        }))
      }]
    };
    const {
      panel,
      log
    } = createLogPanel();
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;flex-direction:column;gap:12px;';
    const chart = renderChartSingle('scatter', data, {
      frameTheme: args.frameTheme,
      scatter: {
        dotSize: 6
      },
      tooltip: {
        show: true
      }
    }, {
      width: 600,
      height: 360,
      plugins: ['click'],
      onEngine: engine => {
        engine.on('point:click', (event: PointClickEvent) => {
          log(\`[click] idx=\${event.pointIndex} \` + \`x=\${event.dataPoint.x} y=\${event.dataPoint.y}\`);
        });
      }
    });
    wrapper.appendChild(chart);
    wrapper.appendChild(panel);
    return wrapper;
  }
}`,...l.parameters?.docs?.source},description:{story:"Scatter 포인트 클릭 -- 고밀도 scatter에서 정확한 hit test 확인.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'numeric-large'
  },
  render: args => {
    const {
      panel,
      log
    } = createLogPanel();
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;flex-direction:column;gap:12px;';
    let engineRef: import('../engine/cartesian-engine').CartesianEngine | null = null;
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear brush';
    clearBtn.style.cssText = 'align-self:flex-start;padding:6px 12px;font-size:12px;border:1px solid #cbd5e1;background:#fff;border-radius:4px;cursor:pointer;';
    clearBtn.addEventListener('click', () => {
      engineRef?.emit('brush:clear', undefined);
      log('[brush:clear]');
    });
    const chart = renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
      ...commonOptionsFrom(args)
    }, {
      fitContainer: args.fitContainer,
      width: args.width ?? 700,
      height: args.height ?? 380,
      plugins: ['brush'],
      onEngine: engine => {
        engineRef = engine;
        engine.on('brush:select', (event: BrushSelectEvent) => {
          log(\`[brush:select] xMin=\${JSON.stringify(event.xMin)} xMax=\${JSON.stringify(event.xMax)}\`);
        });
        engine.on('brush:clear', () => {
          log('[brush:clear]');
        });
      }
    });
    wrapper.appendChild(clearBtn);
    wrapper.appendChild(chart);
    wrapper.appendChild(panel);
    return wrapper;
  }
}`,...p.parameters?.docs?.source},description:{story:"Brush 범위 선택 -- Shift+드래그로 X 범위 선택, clear 버튼으로 해제.",...p.parameters?.docs?.description}}};const S=["ClickBasic","ClickScatter","BrushBasic"];export{p as BrushBasic,c as ClickBasic,l as ClickScatter,S as __namedExportsOrder,E as default};
