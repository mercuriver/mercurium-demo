import{c as d,d as l,f as c,g as m,h as r,B as a,r as u,i as h}from"./story-utils-C7AxCJZg.js";const b={title:"Chart Types/Bar",args:{...d,dataset:"category-multi"},argTypes:{dataset:h(a),stacked:{control:"boolean",description:"스택 모드",table:{defaultValue:{summary:"false"}}},radius:{control:{type:"range",min:0,max:10,step:1},description:"모서리 라운딩",table:{defaultValue:{summary:"0"}}},barWidth:{control:{type:"range",min:.2,max:1,step:.1},description:"바 너비 비율",table:{defaultValue:{summary:"0.8"}}},...l}},t={parameters:{controls:{disable:!0}},render:e=>u([{type:"bar",data:r(a,"category-basic"),options:{frameTheme:e.frameTheme,bar:{radius:2}},label:"Single series"},{type:"bar",data:r(a,"category-multi"),options:{frameTheme:e.frameTheme,bar:{radius:2}},label:"Grouped (multi-series)"},{type:"bar",data:r(a,"category-multi"),options:{frameTheme:e.frameTheme,bar:{stacked:!0,radius:2}},label:"Stacked"}],{columns:3,cardHeight:260,hideDataSummary:!0})},s={args:{...d,dataset:"category-multi",stacked:!1,radius:6,barWidth:.8},render:e=>c("bar",r(a,e.dataset),{...m(e),bar:{stacked:e.stacked,radius:e.radius,barWidth:e.barWidth}},{fitContainer:e.fitContainer,width:e.width,height:e.height})},o={name:"Stacked + Data Labels",args:{...d,dataset:"category-multi",stacked:!0,radius:2,barWidth:.8,showDataLabel:!0,dataLabelPosition:"inside"},render:e=>c("bar",r(a,e.dataset),{...m(e),bar:{stacked:e.stacked,radius:e.radius,barWidth:e.barWidth}},{fitContainer:e.fitContainer,width:e.width,height:e.height})},i={args:{...d,dataset:"category-basic",stacked:!1,radius:4,barWidth:.8,colorByPoint:!0},render:e=>c("bar",r(a,e.dataset),{...m(e),bar:{stacked:e.stacked,radius:e.radius,barWidth:e.barWidth}},{fitContainer:e.fitContainer,width:e.width,height:e.height})},n={name:"ColorByPoint + Legend Toggle",parameters:{controls:{disable:!0}},render:e=>c("bar",r(a,"category-basic"),{...m(e),colorByPoint:!0,bar:{radius:4,barWidth:.8},legend:{show:!0,position:"bottom"}})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([{
    type: 'bar',
    data: resolveDataset(BAR_DATASETS, 'category-basic'),
    options: {
      frameTheme: args.frameTheme,
      bar: {
        radius: 2
      }
    },
    label: 'Single series'
  }, {
    type: 'bar',
    data: resolveDataset(BAR_DATASETS, 'category-multi'),
    options: {
      frameTheme: args.frameTheme,
      bar: {
        radius: 2
      }
    },
    label: 'Grouped (multi-series)'
  }, {
    type: 'bar',
    data: resolveDataset(BAR_DATASETS, 'category-multi'),
    options: {
      frameTheme: args.frameTheme,
      bar: {
        stacked: true,
        radius: 2
      }
    },
    label: 'Stacked'
  }], {
    columns: 3,
    cardHeight: 260,
    hideDataSummary: true
  })
}`,...t.parameters?.docs?.source},description:{story:"Stacking modes — Single series / Grouped / Stacked.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'category-multi',
    stacked: false,
    radius: 6,
    barWidth: 0.8
  },
  render: args => renderChartSingle('bar', resolveDataset(BAR_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    bar: {
      stacked: args.stacked,
      radius: args.radius,
      barWidth: args.barWidth
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Stacked + Data Labels',
  args: {
    ...commonDefaults,
    dataset: 'category-multi',
    stacked: true,
    radius: 2,
    barWidth: 0.8,
    showDataLabel: true,
    dataLabelPosition: 'inside'
  },
  render: args => renderChartSingle('bar', resolveDataset(BAR_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    bar: {
      stacked: args.stacked,
      radius: args.radius,
      barWidth: args.barWidth
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'category-basic',
    stacked: false,
    radius: 4,
    barWidth: 0.8,
    colorByPoint: true
  },
  render: args => renderChartSingle('bar', resolveDataset(BAR_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    bar: {
      stacked: args.stacked,
      radius: args.radius,
      barWidth: args.barWidth
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'ColorByPoint + Legend Toggle',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartSingle('bar', resolveDataset(BAR_DATASETS, 'category-basic'), {
    ...commonOptionsFrom(args),
    colorByPoint: true,
    bar: {
      radius: 4,
      barWidth: 0.8
    },
    legend: {
      show: true,
      position: 'bottom'
    }
  })
}`,...n.parameters?.docs?.source},description:{story:`colorByPoint 모드에서 legend 각 카테고리 항목을 클릭하면 해당 포인트가 숨겨지고
yAxis 범위가 남은 포인트 기준으로 자동 재조정된다 (Highcharts point.setVisible parity).
Controls 는 비활성화되어 있지만 toolbar 의 theme toggle 은 commonOptionsFrom 경로로 반영된다.`,...n.parameters?.docs?.description}}};const p=["StackingModes","RoundedCorners","StackedWithDataLabels","ColorByPoint","ColorByPointLegendToggle"];export{i as ColorByPoint,n as ColorByPointLegendToggle,s as RoundedCorners,o as StackedWithDataLabels,t as StackingModes,p as __namedExportsOrder,b as default};
