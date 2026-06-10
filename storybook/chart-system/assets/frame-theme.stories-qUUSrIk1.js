import{d as s,c as l,e as o,E as i,f as n}from"./story-utils-BV4SlRn6.js";const d={title:"Options/Frame Theme",parameters:{syncTheme:!1},args:{...l},argTypes:{...s}},e={parameters:{controls:{disable:!0}},render:()=>o([{type:"line",data:n,options:{frameTheme:"light",backgroundColor:"#ffffff",legend:{show:!0},tooltip:{show:!0},crosshair:{show:!0,type:"x"}},label:"Light preset"},{type:"line",data:n,options:{frameTheme:"dark",backgroundColor:"#0a0a0a",legend:{show:!0},tooltip:{show:!0},crosshair:{show:!0,type:"x"}},label:"Dark preset"}],{columns:2,cardHeight:320,hideDataSummary:!0})},r={parameters:{controls:{disable:!0}},render:()=>o([{theme:"light",status:"no-data",label:"Light · No data"},{theme:"light",status:"error",label:"Light · Error"},{theme:"dark",status:"no-data",label:"Dark · No data"},{theme:"dark",status:"error",label:"Dark · Error"}].map(t=>({type:"line",data:i,options:{frameTheme:t.theme,legend:{show:!1},tooltip:{show:!1},crosshair:{show:!1}},label:t.label,onEngine:a=>{requestAnimationFrame(()=>{t.status==="no-data"?a.getChartContainer().showStatus("no-data"):a.getChartContainer().showStatus("error","Simulated error message")})}})),{columns:2,cardHeight:260,hideDataSummary:!0})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderChartGrid([{
    type: 'line',
    data: NUMERIC_BASIC,
    options: {
      frameTheme: 'light',
      backgroundColor: '#ffffff',
      legend: {
        show: true
      },
      tooltip: {
        show: true
      },
      crosshair: {
        show: true,
        type: 'x'
      }
    },
    label: 'Light preset'
  }, {
    type: 'line',
    data: NUMERIC_BASIC,
    options: {
      frameTheme: 'dark',
      backgroundColor: '#0a0a0a',
      legend: {
        show: true
      },
      tooltip: {
        show: true
      },
      crosshair: {
        show: true,
        type: 'x'
      }
    },
    label: 'Dark preset'
  }], {
    columns: 2,
    cardHeight: 320,
    hideDataSummary: true
  })
}`,...e.parameters?.docs?.source},description:{story:"Light vs Dark -- 동일 데이터에 두 preset을 나란히.\n`syncTheme: false`가 유일하게 허용되는 story: theme 자체를 비교 축으로 삼기 때문.\n\nStorybook toolbar theme(light/dark) 토글과 무관하게 두 카드는 **항상 자기\npreset 배경으로 고정** 렌더된다. light preset의 `backgroundColor: 'transparent'`\n가 Storybook body 배경을 투과시키는 것을 방지하기 위해 각 카드 options에\n명시적 `backgroundColor`를 지정.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const combos: Array<{
      theme: 'light' | 'dark';
      status: 'no-data' | 'error';
      label: string;
    }> = [{
      theme: 'light',
      status: 'no-data',
      label: 'Light · No data'
    }, {
      theme: 'light',
      status: 'error',
      label: 'Light · Error'
    }, {
      theme: 'dark',
      status: 'no-data',
      label: 'Dark · No data'
    }, {
      theme: 'dark',
      status: 'error',
      label: 'Dark · Error'
    }];
    return renderChartGrid(combos.map(combo => ({
      type: 'line',
      data: EMPTY_DATA,
      options: {
        frameTheme: combo.theme,
        legend: {
          show: false
        },
        tooltip: {
          show: false
        },
        crosshair: {
          show: false
        }
      },
      label: combo.label,
      onEngine: engine => {
        // StatusPanel은 ChartContainer가 layout 후에야 DOM 존재 — rAF로 지연.
        requestAnimationFrame(() => {
          if (combo.status === 'no-data') {
            engine.getChartContainer().showStatus('no-data');
          } else {
            engine.getChartContainer().showStatus('error', 'Simulated error message');
          }
        });
      }
    })), {
      columns: 2,
      cardHeight: 260,
      hideDataSummary: true
    });
  }
}`,...r.parameters?.docs?.source},description:{story:"Status panel 색상 (no-data / error) -- light × dark × 2 상태 = 4 카드.\nStatusPanel이 theme-aware 하게 `frameTheme.status.*` 토큰을 읽는지 시각 확인.\n\n`renderChartGrid`의 `onEngine` 콜백으로 `showStatus()` 호출 — helper 밖에서\n`new CartesianEngine()`를 직접 호출하지 않는다.",...r.parameters?.docs?.description}}};const u=["ThemeComparison","StatusPanelColors"];export{r as StatusPanelColors,e as ThemeComparison,u as __namedExportsOrder,d as default};
