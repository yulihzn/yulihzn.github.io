(function(t){function A(A){for(var n,o,i=A[0],l=A[1],c=A[2],u=0,d=[];u<i.length;u++)o=i[u],r[o]&&d.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);s&&s(A);while(d.length)d.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var t,A=0;A<a.length;A++){for(var e=a[A],n=!0,o=1;o<e.length;o++){var l=e[o];0!==r[l]&&(n=!1)}n&&(a.splice(A--,1),t=i(i.s=e[0]))}return t}var n={},r={app:0},a=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"317e1f50"}[t]+".js"}function i(A){if(n[A])return n[A].exports;var e=n[A]={i:A,l:!1,exports:{}};return t[A].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(t){var A=[],e=r[t];if(0!==e)if(e)A.push(e[2]);else{var n=new Promise(function(A,n){e=r[t]=[A,n]});A.push(e[2]=n);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t),a=function(A){l.onerror=l.onload=null,clearTimeout(c);var e=r[t];if(0!==e){if(e){var n=A&&("load"===A.type?"missing":A.type),a=A&&A.target&&A.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");o.type=n,o.request=a,e[1](o)}r[t]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(A)},i.m=t,i.c=n,i.d=function(t,A,e){i.o(t,A)||Object.defineProperty(t,A,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,A){if(1&A&&(t=i(t)),8&A)return t;if(4&A&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&A&&"string"!=typeof t)for(var n in t)i.d(e,n,function(A){return t[A]}.bind(null,n));return e},i.n=function(t){var A=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(A,"a",A),A},i.o=function(t,A){return Object.prototype.hasOwnProperty.call(t,A)},i.p="",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=A,l=l.slice();for(var u=0;u<l.length;u++)A(l[u]);var s=c;a.push([0,"chunk-vendors"]),e()})({0:function(t,A,e){t.exports=e("56d7")},"2a58":function(t,A,e){"use strict";var n=e("4c59"),r=e.n(n);r.a},3419:function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAAA40lEQVRYhe2W7Q2CMBCGH5iETXQTdQIdAUdwAkcwbKATqBMwSv2BJNAvrpWKMX0Skpbcm3uvaa+FTCaT+RMKYdxqhly3GNEZUAm/i57QtiIqxnkkhTFYwMTIw9CIy4Qk5mMz5XvQJkowpKEryrod+p++SudaEe82KPkOjSSoZny0Qgg5slPaScFcRhRQAXuX0WsCI3WEYdZTAREroKMX69SkNtIuZeQeqvu5zgqwcwTFbmQpRzC73ZbuCSClAR6DeQVsAvQn4GAz0iOp3veoCta7Wnx/Oemt2XdxSfRPoT6TMXgBTKi7zP0xK8gAAAAASUVORK5CYII="},"4c59":function(t,A,e){},"54a5":function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAA/CAQAAABOHvBOAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAA4QAAAOEAHQCiXcAAAAHdElNRQfjAQkDDgsXe+/pAAADGklEQVRIx7XWS2xUVRgH8N+9cwv2AWVaWrAPqkAsBNMCIsEm1ijEwNIQE91oYE8IunLvAhMTNUrcmZiw8ZGgiY+4UaKYoqkticUUItJQKAYLDBEofcyMi8HpvWVmOpj4n9V3z2/OPd/NmXOHZB72phG35Yw7Zo8gPpgo1PvQToNGTWn3mFovGFAm6004LLpbPelvB+PDUQIvkXJHkwhZkZya8njWrFfsK351uVx53GeFL43f7aTGXv3eN1VqxYGjzmiNXXnHJWvnyzA2lHdHvRWxu6ZNmymN+UiDncWqy9O+MFEOj7imN4bTBuMtJnGNlDvFakresvhwEi9Xa6xYZUxXwustc6lYXfWXTfENkcS9ppwpVtedtUljaRzpdcF4sZ41rFN7aZy20Wk3YldOqbehNF6nzVBiN4y6aVtpvE3KYKKHi87aoe5eHOpz0WgC33TSBh334pW2GHYFS6Q1351vQKOe+Sfwb7p1eFet5z2nU+S6444altHnUwvyqmt2+8CcfPEz4llf+1FDktY4ZswR2RjNy/vOJybnF1JIl3NmTS+geTm35OxPNthjtcOOLFybQQdc0p88Mt5wRbeVPk/Me94efOy3+I+twQnH1aHFId86Z8yw92wFB9z01DzuMen12FfbrdFcvPXjMl6bx/vdtlu5rDDoK0sLDQb6XfZrWZwxoFdHAbfY7hd/Kp8fNNlcwN06nZCtgE/J6Cvg7XJ+VinjTtuhMRTZ4YLfK+IpP1lvbajVo4ZMqpwB9bZEHrLKtCekKtCsJlmbI23qvOTFRWYO1emKpKVEllo8baHOBQd6+TSE0lVSmsLk0VcxzaFVVeNUqKVqLEy+6RbDS+4HV/OE/9vMD/xv+D7WHMj73mcL/qTcm5yN9pH3VlXT7nK7cBRUk5QgtPBdWL67IJSvEqeEoZkqN39AaEZNVasOBKEZS6vEQtNqq8KpwjKaq9pMzaKUrXZZ45Y5s+ZKoEiTbi87aCbQ6pC9Vso4b8xVN1yWkVXnQc0adVhntTknvR0g0OUZ/R7Rqk2tvCwCKXkTJv1hyDdGTP0D58TXpE80t88AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDEtMDlUMDM6MTQ6MTErMDg6MDAETaM4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAxLTA5VDAzOjE0OjExKzA4OjAwdRAbhAAAAEN0RVh0c29mdHdhcmUAL3Vzci9sb2NhbC9pbWFnZW1hZ2ljay9zaGFyZS9kb2MvSW1hZ2VNYWdpY2stNy8vaW5kZXguaHRtbL21eQoAAABjdEVYdHN2Zzpjb21tZW50ACBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgILwHnlsAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADI1MACg4SwAAAAWdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAODdDxRU9AAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1NDY5NzQ4NTHCNveCAAAAEXRFWHRUaHVtYjo6U2l6ZQAzMjk3Qg6d+mMAAABidEVYdFRodW1iOjpVUkkAZmlsZTovLy9ob21lL3d3d3Jvb3QvbmV3c2l0ZS93d3cuZWFzeWljb24ubmV0L2Nkbi1pbWcuZWFzeWljb24uY24vZmlsZXMvMTE1LzExNTA4NjYucG5noZslZQAAAABJRU5ErkJggg=="},"56d7":function(t,A,e){"use strict";e.r(A);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),r=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}}),e("router-view")],1)},a=[],o=(e("5c0b"),e("2877")),i={},l=Object(o["a"])(i,r,a,!1,null,null,null),c=l.exports,u=e("8c4f"),s=function(){var t=this,A=t.$createElement,n=t._self._c||A;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:e("cf05")}}),n("HelloWorld",{attrs:{msg:"建设中...:)"}})],1)},d=[],p=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"main-container"},[e("h1",{staticClass:"h3"},[t._v(t._s(t.msg))]),t._m(0)])},b=[function(){var t=this,A=t.$createElement,n=t._self._c||A;return n("div",{staticClass:"bottom-container"},[n("a",{staticClass:"game",attrs:{href:"https://banditcatstudio.com/web-mobile/index.html"}},[n("img",{attrs:{src:e("3419")}})]),n("a",{staticClass:"wine",attrs:{href:"https://banditcatstudio.com/dist/index.html"}},[n("img",{attrs:{src:e("54a5")}})])])}],v={name:"HelloWorld",props:{msg:String}},f=v,m=(e("2a58"),Object(o["a"])(f,p,b,!1,null,"3b9a3b6b",null)),g=m.exports,E={name:"home",components:{HelloWorld:g}},h=E,T=Object(o["a"])(h,s,d,!1,null,null,null),V=T.exports;n["a"].use(u["a"]);var w=new u["a"]({mode:"hash",base:"",routes:[{path:"/",name:"home",component:V},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}}]}),Z=e("2f62");n["a"].use(Z["a"]);var R=new Z["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:w,store:R,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,A,e){"use strict";var n=e("5e27"),r=e.n(n);r.a},"5e27":function(t,A,e){},cf05:function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAiCAYAAAAOPsreAAAAAXNSR0IArs4c6QAAABxpRE9UAAAAAgAAAAAAAAARAAAAKAAAABEAAAARAAABWDFq5awAAAEkSURBVFgJ5JbRDcMgDESzVCS+s02W6TLdrb8UorwIWTh2gLRSi4QOY5+5g7bqNO1jWZaYJ3Evju7Xq+fgjxY2ut8htHeBMLC1H3ywtc9tPISBrQfBB1v73MZDmETvgZJHHEKIPdN7vrsOYRK9DSSPuMdk5nrPd9chbDTO8xzPZutFuI3JwtEG6XdmMuf+xigX8THDvMBoxIiFXzMa95E+4vkHYfvXVLsEqw4DllGZh+dF+VVUY2nCMkC9VYdQacSK4XlRNSYTCAdTfntJkH2J5EGZJ0awZVDLw9cwne8bCAIT67eMrusaaxPDV7HWq9zTXsy7r70o++qzliLK9VWD1Jc9amuvIa0OQxqqRkkg1MLX4xnztOpkHmGagav79JOIH4lvAAAA//9PiPsqAAABJ0lEQVTlk0sOwyAMRLlTFCnr3CaX6WV6t26pIuVVaMA2+SyathIa/GE8A2lK22+e59yzXo9nXldPb9kzTVNe1ziOlyz4FPFT4bIsubUQiTDiYRjyuoi13uIqc/SfRTVo8X0MlyLKvWXktkZxjDFFbkoNElPXcxrzAvRfjRE/PpMKI0YQxsgTUydvYSQEnqMY8afycy33luAoX3K09keNROd4Mcvw/xjlJsDoxfbWuWEwepm9dXQr6jytm//VvQbpZyC410jUXxnYEjrP6qvyHDyLkXCrXgkyEuhTHqO9TkNwFlVAb1wramfQp7ztbicLUS/qwCh2Rrsl9Ci/e8grQtiLOjiKvdleDT3K75356hqGFH/GILevBol/zqga0pgLuT2qMY0tg28QT3fJxUEXuQAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.165a287c.js.map