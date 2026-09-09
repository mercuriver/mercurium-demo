import{c as s}from"./chart-showcase-D6LVIqI-.js";import{c as d}from"./chart-story-content-DqL3FnFI.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const v={title:"Features/Zones",parameters:{controls:{disable:!0}}},l=[-20,10,45,75,90,30,-10,60].map((e,a)=>({index:a,value:e})),c=[{value:0,color:"#2563eb"},{value:50,color:"#d97706"},{color:"#dc2626"}],m=[{value:0,color:"#2563eb",fillColor:"#93c5fd"},{value:50,color:"#d97706",fillColor:"#fcd34d"},{color:"#dc2626",fillColor:"#fda4af"}],t=e=>({data:l,view:{paradigm:"cartesian",options:{legend:{visible:!0},tooltip:{enabled:!0},line:{curve:"smooth",dots:!0,lineWidth:3},area:{curve:"smooth",fillOpacity:.24,lineWidth:3},scatter:{pointRadius:7},xAxis:{scale:"linear",title:"Observation"},yAxis:{scale:"linear",min:-30,max:100,title:"Value"}},series:{type:e,id:"value",name:"Observed values",encoding:{x:"index",y:"value"},zones:{stops:e==="area"?m:c}}}}),n={parameters:{storyHeader:{eyebrow:"Value-based presentation",title:"같은 값 범위를 mark에 맞게 표현",description:"Line·Area는 실제 곡선과 면을 Y축 구간으로 나누어 칠합니다. Bar·Scatter는 원본 값에 따라 개별 mark 전체의 색을 정합니다. 범례는 계열 하나를 유지하고 tooltip은 선택한 mark의 색을 표시합니다."}},render:()=>s([{title:"Line · smooth path",description:"곡선 경로를 유지하며 0과 50 경계에서 색이 바뀝니다.",initialization:t("line")},{title:"Area · horizontal value bands",description:"각 위치의 Y축 값에 따라 면도 가로 띠로 구분됩니다. 구간의 color는 외곽선, fillColor는 면에 적용해 농도를 구분합니다.",initialization:t("area")},{title:"Bar · datum classification",description:"막대 높이가 경계를 지나도 원본 값 하나로 전체 막대 색을 정합니다.",initialization:t("bar")},{title:"Scatter · datum classification",description:"각 점의 값으로 분류하고 tooltip과 같은 색을 사용합니다.",initialization:t("scatter")}])},r={parameters:{storyHeader:{eyebrow:"Value-based presentation",title:"동일 계열 안에서 실측과 예측 기간 구분",description:"Time X축의 epoch millisecond 경계 이후만 점선으로 표현합니다. Zone은 계열을 추가하거나 데이터를 분할하지 않으며, 경계의 원본 관측값은 앞 구간에 포함됩니다."}},render:()=>d({height:420,width:860,summary:"Measured before Jul 05 / Forecast after Jul 05",initialization:{data:l.map(({index:e,value:a})=>({date:new Date(Date.UTC(2026,6,e+1)),value:a+80})),view:{paradigm:"cartesian",options:{legend:{visible:!0},tooltip:{enabled:!0},line:{dots:!0,lineWidth:3},xAxis:{scale:"time"},yAxis:{scale:"linear",title:"Demand"}},series:{id:"demand",name:"Demand",color:"#2563eb",encoding:{x:"date",y:"value"},zones:{axis:"x",stops:[{value:Date.UTC(2026,6,5)},{color:"#7c3aed",dash:[8,4]}]}}}}})},o=(e,a)=>({title:e==="area"?"Stacked area · cumulative Y bands":"Inverted stacked bars · raw values",description:e==="area"?"누적된 면의 실제 축 위치를 60 기준으로 구분합니다.":"축을 뒤집어도 각 막대의 원본 값을 40 기준으로 분류합니다.",height:320,initialization:{data:[{month:"Jan",base:35,extra:25},{month:"Feb",base:45,extra:30},{month:"Mar",base:40,extra:50}],view:{paradigm:"cartesian",options:{inverted:a,legend:{visible:!0},tooltip:{enabled:!0,shared:!0},area:{fillOpacity:.35},xAxis:{scale:"category"},yAxis:{scale:"linear",max:100}},series:[{type:e,id:"base",name:"Base",stack:"total",color:"#94a3b8",encoding:{x:"month",y:"base"}},{type:e,id:"extra",name:"Additional",stack:"total",color:"#2563eb",encoding:{x:"month",y:"extra"},zones:{stops:[{value:e==="area"?60:40},{color:"#d97706"}]}}]}}}),i={parameters:{storyHeader:{eyebrow:"Value-based presentation",title:"누적과 축 방향이 바뀌어도 유지되는 분류 기준",description:"Area의 구간은 누적된 축 좌표를 따르고, Bar는 각 데이터의 원본 값으로 분류합니다. inverted는 화면 방향만 바꾸며 zone의 논리 축과 분류 기준을 바꾸지 않습니다."}},render:()=>s([o("area",!1),o("bar",!0)])};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Value-based presentation',
      title: '같은 값 범위를 mark에 맞게 표현',
      description: 'Line·Area는 실제 곡선과 면을 Y축 구간으로 나누어 칠합니다. Bar·Scatter는 원본 값에 따라 개별 mark 전체의 색을 정합니다. 범례는 계열 하나를 유지하고 tooltip은 선택한 mark의 색을 표시합니다.'
    }
  },
  render: () => createChartShowcase([{
    title: 'Line · smooth path',
    description: '곡선 경로를 유지하며 0과 50 경계에서 색이 바뀝니다.',
    initialization: createZoneExample('line')
  }, {
    title: 'Area · horizontal value bands',
    description: '각 위치의 Y축 값에 따라 면도 가로 띠로 구분됩니다. 구간의 color는 외곽선, fillColor는 면에 적용해 농도를 구분합니다.',
    initialization: createZoneExample('area')
  }, {
    title: 'Bar · datum classification',
    description: '막대 높이가 경계를 지나도 원본 값 하나로 전체 막대 색을 정합니다.',
    initialization: createZoneExample('bar')
  }, {
    title: 'Scatter · datum classification',
    description: '각 점의 값으로 분류하고 tooltip과 같은 색을 사용합니다.',
    initialization: createZoneExample('scatter')
  }])
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Value-based presentation',
      title: '동일 계열 안에서 실측과 예측 기간 구분',
      description: 'Time X축의 epoch millisecond 경계 이후만 점선으로 표현합니다. Zone은 계열을 추가하거나 데이터를 분할하지 않으며, 경계의 원본 관측값은 앞 구간에 포함됩니다.'
    }
  },
  render: () => createChartStoryContent({
    height: 420,
    width: 860,
    summary: 'Measured before Jul 05 / Forecast after Jul 05',
    initialization: {
      data: DATA.map(({
        index,
        value
      }) => ({
        date: new Date(Date.UTC(2026, 6, index + 1)),
        value: value + 80
      })),
      view: {
        paradigm: 'cartesian',
        options: {
          legend: {
            visible: true
          },
          tooltip: {
            enabled: true
          },
          line: {
            dots: true,
            lineWidth: 3
          },
          xAxis: {
            scale: 'time'
          },
          yAxis: {
            scale: 'linear',
            title: 'Demand'
          }
        },
        series: {
          id: 'demand',
          name: 'Demand',
          color: '#2563eb',
          encoding: {
            x: 'date',
            y: 'value'
          },
          zones: {
            axis: 'x',
            stops: [{
              value: Date.UTC(2026, 6, 5)
            }, {
              color: '#7c3aed',
              dash: [8, 4]
            }]
          }
        }
      }
    }
  })
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Value-based presentation',
      title: '누적과 축 방향이 바뀌어도 유지되는 분류 기준',
      description: 'Area의 구간은 누적된 축 좌표를 따르고, Bar는 각 데이터의 원본 값으로 분류합니다. inverted는 화면 방향만 바꾸며 zone의 논리 축과 분류 기준을 바꾸지 않습니다.'
    }
  },
  render: () => createChartShowcase([createStackedExample('area', false), createStackedExample('bar', true)])
}`,...i.parameters?.docs?.source}}};const y=["ZonesByChartType","ForecastPeriod","StackedAndInverted"];export{r as ForecastPeriod,i as StackedAndInverted,n as ZonesByChartType,y as __namedExportsOrder,v as default};
