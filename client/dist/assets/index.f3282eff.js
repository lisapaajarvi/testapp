var je=Object.defineProperty;var pe=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var he=(t,n,a)=>n in t?je(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,T=(t,n)=>{for(var a in n||(n={}))Oe.call(n,a)&&he(t,a,n[a]);if(pe)for(var a of pe(n))_e.call(n,a)&&he(t,a,n[a]);return t};import{s as r,j as o,a as e,L as M,u as Ne,b as We,c as G,r as u,A as ze,O as me,d as k,e as Y,f as S,F,T as f,g as A,h as j,i as Re,k as O,l as Ie,m as Ve,n as Ue,o as He,p as Ge,M as _,q as ge,t as Ye,v as Je,w as Ke,x as qe,B as N,C as Xe,y as ae,I as fe,z as Qe,D as re,E as Ze,G as et,H as tt,J as L,K as xe,N as J,P as nt,Q as be,R as at,S as rt,U as ot,V as it,W as st,X as lt,Y as dt,Z as ct,_ as ye,$ as K,a0 as ut,a1 as pt,a2 as P,a3 as ht,a4 as mt,a5 as gt,a6 as ft,a7 as xt,a8 as bt}from"./vendor.64b9f02d.js";const yt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function a(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerpolicy&&(d.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?d.credentials="include":i.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(i){if(i.ep)return;i.ep=!0;const d=a(i);fetch(i.href,d)}};yt();var oe="/assets/grass-1440.95f273d2.jpg",ie="/assets/logo.0990644d.png";const q=r.div`
width: 250px;
height: 50px;
background: linear-gradient(275.76deg, #6AB04C 44.33%, #BADC58 98.56%);
border-radius: 10px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
color: white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

margin: 1rem;
transition: all 0.3s;

&:hover {
  filter: brightness(0.9);
}
`,X=r.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 250px;
  height: 50px;
  box-sizing: border-box;
  background: linear-gradient(45deg, rgb(255, 255, 255), rgb(255, 255, 255))
      padding-box,
    linear-gradient(45deg, rgb(106, 176, 76), rgb(186, 220, 88)) border-box;
  border-radius: 10px;
  border: 2px solid transparent;
  color: #6ab04c;

  margin: 1rem;

  &:hover {
    color: white;
    background: linear-gradient(275.76deg, #6AB04C 44.33%, #BADC58 98.56%);
    border: none;
  }
`,C=r.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  box-sizing: border-box;
  background: linear-gradient(45deg, rgb(255, 255, 255), rgb(255, 255, 255))
      padding-box,
    linear-gradient(45deg, rgb(106, 176, 76), rgb(186, 220, 88)) border-box;
  border-radius: 10px;
  border: 2px solid transparent;
  color: #6ab04c;

  margin: 1rem;

  &:hover {
    color: white;
    background: linear-gradient(275.76deg, #6AB04C 44.33%, #BADC58 98.56%);
    border: none;
  }
`,W=r.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 25rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  justify-content: center;
  align-items: center;
`,z=r.p`
  font-size: 28px;
  color: #000000;
  margin: 3rem 0 1rem 0;
`,R=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 4rem 0;
`,I=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`,vt=r.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(${oe});
  background-size: cover;
  background-position: bottom center;
`,wt=r.div`
  display: flex;
  flex: 1;
  justify-content: center;
  // width: 100%;
  align-items: center;
`,Ct=r.div`
  display: flex;
  flex: 1;
  justify-content: center;
  // width: 100%;
  align-items: center;
`,kt=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 40rem;
  background-color: white;
  border: 0.3rem solid #6ab04c;
  border-radius: 1rem;
  padding: 1rem;
`,ve=r.h2`
  color: #6ab04c;
  margin: 1rem;
`,St=()=>o(vt,{children:[e(wt,{children:e("img",{src:ie,alt:"Logo",height:"300px"})}),e(Ct,{children:o(kt,{children:[e(ve,{children:"Med spira kan du:"}),o("ul",{children:[e("li",{children:"f\xE5 en \xF6versikt \xF6ver dina odlingsytor"}),e("li",{children:"spara dina gr\xF6dor i en databas"}),e("li",{children:"planera s\xE5dd, plantering och sk\xF6rd av alla gr\xF6dor i en odlingsplanering"}),e("li",{children:"f\xE5 ordning p\xE5 dina arbetsuppgifter i odlingen i en att g\xF6ra-lista"}),e("li",{children:"dokumentera dina arbetsmoment"}),e("li",{children:"f\xE5 utf\xF6rlig statistik \xF6ver din odling"})]}),e(ve,{children:"Visst l\xE5ter det underbart?"}),e(M,{to:"/signup",children:e(X,{children:"Registrera dig h\xE4r!"})})]})})]}),$=()=>We(),y=Ne,Dt=r.div`
  display: flex;
  height: 100vh;
  background-image: url(${oe});
  background-size: cover;
  background-position: bottom center;
`,Et=r.div`
  max-width: 87rem;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
`,Mt=r.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: center;
`,$t=r.p`
  font-size: 28px;
  color: white;
  margin: 2rem;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
`,Bt=r.div`
  display: flex;
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: center;
`,Pt=()=>(y(t=>t.user.user),$(),G(),u.exports.useEffect(()=>{ze.init({duration:1500})},[]),e(Dt,{children:o(Et,{children:[o(Mt,{children:[e("div",{"data-aos":"fade-in","data-aos-duration":"3000",children:e("img",{src:ie,alt:"Logo",height:"300px"})}),e("div",{"data-aos":"fade-in","data-aos-delay":"500",children:e($t,{children:"F\xE5r din odling att spira"})}),e("div",{"data-aos":"fade-in","data-aos-delay":"800",children:e(M,{to:"/about",children:e(q,{children:"L\xE4r dig mer"})})})]}),e(Bt,{children:e("div",{"data-aos":"zoom-in","data-aos-delay":"300","data-aos-duration":"1200",children:e(me,{})})})]})})),Q=k("users/fetchUser",async()=>(await S.get("/api/users/auth")).data),we=k("users/login",async t=>(await S.post("/api/users/login",t)).data),Ce=k("users/signup",async t=>(await S.post("/api/users/register",t)).data),ke=k("users/changeSettings",async t=>(await S.put("/api/users/settings",t)).data),Se=k("users/logout",async()=>(await S.post("/api/users/logout")).data),Tt={user:{username:"",email:""},status:"idle",error:null},Ft=Y({name:"user",initialState:Tt,reducers:{changeUserToMarsvin:t=>{t.user.username="marsvin",t.user.email="marsvin@marsvin.nu"}},extraReducers:t=>{t.addCase(Q.pending,(n,a)=>{n.status="loading"}).addCase(Q.fulfilled,(n,a)=>{n.user.email=a.payload.email,n.user.username=a.payload.username,n.status="succeeded"}).addCase(Q.rejected,(n,a)=>{n.status="failed"}).addCase(Ce.fulfilled,(n,a)=>{n.user.email=a.payload.email,n.user.username=a.payload.username}).addCase(we.fulfilled,(n,a)=>{n.user.email=a.payload.email,n.user.username=a.payload.username}).addCase(ke.fulfilled,(n,a)=>{n.user.username=a.payload.username}).addCase(Se.fulfilled,(n,a)=>{n.user.username="",n.user.email=""})}});var Lt=Ft.reducer;const At=r.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 25rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  justify-content: center;
  align-items: center;
`,jt=r.p`
  font-size: 28px;
  color: #000000;
  margin: 3rem 0 1rem 0;
`,Ot=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 4rem 0;
`,_t=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`,Nt=()=>{const[t,n]=u.exports.useState(""),[a,s]=u.exports.useState("");y(p=>p.user),y(p=>p.user.status);const i=$(),d=G();return e(F,{children:o(At,{children:[e(jt,{children:"Logga in"}),o(Ot,{children:[e(f,{margin:"normal",id:"email",label:"E-mail",type:"text",onChange:p=>{s(p.target.value)},fullWidth:!0}),e(f,{margin:"normal",id:"password",label:"L\xF6senord",type:"password",onChange:p=>{n(p.target.value)},defaultValue:"",fullWidth:!0})]}),o(_t,{children:[e(M,{to:"/signup",children:e(C,{children:"Registrera"})}),e(C,{onClick:async()=>{await i(we({email:a,password:t})),n(""),s(""),d("/home")},children:"Logga in"})]})]})})},Wt=r.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 25rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  justify-content: center;
  align-items: center;
`,zt=r.p`
  font-size: 28px;
  color: #000000;
  margin: 3rem 0 1rem 0;
`,Rt=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 4rem 0;
`,It=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`,Vt=()=>{const[t,n]=u.exports.useState(""),[a,s]=u.exports.useState(""),[i,d]=u.exports.useState(""),[m,h]=u.exports.useState("");y(c=>c.user);const x=$(),p=G();return e(F,{children:o(Wt,{children:[e(zt,{children:"Registrera"}),o(Rt,{children:[e(f,{margin:"normal",id:"username",label:"Namn",type:"text",onChange:c=>{n(c.target.value)},value:t,fullWidth:!0}),e(f,{margin:"normal",id:"email",label:"E-mail",type:"text",onChange:c=>{h(c.target.value)},value:m,fullWidth:!0}),e(f,{margin:"normal",id:"password",label:"L\xF6senord",type:"password",onChange:c=>{s(c.target.value)},value:a,fullWidth:!0}),e(f,{margin:"normal",id:"confirmpassword",label:"Bekr\xE4fta l\xF6senord",type:"password",onChange:c=>{d(c.target.value)},value:i,fullWidth:!0})]}),o(It,{children:[e(M,{to:"/",children:e(C,{children:"Tillbaka"})}),e(C,{onClick:async()=>{a===i?(await x(Ce({username:t,email:m,password:a})),n(""),h(""),s(""),d(""),p("/welcome")):alert("INTE SAMMA L\xD6SEN")},children:"Registrera"})]})]})})},V={textDecoration:"none",color:"white"},Ut=o("div",{children:[e(M,{to:"/home",style:V,children:o(A,{button:!0,children:[e(j,{children:e(Re,{style:{color:"white"}})}),e(O,{primary:"\xD6versikt"})]})}),e(M,{to:"/plan",style:V,children:o(A,{button:!0,children:[e(j,{children:e(Ie,{style:{color:"white"}})}),e(O,{primary:"Odlingsplanering"})]})}),e(M,{to:"/tasks",style:V,children:o(A,{button:!0,children:[e(j,{children:e(Ve,{style:{color:"white"}})}),e(O,{primary:"Att g\xF6ra"})]})}),e(M,{to:"/home",style:V,children:o(A,{button:!0,children:[e(j,{children:e(Ue,{style:{color:"white"}})}),e(O,{primary:"Mina gr\xF6dor"})]})}),e(M,{to:"/home",style:V,children:o(A,{button:!0,children:[e(j,{children:e(He,{style:{color:"white"}})}),e(O,{primary:"Kalender"})]})}),e(M,{to:"/home",style:V,children:o(A,{button:!0,children:[e(j,{children:e(Ge,{style:{color:"white"}})}),e(O,{primary:"Statistik"})]})})]}),Ht=r(W)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  box-shadow: 24px;
  p: 4px;
  border-radius: 1rem;
`,De=r.p`
  font-family: "Lora", serif;
  font-size: 1rem;
  font-weight: 600;
`,Gt=r(I)`
  margin-bottom: 0rem;
`,Ee=r.div`
  margin: 1rem 0;
`,Yt=({openProfileModal:t,handleCloseProfileModal:n})=>{const a=$(),s=y(b=>b.user.user);y(b=>b.user.status);const[i,d]=u.exports.useState(s.username),[m,h]=u.exports.useState(""),[x,p]=u.exports.useState("");return e("div",{children:e(_,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:o(Ht,{children:[e(z,{children:"Inst\xE4llningar"}),o(R,{children:[e(De,{children:"\xC4ndra anv\xE4ndarnamn"}),e(f,{margin:"normal",id:"username",label:"Namn",type:"text",onChange:b=>{d(b.target.value)},value:i}),e(Ee,{}),e(De,{children:"\xC4ndra l\xF6senord"}),e(f,{margin:"normal",id:"oldpassword",label:"Nuvarande l\xF6senord",type:"password",onChange:b=>{h(b.target.value)},defaultValue:""}),e(f,{margin:"normal",id:"newpassword",label:"Nytt l\xF6senord",type:"password",onChange:b=>{p(b.target.value)},defaultValue:""}),e(Ee,{}),o(Gt,{children:[e(C,{onClick:n,children:"Tillbaka"}),e(C,{onClick:()=>{const b={username:i,oldPassword:m,newPassword:x,email:s.email};a(ke(b)),n(),h(""),p("")},children:"Spara"})]})]})]})})})},se=k("plots/getPlots",async()=>(await S.get("/api/plots")).data),Z=k("plots/add",async t=>(await S.post("/api/plots/add",t)).data),Jt={plots:[]},Kt=Y({name:"plots",initialState:Jt,reducers:{},extraReducers:t=>{t.addCase(se.fulfilled,(n,a)=>{n.plots=a.payload}).addCase(Z.fulfilled,(n,a)=>{n.plots.push(a.payload)})}});var qt=Kt.reducer;const ee=k("cultivations/getCultivations",async()=>(await S.get("/api/cultivations")).data),Me=k("cultivations/addCultivation",async t=>(await S.post("/api/cultivations/add",t)).data),Xt=k("cultivations/editCultivation",async t=>{await S.put("/api/cultivations/edit",t).then,await ee()}),Qt={cultivations:[]},Zt=Y({name:"cultivations",initialState:Qt,reducers:{},extraReducers:t=>{t.addCase(ee.fulfilled,(n,a)=>{n.cultivations=a.payload}).addCase(Me.fulfilled,(n,a)=>{n.cultivations.push(a.payload)})}});var en=Zt.reducer;const te=k("tasks/getTasks",async()=>(await S.get("/api/tasks")).data),tn=k("tasks/addTask",async t=>(await S.post("/api/tasks/add",t)).data);k("tasks/editTask",async t=>{await S.put("/api/tasks/"+t._id.toString(),t).then,await te()});k("tasks/deleteTask",async t=>{await S.delete("/api/tasks/"+t._id.toString()).then,await te()});const nn={tasks:[]},an=Y({name:"tasks",initialState:nn,reducers:{},extraReducers:t=>{t.addCase(te.fulfilled,(n,a)=>{n.tasks=a.payload}).addCase(tn.fulfilled,(n,a)=>{n.tasks.push(a.payload)})}});var rn=an.reducer;const le=240,on=ge(Ye,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:n})=>T({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{marginLeft:le,width:`calc(100% - ${le}px)`,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})),sn=ge(Je,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:n})=>({"& .MuiDrawer-paper":T({position:"relative",whiteSpace:"nowrap",width:le,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),boxSizing:"border-box"},!n&&{overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7),[t.breakpoints.up("sm")]:{width:t.spacing(9)}})})),ln=Ke(),de=()=>{const{tasks:t}=y(g=>g.tasks);console.log(t);const n=y(g=>g.user.status),a=y(g=>g.user.user),s=$(),i=G(),[d,m]=u.exports.useState(!0),[h,x]=u.exports.useState(null),[p,w]=u.exports.useState(!1),D=()=>{w(!0),v()},E=()=>w(!1),B=()=>{v(),s(Se()),i("/")},b=Boolean(h),c=g=>{x(g.currentTarget)},v=()=>{x(null)},l=()=>{m(!d)};return u.exports.useEffect(()=>{n==="idle"&&(s(Q()),s(se()),s(ee()),s(te()))},[n,s]),console.log(a),e(F,{children:e(qe,{theme:ln,children:o(N,{sx:{display:"flex"},children:[e(Xe,{}),e(on,{position:"absolute",open:d,children:o(ae,{sx:{pr:"24px",background:"radial-gradient(circle, rgba(43,145,60,1) 0%, rgba(30,93,32,1) 100%)",opacity:"1.0",backgroundColor:"#357a38"},children:[e(fe,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:l,sx:T({marginRight:"36px"},d&&{display:"none"}),children:e(Qe,{})}),e(re,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:e(re,{fontFamily:"'Lora', Serif"})}),o("div",{children:[e(Yt,{openProfileModal:p,handleCloseProfileModal:E}),o(Ze,{id:"basic-button","aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":b?"true":void 0,onClick:c,style:{color:"white"},children:[e(re,{fontFamily:"'Lora', Serif",margin:2,children:a.username}),e(et,{fontSize:"large"})]}),o(tt,{id:"basic-menu",anchorEl:h,open:b,onClose:v,MenuListProps:{"aria-labelledby":"basic-button"},children:[o(L,{onClick:D,children:[e(xe,{fontSize:"small",sx:{color:J[500],marginRight:1}}),"Inst\xE4llningar"]}),o(L,{onClick:B,children:[e(nt,{fontSize:"small",sx:{color:J[500],marginRight:1}}),"Logga ut"]})]})]})]})}),e(sn,{variant:"permanent",open:d,children:o("div",{style:{height:"100%",background:"radial-gradient(circle, rgba(43,145,60,1) 0%, rgba(30,93,32,1) 100%)"},children:[e(ae,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:e(fe,{onClick:l,children:e(be,{style:{color:"white"}})})}),e(at,{}),e(rt,{children:Ut})]})}),o(N,{component:"main",sx:{backgroundColor:g=>g.palette.mode==="light"?g.palette.grey[100]:g.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[e(ae,{}),e(me,{})]})]})})})};function dn({children:t}){return y(a=>a.user.user)?t:e(ot,{to:"/"})}const cn=r.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(${oe});
  background-size: cover;
  background-position: bottom center;
`,un=r.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`,pn=r.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`,hn=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 40rem;
  background-color: white;
  border: 0.3rem solid #6ab04c;
  border-radius: 1rem;
  padding: 1rem;
`,mn=r.h2`
  color: #6ab04c;
  margin: 1rem;
`,gn=()=>{const t=y(a=>a.user.user),n=$();return u.exports.useEffect(()=>{n(se()),n(ee())},[n]),o(cn,{children:[e(un,{children:e("img",{src:ie,alt:"Logo",height:"300px"})}),e(pn,{children:o(hn,{children:[o(mn,{children:["V\xE4lkommen till Spira, ",t.username,"!"]}),e("p",{children:"Registreringen \xE4r slutf\xF6rd, och du kan nu g\xE5 vidare och skapa dina odlingar."}),e("p",{children:"Vi hoppas att du ska trivas h\xE4r, och m\xE5 dina odlingar spira!"}),e("br",{}),e("p",{children:"/ Spira-teamet"}),e(M,{to:"/home",children:e(X,{children:"G\xE5 vidare"})})]})})]})},fn=r(W)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  box-shadow: 24px;
  p: 4px;
  border-radius: 1rem;
`,xn=r.p`
  font-family: "Lora", serif;
  font-size: 1rem;
  font-weight: 600;
`,$e=r(I)`
  margin-bottom: 0rem;
`,Be=r.div`
  margin: 1rem 0;
`,bn=r(q)`
  filter: hue-rotate(270deg);
  box-shadow: none;

  &:hover {
    filter: hue-rotate(270deg) brightness(1.2);
  }
`,yn=({openModal:t,handleCloseModal:n})=>{const[a,s]=u.exports.useState("");return e("div",{children:e(_,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:o(fn,{children:[e(z,{children:"Inst\xE4llningar"}),o(R,{children:[e(xn,{children:"Namn"}),e(f,{margin:"normal",id:"username",label:"Namn",type:"text",onChange:m=>{s(m.target.value)},value:a}),e(Be,{}),e($e,{children:e(bn,{children:"Ta bort"})}),e(Be,{}),o($e,{children:[e(C,{onClick:n,children:"Tillbaka"}),e(C,{onClick:()=>{},children:"Spara"})]})]})]})})})},vn=r.div`
  height: calc(100% - 4rem);
  background-color: #fffdfd;
  display: flex;
  flex-direction: column;
`,wn=r.div`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  padding: 0 3rem;
  width: 100%;
  align-items: center;
  height: 6rem;
`,ne=r.p`
  font-size: 24px;
  color: black;
  margin: 3rem;
`,Cn=()=>{const{plots:t}=y(h=>h.plots),n=it(),a=t.find(h=>h._id===n._id);$();const[s,i]=u.exports.useState(!1),d=()=>{i(!0)},m=()=>i(!1);return o(F,{children:[o(vn,{children:[o(wn,{children:[e(M,{to:"/home",children:e(be,{fontSize:"large",sx:{color:J[500],marginTop:3,cursor:"pointer"}})}),e(ne,{style:{fontWeight:600},children:a.name}),e(xe,{fontSize:"large",sx:{color:J[500],marginTop:3,cursor:"pointer"},onClick:d})]}),e(ne,{children:"Odlingsplanering"}),e(ne,{children:"Att g\xF6ra"}),e(ne,{children:"Anteckningar"})]}),e(yn,{openModal:s,handleCloseModal:m})]})};var kn="/assets/plant.47f4a2d6.png";const Sn=r.p`
  font-size: 18px;
  color: white;
`,Dn=({plot:t})=>{const n=`/home/${t._id}`;return e(F,{children:e(M,{to:n,children:e(st,{sx:{maxWidth:160},style:{margin:"1rem"},children:o(lt,{children:[e(dt,{component:"img",height:"150",image:kn,alt:t.name}),e(ct,{style:{background:"linear-gradient(60deg,#293822cc,#425c37cc)"},children:e(Sn,{children:t.name})})]})})})})},En=r(W)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  box-shadow: 24px;
  p: 4px;
  border-radius: 1rem;
`,Mn=r.p`
  font-family: "Lora", serif;
  font-size: 1rem;
  font-weight: 600;
`,$n=r(I)`
  margin-bottom: 0rem;
`,Bn=r.div`
  margin: 1rem 0;
`,Pn=({openModal:t,handleCloseModal:n})=>{const[a,s]=u.exports.useState("");y(h=>h.plots);const i=$();return e("div",{children:e(_,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:o(En,{children:[e(z,{children:"Skapa ny odling"}),o(R,{children:[e(Mn,{children:"Namn"}),e(f,{margin:"normal",id:"username",label:"Namn",type:"text",onChange:h=>{s(h.target.value)},value:a}),e(Bn,{}),o($n,{children:[e(C,{onClick:n,children:"Tillbaka"}),e(C,{onClick:()=>{i(Z({name:a})),s(""),n()},children:"Skapa"})]})]})]})})})},Tn=r.div`
  height: calc(100% - 4rem);
  background-color: #fffdfd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`,Fn=r.div`
  display: flex;
  flex-wrap: wrap;
`,Ln=r(X)`
  /* background-color: #425c37; */
  background: darkgreen;
  box-shadow: none;
  color: white;

  &:hover {
    background: green;
  }
`,An=()=>{const[t,n]=ye.useState(!1),a=()=>{n(!0)},s=()=>n(!1),{plots:i}=y(d=>d.plots);return $(),o(F,{children:[o(Tn,{children:[i?e(Fn,{children:i.map((d,m)=>e(Dn,{plot:d},m))}):null,e(Ln,{onClick:a,children:"Skapa ny odling"})]}),e(Pn,{openModal:t,handleCloseModal:s})]})},Pe=2022,jn=1,ce=12,On=["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],Te=["FF005D","0085B6","0BB4C1","00D49D","FEDF03","233D4D","FE7F2D","FCCA46","A1C181","579C87"],_n=()=>Te[Math.floor(Math.random()*Te.length)],Nn=()=>{const t=[];for(let n=0;n<ce*jn;n+=1){const a=n,s=Fe(Pe,a),i=Fe(Pe,a+1);t.push({id:`m${a}`,title:On[n%12],start:s,end:i})}return t},Wn=()=>[{id:"months",title:"M\xE5nad",cells:Nn(),useAsGrid:!0,style:{}}],zn=t=>({id:t._id,title:t.name,elements:Rn(t),tracks:[],isOpen:!1,hasButton:!1}),Rn=t=>{const{cultivations:n}=y(i=>i.cultivations),a=n.filter(i=>i.plot===t._id);let s=[];return a.forEach(function(i){const d=In(i);s.push(d)}),s},In=({_id:t,crop:n,startDate:a,finishDate:s})=>{const i=_n(),d="#000000";return{id:t,title:n,start:new Date(a),end:new Date(s),style:{backgroundColor:`#${i}`,color:d,borderRadius:"4px",boxShadow:"1px 1px 0px rgba(0, 0, 0, 0.25)",textTransform:"capitalize"}}},Vn=(t,n)=>{let a=t,s=n;for(;s>=ce;)s-=ce,a+=1;return{year:a,month:s+1}},Fe=(t,n)=>{const a=Vn(t,n);return new Date(`${a.year}-${a.month}`)};const Un=r(W)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  box-shadow: 24px;
  p: 4px;
  border-radius: 1rem;
`;r.p`
  font-family: "Lora", serif;
  font-size: 1rem;
  font-weight: 600;
`;const Le=r(I)`
  margin-bottom: 0rem;
`,Ae=r.div`
  margin: 1rem 0;
`,Hn=r(q)`
  filter: hue-rotate(270deg);
  box-shadow: none;

  &:hover {
    filter: hue-rotate(270deg) brightness(1.2);
  }
`,Gn=({openModal:t,handleCloseModal:n,currentCultivation:a})=>{const[s,i]=u.exports.useState(new Date(a.startDate)),[d,m]=u.exports.useState(a.crop),[h,x]=u.exports.useState(a.days),[p,w]=u.exports.useState(a.plot),{plots:D}=y(g=>g.plots),E=$(),B=g=>{g!==null&&i(g)},b=g=>{m(g.target.value)},c=g=>{x(parseInt(g.target.value))},v=g=>{w(g.target.value)},l=()=>{let g=new Date(s),ue=new Date(s);ue.setDate(g.getDate()+h),E(Xt({plot:p,crop:d,startDate:g,finishDate:ue,days:h})),i(new Date),m(""),x(0),w(""),n()};return e("div",{children:e(_,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:o(Un,{children:[e(z,{children:a.crop}),o("p",{children:["Utvecklingstid: ",a.days," dagar"]}),e(R,{children:o(N,{component:"form",noValidate:!0,autoComplete:"off",style:{display:"flex",flexDirection:"column"},children:[e("div",{style:{width:"14rem"},children:e(f,{id:"plot",select:!0,label:"V\xE4lj odling",value:p,onChange:v,fullWidth:!0,children:D.map(g=>e(L,{value:g._id,children:g.name},g._id))})}),e(f,{id:"crop",label:"Gr\xF6da",value:d,type:"text",onChange:b}),e(K,{label:"S\xE5datum",value:s,onChange:B,renderInput:g=>e(f,T({},g))}),e(f,{id:"days",label:"Utvecklingstid",type:"text",value:h,onChange:c}),e(Ae,{}),e(Le,{children:e(Hn,{children:"Ta bort plantering"})}),e(Ae,{}),o(Le,{children:[e(C,{onClick:n,children:"Tillbaka"}),e(C,{onClick:l,children:"Spara"})]})]})})]})})})},Yn=()=>{const{plots:t}=y(c=>c.plots),{cultivations:n}=y(c=>c.cultivations),a=new Date(2021,12,1),s=new Date(2022,12,1),i=Wn(),[d,m]=u.exports.useState(!1),[h,x]=u.exports.useState(!1),[p,w]=u.exports.useState({_id:"",crop:"",startDate:new Date,finishDate:new Date,plot:"",days:0}),D=c=>{let v=n.find(l=>l._id===c.id);v&&(console.log(v._id),w(v),x(!0))},E=()=>x(!1);return o(F,{children:[e(ut,{scale:{start:a,end:s,zoom:3,zoomMin:2,zoomMax:3},isOpen:d,toggleOpen:()=>{m(!d),console.log("clicked")},clickElement:D,timebar:i,tracks:(()=>{const c=[];return t.forEach(function(v){const l=zn(v);c.push(l)}),c})(),enableSticky:!0,scrollToNow:!0}),e(Gn,{openModal:h,handleCloseModal:E,currentCultivation:p})]})},Jn=r.div`
  height: calc(100% - 4rem);
  background-color: #fffdfd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
`,Kn=r.div`
  margin: 1rem;
  border: 0.2rem solid green;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
`,qn=r.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  justify-content: space-between;
`,Xn=r(q)`
  cursor: pointer;
  box-shadow: none;
`,Qn=()=>{const{plots:t}=y(c=>c.plots);y(c=>c.cultivations);const n=$(),[a,s]=u.exports.useState(new Date),[i,d]=u.exports.useState(""),[m,h]=u.exports.useState(""),[x,p]=u.exports.useState(""),w=c=>{s(c)},D=c=>{d(c.target.value)},E=c=>{h(c.target.value)},B=c=>{p(c.target.value)},b=()=>{let c=new Date;a!==null&&(c=a);let v=new Date(c);v.setDate(c.getDate()+parseInt(m));const l={plot:x,crop:i,startDate:c,finishDate:v,days:parseInt(m)};n(Me(l)),s(new Date),d(""),h(""),p("")};return e(F,{children:o(Jn,{children:[e(Kn,{children:e(Yn,{})}),e(qn,{children:o(N,{component:"form",noValidate:!0,autoComplete:"off",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e("div",{style:{width:"14rem"},children:e(f,{id:"plot",select:!0,label:"V\xE4lj odling",value:x,onChange:B,fullWidth:!0,children:t.map(c=>e(L,{value:c._id,children:c.name},c._id))})}),e(f,{id:"crop",label:"Gr\xF6da",value:i,type:"text",onChange:D}),e(K,{label:"S\xE5datum",value:a,onChange:w,renderInput:c=>e(f,T({},c))}),e(f,{id:"days",label:"Utvecklingstid",type:"text",value:m,onChange:E}),e(Xn,{onClick:b,children:"L\xE4gg till plantering"})]})})]})})},Zn=r(W)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  box-shadow: 24px;
  p: 4px;
  border-radius: 1rem;
`,ea=r(R)`
  padding: 1rem;
`;r.p`
  font-family: "Lora", serif;
  font-size: 1rem;
  font-weight: 600;
`;const ta=r(I)`
  margin-bottom: 0rem;
`,U=r.div`
  margin: 1rem 0;
`,na=({openModal:t,handleCloseModal:n})=>{const[a,s]=u.exports.useState(new Date);u.exports.useState("");const[i,d]=u.exports.useState(""),[m,h]=u.exports.useState(""),[x,p]=u.exports.useState(""),{plots:w}=y(l=>l.plots),D=$(),E=()=>{D(Z({name:x})),p(""),n()},B=l=>{p(l.target.value)},b=l=>{s(l)},c=l=>{d(l.target.value)},v=l=>{h(l.target.value)};return e("div",{children:e(_,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:o(Zn,{children:[e(z,{children:"L\xE4gg till uppgift"}),e(ea,{children:o(N,{component:"form",noValidate:!0,autoComplete:"off",style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexDirection:"column",maxWidth:"320px",width:"14rem"},children:[e(f,{margin:"normal",id:"username",label:"Namn",type:"text",onChange:B,value:x,fullWidth:!0}),e(U,{}),e(f,{id:"plot",select:!0,label:"V\xE4lj odling",value:"",onChange:v,fullWidth:!0,children:w.map(l=>e(L,{value:l._id,children:l.name},l._id))}),e(U,{}),e(f,{id:"plot",select:!0,label:"V\xE4lj kategori",value:"",onChange:v,fullWidth:!0,children:w.map(l=>e(L,{value:l._id,children:l.name},l._id))}),e(U,{}),e(K,{label:"Datum",value:a,onChange:b,renderInput:l=>e(f,T({},l))}),e(U,{}),e(f,{id:"days",label:"Tids\xE5tg\xE5ng",type:"text",value:"",onChange:c,fullWidth:!0}),e(U,{}),o(ta,{children:[e(C,{onClick:n,children:"Tillbaka"}),e(C,{onClick:E,children:"Skapa"})]})]})})]})})})},aa=r.div`
  height: 10rem;
  width: 10rem;
  background-color: green;
  margin: 1rem;
`,ra=t=>o(aa,{children:[e("p",{children:t.task.plot}),e("p",{children:t.task.category}),e("p",{children:t.task.length}),e("p",{children:t.task.isDone})]}),oa=r(W)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  box-shadow: 24px;
  p: 4px;
  border-radius: 1rem;
`,ia=r(R)`
  padding: 1rem;
`;r.p`
  font-family: "Lora", serif;
  font-size: 1rem;
  font-weight: 600;
`;const sa=r(I)`
  margin-bottom: 0rem;
`,H=r.div`
  margin: 1rem 0;
`,la=({openModal:t,handleCloseModal:n})=>{const[a,s]=u.exports.useState(new Date);u.exports.useState("");const[i,d]=u.exports.useState(""),[m,h]=u.exports.useState(""),[x,p]=u.exports.useState(""),{plots:w}=y(l=>l.plots),D=$(),E=()=>{D(Z({name:x})),p(""),n()},B=l=>{p(l.target.value)},b=l=>{s(l)},c=l=>{d(l.target.value)},v=l=>{h(l.target.value)};return e("div",{children:e(_,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:o(oa,{children:[e(z,{children:"\xC4ndra uppgift"}),e(ia,{children:o(N,{component:"form",noValidate:!0,autoComplete:"off",style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexDirection:"column",maxWidth:"320px",width:"14rem"},children:[e(f,{margin:"normal",id:"username",label:"Namn",type:"text",onChange:B,value:x,fullWidth:!0}),e(H,{}),e(f,{id:"plot",select:!0,label:"V\xE4lj odling",value:"",onChange:v,fullWidth:!0,children:w.map(l=>e(L,{value:l._id,children:l.name},l._id))}),e(H,{}),e(f,{id:"plot",select:!0,label:"V\xE4lj kategori",value:"",onChange:v,fullWidth:!0,children:w.map(l=>e(L,{value:l._id,children:l.name},l._id))}),e(H,{}),e(K,{label:"Datum",value:a,onChange:b,renderInput:l=>e(f,T({},l))}),e(H,{}),e(f,{id:"days",label:"Tids\xE5tg\xE5ng",type:"text",value:"",onChange:c,fullWidth:!0}),e(H,{}),o(sa,{children:[e(C,{onClick:n,children:"Tillbaka"}),e(C,{onClick:E,children:"Skapa"})]})]})})]})})})},da=r.div`
  height: calc(100% - 4rem);
  background-color: #c2c7bd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`,ca=r.div`
  display: flex;
  flex-wrap: wrap;
`,ua=()=>{const{tasks:t}=y(p=>p.tasks),[n,a]=u.exports.useState(!1),s=()=>{a(!0)},i=()=>a(!1),[d,m]=u.exports.useState(!1),h=p=>{m(!0)},x=()=>m(!1);return o(da,{children:[e("p",{children:"TODOS"}),t?e(ca,{children:t.map((p,w)=>e("div",{children:e(ra,{task:p,handleOpenEditModal:h},w)}))}):null,e(X,{onClick:s,children:"L\xE4gga till"}),e(na,{openModal:n,handleCloseModal:i}),e(la,{openModal:d,handleCloseModal:x})]})};function pa(){return o(pt,{children:[o(P,{path:"/",element:e(Pt,{}),children:[e(P,{index:!0,element:e(Nt,{})}),e(P,{path:"signup",element:e(Vt,{})})]}),e(P,{path:"about",element:e(St,{})}),o(P,{path:"home",element:e(de,{}),children:[e(P,{index:!0,element:e(An,{})}),e(P,{path:":_id",element:e(Cn,{})})]}),e(P,{path:"plan",element:e(de,{}),children:e(P,{index:!0,element:e(Qn,{})})}),e(P,{path:"tasks",element:e(de,{}),children:e(P,{index:!0,element:e(ua,{})})}),e(P,{path:"welcome",element:e(dn,{children:e(gn,{})})})]})}const ha=ht({reducer:{user:Lt,plots:qt,cultivations:en,tasks:rn}});mt.render(e(ye.StrictMode,{children:e(gt,{store:ha,children:e(ft,{children:e(xt,{dateAdapter:bt,children:e(pa,{})})})})}),document.getElementById("root"));
