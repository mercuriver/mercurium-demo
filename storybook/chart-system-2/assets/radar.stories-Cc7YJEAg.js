import{c as r}from"./chart-story-content-DqL3FnFI.js";import{P as t,C as i,a as s,b as o,c as n,d,r as c,e as p}from"./chart-theme-controls-8C4PR6_3.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const l=[{metric:"Speed",score:82},{metric:"Quality",score:74},{metric:"Cost",score:61},{metric:"Safety",score:90},{metric:"Reach",score:68}],h={title:"Charts/Radar",args:{...d,...n,...o,appearance:{},gridAssigned:!0,gridOptions:{visible:!0},radialAxisAssigned:!0,radialAxisOptions:{max:100,min:0,tickCount:5,visible:!0},seriesOptions:{encoding:{axis:"metric",value:"score"},id:"score",name:"Score"}},argTypes:{...s,...i,...t,appearance:{control:"object",name:"mark appearance",table:{category:"Plot · Mark"}},gridAssigned:{control:"boolean",name:"grid · assign",table:{category:"Plot · Grid"}},gridOptions:{control:"object",name:"grid",table:{category:"Plot · Grid"}},radialAxisAssigned:{control:"boolean",name:"radialAxis · assign",table:{category:"Plot · Radar axis"}},radialAxisOptions:{control:"object",name:"radialAxis",table:{category:"Plot · Radar axis"}},seriesOptions:{control:"object",name:"view.series",table:{category:"View · Mapping"}}},parameters:{controls:{sort:"none"}}},m=e=>({...p(e),...e.appearance,...e.gridAssigned?{grid:e.gridOptions}:{},...e.legendAssigned?{legend:e.legendOptions}:{},...e.radialAxisAssigned?{radialAxis:e.radialAxisOptions}:{}}),a={name:"Radar",parameters:{storyHeader:{description:"Radar 데이터 mark와 색상, tooltip, grid, 범례를 공개 옵션으로 확인합니다.",eyebrow:"Charts · Radar",title:"Radar 차트"}},render:e=>r({height:e.height,initialization:{data:l,theme:c(e),view:{options:m(e),paradigm:"polar",series:e.seriesOptions,type:"radar"}},summary:"Radar · Canvas",width:e.width})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Radar',
  parameters: {
    storyHeader: {
      description: 'Radar 데이터 mark와 색상, tooltip, grid, 범례를 공개 옵션으로 확인합니다.',
      eyebrow: 'Charts · Radar',
      title: 'Radar 차트'
    } satisfies StoryHeaderParameters
  },
  render: args => createChartStoryContent({
    height: args.height,
    initialization: {
      data: DATA,
      theme: resolveChartThemeOptions(args),
      view: {
        options: createOptions(args),
        paradigm: 'polar',
        series: args.seriesOptions,
        type: 'radar'
      }
    },
    summary: 'Radar · Canvas',
    width: args.width
  })
}`,...a.parameters?.docs?.source}}};const _=["Radar"];export{a as Radar,_ as __namedExportsOrder,h as default};
