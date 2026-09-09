import{r as n,C as s}from"./chart-playground-Cf0d2JJL.js";import{n as i}from"./chart-playground-data-DVQ9OxHY.js";import"./chart-BUQmp9vc.js";import"./chart-story-content-DqL3FnFI.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";import"./chart-theme-controls-8C4PR6_3.js";const p={...s,title:"Charts/Candlestick"},e={args:{candlestickOptions:{bodyWidth:.68,decreasingColor:"#dc2626",increasingColor:"#16a34a",lineWidth:1.5},seriesOptions:[{encoding:{close:"close",high:"high",low:"low",open:"open",x:"session"},id:"price",name:"Daily price",type:"candlestick"}],storyData:i,xAxisOptions:{scale:"category",title:"August session"},yAxisOptions:{labels:{valuePrefix:"$"},scale:"linear",title:"Price"}},name:"Candlestick",parameters:{storyHeader:{description:"OHLC mapping을 wick과 Open–Close body로 변환하고 상승·하락 방향 색상과 body 폭을 확인합니다.",eyebrow:"Charts · Candlestick",title:"Candlestick 차트"}},render:n};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    candlestickOptions: {
      bodyWidth: 0.68,
      decreasingColor: '#dc2626',
      increasingColor: '#16a34a',
      lineWidth: 1.5
    },
    seriesOptions: [{
      encoding: {
        close: 'close',
        high: 'high',
        low: 'low',
        open: 'open',
        x: 'session'
      },
      id: 'price',
      name: 'Daily price',
      type: 'candlestick'
    }],
    storyData: CARTESIAN_OHLC_DATA,
    xAxisOptions: {
      scale: 'category',
      title: 'August session'
    },
    yAxisOptions: {
      labels: {
        valuePrefix: '$'
      },
      scale: 'linear',
      title: 'Price'
    }
  },
  name: 'Candlestick',
  parameters: {
    storyHeader: {
      description: 'OHLC mapping을 wick과 Open–Close body로 변환하고 상승·하락 방향 색상과 body 폭을 확인합니다.',
      eyebrow: 'Charts · Candlestick',
      title: 'Candlestick 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...e.parameters?.docs?.source}}};const C=["Candlestick"];export{e as Candlestick,C as __namedExportsOrder,p as default};
