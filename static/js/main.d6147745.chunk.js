(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),i=n(6),s=n.n(i),o=(n(12),n(2));var j=function(e){var t=e.categories,n=void 0===t?[]:t,a=e.setCurrentCategory,i=e.currentCategory;return Object(r.useEffect)((function(){document.title=i.name}),[i]),Object(c.jsxs)("header",{children:[Object(c.jsx)("div",{className:"header-name",children:Object(c.jsx)("h1",{children:"Jesse Parent"})}),Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{children:n.map((function(e){return Object(c.jsx)("li",{onClick:function(){a(e)},children:e.name},e.id)}))})})]})};var l=function(){return Object(c.jsx)("section",{children:Object(c.jsx)("h2",{children:"About Me"})})};var u=function(){return Object(c.jsx)("section",{children:Object(c.jsx)("h2",{children:"Portfolio"})})},b=n(3),d=n(5);var m=function(){var e=Object(r.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),n=t[0],a=t[1],i=n.name,s=n.email,j=n.message,l=Object(r.useState)(""),u=Object(o.a)(l,2),m=u[0],O=u[1];function h(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),O(t?"":"Your email is invalid.")}else e.target.value.length?O(""):O("".concat(e.target.name," is required."));m||a(Object(d.a)(Object(d.a)({},n),{},Object(b.a)({},e.target.name,e.target.value)))}return Object(c.jsxs)("section",{children:[Object(c.jsx)("h1",{children:"Contact me"}),Object(c.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(n)},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(c.jsx)("input",{type:"text",defaultValue:i,onBlur:h,name:"name"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(c.jsx)("input",{type:"email",name:"email",defaultValue:s,onBlur:h})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(c.jsx)("textarea",{name:"message",rows:"5",defaultValue:j,onBlur:h})]}),m&&Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"error-text",children:m})}),Object(c.jsx)("button",{type:"submit",children:"Submit"})]})]})};var O=function(){return Object(c.jsx)("section",{children:Object(c.jsx)("h2",{children:"Resume"})})};var h=function(){var e=Object(r.useState)([{name:"About Me",id:"aboutme"},{name:"Portfolio",id:"portfolio"},{name:"Contact",id:"contact"},{name:"Resume",id:"resume"}]),t=Object(o.a)(e,1)[0],n=Object(r.useState)(t[0]),a=Object(o.a)(n,2),i=a[0],s=a[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{categories:t,setCurrentCategory:s,currentCategory:i}),Object(c.jsx)("main",{children:function(){switch(i.name){case"Portfolio":return Object(c.jsx)(u,{});case"Contact":return Object(c.jsx)(m,{});case"Resume":return Object(c.jsx)(O,{});default:return Object(c.jsx)(l,{})}}()})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),x()}},[[13,1,2]]]);
//# sourceMappingURL=main.d6147745.chunk.js.map