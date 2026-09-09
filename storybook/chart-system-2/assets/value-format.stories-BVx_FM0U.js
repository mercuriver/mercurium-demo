import{c as i}from"./chart-showcase-D6LVIqI-.js";import{c as s}from"./chart-story-content-DqL3FnFI.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const c={title:"Features/Axes and Grid",parameters:{controls:{disable:!0}}},n={parameters:{storyHeader:{eyebrow:"Axis and point values",title:"축에서 정한 단위를 툴팁과 수치 라벨까지 공유",description:"매출 축의 통화와 이익률 축의 퍼센트를 한 번씩 선언합니다. 각 계열의 툴팁과 라벨은 연결된 축의 선언형 포맷을 따릅니다."}},render:()=>s({width:840,height:440,summary:"Revenue and profit margin · shared declarative formats",initialization:{data:[18e3,23500,21500,29e3].map((a,e)=>({quarter:`Q${e+1}`,sales:a,margin:[12.5,16.2,14.8,20.1][e]})),view:{paradigm:"cartesian",series:[{id:"sales",name:"Revenue",type:"bar",yAxisId:"money",encoding:{x:"quarter",y:"sales"}},{id:"margin",name:"Profit margin",type:"line",yAxisId:"rate",encoding:{x:"quarter",y:"margin"}}],options:{xAxis:{scale:"category"},yAxis:[{id:"money",scale:"linear",min:0,max:4e4,valueFormat:{valuePrefix:"$",thousandsSeparator:!0}},{id:"rate",scale:"linear",min:0,max:30,opposite:!0,valueFormat:{valueSuffix:"%",valueDecimals:1}}],animation:{enabled:!1},legend:{visible:!0},tooltip:{shared:!0},dataLabels:{visible:!0},line:{dots:!0}}}}})},r={parameters:{storyHeader:{eyebrow:"Formatting inheritance and overrides",title:"눈금은 간결하게, 툴팁은 정밀하게, 보고서는 목적에 맞게",description:"두 차트 모두 축의 valueFormat을 공유합니다. axis.labels는 눈금만 바꾸고, tooltip과 dataLabels의 valueFormat은 각 출력에서 필요한 속성만 덮어씁니다. 라벨 formatter의 defaultValue에는 상속과 덮어쓰기를 마친 문자열이 전달됩니다."}},render:()=>i([!1,!0].map(a=>({title:a?"Local overrides · tooltip and report":"Inherited values · compact ticks",description:a?"툴팁은 18,420.25 USD, 보고서 라벨은 $18,420 actual처럼 표시합니다. 눈금은 두 차트 모두 $10k 단위로 줄입니다.":"눈금만 $10k처럼 줄여도 툴팁과 보고서 라벨에는 $18,420.25처럼 원래 통화와 정밀도가 유지됩니다.",height:340,initialization:{data:[18420.25,23750.8,21960.5].map((e,t)=>({quarter:`Q${t+1}`,sales:e})),view:{paradigm:"cartesian",type:"bar",series:{id:"sales",name:"Revenue",encoding:{x:"quarter",y:"sales"}},options:{animation:{enabled:!1},xAxis:{scale:"category"},yAxis:{scale:"linear",min:0,max:3e4,ticks:{strategy:"count",count:4},valueFormat:{valuePrefix:"$",thousandsSeparator:!0,valueDecimals:2},labels:{formatter:(e,{defaultLabel:t})=>typeof e=="number"?`$${e/1e3}k`:t}},tooltip:{enabled:!0,...a?{valueFormat:{valuePrefix:"",valueSuffix:" USD"}}:{}},dataLabels:{visible:!0,...a?{valueFormat:{valueDecimals:0},formatter:({defaultValue:e})=>`${e} actual`}:{}}}}}})))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Axis and point values',
      title: '축에서 정한 단위를 툴팁과 수치 라벨까지 공유',
      description: '매출 축의 통화와 이익률 축의 퍼센트를 한 번씩 선언합니다. 각 계열의 툴팁과 라벨은 연결된 축의 선언형 포맷을 따릅니다.'
    }
  },
  render: () => createChartStoryContent({
    width: 840,
    height: 440,
    summary: 'Revenue and profit margin · shared declarative formats',
    initialization: {
      data: [18000, 23500, 21500, 29000].map((sales, index) => ({
        quarter: \`Q\${index + 1}\`,
        sales,
        margin: [12.5, 16.2, 14.8, 20.1][index]
      })),
      view: {
        paradigm: 'cartesian',
        series: [{
          id: 'sales',
          name: 'Revenue',
          type: 'bar',
          yAxisId: 'money',
          encoding: {
            x: 'quarter',
            y: 'sales'
          }
        }, {
          id: 'margin',
          name: 'Profit margin',
          type: 'line',
          yAxisId: 'rate',
          encoding: {
            x: 'quarter',
            y: 'margin'
          }
        }],
        options: {
          xAxis: {
            scale: 'category'
          },
          yAxis: [{
            id: 'money',
            scale: 'linear',
            min: 0,
            max: 40000,
            valueFormat: {
              valuePrefix: '$',
              thousandsSeparator: true
            }
          }, {
            id: 'rate',
            scale: 'linear',
            min: 0,
            max: 30,
            opposite: true,
            valueFormat: {
              valueSuffix: '%',
              valueDecimals: 1
            }
          }],
          animation: {
            enabled: false
          },
          legend: {
            visible: true
          },
          tooltip: {
            shared: true
          },
          dataLabels: {
            visible: true
          },
          line: {
            dots: true
          }
        }
      }
    }
  })
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Formatting inheritance and overrides',
      title: '눈금은 간결하게, 툴팁은 정밀하게, 보고서는 목적에 맞게',
      description: '두 차트 모두 축의 valueFormat을 공유합니다. axis.labels는 눈금만 바꾸고, tooltip과 dataLabels의 valueFormat은 각 출력에서 필요한 속성만 덮어씁니다. 라벨 formatter의 defaultValue에는 상속과 덮어쓰기를 마친 문자열이 전달됩니다.'
    }
  },
  render: () => createChartShowcase([false, true].map(overrideValues => ({
    title: overrideValues ? 'Local overrides · tooltip and report' : 'Inherited values · compact ticks',
    description: overrideValues ? '툴팁은 18,420.25 USD, 보고서 라벨은 $18,420 actual처럼 표시합니다. 눈금은 두 차트 모두 $10k 단위로 줄입니다.' : '눈금만 $10k처럼 줄여도 툴팁과 보고서 라벨에는 $18,420.25처럼 원래 통화와 정밀도가 유지됩니다.',
    height: 340,
    initialization: {
      data: [18420.25, 23750.8, 21960.5].map((sales, index) => ({
        quarter: \`Q\${index + 1}\`,
        sales
      })),
      view: {
        paradigm: 'cartesian',
        type: 'bar',
        series: {
          id: 'sales',
          name: 'Revenue',
          encoding: {
            x: 'quarter',
            y: 'sales'
          }
        },
        options: {
          animation: {
            enabled: false
          },
          xAxis: {
            scale: 'category'
          },
          yAxis: {
            scale: 'linear',
            min: 0,
            max: 30000,
            ticks: {
              strategy: 'count',
              count: 4
            },
            valueFormat: {
              valuePrefix: '$',
              thousandsSeparator: true,
              valueDecimals: 2
            },
            labels: {
              formatter: (value, {
                defaultLabel
              }) => typeof value === 'number' ? \`$\${value / 1000}k\` : defaultLabel
            }
          },
          tooltip: {
            enabled: true,
            ...(overrideValues ? {
              valueFormat: {
                valuePrefix: '',
                valueSuffix: ' USD'
              }
            } : {})
          },
          dataLabels: {
            visible: true,
            ...(overrideValues ? {
              valueFormat: {
                valueDecimals: 0
              },
              formatter: ({
                defaultValue
              }) => \`\${defaultValue} actual\`
            } : {})
          }
        }
      }
    }
  })))
}`,...r.parameters?.docs?.source}}};const p=["SharedValueFormats","FormatOverrides"];export{r as FormatOverrides,n as SharedValueFormats,p as __namedExportsOrder,c as default};
