import{c as m,a as u,b as e,r as n}from"./story-utils-Sq0wUdi9.js";import{N as l,C as p}from"./mock-data-BShfxM5i.js";import"./chart-engine-BmtyFlsE.js";import"./tooltip-plugin-B9rRNLzl.js";import"./crosshair-plugin-lsuhlxfG.js";const Y={title:"Charts/Features/Grid Options",args:{...u,gridDirection:"both",gridXShow:!0,gridYShow:!0,gridAlternateColor:""},argTypes:{gridDirection:{control:"select",options:["horizontal","vertical","both"],description:"그리드 방향",table:{defaultValue:{summary:"both"},category:"Grid"}},gridXShow:{control:"boolean",description:"X축 방향 그리드 표시",table:{defaultValue:{summary:"true"},category:"Grid"}},gridYShow:{control:"boolean",description:"Y축 방향 그리드 표시",table:{defaultValue:{summary:"true"},category:"Grid"}},gridAlternateColor:{control:"color",description:"교대 배경색 (빈 값이면 비활성)",table:{defaultValue:{summary:""},category:"Grid"}},...m}};function o(r){return{grid:{show:r.showGrid,direction:r.gridDirection,xShow:r.gridXShow,yShow:r.gridYShow,...r.gridAlternateColor?{alternateColor:r.gridAlternateColor}:{}}}}const i={args:{gridDirection:"both",gridXShow:!0,gridYShow:!0,gridAlternateColor:""},render:r=>{const t=e(r);return n("line",l,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t,...o(r),line:{dots:!0,width:2}})}},a={args:{gridDirection:"both",gridXShow:!0,gridYShow:!1},render:r=>{const t=e(r);return n("bar",p,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t,...o(r)})}},s={args:{gridDirection:"both",gridXShow:!1,gridYShow:!0},render:r=>{const t=e(r);return n("bar",p,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t,...o(r)})}},d={args:{gridDirection:"both",gridXShow:!0,gridYShow:!0,gridAlternateColor:"rgba(0, 0, 0, 0.04)"},render:r=>{const t=e(r);return n("line",l,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t,...o(r),line:{dots:!0,width:2}})}},h={args:{gridDirection:"both",gridXShow:!0,gridYShow:!0,gridAlternateColor:"rgba(59, 130, 246, 0.06)"},render:r=>{const t=e(r);return n("bar",p,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t,...o(r)})}},g={args:{inverted:!0,gridDirection:"both",gridXShow:!0,gridYShow:!0,gridAlternateColor:"rgba(0, 0, 0, 0.04)"},render:r=>{const t=e(r);return n("bar",p,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t,...o(r)})}},c={args:{inverted:!0,gridDirection:"both",gridXShow:!0,gridYShow:!1},render:r=>{const t=e(r);return n("bar",p,{fitContainer:r.fitContainer,width:r.width,height:r.height,...t,...o(r)})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    gridDirection: 'both',
    gridXShow: true,
    gridYShow: true,
    gridAlternateColor: ''
  },
  render: args => {
    const opts = commonOptionsFrom(args);
    return renderChart('line', NUMERIC_BASIC, {
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height,
      ...opts,
      ...gridOptionsFrom(args),
      line: {
        dots: true,
        width: 2
      }
    });
  }
}`,...i.parameters?.docs?.source},description:{story:"X/Y축 그리드 개별 제어: xShow/yShow 토글로 축별 그리드 on/off",...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    gridDirection: 'both',
    gridXShow: true,
    gridYShow: false
  },
  render: args => {
    const opts = commonOptionsFrom(args);
    return renderChart('bar', CATEGORY_MULTI_SERIES, {
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height,
      ...opts,
      ...gridOptionsFrom(args)
    });
  }
}`,...a.parameters?.docs?.source},description:{story:"X축 그리드만 표시",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    gridDirection: 'both',
    gridXShow: false,
    gridYShow: true
  },
  render: args => {
    const opts = commonOptionsFrom(args);
    return renderChart('bar', CATEGORY_MULTI_SERIES, {
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height,
      ...opts,
      ...gridOptionsFrom(args)
    });
  }
}`,...s.parameters?.docs?.source},description:{story:"Y축 그리드만 표시",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    gridDirection: 'both',
    gridXShow: true,
    gridYShow: true,
    gridAlternateColor: 'rgba(0, 0, 0, 0.04)'
  },
  render: args => {
    const opts = commonOptionsFrom(args);
    return renderChart('line', NUMERIC_BASIC, {
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height,
      ...opts,
      ...gridOptionsFrom(args),
      line: {
        dots: true,
        width: 2
      }
    });
  }
}`,...d.parameters?.docs?.source},description:{story:"alternateColor: Y축 tick 사이 교대 배경 (줄무늬)",...d.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    gridDirection: 'both',
    gridXShow: true,
    gridYShow: true,
    gridAlternateColor: 'rgba(59, 130, 246, 0.06)'
  },
  render: args => {
    const opts = commonOptionsFrom(args);
    return renderChart('bar', CATEGORY_MULTI_SERIES, {
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height,
      ...opts,
      ...gridOptionsFrom(args)
    });
  }
}`,...h.parameters?.docs?.source},description:{story:"alternateColor (bar 차트)",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    inverted: true,
    gridDirection: 'both',
    gridXShow: true,
    gridYShow: true,
    gridAlternateColor: 'rgba(0, 0, 0, 0.04)'
  },
  render: args => {
    const opts = commonOptionsFrom(args);
    return renderChart('bar', CATEGORY_MULTI_SERIES, {
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height,
      ...opts,
      ...gridOptionsFrom(args)
    });
  }
}`,...g.parameters?.docs?.source},description:{story:"inverted 모드에서 xShow/yShow + alternateColor",...g.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    inverted: true,
    gridDirection: 'both',
    gridXShow: true,
    gridYShow: false
  },
  render: args => {
    const opts = commonOptionsFrom(args);
    return renderChart('bar', CATEGORY_MULTI_SERIES, {
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height,
      ...opts,
      ...gridOptionsFrom(args)
    });
  }
}`,...c.parameters?.docs?.source},description:{story:"inverted 모드에서 X축 그리드만",...c.parameters?.docs?.description}}};const O=["GridXYControl","XGridOnly","YGridOnly","AlternateColor","AlternateColorBar","InvertedGrid","InvertedXGridOnly"];export{d as AlternateColor,h as AlternateColorBar,i as GridXYControl,g as InvertedGrid,c as InvertedXGridOnly,a as XGridOnly,s as YGridOnly,O as __namedExportsOrder,Y as default};
