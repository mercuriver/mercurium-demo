import{r as o,N as i,C as s,D as n,a as l,b as y}from"./story-utils-DdhabU4Y.js";const b={title:"Overview",tags:["!autodocs"],parameters:{layout:"fullscreen"}},c={xAxisType:"category",series:[{key:"revenue",label:"Revenue",seriesType:"bar",opacity:.75,data:[{x:"Jan",y:120},{x:"Feb",y:180},{x:"Mar",y:150},{x:"Apr",y:210},{x:"May",y:190},{x:"Jun",y:250}]},{key:"cost",label:"Cost",seriesType:"bar",opacity:.75,data:[{x:"Jan",y:80},{x:"Feb",y:95},{x:"Mar",y:110},{x:"Apr",y:105},{x:"May",y:120},{x:"Jun",y:130}]},{key:"trend",label:"Trend",seriesType:"line",data:[{x:"Jan",y:100},{x:"Feb",y:130},{x:"Mar",y:125},{x:"Apr",y:155},{x:"May",y:150},{x:"Jun",y:185}]}]},d={xAxisType:"category",series:[{key:"profit",label:"Monthly Profit",zones:[{value:0,color:"#ef4444"},{value:30,color:"#f59e0b"},{color:"#22c55e"}],data:[{x:"Jan",y:-15},{x:"Feb",y:10},{x:"Mar",y:-25},{x:"Apr",y:45},{x:"May",y:20},{x:"Jun",y:60},{x:"Jul",y:-8},{x:"Aug",y:35},{x:"Sep",y:55},{x:"Oct",y:15},{x:"Nov",y:70},{x:"Dec",y:50}]}]},p={xAxisType:"number",series:[{key:"countries",label:"Countries",colorColumnLabel:"Region",sizeColumnLabel:"Population (M)",data:[{x:45e3,y:82,size:83,colorValue:"Europe"},{x:42e3,y:83,size:67,colorValue:"Europe"},{x:38e3,y:81,size:47,colorValue:"Europe"},{x:65e3,y:84,size:25,colorValue:"Asia"},{x:12e3,y:77,size:1400,colorValue:"Asia"},{x:6500,y:70,size:1380,colorValue:"Asia"},{x:63e3,y:79,size:330,colorValue:"Americas"},{x:18e3,y:76,size:210,colorValue:"Americas"},{x:48e3,y:82,size:38,colorValue:"Americas"},{x:55e3,y:83,size:26,colorValue:"Oceania"}]}]},u={xAxisType:"category",series:[{key:"score",label:"Score",data:[{x:"TypeScript",y:92},{x:"Python",y:88},{x:"Rust",y:85},{x:"Go",y:78},{x:"Java",y:72},{x:"C++",y:68}]}]},x={xAxisType:"number",series:[{key:"quality-scores",label:"Quality Score (%)",data:[{x:1,y:45,size:35},{x:2,y:78,size:12},{x:3,y:52,size:70},{x:4,y:88,size:28},{x:5,y:38,size:55},{x:6,y:68,size:18},{x:7,y:92,size:82},{x:8,y:55,size:42},{x:9,y:72,size:22},{x:10,y:85,size:60},{x:11,y:65,size:48},{x:12,y:95,size:15},{x:13,y:48,size:75},{x:14,y:82,size:32},{x:15,y:74,size:52}]}]};function h(a){const e={frameTheme:a,legend:{show:!0,position:"top"},tooltip:{show:!0}};return[{type:"line",data:i,label:"Line Chart",description:"Multi-series smooth curves with data points",options:{...e,line:{curve:"smooth",dots:!0,width:2}}},{type:"bar",data:s,label:"Bar Chart",description:"Grouped category bars",options:{...e,bar:{radius:2}}},{type:"area",data:i,label:"Area Chart",description:"Stacked area with smooth interpolation",options:{...e,line:{curve:"smooth"},area:{stacked:!0,opacity:.5}}},{type:"scatter",data:p,label:"Bubble Chart",description:"GDP vs Life Expectancy, bubble = population, color = region",options:{...e,scatter:{minRadius:4,maxRadius:28,colorScaleType:"categorical"},xAxis:{title:"GDP per Capita ($)"},yAxis:{title:"Life Expectancy"}}},{type:"combo",data:c,label:"Combo Chart",description:"Bar + Line mixed series types",options:{...e,line:{width:2.5,dots:!0},bar:{radius:2}}},{type:"timeseries",data:n,label:"Timeseries + Navigator",description:"Monthly data with interactive range selector",options:{...e,line:{curve:"smooth",width:2},zoom:{enabled:!0},xNavigator:{enabled:!0}},plugins:["zoom","navigator"]},{type:"line",data:d,label:"Zone Styling",description:"Value-based color zones: loss (red), low (yellow), high (green)",options:{...e,line:{width:2.5,dots:!0}}},{type:"scatter",data:x,label:"Grayscale Bubble",description:"`grayscale: true` + bubble size mapping -- palette / colorByPoint 색상을 무채색으로, 크기는 `size` 필드 기반",options:{...e,scatter:{minRadius:5,maxRadius:26},colorByPoint:!0,grayscale:!0,legend:{show:!1},xAxis:{title:"Sample #"},yAxis:{title:"Score (%)"}}},{type:"line",data:l,label:"Annotations",description:"Reference lines and highlight bands",options:{...e,line:{curve:"smooth",width:2},annotations:[{id:"avg",type:"referenceLine",axis:"y",anchor:{kind:"line-h",y:12},color:"#ef4444",dashStyle:[6,4],lineWidth:1.5,label:"Average"},{id:"band",type:"band",axis:"y",anchor:{kind:"band",y0:8,y1:16},fillColor:"rgba(59, 130, 246, 0.08)",color:"#3b82f6"}]},plugins:["annotation"]},{type:"line",data:i,label:"Highlight Series + Crosshair",description:"Hover dims non-active series, crosshair tracks both axes",options:{...e,line:{curve:"smooth",dots:!0,width:2},tooltip:{show:!0,shared:!1,highlightSeries:!0,highlightDots:!0},crosshair:{show:!0,type:"both"}}},{type:"bar",data:y,label:"Dual Y-Axis",description:"Sales (left axis) + Profit Margin (right axis)",options:{...e,bar:{radius:2},line:{dots:!0},yAxis:{title:"Sales ($K)"},yAxis2:{title:"Profit Margin (%)"},yAxis2SeriesKeys:["margin"]}},{type:"bar",data:u,label:"Inverted (Horizontal) Bar",description:"Horizontal bar chart with inverted axes",options:{...e,inverted:!0,bar:{radius:3,barWidth:.6},colorByPoint:!0}}]}const t={parameters:{controls:{disable:!0}},render:a=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:2rem;";const r=document.createElement("div");return r.style.cssText="margin-bottom:0.5rem;",r.innerHTML=`
      <h1 style="font-size:24px;font-weight:700;margin:0 0 0.5rem 0;">
        Mercurium Chart System
      </h1>
      <p style="font-size:14px;opacity:0.7;margin:0;line-height:1.6;">
        Canvas-based charting library built on D3 scales.<br/>
        Line, Bar, Area, Scatter, Timeseries, and Combo chart types
        with plugins for legend, tooltip, crosshair, zoom, navigator, and annotation.
      </p>
    `,e.appendChild(r),e.appendChild(o(h(a.frameTheme??"light"),{columns:3,cardHeight:280,hideDataSummary:!0})),e}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const root = document.createElement('div');
    root.style.cssText = 'display:flex;flex-direction:column;gap:2rem;';
    const header = document.createElement('div');
    header.style.cssText = 'margin-bottom:0.5rem;';
    header.innerHTML = \`
      <h1 style="font-size:24px;font-weight:700;margin:0 0 0.5rem 0;">
        Mercurium Chart System
      </h1>
      <p style="font-size:14px;opacity:0.7;margin:0;line-height:1.6;">
        Canvas-based charting library built on D3 scales.<br/>
        Line, Bar, Area, Scatter, Timeseries, and Combo chart types
        with plugins for legend, tooltip, crosshair, zoom, navigator, and annotation.
      </p>
    \`;
    root.appendChild(header);
    root.appendChild(renderChartGrid(buildCards(args.frameTheme ?? 'light'), {
      columns: 3,
      cardHeight: 280,
      hideDataSummary: true
    }));
    return root;
  }
}`,...t.parameters?.docs?.source}}};const g=["Showcase"];export{t as Showcase,g as __namedExportsOrder,b as default};
