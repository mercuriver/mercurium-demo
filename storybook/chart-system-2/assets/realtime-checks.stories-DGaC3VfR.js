import{c as n,C as t,a as s}from"./cartesian-realtime-story-vixfK08p.js";import{m as o}from"./chart-BUQmp9vc.js";import"./chart-story-inspector-CDhlPLCD.js";const i={STEP:"step"},l={...s,title:"Regression/Realtime",tags:["regression"]},e={args:{autoStart:!1,interval:1e3,pendingMode:t.GAP},name:"Regression · Flow gap cadence · 1 second",parameters:{storyHeader:{description:"1초 cadence에서 확정 데이터로 시작한 뒤 재생 중에만 오른쪽 공백이 자라고, 다음 데이터가 도착하면 즉시 채워지는 빠른 회귀 예제입니다.",eyebrow:"1 second interval",title:"빠른 실시간 흐름과 임시 공백"}},render:n},r={args:{autoStart:!1,interval:3e4,pendingMode:t.GAP,rangeOverflowMode:o.CATCH_UP,rangeOverflowSpeed:4},name:"Regression · Flow gap cadence · 30 seconds",parameters:{storyHeader:{description:"30초 cadence에서도 고정된 여백을 두지 않습니다. 수동으로 표본을 선행 확보하면 최신 시각까지 빠르게 수렴하고, 이후 다음 도착 시각을 향해 공백이 천천히 자라는지 확인합니다.",eyebrow:"30 second interval",title:"느린 실시간 흐름과 임시 공백"}},render:n},a={args:{autoStart:!1,motionMode:i.STEP,updateDuration:1200},name:"Regression · Step · Manual replay",parameters:{storyHeader:{description:"자동 진행을 멈춘 동일 fixture에서 5초 단위 교체를 수동 재생합니다. 미래 여백 없이 전환 중 퇴장점과 진입점을 함께 렌더링해 왼쪽 mark가 먼저 사라지는 회귀를 확인합니다.",eyebrow:"Discrete step · Manual",title:"결정적 실시간 전환 재생"}},render:n};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    autoStart: false,
    interval: 1_000,
    pendingMode: CARTESIAN_REALTIME_PENDING_MODE.GAP
  },
  name: 'Regression · Flow gap cadence · 1 second',
  parameters: {
    storyHeader: {
      description: '1초 cadence에서 확정 데이터로 시작한 뒤 재생 중에만 오른쪽 공백이 자라고, 다음 데이터가 도착하면 즉시 채워지는 빠른 회귀 예제입니다.',
      eyebrow: '1 second interval',
      title: '빠른 실시간 흐름과 임시 공백'
    } satisfies StoryHeaderParameters
  },
  render: createCartesianRealtimeStory
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    autoStart: false,
    interval: 30_000,
    pendingMode: CARTESIAN_REALTIME_PENDING_MODE.GAP,
    rangeOverflowMode: CARTESIAN_RANGE_OVERFLOW_MODE.CATCH_UP,
    rangeOverflowSpeed: 4
  },
  name: 'Regression · Flow gap cadence · 30 seconds',
  parameters: {
    storyHeader: {
      description: '30초 cadence에서도 고정된 여백을 두지 않습니다. 수동으로 표본을 선행 확보하면 최신 시각까지 빠르게 수렴하고, 이후 다음 도착 시각을 향해 공백이 천천히 자라는지 확인합니다.',
      eyebrow: '30 second interval',
      title: '느린 실시간 흐름과 임시 공백'
    } satisfies StoryHeaderParameters
  },
  render: createCartesianRealtimeStory
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    autoStart: false,
    motionMode: REALTIME_MOTION_MODE.STEP,
    updateDuration: 1_200
  },
  name: 'Regression · Step · Manual replay',
  parameters: {
    storyHeader: {
      description: '자동 진행을 멈춘 동일 fixture에서 5초 단위 교체를 수동 재생합니다. 미래 여백 없이 전환 중 퇴장점과 진입점을 함께 렌더링해 왼쪽 mark가 먼저 사라지는 회귀를 확인합니다.',
      eyebrow: 'Discrete step · Manual',
      title: '결정적 실시간 전환 재생'
    } satisfies StoryHeaderParameters
  },
  render: createCartesianRealtimeStory
}`,...a.parameters?.docs?.source}}};const m=["FlowGapOneSecond","FlowGapThirtySeconds","DeterministicStepReplay"];export{a as DeterministicStepReplay,e as FlowGapOneSecond,r as FlowGapThirtySeconds,m as __namedExportsOrder,l as default};
