(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6468)}])},6468:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var l=n(5893),r=n(7294),s=n(9979),a=n(7632),i=n(4440),o=n(4246),d=n(6624),c=n(1422),u=n(6374),h=n(6479),x=n(6166),j=n(8163),Z=n(9360),p=n(3320),f=n(1344),m=e=>{let{history:t}=e;return(0,l.jsx)(l.Fragment,{children:t.length>0&&(0,l.jsx)(s.Z,{sx:{maxWidth:"600px",position:"fixed",left:"50%",transform:"translate(-50%, 0)",zIndex:"999"},children:t[0].won?(0,l.jsx)(p.Z,{sx:{color:"#fff"},variant:"filled",severity:"success",children:"You won"}):(0,l.jsxs)(p.Z,{variant:"filled",severity:"error",children:[(0,l.jsx)(f.Z,{children:"You lost"}),"Number was higher"]})})})},v=n(6932),g=n(4934),b=n(5963),y=n(4223),w=n(7245),_=n(5687),S=e=>{let{history:t}=e,n=(0,Z.Z)();return(0,l.jsx)(l.Fragment,{children:t.length>0&&(0,l.jsx)(v.Z,{style:{maxWidth:"550px",margin:"0 auto"},children:(0,l.jsxs)(g.Z,{children:[(0,l.jsx)(b.Z,{children:(0,l.jsxs)(y.Z,{children:[(0,l.jsx)(w.Z,{sx:{fontWeight:"bold"},children:"Time"}),(0,l.jsx)(w.Z,{sx:{fontWeight:"bold"},children:"Guess"}),(0,l.jsx)(w.Z,{sx:{fontWeight:"bold"},children:"Result"})]})}),(0,l.jsx)(_.Z,{children:t.map(e=>(0,l.jsxs)(y.Z,{children:[(0,l.jsx)(w.Z,{children:e.time}),(0,l.jsxs)(w.Z,{children:["over"===e.condition?"Over":"Under"," ",e.threshold]}),(0,l.jsx)(w.Z,{style:{color:e.won?n.palette.success.main:n.palette.danger.main},children:e.result})]},e.id))})]})})})},k=()=>{let e=(0,Z.Z)(),[t,n]=(0,r.useState)(50),[p,f]=(0,r.useState)("over"),[v,g]=(0,r.useState)(0),[b,y]=(0,r.useState)([]),w=()=>{let e=new Date,t=String(e.getHours()).padStart(2,"0"),n=String(e.getMinutes()).padStart(2,"0"),l=String(e.getSeconds()).padStart(2,"0");return"".concat(t,":").concat(n,":").concat(l)},_=e=>"over"===p?e>t:e<t;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{history:b}),(0,l.jsxs)(s.Z,{style:{paddingTop:"90px",maxWidth:"300px"},children:[(0,l.jsx)(i.Z,{style:{position:"relative",minHeight:"200px",backgroundColor:e.palette.background.default},children:null!==v&&(0,l.jsx)(o.Z,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},variant:"h1",children:v})}),(0,l.jsxs)(d.Z,{component:"fieldset",fullWidth:!0,children:[(0,l.jsx)(i.Z,{style:{display:"flex",justifyContent:"center"},children:(0,l.jsxs)(c.Z,{row:!0,value:p,onChange:e=>f(e.target.value),children:[(0,l.jsx)(u.Z,{labelPlacement:"start",value:"under",control:(0,l.jsx)(h.Z,{}),label:"Under"}),(0,l.jsx)(u.Z,{labelPlacement:"start",value:"over",control:(0,l.jsx)(h.Z,{}),label:"Over"})]})}),(0,l.jsx)(x.ZP,{value:t,onChange:(e,t)=>n(t),"aria-labelledby":"input-slider",valueLabelDisplay:"auto",step:1,marks:[{value:0,label:"0"},{value:20},{value:40},{value:60},{value:80},{value:100,label:"100"}],min:0,max:100}),(0,l.jsx)(j.Z,{variant:"contained",style:{backgroundColor:e.palette.primary.main},onClick:()=>{let e=Math.floor(100*Math.random())+1,n={id:(0,a.Z)(),condition:p,threshold:t,time:w(),result:e,won:_(e)};g(e),y([n,...b].slice(0,10))},children:"Play"})]})]}),(0,l.jsx)(S,{history:b})]})},C=()=>(0,l.jsx)(s.Z,{children:(0,l.jsx)(k,{})})}},function(e){e.O(0,[264,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);