import{c as o,a as n,b as r,d as i,e as d,f as p,h as s,i as h,j as b,C as a,k as c}from"./story-utils-B9NFoQdo.js";const m={title:"Options/Axis/LabelInterval",args:{...o,dataset:"large-short",showLegend:!1,showGrid:!0,width:900,height:360},argTypes:{...n,dataset:{control:"select",options:b(s),mapping:h(s),description:"데이터셋 선택 (대량 카테고리)",table:{defaultValue:{summary:"large-short"},category:"Common"}}}},t={parameters:{controls:{disable:!0}},render:()=>r([{type:"line",data:a,options:{xAxis:{labelInterval:"auto"},legend:{show:!1}},label:"labelInterval: 'auto'"},{type:"line",data:a,options:{xAxis:{labelInterval:0},legend:{show:!1}},label:"labelInterval: 0 (all)"},{type:"line",data:a,options:{xAxis:{labelInterval:1},legend:{show:!1}},label:"labelInterval: 1 (every 2nd)"},{type:"line",data:a,options:{xAxis:{labelInterval:3},legend:{show:!1}},label:"labelInterval: 3 (every 4th)"},{type:"line",data:a,options:{xAxis:{labelInterval:10},legend:{show:!1}},label:"labelInterval: 10 (every 11th)"},{type:"line",data:c,options:{xAxis:{labelInterval:"auto",labelRotation:45},legend:{show:!1}},label:"auto + labelRotation: 45 (long names)"}],{columns:2,cardHeight:260,hideDataSummary:!0})},l={args:{...o,dataset:"large-short",xLabelInterval:"auto",xLabelRotation:"auto",showLegend:!1,width:900,height:360},render:e=>i("line",p(s,e.dataset),{...d(e)},{fitContainer:e.fitContainer,width:e.width,height:e.height})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderChartGrid([{
    type: 'line',
    data: CATEGORY_LARGE_SHORT,
    options: {
      xAxis: {
        labelInterval: 'auto'
      },
      legend: {
        show: false
      }
    },
    label: "labelInterval: 'auto'"
  }, {
    type: 'line',
    data: CATEGORY_LARGE_SHORT,
    options: {
      xAxis: {
        labelInterval: 0
      },
      legend: {
        show: false
      }
    },
    label: 'labelInterval: 0 (all)'
  }, {
    type: 'line',
    data: CATEGORY_LARGE_SHORT,
    options: {
      xAxis: {
        labelInterval: 1
      },
      legend: {
        show: false
      }
    },
    label: 'labelInterval: 1 (every 2nd)'
  }, {
    type: 'line',
    data: CATEGORY_LARGE_SHORT,
    options: {
      xAxis: {
        labelInterval: 3
      },
      legend: {
        show: false
      }
    },
    label: 'labelInterval: 3 (every 4th)'
  }, {
    type: 'line',
    data: CATEGORY_LARGE_SHORT,
    options: {
      xAxis: {
        labelInterval: 10
      },
      legend: {
        show: false
      }
    },
    label: 'labelInterval: 10 (every 11th)'
  }, {
    type: 'line',
    data: CATEGORY_LARGE_LONG,
    options: {
      xAxis: {
        labelInterval: 'auto',
        labelRotation: 45
      },
      legend: {
        show: false
      }
    },
    label: 'auto + labelRotation: 45 (long names)'
  }], {
    columns: 2,
    cardHeight: 260,
    hideDataSummary: true
  })
}`,...t.parameters?.docs?.source},description:{story:"AllStates — `labelInterval: 'auto' | 0 | 1 | 3 | 10` 을 동일 데이터(193 cats)로 비교.\n`'auto'` 는 가용 폭 기반 자동 skip, `0` 은 겹침 허용 전량 표시, 숫자는 \"skip N\" 의미.",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'large-short',
    xLabelInterval: 'auto',
    xLabelRotation: 'auto',
    showLegend: false,
    width: 900,
    height: 360
  },
  render: args => renderChartSingle('line', resolveDataset(LARGE_CATEGORY_DATASETS, args.dataset), {
    ...commonOptionsFrom(args)
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...l.parameters?.docs?.source},description:{story:"Focused — `labelInterval` 을 select 로 직접 조작한다. `commonOptionsFrom` 을 거쳐\nargs → options 로 배선되므로 Storybook controls 가 실제 차트에 반영된다.",...l.parameters?.docs?.description}}};const A=["AllStates","Focused"];export{t as AllStates,l as Focused,A as __namedExportsOrder,m as default};
