import{c as a,d as h,f as d,g as l,e as n,r as m,C as i}from"./story-utils-C7AxCJZg.js";const c={title:"Options/Grid",args:{...a,gridDirection:"both",gridXShow:!0,gridYShow:!0,gridAlternateColor:""},argTypes:{gridDirection:{control:"select",options:["horizontal","vertical","both"],description:"그리드 방향",table:{defaultValue:{summary:"both"},category:"Grid"}},gridXShow:{control:"boolean",description:"X축 방향 그리드 표시",table:{defaultValue:{summary:"true"},category:"Grid"}},gridYShow:{control:"boolean",description:"Y축 방향 그리드 표시",table:{defaultValue:{summary:"true"},category:"Grid"}},gridAlternateColor:{control:"color",description:"교대 배경색 (빈 값이면 비활성)",table:{defaultValue:{summary:""},category:"Grid"}},...h}};function s(e){return{grid:{show:e.showGrid,direction:e.gridDirection,xShow:e.gridXShow,yShow:e.gridYShow,...e.gridAlternateColor?{alternateColor:e.gridAlternateColor}:{}}}}const r={parameters:{controls:{disable:!0}},render:e=>m([{type:"line",data:n,options:{frameTheme:e.frameTheme,grid:{show:!0,direction:"both"},line:{dots:!0,width:2}},label:"Both (default)"},{type:"line",data:n,options:{frameTheme:e.frameTheme,grid:{show:!0,direction:"horizontal"},line:{dots:!0,width:2}},label:"Horizontal only"},{type:"line",data:n,options:{frameTheme:e.frameTheme,grid:{show:!0,direction:"vertical"},line:{dots:!0,width:2}},label:"Vertical only"},{type:"bar",data:i,options:{frameTheme:e.frameTheme,grid:{show:!0,xShow:!1,yShow:!0}},label:"Bar · Y grid only"},{type:"bar",data:i,options:{frameTheme:e.frameTheme,grid:{show:!0,xShow:!0,yShow:!1}},label:"Bar · X grid only"},{type:"line",data:n,options:{frameTheme:e.frameTheme,grid:{show:!1},line:{dots:!0,width:2}},label:"Grid hidden"}],{columns:3,cardHeight:220,hideDataSummary:!0})},t={args:{...a,gridDirection:"both",gridXShow:!0,gridYShow:!0,gridAlternateColor:"rgba(0, 0, 0, 0.04)"},render:e=>d("line",n,{...l(e),...s(e),line:{dots:!0,width:2}},{fitContainer:e.fitContainer,width:e.width,height:e.height})},o={args:{...a,inverted:!0,gridDirection:"both",gridXShow:!0,gridYShow:!0,gridAlternateColor:"rgba(0, 0, 0, 0.04)"},render:e=>d("bar",i,{...l(e),...s(e)},{fitContainer:e.fitContainer,width:e.width,height:e.height})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid([{
    type: 'line',
    data: NUMERIC_BASIC,
    options: {
      frameTheme: args.frameTheme,
      grid: {
        show: true,
        direction: 'both'
      },
      line: {
        dots: true,
        width: 2
      }
    },
    label: 'Both (default)'
  }, {
    type: 'line',
    data: NUMERIC_BASIC,
    options: {
      frameTheme: args.frameTheme,
      grid: {
        show: true,
        direction: 'horizontal'
      },
      line: {
        dots: true,
        width: 2
      }
    },
    label: 'Horizontal only'
  }, {
    type: 'line',
    data: NUMERIC_BASIC,
    options: {
      frameTheme: args.frameTheme,
      grid: {
        show: true,
        direction: 'vertical'
      },
      line: {
        dots: true,
        width: 2
      }
    },
    label: 'Vertical only'
  }, {
    type: 'bar',
    data: CATEGORY_MULTI_SERIES,
    options: {
      frameTheme: args.frameTheme,
      grid: {
        show: true,
        xShow: false,
        yShow: true
      }
    },
    label: 'Bar · Y grid only'
  }, {
    type: 'bar',
    data: CATEGORY_MULTI_SERIES,
    options: {
      frameTheme: args.frameTheme,
      grid: {
        show: true,
        xShow: true,
        yShow: false
      }
    },
    label: 'Bar · X grid only'
  }, {
    type: 'line',
    data: NUMERIC_BASIC,
    options: {
      frameTheme: args.frameTheme,
      grid: {
        show: false
      },
      line: {
        dots: true,
        width: 2
      }
    },
    label: 'Grid hidden'
  }], {
    columns: 3,
    cardHeight: 220,
    hideDataSummary: true
  })
}`,...r.parameters?.docs?.source},description:{story:"Grid direction × show combinations (most meaningful 6).",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    gridDirection: 'both',
    gridXShow: true,
    gridYShow: true,
    gridAlternateColor: 'rgba(0, 0, 0, 0.04)'
  },
  render: args => renderChartSingle('line', NUMERIC_BASIC, {
    ...commonOptionsFrom(args),
    ...gridOptionsFrom(args),
    line: {
      dots: true,
      width: 2
    }
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    inverted: true,
    gridDirection: 'both',
    gridXShow: true,
    gridYShow: true,
    gridAlternateColor: 'rgba(0, 0, 0, 0.04)'
  },
  render: args => renderChartSingle('bar', CATEGORY_MULTI_SERIES, {
    ...commonOptionsFrom(args),
    ...gridOptionsFrom(args)
  }, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height
  })
}`,...o.parameters?.docs?.source}}};const u=["DirectionAndShow","AlternateColor","InvertedGrid"];export{t as AlternateColor,r as DirectionAndShow,o as InvertedGrid,u as __namedExportsOrder,c as default};
