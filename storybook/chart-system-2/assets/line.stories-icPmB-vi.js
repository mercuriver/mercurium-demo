import{c}from"./chart-showcase-D6LVIqI-.js";import{r as m,C as l}from"./chart-playground-Cf0d2JJL.js";import{a as p}from"./chart-playground-data-DVQ9OxHY.js";import{c as u}from"./chart-story-initialization-BYlsHDAa.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";import"./chart-story-content-DqL3FnFI.js";import"./chart-theme-controls-8C4PR6_3.js";const f={...l,title:"Charts/Line"},e=(a,r,s,i,o,d=!1)=>({description:s,initialization:u(p,{legend:{visible:!1},line:{dots:d,lineWidth:2.5,pointRadius:5},xAxis:{scale:"category",ticks:{count:6}},yAxis:{max:o,min:i,scale:"linear",ticks:{count:5}}},{encoding:{x:"period",y:a},id:a,type:"line"}),title:r}),y=[e("constant","Identical values","모든 값이 같아도 안정적인 domain을 만듭니다.",45,55),e("lowVariance","Low variance","작은 변화가 축 범위 안에서 식별되는지 확인합니다.",48.5,51.5),e("gap","Missing intervals","null 구간에서 선을 끊고 다음 값부터 재개합니다.",50,58),e("single","Single point","하나의 유효 값도 point로 식별할 수 있습니다.",52,62,!0)],n={args:{lineOptions:{curve:"smooth",dash:[10,4],dots:!0,lineWidth:3,pointRadius:4},seriesOptions:[{encoding:{x:"date",y:"amount"},id:"amount",name:"Amount",type:"line"}],yAxisOptions:{labels:{thousandsSeparator:!0,valuePrefix:"$"},scale:"linear",ticks:{count:6},title:"Amount"}},name:"Line",parameters:{storyHeader:{description:"선 두께, 점 표시, linear·smooth·step 곡선 옵션을 실제 Canvas path로 확인합니다.",eyebrow:"Charts · Line",title:"Line 차트"}},render:m},t={name:"Edge cases",parameters:{controls:{disable:!0},storyHeader:{description:"동일값, 저변동, 결측 구간, 단일 관측값에서 Line domain과 segment가 예측 가능하게 유지되는지 비교합니다.",eyebrow:"Charts · Line",title:"Line 경계 데이터 모음"}},render:()=>c(y)};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    lineOptions: {
      curve: 'smooth',
      dash: [10, 4],
      dots: true,
      lineWidth: 3,
      pointRadius: 4
    },
    seriesOptions: [{
      encoding: {
        x: 'date',
        y: 'amount'
      },
      id: 'amount',
      name: 'Amount',
      type: 'line'
    }],
    yAxisOptions: {
      labels: {
        thousandsSeparator: true,
        valuePrefix: '$'
      },
      scale: 'linear',
      ticks: {
        count: 6
      },
      title: 'Amount'
    }
  },
  name: 'Line',
  parameters: {
    storyHeader: {
      description: '선 두께, 점 표시, linear·smooth·step 곡선 옵션을 실제 Canvas path로 확인합니다.',
      eyebrow: 'Charts · Line',
      title: 'Line 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Edge cases',
  parameters: {
    controls: {
      disable: true
    },
    storyHeader: {
      description: '동일값, 저변동, 결측 구간, 단일 관측값에서 Line domain과 segment가 예측 가능하게 유지되는지 비교합니다.',
      eyebrow: 'Charts · Line',
      title: 'Line 경계 데이터 모음'
    } satisfies StoryHeaderParameters
  },
  render: () => createChartShowcase(LINE_EDGE_CASE_ITEMS)
}`,...t.parameters?.docs?.source}}};const v=["Line","LineEdgeCases"];export{n as Line,t as LineEdgeCases,v as __namedExportsOrder,f as default};
