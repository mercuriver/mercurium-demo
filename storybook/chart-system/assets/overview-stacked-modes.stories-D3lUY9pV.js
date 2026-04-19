import{r as s,C as a}from"./story-utils-C9PePNh8.js";const c={title:"Overview/Stacked Modes",tags:["!autodocs"]},o={xAxisType:"category",series:[{key:"productA",label:"Product A",seriesType:"bar",data:[{x:"Q1",y:120},{x:"Q2",y:150},{x:"Q3",y:170},{x:"Q4",y:200}]},{key:"productB",label:"Product B",seriesType:"bar",data:[{x:"Q1",y:80},{x:"Q2",y:110},{x:"Q3",y:95},{x:"Q4",y:130}]},{key:"productC",label:"Product C",seriesType:"bar",data:[{x:"Q1",y:60},{x:"Q2",y:70},{x:"Q3",y:85},{x:"Q4",y:100}]},{key:"target",label:"Target Trend",seriesType:"line",data:[{x:"Q1",y:280},{x:"Q2",y:340},{x:"Q3",y:370},{x:"Q4",y:420}]}]},e={parameters:{controls:{disable:!0}},render:t=>{const r={frameTheme:t.frameTheme,grid:{show:!0},legend:{show:!0,position:"top"},tooltip:{show:!0,shared:!0}},n=[{type:"bar",data:a,options:{...r,bar:{stacked:!0,radius:2}},label:"Bar (stacked)"},{type:"area",data:a,options:{...r,area:{stacked:!0,opacity:.45},line:{curve:"smooth"}},label:"Area (stacked)"},{type:"combo",data:o,options:{...r,bar:{stacked:!0,radius:2},line:{curve:"smooth",dots:!0,width:2}},label:"Combo (stacked bars + trend line)",description:"제품별 매출 누적 + 총 목표 추세선 overlay"}];return s(n,{columns:3,cardHeight:280,hideDataSummary:!0})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
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
        show: true,
        shared: true
      }
    };
    const cards: ChartGridCard[] = [{
      type: 'bar',
      data: CATEGORY_MULTI_SERIES,
      options: {
        ...shared,
        bar: {
          stacked: true,
          radius: 2
        }
      },
      label: 'Bar (stacked)'
    }, {
      type: 'area',
      data: CATEGORY_MULTI_SERIES,
      options: {
        ...shared,
        area: {
          stacked: true,
          opacity: 0.45
        },
        line: {
          curve: 'smooth'
        }
      },
      label: 'Area (stacked)'
    }, {
      type: 'combo',
      data: REVENUE_BY_PRODUCT_WITH_TREND,
      options: {
        ...shared,
        bar: {
          stacked: true,
          radius: 2
        },
        line: {
          curve: 'smooth',
          dots: true,
          width: 2
        }
      },
      label: 'Combo (stacked bars + trend line)',
      description: '제품별 매출 누적 + 총 목표 추세선 overlay'
    }];
    return renderChartGrid(cards, {
      columns: 3,
      cardHeight: 280,
      hideDataSummary: true
    });
  }
}`,...e.parameters?.docs?.source},description:{story:`Stacked 모드를 지원하는 Bar / Area / Combo(stacked bar + trend line)를 같은
multi-series 데이터로 나란히 -- 누적 방식의 시각 효과 비교.`,...e.parameters?.docs?.description}}};const i=["StackedByChartType"];export{e as StackedByChartType,i as __namedExportsOrder,c as default};
