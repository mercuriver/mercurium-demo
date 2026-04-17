import{P as D,C as A}from"./chart-engine-BdkGv5ec.js";import{a as i,c as E,r as t,b as n,d as T}from"./story-utils-DPJnPqbZ.js";import{r as a,L as r,N as W}from"./mock-data-DLH8EjXc.js";import"./tooltip-plugin-DmLF6MzB.js";import"./crosshair-plugin-DmSVPU7d.js";const P={title:"Charts/Types/Line",args:{...i,dataset:"numeric-basic"},argTypes:{dataset:T(r),curve:{control:"select",options:["linear","smooth","step"],description:"선 보간 방식",table:{defaultValue:{summary:"linear"}}},dots:{control:"boolean",description:"데이터 포인트 표시",table:{defaultValue:{summary:"false"}}},lineWidth:{control:{type:"range",min:1,max:5,step:.5},description:"선 두께",table:{defaultValue:{summary:"2"}}},...E}},c={args:{dataset:"dual-axis-numeric",curve:"smooth",lineWidth:2,dots:!1},render:e=>t("line",a(r,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...n(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}})},h={args:{dataset:"numeric-basic",curve:"step",lineWidth:2,dots:!1},render:e=>t("line",a(r,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...n(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}})},l={args:{dataset:"numeric-basic",curve:"smooth",lineWidth:2,dots:!0},render:e=>t("line",a(r,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...n(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}})},u={args:{dataset:"numeric-multi",curve:"smooth",lineWidth:1.5,dots:!0,width:700},render:e=>t("line",a(r,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...n(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}})},m={args:{dataset:"category-basic",curve:"linear",lineWidth:2,dots:!0},render:e=>t("line",a(r,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...n(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}})},g={args:{...i,dataset:"dual-axis-category",curve:"smooth",dots:!0,width:700,yAxis2SeriesKeys:"margin",yAxis2Label:"Profit Margin (%)"},render:e=>t("line",a(r,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...n(e),line:{curve:e.curve,dots:e.dots}})},p={render:()=>{const e=document.createElement("div");e.className="chart-grid";const S=Object.keys(D).filter(d=>d!=="default");for(const d of S){const x=document.createElement("div"),o=document.createElement("div");o.style.fontSize="14px",o.style.fontWeight="600",o.style.marginBottom="8px",o.textContent=d,x.appendChild(o);const s=document.createElement("div");s.style.width="100%",s.style.height="280px",s.style.border="1px solid #e2e8f0",s.style.borderRadius="4px",x.appendChild(s),new A(s,"line",{responsive:!0,line:{curve:"smooth",width:2},colorPalette:d}).setData(W),e.appendChild(x)}return e}},v={name:"Dual Y-Axis (3 series)",args:{...i,dataset:"dual-axis-3series",curve:"linear",dots:!0,width:700,yAxis2SeriesKeys:"profit-rate",yAxis2Label:"Profit Rate (%)"},render:e=>t("line",a(r,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...n(e),line:{curve:e.curve,dots:e.dots}})},f={name:"Dual Y-Axis Legend Toggle",args:{...i,dataset:"dual-axis-category",curve:"linear",dots:!0,width:700,yAxis2SeriesKeys:"margin",yAxis2Label:"Profit Margin (%)"},render:e=>t("line",a(r,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...n(e),line:{curve:e.curve,dots:e.dots}})},y={name:"Inverted + Dots + Smooth",args:{...i,dataset:"numeric-basic",curve:"smooth",dots:!0,lineWidth:2,inverted:!0},render:e=>t("line",a(r,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...n(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}})},w={name:"Data Labels + Background",args:{...i,dataset:"numeric-basic",curve:"linear",dots:!0,lineWidth:2,showDataLabel:!0,dataLabelBackground:!0},render:e=>t("line",a(r,e.dataset),{fitContainer:e.fitContainer,width:e.width,height:e.height,...n(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}})},C={name:"Zones (temperature)",args:{...i,curve:"smooth",dots:!1,lineWidth:2},render:e=>t("line",{xAxisType:"category",series:[{key:"temp",label:"Temperature",data:[{x:"Jan",y:-5},{x:"Feb",y:-3},{x:"Mar",y:2},{x:"Apr",y:8},{x:"May",y:15},{x:"Jun",y:22},{x:"Jul",y:25},{x:"Aug",y:23},{x:"Sep",y:18},{x:"Oct",y:10},{x:"Nov",y:3},{x:"Dec",y:-2}],zones:[{value:0,color:"#3b82f6",dashStyle:"dashed"},{color:"#ef4444"}]}]},{fitContainer:e.fitContainer,width:e.width,height:e.height,...n(e),line:{curve:e.curve,dots:e.dots,width:e.lineWidth}})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: 'dual-axis-numeric',
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
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    dataset: 'dual-axis-category',
    curve: 'smooth',
    dots: true,
    width: 700,
    yAxis2SeriesKeys: 'margin',
    yAxis2Label: 'Profit Margin (%)'
  },
  render: args => renderChart('line', resolveDataset(LINE_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots
    }
  })
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'chart-grid';
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
      container.style.width = '100%';
      container.style.height = '280px';
      container.style.border = '1px solid #e2e8f0';
      container.style.borderRadius = '4px';
      section.appendChild(container);
      const engine = new ChartEngine(container, 'line', {
        responsive: true,
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
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Dual Y-Axis (3 series)',
  args: {
    ...commonDefaults,
    dataset: 'dual-axis-3series',
    curve: 'linear',
    dots: true,
    width: 700,
    yAxis2SeriesKeys: 'profit-rate',
    yAxis2Label: 'Profit Rate (%)'
  },
  render: args => renderChart('line', resolveDataset(LINE_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots
    }
  })
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Dual Y-Axis Legend Toggle',
  args: {
    ...commonDefaults,
    dataset: 'dual-axis-category',
    curve: 'linear',
    dots: true,
    width: 700,
    yAxis2SeriesKeys: 'margin',
    yAxis2Label: 'Profit Margin (%)'
  },
  render: args => renderChart('line', resolveDataset(LINE_DATASETS, args.dataset), {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args),
    line: {
      curve: args.curve,
      dots: args.dots
    }
  })
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Inverted + Dots + Smooth',
  args: {
    ...commonDefaults,
    dataset: 'numeric-basic',
    curve: 'smooth',
    dots: true,
    lineWidth: 2,
    inverted: true
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
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Data Labels + Background',
  args: {
    ...commonDefaults,
    dataset: 'numeric-basic',
    curve: 'linear',
    dots: true,
    lineWidth: 2,
    showDataLabel: true,
    dataLabelBackground: true
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
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Zones (temperature)',
  args: {
    ...commonDefaults,
    curve: 'smooth',
    dots: false,
    lineWidth: 2
  },
  render: args => {
    const zoneData: ChartData = {
      xAxisType: 'category',
      series: [{
        key: 'temp',
        label: 'Temperature',
        data: [{
          x: 'Jan',
          y: -5
        }, {
          x: 'Feb',
          y: -3
        }, {
          x: 'Mar',
          y: 2
        }, {
          x: 'Apr',
          y: 8
        }, {
          x: 'May',
          y: 15
        }, {
          x: 'Jun',
          y: 22
        }, {
          x: 'Jul',
          y: 25
        }, {
          x: 'Aug',
          y: 23
        }, {
          x: 'Sep',
          y: 18
        }, {
          x: 'Oct',
          y: 10
        }, {
          x: 'Nov',
          y: 3
        }, {
          x: 'Dec',
          y: -2
        }],
        zones: [{
          value: 0,
          color: '#3b82f6',
          dashStyle: 'dashed'
        }, {
          color: '#ef4444'
        }]
      }]
    };
    return renderChart('line', zoneData, {
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height,
      ...commonOptionsFrom(args),
      line: {
        curve: args.curve,
        dots: args.dots,
        width: args.lineWidth
      }
    });
  }
}`,...C.parameters?.docs?.source}}};const F=["SmoothCurve","StepCurve","WithDots","MultiSeries","CategoryAxis","DualYAxis","ColorPalettes","ThreeSeriesDualYAxis","DualYAxisLegendToggle","InvertedWithDots","WithDataLabels","WithZones"];export{m as CategoryAxis,p as ColorPalettes,g as DualYAxis,f as DualYAxisLegendToggle,y as InvertedWithDots,u as MultiSeries,c as SmoothCurve,h as StepCurve,v as ThreeSeriesDualYAxis,w as WithDataLabels,l as WithDots,C as WithZones,F as __namedExportsOrder,P as default};
