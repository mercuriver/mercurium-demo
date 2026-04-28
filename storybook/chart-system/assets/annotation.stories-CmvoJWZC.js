import{c,d as p,r as l,e as i,f as h,g as f}from"./story-utils-DdhabU4Y.js";const u={title:"Options/Annotation",args:{...c},argTypes:{...p}},m={referenceLine:{label:"Reference Line",annotations:[{id:"target-y",type:"referenceLine",axis:"y",anchor:{kind:"line-h",y:200},color:"#ef4444",dashStyle:[6,4],lineWidth:1.5,label:"Target: 200"},{id:"mid-x",type:"referenceLine",axis:"x",anchor:{kind:"line-v",x:3},color:"#8b5cf6",dashStyle:[4,4],label:"Mid Q"}]},highlightBand:{label:"Highlight Band",annotations:[{id:"target-range",type:"band",axis:"y",anchor:{kind:"band",y0:150,y1:220},fillColor:"rgba(34, 197, 94, 0.15)",color:"#22c55e",label:"Target Range"},{id:"q-highlight",type:"band",axis:"x",anchor:{kind:"band",x0:3,x1:5},fillColor:"rgba(59, 130, 246, 0.1)",color:"#3b82f6",label:"Q2"}]},textLabel:{label:"Text Label",annotations:[{id:"peak-label",type:"text",anchor:{kind:"point",x:6,y:250},text:"Peak Revenue",color:"#059669",fontSize:14,fontWeight:"bold"},{id:"note",type:"text",anchor:{kind:"point",x:2,y:100},text:"Low cost period",color:"#6b7280",fontSize:11}]},arrow:{label:"Arrow",annotations:[{id:"growth-arrow",type:"arrow",from:{kind:"point",x:1,y:130},to:{kind:"point",x:6,y:250},color:"#059669"}]},callout:{label:"Callout Box",annotations:[{id:"peak-callout",type:"callout",anchor:{kind:"point",x:6,y:250},offsetX:-60,offsetY:30,text:"All-time high!",backgroundColor:"#fef3c7",borderColor:"#f59e0b",color:"#92400e"}]},shape:{label:"Shape",annotations:[{id:"circle",type:"shape",shapeType:"circle",anchor:{kind:"point",x:4,y:210},radius:25,fill:"rgba(239, 68, 68, 0.15)",stroke:"#ef4444"},{id:"rect",type:"shape",shapeType:"rect",anchor:{kind:"point",x:2,y:95},width:1,height:30,fill:"rgba(59, 130, 246, 0.15)",stroke:"#3b82f6"}]}},t={parameters:{controls:{disable:!0}},render:n=>l(Object.values(m).map(e=>({type:"line",data:i,options:{frameTheme:n.frameTheme,annotations:e.annotations,line:{dots:!0,width:2}},label:e.label})),{columns:3,cardHeight:260,hideDataSummary:!0})},a={args:{...c,width:720,height:420},render:n=>{const e=[{id:"target-band",type:"band",axis:"y",anchor:{kind:"band",y0:150,y1:200},fillColor:"rgba(34, 197, 94, 0.1)",label:"Target Zone",color:"#22c55e"},{id:"avg-line",type:"referenceLine",axis:"y",anchor:{kind:"line-h",y:180},color:"#f59e0b",dashStyle:[8,4],label:"Avg: 180"},{id:"note-text",type:"text",anchor:{kind:"point",x:1,y:260},text:"Revenue vs Cost",color:"#6b7280",fontSize:13,fontWeight:"bold"},{id:"trend-arrow",type:"arrow",from:{kind:"point",x:1,y:120},to:{kind:"point",x:6,y:250},color:"#059669",opacity:.5},{id:"peak-callout",type:"callout",anchor:{kind:"point",x:6,y:250},offsetX:-50,offsetY:30,text:"Peak!",backgroundColor:"#fff",borderColor:"#ef4444",color:"#ef4444"},{id:"focus-circle",type:"shape",shapeType:"circle",anchor:{kind:"point",x:4,y:210},radius:18,stroke:"#8b5cf6",opacity:.6}];return h("line",i,{...f(n),annotations:e,line:{dots:!0,width:2}},{fitContainer:n.fitContainer,width:n.width,height:n.height})}},o={parameters:{controls:{disable:!0}},render:n=>{const e="Very long descriptive annotation label that overflows";return l([{wrap:"ellipsis",heading:"Wrap: ellipsis (default)"},{wrap:"truncate",heading:"Wrap: truncate"},{wrap:"wrap",heading:"Wrap: wrap (max 3 lines)"}].map(d=>({type:"line",data:i,options:{frameTheme:n.frameTheme,line:{dots:!0,width:2},annotations:[{id:"wrap-demo",type:"text",anchor:{kind:"point",x:3,y:220},text:e,color:"#1e3a8a",fontSize:12,fontWeight:"bold",wrap:d.wrap,maxWidth:160}]},label:d.heading})),{columns:3,cardHeight:260,hideDataSummary:!0})}},r={parameters:{controls:{disable:!0}},render:n=>l([{policy:"hide",heading:"outOfViewport: hide (default)"},{policy:"clamp",heading:"outOfViewport: clamp"},{policy:"indicate",heading:"outOfViewport: indicate"}].map(s=>({type:"line",data:i,options:{frameTheme:n.frameTheme,line:{dots:!0,width:2},annotations:[{id:"out-of-bounds",type:"text",anchor:{kind:"point",x:3,y:999},text:"Outside viewport",color:"#ef4444",fontSize:12,fontWeight:"bold",outOfViewport:s.policy}]},label:s.heading})),{columns:3,cardHeight:260,hideDataSummary:!0})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"6개 annotation 타입 -- referenceLine / band / text / arrow / callout / shape.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
      anchor: {
        kind: 'band',
        y0: 150,
        y1: 200
      },
      fillColor: 'rgba(34, 197, 94, 0.1)',
      label: 'Target Zone',
      color: '#22c55e'
    }, {
      id: 'avg-line',
      type: 'referenceLine',
      axis: 'y',
      anchor: {
        kind: 'line-h',
        y: 180
      },
      color: '#f59e0b',
      dashStyle: [8, 4],
      label: 'Avg: 180'
    }, {
      id: 'note-text',
      type: 'text',
      anchor: {
        kind: 'point',
        x: 1,
        y: 260
      },
      text: 'Revenue vs Cost',
      color: '#6b7280',
      fontSize: 13,
      fontWeight: 'bold'
    }, {
      id: 'trend-arrow',
      type: 'arrow',
      from: {
        kind: 'point',
        x: 1,
        y: 120
      },
      to: {
        kind: 'point',
        x: 6,
        y: 250
      },
      color: '#059669',
      opacity: 0.5
    }, {
      id: 'peak-callout',
      type: 'callout',
      anchor: {
        kind: 'point',
        x: 6,
        y: 250
      },
      offsetX: -50,
      offsetY: 30,
      text: 'Peak!',
      backgroundColor: '#fff',
      borderColor: '#ef4444',
      color: '#ef4444'
    }, {
      id: 'focus-circle',
      type: 'shape',
      shapeType: 'circle',
      anchor: {
        kind: 'point',
        x: 4,
        y: 210
      },
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
}`,...a.parameters?.docs?.source},description:{story:"모든 annotation 타입을 한 차트에 -- 겹침 / z-order / 가독성 확인.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const longLabel = 'Very long descriptive annotation label that overflows';
    const variants: Array<{
      wrap: 'ellipsis' | 'truncate' | 'wrap';
      heading: string;
    }> = [{
      wrap: 'ellipsis',
      heading: 'Wrap: ellipsis (default)'
    }, {
      wrap: 'truncate',
      heading: 'Wrap: truncate'
    }, {
      wrap: 'wrap',
      heading: 'Wrap: wrap (max 3 lines)'
    }];
    return renderChartGrid(variants.map(v => ({
      type: 'line' as const,
      data: NUMERIC_BASIC,
      options: {
        frameTheme: args.frameTheme,
        line: {
          dots: true,
          width: 2
        },
        annotations: [{
          id: 'wrap-demo',
          type: 'text',
          anchor: {
            kind: 'point',
            x: 3,
            y: 220
          },
          text: longLabel,
          color: '#1e3a8a',
          fontSize: 12,
          fontWeight: 'bold',
          wrap: v.wrap,
          maxWidth: 160
        }]
      },
      label: v.heading
    })), {
      columns: 3,
      cardHeight: 260,
      hideDataSummary: true
    });
  }
}`,...o.parameters?.docs?.source},description:{story:"Label wrap policies -- `ellipsis` (default) / `truncate` / `wrap` (3 lines).",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const policies: Array<{
      policy: 'hide' | 'clamp' | 'indicate';
      heading: string;
    }> = [{
      policy: 'hide',
      heading: 'outOfViewport: hide (default)'
    }, {
      policy: 'clamp',
      heading: 'outOfViewport: clamp'
    }, {
      policy: 'indicate',
      heading: 'outOfViewport: indicate'
    }];
    return renderChartGrid(policies.map(p => ({
      type: 'line' as const,
      data: NUMERIC_BASIC,
      options: {
        frameTheme: args.frameTheme,
        line: {
          dots: true,
          width: 2
        },
        annotations: [{
          id: 'out-of-bounds',
          type: 'text',
          // y = 999 is far above any data point -> anchor sits outside plot.
          anchor: {
            kind: 'point',
            x: 3,
            y: 999
          },
          text: 'Outside viewport',
          color: '#ef4444',
          fontSize: 12,
          fontWeight: 'bold',
          outOfViewport: p.policy
        }]
      },
      label: p.heading
    })), {
      columns: 3,
      cardHeight: 260,
      hideDataSummary: true
    });
  }
}`,...r.parameters?.docs?.source},description:{story:"`hide` / `clamp` / `indicate` policies shown on a reference line that sits outside viewport.",...r.parameters?.docs?.description}}};const g=["AnnotationTypes","Combined","LabelWrapModes","OutOfViewportPolicies"];export{t as AnnotationTypes,a as Combined,o as LabelWrapModes,r as OutOfViewportPolicies,g as __namedExportsOrder,u as default};
