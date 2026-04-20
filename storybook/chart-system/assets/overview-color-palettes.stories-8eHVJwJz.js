import{P as a,r as s,N as o}from"./story-utils-R14dQy-K.js";const i={title:"Overview/Color Palettes",tags:["!autodocs"]},e={parameters:{controls:{disable:!0}},render:r=>{const n=Object.keys(a).filter(t=>t!=="default");return s(n.map(t=>({type:"line",data:o,options:{frameTheme:r.frameTheme,colorPalette:t,line:{curve:"smooth",width:2},legend:{show:!0,position:"top"},tooltip:{show:!1}},label:t})),{columns:3,cardHeight:220,hideDataSummary:!0})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const names = Object.keys(PRESET_PALETTES).filter(k => k !== 'default');
    return renderChartGrid(names.map(name => ({
      type: 'line' as const,
      data: NUMERIC_MULTI_SERIES,
      options: {
        frameTheme: args.frameTheme,
        colorPalette: name,
        line: {
          curve: 'smooth',
          width: 2
        },
        legend: {
          show: true,
          position: 'top' as const
        },
        tooltip: {
          show: false
        }
      },
      label: name
    })), {
      columns: 3,
      cardHeight: 220,
      hideDataSummary: true
    });
  }
}`,...e.parameters?.docs?.source},description:{story:`19개 preset palette 전부 -- 동일 multi-series 데이터로 렌더.
Standard / Art-inspired 두 그룹으로 분류 헤더 표시.`,...e.parameters?.docs?.description}}};const m=["PaletteGallery"];export{e as PaletteGallery,m as __namedExportsOrder,i as default};
