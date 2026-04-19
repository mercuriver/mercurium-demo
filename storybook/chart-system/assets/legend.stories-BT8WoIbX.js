import{c as l,d as w,h as d,r as m,f as h,g as p,L as o,i as f}from"./story-utils-C9PePNh8.js";const y={title:"Options/Legend",args:{...l,dataset:"many-series",legendShowFirstLast:!1,legendExpandAll:!1,legendItemMaxWidth:120},argTypes:{dataset:f(o),...w}},n={parameters:{controls:{disable:!0}},render:e=>{const i=d(o,"many-series"),t=(g,c,u)=>({type:"line",data:i,options:{frameTheme:e.frameTheme,grid:{show:!0},line:{curve:"smooth",width:2},legend:{show:!0,position:g,...u}},label:c});return m([t("top","Outside · Top (pagination)"),t("bottom","Outside · Bottom"),t("left","Outside · Left (vertical)"),t("right","Outside · Right (vertical)"),t("inside-top-left","Inside · Top-Left"),t("top","Outside · Top (expandAll)",{expandAll:!0})],{columns:3,cardHeight:240,hideDataSummary:!0})}},r={args:{...l,dataset:"many-series",legendPosition:"top",legendShowFirstLast:!0,legendExpandAll:!1,legendItemMaxWidth:120,width:720,height:420},render:e=>h("line",d(o,e.dataset),{...p(e),grid:{show:!0},line:{curve:"smooth",width:2}},{fitContainer:e.fitContainer,width:e.width,height:e.height})},a={parameters:{controls:{disable:!0}},render:e=>{const i=d(o,"multi"),t={...i,series:[]};return m([{type:"line",data:i,options:{frameTheme:e.frameTheme,grid:{show:!0},legend:{show:!0,position:"top"},line:{curve:"smooth",width:2}},label:"With series"},{type:"line",data:t,options:{frameTheme:e.frameTheme,grid:{show:!0},legend:{show:!0,position:"top"},line:{curve:"smooth",width:2}},label:"Empty series (legend hidden, graph expanded)"}],{columns:2,cardHeight:320,hideDataSummary:!0})}},s={args:{...l,dataset:"long-labels",legendItemMaxWidth:120,width:720,height:360},render:e=>h("line",d(o,e.dataset),{...p(e),grid:{show:!0},line:{curve:"smooth",width:2}},{fitContainer:e.fitContainer,width:e.width,height:e.height})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const data = resolveDataset(LINE_DATASETS, 'many-series');
    const makeCard = (position: LegendPosition, label: string, extra?: Partial<LegendOptions>) => ({
      type: 'line' as const,
      data,
      options: {
        frameTheme: args.frameTheme,
        grid: {
          show: true
        },
        line: {
          curve: 'smooth' as const,
          width: 2
        },
        legend: {
          show: true,
          position,
          ...extra
        }
      },
      label
    });
    return renderChartGrid([makeCard('top', 'Outside · Top (pagination)'), makeCard('bottom', 'Outside · Bottom'), makeCard('left', 'Outside · Left (vertical)'), makeCard('right', 'Outside · Right (vertical)'), makeCard('inside-top-left', 'Inside · Top-Left'), makeCard('top', 'Outside · Top (expandAll)', {
      expandAll: true
    })], {
      columns: 3,
      cardHeight: 240,
      hideDataSummary: true
    });
  }
}`,...n.parameters?.docs?.source},description:{story:"Position × layout coverage.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'many-series',
    legendPosition: 'top',
    legendShowFirstLast: true,
    legendExpandAll: false,
    legendItemMaxWidth: 120,
    width: 720,
    height: 420
  },
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    grid: {
      show: true
    },
    line: {
      curve: 'smooth',
      width: 2
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...r.parameters?.docs?.source},description:{story:`Overflow 제어 -- many-series 데이터 + first/last nav 버튼 + expandAll 토글로
pagination / expandAll 모드 차이 interactive 확인.`,...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const data = resolveDataset(LINE_DATASETS, 'multi');
    const empty: ChartData = {
      ...data,
      series: []
    };
    return renderChartGrid([{
      type: 'line',
      data,
      options: {
        frameTheme: args.frameTheme,
        grid: {
          show: true
        },
        legend: {
          show: true,
          position: 'top'
        },
        line: {
          curve: 'smooth',
          width: 2
        }
      },
      label: 'With series'
    }, {
      type: 'line',
      data: empty,
      options: {
        frameTheme: args.frameTheme,
        grid: {
          show: true
        },
        legend: {
          show: true,
          position: 'top'
        },
        line: {
          curve: 'smooth',
          width: 2
        }
      },
      label: 'Empty series (legend hidden, graph expanded)'
    }], {
      columns: 2,
      cardHeight: 320,
      hideDataSummary: true
    });
  }
}`,...a.parameters?.docs?.source},description:{story:"Empty legend -- 모든 시리즈 숨김 시 legend slot이 붕괴되고 graph가 공간을 회수.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'long-labels',
    legendItemMaxWidth: 120,
    width: 720,
    height: 360
  },
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    grid: {
      show: true
    },
    line: {
      curve: 'smooth',
      width: 2
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...s.parameters?.docs?.source},description:{story:"Long label 말줄임 -- `legendItemMaxWidth: 120` 로 긴 시리즈 라벨이 ellipsis 처리.\n잘린 라벨에 hover 하면 `title` attribute로 원문 확인.",...s.parameters?.docs?.description}}};const v=["PositionModes","OverflowControls","EmptyLegend","LongLabelTruncation"];export{a as EmptyLegend,s as LongLabelTruncation,r as OverflowControls,n as PositionModes,v as __namedExportsOrder,y as default};
