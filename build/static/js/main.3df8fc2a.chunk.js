(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{112:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(28),s=c.n(n),o=c(5),i=c(122),d=c(119),j=c(124),u=c(11),l=a.a.createContext({primaryColor:"deepskyblue",secondaryColor:"coral"}),b=a.a.createContext({state:{},dispatch:function(){}}),O=c(9),h=c(1);function p(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(""),s=Object(o.a)(n,2),i=s[0],d=s[1],j=Object(u.d)(),l=Object(r.useContext)(b),p=l.state,x=l.dispatch,f=p.id,m=p.user,g=Object(O.b)((function(e){var t=e.id,c=e.user,r=e.title,a=e.create_date,n=e.description,s=e.completed,o=e.completed_date;return{url:"/todos",method:"post",headers:{Authorization:"".concat(p.user.access_token)},data:{id:t,user:c,title:r,create_date:a,description:n,completed:s,completed_date:o}}})),v=Object(o.a)(g,2),C=v[0],y=v[1];return Object(r.useEffect)((function(){C&&!1===C.isLoading&&C.data&&(x({type:"CREATE_TODO",id:f,user:m,create_date:new Date(Date.now()).toLocaleDateString("en-us"),title:C.data.title,description:C.data.description}),console.log(C.data.id),j.navigate("/todo/"+parseInt(C.data.id)))}),[C]),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y({user:m,title:c,create_date:new Date(Date.now()).toLocaleDateString("en-us"),description:i,completed:!1,completed_date:void 0})},children:[Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:["User: ",Object(h.jsx)("b",{children:p.user})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"create-title",children:"Title:"}),Object(h.jsx)("input",{type:"text",value:c,onChange:function(e){a(e.target.value)},name:"create-title",id:"create-title"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"create-description",children:"Description: "}),Object(h.jsx)("textarea",{value:i,onChange:function(e){d(e.target.value)}})]}),Object(h.jsx)("input",{type:"submit",value:"Create"})]})}var x=c(120);function f(e){var t=e.theme,c=e.active,r=e.onClick;return Object(h.jsx)("span",{onClick:r,style:{cursor:"pointer",paddingLeft:8,fontWeight:c?"bold":"normal"},children:Object(h.jsx)("span",{style:{color:t.primaryColor},children:t.name})})}function m(e){var t=e.theme,c=e.setTheme,a=Object(O.b)((function(){return{url:"/themes",method:"get"}})),n=Object(o.a)(a,2),s=n[0],i=n[1];Object(r.useEffect)(i,[]);var d=s.data,j=s.isLoading;function u(e){return e.primaryColor===t.primaryColor&&e.secondaryColor===t.secondaryColor}return Object(h.jsxs)("div",{children:[j&&"Loading themes...",Object(h.jsx)(x.a,{title:"ChangeTheme",id:"basic-nav-dropdown",children:d&&d.map((function(e,t){return Object(h.jsx)(x.a.Item,{children:Object(h.jsx)(f,{theme:e,active:u(e),onClick:function(){return c(e)}},t)})}))})]})}var g=c(80),v=c(123),C=c(121);function y(e){var t=e.show,c=e.handleClose,a=Object(r.useContext)(b).dispatch,n=Object(r.useState)(""),s=Object(o.a)(n,2),i=s[0],d=s[1],j=Object(r.useState)(""),u=Object(o.a)(j,2),l=u[0],p=u[1],x=Object(r.useState)(!1),f=Object(o.a)(x,2),m=f[0],y=f[1];var w=Object(O.b)((function(e,t){return{url:"auth/login",method:"post",data:{username:e,password:t}}})),E=Object(o.a)(w,2),T=E[0],L=E[1];return Object(r.useEffect)((function(){T&&!1===T.isLoading&&(T.data||T.error)&&(T.error?(y(!0),alert("failed")):(y(!1),a({type:"LOGIN",username:T.data[0].username,access_token:T.data.access_token}),alert("success")))}),[T]),Object(h.jsx)(v.a,{show:t,onHide:c,children:Object(h.jsxs)(C.a,{onSubmit:function(e){e.preventDefault(),L(i,l),c()},children:[Object(h.jsx)(v.a.Header,{closeButton:!0,children:Object(h.jsx)(v.a.Title,{children:"Login"})}),Object(h.jsxs)(v.a.Body,{children:[Object(h.jsx)(C.a.Label,{htmlFor:"login-username",children:"Username:"}),Object(h.jsx)(C.a.Control,{type:"text",value:i,onChange:function(e){d(e.target.value)},name:"login-username",id:"login-username"}),Object(h.jsx)(C.a.Label,{htmlFor:"login-password",children:"Password:"}),Object(h.jsx)(C.a.Control,{type:"password",value:l,onChange:function(e){p(e.target.value)},name:"login-password",id:"login-password"}),m&&Object(h.jsx)(C.a.Text,{style:{color:"red"},children:"Invalid username or password"})]}),Object(h.jsxs)(v.a.Footer,{children:[Object(h.jsx)(g.a,{variant:"secondary",onClick:c,children:"Cancel"}),Object(h.jsx)(g.a,{variant:"primary",disabled:0===i.length,type:"submit",children:"Login"})]})]})})}function w(){var e=Object(r.useContext)(b).state,t=Object(r.useContext)(b).dispatch;return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({type:"LOGOUT"})},children:["Logged in as: ",Object(h.jsxs)("b",{children:[e.user.username," "]}),Object(h.jsx)("input",{type:"submit",value:"Logout"})]})}var E=c(2);function T(e){var t=e.show,c=e.handleClose,a=Object(r.useContext)(b).dispatch,n=Object(r.useState)(""),s=Object(o.a)(n,2),i=(s[0],s[1]),d=Object(r.useState)({username:"",password:"",passwordRepeat:""}),j=Object(o.a)(d,2),u=j[0],l=j[1],p=Object(O.b)((function(e,t){return{url:"auth/register",method:"post",data:{username:e,password:t,passwordConfirmation:t}}})),x=Object(o.a)(p,2),f=x[0],m=x[1];return Object(r.useEffect)((function(){f&&f.data&&a({type:"REGISTRATION",username:f.data.username})}),[f]),Object(r.useEffect)((function(){f&&!1===f.isLoading&&(f.data||f.error)&&(f.error?(console.log(f),i("Registration failed, please try again later."),alert("fail")):(console.log(f),i("Registration successful. You may now login."),alert("success")))}),[f]),Object(h.jsx)(v.a,{show:t,onHide:c,children:Object(h.jsxs)(C.a,{onSubmit:function(e){e.preventDefault(),m(u.username,u.password),c()},children:[Object(h.jsx)(v.a.Header,{closeButton:!0,children:Object(h.jsx)(v.a.Title,{children:"Register"})}),Object(h.jsxs)(v.a.Body,{children:[Object(h.jsx)(C.a.Label,{htmlFor:"register-username",children:"Username:"}),Object(h.jsx)(C.a.Control,{type:"text",value:u.username,onChange:function(e){return l(Object(E.a)(Object(E.a)({},u),{},{username:e.target.value}))},name:"register-username",id:"register-username"}),Object(h.jsx)(C.a.Label,{htmlFor:"register-password",children:"Password:"}),Object(h.jsx)(C.a.Control,{type:"password",name:"register-password",id:"register-password",value:u.password,onChange:function(e){return l(Object(E.a)(Object(E.a)({},u),{},{password:e.target.value}))}}),Object(h.jsx)(C.a.Label,{htmlFor:"register-password-repeat",children:"Repeat password:"}),Object(h.jsx)(C.a.Control,{type:"password",name:"register-password-repeat",id:"register-password-repeat",value:u.passwordRepeat,onChange:function(e){return l(Object(E.a)(Object(E.a)({},u),{},{passwordRepeat:e.target.value}))}})]}),Object(h.jsxs)(v.a.Footer,{children:[Object(h.jsx)(g.a,{variant:"secondary",onClick:c,children:"Cancel"}),Object(h.jsx)(g.a,{variant:"primary",type:"submit",disabled:0===u.username.length||0===u.password.length||u.password!==u.passwordRepeat,children:"Register"})]})]})})}function L(){var e=Object(r.useContext)(b).state,t=Object(r.useState)(!1),c=Object(o.a)(t,2),a=c[0],n=c[1],s=Object(r.useState)(!1),i=Object(o.a)(s,2),d=i[0],j=i[1];return e.user?Object(h.jsx)(w,{}):Object(h.jsxs)("div",{className:"justify-content-end",children:[Object(h.jsx)(g.a,{variant:"link",onClick:function(e){return n(!0)},children:"Login"}),Object(h.jsx)(y,{show:a,handleClose:function(){return n(!1)}}),Object(h.jsx)(g.a,{variant:"link",onClick:function(e){return j(!0)},children:"Register"}),Object(h.jsx)(T,{show:d,handleClose:function(){return j(!1)}})]})}var _=function(e){var t=e.text,c=Object(r.useContext)(l);return Object(h.jsx)(u.a,{href:"/",children:Object(h.jsx)(i.a.Brand,{style:{color:c.primaryColor},children:t})})};function S(e){var t=e.setTheme,c=Object(r.useContext)(l),n=Object(r.useContext)(b).state.user;return Object(r.useEffect)((function(){document.title=n?"".concat(n,"\u2019s Blog"):"Blog"}),[n]),Object(h.jsx)(i.a,{bg:"light",expand:"lg",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(i.a.Brand,{href:"/",children:Object(h.jsx)(_,{text:"My Todo"})}),Object(h.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsxs)(i.a.Collapse,{id:"basic-navbar-nav",children:[Object(h.jsx)(j.a,{className:"me-auto",children:n.username&&Object(h.jsx)(j.a.Link,{children:Object(h.jsx)(u.a,{href:"/users/",children:"Show All Users"})})}),Object(h.jsxs)(j.a,{className:"me-auto",children:[n.username&&Object(h.jsx)(j.a.Link,{children:Object(h.jsx)(u.a,{href:"/todo/create",children:"Create New Todo"})}),Object(h.jsx)(m,{theme:c,setTheme:t})]}),Object(h.jsx)(a.a.Suspense,{fallback:"Loading...",children:Object(h.jsx)(L,{})})]})]})})}var D=c(125);function k(e){var t=e.id,c=e.user,a=e.title,n=e.create_date,s=e.description,i=e.completed,d=e.completed_date,j=e.short,p=void 0!==j&&j,x=Object(r.useContext)(l).secondaryColor,f=Object(r.useContext)(b).dispatch,m=Object(O.b)((function(){return{url:"/todos/"+parseInt(t),method:"patch",data:{completed:!i,completed_date:new Date(Date.now()).toLocaleDateString("en-us")}}})),v=Object(o.a)(m,2),C=(v[0],v[1]),y=Object(O.b)((function(){return{url:"/todos/"+t,method:"delete"}})),w=Object(o.a)(y,2),E=(w[0],w[1]);var T=s;return p&&s.length>30&&(T=s.substring(0,30)+"..."),Object(h.jsx)(D.a,{children:Object(h.jsxs)(D.a.Body,{children:[Object(h.jsx)(D.a.Title,{children:Object(h.jsx)(u.a,{style:{color:x},href:"/todo/".concat(t),children:a})}),Object(h.jsx)(D.a.Subtitle,{children:Object(h.jsxs)("p",{children:[" ",Object(h.jsx)("b",{children:"Create by:"})," ",c," on ",n," "]})}),Object(h.jsx)(D.a.Text,{children:T}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"checkbox",checked:i,onClick:function(e){f({type:"TOGGLE_TODO",completed:i,id:t,completed_date:new Date(Date.now()).toLocaleDateString("en-us")}),C({completed:i,completed_date:d})}}),Object(h.jsx)("b",{children:" Complete? "}),Object(h.jsx)("br",{}),i&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("b",{children:"Date Completed:"})," ",Object(h.jsxs)("i",{children:[d," "]})]})]}),Object(h.jsx)("br",{}),Object(h.jsx)(g.a,{style:{background:x},onClick:function(e){f({type:"DELETE_TODO",id:t}),E()},children:" Delete"}),p&&Object(h.jsx)(u.a,{href:"/todo/".concat(t),children:"View full post"})]})})}function R(){var e=Object(r.useContext)(b).state.todos;return Object(h.jsx)("div",{children:e.map((function(e,t){return Object(r.createElement)(k,Object(E.a)(Object(E.a)({},e),{},{id:e.id,user:e.user,title:e.title,create_date:e.create_date,description:e.description,completed:e.completed,completed_date:e.completed_date,key:"Todo-"+t}))}))})}function G(){var e=Object(r.useContext)(b),t=e.state,c=e.dispatch,a=Object(O.b)((function(){return{url:"/todos",method:"get",headers:{Authorization:"".concat(t.user.access_token)}}})),n=Object(o.a)(a,2),s=n[0],i=n[1];Object(r.useEffect)((function(){t.user.access_token&&i()}),[]),Object(r.useEffect)((function(){s&&!1===s.isLoading&&s.data&&c({type:"GET_TODOS",todos:s.data.todos})}),[s]);s.data;var d=s.isLoading;return Object(h.jsxs)(h.Fragment,{children:[d&&"Todos loading..."," ",Object(h.jsx)(R,{})]})}function F(e){var t=e.id,c=Object(O.b)((function(){return{url:"/todos/"+parseInt(t),method:"get"}})),a=Object(o.a)(c,2),n=a[0],s=a[1];return Object(r.useEffect)(s,[t]),Object(h.jsxs)("div",{children:[n&&n.data?Object(h.jsx)(k,Object(E.a)({},n.data)):"Loading...",Object(h.jsx)("hr",{}),Object(h.jsx)("div",{children:Object(h.jsx)(u.a,{href:"/",children:"Go back"})})]})}function I(e){var t=e.id,c=Object(r.useContext)(b),a=(c.state,c.dispatch),n=Object(O.b)((function(){return{url:"/users/"+parseInt(t),method:"get"}})),s=Object(o.a)(n,2),i=s[0],d=s[1];Object(r.useEffect)(d,[t]),Object(r.useEffect)((function(){i&&i.data?document.title="".concat(i.data.username,"\u2019s Blog"):document.title="Blog"}),[i]);var j=Object(O.b)((function(){return{url:"/todos",method:"get"}})),l=Object(o.a)(j,2),p=l[0],x=l[1];Object(r.useEffect)(x,[]),Object(r.useEffect)((function(){p&&p.data&&a({type:"GET_TODOS",todos:p.data.reverse()})}),[p]),Object(r.useEffect)((function(){i&&i.data&&a({type:"GET_PROFILE",user:i.data})}),[p]);p.data,p.isLoading;return Object(h.jsxs)("div",{children:[Object(h.jsx)(R,{}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{children:Object(h.jsx)(u.a,{href:"/users",children:"Go back"})})]})}function B(e){var t=e.id,c=e.username,a=Object(r.useContext)(l).secondaryColor;return Object(h.jsx)(D.a,{children:Object(h.jsx)(D.a.Body,{children:Object(h.jsx)(D.a.Title,{children:Object(h.jsx)(u.a,{style:{color:a},href:"/users/".concat(t),children:c})})})})}function U(){var e=Object(r.useContext)(b).state.users;return Object(h.jsx)("div",{children:e.map((function(e,t){return Object(r.createElement)(B,Object(E.a)(Object(E.a)({},e),{},{id:e.id,username:e.username,key:"user"+t}))}))})}function N(){var e=Object(r.useContext)(b),t=(e.state,e.dispatch),c=Object(O.b)((function(){return{url:"/users",method:"get"}})),a=Object(o.a)(c,2),n=a[0],s=a[1];Object(r.useEffect)(s,[]),Object(r.useEffect)((function(){n&&n.data&&t({type:"USERS",users:n.data})}),[n]);n.data;var i=n.isLoading;return Object(h.jsxs)(h.Fragment,{children:[i&&"Todos loading..."," ",Object(h.jsx)(U,{})]})}c(111);var A=c(12),P=c(33);function H(e,t){switch(t.type){case"LOGIN":case"REGISTRATION":return t.username;case"LOGOUT":return"";case"GET_USERS":return t.users;default:return e}}function z(e,t){switch(t.type){case"CREATE_TODO":return[{id:e.length,user:t.user,title:t.title,create_date:t.create_date,description:t.description,completed:!1,completed_date:""}].concat(Object(P.a)(e));case"DELETE_TODO":return e.filter((function(e){return e.id!==t.id}));case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id&&(e.completed=!t.completed,e.completed_date=t.completed_date),e}));case"GET_TODOS":return t.todos;case"GET_PROFILE":return e.filter((function(e){return e.user===t.user.username}));default:return e}}function J(e,t){return"USERS"===t.type?t.users:e}function M(e,t){return{user:H(e.user,t),users:J(e.users,t),todos:z(e.todos,t)}}var V=function(){var e=Object(r.useReducer)(M,{user:{},users:[],todos:[]}),t=Object(o.a)(e,2),c=t[0],a=t[1],n=(c.user,Object(r.useState)({primaryColor:"#CC5500",secondaryColor:"#E97451"})),s=Object(o.a)(n,2),i=s[0],j=s[1],O=Object(A.f)({"/":Object(A.g)({view:Object(h.jsx)(G,{})}),"/todo/create":Object(A.g)({view:Object(h.jsx)(p,{})}),"/todo/:id":Object(A.g)((function(e){return{view:Object(h.jsx)(F,{id:e.params.id})}})),"/users":Object(A.g)({view:Object(h.jsx)(N,{})}),"/users/:id":Object(A.g)((function(e){return{view:Object(h.jsx)(I,{id:e.params.id})}}))});return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(l.Provider,{value:i,children:Object(h.jsx)(b.Provider,{value:{state:c,dispatch:a},children:Object(h.jsx)(u.b,{routes:O,children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(S,{setTheme:j}),Object(h.jsx)(u.c,{})]})})})})})},W=c(46),Y=c.n(W).a.create({baseURL:"http://localhost:3000/api/"});s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(O.a,{value:Y,children:Object(h.jsx)(V,{})})}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.3df8fc2a.chunk.js.map