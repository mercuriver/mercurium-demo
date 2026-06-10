import{e as y,g as h}from"./story-utils-BV4SlRn6.js";const x={title:"Overview/Dual Y-Axis",tags:["!autodocs"]},d={xAxisType:"category",series:[{key:"revenue",label:"Revenue ($K)",data:[{x:"Q1",y:520},{x:"Q2",y:610},{x:"Q3",y:580},{x:"Q4",y:720}]},{key:"margin",label:"Profit Margin (%)",data:[{x:"Q1",y:12},{x:"Q2",y:17},{x:"Q3",y:14},{x:"Q4",y:19}]}]},c={xAxisType:"category",series:[{key:"temp",label:"Temperature",data:[{x:"Jan",y:-2},{x:"Feb",y:1},{x:"Mar",y:7},{x:"Apr",y:14},{x:"May",y:20},{x:"Jun",y:25}]},{key:"humidity",label:"Humidity",data:[{x:"Jan",y:65},{x:"Feb",y:60},{x:"Mar",y:55},{x:"Apr",y:50},{x:"May",y:52},{x:"Jun",y:60}]}]},l={xAxisType:"category",series:[{key:"productA",label:"Product A Revenue",data:[{x:"Q1",y:120},{x:"Q2",y:180},{x:"Q3",y:150},{x:"Q4",y:200}]},{key:"productB",label:"Product B Revenue",data:[{x:"Q1",y:80},{x:"Q2",y:90},{x:"Q3",y:100},{x:"Q4",y:120}]},{key:"growth",label:"Growth Rate",data:[{x:"Q1",y:5},{x:"Q2",y:12},{x:"Q3",y:8},{x:"Q4",y:18}]}]},u={series:[{key:"pageviews",label:"Page Views",data:Array.from({length:12},(r,e)=>({x:new Date(2025,e,15),y:5e3+Math.round(Math.sin(e*.5)*2e3+e*400)}))},{key:"bounce-rate",label:"Bounce Rate (%)",data:Array.from({length:12},(r,e)=>({x:new Date(2025,e,15),y:45+Math.round(Math.cos(e*.4)*8)}))}]},t={parameters:{controls:{disable:!0}},render:r=>{const e=(o,m)=>({type:o,data:d,options:{frameTheme:r.frameTheme,yAxis:{title:"Revenue ($K)"},yAxis2:{title:"Profit Margin (%)"},yAxis2SeriesKeys:["margin"],legend:{show:!0,position:"bottom"},tooltip:{show:!0,shared:!0},crosshair:{show:!0,type:"x"},...o==="line"?{line:{curve:"smooth",dots:!0}}:{},...o==="bar"?{bar:{radius:2}}:{},...o==="area"?{area:{opacity:.4}}:{}},label:m});return y([e("line","Line"),e("bar","Bar"),e("area","Area"),e("scatter","Scatter")],{columns:2,cardHeight:280,hideDataSummary:!0})}},n={parameters:{controls:{disable:!0}},render:r=>h("combo",{xAxisType:"category",series:[{...d.series[0],seriesType:"bar"},{...d.series[1],seriesType:"line"}]},{frameTheme:r.frameTheme,bar:{radius:3},line:{curve:"smooth",dots:!0,width:2},yAxis:{title:"Revenue ($K)"},yAxis2:{title:"Profit Margin",format:e=>`${e}%`},yAxis2SeriesKeys:["margin"],legend:{show:!0,position:"bottom"},tooltip:{show:!0,shared:!0,highlightDots:!0},crosshair:{show:!0,type:"x"}},{width:720,height:400})},s={parameters:{controls:{disable:!0}},render:r=>h("line",c,{frameTheme:r.frameTheme,line:{curve:"smooth",dots:!0},xAxis:{title:"Month"},yAxis:{title:"Temperature",format:e=>`${e}°C`},yAxis2:{title:"Humidity",format:e=>`${e}%`},yAxis2SeriesKeys:["humidity"],legend:{show:!0,position:"bottom"},tooltip:{show:!0,shared:!0,highlightDots:!0},crosshair:{show:!0,type:"x"}},{width:720,height:380})},a={parameters:{controls:{disable:!0}},render:r=>h("bar",l,{frameTheme:r.frameTheme,bar:{stacked:!0},xAxis:{title:"Quarter"},yAxis:{title:"Revenue ($K)"},yAxis2:{title:"Growth Rate",format:e=>`${e}%`},yAxis2SeriesKeys:["growth"],legend:{show:!0,position:"bottom"},tooltip:{show:!0,shared:!0,highlightDots:!0},crosshair:{show:!0,type:"x"}},{width:720,height:380})},i={parameters:{controls:{disable:!0}},render:r=>h("combo",{xAxisType:"date",series:[{...u.series[0],seriesType:"area",opacity:.3},{...u.series[1],seriesType:"line"}]},{frameTheme:r.frameTheme,area:{opacity:.3},line:{curve:"smooth",width:2,dots:!0},yAxis:{title:"Page Views"},yAxis2:{title:"Bounce Rate",format:e=>`${e}%`},yAxis2SeriesKeys:["bounce-rate"],legend:{show:!0,position:"bottom"},tooltip:{show:!0,shared:!0,highlightDots:!0},crosshair:{show:!0,type:"x"}},{width:720,height:400})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const makeCard = (type: ChartGridCard['type'], label: string): ChartGridCard => ({
      type,
      data: REVENUE_VS_MARGIN,
      options: {
        frameTheme: args.frameTheme,
        yAxis: {
          title: 'Revenue ($K)'
        },
        yAxis2: {
          title: 'Profit Margin (%)'
        },
        yAxis2SeriesKeys: ['margin'],
        legend: {
          show: true,
          position: 'bottom'
        },
        tooltip: {
          show: true,
          shared: true
        },
        crosshair: {
          show: true,
          type: 'x'
        },
        ...(type === 'line' ? {
          line: {
            curve: 'smooth',
            dots: true
          }
        } : {}),
        ...(type === 'bar' ? {
          bar: {
            radius: 2
          }
        } : {}),
        ...(type === 'area' ? {
          area: {
            opacity: 0.4
          }
        } : {})
      },
      label
    });
    return renderChartGrid([makeCard('line', 'Line'), makeCard('bar', 'Bar'), makeCard('area', 'Area'), makeCard('scatter', 'Scatter')], {
      columns: 2,
      cardHeight: 280,
      hideDataSummary: true
    });
  }
}`,...t.parameters?.docs?.source},description:{story:`차트 타입별 dual Y-Axis 기본 표현 -- Line / Bar / Area / Scatter / Combo가
같은 revenue+margin 데이터에서 어떻게 렌더되는지.`,...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartSingle('combo', {
    xAxisType: 'category',
    series: [{
      ...REVENUE_VS_MARGIN.series[0],
      seriesType: 'bar'
    }, {
      ...REVENUE_VS_MARGIN.series[1],
      seriesType: 'line'
    }]
  }, {
    frameTheme: args.frameTheme,
    bar: {
      radius: 3
    },
    line: {
      curve: 'smooth',
      dots: true,
      width: 2
    },
    yAxis: {
      title: 'Revenue ($K)'
    },
    yAxis2: {
      title: 'Profit Margin',
      format: v => \`\${v}%\`
    },
    yAxis2SeriesKeys: ['margin'],
    legend: {
      show: true,
      position: 'bottom'
    },
    tooltip: {
      show: true,
      shared: true,
      highlightDots: true
    },
    crosshair: {
      show: true,
      type: 'x'
    }
  }, {
    width: 720,
    height: 400
  })
}`,...n.parameters?.docs?.source},description:{story:`Revenue vs Margin -- 매출(bar $K)과 이익률(line %)을 같은 시계열에 겹쳐
"매출이 오를 때 마진도 개선되는가?" 라는 질문에 답하는 구성.`,...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartSingle('line', TEMPERATURE_VS_HUMIDITY, {
    frameTheme: args.frameTheme,
    line: {
      curve: 'smooth',
      dots: true
    },
    xAxis: {
      title: 'Month'
    },
    yAxis: {
      title: 'Temperature',
      format: v => \`\${v}°C\`
    },
    yAxis2: {
      title: 'Humidity',
      format: v => \`\${v}%\`
    },
    yAxis2SeriesKeys: ['humidity'],
    legend: {
      show: true,
      position: 'bottom'
    },
    tooltip: {
      show: true,
      shared: true,
      highlightDots: true
    },
    crosshair: {
      show: true,
      type: 'x'
    }
  }, {
    width: 720,
    height: 380
  })
}`,...s.parameters?.docs?.source},description:{story:`Temperature + Humidity -- 기온(°C, primary)과 습도(%, secondary).
단위가 완전히 달라 per-axis format이 필수.`,...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartSingle('bar', STACKED_REVENUE_VS_GROWTH, {
    frameTheme: args.frameTheme,
    bar: {
      stacked: true
    },
    xAxis: {
      title: 'Quarter'
    },
    yAxis: {
      title: 'Revenue ($K)'
    },
    yAxis2: {
      title: 'Growth Rate',
      format: v => \`\${v}%\`
    },
    yAxis2SeriesKeys: ['growth'],
    legend: {
      show: true,
      position: 'bottom'
    },
    tooltip: {
      show: true,
      shared: true,
      highlightDots: true
    },
    crosshair: {
      show: true,
      type: 'x'
    }
  }, {
    width: 720,
    height: 380
  })
}`,...a.parameters?.docs?.source},description:{story:`Stacked Revenue + Growth rate -- primary 축에 Product A/B 매출이 stacked로
누적되고, secondary 축에 성장률 라인이 독립 렌더.`,...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartSingle('combo', {
    xAxisType: 'date',
    series: [{
      ...WEB_PAGEVIEWS_VS_BOUNCE.series[0],
      seriesType: 'area',
      opacity: 0.3
    }, {
      ...WEB_PAGEVIEWS_VS_BOUNCE.series[1],
      seriesType: 'line'
    }]
  }, {
    frameTheme: args.frameTheme,
    area: {
      opacity: 0.3
    },
    line: {
      curve: 'smooth',
      width: 2,
      dots: true
    },
    yAxis: {
      title: 'Page Views'
    },
    yAxis2: {
      title: 'Bounce Rate',
      format: v => \`\${v}%\`
    },
    yAxis2SeriesKeys: ['bounce-rate'],
    legend: {
      show: true,
      position: 'bottom'
    },
    tooltip: {
      show: true,
      shared: true,
      highlightDots: true
    },
    crosshair: {
      show: true,
      type: 'x'
    }
  }, {
    width: 720,
    height: 400
  })
}`,...i.parameters?.docs?.source},description:{story:`Web analytics scenario -- 페이지뷰와 이탈률처럼 "많을수록 좋은 지표"와
"낮을수록 좋은 지표"를 나란히 보는 전형적 웹 분석 구성.`,...i.parameters?.docs?.description}}};const g=["DualYAxisByChartType","RevenueVsMargin","TemperatureAndHumidity","StackedRevenueAndGrowth","PageviewsVsBounceRate"];export{t as DualYAxisByChartType,i as PageviewsVsBounceRate,n as RevenueVsMargin,a as StackedRevenueAndGrowth,s as TemperatureAndHumidity,g as __namedExportsOrder,x as default};
