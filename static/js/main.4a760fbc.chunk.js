(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{46:function(n,e,t){},55:function(n,e,t){"use strict";t.r(e);var i=t(2),a=t.n(i),o=t(33),c=t.n(o),r=(t(46),t(29)),s=t(14),u=t.n(s),d=t(18),l=t(8),b=t(5),f=t(6),j=t(28);j.a.initializeApp({apiKey:"AIzaSyAZhvmZYFIEwZxtqf6E_vmGmNkZF_oUJAE",authDomain:"note-keeper-f1de8.firebaseapp.com",databaseURL:"https://note-keeper-f1de8-default-rtdb.firebaseio.com",projectId:"note-keeper-f1de8",storageBucket:"note-keeper-f1de8.appspot.com",messagingSenderId:"722421639421",appId:"1:722421639421:web:c68fc9ec78af8a360c7694"});var h,p,x,O,g,m,v,w,y,k,C,S,z,E,I,R,M,L,P,D,U,X,A,B,N,T,W,Y,H,J,Z,G,_,F,K,q,Q,V,$,nn,en,tn,an,on,cn,rn,sn,un,dn,ln,bn=j.a,fn=(t(32),t.p+"static/media/login-bg.f943f8e8.jpg"),jn=t(3),hn=f.a.div(h||(h=Object(b.a)(["\n  height: 100vh;\n  width: 100vw;\n  background: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  user-select: none;\n"])),fn),pn=f.a.div(p||(p=Object(b.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: rgba(0, 0, 0, 0.65);\n"]))),xn=f.a.div(x||(x=Object(b.a)(['\n  font-family: "Montserrat", sans-serif;\n  color: #fff;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 25px;\n']))),On=f.a.h3(O||(O=Object(b.a)(["\n  flex: 0 0 auto;\n  margin: 0 10px;\n  font-weight: 500;\n  font-size: 1.8rem;\n  @media screen and (max-width: 720px) {\n    font-size: 1rem;\n  }\n"]))),gn=f.a.div(g||(g=Object(b.a)(["\n  justify-content: center;\n  align-items: center;\n  display: flex;\n"]))),mn=f.a.div(m||(m=Object(b.a)(["\n  height: auto;\n  width: auto;\n"]))),vn=f.a.div(v||(v=Object(b.a)(["\n  height: 3px;\n  width: 20%;\n  background: #fff;\n  border-radius: 5px;\n"]))),wn=function(){var n=function(){var n=Object(d.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=new bn.auth.GoogleAuthProvider,n.next=4,bn.auth().signInWithPopup(e);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),alert(n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),e=function(){var n=Object(d.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=new bn.auth.GithubAuthProvider,n.next=4,bn.auth().signInWithPopup(e);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),alert(n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}();return Object(jn.jsx)(hn,{children:Object(jn.jsxs)(pn,{children:[Object(jn.jsxs)(xn,{children:[Object(jn.jsx)(vn,{}),Object(jn.jsx)(On,{children:"Login with"}),Object(jn.jsx)(vn,{})]}),Object(jn.jsxs)(gn,{children:[Object(jn.jsx)(mn,{onClick:n,children:Object(jn.jsx)("ion-icon",{name:"logo-google"})}),Object(jn.jsx)(mn,{onClick:e,children:Object(jn.jsx)("ion-icon",{name:"logo-github"})})]})]})})},yn=Object(i.createContext)(null),kn=f.a.div(w||(w=Object(b.a)(["\n  height: 100%;\n  width: 100vw;\n"]))),Cn=f.a.video(y||(y=Object(b.a)(["\n  postition: absolute;\n  height: 100%;\n  width: 100vw;\n  left: 0;\n  top: 0;\n  object-fit: fill;\n  pointer-events: none;\n"]))),Sn=f.a.button(k||(k=Object(b.a)(["\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  background: #fff;\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  cursor: pointer;\n  border: none;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    border: 5px solid gray;\n    opacity: 0.8;\n  }\n"]))),zn=function(n){var e=n.onSnap,t=Object(i.useRef)(null),a=Object(i.useContext)(yn).stream;Object(i.useEffect)((function(){t.current.srcObject=a}),[a]);return Object(jn.jsxs)(kn,{children:[Object(jn.jsx)(Cn,{playsInline:!0,autoPlay:!0,ref:t}),Object(jn.jsx)(Sn,{onClick:function(){var n=function(n){var e=document.createElement("canvas");return e.height=window.innerHeight,e.width=window.innerWidth,e.getContext("2d").drawImage(n,0,0,e.width,e.height),e.toDataURL()}(t.current),i=document.createElement("img");i.src=n,e&&e({height:i.height,width:i.width,photo:n})}})]})},En=t(38),In=t.n(En),Rn=(t(52),f.a.div(C||(C=Object(b.a)(["\n  height: 100%;\n  width: 100vw;\n  position: absolute;\n  top: 0;\n  z-index: 20;\n"])))),Mn=f.a.button(S||(S=Object(b.a)(["\n  background: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  padding: 8px 10px;\n  opacity: 0.9;\n  margin-right: 5px;\n  &:hover {\n    opacity: 1;\n  }\n"]))),Ln=f.a.div(z||(z=Object(b.a)(["\n  height: auto;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  padding: 20px;\n  user-select: none;\n"]))),Pn=function(n){var e=n.image,t=n.onProceed,a=n.onCancel,o=Object(i.useRef)(null),c=Object(i.useState)({x:35,y:35,unit:"%",width:30,height:30}),r=Object(l.a)(c,2),s=r[0],u=r[1],d=Object(i.useState)(null),b=Object(l.a)(d,2),f=b[0],j=b[1],h=Object(i.useState)(null),p=Object(l.a)(h,2),x=p[0],O=p[1];return Object(i.useEffect)((function(){if(f&&o.current){var n=document.createElement("canvas"),e=o.current,t=f,i=e.naturalWidth/e.width,a=e.naturalHeight/e.height,c=n.getContext("2d"),r=window.devicePixelRatio;n.width=t.width*r,n.height=t.height*r,c.setTransform(r,0,0,r,0,0),c.imageSmoothingQuality="high",c.drawImage(e,t.x*i,t.y*a,t.width*i,t.height*a,0,0,t.width,t.height);var s=n.toDataURL();O(s)}}),[f]),Object(jn.jsxs)(Rn,{children:[Object(jn.jsx)(In.a,{src:e,onImageLoaded:function(n){o.current=n},crop:s,onChange:function(n){return u(n)},onComplete:function(n){return j(n)}}),Object(jn.jsxs)(Ln,{children:[Object(jn.jsx)(Mn,{onClick:function(){t(x||e)},children:"Proceed"}),Object(jn.jsx)(Mn,{onClick:a,children:"Cancel"})]})]})},Dn=t(75),Un=t(68),Xn=t(69),An=t(70),Bn=f.a.img(E||(E=Object(b.a)(["\n  height: auto;\n  width: auto;\n  top: 0;\n  z-index: 10;\n"]))),Nn=f.a.div(I||(I=Object(b.a)(["\n  height: 100%;\n  width: 100vw;\n  background: red;\n  position: absolute;\n  top: 0;\n  transform: translateX(100%);\n  transition: 0.3s;\n"]))),Tn=f.a.div(R||(R=Object(b.a)(["\n  height: 50px;\n  width: 50px;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  &:hover {\n    background: #fff;\n    color: #000;\n    opacity: 0.8;\n  }\n"]))),Wn=f.a.form(M||(M=Object(b.a)(["\n  position: absolute;\n  z-index: 50;\n  top: 0;\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  height: 100%;\n  align-items: flex-end;\n  padding: 50px;\n  background: rgba(0, 0, 0, 0.6);\n"]))),Yn=f.a.div(L||(L=Object(b.a)(["\n  position: absolute;\n  z-index: 150;\n  height: auto;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),Hn=f.a.input(P||(P=Object(b.a)(['\n  height: 35px;\n  width: 45%;\n  border: none;\n  border-bottom: 2px solid #fff;\n  color: #fff;\n  padding: 20px 5px;\n  background: transparent;\n  font-size: 20px;\n  font-weight: 400;\n  font-family: "Montserrat", sans-serif;\n  position: relative;\n  display: block;\n  &:focus {\n    outline: none;\n  }\n  &::placeholder {\n    color: rgba(255, 255, 255, 0.829);\n  }\n  @media screen and (max-width: 720px) {\n    width: 65%;\n    font-size: 15px;\n  }\n']))),Jn=f.a.div(D||(D=Object(b.a)(['\n  height: 30px;\n  width: 180px;\n  background: #1ecbe1;\n  border-radius: 5px;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 300;\n  font-family: "Montserrat", sans-serif;\n  font-weight: 500;\n']))),Zn=function(n){var e=n.image,t=n.onRetake,a=n.onShowEditor,o=n.onImageSave,c=n.isSaving,r=Object(i.useRef)(null),s=Object(i.useState)("0"),u=Object(l.a)(s,2),d=u[0],b=u[1],f=Object(i.useState)(""),j=Object(l.a)(f,2),h=j[0],p=j[1];return Object(i.useEffect)((function(){return r.current.style.transform="translate(".concat(d,")")}),[d]),Object(jn.jsxs)(Nn,{ref:r,children:[c&&Object(jn.jsx)(Jn,{children:"Saving..."}),Object(jn.jsx)(Bn,{src:e}),Object(jn.jsxs)(Wn,{onSubmit:function(n){n.preventDefault(),o(h)},children:[Object(jn.jsx)(Yn,{children:Object(jn.jsx)(Hn,{value:h,onChange:function(n){return p(n.currentTarget.value)},placeholder:"Enter your note name"})}),Object(jn.jsx)(Tn,{onClick:function(){b("-100%"),setTimeout((function(){t()}),300)},children:Object(jn.jsx)(Un.a,{})}),Object(jn.jsx)(Tn,{onClick:a,children:Object(jn.jsx)(Xn.a,{})}),Object(jn.jsx)(Tn,{onClick:function(){return o(h)},children:Object(jn.jsx)(An.a,{})})]})]})},Gn=t(71),_n=f.a.div(U||(U=Object(b.a)(["\n  height: 100%;\n  width: 100vw;\n  overflow: hidden;\n  position: absolute;\n  transform: translateX(100%);\n  transition: 0.3s;\n  z-index: 150;\n"]))),Fn=f.a.div(X||(X=Object(b.a)(["\n  height: 50px;\n  width: 50px;\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  cursor: pointer;\n  color: #fff;\n"]))),Kn=bn.database(),qn=function(n){var e=n.onCameraHide,t=(n.stream,Object(i.useRef)(null)),a=Object(i.useState)("0"),o=Object(l.a)(a,2),c=o[0],r=o[1],s=Object(i.useState)(!1),u=Object(l.a)(s,2),d=u[0],b=u[1],f=Object(i.useState)(null),j=Object(l.a)(f,2),h=j[0],p=j[1],x=Object(i.useState)(!1),O=Object(l.a)(x,2),g=O[0],m=O[1],v=Object(i.useState)(null),w=Object(l.a)(v,2),y=w[0],k=w[1],C=Object(i.useState)(!1),S=Object(l.a)(C,2),z=S[0],E=S[1],I=Object(i.useContext)(yn).uid;Object(i.useEffect)((function(){t.current.style.transform="translateX(".concat(c,")")}),[c]);return Object(jn.jsxs)(_n,{ref:t,children:[Object(jn.jsx)(zn,{onSnap:function(n){p(n.photo),k(n),b(!0)}}),Object(jn.jsx)(Fn,{onClick:function(){r("-100%"),e()},children:Object(jn.jsx)(Gn.a,{})}),d&&Object(jn.jsx)(Zn,{isSaving:z,image:h,onRetake:function(){b(!1)},onShowEditor:function(){m(!0),b(!1),p(y.photo)},onImageSave:function(n){var t=Object(Dn.a)(),i="images/".concat(I,"/").concat(t),a=Kn.ref(i),o={name:n,image:h,uid:t};E(!0),a.set(o,(function(){e(),E(!1)}))}}),g&&Object(jn.jsx)(Pn,{image:h,onProceed:function(n){p(n),m(!1),b(!0)},onCancel:function(){m(!1),b(!0)}})]})},Qn=t(40),Vn=t(39),$n=t(72),ne=f.a.div(A||(A=Object(b.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  height: auto;\n  user-select: none;\n  padding-top: 66px;\n"]))),ee=f.a.div(B||(B=Object(b.a)(["\n  height: auto;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  opacity: 0;\n"]))),te=f.a.div(N||(N=Object(b.a)(["\n  height: auto;\n  width: auto;\n  padding: 5px;\n  color: #1ecbe1;\n"]))),ie=f.a.p(T||(T=Object(b.a)(['\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  font-family: "Montserrat", sans-serif;\n  font-weight: 600;\n']))),ae=f.a.div(W||(W=Object(b.a)(["\n  height: 200px;\n  flex-grow: 1;\n  margin: 2px;\n  background: #fff;\n  cursor: pointer;\n  position: relative;\n  &:hover {\n    opacity: 0.8;\n  }\n  &:hover "," {\n    opacity: 1;\n  }\n  &:hover "," {\n    opacity: 1;\n  }\n"])),ie,ee),oe=f.a.img(Y||(Y=Object(b.a)(["\n  height: 200px;\n  object-fit: cover;\n  max-width: 100%;\n  min-width: 100%;\n  vertical-align: bottom;\n"]))),ce=f.a.svg(H||(H=Object(b.a)(["\n  height: 45px;\n  width: 45px;\n  stroke: blue;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),re=f.a.circle(J||(J=Object(b.a)(["\n  stroke-dasharray: 180;\n  stroke-dashoffset: 0;\n  -webkit-transform-origin: center;\n  -ms-transform-origin: center;\n  transform-origin: center;\n  @keyframes turn {\n    0% {\n      stroke-dashoffset: 180;\n    }\n\n    50% {\n      stroke-dashoffset: 45;\n      transform: rotate(135deg);\n    }\n\n    100% {\n      stroke-dashoffset: 180;\n      transform: rotate(360deg);\n    }\n  }\n  -webkit-animation: turn 1.35s ease-in-out infinite;\n  animation: turn 1.35s ease-in-out infinite;\n"]))),se=f.a.p(Z||(Z=Object(b.a)(['\n  height: auto;\n  width: 100%;\n  padding: 10px;\n  font-family: "Montserrat", sans-serif;\n  font-weight: 400;\n  color: gray;\n']))),ue=bn.database(),de=function(n){var e=n.onCount,t=Object(i.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1],r=Object(i.useState)(null),s=Object(l.a)(r,2),u=s[0],d=s[1],b=Object(i.useState)([]),f=Object(l.a)(b,2),j=f[0],h=f[1],p=Object(i.useState)(!0),x=Object(l.a)(p,2),O=x[0],g=x[1],m=Object(i.useState)(!1),v=Object(l.a)(m,2),w=v[0],y=v[1],k=Object(i.useState)(0),C=Object(l.a)(k,2),S=C[0],z=C[1],E=Object(i.useContext)(yn).uid,I=function(n){c(!o),d(n)};return Object(i.useEffect)((function(){var n=ue.ref("images/".concat(E));h([]),n.on("child_added",(function(n){var e=n.val();console.log(e),h((function(n){return[].concat(Object(Qn.a)(n),[e])})),z((function(n){return n+1})),g(!1)}))}),[E]),Object(i.useEffect)((function(){ue.ref("images/".concat(E)).once("value").then((function(n){n.exists()?y(!1):(g(!1),y(!0))}))}),[E,j]),Object(i.useEffect)((function(){e(S)}),[S,e]),Object(jn.jsxs)(ne,{children:[w&&Object(jn.jsx)(se,{children:"No image found, please take one."}),O&&Object(jn.jsx)(ce,{viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg",children:Object(jn.jsx)(re,{fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"25"})}),j&&!O&&j.map((function(n){return Object(jn.jsxs)(ae,{children:[Object(jn.jsx)(oe,{src:n&&n.image,onClick:function(){return I(n)}}),Object(jn.jsx)(ie,{onClick:function(){return I(n)},children:n&&n.name}),Object(jn.jsx)(ee,{children:Object(jn.jsx)(te,{onClick:function(){return function(n){var e=n.uid,t=ue.ref("images/".concat(E,"/").concat(e));h((function(n){return n.filter((function(n){return n.uid!==e}))})),t.set(null)}(n)},children:Object(jn.jsx)($n.a,{})})})]})})),o&&u&&Object(jn.jsx)(Vn.a,{large:u.image,medium:u.image,hideDownload:!0,alt:u.name,showRotate:!0,onClose:function(){c(!o)}})]})},le=f.a.div(G||(G=Object(b.a)(["\n  height: 100vh;\n  width: 100vw;\n  background: transparent;\n  position: absolute;\n  z-index: 300;\n"]))),be=function(n){var e=n.from,t=n.to,a=n.willLast,o=n.onClose,c=n.children,r=Object(i.useRef)(null),s=Object(i.useState)("translate(0)"),u=Object(l.a)(s,2),d=u[0],b=u[1];Object(i.useEffect)((function(){r.current.style.transform=d}),[d]);return Object(jn.jsx)(le,{ref:r,style:{transform:"left"===e?"translateX(-100%)":"right"===e?"translateX(100%)":"top"===e?"translateY(-100%)":"bottom"===e?"translateY(100%)":null,transition:"transform ".concat(a)},children:c((function(){switch(t){case"left":b("translateX(-100%)");break;case"right":b("translateX(100%)");break;case"top":b("translateY(-100%)");break;case"bottom":b("translateY(100%)");break;default:b("translate(0)")}setTimeout((function(){o()}),parseInt(a))}))})},fe=f.a.div(_||(_=Object(b.a)(["\n  height: 100%;\n  width: 100%;\n  background: ",";\n  position: absolute;\n  left: 0;\n  z-index: 300;\n  transition: transform 0.8s;\n"])),"#111c33"),je=f.a.input(F||(F=Object(b.a)(["\n  height: auto;\n  width: 100%;\n  background: ",";\n  color: ",";\n  padding: 25px;\n  font-size: 20px;\n  border: none;\n  &:focus {\n    outline: none;\n  }\n"])),"#223861","#1ecbe1"),he=function(n){var e=n.onClose;return Object(jn.jsx)(be,{from:"top",to:"left",willLast:"300ms",onClose:e,children:function(n){return Object(jn.jsxs)(fe,{children:[Object(jn.jsx)(je,{placeholder:"Enter your keyword to search"}),Object(jn.jsx)("button",{onClick:n,children:"Close"})]})}})},pe=t(73),xe=t(74),Oe=f.a.div(K||(K=Object(b.a)(["\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  overflow: hidden;\n"]))),ge=f.a.div(q||(q=Object(b.a)(['\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  font-family: "Montserrat", sans-serif;\n']))),me=f.a.div(Q||(Q=Object(b.a)(["\n  display: flex;\n  width: 100%;\n  padding: 15px;\n  align-items: center;\n  background: #111c33;\n  box-shadow: 0 1px 1.5px rgba(0, 0, 0, 0.1);\n  user-select: none;\n  position: fixed;\n  z-index: 50;\n  @media screen and (max-width: 720px) {\n    justify-content: space-between;\n  }\n"]))),ve=f.a.h3(V||(V=Object(b.a)(["\n  color: #1ecbe1;\n"]))),we=f.a.div($||($=Object(b.a)(["\n  display: flex;\n  align-items: center;\n"]))),ye=f.a.div(nn||(nn=Object(b.a)(["\n  color: #1ecbe1;\n  cursor: pointer;\n  margin-left: 10px;\n"]))),ke=f.a.div(en||(en=Object(b.a)(["\n  flex: 1 1 auto;\n  display: flex;\n  padding: 0 15px;\n  @media screen and (max-width: 720px) {\n    display: none;\n  }\n"]))),Ce=f.a.div(tn||(tn=Object(b.a)(['\n  margin: 0 10px;\n  color: gray;\n  transition: 0.3s;\n  cursor: pointer;\n  &:hover {\n    color: #1ecbe1;\n  }\n  font-family: "Montserrat", sans-serif;\n  font-weight: 600;\n  font-size: 15px;\n']))),Se=f.a.div(an||(an=Object(b.a)(["\n  height: 50px;\n  width: 50px;\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  background: #111c33;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  font-size: 20px;\n  cursor: pointer;\n"]))),ze=f.a.img(on||(on=Object(b.a)(["\n  height: ","px;\n  width: ","px;\n  border-radius: 50%;\n  cursor: pointer;\n  &:hover {\n    opacity: 0.7;\n  }\n"])),(function(n){return n.dim}),(function(n){return n.dim})),Ee=f.a.div(cn||(cn=Object(b.a)(["\n  height: 300px;\n  width: 300px;\n  position: absolute;\n  z-index: 250;\n  top: 70px;\n  right: 50px;\n  background: #111c33;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  border-radius: 3.5px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  padding: 15px;\n  @media screen and (max-width: 720px) {\n    right: 5px;\n  }\n"]))),Ie=f.a.p(rn||(rn=Object(b.a)(["\n  color: ",';\n  font-family: "Montserrat", sans-serif;\n  font-weight: 450;\n  margin-top: 8px;\n  font-size: ',"px;\n"])),(function(n){return n.color}),(function(n){return n.size})),Re=f.a.div(sn||(sn=Object(b.a)(["\n  height: auto;\n  width: auto;\n  background: #1ecbe1;\n  color: #fff;\n  border-radius: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 20px;\n  margin-top: 35px;\n  font-size: 15px;\n  cursor: pointer;\n  border: 2px solid #fff;\n"]))),Me=(f.a.div(un||(un=Object(b.a)(["\n  height: auto;\n  min-width: 300px;\n  position: absolute;\n  top: 75px;\n  right: 5px;\n  z-index: 300;\n"]))),f.a.input(dn||(dn=Object(b.a)(["\n  height: 40px;\n  width: 100%;\n  background: #111c33;\n  border: none;\n  color: #1ecbe1;\n  padding: 15px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  &:focus {\n    outline: none;\n  }\n"]))),function(n){var e=n.onUserLogOut,t=Object(i.useContext)(yn),a=Object(i.useState)(!1),o=Object(l.a)(a,2),c=o[0],r=o[1],s=Object(i.useState)(!1),u=Object(l.a)(s,2),d=u[0],b=u[1],f=Object(i.useState)(!1),j=Object(l.a)(f,2),h=j[0],p=j[1],x=Object(i.useState)(!1),O=Object(l.a)(x,2),g=O[0],m=O[1],v=Object(i.useState)(0),w=Object(l.a)(v,2),y=w[0],k=w[1],C=function(){m(!1),p(!h)},S=function(){m(!g),p(!1)};return Object(jn.jsxs)(Oe,{children:[c&&Object(jn.jsx)(qn,{onCameraHide:function(n){b(!1),setTimeout((function(){r(!c)}),350)}}),!d&&Object(jn.jsxs)(ge,{children:[Object(jn.jsxs)(me,{children:[Object(jn.jsx)(ve,{children:"Note Keeper"}),Object(jn.jsxs)(ke,{children:[Object(jn.jsx)(Ce,{children:"Bangla"}),Object(jn.jsx)(Ce,{children:"English"}),Object(jn.jsx)(Ce,{children:"Math"}),Object(jn.jsx)(Ce,{children:"Chemistry"}),Object(jn.jsx)(Ce,{children:"Biology"}),Object(jn.jsx)(Ce,{children:"Physics"}),Object(jn.jsx)(Ce,{children:"I&Ct"})]}),Object(jn.jsxs)(we,{children:[Object(jn.jsx)(ze,{dim:35,onClick:C,src:t&&t.photoURL}),h&&Object(jn.jsxs)(Ee,{onBlur:C,children:[Object(jn.jsx)(ze,{dim:65,src:t&&t.photoURL}),Object(jn.jsx)(Ie,{size:18,color:"#fff",children:t&&t.displayName}),Object(jn.jsx)(Ie,{size:14,color:"gray",children:t&&t.email}),Object(jn.jsxs)(Ie,{color:"gray",size:15,children:["Notes: ",0===y?"...":y]}),Object(jn.jsx)(Re,{onClick:e,children:"Logout"})]}),Object(jn.jsx)(ye,{onClick:S,children:Object(jn.jsx)(pe.a,{})})]})]}),g&&Object(jn.jsx)(he,{onClose:S}),Object(jn.jsx)(de,{onCount:function(n){return k(n)}}),Object(jn.jsx)(Se,{onClick:function(){return r(!c)},children:Object(jn.jsx)(xe.a,{})})]})]})}),Le=f.a.div(ln||(ln=Object(b.a)([""]))),Pe=function(){var n=Object(i.useState)(null),e=Object(l.a)(n,2),t=e[0],a=e[1],o=Object(i.useState)(null),c=Object(l.a)(o,2),s=c[0],b=c[1];return Object(i.useEffect)((function(){Object(d.a)(u.a.mark((function n(){var e,t,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=navigator.mediaDevices.getSupportedConstraints(),console.log(e),n.next=5,navigator.mediaDevices.enumerateDevices();case 5:return n.next=7,n.sent.length;case 7:if(n.t0=n.sent,!(n.t0<=1)){n.next=12;break}n.t1="user",n.next=13;break;case 12:n.t1="environment";case 13:return t=n.t1,n.next=16,navigator.mediaDevices.getUserMedia({video:{facingMode:t,aspectRatio:20/9,focusMode:"auto",whiteBalanceMode:"continuous"}});case 16:i=n.sent,b(i),n.next=23;break;case 20:n.prev=20,n.t2=n.catch(0),console.log(JSON.stringify(n.t2));case 23:case"end":return n.stop()}}),n,null,[[0,20]])})))()}),[]),Object(i.useEffect)((function(){bn.auth().onAuthStateChanged((function(n){n?(a(n),console.log(n)):a(null)}))}),[]),Object(jn.jsx)(yn.Provider,{value:Object(r.a)(Object(r.a)({},t),{},{stream:s}),children:Object(jn.jsxs)(Le,{children:[!t&&Object(jn.jsx)(wn,{}),t&&s&&Object(jn.jsx)(Me,{onUserLogOut:function(){bn.auth().signOut().then((function(){a(null)}))}})]})})};c.a.render(Object(jn.jsx)(a.a.StrictMode,{children:Object(jn.jsx)(Pe,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.4a760fbc.chunk.js.map