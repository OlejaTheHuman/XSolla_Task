(this.webpackJsonpxsolla_react=this.webpackJsonpxsolla_react||[]).push([[0],{25:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(18),i=c.n(n),r=(c(25),c(20)),o=c(9),l=c(3),j=c.p+"static/media/favorite.405cea49.svg",u=c.p+"static/media/isFavorite.e1bc097d.svg",b=c(0);var d=function(e){var t=e.name,c=e.date,a=e.image,n=s.a.useState(!1),i=Object(l.a)(n,2),r=i[0],o=i[1],d=c.split(".");return Object(b.jsxs)("div",{className:"content__block",children:[Object(b.jsx)("img",{className:"block__image",src:a,alt:"Rave Autumn"}),Object(b.jsxs)("div",{className:"block__utils",children:[Object(b.jsx)("div",{className:"block__number",children:d[0]}),Object(b.jsx)("img",{onClick:function(){o(!r)},src:!1===r?j:u,alt:"save",className:"block__favorites"}),Object(b.jsx)("p",{className:"block__name",children:t})]})]})},m=c.p+"static/media/arrow.c381148f.svg";var p=function(e){var t=e.type,c=e.options,a=s.a.useState(0),n=Object(l.a)(a,2),i=n[0],r=n[1],o=s.a.useState(!1),j=Object(l.a)(o,2),u=j[0],d=j[1],p=s.a.useRef(),O=function(e){e.path.includes(p.current)||d(!1)};return s.a.useEffect((function(){d(u)}),[u]),s.a.useEffect((function(){document.body.addEventListener("click",O)}),[]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:[t,": "]}),Object(b.jsxs)("div",{className:"menu__city",children:[Object(b.jsx)("span",{children:c[i]}),Object(b.jsx)("img",{className:!0===u?"flip":"",onClick:function(){d(!u)},src:m,alt:"\u02ec"})]}),u&&Object(b.jsx)("div",{ref:p,className:"menu__popup",children:c.map((function(e,t){return Object(b.jsx)("p",{onClick:function(){return function(e){r(e),d(!1)}(t)},children:e},"".concat(e,"__").concat(t))}))})]})},O=c(19),v=c.n(O);var f=function(){var e=s.a.useState([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return s.a.useEffect((function(){v.a.get("https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json").then((function(e){var t=e.data;console.log(Object(o.a)(t)),a(Object(o.a)(t)),console.log("state",c)}))}),[]),Object(b.jsx)("div",{className:"page",children:Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("p",{className:"header",children:"Event Listing"}),Object(b.jsxs)("nav",{className:"menu",children:[Object(b.jsx)(p,{type:"City",options:["Amsterdam","Perm","Moscow","London"]}),Object(b.jsx)(p,{type:"Month",options:["January","February","March","April","May","June","July","August","September","October","November","December"]})]}),Object(b.jsx)("div",{className:"content",children:c.map((function(e,t){return Object(b.jsx)(d,Object(r.a)({},e),"".concat(t,"__").concat(e.name))}))})]})})};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.017f9ee9.chunk.js.map