import{r as n,C as s}from"./chart-playground-Cf0d2JJL.js";import{n as r}from"./chart-playground-data-DVQ9OxHY.js";import"./chart-BUQmp9vc.js";import"./chart-story-content-DqL3FnFI.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";import"./chart-theme-controls-8C4PR6_3.js";const d={...s,title:"Charts/OHLC"},e={args:{legendAssigned:!1,ohlcOptions:{decreasingColor:"#dc2626",increasingColor:"#16a34a",lineWidth:2,tickLength:7},seriesOptions:[{encoding:{close:"close",high:"high",low:"low",open:"open",x:"session"},id:"price-range",name:"Daily price range",type:"ohlc"}],storyData:r,xAxisOptions:{scale:"category",title:"August session"},yAxisOptions:{labels:{valuePrefix:"$"},scale:"linear",title:"Price"}},name:"OHLC",parameters:{storyHeader:{description:"각 세션의 Low–High 범위와 왼쪽 Open·오른쪽 Close tick, 상승·하락 색상 옵션을 확인합니다.",eyebrow:"Charts · OHLC",title:"OHLC 차트"}},render:n};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    legendAssigned: false,
    ohlcOptions: {
      decreasingColor: '#dc2626',
      increasingColor: '#16a34a',
      lineWidth: 2,
      tickLength: 7
    },
    seriesOptions: [{
      encoding: {
        close: 'close',
        high: 'high',
        low: 'low',
        open: 'open',
        x: 'session'
      },
      id: 'price-range',
      name: 'Daily price range',
      type: 'ohlc'
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
  name: 'OHLC',
  parameters: {
    storyHeader: {
      description: '각 세션의 Low–High 범위와 왼쪽 Open·오른쪽 Close tick, 상승·하락 색상 옵션을 확인합니다.',
      eyebrow: 'Charts · OHLC',
      title: 'OHLC 차트'
    } satisfies StoryHeaderParameters
  },
  render: renderCartesianPlayground
}`,...e.parameters?.docs?.source}}};const g=["Ohlc"];export{e as Ohlc,g as __namedExportsOrder,d as default};
