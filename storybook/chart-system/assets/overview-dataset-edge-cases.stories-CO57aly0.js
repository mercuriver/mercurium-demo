import{E as p,p as m,S as E,M as h,q as y,t as u,r as g}from"./story-utils-DdhabU4Y.js";const S={title:"Overview/Dataset Edge Cases",tags:["!autodocs"]},i=["line","bar","area","scatter","timeseries"],n=["line","bar","area","scatter"],x=[{title:"Empty Series Array",desc:"data.series = []",data:p,types:i},{title:"Empty Data Points",desc:"series[0].data = []",data:m,types:i},{title:"Single Point",desc:"1 data point only",data:E,types:n},{title:"Mismatched Series Length",desc:"Series A: 6 pts, Series B: 3 pts",data:h,types:n},{title:"Duplicate X Values",desc:"Same X appears multiple times",data:y,types:n},{title:"All Same Y (Flat)",desc:"All Y values identical -- range = 0",data:u,types:n}],t={parameters:{controls:{disable:!0}},render:l=>{const s=document.createElement("div");s.style.cssText="display:flex;flex-direction:column;gap:32px;padding:16px;";for(const e of x){const a=document.createElement("div");a.style.marginBottom="8px";const o=document.createElement("div");o.style.cssText="font-size:15px;font-weight:700;color:var(--story-title-color, #0f172a);",o.textContent=e.title;const r=document.createElement("div");r.style.cssText="font-size:12px;color:var(--story-desc-color, #64748b);margin-top:2px;",r.textContent=e.desc,a.appendChild(o),a.appendChild(r),s.appendChild(a);const c=e.types.map(d=>({type:d,data:e.data,options:{frameTheme:l.frameTheme,grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!1}},label:d}));s.appendChild(g(c,{columns:e.types.length>=5?3:2,cardHeight:220,hideDataSummary:!0}))}return s}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const root = document.createElement('div');
    root.style.cssText = 'display:flex;flex-direction:column;gap:32px;padding:16px;';
    for (const section of SECTIONS) {
      const header = document.createElement('div');
      header.style.marginBottom = '8px';
      const titleEl = document.createElement('div');
      titleEl.style.cssText = 'font-size:15px;font-weight:700;color:var(--story-title-color, #0f172a);';
      titleEl.textContent = section.title;
      const descEl = document.createElement('div');
      descEl.style.cssText = 'font-size:12px;color:var(--story-desc-color, #64748b);margin-top:2px;';
      descEl.textContent = section.desc;
      header.appendChild(titleEl);
      header.appendChild(descEl);
      root.appendChild(header);
      const cards: ChartGridCard[] = section.types.map(type => ({
        type,
        data: section.data,
        options: {
          frameTheme: args.frameTheme,
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
        },
        label: type
      }));
      root.appendChild(renderChartGrid(cards, {
        columns: section.types.length >= 5 ? 3 : 2,
        cardHeight: 220,
        hideDataSummary: true
      }));
    }
    return root;
  }
}`,...t.parameters?.docs?.source},description:{story:`Empty / duplicate / flat 등 엣지 케이스 데이터가 각 차트 타입에서 어떻게
렌더되는지 sanity-check 갤러리. no-data overlay 동작 + 타입별 방어 로직 시각 확인.`,...t.parameters?.docs?.description}}};const T=["EdgeCasesByChartType"];export{t as EdgeCasesByChartType,T as __namedExportsOrder,S as default};
