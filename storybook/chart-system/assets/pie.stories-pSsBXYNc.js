import{P as y,i as R,B as P}from"./polar-plugin-install-Cko35AAA.js";import"./style-CugFjfBU.js";import"./option-to-id-BJrSKRCI.js";function w(e,n){return!n||n.tooltip!==!1?e:{...e,tooltip:{...e.tooltip??{},show:!1}}}const C="rgba(0,0,0,0.12)",B=520,S=460,k=380,L=16;function O(e,n={}){const a=n.width??B,r=n.height??S,i=document.createElement("div"),t=document.createElement("div");t.style.width=`${a}px`,t.style.height=`${r}px`,t.style.border=`1px solid ${C}`,t.style.borderRadius="4px",i.appendChild(t);const o=n.options??{},l=w(o,n.plugins),c=new y(t,l);return R(c,l,"pie",{installClick:n.plugins?.click!==!1}),n.onPointClick&&c.on("point:click",p=>n.onPointClick({seriesKey:p.seriesKey,pointIndex:p.pointIndex})),c.setPieInput(e),c.render(),i}function f(e,n={}){const a=n.columns??3,r=n.cardHeight??k,i=document.createElement("div");i.style.cssText=`display:grid;grid-template-columns:repeat(${a}, 1fr);gap:${L}px;`;for(const t of e){const o=document.createElement("div");if(o.style.cssText="display:flex;flex-direction:column;gap:4px;",t.label){const d=document.createElement("div");d.style.cssText="font-size:11px;font-weight:600;color:#52525b;",d.textContent=t.label,o.appendChild(d)}if(t.description){const d=document.createElement("div");d.style.cssText="font-size:10px;color:#71717a;margin-top:-2px;",d.textContent=t.description,o.appendChild(d)}const l=document.createElement("div");l.style.cssText=`width:100%;height:${r}px;border:1px solid ${C};border-radius:6px;overflow:hidden;`,o.appendChild(l);const c=t.options??{},p=w(c,n.plugins),E=new y(l,p);R(E,p,"pie",{installClick:n.plugins?.click!==!1}),E.setPieInput(t.input),E.render(),i.appendChild(o)}return i}const s={slices:[{id:"electronics",label:"Electronics",value:4200},{id:"apparel",label:"Apparel",value:2800},{id:"home",label:"Home & Living",value:1900},{id:"beauty",label:"Beauty",value:1400},{id:"food",label:"Food",value:900}]},D={slices:[{id:"organic",label:"Organic Search",value:52},{id:"direct",label:"Direct",value:23},{id:"social",label:"Social",value:16},{id:"referral",label:"Referral",value:9}]},H={slices:[{id:"only",label:"Total",value:100}]};function _(e){return{slices:Array.from({length:e},(a,r)=>({id:`s-${r}`,label:`Slice ${r+1}`,value:10+r*13%30}))}}const h={1:H,4:D,8:_(8),12:_(12)},M=Math.PI/180,j={title:"Polar/Pie",args:{innerRadius:0,startAngleDeg:0,palette:"default",frameTheme:"light",legendPosition:"right",borderColor:"none",borderWidth:1},argTypes:{innerRadius:{control:"select",options:[0,.3,.5,.7],description:"도넛 hole 비율 (0 = solid pie, 0.5 = 도넛 50%)"},startAngleDeg:{control:{type:"range",min:-180,max:180,step:15},description:"시작 각도 (degree, 0 = 12 시 방향)"},palette:{control:"select",options:["default","bold-primary","vintage-press","ocean-vermillion"],description:"palette preset"},frameTheme:{control:"select",options:["light","dark"],description:"frame theme"},legendPosition:{control:"select",options:["top","bottom","left","right"],description:"legend 위치"},borderColor:{control:"select",options:["auto","none","#ffffff","#0f172a","#ef4444"],description:"slice 경계 색 (auto = frame background, none = 경계 없음, hex 직접 지정)"},borderWidth:{control:{type:"range",min:0,max:6,step:1},description:"slice 경계 두께 (px). 0 = 경계 없음"}}},u={render:e=>O({...s,innerRadius:e.innerRadius,startAngle:e.startAngleDeg*M,borderColor:e.borderColor,borderWidth:e.borderWidth},{options:{frameTheme:e.frameTheme,colorPalette:e.palette,legend:{show:!0,position:e.legendPosition}}})},b={parameters:{controls:{disable:!0}},render:()=>f([{input:h[1],label:"1 slice"},{input:h[4],label:"4 slices"},{input:h[8],label:"8 slices"},{input:h[12],label:"12 slices"},{input:{...s,innerRadius:.5},label:"Donut (innerRadius 0.5)"},{input:{...s,innerRadius:.7},label:"Thin donut (innerRadius 0.7)"},{input:{...s,startAngle:-Math.PI/2},label:"startAngle -90° (3 시 시작)"},{input:s,label:"Dark theme",options:{frameTheme:"dark"}},{input:{...s,borderColor:"none"},label:"No border"},{input:{...s,borderColor:"#0f172a",borderWidth:2},label:"Custom border (2px slate)"}],{columns:3})},g={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:8px;";const n=document.createElement("div");n.style.cssText="font-size:11px;color:var(--story-desc-color, #3f3f46);background:var(--story-card-bg, #f4f4f5);padding:6px 10px;border-radius:4px;font-family:monospace;min-height:20px;",n.textContent="Click a slice to log a point:click event here.";const a=O(s,{options:{legend:{show:!0,position:"right"}},onPointClick:r=>{n.textContent=`point:click  seriesKey="${r.seriesKey}"  pointIndex=${r.pointIndex}`}});return e.appendChild(a),e.appendChild(n),e}},x={slices:[{id:"electronics",label:"Electronics",value:4200},{id:"apparel",label:"Apparel",value:2800},{id:"home",label:"Home & Living",value:1900},{id:"beauty",label:"Beauty",value:1400},{id:"food",label:"Food",value:900}]},I={slices:[{id:"electronics",label:"Electronics",value:1500},{id:"apparel",label:"Apparel",value:3500},{id:"beauty",label:"Beauty",value:1100},{id:"sports",label:"Sports",value:2400},{id:"books",label:"Books",value:800}]},$="var(--story-card-border, #e2e8f0)",U="var(--story-card-bg, #ffffff)",G="var(--story-card-border, #e2e8f0)",F=520,V=460,W=600,z="6px 12px";function v(e){const n=new y(e,{animation:{enabled:!0,duration:W},legend:{show:!0,position:"right"}});return n.installPlugin(new P),n}const A={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:8px;";const n=document.createElement("div");n.style.cssText="display:flex;gap:8px;";const a=`padding:${z};font-size:12px;border:1px solid ${$};background:${U};border-radius:4px;cursor:pointer;`,r=document.createElement("button");r.textContent="Swap data (data-change tween)",r.style.cssText=a;const i=document.createElement("button");i.textContent="Replay entry",i.style.cssText=a,n.appendChild(r),n.appendChild(i);const t=document.createElement("div");t.style.cssText=`border:1px solid ${G};border-radius:4px;width:${F}px;height:${V}px;`;let o=v(t),l="A";return o.setPieInput(x),r.addEventListener("click",()=>{l=l==="A"?"B":"A",o.setPieInput(l==="A"?x:I)}),i.addEventListener("click",()=>{o.destroy(),t.innerHTML="",o=v(t),o.setPieInput(l==="A"?x:I)}),e.appendChild(n),e.appendChild(t),e}},N={slices:[{id:"electronics",label:"Electronics",value:4200},{id:"apparel",label:"Apparel",value:2800},{id:"home",label:"Home & Living",value:1900},{id:"beauty",label:"Beauty",value:1400},{id:"food",label:"Food",value:900},{id:"sports",label:"Sports",value:200},{id:"books",label:"Books",value:180},{id:"pets",label:"Pets",value:160},{id:"travel",label:"Travel",value:140},{id:"toys",label:"Toys",value:120},{id:"garden",label:"Garden",value:100},{id:"misc",label:"Misc",value:80}]},T={parameters:{controls:{disable:!0}},render:()=>f([{input:N,label:"Inline only (callout disabled)",description:"작은 slice 들의 라벨이 좁은 wedge 안에 겹쳐 가독성이 떨어진다",options:{dataLabel:{show:!0},legend:{show:!0,position:"right"}}},{input:N,label:"Callout enabled (default 12°)",description:"12° 미만 slice 가 leader line 으로 외곽으로 빠져나간다",options:{dataLabel:{show:!0},legend:{show:!0,position:"right"},pie:{dataLabel:{callout:{enabled:!0}}}}}],{columns:2})},m={parameters:{controls:{disable:!0}},render:()=>f([{input:s,label:"Revenue by category",description:"카테고리별 매출 점유율",options:{legend:{show:!0,position:"right"}}},{input:{...D,innerRadius:.55},label:"Traffic sources (donut)",description:"유입 채널 비중",options:{legend:{show:!0,position:"right"}}},{input:{...s,innerRadius:.4,startAngle:-Math.PI/2},label:"Donut, 3 시 시작",description:"startAngle 으로 시작 위치 회전",options:{legend:{show:!0,position:"right"}}}],{columns:3})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Interactive playground — innerRadius / startAngle / palette / frame theme.",...u.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Slice count variants (1 / 4 / 8 / 12) + donut variant + dark theme.",...b.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Hover + click + legend toggle interactions. Tooltip / click adapter
(paradigm-agnostic) installed via \`pie-helpers\`. Hovering a slice dims
its siblings to fillOpacity 0.6; clicking emits \`point:click\` (logged
to the page-level info panel below the chart). Legend entries toggle
slices on / off — palette colors stay stable because hidden slices
still occupy their original-array index for color resolution.`,...g.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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

    // Build the engine directly so the same instance survives across button
    // clicks. The shared helper builds + returns DOM only; \`setPieInput\` on
    // a re-used engine is what drives the data-change branch.
    const chartHolder = document.createElement('div');
    chartHolder.style.cssText = \`border:1px solid \${ANIMATION_HOLDER_BORDER};border-radius:4px;width:\${ANIMATION_HOLDER_WIDTH_PX}px;height:\${ANIMATION_HOLDER_HEIGHT_PX}px;\`;
    let engine = buildAnimationEngine(chartHolder);
    let current: 'A' | 'B' = 'A';
    engine.setPieInput(ANIMATION_DATASET_A);
    swapBtn.addEventListener('click', () => {
      current = current === 'A' ? 'B' : 'A';
      // Same engine — second setPieInput goes through the data-change
      // branch (firstRender already cleared by the entry tween).
      engine.setPieInput(current === 'A' ? ANIMATION_DATASET_A : ANIMATION_DATASET_B);
    });
    replayBtn.addEventListener('click', () => {
      // Rebuild engine to replay entry (firstRender resets on construction).
      engine.destroy();
      chartHolder.innerHTML = '';
      engine = buildAnimationEngine(chartHolder);
      engine.setPieInput(current === 'A' ? ANIMATION_DATASET_A : ANIMATION_DATASET_B);
    });
    wrapper.appendChild(controls);
    wrapper.appendChild(chartHolder);
    return wrapper;
  }
}`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Real-world part-to-whole scenarios.",...m.parameters?.docs?.description}}};const q=["Focused","AllStates","Interactions","Animation","Callout","Showcase"];export{b as AllStates,A as Animation,T as Callout,u as Focused,g as Interactions,m as Showcase,q as __namedExportsOrder,j as default};
