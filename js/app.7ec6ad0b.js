(function(e){function t(t){for(var n,A,i=t[0],u=t[1],c=t[2],s=0,f=[];s<i.length;s++)A=i[s],o[A]&&f.push(o[A][0]),o[A]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,A=1;A<r.length;A++){var u=r[A];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function A(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8585e264"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=A(e),a=function(t){u.onerror=u.onload=null,clearTimeout(c);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,A=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");A.type=n,A.request=a,r[1](A)}o[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"088b":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAtElEQVRYhe2XQQ7AIAgEi///s71YYgUBFeXiXjXMFJMG4BlPVs5hpJj1sgadrq9dIOCcZRcAtmSXIwkgSYMaZYbMluFWCU4ge4AFEdFoC1ySSC38UJCVyMmmr+/V/lqxtfUEWj0F6cDphAvAc7j9CC7PEN6BK3AFrsD9FYcL1APJkWdohxLSgc5U6w3H1AL7yDT8gFgSOpT+JDxEZsZyN4mVxYRIWGU8VzNRxJjl5ZSL63r+ArWRQC/WuLv2AAAAAElFTkSuQmCC"},3419:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAAA40lEQVRYhe2W7Q2CMBCGH5iETXQTdQIdAUdwAkcwbKATqBMwSv2BJNAvrpWKMX0Skpbcm3uvaa+FTCaT+RMKYdxqhly3GNEZUAm/i57QtiIqxnkkhTFYwMTIw9CIy4Qk5mMz5XvQJkowpKEryrod+p++SudaEe82KPkOjSSoZny0Qgg5slPaScFcRhRQAXuX0WsCI3WEYdZTAREroKMX69SkNtIuZeQeqvu5zgqwcwTFbmQpRzC73ZbuCSClAR6DeQVsAvQn4GAz0iOp3veoCta7Wnx/Oemt2XdxSfRPoT6TMXgBTKi7zP0xK8gAAAAASUVORK5CYII="},"3f90":function(e,t,r){"use strict";var n=r("e99c"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}}),r("router-view")],1)},a=[],A=(r("5c0b"),r("2877")),i={},u=Object(A["a"])(i,o,a,!1,null,null,null),c=u.exports,s=r("8c4f"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"建设中...:)"}})],1)},f=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("h1",{staticClass:"h3"},[e._v(e._s(e.msg))]),n("div",{staticClass:"bottom-container"},[n("a",{staticClass:"game",attrs:{href:e.href1}},[n("img",{attrs:{src:r("3419")}})]),n("a",{staticClass:"wine",attrs:{href:e.href2}},[n("img",{attrs:{src:r("088b")}})])])])},p=[],g={name:"HelloWorld",props:{msg:String},data:function(){return{href1:"/web-mobile/index.html",href2:"/web-mobile1/index.html"}},mounted:function(){href1=window.location.href+href1,href2=window.location.href+href2}},h=g,m=(r("3f90"),Object(A["a"])(h,d,p,!1,null,"465b087d",null)),v=m.exports,b={name:"home",components:{HelloWorld:v}},w=b,C=Object(A["a"])(w,l,f,!1,null,null,null),E=C.exports;n["a"].use(s["a"]);var y=new s["a"]({mode:"hash",base:"",routes:[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),S=r("2f62");n["a"].use(S["a"]);var T=new S["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:y,store:T,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("5e27"),o=r.n(n);o.a},"5e27":function(e,t,r){},cf05:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAiCAYAAAAOPsreAAAAAXNSR0IArs4c6QAAABxpRE9UAAAAAgAAAAAAAAARAAAAKAAAABEAAAARAAABWDFq5awAAAEkSURBVFgJ5JbRDcMgDESzVCS+s02W6TLdrb8UorwIWTh2gLRSi4QOY5+5g7bqNO1jWZaYJ3Evju7Xq+fgjxY2ut8htHeBMLC1H3ywtc9tPISBrQfBB1v73MZDmETvgZJHHEKIPdN7vrsOYRK9DSSPuMdk5nrPd9chbDTO8xzPZutFuI3JwtEG6XdmMuf+xigX8THDvMBoxIiFXzMa95E+4vkHYfvXVLsEqw4DllGZh+dF+VVUY2nCMkC9VYdQacSK4XlRNSYTCAdTfntJkH2J5EGZJ0awZVDLw9cwne8bCAIT67eMrusaaxPDV7HWq9zTXsy7r70o++qzliLK9VWD1Jc9amuvIa0OQxqqRkkg1MLX4xnztOpkHmGagav79JOIH4lvAAAA//9PiPsqAAABJ0lEQVTlk0sOwyAMRLlTFCnr3CaX6WV6t26pIuVVaMA2+SyathIa/GE8A2lK22+e59yzXo9nXldPb9kzTVNe1ziOlyz4FPFT4bIsubUQiTDiYRjyuoi13uIqc/SfRTVo8X0MlyLKvWXktkZxjDFFbkoNElPXcxrzAvRfjRE/PpMKI0YQxsgTUydvYSQEnqMY8afycy33luAoX3K09keNROd4Mcvw/xjlJsDoxfbWuWEwepm9dXQr6jytm//VvQbpZyC410jUXxnYEjrP6qvyHDyLkXCrXgkyEuhTHqO9TkNwFlVAb1wramfQp7ztbicLUS/qwCh2Rrsl9Ci/e8grQtiLOjiKvdleDT3K75356hqGFH/GILevBol/zqga0pgLuT2qMY0tg28QT3fJxUEXuQAAAABJRU5ErkJggg=="},e99c:function(e,t,r){}});
//# sourceMappingURL=app.7ec6ad0b.js.map