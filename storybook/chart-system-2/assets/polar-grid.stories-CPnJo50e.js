import{c as o}from"./chart-story-content-DqL3FnFI.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const r={CONTAINER:"Container",GRID:"Grid",RADIAL_AXIS:"Radial axis"},s={data:[{category:"Desktop",share:52},{category:"Mobile",share:38},{category:"Tablet",share:10}],view:{options:{grid:{count:12,visible:!0},innerRadius:.65,legend:{position:"right",visible:!0},startAngle:-90,title:{text:"Traffic by device"}},paradigm:"polar",series:{encoding:{label:"category",value:"share"},id:"device-share",name:"Device share"}}},d={data:[{metric:"Performance",product:"Mercury",score:84},{metric:"Usability",product:"Mercury",score:91},{metric:"Reliability",product:"Mercury",score:88}],view:{options:{grid:{visible:!0},legend:{visible:!0},radialAxis:{max:100,min:0,tickCount:5},title:{text:"Product comparison"}},paradigm:"polar",series:{encoding:{axis:"metric",series:"product",value:"score"},id:"product-score",name:"Product score"},type:"radar"}},m={title:"Features/Axes and Grid",args:{gridCount:12,gridVisible:!0,height:420,radialAxisVisible:!0,radialTickCount:5,width:720},argTypes:{height:{control:{max:720,min:240,step:20,type:"range"},name:"container.height",table:{category:r.CONTAINER}},width:{control:{max:1080,min:280,step:20,type:"range"},name:"container.width",table:{category:r.CONTAINER}},gridVisible:{control:"boolean",name:"grid.visible",table:{category:r.GRID}},gridCount:{control:{max:36,min:1,step:1,type:"range"},name:"grid.count",table:{category:r.GRID}},radialTickCount:{control:{max:12,min:1,step:1,type:"range"},name:"radialAxis.tickCount",table:{category:r.RADIAL_AXIS}},radialAxisVisible:{control:"boolean",name:"radialAxis.visible",table:{category:r.RADIAL_AXIS}}},parameters:{controls:{sort:"none"}}},c=i=>{const{data:n,view:e}=s;return{data:n,view:{...e,options:{...e.options,grid:{count:i.gridCount,visible:i.gridVisible},legend:{...e.options.legend,visible:!1}}}}},l=i=>{const{data:n,view:e}=d;return{data:n,view:{...e,options:{...e.options,grid:{visible:i.gridVisible},legend:{...e.options.legend,visible:!1},radialAxis:{...e.options.radialAxis,tickCount:i.radialTickCount,visible:i.radialAxisVisible}}}}},t={name:"Pie and Donut guides",parameters:{controls:{include:["container.height","container.width","grid.visible","grid.count"]},storyHeader:{description:"Donut의 빈 중심에서 startAngle부터 균등한 각도의 가이드를 확인합니다. 각 가이드는 값의 눈금이나 조각 경계를 의미하지 않으며, 일반 구성비 표시는 grid를 끈 상태를 권장합니다.",eyebrow:"Polar · Pie",title:"Pie 방사형 기준선"}},render:i=>o({height:i.height,initialization:c(i),width:i.width})},a={name:"Radar scale and grid",parameters:{controls:{include:["container.height","container.width","grid.visible","radialAxis.tickCount","radialAxis.visible"]},storyHeader:{description:"radialAxis.tickCount만큼 동심 grid를 만들고, encoded axis 범주를 축선과 레이블로 표시합니다.",eyebrow:"Polar · Radar",title:"Radar 방사형 좌표 기준"}},render:i=>o({height:i.height,initialization:l(i),width:i.width})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Pie and Donut guides',
  parameters: {
    controls: {
      include: ['container.height', 'container.width', 'grid.visible', 'grid.count']
    },
    storyHeader: {
      description: 'Donut의 빈 중심에서 startAngle부터 균등한 각도의 가이드를 확인합니다. 각 가이드는 값의 눈금이나 조각 경계를 의미하지 않으며, 일반 구성비 표시는 grid를 끈 상태를 권장합니다.',
      eyebrow: 'Polar · Pie',
      title: 'Pie 방사형 기준선'
    } satisfies StoryHeaderParameters
  },
  render: args => createChartStoryContent({
    height: args.height,
    initialization: createPieGridInitialization(args),
    width: args.width
  })
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Radar scale and grid',
  parameters: {
    controls: {
      include: ['container.height', 'container.width', 'grid.visible', 'radialAxis.tickCount', 'radialAxis.visible']
    },
    storyHeader: {
      description: 'radialAxis.tickCount만큼 동심 grid를 만들고, encoded axis 범주를 축선과 레이블로 표시합니다.',
      eyebrow: 'Polar · Radar',
      title: 'Radar 방사형 좌표 기준'
    } satisfies StoryHeaderParameters
  },
  render: args => createChartStoryContent({
    height: args.height,
    initialization: createRadarGridInitialization(args),
    width: args.width
  })
}`,...a.parameters?.docs?.source}}};const b=["PieGrid","RadarGrid"];export{t as PieGrid,a as RadarGrid,b as __namedExportsOrder,m as default};
