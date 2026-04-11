import{i as _,b as R,s as X,h as $,C as g}from"./chart-engine-BmtyFlsE.js";import{L as m,T as b}from"./tooltip-plugin-B9rRNLzl.js";import{C as y}from"./crosshair-plugin-lsuhlxfG.js";import{r as k,L as c}from"./mock-data-BShfxM5i.js";import{d as L}from"./story-utils-Sq0wUdi9.js";import{c as w,a as f,e as S,d as v,b as I}from"./interaction-helpers-Dh259fVa.js";const H=20,O=5;class N{id="click";interactive=!0;host=null;canvas=null;lastData=null;boundMouseDown=null;boundMouseUp=null;mouseDownPos=null;install(n,a){this.unbindEvents(),this.host=n,this.canvas=a,this.bindEvents()}update(n,a){this.rebindCanvas(),this.lastData=n}destroy(){this.unbindEvents(),this.host=null,this.canvas=null,this.lastData=null}rebindCanvas(){if(!this.host)return;const n=this.host.getCanvas();n&&n!==this.canvas&&(this.unbindEvents(),this.canvas=n,this.bindEvents())}bindEvents(){this.canvas&&(this.boundMouseDown=n=>this.handleMouseDown(n),this.boundMouseUp=n=>this.handleMouseUp(n),this.canvas.addEventListener("mousedown",this.boundMouseDown),this.canvas.addEventListener("mouseup",this.boundMouseUp))}unbindEvents(){this.canvas&&(this.boundMouseDown&&(this.canvas.removeEventListener("mousedown",this.boundMouseDown),this.boundMouseDown=null),this.boundMouseUp&&(this.canvas.removeEventListener("mouseup",this.boundMouseUp),this.boundMouseUp=null))}handleMouseDown(n){this.mouseDownPos={x:n.clientX,y:n.clientY}}handleMouseUp(n){if(!this.mouseDownPos)return;const a=n.clientX-this.mouseDownPos.x,s=n.clientY-this.mouseDownPos.y;this.mouseDownPos=null,!(Math.sqrt(a*a+s*s)>O)&&this.handleClick(n)}handleClick(n){if(!this.host||!this.lastData||!this.canvas)return;const a=this.host.getRendererContext();if(!a)return;const s=this.canvas.getBoundingClientRect(),i=n.clientX-s.left-a.margin.left,e=n.clientY-s.top-a.margin.top,t=_(a),{xScale:r,yScale:o}=R(a);let u=1/0,d=null;for(const h of this.lastData.series)if(!(h.visible===!1||h.tooltipOnly))for(let x=0;x<h.data.length;x++){const p=h.data[x],A=t?o(p.y):X(p.x,r,a),B=t?X(p.x,r,a):o(p.y),E=Math.sqrt((i-A)**2+(e-B)**2);E<u&&E<=H&&(u=E,d={seriesKey:h.key,pointIndex:x,dataPoint:p,pixelX:A+a.margin.left,pixelY:B+a.margin.top})}d&&this.host.emit?.("point:click",d)}}const F=8;class U{id="brush";interactive=!0;drawOrder=200;host=null;canvas=null;lastData=null;isDragging=!1;startX=0;currentX=0;brushDrawState=null;boundMouseDown=null;boundMouseMove=null;boundMouseUp=null;boundDblClick=null;install(n,a){this.unbindEvents(),this.host=n,this.canvas=a,this.bindEvents()}update(n,a){this.rebindCanvas(),this.lastData=n}drawOverlay(n,a){if(!this.brushDrawState)return;const{left:s,right:i,top:e,height:t,brushColor:r,brushBorder:o}=this.brushDrawState;n.fillStyle=r,n.fillRect(s,e,i-s,t),n.strokeStyle=o,n.lineWidth=1,n.strokeRect(s,e,i-s,t)}destroy(){this.unbindEvents(),this.host=null,this.canvas=null,this.lastData=null,this.brushDrawState=null}measureMargin(){return{}}rebindCanvas(){if(!this.host)return;const n=this.host.getCanvas();n&&n!==this.canvas&&(this.unbindEvents(),this.canvas=n,this.bindEvents())}bindEvents(){this.canvas&&(this.boundMouseDown=n=>this.handleMouseDown(n),this.boundMouseMove=n=>this.handleMouseMove(n),this.boundMouseUp=n=>this.handleMouseUp(n),this.boundDblClick=()=>this.handleDblClick(),this.canvas.addEventListener("mousedown",this.boundMouseDown),document.addEventListener("mousemove",this.boundMouseMove),document.addEventListener("mouseup",this.boundMouseUp),this.canvas.addEventListener("dblclick",this.boundDblClick))}unbindEvents(){this.canvas&&this.boundMouseDown&&this.canvas.removeEventListener("mousedown",this.boundMouseDown),this.boundMouseMove&&document.removeEventListener("mousemove",this.boundMouseMove),this.boundMouseUp&&document.removeEventListener("mouseup",this.boundMouseUp),this.canvas&&this.boundDblClick&&this.canvas.removeEventListener("dblclick",this.boundDblClick),this.boundMouseDown=null,this.boundMouseMove=null,this.boundMouseUp=null,this.boundDblClick=null}handleMouseDown(n){if(!n.shiftKey||!this.canvas)return;const a=this.canvas.getBoundingClientRect();this.startX=n.clientX-a.left,this.currentX=this.startX,this.isDragging=!0,n.preventDefault()}handleMouseMove(n){if(!this.isDragging||!this.canvas)return;const a=this.canvas.getBoundingClientRect();this.currentX=n.clientX-a.left,this.updateBrushState()}handleMouseUp(n){if(!this.isDragging)return;if(this.isDragging=!1,Math.abs(this.currentX-this.startX)<F){this.brushDrawState=null,this.host?.requestOverlayRender();return}this.emitBrushSelect()}handleDblClick(){this.brushDrawState=null,this.host?.requestOverlayRender(),this.host?.emit?.("brush:clear",void 0)}updateBrushState(){if(!this.host)return;const n=this.host.getRendererContext();if(!n)return;const a=Math.min(this.startX,this.currentX),s=Math.max(this.startX,this.currentX),i=n.margin.top,e=n.innerHeight,t=n.frameTheme?.crosshair?.color??"#94a3b8",r=$(t,.15),o=$(t,.5);this.brushDrawState={left:a,right:s,top:i,height:e,brushColor:r,brushBorder:o},this.host.requestOverlayRender()}emitBrushSelect(){if(!this.host||!this.lastData)return;const n=this.host.getRendererContext();if(!n)return;if(_(n)){this.brushDrawState=null,this.host.requestOverlayRender();return}const{xScale:s}=R(n),i=Math.min(this.startX,this.currentX)-n.margin.left,e=Math.max(this.startX,this.currentX)-n.margin.left,t=this.pixelToDataX(i,s,n),r=this.pixelToDataX(e,s,n);t!=null&&r!=null&&this.host.emit?.("brush:select",{xMin:t,xMax:r})}pixelToDataX(n,a,s){if(s.data.xAxisType==="category"){const e=a,t=e.domain();let r=0,o=1/0;for(let u=0;u<t.length;u++){const d=(e(t[u])??0)+e.bandwidth()/2,h=Math.abs(d-n);h<o&&(o=h,r=u)}return t[r]}const i=a;if("invert"in i){const e=i.invert(n);return s.data.xAxisType==="date"?new Date(e):e}return null}}const z={title:"Charts/Interactions/Click & Brush",argTypes:{frameTheme:{control:"select",options:["light","dark","minimal"],description:"차트 프레임 테마",table:{defaultValue:{summary:"light"},category:"Common"}}},args:{frameTheme:"light"}},C={name:"Click -- 데이터 포인트 클릭 이벤트",args:{dataset:"numeric-basic",frameTheme:"light"},argTypes:{dataset:L(c)},render:l=>{const n=w();n.appendChild(f(`데이터 포인트를 클릭하면 아래 로그에 이벤트 정보가 표시됩니다.
드래그(마우스 이동 > 5px)는 클릭으로 판정되지 않습니다.`));const{panel:a,log:s}=S(),i=v();n.appendChild(i),n.appendChild(a);const e=new g(i,"line",{frameTheme:l.frameTheme||"light",tooltip:{show:!0,shared:!0}});return e.installPlugin(new m),e.installPlugin(new b),e.installPlugin(new y),e.installPlugin(new N),e.setData(k(c,l.dataset)),e.on("point:click",t=>{s(`[click] series="${t.seriesKey}" index=${t.pointIndex} x=${JSON.stringify(t.dataPoint.x)} y=${t.dataPoint.y} px=(${Math.round(t.pixelX)}, ${Math.round(t.pixelY)})`)}),n}},P={name:"Click -- Scatter 차트 포인트 클릭",args:{frameTheme:"light"},render:l=>{const n=w();n.appendChild(f("Scatter 차트에서 포인트를 클릭해보세요."));const{panel:a,log:s}=S(),i=v();n.appendChild(i),n.appendChild(a);const e={xAxisType:"number",series:[{key:"group-a",label:"Group A",data:Array.from({length:20},(r,o)=>({x:Math.random()*100,y:Math.random()*100}))},{key:"group-b",label:"Group B",data:Array.from({length:20},(r,o)=>({x:Math.random()*100,y:Math.random()*100}))}]},t=new g(i,"scatter",{frameTheme:l.frameTheme||"light",tooltip:{show:!0}});return t.installPlugin(new m),t.installPlugin(new b),t.installPlugin(new N),t.setData(e),t.on("point:click",r=>{s(`[click] series="${r.seriesKey}" index=${r.pointIndex} x=${r.dataPoint.x.toFixed?.(1)??r.dataPoint.x} y=${r.dataPoint.y.toFixed(1)}`)}),n}},M={name:"Brush -- Shift+드래그 범위 선택",args:{dataset:"numeric-large",frameTheme:"light"},argTypes:{dataset:L(c)},render:l=>{const n=w();n.appendChild(f(`Shift 키를 누른 상태에서 드래그하면 X축 범위를 선택합니다.
더블클릭으로 선택을 해제합니다. 선택 범위가 아래 로그에 표시됩니다.`));const{panel:a,log:s}=S(),i=v();n.appendChild(i),n.appendChild(a);const e=new g(i,"line",{frameTheme:l.frameTheme||"light",tooltip:{show:!0,shared:!0}});return e.installPlugin(new m),e.installPlugin(new b),e.installPlugin(new y),e.installPlugin(new U),e.setData(k(c,l.dataset)),e.on("brush:select",t=>{const r=o=>o instanceof Date?o.toISOString().slice(0,10):String(typeof o=="number"?o.toFixed(2):o);s(`[brush] xMin=${r(t.xMin)} xMax=${r(t.xMax)}`)}),e.on("brush:clear",()=>{s("[brush] cleared")}),n}},D={name:"Brush + Zoom -- 동시 사용",args:{dataset:"numeric-large",frameTheme:"light"},argTypes:{dataset:L(c)},render:l=>{const n=w();n.appendChild(f(`일반 드래그 = Zoom pan, 휠 = Zoom in/out.
Shift+드래그 = Brush 범위 선택. 두 기능이 충돌 없이 공존합니다.`));const{panel:a,log:s}=S(),i=v();n.appendChild(i),n.appendChild(a);const e=new g(i,"line",{frameTheme:l.frameTheme||"light",zoom:{enabled:!0},tooltip:{show:!0,shared:!0}});return e.installPlugin(new m),e.installPlugin(new b),e.installPlugin(new y),e.installPlugin(new U),e.setData(k(c,l.dataset)),e.on("brush:select",t=>{s(`[brush] xMin=${Number(t.xMin).toFixed(2)} xMax=${Number(t.xMax).toFixed(2)}`)}),e.on("brush:clear",()=>{s("[brush] cleared")}),n}},T={name:"Highlight -- 프로그래밍 방식 포인트 하이라이트",args:{frameTheme:"light"},render:l=>{const n=w();n.appendChild(f(`setHighlightPoint / clearHighlight API를 사용하여
외부(테이블 등)에서 차트 포인트를 하이라이트합니다.`));const a=document.createElement("div");a.style.cssText="display:flex;gap:0.5rem;margin-bottom:0.5rem;flex-wrap:wrap";const s=v();n.appendChild(a),n.appendChild(s);const i={xAxisType:"number",series:[{key:"revenue",label:"Revenue",data:[1,2,3,4,5,6,7,8].map(t=>({x:t,y:t*10+Math.random()*20}))},{key:"cost",label:"Cost",data:[1,2,3,4,5,6,7,8].map(t=>({x:t,y:t*5+Math.random()*10}))}]},e=new g(s,"line",{frameTheme:l.frameTheme||"light",tooltip:{show:!0,shared:!0}});e.installPlugin(new m),e.installPlugin(new b),e.installPlugin(new y),e.setData(i);for(let t=0;t<8;t++)a.appendChild(I(`Row ${t+1}`,()=>e.setHighlightPoint("revenue",t)));return a.appendChild(I("Clear",()=>e.clearHighlight())),n}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Click -- 데이터 포인트 클릭 이벤트',
  args: {
    dataset: 'numeric-basic',
    frameTheme: 'light'
  },
  argTypes: {
    dataset: datasetArgType(LINE_DATASETS)
  },
  render: (args: {
    dataset: string;
    frameTheme: string;
  }) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('데이터 포인트를 클릭하면 아래 로그에 이벤트 정보가 표시됩니다.\\n' + '드래그(마우스 이동 > 5px)는 클릭으로 판정되지 않습니다.'));
    const {
      panel,
      log
    } = createLogPanel();
    const container = createContainer();
    wrapper.appendChild(container);
    wrapper.appendChild(panel);
    const engine = new ChartEngine(container, 'line', {
      frameTheme: args.frameTheme || 'light',
      tooltip: {
        show: true,
        shared: true
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.installPlugin(new CrosshairPlugin());
    engine.installPlugin(new ClickPlugin());
    engine.setData(resolveDataset(LINE_DATASETS, args.dataset));
    engine.on('point:click', (event: PointClickEvent) => {
      log(\`[click] series="\${event.seriesKey}" index=\${event.pointIndex} \` + \`x=\${JSON.stringify(event.dataPoint.x)} y=\${event.dataPoint.y} \` + \`px=(\${Math.round(event.pixelX)}, \${Math.round(event.pixelY)})\`);
    });
    return wrapper;
  }
}`,...C.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Click -- Scatter 차트 포인트 클릭',
  args: {
    frameTheme: 'light'
  },
  render: (args: {
    frameTheme: string;
  }) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('Scatter 차트에서 포인트를 클릭해보세요.'));
    const {
      panel,
      log
    } = createLogPanel();
    const container = createContainer();
    wrapper.appendChild(container);
    wrapper.appendChild(panel);
    const data: ChartData = {
      xAxisType: 'number',
      series: [{
        key: 'group-a',
        label: 'Group A',
        data: Array.from({
          length: 20
        }, (_, i) => ({
          x: Math.random() * 100,
          y: Math.random() * 100
        }))
      }, {
        key: 'group-b',
        label: 'Group B',
        data: Array.from({
          length: 20
        }, (_, i) => ({
          x: Math.random() * 100,
          y: Math.random() * 100
        }))
      }]
    };
    const engine = new ChartEngine(container, 'scatter', {
      frameTheme: args.frameTheme || 'light',
      tooltip: {
        show: true
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.installPlugin(new ClickPlugin());
    engine.setData(data);
    engine.on('point:click', (event: PointClickEvent) => {
      log(\`[click] series="\${event.seriesKey}" index=\${event.pointIndex} \` + \`x=\${event.dataPoint.x.toFixed?.(1) ?? event.dataPoint.x} \` + \`y=\${event.dataPoint.y.toFixed(1)}\`);
    });
    return wrapper;
  }
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Brush -- Shift+드래그 범위 선택',
  args: {
    dataset: 'numeric-large',
    frameTheme: 'light'
  },
  argTypes: {
    dataset: datasetArgType(LINE_DATASETS)
  },
  render: (args: {
    dataset: string;
    frameTheme: string;
  }) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('Shift 키를 누른 상태에서 드래그하면 X축 범위를 선택합니다.\\n' + '더블클릭으로 선택을 해제합니다. 선택 범위가 아래 로그에 표시됩니다.'));
    const {
      panel,
      log
    } = createLogPanel();
    const container = createContainer();
    wrapper.appendChild(container);
    wrapper.appendChild(panel);
    const engine = new ChartEngine(container, 'line', {
      frameTheme: args.frameTheme || 'light',
      tooltip: {
        show: true,
        shared: true
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.installPlugin(new CrosshairPlugin());
    engine.installPlugin(new BrushPlugin());
    engine.setData(resolveDataset(LINE_DATASETS, args.dataset));
    engine.on('brush:select', (event: BrushSelectEvent) => {
      const fmt = (v: unknown) => v instanceof Date ? v.toISOString().slice(0, 10) : String(typeof v === 'number' ? v.toFixed(2) : v);
      log(\`[brush] xMin=\${fmt(event.xMin)} xMax=\${fmt(event.xMax)}\`);
    });
    engine.on('brush:clear', () => {
      log('[brush] cleared');
    });
    return wrapper;
  }
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Brush + Zoom -- 동시 사용',
  args: {
    dataset: 'numeric-large',
    frameTheme: 'light'
  },
  argTypes: {
    dataset: datasetArgType(LINE_DATASETS)
  },
  render: (args: {
    dataset: string;
    frameTheme: string;
  }) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('일반 드래그 = Zoom pan, 휠 = Zoom in/out.\\n' + 'Shift+드래그 = Brush 범위 선택. 두 기능이 충돌 없이 공존합니다.'));
    const {
      panel,
      log
    } = createLogPanel();
    const container = createContainer();
    wrapper.appendChild(container);
    wrapper.appendChild(panel);
    const engine = new ChartEngine(container, 'line', {
      frameTheme: args.frameTheme || 'light',
      zoom: {
        enabled: true
      },
      tooltip: {
        show: true,
        shared: true
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.installPlugin(new CrosshairPlugin());
    engine.installPlugin(new BrushPlugin());
    engine.setData(resolveDataset(LINE_DATASETS, args.dataset));
    engine.on('brush:select', (event: BrushSelectEvent) => {
      log(\`[brush] xMin=\${Number(event.xMin).toFixed(2)} xMax=\${Number(event.xMax).toFixed(2)}\`);
    });
    engine.on('brush:clear', () => {
      log('[brush] cleared');
    });
    return wrapper;
  }
}`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Highlight -- 프로그래밍 방식 포인트 하이라이트',
  args: {
    frameTheme: 'light'
  },
  render: (args: {
    frameTheme: string;
  }) => {
    const wrapper = createWrapper();
    wrapper.appendChild(createLabel('setHighlightPoint / clearHighlight API를 사용하여\\n' + '외부(테이블 등)에서 차트 포인트를 하이라이트합니다.'));
    const controls = document.createElement('div');
    controls.style.cssText = 'display:flex;gap:0.5rem;margin-bottom:0.5rem;flex-wrap:wrap';
    const container = createContainer();
    wrapper.appendChild(controls);
    wrapper.appendChild(container);
    const data: ChartData = {
      xAxisType: 'number',
      series: [{
        key: 'revenue',
        label: 'Revenue',
        data: [1, 2, 3, 4, 5, 6, 7, 8].map(x => ({
          x,
          y: x * 10 + Math.random() * 20
        }))
      }, {
        key: 'cost',
        label: 'Cost',
        data: [1, 2, 3, 4, 5, 6, 7, 8].map(x => ({
          x,
          y: x * 5 + Math.random() * 10
        }))
      }]
    };
    const engine = new ChartEngine(container, 'line', {
      frameTheme: args.frameTheme || 'light',
      tooltip: {
        show: true,
        shared: true
      }
    });
    engine.installPlugin(new LegendPlugin());
    engine.installPlugin(new TooltipPlugin());
    engine.installPlugin(new CrosshairPlugin());
    engine.setData(data);
    for (let i = 0; i < 8; i++) {
      controls.appendChild(btn(\`Row \${i + 1}\`, () => engine.setHighlightPoint('revenue', i)));
    }
    controls.appendChild(btn('Clear', () => engine.clearHighlight()));
    return wrapper;
  }
}`,...T.parameters?.docs?.source}}};const J=["ClickBasic","ClickScatter","BrushBasic","BrushWithZoom","HighlightPoint"];export{M as BrushBasic,D as BrushWithZoom,C as ClickBasic,P as ClickScatter,T as HighlightPoint,J as __namedExportsOrder,z as default};
