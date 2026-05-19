import{r as A,a as _}from"./pie-helpers-DWI0kvCW.js";import{P as I,B as v}from"./polar-plugin-install-CRDDjrTA.js";import"./style-LY_0diQA.js";import"./option-to-id-DOsJ4Sn6.js";const r={slices:[{id:"electronics",label:"Electronics",value:4200},{id:"apparel",label:"Apparel",value:2800},{id:"home",label:"Home & Living",value:1900},{id:"beauty",label:"Beauty",value:1400},{id:"food",label:"Food",value:900}]},x={slices:[{id:"organic",label:"Organic Search",value:52},{id:"direct",label:"Direct",value:23},{id:"social",label:"Social",value:16},{id:"referral",label:"Referral",value:9}]},N={slices:[{id:"only",label:"Total",value:100}]};function T(e){return{slices:Array.from({length:e},(o,t)=>({id:`s-${t}`,label:`Slice ${t+1}`,value:10+t*13%30}))}}const b={1:N,4:x,8:T(8),12:T(12)},R=Math.PI/180,U={title:"Polar/Pie",args:{innerRadius:0,startAngleDeg:0,palette:"default",frameTheme:"light",legendPosition:"right",borderColor:"none",borderWidth:1},argTypes:{innerRadius:{control:"select",options:[0,.3,.5,.7],description:"도넛 hole 비율 (0 = solid pie, 0.5 = 도넛 50%)"},startAngleDeg:{control:{type:"range",min:-180,max:180,step:15},description:"시작 각도 (degree, 0 = 12 시 방향)"},palette:{control:"select",options:["default","bold-primary","vintage-press","ocean-vermillion"],description:"palette preset"},frameTheme:{control:"select",options:["light","dark"],description:"frame theme"},legendPosition:{control:"select",options:["top","bottom","left","right"],description:"legend 위치"},borderColor:{control:"select",options:["auto","none","#ffffff","#0f172a","#ef4444"],description:"slice 경계 색 (auto = frame background, none = 경계 없음, hex 직접 지정)"},borderWidth:{control:{type:"range",min:0,max:6,step:1},description:"slice 경계 두께 (px). 0 = 경계 없음"}}},i={render:e=>_({...r,innerRadius:e.innerRadius,startAngle:e.startAngleDeg*R,borderColor:e.borderColor,borderWidth:e.borderWidth},{options:{frameTheme:e.frameTheme,colorPalette:e.palette,legend:{show:!0,position:e.legendPosition}}})},s={parameters:{controls:{disable:!0}},render:()=>A([{input:b[1],label:"1 slice"},{input:b[4],label:"4 slices"},{input:b[8],label:"8 slices"},{input:b[12],label:"12 slices"},{input:{...r,innerRadius:.5},label:"Donut (innerRadius 0.5)"},{input:{...r,innerRadius:.7},label:"Thin donut (innerRadius 0.7)"},{input:{...r,startAngle:-Math.PI/2},label:"startAngle -90° (3 시 시작)"},{input:r,label:"Dark theme",options:{frameTheme:"dark"}},{input:{...r,borderColor:"none"},label:"No border"},{input:{...r,borderColor:"#0f172a",borderWidth:2},label:"Custom border (2px slate)"}],{columns:3})},d={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:8px;";const n=document.createElement("div");n.style.cssText="font-size:11px;color:var(--story-desc-color, #3f3f46);background:var(--story-card-bg, #f4f4f5);padding:6px 10px;border-radius:4px;font-family:monospace;min-height:20px;",n.textContent="Click a slice to log a point:click event here.";const o=_(r,{options:{legend:{show:!0,position:"right"}},onPointClick:t=>{n.textContent=`point:click  seriesKey="${t.seriesKey}"  pointIndex=${t.pointIndex}`}});return e.appendChild(o),e.appendChild(n),e}},h={slices:[{id:"electronics",label:"Electronics",value:4200},{id:"apparel",label:"Apparel",value:2800},{id:"home",label:"Home & Living",value:1900},{id:"beauty",label:"Beauty",value:1400},{id:"food",label:"Food",value:900}]},E={slices:[{id:"electronics",label:"Electronics",value:1500},{id:"apparel",label:"Apparel",value:3500},{id:"beauty",label:"Beauty",value:1100},{id:"sports",label:"Sports",value:2400},{id:"books",label:"Books",value:800}]},w="var(--story-card-border, #e2e8f0)",C="var(--story-card-bg, #ffffff)",O="var(--story-card-border, #e2e8f0)",D=520,P=460,B=600,S="6px 12px";function y(e){const n=new I(e,{animation:{enabled:!0,duration:B},legend:{show:!0,position:"right"}});return n.installPlugin(new v),n}const g={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:8px;";const n=document.createElement("div");n.style.cssText="display:flex;gap:8px;";const o=`padding:${S};font-size:12px;border:1px solid ${w};background:${C};border-radius:4px;cursor:pointer;`,t=document.createElement("button");t.textContent="Swap data (data-change tween)",t.style.cssText=o;const p=document.createElement("button");p.textContent="Replay entry",p.style.cssText=o,n.appendChild(t),n.appendChild(p);const a=document.createElement("div");a.style.cssText=`border:1px solid ${O};border-radius:4px;width:${D}px;height:${P}px;`;let l=y(a),u="A";return l.setPieInput(h),t.addEventListener("click",()=>{u=u==="A"?"B":"A",l.setPieInput(u==="A"?h:E)}),p.addEventListener("click",()=>{l.destroy(),a.innerHTML="",l=y(a),l.setPieInput(u==="A"?h:E)}),e.appendChild(n),e.appendChild(a),e}},f={slices:[{id:"electronics",label:"Electronics",value:4200},{id:"apparel",label:"Apparel",value:2800},{id:"home",label:"Home & Living",value:1900},{id:"beauty",label:"Beauty",value:1400},{id:"food",label:"Food",value:900},{id:"sports",label:"Sports",value:200},{id:"books",label:"Books",value:180},{id:"pets",label:"Pets",value:160},{id:"travel",label:"Travel",value:140},{id:"toys",label:"Toys",value:120},{id:"garden",label:"Garden",value:100},{id:"misc",label:"Misc",value:80}]},m={parameters:{controls:{disable:!0}},render:()=>A([{input:f,label:"Inline only (callout disabled)",description:"작은 slice 들의 라벨이 좁은 wedge 안에 겹쳐 가독성이 떨어진다",options:{dataLabel:{show:!0},legend:{show:!0,position:"right"}}},{input:f,label:"Callout enabled (default 12°)",description:"12° 미만 slice 가 leader line 으로 외곽으로 빠져나간다",options:{dataLabel:{show:!0},legend:{show:!0,position:"right"},pie:{dataLabel:{callout:{enabled:!0}}}}}],{columns:2})},c={parameters:{controls:{disable:!0}},render:()=>A([{input:r,label:"Revenue by category",description:"카테고리별 매출 점유율",options:{legend:{show:!0,position:"right"}}},{input:{...x,innerRadius:.55},label:"Traffic sources (donut)",description:"유입 채널 비중",options:{legend:{show:!0,position:"right"}}},{input:{...r,innerRadius:.4,startAngle:-Math.PI/2},label:"Donut, 3 시 시작",description:"startAngle 으로 시작 위치 회전",options:{legend:{show:!0,position:"right"}}}],{columns:3})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Real-world part-to-whole scenarios.",...c.parameters?.docs?.description}}};const $=["Focused","AllStates","Interactions","Animation","Callout","Showcase"];export{s as AllStates,g as Animation,m as Callout,i as Focused,d as Interactions,c as Showcase,$ as __namedExportsOrder,U as default};
