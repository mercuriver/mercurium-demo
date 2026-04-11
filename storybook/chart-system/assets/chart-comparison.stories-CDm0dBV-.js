import{P as H,C as z,A as I}from"./chart-engine-BEaIKs5u.js";import{L as B,T as M}from"./tooltip-plugin-Bjs86Pni.js";import{C as O}from"./crosshair-plugin-DPAuNe78.js";import{c as R,E as G,d as U,S as $,M as F,e as V,f as q,g as j,h as J,N as K,C as Q,r as Z,i as D}from"./mock-data--NCvz5h5.js";const Y=["line","bar","area","scatter","timeseries"],ee={line:{line:{curve:"smooth",dots:!0,width:2}},bar:{bar:{radius:2}},area:{area:{opacity:.3},line:{curve:"smooth"}},scatter:{scatter:{dotSize:4}},timeseries:{line:{curve:"smooth",dots:!0,width:2}}};function c(e,a,n,t){const o=t?.width??420,r=t?.height??280,s=document.createElement("div");s.style.cssText="display:flex;flex-direction:column;gap:4px;";const i=document.createElement("div");i.style.cssText="font-size:13px;font-weight:600;color:#334155;",i.textContent=t?.labelText??e.charAt(0).toUpperCase()+e.slice(1),s.appendChild(i);const l=document.createElement("div");l.style.cssText=`width:${o}px;height:${r}px;border:1px solid #e2e8f0;border-radius:6px;overflow:hidden;`,s.appendChild(l);const p={responsive:!1,width:o,height:r,...ee[e],...n},d=new z(l,e,p),h=t?.plugins;return h?(h.includes("legend")&&d.installPlugin(new B),h.includes("tooltip")&&d.installPlugin(new M),h.includes("crosshair")&&d.installPlugin(new O),h.includes("annotation")&&d.installPlugin(new I)):(p.legend?.show!==!1&&d.installPlugin(new B),p.tooltip?.show!==!1&&d.installPlugin(new M),p.crosshair?.show&&d.installPlugin(new O),p.annotations&&p.annotations.length>0&&d.installPlugin(new I)),d.setData(a),s}function te(e){return e instanceof Date?e.toISOString().slice(0,10):String(e)}function N(e){const a=document.createElement("div");a.style.cssText="margin-top:8px;max-width:880px;";const n=document.createElement("button");n.textContent="Show Data",n.style.cssText="font-size:12px;color:#475569;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:4px;padding:4px 10px;cursor:pointer;",a.appendChild(n);const t=document.createElement("div");t.style.display="none",t.style.marginTop="6px";const o=document.createElement("div");o.style.cssText="font-size:11px;color:#64748b;margin-bottom:6px;",o.textContent=`xAxisType: "${e.xAxisType}" | series: ${e.series.length}`,t.appendChild(o);for(const r of e.series){const s=document.createElement("div");s.style.marginBottom="8px";const i=document.createElement("div");i.style.cssText="font-size:11px;font-weight:600;color:#334155;margin-bottom:2px;",i.textContent=`${r.label??r.key} (${r.data.length} points)`,s.appendChild(i);const l=document.createElement("table");l.style.cssText="border-collapse:collapse;font-size:11px;font-family:monospace;";const p=document.createElement("thead"),d=document.createElement("tr");for(const f of["x","y"]){const g=document.createElement("th");g.textContent=f,g.style.cssText="padding:2px 12px 2px 0;text-align:left;color:#64748b;border-bottom:1px solid #e2e8f0;",d.appendChild(g)}p.appendChild(d),l.appendChild(p);const h=document.createElement("tbody");for(const f of r.data){const g=document.createElement("tr");for(const X of[te(f.x),String(f.y)]){const P=document.createElement("td");P.textContent=X,P.style.cssText="padding:1px 12px 1px 0;color:#334155;",g.appendChild(P)}h.appendChild(g)}l.appendChild(h),s.appendChild(l),t.appendChild(s)}return a.appendChild(t),n.addEventListener("click",()=>{const r=t.style.display==="none";t.style.display=r?"block":"none",n.textContent=r?"Hide Data":"Show Data"}),a}function ne(e,a,n){const t=document.createElement("div");t.style.padding="16px";const o=document.createElement("div");o.style.cssText="display:flex;flex-wrap:wrap;gap:16px;";for(const r of a)o.appendChild(c(r,e,n));return t.appendChild(o),t.appendChild(N(e)),t}function oe(e){return{grid:{show:e.showGrid},legend:{show:e.showLegend,position:e.legendPosition},tooltip:{show:e.showTooltip,shared:e.tooltipShared},crosshair:e.showCrosshair?{show:!0,type:"x"}:{show:!1},colorPalette:e.colorPalette,...e.stacked?{bar:{stacked:!0,radius:2},area:{stacked:!0,opacity:.4}}:{}}}function ae(e){const a=[];return e.showLine&&a.push("line"),e.showBar&&a.push("bar"),e.showArea&&a.push("area"),e.showScatter&&a.push("scatter"),e.showTimeseries&&a.push("timeseries"),a}const re={dataset:{control:"select",options:J(D),labels:j(D),description:"데이터셋 선택",table:{category:"Data"}},showLine:{control:"boolean",description:"Line 차트 표시",table:{category:"Chart Types"}},showBar:{control:"boolean",description:"Bar 차트 표시",table:{category:"Chart Types"}},showArea:{control:"boolean",description:"Area 차트 표시",table:{category:"Chart Types"}},showScatter:{control:"boolean",description:"Scatter 차트 표시",table:{category:"Chart Types"}},showTimeseries:{control:"boolean",description:"Timeseries 차트 표시",table:{category:"Chart Types"}},showGrid:{control:"boolean",description:"그리드 표시",table:{category:"Common"}},showLegend:{control:"boolean",description:"범례 표시",table:{category:"Common"}},legendPosition:{control:"select",options:["top","bottom","left","right","inside-top-left","inside-top-right","inside-bottom-left","inside-bottom-right"],description:"범례 위치",table:{category:"Common"}},showTooltip:{control:"boolean",description:"툴팁 표시",table:{category:"Interaction"}},tooltipShared:{control:"boolean",description:"툴팁 공유 모드",table:{category:"Interaction"}},showCrosshair:{control:"boolean",description:"크로스헤어 표시",table:{category:"Interaction"}},colorPalette:{control:"select",options:Object.keys(H),description:"컬러 팔레트",table:{category:"Common"}},stacked:{control:"boolean",description:"스택 모드 (Bar, Area)",table:{category:"Common"}}},_={dataset:"numeric-basic",showLine:!0,showBar:!0,showArea:!0,showScatter:!0,showTimeseries:!1,showGrid:!0,showLegend:!0,legendPosition:"top",showTooltip:!0,tooltipShared:!1,showCrosshair:!1,colorPalette:"default",stacked:!1},de={title:"Charts/Comparison",args:_,argTypes:re};function k(e,a="line"){const n=Z(D,e.dataset),t=ae(e);return t.length===0&&t.push(a),ne(n,t,oe(e))}const w={render:e=>k(e)},b={args:{..._,dataset:"category-multi",showLine:!1,showScatter:!1,showTimeseries:!1,stacked:!0},render:e=>k(e,"bar")},y={args:{..._,dataset:"date-monthly",showLine:!0,showBar:!1,showArea:!0,showScatter:!1,showTimeseries:!0},render:e=>k(e,"timeseries")},C={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.padding="16px";const a={grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!1}},n=[{title:"Empty Series Array",desc:"data.series = []",data:G,types:Y},{title:"Empty Data Points",desc:"series[0].data = []",data:U,types:Y},{title:"Single Point",desc:"1 data point only",data:$,types:["line","bar","area","scatter"]},{title:"Mismatched Series Length",desc:"Series A: 6 points, Series B: 3 points (sparse X)",data:F,types:["line","bar","area","scatter"]},{title:"Duplicate X Values",desc:"Same X appears multiple times in one series",data:V,types:["line","bar","area","scatter"]},{title:"All Same Y (Flat)",desc:"All Y values identical — range = 0",data:q,types:["line","bar","area","scatter"]}];for(const t of n){const o=document.createElement("div");o.style.marginBottom="32px";const r=document.createElement("div");r.style.marginBottom="12px";const s=document.createElement("div");s.style.cssText="font-size:16px;font-weight:700;color:#0f172a;",s.textContent=t.title,r.appendChild(s);const i=document.createElement("div");i.style.cssText="font-size:12px;color:#64748b;margin-top:2px;",i.textContent=t.desc,r.appendChild(i),o.appendChild(r);const l=document.createElement("div");l.style.cssText="display:flex;flex-wrap:wrap;gap:16px;";for(const p of t.types)l.appendChild(c(p,t.data,a));o.appendChild(l),o.appendChild(N(t.data)),e.appendChild(o)}return e}};function m(e,a){const n=document.createElement("div");n.style.marginBottom="32px";const t=document.createElement("div");t.style.marginBottom="12px";const o=document.createElement("div");o.style.cssText="font-size:16px;font-weight:700;color:#0f172a;",o.textContent=e,t.appendChild(o);const r=document.createElement("div");r.style.cssText="font-size:12px;color:#64748b;margin-top:2px;",r.textContent=a,t.appendChild(r),n.appendChild(t);const s=document.createElement("div");return s.style.cssText="display:flex;flex-wrap:wrap;gap:16px;",n.appendChild(s),{wrapper:n,content:s}}const u=K,W=Q,x={name:"컬러 팔레트 쇼케이스",parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.padding="16px";const{wrapper:a,content:n}=m("Color Palette Showcase","6종 프리셋 팔레트를 동일한 Line 차트 데이터로 비교합니다."),t=Object.keys(H);for(const o of t)n.appendChild(c("line",u,{grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!1},colorPalette:o,line:{curve:"smooth",dots:!0,width:2}},{width:360,height:240,labelText:o}));return n.style.display="grid",n.style.gridTemplateColumns="repeat(3, 1fr)",n.style.gap="16px",e.appendChild(a),e}},S={name:"프레임 테마 쇼케이스",parameters:{controls:{disable:!0},syncTheme:!1},render:()=>{const e=document.createElement("div");e.style.padding="16px";const{wrapper:a,content:n}=m("Frame Theme Showcase","Light, Dark, Minimal 프레임 테마를 동일한 멀티 시리즈 Line 차트로 비교합니다."),t={light:{bg:"#ffffff",text:"#0a0a0a",border:"#e2e8f0"},dark:{bg:"#0a0a0a",text:"#ffffff",border:"#333333"},minimal:{bg:"#ffffff",text:"#0a0a0a",border:"#e2e8f0"}},o=[{name:"Light",theme:"light"},{name:"Dark",theme:"dark"},{name:"Minimal",theme:"minimal"}];for(const r of o){const s=t[r.theme],i=c("line",u,{grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!0},line:{curve:"smooth",dots:!0,width:2},frameTheme:r.theme},{width:400,height:280,labelText:r.name,plugins:["legend","tooltip"]});i.style.backgroundColor=s.bg,i.style.borderRadius="8px",i.style.padding="12px";const l=i.querySelector("div");l&&(l.style.color=s.text);const p=i.querySelectorAll("div")[1];p&&(p.style.borderColor=s.border),n.appendChild(i)}return e.appendChild(a),e}},T={name:"커브 타입 비교",parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.padding="16px";const a=[{label:"Linear",curve:"linear"},{label:"Smooth",curve:"smooth"},{label:"Step",curve:"step"}],{wrapper:n,content:t}=m("Line Charts - Curve Types","Linear, Smooth, Step 커브를 Line 차트로 비교합니다.");for(const s of a)t.appendChild(c("line",u,{grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!1},line:{curve:s.curve,dots:!0,width:2}},{width:360,height:240,labelText:s.label}));const{wrapper:o,content:r}=m("Area Charts - Curve Types","Linear, Smooth, Step 커브를 Area 차트로 비교합니다.");for(const s of a)r.appendChild(c("area",u,{grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!1},line:{curve:s.curve},area:{opacity:.3}},{width:360,height:240,labelText:s.label}));return e.appendChild(n),e.appendChild(o),e}},E={name:"범례 위치 쇼케이스",parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.padding="16px";const{wrapper:a,content:n}=m("Legend Position Showcase","동일한 Bar 차트에서 범례 위치 4종(top, bottom, left, right)을 비교합니다."),t=[{label:"Top",position:"top"},{label:"Bottom",position:"bottom"},{label:"Left",position:"left"},{label:"Right",position:"right"}];for(const o of t)n.appendChild(c("bar",W,{grid:{show:!0},legend:{show:!0,position:o.position},tooltip:{show:!1},bar:{radius:2}},{width:400,height:280,labelText:`Legend: ${o.label}`}));return n.style.display="grid",n.style.gridTemplateColumns="repeat(2, 1fr)",n.style.gap="16px",e.appendChild(a),e}},A={name:"인터랙션 모드 쇼케이스",parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.padding="16px";const{wrapper:a,content:n}=m("Interaction Showcase","4종 인터랙션 모드를 비교합니다. 각 차트 위에 마우스를 올려 동작을 확인하세요."),t=[{label:"Tooltip (nearest, highlight dots)",options:{tooltip:{show:!0,shared:!1,tracking:"nearest",highlightDots:!0},crosshair:{show:!1}},plugins:["legend","tooltip"]},{label:"Shared Tooltip",options:{tooltip:{show:!0,shared:!0,tracking:"nearest"},crosshair:{show:!1}},plugins:["legend","tooltip"]},{label:"Crosshair (X direction)",options:{tooltip:{show:!1},crosshair:{show:!0,type:"x",tracking:"pointer"}},plugins:["legend","crosshair"]},{label:"Combined (tooltip + crosshair + highlight)",options:{tooltip:{show:!0,shared:!0,tracking:"nearest",highlightDots:!0,highlightSeries:!0},crosshair:{show:!0,type:"x",tracking:"nearest"}},plugins:["legend","tooltip","crosshair"]}];for(const o of t)n.appendChild(c("line",u,{grid:{show:!0},legend:{show:!0,position:"top"},line:{curve:"smooth",dots:!0,width:2},...o.options},{width:400,height:280,labelText:o.label,plugins:o.plugins}));return n.style.display="grid",n.style.gridTemplateColumns="repeat(2, 1fr)",n.style.gap="16px",e.appendChild(a),e}},v={name:"어노테이션 쇼케이스",parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.padding="16px";const{wrapper:a,content:n}=m("Annotation Showcase","Reference Line, Band, Text Label, Arrow 등 복합 어노테이션을 단일 차트에 표시합니다.");let t=-1/0,o=1;for(const s of R.series)for(const i of s.data)i.y>t&&(t=i.y,o=i.x);const r=[{id:"ref-line-target",type:"referenceLine",axis:"y",value:200,color:"#ef4444",dashStyle:[6,4],lineWidth:1.5,label:"Target: 200"},{id:"band-highlight",type:"band",axis:"x",from:2,to:4,fillColor:"rgba(59, 130, 246, 0.08)",color:"#3b82f6",label:"Focus Period"},{id:"text-note",type:"text",x:5,y:130,text:"Steady growth",fontSize:11,fontWeight:"bold",color:"#16a34a"},{id:"arrow-max",type:"arrow",fromX:5,fromY:t+20,toX:o,toY:t,color:"#f59e0b"}];return n.appendChild(c("line",R,{grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!0},line:{curve:"smooth",dots:!0,width:2},annotations:r},{width:800,height:400,labelText:"Multi-Annotation Example",plugins:["legend","tooltip","annotation"]})),n.style.cssText="display:flex;flex-wrap:wrap;gap:16px;",e.appendChild(a),e}},L={name:"데이터 라벨 위치 쇼케이스",parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.padding="16px";const{wrapper:a,content:n}=m("Data Label Position Showcase","동일한 Bar 차트에서 데이터 라벨 위치 3종(top, inside, bottom)을 비교합니다."),t=[{label:"Top",position:"top"},{label:"Inside",position:"inside"},{label:"Bottom",position:"bottom"}];for(const o of t)n.appendChild(c("bar",W,{grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!1},bar:{radius:2},dataLabel:{show:!0,position:o.position,background:!0}},{width:360,height:280,labelText:`Data Label: ${o.label}`}));return e.appendChild(a),e}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => renderComparison(args)
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...comparisonDefaults,
    dataset: 'category-multi',
    showLine: false,
    showScatter: false,
    showTimeseries: false,
    stacked: true
  },
  render: args => renderComparison(args, 'bar')
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...comparisonDefaults,
    dataset: 'date-monthly',
    showLine: true,
    showBar: false,
    showArea: true,
    showScatter: false,
    showTimeseries: true
  },
  render: args => renderComparison(args, 'timeseries')
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.padding = '16px';
    const baseOptions: ChartOptions = {
      grid: {
        show: true
      },
      legend: {
        show: true,
        position: 'top'
      },
      tooltip: {
        show: false
      }
    };
    const sections: {
      title: string;
      desc: string;
      data: ChartData;
      types: ChartType[];
    }[] = [{
      title: 'Empty Series Array',
      desc: 'data.series = []',
      data: EMPTY_DATA,
      types: ALL_CHART_TYPES
    }, {
      title: 'Empty Data Points',
      desc: 'series[0].data = []',
      data: EMPTY_SERIES_DATA,
      types: ALL_CHART_TYPES
    }, {
      title: 'Single Point',
      desc: '1 data point only',
      data: SINGLE_POINT,
      types: ['line', 'bar', 'area', 'scatter']
    }, {
      title: 'Mismatched Series Length',
      desc: 'Series A: 6 points, Series B: 3 points (sparse X)',
      data: MISMATCHED_SERIES_LENGTH,
      types: ['line', 'bar', 'area', 'scatter']
    }, {
      title: 'Duplicate X Values',
      desc: 'Same X appears multiple times in one series',
      data: DUPLICATE_X_VALUES,
      types: ['line', 'bar', 'area', 'scatter']
    }, {
      title: 'All Same Y (Flat)',
      desc: 'All Y values identical — range = 0',
      data: ALL_SAME_Y,
      types: ['line', 'bar', 'area', 'scatter']
    }];
    for (const s of sections) {
      const section = document.createElement('div');
      section.style.marginBottom = '32px';
      const header = document.createElement('div');
      header.style.marginBottom = '12px';
      const title = document.createElement('div');
      title.style.cssText = 'font-size:16px;font-weight:700;color:#0f172a;';
      title.textContent = s.title;
      header.appendChild(title);
      const desc = document.createElement('div');
      desc.style.cssText = 'font-size:12px;color:#64748b;margin-top:2px;';
      desc.textContent = s.desc;
      header.appendChild(desc);
      section.appendChild(header);
      const grid = document.createElement('div');
      grid.style.cssText = 'display:flex;flex-wrap:wrap;gap:16px;';
      for (const type of s.types) {
        grid.appendChild(createChartCard(type, s.data, baseOptions));
      }
      section.appendChild(grid);
      section.appendChild(createDataViewer(s.data));
      wrapper.appendChild(section);
    }
    return wrapper;
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '컬러 팔레트 쇼케이스',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const page = document.createElement('div');
    page.style.padding = '16px';
    const {
      wrapper,
      content
    } = createSection('Color Palette Showcase', '6종 프리셋 팔레트를 동일한 Line 차트 데이터로 비교합니다.');
    const paletteNames = Object.keys(PRESET_PALETTES);
    for (const paletteName of paletteNames) {
      content.appendChild(createChartCard('line', SHOWCASE_DATA, {
        grid: {
          show: true
        },
        legend: {
          show: true,
          position: 'top'
        },
        tooltip: {
          show: false
        },
        colorPalette: paletteName,
        line: {
          curve: 'smooth',
          dots: true,
          width: 2
        }
      }, {
        width: 360,
        height: 240,
        labelText: paletteName
      }));
    }
    content.style.display = 'grid';
    content.style.gridTemplateColumns = 'repeat(3, 1fr)';
    content.style.gap = '16px';
    page.appendChild(wrapper);
    return page;
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '프레임 테마 쇼케이스',
  parameters: {
    controls: {
      disable: true
    },
    syncTheme: false
  },
  render: () => {
    const page = document.createElement('div');
    page.style.padding = '16px';
    const {
      wrapper,
      content
    } = createSection('Frame Theme Showcase', 'Light, Dark, Minimal 프레임 테마를 동일한 멀티 시리즈 Line 차트로 비교합니다.');
    const themeBg: Record<string, {
      bg: string;
      text: string;
      border: string;
    }> = {
      light: {
        bg: '#ffffff',
        text: '#0a0a0a',
        border: '#e2e8f0'
      },
      dark: {
        bg: '#0a0a0a',
        text: '#ffffff',
        border: '#333333'
      },
      minimal: {
        bg: '#ffffff',
        text: '#0a0a0a',
        border: '#e2e8f0'
      }
    };
    const themes: Array<{
      name: string;
      theme: string;
    }> = [{
      name: 'Light',
      theme: 'light'
    }, {
      name: 'Dark',
      theme: 'dark'
    }, {
      name: 'Minimal',
      theme: 'minimal'
    }];
    for (const t of themes) {
      const colors = themeBg[t.theme];
      const card = createChartCard('line', SHOWCASE_DATA, {
        grid: {
          show: true
        },
        legend: {
          show: true,
          position: 'top'
        },
        tooltip: {
          show: true
        },
        line: {
          curve: 'smooth',
          dots: true,
          width: 2
        },
        frameTheme: t.theme
      }, {
        width: 400,
        height: 280,
        labelText: t.name,
        plugins: ['legend', 'tooltip']
      });
      card.style.backgroundColor = colors.bg;
      card.style.borderRadius = '8px';
      card.style.padding = '12px';
      const label = card.querySelector('div') as HTMLElement;
      if (label) label.style.color = colors.text;
      const container = card.querySelectorAll('div')[1] as HTMLElement;
      if (container) container.style.borderColor = colors.border;
      content.appendChild(card);
    }
    page.appendChild(wrapper);
    return page;
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '커브 타입 비교',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const page = document.createElement('div');
    page.style.padding = '16px';
    const curves: Array<{
      label: string;
      curve: 'linear' | 'smooth' | 'step';
    }> = [{
      label: 'Linear',
      curve: 'linear'
    }, {
      label: 'Smooth',
      curve: 'smooth'
    }, {
      label: 'Step',
      curve: 'step'
    }];

    // Row 1: Line charts
    const {
      wrapper: lineWrapper,
      content: lineContent
    } = createSection('Line Charts - Curve Types', 'Linear, Smooth, Step 커브를 Line 차트로 비교합니다.');
    for (const c of curves) {
      lineContent.appendChild(createChartCard('line', SHOWCASE_DATA, {
        grid: {
          show: true
        },
        legend: {
          show: true,
          position: 'top'
        },
        tooltip: {
          show: false
        },
        line: {
          curve: c.curve,
          dots: true,
          width: 2
        }
      }, {
        width: 360,
        height: 240,
        labelText: c.label
      }));
    }

    // Row 2: Area charts
    const {
      wrapper: areaWrapper,
      content: areaContent
    } = createSection('Area Charts - Curve Types', 'Linear, Smooth, Step 커브를 Area 차트로 비교합니다.');
    for (const c of curves) {
      areaContent.appendChild(createChartCard('area', SHOWCASE_DATA, {
        grid: {
          show: true
        },
        legend: {
          show: true,
          position: 'top'
        },
        tooltip: {
          show: false
        },
        line: {
          curve: c.curve
        },
        area: {
          opacity: 0.3
        }
      }, {
        width: 360,
        height: 240,
        labelText: c.label
      }));
    }
    page.appendChild(lineWrapper);
    page.appendChild(areaWrapper);
    return page;
  }
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '범례 위치 쇼케이스',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const page = document.createElement('div');
    page.style.padding = '16px';
    const {
      wrapper,
      content
    } = createSection('Legend Position Showcase', '동일한 Bar 차트에서 범례 위치 4종(top, bottom, left, right)을 비교합니다.');
    const positions: Array<{
      label: string;
      position: 'top' | 'bottom' | 'left' | 'right';
    }> = [{
      label: 'Top',
      position: 'top'
    }, {
      label: 'Bottom',
      position: 'bottom'
    }, {
      label: 'Left',
      position: 'left'
    }, {
      label: 'Right',
      position: 'right'
    }];
    for (const p of positions) {
      content.appendChild(createChartCard('bar', SHOWCASE_CATEGORY_DATA, {
        grid: {
          show: true
        },
        legend: {
          show: true,
          position: p.position
        },
        tooltip: {
          show: false
        },
        bar: {
          radius: 2
        }
      }, {
        width: 400,
        height: 280,
        labelText: \`Legend: \${p.label}\`
      }));
    }
    content.style.display = 'grid';
    content.style.gridTemplateColumns = 'repeat(2, 1fr)';
    content.style.gap = '16px';
    page.appendChild(wrapper);
    return page;
  }
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '인터랙션 모드 쇼케이스',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const page = document.createElement('div');
    page.style.padding = '16px';
    const {
      wrapper,
      content
    } = createSection('Interaction Showcase', '4종 인터랙션 모드를 비교합니다. 각 차트 위에 마우스를 올려 동작을 확인하세요.');
    const interactionModes: Array<{
      label: string;
      options: ChartOptions;
      plugins: Array<'legend' | 'tooltip' | 'crosshair'>;
    }> = [{
      label: 'Tooltip (nearest, highlight dots)',
      options: {
        tooltip: {
          show: true,
          shared: false,
          tracking: 'nearest',
          highlightDots: true
        },
        crosshair: {
          show: false
        }
      },
      plugins: ['legend', 'tooltip']
    }, {
      label: 'Shared Tooltip',
      options: {
        tooltip: {
          show: true,
          shared: true,
          tracking: 'nearest'
        },
        crosshair: {
          show: false
        }
      },
      plugins: ['legend', 'tooltip']
    }, {
      label: 'Crosshair (X direction)',
      options: {
        tooltip: {
          show: false
        },
        crosshair: {
          show: true,
          type: 'x',
          tracking: 'pointer'
        }
      },
      plugins: ['legend', 'crosshair']
    }, {
      label: 'Combined (tooltip + crosshair + highlight)',
      options: {
        tooltip: {
          show: true,
          shared: true,
          tracking: 'nearest',
          highlightDots: true,
          highlightSeries: true
        },
        crosshair: {
          show: true,
          type: 'x',
          tracking: 'nearest'
        }
      },
      plugins: ['legend', 'tooltip', 'crosshair']
    }];
    for (const mode of interactionModes) {
      content.appendChild(createChartCard('line', SHOWCASE_DATA, {
        grid: {
          show: true
        },
        legend: {
          show: true,
          position: 'top'
        },
        line: {
          curve: 'smooth',
          dots: true,
          width: 2
        },
        ...mode.options
      }, {
        width: 400,
        height: 280,
        labelText: mode.label,
        plugins: mode.plugins
      }));
    }
    content.style.display = 'grid';
    content.style.gridTemplateColumns = 'repeat(2, 1fr)';
    content.style.gap = '16px';
    page.appendChild(wrapper);
    return page;
  }
}`,...A.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '어노테이션 쇼케이스',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const page = document.createElement('div');
    page.style.padding = '16px';
    const {
      wrapper,
      content
    } = createSection('Annotation Showcase', 'Reference Line, Band, Text Label, Arrow 등 복합 어노테이션을 단일 차트에 표시합니다.');

    // Find max Y value in the data to point an arrow at it
    let maxY = -Infinity;
    let maxX: number | string = 1;
    for (const series of NUMERIC_BASIC.series) {
      for (const pt of series.data) {
        if (pt.y > maxY) {
          maxY = pt.y;
          maxX = pt.x;
        }
      }
    }
    const annotations: AnnotationItem[] = [{
      id: 'ref-line-target',
      type: 'referenceLine',
      axis: 'y',
      value: 200,
      color: '#ef4444',
      dashStyle: [6, 4],
      lineWidth: 1.5,
      label: 'Target: 200'
    }, {
      id: 'band-highlight',
      type: 'band',
      axis: 'x',
      from: 2,
      to: 4,
      fillColor: 'rgba(59, 130, 246, 0.08)',
      color: '#3b82f6',
      label: 'Focus Period'
    }, {
      id: 'text-note',
      type: 'text',
      x: 5,
      y: 130,
      text: 'Steady growth',
      fontSize: 11,
      fontWeight: 'bold',
      color: '#16a34a'
    }, {
      id: 'arrow-max',
      type: 'arrow',
      fromX: 5,
      fromY: maxY + 20,
      toX: maxX,
      toY: maxY,
      color: '#f59e0b'
    }];
    content.appendChild(createChartCard('line', NUMERIC_BASIC, {
      grid: {
        show: true
      },
      legend: {
        show: true,
        position: 'top'
      },
      tooltip: {
        show: true
      },
      line: {
        curve: 'smooth',
        dots: true,
        width: 2
      },
      annotations
    }, {
      width: 800,
      height: 400,
      labelText: 'Multi-Annotation Example',
      plugins: ['legend', 'tooltip', 'annotation']
    }));
    content.style.cssText = 'display:flex;flex-wrap:wrap;gap:16px;';
    page.appendChild(wrapper);
    return page;
  }
}`,...v.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '데이터 라벨 위치 쇼케이스',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const page = document.createElement('div');
    page.style.padding = '16px';
    const {
      wrapper,
      content
    } = createSection('Data Label Position Showcase', '동일한 Bar 차트에서 데이터 라벨 위치 3종(top, inside, bottom)을 비교합니다.');
    const positions: Array<{
      label: string;
      position: 'top' | 'inside' | 'bottom';
    }> = [{
      label: 'Top',
      position: 'top'
    }, {
      label: 'Inside',
      position: 'inside'
    }, {
      label: 'Bottom',
      position: 'bottom'
    }];
    for (const p of positions) {
      content.appendChild(createChartCard('bar', SHOWCASE_CATEGORY_DATA, {
        grid: {
          show: true
        },
        legend: {
          show: true,
          position: 'top'
        },
        tooltip: {
          show: false
        },
        bar: {
          radius: 2
        },
        dataLabel: {
          show: true,
          position: p.position,
          background: true
        }
      }, {
        width: 360,
        height: 280,
        labelText: \`Data Label: \${p.label}\`
      }));
    }
    page.appendChild(wrapper);
    return page;
  }
}`,...L.parameters?.docs?.source}}};const ce=["Playground","StackedComparison","DateComparison","EdgeCases","ColorPaletteShowcase","FrameThemeShowcase","CurveComparison","LegendPositionShowcase","InteractionShowcase","AnnotationShowcase","DataLabelShowcase"];export{v as AnnotationShowcase,x as ColorPaletteShowcase,T as CurveComparison,L as DataLabelShowcase,y as DateComparison,C as EdgeCases,S as FrameThemeShowcase,A as InteractionShowcase,E as LegendPositionShowcase,w as Playground,b as StackedComparison,ce as __namedExportsOrder,de as default};
