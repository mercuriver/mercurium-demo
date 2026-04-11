import{c as h,a as g,r as s,b as d}from"./story-utils-Sq0wUdi9.js";import"./chart-engine-BmtyFlsE.js";import"./tooltip-plugin-B9rRNLzl.js";import"./crosshair-plugin-lsuhlxfG.js";import"./mock-data-BShfxM5i.js";const y={xAxisType:"number",series:[{key:"edge",label:"Edge Values",data:[{x:0,y:5},{x:1,y:95},{x:2,y:50},{x:3,y:10},{x:4,y:90},{x:5,y:3}]}]},m={xAxisType:"category",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[{key:"sales",label:"Sales",data:[{x:"Jan",y:120},{x:"Feb",y:135},{x:"Mar",y:128},{x:"Apr",y:145},{x:"May",y:132},{x:"Jun",y:150},{x:"Jul",y:142},{x:"Aug",y:155},{x:"Sep",y:138},{x:"Oct",y:160},{x:"Nov",y:148},{x:"Dec",y:170}]},{key:"cost",label:"Cost",data:[{x:"Jan",y:80},{x:"Feb",y:90},{x:"Mar",y:85},{x:"Apr",y:95},{x:"May",y:88},{x:"Jun",y:100},{x:"Jul",y:92},{x:"Aug",y:105},{x:"Sep",y:90},{x:"Oct",y:110},{x:"Nov",y:98},{x:"Dec",y:115}]}]},C={title:"Charts/Features/Data Label",args:{...g,showDataLabel:!0,dataLabelBackground:!0,chartType:"bar"},argTypes:{chartType:{control:"select",options:["line","bar","scatter"],description:"차트 유형",table:{defaultValue:{summary:"bar"},category:"Common"}},...h}},c={args:{chartType:"bar",showDataLabel:!0,dataLabelBackground:!0,dataLabelRotation:-45},render:t=>{const a=document.createElement("div");a.style.display="flex",a.style.gap="24px",a.style.flexWrap="wrap";const o=[0,-45,-90,45];for(const r of o){const n=document.createElement("div"),e=document.createElement("div");e.textContent=`rotation: ${r}`,e.style.marginBottom="8px",e.style.fontFamily="sans-serif",e.style.fontSize="13px",e.style.color="#666",n.appendChild(e);const l=s(t.chartType,m,{width:450,height:300,...d({...t,showDataLabel:!0,dataLabelBackground:!0,dataLabelRotation:r})});n.appendChild(l),a.appendChild(n)}return a}},i={args:{chartType:"line",showDataLabel:!0,dataLabelBackground:!0},render:t=>{const a=document.createElement("div");a.style.display="flex",a.style.gap="24px",a.style.flexWrap="wrap";const o=[{borderRadius:0,padding:0,label:"radius=0, default padding"},{borderRadius:8,padding:0,label:"radius=8, default padding"},{borderRadius:3,padding:8,label:"radius=3, padding=8"},{borderRadius:12,padding:10,label:"radius=12, padding=10"}];for(const r of o){const n=document.createElement("div"),e=document.createElement("div");e.textContent=r.label,e.style.marginBottom="8px",e.style.fontFamily="sans-serif",e.style.fontSize="13px",e.style.color="#666",n.appendChild(e);const l=s(t.chartType,y,{width:450,height:300,...d({...t,showDataLabel:!0,dataLabelBackground:!0,dataLabelBorderRadius:r.borderRadius,dataLabelPadding:r.padding})});n.appendChild(l),a.appendChild(n)}return a}},p={args:{chartType:"line",showDataLabel:!0,dataLabelBackground:!0,dataLabelCrop:!1},render:t=>{const a=document.createElement("div");a.style.display="flex",a.style.gap="24px",a.style.flexWrap="wrap";const o=["allow","justify","hidden"];for(const r of o){const n=document.createElement("div"),e=document.createElement("div");e.textContent=`overflow: '${r}'`,e.style.marginBottom="8px",e.style.fontFamily="sans-serif",e.style.fontSize="13px",e.style.color="#666",n.appendChild(e);const l=s(t.chartType,y,{width:450,height:300,...d({...t,showDataLabel:!0,dataLabelBackground:!0,dataLabelOverflow:r,dataLabelCrop:!1})});n.appendChild(l),a.appendChild(n)}return a}},u={args:{chartType:"line",showDataLabel:!0,dataLabelBackground:!0,dataLabelOverflow:"allow"},render:t=>{const a=document.createElement("div");a.style.display="flex",a.style.gap="24px",a.style.flexWrap="wrap";const o=[{crop:!0,label:"crop: true (clipped to data area)"},{crop:!1,label:"crop: false (labels can overflow)"}];for(const r of o){const n=document.createElement("div"),e=document.createElement("div");e.textContent=r.label,e.style.marginBottom="8px",e.style.fontFamily="sans-serif",e.style.fontSize="13px",e.style.color="#666",n.appendChild(e);const l=s(t.chartType,y,{width:450,height:300,...d({...t,showDataLabel:!0,dataLabelBackground:!0,dataLabelOverflow:"allow",dataLabelCrop:r.crop})});n.appendChild(l),a.appendChild(n)}return a}},b={args:{chartType:"bar",showDataLabel:!0,dataLabelBackground:!0,dataLabelRotation:0,dataLabelBorderRadius:3,dataLabelPadding:0,dataLabelOverflow:"justify",dataLabelCrop:!0},render:t=>s(t.chartType,m,{fitContainer:t.fitContainer,width:t.width,height:t.height,...d(t)})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'bar',
    showDataLabel: true,
    dataLabelBackground: true,
    dataLabelRotation: -45
  },
  render: args => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '24px';
    container.style.flexWrap = 'wrap';
    const rotations = [0, -45, -90, 45];
    for (const rot of rotations) {
      const section = document.createElement('div');
      const label = document.createElement('div');
      label.textContent = \`rotation: \${rot}\`;
      label.style.marginBottom = '8px';
      label.style.fontFamily = 'sans-serif';
      label.style.fontSize = '13px';
      label.style.color = '#666';
      section.appendChild(label);
      const chart = renderChart(args.chartType, DENSE_DATA, {
        width: 450,
        height: 300,
        ...commonOptionsFrom({
          ...args,
          showDataLabel: true,
          dataLabelBackground: true,
          dataLabelRotation: rot
        })
      });
      section.appendChild(chart);
      container.appendChild(section);
    }
    return container;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'line',
    showDataLabel: true,
    dataLabelBackground: true
  },
  render: args => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '24px';
    container.style.flexWrap = 'wrap';
    const configs = [{
      borderRadius: 0,
      padding: 0,
      label: 'radius=0, default padding'
    }, {
      borderRadius: 8,
      padding: 0,
      label: 'radius=8, default padding'
    }, {
      borderRadius: 3,
      padding: 8,
      label: 'radius=3, padding=8'
    }, {
      borderRadius: 12,
      padding: 10,
      label: 'radius=12, padding=10'
    }];
    for (const cfg of configs) {
      const section = document.createElement('div');
      const labelEl = document.createElement('div');
      labelEl.textContent = cfg.label;
      labelEl.style.marginBottom = '8px';
      labelEl.style.fontFamily = 'sans-serif';
      labelEl.style.fontSize = '13px';
      labelEl.style.color = '#666';
      section.appendChild(labelEl);
      const chart = renderChart(args.chartType, EDGE_DATA, {
        width: 450,
        height: 300,
        ...commonOptionsFrom({
          ...args,
          showDataLabel: true,
          dataLabelBackground: true,
          dataLabelBorderRadius: cfg.borderRadius,
          dataLabelPadding: cfg.padding
        })
      });
      section.appendChild(chart);
      container.appendChild(section);
    }
    return container;
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'line',
    showDataLabel: true,
    dataLabelBackground: true,
    dataLabelCrop: false
  },
  render: args => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '24px';
    container.style.flexWrap = 'wrap';
    const overflows: DataLabelOverflow[] = ['allow', 'justify', 'hidden'];
    for (const ov of overflows) {
      const section = document.createElement('div');
      const label = document.createElement('div');
      label.textContent = \`overflow: '\${ov}'\`;
      label.style.marginBottom = '8px';
      label.style.fontFamily = 'sans-serif';
      label.style.fontSize = '13px';
      label.style.color = '#666';
      section.appendChild(label);
      const chart = renderChart(args.chartType, EDGE_DATA, {
        width: 450,
        height: 300,
        ...commonOptionsFrom({
          ...args,
          showDataLabel: true,
          dataLabelBackground: true,
          dataLabelOverflow: ov,
          dataLabelCrop: false
        })
      });
      section.appendChild(chart);
      container.appendChild(section);
    }
    return container;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'line',
    showDataLabel: true,
    dataLabelBackground: true,
    dataLabelOverflow: 'allow'
  },
  render: args => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '24px';
    container.style.flexWrap = 'wrap';
    const crops = [{
      crop: true,
      label: 'crop: true (clipped to data area)'
    }, {
      crop: false,
      label: 'crop: false (labels can overflow)'
    }];
    for (const cfg of crops) {
      const section = document.createElement('div');
      const labelEl = document.createElement('div');
      labelEl.textContent = cfg.label;
      labelEl.style.marginBottom = '8px';
      labelEl.style.fontFamily = 'sans-serif';
      labelEl.style.fontSize = '13px';
      labelEl.style.color = '#666';
      section.appendChild(labelEl);
      const chart = renderChart(args.chartType, EDGE_DATA, {
        width: 450,
        height: 300,
        ...commonOptionsFrom({
          ...args,
          showDataLabel: true,
          dataLabelBackground: true,
          dataLabelOverflow: 'allow',
          dataLabelCrop: cfg.crop
        })
      });
      section.appendChild(chart);
      container.appendChild(section);
    }
    return container;
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    chartType: 'bar',
    showDataLabel: true,
    dataLabelBackground: true,
    dataLabelRotation: 0,
    dataLabelBorderRadius: 3,
    dataLabelPadding: 0,
    dataLabelOverflow: 'justify',
    dataLabelCrop: true
  },
  render: args => renderChart(args.chartType, DENSE_DATA, {
    fitContainer: args.fitContainer,
    width: args.width,
    height: args.height,
    ...commonOptionsFrom(args)
  })
}`,...b.parameters?.docs?.source}}};const v=["Rotation","BorderRadiusAndPadding","Overflow","Crop","Playground"];export{i as BorderRadiusAndPadding,u as Crop,p as Overflow,b as Playground,c as Rotation,v as __namedExportsOrder,C as default};
