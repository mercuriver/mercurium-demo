import{C as p,A as y}from"./chart-engine-BdkGv5ec.js";import{L as u,T as m}from"./tooltip-plugin-DmLF6MzB.js";import{C as h}from"./crosshair-plugin-DmSVPU7d.js";import{N as d,C as x,D as g,a as b,b as f,c as A}from"./mock-data-DLH8EjXc.js";const _={title:"Overview",tags:["!autodocs"],parameters:{layout:"fullscreen"}},T={xAxisType:"category",series:[{key:"revenue",label:"Revenue",seriesType:"bar",opacity:.75,data:[{x:"Jan",y:120},{x:"Feb",y:180},{x:"Mar",y:150},{x:"Apr",y:210},{x:"May",y:190},{x:"Jun",y:250}]},{key:"cost",label:"Cost",seriesType:"bar",opacity:.75,data:[{x:"Jan",y:80},{x:"Feb",y:95},{x:"Mar",y:110},{x:"Apr",y:105},{x:"May",y:120},{x:"Jun",y:130}]},{key:"trend",label:"Trend",seriesType:"line",data:[{x:"Jan",y:100},{x:"Feb",y:130},{x:"Mar",y:125},{x:"Apr",y:155},{x:"May",y:150},{x:"Jun",y:185}]}]},v={xAxisType:"category",series:[{key:"profit",label:"Monthly Profit",zones:[{value:0,color:"#ef4444"},{value:30,color:"#f59e0b"},{color:"#22c55e"}],data:[{x:"Jan",y:-15},{x:"Feb",y:10},{x:"Mar",y:-25},{x:"Apr",y:45},{x:"May",y:20},{x:"Jun",y:60},{x:"Jul",y:-8},{x:"Aug",y:35},{x:"Sep",y:55},{x:"Oct",y:15},{x:"Nov",y:70},{x:"Dec",y:50}]}]},C={xAxisType:"number",series:[{key:"countries",label:"Countries",colorColumnLabel:"Region",sizeColumnLabel:"Population (M)",data:[{x:45e3,y:82,size:83,colorValue:"Europe"},{x:42e3,y:83,size:67,colorValue:"Europe"},{x:38e3,y:81,size:47,colorValue:"Europe"},{x:65e3,y:84,size:25,colorValue:"Asia"},{x:12e3,y:77,size:1400,colorValue:"Asia"},{x:6500,y:70,size:1380,colorValue:"Asia"},{x:63e3,y:79,size:330,colorValue:"Americas"},{x:18e3,y:76,size:210,colorValue:"Americas"},{x:48e3,y:82,size:38,colorValue:"Americas"},{x:55e3,y:83,size:26,colorValue:"Oceania"}]}]},E={xAxisType:"category",series:[{key:"score",label:"Score",data:[{x:"TypeScript",y:92},{x:"Python",y:88},{x:"Rust",y:85},{x:"Go",y:78},{x:"Java",y:72},{x:"C++",y:68}]}]},w=[{type:"line",title:"Line Chart",description:"Multi-series smooth curves with data points",data:d,options:{line:{curve:"smooth",dots:!0,width:2}}},{type:"bar",title:"Bar Chart",description:"Grouped category bars",data:x,options:{bar:{radius:2}}},{type:"area",title:"Area Chart",description:"Stacked area with smooth interpolation",data:d,options:{line:{curve:"smooth"},area:{stacking:"normal",opacity:.5}}},{type:"scatter",title:"Bubble Chart",description:"GDP vs Life Expectancy, bubble = population, color = region",data:C,options:{scatter:{minRadius:4,maxRadius:28,colorScaleType:"categorical"},xAxis:{label:"GDP per Capita ($)"},yAxis:{label:"Life Expectancy"}}},{type:"combo",title:"Combo Chart",description:"Bar + Line mixed series types",data:T,options:{line:{width:2.5,dots:!0},bar:{radius:2}}},{type:"timeseries",title:"Timeseries + Navigator",description:"Monthly data with interactive range selector",data:g,options:{line:{curve:"smooth",width:2},zoom:{enabled:!0},navigator:{enabled:!0,height:40}},height:340},{type:"line",title:"Zone Styling",description:"Value-based color zones: loss (red), low (yellow), high (green)",data:v,options:{line:{width:2.5,dots:!0}}},{type:"line",title:"Annotations",description:"Reference lines, highlight bands, and text labels",data:b,options:{line:{curve:"smooth",width:2},annotations:[{id:"avg",type:"referenceLine",axis:"y",value:12,color:"#ef4444",dashStyle:[6,4],lineWidth:1.5,label:"Average"},{id:"band",type:"band",axis:"y",from:8,to:16,fillColor:"rgba(59, 130, 246, 0.08)",color:"#3b82f6"}]},plugins:["legend","tooltip","crosshair","annotation"]},{type:"bar",title:"Dual Y-Axis",description:"Sales (left axis) + Profit Margin (right axis)",data:f,options:{bar:{radius:2},line:{dots:!0},yAxis:{label:"Sales ($K)"},yAxis2:{label:"Profit Margin (%)"},yAxis2SeriesKeys:["margin"]}},{type:"bar",title:"Inverted (Horizontal) Bar",description:"Horizontal bar chart with inverted axes",data:E,options:{inverted:!0,bar:{radius:3,barWidth:.6},colorByPoint:!0}},{type:"bar",title:"Color-by-Point Bar",description:"Each bar colored individually from palette",data:A,options:{colorByPoint:!0,bar:{radius:2}}}],M=["legend","tooltip","crosshair"];function S(e,s,i){const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:0.5rem;";const a=document.createElement("div");a.style.cssText="padding:0 0.25rem;",a.innerHTML=`
    <div style="font-weight:600;font-size:14px;">${e.title}</div>
    <div style="font-size:12px;opacity:0.6;">${e.description}</div>
  `,t.appendChild(a);const l=e.height??280,c=document.createElement("div");c.style.cssText=`
    width:100%;height:${l}px;
    border:1px solid ${i?"#333":"#e2e8f0"};
    border-radius:6px;overflow:hidden;
  `,t.appendChild(c);const o=new p(c,e.type,{responsive:!0,legend:{show:!0,position:"top"},tooltip:{show:!0},frameTheme:s,...e.options}),r=e.plugins??M;return r.includes("legend")&&o.installPlugin(new u),r.includes("tooltip")&&o.installPlugin(new m),r.includes("crosshair")&&o.installPlugin(new h),r.includes("annotation")&&o.installPlugin(new y),requestAnimationFrame(()=>o.setData(e.data)),t}const n={render:e=>{const s=e.frameTheme==="dark",i=document.createElement("div");i.style.cssText=`
      display:flex;flex-direction:column;gap:2rem;
    `;const t=document.createElement("div");t.style.cssText="margin-bottom:0.5rem;",t.innerHTML=`
      <h1 style="font-size:24px;font-weight:700;margin:0 0 0.5rem 0;">
        Mercurium Chart System
      </h1>
      <p style="font-size:14px;opacity:0.7;margin:0;line-height:1.6;">
        Canvas-based charting library built on D3 scales.<br/>
        Line, Bar, Area, Scatter, Timeseries, and Combo chart types
        with plugins for legend, tooltip, crosshair, zoom, navigator, and annotation.
      </p>
    `,i.appendChild(t);const a=document.createElement("div");a.className="chart-grid",i.appendChild(a);for(const l of w)a.appendChild(S(l,e.frameTheme,s));return i}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const isDark = args.frameTheme === 'dark';
    const root = document.createElement('div');
    root.style.cssText = \`
      display:flex;flex-direction:column;gap:2rem;
    \`;

    // Header
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

    // Grid
    const grid = document.createElement('div');
    grid.className = 'chart-grid';
    root.appendChild(grid);
    for (const card of CARDS) {
      grid.appendChild(createCard(card, args.frameTheme, isDark));
    }
    return root;
  }
}`,...n.parameters?.docs?.source}}};const R=["Showcase"];export{n as Showcase,R as __namedExportsOrder,_ as default};
