import{c as t,C as n,a as o}from"./cartesian-realtime-story-vixfK08p.js";import"./chart-BUQmp9vc.js";import"./chart-story-inspector-CDhlPLCD.js";const s={STEP:"step"},m={...o,title:"Features/Realtime"},e={args:{autoStart:!1},name:"Live · Flow · Hold last",parameters:{storyHeader:{description:"확정 데이터가 오른쪽 끝에 맞닿은 상태로 시작합니다. 재생하면 다음 도착 전까지만 마지막 값을 낮은 투명도의 pending line으로 연장하고, 도착 순간 실제 값으로 교체합니다.",eyebrow:"Continuous flow · Hold last",title:"마지막 값을 임시 연장하는 실시간 흐름"}},render:t},r={args:{autoStart:!1,interval:5e3,pendingMode:n.GAP},name:"Live · Flow · Gap",parameters:{storyHeader:{description:"다음 표본의 시각 경계만 예약하고 값을 추정하지 않습니다. 오른쪽 실제 공백은 데이터 도착 직후 0이 되고, 시간 창이 흐르는 동안 최대 한 interval까지 다시 자랍니다.",eyebrow:"Continuous flow · Gap",title:"빈 영역을 유지하는 실시간 흐름"}},render:t},a={args:{motionMode:s.STEP},name:"Live · Step · Auto arrival",parameters:{storyHeader:{description:"미래 시각 경계나 pending series를 만들지 않습니다. 새 표본이 도착할 때만 퇴장 mark를 전환이 끝날 때까지 보존하면서 1.2초 동안 기존 geometry를 왼쪽으로 밀어냅니다.",eyebrow:"Discrete step · Automatic",title:"데이터 도착 시 이동하는 실시간 차트"}},render:t};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    autoStart: false
  },
  name: 'Live · Flow · Hold last',
  parameters: {
    storyHeader: {
      description: '확정 데이터가 오른쪽 끝에 맞닿은 상태로 시작합니다. 재생하면 다음 도착 전까지만 마지막 값을 낮은 투명도의 pending line으로 연장하고, 도착 순간 실제 값으로 교체합니다.',
      eyebrow: 'Continuous flow · Hold last',
      title: '마지막 값을 임시 연장하는 실시간 흐름'
    } satisfies StoryHeaderParameters
  },
  render: createCartesianRealtimeStory
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    autoStart: false,
    interval: 5_000,
    pendingMode: CARTESIAN_REALTIME_PENDING_MODE.GAP
  },
  name: 'Live · Flow · Gap',
  parameters: {
    storyHeader: {
      description: '다음 표본의 시각 경계만 예약하고 값을 추정하지 않습니다. 오른쪽 실제 공백은 데이터 도착 직후 0이 되고, 시간 창이 흐르는 동안 최대 한 interval까지 다시 자랍니다.',
      eyebrow: 'Continuous flow · Gap',
      title: '빈 영역을 유지하는 실시간 흐름'
    } satisfies StoryHeaderParameters
  },
  render: createCartesianRealtimeStory
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    motionMode: REALTIME_MOTION_MODE.STEP
  },
  name: 'Live · Step · Auto arrival',
  parameters: {
    storyHeader: {
      description: '미래 시각 경계나 pending series를 만들지 않습니다. 새 표본이 도착할 때만 퇴장 mark를 전환이 끝날 때까지 보존하면서 1.2초 동안 기존 geometry를 왼쪽으로 밀어냅니다.',
      eyebrow: 'Discrete step · Automatic',
      title: '데이터 도착 시 이동하는 실시간 차트'
    } satisfies StoryHeaderParameters
  },
  render: createCartesianRealtimeStory
}`,...a.parameters?.docs?.source}}};const p=["SlidingTelemetryWindow","FlowGapWindow","ArrivalStepWindow"];export{a as ArrivalStepWindow,r as FlowGapWindow,e as SlidingTelemetryWindow,p as __namedExportsOrder,m as default};
