import{r as h}from"./story-utils-B9NFoQdo.js";const P=520,A=460,T=380,_=(e,n={})=>{const t={type:"radar",data:e,options:n.options??{},callbacks:n.onPointClick?{onPointClick:n.onPointClick}:void 0};return h([t],{columns:1,cardHeight:n.height??A,cardWidth:n.fitContainer?void 0:n.width??P,cardSize:n.fitContainer?"fluid":"fixed",fitContainer:n.fitContainer??!1})},x=(e,n={})=>h(e.map(t=>({type:"radar",data:t.input,options:t.options,label:t.label,description:t.description})),{columns:n.columns??3,cardHeight:n.cardHeight??T}),a={axes:[{id:"body",label:"Body"},{id:"acidity",label:"Acidity"},{id:"tannin",label:"Tannin"},{id:"sweetness",label:"Sweetness"},{id:"finish",label:"Finish"}],scale:{min:0,max:5,step:1},series:[{id:"wine-a",name:"Cabernet Sauvignon",values:[4.5,3.5,4,1,4]},{id:"wine-b",name:"Pinot Noir",values:[2.5,4,2,2,3]}]},C={axes:[{id:"speed",label:"Speed"},{id:"power",label:"Power"},{id:"agility",label:"Agility"},{id:"endurance",label:"Endurance"},{id:"technique",label:"Technique"},{id:"mental",label:"Mental"}],scale:{min:0,max:100,step:20},series:[{id:"p-a",name:"Player A",values:[85,78,92,70,88,81]},{id:"p-b",name:"Player B",values:[72,90,65,88,75,84]}]},v={axes:[{id:"a",label:"Quality"},{id:"b",label:"Service"},{id:"c",label:"Speed"},{id:"d",label:"Price"},{id:"e",label:"Variety"},{id:"f",label:"Comfort"},{id:"g",label:"Hygiene"},{id:"h",label:"Innovation"}],scale:{min:0,max:10},series:[{id:"survey-a",name:"Q1",values:[8.2,7.1,6.5,7.8,8.5,7,8.8,6.2]},{id:"survey-b",name:"Q2",values:[8.5,7.4,7.2,7.5,8.1,7.8,8.6,7]},{id:"survey-c",name:"Q3",values:[8,8,7.8,7,7.6,8.2,8.2,7.6]}]},O={axes:a.axes,scale:a.scale,series:[a.series[0]]},L={...a,series:a.series.map(e=>({...e,fill:!1}))},N={...a,series:a.series.map((e,n)=>({...e,dashed:n===1}))},F={...a,series:a.series.map(e=>({...e,dots:!1}))},w={axes:[{id:"q",label:"Quality"},{id:"p",label:"Performance"},{id:"s",label:"Support"},{id:"v",label:"Value"}],scale:{min:0,max:10,step:2},series:[{id:"a",name:"Vendor A",values:[8,7,6,9]},{id:"b",name:"Vendor B",values:[6,9,8,7]}]},H=["Speed","Power","Agility","Endurance","Technique","Mental","Vision","Defense","Attack","Stamina","Reflex","Tactics","Balance","Focus","Recovery","Discipline","Strategy","Awareness"],o=(e,n)=>{const t=Array.from({length:e},(i,r)=>({id:`axis-${r}`,label:H[r]??`Axis ${r+1}`})),s=t.map((i,r)=>60+r*7%35),b=t.map((i,r)=>50+r*11%45);return{axes:t,scale:{min:0,max:100,step:20},series:n===1?[{id:"s-a",name:"Series A",values:s}]:[{id:"s-a",name:"Series A",values:s},{id:"s-b",name:"Series B",values:b}]}},E=[3,5,8,12,15,18],k={3:o(3,2),5:a,8:v,12:o(12,2),15:o(15,2),18:o(18,2)},U={title:"Polar/Radar",args:{axisCount:5,frameTheme:"light",legendPosition:"bottom"},argTypes:{axisCount:{control:"select",options:E,description:"축 개수 (3..18 중 대표 6개: 3 / 5 / 8 / 12 / 15 / 18)"},frameTheme:{control:"select",options:["light","dark"],description:"frame theme"},legendPosition:{control:"select",options:["top","bottom","left","right"],description:"legend 위치"}}},l={render:e=>_(k[e.axisCount],{options:{frameTheme:e.frameTheme,legend:{show:!0,position:e.legendPosition}}})},d={parameters:{controls:{disable:!0}},render:()=>x([{input:w,label:"4 axes"},{input:a,label:"5 axes"},{input:C,label:"6 axes"},{input:v,label:"8 axes"},{input:O,label:"Single series"},{input:L,label:"fill: false"},{input:N,label:"dashed (one series)"},{input:F,label:"dots: false"},{input:a,label:"dark theme",options:{frameTheme:"dark"}}],{columns:3})},f="font-size:13px;font-weight:600;color:#27272a;",G="24px",y={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText=`display:flex;flex-direction:column;gap:${G};`;const n=document.createElement("div");n.style.cssText=f,n.textContent="Single Series · 3..18 axes",e.appendChild(n),e.appendChild(x(E.map(s=>({input:o(s,1),label:`${s} axes`})),{columns:3}));const t=document.createElement("div");return t.style.cssText=f,t.textContent="Multi Series · 3..18 axes",e.appendChild(t),e.appendChild(x(E.map(s=>({input:o(s,2),label:`${s} axes`})),{columns:3})),e}},c={parameters:{controls:{disable:!0}},render:()=>x([{input:a,label:"Wine profile",description:"두 와인 비교"},{input:C,label:"Player profile",description:"6축 점수 비교"},{input:v,label:"Survey",description:"분기별 만족도"}],{columns:3})},p={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:12px;";const n=document.createElement("div");n.style.cssText="font-size:12px;color:#52525b;",n.textContent="animation.enabled = true · 첫 render 는 entry fade (~600ms), 버튼으로 데이터 갱신 시 data-change tween",e.appendChild(n);const t=[a,{...a,series:a.series.map((g,I)=>({...g,values:g.values.map(R=>Math.max(0,Math.min(5,R+(I===0?-1:1))))}))}];let s=0,b=null;const S={type:"radar",data:t[s],options:{animation:{enabled:!0,duration:600}},onEngine:g=>{b=g}};e.appendChild(h([S],{columns:1,cardHeight:460,cardWidth:520,cardSize:"fixed"}));const i=document.createElement("div");i.style.cssText="display:flex;gap:8px;";const r=document.createElement("button");return r.textContent="Swap dataset",r.style.cssText="padding:4px 12px;font-size:12px;",r.addEventListener("click",()=>{s=(s+1)%t.length,b?.setRadarInput(t[s])}),i.appendChild(r),e.appendChild(i),e}},u={parameters:{controls:{disable:!0}},render:()=>{const e=a,n={axes:[{id:"a",label:"A"},{id:"b",label:"B"}],scale:{min:0,max:5},series:[{id:"s",name:"S",values:[3,4]}]},t={axes:e.axes,scale:e.scale,series:[]};return x([{input:t,label:"No data",description:"series.length === 0 → no-data overlay"},{input:n,label:"Validation error",description:"axes.length < 3 → error overlay"},{input:e,label:"Valid",description:"overlay 없음 (비교용)"}],{columns:3})}},m={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:12px;";const n=document.createElement("div");n.style.cssText="font-size:12px;color:#52525b;",n.textContent="BasicClickPlugin · vertex 클릭 시 (seriesKey, pointIndex, dataPoint) 가 아래에 표시됨",e.appendChild(n);const t=document.createElement("pre");return t.style.cssText="min-height:48px;padding:8px;background:#f4f4f5;font-size:11px;font-family:ui-monospace,monospace;color:#27272a;border-radius:4px;margin:0;",t.textContent="(no clicks yet)",e.appendChild(_(a,{onPointClick:s=>{t.textContent=JSON.stringify({seriesKey:s.seriesKey,pointIndex:s.pointIndex,dataPoint:s.dataPoint},null,2)}})),e.appendChild(t),e}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => renderRadarSingle(inputByAxisCount[args.axisCount], {
    options: {
      frameTheme: args.frameTheme,
      legend: {
        show: true,
        position: args.legendPosition
      }
    }
  })
}`,...l.parameters?.docs?.source},description:{story:"Interactive playground — axis count / frame theme / legend 위치 비교.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Axis count / fill / dashed / dots variants in a single grid.",...d.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Real-world scenarios — profile comparison overlays.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    let idx = 0;
    let engineRef: PolarEngine | null = null;
    const spec: ChartSpec<PolarEngine> = {
      type: 'radar',
      data: datasets[idx],
      options: {
        animation: {
          enabled: true,
          duration: 600
        }
      },
      onEngine: engine => {
        engineRef = engine;
      }
    };
    root.appendChild(renderChart([spec], {
      columns: 1,
      cardHeight: 460,
      cardWidth: 520,
      cardSize: 'fixed'
    }));
    const controls = document.createElement('div');
    controls.style.cssText = 'display:flex;gap:8px;';
    const swap = document.createElement('button');
    swap.textContent = 'Swap dataset';
    swap.style.cssText = 'padding:4px 12px;font-size:12px;';
    swap.addEventListener('click', () => {
      idx = (idx + 1) % datasets.length;
      engineRef?.setRadarInput(datasets[idx]);
    });
    controls.appendChild(swap);
    root.appendChild(controls);
    return root;
  }
}`,...p.parameters?.docs?.source},description:{story:`Entry + data-change tween demo (CS-POLAR-ENGINE U-4 / U-5).

첫 render 는 entry transition — values 가 scale.min 에서 target 으로
lerp 하면서 동시에 globalAlpha 가 0→1 fade. 'Swap dataset' 버튼은
동일 engine 의 setRadarInput 을 다시 호출해 data-change transition
(axes 동일, values 만 lerp, alpha 1 고정) 을 trigger 한다.

단일 PolarEngine 인스턴스를 재사용하는 점이 중요하다 — 매 swap
마다 새 engine 을 생성하면 직전 controller / canvas / observer 가 leak
되고 entry 만 반복 발생해 data-change 효과가 안 보인다.`,...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`Status panel overlay states (CS-POLAR-ENGINE U-1).

- Empty: zero-series RadarInput → 'no-data' overlay
- Error: validate 실패 (axes < MIN) → 'error' overlay
- Valid: 정상 input → overlay 없음 (비교용)`,...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`BasicClickPlugin emit 데모 (CS-POLAR-ENGINE U-2 / U-3).

차트 위 vertex 를 클릭하면 hit 결과가 패널에 표시된다. 드래그 (이동
거리 > MOVE_THRESHOLD) 는 클릭으로 인정하지 않으며 hit miss 시도
출력되지 않는다.`,...m.parameters?.docs?.description}}};const W=["Focused","AllStates","AxisRange","Showcase","Animation","Status","OnPointClick"];export{d as AllStates,p as Animation,y as AxisRange,l as Focused,m as OnPointClick,c as Showcase,u as Status,W as __namedExportsOrder,U as default};
