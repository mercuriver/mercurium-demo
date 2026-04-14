import{i as k,b as X,s as M,h as R,C as b}from"./chart-engine-Cd-FpfQK.js";import{L as f,T as x}from"./tooltip-plugin-CiIlC11d.js";import{C as L}from"./crosshair-plugin-7esPFCNd.js";import{r as $,L as g}from"./mock-data--NCvz5h5.js";import{d as I}from"./story-utils-Bt4VoPGz.js";import{c as v,a as w,e as A,d as C,b as _}from"./interaction-helpers-Dh259fVa.js";const H=20,O=5;class N{id="click";interactive=!0;host=null;canvas=null;lastData=null;boundMouseDown=null;boundMouseUp=null;boundContextMenu=null;mouseDownPos=null;install(n,e){this.unbindEvents(),this.host=n,this.canvas=e,this.bindEvents()}update(n,e){this.rebindCanvas(),this.lastData=n}destroy(){this.unbindEvents(),this.host=null,this.canvas=null,this.lastData=null}rebindCanvas(){if(!this.host)return;const n=this.host.getCanvas();n&&n!==this.canvas&&(this.unbindEvents(),this.canvas=n,this.bindEvents())}bindEvents(){this.canvas&&(this.boundMouseDown=n=>this.handleMouseDown(n),this.boundMouseUp=n=>this.handleMouseUp(n),this.boundContextMenu=n=>this.handleContextMenu(n),this.canvas.addEventListener("mousedown",this.boundMouseDown),this.canvas.addEventListener("mouseup",this.boundMouseUp),this.canvas.addEventListener("contextmenu",this.boundContextMenu))}unbindEvents(){this.canvas&&(this.boundMouseDown&&(this.canvas.removeEventListener("mousedown",this.boundMouseDown),this.boundMouseDown=null),this.boundMouseUp&&(this.canvas.removeEventListener("mouseup",this.boundMouseUp),this.boundMouseUp=null),this.boundContextMenu&&(this.canvas.removeEventListener("contextmenu",this.boundContextMenu),this.boundContextMenu=null))}handleMouseDown(n){this.mouseDownPos={x:n.clientX,y:n.clientY}}handleMouseUp(n){if(!this.mouseDownPos)return;const e=n.clientX-this.mouseDownPos.x,s=n.clientY-this.mouseDownPos.y;this.mouseDownPos=null,!(Math.sqrt(e*e+s*s)>O)&&this.handleClick(n)}findNearestPoint(n){if(!this.host||!this.lastData||!this.canvas)return null;const e=this.host.getRendererContext();if(!e)return null;const s=this.canvas.getBoundingClientRect(),i=n.clientX-s.left-e.margin.left,t=n.clientY-s.top-e.margin.top,a=k(e),{xScale:r,yScale:o}=X(e);let u=1/0,d=null;for(const l of this.lastData.series)if(!(l.visible===!1||l.tooltipOnly))for(let c=0;c<l.data.length;c++){const p=l.data[c],P=a?o(p.y):M(p.x,r,e),m=a?M(p.x,r,e):o(p.y),B=Math.sqrt((i-P)**2+(t-m)**2);B<u&&B<=H&&(u=B,d={seriesKey:l.key,pointIndex:c,dataPoint:p,pixelX:P+e.margin.left,pixelY:m+e.margin.top})}return d}handleClick(n){const e=this.findNearestPoint(n);e&&this.host?.emit?.("point:click",e)}findNearestPointByX(n){if(!this.host||!this.lastData||!this.canvas)return null;const e=this.host.getRendererContext();if(!e)return null;const s=this.canvas.getBoundingClientRect(),i=n.clientX-s.left-e.margin.left,t=k(e),{xScale:a,yScale:r}=X(e);let o=1/0,u=null;for(const d of this.lastData.series)if(!(d.visible===!1||d.tooltipOnly))for(let l=0;l<d.data.length;l++){const c=d.data[l],p=t?r(c.y):M(c.x,a,e),P=t?M(c.x,a,e):r(c.y),m=Math.abs(i-p);m<o&&(o=m,u={seriesKey:d.key,pointIndex:l,dataPoint:c,pixelX:p+e.margin.left,pixelY:P+e.margin.top})}return u}handleContextMenu(n){if(n.preventDefault(),!this.host||!this.canvas)return;const e=this.host.getRendererContext();if(!e)return;const s=this.findNearestPointByX(n),i=this.canvas.getBoundingClientRect(),t=n.clientX-i.left-e.margin.left,a=n.clientY-i.top-e.margin.top,r=k(e),{xScale:o}=X(e);let u=null;const d=r?n.clientY-i.top-e.margin.top:t;if("invert"in o){const c=o.invert(d);u=e.data.xAxisType==="date"?new Date(c):c}const l={nearestPoint:s?{seriesKey:s.seriesKey,pointIndex:s.pointIndex,dataPoint:s.dataPoint,pixelX:s.pixelX,pixelY:s.pixelY}:null,clientX:n.clientX,clientY:n.clientY,chartX:t,chartY:a,dataX:u};this.host.emit?.("point:contextmenu",l)}}const Y=8;class U{id="brush";interactive=!0;drawOrder=200;host=null;canvas=null;lastData=null;isDragging=!1;startX=0;currentX=0;brushDrawState=null;boundMouseDown=null;boundMouseMove=null;boundMouseUp=null;boundDblClick=null;install(n,e){this.unbindEvents(),this.host=n,this.canvas=e,this.bindEvents()}update(n,e){this.rebindCanvas(),this.lastData=n}drawOverlay(n,e){if(!this.brushDrawState)return;const{left:s,right:i,top:t,height:a,brushColor:r,brushBorder:o}=this.brushDrawState;n.fillStyle=r,n.fillRect(s,t,i-s,a),n.strokeStyle=o,n.lineWidth=1,n.strokeRect(s,t,i-s,a)}destroy(){this.unbindEvents(),this.host=null,this.canvas=null,this.lastData=null,this.brushDrawState=null}measureMargin(){return{}}rebindCanvas(){if(!this.host)return;const n=this.host.getCanvas();n&&n!==this.canvas&&(this.unbindEvents(),this.canvas=n,this.bindEvents())}bindEvents(){this.canvas&&(this.boundMouseDown=n=>this.handleMouseDown(n),this.boundMouseMove=n=>this.handleMouseMove(n),this.boundMouseUp=n=>this.handleMouseUp(n),this.boundDblClick=()=>this.handleDblClick(),this.canvas.addEventListener("mousedown",this.boundMouseDown),document.addEventListener("mousemove",this.boundMouseMove),document.addEventListener("mouseup",this.boundMouseUp),this.canvas.addEventListener("dblclick",this.boundDblClick))}unbindEvents(){this.canvas&&this.boundMouseDown&&this.canvas.removeEventListener("mousedown",this.boundMouseDown),this.boundMouseMove&&document.removeEventListener("mousemove",this.boundMouseMove),this.boundMouseUp&&document.removeEventListener("mouseup",this.boundMouseUp),this.canvas&&this.boundDblClick&&this.canvas.removeEventListener("dblclick",this.boundDblClick),this.boundMouseDown=null,this.boundMouseMove=null,this.boundMouseUp=null,this.boundDblClick=null}handleMouseDown(n){if(!n.shiftKey||!this.canvas)return;const e=this.canvas.getBoundingClientRect();this.startX=n.clientX-e.left,this.currentX=this.startX,this.isDragging=!0,n.preventDefault()}handleMouseMove(n){if(!this.isDragging||!this.canvas)return;const e=this.canvas.getBoundingClientRect();this.currentX=n.clientX-e.left,this.updateBrushState()}handleMouseUp(n){if(!this.isDragging)return;if(this.isDragging=!1,Math.abs(this.currentX-this.startX)<Y){this.brushDrawState=null,this.host?.requestOverlayRender(),this.host?.emit?.("brush:clear",void 0);return}this.emitBrushSelect()}handleDblClick(){this.brushDrawState=null,this.host?.requestOverlayRender(),this.host?.emit?.("brush:clear",void 0)}updateBrushState(){if(!this.host)return;const n=this.host.getRendererContext();if(!n)return;const e=Math.min(this.startX,this.currentX),s=Math.max(this.startX,this.currentX),i=n.margin.top,t=n.innerHeight,a=n.frameTheme?.crosshair?.color??"#94a3b8",r=R(a,.15),o=R(a,.5);this.brushDrawState={left:e,right:s,top:i,height:t,brushColor:r,brushBorder:o},this.host.requestOverlayRender()}emitBrushSelect(){if(!this.host||!this.lastData)return;const n=this.host.getRendererContext();if(!n)return;if(k(n)){this.brushDrawState=null,this.host.requestOverlayRender();return}const{xScale:s}=X(n),i=Math.min(this.startX,this.currentX)-n.margin.left,t=Math.max(this.startX,this.currentX)-n.margin.left,a=this.pixelToDataX(i,s,n),r=this.pixelToDataX(t,s,n);a!=null&&r!=null&&this.host.emit?.("brush:select",{xMin:a,xMax:r})}pixelToDataX(n,e,s){if(s.data.xAxisType==="category"){const t=e,a=t.domain();let r=0,o=1/0;for(let u=0;u<a.length;u++){const d=(t(a[u])??0)+t.bandwidth()/2,l=Math.abs(d-n);l<o&&(o=l,r=u)}return a[r]}const i=e;if("invert"in i){const t=i.invert(n);return s.data.xAxisType==="date"?new Date(t):t}return null}}const z={title:"Charts/Interactions/Click & Brush",argTypes:{frameTheme:{control:"select",options:["light","dark","minimal"],description:"차트 프레임 테마",table:{defaultValue:{summary:"light"},category:"Common"}}},args:{frameTheme:"light"}},y={name:"Click -- 데이터 포인트 클릭 이벤트",args:{dataset:"numeric-basic",frameTheme:"light"},argTypes:{dataset:I(g)},render:h=>{const n=v();n.appendChild(w(`데이터 포인트를 클릭하면 아래 로그에 이벤트 정보가 표시됩니다.
드래그(마우스 이동 > 5px)는 클릭으로 판정되지 않습니다.`));const{panel:e,log:s}=A(),i=C();n.appendChild(i),n.appendChild(e);const t=new b(i,"line",{frameTheme:h.frameTheme||"light",tooltip:{show:!0,shared:!0}});return t.installPlugin(new f),t.installPlugin(new x),t.installPlugin(new L),t.installPlugin(new N),t.setData($(g,h.dataset)),t.on("point:click",a=>{s(`[click] series="${a.seriesKey}" index=${a.pointIndex} x=${JSON.stringify(a.dataPoint.x)} y=${a.dataPoint.y} px=(${Math.round(a.pixelX)}, ${Math.round(a.pixelY)})`)}),n}},D={name:"Click -- Scatter 차트 포인트 클릭",args:{frameTheme:"light"},render:h=>{const n=v();n.appendChild(w("Scatter 차트에서 포인트를 클릭해보세요."));const{panel:e,log:s}=A(),i=C();n.appendChild(i),n.appendChild(e);const t={xAxisType:"number",series:[{key:"group-a",label:"Group A",data:Array.from({length:20},(r,o)=>({x:Math.random()*100,y:Math.random()*100}))},{key:"group-b",label:"Group B",data:Array.from({length:20},(r,o)=>({x:Math.random()*100,y:Math.random()*100}))}]},a=new b(i,"scatter",{frameTheme:h.frameTheme||"light",tooltip:{show:!0}});return a.installPlugin(new f),a.installPlugin(new x),a.installPlugin(new N),a.setData(t),a.on("point:click",r=>{s(`[click] series="${r.seriesKey}" index=${r.pointIndex} x=${r.dataPoint.x.toFixed?.(1)??r.dataPoint.x} y=${r.dataPoint.y.toFixed(1)}`)}),n}},T={name:"Brush -- Shift+드래그 범위 선택",args:{dataset:"numeric-large",frameTheme:"light"},argTypes:{dataset:I(g)},render:h=>{const n=v();n.appendChild(w(`Shift 키를 누른 상태에서 드래그하면 X축 범위를 선택합니다.
더블클릭으로 선택을 해제합니다. 선택 범위가 아래 로그에 표시됩니다.`));const{panel:e,log:s}=A(),i=C();n.appendChild(i),n.appendChild(e);const t=new b(i,"line",{frameTheme:h.frameTheme||"light",tooltip:{show:!0,shared:!0}});return t.installPlugin(new f),t.installPlugin(new x),t.installPlugin(new L),t.installPlugin(new U),t.setData($(g,h.dataset)),t.on("brush:select",a=>{const r=o=>o instanceof Date?o.toISOString().slice(0,10):String(typeof o=="number"?o.toFixed(2):o);s(`[brush] xMin=${r(a.xMin)} xMax=${r(a.xMax)}`)}),t.on("brush:clear",()=>{s("[brush] cleared")}),n}},S={name:"Brush + Zoom -- 동시 사용",args:{dataset:"numeric-large",frameTheme:"light"},argTypes:{dataset:I(g)},render:h=>{const n=v();n.appendChild(w(`일반 드래그 = Zoom pan, 휠 = Zoom in/out.
Shift+드래그 = Brush 범위 선택. 두 기능이 충돌 없이 공존합니다.`));const{panel:e,log:s}=A(),i=C();n.appendChild(i),n.appendChild(e);const t=new b(i,"line",{frameTheme:h.frameTheme||"light",zoom:{enabled:!0},tooltip:{show:!0,shared:!0}});return t.installPlugin(new f),t.installPlugin(new x),t.installPlugin(new L),t.installPlugin(new U),t.setData($(g,h.dataset)),t.on("brush:select",a=>{s(`[brush] xMin=${Number(a.xMin).toFixed(2)} xMax=${Number(a.xMax).toFixed(2)}`)}),t.on("brush:clear",()=>{s("[brush] cleared")}),n}},E={name:"Highlight -- 프로그래밍 방식 포인트 하이라이트",args:{frameTheme:"light"},render:h=>{const n=v();n.appendChild(w(`setHighlightPoint / clearHighlight API를 사용하여
외부(테이블 등)에서 차트 포인트를 하이라이트합니다.`));const e=document.createElement("div");e.style.cssText="display:flex;gap:0.5rem;margin-bottom:0.5rem;flex-wrap:wrap";const s=C();n.appendChild(e),n.appendChild(s);const i={xAxisType:"number",series:[{key:"revenue",label:"Revenue",data:[1,2,3,4,5,6,7,8].map(a=>({x:a,y:a*10+Math.random()*20}))},{key:"cost",label:"Cost",data:[1,2,3,4,5,6,7,8].map(a=>({x:a,y:a*5+Math.random()*10}))}]},t=new b(s,"line",{frameTheme:h.frameTheme||"light",tooltip:{show:!0,shared:!0}});t.installPlugin(new f),t.installPlugin(new x),t.installPlugin(new L),t.setData(i);for(let a=0;a<8;a++)e.appendChild(_(`Row ${a+1}`,()=>t.setHighlightPoint("revenue",a)));return e.appendChild(_("Clear",()=>t.clearHighlight())),n}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};const J=["ClickBasic","ClickScatter","BrushBasic","BrushWithZoom","HighlightPoint"];export{T as BrushBasic,S as BrushWithZoom,y as ClickBasic,D as ClickScatter,E as HighlightPoint,J as __namedExportsOrder,z as default};
