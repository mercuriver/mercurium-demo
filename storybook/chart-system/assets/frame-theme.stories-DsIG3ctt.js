import{C as u,F as w}from"./chart-engine-BdkGv5ec.js";import{L as g,T as f}from"./tooltip-plugin-DmLF6MzB.js";import{C as y}from"./crosshair-plugin-DmSVPU7d.js";import{d as b,b as T}from"./mock-data-DLH8EjXc.js";import{r as x}from"./story-utils-DPJnPqbZ.js";function p(e,h=b){const o=document.createElement("div"),n=document.createElement("div");n.style.width="600px",n.style.height="400px",n.style.border="1px solid #e2e8f0",n.style.borderRadius="4px",o.appendChild(n);const t={width:600,height:400,frameTheme:e.frameTheme,...e.backgroundColor?{backgroundColor:e.backgroundColor}:{},grid:{show:!0,...e.gridColor?{strokeColor:e.gridColor}:{}},legend:{show:e.showLegend},tooltip:{show:e.showTooltip},crosshair:{show:e.showCrosshair,type:"x",...e.crosshairColor?{color:e.crosshairColor}:{}}},r=new u(n,e.chartType,t);return e.showLegend&&r.installPlugin(new g),e.showTooltip&&r.installPlugin(new f),e.showCrosshair&&r.installPlugin(new y),r.setData(h),o}const E={light:{bg:"#ffffff",text:"#0a0a0a",border:"#e2e8f0"},dark:{bg:"#0a0a0a",text:"#ffffff",border:"#333333"},minimal:{bg:"#ffffff",text:"#0a0a0a",border:"#e2e8f0"}},v={title:"Charts/Features/Frame Theme",parameters:{syncTheme:!1},args:{frameTheme:"light",chartType:"line",backgroundColor:"",gridColor:"",crosshairColor:"",showLegend:!0,showTooltip:!0,showCrosshair:!0},argTypes:{frameTheme:{control:"select",options:Object.keys(w),description:"프레임 테마 프리셋 (배경·축·그리드·범례·툴팁·크로스헤어 색상 일괄 적용)",table:{defaultValue:{summary:"light"}}},chartType:{control:"select",options:["line","bar","area","scatter"],description:"차트 유형",table:{defaultValue:{summary:"line"}}},backgroundColor:{control:"color",description:"배경색 개별 오버라이드 (비어있으면 테마 기본값 사용)",table:{defaultValue:{summary:"(테마 기본값)"}}},gridColor:{control:"color",description:"그리드 선 색상 개별 오버라이드 (비어있으면 테마 기본값 사용)",table:{defaultValue:{summary:"(테마 기본값)"}}},crosshairColor:{control:"color",description:"크로스헤어 선 색상 개별 오버라이드 (비어있으면 테마 기본값 사용)",table:{defaultValue:{summary:"(테마 기본값)"}}},showLegend:{control:"boolean",description:"범례 표시",table:{defaultValue:{summary:"true"}}},showTooltip:{control:"boolean",description:"툴팁 표시",table:{defaultValue:{summary:"true"}}},showCrosshair:{control:"boolean",description:"크로스헤어 표시",table:{defaultValue:{summary:"true"}}}}},l={args:{frameTheme:"light"},render:e=>p(e)},i={args:{frameTheme:"dark"},render:e=>p(e)},c={args:{frameTheme:"minimal"},render:e=>p(e)},d={render:()=>{const e=document.createElement("div");e.className="chart-grid";const h=["light","dark","minimal"];for(const o of h){const n=E[o],t=document.createElement("div");t.style.backgroundColor=n.bg,t.style.borderRadius="8px",t.style.padding="12px";const r=document.createElement("div");r.textContent=o.charAt(0).toUpperCase()+o.slice(1),r.style.marginBottom="8px",r.style.fontSize="13px",r.style.fontWeight="600",r.style.color=n.text,r.style.opacity="0.6",t.appendChild(r);const a=document.createElement("div");a.style.width="100%",a.style.height="280px",a.style.border=`1px solid ${n.border}`,a.style.borderRadius="4px",t.appendChild(a);const C={responsive:!0,frameTheme:o,legend:{show:!0},tooltip:{show:!0},crosshair:{show:!0,type:"x"}},s=new u(a,"line",C);s.installPlugin(new g),s.installPlugin(new f),s.installPlugin(new y),requestAnimationFrame(()=>s.setData(b)),e.appendChild(t)}return e}},m={name:"Dual Y-Axis (Dark)",render:()=>x("line",T,{tooltip:{show:!0,shared:!0,snapDistance:0},crosshair:{show:!0,type:"both",snapDistance:0},legend:{show:!0},line:{dots:!0},yAxis:{label:"Sales ($K)"},yAxis2:{label:"Profit Margin (%)"},yAxis2SeriesKeys:["margin"],frameTheme:"dark",width:700,height:400})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    frameTheme: 'light'
  },
  render: args => renderThemedChart(args)
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    frameTheme: 'dark'
  },
  render: args => renderThemedChart(args)
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    frameTheme: 'minimal'
  },
  render: args => renderThemedChart(args)
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'chart-grid';
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Dual Y-Axis (Dark)',
  render: () => renderChart('line', DUAL_AXIS_CATEGORY, {
    tooltip: {
      show: true,
      shared: true,
      snapDistance: 0
    },
    crosshair: {
      show: true,
      type: 'both',
      snapDistance: 0
    },
    legend: {
      show: true
    },
    line: {
      dots: true
    },
    yAxis: {
      label: 'Sales ($K)'
    },
    yAxis2: {
      label: 'Profit Margin (%)'
    },
    yAxis2SeriesKeys: ['margin'],
    frameTheme: 'dark',
    width: 700,
    height: 400
  })
}`,...m.parameters?.docs?.source}}};const _=["Light","Dark","Minimal","ThemeComparison","DualYAxisDarkTheme"];export{i as Dark,m as DualYAxisDarkTheme,l as Light,c as Minimal,d as ThemeComparison,_ as __namedExportsOrder,v as default};
