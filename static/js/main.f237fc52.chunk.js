(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(5),s=n.n(c),o=n(4),i=(n(10),n(11),n(1)),r=n(2),a=n.n(r),l=n(0),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b="alphabet",j="length",h="",d=function(){var t=Object(i.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(i.useState)(!1),r=Object(o.a)(s,2),d=r[0],g=r[1],p=[].concat(u).sort((function(t,e){switch(n){case b:return t.localeCompare(e);case j:return t.length-e.length;default:return 0}}));return d&&p.reverse(),Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",onClick:function(){return c(b)},className:a()("button","is-info",{"is-light":n!==b}),children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",onClick:function(){return c(j)},className:a()("button","is-success",{"is-light":n!==j}),children:"Sort by length"}),Object(l.jsx)("button",{type:"button",onClick:function(){return g(!d)},className:a()("button","is-warning",{"is-light":!d}),children:"Reverse"}),(n!==h||d)&&Object(l.jsx)("button",{type:"button",onClick:function(){c(h),g(!1)},className:"button is-danger is-light",children:"Reset"})]}),Object(l.jsx)("ul",{children:p.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t})}))})]})};s.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f237fc52.chunk.js.map