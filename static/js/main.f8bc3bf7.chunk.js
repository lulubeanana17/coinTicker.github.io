(this["webpackJsonpexercise-movie"]=this["webpackJsonpexercise-movie"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(8),s=c.n(n),a=c(4),o=(c(13),c(5)),j=c(1);var r=function(){var e=Object(i.useState)(!0),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)([]),r=Object(a.a)(s,2),b=r[0],h=r[1];return Object(i.useEffect)((function(){fetch("https://api.coinpaprika.com/v1/tickers").then((function(e){return e.json()})).then((function(e){h(e.slice(0,100)),n(!1)}))}),[]),Object(j.jsxs)("div",{className:"body",children:[Object(j.jsx)("h1",{className:"bodyTitle",children:"Live Ticker"}),Object(j.jsx)("h3",{className:"bodyLoading",children:c?"loading..":null}),Object(j.jsx)("ul",{children:b.map((function(e){return Object(j.jsxs)("li",{className:"box",children:[Object(j.jsxs)("div",{className:"box-title",children:[e.name," (",e.symbol,")"]}),Object(j.jsxs)("div",{className:"box-price",children:["$",e.quotes.USD.price," USD"]}),Object(j.jsx)(o.b,{to:"/cointicker.github.io"+"/coin/".concat(e.id),children:Object(j.jsx)("button",{className:"box-button",children:"Exchange"})})]},e.id)}))})]})};c(15);var b=function(){return Object(j.jsx)("div",{className:"aboutBox",children:Object(j.jsxs)("h1",{children:["The Coins 100 is a simple site that support coins' information with live price.",Object(j.jsx)("br",{}),"The exchange is able to show the approximate USD to the coin.",Object(j.jsx)("br",{})]})})},h=c(2);c(16);var l=function(){var e=Object(i.useState)(0),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(0),o=Object(a.a)(s,2),r=o[0],b=o[1],l=Object(i.useState)({}),u=Object(a.a)(l,2),x=u[0],d=u[1],O=Object(h.g)().id;return Object(i.useEffect)((function(){fetch("https://api.coinpaprika.com/v1/tickers/".concat(O)).then((function(e){return e.json()})).then((function(e){d(e),b(e.quotes.USD.price)}))}),[O]),Object(j.jsxs)("div",{className:"coinBox",children:[Object(j.jsx)("h1",{className:"coinTitle",children:x.name}),Object(j.jsxs)("h3",{className:"coinPrice",children:["Current Price: $",r," USD"]}),Object(j.jsxs)("div",{className:"coinExchange",children:[Object(j.jsx)("input",{onChange:function(e){e.preventDefault(),n(e.target.value)},type:"number",placeholder:"USD"}),Object(j.jsxs)("h3",{children:["Exchanged: ",c/r," ",x.symbol]})]})]})};c(17);function u(){return Object(j.jsxs)(o.a,{children:[Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)("h1",{children:Object(j.jsx)(o.b,{to:"/cointicker.github.io/",className:"homeTitle",children:"The Coins 100"})}),Object(j.jsx)("div",{children:Object(j.jsx)(o.b,{to:"/cointicker.github.io/about",className:"aboutTitle",children:"About"})})]}),Object(j.jsx)("div",{className:"info",children:Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{exact:!0,path:"/cointicker.github.io/",element:Object(j.jsx)(r,{})}),Object(j.jsx)(h.a,{path:"/cointicker.github.io/coin/:id",element:Object(j.jsx)(l,{})}),Object(j.jsx)(h.a,{path:"/cointicker.github.io/about",element:Object(j.jsx)(b,{})})]})})]})}s.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.f8bc3bf7.chunk.js.map