import{c as m,d as u,r as h,e as f,f as c,L as l,g as y,h as b,i as w}from"./story-utils-An5pPzk-.js";import{b as T}from"./interaction-helpers-BzULOBsR.js";import"./style-LY_0diQA.js";import"./option-to-id-DOsJ4Sn6.js";const S={title:"Interactions/Animation",args:{...m,dataset:"numeric-basic",animationDuration:500},argTypes:{dataset:w(l),animationDuration:{control:{type:"range",min:100,max:2e3,step:100},description:"애니메이션 지속 시간 (ms)",table:{defaultValue:{summary:"500"}}},...u}},t={parameters:{controls:{disable:!0}},render:n=>h(["fade","draw","draw-rtl"].map(a=>({type:"line",data:f,options:{frameTheme:n.frameTheme,animation:{enabled:!0,duration:600,type:a},legend:{show:!1}},label:`type: ${a}`})),{columns:3,cardHeight:240,hideDataSummary:!0})},i={args:{...m,dataset:"numeric-basic",animationDuration:500},render:n=>{const a=l.filter(d=>["numeric-basic","numeric-multi","numeric-large"].includes(d.key));let r=!1,e=null;const s=document.createElement("div");s.style.cssText="display:flex;flex-direction:column;gap:8px;";const p=T("Reload data",()=>{r=!r,e?.setData(a[r?1:0].data)});s.appendChild(p);const g=c("line",b(l,n.dataset),{...y(n),animation:{enabled:!0,duration:n.animationDuration}},{fitContainer:n.fitContainer,width:n.width??600,height:n.height??360,onEngine:d=>{e=d}});return s.appendChild(g),s}},o={parameters:{controls:{disable:!0}},render:n=>{const a={xAxisType:"number",series:[{key:"high",label:"High (200~300)",data:Array.from({length:8},(r,e)=>({x:e+1,y:200+e*15}))},{key:"mid",label:"Mid (80~120)",data:Array.from({length:8},(r,e)=>({x:e+1,y:80+e*5}))},{key:"low",label:"Low (10~30)",data:Array.from({length:8},(r,e)=>({x:e+1,y:10+e*2.5}))}]};return c("line",a,{frameTheme:n.frameTheme,animation:{enabled:!0,duration:500},tooltip:{show:!0,shared:!0},legend:{show:!0}},{width:600,height:360})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid((['fade', 'draw', 'draw-rtl'] as const).map(type => ({
    type: 'line' as const,
    data: NUMERIC_BASIC,
    options: {
      frameTheme: args.frameTheme,
      animation: {
        enabled: true,
        duration: 600,
        type
      },
      legend: {
        show: false
      }
    },
    label: \`type: \${type}\`
  })), {
    columns: 3,
    cardHeight: 240,
    hideDataSummary: true
  })
}`,...t.parameters?.docs?.source},description:{story:"3가지 animation 유형 -- fade / draw / draw-rtl 나란히 비교.",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'numeric-basic',
    animationDuration: 500
  },
  render: args => {
    const datasets = LINE_DATASETS.filter(d => ['numeric-basic', 'numeric-multi', 'numeric-large'].includes(d.key));
    let toggle = false;
    // engineRef is assigned inside \`onEngine\` below; the reload handler reads it
    // after user click, so the ordering is safe at runtime.
    let engineRef: import('../engine/graph-renderer').GraphRenderer | null = null;
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;flex-direction:column;gap:8px;';
    const reload = btn('Reload data', () => {
      toggle = !toggle;
      engineRef?.setData(datasets[toggle ? 1 : 0].data);
    });
    wrapper.appendChild(reload);
    const chart = renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
      ...commonOptionsFrom(args),
      animation: {
        enabled: true,
        duration: args.animationDuration
      }
    }, {
      fitContainer: args.fitContainer,
      width: args.width ?? 600,
      height: args.height ?? 360,
      onEngine: engine => {
        engineRef = engine;
      }
    });
    wrapper.appendChild(chart);
    return wrapper;
  }
}`,...i.parameters?.docs?.source},description:{story:"Reload data 버튼으로 animation 재생을 반복 트리거. `animationDuration` control로\n지속 시간 조절 가능.",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
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
    return renderChartSingle('line', data, {
      frameTheme: args.frameTheme,
      animation: {
        enabled: true,
        duration: 500
      },
      tooltip: {
        show: true,
        shared: true
      },
      legend: {
        show: true
      }
    }, {
      width: 600,
      height: 360
    });
  }
}`,...o.parameters?.docs?.source},description:{story:"Legend 클릭으로 시리즈 토글 시 Y축이 부드럽게 interpolate 되는 demo.",...o.parameters?.docs?.description}}};const E=["AnimationTypes","ReloadTrigger","LegendToggleInterpolation"];export{t as AnimationTypes,o as LegendToggleInterpolation,i as ReloadTrigger,E as __namedExportsOrder,S as default};
