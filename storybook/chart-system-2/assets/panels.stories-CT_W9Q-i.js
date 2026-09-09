import{c as e}from"./chart-story-content-DqL3FnFI.js";import{N as m,a as p,c as d}from"./chart-navigator-story-D7Yqhm3h.js";import{P as c,c as t}from"./chart-panel-story-BMzDnQLt.js";import{C as h}from"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";import"./chart-story-initialization-BYlsHDAa.js";const b={parameters:{controls:{disable:!0}},title:"Examples/Panels"},r={name:"Vertical 4",parameters:{storyHeader:{description:"하나의 Chart와 Canvas 안에서 title·legend·시간 domain을 공유하고 네 가지 분석 조합을 세로 패널로 비교합니다.",eyebrow:"Examples · Panels",title:"이기종 미니 차트 · 세로 4칸"}},render:()=>e({height:1020,initialization:t(1),summary:"1 Chart · 1 Canvas · 4 panels · synchronized X domain",width:1e3})},o={name:"2 × 2",parameters:{storyHeader:{description:"동일한 패널 정의를 2열 auto-flow로 배치해 공통 데이터 범위와 패널별 Y 좌표계를 함께 확인합니다.",eyebrow:"Examples · Panels",title:"이기종 미니 차트 · 2 × 2"}},render:()=>e({height:680,initialization:t(2),summary:"1 Chart · 1 Canvas · 2 columns × 2 rows · synchronized X domain",width:1e3})},i={name:"Horizontal 4",parameters:{storyHeader:{description:"네 패널을 한 행에 배치해 좁은 panel에서도 동일한 시간 domain과 자동 tick 생략이 유지되는지 확인합니다.",eyebrow:"Examples · Panels",title:"이기종 미니 차트 · 가로 4칸"}},render:()=>e({height:440,initialization:t(4),summary:"1 Chart · 1 Canvas · 4 columns · synchronized X domain",width:1e3})},s={name:"Interaction controls",args:{...c,crosshairSync:!1,tooltipSync:!1},argTypes:{crosshairDirection:{control:"select",options:Object.values(h)},crosshairEnabled:{control:"boolean"},crosshairSync:{control:"boolean"},highlightDots:{control:"boolean"},snapDistance:{control:{type:"range",min:0,max:10,step:.5}},tooltipSync:{control:"boolean"}},parameters:{controls:{disable:!1},storyHeader:{description:"각 패널에서 툴팁 거리와 데이터 강조를 확인하고, crosshair와 tooltip의 패널 연동을 각각 전환합니다. 거리 0은 실제 mark, 10은 그래프 전체에서 최근접 데이터를 선택합니다.",eyebrow:"Examples · Panels",title:"패널 상호작용 · 개별 및 동기화"}},render:n=>e({height:680,initialization:t(2,n),summary:"Crosshair · Tooltip · Active data highlight",width:1e3})},l={name:"Navigator controls",args:{...p,columns:1,tooltipSync:!0},argTypes:{...m,columns:{control:"select",options:[1,2,4]},tooltipSync:{control:"boolean"}},parameters:{controls:{disable:!1},storyHeader:{description:"하나의 Chart 안에 있는 네 패널을 하나의 Navigator로 제어합니다. top/bottom은 공통 시간 구간을 이동하고, left/right는 각 패널 Y축에 같은 선택 비율을 적용합니다. 범례로 계열을 숨기고 복원할 수 있으며, Controls에서 토글·배치·눈금·미리보기·툴팁 동기화를 바꿀 수 있습니다.",eyebrow:"Examples · Panels",title:"서비스 지표 패널 · 공통 Navigator"}},render:n=>{const a=t(n.columns,{...c,tooltipSync:n.tooltipSync});return e({height:{1:1100,2:760,4:540}[n.columns]??760,initialization:{...a,view:{...a.view,options:{...a.view.options,legend:{...a.view.options.legend,size:76,toggle:n.legendToggle},navigator:d(n,["trend","latency"])}}},summary:"1 Chart · 1 Canvas · 4 panels · 핸들로 확대 후 중앙 드래그로 구간 이동",width:1e3})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Vertical 4',
  parameters: {
    storyHeader: {
      description: '하나의 Chart와 Canvas 안에서 title·legend·시간 domain을 공유하고 네 가지 분석 조합을 세로 패널로 비교합니다.',
      eyebrow: 'Examples · Panels',
      title: '이기종 미니 차트 · 세로 4칸'
    } satisfies StoryHeaderParameters
  },
  render: () => createChartStoryContent({
    height: 1_020,
    initialization: createMultiPanelInitialization(1),
    summary: '1 Chart · 1 Canvas · 4 panels · synchronized X domain',
    width: 1_000
  })
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '2 × 2',
  parameters: {
    storyHeader: {
      description: '동일한 패널 정의를 2열 auto-flow로 배치해 공통 데이터 범위와 패널별 Y 좌표계를 함께 확인합니다.',
      eyebrow: 'Examples · Panels',
      title: '이기종 미니 차트 · 2 × 2'
    } satisfies StoryHeaderParameters
  },
  render: () => createChartStoryContent({
    height: 680,
    initialization: createMultiPanelInitialization(2),
    summary: '1 Chart · 1 Canvas · 2 columns × 2 rows · synchronized X domain',
    width: 1_000
  })
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal 4',
  parameters: {
    storyHeader: {
      description: '네 패널을 한 행에 배치해 좁은 panel에서도 동일한 시간 domain과 자동 tick 생략이 유지되는지 확인합니다.',
      eyebrow: 'Examples · Panels',
      title: '이기종 미니 차트 · 가로 4칸'
    } satisfies StoryHeaderParameters
  },
  render: () => createChartStoryContent({
    height: 440,
    initialization: createMultiPanelInitialization(4),
    summary: '1 Chart · 1 Canvas · 4 columns · synchronized X domain',
    width: 1_000
  })
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Interaction controls',
  args: {
    ...PANEL_INTERACTION_ARGS,
    crosshairSync: false,
    tooltipSync: false
  },
  argTypes: {
    crosshairDirection: {
      control: 'select',
      options: Object.values(CHART_DIRECTION)
    },
    crosshairEnabled: {
      control: 'boolean'
    },
    crosshairSync: {
      control: 'boolean'
    },
    highlightDots: {
      control: 'boolean'
    },
    snapDistance: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 0.5
      }
    },
    tooltipSync: {
      control: 'boolean'
    }
  },
  parameters: {
    controls: {
      disable: false
    },
    storyHeader: {
      description: '각 패널에서 툴팁 거리와 데이터 강조를 확인하고, crosshair와 tooltip의 패널 연동을 각각 전환합니다. 거리 0은 실제 mark, 10은 그래프 전체에서 최근접 데이터를 선택합니다.',
      eyebrow: 'Examples · Panels',
      title: '패널 상호작용 · 개별 및 동기화'
    } satisfies StoryHeaderParameters
  },
  render: args => createChartStoryContent({
    height: 680,
    initialization: createMultiPanelInitialization(2, args),
    summary: 'Crosshair · Tooltip · Active data highlight',
    width: 1_000
  })
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Navigator controls',
  args: {
    ...NAVIGATOR_STORY_ARGS,
    columns: 1,
    tooltipSync: true
  },
  argTypes: {
    ...NAVIGATOR_STORY_ARG_TYPES,
    columns: {
      control: 'select',
      options: [1, 2, 4]
    },
    tooltipSync: {
      control: 'boolean'
    }
  },
  parameters: {
    controls: {
      disable: false
    },
    storyHeader: {
      description: '하나의 Chart 안에 있는 네 패널을 하나의 Navigator로 제어합니다. top/bottom은 공통 시간 구간을 이동하고, left/right는 각 패널 Y축에 같은 선택 비율을 적용합니다. 범례로 계열을 숨기고 복원할 수 있으며, Controls에서 토글·배치·눈금·미리보기·툴팁 동기화를 바꿀 수 있습니다.',
      eyebrow: 'Examples · Panels',
      title: '서비스 지표 패널 · 공통 Navigator'
    } satisfies StoryHeaderParameters
  },
  render: args => {
    const initialization = createMultiPanelInitialization(args.columns, {
      ...PANEL_INTERACTION_ARGS,
      tooltipSync: args.tooltipSync
    });
    const heights: Record<number, number> = {
      1: 1_100,
      2: 760,
      4: 540
    };
    return createChartStoryContent({
      height: heights[args.columns] ?? 760,
      initialization: {
        ...initialization,
        view: {
          ...initialization.view,
          options: {
            ...initialization.view.options,
            legend: {
              ...initialization.view.options.legend,
              size: 76,
              toggle: args.legendToggle
            },
            navigator: createStoryNavigator(args, ['trend', 'latency'])
          }
        }
      },
      summary: '1 Chart · 1 Canvas · 4 panels · 핸들로 확대 후 중앙 드래그로 구간 이동',
      width: 1_000
    });
  }
}`,...l.parameters?.docs?.source}}};const w=["PanelsVertical","PanelsGrid","PanelsHorizontal","PanelsInteraction","NavigatorControls"];export{l as NavigatorControls,o as PanelsGrid,i as PanelsHorizontal,s as PanelsInteraction,r as PanelsVertical,w as __namedExportsOrder,b as default};
