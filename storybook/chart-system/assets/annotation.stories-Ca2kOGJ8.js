import{c as a,d as i,r as l,e as r,f as s,g as c}from"./story-utils-BiNSZ_VQ.js";const f={title:"Options/Annotation",args:{...a},argTypes:{...i}},d={referenceLine:{label:"Reference Line",annotations:[{id:"target-y",type:"referenceLine",axis:"y",value:200,color:"#ef4444",dashStyle:[6,4],lineWidth:1.5,label:"Target: 200"},{id:"mid-x",type:"referenceLine",axis:"x",value:3,color:"#8b5cf6",dashStyle:[4,4],label:"Mid Q"}]},highlightBand:{label:"Highlight Band",annotations:[{id:"target-range",type:"band",axis:"y",from:150,to:220,fillColor:"rgba(34, 197, 94, 0.15)",color:"#22c55e",label:"Target Range"},{id:"q-highlight",type:"band",axis:"x",from:3,to:5,fillColor:"rgba(59, 130, 246, 0.1)",color:"#3b82f6",label:"Q2"}]},textLabel:{label:"Text Label",annotations:[{id:"peak-label",type:"text",x:6,y:250,text:"Peak Revenue",color:"#059669",fontSize:14,fontWeight:"bold"},{id:"note",type:"text",x:2,y:100,text:"Low cost period",color:"#6b7280",fontSize:11}]},arrow:{label:"Arrow",annotations:[{id:"growth-arrow",type:"arrow",fromX:1,fromY:130,toX:6,toY:250,color:"#059669"}]},callout:{label:"Callout Box",annotations:[{id:"peak-callout",type:"callout",x:5,y:280,targetX:6,targetY:250,text:"All-time high!",backgroundColor:"#fef3c7",borderColor:"#f59e0b",color:"#92400e"}]},shape:{label:"Shape",annotations:[{id:"circle",type:"shape",shapeType:"circle",cx:4,cy:210,radius:25,fill:"rgba(239, 68, 68, 0.15)",stroke:"#ef4444"},{id:"rect",type:"shape",shapeType:"rect",cx:2,cy:95,width:50,height:30,fill:"rgba(59, 130, 246, 0.15)",stroke:"#3b82f6"}]}},t={parameters:{controls:{disable:!0}},render:e=>l(Object.values(d).map(o=>({type:"line",data:r,options:{frameTheme:e.frameTheme,annotations:o.annotations,line:{dots:!0,width:2}},label:o.label})),{columns:3,cardHeight:260,hideDataSummary:!0})},n={args:{...a,width:720,height:420},render:e=>{const o=[{id:"target-band",type:"band",axis:"y",from:150,to:200,fillColor:"rgba(34, 197, 94, 0.1)",label:"Target Zone",color:"#22c55e"},{id:"avg-line",type:"referenceLine",axis:"y",value:180,color:"#f59e0b",dashStyle:[8,4],label:"Avg: 180"},{id:"note-text",type:"text",x:1,y:260,text:"Revenue vs Cost",color:"#6b7280",fontSize:13,fontWeight:"bold"},{id:"trend-arrow",type:"arrow",fromX:1,fromY:120,toX:6,toY:250,color:"#059669",opacity:.5},{id:"peak-callout",type:"callout",x:5,y:280,targetX:6,targetY:250,text:"Peak!",backgroundColor:"#fff",borderColor:"#ef4444",color:"#ef4444"},{id:"focus-circle",type:"shape",shapeType:"circle",cx:4,cy:210,radius:18,stroke:"#8b5cf6",opacity:.6}];return s("line",r,{...c(e),annotations:o,line:{dots:!0,width:2}},{fitContainer:e.fitContainer,width:e.width,height:e.height})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => renderChartGrid(Object.values(ANNOTATION_VARIANTS).map(v => ({
    type: 'line' as const,
    data: NUMERIC_BASIC,
    options: {
      frameTheme: args.frameTheme,
      annotations: v.annotations,
      line: {
        dots: true,
        width: 2
      }
    },
    label: v.label
  })), {
    columns: 3,
    cardHeight: 260,
    hideDataSummary: true
  })
}`,...t.parameters?.docs?.source},description:{story:"6개 annotation 타입 -- referenceLine / band / text / arrow / callout / shape.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...commonDefaults,
    width: 720,
    height: 420
  },
  render: args => {
    const annotations: AnnotationItem[] = [{
      id: 'target-band',
      type: 'band',
      axis: 'y',
      from: 150,
      to: 200,
      fillColor: 'rgba(34, 197, 94, 0.1)',
      label: 'Target Zone',
      color: '#22c55e'
    }, {
      id: 'avg-line',
      type: 'referenceLine',
      axis: 'y',
      value: 180,
      color: '#f59e0b',
      dashStyle: [8, 4],
      label: 'Avg: 180'
    }, {
      id: 'note-text',
      type: 'text',
      x: 1,
      y: 260,
      text: 'Revenue vs Cost',
      color: '#6b7280',
      fontSize: 13,
      fontWeight: 'bold'
    }, {
      id: 'trend-arrow',
      type: 'arrow',
      fromX: 1,
      fromY: 120,
      toX: 6,
      toY: 250,
      color: '#059669',
      opacity: 0.5
    }, {
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
    }, {
      id: 'focus-circle',
      type: 'shape',
      shapeType: 'circle',
      cx: 4,
      cy: 210,
      radius: 18,
      stroke: '#8b5cf6',
      opacity: 0.6
    }];
    return renderChartSingle('line', NUMERIC_BASIC, {
      ...commonOptionsFrom(args),
      annotations,
      line: {
        dots: true,
        width: 2
      }
    }, {
      fitContainer: args.fitContainer,
      width: args.width,
      height: args.height
    });
  }
}`,...n.parameters?.docs?.source},description:{story:"모든 annotation 타입을 한 차트에 -- 겹침 / z-order / 가독성 확인.",...n.parameters?.docs?.description}}};const h=["AnnotationTypes","Combined"];export{t as AnnotationTypes,n as Combined,h as __namedExportsOrder,f as default};
