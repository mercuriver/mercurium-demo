import{c as t}from"./mock-data--NCvz5h5.js";import{c as g,a as p,r as o,b as r}from"./story-utils-Bt4VoPGz.js";import"./chart-engine-Cd-FpfQK.js";import"./tooltip-plugin-CiIlC11d.js";import"./crosshair-plugin-7esPFCNd.js";const b={title:"Charts/Features/Annotations",args:{...p},argTypes:{...g}},a={name:"Reference Line",render:n=>{const e=[{id:"target-line",type:"referenceLine",axis:"y",value:200,color:"#ef4444",dashStyle:[6,4],lineWidth:1.5,label:"Target: 200"},{id:"midpoint",type:"referenceLine",axis:"x",value:3,color:"#8b5cf6",dashStyle:[4,4],label:"Mid Q"}];return o("line",t,{...r(n),fitContainer:n.fitContainer,width:n.width,height:n.height,annotations:e,line:{dots:!0}})}},i={name:"Highlight Band",render:n=>{const e=[{id:"target-range",type:"band",axis:"y",from:150,to:220,fillColor:"rgba(34, 197, 94, 0.15)",color:"#22c55e",label:"Target Range"},{id:"q2-highlight",type:"band",axis:"x",from:3,to:5,fillColor:"rgba(59, 130, 246, 0.1)",color:"#3b82f6",label:"Q2"}];return o("bar",t,{...r(n),fitContainer:n.fitContainer,width:n.width,height:n.height,annotations:e})}},l={name:"Text Label",render:n=>{const e=[{id:"peak-label",type:"text",x:6,y:250,text:"Peak Revenue",color:"#059669",fontSize:14,fontWeight:"bold"},{id:"note",type:"text",x:2,y:100,text:"Low cost period",color:"#6b7280",fontSize:11}];return o("line",t,{...r(n),fitContainer:n.fitContainer,width:n.width,height:n.height,annotations:e,line:{dots:!0}})}},s={name:"Arrow",render:n=>{const e=[{id:"growth-arrow",type:"arrow",fromX:1,fromY:130,toX:6,toY:250,color:"#059669"},{id:"decline-arrow",type:"arrow",fromX:2,fromY:180,toX:3,toY:150,color:"#ef4444",opacity:.7}];return o("line",t,{...r(n),fitContainer:n.fitContainer,width:n.width,height:n.height,annotations:e,line:{dots:!0}})}},c={name:"Callout Box",render:n=>{const e=[{id:"peak-callout",type:"callout",x:5,y:280,targetX:6,targetY:250,text:"All-time high!",backgroundColor:"#fef3c7",borderColor:"#f59e0b",color:"#92400e"},{id:"dip-callout",type:"callout",x:2,y:80,targetX:3,targetY:110,text:"Cost spike",backgroundColor:"#fee2e2",borderColor:"#ef4444",color:"#991b1b"}];return o("line",t,{...r(n),fitContainer:n.fitContainer,width:n.width,height:n.height,annotations:e,line:{dots:!0}})}},d={name:"Shape",render:n=>{const e=[{id:"highlight-circle",type:"shape",shapeType:"circle",cx:4,cy:210,radius:25,fill:"rgba(239, 68, 68, 0.15)",stroke:"#ef4444"},{id:"highlight-rect",type:"shape",shapeType:"rect",cx:2,cy:95,width:50,height:30,fill:"rgba(59, 130, 246, 0.15)",stroke:"#3b82f6"}];return o("line",t,{...r(n),fitContainer:n.fitContainer,width:n.width,height:n.height,annotations:e,line:{dots:!0}})}},h={name:"All Types Combined",render:n=>{const e=[{id:"target-band",type:"band",axis:"y",from:150,to:200,fillColor:"rgba(34, 197, 94, 0.1)",label:"Target Zone",color:"#22c55e"},{id:"avg-line",type:"referenceLine",axis:"y",value:180,color:"#f59e0b",dashStyle:[8,4],label:"Avg: 180"},{id:"note-text",type:"text",x:1,y:260,text:"Revenue vs Cost",color:"#6b7280",fontSize:13,fontWeight:"bold"},{id:"trend-arrow",type:"arrow",fromX:1,fromY:120,toX:6,toY:250,color:"#059669",opacity:.5},{id:"peak-callout",type:"callout",x:5,y:280,targetX:6,targetY:250,text:"Peak!",backgroundColor:"#fff",borderColor:"#ef4444",color:"#ef4444"},{id:"focus-circle",type:"shape",shapeType:"circle",cx:4,cy:210,radius:18,stroke:"#8b5cf6",opacity:.6}];return o("line",t,{...r(n),fitContainer:n.fitContainer,width:n.width,height:n.height,annotations:e,line:{dots:!0,width:2}})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Reference Line',
  render: args => {
    const annotations: AnnotationItem[] = [{
      id: 'target-line',
      type: 'referenceLine',
      axis: 'y',
      value: 200,
      color: '#ef4444',
      dashStyle: [6, 4],
      lineWidth: 1.5,
      label: 'Target: 200'
    }, {
      id: 'midpoint',
      type: 'referenceLine',
      axis: 'x',
      value: 3,
      color: '#8b5cf6',
      dashStyle: [4, 4],
      label: 'Mid Q'
    }];
    return renderChart('line', NUMERIC_BASIC, {
      ...commonOptionsFrom(args),
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height,
      annotations,
      line: {
        dots: true
      }
    });
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Highlight Band',
  render: args => {
    const annotations: AnnotationItem[] = [{
      id: 'target-range',
      type: 'band',
      axis: 'y',
      from: 150,
      to: 220,
      fillColor: 'rgba(34, 197, 94, 0.15)',
      color: '#22c55e',
      label: 'Target Range'
    }, {
      id: 'q2-highlight',
      type: 'band',
      axis: 'x',
      from: 3,
      to: 5,
      fillColor: 'rgba(59, 130, 246, 0.1)',
      color: '#3b82f6',
      label: 'Q2'
    }];
    return renderChart('bar', NUMERIC_BASIC, {
      ...commonOptionsFrom(args),
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height,
      annotations
    });
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Text Label',
  render: args => {
    const annotations: AnnotationItem[] = [{
      id: 'peak-label',
      type: 'text',
      x: 6,
      y: 250,
      text: 'Peak Revenue',
      color: '#059669',
      fontSize: 14,
      fontWeight: 'bold'
    }, {
      id: 'note',
      type: 'text',
      x: 2,
      y: 100,
      text: 'Low cost period',
      color: '#6b7280',
      fontSize: 11
    }];
    return renderChart('line', NUMERIC_BASIC, {
      ...commonOptionsFrom(args),
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height,
      annotations,
      line: {
        dots: true
      }
    });
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Arrow',
  render: args => {
    const annotations: AnnotationItem[] = [{
      id: 'growth-arrow',
      type: 'arrow',
      fromX: 1,
      fromY: 130,
      toX: 6,
      toY: 250,
      color: '#059669'
    }, {
      id: 'decline-arrow',
      type: 'arrow',
      fromX: 2,
      fromY: 180,
      toX: 3,
      toY: 150,
      color: '#ef4444',
      opacity: 0.7
    }];
    return renderChart('line', NUMERIC_BASIC, {
      ...commonOptionsFrom(args),
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height,
      annotations,
      line: {
        dots: true
      }
    });
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Callout Box',
  render: args => {
    const annotations: AnnotationItem[] = [{
      id: 'peak-callout',
      type: 'callout',
      x: 5,
      y: 280,
      targetX: 6,
      targetY: 250,
      text: 'All-time high!',
      backgroundColor: '#fef3c7',
      borderColor: '#f59e0b',
      color: '#92400e'
    }, {
      id: 'dip-callout',
      type: 'callout',
      x: 2,
      y: 80,
      targetX: 3,
      targetY: 110,
      text: 'Cost spike',
      backgroundColor: '#fee2e2',
      borderColor: '#ef4444',
      color: '#991b1b'
    }];
    return renderChart('line', NUMERIC_BASIC, {
      ...commonOptionsFrom(args),
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height,
      annotations,
      line: {
        dots: true
      }
    });
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Shape',
  render: args => {
    const annotations: AnnotationItem[] = [{
      id: 'highlight-circle',
      type: 'shape',
      shapeType: 'circle',
      cx: 4,
      cy: 210,
      radius: 25,
      fill: 'rgba(239, 68, 68, 0.15)',
      stroke: '#ef4444'
    }, {
      id: 'highlight-rect',
      type: 'shape',
      shapeType: 'rect',
      cx: 2,
      cy: 95,
      width: 50,
      height: 30,
      fill: 'rgba(59, 130, 246, 0.15)',
      stroke: '#3b82f6'
    }];
    return renderChart('line', NUMERIC_BASIC, {
      ...commonOptionsFrom(args),
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height,
      annotations,
      line: {
        dots: true
      }
    });
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'All Types Combined',
  render: args => {
    const annotations: AnnotationItem[] = [
    // Background band
    {
      id: 'target-band',
      type: 'band',
      axis: 'y',
      from: 150,
      to: 200,
      fillColor: 'rgba(34, 197, 94, 0.1)',
      label: 'Target Zone',
      color: '#22c55e'
    },
    // Reference line
    {
      id: 'avg-line',
      type: 'referenceLine',
      axis: 'y',
      value: 180,
      color: '#f59e0b',
      dashStyle: [8, 4],
      label: 'Avg: 180'
    },
    // Text
    {
      id: 'note-text',
      type: 'text',
      x: 1,
      y: 260,
      text: 'Revenue vs Cost',
      color: '#6b7280',
      fontSize: 13,
      fontWeight: 'bold'
    },
    // Arrow
    {
      id: 'trend-arrow',
      type: 'arrow',
      fromX: 1,
      fromY: 120,
      toX: 6,
      toY: 250,
      color: '#059669',
      opacity: 0.5
    },
    // Callout
    {
      id: 'peak-callout',
      type: 'callout',
      x: 5,
      y: 280,
      targetX: 6,
      targetY: 250,
      text: 'Peak!',
      backgroundColor: '#fff',
      borderColor: '#ef4444',
      color: '#ef4444'
    },
    // Shape
    {
      id: 'focus-circle',
      type: 'shape',
      shapeType: 'circle',
      cx: 4,
      cy: 210,
      radius: 18,
      stroke: '#8b5cf6',
      opacity: 0.6
    }];
    return renderChart('line', NUMERIC_BASIC, {
      ...commonOptionsFrom(args),
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height,
      annotations,
      line: {
        dots: true,
        width: 2
      }
    });
  }
}`,...h.parameters?.docs?.source}}};const x=["ReferenceLine","HighlightBand","TextLabel","Arrow","CalloutBox","Shape","Combined"];export{s as Arrow,c as CalloutBox,h as Combined,i as HighlightBand,a as ReferenceLine,d as Shape,l as TextLabel,x as __namedExportsOrder,b as default};
