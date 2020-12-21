(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(6),s=n.n(i),o=(n(12),n(2));var l=function(e){var t=e.categories,n=void 0===t?[]:t,r=e.setCurrentCategory,i=e.currentCategory;return Object(a.useEffect)((function(){document.title=i.name}),[i]),Object(c.jsxs)("header",{children:[Object(c.jsx)("div",{className:"header-name",children:Object(c.jsx)("h1",{children:"Jesse Parent"})}),Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{children:n.map((function(e){return Object(c.jsx)("li",{onClick:function(){r(e)},children:e.name},e.id)}))})})]})},j={backgroundImage:"url( "+(n.p+"static/media/hero.7eb28e42.jpg")+")"};var u=function(){return Object(c.jsx)("section",{className:"hero",style:j,children:Object(c.jsx)("div",{className:"subtitle",children:Object(c.jsx)("h2",{children:"Explicit Nerd, Closet Jock"})})})};var d=function(){return Object(c.jsx)("section",{className:"content",children:Object(c.jsxs)("article",{id:"about-me",children:[Object(c.jsx)("div",{className:"content-title",children:Object(c.jsx)("h2",{children:"About Me"})}),Object(c.jsxs)("div",{className:"content-body",children:[Object(c.jsx)("p",{children:"My name is Jesse Parent and I am a lot of things."}),Object(c.jsx)("p",{children:"I have maintained a Web page of one kind or another since 1995. Unfortunately with folks who get involved in the Internet, we seldom find time for our own projects. Social networking has allowed an easy way to communicate and keep in touch, so now it\u2019s time to use my Web site what most folks end up using it for: self promotion or as an online brochure."}),Object(c.jsx)("p",{children:"I have been a professional improviser since 2001, first dipping my toe into the water in 1992 while in college. I\u2019ve also been a performance poet since 2007, when I first competed in the National Poetry Slam. On top of that, I have worked as a software engineer since 1995, which pays the bills and keeps my left brain well fed."})]})]})})};var b=function(){return Object(c.jsx)("section",{children:Object(c.jsx)("h2",{children:"Portfolio"})})},m=n(3),h=n(5);var O=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),n=t[0],r=t[1],i=n.name,s=n.email,l=n.message,j=Object(a.useState)(""),u=Object(o.a)(j,2),d=u[0],b=u[1];function O(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),b(t?"":"Your email is invalid.")}else e.target.value.length?b(""):b("".concat(e.target.name," is required."));d||r(Object(h.a)(Object(h.a)({},n),{},Object(m.a)({},e.target.name,e.target.value)))}return Object(c.jsxs)("section",{children:[Object(c.jsx)("h1",{children:"Contact me"}),Object(c.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(n)},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(c.jsx)("input",{type:"text",defaultValue:i,onBlur:O,name:"name"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(c.jsx)("input",{type:"email",name:"email",defaultValue:s,onBlur:O})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(c.jsx)("textarea",{name:"message",rows:"5",defaultValue:l,onBlur:O})]}),d&&Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"error-text",children:d})}),Object(c.jsx)("button",{type:"submit",children:"Submit"})]})]})};var f=function(){return Object(c.jsx)("section",{children:Object(c.jsx)("h2",{children:"Resume"})})};var x=function(){var e=Object(a.useState)([{name:"About Me",id:"aboutme"},{name:"Portfolio",id:"portfolio"},{name:"Contact",id:"contact"},{name:"Resume",id:"resume"}]),t=Object(o.a)(e,1)[0],n=Object(a.useState)(t[0]),r=Object(o.a)(n,2),i=r[0],s=r[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{categories:t,setCurrentCategory:s,currentCategory:i}),Object(c.jsx)(u,{}),Object(c.jsx)("main",{children:function(){switch(i.name){case"Portfolio":return Object(c.jsx)(b,{});case"Contact":return Object(c.jsx)(O,{});case"Resume":return Object(c.jsx)(f,{});default:return Object(c.jsx)(d,{})}}()})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),g()}},[[13,1,2]]]);
//# sourceMappingURL=main.f9092b8b.chunk.js.map