/*! Mon Dec 04 2023 21:14:33 GMT+0900 (日本標準時) */(()=>{"use strict";var e={689:(e,t,n)=>{n.r(t),n.d(t,{decode:()=>m,default:()=>A,encode:()=>v,toASCII:()=>C,toUnicode:()=>b,ucs2decode:()=>p,ucs2encode:()=>g});const o=2147483647,r=36,i=/^xn--/,s=/[^\0-\x7F]/,a=/[\x2E\u3002\uFF0E\uFF61]/g,l={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},u=Math.floor,c=String.fromCharCode;function d(e){throw new RangeError(l[e])}function f(e,t){const n=e.split("@");let o="";n.length>1&&(o=n[0]+"@",e=n[1]);const r=function(e,t){const n=[];let o=e.length;for(;o--;)n[o]=t(e[o]);return n}((e=e.replace(a,".")).split("."),t).join(".");return o+r}function p(e){const t=[];let n=0;const o=e.length;for(;n<o;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<o){const o=e.charCodeAt(n++);56320==(64512&o)?t.push(((1023&r)<<10)+(1023&o)+65536):(t.push(r),n--)}else t.push(r)}return t}const g=e=>String.fromCodePoint(...e),h=function(e,t){return e+22+75*(e<26)-((0!=t)<<5)},w=function(e,t,n){let o=0;for(e=n?u(e/700):e>>1,e+=u(e/t);e>455;o+=r)e=u(e/35);return u(o+36*e/(e+38))},m=function(e){const t=[],n=e.length;let i=0,s=128,a=72,l=e.lastIndexOf("-");l<0&&(l=0);for(let n=0;n<l;++n)e.charCodeAt(n)>=128&&d("not-basic"),t.push(e.charCodeAt(n));for(let f=l>0?l+1:0;f<n;){const l=i;for(let t=1,s=r;;s+=r){f>=n&&d("invalid-input");const l=(c=e.charCodeAt(f++))>=48&&c<58?c-48+26:c>=65&&c<91?c-65:c>=97&&c<123?c-97:r;l>=r&&d("invalid-input"),l>u((o-i)/t)&&d("overflow"),i+=l*t;const p=s<=a?1:s>=a+26?26:s-a;if(l<p)break;const g=r-p;t>u(o/g)&&d("overflow"),t*=g}const p=t.length+1;a=w(i-l,p,0==l),u(i/p)>o-s&&d("overflow"),s+=u(i/p),i%=p,t.splice(i++,0,s)}var c;return String.fromCodePoint(...t)},v=function(e){const t=[],n=(e=p(e)).length;let i=128,s=0,a=72;for(const n of e)n<128&&t.push(c(n));const l=t.length;let f=l;for(l&&t.push("-");f<n;){let n=o;for(const t of e)t>=i&&t<n&&(n=t);const p=f+1;n-i>u((o-s)/p)&&d("overflow"),s+=(n-i)*p,i=n;for(const n of e)if(n<i&&++s>o&&d("overflow"),n===i){let e=s;for(let n=r;;n+=r){const o=n<=a?1:n>=a+26?26:n-a;if(e<o)break;const i=e-o,s=r-o;t.push(c(h(o+i%s,0))),e=u(i/s)}t.push(c(h(e,0))),a=w(s,p,f===l),s=0,++f}++s,++i}return t.join("")},b=function(e){return f(e,(function(e){return i.test(e)?m(e.slice(4).toLowerCase()):e}))},C=function(e){return f(e,(function(e){return s.test(e)?"xn--"+v(e):e}))},A={version:"2.1.0",ucs2:{decode:p,encode:g},decode:m,encode:v,toASCII:C,toUnicode:b}},326:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=n(689),r=new RegExp("^http(s)?://"),i={trimSlash:function(e){return"/"!==e.slice(-1)?e:e.slice(0,-1)},matchAsPuny:function(e,t){var n=i.trimSlash(t.replace(r,"")),s=(0,o.toASCII)(n);return 0===e.replace(r,"").indexOf(s)},_serialize:function(e,t){for(var n=[],o=0,r=Object.keys(e);o<r.length;o++){var s=r[o],a=t?t+"["+s+"]":s,l=e[s];"object"==typeof l&&null!==l?n.push(i._serialize(l,a)):n.push(encodeURIComponent(a)+"="+encodeURIComponent(l))}return n.join("&")},_deserialize:function(e){if("object"==typeof e)return e;for(var t={},n=0,o=e.split("&");n<o.length;n++){var r=o[n].split("="),i=decodeURIComponent(r[0]),s=decodeURIComponent(r[1]);"true"===s?s=!0:"false"===s?s=!1:"null"===s&&(s=null);for(var a=[],l=i,u=-1;-1!==(u=l.indexOf("["));)a.push(l.substring(0,u)),u=(l=l.substring(u+1)).indexOf("]"),l=l.substring(0,u)+l.substring(u+1);if(0!==a.length){for(var c=t,d=0,f=a;d<f.length;d++){var p=f[d];void 0===c[p]&&(c[p]={}),c=c[p]}c[l]=s}else t[i]=s}return t}};t.default=i}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o,r,i,s;o=n(326),r="https://api.pay.jp",i=null,s={parentOrigin:null,jsURL:null,messageQueue:[],init:function(){if(null===i){console.log("test --------------------------- Controller init -- window.location.origin",window.location.origin),console.log("test --------------------------- Controller init -- window.location.href",window.location.href),(i=document.createElement("iframe")).setAttribute("src","".concat(r+"/v1/js/apitunnel.html","#").concat(encodeURIComponent(window.location.href))),console.log("test --------------------------- Controller init -- iframe.src",i.src),i.setAttribute("name","_payjpApitunnel"),i.setAttribute("frameborder","0"),i.setAttribute("scrolling","no"),i.setAttribute("allowtransparency","true"),i.setAttribute("width","0"),i.setAttribute("height","0"),i.setAttribute("style","position:absolute;top:0;left:0;width:0;height:0"),i.setAttribute("aria-hidden","true"),i.addEventListener("load",(function(){s.processMessage()})),document.body.appendChild(i);var e=o.default._deserialize(window.location.hash.substring(1));s.parentOrigin=e.origin,s.jsURL=o.default.trimSlash(window.location.origin),window.addEventListener("message",s.controller)}},controller:function(e){var t=o.default.trimSlash(e.origin);if(console.log("test --------------------------- Controller controller -- origin",t),(t===s.parentOrigin||o.default.matchAsPuny(s.parentOrigin,t))&&e.source===window.parent)return(null==(n=o.default._deserialize(e.data))?void 0:n.to)===window.name?s.toApi(n):s.toFrame(n);if(t===s.jsURL){var n=o.default._deserialize(e.data);try{if(window.parent.frames[null==n?void 0:n.from]!==e.source)return}catch(e){return}return(null==n?void 0:n.to)===window.name?s.toApi(n):s.toFrame(n)}t===r&&e.source===i.contentWindow&&(s.messageQueue.push({data:e.data,targetWindow:window.parent,origin:s.parentOrigin}),s.processMessage())},processMessage:function(){for(var e=0,t=s.messageQueue;e<t.length;e++){var n=t[e],o=n.data,r=n.targetWindow,i=n.origin;r.postMessage(o,i)}s.messageQueue=[]},toApi:function(e){e.from=window.name,s.messageQueue.push({data:o.default._serialize(e),targetWindow:i.contentWindow,origin:r}),s.processMessage()},toFrame:function(e){try{e.from=window.name,s.messageQueue.push({data:o.default._serialize(e),targetWindow:window.parent.frames[e.to],origin:s.jsURL}),s.processMessage()}catch(e){return}}},window.Controller=s})();