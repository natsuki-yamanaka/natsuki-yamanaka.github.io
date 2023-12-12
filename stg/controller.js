/*! Tue Dec 12 2023 11:15:43 GMT+0900 (日本標準時) */(()=>{"use strict";var e={689:(e,t,o)=>{o.r(t),o.d(t,{decode:()=>m,default:()=>A,encode:()=>v,toASCII:()=>C,toUnicode:()=>b,ucs2decode:()=>p,ucs2encode:()=>g});const n=2147483647,r=36,i=/^xn--/,s=/[^\0-\x7F]/,l=/[\x2E\u3002\uFF0E\uFF61]/g,a={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},c=Math.floor,u=String.fromCharCode;function d(e){throw new RangeError(a[e])}function f(e,t){const o=e.split("@");let n="";o.length>1&&(n=o[0]+"@",e=o[1]);const r=function(e,t){const o=[];let n=e.length;for(;n--;)o[n]=t(e[n]);return o}((e=e.replace(l,".")).split("."),t).join(".");return n+r}function p(e){const t=[];let o=0;const n=e.length;for(;o<n;){const r=e.charCodeAt(o++);if(r>=55296&&r<=56319&&o<n){const n=e.charCodeAt(o++);56320==(64512&n)?t.push(((1023&r)<<10)+(1023&n)+65536):(t.push(r),o--)}else t.push(r)}return t}const g=e=>String.fromCodePoint(...e),h=function(e,t){return e+22+75*(e<26)-((0!=t)<<5)},w=function(e,t,o){let n=0;for(e=o?c(e/700):e>>1,e+=c(e/t);e>455;n+=r)e=c(e/35);return c(n+36*e/(e+38))},m=function(e){const t=[],o=e.length;let i=0,s=128,l=72,a=e.lastIndexOf("-");a<0&&(a=0);for(let o=0;o<a;++o)e.charCodeAt(o)>=128&&d("not-basic"),t.push(e.charCodeAt(o));for(let f=a>0?a+1:0;f<o;){const a=i;for(let t=1,s=r;;s+=r){f>=o&&d("invalid-input");const a=(u=e.charCodeAt(f++))>=48&&u<58?u-48+26:u>=65&&u<91?u-65:u>=97&&u<123?u-97:r;a>=r&&d("invalid-input"),a>c((n-i)/t)&&d("overflow"),i+=a*t;const p=s<=l?1:s>=l+26?26:s-l;if(a<p)break;const g=r-p;t>c(n/g)&&d("overflow"),t*=g}const p=t.length+1;l=w(i-a,p,0==a),c(i/p)>n-s&&d("overflow"),s+=c(i/p),i%=p,t.splice(i++,0,s)}var u;return String.fromCodePoint(...t)},v=function(e){const t=[],o=(e=p(e)).length;let i=128,s=0,l=72;for(const o of e)o<128&&t.push(u(o));const a=t.length;let f=a;for(a&&t.push("-");f<o;){let o=n;for(const t of e)t>=i&&t<o&&(o=t);const p=f+1;o-i>c((n-s)/p)&&d("overflow"),s+=(o-i)*p,i=o;for(const o of e)if(o<i&&++s>n&&d("overflow"),o===i){let e=s;for(let o=r;;o+=r){const n=o<=l?1:o>=l+26?26:o-l;if(e<n)break;const i=e-n,s=r-n;t.push(u(h(n+i%s,0))),e=c(i/s)}t.push(u(h(e,0))),l=w(s,p,f===a),s=0,++f}++s,++i}return t.join("")},b=function(e){return f(e,(function(e){return i.test(e)?m(e.slice(4).toLowerCase()):e}))},C=function(e){return f(e,(function(e){return s.test(e)?"xn--"+v(e):e}))},A={version:"2.1.0",ucs2:{decode:p,encode:g},decode:m,encode:v,toASCII:C,toUnicode:b}},326:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=o(689),r=new RegExp("^http(s)?://"),i={trimSlash:function(e){return"/"!==e.slice(-1)?e:e.slice(0,-1)},matchAsPuny:function(e,t){var o=i.trimSlash(t.replace(r,"")),s=(0,n.toASCII)(o);return 0===e.replace(r,"").indexOf(s)},_serialize:function(e,t){for(var o=[],n=0,r=Object.keys(e);n<r.length;n++){var s=r[n],l=t?t+"["+s+"]":s,a=e[s];"object"==typeof a&&null!==a?o.push(i._serialize(a,l)):o.push(encodeURIComponent(l)+"="+encodeURIComponent(a))}return o.join("&")},_deserialize:function(e){if("object"==typeof e)return e;for(var t={},o=0,n=e.split("&");o<n.length;o++){var r=n[o].split("="),i=decodeURIComponent(r[0]),s=decodeURIComponent(r[1]);"true"===s?s=!0:"false"===s?s=!1:"null"===s&&(s=null);for(var l=[],a=i,c=-1;-1!==(c=a.indexOf("["));)l.push(a.substring(0,c)),c=(a=a.substring(c+1)).indexOf("]"),a=a.substring(0,c)+a.substring(c+1);if(0!==l.length){for(var u=t,d=0,f=l;d<f.length;d++){var p=f[d];void 0===u[p]&&(u[p]={}),u=u[p]}u[a]=s}else t[i]=s}return t}};t.default=i}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n,r,i,s,l;n=o(326),r="https://api.pay-stage.com",i="/v1/js/apitunnel.html",s=null,l={parentOrigin:null,jsURL:null,messageQueue:[],init:function(){if(null===s){s=document.createElement("iframe"),console.log("test --------------------------- Controller init -- window.location.origin",window.location.origin),console.log("test --------------------------- Controller init -- window.location.href",window.location.href),console.log("test --------------------------- Controller init -- apiURL + apiPath",r+i),console.log("test --------------------------- Controller init -- encodeURIComponent(window.location.href)",encodeURIComponent(window.location.href)),s.setAttribute("src","".concat(r+i,"#").concat(encodeURIComponent(window.location.href))),s.setAttribute("name","_payjpApitunnel"),s.setAttribute("frameborder","0"),s.setAttribute("scrolling","no"),s.setAttribute("allowtransparency","true"),s.setAttribute("width","0"),s.setAttribute("height","0"),s.setAttribute("style","position:absolute;top:0;left:0;width:0;height:0"),s.setAttribute("aria-hidden","true"),s.addEventListener("load",(function(){l.processMessage()})),document.body.appendChild(s);var e=n.default._deserialize(window.location.hash.substring(1));l.parentOrigin=e.origin,l.jsURL=n.default.trimSlash(window.location.origin),window.addEventListener("message",l.controller)}},controller:function(e){console.log("test --------------------------- Controller controller -- e",e);var t=n.default.trimSlash(e.origin);if((t===l.parentOrigin||n.default.matchAsPuny(l.parentOrigin,t))&&e.source===window.parent)return(null==(o=n.default._deserialize(e.data))?void 0:o.to)===window.name?l.toApi(o):l.toFrame(o);if(t===l.jsURL){var o=n.default._deserialize(e.data);try{if(window.parent.frames[null==o?void 0:o.from]!==e.source)return}catch(e){return}return(null==o?void 0:o.to)===window.name?l.toApi(o):l.toFrame(o)}t===r&&e.source===s.contentWindow&&(l.messageQueue.push({data:e.data,targetWindow:window.parent,origin:l.parentOrigin}),l.processMessage())},processMessage:function(){for(var e=0,t=l.messageQueue;e<t.length;e++){var o=t[e],n=o.data,r=o.targetWindow,i=o.origin;console.log("test --------------------------- Controller processMessage -- data, origin",n,i),r.postMessage(n,i)}l.messageQueue=[]},toApi:function(e){console.log("test --------------------------- Controller toApi -- data",e),e.from=window.name,l.messageQueue.push({data:n.default._serialize(e),targetWindow:s.contentWindow,origin:r}),l.processMessage()},toFrame:function(e){console.log("test --------------------------- Controller toFrame -- data",e);try{e.from=window.name,l.messageQueue.push({data:n.default._serialize(e),targetWindow:window.parent.frames[e.to],origin:l.jsURL}),l.processMessage()}catch(e){return}}},window.Controller=l})();