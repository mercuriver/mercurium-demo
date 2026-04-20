import{c as d,d as u,f as m,g as h,h as r,T as t,r as c,i as p}from"./story-utils-R14dQy-K.js";const g={title:"Chart Types/Timeseries",args:{...d,width:700,dataset:"date-daily"},argTypes:{dataset:p(t),curve:{control:"select",options:["linear","smooth","step"],description:"선 보간 방식",table:{defaultValue:{summary:"smooth"}}},dots:{control:"boolean",description:"데이터 포인트 표시",table:{defaultValue:{summary:"false"}}},...u}},a={parameters:{controls:{disable:!0}},render:e=>c([{type:"timeseries",data:r(t,"date-large"),options:{frameTheme:e.frameTheme,line:{curve:"linear",dots:!0}},label:"Hourly (large dataset)"},{type:"timeseries",data:r(t,"date-daily"),options:{frameTheme:e.frameTheme,line:{curve:"smooth"}},label:"Daily"},{type:"timeseries",data:r(t,"date-monthly"),options:{frameTheme:e.frameTheme,line:{curve:"linear",dots:!0}},label:"Monthly"}],{columns:3,cardHeight:260,hideDataSummary:!0})},n={parameters:{controls:{disable:!0}},render:e=>{const i=r(t,"date-monthly"),l={frameTheme:e.frameTheme,grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!0}};return c([{type:"line",data:i,options:{...l,line:{curve:"smooth",dots:!0}},label:"Line"},{type:"area",data:i,options:{...l,area:{opacity:.3},line:{curve:"smooth"}},label:"Area"},{type:"timeseries",data:i,options:{...l,line:{curve:"smooth",dots:!0}},label:"Timeseries"}],{columns:3,cardHeight:260,hideDataSummary:!0})}},s={args:{...d,dataset:"date-daily",curve:"smooth",dots:!1,colorPalette:"vintage-press",showCrosshair:!0,crosshairType:"both",crosshairColor:"hsla(215, 31%, 16%, 1)",crosshairDashStyle:"solid"},render:e=>m("timeseries",r(t,e.dataset),{...h(e),line:{curve:e.curve,dots:e.dots}},{fitContainer:e.fitContainer,width:e.width,height:e.height})},o={args:{...d,dataset:"date-large",curve:"linear",dots:!1},render:e=>m("timeseries",r(t,e.dataset),{...h(e),line:{curve:e.curve,dots:e.dots}},{fitContainer:e.fitContainer,width:e.width,height:e.height})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([{
    type: 'timeseries',
    data: resolveDataset(TIMESERIES_DATASETS, 'date-large'),
    options: {
      frameTheme: args.frameTheme,
      line: {
        curve: 'linear',
        dots: true
      }
    },
    label: 'Hourly (large dataset)'
  }, {
    type: 'timeseries',
    data: resolveDataset(TIMESERIES_DATASETS, 'date-daily'),
    options: {
      frameTheme: args.frameTheme,
      line: {
        curve: 'smooth'
      }
    },
    label: 'Daily'
  }, {
    type: 'timeseries',
    data: resolveDataset(TIMESERIES_DATASETS, 'date-monthly'),
    options: {
      frameTheme: args.frameTheme,
      line: {
        curve: 'linear',
        dots: true
      }
    },
    label: 'Monthly'
  }], {
    columns: 3,
    cardHeight: 260,
    hideDataSummary: true
  })
}`,...a.parameters?.docs?.source},description:{story:"Granularity comparison — Hourly / Daily / Monthly.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const data = resolveDataset(TIMESERIES_DATASETS, 'date-monthly');
    const shared = {
      frameTheme: args.frameTheme,
      grid: {
        show: true
      },
      legend: {
        show: true,
        position: 'top' as const
      },
      tooltip: {
        show: true
      }
    };
    return renderChartGrid([{
      type: 'line',
      data,
      options: {
        ...shared,
        line: {
          curve: 'smooth',
          dots: true
        }
      },
      label: 'Line'
    }, {
      type: 'area',
      data,
      options: {
        ...shared,
        area: {
          opacity: 0.3
        },
        line: {
          curve: 'smooth'
        }
      },
      label: 'Area'
    }, {
      type: 'timeseries',
      data,
      options: {
        ...shared,
        line: {
          curve: 'smooth',
          dots: true
        }
      },
      label: 'Timeseries'
    }], {
      columns: 3,
      cardHeight: 260,
      hideDataSummary: true
    });
  }
}`,...n.parameters?.docs?.source},description:{story:`같은 월별 날짜 데이터가 Line / Area / Timeseries 차트에서 어떻게 렌더되는지
비교 -- 차트 타입이 날짜 축을 다루는 방식 차이 시각 확인.`,...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'date-daily',
    curve: 'smooth',
    dots: false,
    colorPalette: 'vintage-press',
    showCrosshair: true,
    crosshairType: 'both',
    crosshairColor: 'hsla(215, 31%, 16%, 1)',
    crosshairDashStyle: 'solid'
  },
  render: args => renderChartSingle('timeseries', resolveDataset(TIMESERIES_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'date-large',
    curve: 'linear',
    dots: false
  },
  render: args => renderChartSingle('timeseries', resolveDataset(TIMESERIES_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...o.parameters?.docs?.source}}};const T=["GranularityComparison","DateDataByChartType","Daily","LargeDataset"];export{s as Daily,n as DateDataByChartType,a as GranularityComparison,o as LargeDataset,T as __namedExportsOrder,g as default};
