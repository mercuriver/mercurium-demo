import{C as h,F as y}from"./chart-engine-BmtyFlsE.js";import{L as u,T as g}from"./tooltip-plugin-B9rRNLzl.js";import{C}from"./crosshair-plugin-lsuhlxfG.js";import{N as w}from"./mock-data-BShfxM5i.js";function c(e,p=w){const o=document.createElement("div"),n=document.createElement("div");n.style.width="600px",n.style.height="400px",n.style.border="1px solid #e2e8f0",n.style.borderRadius="4px",o.appendChild(n);const t={width:600,height:400,frameTheme:e.frameTheme,...e.backgroundColor?{backgroundColor:e.backgroundColor}:{},grid:{show:!0,...e.gridColor?{strokeColor:e.gridColor}:{}},legend:{show:e.showLegend},tooltip:{show:e.showTooltip},crosshair:{show:e.showCrosshair,type:"x",...e.crosshairColor?{color:e.crosshairColor}:{}}},r=new h(n,e.chartType,t);return e.showLegend&&r.installPlugin(new u),e.showTooltip&&r.installPlugin(new g),e.showCrosshair&&r.installPlugin(new C),r.setData(p),o}const P={title:"Charts/Features/Frame Theme",args:{frameTheme:"light",chartType:"line",backgroundColor:"",gridColor:"",crosshairColor:"",showLegend:!0,showTooltip:!0,showCrosshair:!0},argTypes:{frameTheme:{control:"select",options:Object.keys(y),description:"프레임 테마 프리셋 (배경·축·그리드·범례·툴팁·크로스헤어 색상 일괄 적용)",table:{defaultValue:{summary:"light"}}},chartType:{control:"select",options:["line","bar","area","scatter"],description:"차트 유형",table:{defaultValue:{summary:"line"}}},backgroundColor:{control:"color",description:"배경색 개별 오버라이드 (비어있으면 테마 기본값 사용)",table:{defaultValue:{summary:"(테마 기본값)"}}},gridColor:{control:"color",description:"그리드 선 색상 개별 오버라이드 (비어있으면 테마 기본값 사용)",table:{defaultValue:{summary:"(테마 기본값)"}}},crosshairColor:{control:"color",description:"크로스헤어 선 색상 개별 오버라이드 (비어있으면 테마 기본값 사용)",table:{defaultValue:{summary:"(테마 기본값)"}}},showLegend:{control:"boolean",description:"범례 표시",table:{defaultValue:{summary:"true"}}},showTooltip:{control:"boolean",description:"툴팁 표시",table:{defaultValue:{summary:"true"}}},showCrosshair:{control:"boolean",description:"크로스헤어 표시",table:{defaultValue:{summary:"true"}}}}},s={render:e=>c(e)},l={args:{frameTheme:"light"},render:e=>c(e)},i={args:{frameTheme:"dark"},render:e=>c(e)},d={args:{frameTheme:"minimal"},render:e=>c(e)},m={render:()=>{const e=document.createElement("div");e.style.display="grid",e.style.gridTemplateColumns="1fr 1fr 1fr",e.style.gap="16px";const p=["light","dark","minimal"];for(const o of p){const n=document.createElement("div"),t=document.createElement("div");t.textContent=o,t.style.marginBottom="8px",t.style.fontSize="13px",t.style.color="#64748b",n.appendChild(t);const r=document.createElement("div");r.style.width="100%",r.style.height="280px",r.style.border="1px solid #e2e8f0",r.style.borderRadius="4px",n.appendChild(r);const f={responsive:!0,frameTheme:o,legend:{show:!0},tooltip:{show:!0},crosshair:{show:!0,type:"x"}},a=new h(r,"line",f);a.installPlugin(new u),a.installPlugin(new g),a.installPlugin(new C),requestAnimationFrame(()=>a.setData(w)),e.appendChild(n)}return e}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => renderThemedChart(args)
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    frameTheme: 'light'
  },
  render: args => renderThemedChart(args)
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    frameTheme: 'dark'
  },
  render: args => renderThemedChart(args)
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    frameTheme: 'minimal'
  },
  render: args => renderThemedChart(args)
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'grid';
    wrapper.style.gridTemplateColumns = '1fr 1fr 1fr';
    wrapper.style.gap = '16px';
    const themes = ['light', 'dark', 'minimal'];
    for (const themeName of themes) {
      const cell = document.createElement('div');
      const label = document.createElement('div');
      label.textContent = themeName;
      label.style.marginBottom = '8px';
      label.style.fontSize = '13px';
      label.style.color = '#64748b';
      cell.appendChild(label);
      const container = document.createElement('div');
      container.style.width = '100%';
      container.style.height = '280px';
      container.style.border = '1px solid #e2e8f0';
      container.style.borderRadius = '4px';
      cell.appendChild(container);
      const options: ChartOptions = {
        responsive: true,
        frameTheme: themeName,
        legend: {
          show: true
        },
        tooltip: {
          show: true
        },
        crosshair: {
          show: true,
          type: 'x'
        }
      };
      const engine = new ChartEngine(container, 'line', options);
      engine.installPlugin(new LegendPlugin());
      engine.installPlugin(new TooltipPlugin());
      engine.installPlugin(new CrosshairPlugin());
      requestAnimationFrame(() => engine.setData(NUMERIC_BASIC));
      wrapper.appendChild(cell);
    }
    return wrapper;
  }
}`,...m.parameters?.docs?.source}}};const k=["Playground","Light","Dark","Minimal","ThemeComparison"];export{i as Dark,l as Light,d as Minimal,s as Playground,m as ThemeComparison,k as __namedExportsOrder,P as default};
