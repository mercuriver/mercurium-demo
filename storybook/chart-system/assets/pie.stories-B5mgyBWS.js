import{r as f}from"./story-utils-DFvoCd7a.js";function I(e,n){return!n||n.tooltip!==!1?e:{...e,tooltip:{...e.tooltip??{},show:!1}}}const w=520,R=460,D=380;function v(e,n={}){const t=I(n.options??{},n.plugins),r=n.plugins?.click!==!1,l={type:"pie",data:e,options:t,callbacks:r&&n.onPointClick?{onPointClick:a=>n.onPointClick({seriesKey:a.seriesKey,pointIndex:a.pointIndex})}:void 0};return f([l],{columns:1,cardHeight:n.height??R,cardWidth:n.width??w,cardSize:"fixed",fitContainer:!1})}function T(e,n={}){return f(e.map(t=>({type:"pie",data:t.input,options:I(t.options??{},n.plugins),label:t.label,description:t.description})),{columns:n.columns??3,cardHeight:n.cardHeight??D})}const o={slices:[{id:"electronics",label:"Electronics",value:4200},{id:"apparel",label:"Apparel",value:2800},{id:"home",label:"Home & Living",value:1900},{id:"beauty",label:"Beauty",value:1400},{id:"food",label:"Food",value:900}]},C={slices:[{id:"organic",label:"Organic Search",value:52},{id:"direct",label:"Direct",value:23},{id:"social",label:"Social",value:16},{id:"referral",label:"Referral",value:9}]},O={slices:[{id:"only",label:"Total",value:100}]};function E(e){return{slices:Array.from({length:e},(t,r)=>({id:`s-${r}`,label:`Slice ${r+1}`,value:10+r*13%30}))}}const b={1:O,4:C,8:E(8),12:E(12)},S=Math.PI/180,W={title:"Polar/Pie",args:{innerRadius:0,startAngleDeg:0,palette:"default",frameTheme:"light",legendPosition:"right",borderColor:"none",borderWidth:1},argTypes:{innerRadius:{control:"select",options:[0,.3,.5,.7],description:"도넛 hole 비율 (0 = solid pie, 0.5 = 도넛 50%)"},startAngleDeg:{control:{type:"range",min:-180,max:180,step:15},description:"시작 각도 (degree, 0 = 12 시 방향)"},palette:{control:"select",options:["default","bold-primary","vintage-press","ocean-vermillion"],description:"palette preset"},frameTheme:{control:"select",options:["light","dark"],description:"frame theme"},legendPosition:{control:"select",options:["top","bottom","left","right"],description:"legend 위치"},borderColor:{control:"select",options:["auto","none","#ffffff","#0f172a","#ef4444"],description:"slice 경계 색 (auto = frame background, none = 경계 없음, hex 직접 지정)"},borderWidth:{control:{type:"range",min:0,max:6,step:1},description:"slice 경계 두께 (px). 0 = 경계 없음"}}},i={render:e=>v({...o,innerRadius:e.innerRadius,startAngle:e.startAngleDeg*S,borderColor:e.borderColor,borderWidth:e.borderWidth},{options:{frameTheme:e.frameTheme,colorPalette:e.palette,legend:{show:!0,position:e.legendPosition}}})},s={parameters:{controls:{disable:!0}},render:()=>T([{input:b[1],label:"1 slice"},{input:b[4],label:"4 slices"},{input:b[8],label:"8 slices"},{input:b[12],label:"12 slices"},{input:{...o,innerRadius:.5},label:"Donut (innerRadius 0.5)"},{input:{...o,innerRadius:.7},label:"Thin donut (innerRadius 0.7)"},{input:{...o,startAngle:-Math.PI/2},label:"startAngle -90° (3 시 시작)"},{input:o,label:"Dark theme",options:{frameTheme:"dark"}},{input:{...o,borderColor:"none"},label:"No border"},{input:{...o,borderColor:"#0f172a",borderWidth:2},label:"Custom border (2px slate)"}],{columns:3})},d={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:8px;";const n=document.createElement("div");n.style.cssText="font-size:11px;color:var(--story-desc-color, #3f3f46);background:var(--story-card-bg, #f4f4f5);padding:6px 10px;border-radius:4px;font-family:monospace;min-height:20px;",n.textContent="Click a slice to log a point:click event here.";const t=v(o,{options:{legend:{show:!0,position:"right"}},onPointClick:r=>{n.textContent=`point:click  seriesKey="${r.seriesKey}"  pointIndex=${r.pointIndex}`}});return e.appendChild(t),e.appendChild(n),e}},A={slices:[{id:"electronics",label:"Electronics",value:4200},{id:"apparel",label:"Apparel",value:2800},{id:"home",label:"Home & Living",value:1900},{id:"beauty",label:"Beauty",value:1400},{id:"food",label:"Food",value:900}]},y={slices:[{id:"electronics",label:"Electronics",value:1500},{id:"apparel",label:"Apparel",value:3500},{id:"beauty",label:"Beauty",value:1100},{id:"sports",label:"Sports",value:2400},{id:"books",label:"Books",value:800}]},P="var(--story-card-border, #e2e8f0)",B="var(--story-card-bg, #ffffff)",k=520,L=460,M=600,U="6px 12px",H={animation:{enabled:!0,duration:M},legend:{show:!0,position:"right"}};function _(e,n){return f([{type:"pie",data:e,options:H,onEngine:n}],{columns:1,cardHeight:L,cardWidth:k,cardSize:"fixed"})}const g={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:8px;";const n=document.createElement("div");n.style.cssText="display:flex;gap:8px;";const t=`padding:${U};font-size:12px;border:1px solid ${P};background:${B};border-radius:4px;cursor:pointer;`,r=document.createElement("button");r.textContent="Swap data (data-change tween)",r.style.cssText=t;const l=document.createElement("button");l.textContent="Replay entry",l.style.cssText=t,n.appendChild(r),n.appendChild(l);let a=null,p="A",h=_(A,u=>{a=u});return r.addEventListener("click",()=>{p=p==="A"?"B":"A",a?.setPieInput(p==="A"?A:y)}),l.addEventListener("click",()=>{a?.destroy();const u=_(p==="A"?A:y,N=>{a=N});h.replaceWith(u),h=u}),e.appendChild(n),e.appendChild(h),e}},x={slices:[{id:"electronics",label:"Electronics",value:4200},{id:"apparel",label:"Apparel",value:2800},{id:"home",label:"Home & Living",value:1900},{id:"beauty",label:"Beauty",value:1400},{id:"food",label:"Food",value:900},{id:"sports",label:"Sports",value:200},{id:"books",label:"Books",value:180},{id:"pets",label:"Pets",value:160},{id:"travel",label:"Travel",value:140},{id:"toys",label:"Toys",value:120},{id:"garden",label:"Garden",value:100},{id:"misc",label:"Misc",value:80}]},m={parameters:{controls:{disable:!0}},render:()=>T([{input:x,label:"Inline only (callout disabled)",description:"작은 slice 들의 라벨이 좁은 wedge 안에 겹쳐 가독성이 떨어진다",options:{dataLabel:{show:!0},legend:{show:!0,position:"right"}}},{input:x,label:"Callout enabled (default 12°)",description:"12° 미만 slice 가 leader line 으로 외곽으로 빠져나간다",options:{dataLabel:{show:!0},legend:{show:!0,position:"right"},pie:{dataLabel:{callout:{enabled:!0}}}}}],{columns:2})},c={parameters:{controls:{disable:!0}},render:()=>T([{input:o,label:"Revenue by category",description:"카테고리별 매출 점유율",options:{legend:{show:!0,position:"right"}}},{input:{...C,innerRadius:.55},label:"Traffic sources (donut)",description:"유입 채널 비중",options:{legend:{show:!0,position:"right"}}},{input:{...o,innerRadius:.4,startAngle:-Math.PI/2},label:"Donut, 3 시 시작",description:"startAngle 으로 시작 위치 회전",options:{legend:{show:!0,position:"right"}}}],{columns:3})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => renderPieSingle({
    ...REVENUE_5,
    innerRadius: args.innerRadius,
    startAngle: args.startAngleDeg * DEG_TO_RAD,
    borderColor: args.borderColor,
    borderWidth: args.borderWidth
  }, {
    options: {
      frameTheme: args.frameTheme,
      colorPalette: args.palette,
      legend: {
        show: true,
        position: args.legendPosition
      }
    }
  })
}`,...i.parameters?.docs?.source},description:{story:"Interactive playground — innerRadius / startAngle / palette / frame theme.",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderPieGrid([{
    input: PIE_BY_COUNT[1],
    label: '1 slice'
  }, {
    input: PIE_BY_COUNT[4],
    label: '4 slices'
  }, {
    input: PIE_BY_COUNT[8],
    label: '8 slices'
  }, {
    input: PIE_BY_COUNT[12],
    label: '12 slices'
  }, {
    input: {
      ...REVENUE_5,
      innerRadius: 0.5
    },
    label: 'Donut (innerRadius 0.5)'
  }, {
    input: {
      ...REVENUE_5,
      innerRadius: 0.7
    },
    label: 'Thin donut (innerRadius 0.7)'
  }, {
    input: {
      ...REVENUE_5,
      startAngle: -Math.PI / 2
    },
    label: 'startAngle -90° (3 시 시작)'
  }, {
    input: REVENUE_5,
    label: 'Dark theme',
    options: {
      frameTheme: 'dark'
    }
  }, {
    input: {
      ...REVENUE_5,
      borderColor: 'none'
    },
    label: 'No border'
  }, {
    input: {
      ...REVENUE_5,
      borderColor: '#0f172a',
      borderWidth: 2
    },
    label: 'Custom border (2px slate)'
  }], {
    columns: 3
  })
}`,...s.parameters?.docs?.source},description:{story:"Slice count variants (1 / 4 / 8 / 12) + donut variant + dark theme.",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;flex-direction:column;gap:8px;';
    const log = document.createElement('div');
    log.style.cssText = 'font-size:11px;color:var(--story-desc-color, #3f3f46);background:var(--story-card-bg, #f4f4f5);padding:6px 10px;border-radius:4px;font-family:monospace;min-height:20px;';
    log.textContent = 'Click a slice to log a point:click event here.';
    const chart = renderPieSingle(REVENUE_5, {
      options: {
        legend: {
          show: true,
          position: 'right'
        }
      },
      onPointClick: e => {
        log.textContent = \`point:click  seriesKey="\${e.seriesKey}"  pointIndex=\${e.pointIndex}\`;
      }
    });
    wrapper.appendChild(chart);
    wrapper.appendChild(log);
    return wrapper;
  }
}`,...d.parameters?.docs?.source},description:{story:`Hover + click + legend toggle interactions. Tooltip / click adapter
(paradigm-agnostic) installed via \`pie-helpers\`. Hovering a slice dims
its siblings to fillOpacity 0.6; clicking emits \`point:click\` (logged
to the page-level info panel below the chart). Legend entries toggle
slices on / off — palette colors stay stable because hidden slices
still occupy their original-array index for color resolution.`,...d.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;flex-direction:column;gap:8px;';
    const controls = document.createElement('div');
    controls.style.cssText = 'display:flex;gap:8px;';
    const btnStyle = \`padding:\${ANIMATION_BTN_PADDING};font-size:12px;border:1px solid \${ANIMATION_BTN_BORDER};background:\${ANIMATION_BTN_BG};border-radius:4px;cursor:pointer;\`;
    const swapBtn = document.createElement('button');
    swapBtn.textContent = 'Swap data (data-change tween)';
    swapBtn.style.cssText = btnStyle;
    const replayBtn = document.createElement('button');
    replayBtn.textContent = 'Replay entry';
    replayBtn.style.cssText = btnStyle;
    controls.appendChild(swapBtn);
    controls.appendChild(replayBtn);

    // renderChart returns a fresh grid each call; for swap we reuse the
    // engine ref (data-change tween), for replay we rebuild the card so the
    // entry tween runs from firstRender again.
    let engineRef: PolarEngine | null = null;
    let current: 'A' | 'B' = 'A';
    let chartCard = buildAnimationCard(ANIMATION_DATASET_A, engine => {
      engineRef = engine;
    });
    swapBtn.addEventListener('click', () => {
      current = current === 'A' ? 'B' : 'A';
      engineRef?.setPieInput(current === 'A' ? ANIMATION_DATASET_A : ANIMATION_DATASET_B);
    });
    replayBtn.addEventListener('click', () => {
      engineRef?.destroy();
      const fresh = buildAnimationCard(current === 'A' ? ANIMATION_DATASET_A : ANIMATION_DATASET_B, engine => {
        engineRef = engine;
      });
      chartCard.replaceWith(fresh);
      chartCard = fresh;
    });
    wrapper.appendChild(controls);
    wrapper.appendChild(chartCard);
    return wrapper;
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderPieGrid([{
    input: CALLOUT_DEMO_DATASET,
    label: 'Inline only (callout disabled)',
    description: '작은 slice 들의 라벨이 좁은 wedge 안에 겹쳐 가독성이 떨어진다',
    options: {
      dataLabel: {
        show: true
      },
      legend: {
        show: true,
        position: 'right'
      }
    }
  }, {
    input: CALLOUT_DEMO_DATASET,
    label: 'Callout enabled (default 12°)',
    description: '12° 미만 slice 가 leader line 으로 외곽으로 빠져나간다',
    options: {
      dataLabel: {
        show: true
      },
      legend: {
        show: true,
        position: 'right'
      },
      pie: {
        dataLabel: {
          callout: {
            enabled: true
          }
        }
      }
    }
  }], {
    columns: 2
  })
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderPieGrid([{
    input: REVENUE_5,
    label: 'Revenue by category',
    description: '카테고리별 매출 점유율',
    options: {
      legend: {
        show: true,
        position: 'right'
      }
    }
  }, {
    input: {
      ...TRAFFIC_4,
      innerRadius: 0.55
    },
    label: 'Traffic sources (donut)',
    description: '유입 채널 비중',
    options: {
      legend: {
        show: true,
        position: 'right'
      }
    }
  }, {
    input: {
      ...REVENUE_5,
      innerRadius: 0.4,
      startAngle: -Math.PI / 2
    },
    label: 'Donut, 3 시 시작',
    description: 'startAngle 으로 시작 위치 회전',
    options: {
      legend: {
        show: true,
        position: 'right'
      }
    }
  }], {
    columns: 3
  })
}`,...c.parameters?.docs?.source},description:{story:"Real-world part-to-whole scenarios.",...c.parameters?.docs?.description}}};const F=["Focused","AllStates","Interactions","Animation","Callout","Showcase"];export{s as AllStates,g as Animation,m as Callout,i as Focused,d as Interactions,c as Showcase,F as __namedExportsOrder,W as default};
