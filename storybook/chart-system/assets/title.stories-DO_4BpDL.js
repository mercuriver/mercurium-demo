import{c as i,d as l,h as s,r as m,f as d,g as c,L as a,i as h}from"./story-utils-BiNSZ_VQ.js";const g={title:"Options/Title",args:{...i,dataset:"multi",titleText:"Revenue by Quarter",subtitleText:"FY2025 actuals (KRW)",titleAlign:"center"},argTypes:{dataset:h(a),...l}},e={parameters:{controls:{disable:!0}},render:t=>{const o=s(a,"multi");return m(["left","center","right"].map(r=>({type:"line",data:o,options:{frameTheme:t.frameTheme,title:{text:"Revenue by Quarter",align:r},subtitle:{text:"FY2025 actuals (KRW)",align:r},line:{curve:"smooth",width:2}},label:`align: ${r}`})),{columns:3,cardHeight:260,hideDataSummary:!0})}},n={args:{...i,dataset:"multi",titleText:"Monthly Active Users",subtitleText:"Last 90 days",titleAlign:"left",width:720,height:360},render:t=>d("line",s(a,t.dataset),{...c(t),line:{curve:"smooth",width:2}},{fitContainer:t.fitContainer,width:t.width,height:t.height})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source},description:{story:"Title / subtitle alignment comparison -- left / center / right.",...e.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'multi',
    titleText: 'Monthly Active Users',
    subtitleText: 'Last 90 days',
    titleAlign: 'left',
    width: 720,
    height: 360
  },
  render: args => renderChartSingle('line', resolveDataset(LINE_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    line: {
      curve: 'smooth',
      width: 2
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...n.parameters?.docs?.source},description:{story:"Controls로 title/subtitle 텍스트, 정렬, 스타일 조합 탐색.",...n.parameters?.docs?.description}}};const p=["TitleAlignment","TitleWithSubtitle"];export{e as TitleAlignment,n as TitleWithSubtitle,p as __namedExportsOrder,g as default};
