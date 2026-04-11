import{P as f,C as w}from"./chart-engine-DYlwJQty.js";import{c as C,a as y,r,b as i,d as E}from"./story-utils-B5NCYHrN.js";import{r as a,L as t,N as S}from"./mock-data--NCvz5h5.js";import"./tooltip-plugin-BG30u2XK.js";import"./crosshair-plugin-D5F2v-An.js";const _={title:"Charts/Types/Line",args:{...y,dataset:"numeric-basic"},argTypes:{dataset:E(t),curve:{control:"select",options:["linear","smooth","step"],description:"선 보간 방식",table:{defaultValue:{summary:"linear"}}},dots:{control:"boolean",description:"데이터 포인트 표시",table:{defaultValue:{summary:"false"}}},lineWidth:{control:{type:"range",min:1,max:5,step:.5},description:"선 두께",table:{defaultValue:{summary:"2"}}},...C}},d={args:{dataset:"numeric-basic",curve:"linear",dots:!1,lineWidth:2},render:e=>r("line",a(t,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...i(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}})},c={args:{dataset:"empty",curve:"smooth",lineWidth:2,dots:!1},render:e=>r("line",a(t,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...i(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}})},l={args:{dataset:"numeric-basic",curve:"step",lineWidth:2,dots:!1},render:e=>r("line",a(t,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...i(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}})},h={args:{dataset:"numeric-basic",curve:"smooth",lineWidth:2,dots:!0},render:e=>r("line",a(t,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...i(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}})},m={args:{dataset:"numeric-multi",curve:"smooth",lineWidth:1.5,dots:!0,width:700},render:e=>r("line",a(t,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...i(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}})},p={args:{dataset:"category-basic",curve:"linear",lineWidth:2,dots:!0},render:e=>r("line",a(t,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...i(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}})},u={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexWrap="wrap",e.style.gap="24px";const v=Object.keys(f).filter(o=>o!=="default");for(const o of v){const g=document.createElement("div"),s=document.createElement("div");s.style.fontSize="14px",s.style.fontWeight="600",s.style.marginBottom="8px",s.textContent=o,g.appendChild(s);const n=document.createElement("div");n.style.width="400px",n.style.height="280px",n.style.border="1px solid #e2e8f0",n.style.borderRadius="4px",g.appendChild(n),new w(n,"line",{responsive:!1,width:400,height:280,line:{curve:"smooth",width:2},colorPalette:o}).setData(S),e.appendChild(g)}return e}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'numeric-basic',
    curve: 'linear',
    dots: false,
    lineWidth: 2
  },
  render: args => renderChart('line', resolveDataset(LINE_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots,
      width: args.lineWidth
    }
  })
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'empty',
    curve: 'smooth',
    lineWidth: 2,
    dots: false
  },
  render: args => renderChart('line', resolveDataset(LINE_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots,
      width: args.lineWidth
    }
  })
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'numeric-basic',
    curve: 'step',
    lineWidth: 2,
    dots: false
  },
  render: args => renderChart('line', resolveDataset(LINE_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots,
      width: args.lineWidth
    }
  })
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'numeric-basic',
    curve: 'smooth',
    lineWidth: 2,
    dots: true
  },
  render: args => renderChart('line', resolveDataset(LINE_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots,
      width: args.lineWidth
    }
  })
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'numeric-multi',
    curve: 'smooth',
    lineWidth: 1.5,
    dots: true,
    width: 700
  },
  render: args => renderChart('line', resolveDataset(LINE_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots,
      width: args.lineWidth
    }
  })
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'category-basic',
    curve: 'linear',
    lineWidth: 2,
    dots: true
  },
  render: args => renderChart('line', resolveDataset(LINE_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots,
      width: args.lineWidth
    }
  })
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexWrap = 'wrap';
    wrapper.style.gap = '24px';
    const palettes = Object.keys(PRESET_PALETTES).filter(k => k !== 'default');
    for (const name of palettes) {
      const section = document.createElement('div');
      const title = document.createElement('div');
      title.style.fontSize = '14px';
      title.style.fontWeight = '600';
      title.style.marginBottom = '8px';
      title.textContent = name;
      section.appendChild(title);
      const container = document.createElement('div');
      container.style.width = '400px';
      container.style.height = '280px';
      container.style.border = '1px solid #e2e8f0';
      container.style.borderRadius = '4px';
      section.appendChild(container);
      const engine = new ChartEngine(container, 'line', {
        responsive: false,
        width: 400,
        height: 280,
        line: {
          curve: 'smooth',
          width: 2
        },
        colorPalette: name
      });
      engine.setData(NUMERIC_MULTI_SERIES);
      wrapper.appendChild(section);
    }
    return wrapper;
  }
}`,...u.parameters?.docs?.source}}};const I=["Playground","SmoothCurve","StepCurve","WithDots","MultiSeries","CategoryAxis","ColorPalettes"];export{p as CategoryAxis,u as ColorPalettes,m as MultiSeries,d as Playground,c as SmoothCurve,l as StepCurve,h as WithDots,I as __namedExportsOrder,_ as default};
