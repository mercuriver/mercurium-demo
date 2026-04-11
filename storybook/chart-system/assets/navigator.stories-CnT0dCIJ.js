import{C as r}from"./chart-engine-BmtyFlsE.js";import{L as t,T as o}from"./tooltip-plugin-B9rRNLzl.js";function i(e=600,a=400){const n=document.createElement("div");return n.style.width=`${e}px`,n.style.height=`${a}px`,n.style.border="1px solid #e2e8f0",n.style.borderRadius="4px",n}function l(e){const a=document.createElement("p");return a.textContent=e,a.style.fontSize="0.8125rem",a.style.color="#6b7280",a.style.marginBottom="0.75rem",a.style.lineHeight="1.5",a}function s(){const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="1.5rem",e.style.padding="1rem",e}function p(e=50){return{xAxisType:"number",series:[{key:"series-a",label:"Series A",data:Array.from({length:e},(a,n)=>({x:n+1,y:Math.sin(n*.3)*40+80+Math.random()*20}))},{key:"series-b",label:"Series B",data:Array.from({length:e},(a,n)=>({x:n+1,y:Math.cos(n*.2)*30+60+Math.random()*15}))}]}}const C={title:"Charts/Interactions/Navigator"},g={name:"Navigator -- 기본",render:()=>{const e=s();e.appendChild(l("zoom + navigator 활성화. 휠로 줌 인/아웃하면 하단 Navigator의 선택 영역이 변경됩니다."));const a=i();e.appendChild(a);const n=new r(a,"line",{zoom:{enabled:!0},navigator:{enabled:!0},tooltip:{show:!0,shared:!0}});return n.installPlugin(new t),n.installPlugin(new o),n.setData(p(50)),e}},d={name:"Navigator -- 인터랙션 가이드",render:()=>{const e=s();e.appendChild(l(`1. 좌/우 핸들 드래그: 선택 범위 조절
2. 선택 영역 드래그: 범위 이동 (pan)
3. 비선택 영역 클릭: 해당 위치로 이동
4. 더블클릭: 줌 리셋
5. 차트 영역에서 휠로 줌하면 Navigator가 동기화됩니다.`));const a=i(700,400);e.appendChild(a);const n=new r(a,"line",{zoom:{enabled:!0},navigator:{enabled:!0},tooltip:{show:!0,shared:!0}});n.installPlugin(new t),n.installPlugin(new o);const h=p(80);return n.setData(h),n.setZoomDomain(10,40),e}},c={name:"Navigator -- height/margin 커스텀",render:()=>{const e=s();e.appendChild(l("Navigator height=60, margin=16으로 커스터마이징한 예시."));const a=i(600,450);e.appendChild(a);const n=new r(a,"line",{zoom:{enabled:!0},navigator:{enabled:!0,height:60,margin:16},tooltip:{show:!0,shared:!0}});return n.installPlugin(new t),n.installPlugin(new o),n.setData(p(50)),e}},u={name:"Navigator -- inverted 모드",render:()=>{const e=s();e.appendChild(l("inverted 차트에서 Navigator가 차트 우측에 수직으로 렌더링됩니다. 핸들은 상/하로 드래그합니다."));const a=i(700,400);e.appendChild(a);const n=new r(a,"bar",{inverted:!0,zoom:{enabled:!0},navigator:{enabled:!0},tooltip:{show:!0}});return n.installPlugin(new t),n.installPlugin(new o),n.setData(p(30)),e}},m={name:"Navigator -- Bar 차트",render:()=>{const e=s();e.appendChild(l("Bar 차트에서의 Navigator 동작 확인."));const a=i();e.appendChild(a);const n=new r(a,"bar",{zoom:{enabled:!0},navigator:{enabled:!0},tooltip:{show:!0,shared:!0}});return n.installPlugin(new t),n.installPlugin(new o),n.setData(p(40)),e}},w={name:"Navigator -- zoom 비활성 시 미표시",render:()=>{const e=s();e.appendChild(l("navigator.enabled=true이지만 zoom.enabled=false이면 Navigator가 표시되지 않습니다."));const a=i();e.appendChild(a);const n=new r(a,"line",{zoom:{enabled:!1},navigator:{enabled:!0},tooltip:{show:!0,shared:!0}});return n.installPlugin(new t),n.installPlugin(new o),n.setData(p(30)),e}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Navigator -- 기본',
  render: () => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('zoom + navigator 활성화. 휠로 줌 인/아웃하면 하단 Navigator의 선택 영역이 변경됩니다.'));
    const container = createContainer();
    wrapper.appendChild(container);
    const engine = new ChartEngine(container, 'line', {
      zoom: {
        enabled: true
      },
      navigator: {
        enabled: true
      },
      tooltip: {
        show: true,
        shared: true
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.setData(generateLargeData(50));
    return wrapper;
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Navigator -- 인터랙션 가이드',
  render: () => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('1. 좌/우 핸들 드래그: 선택 범위 조절\\n' + '2. 선택 영역 드래그: 범위 이동 (pan)\\n' + '3. 비선택 영역 클릭: 해당 위치로 이동\\n' + '4. 더블클릭: 줌 리셋\\n' + '5. 차트 영역에서 휠로 줌하면 Navigator가 동기화됩니다.'));
    const container = createContainer(700, 400);
    wrapper.appendChild(container);
    const engine = new ChartEngine(container, 'line', {
      zoom: {
        enabled: true
      },
      navigator: {
        enabled: true
      },
      tooltip: {
        show: true,
        shared: true
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());

    // 줌 상태에서 시작하여 Navigator 선택 영역을 바로 확인
    const data = generateLargeData(80);
    engine.setData(data);
    engine.setZoomDomain(10, 40);
    return wrapper;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Navigator -- height/margin 커스텀',
  render: () => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('Navigator height=60, margin=16으로 커스터마이징한 예시.'));
    const container = createContainer(600, 450);
    wrapper.appendChild(container);
    const engine = new ChartEngine(container, 'line', {
      zoom: {
        enabled: true
      },
      navigator: {
        enabled: true,
        height: 60,
        margin: 16
      },
      tooltip: {
        show: true,
        shared: true
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.setData(generateLargeData(50));
    return wrapper;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Navigator -- inverted 모드',
  render: () => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('inverted 차트에서 Navigator가 차트 우측에 수직으로 렌더링됩니다. ' + '핸들은 상/하로 드래그합니다.'));
    const container = createContainer(700, 400);
    wrapper.appendChild(container);
    const engine = new ChartEngine(container, 'bar', {
      inverted: true,
      zoom: {
        enabled: true
      },
      navigator: {
        enabled: true
      },
      tooltip: {
        show: true
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.setData(generateLargeData(30));
    return wrapper;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Navigator -- Bar 차트',
  render: () => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('Bar 차트에서의 Navigator 동작 확인.'));
    const container = createContainer();
    wrapper.appendChild(container);
    const engine = new ChartEngine(container, 'bar', {
      zoom: {
        enabled: true
      },
      navigator: {
        enabled: true
      },
      tooltip: {
        show: true,
        shared: true
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.setData(generateLargeData(40));
    return wrapper;
  }
}`,...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Navigator -- zoom 비활성 시 미표시',
  render: () => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('navigator.enabled=true이지만 zoom.enabled=false이면 Navigator가 표시되지 않습니다.'));
    const container = createContainer();
    wrapper.appendChild(container);
    const engine = new ChartEngine(container, 'line', {
      zoom: {
        enabled: false
      },
      navigator: {
        enabled: true
      },
      tooltip: {
        show: true,
        shared: true
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.setData(generateLargeData(30));
    return wrapper;
  }
}`,...w.parameters?.docs?.source}}};const N=["NavigatorBasic","NavigatorInteraction","NavigatorCustom","NavigatorInverted","NavigatorBarChart","NavigatorZoomDisabled"];export{m as NavigatorBarChart,g as NavigatorBasic,c as NavigatorCustom,d as NavigatorInteraction,u as NavigatorInverted,w as NavigatorZoomDisabled,N as __namedExportsOrder,C as default};
