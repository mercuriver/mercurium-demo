import{r as h}from"./story-utils-BV4SlRn6.js";const a={nodes:[{id:"src",displayName:"Source"},{id:"parse",displayName:"Parse"},{id:"normalise",displayName:"Normalise"},{id:"enrich",displayName:"Enrich"},{id:"sink",displayName:"Sink"},{id:"audit-in",displayName:"Audit-In"},{id:"audit-store",displayName:"Store"},{id:"audit-export",displayName:"Export"},{id:"metrics-q",displayName:"Queue"},{id:"metrics-agg",displayName:"Aggregate"},{id:"metrics-dash",displayName:"Dashboard"},{id:"metrics-alert",displayName:"Alerts"},{id:"note-a",displayName:"Note A"},{id:"note-b",displayName:"Note B"},{id:"note-c",displayName:"Note C"},{id:"note-d",displayName:"Note D"}],links:[{id:"l1",source:"src",target:"parse"},{id:"l2",source:"parse",target:"normalise"},{id:"l3",source:"normalise",target:"enrich"},{id:"l4",source:"enrich",target:"sink"},{id:"l5",source:"audit-in",target:"audit-store"},{id:"l6",source:"audit-store",target:"audit-export"},{id:"l7",source:"metrics-q",target:"metrics-agg"},{id:"l8",source:"metrics-agg",target:"metrics-dash"},{id:"l9",source:"metrics-agg",target:"metrics-alert"}]},k={nodes:[{id:"a",displayName:"A"},{id:"b",displayName:"B"},{id:"c",displayName:"C"},{id:"d",displayName:"D"}],links:[{id:"ab",source:"a",target:"b"},{id:"bc",source:"b",target:"c"},{id:"cd",source:"c",target:"d"}]},L={nodes:Array.from({length:24},(e,t)=>({id:`n${t}`,displayName:`N${t}`})),links:Array.from({length:12},(e,t)=>({id:`l${t}`,source:`n${t}`,target:`n${(t+1)%24}`}))},T=480,S=640;function s(e,t,n,v,x={},C,N){const E=x.size==="fill"?S:T;return h([{type:"lattice",data:n,options:C,latticeOptions:v,label:e,description:t,onEngine:void 0}],{columns:1,cardHeight:E})}const z=64;function y(){const e=document.createElement("div");return e.style.cssText=["display:flex","flex-direction:column","gap:12px",`height:calc(100vh - ${z}px)`,"box-sizing:border-box"].join(";"),e}const D={controls:{disable:!0},layout:"fullscreen"},A={title:"Topology/Lattice"},i={parameters:D,render:()=>{const e=y(),t=document.createElement("div");return t.style.cssText="font-size:12px;color:#52525b;",t.textContent="Static render (PR 3) — drag / zoom / hover / animation arrive in later PRs.",e.appendChild(t),e.appendChild(s("Pipeline","3 connected components · 4 isolated notes · connectivity clustering",a,void 0,{size:"fill"})),e}},l={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");return e.style.cssText="display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:16px;",e.appendChild(s("4 nodes","small input — minimal grid",k)),e.appendChild(s("24 nodes","larger input — expanded grid",L)),e}},d={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:16px;";const t=document.createElement("div");return t.style.cssText="font-size:12px;color:#52525b;grid-column:1/-1;",t.textContent="Drag any node to compare cluster-move strategies. Identical at rest.",e.appendChild(t),e.appendChild(s("clusterMove: rigid","cluster translates as one block; collisions get pushed",a,{clusterMove:"rigid"})),e.appendChild(s("clusterMove: flexible","dragged node leads; cluster members snake along the link tree",a,{clusterMove:"flexible"})),e}},p={parameters:{layout:"fullscreen",docs:{description:{story:"Toggle `clusterMove` between `rigid` and `flexible` and drag a node to feel the difference. The chart looks identical at rest — `clusterMove` is a drag-time policy, so visual difference only appears once you grab and pull a clustered node across cells."}}},argTypes:{clusterMove:{control:{type:"inline-radio"},options:["rigid","flexible"]},cellSize:{control:{type:"number",min:60,max:160,step:10}},showGridDots:{control:{type:"boolean"}}},args:{clusterMove:"rigid",cellSize:80,showGridDots:!0},render:e=>{const t=y(),n=document.createElement("div");return n.style.cssText="font-size:12px;color:#52525b;",n.textContent="Drag a node to move it. Pan via empty viewport drag, zoom via mouse wheel.",t.appendChild(n),t.appendChild(s(`clusterMove: ${e.clusterMove}`,"live drag preview — try grabbing different cluster members",a,{clusterMove:e.clusterMove,cellSize:e.cellSize,showGridDots:e.showGridDots},{size:"fill"})),t}},u={parameters:{layout:"fullscreen",docs:{description:{story:"Hide cluster labels and / or the link layer for the duration of a drag. Useful for noisy graphs where the user wants to see only the node being moved. Defaults are `false` (no hide), so existing callers keep their current behaviour."}}},argTypes:{hideClusterLabels:{control:{type:"boolean"}},hideLinks:{control:{type:"boolean"}}},args:{hideClusterLabels:!0,hideLinks:!1},render:e=>{const t=y(),n=document.createElement("div");return n.style.cssText="font-size:12px;color:#52525b;",n.textContent="Drag any clustered node — selected hide flags take effect for the duration of the gesture and restore on release.",t.appendChild(n),t.appendChild(s(`drag.hideClusterLabels=${e.hideClusterLabels} · drag.hideLinks=${e.hideLinks}`,"live drag preview — toggle the controls and try a drag",a,{cellSize:80,drag:{hideClusterLabels:e.hideClusterLabels,hideLinks:e.hideLinks}},{size:"fill"})),t}},r={nodes:[{id:"hub",displayName:"Hub",position:{x:1,y:2}},{id:"a1",displayName:"A1",position:{x:4,y:0}},{id:"a2",displayName:"A2",position:{x:4,y:1}},{id:"a3",displayName:"A3",position:{x:4,y:2}},{id:"a4",displayName:"A4",position:{x:4,y:3}},{id:"a5",displayName:"A5",position:{x:4,y:4}}],links:[{id:"l1",source:"hub",target:"a1"},{id:"l2",source:"hub",target:"a2"},{id:"l3",source:"hub",target:"a3"},{id:"l4",source:"hub",target:"a4"},{id:"l5",source:"hub",target:"a5"}]},b=420,o=60,m={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:12px;";const t=document.createElement("div");return t.style.cssText="font-size:12px;color:#52525b;",t.textContent="Five links leave `hub` along the same row. Disabled keeps everything stacked at the centre; fan-out always spreads; hoverExpand stays stacked until you hover hub or a leaf, then fans out only that node's neighbourhood; bezier keeps fan-out gaps but rounds every corner with a cubic bezier (`bezierStrength` controls the radius).",e.appendChild(t),e.appendChild(h([{type:"lattice",data:r,latticeOptions:{cellSize:o,clustering:{mode:"none"},bundling:{enabled:!1}},label:"Disabled",description:"enabled: false — every link leaves the hub centre"},{type:"lattice",data:r,latticeOptions:{cellSize:o,clustering:{mode:"none"}},label:"Fan-out (default)",description:"strategy: fan-out — every link gets a perpendicular gap"},{type:"lattice",data:r,latticeOptions:{cellSize:o,clustering:{mode:"none"},bundling:{hoverExpand:!0}},label:"HoverExpand",description:"hoverExpand: true — collapsed by default; hover hub or a leaf to fan-out that node's neighbourhood"},{type:"lattice",data:r,latticeOptions:{cellSize:o,clustering:{mode:"none"},bundling:{strategy:"bezier"}},label:"Curved",description:"strategy: bezier — fan-out gaps + cubic bezier corner smoothing (bezierStrength 0.85)"}],{columns:3,cardHeight:b})),e}},w={nodes:r.nodes,links:[{id:"l1",source:"hub",target:"a1",category:"dependency"},{id:"l2",source:"hub",target:"a2",category:"dependency"},{id:"l3",source:"hub",target:"a3",category:"data-flow"},{id:"l4",source:"hub",target:"a4",category:"event",dasharray:"4 3"},{id:"l5",source:"hub",target:"a5",category:"event",dasharray:"4 3"}]},_={nodes:r.nodes,links:[{id:"l1",source:"hub",target:"a1",category:"dependency"},{id:"l2",source:"hub",target:"a2",category:"dependency"},{id:"l3",source:"hub",target:"a3",category:"data-flow",color:"#a855f7"},{id:"l4",source:"hub",target:"a4",category:"event",dasharray:"4 3"},{id:"l5",source:"hub",target:"a5",category:"event",dasharray:"4 3"}]},I={nodes:r.nodes,links:[{id:"l1",source:"hub",target:"a1",category:"sync"},{id:"l2",source:"hub",target:"a2",category:"sync"},{id:"l3",source:"hub",target:"a3",category:"sync"},{id:"l4",source:"hub",target:"a4",category:"async",dasharray:"6 3"},{id:"l5",source:"hub",target:"a5",category:"async",dasharray:"6 3"}]},f={dependency:"#0ea5e9","data-flow":"#10b981",event:"#f59e0b"},g={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:12px;";const t=document.createElement("div");return t.style.cssText="font-size:12px;color:#52525b;",t.textContent="link.category 가 theme.linkCategoryColors 의 색을 받아 dataset palette 와 독립적으로 link 별 색을 지정한다. 우선순위는 link.color > theme.linkCategoryColors[category] > theme.linkStroke 이며, dasharray 도 동일 축으로 시각 구분에 쓴다.",e.appendChild(t),e.appendChild(h([{type:"lattice",data:w,latticeOptions:{cellSize:o,clustering:{mode:"none"}},latticeTheme:{linkCategoryColors:f},label:"Three categories",description:"dependency = sky · data-flow = emerald · event = amber (dasharray)"},{type:"lattice",data:_,latticeOptions:{cellSize:o,clustering:{mode:"none"}},latticeTheme:{linkCategoryColors:f},label:"link.color override",description:"l3 selects category data-flow but link.color (#a855f7) wins"},{type:"lattice",data:I,latticeOptions:{cellSize:o,clustering:{mode:"none"}},label:"Dash-only categories",description:"sync = solid · async = dasharray, both share theme.linkStroke"}],{columns:3,cardHeight:b})),e}},c={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:12px;";const t=document.createElement("div");return t.style.cssText="font-size:12px;color:#52525b;",t.textContent="Watermark routes through shared/watermark/ — anchor + style match the canvas paradigms.",e.appendChild(t),e.appendChild(h([{type:"lattice",data:a,options:{watermark:{text:"Made with Mercurium"}},label:"Default position",description:"bottom-right · margin 8 (frame-theme defaults)"},{type:"lattice",data:a,options:{watermark:{text:"Made with Mercurium",position:"top-left",margin:12}},label:"Top-left override",description:"options.watermark.position = top-left · margin 12"}],{columns:2,cardHeight:b})),e}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: FILL_PARAMETERS,
  render: () => {
    const root = makeFillRoot();
    const note = document.createElement('div');
    note.style.cssText = 'font-size:12px;color:#52525b;';
    note.textContent = 'Static render (PR 3) — drag / zoom / hover / animation arrive in later PRs.';
    root.appendChild(note);
    root.appendChild(buildLatticeCard('Pipeline', '3 connected components · 4 isolated notes · connectivity clustering', PIPELINE, undefined, {
      size: 'fill'
    }));
    return root;
  }
}`,...i.parameters?.docs?.source},description:{story:`Static lattice showcase — three connected components plus four isolated
notes. Demonstrates grid placeholder dots, cluster backgrounds, link
routing variants (line / l-shape / polyline), and node label rendering.
No interaction; PR 4 / 5 will add drag, zoom, and hover.`,...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = 'display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:16px;';
    root.appendChild(buildLatticeCard('4 nodes', 'small input — minimal grid', SMALL));
    root.appendChild(buildLatticeCard('24 nodes', 'larger input — expanded grid', LARGE));
    return root;
  }
}`,...l.parameters?.docs?.source},description:{story:"Frame expansion sanity — same renderer, two inputs of different size.\nThe SVG width / height attributes grow with the node count so the\ncaller can see the lattice frame self-size on `setInput`.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = 'display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:16px;';
    const note = document.createElement('div');
    note.style.cssText = 'font-size:12px;color:#52525b;grid-column:1/-1;';
    note.textContent = 'Drag any node to compare cluster-move strategies. Identical at rest.';
    root.appendChild(note);
    root.appendChild(buildLatticeCard('clusterMove: rigid', 'cluster translates as one block; collisions get pushed', PIPELINE, {
      clusterMove: 'rigid'
    }));
    root.appendChild(buildLatticeCard('clusterMove: flexible', 'dragged node leads; cluster members snake along the link tree', PIPELINE, {
      clusterMove: 'flexible'
    }));
    return root;
  }
}`,...d.parameters?.docs?.source},description:{story:`Cluster modes — same dataset rendered side by side under each
\`clusterMove\` strategy. The two cards look identical at rest because
\`clusterMove\` only takes effect during drag; the visual difference is
triggered by the user grabbing a node and pulling it across cells:
  - rigid: every cluster member translates by the same delta. Foreign
           nodes that block the path are pushed by the same delta.
  - flexible: only the dragged node moves to the desired cell; the rest
              of its cluster snakes one cell at a time along the link
              spanning tree rooted at the drag node.`,...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Toggle \`clusterMove\` between \`rigid\` and \`flexible\` and drag a node to feel the difference. The chart looks identical at rest — \`clusterMove\` is a drag-time policy, so visual difference only appears once you grab and pull a clustered node across cells.'
      }
    }
  },
  argTypes: {
    clusterMove: {
      control: {
        type: 'inline-radio'
      },
      options: ['rigid', 'flexible']
    },
    cellSize: {
      control: {
        type: 'number',
        min: 60,
        max: 160,
        step: 10
      }
    },
    showGridDots: {
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    clusterMove: 'rigid',
    cellSize: 80,
    showGridDots: true
  },
  render: args => {
    const root = makeFillRoot();
    const note = document.createElement('div');
    note.style.cssText = 'font-size:12px;color:#52525b;';
    note.textContent = 'Drag a node to move it. Pan via empty viewport drag, zoom via mouse wheel.';
    root.appendChild(note);
    root.appendChild(buildLatticeCard(\`clusterMove: \${args.clusterMove}\`, 'live drag preview — try grabbing different cluster members', PIPELINE, {
      clusterMove: args.clusterMove,
      cellSize: args.cellSize,
      showGridDots: args.showGridDots
    }, {
      size: 'fill'
    }));
    return root;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Hide cluster labels and / or the link layer for the duration of a drag. Useful for noisy graphs where the user wants to see only the node being moved. Defaults are \`false\` (no hide), so existing callers keep their current behaviour.'
      }
    }
  },
  argTypes: {
    hideClusterLabels: {
      control: {
        type: 'boolean'
      }
    },
    hideLinks: {
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    hideClusterLabels: true,
    hideLinks: false
  },
  render: args => {
    const root = makeFillRoot();
    const note = document.createElement('div');
    note.style.cssText = 'font-size:12px;color:#52525b;';
    note.textContent = 'Drag any clustered node — selected hide flags take effect for the duration of the gesture and restore on release.';
    root.appendChild(note);
    root.appendChild(buildLatticeCard(\`drag.hideClusterLabels=\${args.hideClusterLabels} · drag.hideLinks=\${args.hideLinks}\`, 'live drag preview — toggle the controls and try a drag', PIPELINE, {
      cellSize: 80,
      drag: {
        hideClusterLabels: args.hideClusterLabels,
        hideLinks: args.hideLinks
      }
    }, {
      size: 'fill'
    }));
    return root;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = 'display:flex;flex-direction:column;gap:12px;';
    const note = document.createElement('div');
    note.style.cssText = 'font-size:12px;color:#52525b;';
    note.textContent = "Five links leave \`hub\` along the same row. Disabled keeps everything stacked at the centre; fan-out always spreads; hoverExpand stays stacked until you hover hub or a leaf, then fans out only that node's neighbourhood; bezier keeps fan-out gaps but rounds every corner with a cubic bezier (\`bezierStrength\` controls the radius).";
    root.appendChild(note);
    root.appendChild(renderChart([{
      type: 'lattice',
      data: BUNDLED,
      latticeOptions: {
        cellSize: STORY_CELL_SIZE,
        clustering: {
          mode: 'none'
        },
        bundling: {
          enabled: false
        }
      },
      label: 'Disabled',
      description: 'enabled: false — every link leaves the hub centre'
    }, {
      type: 'lattice',
      data: BUNDLED,
      latticeOptions: {
        cellSize: STORY_CELL_SIZE,
        clustering: {
          mode: 'none'
        }
      },
      label: 'Fan-out (default)',
      description: 'strategy: fan-out — every link gets a perpendicular gap'
    }, {
      type: 'lattice',
      data: BUNDLED,
      latticeOptions: {
        cellSize: STORY_CELL_SIZE,
        clustering: {
          mode: 'none'
        },
        bundling: {
          hoverExpand: true
        }
      },
      label: 'HoverExpand',
      description: "hoverExpand: true — collapsed by default; hover hub or a leaf to fan-out that node's neighbourhood"
    }, {
      type: 'lattice',
      data: BUNDLED,
      latticeOptions: {
        cellSize: STORY_CELL_SIZE,
        clustering: {
          mode: 'none'
        },
        bundling: {
          strategy: 'bezier'
        }
      },
      label: 'Curved',
      description: 'strategy: bezier — fan-out gaps + cubic bezier corner smoothing (bezierStrength 0.85)'
    }], {
      columns: 3,
      cardHeight: STORY_CARD_HEIGHT_PX
    }));
    return root;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = 'display:flex;flex-direction:column;gap:12px;';
    const note = document.createElement('div');
    note.style.cssText = 'font-size:12px;color:#52525b;';
    note.textContent = 'link.category 가 theme.linkCategoryColors 의 색을 받아 dataset palette 와 독립적으로 link 별 색을 지정한다. 우선순위는 link.color > theme.linkCategoryColors[category] > theme.linkStroke 이며, dasharray 도 동일 축으로 시각 구분에 쓴다.';
    root.appendChild(note);
    root.appendChild(renderChart([{
      type: 'lattice',
      data: CATEGORISED,
      latticeOptions: {
        cellSize: STORY_CELL_SIZE,
        clustering: {
          mode: 'none'
        }
      },
      latticeTheme: {
        linkCategoryColors: LINK_CATEGORY_PALETTE
      },
      label: 'Three categories',
      description: 'dependency = sky · data-flow = emerald · event = amber (dasharray)'
    }, {
      type: 'lattice',
      data: CATEGORISED_WITH_OVERRIDE,
      latticeOptions: {
        cellSize: STORY_CELL_SIZE,
        clustering: {
          mode: 'none'
        }
      },
      latticeTheme: {
        linkCategoryColors: LINK_CATEGORY_PALETTE
      },
      label: 'link.color override',
      description: 'l3 selects category data-flow but link.color (#a855f7) wins'
    }, {
      type: 'lattice',
      data: CATEGORISED_DASH_ONLY,
      latticeOptions: {
        cellSize: STORY_CELL_SIZE,
        clustering: {
          mode: 'none'
        }
      },
      // No category colour override — both categories fall back to
      // theme.linkStroke; the dash pattern alone separates them.
      label: 'Dash-only categories',
      description: 'sync = solid · async = dasharray, both share theme.linkStroke'
    }], {
      columns: 3,
      cardHeight: STORY_CARD_HEIGHT_PX
    }));
    return root;
  }
}`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = 'display:flex;flex-direction:column;gap:12px;';
    const note = document.createElement('div');
    note.style.cssText = 'font-size:12px;color:#52525b;';
    note.textContent = 'Watermark routes through shared/watermark/ — anchor + style match the canvas paradigms.';
    root.appendChild(note);
    root.appendChild(renderChart([{
      type: 'lattice',
      data: PIPELINE,
      options: {
        watermark: {
          text: 'Made with Mercurium'
        }
      },
      label: 'Default position',
      description: 'bottom-right · margin 8 (frame-theme defaults)'
    }, {
      type: 'lattice',
      data: PIPELINE,
      options: {
        watermark: {
          text: 'Made with Mercurium',
          position: 'top-left',
          margin: 12
        }
      },
      label: 'Top-left override',
      description: 'options.watermark.position = top-left · margin 12'
    }], {
      columns: 2,
      cardHeight: STORY_CARD_HEIGHT_PX
    }));
    return root;
  }
}`,...c.parameters?.docs?.source},description:{story:`Watermark — paradigm-shared SVG paint. Same anchor + style helpers the
cartesian / polar canvas plugin uses, so the bottom-right corner aligns
pixel-for-pixel across paradigms when given identical (W, H, position,
margin). PRD acceptance criterion: identical screen anchor across
paradigms.`,...c.parameters?.docs?.description}}};const O=["Showcase","FrameExpansion","ClusterModes","ClusterMove","DragOptions","LinkBundling","LinkCategories","WatermarkBottomRight"];export{d as ClusterModes,p as ClusterMove,u as DragOptions,l as FrameExpansion,m as LinkBundling,g as LinkCategories,i as Showcase,c as WatermarkBottomRight,O as __namedExportsOrder,A as default};
