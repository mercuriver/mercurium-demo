import{c as a}from"./chart-story-content-DqL3FnFI.js";import"./chart-BUQmp9vc.js";import"./chart-story-lifecycle-BYb_YbhB.js";import"./chart-story-inspector-CDhlPLCD.js";const s={title:"Features/Annotations",parameters:{controls:{disable:!0}}},e={name:"Data anchors, callouts and shapes",parameters:{storyHeader:{eyebrow:"Annotation composition",title:"기준선·화살표·콜아웃·도형으로 설명하는 데이터",description:"좌표와 시리즈 포인트에 주석을 연결합니다. 콜아웃의 글자·배경·테두리·줄바꿈은 Canvas에 함께 그려지고, 도형 크기는 데이터 단위를 따릅니다."}},render:()=>a({width:800,height:440,summary:"Quarterly revenue · index · target 70",initialization:{data:[{x:1,y:32},{x:2,y:40},{x:3,y:68},{x:4,y:83}],view:{paradigm:"cartesian",type:"line",series:{id:"revenue",name:"Revenue",encoding:{x:"x",y:"y"}},options:{xAxis:{scale:"linear",min:0,max:5},yAxis:{scale:"linear",min:0,max:110},animation:{enabled:!1},legend:{visible:!0},annotations:[{id:"target",type:"line",axis:"y",value:70,lineDash:[6,3],text:"Target",color:"#64748b"},{id:"campaign",type:"range",axis:"x",from:2.5,to:3.5,fillColor:"#60a5fa",opacity:.15},{id:"growth",type:"arrow",from:{kind:"series",seriesId:"revenue",datumIndex:1},to:{kind:"series",seriesId:"revenue",datumIndex:2},color:"#16a34a",lineWidth:2},{id:"launch",type:"callout",anchor:{kind:"series",seriesId:"revenue",datumIndex:2},text:"Campaign launch increased revenue across all regions",maxWidth:190,wrap:"wrap",offset:{x:-130,y:-100},fontSize:13,backgroundColor:"#fffbeb",borderColor:"#d97706"},{id:"milestone",type:"shape",shape:"circle",anchor:{kind:"series",seriesId:"revenue",datumIndex:3},radius:7,fillColor:"transparent",color:"#e11d48",lineWidth:2},{id:"future",type:"label",x:7,y:40,text:"Next period",outOfViewport:"indicate",color:"#7c3aed"}]}}}})},n={parameters:{storyHeader:{eyebrow:"Screen placement",title:"반전 좌표에서도 유지되는 주석과 화면 오프셋",description:"데이터 좌표와 도형은 축 반전을 따릅니다. 콜아웃의 오프셋은 화면 픽셀 단위를 유지하며, 화면 밖 좌표는 clamp 또는 indicate 정책으로 표시합니다."}},render:()=>a({width:800,height:400,summary:"Inverted chart · screen-relative label offsets",initialization:{data:[{category:"North",value:30},{category:"South",value:55},{category:"West",value:80}],view:{paradigm:"cartesian",type:"bar",series:{id:"sales",encoding:{x:"category",y:"value"}},options:{inverted:!0,xAxis:{scale:"category"},yAxis:{scale:"linear",min:0,max:100},animation:{enabled:!1},annotations:[{id:"box",type:"shape",shape:"rect",anchor:{kind:"point",x:"South",y:55},width:.6,height:10,fillColor:"transparent",color:"#be123c",lineWidth:2},{id:"note",type:"callout",anchor:{kind:"series",seriesId:"sales",datumIndex:1},text:"South exceeded its target",offset:{x:35,y:-35},maxWidth:170,wrap:"wrap"},{id:"outside",type:"label",x:"West",y:130,text:"130",outOfViewport:"indicate"}]}}}})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Data anchors, callouts and shapes',
  parameters: {
    storyHeader: {
      eyebrow: 'Annotation composition',
      title: '기준선·화살표·콜아웃·도형으로 설명하는 데이터',
      description: '좌표와 시리즈 포인트에 주석을 연결합니다. 콜아웃의 글자·배경·테두리·줄바꿈은 Canvas에 함께 그려지고, 도형 크기는 데이터 단위를 따릅니다.'
    }
  },
  render: () => createChartStoryContent({
    width: 800,
    height: 440,
    summary: 'Quarterly revenue · index · target 70',
    initialization: {
      data: [{
        x: 1,
        y: 32
      }, {
        x: 2,
        y: 40
      }, {
        x: 3,
        y: 68
      }, {
        x: 4,
        y: 83
      }],
      view: {
        paradigm: 'cartesian',
        type: 'line',
        series: {
          id: 'revenue',
          name: 'Revenue',
          encoding: {
            x: 'x',
            y: 'y'
          }
        },
        options: {
          xAxis: {
            scale: 'linear',
            min: 0,
            max: 5
          },
          yAxis: {
            scale: 'linear',
            min: 0,
            max: 110
          },
          animation: {
            enabled: false
          },
          legend: {
            visible: true
          },
          annotations: [{
            id: 'target',
            type: 'line',
            axis: 'y',
            value: 70,
            lineDash: [6, 3],
            text: 'Target',
            color: '#64748b'
          }, {
            id: 'campaign',
            type: 'range',
            axis: 'x',
            from: 2.5,
            to: 3.5,
            fillColor: '#60a5fa',
            opacity: 0.15
          }, {
            id: 'growth',
            type: 'arrow',
            from: {
              kind: 'series',
              seriesId: 'revenue',
              datumIndex: 1
            },
            to: {
              kind: 'series',
              seriesId: 'revenue',
              datumIndex: 2
            },
            color: '#16a34a',
            lineWidth: 2
          }, {
            id: 'launch',
            type: 'callout',
            anchor: {
              kind: 'series',
              seriesId: 'revenue',
              datumIndex: 2
            },
            text: 'Campaign launch increased revenue across all regions',
            maxWidth: 190,
            wrap: 'wrap',
            offset: {
              x: -130,
              y: -100
            },
            fontSize: 13,
            backgroundColor: '#fffbeb',
            borderColor: '#d97706'
          }, {
            id: 'milestone',
            type: 'shape',
            shape: 'circle',
            anchor: {
              kind: 'series',
              seriesId: 'revenue',
              datumIndex: 3
            },
            radius: 7,
            fillColor: 'transparent',
            color: '#e11d48',
            lineWidth: 2
          }, {
            id: 'future',
            type: 'label',
            x: 7,
            y: 40,
            text: 'Next period',
            outOfViewport: 'indicate',
            color: '#7c3aed'
          }]
        }
      }
    }
  })
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    storyHeader: {
      eyebrow: 'Screen placement',
      title: '반전 좌표에서도 유지되는 주석과 화면 오프셋',
      description: '데이터 좌표와 도형은 축 반전을 따릅니다. 콜아웃의 오프셋은 화면 픽셀 단위를 유지하며, 화면 밖 좌표는 clamp 또는 indicate 정책으로 표시합니다.'
    }
  },
  render: () => createChartStoryContent({
    width: 800,
    height: 400,
    summary: 'Inverted chart · screen-relative label offsets',
    initialization: {
      data: [{
        category: 'North',
        value: 30
      }, {
        category: 'South',
        value: 55
      }, {
        category: 'West',
        value: 80
      }],
      view: {
        paradigm: 'cartesian',
        type: 'bar',
        series: {
          id: 'sales',
          encoding: {
            x: 'category',
            y: 'value'
          }
        },
        options: {
          inverted: true,
          xAxis: {
            scale: 'category'
          },
          yAxis: {
            scale: 'linear',
            min: 0,
            max: 100
          },
          animation: {
            enabled: false
          },
          annotations: [{
            id: 'box',
            type: 'shape',
            shape: 'rect',
            anchor: {
              kind: 'point',
              x: 'South',
              y: 55
            },
            width: 0.6,
            height: 10,
            fillColor: 'transparent',
            color: '#be123c',
            lineWidth: 2
          }, {
            id: 'note',
            type: 'callout',
            anchor: {
              kind: 'series',
              seriesId: 'sales',
              datumIndex: 1
            },
            text: 'South exceeded its target',
            offset: {
              x: 35,
              y: -35
            },
            maxWidth: 170,
            wrap: 'wrap'
          }, {
            id: 'outside',
            type: 'label',
            x: 'West',
            y: 130,
            text: '130',
            outOfViewport: 'indicate'
          }]
        }
      }
    }
  })
}`,...n.parameters?.docs?.source}}};const d=["ReportAnnotations","InvertedAndClamped"];export{n as InvertedAndClamped,e as ReportAnnotations,d as __namedExportsOrder,s as default};
