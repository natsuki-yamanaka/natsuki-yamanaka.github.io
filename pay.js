/*! Thu Nov 30 2023 17:31:37 GMT+0900 (日本標準時) */(()=>{var t={378:(t,e,r)=>{t=r.nmd(t);var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object AsyncFunction]",s="[object Function]",c="[object GeneratorFunction]",l="[object Null]",u="[object Object]",p="[object Proxy]",f="[object Undefined]",d=/^\[object .+?Constructor\]$/,h=/^(?:0|[1-9]\d*)$/,m={};m["[object Float32Array]"]=m["[object Float64Array]"]=m["[object Int8Array]"]=m["[object Int16Array]"]=m["[object Int32Array]"]=m["[object Uint8Array]"]=m["[object Uint8ClampedArray]"]=m["[object Uint16Array]"]=m["[object Uint32Array]"]=!0,m[i]=m["[object Array]"]=m["[object ArrayBuffer]"]=m["[object Boolean]"]=m["[object DataView]"]=m["[object Date]"]=m["[object Error]"]=m[s]=m["[object Map]"]=m["[object Number]"]=m[u]=m["[object RegExp]"]=m["[object Set]"]=m["[object String]"]=m["[object WeakMap]"]=!1;var _="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,v="object"==typeof self&&self&&self.Object===Object&&self,y=_||v||Function("return this")(),g=e&&!e.nodeType&&e,b=g&&t&&!t.nodeType&&t,w=b&&b.exports===g,j=w&&_.process,E=function(){try{var t=b&&b.require&&b.require("util").types;return t||j&&j.binding&&j.binding("util")}catch(t){}}(),A=E&&E.isTypedArray;var P,O,I,C=Array.prototype,S=Function.prototype,N=Object.prototype,T=y["__core-js_shared__"],x=S.toString,L=N.hasOwnProperty,M=(P=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"",k=N.toString,F=x.call(Object),z=RegExp("^"+x.call(L).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),D=w?y.Buffer:void 0,R=y.Symbol,U=y.Uint8Array,V=D?D.allocUnsafe:void 0,H=(O=Object.getPrototypeOf,I=Object,function(t){return O(I(t))}),K=Object.create,$=N.propertyIsEnumerable,B=C.splice,Y=R?R.toStringTag:void 0,G=function(){try{var t=gt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),W=D?D.isBuffer:void 0,q=Math.max,J=Date.now,Q=gt(y,"Map"),Z=gt(Object,"create"),X=function(){function t(){}return function(e){if(!Tt(e))return{};if(K)return K(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();function tt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function et(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=this.__data__=new et(t);this.size=e.size}function ot(t,e){var r=Ot(t),n=!r&&Pt(t),o=!r&&!n&&Ct(t),i=!r&&!n&&!o&&Lt(t),a=r||n||o||i,s=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=s.length;for(var l in t)!e&&!L.call(t,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||bt(l,c))||s.push(l);return s}function it(t,e,r){(void 0!==r&&!At(t[e],r)||void 0===r&&!(e in t))&&ct(t,e,r)}function at(t,e,r){var n=t[e];L.call(t,e)&&At(n,r)&&(void 0!==r||e in t)||ct(t,e,r)}function st(t,e){for(var r=t.length;r--;)if(At(t[r][0],e))return r;return-1}function ct(t,e,r){"__proto__"==e&&G?G(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}tt.prototype.clear=function(){this.__data__=Z?Z(null):{},this.size=0},tt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},tt.prototype.get=function(t){var e=this.__data__;if(Z){var r=e[t];return r===n?void 0:r}return L.call(e,t)?e[t]:void 0},tt.prototype.has=function(t){var e=this.__data__;return Z?void 0!==e[t]:L.call(e,t)},tt.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Z&&void 0===e?n:e,this},et.prototype.clear=function(){this.__data__=[],this.size=0},et.prototype.delete=function(t){var e=this.__data__,r=st(e,t);return!(r<0)&&(r==e.length-1?e.pop():B.call(e,r,1),--this.size,!0)},et.prototype.get=function(t){var e=this.__data__,r=st(e,t);return r<0?void 0:e[r][1]},et.prototype.has=function(t){return st(this.__data__,t)>-1},et.prototype.set=function(t,e){var r=this.__data__,n=st(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this},rt.prototype.clear=function(){this.size=0,this.__data__={hash:new tt,map:new(Q||et),string:new tt}},rt.prototype.delete=function(t){var e=yt(this,t).delete(t);return this.size-=e?1:0,e},rt.prototype.get=function(t){return yt(this,t).get(t)},rt.prototype.has=function(t){return yt(this,t).has(t)},rt.prototype.set=function(t,e){var r=yt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},nt.prototype.clear=function(){this.__data__=new et,this.size=0},nt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},nt.prototype.get=function(t){return this.__data__.get(t)},nt.prototype.has=function(t){return this.__data__.has(t)},nt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof et){var n=r.__data__;if(!Q||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new rt(n)}return r.set(t,e),this.size=r.size,this};var lt,ut=function(t,e,r){for(var n=-1,o=Object(t),i=r(t),a=i.length;a--;){var s=i[lt?a:++n];if(!1===e(o[s],s,o))break}return t};function pt(t){return null==t?void 0===t?f:l:Y&&Y in Object(t)?function(t){var e=L.call(t,Y),r=t[Y];try{t[Y]=void 0;var n=!0}catch(t){}var o=k.call(t);n&&(e?t[Y]=r:delete t[Y]);return o}(t):function(t){return k.call(t)}(t)}function ft(t){return xt(t)&&pt(t)==i}function dt(t){return!(!Tt(t)||function(t){return!!M&&M in t}(t))&&(St(t)?z:d).test(function(t){if(null!=t){try{return x.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function ht(t){if(!Tt(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=wt(t),r=[];for(var n in t)("constructor"!=n||!e&&L.call(t,n))&&r.push(n);return r}function mt(t,e,r,n,o){t!==e&&ut(e,(function(i,a){if(o||(o=new nt),Tt(i))!function(t,e,r,n,o,i,a){var s=jt(t,r),c=jt(e,r),l=a.get(c);if(l)return void it(t,r,l);var p=i?i(s,c,r+"",t,e,a):void 0,f=void 0===p;if(f){var d=Ot(c),h=!d&&Ct(c),m=!d&&!h&&Lt(c);p=c,d||h||m?Ot(s)?p=s:xt(b=s)&&It(b)?p=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(s):h?(f=!1,p=function(t,e){if(e)return t.slice();var r=t.length,n=V?V(r):new t.constructor(r);return t.copy(n),n}(c,!0)):m?(f=!1,_=c,v=!0?(y=_.buffer,g=new y.constructor(y.byteLength),new U(g).set(new U(y)),g):_.buffer,p=new _.constructor(v,_.byteOffset,_.length)):p=[]:function(t){if(!xt(t)||pt(t)!=u)return!1;var e=H(t);if(null===e)return!0;var r=L.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&x.call(r)==F}(c)||Pt(c)?(p=s,Pt(s)?p=function(t){return function(t,e,r,n){var o=!r;r||(r={});var i=-1,a=e.length;for(;++i<a;){var s=e[i],c=n?n(r[s],t[s],s,r,t):void 0;void 0===c&&(c=t[s]),o?ct(r,s,c):at(r,s,c)}return r}(t,Mt(t))}(s):Tt(s)&&!St(s)||(p=function(t){return"function"!=typeof t.constructor||wt(t)?{}:X(H(t))}(c))):f=!1}var _,v,y,g;var b;f&&(a.set(c,p),o(p,c,n,i,a),a.delete(c));it(t,r,p)}(t,e,a,r,mt,n,o);else{var s=n?n(jt(t,a),i,a+"",t,e,o):void 0;void 0===s&&(s=i),it(t,a,s)}}),Mt)}function _t(t,e){return Et(function(t,e,r){return e=q(void 0===e?t.length-1:e,0),function(){for(var n=arguments,o=-1,i=q(n.length-e,0),a=Array(i);++o<i;)a[o]=n[e+o];o=-1;for(var s=Array(e+1);++o<e;)s[o]=n[o];return s[e]=r(a),function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,s)}}(t,e,zt),t+"")}var vt=G?function(t,e){return G(t,"toString",{configurable:!0,enumerable:!1,value:(r=e,function(){return r}),writable:!0});var r}:zt;function yt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function gt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return dt(r)?r:void 0}function bt(t,e){var r=typeof t;return!!(e=null==e?o:e)&&("number"==r||"symbol"!=r&&h.test(t))&&t>-1&&t%1==0&&t<e}function wt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||N)}function jt(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}var Et=function(t){var e=0,r=0;return function(){var n=J(),o=16-(n-r);if(r=n,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(vt);function At(t,e){return t===e||t!=t&&e!=e}var Pt=ft(function(){return arguments}())?ft:function(t){return xt(t)&&L.call(t,"callee")&&!$.call(t,"callee")},Ot=Array.isArray;function It(t){return null!=t&&Nt(t.length)&&!St(t)}var Ct=W||function(){return!1};function St(t){if(!Tt(t))return!1;var e=pt(t);return e==s||e==c||e==a||e==p}function Nt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}function Tt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function xt(t){return null!=t&&"object"==typeof t}var Lt=A?function(t){return function(e){return t(e)}}(A):function(t){return xt(t)&&Nt(t.length)&&!!m[pt(t)]};function Mt(t){return It(t)?ot(t,!0):ht(t)}var kt,Ft=(kt=function(t,e,r){mt(t,e,r)},_t((function(t,e){var r=-1,n=e.length,o=n>1?e[n-1]:void 0,i=n>2?e[2]:void 0;for(o=kt.length>3&&"function"==typeof o?(n--,o):void 0,i&&function(t,e,r){if(!Tt(r))return!1;var n=typeof e;return!!("number"==n?It(r)&&bt(e,r.length):"string"==n&&e in r)&&At(r[e],t)}(e[0],e[1],i)&&(o=n<3?void 0:o,n=1),t=Object(t);++r<n;){var a=e[r];a&&kt(t,a,r,o)}return t})));function zt(t){return t}t.exports=Ft},689:(t,e,r)=>{"use strict";r.r(e),r.d(e,{decode:()=>v,default:()=>w,encode:()=>y,toASCII:()=>b,toUnicode:()=>g,ucs2decode:()=>d,ucs2encode:()=>h});const n=2147483647,o=36,i=/^xn--/,a=/[^\0-\x7F]/,s=/[\x2E\u3002\uFF0E\uFF61]/g,c={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},l=Math.floor,u=String.fromCharCode;function p(t){throw new RangeError(c[t])}function f(t,e){const r=t.split("@");let n="";r.length>1&&(n=r[0]+"@",t=r[1]);const o=function(t,e){const r=[];let n=t.length;for(;n--;)r[n]=e(t[n]);return r}((t=t.replace(s,".")).split("."),e).join(".");return n+o}function d(t){const e=[];let r=0;const n=t.length;for(;r<n;){const o=t.charCodeAt(r++);if(o>=55296&&o<=56319&&r<n){const n=t.charCodeAt(r++);56320==(64512&n)?e.push(((1023&o)<<10)+(1023&n)+65536):(e.push(o),r--)}else e.push(o)}return e}const h=t=>String.fromCodePoint(...t),m=function(t,e){return t+22+75*(t<26)-((0!=e)<<5)},_=function(t,e,r){let n=0;for(t=r?l(t/700):t>>1,t+=l(t/e);t>455;n+=o)t=l(t/35);return l(n+36*t/(t+38))},v=function(t){const e=[],r=t.length;let i=0,a=128,s=72,c=t.lastIndexOf("-");c<0&&(c=0);for(let r=0;r<c;++r)t.charCodeAt(r)>=128&&p("not-basic"),e.push(t.charCodeAt(r));for(let f=c>0?c+1:0;f<r;){const c=i;for(let e=1,a=o;;a+=o){f>=r&&p("invalid-input");const c=(u=t.charCodeAt(f++))>=48&&u<58?u-48+26:u>=65&&u<91?u-65:u>=97&&u<123?u-97:o;c>=o&&p("invalid-input"),c>l((n-i)/e)&&p("overflow"),i+=c*e;const d=a<=s?1:a>=s+26?26:a-s;if(c<d)break;const h=o-d;e>l(n/h)&&p("overflow"),e*=h}const d=e.length+1;s=_(i-c,d,0==c),l(i/d)>n-a&&p("overflow"),a+=l(i/d),i%=d,e.splice(i++,0,a)}var u;return String.fromCodePoint(...e)},y=function(t){const e=[],r=(t=d(t)).length;let i=128,a=0,s=72;for(const r of t)r<128&&e.push(u(r));const c=e.length;let f=c;for(c&&e.push("-");f<r;){let r=n;for(const e of t)e>=i&&e<r&&(r=e);const d=f+1;r-i>l((n-a)/d)&&p("overflow"),a+=(r-i)*d,i=r;for(const r of t)if(r<i&&++a>n&&p("overflow"),r===i){let t=a;for(let r=o;;r+=o){const n=r<=s?1:r>=s+26?26:r-s;if(t<n)break;const i=t-n,a=o-n;e.push(u(m(n+i%a,0))),t=l(i/a)}e.push(u(m(t,0))),s=_(a,d,f===c),a=0,++f}++a,++i}return e.join("")},g=function(t){return f(t,(function(t){return i.test(t)?v(t.slice(4).toLowerCase()):t}))},b=function(t){return f(t,(function(t){return a.test(t)?"xn--"+y(t):t}))},w={version:"2.1.0",ucs2:{decode:d,encode:h},decode:v,encode:y,toASCII:b,toUnicode:g}},957:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ApplePay=void 0;var r={Visa:"visa",MasterCard:"masterCard",JCB:"jcb","American Express":"amex",Discover:null,"Diners Club":null},n=function(){function t(t){this.payjp=t,this.merchantId="merchant.jp.pay.sandbox",this._supportedNetworks=null}return t.prototype.isOverHTTPS=function(){return"https:"===window.location.protocol},t.prototype.checkAvailability=function(t){var e=this;if("function"!=typeof t)throw new Error("You need callback function on 1st argument.");if(this.isOverHTTPS())if("undefined"!=typeof ApplePaySession){if(ApplePaySession.canMakePayments())return Promise.all([this.payjp.retrieveAvailability(),this.payjp._controller.callAPI("GET","accounts/apple_pay/partner_internal_merchant_identifier",this.payjp.getPublicKey())]).then((function(n){if(n.some((function(t){return!!t.error})))return t(!1,"Network error with pay.jp.");var o=n[0],i=n[1];if(e._supportedNetworks=o.card_types_supported.map((function(t){return r[t]})).filter((function(t){return t})),0===e._supportedNetworks.length)return t(!1,"You don't have available brands.");"merchant_id"in i&&(e.merchantId=i.merchant_id),ApplePaySession.canMakePaymentsWithActiveCard(e.merchantId).then((function(e){return e?t(!0,null):t(!1,"There are no available cards in the wallet")}))}));t(!1,"This device does not support ApplePay.")}else t(!1,"This browser does not support ApplePay.");else t(!1,"ApplePay needs https connection.")},t.prototype.buildSession=function(t,e,r){var n=this;if("function"!=typeof e||"function"!=typeof r)throw new Error("引数にコールバック関数を指定してください");t.merchantCapabilities=["supports3DS"],t.supportedNetworks=this._supportedNetworks||["amex","discover","jcb","masterCard","visa"];var o=new ApplePaySession(2,t);return o.onvalidatemerchant=function(t){var e={domain:window.location.host,validation_url:t.validationURL,display_name:window.location.host};n.payjp._controller.callAPI("POST","accounts/apple_pay/sessions",n.payjp.getPublicKey(),e).then((function(t){if(t.error)return o.completeMerchantValidation({}),r(t);o.completeMerchantValidation(t)}))},o.onpaymentauthorized=function(t){var i=t.payment;n.payjp._controller.callAPI("POST","tokens",n.payjp.getPublicKey(),{card:encodeURI(JSON.stringify(i.token.paymentData))}).then((function(t){t.error?(o.completePayment(ApplePaySession.STATUS_FAILURE),r(t)):(i.token=t,e(i))}))},o},t}();e.ApplePay=n},980:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Element=void 0;var n,o=r(378),i=r(593),a=r(25),s=r(326),c="https://natsuki-yamanaka.github.io/",l="".concat(c,"/iframe.html"),u={margin:"0px !important",padding:"0px !important",border:"none !important",display:"block !important",width:"1px !important","min-width":"100% !important",overflow:"hidden !important","user-select":"none !important",transform:"translate(0px) !important"};!function(t){t.default="PayjpElement",t.complete="PayjpElement--complete",t.empty="PayjpElement--empty",t.focus="PayjpElement--focus",t.invalid="PayjpElement--invalid"}(n||(n={}));var p={mounted:[n.default,n.empty],unmounted:Object.values(n),empty:[n.complete,n.invalid],complete:[n.empty,n.invalid],invalid:[n.empty,n.complete]},f=function(){function t(t,e,r,n){var o=this;console.log("test --------------------------- Element constructor -- origin",window.location.origin),console.log("test --------------------------- Element constructor -- href",window.location.href),this._groupId="Elements".concat(t),this._componentName=e,this._controller=n,this._options={style:{},disabled:!1,hideIcon:!1,placeholder:null},this._parent=null,this._label=null,this._lastFontSize=void 0,this._lastHeight=void 0,this._setOptions(r),this._frame=this._createFrame(this._groupId,e),this.focus=function(){console.log("test --------------------------- Element focus -- start");var t=document.activeElement;t&&t.blur&&t.blur(),o._frame.focus(),console.log("test --------------------------- Element focus -- end")},this.hashchange(),this._updateFrameHeight(!0),this._listeners={ready:[],focus:[],change:[],blur:[]},this._isDestroyed=!1;for(var i=function(t){a._controller._on(t,(function(e,r){if(!r||r===o._frame.contentWindow){o._emit(e);for(var n=0,i=o._listeners[t];n<i.length;n++){(0,i[n])(e.payload)}}}))},a=this,s=0,c=Object.keys(this._listeners);s<c.length;s++){i(c[s])}this._controller._on("_render",(function(t,e){e&&e!==o._frame.contentWindow||o._adjustFrameHeight(t.height)}))}return t.prototype._setOptions=function(t){this._options.style=o(this._options.style,t.style),"boolean"==typeof t.disabled&&(this._options.disabled=t.disabled),"string"==typeof t.placeholder&&(this._options.placeholder=t.placeholder),"boolean"==typeof t.hideIcon&&(this._options.hideIcon=t.hideIcon)},t.prototype._createFrame=function(t,e){var r=document.createElement("iframe");return r.setAttribute("name",i.default.setFrameName(t,e)),r.setAttribute("title","Secure payment input frame"),r.setAttribute("scrolling","no"),r.setAttribute("allow","payment"),r.setAttribute("allowTransparency","true"),r.style.cssText=i.default.createCssText(u),r},t.prototype._updateFrameHeight=function(t){var e=this._options.style.base||{},r=e.lineHeight,n=e.fontSize,o=isNaN(parseFloat(r))?void 0:r,i="string"==typeof n?n:void 0;(t||o||i)&&(this._lastHeight=o||this._lastHeight,this._lastFontSize=i||this._lastFontSize,this._frame.style.height=this._calcFrameHeight(this._lastHeight,this._lastFontSize))},t.prototype._calcFrameHeight=function(t,e){if(void 0===t&&(t="1.2em"),void 0===e&&(e="16px"),"string"==typeof t&&/^[0-9.]+px$/.test(t))return t;var r=16,n=parseFloat(e);if(/^(\d+|\d*\.\d+)px$/.test(e))r=n;else if(/^(\d+|\d*\.\d+)em$/.test(e))r=16*n;else if(/^(\d+|\d*\.\d+)%$/.test(e))r=n/100*16;else if(!/^[\d.]+$/.test(e)&&!/^\d*\.(px|em|%)$/.test(e))return"100%";var o=t.toString(),i=parseFloat(o);/^(\d+|\d*\.\d+)%$/.test(o)&&(i/=100);var a="".concat(i*r,"px");return/^[0-9.]+px$/.test(a)?a:"100%"},t.prototype._adjustFrameHeight=function(t){if(this._lastHeight||this._lastFontSize){var e=i.default.toFixed(t)||0,r=i.default.toFixed(this._frame.getBoundingClientRect().height||0);0!==r&&0!==e&&r!==e&&(this._frame.style.height=t+"px")}},t.prototype.hashchange=function(){var t=window.getComputedStyle(document.body),e=s.default._serialize({locale:this._controller.locale,origin:s.default.trimSlash(window.location.origin),componentName:this._componentName,controllerName:this._controller.name,groupId:this._groupId,ltr:"rtl"!==(null==t?void 0:t.getPropertyValue("direction")),style:this._options.style,disabled:this._options.disabled,placeholder:this._options.placeholder,hideIcon:this._options.hideIcon});this._frame.src="".concat(l,"#").concat(e)},t.prototype.mount=function(t){console.log("test --------------------------- Element mount -- ",this._componentName);var e=null;try{e=document.querySelector(t)}catch(t){}if(null===e)throw new Error(a.programmingErrors.INVALID_SELECTOR);this._isDestroyed||this._isMounted()||(this._mountTo(e),this._findPossibleLabel())},t.prototype._isMounted=function(){return document.body&&document.body.contains(this._frame)},t.prototype._mountTo=function(t){for(this._parent=t;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(this._frame);for(var e=0,r=p.mounted;e<r.length;e++){var n=r[e];t.classList.add(n)}},t.prototype.unmount=function(){if(this._isMounted()){this._parent.removeChild(this._frame);for(var t=0,e=p.unmounted;t<e.length;t++){var r=e[t];this._parent.classList.remove(r)}this._label&&this._label.removeEventListener("click",this.focus)}},t.prototype._findPossibleLabel=function(){if(this._parent){var t=this._parent.getAttribute("id");if(console.log("test --------------------------- Element _findPossibleLabel -- id",t,this._componentName),t&&(this._label=document.querySelector("label[for='".concat(t,"']"))),!this._label){var e=this._parent.parentElement;"LABEL"===e.tagName&&(this._label=e)}this._label&&this._label.addEventListener("click",this.focus)}},t.prototype._postMessage=function(t){console.log("test --------------------------- Element _postMessage -- jsURL",c,this._componentName),this._frame.contentWindow.postMessage(s.default._serialize(t),c)},t.prototype.on=function(t,e){if(!Array.isArray(this._listeners[t]))throw new Error(a.programmingErrors.INVALID_PARAM);this._listeners[t].push(e)},t.prototype.addEventListener=function(t,e){this.on(t,e)},t.prototype.update=function(t){if(!i.default.isObject(t))throw new Error(a.programmingErrors.INVALID_PARAM);this._setOptions(t),this.hashchange(),this._updateFrameHeight(!1)},t.prototype.clear=function(){console.log("test --------------------------- Element clear -- ",this._componentName),this._postMessage({action:"clear"});for(var t=0,e=p.empty;t<e.length;t++){var r=e[t];this._parent.classList.remove(r)}this._parent.classList.add(n.empty)},t.prototype.blur=function(){console.log("test --------------------------- Element blur -- ",this._componentName),this._frame.className="inactive",this._postMessage({action:"blur"})},t.prototype._emit=function(t){switch(t.action){case"focus":console.log("test --------------------------- Element _emit focus -- ",this._componentName),this._parent.classList.add(n.focus);break;case"blur":console.log("test --------------------------- Element _emit blur -- ",this._componentName),this._parent.classList.remove(n.focus);break;case"change":if(console.log("test --------------------------- Element _emit change -- start",this._componentName),t.payload.empty){console.log("test --------------------------- Element _emit change -- empty",this._componentName);for(var e=0,r=p.empty;e<r.length;e++){var o=r[e];this._parent.classList.remove(o)}this._parent.classList.add(n.empty)}else if(t.payload.complete){console.log("test --------------------------- Element _emit change -- complete",this._componentName);for(var i=0,a=p.complete;i<a.length;i++){o=a[i];this._parent.classList.remove(o)}this._parent.classList.add(n.complete)}else if(t.payload.error){console.log("test --------------------------- Element _emit change -- error",this._componentName);for(var s=0,c=p.invalid;s<c.length;s++){o=c[s];this._parent.classList.remove(o)}this._parent.classList.add(n.invalid)}console.log("test --------------------------- Element _emit change -- end",this._componentName)}},t}();e.Element=f},228:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.Elements=void 0;var o,i=r(980),a=r(593),s=r(25),c=1,l=function(t){return"type=".concat(t,"は存在しない値です")},u=function(t){return"".concat(t,"は既に生成済です")},p=function(t){return"".concat(t,"は生成済のElementと組み合わせられません")};!function(t){t.card="A_GROUP",t.cardNumber="B_GROUP",t.cardExpiry="B_GROUP",t.cardCvc="B_GROUP"}(o||(o={}));var f=function(t){return!!o[t]},d=function(){function t(t,e){this._id=c++,this._elements=[],this._controller=e,this._controller.locale=(0,s.getLocale)(t)}return t.prototype.create=function(t,e){if(void 0===e&&(e={}),!a.default.isObject(e))throw new Error(s.programmingErrors.INVALID_PARAM);if(!f(t))throw new Error(l(t));for(var r=0,c=this._elements;r<c.length;r++){var d=c[r]._componentName;if(d===t)throw new Error(u(t));if(o[d]!==o[t])throw new Error(p(t))}var h=new i.Element(this._id,t,n({},e),this._controller);return this._elements.push(h),h},t.prototype.getElement=function(t){if(!f(t))throw new Error(l(t));return this._elements.find((function(e){return e._componentName===t}))||null},t.prototype.update=function(t){if(!a.default.isObject(t))throw new Error(s.programmingErrors.INVALID_PARAM);this._controller.locale=t.locale;for(var e=0,r=this._elements;e<r.length;e++){r[e].hashchange()}},t}();e.Elements=d},25:(t,e)=>{"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.getLocale=e.programmingErrors=e.errors=e.messages=void 0,function(t){t.ja="ja",t.en="en"}(r||(r={}));e.messages={"placeholder.cardNumber":{ja:"カード番号",en:"Number"},"placeholder.cardExpiry":{ja:"月 / 年",en:"MM / YY"},"placeholder.cardCvc":{ja:"CVC",en:"CVC"},"label.cardNumber":{ja:"クレジットカードまたはデビットカード番号",en:"Credit or debit card number"},"label.cardExpiry":{ja:"クレジットカードまたはデビットカードの有効期限",en:"Credit or debit card expiration date"},"label.cardCvc":{ja:"クレジットカードまたはデビットカードのセキュリティコード",en:"Credit or debit card CVC/CVV"}},e.errors={environmentalError:{ja:"このブラウザはサポートしていません。",en:"This browser is not supported."},timeoutError:{ja:"タイムアウトしました。通信環境の良い所で再度お試し下さい。",en:"Connection timeout."},processingError:{ja:"処理中にエラーが発生しました。",en:"Error occurred while processing."},invalid_expiry_year_past:{ja:"カードの有効期限が過ぎています。",en:"Card's expiration year is in the past."},invalid_expiry_month_past:{ja:"カードの有効期限（月）が過ぎています。",en:"Card's expiration month is in the past."},invalid_number:{ja:"カード番号が無効です。",en:"Card number is invalid."},incomplete_error:{ja:"入力が完了していません。",en:"Your input is not completed."},tdsTimeout:{ja:"3-Dセキュアが規定時間内に終了しませんでした。",en:"3-D Secure was not completed in time."}},e.programmingErrors={ALREADY_INSTANCED:"既にインスタンス化されています",NO_PUBLIC_KEY:"Public key がセットされていません",INVALID_PARAM:"引数が不正です",NO_ELEMENT_TYPE:"typeの値が存在しません。",INVALID_SELECTOR:"mountに指定されたセレクタが現在ページに存在しません。"},e.getLocale=function(t){var e,n,o=null!==(e=null==t?void 0:t.locale)&&void 0!==e?e:"ja";return null!==(n=r[o])&&void 0!==n?n:"ja"}},682:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.Payjp=void 0;var o=r(228),i=r(980),a=r(25),s=r(593),c=!1;var l=function(){function t(t,e){if(c)throw new Error(a.programmingErrors.ALREADY_INSTANCED);c=!0,this._apiKey=e,this._controller=t,this.applePay=null}return t.prototype.getPublicKey=function(){return this._apiKey},t.prototype.elements=function(t){if(void 0===t&&(t={}),!s.default.isObject(t))throw new Error(a.programmingErrors.INVALID_PARAM);return new o.Elements(n({locale:this._controller.locale},t),this._controller)},t.prototype.retrieveAvailability=function(t){if(void 0===t&&(t={}),!s.default.isObject(t))throw new Error(a.programmingErrors.INVALID_PARAM);return this._controller.callAPI("GET","accounts/brands",this.getPublicKey(),t)},t.prototype.createToken=function(t,e){var r=this;if(void 0===e&&(e={}),!(s.default.isObject(e)&&t instanceof i.Element))throw new Error(a.programmingErrors.INVALID_PARAM);return this._controller.callAPI("POST","tokens",this.getPublicKey(),n(n({},e),{card:n(n({},e.card),{number:null,cvc:null,exp_month:null,exp_year:null})}),s.default.setFrameName(t._groupId,t._componentName)).then((function(t){var e,n="three_d_secure_token"===t.object,o="token"===t.object&&"unverified"===(null===(e=t.card)||void 0===e?void 0:e.three_d_secure_status);if(n||o){var i=t.id;return r.openThreeDSecureDialog(i).then((function(){return n?r._controller.callAPI("POST","tokens",r.getPublicKey(),{three_d_secure_token:i}):o?r._controller.callAPI("POST","tokens/".concat(i,"/tds_finish"),r.getPublicKey()):void 0}))}return t}))},t.prototype.openThreeDSecureDialog=function(t,e){var r=this;void 0===e&&(e=18e5);var n,o,i,s,c=Math.ceil(e/250),l=window.open("https://api.pay.jp"+"/v1/tds/".concat(t,"/start?publickey=").concat(this.getPublicKey()),"threeDSecureWindow",(n=window.parent.screen.width,o=window.parent.screen.height,i=Math.ceil((o-500)/2),s=Math.ceil((n-600)/2),"dialog=yes, width=".concat(600,", height=").concat(500,", top=").concat(i,", left=").concat(s)));return l.focus(),new Promise((function(t,e){var n=0,o=null;o=setInterval((function(){l.closed?(clearInterval(o),t()):++n>c&&(clearInterval(o),e(new Error(a.errors.tdsTimeout[r._controller.locale])))}),250)}))},t}();e.Payjp=l},142:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Transport=void 0;var n,o=r(326),i=r(25),a=r(593),s="https://natsuki-yamanaka.github.io/";!function(t){t[t.GET=0]="GET",t[t.POST=1]="POST"}(n||(n={}));var c=1,l=function(){function t(t){var e=this;this.controllerId="Controller".concat(c++),this.name=a.default.setFrameName(this.controllerId),this.locale=t.locale,this.iframe=null,this.loaded=!1,this.callCount=0,this.messageQueue=[],this._emit={},this._emitEvent={focus:[],blur:[],change:[],ready:[],_render:[]},this._setFrame(),console.log("test --------------------------- Transport constructor -- window.location.origin",window.location.origin),console.log("test --------------------------- Transport constructor -- window.location.href",window.location.href),window.addEventListener("message",(function(t){return e._emitter(t)}))}return t.prototype._setFrame=function(){var t=this;null===this.iframe&&(this.iframe=document.createElement("iframe"),this.iframe.setAttribute("src","".concat(s+"/controller.html","#")+o.default._serialize({referrer:window.location.href,origin:window.location.origin})),console.log("test --------------------------- Transport _setFrame -- this.iframe.src",this.iframe.src),this.iframe.setAttribute("name",this.name),this.iframe.setAttribute("frameborder","0"),this.iframe.setAttribute("scrolling","no"),this.iframe.setAttribute("allowtransparency","true"),this.iframe.setAttribute("width","0"),this.iframe.setAttribute("height","0"),this.iframe.setAttribute("style","position:absolute;top:0;left:0;width:0;height:0"),this.iframe.addEventListener("load",(function(){t.loaded=!0,t._processMessages()})),document.body||(document.body=document.createElement("body")),document.body.appendChild(this.iframe))},t.prototype._emitter=function(t){var e,r=o.default.trimSlash(t.origin.toLowerCase());if(console.log("test --------------------------- Transport _emitter -- origin",r),r===s){var n=o.default._deserialize(t.data);if(null!==n)if(t.source===this.iframe.contentWindow)null===(e=this._emit[n.id])||void 0===e||e.callback(n);else for(var i=0,a=this._emitEvent[n.action];i<a.length;i++){(0,a[i])(n,t.source)}}},t.prototype._processMessages=function(t){var e=this;if(void 0===t&&(t=6e4),this.iframe&&this.loaded){console.log("test --------------------------- Transport _processMessages -- ");for(var r=function(r){n.iframe.contentWindow.postMessage(o.default._serialize(r.message),s);var a=setTimeout((function(){e._emit[r.message.id].callback({response:JSON.stringify({error:{status:504,message:i.errors.timeoutError[e.locale]}})}),delete e._emit[r.message.id]}),t);n._emit[r.message.id]={timeoutId:a,callback:function(t){var n;clearTimeout(e._emit[r.message.id].timeoutId),delete e._emit[r.message.id];try{n=JSON.parse(t.response)}catch(t){n={error:{message:i.errors.processingError[e.locale],status:500}}}return r.callback(n)}}},n=this,a=0,c=this.messageQueue;a<c.length;a++){r(c[a])}this.messageQueue=[]}},t.prototype._on=function(t,e){this._emitEvent[t].push(e)},t.prototype.callAPI=function(t,e,r,n,o){var i=this;void 0===n&&(n={}),void 0===o&&(o=this.name);var a="".concat(this.controllerId,"_").concat(this.callCount++);return new Promise((function(s,c){i.messageQueue.push({message:{id:a,method:t,url:"/v1/"+e,params:n,key:r,locale:i.locale,to:o},callback:s}),i._processMessages()}))},t}();e.Transport=l},593:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=/^pk_(test|live)_[a-zA-Z0-9]+/,n={isPublicKey:function(t){return"string"==typeof t&&r.test(t)},isObject:function(t){return"object"==typeof t&&null!==t},setFrameName:function(t,e){return"_payjp"+t+(e?"_".concat(e):"")},createCssText:function(t){return Object.keys(t).map((function(e){return"".concat(e,": ").concat(t[e],";")})).join(" ")},getCardError:function(t){return t.cardNumber||t.cardExpiry||t.cardCvc||null},toFixed:function(t){return"string"==typeof t&&(t=parseFloat(t)),parseFloat(t.toFixed(1))}};e.default=n},326:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(689),o=new RegExp("^http(s)?://"),i={trimSlash:function(t){return"/"!==t.slice(-1)?t:t.slice(0,-1)},matchAsPuny:function(t,e){var r=i.trimSlash(e.replace(o,"")),a=(0,n.toASCII)(r);return 0===t.replace(o,"").indexOf(a)},_serialize:function(t,e){for(var r=[],n=0,o=Object.keys(t);n<o.length;n++){var a=o[n],s=e?e+"["+a+"]":a,c=t[a];"object"==typeof c&&null!==c?r.push(i._serialize(c,s)):r.push(encodeURIComponent(s)+"="+encodeURIComponent(c))}return r.join("&")},_deserialize:function(t){if("object"==typeof t)return t;for(var e={},r=0,n=t.split("&");r<n.length;r++){var o=n[r].split("="),i=decodeURIComponent(o[0]),a=decodeURIComponent(o[1]);"true"===a?a=!0:"false"===a?a=!1:"null"===a&&(a=null);for(var s=[],c=i,l=-1;-1!==(l=c.indexOf("["));)s.push(c.substring(0,l)),l=(c=c.substring(l+1)).indexOf("]"),c=c.substring(0,l)+c.substring(l+1);if(0!==s.length){for(var u=e,p=0,f=s;p<f.length;p++){var d=f[p];void 0===u[d]&&(u[d]={}),u=u[d]}u[c]=a}else e[i]=a}return e}};e.default=i}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);(()=>{"use strict";var t=r(682),e=r(142),n=r(957),o=r(25),i=r(593),a=["http:","https:","capacitor:","ionic:"];window.Payjp=function(r,s){var c;void 0===s&&(s={});var l=(0,o.getLocale)(s);if(s={locale:l},!(document&&(null===window||void 0===window?void 0:window.addEventListener)&&(null===window||void 0===window?void 0:window.postMessage)&&a.includes(null===(c=null===window||void 0===window?void 0:window.location)||void 0===c?void 0:c.protocol)))throw new Error(o.errors.environmentalError[l]);if(!i.default.isPublicKey(r))throw new Error(o.programmingErrors.NO_PUBLIC_KEY);var u=new t.Payjp(new e.Transport(s),r);return u.applePay=new n.ApplePay(u),u}})()})();