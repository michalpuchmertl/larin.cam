(this["webpackJsonplarin.cam"]=this["webpackJsonplarin.cam"]||[]).push([[0],{116:function(e,t,s){},225:function(e,t){},239:function(e,t,s){},242:function(e,t,s){"use strict";s.r(t);var n,a=s(3),o=s.n(a),c=s(101),r=s.n(c),i=(s(116),s(24)),l=s(17),m=s(53),u=s(19),p=s(11),j=s.n(p),h=s(23),d=s(29),b=s(56),O=s(57),g=O.a().shape({username:O.b().email().required("Username is a required field."),password:O.b().min(6,"Password must be at least 6 characters long.").required("Password is a required field.")}),f=s(44),x={apiKey:"AIzaSyCDN0Hii6Mznt2Y_DaRprMWVn7kwR9-xlY",authDomain:"larincam.firebaseapp.com",projectId:"larincam",storageBucket:"larincam.appspot.com",messagingSenderId:"70794209044",appId:"1:70794209044:web:1f0ccefcdfb498f5fcc401"};function v(){return"undefined"!==typeof window?n||(n=f.a.initializeApp(x)):null}var y=s(6),w=Object(a.createContext)(null);var N=function(e){var t=e.children,s=Object(a.useState)(null),n=Object(l.a)(s,2),o=n[0],c=n[1];return Object(y.jsx)(w.Provider,{value:{currentUser:o,setCurrentUser:c},children:t})};var U=function(e){var t=Object(a.useContext)(w),s=Object(u.g)(),n=v(),o={mode:"onSubmit",reValidateMode:"onChange",resolver:Object(b.a)(g)},c=Object(d.d)(o),r=c.handleSubmit,m=c.register,p=Object(a.useState)(!1),O=Object(l.a)(p,2),f=(O[0],O[1]),x=function(){var e=Object(h.a)(j.a.mark((function e(a){var o,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(!0),o=a.username,c=a.password,n.auth().signInWithEmailAndPassword(o,c).then((function(e){f(!1),console.log(e);var n=e.user;t.setCurrentUser(n),s.push("/")})).catch((function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=Object(a.useState)({authenticated:!1,initializing:!0}),U=Object(l.a)(N,2),S=U[0],A=U[1];return Object(a.useEffect)((function(){return n.auth().onAuthStateChanged((function(e){console.log("USER",e),A(e?{authenticated:!0,initializing:!1}:{authenticated:!1,initializing:!1})}))}),[A]),S.authenticated?Object(y.jsx)(u.a,{to:"/"}):Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("h1",{children:"Sign in"}),Object(y.jsxs)("form",{action:"",onSubmit:r((function(e){var t=e.password,s=e.username;x({username:s,password:t})})),className:"mt-3 col-12 col-md-5 mx-auto",children:[Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"username",children:"Email"}),Object(y.jsx)("input",Object(i.a)(Object(i.a)({},m("username")),{},{type:"text",name:"username",className:"form-control rounded mt-2",id:"username"}))]}),Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"password",children:"Password"}),Object(y.jsx)("input",Object(i.a)(Object(i.a)({},m("password",{minLength:{value:6,message:"Password length must be at least 6 characters"}})),{},{type:"password",name:"password",className:"form-control rounded mt-2",id:"password"}))]}),Object(y.jsx)("button",{className:"btn btn-primary mt-4 w-100",type:"submit",children:"Register"})]})]})},S=s(111),A=(s(237),s(238),function(e){var t=o.a.useRef(null),s=e.options,n=function(e){return Object(y.jsx)("div",{"data-vjs-player":!0,children:Object(y.jsx)("video",{ref:t,className:"video-js vjs-theme-city vjs-big-play-centered",crossOrigin:"anonymous"})})};return o.a.useEffect((function(){var e,n=t.current;return n&&(e=Object(S.a)(n,s,(function(){}))),function(){e&&e.dispose()}}),[s]),Object(y.jsx)(n,{})}),k=[{username:"Michal",message:"Jeee Larinka",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"K\xe1\u0165a",message:"No jo opravdu",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"Adam",message:"Je b\xe1je\u010dn\xe1",time:"17:03",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"K\xe1\u0165a",message:"No jo opravdu",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"Michal",message:"Jeee Larinka",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"K\xe1\u0165a",message:"No jo opravdu",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"Adam",message:"Je b\xe1je\u010dn\xe1",time:"17:03",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"K\xe1\u0165a",message:"No jo opravdu",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"Michal",message:"Jeee Larinka",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"K\xe1\u0165a",message:"No jo opravdu",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"Adam",message:"Je b\xe1je\u010dn\xe1",time:"17:03",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"K\xe1\u0165a",message:"No jo opravdu",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"Michal",message:"Jeee Larinka",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"K\xe1\u0165a",message:"No jo opravdu",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"Adam",message:"Je b\xe1je\u010dn\xe1",time:"17:03",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"K\xe1\u0165a",message:"No jo opravdu",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"}];var C=function(e){return Object(y.jsxs)("div",{className:"chat",children:[Object(y.jsx)("h1",{children:"Chat"}),Object(y.jsx)("div",{className:"messages",children:k.map((function(e){var t=e.username,s=e.message,n=(e.time,e.photoUrl);return Object(y.jsxs)("div",{className:"message d-flex mb-3 align-items-center",children:[Object(y.jsx)("img",{src:n,alt:"",className:"me-2"}),Object(y.jsxs)("div",{className:"d-flex flex-column align-items-start",children:[Object(y.jsx)("span",{className:"username",children:t}),Object(y.jsx)("p",{className:"message-text",children:s})]})]})}))})]})};s(239);var E=function(e){v();var t=Object(a.useState)(null),s=Object(l.a)(t,2),n=s[0],o=s[1];Object(a.useEffect)((function(){fetch("https://larin.cam/issue-stream-url",{method:"GET",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","Access-Control-Allow-Headers":"*"}}).then((function(e){e.json().then((function(e){o(e)}))}))}),[]),console.log("SRC",n);var c={autoplay:!0,controls:!0,responsive:!0,liveui:!0,fluid:!0,sources:[{src:n,type:"application/x-mpegURL"}]};return n?Object(y.jsxs)("div",{className:"container",children:["Livestream",Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-12 col-lg-9",children:Object(y.jsx)("div",{className:"video-wrapper",children:Object(y.jsx)(A,{options:c})})}),Object(y.jsx)("div",{className:"col-12 col-lg-3",children:Object(y.jsx)(C,{})})]})]}):Object(y.jsx)("div",{children:"Loading..."})};s(240);var R=function(e){var t={mode:"onSubmit",reValidateMode:"onChange",resolver:Object(b.a)(g)},s=Object(d.d)(t),n=s.handleSubmit,o=s.register,c=Object(a.useState)(!1),r=Object(l.a)(c,2),m=(r[0],r[1],function(){var e=Object(h.a)(j.a.mark((function e(t){var s,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=t.username,n=t.password,f.a.auth().createUserWithEmailAndPassword(s,n).then((function(e){e.user})).catch((function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("h1",{children:"Join our community"}),Object(y.jsxs)("form",{action:"",onSubmit:n((function(e){var t=e.password,s=e.username;m({username:s,password:t})})),className:"mt-3 col-12 col-md-5 mx-auto",children:[Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"username",children:"Email"}),Object(y.jsx)("input",Object(i.a)(Object(i.a)({},o("username")),{},{type:"text",name:"username",className:"form-control rounded mt-2",id:"username"}))]}),Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"password",children:"Password"}),Object(y.jsx)("input",Object(i.a)(Object(i.a)({},o("password",{minLength:{value:6,message:"Password length must be at least 6 characters"}})),{},{type:"password",name:"password",className:"form-control rounded mt-2",id:"password"}))]}),Object(y.jsx)("button",{className:"btn btn-primary mt-4 w-100",type:"submit",children:"Register"})]})]})},J=[{path:"/",key:"ROOT",exact:!0,protected:!0,component:function(){return Object(y.jsx)(E,{})}},{path:"/login",key:"LOGIN",exact:!0,component:function(){return Object(y.jsx)(U,{})}},{path:"/register",key:"REGISTER",exact:!0,component:function(){return Object(y.jsx)(R,{})}},{path:"/admin",key:"ADMIN",exact:!0,protected:!0,component:function(){return Object(y.jsx)(E,{})}}];function L(e){var t=e.routes,s=v(),n=Object(a.useState)({authenticated:!1,initializing:!0}),o=Object(l.a)(n,2),c=o[0],r=o[1];return Object(a.useEffect)((function(){return s.auth().onAuthStateChanged((function(e){console.log("USER",e),r(e?{authenticated:!0,initializing:!1}:{authenticated:!1,initializing:!1})}))}),[r]),c.initializing?Object(y.jsx)("div",{children:"Loading..."}):Object(y.jsx)(m.a,{children:Object(y.jsxs)(u.d,{children:[t.map((function(e,t){return e.protected?c?Object(y.jsx)(u.b,{path:e.path,exact:e.exact,render:function(t){return Object(y.jsx)(e.component,Object(i.a)(Object(i.a)({},t),{},{routes:e.routes}))}}):Object(y.jsx)(u.a,{to:"/login"}):Object(y.jsx)(u.b,{path:e.path,exact:e.exact,render:function(t){return Object(y.jsx)(e.component,Object(i.a)(Object(i.a)({},t),{},{routes:e.routes}))}})})),Object(y.jsx)(u.b,{component:function(){return Object(y.jsx)("h1",{children:"404 - Not Found!"})}})]})})}s(241);var z=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(N,{children:Object(y.jsx)(L,{routes:J})})})};r.a.render(Object(y.jsx)(z,{}),document.getElementById("root"))}},[[242,1,2]]]);
//# sourceMappingURL=main.1dd06b9b.chunk.js.map