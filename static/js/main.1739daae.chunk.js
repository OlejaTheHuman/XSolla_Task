(this.webpackJsonpxsolla_react=this.webpackJsonpxsolla_react||[]).push([[0],{25:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),i=c.n(s),r=(c(25),c(20)),o=c(9),l=c(3),j=c.p+"static/media/raveAutumn.c1011498.png",u=c.p+"static/media/favorite.405cea49.svg",b=c.p+"static/media/isFavorite.e1bc097d.svg",d=c(0);var m=function(e){var t=e.name,c=e.date,a=n.a.useState(!1),s=Object(l.a)(a,2),i=s[0],r=s[1],o=c.split(".");return Object(d.jsxs)("div",{className:"content__block",children:[Object(d.jsx)("img",{className:"block__image",src:j,alt:"Rave Autumn"}),Object(d.jsxs)("div",{className:"block__utils",children:[Object(d.jsx)("div",{className:"block__number",children:o[0]}),Object(d.jsx)("img",{onClick:function(){r(!i)},src:!1===i?u:b,alt:"save",className:"block__favorites"}),Object(d.jsx)("p",{className:"block__name",children:t})]})]})},p=c.p+"static/media/arrow.c381148f.svg";var v=function(e){var t=e.type,c=e.options,a=n.a.useState(0),s=Object(l.a)(a,2),i=s[0],r=s[1],o=n.a.useState(!1),j=Object(l.a)(o,2),u=j[0],b=j[1],m=n.a.useRef(),v=function(e){e.path.includes(m.current)||b(!1)};return n.a.useEffect((function(){b(u)}),[u]),n.a.useEffect((function(){document.body.addEventListener("click",v)}),[]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[t,": "]}),Object(d.jsxs)("div",{className:"menu__city",children:[Object(d.jsx)("span",{children:c[i]}),Object(d.jsx)("img",{className:!0===u?"flip":"",onClick:function(){b(!u)},src:p,alt:"\u02ec"})]}),u&&Object(d.jsx)("div",{ref:m,className:"menu__popup",children:c.map((function(e,t){return Object(d.jsx)("p",{onClick:function(){return function(e){r(e),b(!1)}(t)},children:e},"".concat(e,"__").concat(t))}))})]})},O=c(19),f=c.n(O);var h=function(){var e=n.a.useState([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return n.a.useEffect((function(){f.a.get("https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json").then((function(e){var t=e.data;console.log(Object(o.a)(t)),a(Object(o.a)(t)),console.log("state",c)}))}),[]),Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("p",{className:"header",children:"Event Listing"}),Object(d.jsxs)("nav",{className:"menu",children:[Object(d.jsx)(v,{type:"City",options:["Amsterdam","Perm","Moscow","London"]}),Object(d.jsx)(v,{type:"Month",options:["January","February","March","April","May","June","July","August","September","October","November","December"]})]}),Object(d.jsx)("div",{className:"content",children:c.map((function(e,t){return Object(d.jsx)(m,Object(r.a)({},e),"".concat(t,"__").concat(e.name))}))})]})})};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.1739daae.chunk.js.map