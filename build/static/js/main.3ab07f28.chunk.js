(this["webpackJsonplarin.cam"]=this["webpackJsonplarin.cam"]||[]).push([[0],{116:function(e,t,s){},225:function(e,t){},239:function(e,t,s){},242:function(e,t,s){"use strict";s.r(t);var n,a=s(3),o=s.n(a),c=s(101),r=s.n(c),i=(s(116),s(24)),u=s(17),m=s(53),l=s(19),p=s(11),j=s.n(p),d=s(23),h=s(29),b=s(56),O=s(57),g=O.a().shape({username:O.b().email().required("Username is a required field."),password:O.b().min(6,"Password must be at least 6 characters long.").required("Password is a required field.")}),f=s(44),x={apiKey:"AIzaSyCDN0Hii6Mznt2Y_DaRprMWVn7kwR9-xlY",authDomain:"larincam.firebaseapp.com",projectId:"larincam",storageBucket:"larincam.appspot.com",messagingSenderId:"70794209044",appId:"1:70794209044:web:1f0ccefcdfb498f5fcc401"};function v(){return"undefined"!==typeof window?n||(n=f.a.initializeApp(x)):null}var y=s(6),N=Object(a.createContext)(null);var w=function(e){var t=e.children,s=Object(a.useState)(null),n=Object(u.a)(s,2),o=n[0],c=n[1];return Object(y.jsx)(N.Provider,{value:{currentUser:o,setCurrentUser:c},children:t})};var U=function(e){var t=Object(a.useContext)(N),s=Object(l.g)(),n=v(),o={mode:"onSubmit",reValidateMode:"onChange",resolver:Object(b.a)(g)},c=Object(h.d)(o),r=c.handleSubmit,m=c.register,p=Object(a.useState)(!1),O=Object(u.a)(p,2),f=(O[0],O[1]),x=function(){var e=Object(d.a)(j.a.mark((function e(a){var o,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(!0),o=a.username,c=a.password,n.auth().signInWithEmailAndPassword(o,c).then((function(e){f(!1),console.log(e);var n=e.user;t.setCurrentUser(n),s.push("/")})).catch((function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=Object(a.useState)({authenticated:!1,initializing:!0}),U=Object(u.a)(w,2),S=U[0],k=U[1];return Object(a.useEffect)((function(){return n.auth().onAuthStateChanged((function(e){console.log("USER",e),k(e?{authenticated:!0,initializing:!1}:{authenticated:!1,initializing:!1})}))}),[k]),S.authenticated?Object(y.jsx)(l.a,{to:"/"}):Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("h1",{children:"Sign in"}),Object(y.jsxs)("form",{action:"",onSubmit:r((function(e){var t=e.password,s=e.username;x({username:s,password:t})})),className:"mt-3 col-12 col-md-5 mx-auto",children:[Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"username",children:"Email"}),Object(y.jsx)("input",Object(i.a)(Object(i.a)({},m("username")),{},{type:"text",name:"username",className:"form-control rounded mt-2",id:"username"}))]}),Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"password",children:"Password"}),Object(y.jsx)("input",Object(i.a)(Object(i.a)({},m("password",{minLength:{value:6,message:"Password length must be at least 6 characters"}})),{},{type:"password",name:"password",className:"form-control rounded mt-2",id:"password"}))]}),Object(y.jsx)("button",{className:"btn btn-primary mt-4 w-100",type:"submit",children:"Register"})]})]})},S=s(111),k=(s(237),s(238),function(e){var t=o.a.useRef(null),s=e.options,n=function(e){return Object(y.jsx)("div",{"data-vjs-player":!0,children:Object(y.jsx)("video",{ref:t,className:"video-js vjs-theme-city vjs-big-play-centered"})})};return o.a.useEffect((function(){var e,n=t.current;return n&&(e=Object(S.a)(n,s,(function(){}))),function(){e&&e.dispose()}}),[s]),Object(y.jsx)(n,{})}),E=[{username:"Michal",message:"Jeee Larinka",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"K\xe1\u0165a",message:"No jo opravdu",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"Adam",message:"Je b\xe1je\u010dn\xe1",time:"17:03",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"K\xe1\u0165a",message:"No jo opravdu",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"Michal",message:"Jeee Larinka",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"K\xe1\u0165a",message:"No jo opravdu",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"Adam",message:"Je b\xe1je\u010dn\xe1",time:"17:03",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"K\xe1\u0165a",message:"No jo opravdu",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"Michal",message:"Jeee Larinka",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"K\xe1\u0165a",message:"No jo opravdu",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"Adam",message:"Je b\xe1je\u010dn\xe1",time:"17:03",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"K\xe1\u0165a",message:"No jo opravdu",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"Michal",message:"Jeee Larinka",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"K\xe1\u0165a",message:"No jo opravdu",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"Adam",message:"Je b\xe1je\u010dn\xe1",time:"17:03",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"},{username:"K\xe1\u0165a",message:"No jo opravdu",time:"16:54",photoUrl:"https://joyonlineschool.com/static/emptyuserphoto.png"}];var A=function(e){return Object(y.jsxs)("div",{className:"chat",children:[Object(y.jsx)("h1",{children:"Chat"}),Object(y.jsx)("div",{className:"messages",children:E.map((function(e){var t=e.username,s=e.message,n=(e.time,e.photoUrl);return Object(y.jsxs)("div",{className:"message d-flex mb-3 align-items-center",children:[Object(y.jsx)("img",{src:n,alt:"",className:"me-2"}),Object(y.jsxs)("div",{className:"d-flex flex-column align-items-start",children:[Object(y.jsx)("span",{className:"username",children:t}),Object(y.jsx)("p",{className:"message-text",children:s})]})]})}))})]})};s(239);var J=function(e){var t=v(),s=Object(a.useState)("asd"),n=Object(u.a)(s,2),o=n[0],c=n[1];return Object(a.useEffect)((function(){t.firestore().collection("paths").doc("livestream").get().then((function(e){e.exists?c(e.data().url):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))}),[]),o?Object(y.jsxs)("div",{className:"container",children:["Livestream",Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-12 col-lg-9",children:Object(y.jsx)("div",{className:"video-wrapper",children:Object(y.jsx)(k,{options:{autoplay:!0,controls:!0,responsive:!0,liveui:!0,fluid:!0,sources:[{src:"http://192.168.0.116/play.m3u8",type:"application/x-mpegURL"}]}})})}),Object(y.jsx)("div",{className:"col-12 col-lg-3",children:Object(y.jsx)(A,{})})]})]}):Object(y.jsx)("div",{children:"Loading..."})};s(240);var L=function(e){var t={mode:"onSubmit",reValidateMode:"onChange",resolver:Object(b.a)(g)},s=Object(h.d)(t),n=s.handleSubmit,o=s.register,c=Object(a.useState)(!1),r=Object(u.a)(c,2),m=(r[0],r[1],function(){var e=Object(d.a)(j.a.mark((function e(t){var s,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=t.username,n=t.password,f.a.auth().createUserWithEmailAndPassword(s,n).then((function(e){e.user})).catch((function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("h1",{children:"Join our community"}),Object(y.jsxs)("form",{action:"",onSubmit:n((function(e){var t=e.password,s=e.username;m({username:s,password:t})})),className:"mt-3 col-12 col-md-5 mx-auto",children:[Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"username",children:"Email"}),Object(y.jsx)("input",Object(i.a)(Object(i.a)({},o("username")),{},{type:"text",name:"username",className:"form-control rounded mt-2",id:"username"}))]}),Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"password",children:"Password"}),Object(y.jsx)("input",Object(i.a)(Object(i.a)({},o("password",{minLength:{value:6,message:"Password length must be at least 6 characters"}})),{},{type:"password",name:"password",className:"form-control rounded mt-2",id:"password"}))]}),Object(y.jsx)("button",{className:"btn btn-primary mt-4 w-100",type:"submit",children:"Register"})]})]})},R=[{path:"/",key:"ROOT",exact:!0,protected:!0,component:function(){return Object(y.jsx)(J,{})}},{path:"/login",key:"LOGIN",exact:!0,component:function(){return Object(y.jsx)(U,{})}},{path:"/register",key:"REGISTER",exact:!0,component:function(){return Object(y.jsx)(L,{})}},{path:"/admin",key:"ADMIN",exact:!0,protected:!0,component:function(){return Object(y.jsx)(J,{})}}];function z(e){var t=e.routes,s=v(),n=Object(a.useState)({authenticated:!1,initializing:!0}),o=Object(u.a)(n,2),c=o[0],r=o[1];return Object(a.useEffect)((function(){return s.auth().onAuthStateChanged((function(e){console.log("USER",e),r(e?{authenticated:!0,initializing:!1}:{authenticated:!1,initializing:!1})}))}),[r]),c.initializing?Object(y.jsx)("div",{children:"Loading..."}):Object(y.jsx)(m.a,{children:Object(y.jsxs)(l.d,{children:[t.map((function(e,t){return e.protected?c?Object(y.jsx)(l.b,{path:e.path,exact:e.exact,render:function(t){return Object(y.jsx)(e.component,Object(i.a)(Object(i.a)({},t),{},{routes:e.routes}))}}):Object(y.jsx)(l.a,{to:"/login"}):Object(y.jsx)(l.b,{path:e.path,exact:e.exact,render:function(t){return Object(y.jsx)(e.component,Object(i.a)(Object(i.a)({},t),{},{routes:e.routes}))}})})),Object(y.jsx)(l.b,{component:function(){return Object(y.jsx)("h1",{children:"404 - Not Found!"})}})]})})}s(241);var C=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(w,{children:Object(y.jsx)(z,{routes:R})})})};r.a.render(Object(y.jsx)(C,{}),document.getElementById("root"))}},[[242,1,2]]]);
//# sourceMappingURL=main.3ab07f28.chunk.js.map