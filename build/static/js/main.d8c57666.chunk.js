(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(2),a=t.n(r),o=t(15),i=t.n(o),s=(t(6),t(3)),u=function(e){var n=e.person,t=e.eliminatePerson;return Object(c.jsxs)("li",{children:[n.name,"  ",n.number,"  ",Object(c.jsx)("button",{onClick:t,children:"delete"})]})},d=t(4),l=t.n(d),j="/api/persons",b=function(){return l.a.get(j)},h=function(e){return l.a.post(j,e)},f=function(e,n){return l.a.put("".concat(j,"/").concat(e),n)},m=function(e){return l.a.delete("".concat(j,"/").concat(e))},O=function(e){return Object(c.jsxs)("p",{children:["filter shown with  ",Object(c.jsx)("input",{onChange:e.onChange})]})},p=function(e){var n=Object(r.useState)("some message"),t=Object(s.a)(n,2),a=t[0],o=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)("ul",{children:e.persons.filter((function(n){return n.name.includes(e.filter)})).map((function(n){return Object(c.jsx)(u,{person:n,eliminatePerson:function(){return t=n.id,"http://localhost:3001/notes/".concat(t),e.persons.find((function(e){return e.id===t})),void m(t).then((function(e){o("id "+t+" was deleted"),alert(a)})).catch((function(e){alert("the person '".concat(t,"' was already deleted from server"))}));var t}},n.id)}))})]})},v=function(e){return Object(c.jsx)("form",{onSubmit:e.submit,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Add a new number"}),Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})})},g=function(e){var n=e.message;e.type;return null===n?null:n.includes("Added")?Object(c.jsx)("div",{className:"message",children:n}):Object(c.jsx)("div",{className:"invisible",children:n})},x=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)(""),i=Object(s.a)(o,2),u=i[0],d=i[1],l=Object(r.useState)(""),j=Object(s.a)(l,2),m=j[0],x=j[1],w=Object(r.useState)(""),C=Object(s.a)(w,2),N=C[0],S=C[1],k=Object(r.useState)("some error happened..."),y=Object(s.a)(k,2),P=y[0],F=y[1];Object(r.useEffect)((function(){b().then((function(e){a(e.data)}))}),[]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(g,{message:P}),Object(c.jsx)(O,{onChange:function(e){S(e.target.value)}}),Object(c.jsx)(v,{submit:function(e){e.preventDefault();var n={name:u,number:m,date:(new Date).toISOString(),id:Math.random()*t.length+1};if(console.log(n),console.log(t),0==function(e,n){var t;for(t=0;t<n.length;t++)if(n[t].name===e.name)return!0;return!1}(n,t))h(n).then((function(e){a(t.concat(e.data)),d(""),x(""),F("Added "+n.name)}));else if(1==window.confirm("".concat(u," is already added to phonebook, replace the old number with the new one? "))){var c=function(e,n){var t;for(t=0;t<n.length;t++)if(n[t].name===e.name)return n[t].id}(n,t);f(c,n).then((function(e){a(t.map((function(e){return e.id!==c?e:n}))),d(""),x("")})).catch((function(e){F("Note '".concat(n.name,"' was already removed from server")),setTimeout((function(){F(null)}),5e3)}))}else alert("ok")},newName:u,handleNameChange:function(e){d(e.target.value)},newNumber:m,handleNumberChange:function(e){x(e.target.value)}}),Object(c.jsx)(p,{persons:t,filter:N})]})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),a(e),o(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),w()},6:function(e,n,t){}},[[39,1,2]]]);
//# sourceMappingURL=main.d8c57666.chunk.js.map