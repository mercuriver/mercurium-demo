import{P as I,B as C}from"./polar-plugin-install-Cko35AAA.js";import{a as b,r as S}from"./radar-helpers-C2wqLtll.js";import"./style-CugFjfBU.js";import"./option-to-id-BJrSKRCI.js";const t={axes:[{id:"body",label:"Body"},{id:"acidity",label:"Acidity"},{id:"tannin",label:"Tannin"},{id:"sweetness",label:"Sweetness"},{id:"finish",label:"Finish"}],scale:{min:0,max:5,step:1},series:[{id:"wine-a",name:"Cabernet Sauvignon",values:[4.5,3.5,4,1,4]},{id:"wine-b",name:"Pinot Noir",values:[2.5,4,2,2,3]}]},_={axes:[{id:"speed",label:"Speed"},{id:"power",label:"Power"},{id:"agility",label:"Agility"},{id:"endurance",label:"Endurance"},{id:"technique",label:"Technique"},{id:"mental",label:"Mental"}],scale:{min:0,max:100,step:20},series:[{id:"p-a",name:"Player A",values:[85,78,92,70,88,81]},{id:"p-b",name:"Player B",values:[72,90,65,88,75,84]}]},E={axes:[{id:"a",label:"Quality"},{id:"b",label:"Service"},{id:"c",label:"Speed"},{id:"d",label:"Price"},{id:"e",label:"Variety"},{id:"f",label:"Comfort"},{id:"g",label:"Hygiene"},{id:"h",label:"Innovation"}],scale:{min:0,max:10},series:[{id:"survey-a",name:"Q1",values:[8.2,7.1,6.5,7.8,8.5,7,8.8,6.2]},{id:"survey-b",name:"Q2",values:[8.5,7.4,7.2,7.5,8.1,7.8,8.6,7]},{id:"survey-c",name:"Q3",values:[8,8,7.8,7,7.6,8.2,8.2,7.6]}]},A={axes:t.axes,scale:t.scale,series:[t.series[0]]},T={...t,series:t.series.map(e=>({...e,fill:!1}))},O={...t,series:t.series.map((e,a)=>({...e,dashed:a===1}))},L={...t,series:t.series.map(e=>({...e,dots:!1}))},w={axes:[{id:"q",label:"Quality"},{id:"p",label:"Performance"},{id:"s",label:"Support"},{id:"v",label:"Value"}],scale:{min:0,max:10,step:2},series:[{id:"a",name:"Vendor A",values:[8,7,6,9]},{id:"b",name:"Vendor B",values:[6,9,8,7]}]},N=["Speed","Power","Agility","Endurance","Technique","Mental","Vision","Defense","Attack","Stamina","Reflex","Tactics","Balance","Focus","Recovery","Discipline","Strategy","Awareness"];function o(e,a){const n=Array.from({length:e},(i,r)=>({id:`axis-${r}`,label:N[r]??`Axis ${r+1}`})),s=n.map((i,r)=>60+r*7%35),l=n.map((i,r)=>50+r*11%45);return{axes:n,scale:{min:0,max:100,step:20},series:a===1?[{id:"s-a",name:"Series A",values:s}]:[{id:"s-a",name:"Series A",values:s},{id:"s-b",name:"Series B",values:l}]}}const h=[3,5,8,12,15,18],F={3:o(3,2),5:t,8:E,12:o(12,2),15:o(15,2),18:o(18,2)},U={title:"Polar/Radar",args:{axisCount:5,frameTheme:"light",legendPosition:"bottom"},argTypes:{axisCount:{control:"select",options:h,description:"축 개수 (3..18 중 대표 6개: 3 / 5 / 8 / 12 / 15 / 18)"},frameTheme:{control:"select",options:["light","dark"],description:"frame theme"},legendPosition:{control:"select",options:["top","bottom","left","right"],description:"legend 위치"}}},c={render:e=>S(F[e.axisCount],{options:{frameTheme:e.frameTheme,legend:{show:!0,position:e.legendPosition}}})},p={parameters:{controls:{disable:!0}},render:()=>b([{input:w,label:"4 axes"},{input:t,label:"5 axes"},{input:_,label:"6 axes"},{input:E,label:"8 axes"},{input:A,label:"Single series"},{input:T,label:"fill: false"},{input:O,label:"dashed (one series)"},{input:L,label:"dots: false"},{input:t,label:"dark theme",options:{frameTheme:"dark"}}],{columns:3})},f="font-size:13px;font-weight:600;color:#27272a;",H="24px",y={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText=`display:flex;flex-direction:column;gap:${H};`;const a=document.createElement("div");a.style.cssText=f,a.textContent="Single Series · 3..18 axes",e.appendChild(a),e.appendChild(b(h.map(s=>({input:o(s,1),label:`${s} axes`})),{columns:3}));const n=document.createElement("div");return n.style.cssText=f,n.textContent="Multi Series · 3..18 axes",e.appendChild(n),e.appendChild(b(h.map(s=>({input:o(s,2),label:`${s} axes`})),{columns:3})),e}},u={parameters:{controls:{disable:!0}},render:()=>b([{input:t,label:"Wine profile",description:"두 와인 비교"},{input:_,label:"Player profile",description:"6축 점수 비교"},{input:E,label:"Survey",description:"분기별 만족도"}],{columns:3})},m={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:12px;";const a=document.createElement("div");a.style.cssText="font-size:12px;color:#52525b;",a.textContent="animation.enabled = true · 첫 render 는 entry fade (~600ms), 버튼으로 데이터 갱신 시 data-change tween",e.appendChild(a);const n=[t,{...t,series:t.series.map((v,P)=>({...v,values:v.values.map(R=>Math.max(0,Math.min(5,R+(P===0?-1:1))))}))}],s=document.createElement("div");s.style.cssText="width:520px;height:460px;border:1px solid rgba(0,0,0,0.12);border-radius:4px;",e.appendChild(s);const l=new I(s,{animation:{enabled:!0,duration:600}});l.installPlugin(new C);let d=0;l.setRadarInput(n[d]);const i=document.createElement("div");i.style.cssText="display:flex;gap:8px;";const r=document.createElement("button");return r.textContent="Swap dataset",r.style.cssText="padding:4px 12px;font-size:12px;",r.addEventListener("click",()=>{d=(d+1)%n.length,l.setRadarInput(n[d])}),i.appendChild(r),e.appendChild(i),e}},x={parameters:{controls:{disable:!0}},render:()=>{const e=t,a={axes:[{id:"a",label:"A"},{id:"b",label:"B"}],scale:{min:0,max:5},series:[{id:"s",name:"S",values:[3,4]}]},n={axes:e.axes,scale:e.scale,series:[]};return b([{input:n,label:"No data",description:"series.length === 0 → no-data overlay"},{input:a,label:"Validation error",description:"axes.length < 3 → error overlay"},{input:e,label:"Valid",description:"overlay 없음 (비교용)"}],{columns:3})}},g={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:12px;";const a=document.createElement("div");a.style.cssText="font-size:12px;color:#52525b;",a.textContent="BasicClickPlugin · vertex 클릭 시 (seriesKey, pointIndex, dataPoint) 가 아래에 표시됨",e.appendChild(a);const n=document.createElement("pre");return n.style.cssText="min-height:48px;padding:8px;background:#f4f4f5;font-size:11px;font-family:ui-monospace,monospace;color:#27272a;border-radius:4px;margin:0;",n.textContent="(no clicks yet)",e.appendChild(S(t,{onPointClick:s=>{n.textContent=JSON.stringify({seriesKey:s.seriesKey,pointIndex:s.pointIndex,dataPoint:s.dataPoint},null,2)}})),e.appendChild(n),e}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => renderRadarSingle(inputByAxisCount[args.axisCount], {
    options: {
      frameTheme: args.frameTheme,
      legend: {
        show: true,
        position: args.legendPosition
      }
    }
  })
}`,...c.parameters?.docs?.source},description:{story:"Interactive playground — axis count / frame theme / legend 위치 비교.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderRadarGrid([{
    input: PROFILE_4,
    label: '4 axes'
  }, {
    input: WINE_PROFILE_5,
    label: '5 axes'
  }, {
    input: PROFILE_6,
    label: '6 axes'
  }, {
    input: PROFILE_8,
    label: '8 axes'
  }, {
    input: SOLO_5,
    label: 'Single series'
  }, {
    input: FILL_OFF_5,
    label: 'fill: false'
  }, {
    input: DASHED_5,
    label: 'dashed (one series)'
  }, {
    input: NO_DOTS_5,
    label: 'dots: false'
  }, {
    input: WINE_PROFILE_5,
    label: 'dark theme',
    options: {
      frameTheme: 'dark'
    }
  }], {
    columns: 3
  })
}`,...p.parameters?.docs?.source},description:{story:"Axis count / fill / dashed / dots variants in a single grid.",...p.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = \`display:flex;flex-direction:column;gap:\${AXIS_RANGE_GROUP_GAP};\`;
    const singleHeader = document.createElement('div');
    singleHeader.style.cssText = AXIS_RANGE_HEADER_STYLE;
    singleHeader.textContent = 'Single Series · 3..18 axes';
    root.appendChild(singleHeader);
    root.appendChild(renderRadarGrid(SUPPORTED_AXIS_COUNTS.map(n => ({
      input: buildRadarInputN(n, 1),
      label: \`\${n} axes\`
    })), {
      columns: 3
    }));
    const multiHeader = document.createElement('div');
    multiHeader.style.cssText = AXIS_RANGE_HEADER_STYLE;
    multiHeader.textContent = 'Multi Series · 3..18 axes';
    root.appendChild(multiHeader);
    root.appendChild(renderRadarGrid(SUPPORTED_AXIS_COUNTS.map(n => ({
      input: buildRadarInputN(n, 2),
      label: \`\${n} axes\`
    })), {
      columns: 3
    }));
    return root;
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderRadarGrid([{
    input: WINE_PROFILE_5,
    label: 'Wine profile',
    description: '두 와인 비교'
  }, {
    input: PROFILE_6,
    label: 'Player profile',
    description: '6축 점수 비교'
  }, {
    input: PROFILE_8,
    label: 'Survey',
    description: '분기별 만족도'
  }], {
    columns: 3
  })
}`,...u.parameters?.docs?.source},description:{story:"Real-world scenarios — profile comparison overlays.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = 'display:flex;flex-direction:column;gap:12px;';
    const note = document.createElement('div');
    note.style.cssText = 'font-size:12px;color:#52525b;';
    note.textContent = 'animation.enabled = true · 첫 render 는 entry fade (~600ms), 버튼으로 데이터 갱신 시 data-change tween';
    root.appendChild(note);
    const datasets: RadarInput[] = [WINE_PROFILE_5, {
      ...WINE_PROFILE_5,
      series: WINE_PROFILE_5.series.map((s, i) => ({
        ...s,
        values: s.values.map(v => Math.max(0, Math.min(5, v + (i === 0 ? -1 : 1))))
      }))
    }];

    // Single engine, fixed-size container — same engine across swaps so the
    // controller can run a real data-change transition the second time around.
    const engineHost = document.createElement('div');
    engineHost.style.cssText = 'width:520px;height:460px;border:1px solid rgba(0,0,0,0.12);border-radius:4px;';
    root.appendChild(engineHost);
    const engine = new PolarGraphRenderer(engineHost, {
      animation: {
        enabled: true,
        duration: 600
      }
    });
    engine.installPlugin(new BasicTooltipPlugin());
    let idx = 0;
    engine.setRadarInput(datasets[idx]);
    const controls = document.createElement('div');
    controls.style.cssText = 'display:flex;gap:8px;';
    const swap = document.createElement('button');
    swap.textContent = 'Swap dataset';
    swap.style.cssText = 'padding:4px 12px;font-size:12px;';
    swap.addEventListener('click', () => {
      idx = (idx + 1) % datasets.length;
      engine.setRadarInput(datasets[idx]);
    });
    controls.appendChild(swap);
    root.appendChild(controls);
    return root;
  }
}`,...m.parameters?.docs?.source},description:{story:`Entry + data-change tween demo (CS-POLAR-ENGINE U-4 / U-5).

첫 render 는 entry transition — values 가 scale.min 에서 target 으로
lerp 하면서 동시에 globalAlpha 가 0→1 fade. 'Swap dataset' 버튼은
동일 engine 의 setRadarInput 을 다시 호출해 data-change transition
(axes 동일, values 만 lerp, alpha 1 고정) 을 trigger 한다.

단일 PolarGraphRenderer 인스턴스를 재사용하는 점이 중요하다 — 매 swap
마다 새 engine 을 생성하면 직전 controller / canvas / observer 가 leak
되고 entry 만 반복 발생해 data-change 효과가 안 보인다.`,...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const valid = WINE_PROFILE_5;
    const invalidAxes: RadarInput = {
      axes: [{
        id: 'a',
        label: 'A'
      }, {
        id: 'b',
        label: 'B'
      }],
      scale: {
        min: 0,
        max: 5
      },
      series: [{
        id: 's',
        name: 'S',
        values: [3, 4]
      }]
    };
    const empty: RadarInput = {
      axes: valid.axes,
      scale: valid.scale,
      series: []
    };
    return renderRadarGrid([{
      input: empty,
      label: 'No data',
      description: 'series.length === 0 → no-data overlay'
    }, {
      input: invalidAxes,
      label: 'Validation error',
      description: 'axes.length < 3 → error overlay'
    }, {
      input: valid,
      label: 'Valid',
      description: 'overlay 없음 (비교용)'
    }], {
      columns: 3
    });
  }
}`,...x.parameters?.docs?.source},description:{story:`Status panel overlay states (CS-POLAR-ENGINE U-1).

- Empty: zero-series RadarInput → 'no-data' overlay
- Error: validate 실패 (axes < MIN) → 'error' overlay
- Valid: 정상 input → overlay 없음 (비교용)`,...x.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = 'display:flex;flex-direction:column;gap:12px;';
    const note = document.createElement('div');
    note.style.cssText = 'font-size:12px;color:#52525b;';
    note.textContent = 'BasicClickPlugin · vertex 클릭 시 (seriesKey, pointIndex, dataPoint) 가 아래에 표시됨';
    root.appendChild(note);
    const log = document.createElement('pre');
    log.style.cssText = 'min-height:48px;padding:8px;background:#f4f4f5;font-size:11px;font-family:ui-monospace,monospace;color:#27272a;border-radius:4px;margin:0;';
    log.textContent = '(no clicks yet)';
    root.appendChild(renderRadarSingle(WINE_PROFILE_5, {
      onPointClick: event => {
        log.textContent = JSON.stringify({
          seriesKey: event.seriesKey,
          pointIndex: event.pointIndex,
          dataPoint: event.dataPoint
        }, null, 2);
      }
    }));
    root.appendChild(log);
    return root;
  }
}`,...g.parameters?.docs?.source},description:{story:`BasicClickPlugin emit 데모 (CS-POLAR-ENGINE U-2 / U-3).

차트 위 vertex 를 클릭하면 hit 결과가 패널에 표시된다. 드래그 (이동
거리 > MOVE_THRESHOLD) 는 클릭으로 인정하지 않으며 hit miss 시도
출력되지 않는다.`,...g.parameters?.docs?.description}}};const z=["Focused","AllStates","AxisRange","Showcase","Animation","Status","OnPointClick"];export{p as AllStates,m as Animation,y as AxisRange,c as Focused,g as OnPointClick,u as Showcase,x as Status,z as __namedExportsOrder,U as default};
