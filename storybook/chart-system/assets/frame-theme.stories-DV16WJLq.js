import{C as u,F as w}from"./chart-engine-DfSOGJk-.js";import{L as g,T as f}from"./tooltip-plugin-C3STccdv.js";import{C as y}from"./crosshair-plugin-B7P1eN65.js";import{c as C}from"./mock-data--NCvz5h5.js";function p(e,h=C){const o=document.createElement("div"),t=document.createElement("div");t.style.width="600px",t.style.height="400px",t.style.border="1px solid #e2e8f0",t.style.borderRadius="4px",o.appendChild(t);const n={width:600,height:400,frameTheme:e.frameTheme,...e.backgroundColor?{backgroundColor:e.backgroundColor}:{},grid:{show:!0,...e.gridColor?{strokeColor:e.gridColor}:{}},legend:{show:e.showLegend},tooltip:{show:e.showTooltip},crosshair:{show:e.showCrosshair,type:"x",...e.crosshairColor?{color:e.crosshairColor}:{}}},r=new u(t,e.chartType,n);return e.showLegend&&r.installPlugin(new g),e.showTooltip&&r.installPlugin(new f),e.showCrosshair&&r.installPlugin(new y),r.setData(h),o}const T={light:{bg:"#ffffff",text:"#0a0a0a",border:"#e2e8f0"},dark:{bg:"#0a0a0a",text:"#ffffff",border:"#333333"},minimal:{bg:"#ffffff",text:"#0a0a0a",border:"#e2e8f0"}},v={title:"Charts/Features/Frame Theme",parameters:{syncTheme:!1},args:{frameTheme:"light",chartType:"line",backgroundColor:"",gridColor:"",crosshairColor:"",showLegend:!0,showTooltip:!0,showCrosshair:!0},argTypes:{frameTheme:{control:"select",options:Object.keys(w),description:"프레임 테마 프리셋 (배경·축·그리드·범례·툴팁·크로스헤어 색상 일괄 적용)",table:{defaultValue:{summary:"light"}}},chartType:{control:"select",options:["line","bar","area","scatter"],description:"차트 유형",table:{defaultValue:{summary:"line"}}},backgroundColor:{control:"color",description:"배경색 개별 오버라이드 (비어있으면 테마 기본값 사용)",table:{defaultValue:{summary:"(테마 기본값)"}}},gridColor:{control:"color",description:"그리드 선 색상 개별 오버라이드 (비어있으면 테마 기본값 사용)",table:{defaultValue:{summary:"(테마 기본값)"}}},crosshairColor:{control:"color",description:"크로스헤어 선 색상 개별 오버라이드 (비어있으면 테마 기본값 사용)",table:{defaultValue:{summary:"(테마 기본값)"}}},showLegend:{control:"boolean",description:"범례 표시",table:{defaultValue:{summary:"true"}}},showTooltip:{control:"boolean",description:"툴팁 표시",table:{defaultValue:{summary:"true"}}},showCrosshair:{control:"boolean",description:"크로스헤어 표시",table:{defaultValue:{summary:"true"}}}}},l={render:e=>p(e)},i={args:{frameTheme:"light"},render:e=>p(e)},c={args:{frameTheme:"dark"},render:e=>p(e)},d={args:{frameTheme:"minimal"},render:e=>p(e)},m={render:()=>{const e=document.createElement("div");e.style.display="grid",e.style.gridTemplateColumns="1fr 1fr 1fr",e.style.gap="16px";const h=["light","dark","minimal"];for(const o of h){const t=T[o],n=document.createElement("div");n.style.backgroundColor=t.bg,n.style.borderRadius="8px",n.style.padding="12px";const r=document.createElement("div");r.textContent=o.charAt(0).toUpperCase()+o.slice(1),r.style.marginBottom="8px",r.style.fontSize="13px",r.style.fontWeight="600",r.style.color=t.text,r.style.opacity="0.6",n.appendChild(r);const a=document.createElement("div");a.style.width="100%",a.style.height="280px",a.style.border=`1px solid ${t.border}`,a.style.borderRadius="4px",n.appendChild(a);const b={responsive:!0,frameTheme:o,legend:{show:!0},tooltip:{show:!0},crosshair:{show:!0,type:"x"}},s=new u(a,"line",b);s.installPlugin(new g),s.installPlugin(new f),s.installPlugin(new y),requestAnimationFrame(()=>s.setData(C)),e.appendChild(n)}return e}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => renderThemedChart(args)
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    frameTheme: 'light'
  },
  render: args => renderThemedChart(args)
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    frameTheme: 'dark'
  },
  render: args => renderThemedChart(args)
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      const colors = THEME_BG[themeName];
      const cell = document.createElement('div');
      cell.style.backgroundColor = colors.bg;
      cell.style.borderRadius = '8px';
      cell.style.padding = '12px';
      const label = document.createElement('div');
      label.textContent = themeName.charAt(0).toUpperCase() + themeName.slice(1);
      label.style.marginBottom = '8px';
      label.style.fontSize = '13px';
      label.style.fontWeight = '600';
      label.style.color = colors.text;
      label.style.opacity = '0.6';
      cell.appendChild(label);
      const container = document.createElement('div');
      container.style.width = '100%';
      container.style.height = '280px';
      container.style.border = \`1px solid \${colors.border}\`;
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
}`,...m.parameters?.docs?.source}}};const S=["Playground","Light","Dark","Minimal","ThemeComparison"];export{c as Dark,i as Light,d as Minimal,l as Playground,m as ThemeComparison,S as __namedExportsOrder,v as default};
