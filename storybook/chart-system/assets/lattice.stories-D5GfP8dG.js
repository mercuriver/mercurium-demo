import{L as E}from"./lattice-renderer-CVL5BDVG.js";import"./style-CugFjfBU.js";const c={nodes:[{id:"src",displayName:"Source"},{id:"parse",displayName:"Parse"},{id:"normalise",displayName:"Normalise"},{id:"enrich",displayName:"Enrich"},{id:"sink",displayName:"Sink"},{id:"audit-in",displayName:"Audit-In"},{id:"audit-store",displayName:"Store"},{id:"audit-export",displayName:"Export"},{id:"metrics-q",displayName:"Queue"},{id:"metrics-agg",displayName:"Aggregate"},{id:"metrics-dash",displayName:"Dashboard"},{id:"metrics-alert",displayName:"Alerts"},{id:"note-a",displayName:"Note A"},{id:"note-b",displayName:"Note B"},{id:"note-c",displayName:"Note C"},{id:"note-d",displayName:"Note D"}],links:[{id:"l1",source:"src",target:"parse"},{id:"l2",source:"parse",target:"normalise"},{id:"l3",source:"normalise",target:"enrich"},{id:"l4",source:"enrich",target:"sink"},{id:"l5",source:"audit-in",target:"audit-store"},{id:"l6",source:"audit-store",target:"audit-export"},{id:"l7",source:"metrics-q",target:"metrics-agg"},{id:"l8",source:"metrics-agg",target:"metrics-dash"},{id:"l9",source:"metrics-agg",target:"metrics-alert"}]},w={nodes:[{id:"a",displayName:"A"},{id:"b",displayName:"B"},{id:"c",displayName:"C"},{id:"d",displayName:"D"}],links:[{id:"ab",source:"a",target:"b"},{id:"bc",source:"b",target:"c"},{id:"cd",source:"c",target:"d"}]},z={nodes:Array.from({length:24},(e,t)=>({id:`n${t}`,displayName:`N${t}`})),links:Array.from({length:12},(e,t)=>({id:`l${t}`,source:`n${t}`,target:`n${(t+1)%24}`}))};function a(e,t,n={}){const r=n.size==="fill",o=document.createElement("div");o.style.cssText=["border:1px solid rgba(0,0,0,0.12)","border-radius:6px","padding:16px","display:flex","flex-direction:column","gap:8px","background:#ffffff",r?"flex:1":"",r?"min-height:0":""].filter(Boolean).join(";");const d=document.createElement("div");if(d.style.cssText="font-size:13px;font-weight:600;color:#27272a;",d.textContent=e,o.appendChild(d),t){const s=document.createElement("div");s.style.cssText="font-size:11px;color:#52525b;",s.textContent=t,o.appendChild(s)}const l=document.createElement("div");return l.style.cssText=["width:100%",r?"flex:1":"height:480px","overflow:hidden","position:relative","background:#fafafa","border-radius:4px"].join(";"),l.dataset.role="lattice-surface",o.appendChild(l),o}const I=64;function C(){const e=document.createElement("div");return e.style.cssText=["display:flex","flex-direction:column","gap:12px",`height:calc(100vh - ${I}px)`,"box-sizing:border-box"].join(";"),e}const D={controls:{disable:!0},layout:"fullscreen"};function i(e,t,n,r){const o=e.querySelector('[data-role="lattice-surface"]');o&&E.mount(o,{input:t,options:n,theme:r})}function k(e,t,n,r){const o=e.querySelector('[data-role="lattice-surface"]');o&&E.mount(o,{input:t,options:r,frameOptions:n})}const P={title:"Topology/Lattice"},u={parameters:D,render:()=>{const e=C(),t=document.createElement("div");t.style.cssText="font-size:12px;color:#52525b;",t.textContent="Static render (PR 3) — drag / zoom / hover / animation arrive in later PRs.",e.appendChild(t);const n=a("Pipeline","3 connected components + 4 isolated notes · connectivity clustering",{size:"fill"});return e.appendChild(n),i(n,c),e}},p={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:16px;";const t=a("4 nodes","small input — minimal grid"),n=a("24 nodes","larger input — expanded grid");return e.appendChild(t),e.appendChild(n),i(t,w),i(n,z),e}},m={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:16px;";const t=document.createElement("div");t.style.cssText="font-size:12px;color:#52525b;grid-column:1/-1;",t.textContent="Drag any node to compare cluster-move strategies. Identical at rest.",e.appendChild(t);const n=a("clusterMove: rigid","cluster translates as one block; collisions get pushed"),r=a("clusterMove: flexible","dragged node leads; cluster members snake along the link tree");return e.appendChild(n),e.appendChild(r),i(n,c,{clusterMove:"rigid"}),i(r,c,{clusterMove:"flexible"}),e}},h={parameters:{layout:"fullscreen",docs:{description:{story:"Toggle `clusterMove` between `rigid` and `flexible` and drag a node to feel the difference. The chart looks identical at rest — `clusterMove` is a drag-time policy, so visual difference only appears once you grab and pull a clustered node across cells."}}},argTypes:{clusterMove:{control:{type:"inline-radio"},options:["rigid","flexible"]},cellSize:{control:{type:"number",min:60,max:160,step:10}},showGridDots:{control:{type:"boolean"}}},args:{clusterMove:"rigid",cellSize:80,showGridDots:!0},render:e=>{const t=C(),n=document.createElement("div");n.style.cssText="font-size:12px;color:#52525b;",n.textContent="Drag a node to move it. Pan via empty viewport drag, zoom via mouse wheel.",t.appendChild(n);const r=a(`clusterMove: ${e.clusterMove}`,"live drag preview — try grabbing different cluster members",{size:"fill"});return t.appendChild(r),i(r,c,{clusterMove:e.clusterMove,cellSize:e.cellSize,showGridDots:e.showGridDots}),t}},y={parameters:{layout:"fullscreen",docs:{description:{story:"Hide cluster labels and / or the link layer for the duration of a drag. Useful for noisy graphs where the user wants to see only the node being moved. Defaults are `false` (no hide), so existing callers keep their current behaviour."}}},argTypes:{hideClusterLabels:{control:{type:"boolean"}},hideLinks:{control:{type:"boolean"}}},args:{hideClusterLabels:!0,hideLinks:!1},render:e=>{const t=C(),n=document.createElement("div");n.style.cssText="font-size:12px;color:#52525b;",n.textContent="Drag any clustered node — selected hide flags take effect for the duration of the gesture and restore on release.",t.appendChild(n);const r=a(`drag.hideClusterLabels=${e.hideClusterLabels} · drag.hideLinks=${e.hideLinks}`,"live drag preview — toggle the controls and try a drag",{size:"fill"});return t.appendChild(r),i(r,c,{cellSize:80,drag:{hideClusterLabels:e.hideClusterLabels,hideLinks:e.hideLinks}}),t}},x={nodes:[{id:"hub",displayName:"Hub",position:{x:1,y:2}},{id:"a1",displayName:"A1",position:{x:4,y:0}},{id:"a2",displayName:"A2",position:{x:4,y:1}},{id:"a3",displayName:"A3",position:{x:4,y:2}},{id:"a4",displayName:"A4",position:{x:4,y:3}},{id:"a5",displayName:"A5",position:{x:4,y:4}}],links:[{id:"l1",source:"hub",target:"a1"},{id:"l2",source:"hub",target:"a2"},{id:"l3",source:"hub",target:"a3"},{id:"l4",source:"hub",target:"a4"},{id:"l5",source:"hub",target:"a5"}]},T="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;",S="420px",L=60,b={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:12px;";const t=document.createElement("div");t.style.cssText="font-size:12px;color:#52525b;",t.textContent="Five links leave `hub` along the same row. Disabled keeps everything stacked at the centre; fan-out always spreads; hoverExpand stays stacked until you hover hub or a leaf, then fans out only that node's neighbourhood; bezier keeps fan-out gaps but rounds every corner with a cubic bezier (`bezierStrength` controls the radius).",e.appendChild(t);const n=document.createElement("div");n.style.cssText=T,e.appendChild(n);const r=(o,d,l)=>{const s=a(o,d);return s.style.minHeight=S,n.appendChild(s),i(s,x,{cellSize:L,clustering:{mode:"none"},...l}),s};return r("Disabled","enabled: false — every link leaves the hub centre",{bundling:{enabled:!1}}),r("Fan-out (default)","strategy: fan-out — every link gets a perpendicular gap",{}),r("HoverExpand","hoverExpand: true — collapsed by default; hover hub or a leaf to fan-out that node",{bundling:{hoverExpand:!0}}),r("Curved","strategy: bezier — fan-out gaps + cubic bezier corner smoothing (bezierStrength 0.85)",{bundling:{strategy:"bezier"}}),e}},N={nodes:x.nodes,links:[{id:"l1",source:"hub",target:"a1",category:"dependency"},{id:"l2",source:"hub",target:"a2",category:"dependency"},{id:"l3",source:"hub",target:"a3",category:"data-flow"},{id:"l4",source:"hub",target:"a4",category:"event",dasharray:"4 3"},{id:"l5",source:"hub",target:"a5",category:"event",dasharray:"4 3"}]},R={nodes:x.nodes,links:[{id:"l1",source:"hub",target:"a1",category:"dependency"},{id:"l2",source:"hub",target:"a2",category:"dependency"},{id:"l3",source:"hub",target:"a3",category:"data-flow",color:"#a855f7"},{id:"l4",source:"hub",target:"a4",category:"event",dasharray:"4 3"},{id:"l5",source:"hub",target:"a5",category:"event",dasharray:"4 3"}]},M={nodes:x.nodes,links:[{id:"l1",source:"hub",target:"a1",category:"sync"},{id:"l2",source:"hub",target:"a2",category:"sync"},{id:"l3",source:"hub",target:"a3",category:"sync"},{id:"l4",source:"hub",target:"a4",category:"async",dasharray:"6 3"},{id:"l5",source:"hub",target:"a5",category:"async",dasharray:"6 3"}]},f={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;flex-direction:column;gap:12px;";const t=document.createElement("div");t.style.cssText="font-size:12px;color:#52525b;",t.textContent="link.category 가 theme.linkCategoryColors 의 색을 받아 dataset palette 와 독립적으로 link 별 색을 지정한다. 우선순위는 link.color > theme.linkCategoryColors[category] > theme.linkStroke 이며, dasharray 도 동일 축으로 시각 구분에 쓴다.",e.appendChild(t);const n=document.createElement("div");n.style.cssText=T,e.appendChild(n);const r=(o,d,l,s)=>{const v=a(o,d);v.style.minHeight=S,n.appendChild(v),i(v,l,{cellSize:L,clustering:{mode:"none"}},{linkCategoryColors:s})};return r("Three categories","dependency = sky · data-flow = emerald · event = amber (dasharray)",N,{dependency:"#0ea5e9","data-flow":"#10b981",event:"#f59e0b"}),r("link.color override","l3 selects category data-flow but link.color (#a855f7) wins",R,{dependency:"#0ea5e9","data-flow":"#10b981",event:"#f59e0b"}),r("Dash-only categories","sync = solid · async = dasharray, both share theme.linkStroke",M,{}),e}},g={parameters:{controls:{disable:!0}},render:()=>{const e=document.createElement("div");e.style.cssText="display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:16px;";const t=document.createElement("div");t.style.cssText="font-size:12px;color:#52525b;grid-column:1/-1;",t.textContent="Watermark routes through shared/watermark/ — anchor + style match the canvas paradigms.",e.appendChild(t);const n=a("Default position","bottom-right · margin 8 (frame-theme defaults)"),r=a("Top-left override","options.watermark.position = top-left · margin 12");return e.appendChild(n),e.appendChild(r),k(n,c,{watermark:{text:"Made with Mercurium"}}),k(r,c,{watermark:{text:"Made with Mercurium",position:"top-left",margin:12}}),e}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: FILL_PARAMETERS,
  render: () => {
    const root = makeFillRoot();
    const note = document.createElement('div');
    note.style.cssText = 'font-size:12px;color:#52525b;';
    note.textContent = 'Static render (PR 3) — drag / zoom / hover / animation arrive in later PRs.';
    root.appendChild(note);
    const card = buildCard('Pipeline', '3 connected components + 4 isolated notes · connectivity clustering', {
      size: 'fill'
    });
    root.appendChild(card);
    mountInto(card, PIPELINE);
    return root;
  }
}`,...u.parameters?.docs?.source},description:{story:`Static lattice showcase — three connected components plus four isolated
notes. Demonstrates grid placeholder dots, cluster backgrounds, link
routing variants (line / l-shape / polyline), and node label rendering.
No interaction; PR 4 / 5 will add drag, zoom, and hover.`,...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = 'display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:16px;';
    const small = buildCard('4 nodes', 'small input — minimal grid');
    const large = buildCard('24 nodes', 'larger input — expanded grid');
    root.appendChild(small);
    root.appendChild(large);
    mountInto(small, SMALL);
    mountInto(large, LARGE);
    return root;
  }
}`,...p.parameters?.docs?.source},description:{story:"Frame expansion sanity — same renderer, two inputs of different size.\nThe SVG width / height attributes grow with the node count so the\ncaller can see the lattice frame self-size on `setInput`.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    const rigid = buildCard('clusterMove: rigid', 'cluster translates as one block; collisions get pushed');
    const flexible = buildCard('clusterMove: flexible', 'dragged node leads; cluster members snake along the link tree');
    root.appendChild(rigid);
    root.appendChild(flexible);
    mountInto(rigid, PIPELINE, {
      clusterMove: 'rigid'
    });
    mountInto(flexible, PIPELINE, {
      clusterMove: 'flexible'
    });
    return root;
  }
}`,...m.parameters?.docs?.source},description:{story:`Cluster modes — same dataset rendered side by side under each
\`clusterMove\` strategy. The two cards look identical at rest because
\`clusterMove\` only takes effect during drag; the visual difference is
triggered by the user grabbing a node and pulling it across cells:
  - rigid: every cluster member translates by the same delta. Foreign
           nodes that block the path are pushed by the same delta.
  - flexible: only the dragged node moves to the desired cell; the rest
              of its cluster snakes one cell at a time along the link
              spanning tree rooted at the drag node.`,...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    const card = buildCard(\`clusterMove: \${args.clusterMove}\`, 'live drag preview — try grabbing different cluster members', {
      size: 'fill'
    });
    root.appendChild(card);
    mountInto(card, PIPELINE, {
      clusterMove: args.clusterMove,
      cellSize: args.cellSize,
      showGridDots: args.showGridDots
    });
    return root;
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    const card = buildCard(\`drag.hideClusterLabels=\${args.hideClusterLabels} · drag.hideLinks=\${args.hideLinks}\`, 'live drag preview — toggle the controls and try a drag', {
      size: 'fill'
    });
    root.appendChild(card);
    mountInto(card, PIPELINE, {
      cellSize: 80,
      drag: {
        hideClusterLabels: args.hideClusterLabels,
        hideLinks: args.hideLinks
      }
    });
    return root;
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    note.textContent = 'Five links leave \`hub\` along the same row. Disabled keeps everything stacked at the centre; fan-out always spreads; hoverExpand stays stacked until you hover hub or a leaf, then fans out only that node\\'s neighbourhood; bezier keeps fan-out gaps but rounds every corner with a cubic bezier (\`bezierStrength\` controls the radius).';
    root.appendChild(note);
    const grid = document.createElement('div');
    grid.style.cssText = STORY_GRID_STYLE;
    root.appendChild(grid);
    const buildBundleCard = (label: string, description: string, options: LatticeOptions): HTMLDivElement => {
      const card = buildCard(label, description);
      card.style.minHeight = STORY_CARD_MIN_HEIGHT;
      grid.appendChild(card);
      mountInto(card, BUNDLED, {
        cellSize: STORY_CELL_SIZE,
        clustering: {
          mode: 'none'
        },
        ...options
      });
      return card;
    };
    buildBundleCard('Disabled', 'enabled: false — every link leaves the hub centre', {
      bundling: {
        enabled: false
      }
    });
    buildBundleCard('Fan-out (default)', 'strategy: fan-out — every link gets a perpendicular gap', {});
    buildBundleCard('HoverExpand', 'hoverExpand: true — collapsed by default; hover hub or a leaf to fan-out that node', {
      bundling: {
        hoverExpand: true
      }
    });
    buildBundleCard('Curved', 'strategy: bezier — fan-out gaps + cubic bezier corner smoothing (bezierStrength 0.85)', {
      bundling: {
        strategy: 'bezier'
      }
    });
    return root;
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    const grid = document.createElement('div');
    grid.style.cssText = STORY_GRID_STYLE;
    root.appendChild(grid);
    const buildCategoryCard = (label: string, description: string, input: LatticeInput, linkCategoryColors: Record<string, string>): void => {
      const card = buildCard(label, description);
      card.style.minHeight = STORY_CARD_MIN_HEIGHT;
      grid.appendChild(card);
      mountInto(card, input, {
        cellSize: STORY_CELL_SIZE,
        clustering: {
          mode: 'none'
        }
      }, {
        linkCategoryColors
      });
    };
    buildCategoryCard('Three categories', 'dependency = sky · data-flow = emerald · event = amber (dasharray)', CATEGORISED, {
      dependency: '#0ea5e9',
      // sky-500
      'data-flow': '#10b981',
      // emerald-500
      event: '#f59e0b' // amber-500
    });
    buildCategoryCard('link.color override', 'l3 selects category data-flow but link.color (#a855f7) wins', CATEGORISED_WITH_OVERRIDE, {
      dependency: '#0ea5e9',
      'data-flow': '#10b981',
      event: '#f59e0b'
    });
    buildCategoryCard('Dash-only categories', 'sync = solid · async = dasharray, both share theme.linkStroke', CATEGORISED_DASH_ONLY, {
      // No category colour overrides — both categories fall back to
      // theme.linkStroke; the dash pattern alone separates them.
    });
    return root;
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const root = document.createElement("div");
    root.style.cssText = "display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:16px;";
    const note = document.createElement("div");
    note.style.cssText = "font-size:12px;color:#52525b;grid-column:1/-1;";
    note.textContent = "Watermark routes through shared/watermark/ — anchor + style match the canvas paradigms.";
    root.appendChild(note);
    const defaultCard = buildCard("Default position", "bottom-right · margin 8 (frame-theme defaults)");
    const topLeftCard = buildCard("Top-left override", "options.watermark.position = top-left · margin 12");
    root.appendChild(defaultCard);
    root.appendChild(topLeftCard);
    mountWithFrameOptions(defaultCard, PIPELINE, {
      watermark: {
        text: "Made with Mercurium"
      }
    });
    mountWithFrameOptions(topLeftCard, PIPELINE, {
      watermark: {
        text: "Made with Mercurium",
        position: "top-left",
        margin: 12
      }
    });
    return root;
  }
}`,...g.parameters?.docs?.source},description:{story:`Watermark — paradigm-shared SVG paint. Same anchor + style helpers the
cartesian / polar canvas plugin uses, so the bottom-right corner aligns
pixel-for-pixel across paradigms when given identical (W, H, position,
margin). PRD acceptance criterion: identical screen anchor across
paradigms.`,...g.parameters?.docs?.description}}};const O=["Showcase","FrameExpansion","ClusterModes","ClusterMove","DragOptions","LinkBundling","LinkCategories","WatermarkBottomRight"];export{m as ClusterModes,h as ClusterMove,y as DragOptions,p as FrameExpansion,b as LinkBundling,f as LinkCategories,u as Showcase,g as WatermarkBottomRight,O as __namedExportsOrder,P as default};
