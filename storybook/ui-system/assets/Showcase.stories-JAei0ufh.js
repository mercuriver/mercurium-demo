import{r as i,j as e}from"./iframe-CF94bgX3.js";import{B as t}from"./Button-101mMIjl.js";import{S as B}from"./Switch-MSZyiryb.js";import{C as z}from"./Checkbox-Cfwlaer1.js";import{R as T}from"./Radio-CITxWh42.js";import{I as u}from"./Input-VuHWirSc.js";import{S as P}from"./Select-BpDeAZet.js";import{S as H}from"./Slider-C-yKLiXz.js";import{H as d,T as l,C as R}from"./Code-DEZWMiRq.js";import{T as F,a as _,b as C,c as D}from"./Tabs-NNjSyijW.js";import{P as V}from"./Pagination-CStuzltI.js";import{T as p}from"./Tooltip-CaAhPNBa.js";import{T as G}from"./Table-DrO2ocAP.js";import{C as h}from"./ColorPicker-DYp-tUAq.js";import{D as k}from"./DateTimePicker-CeAGYLoL.js";import{M as N}from"./MultiSelect-B_7iq1dw.js";import{S as U}from"./SegmentedControl--BKKl2Wk.js";import{M as m}from"./Modal-DCTeUwcz.js";import{T as q,u as X}from"./use-toast-CgGkRypD.js";import{S as Y}from"./Spinner-BvV2hy7x.js";import{S as K}from"./Skeleton-Df7n_9W0.js";import{B as c}from"./Badge-B-TouLrV.js";import{M as A}from"./Menu-CYntgDJo.js";import{D as w}from"./Divider-CkaGMR8s.js";import{B as J}from"./fixtures-BbUB3PbG.js";import"./preload-helper-PPVm8Dsz.js";import"./use-machine-DnTSAAnY.js";import"./use-toggle-CXgfwVp9.js";import"./FormField-BU92sYBa.js";import"./index-Dw1N73c5.js";import"./index-DZ7qwTsu.js";import"./vanilla-extract-dynamic.esm-BUlnp6I2.js";import"./use-popup-close-CazOT3kT.js";import"./use-merged-ref-ly_G1xns.js";import"./index-C3QxACOI.js";const Ve={title:"Patterns/Showcase",tags:["!autodocs"]},Q=[...J,{value:"grape",label:"Grape",disabled:!0}],Z=[{value:"admin",label:"Admin"},{value:"editor",label:"Editor"},{value:"viewer",label:"Viewer"}],$=[{value:"edit",label:"Edit"},{value:"duplicate",label:"Duplicate"},{value:"delete",label:"Delete"}],ee=[{value:"edit",label:"Edit",onClick:()=>{}},{value:"duplicate",label:"Duplicate",onClick:()=>{}},{value:"delete",label:"Delete",onClick:()=>{},variant:"danger",dividerBefore:!0}],te=[{value:"revenue",label:"Revenue"},{value:"cost",label:"Cost"},{value:"profit",label:"Profit"},{value:"margin",label:"Margin %"},{value:"growth",label:"Growth Rate"}],se=[{name:"Alice Kim",department:"Engineering",role:"Frontend",status:"Active"},{name:"Bob Lee",department:"Design",role:"Product Designer",status:"Active"},{name:"Carol Park",department:"Engineering",role:"Backend",status:"On Leave"},{name:"David Choi",department:"Marketing",role:"Growth",status:"Active"}],ie=[{id:"name",header:"Name",accessor:"name",sortable:!0},{id:"department",header:"Department",accessor:"department",sortable:!0},{id:"role",header:"Role",accessor:"role"},{id:"status",header:"Status",accessor:"status"}],s={border:"1px solid var(--color-border-subtle)",borderRadius:"12px",padding:"24px",display:"flex",flexDirection:"column",gap:"16px"},r={fontSize:"13px",fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase",opacity:.5},S={display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(480px, 1fr))",gap:"20px"};function le(){const a=X();return e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(t,{shape:"outline",intent:"info",size:"md",onClick:()=>a.info("Information"),children:"Info"}),e.jsx(t,{shape:"outline",intent:"primary",size:"md",onClick:()=>a.success("Success!"),children:"Success"}),e.jsx(t,{shape:"outline",intent:"warning",size:"md",onClick:()=>a.warning("Warning"),children:"Warning"}),e.jsx(t,{shape:"outline",intent:"danger",size:"md",onClick:()=>a.danger("Error"),children:"Danger"})]})}function ae(){const[a,n]=i.useState(""),[v,g]=i.useState("editor"),[y,f]=i.useState(!0),[b,j]=i.useState("#3b82f6");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(u,{label:"Name",placeholder:"Enter your name",value:a,onValueChange:n,size:"md"}),e.jsx(P,{label:"Role",options:Z,value:v,onChange:g,size:"md"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(h,{value:b,onValueChange:j,size:"md",showLabel:!0}),e.jsx(B,{label:"Email notifications",checked:y,onCheckedChange:f,size:"md"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[e.jsx(t,{shape:"ghost",size:"md",children:"Cancel"}),e.jsx(t,{size:"md",children:"Save"})]})]})}function ne(){const[a,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{shape:"outline",size:"md",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(m,{open:a,onOpenChange:n,children:[e.jsx(m.Header,{onClose:()=>n(!1),children:"Confirm Action"}),e.jsx(m.Body,{children:e.jsx(l,{children:"Are you sure you want to proceed?"})}),e.jsxs(m.Footer,{children:[e.jsx(t,{shape:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>n(!1),children:"Confirm"})]})]})]})}const x={name:"Showcase",parameters:{controls:{disable:!0}},render:()=>{const[a,n]=i.useState("overview"),[v,g]=i.useState(1),[y,f]=i.useState(65),[b,j]=i.useState(null),[W,L]=i.useState(["revenue","profit"]),[M,E]=i.useState("monthly"),[O,I]=i.useState(null);return e.jsx(q,{position:"top-right",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{children:[e.jsx(d,{level:"2",weight:"bold",style:{marginBottom:"8px"},children:"Mercurium UI System"}),e.jsx(l,{size:"md",color:"subtle",style:{lineHeight:"1.7"},children:"FSM-based, token-driven design system for React. Full light/dark theming, 3 size scales (sm/md/lg), and accessible interaction states."})]}),e.jsxs("div",{style:s,children:[e.jsx("div",{style:r,children:"Typography"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsx(d,{level:"1",children:"Heading 1"}),e.jsx(d,{level:"2",children:"Heading 2"}),e.jsx(d,{level:"3",children:"Heading 3"}),e.jsx(d,{level:"4",children:"Heading 4"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",alignItems:"baseline"},children:[e.jsx(l,{size:"lg",children:"Text lg"}),e.jsx(l,{size:"md",children:"Text md"}),e.jsx(l,{size:"sm",color:"subtle",children:"Text sm subtle"}),e.jsx(R,{variant:"soft",size:"sm",children:"const x = 42"}),e.jsx(R,{variant:"outline",size:"sm",children:"npm install"})]})]}),e.jsxs("div",{style:s,children:[e.jsx("div",{style:r,children:"Buttons & Actions"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(t,{intent:"primary",size:"md",children:"Primary"}),e.jsx(t,{intent:"default",size:"md",children:"Default"}),e.jsx(t,{intent:"danger",size:"md",children:"Danger"}),e.jsx(t,{intent:"warning",size:"md",children:"Warning"}),e.jsx(t,{intent:"info",size:"md",children:"Info"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(t,{shape:"outline",size:"md",children:"Outline"}),e.jsx(t,{shape:"ghost",size:"md",children:"Ghost"}),e.jsx(t,{shape:"soft",size:"md",children:"Soft"}),e.jsx(t,{size:"md",loading:!0,children:"Loading"}),e.jsx(t,{size:"md",disabled:!0,children:"Disabled"})]}),e.jsx(w,{}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(U,{items:[{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"}],value:M,onChange:E,size:"md"}),e.jsx(A,{items:$,value:void 0,onSelect:()=>{},trigger:"Actions",size:"md"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...r,marginBottom:"16px",paddingLeft:"4px"},children:"Form Controls"}),e.jsxs("div",{style:S,children:[e.jsxs("div",{style:s,children:[e.jsx(u,{label:"Email",placeholder:"name@example.com",size:"md"}),e.jsx(u,{label:"Password",type:"password",placeholder:"Enter password",size:"md",hint:"At least 8 characters"}),e.jsx(u,{label:"Error",defaultValue:"invalid",size:"md",errorMessage:"This field is required"})]}),e.jsxs("div",{style:s,children:[e.jsx(P,{label:"Fruit",options:Q,value:null,onChange:()=>{},placeholder:"Choose one",size:"md"}),e.jsx(N,{options:te,values:W,onChange:o=>L(o),placeholder:"Select columns",size:"md"}),e.jsx(k,{label:"Date",mode:"date",value:b,onChange:o=>j(o),valueFormat:"iso-8601",size:"md"}),e.jsx(k,{label:"Date & Time",mode:"datetime",valueFormat:"iso-8601",size:"md"})]}),e.jsxs("div",{style:s,children:[e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(B,{label:"Active",defaultChecked:!0,size:"md"}),e.jsx(B,{label:"Disabled",disabled:!0,size:"md"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(z,{label:"Terms agreed",defaultChecked:!0,size:"md"}),e.jsx(z,{label:"Newsletter",size:"md"}),e.jsx(z,{label:"Disabled",disabled:!0,size:"md"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(T,{name:"showcase-radio",label:"Option A",value:"a",defaultChecked:!0,size:"md"}),e.jsx(T,{name:"showcase-radio",label:"Option B",value:"b",size:"md"}),e.jsx(T,{name:"showcase-radio",label:"Option C",value:"c",disabled:!0,size:"md"})]})]}),e.jsxs("div",{style:s,children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(l,{size:"sm",color:"subtle",children:"Opacity"}),e.jsx(H,{value:y,onValueChange:f,min:0,max:100,size:"md"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(h,{value:"#3b82f6",onValueChange:()=>{},size:"md",showLabel:!0}),e.jsx(h,{value:"#ef4444",onValueChange:()=>{},size:"md",showLabel:!0}),e.jsx(h,{value:"#22c55e80",onValueChange:()=>{},size:"md",showLabel:!0,alpha:!0})]})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...r,marginBottom:"16px",paddingLeft:"4px"},children:"Data Display"}),e.jsxs("div",{style:S,children:[e.jsx("div",{style:s,children:e.jsx(G,{data:se,columns:ie,size:"md"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx("div",{style:s,children:e.jsxs(F,{value:a,onChange:o=>n(o),children:[e.jsxs(_,{children:[e.jsx(C,{value:"overview",children:"Overview"}),e.jsx(C,{value:"analytics",children:"Analytics"}),e.jsx(C,{value:"settings",children:"Settings"})]}),e.jsx(D,{value:"overview",children:e.jsx(l,{size:"sm",color:"subtle",style:{padding:"8px 0"},children:"Dashboard overview content"})}),e.jsx(D,{value:"analytics",children:e.jsx(l,{size:"sm",color:"subtle",style:{padding:"8px 0"},children:"Analytics details here"})}),e.jsx(D,{value:"settings",children:e.jsx(l,{size:"sm",color:"subtle",style:{padding:"8px 0"},children:"Settings panel content"})})]})}),e.jsxs("div",{style:s,children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(c,{variant:"info",children:"Info"}),e.jsx(c,{variant:"success",children:"Success"}),e.jsx(c,{variant:"warning",children:"Warning"}),e.jsx(c,{variant:"danger",children:"Danger"}),e.jsx(c,{variant:"info",dot:!0,children:"With dot"})]}),e.jsx(V,{total:120,pageSize:10,page:v,onPageChange:g,size:"md",showInfo:!0})]})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...r,marginBottom:"16px",paddingLeft:"4px"},children:"Feedback & Overlay"}),e.jsxs("div",{style:S,children:[e.jsxs("div",{style:s,children:[e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(p,{content:"Top tooltip",placement:"top",children:e.jsx(t,{shape:"ghost",size:"md",children:"Top"})}),e.jsx(p,{content:"Bottom tooltip",placement:"bottom",children:e.jsx(t,{shape:"ghost",size:"md",children:"Bottom"})}),e.jsx(p,{content:"Left tooltip",placement:"left",children:e.jsx(t,{shape:"ghost",size:"md",children:"Left"})}),e.jsx(p,{content:"Right tooltip",placement:"right",children:e.jsx(t,{shape:"ghost",size:"md",children:"Right"})})]}),e.jsx(w,{}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(ne,{}),e.jsx(Y,{size:"md"}),e.jsx(K,{width:"120px",height:"24px",borderRadius:"4px"})]})]}),e.jsxs("div",{style:s,children:[e.jsx(l,{size:"sm",weight:"medium",children:"Toast Notifications"}),e.jsx(le,{}),e.jsx(w,{}),e.jsxs("div",{style:{padding:"20px",border:"1px dashed var(--color-border-subtle)",borderRadius:"8px",textAlign:"center",cursor:"context-menu"},onContextMenu:o=>{o.preventDefault(),I({x:o.clientX,y:o.clientY})},children:[e.jsx(l,{size:"sm",color:"subtle",children:"Right-click for context menu"}),e.jsx(A,{position:O,items:ee,onClose:()=>I(null)})]})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...r,marginBottom:"16px",paddingLeft:"4px"},children:"Usage Example"}),e.jsxs("div",{style:{...s,maxWidth:"480px"},children:[e.jsx(d,{level:"4",children:"User Settings"}),e.jsx(ae,{})]})]})]})})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Showcase',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [tab, setTab] = useState('overview');
    const [page, setPage] = useState(1);
    const [slider, setSlider] = useState(65);
    const [date, setDate] = useState<string | null>(null);
    const [multi, setMulti] = useState<string[]>(['revenue', 'profit']);
    const [segment, setSegment] = useState('monthly');
    const [menuPos, setMenuPos] = useState<{
      x: number;
      y: number;
    } | null>(null);
    return <ToastProvider position="top-right">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
          {/* Hero */}
          <div>
            <Heading level="2" weight="bold" style={{
            marginBottom: '8px'
          }}>
              Mercurium UI System
            </Heading>
            <Text size="md" color="subtle" style={{
            lineHeight: '1.7'
          }}>
              FSM-based, token-driven design system for React. Full light/dark theming,
              3 size scales (sm/md/lg), and accessible interaction states.
            </Text>
          </div>

          {/* Typography */}
          <div style={CARD}>
            <div style={CARD_TITLE}>Typography</div>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
              <Heading level="1">Heading 1</Heading>
              <Heading level="2">Heading 2</Heading>
              <Heading level="3">Heading 3</Heading>
              <Heading level="4">Heading 4</Heading>
            </div>
            <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            alignItems: 'baseline'
          }}>
              <Text size="lg">Text lg</Text>
              <Text size="md">Text md</Text>
              <Text size="sm" color="subtle">
                Text sm subtle
              </Text>
              <Code variant="soft" size="sm">
                const x = 42
              </Code>
              <Code variant="outline" size="sm">
                npm install
              </Code>
            </div>
          </div>

          {/* Buttons & Actions */}
          <div style={CARD}>
            <div style={CARD_TITLE}>Buttons & Actions</div>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
              <div style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
                <Button intent="primary" size="md">
                  Primary
                </Button>
                <Button intent="default" size="md">
                  Default
                </Button>
                <Button intent="danger" size="md">
                  Danger
                </Button>
                <Button intent="warning" size="md">
                  Warning
                </Button>
                <Button intent="info" size="md">
                  Info
                </Button>
              </div>
              <div style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
                <Button shape="outline" size="md">
                  Outline
                </Button>
                <Button shape="ghost" size="md">
                  Ghost
                </Button>
                <Button shape="soft" size="md">
                  Soft
                </Button>
                <Button size="md" loading>
                  Loading
                </Button>
                <Button size="md" disabled>
                  Disabled
                </Button>
              </div>
              <Divider />
              <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
                <SegmentedControl items={[{
                value: 'daily',
                label: 'Daily'
              }, {
                value: 'weekly',
                label: 'Weekly'
              }, {
                value: 'monthly',
                label: 'Monthly'
              }]} value={segment} onChange={setSegment} size="md" />
                <Menu items={menuItems} value={undefined} onSelect={() => {}} trigger="Actions" size="md" />
              </div>
            </div>
          </div>

          {/* Form Controls */}
          <div>
            <div style={{
            ...CARD_TITLE,
            marginBottom: '16px',
            paddingLeft: '4px'
          }}>
              Form Controls
            </div>
            <div style={GRID_2}>
              <div style={CARD}>
                <Input label="Email" placeholder="name@example.com" size="md" />
                <Input label="Password" type="password" placeholder="Enter password" size="md" hint="At least 8 characters" />
                <Input label="Error" defaultValue="invalid" size="md" errorMessage="This field is required" />
              </div>

              <div style={CARD}>
                <Select label="Fruit" options={fruitOptions} value={null} onChange={() => {}} placeholder="Choose one" size="md" />
                <MultiSelect options={columnOptions} values={multi} onChange={v => setMulti(v)} placeholder="Select columns" size="md" />
                <DateTimePicker label="Date" mode="date" value={date} onChange={v => setDate(v)} valueFormat="iso-8601" size="md" />
                <DateTimePicker label="Date & Time" mode="datetime" valueFormat="iso-8601" size="md" />
              </div>

              <div style={CARD}>
                <div style={{
                display: 'flex',
                gap: '24px',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                  <Switch label="Active" defaultChecked size="md" />
                  <Switch label="Disabled" disabled size="md" />
                </div>
                <div style={{
                display: 'flex',
                gap: '24px',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                  <Checkbox label="Terms agreed" defaultChecked size="md" />
                  <Checkbox label="Newsletter" size="md" />
                  <Checkbox label="Disabled" disabled size="md" />
                </div>
                <div style={{
                display: 'flex',
                gap: '24px',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                  <Radio name="showcase-radio" label="Option A" value="a" defaultChecked size="md" />
                  <Radio name="showcase-radio" label="Option B" value="b" size="md" />
                  <Radio name="showcase-radio" label="Option C" value="c" disabled size="md" />
                </div>
              </div>

              <div style={CARD}>
                <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                  <Text size="sm" color="subtle">
                    Opacity
                  </Text>
                  <Slider value={slider} onValueChange={setSlider} min={0} max={100} size="md" />
                </div>
                <div style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'center'
              }}>
                  <ColorPicker value="#3b82f6" onValueChange={() => {}} size="md" showLabel />
                  <ColorPicker value="#ef4444" onValueChange={() => {}} size="md" showLabel />
                  <ColorPicker value="#22c55e80" onValueChange={() => {}} size="md" showLabel alpha />
                </div>
              </div>
            </div>
          </div>

          {/* Data Display */}
          <div>
            <div style={{
            ...CARD_TITLE,
            marginBottom: '16px',
            paddingLeft: '4px'
          }}>
              Data Display
            </div>
            <div style={GRID_2}>
              <div style={CARD}>
                <Table data={tableData} columns={tableColumns} size="md" />
              </div>

              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
                <div style={CARD}>
                  <Tabs value={tab} onChange={v => setTab(v)}>
                    <TabList>
                      <Tab value="overview">Overview</Tab>
                      <Tab value="analytics">Analytics</Tab>
                      <Tab value="settings">Settings</Tab>
                    </TabList>
                    <TabPanel value="overview">
                      <Text size="sm" color="subtle" style={{
                      padding: '8px 0'
                    }}>
                        Dashboard overview content
                      </Text>
                    </TabPanel>
                    <TabPanel value="analytics">
                      <Text size="sm" color="subtle" style={{
                      padding: '8px 0'
                    }}>
                        Analytics details here
                      </Text>
                    </TabPanel>
                    <TabPanel value="settings">
                      <Text size="sm" color="subtle" style={{
                      padding: '8px 0'
                    }}>
                        Settings panel content
                      </Text>
                    </TabPanel>
                  </Tabs>
                </div>
                <div style={CARD}>
                  <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  alignItems: 'center'
                }}>
                    <Badge variant="info">Info</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Badge variant="info" dot>
                      With dot
                    </Badge>
                  </div>
                  <Pagination total={120} pageSize={10} page={page} onPageChange={setPage} size="md" showInfo />
                </div>
              </div>
            </div>
          </div>

          {/* Feedback & Overlay */}
          <div>
            <div style={{
            ...CARD_TITLE,
            marginBottom: '16px',
            paddingLeft: '4px'
          }}>
              Feedback & Overlay
            </div>
            <div style={GRID_2}>
              <div style={CARD}>
                <div style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                  <Tooltip content="Top tooltip" placement="top">
                    <Button shape="ghost" size="md">
                      Top
                    </Button>
                  </Tooltip>
                  <Tooltip content="Bottom tooltip" placement="bottom">
                    <Button shape="ghost" size="md">
                      Bottom
                    </Button>
                  </Tooltip>
                  <Tooltip content="Left tooltip" placement="left">
                    <Button shape="ghost" size="md">
                      Left
                    </Button>
                  </Tooltip>
                  <Tooltip content="Right tooltip" placement="right">
                    <Button shape="ghost" size="md">
                      Right
                    </Button>
                  </Tooltip>
                </div>
                <Divider />
                <div style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center'
              }}>
                  <ShowcaseModal />
                  <Spinner size="md" />
                  <Skeleton width="120px" height="24px" borderRadius="4px" />
                </div>
              </div>
              <div style={CARD}>
                <Text size="sm" weight="medium">
                  Toast Notifications
                </Text>
                <ShowcaseToastButtons />
                <Divider />
                <div style={{
                padding: '20px',
                border: '1px dashed var(--color-border-subtle)',
                borderRadius: '8px',
                textAlign: 'center',
                cursor: 'context-menu'
              }} onContextMenu={e => {
                e.preventDefault();
                setMenuPos({
                  x: e.clientX,
                  y: e.clientY
                });
              }}>
                  <Text size="sm" color="subtle">
                    Right-click for context menu
                  </Text>
                  <Menu position={menuPos} items={contextMenuItems} onClose={() => setMenuPos(null)} />
                </div>
              </div>
            </div>
          </div>

          {/* Usage Example */}
          <div>
            <div style={{
            ...CARD_TITLE,
            marginBottom: '16px',
            paddingLeft: '4px'
          }}>
              Usage Example
            </div>
            <div style={{
            ...CARD,
            maxWidth: '480px'
          }}>
              <Heading level="4">User Settings</Heading>
              <ShowcaseFormCard />
            </div>
          </div>
        </div>
      </ToastProvider>;
  }
}`,...x.parameters?.docs?.source}}};const Ge=["Showcase"];export{x as Showcase,Ge as __namedExportsOrder,Ve as default};
