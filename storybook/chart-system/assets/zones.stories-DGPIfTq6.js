import{C as u}from"./chart-engine-DYlwJQty.js";import{L as m,T as h}from"./tooltip-plugin-BG30u2XK.js";import{C as b}from"./crosshair-plugin-D5F2v-An.js";const v={title:"Charts/Features/Zones"};function a(e,r,n,o={}){const s=new u(e,r,{responsive:!1,width:600,height:360,legend:{show:!0},tooltip:{show:!0,shared:!0,highlightSeries:!0},crosshair:{show:!0,type:"x"},...o});return s.installPlugin(new m),s.installPlugin(new h),s.installPlugin(new b),s.setData(n),s}function t(e){const r=document.createElement("div");r.style.marginBottom="32px";const n=document.createElement("div");n.style.fontSize="14px",n.style.fontWeight="600",n.style.marginBottom="8px",n.textContent=e,r.appendChild(n);const o=document.createElement("div");return o.style.width="600px",o.style.height="360px",o.style.border="1px solid #e2e8f0",o.style.borderRadius="4px",r.appendChild(o),{wrapper:r,container:o}}const p={xAxisType:"category",series:[{key:"temp",label:"Temperature",data:[{x:"Jan",y:-5},{x:"Feb",y:-3},{x:"Mar",y:2},{x:"Apr",y:8},{x:"May",y:15},{x:"Jun",y:22},{x:"Jul",y:25},{x:"Aug",y:23},{x:"Sep",y:18},{x:"Oct",y:10},{x:"Nov",y:3},{x:"Dec",y:-2}],zones:[{value:0,color:"#3b82f6",dashStyle:"dashed"},{color:"#ef4444"}]}]},c={render:()=>{const e=document.createElement("div"),{wrapper:r,container:n}=t("Line: Y-value zones (blue below 0, red above 0)");return a(n,"line",p),e.appendChild(r),e}},l={render:()=>{const e=document.createElement("div"),r={xAxisType:"category",series:[{key:"temp",label:"Temperature",data:p.series[0].data,zones:[{value:0,color:"#3b82f6",fillColor:"rgba(59,130,246,0.2)"},{value:15,color:"#f59e0b",fillColor:"rgba(245,158,11,0.2)"},{color:"#ef4444",fillColor:"rgba(239,68,68,0.2)"}]}]},{wrapper:n,container:o}=t("Area: 3 zones with fillColor (cold/warm/hot)");return a(o,"area",r),e.appendChild(n),e}},i={render:()=>{const e=document.createElement("div"),r={xAxisType:"category",series:[{key:"profit",label:"Profit",data:[{x:"Q1",y:-20},{x:"Q2",y:5},{x:"Q3",y:30},{x:"Q4",y:50},{x:"Q5",y:-10},{x:"Q6",y:45}],zones:[{value:0,color:"#ef4444"},{value:25,color:"#f59e0b"},{color:"#22c55e"}]}]},{wrapper:n,container:o}=t("Bar: zone colors by Y value (loss=red, low=yellow, high=green)");return a(o,"bar",r),e.appendChild(n),e}},d={render:()=>{const e=document.createElement("div"),r={xAxisType:"number",series:[{key:"signal",label:"Signal",data:[{x:0,y:10},{x:1,y:25},{x:2,y:40},{x:3,y:35},{x:4,y:50},{x:5,y:30},{x:6,y:20},{x:7,y:45},{x:8,y:55},{x:9,y:40},{x:10,y:60}],zoneAxis:"x",zones:[{value:3,color:"#8b5cf6"},{value:7,color:"#06b6d4"},{color:"#22c55e"}]}]},{wrapper:n,container:o}=t("Line: zoneAxis=x (color changes at x=3 and x=7)");return a(o,"line",r),e.appendChild(n),e}},x={render:()=>{const e=document.createElement("div"),r={xAxisType:"number",series:[{key:"forecast",label:"Forecast",data:[{x:1,y:100},{x:2,y:120},{x:3,y:110},{x:4,y:140},{x:5,y:130},{x:6,y:150},{x:7,y:145},{x:8,y:160}],zoneAxis:"x",zones:[{value:5,color:"#3b82f6"},{color:"#3b82f6",dashStyle:"dashed"}]}]},{wrapper:n,container:o}=t("Line: zones + dashStyle (solid for actual, dashed for forecast)");return a(o,"line",r),e.appendChild(n),e}},y={render:()=>{const e=document.createElement("div"),r={xAxisType:"number",series:[{key:"scores",label:"Test Scores",data:[{x:1,y:35},{x:2,y:55},{x:3,y:72},{x:4,y:48},{x:5,y:90},{x:6,y:65},{x:7,y:82},{x:8,y:40},{x:9,y:95},{x:10,y:58}],zones:[{value:50,color:"#ef4444"},{value:70,color:"#f59e0b"},{color:"#22c55e"}]}]},{wrapper:n,container:o}=t("Scatter: zone colors by Y value (fail=red, pass=yellow, excellent=green)");return a(o,"scatter",r,{scatter:{dotSize:6}}),e.appendChild(n),e}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = document.createElement('div');
    const {
      wrapper: w1,
      container: c1
    } = makeSection('Line: Y-value zones (blue below 0, red above 0)');
    createChart(c1, 'line', temperatureData);
    root.appendChild(w1);
    return root;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = document.createElement('div');
    const areaData: ChartData = {
      xAxisType: 'category',
      series: [{
        key: 'temp',
        label: 'Temperature',
        data: temperatureData.series[0].data,
        zones: [{
          value: 0,
          color: '#3b82f6',
          fillColor: 'rgba(59,130,246,0.2)'
        }, {
          value: 15,
          color: '#f59e0b',
          fillColor: 'rgba(245,158,11,0.2)'
        }, {
          color: '#ef4444',
          fillColor: 'rgba(239,68,68,0.2)'
        }]
      }]
    };
    const {
      wrapper: w1,
      container: c1
    } = makeSection('Area: 3 zones with fillColor (cold/warm/hot)');
    createChart(c1, 'area', areaData);
    root.appendChild(w1);
    return root;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = document.createElement('div');
    const barData: ChartData = {
      xAxisType: 'category',
      series: [{
        key: 'profit',
        label: 'Profit',
        data: [{
          x: 'Q1',
          y: -20
        }, {
          x: 'Q2',
          y: 5
        }, {
          x: 'Q3',
          y: 30
        }, {
          x: 'Q4',
          y: 50
        }, {
          x: 'Q5',
          y: -10
        }, {
          x: 'Q6',
          y: 45
        }],
        zones: [{
          value: 0,
          color: '#ef4444'
        }, {
          value: 25,
          color: '#f59e0b'
        }, {
          color: '#22c55e'
        }]
      }]
    };
    const {
      wrapper: w1,
      container: c1
    } = makeSection('Bar: zone colors by Y value (loss=red, low=yellow, high=green)');
    createChart(c1, 'bar', barData);
    root.appendChild(w1);
    return root;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = document.createElement('div');
    const xZoneData: ChartData = {
      xAxisType: 'number',
      series: [{
        key: 'signal',
        label: 'Signal',
        data: [{
          x: 0,
          y: 10
        }, {
          x: 1,
          y: 25
        }, {
          x: 2,
          y: 40
        }, {
          x: 3,
          y: 35
        }, {
          x: 4,
          y: 50
        }, {
          x: 5,
          y: 30
        }, {
          x: 6,
          y: 20
        }, {
          x: 7,
          y: 45
        }, {
          x: 8,
          y: 55
        }, {
          x: 9,
          y: 40
        }, {
          x: 10,
          y: 60
        }],
        zoneAxis: 'x',
        zones: [{
          value: 3,
          color: '#8b5cf6'
        }, {
          value: 7,
          color: '#06b6d4'
        }, {
          color: '#22c55e'
        }]
      }]
    };
    const {
      wrapper: w1,
      container: c1
    } = makeSection('Line: zoneAxis=x (color changes at x=3 and x=7)');
    createChart(c1, 'line', xZoneData);
    root.appendChild(w1);
    return root;
  }
}`,...d.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = document.createElement('div');
    const dashData: ChartData = {
      xAxisType: 'number',
      series: [{
        key: 'forecast',
        label: 'Forecast',
        data: [{
          x: 1,
          y: 100
        }, {
          x: 2,
          y: 120
        }, {
          x: 3,
          y: 110
        }, {
          x: 4,
          y: 140
        }, {
          x: 5,
          y: 130
        }, {
          x: 6,
          y: 150
        }, {
          x: 7,
          y: 145
        }, {
          x: 8,
          y: 160
        }],
        zoneAxis: 'x',
        zones: [{
          value: 5,
          color: '#3b82f6'
        }, {
          color: '#3b82f6',
          dashStyle: 'dashed'
        }]
      }]
    };
    const {
      wrapper: w1,
      container: c1
    } = makeSection('Line: zones + dashStyle (solid for actual, dashed for forecast)');
    createChart(c1, 'line', dashData);
    root.appendChild(w1);
    return root;
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = document.createElement('div');
    const scatterData: ChartData = {
      xAxisType: 'number',
      series: [{
        key: 'scores',
        label: 'Test Scores',
        data: [{
          x: 1,
          y: 35
        }, {
          x: 2,
          y: 55
        }, {
          x: 3,
          y: 72
        }, {
          x: 4,
          y: 48
        }, {
          x: 5,
          y: 90
        }, {
          x: 6,
          y: 65
        }, {
          x: 7,
          y: 82
        }, {
          x: 8,
          y: 40
        }, {
          x: 9,
          y: 95
        }, {
          x: 10,
          y: 58
        }],
        zones: [{
          value: 50,
          color: '#ef4444'
        }, {
          value: 70,
          color: '#f59e0b'
        }, {
          color: '#22c55e'
        }]
      }]
    };
    const {
      wrapper: w1,
      container: c1
    } = makeSection('Scatter: zone colors by Y value (fail=red, pass=yellow, excellent=green)');
    createChart(c1, 'scatter', scatterData, {
      scatter: {
        dotSize: 6
      }
    });
    root.appendChild(w1);
    return root;
  }
}`,...y.parameters?.docs?.source}}};const C=["LineZones","AreaZones","BarZones","ZoneAxisX","ZonesDashStyle","ScatterZones"];export{l as AreaZones,i as BarZones,c as LineZones,y as ScatterZones,d as ZoneAxisX,x as ZonesDashStyle,C as __namedExportsOrder,v as default};
