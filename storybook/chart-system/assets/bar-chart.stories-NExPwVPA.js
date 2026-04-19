import{c as d,d as m,f as o,g as c,h as t,B as e,r as l,i as u}from"./story-utils-C9PePNh8.js";const b={title:"Chart Types/Bar",args:{...d,dataset:"category-multi"},argTypes:{dataset:u(e),stacked:{control:"boolean",description:"스택 모드",table:{defaultValue:{summary:"false"}}},radius:{control:{type:"range",min:0,max:10,step:1},description:"모서리 라운딩",table:{defaultValue:{summary:"0"}}},barWidth:{control:{type:"range",min:.2,max:1,step:.1},description:"바 너비 비율",table:{defaultValue:{summary:"0.8"}}},...m}},r={parameters:{controls:{disable:!0}},render:a=>l([{type:"bar",data:t(e,"category-basic"),options:{frameTheme:a.frameTheme,bar:{radius:2}},label:"Single series"},{type:"bar",data:t(e,"category-multi"),options:{frameTheme:a.frameTheme,bar:{radius:2}},label:"Grouped (multi-series)"},{type:"bar",data:t(e,"category-multi"),options:{frameTheme:a.frameTheme,bar:{stacked:!0,radius:2}},label:"Stacked"}],{columns:3,cardHeight:260,hideDataSummary:!0})},n={args:{...d,dataset:"category-multi",stacked:!1,radius:6,barWidth:.8},render:a=>o("bar",t(e,a.dataset),{...c(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}},{fitContainer:a.fitContainer,width:a.width,height:a.height})},s={name:"Stacked + Data Labels",args:{...d,dataset:"category-multi",stacked:!0,radius:2,barWidth:.8,showDataLabel:!0,dataLabelPosition:"inside",dataLabelBackground:!1},render:a=>o("bar",t(e,a.dataset),{...c(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}},{fitContainer:a.fitContainer,width:a.width,height:a.height})},i={args:{...d,dataset:"category-basic",stacked:!1,radius:4,barWidth:.8,colorByPoint:!0},render:a=>o("bar",t(e,a.dataset),{...c(a),bar:{stacked:a.stacked,radius:a.radius,barWidth:a.barWidth}},{fitContainer:a.fitContainer,width:a.width,height:a.height})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([{
    type: 'bar',
    data: resolveDataset(BAR_DATASETS, 'category-basic'),
    options: {
      frameTheme: args.frameTheme,
      bar: {
        radius: 2
      }
    },
    label: 'Single series'
  }, {
    type: 'bar',
    data: resolveDataset(BAR_DATASETS, 'category-multi'),
    options: {
      frameTheme: args.frameTheme,
      bar: {
        radius: 2
      }
    },
    label: 'Grouped (multi-series)'
  }, {
    type: 'bar',
    data: resolveDataset(BAR_DATASETS, 'category-multi'),
    options: {
      frameTheme: args.frameTheme,
      bar: {
        stacked: true,
        radius: 2
      }
    },
    label: 'Stacked'
  }], {
    columns: 3,
    cardHeight: 260,
    hideDataSummary: true
  })
}`,...r.parameters?.docs?.source},description:{story:"Stacking modes — Single series / Grouped / Stacked.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'category-multi',
    stacked: false,
    radius: 6,
    barWidth: 0.8
  },
  render: args => renderChartSingle('bar', resolveDataset(BAR_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    bar: {
      stacked: args.stacked,
      radius: args.radius,
      barWidth: args.barWidth
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Stacked + Data Labels',
  args: {
    ...commonDefaults,
    dataset: 'category-multi',
    stacked: true,
    radius: 2,
    barWidth: 0.8,
    showDataLabel: true,
    dataLabelPosition: 'inside',
    dataLabelBackground: false
  },
  render: args => renderChartSingle('bar', resolveDataset(BAR_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    bar: {
      stacked: args.stacked,
      radius: args.radius,
      barWidth: args.barWidth
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'category-basic',
    stacked: false,
    radius: 4,
    barWidth: 0.8,
    colorByPoint: true
  },
  render: args => renderChartSingle('bar', resolveDataset(BAR_DATASETS, args.dataset), {
    ...commonOptionsFrom(args),
    bar: {
      stacked: args.stacked,
      radius: args.radius,
      barWidth: args.barWidth
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...i.parameters?.docs?.source}}};const g=["StackingModes","RoundedCorners","StackedWithDataLabels","ColorByPoint"];export{i as ColorByPoint,n as RoundedCorners,s as StackedWithDataLabels,r as StackingModes,g as __namedExportsOrder,b as default};
