(this["webpackJsonplarin.cam"]=this["webpackJsonplarin.cam"]||[]).push([[0],{116:function(e,t,n){},225:function(e,t){},239:function(e,t,n){},242:function(e,t,n){"use strict";n.r(t);var a,c=n(3),r=n.n(c),s=n(101),i=n.n(s),o=(n(116),n(24)),u=n(17),l=n(53),d=n(19),j=n(11),m=n.n(j),b=n(20),h=n(29),p=n(56),O=n(57),f=O.a().shape({username:O.b().email().required("Username is a required field."),password:O.b().min(6,"Password must be at least 6 characters long.").required("Password is a required field.")}),x=n(44),v={apiKey:"AIzaSyCDN0Hii6Mznt2Y_DaRprMWVn7kwR9-xlY",authDomain:"larincam.firebaseapp.com",projectId:"larincam",storageBucket:"larincam.appspot.com",messagingSenderId:"70794209044",appId:"1:70794209044:web:1f0ccefcdfb498f5fcc401"};function g(){return"undefined"!==typeof window?a||(a=x.a.initializeApp(v)):null}var w=n(6),N=Object(c.createContext)(null);var y=function(e){var t=e.children,n=Object(c.useState)(null),a=Object(u.a)(n,2),r=a[0],s=a[1];return Object(w.jsx)(N.Provider,{value:{currentUser:r,setCurrentUser:s},children:t})};var S=function(e){var t=Object(c.useContext)(N),n=Object(d.g)(),a=g(),r={mode:"onSubmit",reValidateMode:"onChange",resolver:Object(p.a)(f)},s=Object(h.d)(r),i=s.handleSubmit,l=s.register,j=Object(c.useState)(!1),O=Object(u.a)(j,2),x=(O[0],O[1]),v=function(){var e=Object(b.a)(m.a.mark((function e(c){var r,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(!0),r=c.username,s=c.password,a.auth().signInWithEmailAndPassword(r,s).then((function(e){x(!1),console.log(e);var a=e.user;t.setCurrentUser(a),n.push("/")})).catch((function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=Object(c.useState)({authenticated:!1,initializing:!0}),S=Object(u.a)(y,2),A=S[0],C=S[1];return Object(c.useEffect)((function(){return a.auth().onAuthStateChanged((function(e){console.log("USER",e),C(e?{authenticated:!0,initializing:!1}:{authenticated:!1,initializing:!1})}))}),[C]),A.authenticated?Object(w.jsx)(d.a,{to:"/"}):Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)("h1",{children:"Sign in"}),Object(w.jsxs)("form",{action:"",onSubmit:i((function(e){var t=e.password,n=e.username;v({username:n,password:t})})),className:"mt-3 col-12 col-md-5 mx-auto",children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"username",children:"Email"}),Object(w.jsx)("input",Object(o.a)(Object(o.a)({},l("username")),{},{type:"text",name:"username",className:"form-control rounded mt-2",id:"username"}))]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"password",children:"Password"}),Object(w.jsx)("input",Object(o.a)(Object(o.a)({},l("password",{minLength:{value:6,message:"Password length must be at least 6 characters"}})),{},{type:"password",name:"password",className:"form-control rounded mt-2",id:"password"}))]}),Object(w.jsx)("button",{className:"btn btn-primary mt-4 w-100",type:"submit",children:"Register"})]})]})},A=n(111),C=(n(237),n(238),function(e){var t=r.a.useRef(null),n=e.options,a=function(e){return Object(w.jsx)("div",{"data-vjs-player":!0,children:Object(w.jsx)("video",{ref:t,className:"video-js vjs-theme-city vjs-big-play-centered",crossOrigin:"anonymous"})})};return r.a.useEffect((function(){var e,a=t.current;return a&&(e=Object(A.a)(a,n,(function(){}))),function(){e&&e.dispose()}}),[n]),Object(w.jsx)(a,{})}),E=[{username:"Michal",message:"comment",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"}];var k=function(e){return Object(w.jsxs)("div",{className:"chat",children:[Object(w.jsxs)("div",{className:"chat-header d-flex justify-content-between",children:[Object(w.jsx)("span",{children:"CHAT"}),Object(w.jsx)("span",{children:"62 LID\xcd"})]}),Object(w.jsx)("div",{className:"chat-body",children:E.map((function(e){var t=e.username,n=e.message,a=(e.time,e.photoUrl);return Object(w.jsxs)("div",{className:"message d-flex mb-3 align-items-center",children:[Object(w.jsx)("img",{src:a,alt:"",className:"me-2"}),Object(w.jsxs)("div",{className:"d-flex flex-column align-items-start",children:[Object(w.jsx)("span",{className:"username",children:t}),Object(w.jsx)("p",{className:"message-text",children:n})]})]})}))}),Object(w.jsx)("div",{className:"chat-footer",children:Object(w.jsx)("form",{action:"",children:Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("input",{type:"text",placeholder:"Zpr\xe1va"}),Object(w.jsx)("button",{className:"btn btn-primary",children:"SEND"})]})})})]})};n(239);var R=function(e){var t=g(),n=Object(c.useState)(null),a=Object(u.a)(n,2),r=a[0],s=a[1];Object(c.useEffect)((function(){t.auth().currentUser.getIdToken(!0).then((function(e){fetch("https://larin.cam/issue-stream-url",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","Access-Control-Allow-Headers":"*"}}).then((function(e){e.json().then((function(e){s(e.url)}))}))})).catch(function(){var e=Object(b.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.auth().signOut();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var i=function(){var e=Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.auth().signOut();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log("SRC",r);var o={autoplay:!0,controls:!0,responsive:!0,liveui:!0,fluid:!0,sources:[{src:r,type:"application/x-mpegURL"}]};return r?Object(w.jsxs)("div",{className:"container",children:["Livestream",Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-12 col-lg-9",children:Object(w.jsx)("div",{className:"video-wrapper",children:Object(w.jsx)(C,{options:o})})}),Object(w.jsx)("div",{className:"col-12 col-lg-3",children:Object(w.jsx)(k,{})}),Object(w.jsx)("div",{className:"col-1",children:Object(w.jsx)("button",{className:"btn btn-danger",onClick:i,children:"Log out"})})]})]}):Object(w.jsx)("div",{children:"Loading..."})};n(240);var z=function(e){var t={mode:"onSubmit",reValidateMode:"onChange",resolver:Object(p.a)(f)},n=Object(h.d)(t),a=n.handleSubmit,r=n.register,s=Object(c.useState)(!1),i=Object(u.a)(s,2),l=(i[0],i[1],function(){var e=Object(b.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.username,a=t.password,x.a.auth().createUserWithEmailAndPassword(n,a).then((function(e){e.user})).catch((function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)("h1",{children:"Join our community"}),Object(w.jsxs)("form",{action:"",onSubmit:a((function(e){var t=e.password,n=e.username;l({username:n,password:t})})),className:"mt-3 col-12 col-md-5 mx-auto",children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"username",children:"Email"}),Object(w.jsx)("input",Object(o.a)(Object(o.a)({},r("username")),{},{type:"text",name:"username",className:"form-control rounded mt-2",id:"username"}))]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"password",children:"Password"}),Object(w.jsx)("input",Object(o.a)(Object(o.a)({},r("password",{minLength:{value:6,message:"Password length must be at least 6 characters"}})),{},{type:"password",name:"password",className:"form-control rounded mt-2",id:"password"}))]}),Object(w.jsx)("button",{className:"btn btn-primary mt-4 w-100",type:"submit",children:"Register"})]})]})},I=[{path:"/",key:"ROOT",exact:!0,protected:!0,component:function(){return Object(w.jsx)(R,{})}},{path:"/login",key:"LOGIN",exact:!0,component:function(){return Object(w.jsx)(S,{})}},{path:"/register",key:"REGISTER",exact:!0,component:function(){return Object(w.jsx)(z,{})}},{path:"/admin",key:"ADMIN",exact:!0,protected:!0,component:function(){return Object(w.jsx)(R,{})}}];function U(e){var t=e.routes,n=g(),a=Object(c.useState)({authenticated:!1,initializing:!0}),r=Object(u.a)(a,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){return n.auth().onAuthStateChanged((function(e){console.log("USER",e),i(e?{authenticated:!0,initializing:!1}:{authenticated:!1,initializing:!1})}))}),[i]),s.initializing?Object(w.jsx)("div",{children:"Loading..."}):Object(w.jsx)(l.a,{children:Object(w.jsxs)(d.d,{children:[t.map((function(e,t){return e.protected?Object(w.jsx)(d.b,{path:e.path,exact:e.exact,render:function(t){return s.authenticated?Object(w.jsx)(e.component,Object(o.a)({},t)):Object(w.jsx)(d.a,{to:"/login"})}}):Object(w.jsx)(d.b,{path:e.path,exact:e.exact,render:function(t){return Object(w.jsx)(e.component,Object(o.a)({},t))}})})),Object(w.jsx)(d.b,{component:function(){return Object(w.jsx)("h1",{children:"404 - Not Found!"})}})]})})}n(241);var L=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(y,{children:Object(w.jsx)(U,{routes:I})})})};i.a.render(Object(w.jsx)(L,{}),document.getElementById("root"))}},[[242,1,2]]]);
//# sourceMappingURL=main.b998f8cd.chunk.js.map