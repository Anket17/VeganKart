(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/menu.b3f49afd.svg"},38:function(e,t,a){e.exports=a.p+"static/media/close.2c5552a1.svg"},39:function(e,t,a){e.exports=a.p+"static/media/cart.8bf1af37.svg"},46:function(e,t,a){e.exports=a(79)},51:function(e,t,a){},74:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),o=(a(51),a(6)),u=a(2),i=a.n(u),s=a(4),m=a(1),d=a(3),p=a.n(d);var E=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(m.a)(c,2),o=l[0],u=l[1],d=Object(n.useState)(""),E=Object(m.a)(d,2),b=E[0],f=E[1],h=Object(n.useState)(""),v=Object(m.a)(h,2),g=v[0],O=v[1],j=Object(n.useState)(""),y=Object(m.a)(j,2),x=y[0],k=y[1],w=Object(n.useState)(1),C=Object(m.a)(w,2),_=C[0],A=C[1],P=Object(n.useState)(0),N=Object(m.a)(P,2),S=N[0],I=N[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/products?limit=".concat(9*_,"&").concat(b,"&").concat(g,"&title[regex]=").concat(x));case 2:t=e.sent,r(t.data.products),I(t.data.result);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o,b,g,x,_]),{products:[a,r],callback:[o,u],category:[b,f],sort:[g,O],search:[x,k],page:[_,A],result:[S,I]}},b=a(8),f=a(14),h=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(!1),o=Object(m.a)(l,2),u=o[0],d=o[1],E=Object(n.useState)([]),h=Object(m.a)(E,2),v=h[0],g=h[1],O=Object(n.useState)([]),j=Object(m.a)(O,2),y=j[0],x=j[1];Object(n.useEffect)((function(){e&&function(){var t=Object(s.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("/user/infor",{headers:{Authorization:e}});case 3:a=t.sent,c(!0),1===a.data.role?d(!0):d(!1),g(a.data.cart),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert(t.t0.response.data.msg);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}()()}),[e]);var k=function(){var t=Object(s.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",alert("Please Login to Continue Buying"));case 2:if(!v.every((function(e){return e._id!==a._id}))){t.next=9;break}return g([].concat(Object(f.a)(v),[Object(b.a)(Object(b.a)({},a),{},{quantity:1})])),t.next=7,p.a.patch("/user/addcart",{cart:[].concat(Object(f.a)(v),[Object(b.a)(Object(b.a)({},a),{},{quantity:1})])},{headers:{Authorization:e}});case 7:t.next=10;break;case 9:alert("This Product has been added to cart.");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{isLogged:[r,c],isAdmin:[u,d],cart:[v,g],addCart:k,history:[y,x]}},v=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(m.a)(c,2),o=l[0],u=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/category");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),{categories:[a,r],callback:[o,u]}},g=Object(n.createContext)(),O=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(m.a)(a,2),l=c[0],o=c[1];Object(n.useEffect)((function(){if(localStorage.getItem("firstLogin")){var e=function(){var t=Object(s.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/user/refresh_token");case 2:a=t.sent,o(a.data.accesstoken),setTimeout((function(){e()}),6e5);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e()}}),[]);var u={token:[l,o],productsAPI:E(),userAPI:h(l),categoriesAPI:v()};return r.a.createElement(g.Provider,{value:u},t)},j=a(34),y=a(37),x=a.n(y),k=a(38),w=a.n(k),C=a(39),_=a.n(C);var A=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.userAPI.isLogged,1)[0],a=Object(m.a)(e.userAPI.isAdmin,1)[0],c=Object(m.a)(e.userAPI.cart,1)[0],l=Object(n.useState)(!1),u=Object(m.a)(l,2),d=u[0],E=u[1],b=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/user/logout");case 2:localStorage.clear(),window.location.href="/";case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f={left:d?0:"-100%"};return r.a.createElement("header",{className:"fixed-top"},r.a.createElement("div",{className:"menu",onClick:function(){return E(!d)}},r.a.createElement("img",{src:x.a,alt:"",width:"30"})),r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,r.a.createElement(o.b,{to:"/"},a?"Admin":"TheVeganKart"))),r.a.createElement("ul",{style:f},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/productlist"},a?"Products":"Food")),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/create_product"},"Create Product")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/category"},"Categories"))),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/history"},"History")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",onClick:b},"Logout"))):r.a.createElement("li",null,r.a.createElement(o.b,{to:"/login"},"Login / Register")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/about"},"About Us")),r.a.createElement("li",{onClick:function(){return E(!d)}},r.a.createElement("img",{src:w.a,alt:"",width:"30",className:"menu"}))),a?"":r.a.createElement("div",{className:"cart-icon"},r.a.createElement("span",null,c.length),r.a.createElement(o.b,{to:"/cart"},r.a.createElement("img",{src:_.a,alt:"",width:"30"}))))},P=a(7),N=function(e){var t=e.product,a=e.deleteProduct,c=Object(n.useContext)(g),l=Object(m.a)(c.userAPI.isAdmin,1)[0],u=c.userAPI.addCart;return r.a.createElement("div",{className:"row_btn"},l?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{id:"btn_buy",to:"#!",onClick:function(){return a(t._id,t.images.public_id)}},"Delete"),r.a.createElement(o.b,{id:"btn_view",to:"/edit_product/".concat(t._id)},"Edit")):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{id:"btn_buy",to:"#!",onClick:function(){return u(t)}},"Buy"),r.a.createElement(o.b,{id:"btn_view",to:"/detail/".concat(t._id)},"View")))},S=function(e){var t=e.product,a=e.isAdmin,n=e.deleteProduct,c=e.handleCheck;return r.a.createElement("div",{className:"product_card"},a&&r.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:function(){return c(t._id)}}),r.a.createElement("img",{src:t.images.url,alt:""}),r.a.createElement("div",{className:"product_box"},r.a.createElement("h2",{title:t.title},t.title),r.a.createElement("span",null,"\u20b9",t.price),r.a.createElement("p",null,t.description)),r.a.createElement(N,{product:t,deleteProduct:n}))},I=(a(74),function(){return r.a.createElement("div",{className:"load-page"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null))))))))))});var z=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.categoriesAPI.categories,1)[0],a=Object(m.a)(e.productsAPI.category,2),c=a[0],l=a[1],o=Object(m.a)(e.productsAPI.sort,2),u=o[0],i=o[1],s=Object(m.a)(e.productsAPI.search,2),d=s[0],p=s[1];return r.a.createElement("div",{className:"filter_menu"},r.a.createElement("div",{className:"row"},r.a.createElement("span",null,"Filters: "),r.a.createElement("select",{name:"category",value:c,onChange:function(e){l(e.target.value),p("")}},r.a.createElement("option",{value:""},"All Products"),t.map((function(e){return r.a.createElement("option",{value:"category="+e._id,key:e._id},e.name)})))),r.a.createElement("input",{type:"text",value:d,placeholder:"Enter your search!",onChange:function(e){return p(e.target.value.toLowerCase())}}),r.a.createElement("div",{className:"row sort"},r.a.createElement("span",null,"Sort: "),r.a.createElement("select",{value:u,onChange:function(e){return i(e.target.value)}},r.a.createElement("option",{value:""},"Newest "),r.a.createElement("option",{value:"sort=oldest"},"Oldest "),r.a.createElement("option",{value:"sort=-sold"},"Best Sales"),r.a.createElement("option",{value:"sort=-price"},"Price: High-Low"),r.a.createElement("option",{value:"sort=price"},"Price: Low-High"))))};var D=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.productsAPI.page,2),a=t[0],c=t[1],l=Object(m.a)(e.productsAPI.result,1)[0];return r.a.createElement("div",{className:"load_more"},l<1*a?"":r.a.createElement("button",{onClick:function(){return c(a+1)}},"Load more"))};var L=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.productsAPI.products,2),a=t[0],c=t[1],l=Object(m.a)(e.userAPI.isAdmin,1)[0],o=Object(m.a)(e.token,1)[0],u=Object(m.a)(e.productsAPI.callback,2),d=u[0],E=u[1],b=Object(n.useState)(!1),h=Object(m.a)(b,2),v=h[0],O=h[1],j=Object(n.useState)(!1),y=Object(m.a)(j,2),x=y[0],k=y[1],w=function(e){a.forEach((function(t){t._id===e&&(t.checked=!t.checked)})),c(Object(f.a)(a))},C=function(){var e=Object(s.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),n=p.a.post("/api/destroy",{public_id:a},{headers:{Authorizaton:o}}),r=p.a.delete("/api/products/".concat(t),{headers:{Authorizaton:o}}),e.next=6,n;case 6:return e.next=8,r;case 8:O(!1),E(!d),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}();return v?r.a.createElement("div",{className:"products"},r.a.createElement(I,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),l&&r.a.createElement("div",{className:"delete-all"},r.a.createElement("span",null,"Select all"),r.a.createElement("input",{type:"checkbox",checked:x,onChange:function(){a.forEach((function(e){e.checked=!x})),c(Object(f.a)(a)),k(!x)}}),r.a.createElement("button",{onClick:function(){a.forEach((function(e){e.checked&&C(e._id,e.images.public_id)}))}},"Delete All")),r.a.createElement("div",{className:"products"},a.map((function(e){return r.a.createElement(S,{key:e._id,product:e,isAdmin:l,deleteProduct:C,handleCheck:w})}))),r.a.createElement(D,null),0===a.length&&r.a.createElement(I,null))},q=function(){var e=Object(P.g)(),t=Object(n.useContext)(g),a=Object(m.a)(t.productsAPI.products,1)[0],c=t.userAPI.addCart,l=Object(n.useState)([]),u=Object(m.a)(l,2),i=u[0],s=u[1];return Object(n.useEffect)((function(){e.id&&a.forEach((function(t){t._id===e.id&&s(t)}))}),[e.id,a]),console.log(i),0===i.length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"detail"},r.a.createElement("img",{src:i.images.url,alt:""}),r.a.createElement("div",{className:"box-detail"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,i.title),r.a.createElement("h6",null,i.product_id)),r.a.createElement("span",null,"\u20b9 ",i.price),r.a.createElement("p",null,i.description),r.a.createElement("p",null,i.content),r.a.createElement("p",null,"Sold: ",i.sold),r.a.createElement(o.b,{to:"/cart",className:"cart",onClick:function(){return c(i)}},"Buy Now"))),r.a.createElement("div",null,r.a.createElement("h2",null,"Similar Products"),r.a.createElement("div",{className:"products"},a.map((function(e){return e.category===i.category?r.a.createElement(S,{key:e._id,product:e}):null})))))},F=a(41),T=a(42),R=a(45),V=a(44),K=a(43),U=a.n(K),X=function(e){Object(R.a)(a,e);var t=Object(V.a)(a);function a(){return Object(F.a)(this,a),t.apply(this,arguments)}return Object(T.a)(a,[{key:"render",value:function(){var e=this,t=this.props.total;return r.a.createElement(U.a,{env:"sandbox",client:{sandbox:"AR0rXqLiXBGfgGMiOgHCyDizi3LPLfXuLO088gyu8Z8dVL4xgR7NS2Cw1EXyzX8LS6mLKOgLYp9MuKwV",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){console.log("The payment was succeeded!",t),e.props.tranSuccess(t)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"small",color:"blue",shape:"rect",label:"checkout",tagline:"false"}})}}]),a}(r.a.Component),B=function(e){return new Promise((function(t){var a=document.createElement("script");a.src=e,document.body.appendChild(a),a.onload=function(){t(!0)},a.onerror=function(){t(!1)},document.body.appendChild(a)}))},H="localhost"===document.domain,Y=function(){function e(){return(e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("https://checkout.razorpay.com/v1/checkout.js");case 2:if(e.sent){e.next=6;break}return alert("Are you online"),e.abrupt("return");case 6:return e.next=8,fetch("http://localhost:5000/razorpay",{method:"POST"}).then((function(e){return e.json()}));case 8:t=e.sent,console.log(t),a={key:H?"rzp_test_v8g0nz8rhhdJxD":"API N/A",currency:t.currency,amount:G.total,name:"The Vegan Kart",description:"Test Transaction",image:"https://example.com/your_logo",order_id:t.id,handler:function(e){alert(e.razorpay_payment_id),alert(e.razorpay_order_id),alert(e.razorpay_signature)},prefill:{name:"Gaurav Kumar",email:"gaurav.kumar@example.com",contact:"9999999999"}},new window.Razorpay(a).open();case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.apply(this,arguments)}},"Pay"))};var G=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.userAPI.cart,2),a=t[0],c=t[1],l=Object(m.a)(e.token,1)[0],o=Object(n.useState)(0),u=Object(m.a)(o,2),d=u[0],E=u[1];Object(n.useEffect)((function(){!function(){var e=a.reduce((function(e,t){return e+t.price*t.quantity}),0);E(e)}()}),[a]);var b=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.patch("/user/addcart",{cart:t},{headers:{Authorization:l}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.paymentID,r=t.address,e.next=3,p.a.post("/api/payment",{cart:a,paymentID:n,address:r},{headers:{Authorization:l}});case 3:c([]),b([]),alert("you have successfully placed and order.");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return 0===a.length?r.a.createElement("h2",{style:{textAlign:"center",fontSize:"5rem"}},"Cart Empty"):r.a.createElement("div",null,a.map((function(e){return r.a.createElement("div",{className:"detail cart",key:e._id},r.a.createElement("img",{src:e.images.url,alt:""}),r.a.createElement("div",{className:"box-detail"},r.a.createElement("h2",null,e.title),r.a.createElement("span",null," \u20b9 ",e.price*e.quantity),r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.content),r.a.createElement("div",{className:"amount"},r.a.createElement("button",{onClick:function(){return t=e._id,a.forEach((function(e){e._id===t&&(1===e.quantity?e.quantity=1:e.quantity-=1)})),c(Object(f.a)(a)),void b(a);var t}}," - "),r.a.createElement("span",null,e.quantity),r.a.createElement("button",{onClick:function(){return t=e._id,a.forEach((function(e){e._id===t&&(e.quantity+=1)})),c(Object(f.a)(a)),void b(a);var t}}," + ")),r.a.createElement("div",{className:"delete",onClick:function(){return t=e._id,void(window.confirm("Do you want to Remove this Product?")&&(a.forEach((function(e,n){(e._id=t)&&a.splice(n,1)})),c(Object(f.a)(a)),b(a)));var t}},"X")))})),r.a.createElement("div",{className:"total"},r.a.createElement("h3",null,"Total: \u20b9 ",d),r.a.createElement(X,{total:d,tranSuccess:h}),r.a.createElement(Y,null)))},J=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.userAPI.history,2),a=t[0],c=t[1],l=Object(m.a)(e.userAPI.isAdmin,1)[0],u=Object(m.a)(e.token,1)[0];return Object(n.useEffect)((function(){u&&function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=7;break}return e.next=3,p.a.get("/api/payment",{headers:{Authorization:u}});case 3:t=e.sent,c(t.data),e.next=11;break;case 7:return e.next=9,p.a.get("/user/history",{headers:{Authorization:u}});case 9:a=e.sent,c(a.data);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[u,l,c]),r.a.createElement("div",{className:"history-page"},r.a.createElement("h2",null,"History"),r.a.createElement("h4",null,"You have ",a.length," Ordered"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Payment ID"),r.a.createElement("th",null,"Date of Purchased"),r.a.createElement("th",null))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.paymentID),r.a.createElement("td",null,new Date(e.createdAt).toLocaleDateString()),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/history/".concat(e._id)},"View")))})))))};var M=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.userAPI.history,1)[0],a=Object(n.useState)([]),c=Object(m.a)(a,2),l=c[0],o=c[1],u=Object(P.g)();return Object(n.useEffect)((function(){u.id&&t.forEach((function(e){e._id===u.id&&o(e)}))}),[u.id,t]),console.log(l),0===l.length?null:r.a.createElement("div",{className:"history-page"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Address"),r.a.createElement("th",null,"Postal Code"),r.a.createElement("th",null,"Country Code"),r.a.createElement("th",null))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,l.address.recipient_name),r.a.createElement("td",null,l.address.line1+" - "+l.address.city),r.a.createElement("td",null,l.address.postal_code),r.a.createElement("td",null,l.address.country_code)))),r.a.createElement("table",{style:{margin:"30px 0px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Products"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null))),r.a.createElement("tbody",null,l.cart.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement("img",{src:e.images.url,alt:""})),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,"\u20b9",e.price*e.quantity))})))))},W=a(15);var Q=function(){var e=Object(n.useState)({name:"",email:"",password:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=function(e){var t=e.target,n=t.name,r=t.value;c(Object(b.a)(Object(b.a)({},a),{},Object(W.a)({},n,r)))},u=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("/user/register",Object(b.a)({},a));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-page"},r.a.createElement("form",{onSubmit:u},r.a.createElement("h2",null,"Register"),r.a.createElement("input",{type:"text",name:"name",required:!0,placeholder:"Name",value:a.name,onChange:l}),r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:l}),r.a.createElement("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:l}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"Register"),r.a.createElement(o.b,{to:"/login"},"Login"))))};var Z=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=function(e){var t=e.target,n=t.name,r=t.value;c(Object(b.a)(Object(b.a)({},a),{},Object(W.a)({},n,r)))},u=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("/user/login",Object(b.a)({},a));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-page"},r.a.createElement("form",{onSubmit:u},r.a.createElement("h2",null,"Login"),r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:l}),r.a.createElement("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:l}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"Login"),r.a.createElement(o.b,{to:"/register"},"Register"))))};var $=function(){return r.a.createElement("div",null,"404 |  Not Found")},ee=function(e){return r.a.createElement("header",{id:"welcome-section"},r.a.createElement("div",{className:"forest"}),r.a.createElement("div",{className:"silhouette"}),r.a.createElement("div",{className:"moon"}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,r.a.createElement("span",{className:"line"},"Welcome "),r.a.createElement("span",{className:"line"}),r.a.createElement("span",{className:"line"},r.a.createElement("span",{className:"color"},"to"),"The Vegan Kart."))))},te=function(){return r.a.createElement("div",null,r.a.createElement(ee,null))},ae=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.categoriesAPI.categories,1)[0],a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],o=c[1],u=Object(m.a)(e.token,1)[0],d=Object(m.a)(e.categoriesAPI.callback,2),E=d[0],b=d[1],f=Object(n.useState)(!1),h=Object(m.a)(f,2),v=h[0],O=h[1],j=Object(n.useState)(""),y=Object(m.a)(j,2),x=y[0],k=y[1],w=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!v){e.next=9;break}return e.next=5,p.a.put("/api/category/".concat(x),{name:l},{headers:{Authorization:u}});case 5:a=e.sent,alert(a.data.msg),e.next=13;break;case 9:return e.next=11,p.a.post("/api/category",{name:l},{headers:{Authorization:u}});case 11:n=e.sent,alert(n.data.msg);case 13:O(!1),o(""),b(!E),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(t),o(a),O(!0);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.delete("/api/category/".concat(t),{headers:{Authorization:u}});case 3:a=e.sent,alert(a.data.msg),b(!E),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"categories"},r.a.createElement("form",{onSubmit:w},r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("input",{type:"text",name:"category",value:l,required:!0,onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{type:"Submit"},v?"Update":"Create")),r.a.createElement("div",{className:"col"},t.map((function(e){return r.a.createElement("div",{className:"row",key:e._id},r.a.createElement("p",null,e.name),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return C(e._id,e.name)}},"Edit"),r.a.createElement("button",{onClick:function(){return _(e._id)}},"Delete")))}))))},ne={product_id:"",title:"",price:0,description:"Description of product",content:"Welcome",category:"",_id:""};var re=function(){var e=Object(n.useContext)(g),t=Object(n.useState)(ne),a=Object(m.a)(t,2),c=a[0],l=a[1],o=Object(m.a)(e.categoriesAPI.categories,1)[0],u=Object(n.useState)(!1),d=Object(m.a)(u,2),E=d[0],f=d[1],h=Object(n.useState)(!1),v=Object(m.a)(h,2),O=v[0],j=v[1],y=Object(m.a)(e.userAPI.isAdmin,1)[0],x=Object(m.a)(e.token,1)[0],k=Object(P.f)(),w=Object(P.g)(),C=Object(m.a)(e.productsAPI.products,1)[0],_=Object(n.useState)(!1),A=Object(m.a)(_,2),N=A[0],S=A[1],z=Object(m.a)(e.productsAPI.callback,2),D=z[0],L=z[1];Object(n.useEffect)((function(){w.id?(S(!0),C.forEach((function(e){e._id===w.id&&(l(e),f(e.images))}))):(S(!1),l(ne),f(!1))}),[w.id,C]);var q=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,y){e.next=3;break}return e.abrupt("return",alert("you are not an admin"));case 3:return j(!0),e.next=6,p.a.post("/api/destroy",{public_id:E.public_id},{headers:{Authorization:x}});case 6:j(!1),f(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,y){e.next=4;break}return e.abrupt("return",alert("You are not an admin"));case 4:if(a=t.target.files[0]){e.next=7;break}return e.abrupt("return",alert("File does not exist"));case 7:if(!(a.size>1048576)){e.next=9;break}return e.abrupt("return",alert("Size too large"));case 9:if("image/jpeg"===a.type||"image/png"===a.type){e.next=11;break}return e.abrupt("return",alert("File format is incorrect"));case 11:return(n=new FormData).append("file",a),j(!0),e.next=16,p.a.post("/api/upload",n,{headers:{"content-type":"multipart/form-data",Authorization:x}});case 16:r=e.sent,j(!1),f(r.data),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 24:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t){return e.apply(this,arguments)}}(),T=function(e){var t=e.target,a=t.name,n=t.value;l(Object(b.a)(Object(b.a)({},c),{},Object(W.a)({},a,n)))},R=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,y){e.next=4;break}return e.abrupt("return",alert("you are not an admin"));case 4:if(E){e.next=6;break}return e.abrupt("return",alert("image is not Uploaded"));case 6:if(!N){e.next=11;break}return e.next=9,p.a.put("/api/products/".concat(c._id),Object(b.a)(Object(b.a)({},c),{},{images:E}),{headers:{Authorization:x}});case 9:e.next=13;break;case 11:return e.next=13,p.a.post("/api/products",Object(b.a)(Object(b.a)({},c),{},{images:E}),{headers:{Authorization:x}});case 13:L(!D),k.push("/productlist"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),V={display:E?"block":"none"};return r.a.createElement("div",{className:"create_product"},r.a.createElement("div",{className:"upload"},r.a.createElement("input",{type:"file",name:"file",id:"file_up",onChange:F}),O?r.a.createElement("div",{id:"file_img"},r.a.createElement(I,null)):r.a.createElement("div",{id:"file_img",style:V},r.a.createElement("img",{src:E?E.url:"",alt:""}),r.a.createElement("span",{onClick:q},"X"))),r.a.createElement("form",{onSubmit:R},r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"product_id"},"Product ID"),r.a.createElement("input",{type:"text",name:"product_id",id:"product_id",required:!0,value:c.product_id,onChange:T,disabled:N})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",name:"title",id:"title",required:!0,value:c.title,onChange:T})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"price"},"Price"),r.a.createElement("input",{type:"number",name:"price",id:"price",required:!0,value:c.price,onChange:T})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{type:"text",name:"description",id:"description",required:!0,value:c.description,rows:"5",onChange:T})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{type:"text",name:"content",id:"content",required:!0,value:c.content,rows:"7",onChange:T})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"categories"},"Categories:"),r.a.createElement("select",{name:"category",value:c.category,onChange:T},r.a.createElement("option",{value:""},"Please Select a category"),o.map((function(e){return r.a.createElement("option",{value:e._id,key:e._id},e.name)})))),r.a.createElement("button",{type:"submit"},N?"Update":"Create")))};var ce=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.userAPI.isLogged,1)[0],a=Object(m.a)(e.userAPI.isAdmin,1)[0];return r.a.createElement(P.c,null,r.a.createElement(P.a,{path:"/",exact:!0,component:te}),r.a.createElement(P.a,{path:"/productlist",exact:!0,component:L}),r.a.createElement(P.a,{path:"/detail/:id",exact:!0,component:q}),r.a.createElement(P.a,{path:"/login",exact:!0,component:t?$:Z}),r.a.createElement(P.a,{path:"/register",exact:!0,component:t?$:Q}),r.a.createElement(P.a,{path:"/category",exact:!0,component:a?ae:$}),r.a.createElement(P.a,{path:"/create_product",exact:!0,component:a?re:$}),r.a.createElement(P.a,{path:"/edit_product/:id",exact:!0,component:a?re:$}),r.a.createElement(P.a,{path:"/history",exact:!0,component:t?J:$}),r.a.createElement(P.a,{path:"/history/:id",exact:!0,component:t?M:$}),r.a.createElement(P.a,{path:"/cart",exact:!0,component:G}),r.a.createElement(P.a,{path:"*",exact:!0,component:$}))};var le=function(){return r.a.createElement(O,null,r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement("title",null,"The Vegan Kart"))),r.a.createElement(A,null),r.a.createElement(ce,null))))};l.a.render(r.a.createElement(le,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.421d46a8.chunk.js.map