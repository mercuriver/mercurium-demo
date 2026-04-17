import{P as M,C as X,A as _}from"./chart-engine-BdkGv5ec.js";import{L as I,T as k}from"./tooltip-plugin-DmLF6MzB.js";import{C as B}from"./crosshair-plugin-DmSVPU7d.js";import{d as O,E as z,e as G,S as F,M as U,f as $,g as V,h as j,i as q,P as J,C as K,r as Q,j as L}from"./mock-data-DLH8EjXc.js";const R=["line","bar","area","scatter","timeseries"],Z={line:{line:{curve:"smooth",dots:!0,width:2}},bar:{bar:{radius:2}},area:{area:{opacity:.3},line:{curve:"smooth"}},scatter:{scatter:{dotSize:4}},timeseries:{line:{curve:"smooth",dots:!0,width:2}}};function p(e,o,a,t){const n=t?.height??280,r=document.createElement("div");r.style.cssText="display:flex;flex-direction:column;gap:4px;";const s=document.createElement("div");s.style.cssText="font-size:13px;font-weight:600;color:#334155;",s.textContent=t?.labelText??e.charAt(0).toUpperCase()+e.slice(1),r.appendChild(s);const i=document.createElement("div");i.style.cssText=`width:100%;height:${n}px;border:1px solid #e2e8f0;border-radius:6px;overflow:hidden;`,r.appendChild(i);const l={responsive:!0,...Z[e],...a},c=new X(i,e,l),d=t?.plugins;return d?(d.includes("legend")&&c.installPlugin(new I),d.includes("tooltip")&&c.installPlugin(new k),d.includes("crosshair")&&c.installPlugin(new B),d.includes("annotation")&&c.installPlugin(new _)):(l.legend?.show!==!1&&c.installPlugin(new I),l.tooltip?.show!==!1&&c.installPlugin(new k),l.crosshair?.show&&c.installPlugin(new B),l.annotations&&l.annotations.length>0&&c.installPlugin(new _)),c.setData(o),r}function ee(e){return e instanceof Date?e.toISOString().slice(0,10):String(e)}function Y(e){const o=document.createElement("div");o.style.cssText="margin-top:8px;max-width:880px;";const a=document.createElement("button");a.textContent="Show Data",a.style.cssText="font-size:12px;color:#475569;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:4px;padding:4px 10px;cursor:pointer;",o.appendChild(a);const t=document.createElement("div");t.style.display="none",t.style.marginTop="6px";const n=document.createElement("div");n.style.cssText="font-size:11px;color:#64748b;margin-bottom:6px;",n.textContent=`xAxisType: "${e.xAxisType}" | series: ${e.series.length}`,t.appendChild(n);for(const r of e.series){const s=document.createElement("div");s.style.marginBottom="8px";const i=document.createElement("div");i.style.cssText="font-size:11px;font-weight:600;color:#334155;margin-bottom:2px;",i.textContent=`${r.label??r.key} (${r.data.length} points)`,s.appendChild(i);const l=document.createElement("table");l.style.cssText="border-collapse:collapse;font-size:11px;font-family:monospace;";const c=document.createElement("thead"),d=document.createElement("tr");for(const g of["x","y"]){const m=document.createElement("th");m.textContent=g,m.style.cssText="padding:2px 12px 2px 0;text-align:left;color:#64748b;border-bottom:1px solid #e2e8f0;",d.appendChild(m)}c.appendChild(d),l.appendChild(c);const D=document.createElement("tbody");for(const g of r.data){const m=document.createElement("tr");for(const W of[ee(g.x),String(g.y)]){const v=document.createElement("td");v.textContent=W,v.style.cssText="padding:1px 12px 1px 0;color:#334155;",m.appendChild(v)}D.appendChild(m)}l.appendChild(D),s.appendChild(l),t.appendChild(s)}return o.appendChild(t),a.addEventListener("click",()=>{const r=t.style.display==="none";t.style.display=r?"block":"none",a.textContent=r?"Hide Data":"Show Data"}),o}function te(e,o,a){const t=document.createElement("div");t.style.padding="16px";const n=document.createElement("div");n.className="chart-grid";for(const r of o)n.appendChild(p(r,e,a));return t.appendChild(n),t.appendChild(Y(e)),t}function ne(e){return{grid:{show:e.showGrid},legend:{show:e.showLegend,position:e.legendPosition},tooltip:{show:e.showTooltip,shared:e.tooltipShared},crosshair:e.showCrosshair?{show:!0,type:"x"}:{show:!1},colorPalette:e.colorPalette,...e.stacked?{bar:{stacked:!0,radius:2},area:{stacked:!0,opacity:.4}}:{}}}function oe(e){const o=[];return e.showLine&&o.push("line"),e.showBar&&o.push("bar"),e.showArea&&o.push("area"),e.showScatter&&o.push("scatter"),e.showTimeseries&&o.push("timeseries"),o}const ae={dataset:{control:"select",options:q(L),labels:j(L),description:"데이터셋 선택",table:{category:"Data"}},showLine:{control:"boolean",description:"Line 차트 표시",table:{category:"Chart Types"}},showBar:{control:"boolean",description:"Bar 차트 표시",table:{category:"Chart Types"}},showArea:{control:"boolean",description:"Area 차트 표시",table:{category:"Chart Types"}},showScatter:{control:"boolean",description:"Scatter 차트 표시",table:{category:"Chart Types"}},showTimeseries:{control:"boolean",description:"Timeseries 차트 표시",table:{category:"Chart Types"}},showGrid:{control:"boolean",description:"그리드 표시",table:{category:"Common"}},showLegend:{control:"boolean",description:"범례 표시",table:{category:"Common"}},legendPosition:{control:"select",options:["top","bottom","left","right","inside-top-left","inside-top-right","inside-bottom-left","inside-bottom-right"],description:"범례 위치",table:{category:"Common"}},showTooltip:{control:"boolean",description:"툴팁 표시",table:{category:"Interaction"}},tooltipShared:{control:"boolean",description:"툴팁 공유 모드",table:{category:"Interaction"}},showCrosshair:{control:"boolean",description:"크로스헤어 표시",table:{category:"Interaction"}},colorPalette:{control:"select",options:Object.keys(M),description:"컬러 팔레트",table:{category:"Common"}},stacked:{control:"boolean",description:"스택 모드 (Bar, Area)",table:{category:"Common"}}},P={dataset:"numeric-basic",showLine:!0,showBar:!0,showArea:!0,showScatter:!0,showTimeseries:!1,showGrid:!0,showLegend:!0,legendPosition:"top",showTooltip:!0,tooltipShared:!1,showCrosshair:!1,colorPalette:"default",stacked:!1},ce={title:"Charts/Comparison",tags:["!autodocs"],args:P,argTypes:ae};function N(e,o="line"){const a=Q(L,e.dataset),t=oe(e);return t.length===0&&t.push(o),te(a,t,ne(e))}const f={args:{...P,dataset:"category-multi",showLine:!1,showScatter:!1,showTimeseries:!1,stacked:!0},render:e=>N(e,"bar")},w={args:{...P,dataset:"date-monthly",showLine:!0,showBar:!1,showArea:!0,showScatter:!1,showTimeseries:!0},render:e=>N(e,"timeseries")},b={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.padding="16px";const o={grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!1}},a=[{title:"Empty Series Array",desc:"data.series = []",data:z,types:R},{title:"Empty Data Points",desc:"series[0].data = []",data:G,types:R},{title:"Single Point",desc:"1 data point only",data:F,types:["line","bar","area","scatter"]},{title:"Mismatched Series Length",desc:"Series A: 6 points, Series B: 3 points (sparse X)",data:U,types:["line","bar","area","scatter"]},{title:"Duplicate X Values",desc:"Same X appears multiple times in one series",data:$,types:["line","bar","area","scatter"]},{title:"All Same Y (Flat)",desc:"All Y values identical — range = 0",data:V,types:["line","bar","area","scatter"]}];for(const t of a){const n=document.createElement("div");n.style.marginBottom="32px";const r=document.createElement("div");r.style.marginBottom="12px";const s=document.createElement("div");s.style.cssText="font-size:16px;font-weight:700;color:#0f172a;",s.textContent=t.title,r.appendChild(s);const i=document.createElement("div");i.style.cssText="font-size:12px;color:#64748b;margin-top:2px;",i.textContent=t.desc,r.appendChild(i),n.appendChild(r);const l=document.createElement("div");l.className="chart-grid";for(const c of t.types)l.appendChild(p(c,t.data,o));n.appendChild(l),n.appendChild(Y(t.data)),e.appendChild(n)}return e}};function h(e,o){const a=document.createElement("div");a.style.marginBottom="32px";const t=document.createElement("div");t.style.marginBottom="12px";const n=document.createElement("div");n.style.cssText="font-size:16px;font-weight:700;color:#0f172a;",n.textContent=e,t.appendChild(n);const r=document.createElement("div");r.style.cssText="font-size:12px;color:#64748b;margin-top:2px;",r.textContent=o,t.appendChild(r),a.appendChild(t);const s=document.createElement("div");return s.className="chart-grid",a.appendChild(s),{wrapper:a,content:s}}const u=J,H=K,C={name:"컬러 팔레트 쇼케이스",parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.padding="16px";const{wrapper:o,content:a}=h("Color Palette Showcase","6종 프리셋 팔레트를 동일한 Line 차트 데이터로 비교합니다."),t=Object.keys(M);for(const n of t)a.appendChild(p("line",u,{grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!1},colorPalette:n,line:{curve:"smooth",dots:!0,width:2}},{height:240,labelText:n}));return a.className="chart-grid",e.appendChild(o),e}},x={name:"프레임 테마 쇼케이스",parameters:{controls:{disable:!0},syncTheme:!1},render:()=>{const e=document.createElement("div");e.style.padding="16px";const{wrapper:o,content:a}=h("Frame Theme Showcase","Light, Dark, Minimal 프레임 테마를 동일한 멀티 시리즈 Line 차트로 비교합니다."),t={light:{bg:"#ffffff",text:"#0a0a0a",border:"#e2e8f0"},dark:{bg:"#0a0a0a",text:"#ffffff",border:"#333333"},minimal:{bg:"#ffffff",text:"#0a0a0a",border:"#e2e8f0"}},n=[{name:"Light",theme:"light"},{name:"Dark",theme:"dark"},{name:"Minimal",theme:"minimal"}];for(const r of n){const s=t[r.theme],i=p("line",u,{grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!0},line:{curve:"smooth",dots:!0,width:2},frameTheme:r.theme},{height:280,labelText:r.name,plugins:["legend","tooltip"]});i.style.backgroundColor=s.bg,i.style.borderRadius="8px",i.style.padding="12px";const l=i.querySelector("div");l&&(l.style.color=s.text);const c=i.querySelectorAll("div")[1];c&&(c.style.borderColor=s.border),a.appendChild(i)}return e.appendChild(o),e}},y={name:"커브 타입 비교",parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.padding="16px";const o=[{label:"Linear",curve:"linear"},{label:"Smooth",curve:"smooth"},{label:"Step",curve:"step"}],{wrapper:a,content:t}=h("Line Charts - Curve Types","Linear, Smooth, Step 커브를 Line 차트로 비교합니다.");for(const s of o)t.appendChild(p("line",u,{grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!1},line:{curve:s.curve,dots:!0,width:2}},{height:240,labelText:s.label}));const{wrapper:n,content:r}=h("Area Charts - Curve Types","Linear, Smooth, Step 커브를 Area 차트로 비교합니다.");for(const s of o)r.appendChild(p("area",u,{grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!1},line:{curve:s.curve},area:{opacity:.3}},{height:240,labelText:s.label}));return e.appendChild(a),e.appendChild(n),e}},S={name:"범례 위치 쇼케이스",parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.padding="16px";const{wrapper:o,content:a}=h("Legend Position Showcase","동일한 Bar 차트에서 범례 위치 4종(top, bottom, left, right)을 비교합니다."),t=[{label:"Top",position:"top"},{label:"Bottom",position:"bottom"},{label:"Left",position:"left"},{label:"Right",position:"right"}];for(const n of t)a.appendChild(p("bar",H,{grid:{show:!0},legend:{show:!0,position:n.position},tooltip:{show:!1},bar:{radius:2}},{height:280,labelText:`Legend: ${n.label}`}));return a.className="chart-grid",e.appendChild(o),e}},T={name:"인터랙션 모드 쇼케이스",parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.padding="16px";const{wrapper:o,content:a}=h("Interaction Showcase","4종 인터랙션 모드를 비교합니다. 각 차트 위에 마우스를 올려 동작을 확인하세요."),t=[{label:"Tooltip (nearest, highlight dots)",options:{tooltip:{show:!0,shared:!1,highlightDots:!0},crosshair:{show:!1}},plugins:["legend","tooltip"]},{label:"Shared Tooltip",options:{tooltip:{show:!0,shared:!0,tracking:"nearest"},crosshair:{show:!1}},plugins:["legend","tooltip"]},{label:"Crosshair (X direction)",options:{tooltip:{show:!1},crosshair:{show:!0,type:"x",tracking:"pointer"}},plugins:["legend","crosshair"]},{label:"Combined (tooltip + crosshair + highlight)",options:{tooltip:{show:!0,shared:!0,highlightDots:!0,highlightSeries:!0},crosshair:{show:!0,type:"x",tracking:"nearest"}},plugins:["legend","tooltip","crosshair"]}];for(const n of t)a.appendChild(p("line",u,{grid:{show:!0},legend:{show:!0,position:"top"},line:{curve:"smooth",dots:!0,width:2},...n.options},{height:280,labelText:n.label,plugins:n.plugins}));return a.className="chart-grid",e.appendChild(o),e}},E={name:"어노테이션 쇼케이스",parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.padding="16px";const{wrapper:o,content:a}=h("Annotation Showcase","Reference Line, Band, Text Label, Arrow 등 복합 어노테이션을 단일 차트에 표시합니다.");let t=-1/0,n=1;for(const s of O.series)for(const i of s.data)i.y>t&&(t=i.y,n=i.x);const r=[{id:"ref-line-target",type:"referenceLine",axis:"y",value:200,color:"#ef4444",dashStyle:[6,4],lineWidth:1.5,label:"Target: 200"},{id:"band-highlight",type:"band",axis:"x",from:2,to:4,fillColor:"rgba(59, 130, 246, 0.08)",color:"#3b82f6",label:"Focus Period"},{id:"text-note",type:"text",x:5,y:130,text:"Steady growth",fontSize:11,fontWeight:"bold",color:"#16a34a"},{id:"arrow-max",type:"arrow",fromX:5,fromY:t+20,toX:n,toY:t,color:"#f59e0b"}];return a.appendChild(p("line",O,{grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!0},line:{curve:"smooth",dots:!0,width:2},annotations:r},{height:400,labelText:"Multi-Annotation Example",plugins:["legend","tooltip","annotation"]})),a.style.cssText="display:flex;flex-wrap:wrap;gap:16px;",e.appendChild(o),e}},A={name:"데이터 라벨 위치 쇼케이스",parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.padding="16px";const{wrapper:o,content:a}=h("Data Label Position Showcase","동일한 Bar 차트에서 데이터 라벨 위치 3종(top, inside, bottom)을 비교합니다."),t=[{label:"Top",position:"top"},{label:"Inside",position:"inside"},{label:"Bottom",position:"bottom"}];for(const n of t)a.appendChild(p("bar",H,{grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!1},bar:{radius:2},dataLabel:{show:!0,position:n.position,background:!0}},{height:280,labelText:`Data Label: ${n.label}`}));return e.appendChild(o),e}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...comparisonDefaults,
    dataset: 'category-multi',
    showLine: false,
    showScatter: false,
    showTimeseries: false,
    stacked: true
  },
  render: args => renderComparison(args, 'bar')
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
      grid.className = 'chart-grid';
      for (const type of s.types) {
        grid.appendChild(createChartCard(type, s.data, baseOptions));
      }
      section.appendChild(grid);
      section.appendChild(createDataViewer(s.data));
      wrapper.appendChild(section);
    }
    return wrapper;
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
    content.className = 'chart-grid';
    page.appendChild(wrapper);
    return page;
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
    content.className = 'chart-grid';
    page.appendChild(wrapper);
    return page;
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
    content.className = 'chart-grid';
    page.appendChild(wrapper);
    return page;
  }
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};const pe=["StackedComparison","DateComparison","EdgeCases","ColorPaletteShowcase","FrameThemeShowcase","CurveComparison","LegendPositionShowcase","InteractionShowcase","AnnotationShowcase","DataLabelShowcase"];export{E as AnnotationShowcase,C as ColorPaletteShowcase,y as CurveComparison,A as DataLabelShowcase,w as DateComparison,b as EdgeCases,x as FrameThemeShowcase,T as InteractionShowcase,S as LegendPositionShowcase,f as StackedComparison,pe as __namedExportsOrder,ce as default};
