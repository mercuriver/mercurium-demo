import{c as p,d as g,h as u,r as m,g as b,f,L as s,i as T}from"./story-utils-C7AxCJZg.js";const v={title:"Options/Title",args:{...p,dataset:"multi",titleText:"Revenue by Quarter",subtitleText:"FY2025 actuals (KRW)",showSubtitle:!0,titleAlign:"center",titlePosition:"top"},argTypes:{dataset:T(s),showSubtitle:{control:"boolean",description:"Subtitle 표시 여부",table:{defaultValue:{summary:"true"},category:"Title"}},...g}},h=["top","right","bottom","left"],i={parameters:{controls:{disable:!0}},render:t=>{const n=u(s,"multi");return m(["left","center","right"].map(e=>({type:"line",data:n,options:{frameTheme:t.frameTheme,title:{text:"Revenue by Quarter",align:e},subtitle:{text:"FY2025 actuals (KRW)",align:e},line:{curve:"smooth",width:2}},label:`align: ${e}`})),{columns:3,cardHeight:260,hideDataSummary:!0})}},o={parameters:{controls:{disable:!0}},render:t=>{const n=u(s,"multi");return m(h.map(e=>({type:"line",data:n,options:{frameTheme:t.frameTheme,title:{text:"Revenue by Quarter",position:e,align:"center"},subtitle:{text:"FY2025 actuals",align:"center"},line:{curve:"smooth",width:2}},label:`position: ${e}`})),{columns:2,cardHeight:260,hideDataSummary:!0})}},S=[{label:"legend: top",options:{legend:{show:!0,position:"top"}}},{label:"legend: left",options:{legend:{show:!0,position:"left"}}},{label:"legend: hidden",options:{legend:{show:!1}}}],l={parameters:{controls:{disable:!0}},render:t=>{const n=u(s,"multi"),e=[];for(const a of S)for(const r of h)e.push({type:"line",data:n,options:{frameTheme:t.frameTheme,title:{text:"Revenue by Quarter",position:r,align:"center"},subtitle:{text:"FY2025 actuals",align:"center"},line:{curve:"smooth",width:2},...a.options},label:`title=${r} / ${a.label}`});return m(e,{columns:4,cardHeight:240,hideDataSummary:!0})}},c={parameters:{controls:{disable:!0}},render:t=>{const n=u(s,"multi"),e=[];for(const a of["left","right"])for(const r of["left","center","right"])e.push({type:"line",data:n,options:{frameTheme:t.frameTheme,title:{text:"Monthly Active Users",position:a,align:r},subtitle:{text:"Last 90 days",align:r},line:{curve:"smooth",width:2}},label:`position: ${a} / align: ${r}`});return m(e,{columns:3,cardHeight:260,hideDataSummary:!0})}},d={args:{...p,dataset:"multi",titleText:"Monthly Active Users",subtitleText:"Last 90 days",showSubtitle:!0,titleAlign:"left",titlePosition:"top",width:720,height:360},render:t=>{const n=b(t),e=t.showSubtitle?n:{...n,subtitle:void 0};return f("line",u(s,t.dataset),{...e,line:{curve:"smooth",width:2}},{fitContainer:t.fitContainer,width:t.width,height:t.height})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const data = resolveDataset(LINE_DATASETS, 'multi');
    return renderChartGrid((['left', 'center', 'right'] as const).map(align => ({
      type: 'line' as const,
      data,
      options: {
        frameTheme: args.frameTheme,
        title: {
          text: 'Revenue by Quarter',
          align
        },
        subtitle: {
          text: 'FY2025 actuals (KRW)',
          align
        },
        line: {
          curve: 'smooth',
          width: 2
        }
      },
      label: \`align: \${align}\`
    })), {
      columns: 3,
      cardHeight: 260,
      hideDataSummary: true
    });
  }
}`,...i.parameters?.docs?.source},description:{story:"Title / subtitle alignment comparison — left / center / right (position: 'top').",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const data = resolveDataset(LINE_DATASETS, 'multi');
    return renderChartGrid(TITLE_POSITIONS.map(position => ({
      type: 'line' as const,
      data,
      options: {
        frameTheme: args.frameTheme,
        title: {
          text: 'Revenue by Quarter',
          position,
          align: 'center'
        },
        subtitle: {
          text: 'FY2025 actuals',
          align: 'center'
        },
        line: {
          curve: 'smooth',
          width: 2
        }
      },
      label: \`position: \${position}\`
    })), {
      columns: 2,
      cardHeight: 260,
      hideDataSummary: true
    });
  }
}`,...o.parameters?.docs?.source},description:{story:"네 방향 position 비교. subtitle 은 항상 title 과 같은 면에 함께 배치된다.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const data = resolveDataset(LINE_DATASETS, 'multi');
    const cards = [];
    for (const legendCase of LEGEND_CASES) {
      for (const position of TITLE_POSITIONS) {
        cards.push({
          type: 'line' as const,
          data,
          options: {
            frameTheme: args.frameTheme,
            title: {
              text: 'Revenue by Quarter',
              position,
              align: 'center' as const
            },
            subtitle: {
              text: 'FY2025 actuals',
              align: 'center' as const
            },
            line: {
              curve: 'smooth' as const,
              width: 2
            },
            ...legendCase.options
          },
          label: \`title=\${position} / \${legendCase.label}\`
        });
      }
    }
    return renderChartGrid(cards, {
      columns: 4,
      cardHeight: 240,
      hideDataSummary: true
    });
  }
}`,...l.parameters?.docs?.source},description:{story:`4 title position × 3 legend state 매트릭스. 회전된 title 과 legend 가 같은 축을
공유하는 경우(예: title:left + legend:left) 의 grid slot 충돌 여부와 hidden
legend 시 single-axis 단순 배치를 한 번에 확인한다.`,...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const data = resolveDataset(LINE_DATASETS, 'multi');
    const cards = [];
    for (const position of ['left', 'right'] as const) {
      for (const align of ['left', 'center', 'right'] as const) {
        cards.push({
          type: 'line' as const,
          data,
          options: {
            frameTheme: args.frameTheme,
            title: {
              text: 'Monthly Active Users',
              position,
              align
            },
            subtitle: {
              text: 'Last 90 days',
              align
            },
            line: {
              curve: 'smooth' as const,
              width: 2
            }
          },
          label: \`position: \${position} / align: \${align}\`
        });
      }
    }
    return renderChartGrid(cards, {
      columns: 3,
      cardHeight: 260,
      hideDataSummary: true
    });
  }
}`,...c.parameters?.docs?.source},description:{story:"회전된 left / right 에서 `align` 매핑(위 / 아래 / 중앙) 가독성 확인.\n4 방향 모두 `align='left'` 는 \"텍스트 시작\" 을 의미한다 (회전 좌표계 기준).",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'multi',
    titleText: 'Monthly Active Users',
    subtitleText: 'Last 90 days',
    showSubtitle: true,
    titleAlign: 'left',
    titlePosition: 'top',
    width: 720,
    height: 360
  },
  render: args => {
    const baseOptions = commonOptionsFrom(args);
    const options: ChartOptions = args.showSubtitle ? baseOptions : {
      ...baseOptions,
      subtitle: undefined
    };
    return renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
      ...options,
      line: {
        curve: 'smooth',
        width: 2
      }
    }, {
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height
    });
  }
}`,...d.parameters?.docs?.source},description:{story:"Title 전체 옵션 (text / align / position / subtitle) 을 controls 로 탐색.\n`titlePosition` 은 공통 args 로 등록되어 있어 다른 Options 스토리에서도 동일하게 동작한다.",...d.parameters?.docs?.description}}};const x=["TitleAlignment","TitlePositionBySide","TitleXLegendMatrix","RotatedAlignment","TitleWithSubtitle"];export{c as RotatedAlignment,i as TitleAlignment,o as TitlePositionBySide,d as TitleWithSubtitle,l as TitleXLegendMatrix,x as __namedExportsOrder,v as default};
