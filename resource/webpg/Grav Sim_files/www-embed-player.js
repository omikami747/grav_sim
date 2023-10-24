(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=ca(this);function u(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ia(a){return a.raw=a}
function ja(a,b){a.raw=b;return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ka(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ma});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=na(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),pa;
if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var qa;a:{var ra={a:!0},sa={};try{sa.__proto__=ra;qa=sa.a;break a}catch(a){}qa=!1}pa=qa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ta=pa;
function w(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(ta)ta(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function ua(){this.s=!1;this.m=null;this.i=void 0;this.h=1;this.G=this.l=0;this.D=this.j=null}
function va(a){if(a.s)throw new TypeError("Generator is already running");a.s=!0}
ua.prototype.la=function(a){this.i=a};
function wa(a,b){a.j={exception:b,od:!0};a.h=a.l||a.G}
ua.prototype.return=function(a){this.j={return:a};this.h=this.G};
ua.prototype.yield=function(a,b){this.h=b;return{value:a}};
ua.prototype.v=function(a){this.h=a};
function xa(a,b,c){a.l=b;void 0!=c&&(a.G=c)}
function ya(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function za(a){var b=a.D.splice(0)[0];(b=a.j=a.j||b)?b.od?a.h=a.l||a.G:void 0!=b.v&&a.G<b.v?(a.h=b.v,a.j=null):a.h=a.G:a.h=0}
function Aa(a){this.h=new ua;this.i=a}
function Ba(a,b){va(a.h);var c=a.h.m;if(c)return Ca(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Da(a)}
function Ca(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.s=!1,e;var f=e.value}catch(g){return a.h.m=null,wa(a.h,g),Da(a)}a.h.m=null;d.call(a.h,f);return Da(a)}
function Da(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.s=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,wa(a.h,c)}a.h.s=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.od)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ea(a){this.next=function(b){va(a.h);a.h.m?b=Ca(a,a.h.m.next,b,a.h.la):(a.h.la(b),b=Da(a));return b};
this.throw=function(b){va(a.h);a.h.m?b=Ca(a,a.h.m["throw"],b,a.h.la):(wa(a.h,b),b=Da(a));return b};
this.return=function(b){return Ba(a,b)};
this[Symbol.iterator]=function(){return this}}
function Fa(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function z(a){return Fa(new Ea(new Aa(a)))}
function Ga(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return oa});
u("Reflect.setPrototypeOf",function(a){return a?a:ta?function(b,c){try{return ta(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.s=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.W),reject:g(this.m)}};
b.prototype.W=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.da(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.S(g):this.G(g)}};
b.prototype.S=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ea(h,g):this.G(g)};
b.prototype.m=function(g){this.la(2,g)};
b.prototype.G=function(g){this.la(1,g)};
b.prototype.la=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.D()};
b.prototype.Y=function(){var g=this;e(function(){if(g.R()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.R=function(){if(this.s)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.D=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.da=function(g){var h=this.l();g.Zb(h.resolve,h.reject)};
b.prototype.ea=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,r){return"function"==typeof t?function(x){try{l(t(x))}catch(y){n(y)}}:r}
var l,n,p=new b(function(t,r){l=t;n=r});
this.Zb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Zb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Zb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(x){return function(y){t[x]=y;r--;0==r&&l(t)}}
var t=[],r=0;do t.push(void 0),r++,d(k.value).Zb(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return fa(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&la(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Object.setPrototypeOf",function(a){return a||ta});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ha(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||ea});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ja=Ja||{},A=this||self;function C(a,b,c){a=a.split(".");c=c||A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function D(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Sa(a,b,c){Sa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Qa:Ra;return Sa.apply(null,arguments)}
function Ta(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ua(){return Date.now()}
function Va(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Xa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Va(Xa,Error);Xa.prototype.name="CustomError";function Ya(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Za(){}
function $a(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},cb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},eb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},fb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
cb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function gb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function hb(a,b){b=bb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a){for(var b in a)return!1;return!0}
function nb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ob(a){return null!==a&&"privembed"in a?a.privembed:!1}
function pb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function qb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function rb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=rb(a[c]);return b}
var sb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<sb.length;f++)c=sb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ub;function vb(){if(void 0===ub){var a=null,b=A.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(c){A.console&&A.console.error(c.message)}ub=a}else ub=a}return ub}
;function wb(){}
function xb(a){return new wb(yb,a)}
var yb={};xb("");var zb={};function Ab(a){this.h=a}
Ab.prototype.toString=function(){return this.h.toString()};function Bb(a){this.h=a}
Bb.prototype.toString=function(){return this.h+""};
function Cb(a){if(a instanceof Bb&&a.constructor===Bb)return a.h;Ka(a);return"type_error:TrustedResourceUrl"}
var Db={};function Eb(a){var b=vb();a=b?b.createScriptURL(a):a;return new Bb(a,Db)}
;var Fb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Gb(a){this.h=a}
Gb.prototype.toString=function(){return this.h.toString()};
var Hb={},Ib=new Gb("about:invalid#zClosurez",Hb);var Jb,Kb=D("CLOSURE_FLAGS"),Lb=Kb&&Kb[610401301];Jb=null!=Lb?Lb:!1;function Mb(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
var Nb,Ob=A.navigator;Nb=Ob?Ob.userAgentData||null:null;function Pb(a){return Jb?Nb?Nb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function E(a){return-1!=Mb().indexOf(a)}
;function Qb(){return Jb?!!Nb&&0<Nb.brands.length:!1}
function Rb(){return Qb()?!1:E("Opera")}
function Sb(){return Qb()?!1:E("Trident")||E("MSIE")}
function Tb(){return E("Firefox")||E("FxiOS")}
function Ub(){return Qb()?Pb("Chromium"):(E("Chrome")||E("CriOS"))&&!(Qb()?0:E("Edge"))||E("Silk")}
;function Vb(a){this.h=a}
Vb.prototype.toString=function(){return this.h.toString()};function Wb(){a:{var a=A.document;if(a.querySelector&&(a=a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Xb.test(a))break a;a=""}return a}
var Xb=/^[\w+/_-]+[=]{0,2}$/;function Yb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $b(a){return a?decodeURI(a):a}
function ac(a,b){return b.match(Zb)[a]||null}
function bc(a){return $b(ac(3,a))}
function cc(a){var b=a.match(Zb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function dc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function ec(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)fc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function hc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)fc(a[b],a[b+1],c);return c.join("&")}
function ic(a){var b=[],c;for(c in a)fc(c,a[c],b);return b.join("&")}
function jc(a,b){var c=2==arguments.length?hc(arguments[1],0):hc(arguments,1);return ec(a,c)}
function kc(a,b){b=ic(b);return ec(a,b)}
function lc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return ec(a,b+c)}
function mc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var nc=/#|$/,oc=/[?&]($|#)/;function pc(a,b){for(var c=a.search(nc),d=0,e,f=[];0<=(e=mc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(oc,"$1")}
;function qc(a){this.h=a}
;function rc(a,b,c){this.i=a;this.l=b;this.h=c||[];this.qb=new Map}
m=rc.prototype;m.Od=function(a){var b=Ga.apply(1,arguments),c=this.Ac(b);c?c.push(new qc(a)):this.Ad(a,b)};
m.Ad=function(a){var b=this.getKey(Ga.apply(1,arguments));this.qb.set(b,[new qc(a)])};
m.Ac=function(){var a=this.getKey(Ga.apply(0,arguments));return this.qb.has(a)?this.qb.get(a):void 0};
m.ge=function(){var a=this.Ac(Ga.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.qb.clear()};
m.getKey=function(){var a=Ga.apply(0,arguments);return a?a.join(","):"key"};function sc(a,b){rc.call(this,a,3,b)}
w(sc,rc);sc.prototype.j=function(a){var b=Ga.apply(1,arguments),c=0,d=this.ge(b);d&&(c=d.h);this.Ad(c+a,b)};function tc(a,b){rc.call(this,a,2,b)}
w(tc,rc);tc.prototype.record=function(a){this.Od(a,Ga.apply(1,arguments))};function uc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function vc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];La(d)?vc.apply(null,d):uc(d)}}
;function F(){this.la=this.la;this.G=this.G}
F.prototype.la=!1;F.prototype.Z=function(){return this.la};
F.prototype.dispose=function(){this.la||(this.la=!0,this.M())};
function wc(a,b){xc(a,Ta(uc,b))}
function xc(a,b){a.la?b():(a.G||(a.G=[]),a.G.push(b))}
F.prototype.M=function(){if(this.G)for(;this.G.length;)this.G.shift()()};function yc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
yc.prototype.stopPropagation=function(){this.j=!0};
yc.prototype.preventDefault=function(){this.defaultPrevented=!0};function zc(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Ac(a){var b=D("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Bc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Cc[c])c=Cc[c];else{c=String(c);if(!Cc[c]){var f=/function\s+([^\(]+)/m.exec(c);Cc[c]=f?f[1]:"[Anonymous]"}c=Cc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Bc(a,b){b||(b={});b[Dc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Dc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Bc(a,b));return c}
function Dc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Cc={};var Ec=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
A.addEventListener("test",c,b);A.removeEventListener("test",c,b)}catch(d){}return a}();function Fc(){return Jb?!!Nb&&!!Nb.platform:!1}
function Gc(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function Hc(a){Hc[" "](a);return a}
Hc[" "]=function(){};var Ic=Rb(),Mc=Sb(),Nc=E("Edge"),Oc=E("Gecko")&&!(-1!=Mb().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),Pc=-1!=Mb().toLowerCase().indexOf("webkit")&&!E("Edge");Pc&&E("Mobile");Fc()||E("Macintosh");Fc()||E("Windows");(Fc()?"Linux"===Nb.platform:E("Linux"))||Fc()||E("CrOS");var Qc=A.navigator||null;Qc&&(Qc.appVersion||"").indexOf("X11");var Rc=Fc()?"Android"===Nb.platform:E("Android");Gc();E("iPad");E("iPod");Gc()||E("iPad")||E("iPod");Mb().toLowerCase().indexOf("kaios");
function Sc(){var a=A.document;return a?a.documentMode:void 0}
var Tc;a:{var Uc="",Vc=function(){var a=Mb();if(Oc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Nc)return/Edge\/([\d\.]+)/.exec(a);if(Mc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Pc)return/WebKit\/(\S+)/.exec(a);if(Ic)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Vc&&(Uc=Vc?Vc[1]:"");if(Mc){var Wc=Sc();if(null!=Wc&&Wc>parseFloat(Uc)){Tc=String(Wc);break a}}Tc=Uc}var Xc=Tc,Yc;if(A.document&&Mc){var Zc=Sc();Yc=Zc?Zc:parseInt(Xc,10)||void 0}else Yc=void 0;var $c=Yc;function ad(a,b){yc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Va(ad,yc);var bd={2:"touch",3:"pen",4:"mouse"};
ad.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Oc){a:{try{Hc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:bd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&ad.Aa.preventDefault.call(this)};
ad.prototype.stopPropagation=function(){ad.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
ad.prototype.preventDefault=function(){ad.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var cd="closure_listenable_"+(1E6*Math.random()|0);var dd=0;function ed(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ec=e;this.key=++dd;this.Sb=this.Yb=!1}
function fd(a){a.Sb=!0;a.listener=null;a.proxy=null;a.src=null;a.ec=null}
;function gd(a){this.src=a;this.listeners={};this.h=0}
gd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=hd(a,b,d,e);-1<g?(b=a[g],c||(b.Yb=!1)):(b=new ed(b,this.src,f,!!d,e),b.Yb=c,a.push(b));return b};
gd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=hd(e,b,c,d);return-1<b?(fd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function id(a,b){var c=b.type;c in a.listeners&&hb(a.listeners[c],b)&&(fd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function hd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Sb&&f.listener==b&&f.capture==!!c&&f.ec==d)return e}return-1}
;var jd="closure_lm_"+(1E6*Math.random()|0),kd={},ld=0;function md(a,b,c,d,e){if(d&&d.once)nd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)md(a,b[f],c,d,e);else c=od(c),a&&a[cd]?a.listen(b,c,Ma(d)?!!d.capture:!!d,e):pd(a,b,c,!1,d,e)}
function pd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ma(e)?!!e.capture:!!e,h=qd(a);h||(a[jd]=h=new gd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=rd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ec||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(sd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ld++}}
function rd(){function a(c){return b.call(a.src,a.listener,c)}
var b=td;return a}
function nd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)nd(a,b[f],c,d,e);else c=od(c),a&&a[cd]?a.h.add(String(b),c,!0,Ma(d)?!!d.capture:!!d,e):pd(a,b,c,!0,d,e)}
function ud(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ud(a,b[f],c,d,e);else(d=Ma(d)?!!d.capture:!!d,c=od(c),a&&a[cd])?a.h.remove(String(b),c,d,e):a&&(a=qd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=hd(b,c,d,e)),(c=-1<a?b[a]:null)&&vd(c))}
function vd(a){if("number"!==typeof a&&a&&!a.Sb){var b=a.src;if(b&&b[cd])id(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(sd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ld--;(c=qd(b))?(id(c,a),0==c.h&&(c.src=null,b[jd]=null)):fd(a)}}}
function sd(a){return a in kd?kd[a]:kd[a]="on"+a}
function td(a,b){if(a.Sb)a=!0;else{b=new ad(b,this);var c=a.listener,d=a.ec||a.src;a.Yb&&vd(a);a=c.call(d,b)}return a}
function qd(a){a=a[jd];return a instanceof gd?a:null}
var wd="__closure_events_fn_"+(1E9*Math.random()>>>0);function od(a){if("function"===typeof a)return a;a[wd]||(a[wd]=function(b){return a.handleEvent(b)});
return a[wd]}
;function xd(){F.call(this);this.h=new gd(this);this.Ja=this;this.ea=null}
Va(xd,F);xd.prototype[cd]=!0;m=xd.prototype;m.addEventListener=function(a,b,c,d){md(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){ud(this,a,b,c,d)};
function yd(a,b){var c=a.ea;if(c){var d=[];for(var e=1;c;c=c.ea)d.push(c),++e}a=a.Ja;c=b.type||b;"string"===typeof b?b=new yc(b,a):b instanceof yc?b.target=b.target||a:(e=b,b=new yc(c,a),tb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=zd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=zd(g,c,!0,b)&&e,b.j||(e=zd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=zd(g,c,!1,b)&&e}
m.M=function(){xd.Aa.M.call(this);this.removeAllListeners();this.ea=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,fd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function zd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Sb&&g.capture==c){var h=g.listener,k=g.ec||g.src;g.Yb&&id(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ad(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Ad.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Bd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Cd(a,b){return a+Math.random()*(b-a)}
;function Dd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Dd.prototype;m.clone=function(){return new Dd(this.x,this.y)};
m.equals=function(a){return a instanceof Dd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Ed(a,b){this.width=a;this.height=b}
m=Ed.prototype;m.clone=function(){return new Ed(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.Ob=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Fd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Gd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Hd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Id;function Jd(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=Gd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Sa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Sb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.cd;c.cd=null;e()}};
return function(e){d.next={cd:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function Kd(a){A.setTimeout(function(){throw a;},0)}
;function Ld(){this.i=this.h=null}
Ld.prototype.add=function(a,b){var c=Md.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Ld.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Md=new Ad(function(){return new Nd},function(a){return a.reset()});
function Nd(){this.next=this.scope=this.h=null}
Nd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Nd.prototype.reset=function(){this.next=this.scope=this.h=null};var Od,Pd=!1,Qd=new Ld;function Rd(a,b){Od||Sd();Pd||(Od(),Pd=!0);Qd.add(a,b)}
function Sd(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);Od=function(){a.then(Td)}}else Od=function(){var b=Td;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&(Qb()||!E("Edge"))&&A.Window.prototype.setImmediate==A.setImmediate?(Id||(Id=Jd()),Id(b)):A.setImmediate(b)}}
function Td(){for(var a;a=Qd.remove();){try{a.h.call(a.scope)}catch(b){Kd(b)}Bd(Md,a)}Pd=!1}
;function Ud(a){this.h=0;this.s=void 0;this.l=this.i=this.j=null;this.m=this.G=!1;if(a!=Za)try{var b=this;a.call(void 0,function(c){Vd(b,2,c)},function(c){Vd(b,3,c)})}catch(c){Vd(this,3,c)}}
function Wd(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Wd.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Xd=new Ad(function(){return new Wd},function(a){a.reset()});
function Yd(a,b,c){var d=Xd.get();d.i=a;d.h=b;d.context=c;return d}
function Zd(a){return new Ud(function(b,c){c(a)})}
Ud.prototype.then=function(a,b,c){return $d(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ud.prototype.$goog_Thenable=!0;m=Ud.prototype;m.sc=function(a,b){return $d(this,null,a,b)};
m.catch=Ud.prototype.sc;m.cancel=function(a){if(0==this.h){var b=new ae(a);Rd(function(){be(this,b)},this)}};
function be(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?be(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ce(c),de(c,e,3,b)))}a.j=null}else Vd(a,3,b)}
function ee(a,b){a.i||2!=a.h&&3!=a.h||fe(a);a.l?a.l.next=b:a.i=b;a.l=b}
function $d(a,b,c,d){var e=Yd(null,null,null);e.child=new Ud(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ae?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;ee(a,e);return e.child}
m.df=function(a){this.h=0;Vd(this,2,a)};
m.ef=function(a){this.h=0;Vd(this,3,a)};
function Vd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.df,f=a.ef;if(d instanceof Ud){ee(d,Yd(e||Za,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ma(d))try{var k=d.then;if("function"===typeof k){ge(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.s=c,a.h=b,a.j=null,fe(a),3!=b||c instanceof ae||he(a,c))}}
function ge(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function fe(a){a.G||(a.G=!0,Rd(a.ae,a))}
function ce(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.ae=function(){for(var a;a=ce(this);)de(this,a,this.h,this.s);this.G=!1};
function de(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,ie(b,c,d);else try{b.j?b.i.call(b.context):ie(b,c,d)}catch(e){je.call(null,e)}Bd(Xd,b)}
function ie(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function he(a,b){a.m=!0;Rd(function(){a.m&&je.call(null,b)})}
var je=Kd;function ae(a){Xa.call(this,a)}
Va(ae,Xa);ae.prototype.name="cancel";function ke(a,b){xd.call(this);this.j=a||1;this.i=b||A;this.l=Sa(this.bf,this);this.m=Ua()}
Va(ke,xd);m=ke.prototype;m.enabled=!1;m.Ea=null;m.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
m.bf=function(){if(this.enabled){var a=Ua()-this.m;0<a&&a<.8*this.j?this.Ea=this.i.setTimeout(this.l,this.j-a):(this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null),yd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.i.setTimeout(this.l,this.j),this.m=Ua())};
m.stop=function(){this.enabled=!1;this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null)};
m.M=function(){ke.Aa.M.call(this);this.stop();delete this.i};
function le(a,b,c){if("function"===typeof a)c&&(a=Sa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Sa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:A.setTimeout(a,b||0)}
;function me(a){F.call(this);this.D=a;this.i=new Map;this.s=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.h=new ke(this.flushInterval);this.h.listen("tick",this.nb,!1,this);wc(this,this.h);this.m=!1}
w(me,F);m=me.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function ne(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.nb()}
m.nb=function(){var a=this.i.values();a=[].concat(ka(a)).filter(function(b){return b.qb.size});
a.length&&this.D.flush(a,this.m);oe(a);this.j=0;this.h.enabled&&this.h.stop()};
m.Wc=function(a){var b=Ga.apply(1,arguments);this.i.has(a)||this.i.set(a,new sc(a,b))};
m.Xc=function(a){var b=Ga.apply(1,arguments);this.i.has(a)||this.i.set(a,new tc(a,b))};
function pe(a,b){return a.s.has(b)?void 0:a.i.get(b)}
m.uc=function(a){this.Md.apply(this,[a,1].concat(ka(Ga.apply(1,arguments))))};
m.Md=function(a,b){var c=Ga.apply(2,arguments),d=pe(this,a);d&&d instanceof sc&&(d.j(b,c),ne(this))};
m.record=function(a,b){var c=Ga.apply(2,arguments),d=pe(this,a);d&&d instanceof tc&&(d.record(b,c),ne(this))};
function oe(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function qe(a){this.h=a;this.h.Wc("/client_streamz/bg/fiec",{tb:3,sb:"rk"},{tb:2,sb:"ec"},{tb:3,sb:"em"})}
function re(a,b,c,d){a.h.uc("/client_streamz/bg/fiec",b,c,d)}
function se(a){this.h=a;this.h.Xc("/client_streamz/bg/fil",{tb:3,sb:"rk"})}
se.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function te(a){this.h=a;this.h.Wc("/client_streamz/bg/fsc",{tb:3,sb:"rk"})}
function ue(a){this.h=a;this.h.Xc("/client_streamz/bg/fsl",{tb:3,sb:"rk"})}
ue.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};var ve={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function we(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=xe(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=ye(a,h),d+=ye(a,h+4),e+=ye(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return ve.toString(e)}
function xe(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function ye(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Tb();var ze=Gc()||E("iPod"),Ae=E("iPad");!E("Android")||Ub()||Tb()||Rb()||E("Silk");Ub();var Be=E("Safari")&&!(Ub()||(Qb()?0:E("Coast"))||Rb()||(Qb()?0:E("Edge"))||(Qb()?Pb("Microsoft Edge"):E("Edg/"))||(Qb()?Pb("Opera"):E("OPR"))||Tb()||E("Silk")||E("Android"))&&!(Gc()||E("iPad")||E("iPod"));var Ce={},De=null;function Ee(a,b){La(a);void 0===b&&(b=0);Fe();b=Ce[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ge(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;He(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function He(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=De[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Fe();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Fe(){if(!De){De={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ce[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===De[f]&&(De[f]=e)}}}}
;var Ie="undefined"!==typeof Uint8Array,Je=!Mc&&"function"===typeof btoa;function Ke(a){if(!Je)return Ee(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Le=/[-_.]/g,Me={"-":"+",_:"/",".":"="};function Ne(a){return Me[a]||""}
function Oe(a){return Ie&&null!=a&&a instanceof Uint8Array}
var Pe={};var Qe;function Re(a){if(a!==Pe)throw Error("illegal external caller");}
function Se(a,b){Re(b);this.value_=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Se.prototype.Ob=function(){return null==this.value_};
Se.prototype.sizeBytes=function(){Re(Pe);var a=this.value_;if(null!=a&&!Oe(a))if("string"===typeof a)if(Je){Le.test(a)&&(a=a.replace(Le,Ne));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ge(a);else Ka(a),a=null;return(a=null==a?a:this.value_=a)?a.length:0};function Te(a){return Array.prototype.slice.call(a)}
;var Ue="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,ka(Object.values({Gf:1,Ef:2,Df:4,Jf:8,If:16,Hf:32,vf:64,Kf:128,Cf:256,Bf:512,Ff:1024,Af:2048})));var Ve=Ue?function(a,b){a[Ue]|=b}:function(a,b){void 0!==a.Ua?a.Ua|=b:Object.defineProperties(a,{Ua:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function We(a){var b=Xe(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Te(a)),Ye(a,b|1))}
function Ze(a,b,c){return c?a|b:a&~b}
var Xe=Ue?function(a){return a[Ue]|0}:function(a){return a.Ua|0},$e=Ue?function(a){return a[Ue]}:function(a){return a.Ua},Ye=Ue?function(a,b){a[Ue]=b}:function(a,b){void 0!==a.Ua?a.Ua=b:Object.defineProperties(a,{Ua:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function af(){var a=[];Ve(a,1);return a}
function bf(a,b){Ye(b,(a|0)&-2303)}
function cf(a,b){Ye(b,(a|34)&-2269)}
function df(a){a=a>>12&1023;return 0===a?536870912:a}
;var ef={};function ff(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var gf;function hf(a,b){if(null==a){if(!b)throw Error();}else if("string"===typeof a)a=a?new Se(a,Pe):Qe||(Qe=new Se(null,Pe));else if(a.constructor!==Se)if(Oe(a))a instanceof Uint8Array||Array.isArray(a),a=a.length?new Se(new Uint8Array(a),Pe):Qe||(Qe=new Se(null,Pe));else throw Error();return a}
var jf,kf=[];Ye(kf,55);jf=Object.freeze(kf);function lf(a){if(a&2)throw Error();}
;function mf(){var a=Error();zc(a,"incident");Kd(a)}
function nf(){var a=Error();zc(a,"warning");return a}
;function of(a){return a.displayName||a.name||"unknown type name"}
function pf(a){if(null!=a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ka(a)+": "+a);a=!!a}return a}
var qf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function rf(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:qf.test(a)}
function sf(a){if(null!=a){if("number"!==typeof a)throw nf();Number.isFinite(a)||mf()}return a}
function tf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return a}
function uf(a){if(null!=a){if(!rf(a))throw nf();a="string"===typeof a?vf(a):wf(a)}return a}
function wf(a){rf(a);return a}
function vf(a){rf(a);return a}
function xf(a){if("string"!==typeof a)throw Error();return a}
function yf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function zf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+of(b)+" but got "+(a&&of(a.constructor)));}
function Af(a,b,c){if(null!=a&&"object"===typeof a&&a.Kc===ef)return a;if(Array.isArray(a)){var d=Xe(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&Ye(a,e);return new b(a)}}
;var Bf;function Cf(a,b){Xe(b);Bf=b;a=new a(b);Bf=void 0;return a}
function Df(a,b,c){null==a&&(a=Bf);Bf=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-4190209|(b&1023)<<12)}else{if(!Array.isArray(a))throw Error();d=Xe(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(ff(g)){d|=256;b=+!!(d&512)-1;e=f-b;1024<=e&&(Ef(c,b,g),e=1023);d=d&-4190209|(e&1023)<<12;break a}}b&&(g=+!!(d&512)-1,b=Math.max(b,e-g),1024<b&&(Ef(c,g,{}),d|=256,b=1023),d=d&-4190209|(b&1023)<<12)}}Ye(a,d);return a}
function Ef(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function Ff(a,b){return Gf(b)}
function Gf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(Oe(a))return Ke(a);if(a instanceof Se){var b=a.value_;return null==b?"":"string"===typeof b?b:a.value_=Ke(b)}}}return a}
;function Hf(a,b,c){a=Te(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function If(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Xe(a)&1?void 0:f&&Xe(a)&2?a:Jf(a,b,c,void 0!==d,e,f);else if(ff(a)){var g={},h;for(h in a)g[h]=If(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Jf(a,b,c,d,e,f){var g=d||c?Xe(a):0;d=d?!!(g&32):void 0;a=Te(a);for(var h=0;h<a.length;h++)a[h]=If(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Kf(a){return a.Kc===ef?a.toJSON():Gf(a)}
;function Lf(a,b,c){c=void 0===c?cf:c;if(null!=a){if(Ie&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Xe(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(Ye(a,(d|34)&-5),a):Jf(a,Lf,d&4?cf:c,!0,!1,!0)}a.Kc===ef&&(c=a.A,d=$e(c),a=d&2?a:Cf(a.constructor,Mf(c,d,!0)));return a}}
function Mf(a,b,c){var d=c||b&2?cf:bf,e=!!(b&32);a=Hf(a,b,function(f){return Lf(f,e,d)});
Ve(a,32|(c?2:0));return a}
function Nf(a){var b=a.A,c=$e(b);return c&2?Cf(a.constructor,Mf(b,c,!1)):a}
;Object.freeze({});function Of(a,b){a=a.A;return Pf(a,$e(a),b)}
function Pf(a,b,c,d){if(-1===c)return null;if(c>=df(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function G(a,b,c){var d=a.A,e=$e(d);lf(e);Qf(d,e,b,c);return a}
function Qf(a,b,c,d,e){ff(d);var f=df(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&Ye(a,e)}else a[c+(+!!(b&512)-1)]=d,b&256&&(a=a[a.length-1],c in a&&delete a[c])}
function Rf(a){return void 0!==Sf(a,Tf,11,!1)}
function Uf(a,b,c,d){var e=a.A,f=$e(e);lf(f);if(null==c)return Qf(e,f,b),a;var g=Xe(c),h=g,k=!!(2&g)||Object.isFrozen(c),l=!k&&!1;if(!(4&g))for(g=21,k&&(c=Te(c),h=0,g=Vf(g,f,!0)),k=0;k<c.length;k++)c[k]=d(c[k]);l&&(g=Ze(g,2,!0));g!==h&&Ye(c,g);l&&Object.freeze(c);Qf(e,f,b,c);return a}
function Wf(a,b,c,d){a=a.A;var e=$e(a);lf(e);for(var f=0,g=0;g<c.length;g++){var h=c[g];null!=Pf(a,e,h)&&(0!==f&&Qf(a,e,f),f=h)}(c=f)&&c!==b&&null!=d&&Qf(a,e,c);Qf(a,e,b,d)}
function Sf(a,b,c,d){a=a.A;var e=$e(a),f=Pf(a,e,c,d);b=Af(f,b,e);b!==f&&null!=b&&Qf(a,e,c,b,d);return b}
function Xf(a,b,c,d){d=void 0===d?!1:d;b=Sf(a,b,c,d);if(null==b)return b;a=a.A;var e=$e(a);if(!(e&2)){var f=Nf(b);f!==b&&(b=f,Qf(a,e,c,b,d))}return b}
function Yf(a,b,c,d){null!=d?zf(d,b):d=void 0;return G(a,c,d)}
function Zf(a,b,c,d){var e=a.A,f=$e(e);lf(f);if(null==d)return Qf(e,f,c),a;for(var g=Xe(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&!1,p=!0,t=!0,r=0;r<d.length;r++){var x=d[r];zf(x,b);k||(x=!!(Xe(x.A)&2),p&&(p=!x),t&&(t=x))}k||(g=Ze(g,5,!0),g=Ze(g,8,p),g=Ze(g,16,t),n&&(g=Ze(g,t?2:2048,!0)),g!==h&&(l&&(d=Te(d),g=Vf(g,f,!0)),Ye(d,g)),n&&Object.freeze(d));Qf(e,f,c,d);return a}
function Vf(a,b,c){a=Ze(a,2,!!(2&b));a=Ze(a,32,!!(32&b)&&c);return a=Ze(a,2048,!1)}
function $f(a,b){a=Of(a,b);var c;null==a?c=a:rf(a)?"number"===typeof a?c=wf(a):c=vf(a):c=void 0;return c}
function ag(a){a=Of(a,1);a=null==a?a:rf(a)?"string"===typeof a?vf(a):wf(a):void 0;return a}
function bg(a){return hf(a,!1)}
function cg(a,b,c){null!=c&&(Number.isFinite(c)||mf());return G(a,b,c)}
;function dg(a,b,c){this.A=Df(a,b,c)}
m=dg.prototype;m.toJSON=function(){if(gf)var a=eg(this,this.A,!1);else a=Jf(this.A,Kf,void 0,void 0,!1,!1),a=eg(this,a,!0);return a};
m.serialize=function(){gf=!0;try{return JSON.stringify(this.toJSON(),Ff)}finally{gf=!1}};
m.clone=function(){var a=this.A,b=$e(a);return Cf(this.constructor,Mf(a,b,!1))};
m.Kc=ef;m.toString=function(){return eg(this,this.A,!1).toString()};
function eg(a,b,c){var d=a.constructor.Wa,e=$e(c?a.A:b),f=df(e);e=!1;if(d){if(!c){b=Te(b);var g;if(b.length&&ff(g=b[b.length-1]))for(e=0;e<d.length;e++)if(d[e]>=f){Object.assign(b[b.length-1]={},g);break}e=!0}g=b;c=!c;f=$e(a.A);a=df(f);f=+!!(f&512)-1;for(var h,k,l=0;l<d.length;l++)if(k=d[l],k<a){k+=f;var n=g[k];null==n?g[k]=c?jf:af():c&&n!==jf&&We(n)}else h||(n=void 0,g.length&&ff(n=g[g.length-1])?h=n:g.push(h={})),n=h[k],null==h[k]?h[k]=c?jf:af():c&&n!==jf&&We(n)}d=b.length;if(!d)return b;var p;
if(ff(h=b[d-1])){a:{var t=h;g={};c=!1;for(var r in t)a=t[r],Array.isArray(a)&&a!=a&&(c=!0),null!=a?g[r]=a:c=!0;if(c){for(var x in g){t=g;break a}t=null}}t!=h&&(p=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var y=!0}if(!p&&!y)return b;var B;e?B=b:B=Array.prototype.slice.call(b,0,d);b=B;e&&(b.length=d);t&&b.push(t);return b}
;function fg(a){this.A=Df(a)}
w(fg,dg);var gg=[1,2,3];function hg(a){this.A=Df(a)}
w(hg,dg);var ig=[1,2,3];function jg(a){this.A=Df(a)}
w(jg,dg);jg.Wa=[1];function kg(a){this.A=Df(a)}
w(kg,dg);kg.Wa=[3,6,4];function lg(a){this.A=Df(a)}
w(lg,dg);lg.Wa=[1];function mg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function ng(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],y=e[2],B=e[3],H=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var N=B^x&(y^B);var P=1518500249}else N=x^y^B,P=1859775393;else 60>r?(N=x&y|B&(x|y),P=2400959708):(N=x^y^B,P=3395469782);N=((p<<5|p>>>27)&4294967295)+N+H+P+t[r]&4294967295;H=B;B=y;y=(x<<30|x>>>2)&4294967295;x=p;p=N}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+B&4294967295;e[4]=e[4]+H&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],x=0,y=p.length;x<y;++x)r.push(p.charCodeAt(x));p=r}t||(t=p.length);r=0;if(0==l)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<t;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var x=24;0<=x;x-=8)p[t++]=e[r]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Wd:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function og(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,pg(mg(d),a,c||null)].join(" "):null}
function pg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],cb(d,function(h){e.push(h)}),qg(e.join(" "));
var f=[],g=[];cb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];cb(d,function(h){e.push(h)});
a=qg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function qg(a){var b=ng();b.update(a);return b.Wd().toLowerCase()}
;var rg={};function sg(a){this.h=a||{cookie:""}}
m=sg.prototype;m.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.Ob())return!0;this.set("TESTCOOKIESENABLED","1",{ic:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.cg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ic}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Fb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ic:0,path:b,domain:c});return d};
m.Dc=function(){return tg(this).keys};
m.Ob=function(){return!this.h.cookie};
m.clear=function(){for(var a=tg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function tg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Fb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var ug=new sg("undefined"==typeof document?null:document);function vg(a){return!!rg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function wg(a){a=void 0===a?!1:a;var b=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;vg(a)&&(b=b||A.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new sg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");vg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function xg(a,b,c,d){(a=A[a])||"undefined"===typeof document||(a=(new sg(document)).get(b));return a?og(a,c,d):null}
function yg(a,b){b=void 0===b?!1:b;var c=mg(String(A.location.href)),d=[];if(wg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?A.__SAPISID:A.__APISID;e||"undefined"===typeof document||(e=new sg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?og(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&vg(b)&&((b=xg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=xg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function zg(a){this.A=Df(a)}
w(zg,dg);zg.Wa=[2];function Ag(a){xd.call(this);this.intervalMs=a;this.enabled=!1;this.i=function(){return Ua()};
this.j=this.i()}
w(Ag,xd);Ag.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Ag.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.j=this.i())};
Ag.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Ag.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.i()-this.j,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),yd(this,"tick"),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Bg(a){this.A=Df(a)}
w(Bg,dg);function Cg(a){this.A=Df(a)}
w(Cg,dg);function Dg(a){this.h=this.i=this.j=a}
Dg.prototype.reset=function(){this.h=this.i=this.j};
Dg.prototype.getValue=function(){return this.i};function Eg(a){this.A=Df(a)}
w(Eg,dg);function Fg(a){this.A=Df(a)}
w(Fg,dg);Fg.Wa=[1];function Tf(a){this.A=Df(a)}
w(Tf,dg);var Gg=["platform","platformVersion","architecture","model","uaFullVersion"];new Fg;function Hg(a){this.A=Df(a)}
w(Hg,dg);function Ig(a){this.A=Df(a)}
w(Ig,dg);function Jg(a){this.A=Df(a,34)}
w(Jg,dg);Jg.Wa=[3,20,27];function Kg(a){this.A=Df(a,19)}
w(Kg,dg);Kg.prototype.Tb=function(a){return cg(this,2,a)};
Kg.Wa=[3,5];function Lg(a){this.A=Df(a,6)}
w(Lg,dg);var Mg=function(a){return function(b){if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Ve(b,32);b=Cf(a,b)}return b}}(Lg);
Lg.Wa=[5];function Ng(a){this.A=Df(a)}
w(Ng,dg);var Og;Og=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=Xf;this.defaultValue=void 0}(175237375,{Tf:0},Ng);function Pg(a){F.call(this);var b=this;this.componentId="";this.i=[];this.na="";this.Ba=this.ea=-1;this.ma=!1;this.D=this.experimentIds=null;this.Y=this.da=this.s=this.l=0;this.Ja=1;this.timeoutMillis=0;this.R=!1;this.logSource=a.logSource;this.ub=a.ub||function(){};
this.j=new Qg(a.logSource,a.yb);this.network=a.network;this.Fb=a.Fb||null;this.bufferSize=1E3;this.ob=Ta(Cd,0,1);this.W=a.ff||null;this.sessionIndex=a.sessionIndex||null;this.Mb=a.Mb||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.gd;this.yb=a.yb||!1;var c=cg(new Hg,1,1);Rg(this.j,c);this.m=new Dg(1E4);this.h=new Ag(this.m.getValue());a=Sg(this,a.Yc);md(this.h,"tick",a,!1,this);this.S=new Ag(6E5);md(this.S,"tick",a,!1,this);this.Mb||this.S.start();this.yb||(md(document,"visibilitychange",
function(){"hidden"===document.visibilityState&&b.yc()}),md(document,"pagehide",this.yc,!1,this))}
w(Pg,F);function Sg(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
m=Pg.prototype;m.M=function(){this.yc();this.h.stop();this.S.stop();F.prototype.M.call(this)};
function Tg(a){a.W||(a.W=.01>a.ob()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.W}
function Ug(a,b){a.m=new Dg(1>b?1:b);a.h.setInterval(a.m.getValue())}
m.log=function(a){a=a.clone();var b=this.Ja++;a=G(a,21,uf(b));this.componentId&&G(a,26,yf(this.componentId));ag(a)||(b=Date.now(),b=Number.isFinite(b)?b.toString():"0",G(a,1,uf(b)));null==$f(a,15)&&G(a,15,uf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=this.experimentIds.clone(),Yf(a,zg,16,b));b=this.i.length-this.bufferSize+1;0<b&&(this.i.splice(0,b),this.l+=b);this.i.push(a);this.Mb||this.h.enabled||this.h.start()};
m.flush=function(a,b){var c=this;if(0===this.i.length)a&&a();else if(this.R)Vg(this.j,3),Wg(this);else{var d=Date.now();if(this.Ba>d&&this.ea<d)b&&b("throttled");else{Vg(this.j,1);var e=Xg(this.j,this.i,this.l,this.s,this.Fb,this.da,this.Y);d={};var f=this.ub();f&&(d.Authorization=f);var g=Tg(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=lc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=lc(g,"pageId",this.pageId));if(f&&this.na===f)b&&b("stale-auth-token");
else{this.i=[];this.h.enabled&&this.h.stop();this.l=0;var h=e.serialize(),k;this.D&&this.D.isSupported(h.length)&&(k=this.D.compress(h));var l={url:g,body:h,Sd:1,Oc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(r){c.m.reset();c.h.setInterval(c.m.getValue());if(r){var x=null;try{var y=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));x=Mg(y)}catch(H){}if(x){r=Number;y="-1";y=void 0===y?"0":y;var B=ag(x);r=r(null!=B?B:y);0<r&&(c.ea=Date.now(),
c.Ba=c.ea+r);x=Og.ctor?Og.i(x,Og.ctor,Og.h,!0):Og.i(x,Og.h,null,!0);if(r=null===x?void 0:x)x=-1,x=void 0===x?0:x,r=tf(Of(r,1)),x=null!=r?r:x,-1!==x&&(c.ma||Ug(c,x))}}a&&a();c.s=0},p=function(r,x){var y=void 0===y?2:y;
var B=e.A;var H=$e(B),N=!!(2&H),P=N?1:y;y=1===P;P=2===P;var da=!!(2&H)&&P,ha=H&2;var L=Pf(B,H,3);Array.isArray(L)||(L=jf);var T=!!(H&32),U=Xe(L);0===U&&T&&!ha?(U|=33,Ye(L,U)):U&1||(U|=1,Ye(L,U));ha&&(ha=!1,U&2||(Ve(L,34),ha=!!(4&U)),ha&&Object.freeze(L));var I=Xe(L),Y=!!(2&I);U=!!(4&I);ha=!!(32&I);T=Y&&U||!!(2048&I);if(!U){var W=L,ab=H,Jc=!!(2&I);Jc&&(ab=Ze(ab,2,!0));for(var Kc=!Jc,Lc=!0,Z=0,zi=0;Z<W.length;Z++){var Ai=Af(W[Z],Jg,ab);if(Ai instanceof Jg){if(!Jc){var Wm=!!(Xe(Ai.A)&2);Kc&&(Kc=!Wm);
Lc&&(Lc=Wm)}W[zi++]=Ai}}zi<Z&&(W.length=zi);I=Ze(I,4,!0);I=Ze(I,16,Lc);I=Ze(I,8,Kc);Ye(W,I);Y&&!da&&(Object.freeze(L),T=!0)}da=I;Y=!!(8&I)||y&&!L.length;if(!N&&!Y){T&&(L=Te(L),T=!1,da=0,I=Vf(I,H,!1),Qf(B,H,3,L));N=L;Y=I;for(W=0;W<N.length;W++)I=N[W],ab=Nf(I),I!==ab&&(N[W]=ab);Y=Ze(Y,8,!0);I=Y=Ze(Y,16,!N.length)}T||(y?I=Ze(I,!L.length||16&I&&(!U||ha)?2:2048,!0):I=Ze(I,32,!1),I!==da&&Ye(L,I),y&&(Object.freeze(L),T=!0));P&&T&&(L=Te(L),I=Vf(I,H,!1),Ye(L,I),Qf(B,H,3,L));B=L;H=$f(e,14);y=c.m;y.h=Math.min(3E5,
2*y.h);y.i=Math.min(3E5,y.h+Math.round(.2*(Math.random()-.5)*y.h));c.h.setInterval(c.m.getValue());401===r&&f&&(c.na=f);H&&(c.l+=H);void 0===x&&(x=c.isRetryable(r));x&&(c.i=B.concat(c.i),c.Mb||c.h.enabled||c.h.start());b&&b("net-send-failed",r);++c.s},t=function(){c.network&&c.network.send(l,n,p)};
k?k.then(function(r){l.Oc["Content-Encoding"]="gzip";l.Oc["Content-Type"]="application/binary";l.body=r;l.Sd=2;t()},function(){t()}):t()}}}};
m.yc=function(){Yg(this.j,!0);this.flush();Yg(this.j,!1)};
function Wg(a){Zg(a,function(b,c){b=lc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.R&&!d&&(a.R=!1);return d})}
function Zg(a,b){if(0!==a.i.length){var c=pc(Tg(a),"format");c=jc(c,"auth",a.ub(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.i.length;++d){var e=a.i.slice(0,32),f=Xg(a.j,e,a.l,a.s,a.Fb,a.da,a.Y);if(!b(c,f)){++a.s;break}a.l=0;a.s=0;a.da=0;a.Y=0;a.i=a.i.slice(e.length)}a.h.enabled&&a.h.stop()}}
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function Qg(a,b){this.yb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new Kg;Number.isInteger(a)&&this.h.Tb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Rg(this,new Hg)}
Qg.prototype.Tb=function(a){this.h.Tb(a);return this};
function Rg(a,b){Yf(a.h,Hg,1,b);Of(b,1)||cg(b,1,1);if(!a.yb){b=$g(a);var c=Of(b,5);(null==c||"string"===typeof c)&&c||G(b,5,yf(a.locale))}a.uach&&(b=$g(a),Xf(b,Fg,9)||Yf(b,Fg,9,a.uach))}
function Vg(a,b){Rf(ah(a))&&(a=bh(a),cg(a,1,b))}
function Yg(a,b){Rf(ah(a))&&(a=bh(a),G(a,2,pf(b)))}
function ah(a){return Xf(a.h,Hg,1)}
function ch(a,b){var c=void 0===c?Gg:c;b(window,c).then(function(d){a.uach=d;d=$g(a);Yf(d,Fg,9,a.uach);return!0}).catch(function(){return!1})}
function $g(a){a=ah(a);var b=Xf(a,Tf,11);b||(b=new Tf,Yf(a,Tf,11,b));return b}
function bh(a){a=$g(a);var b=Xf(a,Eg,10);b||(b=new Eg,G(b,2,pf(!1)),Yf(a,Eg,10,b));return b}
function Xg(a,b,c,d,e,f,g){c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(Rf(ah(a))){var h=bh(a);G(h,3,sf(d))}Rf(ah(a))&&(d=bh(a),G(d,4,sf(f)));Rf(ah(a))&&(f=bh(a),G(f,5,sf(g)));a=a.h.clone();g=Date.now().toString();a=G(a,4,uf(g));b=Zf(a,Jg,3,b);e&&(a=new Bg,e=G(a,13,sf(e)),a=new Cg,e=Yf(a,Bg,2,e),a=new Ig,e=Yf(a,Cg,1,e),e=cg(e,2,9),Yf(b,Ig,18,e));c&&G(b,14,uf(c));return b}
;function dh(){}
dh.prototype.serialize=function(a){var b=[];eh(this,a,b);return b.join("")};
function eh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),eh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),fh(d,c),c.push(":"),eh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":fh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var gh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},hh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function fh(a,b){b.push('"',a.replace(hh,function(c){var d=gh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),gh[c]=d);return d}),'"')}
;function ih(){}
ih.prototype.h=null;ih.prototype.getOptions=function(){var a;(a=this.h)||(a={},jh(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var kh;function lh(){}
Va(lh,ih);function mh(a){return(a=jh(a))?new ActiveXObject(a):new XMLHttpRequest}
function jh(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
kh=new lh;function nh(a){xd.call(this);this.headers=new Map;this.S=a||null;this.i=!1;this.R=this.I=null;this.l=this.da="";this.j=this.Y=this.s=this.W=!1;this.m=0;this.D=null;this.Ba="";this.ma=this.na=!1}
Va(nh,xd);var oh=/^https?$/i,ph=["POST","PUT"],qh=[];function rh(a,b,c,d,e,f,g){var h=new nh;qh.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Ud,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.na=g);h.send(a,c,d,e)}
m=nh.prototype;m.Ud=function(){this.dispose();hb(qh,this)};
m.send=function(a,b,c,d){if(this.I)throw Error("[goog.net.XhrIo] Object is active with another request="+this.da+"; newUri="+a);b=b?b.toUpperCase():"GET";this.da=a;this.l="";this.W=!1;this.i=!0;this.I=this.S?mh(this.S):mh(kh);this.R=this.S?this.S.getOptions():kh.getOptions();this.I.onreadystatechange=Sa(this.rd,this);try{this.getStatus(),this.Y=!0,this.I.open(b,String(a),!0),this.Y=!1}catch(g){this.getStatus();sh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=A.FormData&&a instanceof A.FormData;!(0<=bb(ph,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.I.setRequestHeader(d,c);this.Ba&&(this.I.responseType=this.Ba);"withCredentials"in this.I&&this.I.withCredentials!==this.na&&(this.I.withCredentials=this.na);try{th(this),0<this.m&&(this.ma=uh(this.I),this.getStatus(),this.ma?(this.I.timeout=this.m,this.I.ontimeout=Sa(this.Fd,
this)):this.D=le(this.Fd,this.m,this)),this.getStatus(),this.s=!0,this.I.send(a),this.s=!1}catch(g){this.getStatus(),sh(this,g)}};
function uh(a){return Mc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Fd=function(){"undefined"!=typeof Ja&&this.I&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),yd(this,"timeout"),this.abort(8))};
function sh(a,b){a.i=!1;a.I&&(a.j=!0,a.I.abort(),a.j=!1);a.l=b;vh(a);wh(a)}
function vh(a){a.W||(a.W=!0,yd(a,"complete"),yd(a,"error"))}
m.abort=function(){this.I&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.I.abort(),this.j=!1,yd(this,"complete"),yd(this,"abort"),wh(this))};
m.M=function(){this.I&&(this.i&&(this.i=!1,this.j=!0,this.I.abort(),this.j=!1),wh(this,!0));nh.Aa.M.call(this)};
m.rd=function(){this.Z()||(this.Y||this.s||this.j?xh(this):this.Ae())};
m.Ae=function(){xh(this)};
function xh(a){if(a.i&&"undefined"!=typeof Ja)if(a.R[1]&&4==yh(a)&&2==a.getStatus())a.getStatus();else if(a.s&&4==yh(a))le(a.rd,0,a);else if(yd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(zh(a))yd(a,"complete"),yd(a,"success");else{try{var b=2<yh(a)?a.I.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";vh(a)}}finally{wh(a)}}}
function wh(a,b){if(a.I){th(a);var c=a.I,d=a.R[0]?function(){}:null;
a.I=null;a.R=null;b||yd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function th(a){a.I&&a.ma&&(a.I.ontimeout=null);a.D&&(A.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.I};
m.isComplete=function(){return 4==yh(this)};
function zh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=ac(1,String(a.da)),!a&&A.self&&A.self.location&&(a=A.self.location.protocol.slice(0,-1)),b=!oh.test(a?a.toLowerCase():"");c=b}return c}
function yh(a){return a.I?a.I.readyState:0}
m.getStatus=function(){try{return 2<yh(this)?this.I.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function Ah(){}
Ah.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
rh(a.url,function(d){d=d.target;if(zh(d)){try{var e=d.I?d.I.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Oc,a.timeoutMillis,a.withCredentials)};function Bh(a,b){F.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.j=!1;this.componentId="";this.network=new Ah}
w(Bh,F);Bh.prototype.gd=function(){this.W=!0;return this};function Ch(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;F.call(this);f?a=f:(a=new Bh(a,"0"),a.componentId=b,wc(this,a),""!=c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),b=new Pg({logSource:a.logSource,ub:a.ub?a.ub:yg,sessionIndex:a.sessionIndex,ff:a.i,yb:a.j,Mb:!1,gd:a.W,pageId:a.pageId,Yc:a.Yc,network:a.network?a.network:void 0}),wc(a,b),a.s&&Rg(b.j,a.s),a.h&&(c=a.h,d=$g(b.j),G(d,7,yf(c))),a.m&&(b.D=a.m),a.componentId&&(b.componentId=a.componentId),
a.Fb&&(b.Fb=a.Fb),a.l&&((c=a.l)?(b.experimentIds||(b.experimentIds=new zg),c=c.serialize(),G(b.experimentIds,4,yf(c))):b.experimentIds&&G(b.experimentIds,4)),a.R&&(c=a.R,b.experimentIds||(b.experimentIds=new zg),Uf(b.experimentIds,2,c,bg)),a.D&&(c=a.D,b.ma=!0,Ug(b,c)),a.S&&ch(b.j,a.S),a.network.Tb&&a.network.Tb(a.logSource),a.network.Ue&&a.network.Ue(b),a=b);this.h=a}
w(Ch,F);
Ch.prototype.flush=function(a){var b=a||[];if(b.length){a=new lg;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new kg;f=G(f,1,yf(e.i));for(var g=[],h=0;h<e.h.length;h++)g.push(e.h[h].sb);f=Uf(f,3,g,xf);g=[];h=[];for(var k=v(e.qb.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var n=e.l;for(var p=e.Ac(l)||[],t=[],r=0;r<p.length;r++){var x=p[r],y=x&&x.h;x=new hg;switch(n){case 3:y=Number(y);Number.isFinite(y)&&Wf(x,1,ig,uf(y));break;case 2:y=Number(y);
if(null!=y&&"number"!==typeof y)throw Error("Value of float/double field must be a number, found "+typeof y+": "+y);Wf(x,2,ig,y)}t.push(x)}n=t;for(p=0;p<n.length;p++){t=n[p];r=new jg;t=Yf(r,hg,2,t);r=l;x=[];y=[];for(var B=0;B<e.h.length;B++)y.push(e.h[B].tb);for(B=0;B<y.length;B++){var H=y[B],N=r[B],P=new fg;switch(H){case 3:Wf(P,1,gg,yf(String(N)));break;case 2:H=Number(N);Number.isFinite(H)&&Wf(P,2,gg,sf(H));break;case 1:Wf(P,3,gg,pf("true"===N))}x.push(P)}Zf(t,fg,1,x);g.push(t)}}Zf(f,jg,4,g);c.push(f);
e.clear()}Zf(a,kg,1,c);b=this.h;a instanceof Jg?b.log(a):(c=new Jg,a=a.serialize(),a=G(c,8,yf(a)),b.log(a));this.h.flush()}};function Dh(a){this.s=Eh();this.m=new Ch(1828);this.h=new me(this.m);this.G=new se(this.h);this.j=new te(this.h);this.l=new ue(this.h);this.i=new qe(this.h);this.Qa=we(a)}
function Eh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Fh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Gh(a){function b(r,x){Promise.resolve().then(function(){var y;null!=(y=c.va)&&y.G.record(Eh()-y.s,y.Qa);g.resolve({Qd:r,Xe:x})})}
var c=this;this.h=!1;var d=a.program;var e=a.je;if(!1!==a.Ge){var f;this.va=null!=(f=a.va)?f:new Dh(e)}var g=new Fh;this.i=g.promise;if(!A[e]){var h;null!=(h=this.va)&&re(h.i,h.Qa,1,"");var k;null!=(k=this.va)&&k.h.nb()}else if(!A[e].a){var l;null!=(l=this.va)&&re(l.i,l.Qa,2,"");var n;null!=(n=this.va)&&n.h.nb()}try{this.j=v((0,A[e].a)(d,b,!0,a.jg)).next().value,this.We=g.promise.then(function(){})}catch(r){var p;
null!=(p=this.va)&&re(p.i,p.Qa,4,r.message);var t;null!=(t=this.va)&&t.h.nb();throw r;}}
Gh.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");var c=Eh(),d;null!=(d=this.va)&&d.j.h.uc("/client_streamz/bg/fsc",d.Qa);return this.i.then(function(e){var f=e.Qd;return new Promise(function(g){f(function(h){var k;null!=(k=b.va)&&k.l.record(Eh()-c,k.Qa);g(h)},[a.ed,
a.Ye,a.hf])})})};
Gh.prototype.Cd=function(a){if(this.h)throw Error("Already disposed");var b=Eh(),c;null!=(c=this.va)&&c.j.h.uc("/client_streamz/bg/fsc",c.Qa);a=this.j([a.ed,a.Ye,a.hf]);var d;null!=(d=this.va)&&d.l.record(Eh()-b,d.Qa);return a};
Gh.prototype.dispose=function(){var a;null!=(a=this.va)&&a.h.nb();this.h=!0;this.i.then(function(b){(b=b.Xe)&&b()})};
Gh.prototype.Z=function(){return this.h};var Hh=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Ih="function"===typeof URL;function Jh(a){if(a instanceof Gb)a instanceof Gb&&a.constructor===Gb?a=a.h:(Ka(a),a="type_error:SafeUrl");else{b:if(Ih){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;function Kh(a,b){b=Jh(b);void 0!==b&&(a.href=b)}
;var Lh={};function Mh(){}
function Nh(a){this.h=a}
w(Nh,Mh);Nh.prototype.toString=function(){return this.h};function Oh(a){var b="true".toString(),c=[new Nh(Ph[0].toLowerCase(),Lh)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Nh)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Qh(){throw Error("unknown trace type");}
;var Rh="alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Sh(a,b){if(b instanceof Bb)a.href=Cb(b).toString();else{if(-1===Rh.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Jh(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function Th(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Uh(a,b){a.src=Cb(b);Th(a)}
;var Vh=ia([""]),Wh=ja(["\x00"],["\\0"]),Xh=ja(["\n"],["\\n"]),Yh=ja(["\x00"],["\\u0000"]);function Zh(a){return-1===a.toString().indexOf("`")}
Zh(function(a){return a(Vh)})||Zh(function(a){return a(Wh)})||Zh(function(a){return a(Xh)})||Zh(function(a){return a(Yh)});function $h(a){this.se=a}
function ai(a){return new $h(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var bi=[ai("data"),ai("http"),ai("https"),ai("mailto"),ai("ftp"),new $h(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function ci(a){var b=di;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ei(){var a=[];ci(function(b){a.push(b)});
return a}
var di={jf:"allow-forms",kf:"allow-modals",lf:"allow-orientation-lock",mf:"allow-pointer-lock",nf:"allow-popups",pf:"allow-popups-to-escape-sandbox",qf:"allow-presentation",rf:"allow-same-origin",sf:"allow-scripts",tf:"allow-top-navigation",uf:"allow-top-navigation-by-user-activation"},fi=$a(function(){return ei()});
function gi(){var a=hi(),b={};cb(fi(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function hi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function ii(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var ji=(new Date).getTime();"undefined"!==typeof TextDecoder&&new TextDecoder;var ki="undefined"!==typeof TextEncoder?new TextEncoder:null,li=ki?function(a){return ki.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function mi(a){xd.call(this);var b=this;this.s=this.j=0;this.Da=null!=a?a:{oa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return z(function(e){return e.yield(ni(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.s||oi(this)}
w(mi,xd);function pi(){var a=qi;mi.h||(mi.h=new mi(a));return mi.h}
mi.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Da.qa(this.s);delete mi.h};
mi.prototype.wa=function(){return this.i};
function oi(a){a.s=a.Da.oa(function(){var b;return z(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.v(3):c.yield(ni(a),3):c.yield(ni(a),3);oi(a);c.h=0})},3E4)}
function ni(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return z(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,xa(h,2,3),d&&(a.j=a.Da.oa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.D=[h.j];h.l=0;h.G=0;a.m=void 0;a.j&&(a.Da.qa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?yd(a,"networkstatus-online"):yd(a,"networkstatus-offline"));c(g);za(h);break;case 2:ya(h),g=!1,h.v(3)}})})}
;function ri(){this.data=[];this.h=-1}
ri.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
ri.prototype.get=function(a){return!!this.data[a]};
function si(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function ti(a,b){this.h=a[A.Symbol.iterator]();this.i=b}
ti.prototype[Symbol.iterator]=function(){return this};
ti.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function ui(a,b){return new ti(a,b)}
;function vi(){this.blockSize=-1}
;function wi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.G=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Va(wi,vi);wi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function xi(a,b,c){c||(c=0);var d=a.G;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
wi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)xi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){xi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){xi(this,e);f=0;break}}this.i=f;this.l+=b}};
wi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;xi(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function yi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Bi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ci(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:yi(a).match(/\S+/g)||[],b=0<=bb(a,b));return b}
function Di(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ci(a,"inverted-hdpi")&&Bi(a,Array.prototype.filter.call(a.classList?a.classList:yi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Ei(){}
Ei.prototype.next=function(){return Fi};
var Fi={done:!0,value:void 0};function Gi(a){return{value:a,done:!1}}
Ei.prototype.Fa=function(){return this};function Hi(a){if(a instanceof Ii||a instanceof Ji||a instanceof Ki)return a;if("function"==typeof a.next)return new Ii(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Ii(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Fa)return new Ii(function(){return a.Fa()});
throw Error("Not an iterator or iterable.");}
function Ii(a){this.i=a}
Ii.prototype.Fa=function(){return new Ji(this.i())};
Ii.prototype[Symbol.iterator]=function(){return new Ki(this.i())};
Ii.prototype.h=function(){return new Ki(this.i())};
function Ji(a){this.i=a}
w(Ji,Ei);Ji.prototype.next=function(){return this.i.next()};
Ji.prototype[Symbol.iterator]=function(){return new Ki(this.i)};
Ji.prototype.h=function(){return new Ki(this.i)};
function Ki(a){Ii.call(this,function(){return a});
this.j=a}
w(Ki,Ii);Ki.prototype.next=function(){return this.j.next()};function Li(a,b){this.i={};this.h=[];this.Ya=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Li)for(c=a.Dc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=Li.prototype;m.Dc=function(){Mi(this);return this.h.concat()};
m.has=function(a){return Ni(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Oi;Mi(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Oi(a,b){return a===b}
m.Ob=function(){return 0==this.size};
m.clear=function(){this.i={};this.Ya=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return Ni(this.i,a)?(delete this.i[a],--this.size,this.Ya++,this.h.length>2*this.size&&Mi(this),!0):!1};
function Mi(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Ni(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Ni(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Ni(this.i,a)?this.i[a]:b};
m.set=function(a,b){Ni(this.i,a)||(this.size+=1,this.h.push(a),this.Ya++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Dc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Li(this)};
m.keys=function(){return Hi(this.Fa(!0)).h()};
m.values=function(){return Hi(this.Fa(!1)).h()};
m.entries=function(){var a=this;return ui(this.keys(),function(b){return[b,a.get(b)]})};
m.Fa=function(a){Mi(this);var b=0,c=this.Ya,d=this,e=new Ei;e.next=function(){if(c!=d.Ya)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Fi;var f=d.h[b++];return Gi(a?f:d.i[f])};
return e};
function Ni(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Pi(a){F.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.s=!!a}
Va(Pi,F);m=Pi.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Hb(a)}return!1};
m.Hb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&hb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.ab=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];Qi(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.Z();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Hb(c)}}return 0!=e}return!1};
function Qi(a,b,c){Rd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Hb,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.M=function(){Pi.Aa.M.call(this);this.clear();this.j.length=0};function Ri(a){this.h=a}
Ri.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new dh).serialize(b))};
Ri.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ri.prototype.remove=function(a){this.h.remove(a)};function Si(a){this.h=a}
Va(Si,Ri);function Ti(a){this.data=a}
function Ui(a){return void 0===a||a instanceof Ti?a:new Ti(a)}
Si.prototype.set=function(a,b){Si.Aa.set.call(this,a,Ui(b))};
Si.prototype.i=function(a){a=Si.Aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Si.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Vi(a){this.h=a}
Va(Vi,Si);Vi.prototype.set=function(a,b,c){if(b=Ui(b)){if(c){if(c<Ua()){Vi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ua()}Vi.Aa.set.call(this,a,b)};
Vi.prototype.i=function(a){var b=Vi.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ua()||c&&c>Ua())Vi.prototype.remove.call(this,a);else return b}};function Wi(){}
;function Xi(){}
Va(Xi,Wi);Xi.prototype[Symbol.iterator]=function(){return Hi(this.Fa(!0)).h()};
Xi.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Yi(a){this.h=a}
Va(Yi,Xi);m=Yi.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.Fa=function(a){var b=0,c=this.h,d=new Ei;d.next=function(){if(b>=c.length)return Fi;var e=c.key(b++);if(a)return Gi(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Gi(e)};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Zi(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Va(Zi,Yi);function $i(a,b){this.i=a;this.h=null;var c;if(c=Mc)c=!(9<=Number($c));if(c){aj||(aj=new Li);this.h=aj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),aj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Va($i,Xi);var bj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},aj=null;function cj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return bj[b]})}
m=$i.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(cj(a),b);dj(this)};
m.get=function(a){a=this.h.getAttribute(cj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(cj(a));dj(this)};
m.Fa=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ei;d.next=function(){if(b>=c.length)return Fi;var e=c[b++];if(a)return Gi(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Gi(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);dj(this)};
function dj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ej(a,b){this.i=a;this.h=b+"::"}
Va(ej,Xi);ej.prototype.set=function(a,b){this.i.set(this.h+a,b)};
ej.prototype.get=function(a){return this.i.get(this.h+a)};
ej.prototype.remove=function(a){this.i.remove(this.h+a)};
ej.prototype.Fa=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ei;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Gi(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var J={},fj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;J.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
J.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var gj={pb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
jd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},hj={pb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
jd:function(a){return[].concat.apply([],a)}};
J.Ve=function(){fj?(J.mb=Uint8Array,J.Ia=Uint16Array,J.Ld=Int32Array,J.assign(J,gj)):(J.mb=Array,J.Ia=Array,J.Ld=Array,J.assign(J,hj))};
J.Ve();var ij=!0;try{new Uint8Array(1)}catch(a){ij=!1}
function jj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new J.mb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var kj={};kj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var lj={},mj,nj=[],oj=0;256>oj;oj++){mj=oj;for(var pj=0;8>pj;pj++)mj=mj&1?3988292384^mj>>>1:mj>>>1;nj[oj]=mj}lj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^nj[(a^b[d])&255];return a^-1};var qj={};qj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function rj(a){for(var b=a.length;0<=--b;)a[b]=0}
var sj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],tj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],uj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],vj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],wj=Array(576);rj(wj);var xj=Array(60);rj(xj);var yj=Array(512);rj(yj);var zj=Array(256);rj(zj);var Aj=Array(29);rj(Aj);var Bj=Array(30);rj(Bj);function Cj(a,b,c,d,e){this.Dd=a;this.ce=b;this.be=c;this.Xd=d;this.xe=e;this.md=a&&a.length}
var Dj,Ej,Fj;function Gj(a,b){this.hd=a;this.Cb=0;this.Xa=b}
function Hj(a,b){a.V[a.pending++]=b&255;a.V[a.pending++]=b>>>8&255}
function Ij(a,b,c){a.fa>16-c?(a.ka|=b<<a.fa&65535,Hj(a,a.ka),a.ka=b>>16-a.fa,a.fa+=c-16):(a.ka|=b<<a.fa&65535,a.fa+=c)}
function Jj(a,b,c){Ij(a,c[2*b],c[2*b+1])}
function Kj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Lj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Kj(d[e]++,e))}
function Mj(a){var b;for(b=0;286>b;b++)a.ra[2*b]=0;for(b=0;30>b;b++)a.cb[2*b]=0;for(b=0;19>b;b++)a.ga[2*b]=0;a.ra[512]=1;a.Pa=a.Gb=0;a.ya=a.matches=0}
function Nj(a){8<a.fa?Hj(a,a.ka):0<a.fa&&(a.V[a.pending++]=a.ka);a.ka=0;a.fa=0}
function Oj(a,b,c){Nj(a);Hj(a,c);Hj(a,~c);J.pb(a.V,a.window,b,c,a.pending);a.pending+=c}
function Pj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Qj(a,b,c){for(var d=a.X[c],e=c<<1;e<=a.Na;){e<a.Na&&Pj(b,a.X[e+1],a.X[e],a.depth)&&e++;if(Pj(b,d,a.X[e],a.depth))break;a.X[c]=a.X[e];c=e;e<<=1}a.X[c]=d}
function Rj(a,b,c){var d=0;if(0!==a.ya){do{var e=a.V[a.Lb+2*d]<<8|a.V[a.Lb+2*d+1];var f=a.V[a.Hc+d];d++;if(0===e)Jj(a,f,b);else{var g=zj[f];Jj(a,g+256+1,b);var h=sj[g];0!==h&&(f-=Aj[g],Ij(a,f,h));e--;g=256>e?yj[e]:yj[256+(e>>>7)];Jj(a,g,c);h=tj[g];0!==h&&(e-=Bj[g],Ij(a,e,h))}}while(d<a.ya)}Jj(a,256,b)}
function Sj(a,b){var c=b.hd,d=b.Xa.Dd,e=b.Xa.md,f=b.Xa.Xd,g,h=-1;a.Na=0;a.wb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.X[++a.Na]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Na;){var k=a.X[++a.Na]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Pa--;e&&(a.Gb-=d[2*k+1])}b.Cb=h;for(g=a.Na>>1;1<=g;g--)Qj(a,c,g);k=f;do g=a.X[1],a.X[1]=a.X[a.Na--],Qj(a,c,1),d=a.X[1],a.X[--a.wb]=g,a.X[--a.wb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.X[1]=k++,Qj(a,c,1);while(2<=a.Na);a.X[--a.wb]=
a.X[1];g=b.hd;k=b.Cb;d=b.Xa.Dd;e=b.Xa.md;f=b.Xa.ce;var l=b.Xa.be,n=b.Xa.xe,p,t=0;for(p=0;15>=p;p++)a.Ka[p]=0;g[2*a.X[a.wb]+1]=0;for(b=a.wb+1;573>b;b++){var r=a.X[b];p=g[2*g[2*r+1]+1]+1;p>n&&(p=n,t++);g[2*r+1]=p;if(!(r>k)){a.Ka[p]++;var x=0;r>=l&&(x=f[r-l]);var y=g[2*r];a.Pa+=y*(p+x);e&&(a.Gb+=y*(d[2*r+1]+x))}}if(0!==t){do{for(p=n-1;0===a.Ka[p];)p--;a.Ka[p]--;a.Ka[p+1]+=2;a.Ka[n]--;t-=2}while(0<t);for(p=n;0!==p;p--)for(r=a.Ka[p];0!==r;)d=a.X[--b],d>k||(g[2*d+1]!==p&&(a.Pa+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),r--)}Lj(c,h,a.Ka)}
function Tj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ga[2*l]+=g:0!==l?(l!==e&&a.ga[2*l]++,a.ga[32]++):10>=g?a.ga[34]++:a.ga[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Uj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Jj(a,l,a.ga);while(0!==--g)}else 0!==l?(l!==e&&(Jj(a,l,a.ga),g--),Jj(a,16,a.ga),Ij(a,g-3,2)):10>=g?(Jj(a,17,a.ga),Ij(a,g-3,3)):(Jj(a,18,a.ga),Ij(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Vj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ra[2*c])return 0;if(0!==a.ra[18]||0!==a.ra[20]||0!==a.ra[26])return 1;for(c=32;256>c;c++)if(0!==a.ra[2*c])return 1;return 0}
var Wj=!1;function Xj(a,b,c){a.V[a.Lb+2*a.ya]=b>>>8&255;a.V[a.Lb+2*a.ya+1]=b&255;a.V[a.Hc+a.ya]=c&255;a.ya++;0===b?a.ra[2*c]++:(a.matches++,b--,a.ra[2*(zj[c]+256+1)]++,a.cb[2*(256>b?yj[b]:yj[256+(b>>>7)])]++);return a.ya===a.Pb-1}
;function Yj(a,b){a.msg=qj[b];return b}
function Zj(a){for(var b=a.length;0<=--b;)a[b]=0}
function ak(a){var b=a.state,c=b.pending;c>a.K&&(c=a.K);0!==c&&(J.pb(a.output,b.V,b.Rb,c,a.Db),a.Db+=c,b.Rb+=c,a.Sc+=c,a.K-=c,b.pending-=c,0===b.pending&&(b.Rb=0))}
function bk(a,b){var c=0<=a.ta?a.ta:-1,d=a.o-a.ta,e=0;if(0<a.level){2===a.H.xc&&(a.H.xc=Vj(a));Sj(a,a.hc);Sj(a,a.cc);Tj(a,a.ra,a.hc.Cb);Tj(a,a.cb,a.cc.Cb);Sj(a,a.Zc);for(e=18;3<=e&&0===a.ga[2*vj[e]+1];e--);a.Pa+=3*(e+1)+14;var f=a.Pa+3+7>>>3;var g=a.Gb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Ij(a,b?1:0,3),Oj(a,c,d);else if(4===a.strategy||g===f)Ij(a,2+(b?1:0),3),Rj(a,wj,xj);else{Ij(a,4+(b?1:0),3);c=a.hc.Cb+1;d=a.cc.Cb+1;e+=1;Ij(a,c-257,5);Ij(a,d-1,5);Ij(a,e-4,4);for(f=0;f<e;f++)Ij(a,a.ga[2*
vj[f]+1],3);Uj(a,a.ra,c-1);Uj(a,a.cb,d-1);Rj(a,a.ra,a.cb)}Mj(a);b&&Nj(a);a.ta=a.o;ak(a.H)}
function K(a,b){a.V[a.pending++]=b}
function ck(a,b){a.V[a.pending++]=b>>>8&255;a.V[a.pending++]=b&255}
function dk(a,b){var c=a.pd,d=a.o,e=a.xa,f=a.qd,g=a.o>a.ia-262?a.o-(a.ia-262):0,h=a.window,k=a.Za,l=a.Ha,n=a.o+258,p=h[d+e-1],t=h[d+e];a.xa>=a.ld&&(c>>=2);f>a.u&&(f=a.u);do{var r=b;if(h[r+e]===t&&h[r+e-1]===p&&h[r]===h[d]&&h[++r]===h[d+1]){d+=2;for(r++;h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&d<n;);r=258-(n-d);d=n-258;if(r>e){a.Bb=b;e=r;if(r>=f)break;p=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function ek(a){var b=a.ia,c;do{var d=a.Jd-a.u-a.o;if(a.o>=b+(b-262)){J.pb(a.window,a.window,b,b,0);a.Bb-=b;a.o-=b;a.ta-=b;var e=c=a.fc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.H.ja)break;e=a.H;c=a.window;f=a.o+a.u;var g=e.ja;g>d&&(g=d);0===g?c=0:(e.ja-=g,J.pb(c,e.input,e.ib,g,f),1===e.state.wrap?e.F=kj(e.F,c,g,f):2===e.state.wrap&&(e.F=lj(e.F,c,g,f)),e.ib+=g,e.lb+=g,c=g);a.u+=c;if(3<=a.u+a.sa)for(d=a.o-a.sa,a.J=a.window[d],
a.J=(a.J<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.J=(a.J<<a.Ma^a.window[d+3-1])&a.La,a.Ha[d&a.Za]=a.head[a.J],a.head[a.J]=d,d++,a.sa--,3>a.u+a.sa););}while(262>a.u&&0!==a.H.ja)}
function fk(a,b){for(var c;;){if(262>a.u){ek(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.Ma^a.window[a.o+3-1])&a.La,c=a.Ha[a.o&a.Za]=a.head[a.J],a.head[a.J]=a.o);0!==c&&a.o-c<=a.ia-262&&(a.P=dk(a,c));if(3<=a.P)if(c=Xj(a,a.o-a.Bb,a.P-3),a.u-=a.P,a.P<=a.Ic&&3<=a.u){a.P--;do a.o++,a.J=(a.J<<a.Ma^a.window[a.o+3-1])&a.La,a.Ha[a.o&a.Za]=a.head[a.J],a.head[a.J]=a.o;while(0!==--a.P);a.o++}else a.o+=a.P,a.P=0,a.J=a.window[a.o],a.J=(a.J<<a.Ma^a.window[a.o+1])&a.La;else c=Xj(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(bk(a,!1),0===a.H.K))return 1}a.sa=2>a.o?a.o:2;return 4===b?(bk(a,!0),0===a.H.K?3:4):a.ya&&(bk(a,!1),0===a.H.K)?1:2}
function gk(a,b){for(var c,d;;){if(262>a.u){ek(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.Ma^a.window[a.o+3-1])&a.La,c=a.Ha[a.o&a.Za]=a.head[a.J],a.head[a.J]=a.o);a.xa=a.P;a.td=a.Bb;a.P=2;0!==c&&a.xa<a.Ic&&a.o-c<=a.ia-262&&(a.P=dk(a,c),5>=a.P&&(1===a.strategy||3===a.P&&4096<a.o-a.Bb)&&(a.P=2));if(3<=a.xa&&a.P<=a.xa){d=a.o+a.u-3;c=Xj(a,a.o-1-a.td,a.xa-3);a.u-=a.xa-1;a.xa-=2;do++a.o<=d&&(a.J=(a.J<<a.Ma^a.window[a.o+3-1])&a.La,a.Ha[a.o&a.Za]=a.head[a.J],a.head[a.J]=a.o);
while(0!==--a.xa);a.gb=0;a.P=2;a.o++;if(c&&(bk(a,!1),0===a.H.K))return 1}else if(a.gb){if((c=Xj(a,0,a.window[a.o-1]))&&bk(a,!1),a.o++,a.u--,0===a.H.K)return 1}else a.gb=1,a.o++,a.u--}a.gb&&(Xj(a,0,a.window[a.o-1]),a.gb=0);a.sa=2>a.o?a.o:2;return 4===b?(bk(a,!0),0===a.H.K?3:4):a.ya&&(bk(a,!1),0===a.H.K)?1:2}
function hk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){ek(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.P=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.P=258-(e-d);a.P>a.u&&(a.P=a.u)}3<=a.P?(c=Xj(a,1,a.P-3),a.u-=a.P,a.o+=a.P,a.P=0):(c=Xj(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(bk(a,!1),0===a.H.K))return 1}a.sa=0;return 4===b?(bk(a,!0),0===a.H.K?3:4):
a.ya&&(bk(a,!1),0===a.H.K)?1:2}
function ik(a,b){for(var c;;){if(0===a.u&&(ek(a),0===a.u)){if(0===b)return 1;break}a.P=0;c=Xj(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(bk(a,!1),0===a.H.K))return 1}a.sa=0;return 4===b?(bk(a,!0),0===a.H.K?3:4):a.ya&&(bk(a,!1),0===a.H.K)?1:2}
function jk(a,b,c,d,e){this.ke=a;this.we=b;this.ze=c;this.ue=d;this.ee=e}
var kk;kk=[new jk(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.u){ek(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.ta+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,bk(a,!1),0===a.H.K)return 1;if(a.o-a.ta>=a.ia-262&&(bk(a,!1),0===a.H.K))return 1}a.sa=0;if(4===b)return bk(a,!0),0===a.H.K?3:4;a.o>a.ta&&bk(a,!1);return 1}),
new jk(4,4,8,4,fk),new jk(4,5,16,8,fk),new jk(4,6,32,32,fk),new jk(4,4,16,16,gk),new jk(8,16,32,32,gk),new jk(8,16,128,128,gk),new jk(8,32,128,256,gk),new jk(32,128,258,1024,gk),new jk(32,258,258,4096,gk)];
function lk(){this.H=null;this.status=0;this.V=null;this.wrap=this.pending=this.Rb=this.za=0;this.B=null;this.Ca=0;this.method=8;this.zb=-1;this.Za=this.Uc=this.ia=0;this.window=null;this.Jd=0;this.head=this.Ha=null;this.qd=this.ld=this.strategy=this.level=this.Ic=this.pd=this.xa=this.u=this.Bb=this.o=this.gb=this.td=this.P=this.ta=this.Ma=this.La=this.Ec=this.fc=this.J=0;this.ra=new J.Ia(1146);this.cb=new J.Ia(122);this.ga=new J.Ia(78);Zj(this.ra);Zj(this.cb);Zj(this.ga);this.Zc=this.cc=this.hc=
null;this.Ka=new J.Ia(16);this.X=new J.Ia(573);Zj(this.X);this.wb=this.Na=0;this.depth=new J.Ia(573);Zj(this.depth);this.fa=this.ka=this.sa=this.matches=this.Gb=this.Pa=this.Lb=this.ya=this.Pb=this.Hc=0}
function mk(a,b){if(!a||!a.state||5<b||0>b)return a?Yj(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ja||666===c.status&&4!==b)return Yj(a,0===a.K?-5:-2);c.H=a;var d=c.zb;c.zb=b;if(42===c.status)if(2===c.wrap)a.F=0,K(c,31),K(c,139),K(c,8),c.B?(K(c,(c.B.text?1:0)+(c.B.Ta?2:0)+(c.B.Sa?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),K(c,c.B.time&255),K(c,c.B.time>>8&255),K(c,c.B.time>>16&255),K(c,c.B.time>>24&255),K(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),K(c,c.B.os&255),c.B.Sa&&c.B.Sa.length&&
(K(c,c.B.Sa.length&255),K(c,c.B.Sa.length>>8&255)),c.B.Ta&&(a.F=lj(a.F,c.V,c.pending,0)),c.Ca=0,c.status=69):(K(c,0),K(c,0),K(c,0),K(c,0),K(c,0),K(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),K(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;ck(c,e+(31-e%31));0!==c.o&&(ck(c,a.F>>>16),ck(c,a.F&65535));a.F=1}if(69===c.status)if(c.B.Sa){for(e=c.pending;c.Ca<(c.B.Sa.length&65535)&&(c.pending!==c.za||(c.B.Ta&&
c.pending>e&&(a.F=lj(a.F,c.V,c.pending-e,e)),ak(a),e=c.pending,c.pending!==c.za));)K(c,c.B.Sa[c.Ca]&255),c.Ca++;c.B.Ta&&c.pending>e&&(a.F=lj(a.F,c.V,c.pending-e,e));c.Ca===c.B.Sa.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.za&&(c.B.Ta&&c.pending>e&&(a.F=lj(a.F,c.V,c.pending-e,e)),ak(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ca<c.B.name.length?c.B.name.charCodeAt(c.Ca++)&255:0;K(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.F=lj(a.F,
c.V,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.za&&(c.B.Ta&&c.pending>e&&(a.F=lj(a.F,c.V,c.pending-e,e)),ak(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ca<c.B.comment.length?c.B.comment.charCodeAt(c.Ca++)&255:0;K(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.F=lj(a.F,c.V,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ta?(c.pending+2>c.za&&ak(a),c.pending+2<=c.za&&(K(c,a.F&255),K(c,a.F>>
8&255),a.F=0,c.status=113)):c.status=113);if(0!==c.pending){if(ak(a),0===a.K)return c.zb=-1,0}else if(0===a.ja&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Yj(a,-5);if(666===c.status&&0!==a.ja)return Yj(a,-5);if(0!==a.ja||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?ik(c,b):3===c.strategy?hk(c,b):kk[c.level].ee(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.K&&(c.zb=-1),0;if(2===d&&(1===b?(Ij(c,2,3),Jj(c,256,wj),16===c.fa?(Hj(c,c.ka),c.ka=0,c.fa=0):8<=c.fa&&(c.V[c.pending++]=
c.ka&255,c.ka>>=8,c.fa-=8)):5!==b&&(Ij(c,0,3),Oj(c,0,0),3===b&&(Zj(c.head),0===c.u&&(c.o=0,c.ta=0,c.sa=0))),ak(a),0===a.K))return c.zb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(K(c,a.F&255),K(c,a.F>>8&255),K(c,a.F>>16&255),K(c,a.F>>24&255),K(c,a.lb&255),K(c,a.lb>>8&255),K(c,a.lb>>16&255),K(c,a.lb>>24&255)):(ck(c,a.F>>>16),ck(c,a.F&65535));ak(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var nk={};nk=function(){this.input=null;this.lb=this.ja=this.ib=0;this.output=null;this.Sc=this.K=this.Db=0;this.msg="";this.state=null;this.xc=2;this.F=0};var ok=Object.prototype.toString;
function pk(a){if(!(this instanceof pk))return new pk(a);a=this.options=J.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.H=new nk;this.H.K=0;var b=this.H;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Yj(b,-2);else{8===e&&(e=9);var k=new lk;b.state=k;k.H=b;k.wrap=h;k.B=null;k.Uc=e;k.ia=1<<k.Uc;k.Za=k.ia-1;k.Ec=f+7;k.fc=1<<k.Ec;k.La=k.fc-1;k.Ma=~~((k.Ec+3-1)/3);k.window=new J.mb(2*k.ia);k.head=new J.Ia(k.fc);k.Ha=new J.Ia(k.ia);k.Pb=1<<f+6;k.za=4*k.Pb;k.V=new J.mb(k.za);k.Lb=1*k.Pb;k.Hc=3*k.Pb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.lb=b.Sc=0;b.xc=2;c=b.state;c.pending=0;c.Rb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.F=2===c.wrap?
0:1;c.zb=0;if(!Wj){d=Array(16);for(f=g=0;28>f;f++)for(Aj[f]=g,e=0;e<1<<sj[f];e++)zj[g++]=f;zj[g-1]=f;for(f=g=0;16>f;f++)for(Bj[f]=g,e=0;e<1<<tj[f];e++)yj[g++]=f;for(g>>=7;30>f;f++)for(Bj[f]=g<<7,e=0;e<1<<tj[f]-7;e++)yj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)wj[2*e+1]=8,e++,d[8]++;for(;255>=e;)wj[2*e+1]=9,e++,d[9]++;for(;279>=e;)wj[2*e+1]=7,e++,d[7]++;for(;287>=e;)wj[2*e+1]=8,e++,d[8]++;Lj(wj,287,d);for(e=0;30>e;e++)xj[2*e+1]=5,xj[2*e]=Kj(e,5);Dj=new Cj(wj,sj,257,286,15);Ej=new Cj(xj,
tj,0,30,15);Fj=new Cj([],uj,0,19,7);Wj=!0}c.hc=new Gj(c.ra,Dj);c.cc=new Gj(c.cb,Ej);c.Zc=new Gj(c.ga,Fj);c.ka=0;c.fa=0;Mj(c);c=0}else c=Yj(b,-2);0===c&&(b=b.state,b.Jd=2*b.ia,Zj(b.head),b.Ic=kk[b.level].we,b.ld=kk[b.level].ke,b.qd=kk[b.level].ze,b.pd=kk[b.level].ue,b.o=0,b.ta=0,b.u=0,b.sa=0,b.P=b.xa=2,b.gb=0,b.J=0);b=c}}else b=-2;if(0!==b)throw Error(qj[b]);a.header&&(b=this.H)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=jj(a.dictionary):
"[object ArrayBuffer]"===ok.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.H;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.F=kj(a.F,f,g,0));l.wrap=0;g>=l.ia&&(0===b&&(Zj(l.head),l.o=0,l.ta=0,l.sa=0),c=new J.mb(l.ia),J.pb(c,f,g-l.ia,l.ia,0),f=c,g=l.ia);c=a.ja;d=a.ib;e=a.input;a.ja=g;a.ib=0;a.input=f;for(ek(l);3<=l.u;){f=l.o;g=l.u-2;do l.J=(l.J<<l.Ma^l.window[f+3-1])&l.La,l.Ha[f&l.Za]=l.head[l.J],l.head[l.J]=f,f++;while(--g);
l.o=f;l.u=2;ek(l)}l.o+=l.u;l.ta=l.o;l.sa=l.u;l.u=0;l.P=l.xa=2;l.gb=0;a.ib=d;a.input=e;a.ja=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(qj[b]);this.Lf=!0}}
pk.prototype.push=function(a,b){var c=this.H,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=jj(a):"[object ArrayBuffer]"===ok.call(a)?c.input=new Uint8Array(a):c.input=a;c.ib=0;c.ja=c.input.length;do{0===c.K&&(c.output=new J.mb(d),c.Db=0,c.K=d);a=mk(c,e);if(1!==a&&0!==a)return qk(this,a),this.ended=!0,!1;if(0===c.K||0===c.ja&&(4===e||2===e))if("string"===this.options.to){var f=J.Rc(c.output,c.Db);b=f;f=f.length;if(65537>f&&(b.subarray&&ij||!b.subarray))b=
String.fromCharCode.apply(null,J.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=J.Rc(c.output,c.Db),this.chunks.push(b)}while((0<c.ja||0===c.K)&&1!==a);if(4===e)return(c=this.H)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Yj(c,-2):(c.state=null,a=113===d?Yj(c,-3):0)):a=-2,qk(this,a),this.ended=!0,0===a;2===e&&(qk(this,0),c.K=0);return!0};
function qk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):J.jd(a.chunks));a.chunks=[];a.err=b;a.msg=a.H.msg}
function rk(a,b){b=b||{};b.gzip=!0;b=new pk(b);b.push(a,!0);if(b.err)throw b.msg||qj[b.err];return b.result}
;function sk(a){return Eb(null===a?"null":void 0===a?"undefined":a)}
;function tk(a){this.name=a}
;var uk=new tk("rawColdConfigGroup");var vk=new tk("rawHotConfigGroup");function wk(a){this.A=Df(a)}
w(wk,dg);var xk=new tk("continuationCommand");var yk=new tk("webCommandMetadata");var zk=new tk("signalServiceEndpoint");var Ak={zf:"EMBEDDED_PLAYER_MODE_UNKNOWN",wf:"EMBEDDED_PLAYER_MODE_DEFAULT",yf:"EMBEDDED_PLAYER_MODE_PFP",xf:"EMBEDDED_PLAYER_MODE_PFL"};var Bk=new tk("feedbackEndpoint");function Ck(a){this.A=Df(a)}
w(Ck,dg);var Dk=new tk("webPlayerShareEntityServiceEndpoint");var Ek=new tk("playlistEditEndpoint");var Fk=new tk("modifyChannelNotificationPreferenceEndpoint");var Gk=new tk("unsubscribeEndpoint");var Hk=new tk("subscribeEndpoint");function Ik(){var a=Jk;D("yt.ads.biscotti.getId_")||C("yt.ads.biscotti.getId_",a)}
function Kk(a){C("yt.ads.biscotti.lastId_",a)}
;function Lk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Mk=A.window,Nk,Ok,Pk=(null==Mk?void 0:null==(Nk=Mk.yt)?void 0:Nk.config_)||(null==Mk?void 0:null==(Ok=Mk.ytcfg)?void 0:Ok.data_)||{};C("yt.config_",Pk);function Qk(){Lk(Pk,arguments)}
function M(a,b){return a in Pk?Pk[a]:b}
function Rk(a){var b=Pk.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Sk=[];function Tk(a){Sk.forEach(function(b){return b(a)})}
function Uk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Vk(b)}}:a}
function Vk(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=M("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Qk("ERRORS",b));Tk(a)}
function Wk(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=M("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Qk("ERRORS",f))}
;var Xk=/^[\w.]*$/,Yk={q:!0,search_query:!0};function Zk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=$k(f[0]||""),h=$k(f[1]||"");g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(Zk);k.args=[{key:l,value:f[1],query:a,method:al==n?"unchanged":n}];Yk.hasOwnProperty(l)||Wk(k)}}return c}
var al=String(Zk);function bl(a){var b=[];jb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];cb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function cl(a){"?"==a.charAt(0)&&(a=a.substr(1));return Zk(a,"&")}
function dl(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),cl(1<a.length?a[1]:a[0])):{}}
function el(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=cl(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return kc(a,e)+d}
function fl(a){if(!b)var b=window.location.href;var c=ac(1,a),d=bc(a);c&&d?(a=a.match(Zb),b=b.match(Zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?bc(b)==d&&(Number(ac(4,b))||null)==(Number(ac(4,a))||null):!0;return a}
function $k(a){return a&&a.match(Xk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function gl(a){var b=hl;a=void 0===a?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ji;e.flash="0";a:{try{var f=b.h.top.location.href}catch(W){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Hh:g;try{var h=g.history.length}catch(W){h=0}e.u_his=h;var k;e.u_h=null==(k=Hh.screen)?void 0:k.height;var l;e.u_w=null==(l=Hh.screen)?void 0:l.width;var n;e.u_ah=null==(n=Hh.screen)?void 0:n.availHeight;var p;e.u_aw=null==
(p=Hh.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=Hh.screen)?void 0:t.colorDepth}catch(W){}h=b.h;try{var r=h.screenX;var x=h.screenY}catch(W){}try{var y=h.outerWidth;var B=h.outerHeight}catch(W){}try{var H=h.innerWidth;var N=h.innerHeight}catch(W){}try{var P=h.screenLeft;var da=h.screenTop}catch(W){}try{H=h.innerWidth,N=h.innerHeight}catch(W){}try{var ha=h.screen.availWidth;var L=h.screen.availTop}catch(W){}r=[P,da,r,x,ha,L,y,B,H,N];try{var T=(b.h.top||window).document,U="CSS1Compat"==T.compatMode?
T.documentElement:T.body;var I=(new Ed(U.clientWidth,U.clientHeight)).round()}catch(W){I=new Ed(-12245933,-12245933)}T=I;I={};var Y=void 0===Y?A:Y;U=new ri;"SVGElement"in Y&&"createElementNS"in Y.document&&U.set(0);x=gi();x["allow-top-navigation-by-user-activation"]&&U.set(1);x["allow-popups-to-escape-sandbox"]&&U.set(2);Y.crypto&&Y.crypto.subtle&&U.set(3);"TextDecoder"in Y&&"TextEncoder"in Y&&U.set(4);Y=si(U);I.bc=Y;I.bih=T.height;I.biw=T.width;I.brdim=r.join();b=b.i;b=(I.vis=b.prerendering?3:{visible:1,
hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,I.wgl=!!Hh.WebGLRenderingContext,I);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var hl=new function(){var a=window.document;this.h=window;this.i=a};
C("yt.ads_.signals_.getAdSignalsString",function(a){return bl(gl(a))});Ua();navigator.userAgent.indexOf(" (CrKey ");function O(a){a=il(a);return"string"===typeof a&&"false"===a?!1:!!a}
function jl(a,b){a=il(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function il(a){return M("EXPERIMENT_FLAGS",{})[a]}
function kl(){for(var a=[],b=M("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=M("EXPERIMENT_FLAGS",{});var e=v(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var ll="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function ml(){if(!ll)return null;var a=ll();return"open"in a?a:null}
function nl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function ol(a,b){"function"===typeof a&&(a=Uk(a));return window.setTimeout(a,b)}
;var pl="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ka(pl),["client_dev_set_cookie"]);var ql={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},rl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ka(pl)),sl=!1;
function tl(a,b){b=void 0===b?{}:b;var c=fl(a),d=O("web_ajax_ignore_global_headers_if_set"),e;for(e in ql){var f=M(ql[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=M("VISITOR_DATA"));!f||!c&&bc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===M("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&M("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==M("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");c&&M("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in
b&&delete b["X-Goog-Visitor-Id"];if(c||!bc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!bc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&bc(a)||(b["X-YouTube-Ad-Signals"]=bl(gl()));return b}
function ul(a){var b=window.location.search,c=bc(a);O("debug_handle_relative_url_for_query_forward_killswitch")||!c&&fl(a)&&(c=document.location.hostname);var d=$b(ac(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=cl(b),f={};cb(rl,function(g){e[g]&&(f[g]=e[g])});
return el(a,f||{},!1)}
function vl(a,b){var c=b.format||"JSON";a=wl(a,b);var d=xl(a,b),e=!1,f=yl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=nl(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=zl(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||A;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=ol(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},d)}return f}
function wl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=M("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=el(a,b||{},!0);return a}
function xl(a,b){var c=M("XSRF_FIELD_NAME"),d=M("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=M("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||bc(a)&&!b.withCredentials&&bc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(O("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=cl(e),tb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):ic(e));f=e||f&&!mb(f);!sl&&f&&"POST"!=b.method&&(sl=!0,Vk(Error("AJAX request with postData should use POST")));return e}
function zl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Wk(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Al(a):null)e={},cb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Bl(g)})}d&&Cl(e);
return e}
function Cl(a){if(Ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=vb();d=e?e.createHTML(d):d;a[c]=new Vb(d)}else Cl(a[b])}}
function Al(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Bl(a){var b="";cb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Dl(a,b){b.method="POST";b.postParams||(b.postParams={});return vl(a,b)}
function yl(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Uk(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=ml();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;O("debug_forward_web_query_parameters")&&(a=ul(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=tl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var El=[{Jc:function(a){return"Cannot read property '"+a.key+"'"},
mc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Jc:function(a){return"Cannot call '"+a.key+"'"},
mc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Jc:function(a){return a.key+" is not defined"},
mc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Gl={Va:[],Ra:[{callback:Fl,weight:500}]};function Fl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Hl(){this.Ra=[];this.Va=[]}
var Il;function Jl(){if(!Il){var a=Il=new Hl;a.Va.length=0;a.Ra.length=0;Gl.Va&&a.Va.push.apply(a.Va,Gl.Va);Gl.Ra&&a.Ra.push.apply(a.Ra,Gl.Ra)}return Il}
;var Kl=new Pi;function Ll(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Ml(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Ml(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Ml(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Ml(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Nl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Ol(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Ll(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Ol(f+".ve",g,h,k):0;d+=f;d+=Ol(e,a[e],b,c);if(500<d)break}}else c[b]=Pl(a),d+=c[b].length;else c[b]=Pl(a),d+=c[b].length;return d}
function Ol(a,b,c,d){c+="."+a;a=Pl(b);d[c]=a;return c.length+a.length}
function Pl(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Ql(){this.Ze=!0}
function Rl(){Ql.h||(Ql.h=new Ql);return Ql.h}
function Sl(a,b){a={};var c=yg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(M("SESSION_INDEX",0)),c=isNaN(c)?0:c),O("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Pk||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Pk&&(a["X-Goog-PageId"]=M("DELEGATED_SESSION_ID")));return a}
;var Tl={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Ul(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Vl(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Wl(a,b,c,d,e){ug.set(""+a,b,{ic:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Xl(a){return ug.get(""+a,void 0)}
function Yl(a,b,c){ug.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Zl(){if(!ug.isEnabled())return!1;if(!ug.Ob())return!0;ug.set("TESTCOOKIESENABLED","1",{ic:60});if("1"!==ug.get("TESTCOOKIESENABLED"))return!1;ug.remove("TESTCOOKIESENABLED");return!0}
;var $l=D("ytglobal.prefsUserPrefsPrefs_")||{};C("ytglobal.prefsUserPrefsPrefs_",$l);function am(){this.h=M("ALT_PREF_COOKIE_NAME","PREF");this.i=M("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Xl(this.h);a&&this.parse(a)}
var bm;function cm(){bm||(bm=new am);return bm}
m=am.prototype;m.get=function(a,b){dm(a);em(a);a=void 0!==$l[a]?$l[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){dm(a);em(a);if(null==b)throw Error("ExpectedNotNull");$l[a]=b.toString()};
function fm(a){return!!((gm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){dm(a);em(a);delete $l[a]};
m.clear=function(){for(var a in $l)delete $l[a]};
function em(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function dm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function gm(a){a=void 0!==$l[a]?$l[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&($l[d]=c.toString())}};var hm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},im={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function jm(){var a=A.navigator;return a?a.connection:void 0}
function km(){var a=jm();if(a){var b=hm[a.type||"unknown"]||"CONN_UNKNOWN";a=hm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function lm(){var a=jm();if(null!=a&&a.effectiveType)return im.hasOwnProperty(a.effectiveType)?im[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function mm(a){var b=Ga.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ka(b))}
w(mm,Error);function nm(){try{return om(),!0}catch(a){return!1}}
function om(a){if(void 0!==M("DATASYNC_ID"))return M("DATASYNC_ID");throw new mm("Datasync ID not set",void 0===a?"unknown":a);}
;function pm(){}
function qm(a,b){return qi.bb(a,0,b)}
pm.prototype.oa=function(a,b){return this.bb(a,1,b)};
pm.prototype.Ib=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var rm=jl("web_emulated_idle_callback_delay",300),sm=1E3/60-3,tm=[8,5,4,3,2,1,0];
function um(a){a=void 0===a?{}:a;F.call(this);this.i=[];this.j={};this.Y=this.h=0;this.W=this.m=!1;this.R=[];this.S=this.da=!1;for(var b=v(tm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.wc=a.timeout||1;this.D=sm;this.s=0;this.ma=this.Be.bind(this);this.vc=this.cf.bind(this);this.Ba=this.Pd.bind(this);this.Ja=this.le.bind(this);this.ob=this.Ee.bind(this);this.na=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!O("disable_scheduler_requestIdleCallback");(this.ea=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ma)}
w(um,F);m=um.prototype;m.Ib=function(a){var b=Ua();wm(this,a);a=Ua()-b;this.m||(this.D-=a)};
m.bb=function(a,b,c){++this.Y;if(10===b)return this.Ib(a),this.Y;var d=this.Y;this.j[d]=a;this.m&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.W||this.m||(0!==this.h&&xm(this)!==this.s&&this.stop(),this.start()));return d};
m.qa=function(a){delete this.j[a]};
function ym(a){a.R.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function zm(a){return!a.isHidden()&&a.ea}
function xm(a){if(a.i[8].length){if(a.S)return 4;if(zm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?zm(a)?3:2:1;return 0}
m.Ga=function(a){var b=D("yt.logging.errors.log");b&&b(a)};
function wm(a,b){try{b()}catch(c){a.Ga(c)}}
function Am(a){for(var b=v(tm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.le=function(a){var b=void 0;a&&(b=a.timeRemaining());this.da=!0;Bm(this,b);this.da=!1};
m.cf=function(){Bm(this)};
m.Pd=function(){Cm(this)};
m.Ee=function(a){this.S=!0;var b=xm(this);4===b&&b!==this.s&&(this.stop(),this.start());Bm(this,void 0,a);this.S=!1};
m.Be=function(){this.isHidden()||Cm(this);this.h&&(this.stop(),this.start())};
function Cm(a){a.stop();a.m=!0;for(var b=Ua(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&wm(a,e)}Dm(a);a.m=!1;Am(a)&&a.start();b=Ua()-b;a.D-=b}
function Dm(a){for(var b=0,c=a.R.length;b<c;b++){var d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
function Bm(a,b,c){a.S&&4===a.s&&a.h||a.stop();a.m=!0;b=Ua()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ga(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&wm(a,f);d=a.da?0:1;d=a.l>d?a.l:d;if(!(Ua()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&wm(a,c)}while(c&&Ua()<b)}a.m=!1;Dm(a);a.D=sm;Am(a)&&a.start()}
m.start=function(){this.W=!1;if(0===this.h)switch(this.s=xm(this),this.s){case 1:var a=this.Ja;this.h=this.na?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,rm);break;case 2:this.h=window.setTimeout(this.vc,this.wc);break;case 3:this.h=window.requestAnimationFrame(this.ob);break;case 4:this.h=window.setTimeout(this.Ba,0)}};
m.pause=function(){this.stop();this.W=!0};
m.stop=function(){if(this.h){switch(this.s){case 1:var a=this.h;this.na?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.M=function(){ym(this);this.stop();this.ea&&document.removeEventListener("visibilitychange",this.ma);F.prototype.M.call(this)};var Em=D("yt.scheduler.instance.timerIdMap_")||{},Fm=jl("kevlar_tuner_scheduler_soft_state_timer_ms",800),Gm=0,Hm=0;function Im(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.Z())a=new um(M("scheduler")||{}),C("ytglobal.schedulerInstanceInstance_",a);return a}
function Jm(){Km();var a=D("ytglobal.schedulerInstanceInstance_");a&&(uc(a),C("ytglobal.schedulerInstanceInstance_",null))}
function Km(){ym(Im());for(var a in Em)Em.hasOwnProperty(a)&&delete Em[Number(a)]}
function Lm(a,b,c){if(!c)return c=void 0===c,-Im().bb(a,b,c);var d=window.setTimeout(function(){var e=Im().bb(a,b);Em[d]=e},c);
return d}
function Mm(a){Im().Ib(a)}
function Nm(a){var b=Im();if(0>a)b.qa(-a);else{var c=Em[a];c?(b.qa(c),delete Em[a]):window.clearTimeout(a)}}
function Om(){Pm()}
function Pm(){window.clearTimeout(Gm);Im().start()}
function Qm(){Im().pause();window.clearTimeout(Gm);Gm=window.setTimeout(Om,Fm)}
function Rm(){window.clearTimeout(Hm);Hm=window.setTimeout(function(){Sm(0)},Fm)}
function Sm(a){Rm();var b=Im();b.l=a;b.start()}
function Tm(a){Rm();var b=Im();b.l>a&&(b.l=a,b.start())}
function Um(){window.clearTimeout(Hm);var a=Im();a.l=0;a.start()}
function Vm(){D("yt.scheduler.initialized")||(C("yt.scheduler.instance.dispose",Jm),C("yt.scheduler.instance.addJob",Lm),C("yt.scheduler.instance.addImmediateJob",Mm),C("yt.scheduler.instance.cancelJob",Nm),C("yt.scheduler.instance.cancelAllJobs",Km),C("yt.scheduler.instance.start",Pm),C("yt.scheduler.instance.pause",Qm),C("yt.scheduler.instance.setPriorityThreshold",Sm),C("yt.scheduler.instance.enablePriorityThreshold",Tm),C("yt.scheduler.instance.clearPriorityThreshold",Um),C("yt.scheduler.initialized",
!0))}
;function Xm(){pm.apply(this,arguments)}
w(Xm,pm);function Ym(){Xm.h||(Xm.h=new Xm);return Xm.h}
Xm.prototype.bb=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ol(a,c||0)};
Xm.prototype.qa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Xm.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
Xm.prototype.pause=function(){var a=D("yt.scheduler.instance.pause");a&&a()};
var qi=Ym();O("web_scheduler_auto_init")&&Vm();function Zm(a){var b=new Zi;(b=b.isAvailable()?a?new ej(b,a):b:null)||(a=new $i(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Vi(a):null;this.i=document.domain||window.location.hostname}
Zm.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new dh).serialize(b))}catch(f){return}else e=escape(b);Wl(a,e,c,this.i)};
Zm.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Xl(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Zm.prototype.remove=function(a){this.h&&this.h.remove(a);Yl(a,"/",this.i)};var $m=function(){var a;return function(){a||(a=new Zm("ytidb"));return a}}();
function an(){var a;return null==(a=$m())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var bn=[],cn,dn=!1;function en(){var a={};for(cn=new fn(void 0===a.handleError?gn:a.handleError,void 0===a.logEvent?hn:a.logEvent);0<bn.length;)switch(a=bn.shift(),a.type){case "ERROR":cn.Ga(a.payload);break;case "EVENT":cn.logEvent(a.eventType,a.payload)}}
function jn(a){dn||(cn?cn.Ga(a):(bn.push({type:"ERROR",payload:a}),10<bn.length&&bn.shift()))}
function kn(a,b){dn||(cn?cn.logEvent(a,b):(bn.push({type:"EVENT",eventType:a,payload:b}),10<bn.length&&bn.shift()))}
;function ln(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function mn(a){return a.substr(0,a.indexOf(":"))||a}
;var nn=ze||Ae;function on(a){var b=Mb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var pn={},qn=(pn.AUTH_INVALID="No user identifier specified.",pn.EXPLICIT_ABORT="Transaction was explicitly aborted.",pn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",pn.MISSING_INDEX="Index not created.",pn.MISSING_OBJECT_STORES="Object stores not created.",pn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",pn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",pn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
pn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",pn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",pn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",pn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",pn),rn={},sn=(rn.AUTH_INVALID="ERROR",rn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",rn.EXPLICIT_ABORT="IGNORED",rn.IDB_NOT_SUPPORTED="ERROR",rn.MISSING_INDEX=
"WARNING",rn.MISSING_OBJECT_STORES="ERROR",rn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",rn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",rn.QUOTA_EXCEEDED="WARNING",rn.QUOTA_MAYBE_EXCEEDED="WARNING",rn.UNKNOWN_ABORT="WARNING",rn.INCOMPATIBLE_DB_VERSION="WARNING",rn),tn={},un=(tn.AUTH_INVALID=!1,tn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,tn.EXPLICIT_ABORT=!1,tn.IDB_NOT_SUPPORTED=!1,tn.MISSING_INDEX=!1,tn.MISSING_OBJECT_STORES=!1,tn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,tn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,tn.QUOTA_EXCEEDED=!1,tn.QUOTA_MAYBE_EXCEEDED=!0,tn.UNKNOWN_ABORT=!0,tn.INCOMPATIBLE_DB_VERSION=!1,tn);function vn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?qn[a]:c;d=void 0===d?sn[a]:d;e=void 0===e?un[a]:e;mm.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,vn.prototype)}
w(vn,mm);function wn(a,b){vn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},qn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,wn.prototype)}
w(wn,vn);function xn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,xn.prototype)}
w(xn,Error);var yn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function zn(a,b,c,d){b=mn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof vn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new vn("QUOTA_EXCEEDED",a);if(Be&&"UnknownError"===e.name)return new vn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof xn)return new vn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&yn.some(function(f){return e.message.includes(f)}))return new vn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new vn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",sd:e.name})];e.level="WARNING";return e}
function An(a,b,c){var d=an();return new vn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Bn(a){if(!a)throw Error();throw a;}
function Cn(a){return a}
function Dn(a){this.h=a}
function En(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
En.all=function(a){return new En(new Dn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={xb:0};f.xb<a.length;f={xb:f.xb},++f.xb)En.resolve(a[f.xb]).then(function(g){return function(h){d[g.xb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
En.resolve=function(a){return new En(new Dn(function(b,c){a instanceof En?a.then(b,c):b(a)}))};
En.reject=function(a){return new En(new Dn(function(b,c){c(a)}))};
En.prototype.then=function(a,b){var c=this,d=null!=a?a:Cn,e=null!=b?b:Bn;return new En(new Dn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Fn(c,c,d,f,g)}),c.i.push(function(){Gn(c,c,e,f,g)})):"FULFILLED"===c.state.status?Fn(c,c,d,f,g):"REJECTED"===c.state.status&&Gn(c,c,e,f,g)}))};
En.prototype.catch=function(a){return this.then(void 0,a)};
function Fn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof En?Hn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Gn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof En?Hn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Hn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof En?Hn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function In(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Jn(a){return new Promise(function(b,c){In(a,b,c)})}
function Kn(a){return new En(new Dn(function(b,c){In(a,b,c)}))}
;function Ln(a,b){return new En(new Dn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Mn=window,R=Mn.ytcsi&&Mn.ytcsi.now?Mn.ytcsi.now:Mn.performance&&Mn.performance.timing&&Mn.performance.now&&Mn.performance.timing.navigationStart?function(){return Mn.performance.timing.navigationStart+Mn.performance.now()}:function(){return(new Date).getTime()};function Nn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(R());this.i=!1}
m=Nn.prototype;m.add=function(a,b,c){return On(this,[a],{mode:"readwrite",ha:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return On(this,[a],{mode:"readwrite",ha:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return On(this,[a],{mode:"readonly",ha:!0},function(c){return c.objectStore(a).count(b)})};
function Pn(a,b,c){a=a.h.createObjectStore(b,c);return new Qn(a)}
m.delete=function(a,b){return On(this,[a],{mode:"readwrite",ha:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return On(this,[a],{mode:"readonly",ha:!0},function(c){return c.objectStore(a).get(b)})};
function Rn(a,b,c){return On(a,[b],{mode:"readwrite",ha:!0},function(d){d=d.objectStore(b);return Kn(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function On(a,b,c,d){var e,f,g,h,k,l,n,p,t,r,x,y;return z(function(B){switch(B.h){case 1:var H={mode:"readonly",ha:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ha?3:1;g=0;case 2:if(h){B.v(4);break}g++;k=Math.round(R());xa(B,5);l=a.h.transaction(b,e.mode);H=B.yield;var N=new Sn(l);N=Tn(N,d);return H.call(B,N,7);case 7:return n=B.i,p=Math.round(R()),Un(a,k,p,g,void 0,b.join(),e),B.return(n);case 5:t=ya(B);r=Math.round(R());x=zn(t,
a.h.name,b.join(),a.h.version);if((y=x instanceof vn&&!x.h)||g>=f)Un(a,k,r,g,x,b.join(),e),h=x;B.v(2);break;case 4:return B.return(Promise.reject(h))}})}
function Un(a,b,c,d,e,f,g){b=c-b;e?(e instanceof vn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&kn("QUOTA_EXCEEDED",{dbName:mn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof vn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),kn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Vn(a,!1,d,f,b,g.tag),jn(e)):Vn(a,!0,d,f,b,g.tag)}
function Vn(a,b,c,d,e,f){kn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Qn(a){this.h=a}
m=Qn.prototype;m.add=function(a,b){return Kn(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Kn(this.h.clear()).then(function(){})};
function Wn(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Kn(this.h.count(a))};
function Xn(a,b){return Yn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Xn(this,a):Kn(this.h.delete(a))};
m.get=function(a){return Kn(this.h.get(a))};
m.index=function(a){try{return new Zn(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new xn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function Yn(a,b,c){a=a.h.openCursor(b.query,b.direction);return $n(a).then(function(d){return Ln(d,c)})}
function Sn(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=vn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Tn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
Sn.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new vn("EXPLICIT_ABORT");};
Sn.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Qn(a),this.i.set(a,b));return b};
function Zn(a){this.h=a}
m=Zn.prototype;m.count=function(a){return Kn(this.h.count(a))};
m.delete=function(a){return ao(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Kn(this.h.get(a))};
m.getKey=function(a){return Kn(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function ao(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return $n(a).then(function(d){return Ln(d,c)})}
function bo(a,b){this.request=a;this.cursor=b}
function $n(a){return Kn(a).then(function(b){return b?new bo(a,b):null})}
m=bo.prototype;m.advance=function(a){this.cursor.advance(a);return $n(this.request)};
m.continue=function(a){this.cursor.continue(a);return $n(this.request)};
m.delete=function(){return Kn(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Kn(this.cursor.update(a))};function co(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Nn(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Rd,k=c.blocking,l=c.af,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&kn("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:mn(a)});var x=f(),y=new Sn(g.transaction);
n&&n(x,function(B){return r.oldVersion<B&&r.newVersion>=B},y);
y.done.catch(function(B){e(B)})}catch(B){e(B)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){kn("IDB_UNEXPECTEDLY_CLOSED",{dbName:mn(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function eo(a,b,c){c=void 0===c?{}:c;return co(a,b,c)}
function fo(a,b){b=void 0===b?{}:b;var c,d,e,f;return z(function(g){if(1==g.h)return xa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Rd)&&c.addEventListener("blocked",function(){e()}),g.yield(Jn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=ya(g),zn(f,a,"",-1);})}
;function go(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
go.prototype.i=function(a,b,c){c=void 0===c?{}:c;return eo(a,b,c)};
go.prototype.delete=function(a){a=void 0===a?{}:a;return fo(this.name,a)};
function ho(a,b){return new vn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function io(a,b){if(!b)throw An("openWithToken",mn(a.name));return a.open()}
go.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,r,x;return z(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",xa(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:h=y.i;for(var B=c.options,H=[],N=v(Object.keys(B.Eb)),P=N.next();!P.done;P=N.next()){P=P.value;var da=B.Eb[P],ha=void 0===da.He?Number.MAX_VALUE:da.He;!(h.h.version>=da.Jb)||h.h.version>=ha||h.h.objectStoreNames.contains(P)||H.push(P)}k=H;if(0===k.length){y.v(5);break}l=Object.keys(c.options.Eb);n=
h.objectStoreNames();if(c.m<jl("ytidb_reopen_db_retries",0))return c.m++,h.close(),jn(new vn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<jl("ytidb_remake_db_retries",1))){y.v(6);break}c.l++;return y.yield(c.delete(),7);case 7:return jn(new vn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new wn(n,l);case 5:return y.return(h);case 2:p=ya(y);
if(p instanceof DOMException?"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){y.v(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;r=t.h.version;if(void 0!==c.options.version&&r>c.options.version+1)throw t.close(),c.j=!1,ho(c,r);return y.return(t);case 8:throw b(),p instanceof
Error&&!O("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),zn(p,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw ho(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,af:b,upgrade:this.options.upgrade};return this.h=d=a()};var jo=new go("YtIdbMeta",{Eb:{databases:{Jb:1}},upgrade:function(a,b){b(1)&&Pn(a,"databases",{keyPath:"actualName"})}});
function ko(a,b){var c;return z(function(d){if(1==d.h)return d.yield(io(jo,b),2);c=d.i;return d.return(On(c,["databases"],{ha:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Kn(f.h.put(a,void 0)).then(function(){})})}))})}
function lo(a,b){var c;return z(function(d){if(1==d.h)return a?d.yield(io(jo,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function mo(a,b){var c,d;return z(function(e){return 1==e.h?(c=[],e.yield(io(jo,b),2)):3!=e.h?(d=e.i,e.yield(On(d,["databases"],{ha:!0,mode:"readonly"},function(f){c.length=0;return Yn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function no(a){return mo(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function oo(a,b,c){return mo(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function po(a){var b,c;return z(function(d){if(1==d.h)return b=om("YtIdbMeta hasAnyMeta other"),d.yield(mo(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var qo,ro=new function(){}(new function(){});
function so(){var a,b,c,d;return z(function(e){switch(e.h){case 1:a=an();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=nn)f=/WebKit\/([0-9]+)/.exec(Mb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Mb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Nc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
xa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(ko(d,ro),4);case 4:return e.yield(lo("yt-idb-test-do-not-use",ro),5);case 5:return e.return(!0);case 2:return ya(e),e.return(!1)}})}
function to(){if(void 0!==qo)return qo;dn=!0;return qo=so().then(function(a){dn=!1;var b;if(null!=(b=$m())&&b.h){var c;b={hasSucceededOnce:(null==(c=an())?void 0:c.hasSucceededOnce)||a};var d;null==(d=$m())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function uo(){return D("ytglobal.idbToken_")||void 0}
function vo(){var a=uo();return a?Promise.resolve(a):to().then(function(b){(b=b?ro:void 0)&&C("ytglobal.idbToken_",b);return b})}
;var wo=0;function xo(a,b){wo||(wo=qi.oa(function(){var c,d,e,f,g;return z(function(h){switch(h.h){case 1:return h.yield(vo(),2);case 2:c=h.i;if(!c)return h.return();d=!0;xa(h,3);return h.yield(oo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.v(6);break}f=e[0];return h.yield(fo(f.actualName),7);case 7:return h.yield(lo(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=ya(h),jn(g),d=!1;case 4:qi.qa(wo),wo=0,d&&xo(a,b),h.h=0}})}))}
function yo(){var a;return z(function(b){return 1==b.h?b.yield(vo(),2):(a=b.i)?b.return(po(a)):b.return(!1)})}
new Fh;function zo(a){if(!nm())throw a=new vn("AUTH_INVALID",{dbName:a}),jn(a),a;var b=om();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Ao(a,b,c,d){var e,f,g,h,k,l;return z(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(vo(),2);case 2:g=n.i;if(!g)throw h=An("openDbImpl",a,b),O("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),jn(h),h;ln(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:zo(a);xa(n,3);return n.yield(ko(k,g),5);case 5:return n.yield(eo(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=ya(n),xa(n,7),n.yield(lo(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:ya(n);case 8:throw l;}})}
function Bo(a,b,c){c=void 0===c?{}:c;return Ao(a,b,!1,c)}
function Co(a,b,c){c=void 0===c?{}:c;return Ao(a,b,!0,c)}
function Do(a,b){b=void 0===b?{}:b;var c,d;return z(function(e){if(1==e.h)return e.yield(vo(),2);if(3!=e.h){c=e.i;if(!c)return e.return();ln(a);d=zo(a);return e.yield(fo(d.actualName,b),3)}return e.yield(lo(d.actualName,c),0)})}
function Eo(a,b,c){a=a.map(function(d){return z(function(e){return 1==e.h?e.yield(fo(d.actualName,b),2):e.yield(lo(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Fo(){var a=void 0===a?{}:a;var b,c;return z(function(d){if(1==d.h)return d.yield(vo(),2);if(3!=d.h){b=d.i;if(!b)return d.return();ln("LogsDatabaseV2");return d.yield(no(b),3)}c=d.i;return d.yield(Eo(c,a,b),0)})}
function Go(a,b){b=void 0===b?{}:b;var c;return z(function(d){if(1==d.h)return d.yield(vo(),2);if(3!=d.h){c=d.i;if(!c)return d.return();ln(a);return d.yield(fo(a,b),3)}return d.yield(lo(a,c),0)})}
;function Ho(a,b){go.call(this,a,b);this.options=b;ln(a)}
w(Ho,go);function Io(a,b){var c;return function(){c||(c=new Ho(a,b));return c}}
Ho.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.qc?Co:Bo)(a,b,Object.assign({},c))};
Ho.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.qc?Go:Do)(this.name,a)};
function Jo(a,b){return Io(a,b)}
;var Ko={},Lo=Jo("ytGcfConfig",{Eb:(Ko.coldConfigStore={Jb:1},Ko.hotConfigStore={Jb:1},Ko),qc:!1,upgrade:function(a,b){b(1)&&(Wn(Pn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Wn(Pn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Mo(a){return io(Lo(),a)}
function No(a,b,c){var d,e,f;return z(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:R()},g.yield(Mo(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Rn(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Oo(a,b,c,d){var e,f,g;return z(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:R()},h.yield(Mo(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Rn(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Po(a){var b,c;return z(function(d){return 1==d.h?d.yield(Mo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(On(b,["coldConfigStore"],{mode:"readwrite",ha:!0},function(e){return ao(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Qo(a){var b,c;return z(function(d){return 1==d.h?d.yield(Mo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(On(b,["hotConfigStore"],{mode:"readwrite",ha:!0},function(e){return ao(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Ro(){F.call(this);this.i=[];this.h=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ka(a)),this.h=a):(this.h=[],C("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(Ro,F);Ro.prototype.M=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;F.prototype.M.call(this)};function So(){this.h=0;this.i=new Ro}
function To(){var a;return null!=(a=D("yt.gcf.config.hotConfigGroup"))?a:null}
function Uo(a,b,c){var d,e,f;return z(function(g){switch(g.h){case 1:if(!O("start_client_gcf")){g.v(0);break}c&&(a.j=c,C("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=uo();if(!d){g.v(3);break}if(c){g.v(4);break}return g.yield(Qo(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(No(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function Vo(a,b,c){var d,e,f,g;return z(function(h){if(1==h.h){if(!O("start_client_gcf"))return h.v(0);a.coldHashData=b;C("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=uo())?c?h.v(4):h.yield(Po(d),5):h.v(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.v(0);g=c.configData;return h.yield(Oo(c,b,g,d),0)})}
function Wo(){if(!So.h){var a=new So;So.h=a}a=So.h;var b=R()-a.h;if(!(0!==a.h&&b<jl("send_config_hash_timer"))){b=D("yt.gcf.config.coldConfigData");var c=D("yt.gcf.config.hotHashData"),d=D("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=R());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
So.prototype.l=function(a){this.hotHashData=a;C("yt.gcf.config.hotHashData",this.hotHashData||null)};function Xo(){return"INNERTUBE_API_KEY"in Pk&&"INNERTUBE_API_VERSION"in Pk}
function Yo(){return{innertubeApiKey:M("INNERTUBE_API_KEY"),innertubeApiVersion:M("INNERTUBE_API_VERSION"),me:M("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),nd:M("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Sf:M("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:M("INNERTUBE_CONTEXT_CLIENT_VERSION"),oe:M("INNERTUBE_CONTEXT_HL"),ne:M("INNERTUBE_CONTEXT_GL"),pe:M("INNERTUBE_HOST_OVERRIDE")||"",re:!!M("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),qe:!!M("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:M("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Zo(a){var b={client:{hl:a.oe,gl:a.ne,clientName:a.nd,clientVersion:a.innertubeContextClientVersion,configInfo:a.me}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=M("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=kl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.nd;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=Vl()}(d=D("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(O("web_log_memory_total_kbytes")&&(null==(e=A.navigator)?0:e.deviceMemory)){var f;e=null==(f=A.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=km())&&b&&(b.client.connectionType=a);O("web_log_effective_connection_type")&&(a=lm())&&
b&&(b.client.effectiveConnectionType=a);O("start_client_gcf")&&(e=Wo())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));M("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(b.user={onBehalfOfUser:M("DELEGATED_SESSION_ID")});!O("fill_delegate_context_in_gel_killswitch")&&(a=M("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(cl(M("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function $o(a,b,c){c=void 0===c?{}:c;var d={};M("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":M("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||M("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||M("AUTHORIZATION");b||(a?b="Bearer "+D("gapi.auth.getToken")().Mf:(a=Sl(Rl()),O("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;function ap(a,b){this.version=a;this.args=b}
ap.prototype.serialize=function(){return{version:this.version,args:this.args}};function bp(a,b){this.topic=a;this.h=b}
bp.prototype.toString=function(){return this.topic};var cp=D("ytPubsub2Pubsub2Instance")||new Pi;Pi.prototype.subscribe=Pi.prototype.subscribe;Pi.prototype.unsubscribeByKey=Pi.prototype.Hb;Pi.prototype.publish=Pi.prototype.ab;Pi.prototype.clear=Pi.prototype.clear;C("ytPubsub2Pubsub2Instance",cp);var dp=D("ytPubsub2Pubsub2SubscribedKeys")||{};C("ytPubsub2Pubsub2SubscribedKeys",dp);var ep=D("ytPubsub2Pubsub2TopicToKeys")||{};C("ytPubsub2Pubsub2TopicToKeys",ep);var fp=D("ytPubsub2Pubsub2IsAsync")||{};C("ytPubsub2Pubsub2IsAsync",fp);
C("ytPubsub2Pubsub2SkipSubKey",null);function gp(a,b){var c=hp();c&&c.publish.call(c,a.toString(),a,b)}
function ip(a){var b=jp,c=hp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=D("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(dp[d])try{if(f&&b instanceof bp&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Ya){var l=new h;h.Ya=l.version}var n=h.Ya}catch(B){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var t=k.args,r=t.length;if(0<r){var x=Array(r);for(k=0;k<r;k++)x[k]=t[k];var y=x}else y=[];f=p.call(n,h,y)}catch(B){throw B.message="yt.pubsub2.Data.deserialize(): "+B.message,B;}}catch(B){throw B.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+B.message,B;}a.call(window,f)}catch(B){Vk(B)}},fp[b.toString()]?D("yt.scheduler.instance")?qi.oa(g):ol(g,0):g())});
dp[d]=!0;ep[b.toString()]||(ep[b.toString()]=[]);ep[b.toString()].push(d);return d}
function kp(){var a=lp,b=ip(function(c){a.apply(void 0,arguments);mp(b)});
return b}
function mp(a){var b=hp();b&&("number"===typeof a&&(a=[a]),cb(a,function(c){b.unsubscribeByKey(c);delete dp[c]}))}
function hp(){return D("ytPubsub2Pubsub2Instance")}
;function np(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&gp("meta_logging_csi_event",{timerName:a,ig:b})}
;var op=void 0,pp=void 0;function qp(){if(!pp){var a=M("WORKER_SERIALIZATION_URL");pp=a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?Eb(a):null:null}return pp||void 0}
function rp(){var a=qp();op||void 0===a||(op=new Worker(Cb(a),void 0));return op}
;var sp=jl("max_body_size_to_compress",5E5),tp=jl("min_body_size_to_compress",500),up=!0,vp=0,wp=0,xp=jl("compression_performance_threshold_lr",250),yp=jl("slow_compressions_before_abandon_count",4),zp=!1,Ap=new Map,Bp=1;function Cp(){if("function"===typeof Worker&&qp()){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Ap.get(c.key);d&&(Dp(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Ap.delete(c.key))}},b=rp();
b&&(b.addEventListener("message",a),b.onerror=function(){Ap.clear()},zp=!0)}}
function Ep(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:R(),ticks:{},infos:{}};if(up)try{var g=Fp(b);if(null!=g&&(g>sp||g<tp))d(a,c);else{if(O("gzip_gel_with_worker")){zp||Cp();var h=rp();if(h&&!e){Ap.set(Bp,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Bp});Bp++;return}}var k=rk(li(b));Dp(k,f,a,c,d)}}catch(l){Wk(l),d(a,c)}else d(a,c)}
function Dp(a,b,c,d,e){var f=R();b.ticks.gelc=f;wp++;O("disable_compression_due_to_performance_degredation")&&f-b.startTime>=xp&&(vp++,O("abandon_compression_after_N_slow_zips")?wp===jl("compression_disable_point")&&vp>yp&&(up=!1):up=!1);Gp(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Hp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=R(),e={startTime:d,ticks:{},infos:{}},f=b?D("yt.logging.gzipForFetch",!1):!0;if(up&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Fp(g);if(null!=h&&(h>sp||h<tp))return a;f=rk(li(g),b?{level:1}:void 0);var k=R();e.ticks.gelc=k;if(b){wp++;if((O("disable_compression_due_to_performance_degredation")||O("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=xp)if(vp++,O("abandon_compression_after_N_slow_zips")||O("abandon_compression_after_N_slow_zips_lr")){b=vp/wp;var l=yp/jl("compression_disable_point");0<wp&&0===wp%jl("compression_disable_point")&&b>=l&&(up=!1)}else up=!1;Gp(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return Wk(n),a}}else return a}
function Fp(a){try{return(new Blob(a.split(""))).size}catch(b){return Wk(b),null}}
function Gp(a){O("gel_compression_csi_killswitch")||!O("log_gel_compression_latency")&&!O("log_gel_compression_latency_lr")||np("gel_compression",a,{sampleRate:.1})}
;function Ip(a){a=Object.assign({},a);delete a.Authorization;var b=yg();if(b){var c=new wi;c.update(M("INNERTUBE_API_KEY"));c.update(b);a.hash=Ee(c.digest(),3)}return a}
;var Jp;function Kp(){Jp||(Jp=new Zm("yt.innertube"));return Jp}
function Lp(a,b,c,d){if(d)return null;d=Kp().get("nextId",!0)||1;var e=Kp().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ip(c),requestTime:Math.round(R())};Kp().set("nextId",d+1,86400,!0);Kp().set("requests",e,86400,!0);return d}
function Mp(a){var b=Kp().get("requests",!0)||{};delete b[a];Kp().set("requests",b,86400,!0)}
function Np(a){var b=Kp().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(R())-d.requestTime)){var e=d.authState,f=Ip($o(!1));pb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(R())),Op(a,d.method,e,{}));delete b[c]}}Kp().set("requests",b,86400,!0)}}
;function Pp(a){this.Xb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.vb=function(){};
this.now=Date.now;this.Nb=!1;var b;this.Ed=null!=(b=a.Ed)?b:100;var c;this.yd=null!=(c=a.yd)?c:1;var d;this.wd=null!=(d=a.wd)?d:2592E6;var e;this.ud=null!=(e=a.ud)?e:12E4;var f;this.xd=null!=(f=a.xd)?f:5E3;var g;this.T=null!=(g=a.T)?g:void 0;this.dc=!!a.dc;var h;this.ac=null!=(h=a.ac)?h:.1;var k;this.nc=null!=(k=a.nc)?k:10;a.handleError&&(this.handleError=a.handleError);a.vb&&(this.vb=a.vb);a.Nb&&(this.Nb=a.Nb);a.Xb&&(this.Xb=a.Xb);this.U=a.U;this.Da=a.Da;this.ba=a.ba;this.aa=a.aa;this.sendFn=a.sendFn;
this.Mc=a.Mc;this.Lc=a.Lc;Qp(this)&&(!this.U||this.U("networkless_logging"))&&Rp(this)}
function Rp(a){Qp(a)&&!a.Nb&&(a.h=!0,a.dc&&Math.random()<=a.ac&&a.ba.Td(a.T),Sp(a),a.aa.wa()&&a.Vb(),a.aa.listen(a.Mc,a.Vb.bind(a)),a.aa.listen(a.Lc,a.bd.bind(a)))}
m=Pp.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Qp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ba.set(d,this.T).then(function(e){d.id=e;c.aa.wa()&&Tp(c,d)}).catch(function(e){Tp(c,d);
Up(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Qp(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.U&&this.U("nwl_skip_retry")&&(e.skipRetry=c);if(this.aa.wa()||this.U&&this.U("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return z(function(k){if(1==k.h)return k.yield(d.ba.set(e,d.T).catch(function(l){Up(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ba.set(e,this.T).catch(function(g){d.sendFn(a,b,e.skipRetry);
Up(d,g)})}else this.sendFn(a,b,this.U&&this.U("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Qp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.ba.rb(d.id,c.T):e=!0;c.aa.hb&&c.U&&c.U("vss_network_hint")&&c.aa.hb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ba.set(d,this.T).then(function(g){d.id=g;e&&c.ba.rb(d.id,c.T)}).catch(function(g){Up(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Vb=function(){var a=this;if(!Qp(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.oa(function(){var b;return z(function(c){if(1==c.h)return c.yield(a.ba.kd("NEW",a.T),2);if(3!=c.h)return b=c.i,b?c.yield(Tp(a,b),3):(a.bd(),c.return());a.i&&(a.i=0,a.Vb());c.h=0})},this.Ed))};
m.bd=function(){this.Da.qa(this.i);this.i=0};
function Tp(a,b){var c;return z(function(d){switch(d.h){case 1:if(!Qp(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.v(2);break}return d.yield(a.ba.te(b.id,a.T),3);case 3:(c=d.i)||a.vb(Error("The request cannot be found in the database."));case 2:if(Vp(a,b,a.wd)){d.v(4);break}a.vb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.v(5);break}return d.yield(a.ba.rb(b.id,a.T),5);case 5:return d.return();case 4:b.skipRetry||(b=Wp(a,
b));if(!b){d.v(0);break}if(!b.skipRetry||void 0===b.id){d.v(8);break}return d.yield(a.ba.rb(b.id,a.T),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function Wp(a,b){if(!Qp(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return z(function(n){switch(n.h){case 1:g=Xp(f);(h=Yp(f))&&a.U&&a.U("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.U&&a.U("nwl_consider_error_code")&&g||a.U&&!a.U("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.nc)){n.v(2);break}if(!a.aa.pc){n.v(3);break}return n.yield(a.aa.pc(),3);case 3:if(a.aa.wa()){n.v(2);break}c(e,f);if(!a.U||!a.U("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.v(6);
break}return n.yield(a.ba.Pc(b.id,a.T,!1),6);case 6:return n.return();case 2:if(a.U&&a.U("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.nc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.v(8);break}return b.sendCount<a.yd?n.yield(a.ba.Pc(b.id,a.T,!0,h?!1:void 0),12):n.yield(a.ba.rb(b.id,a.T),8);case 12:a.Da.oa(function(){a.aa.wa()&&a.Vb()},a.xd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return z(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):h.yield(a.ba.rb(b.id,a.T),2);a.aa.hb&&a.U&&a.U("vss_network_hint")&&a.aa.hb(!0);d(e,f);h.h=0})};
return b}
function Vp(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Sp(a){if(!Qp(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ba.kd("QUEUED",a.T).then(function(b){b&&!Vp(a,b,a.ud)?a.Da.oa(function(){return z(function(c){if(1==c.h)return void 0===b.id?c.v(2):c.yield(a.ba.Pc(b.id,a.T),2);Sp(a);c.h=0})}):a.aa.wa()&&a.Vb()})}
function Up(a,b){a.Kd&&!a.aa.wa()?a.Kd(b):a.handleError(b)}
function Qp(a){return!!a.T||a.Xb}
function Xp(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Yp(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Zp;
function $p(){if(Zp)return Zp();var a={};Zp=Jo("LogsDatabaseV2",{Eb:(a.LogsRequestsStore={Jb:2},a),qc:!1,upgrade:function(b,c,d){c(2)&&Pn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Wn(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Zp()}
;function aq(a){return io($p(),a)}
function bq(a,b){var c,d,e,f;return z(function(g){if(1==g.h)return c={startTime:R(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(aq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:M("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Rn(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=R();cq(c);return g.return(f)})}
function dq(a,b){var c,d,e,f,g,h,k;return z(function(l){if(1==l.h)return c={startTime:R(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(aq(b),2);if(3!=l.h)return d=l.i,e=M("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,R()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(On(d,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(n){return ao(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===
a&&(k.status="QUEUED",p.update(k)))})}),3);
c.ticks.tc=R();cq(c);return l.return(k)})}
function eq(a,b){var c;return z(function(d){if(1==d.h)return d.yield(aq(b),2);c=d.i;return d.return(On(c,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Kn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function fq(a,b,c,d){c=void 0===c?!0:c;var e;return z(function(f){if(1==f.h)return f.yield(aq(b),2);e=f.i;return f.return(On(e,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Kn(h.h.put(k,void 0)).then(function(){return k})):En.resolve(void 0)})}))})}
function gq(a,b){var c;return z(function(d){if(1==d.h)return d.yield(aq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function hq(a){var b,c;return z(function(d){if(1==d.h)return d.yield(aq(a),2);b=d.i;c=R()-2592E6;return d.yield(On(b,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(e){return Yn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function iq(){z(function(a){return a.yield(Fo(),0)})}
function cq(a){O("nwl_csi_killswitch")||np("networkless_performance",a,{sampleRate:1})}
;var jq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,
cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487};var kq={},lq=Jo("ServiceWorkerLogsDatabase",{Eb:(kq.SWHealthLog={Jb:1},kq),qc:!0,upgrade:function(a,b){b(1)&&Wn(Pn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function mq(a){return io(lq(),a)}
function nq(a){var b,c;z(function(d){if(1==d.h)return d.yield(mq(a),2);b=d.i;c=R()-2592E6;return d.yield(On(b,["SWHealthLog"],{mode:"readwrite",ha:!0},function(e){return Yn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function oq(a){var b;return z(function(c){if(1==c.h)return c.yield(mq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var pq={},qq=0;function rq(a){var b=new Image,c=""+qq++;pq[c]=b;b.onload=b.onerror=function(){delete pq[c]};
b.src=a}
;function sq(){this.h=new Map;this.i=!1}
function tq(){if(!sq.h){var a=D("yt.networkRequestMonitor.instance")||new sq;C("yt.networkRequestMonitor.instance",a);sq.h=a}return sq.h}
sq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
sq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
sq.prototype.removeParams=function(a){return a.split("?")[0]};
sq.prototype.removeParams=sq.prototype.removeParams;sq.prototype.isEndpointCFR=sq.prototype.isEndpointCFR;sq.prototype.requestComplete=sq.prototype.requestComplete;sq.getInstance=tq;var uq;function vq(){uq||(uq=new Zm("yt.offline"));return uq}
function wq(a){if(O("offline_error_handling")){var b=vq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);vq().set("errors",b,2592E3,!0)}}
;function xq(){xd.call(this);var a=this;this.j=!1;this.i=pi();this.i.listen("networkstatus-online",function(){if(a.j&&O("offline_error_handling")){var b=vq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new mm(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Vk(d)}vq().set("errors",{},2592E3,!0)}}})}
w(xq,xd);function yq(){if(!xq.h){var a=D("yt.networkStatusManager.instance")||new xq;C("yt.networkStatusManager.instance",a);xq.h=a}return xq.h}
m=xq.prototype;m.wa=function(){return this.i.wa()};
m.hb=function(a){this.i.i=a};
m.he=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Yd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.pc=function(a){a=ni(this.i,a);a.then(function(b){O("use_cfr_monitor")&&tq().requestComplete("generate_204",b)});
return a};
xq.prototype.sendNetworkCheckRequest=xq.prototype.pc;xq.prototype.listen=xq.prototype.listen;xq.prototype.enableErrorFlushing=xq.prototype.Yd;xq.prototype.getWindowStatus=xq.prototype.he;xq.prototype.networkStatusHint=xq.prototype.hb;xq.prototype.isNetworkAvailable=xq.prototype.wa;xq.getInstance=yq;function zq(a){a=void 0===a?{}:a;xd.call(this);var b=this;this.i=this.m=0;this.j=yq();var c=D("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Aq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Aq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){yd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){yd(b,"publicytnetworkstatus-offline")})))}
w(zq,xd);zq.prototype.wa=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
zq.prototype.hb=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
zq.prototype.pc=function(a){var b=this,c;return z(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return O("skip_network_check_if_cfr")&&tq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.hb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function Aq(a,b){a.rateLimit?a.i?(qi.qa(a.m),a.m=qi.oa(function(){a.l!==b&&(yd(a,b),a.l=b,a.i=R())},a.rateLimit-(R()-a.i))):(yd(a,b),a.l=b,a.i=R()):yd(a,b)}
;var Bq;function Cq(){var a=Pp.call;Bq||(Bq=new zq({Xf:!0,Qf:!0}));a.call(Pp,this,{ba:{Td:hq,rb:gq,kd:dq,te:eq,Pc:fq,set:bq},aa:Bq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Wk(new mm(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Vk(b)},
vb:Wk,sendFn:Dq,now:R,Kd:wq,Da:Ym(),Mc:"publicytnetworkstatus-online",Lc:"publicytnetworkstatus-offline",dc:!0,ac:.1,nc:jl("potential_esf_error_limit",10),U:O,Nb:!(nm()&&Eq())});this.j=new Fh;O("networkless_immediately_drop_all_requests")&&iq();Go("LogsDatabaseV2")}
w(Cq,Pp);function Fq(){var a=D("yt.networklessRequestController.instance");a||(a=new Cq,C("yt.networklessRequestController.instance",a),O("networkless_logging")&&vo().then(function(b){a.T=b;Rp(a);a.j.resolve();a.dc&&Math.random()<=a.ac&&a.T&&nq(a.T);O("networkless_immediately_drop_sw_health_store")&&Gq(a)}));
return a}
Cq.prototype.writeThenSend=function(a,b){b||(b={});nm()||(this.h=!1);Pp.prototype.writeThenSend.call(this,a,b)};
Cq.prototype.sendThenWrite=function(a,b,c){b||(b={});nm()||(this.h=!1);Pp.prototype.sendThenWrite.call(this,a,b,c)};
Cq.prototype.sendAndWrite=function(a,b){b||(b={});nm()||(this.h=!1);Pp.prototype.sendAndWrite.call(this,a,b)};
Cq.prototype.awaitInitialization=function(){return this.j.promise};
function Gq(a){var b;z(function(c){if(!a.T)throw b=An("clearSWHealthLogsDb"),b;return c.return(oq(a.T).catch(function(d){a.handleError(d)}))})}
function Dq(a,b,c,d){d=void 0===d?!1:d;b=O("web_fp_via_jspb")?Object.assign({},b):b;O("use_cfr_monitor")&&Hq(a,b);if(O("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(R())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(R())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)yl(a,void 0,"POST",f);else if(M("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))yl(a,
void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new Ya({url:a});if(k.j&&k.i||k.l){var l=$b(ac(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(nc),t=mc(a,0,"ri",p);if(0>t)var r=null;else{var x=a.indexOf("&",t);if(0>x||x>p)x=p;r=decodeURIComponent(a.slice(t+3,-1!==x?x:0).replace(/\+/g," "))}n="1"!==r}var y=!n;break b}}catch(H){}y=!1}if(y){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var B=!0;break b}}catch(H){}B=!1}c=B?!0:!1}else c=!1;c||
rq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Ep(a,b.postBody,b,vl,d)):Ep(a,JSON.stringify(b.postParams),b,Dl,d):vl(a,b)}
function Hq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){tq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){tq().requestComplete(a,!0);d(e,f)}}
function Eq(){return"www.youtube-nocookie.com"!==bc(document.location.toString())}
;var Iq=!1,Jq=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Iq};C("ytNetworklessLoggingInitializationOptions",Jq);function Kq(){var a;z(function(b){if(1==b.h)return b.yield(vo(),2);a=b.i;if(!a||!nm()&&!O("nwl_init_require_datasync_id_killswitch")||!Eq())return b.v(0);Iq=!0;Jq.isNwlInitialized=Iq;return b.yield(Fq().awaitInitialization(),0)})}
;function Lq(a){var b=this;this.config_=null;a?this.config_=a:Xo()&&(this.config_=Yo());qm(function(){Np(b)},5E3)}
Lq.prototype.isReady=function(){!this.config_&&Xo()&&(this.config_=Yo());return!!this.config_};
function Op(a,b,c,d){function e(x){x=void 0===x?!1:x;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||O("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=Lp(b,c,l,k)),y)){var B=g.onSuccess,H=g.onFetchSuccess;g.onSuccess=function(da,ha){Mp(y);B(da,ha)};
c.onFetchSuccess=function(da,ha){Mp(y);H(da,ha)}}try{if(x&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Fq().writeThenSend(r,g):Fq().sendAndWrite(r,g);
else if(d.compress){var N=!d.networklessOptions.writeThenSend;if(g.postBody){var P=g.postBody;"string"!==typeof P&&(P=JSON.stringify(g.postBody));Ep(r,P,g,vl,N)}else Ep(r,JSON.stringify(g.postParams),g,Dl,N)}else O("web_all_payloads_via_jspb")?vl(r,g):Dl(r,g)}catch(da){if("InvalidAccessError"==da.name)y&&(Mp(y),y=0),Wk(Error("An extension is blocking network request."));else throw da;}y&&qm(function(){Np(a)},5E3)}
!M("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Wk(new mm("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new mm("innertube xhrclient not ready",b,c,d);Vk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,y){if(d.onError)d.onError(y)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.pe)&&(h=f);var k=a.config_.re||!1,l=$o(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.qe&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.innertubeApiKey);var r=el(""+h+n,p||{},!0);(D("ytNetworklessLoggingInitializationOptions")?
Jq.isNwlInitialized:Iq)?to().then(function(x){e(x)}):e(!1)}
;var Mq=0,Nq=Pc?"webkit":Oc?"moz":Mc?"ms":Ic?"o":"";C("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++Mq});var Oq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Pq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Oq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Qq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Pq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Pq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Pq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=A.ytEventsEventsListeners||{};C("ytEventsEventsListeners",lb);var Rq=A.ytEventsEventsCounter||{count:0};C("ytEventsEventsCounter",Rq);
function Sq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ma(e[4])&&Ma(d)&&pb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Tq=$a(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Uq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Sq(a,b,c,d);if(e)return e;e=++Rq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Pq(h);if(!Hd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Pq(h);
h.currentTarget=a;return c.call(a,h)};
g=Uk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Tq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d];return e}
function Vq(a){a&&("string"==typeof a&&(a=[a]),cb(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Tq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
;function Wq(a){this.D=a;this.h=null;this.l=0;this.s=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.S=Uq(window,"mousemove",Sa(this.W,this));a=Sa(this.R,this);"function"===typeof a&&(a=Uk(a));this.Y=window.setInterval(a,25)}
Va(Wq,F);Wq.prototype.W=function(a){void 0===a.h&&Qq(a);var b=a.h;void 0===a.i&&Qq(a);this.h=new Dd(b,a.i)};
Wq.prototype.R=function(){if(this.h){var a=R();if(0!=this.l){var b=this.s,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.s=this.h;this.j=(this.j+1)%4}};
Wq.prototype.M=function(){window.clearInterval(this.Y);Vq(this.S)};var Xq={};
function Yq(a){var b=void 0===a?{}:a;a=void 0===b.De?!1:b.De;b=void 0===b.Zd?!0:b.Zd;if(null==D("_lact",window)){var c=parseInt(M("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;C("_lact",c,window);C("_fact",c,window);-1==c&&Zq();Uq(document,"keydown",Zq);Uq(document,"keyup",Zq);Uq(document,"mousedown",Zq);Uq(document,"mouseup",Zq);a?Uq(window,"touchmove",function(){$q("touchmove",200)},{passive:!0}):(Uq(window,"resize",function(){$q("resize",200)}),b&&Uq(window,"scroll",function(){$q("scroll",200)}));
new Wq(function(){$q("mouse",100)});
Uq(document,"touchstart",Zq,{passive:!0});Uq(document,"touchend",Zq,{passive:!0})}}
function $q(a,b){Xq[a]||(Xq[a]=!0,qi.oa(function(){Zq();Xq[a]=!1},b))}
function Zq(){null==D("_lact",window)&&Yq();var a=Date.now();C("_lact",a,window);-1==D("_fact",window)&&C("_fact",a,window);(a=D("ytglobal.ytUtilActivityCallback_"))&&a()}
function ar(){var a=D("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var br=A.ytPubsubPubsubInstance||new Pi,cr=A.ytPubsubPubsubSubscribedKeys||{},dr=A.ytPubsubPubsubTopicToKeys||{},er=A.ytPubsubPubsubIsSynchronous||{};function fr(a,b){var c=gr();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){cr[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{er[a]?f():ol(f,0)}catch(g){Vk(g)}},void 0);
cr[d]=!0;dr[a]||(dr[a]=[]);dr[a].push(d);return d}return 0}
function hr(a){var b=gr();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),cb(a,function(c){b.unsubscribeByKey(c);delete cr[c]}))}
function ir(a,b){var c=gr();c&&c.publish.apply(c,arguments)}
function jr(a){var b=gr();if(b)if(b.clear(a),a)kr(a);else for(var c in dr)kr(c)}
function gr(){return A.ytPubsubPubsubInstance}
function kr(a){dr[a]&&(a=dr[a],cb(a,function(b){cr[b]&&delete cr[b]}),a.length=0)}
Pi.prototype.subscribe=Pi.prototype.subscribe;Pi.prototype.unsubscribeByKey=Pi.prototype.Hb;Pi.prototype.publish=Pi.prototype.ab;Pi.prototype.clear=Pi.prototype.clear;C("ytPubsubPubsubInstance",br);C("ytPubsubPubsubTopicToKeys",dr);C("ytPubsubPubsubIsSynchronous",er);C("ytPubsubPubsubSubscribedKeys",cr);var lr=Symbol("injectionDeps");function mr(a){this.name=a}
mr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function nr(a){this.key=a}
function or(){this.h=new Map;this.i=new Map}
or.prototype.resolve=function(a){return a instanceof nr?pr(this,a.key,[],!0):pr(this,a,[])};
function pr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Hd)var e=d.Hd;else if(d.gf)e=d[lr]?qr(a,d[lr],c):[],e=d.gf.apply(d,ka(e));else if(d.Gd){e=d.Gd;var f=e[lr]?qr(a,e[lr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ka(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.gg||a.i.set(b,e);return e}
function qr(a,b,c){return b?b.map(function(d){return d instanceof nr?pr(a,d.key,c,!0):pr(a,d,c)}):[]}
;var rr;function sr(){rr||(rr=new or);return rr}
;var tr=window;function ur(){var a,b;return"h5vcc"in tr&&(null==(a=tr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=tr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in tr&&tr.performance.mark&&tr.performance.measure?2:0}
function vr(a){switch(ur()){case 1:tr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:tr.performance.mark(a+"-start");break;case 0:break;default:Qh()}}
function wr(a){switch(ur()){case 1:tr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";tr.performance.mark(c);tr.performance.measure(a,b,c);break;case 0:break;default:Qh()}}
;var xr=O("web_enable_lifecycle_monitoring")&&0!==ur(),yr=O("web_enable_lifecycle_monitoring");function zr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Ym():d;this.j=c;this.scheduler=d;this.i=new Fh;this.h=a;for(a={eb:0};a.eb<this.h.length;a={Qb:a.Qb,eb:a.eb},a.eb++)a.Qb=this.h[a.eb],c=function(e){return function(){e.Qb.Gc();b.h[e.eb].oc=!0;b.h.every(function(f){return!0===f.oc})&&b.i.resolve()}}(a),d=this.getPriority(a.Qb),d=this.scheduler.bb(c,d),this.h[a.eb]=Object.assign({},a.Qb,{Gc:c,
jobId:d})}
function Ar(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.oc||(a.scheduler.qa(c.jobId),a.scheduler.bb(c.Gc,10))}
zr.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.oc||this.scheduler.qa(b.jobId),b.oc=!0;this.i.resolve()};
zr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Br(a){this.state=a;this.plugins=[];this.l=void 0;this.s={};xr&&vr(this.state)}
m=Br.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;Ga.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;xr&&wr(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Ar(this.j),this.j=void 0);Cr(this,a,b);this.state=a;xr&&vr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Dr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Dr(a,b){var c=b.filter(function(e){return 10===Er(a,e)}),d=b.filter(function(e){return 10!==Er(a,e)});
return a.s.fg?function(){var e=Ga.apply(0,arguments);return z(function(f){if(1==f.h)return f.yield(a.Ke.apply(a,[c].concat(ka(e))),2);a.Bd.apply(a,[d].concat(ka(e)));f.h=0})}:function(){var e=Ga.apply(0,arguments);
a.Le.apply(a,[c].concat(ka(e)));a.Bd.apply(a,[d].concat(ka(e)))}}
m.Le=function(a){for(var b=Ga.apply(1,arguments),c=Ym(),d=v(a),e=d.next(),f={};!e.done;f={Ab:f.Ab},e=d.next())f.Ab=e.value,c.Ib(function(g){return function(){Fr(g.Ab.name);g.Ab.callback.apply(g.Ab,ka(b));Gr(g.Ab.name)}}(f))};
m.Ke=function(a){var b=Ga.apply(1,arguments),c,d,e,f,g;return z(function(h){1==h.h&&(c=Ym(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.v(0);f.fb=e.value;f.Kb=void 0;g=function(k){return function(){Fr(k.fb.name);var l=k.fb.callback.apply(k.fb,ka(b));"function"===typeof(null==l?void 0:l.then)?k.Kb=l.then(function(){Gr(k.fb.name)}):Gr(k.fb.name)}}(f);
c.Ib(g);return f.Kb?h.yield(f.Kb,3):h.v(3)}f={fb:f.fb,Kb:f.Kb};e=d.next();return h.v(2)})};
m.Bd=function(a){var b=Ga.apply(1,arguments),c=this,d=a.map(function(e){return{Gc:function(){Fr(e.name);e.callback.apply(e,ka(b));Gr(e.name)},
priority:Er(c,e)}});
d.length&&(this.j=new zr(d))};
function Er(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Fr(a){xr&&a&&vr(a)}
function Gr(a){xr&&a&&wr(a)}
function Cr(a,b,c){yr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(Br.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Hr(a){Br.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.m},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Ir;w(Hr,Br);Hr.prototype.i=function(a,b){var c=this;this.h=qm(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Hr.prototype.m=function(a,b){this.h&&(qi.qa(this.h),this.h=null);a(null==b?void 0:b.event)};
function Jr(){Ir||(Ir=new Hr);return Ir}
;var Kr=[];C("yt.logging.transport.getScrapedGelPayloads",function(){return Kr});function Lr(){this.store={};this.h={}}
Lr.prototype.storePayload=function(a,b){a=Mr(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Lr.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Nr(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ka(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ka(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ka(this.smartExtractMatchingEntries(a))));return c};
Lr.prototype.extractMatchingEntries=function(a){a=Nr(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ka(this.store[a[c]])),delete this.store[a[c]]);return b};
Lr.prototype.getSequenceCount=function(a){a=Nr(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function Nr(a,b){var c=Mr(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Mr(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Or(b.auth,g[0])){var h=b.isJspb;Or(void 0===h?"undefined":h?"true":"false",g[1])&&Or(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Or(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Or(a,b){return void 0===a||"undefined"===a?!0:a===b}
Lr.prototype.getSequenceCount=Lr.prototype.getSequenceCount;Lr.prototype.extractMatchingEntries=Lr.prototype.extractMatchingEntries;Lr.prototype.smartExtractMatchingEntries=Lr.prototype.smartExtractMatchingEntries;Lr.prototype.storePayload=Lr.prototype.storePayload;function Mr(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function Pr(a,b){if(a)return a[b.name]}
;var Qr=jl("initial_gel_batch_timeout",2E3),Rr=jl("gel_queue_timeout_max_ms",6E4),Sr=Math.pow(2,16)-1,Tr=jl("gel_min_batch_size",5),Ur=void 0;function Vr(){this.l=this.h=this.i=0;this.j=!1}
var Wr=new Vr,Xr=new Vr,Yr=new Vr,Zr=new Vr,$r,as=!0,bs=A.ytLoggingTransportTokensToCttTargetIds_||{};C("ytLoggingTransportTokensToCttTargetIds_",bs);var cs={};function ds(){var a=D("yt.logging.ims");a||(a=new Lr,C("yt.logging.ims",a));return a}
function es(a,b){if("log_event"===a.endpoint){gs();var c=hs(a),d=is(a.payload)||"";a:{if(O("enable_web_tiered_gel")){var e=jq[d||""];var f,g,h,k=null==sr().resolve(new nr(So))?void 0:null==(f=To())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!O("web_payload_policy_disabled_killswitch"))return;k=js(e.tier);if(400===k){ks(a,b);return}}cs[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};ds().storePayload(e,a.payload);ls(b,c,e,"gelDebuggingEvent"===d)}}
function ls(a,b,c,d){function e(){ms({writeThenSend:!0},O("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(Ur=new a);a=jl("tvhtml5_logging_max_batch_ads_fork")||jl("web_logging_max_batch")||100;var g=R(),h=ns(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=ds().getSequenceCount(c));1E3<=d?e():d>=a?$r||($r=ps(function(){e();$r=void 0},0)):10<=g-k&&(qs(f,c.tier),h.l=g)}
function ks(a,b){if("log_event"===a.endpoint){gs();var c=hs(a),d=new Map;d.set(c,[a.payload]);var e=is(a.payload)||"";b&&(Ur=new b);return new Ud(function(f,g){Ur&&Ur.isReady()?rs(d,Ur,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function hs(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);bs[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function ms(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Ud(function(e,f){var g=ns(c,d),h=g.j;g.j=!1;ss(g.i);ss(g.h);g.h=0;Ur&&Ur.isReady()?void 0===d&&O("enable_web_tiered_gel")?ts(e,f,a,b,c,300,h):ts(e,f,a,b,c,d,h):(qs(c,d),e())})}
function ts(a,b,c,d,e,f,g){var h=Ur;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map;var l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=O("enable_web_tiered_gel")?ds().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):ds().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(cs)),l=d.next();!l.done;l=d.next())l=l.value,e=O("enable_web_tiered_gel")?ds().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):ds().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(O("web_fp_via_jspb_and_json")&&c.writeThenSend||!O("web_fp_via_jspb_and_json"))&&delete cs[l];rs(k,h,a,b,c,!1,g)}
function qs(a,b){function c(){ms({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=ns(a,b),e=d===Zr||d===Yr?5E3:Rr;O("web_gel_timeout_cap")&&!d.h&&(e=ps(function(){c()},e),d.h=e);
ss(d.i);e=M("LOGGING_BATCH_TIMEOUT",jl("web_gel_debounce_ms",1E4));O("shorten_initial_gel_batch_timeout")&&as&&(e=Qr);e=ps(function(){0<jl("gel_min_batch_size")?ds().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Tr&&c():c()},e);
d.i=e}
function rs(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(R()),k=a.size,l=(void 0===g?0:g)&&O("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={jc:g.jc,batchRequest:g.batchRequest,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,lc:g.lc,kc:g.kc},n=a.next()){var p=v(n.value);n=p.next().value;p=p.next().value;g.batchRequest=rb({context:Zo(b.config_||Yo())});if(!La(p)&&!O("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=
p;(p=bs[n])&&us(g.batchRequest,n,p);delete bs[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;vs(g.batchRequest,h,g.dangerousLogToVisitorSession);O("always_send_and_write")&&(e.writeThenSend=!1);g.lc=function(t){O("start_client_gcf")&&qi.oa(function(){return z(function(r){return r.yield(ws(t),0)})});
k--;k||c()};
g.jc=0;g.kc=function(t){return function(){t.jc++;if(e.bypassNetworkless&&1===t.jc)try{Op(b,l,t.batchRequest,xs({writeThenSend:!0},t.dangerousLogToVisitorSession,t.lc,t.kc,f)),as=!1}catch(r){Vk(r),d()}k--;k||c()}}(g);
try{Op(b,l,g.batchRequest,xs(e,g.dangerousLogToVisitorSession,g.lc,g.kc,f)),as=!1}catch(t){Vk(t),d()}}}
function xs(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Nf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:O("compress_gel")||O("compress_gel_lr")};ys()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(R())));return a}
function vs(a,b,c){ys()||(a.requestTimeMs=String(b));O("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=M("EVENT_ID"))&&((c=M("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Sr/2)),c++,c>Sr&&(c=1),Qk("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function us(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function gs(){var a;(a=D("yt.logging.transport.enableScrapingForTest"))||(a=il("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(Kr=[],C("yt.logging.transport.enableScrapingForTest",!0),C("yt.logging.transport.scrapedPayloadsForTesting",Kr),C("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
C("yt.logging.transport.scrapeClientEvent",!0))}
function ys(){return O("use_request_time_ms_header")||O("lr_use_request_time_ms_header")}
function ps(a,b){return O("transport_use_scheduler")?O("logging_avoid_blocking_during_navigation")||O("lr_logging_avoid_blocking_during_navigation")?qm(function(){if("none"===Jr().currentState)a();else{var c={};Jr().install((c.none={callback:a},c))}},b):qm(a,b):ol(a,b)}
function ss(a){O("transport_use_scheduler")?qi.qa(a):window.clearTimeout(a)}
function ws(a){var b,c,d,e,f,g,h,k,l,n;return z(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=Pr(d,vk),g=null==(f=d)?void 0:f.hotHashData,h=Pr(d,uk),l=null==(k=d)?void 0:k.coldHashData,(n=sr().resolve(new nr(So)))?g?e?p.yield(Uo(n,g,e),2):p.yield(Uo(n,g),2):p.v(2):p.return()):l?h?p.yield(Vo(n,l,h),0):p.yield(Vo(n,l),0):p.v(0)})}
function ns(a,b){b=void 0===b?200:b;return a?300===b?Zr:Xr:300===b?Yr:Wr}
function is(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,jq[b])return b}
function js(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var zs=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",zs);
function As(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||R());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ar();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!O("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,zs[b]=b in zs?zs[b]+1:0,a.sequence={index:zs[b],groupKey:b},d.endOfSequence&&delete zs[d.sequenceGroup]);(d.sendIsolatedPayload?ks:es)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function hn(a,b,c){c=void 0===c?{}:c;var d=Lq;M("ytLoggingEventsDefaultDisabled",!1)&&Lq===Lq&&(d=null);O("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=ar(),c.timestamp=R());As(a,b,d,c)}
;C("ytLoggingGelSequenceIdObj_",A.ytLoggingGelSequenceIdObj_||{});var Bs=new Set,Cs=0,Ds=0,Es=0,Fs=[],Gs=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function gn(a){Hs(a)}
function Is(a){Hs(a,"WARNING")}
function Js(a){a instanceof Error?Hs(a):(a=Ma(a)?JSON.stringify(a):String(a),a=new mm(a),a.name="RejectedPromiseError",Is(a))}
function Hs(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||M("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||M("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),O("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Cs))){d=Fs;var k=Ac(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(p=Nl(a.args[t],"params."+t,c,p),
500<=p);t++);else if(a.hasOwnProperty("params")&&a.params){var r=a.params;if("object"===typeof a.params)for(t in r){if(r[t]){var x="params."+t,y=Pl(r[t]);c[x]=y;p+=x.length+y.length;if(500<p)break}}else c.params=Pl(r)}if(d.length)for(t=0;t<d.length&&!(p=Nl(d[t],"params.context."+t,c,p),500<=p);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Jl();c=v(a.Va);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.Yf)){a=d.weight;break a}a=v(a.Ra);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=v(El);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.mc[t.name])for(e=v(c.mc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Jc(f);break}t.params||(t.params={});a=Jl();t.params["params.errorServiceSignature"]="msg="+a.Va.length+"&cb="+a.Ra.length;t.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));xb("sample").constructor!==wb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!Bs.has(t.message)){if(g&&O("web_enable_error_204"))Ks(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Kl.ab("handleError",t),O("record_app_crashed_web")&&0===Es&&1===t.sampleWeight&&(Es++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},O("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),hn("appCrashed",g)),Ds++):"WARNING"===b&&Kl.ab("handleWarning",t);if(O("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(Gs);for(c=a.next();!c.done;c=a.next())if(on(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];M("FEXP_EXPERIMENTS")&&(h.experimentIds=M("FEXP_EXPERIMENTS"));e=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Rk("web_disable_gel_stp_ecatcher_killswitch")&&e)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=d.value,h.kvPairs.push({key:d,value:String(e[d])});if(e=t.params)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=
d.value,h.kvPairs.push({key:"client."+d,value:String(e[d])});d=M("SERVER_NAME");e=M("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(hn("clientError",h),("ERROR"===g||O("errors_flush_gel_always_killswitch"))&&ms(void 0,void 0,!1))}O("suppress_error_204_logging")||Ks(b,t)}try{Bs.add(t.message)}catch(B){}Cs++}}}
function Ks(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:M("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=M("SERVER_NAME");b=M("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}vl(M("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Ls(){this.register=new Map}
function Ms(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.ag("ABORTED")}
Ls.prototype.clear=function(){Ms(this);this.register.clear()};
var Ns=new Ls;var Os=Date.now().toString();
function Ps(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Os)for(a=1,b=0;b<Os.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Os.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Qs,Rs=A.ytLoggingDocDocumentNonce_;Rs||(Rs=Ps(),C("ytLoggingDocDocumentNonce_",Rs));Qs=Rs;function Ss(a){this.h=a}
m=Ss.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Ck;void 0!==this.h.trackingParams?G(a,1,hf(this.h.trackingParams,!0)):(void 0!==this.h.veType&&G(a,2,sf(this.h.veType)),void 0!==this.h.veCounter&&G(a,6,sf(this.h.veCounter)),void 0!==this.h.elementIndex&&G(a,3,sf(this.h.elementIndex)),this.h.isCounterfactual&&G(a,5,pf(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();Yf(a,Ck,7,b)}void 0!==this.h.youtubeData&&Yf(a,wk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function Ts(a){return M("client-screen-nonce-store",{})[void 0===a?0:a]}
function Us(a,b){b=void 0===b?0:b;var c=M("client-screen-nonce-store");c||(c={},Qk("client-screen-nonce-store",c));c[b]=a}
function Vs(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Ws(a){return M(Vs(void 0===a?0:a))}
C("yt_logging_screen.getRootVeType",Ws);function Xs(){var a=M("csn-to-ctt-auth-info");a||(a={},Qk("csn-to-ctt-auth-info",a));return a}
function Ys(){return Object.values(M("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function Zs(a){a=Ts(void 0===a?0:a);if(!a&&!M("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
C("yt_logging_screen.getCurrentCsn",Zs);function $s(a,b,c){var d=Xs();(c=Zs(c))&&delete d[c];b&&(d[a]=b)}
function at(a){return Xs()[a]}
C("yt_logging_screen.getCttAuthInfo",at);C("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==Ts(c)||b!==M(Vs(c)))if($s(a,d,c),Us(a,c),Qk(Vs(c),b),b=function(){setTimeout(function(){a&&hn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Qs,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var bt=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};C("yt.msgs_",bt);function ct(a){Lk(bt,arguments)}
;function dt(){var a=qb(et),b;return(new Ud(function(c,d){a.onSuccess=function(e){nl(e)?c(new ft(e)):d(new gt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new gt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new gt("Request timed out","net.timeout",e))};
b=vl("//googleads.g.doubleclick.net/pagead/id",a)})).sc(function(c){c instanceof ae&&b.abort();
return Zd(c)})}
function gt(a,b,c){Xa.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(gt,Xa);function ft(a){this.xhr=a}
;function ht(){this.h=0;this.value_=null}
ht.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.value_))&&"function"===typeof a.then?a:jt(a):2===this.h&&b?(a=b.call(c,this.value_))&&"function"===typeof a.then?a:kt(a):this};
ht.prototype.getValue=function(){return this.value_};
ht.prototype.isRejected=function(){return 2==this.h};
ht.prototype.$goog_Thenable=!0;function kt(a){var b=new ht;a=void 0===a?null:a;b.h=2;b.value_=void 0===a?null:a;return b}
function jt(a){var b=new ht;a=void 0===a?null:a;b.h=1;b.value_=void 0===a?null:a;return b}
;function lt(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:fl(a)?"same-origin":"cors",credentials:fl(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function mt(){return wg()||(ze||Ae)&&on("applewebkit")&&!on("version")&&(!on("safari")||on("gsa/"))||Rc&&on("version/")?!0:M("EOM_VISITOR_DATA")?!1:!0}
;function nt(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Ak)if(Ak[d]==c.embeddedPlayerMode){b=Ak[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function ot(a){Xa.call(this,a.message||a.description||a.name);this.isMissing=a instanceof pt;this.isTimeout=a instanceof gt&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ae}
w(ot,Xa);ot.prototype.name="BiscottiError";function pt(){Xa.call(this,"Biscotti ID is missing from server")}
w(pt,Xa);pt.prototype.name="BiscottiMissingError";var et={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},qt=null;function rt(){if(O("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!mt())return Error("User has not consented - not fetching biscotti id.");var a=M("PLAYER_VARS",{});if("1"==ob(a))return Error("Biscotti ID is not available in private embed mode");if(nt(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Jk(){var a=rt();if(void 0!==a)return Zd(a);qt||(qt=dt().then(st).sc(function(b){return tt(2,b)}));
return qt}
function st(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new pt;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new pt;a=a.id;Kk(a);qt=jt(a);ut(18E5,2);return a}
function tt(a,b){b=new ot(b);Kk("");qt=kt(b);0<a&&ut(12E4,a-1);throw b;}
function ut(a,b){ol(function(){dt().then(st,function(c){return tt(b,c)}).sc(Za)},a)}
function vt(){try{var a=D("yt.ads.biscotti.getId_");return a?a():Jk()}catch(b){return Zd(b)}}
;function wt(a){if("1"!=ob(M("PLAYER_VARS",{}))){a&&Ik();try{vt().then(function(){},function(){}),ol(wt,18E5)}catch(b){Vk(b)}}}
;function xt(){var a=cm(),b=fm(119),c=1<window.devicePixelRatio;if(document.body&&Ci(document.body,"exp-invert-logo"))if(c&&!Ci(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ci(d,"inverted-hdpi")){var e=yi(d);Bi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ci(document.body,"inverted-hdpi")&&Di();if(b!=c){b="f"+(Math.floor(119/31)+1);d=gm(b)||0;d=c?d|67108864:d&-67108865;0===d?delete $l[b]:(c=d.toString(16),$l[b]=c.toString());
c=!0;O("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in $l)$l.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String($l[f])));var f=d.join("&");Wl(b,f,63072E3,a.i,c)}}
;var zt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function At(){var a=void 0===a?window.location.href:a;if(O("kevlar_disable_theme_param"))return null;$b(ac(5,a));try{var b=dl(a).theme;return zt.get(b)||null}catch(c){}return null}
;function Bt(){this.h={};if(this.i=Zl()){var a=Xl("CONSISTENCY");a&&Ct(this,{encryptedTokenJarContents:a})}}
Bt.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Oa.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Ct(this,a)}};
function Ct(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Wl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Dt=window.location.hostname.split(".").slice(-2).join(".");function Et(){var a=M("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===M("INNERTUBE_CLIENT_NAME")&&(this.h=Ft(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Gt;function Ht(){Gt=D("yt.clientLocationService.instance");Gt||(Gt=new Et,C("yt.clientLocationService.instance",Gt));return Gt}
m=Et.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===M("INNERTUBE_CLIENT_NAME")?(this.h=Ft(this))&&this.h.set("yt-location-playability-token",a,15552E3):Wl("YT_CL",JSON.stringify({loctok:a}),15552E3,Dt,!0))};
function Ft(a){return void 0===a.h?new Zm("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Ft(this))&&this.h.remove("yt-location-playability-token"):Yl("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===M("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function It(a,b){var c,d=null==(c=Pr(a,zk))?void 0:c.signal;if(d&&b.Ub&&(c=b.Ub[d]))return c();var e;if((c=null==(e=Pr(a,xk))?void 0:e.request)&&b.Vd&&(e=b.Vd[c]))return e();for(var f in a)if(b.dd[f]&&(a=b.dd[f]))return a()}
;function Jt(a){return function(){return new a}}
;var Kt={},Lt=(Kt.WEB_UNPLUGGED="^unplugged/",Kt.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Kt.WEB_UNPLUGGED_OPS="^unplugged/",Kt.WEB_UNPLUGGED_PUBLIC="^unplugged/",Kt.WEB_CREATOR="^creator/",Kt.WEB_KIDS="^kids/",Kt.WEB_EXPERIMENTS="^experiments/",Kt.WEB_MUSIC="^music/",Kt.WEB_REMIX="^music/",Kt.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Kt.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Kt);
function Mt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Lt[b];if(c){var d=new RegExp(c),e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Lt).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Nt(){}
Nt.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Tl:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=M("INNERTUBE_CONTEXT");if(g){g=rb(g);O("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=M("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;cm();var l="USER_INTERFACE_THEME_LIGHT";fm(165)?l="USER_INTERFACE_THEME_DARK":fm(174)?l="USER_INTERFACE_THEME_LIGHT":!O("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");k=k?l:At()||l;h.userInterfaceTheme=k;if(!f){if(k=km())h.connectionType=
k;O("web_log_effective_connection_type")&&(k=lm())&&(g.client.effectiveConnectionType=k)}var n;if(O("web_log_memory_total_kbytes")&&(null==(n=A.navigator)?0:n.deviceMemory)){var p;n=null==(p=A.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}O("web_gcf_hashes_innertube")&&(k=Wo())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=p,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=
k);p=dl(A.location.href);!O("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:A.location.href},O("kevlar_woffle")&&Ul.h&&(p=Ul.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Vl(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):
"TVHTML5"===h.clientName&&(!O("web_lr_app_quality_killswitch")&&(p=M("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=M("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!O("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(U){}t=void 0}t&&(h.timeZone=t)}(t=M("EXPERIMENTS_TOKEN",""))?h.experimentsToken=
t:delete h.experimentsToken;t=kl();Bt.h||(Bt.h=new Bt);h=Bt.h.h;p=[];n=0;for(var r in h)p[n++]=h[r];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:p});!O("web_prequest_context_killswitch")&&(r=M("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=r);t=cm();r=fm(58);t=t.get("gsml","");g.user=Object.assign({},g.user);r&&(g.user.enableSafetyMode=r);t&&(g.user.lockedSafetyMode=!0);O("warm_op_csn_cleanup")?e&&(f=Zs())&&(g.clientScreenNonce=f):
!f&&(f=Zs())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=D("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Ht().setLocationOnInnerTubeContext(g);try{var x=gl(),y=x.bid;delete x.bid;g.adSignalsInfo={params:[],bid:y};var B=v(Object.entries(x));for(var H=B.next();!H.done;H=B.next()){var N=v(H.value),P=N.next().value,da=N.next().value;x=P;y=da;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:x,value:""+y})}var ha;if(O("add_ifa_to_tvh5_requests")&&"TVHTML5"===(null==
(ha=g.client)?void 0:ha.clientName)){var L=M("INNERTUBE_CONTEXT");L.adSignalsInfo&&(g.adSignalsInfo.advertisingId=L.adSignalsInfo.advertisingId,g.adSignalsInfo.limitAdTracking=L.adSignalsInfo.limitAdTracking)}}catch(U){Hs(U)}B=g}else Hs(Error("Error: No InnerTubeContext shell provided in ytconfig.")),B={};B={context:B};if(H=this.h(a)){this.i(B,H,b);var T;b="/youtubei/v1/"+Mt(this.j());(H=null==(T=Pr(a.commandMetadata,yk))?void 0:T.apiUrl)&&(b=H);T=b;(b=M("INNERTUBE_HOST_OVERRIDE"))&&(T=String(b)+
String(cc(T)));b={};b.key=M("INNERTUBE_API_KEY");O("json_condensed_response")&&(b.prettyPrint="false");T=el(T,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:T,jb:lt(T),Oa:B,config:a};a.config.Wb?a.config.Wb.identity=c:a.config.Wb={identity:c};return a}Hs(new mm("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(Nt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Ot(){}
w(Ot,Nt);Ot.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",jb:lt("/getDatasyncIdsEndpoint","GET"),Oa:{}}};
Ot.prototype.j=function(){return[]};
Ot.prototype.h=function(){};
Ot.prototype.i=function(){};var Pt={},Qt=(Pt.GET_DATASYNC_IDS=Jt(Ot),Pt);var Rt="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function St(a,b){var c=void 0===c?!0:c;var d=M("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=bc(window.location.href);e&&d.push(e);e=bc(a);if(0<=bb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),Kh(d,a),a=d.href)if(a=cc(a),a=dc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Zs()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&Tt(a,b,f)}else Tt(a,b)}
function Tt(a,b,c){a=Ut(a);b=b?ic(b):"";c=c||5;mt()&&Wl(a,b,c)}
function Ut(a){for(var b=v(Rt),c=b.next();!c.done;c=b.next())a=pc(a,c.value);return"ST-"+Yb(a).toString(36)}
;function Vt(){try{return!!self.localStorage}catch(a){return!1}}
;function Wt(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Xt(a){if(Vt()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Wt(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Yt(){if(!Vt())return!1;var a=om(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Wt(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Zt(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return O("copy_login_info_to_st_cookie")&&("WEB"===M("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===M("INNERTUBE_CLIENT_NAME"))&&a}
function $t(a){if(M("LOGGED_IN",!0)&&Zt()){var b=M("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=bc(window.location.href);c&&b.push(c);c=bc(a);0<=bb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=cc(a),(b=dc(b))?(b=Ut(b),b=(b=Xl(b)||null)?cl(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;Zt()?(d||(d=M("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&St(a,b)}}
;function au(a){var b=Ga.apply(1,arguments);if(!bu(a)||b.some(function(d){return!bu(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())cu(a,c.value);return a}
function cu(a,b){for(var c in b)if(bu(b[c])){if(c in a&&!bu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});cu(a[c],b[c])}else if(du(b[c])){if(c in a&&!du(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);eu(a[c],b[c])}else a[c]=b[c];return a}
function eu(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,bu(c)?a.push(cu({},c)):du(c)?a.push(eu([],c)):a.push(c);return a}
function bu(a){return"object"===typeof a&&!Array.isArray(a)}
function du(a){return"object"===typeof a&&Array.isArray(a)}
;function fu(a){var b;(b=D("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},C("ytcsi."+(a||"")+"data_",b));return b}
function gu(){var a=fu();a.info||(a.info={});return a.info}
function hu(a){a=fu(a);a.metadata||(a.metadata={});return a.metadata}
function iu(a){a=fu(a);a.tick||(a.tick={});return a.tick}
function ju(a){a=fu(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function ku(a){a=ju(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function lu(a){var b=fu(a).nonce;b||(b=Ps(),fu(a).nonce=b);return b}
;function mu(){var a=D("ytcsi.debug");a||(a=[],C("ytcsi.debug",a),C("ytcsi.reference",{}));return a}
function nu(a){a=a||"";var b=D("ytcsi.reference");b||(mu(),b=D("ytcsi.reference"));if(b[a])return b[a];var c=mu(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var S={},ou=(S.auto_search="LATENCY_ACTION_AUTO_SEARCH",S.ad_to_ad="LATENCY_ACTION_AD_TO_AD",S.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",S["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",S.app_startup="LATENCY_ACTION_APP_STARTUP",S["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",S["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",S["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",S["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
S["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",S["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",S["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",S["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",S["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",S["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",S["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",S["asset.ownership"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",S["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",S["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",S["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",S["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",S["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",S["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",S["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",
S["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",S["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",S.browse="LATENCY_ACTION_BROWSE",S.cast_splash="LATENCY_ACTION_CAST_SPLASH",S.channels="LATENCY_ACTION_CHANNELS",S.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",S["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",S["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",S["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
S["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",S["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",S["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",S["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",S["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",S["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",S["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",S["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",S["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",S["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",S.chips="LATENCY_ACTION_CHIPS",S.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",S["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",S["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",S["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",S.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
S.embed="LATENCY_ACTION_EMBED",S.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",S.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",S.explore="LATENCY_ACTION_EXPLORE",S.home="LATENCY_ACTION_HOME",S.library="LATENCY_ACTION_LIBRARY",S.live="LATENCY_ACTION_LIVE",S.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",S.mini_app="LATENCY_ACTION_MINI_APP_PLAY",S.onboarding="LATENCY_ACTION_ONBOARDING",S.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",
S["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",S["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",S["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",S["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",S["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",S["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",S["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",S["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",S["owner.channels"]=
"LATENCY_ACTION_CREATOR_CMS_CHANNELS",S["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",S["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",S["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",S["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",S["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",S["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",S["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",S["owner.pitch_music"]=
"LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",S["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",S["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",S["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",S["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",S.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",S.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",S.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",S.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",
S["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",S["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",S["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",S.prebuffer="LATENCY_ACTION_PREBUFFER",S.prefetch="LATENCY_ACTION_PREFETCH",S.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",S.profile_switcher="LATENCY_ACTION_LOGIN",S.reel_watch="LATENCY_ACTION_REEL_WATCH",S.results="LATENCY_ACTION_RESULTS",S["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",S.search_ui="LATENCY_ACTION_SEARCH_UI",
S.search_suggest="LATENCY_ACTION_SUGGEST",S.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",S.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",S.seek="LATENCY_ACTION_PLAYER_SEEK",S.settings="LATENCY_ACTION_SETTINGS",S.store="LATENCY_ACTION_STORE",S.tenx="LATENCY_ACTION_TENX",S.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",S.watch="LATENCY_ACTION_WATCH",S.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",S["watch,watch7"]="LATENCY_ACTION_WATCH",S["watch,watch7_html5"]="LATENCY_ACTION_WATCH",S["watch,watch7ad"]=
"LATENCY_ACTION_WATCH",S["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",S.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",S.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",S["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",S["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",S["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",S["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",S["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",S["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",
S["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",S["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",S["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",S["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",S["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",S["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",S["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",S.voice_assistant=
"LATENCY_ACTION_VOICE_ASSISTANT",S.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",S.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",S.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",S.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",S),V={},pu=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",V.ad_cpn="adClientPlaybackNonce",V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p=
"httpProtocol",V.t="transportProtocol",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",V.GetLibrary_rid="requestIds",V.is_continuation="isContinuation",V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav=
"kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",V.pnt="performanceNavigationTiming",V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",
V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm="shellStartupDurationMs",V.br_trs="tvInfo.bedrockTriggerState",V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",
V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID=
"requestIds",V),qu="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),ru={},su=(ru.ccs="CANARY_STATE_",ru.mver="MEASUREMENT_VERSION_",ru.pis="PLAYER_INITIALIZED_STATE_",ru.yt_pt="LATENCY_PLAYER_",ru.pa="LATENCY_ACTION_",
ru.ctop="TOP_ENTITY_TYPE_",ru.yt_vst="VIDEO_STREAM_TYPE_",ru),tu="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function uu(a,b,c){c=ju(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in pu){c=pu[a];0<=bb(qu,c)&&(b=!!b);a in su&&"string"===typeof b&&(b=su[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return au({},d)}0<=bb(tu,a)||Is(new mm("Unknown label logged with GEL CSI",a))}
;function vu(a,b){ap.call(this,1,arguments);this.timer=b}
w(vu,ap);var wu=new bp("aft-recorded",vu);var xu=A.ytLoggingLatencyUsageStats_||{};C("ytLoggingLatencyUsageStats_",xu);function yu(){this.h=0}
function zu(){yu.h||(yu.h=new yu);return yu.h}
yu.prototype.tick=function(a,b,c,d){Au(this,"tick_"+a+"_"+b)||hn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
yu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Au(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,hn("latencyActionInfo",a,{cttAuthInfo:c}))};
yu.prototype.jspbInfo=function(){};
yu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Au(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,hn("latencyActionSpan",a,{cttAuthInfo:c}))};
function Au(a,b){xu[b]=xu[b]||{count:0};var c=xu[b];c.count++;c.time=R();a.h||(a.h=qm(function(){var d=R(),e;for(e in xu)xu[e]&&6E4<d-xu[e].time&&delete xu[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new mm("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Is(c)),!0):!1}
;var Bu=window;function Cu(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Du(){var a;if(O("csi_use_performance_navigation_timing")||O("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==X?void 0:null==(a=X.getEntriesByType)?void 0:null==(b=a.call(X,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Eu(e.requestStart),e.responseEnd=Eu(e.responseEnd),e.redirectStart=Eu(e.redirectStart),e.redirectEnd=Eu(e.redirectEnd),e.domainLookupEnd=Eu(e.domainLookupEnd),e.connectStart=Eu(e.connectStart),e.connectEnd=
Eu(e.connectEnd),e.responseStart=Eu(e.responseStart),e.secureConnectionStart=Eu(e.secureConnectionStart),e.domainLookupStart=Eu(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=X.timing}else a=X.timing;return a}
function Eu(a){return Math.round(Fu()+a)}
function Fu(){return(O("csi_use_time_origin")||O("csi_use_time_origin_tvhtml5"))&&X.timeOrigin?Math.floor(X.timeOrigin):X.timing.navigationStart}
var X=Bu.performance||Bu.mozPerformance||Bu.msPerformance||Bu.webkitPerformance||new Cu;var Gu=!1,Hu=!1,Iu={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Sa(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||Za,X);function Ju(a,b,c){if(null!==b){if("yt_lt"===a){var d="string"===typeof b?b:""+b;hu(c).loadType=d}(a=uu(a,b,c))&&Ku(a,c)}}
function Ku(a,b){if(!O("web_csi_action_sampling_enabled")||!fu(b).actionDisabled){var c=nu(b||"");au(c.info,a);a.loadType&&(c=a.loadType,hu(b).loadType=c);au(ku(b),a);c=lu(b);b=fu(b).cttAuthInfo;zu().info(a,c,b)}}
function Lu(){var a,b,c,d;return(null!=(d=null==sr().resolve(new nr(So))?void 0:null==(a=To())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function Mu(a,b,c){if(!O("web_csi_action_sampling_enabled")||!fu(c).actionDisabled){var d=lu(c),e;if(e=O("web_csi_debug_sample_enabled")&&d)if((null==sr().resolve(new nr(So))?0:To())&&!Hu&&(Hu=!0,Mu("gcfl",R(),c)),!1===fu(c).debugTicksExcludedLogged)e=!1;else if(0===Lu().length)e=fu(c).debugTicksExcludedLogged=!1;else{var f,g,h;e=(null==sr().resolve(new nr(So))?void 0:null==(f=To())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=Lu();
if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+d.charCodeAt(g),g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;fu(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Ku(f,c));fu(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,X.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),X.mark(e)));e=nu(c||"");e.tick[a]=b||R();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=
f.value,f();e=ju(c);e.gelTicks&&(e.gelTicks[a]=!0);f=iu(c);e=b||R();O("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=fu(c).cttAuthInfo;"_start"===a?(a=zu(),Au(a,"baseline_"+d)||hn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):zu().tick(a,d,b,f);Nu(c);return e}}}
function Ou(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Nq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Pu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Wb()&&a.setAttribute("nonce",Wb());return c?(a=X.getEntriesByName(c))&&a[0]&&(a=a[0],c=Fu(),Mu("rsf_"+b,c+Math.round(a.fetchStart)),Mu("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Qu(){var a=window.location.protocol,b=X.getEntriesByType("resource");b=db(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=fb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Mu("wffs",Eu(b.startTime)),Mu("wffe",Eu(b.responseEnd)))}
function Ru(a){var b=Su("aft",a);if(b)return b;b=M((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Su(b[d],a);if(e)return e}return NaN}
function Su(a,b){if(a=iu(b)[a])return"number"===typeof a?a:a[a.length-1]}
function Nu(a){var b=Su("_start",a),c=Ru(a);b&&c&&!Gu&&(gp(wu,new vu(Math.round(c-b),a)),Gu=!0)}
function Tu(a,b){for(var c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Tu(a[d],b[d]))return!1;return!0}
function Uu(){if(X.getEntriesByType){var a=X.getEntriesByType("paint");if(a=gb(a,function(b){return"first-paint"===b.name}))return Eu(a.startTime)}a=X.timing;
return a.ye?Math.max(0,a.ye):0}
;function Vu(a,b){Uk(function(){nu("").info.actionType=a;b&&Qk("TIMING_AFT_KEYS",b);Qk("TIMING_ACTION",a);var c=M("TIMING_INFO",{}),d;for(d in c)c.hasOwnProperty(d)&&Ju(d,c[d]);c={isNavigation:!0,actionType:ou[M("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(d=M("PREVIOUS_ACTION"))c.previousAction=ou[d]||"LATENCY_ACTION_UNKNOWN";if(d=M("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=M("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Zs())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=Ou();if(1===d||-1===d)c.isVisible=
!0;hu();gu();c.loadType="cold";d=gu();var e=Du(),f=Fu(),g=M("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!O("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Mu("srt",e.responseStart),1!==d.prerender&&Mu("_start",f,void 0));d=Uu();0<d&&Mu("fpt",d);d=Du();d.isPerformanceNavigationTiming&&Ku({performanceNavigationTiming:!0});Mu("nreqs",d.requestStart,void 0);Mu("nress",d.responseStart,void 0);Mu("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Mu("nrs",d.redirectStart,void 0),Mu("nre",
d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Mu("ndnss",d.domainLookupStart,void 0),Mu("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Mu("ntcps",d.connectStart,void 0),Mu("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Fu()&&0<d.connectEnd-d.secureConnectionStart&&(Mu("nstcps",d.secureConnectionStart,void 0),Mu("ntcpe",d.connectEnd,void 0));X&&"getEntriesByType"in X&&Qu();d=[];if(document.querySelector&&X&&X.getEntriesByName)for(var h in Iu)Iu.hasOwnProperty(h)&&
(e=Iu[h],Pu(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Ku(c);c=gu();h=ku();if("cold"===hu().loadType&&("cold"===c.yt_lt||"cold"===h.loadType)){d=iu();e=ju();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])Mu(k,Su(k));else if(O("log_repeated_ytcsi_ticks"))for(f=v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Mu(k.slice(1),g);k={};d=!1;e=v(Object.keys(c));for(f=e.next();!f.done;f=
e.next())f=f.value,(f=uu(f,c[f]))&&!Tu(ku(),f)&&(au(h,f),au(k,f),d=!0);d&&Ku(k)}C("ytglobal.timingready_",!0);k=M("TIMING_ACTION");D("ytglobal.timingready_")&&k&&Wu()&&Ru()&&Nu()})()}
function Xu(a,b,c,d){Uk(Ju)(a,b,c,d)}
function Yu(a,b,c){return Uk(Mu)(a,b,c)}
function Wu(){return Uk(function(){return"_start"in iu()})()}
function Zu(){Uk(function(){var a=lu();requestAnimationFrame(function(){setTimeout(function(){a===lu()&&Yu("ol",void 0,void 0)},0)})})()}
var $u=window;$u.ytcsi&&($u.ytcsi.info=Xu,$u.ytcsi.tick=Yu);var av="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),bv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function cv(a,b,c,d){this.m=a;this.aa=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Ub||(a.Ub={});a.Ub=Object.assign({},Qt,a.Ub)}
function dv(a,b,c,d){if(void 0!==cv.h){if(d=cv.h,a=[a!==d.m,b!==d.aa,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new mm("InnerTubeTransportService is already initialized",a);
}else cv.h=new cv(a,b,c,d)}
function ev(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Tl:c;var d=It(b,a.m);if(!d)return Zd(new mm("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?($t(e.input),new Ud(function(f){var g,h,k;return z(function(l){if(1==l.h){h="cors"===(null==(g=e.jb)?void 0:g.mode)?"cors":void 0;if(a.l.Ze){var n=e.config,p;n=null==n?void 0:null==(p=n.Wb)?void 0:p.sessionIndex;p=Sl(0,{sessionIndex:n});k=Object.assign({},fv(h),p);return l.v(2)}return l.yield(gv(e.config,
h),3)}2!=l.h&&(k=l.i);f(hv(a,e,k));l.h=0})})):Zd(new mm("Error: Failed to build request for command.",b))}
function iv(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.dg)?0:d.hg)&&a.j){d=v(av);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function hv(a,b,c){var d,e,f,g,h,k,l,n,p,t,r,x,y,B,H,N,P,da,ha,L,T,U,I,Y,W,ab,Jc,Kc,Lc;return z(function(Z){switch(Z.h){case 1:Z.v(2);break;case 3:if((d=Z.i)&&!d.isExpired())return Z.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Oa)?0:f.context)){Z.v(4);break}g=b.Oa.context;Z.v(5);break;case 5:h=v([]),k=h.next();case 7:if(k.done){Z.v(4);break}l=k.value;return Z.yield(l.Zf(g),8);case 8:k=h.next();Z.v(7);break;case 4:if(null==(n=a.i)||!n.eg(b.input,b.Oa)){Z.v(11);break}return Z.yield(a.i.Wf(b.input,
b.Oa),12);case 12:return p=Z.i,O("kevlar_process_local_innertube_responses_killswitch")||iv(a,p,b),Z.return(p);case 11:return(x=null==(r=b.config)?void 0:r.Qa)&&a.h.has(x)&&O("web_memoize_inflight_requests")?t=a.h.get(x):(y=JSON.stringify(b.Oa),N=null!=(H=null==(B=b.jb)?void 0:B.headers)?H:{},b.jb=Object.assign({},b.jb,{headers:Object.assign({},N,c)}),P=Object.assign({},b.jb),"POST"===b.jb.method&&(P=Object.assign({},P,{body:y})),(null==(da=b.config)?0:da.Ie)&&Yu(b.config.Ie),ha=function(){return a.aa.fetch(b.input,
P,b.config)},t=ha(),x&&a.h.set(x,t)),Z.yield(t,13);
case 13:if((L=Z.i)&&"error"in L&&(null==(T=L)?0:null==(U=T.error)?0:U.details))for(I=L.error.details,Y=v(I),W=Y.next();!W.done;W=Y.next())ab=W.value,(Jc=ab["@type"])&&-1<bv.indexOf(Jc)&&(delete ab["@type"],L=ab);x&&a.h.has(x)&&a.h.delete(x);(null==(Kc=b.config)?0:Kc.Je)&&Yu(b.config.Je);if(L||null==(Lc=a.i)||!Lc.Of(b.input,b.Oa)){Z.v(14);break}return Z.yield(a.i.Vf(b.input,b.Oa),15);case 15:L=Z.i;case 14:return iv(a,L,b),Z.return(L||void 0)}})}
function gv(a,b){var c,d,e,f;return z(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Wb)?void 0:d.sessionIndex;var h=g.yield;var k=Sl(0,{sessionIndex:e});if(!(k instanceof Ud)){var l=new Ud(Za);Vd(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},fv(b),f)))})}
function fv(a){var b={"Content-Type":"application/json"};M("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=M("EOM_VISITOR_DATA"):M("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=M("VISITOR_DATA"));M("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");b["X-Youtube-Bootstrap-Logged-In"]=M("LOGGED_IN",!1);M("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=M("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=M("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=M("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&
(b["X-Youtube-Client-Version"]=a),(a=M("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=M("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var jv=new mr("INNERTUBE_TRANSPORT_TOKEN");var kv=["share/get_web_player_share_panel"],lv=["feedback"],mv=["notification/modify_channel_preference"],nv=["browse/edit_playlist"],ov=["subscription/subscribe"],pv=["subscription/unsubscribe"];function qv(){}
w(qv,Nt);qv.prototype.j=function(){return ov};
qv.prototype.h=function(a){return Pr(a,Hk)||void 0};
qv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(qv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function rv(){}
w(rv,Nt);rv.prototype.j=function(){return pv};
rv.prototype.h=function(a){return Pr(a,Gk)||void 0};
rv.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(rv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function sv(){}
w(sv,Nt);sv.prototype.j=function(){return lv};
sv.prototype.h=function(a){return Pr(a,Bk)||void 0};
sv.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(sv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function tv(){}
w(tv,Nt);tv.prototype.j=function(){return mv};
tv.prototype.h=function(a){return Pr(a,Fk)||void 0};
tv.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function uv(){}
w(uv,Nt);uv.prototype.j=function(){return nv};
uv.prototype.h=function(a){return Pr(a,Ek)||void 0};
uv.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function vv(){}
w(vv,Nt);vv.prototype.j=function(){return kv};
vv.prototype.h=function(a){return Pr(a,Dk)};
vv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var wv=new mr("NETWORK_SLI_TOKEN");function xv(a){this.h=a}
xv.prototype.fetch=function(a,b){var c=this,d,e,f;return z(function(g){c.h&&(d=$b(ac(5,pc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;O("wug_networking_gzip_request")&&(e=Hp(b));f=new window.Request(a,e);return g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){Is(h)}))})};
xv.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Rf(),b=b.then(function(c){Is(new mm("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
xv[lr]=[new nr(wv)];var yv=new mr("NETWORK_MANAGER_TOKEN");var zv;function Av(){var a,b,c;return z(function(d){if(1==d.h)return a=sr().resolve(jv),a?d.yield(ev(a),2):(Is(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Is(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Pf;return d.return(c)}Is(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Bv=A.caches,Cv;function Dv(a){var b=a.indexOf(":");return-1===b?{sd:a}:{sd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Ev(){return z(function(a){if(void 0!==Cv)return a.return(Cv);Cv=new Promise(function(b){var c;return z(function(d){switch(d.h){case 1:return xa(d,2),d.yield(Bv.open("test-only"),4);case 4:return d.yield(Bv.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=ya(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Cv)})}
function Fv(a){var b,c,d,e,f,g,h;z(function(k){if(1==k.h)return k.yield(Ev(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(Bv.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Dv(f),h=g.datasyncId,!h||a.includes(h)||b.push(Bv.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function Gv(){var a,b,c,d,e,f,g;return z(function(h){if(1==h.h)return h.yield(Ev(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=om("cache contains other");return h.yield(Bv.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Dv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Hv(){Av().then(function(a){a&&(xo(a),Fv(a),Xt(a))})}
function Iv(){var a=new zq;qi.oa(function(){var b,c,d,e;return z(function(f){switch(f.h){case 1:if(O("ytidb_clear_optimizations_killswitch")){f.v(2);break}b=om("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];xo(g);Fv(g);Xt(g);return f.return()}c=Yt();return f.yield(Gv(),3);case 3:return d=f.i,f.yield(yo(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.wa()?Hv():a.h.add("publicytnetworkstatus-online",Hv,!0,void 0,void 0),f.h=0}})})}
;var Ph=ia(["data-"]);function Jv(a){a&&(a.dataset?a.dataset[Kv("loaded")]="true":Oh(a))}
function Lv(a,b){return a?a.dataset?a.dataset[Kv(b)]:a.getAttribute("data-"+b):null}
var Mv={};function Kv(a){return Mv[a]||(Mv[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Nv=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Ov=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Pv(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Nv,""),c=c.replace(Ov,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Qv(a,b,c)}
function Qv(a,b,c){c=void 0===c?null:c;var d=Rv(a),e=document.getElementById(d),f=e&&Lv(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=fr(d,b),b=""+Na(b),Sv[b]=f),g||(e=Tv(a,d,function(){if(!Lv(e,"loaded")){Jv(e);ir(d);var h=Ta(jr,d);ol(h,0)}},c)))}
function Tv(a,b,c,d){d=void 0===d?null:d;var e=Gd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Uh(e,sk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Uv(a){a=Rv(a);var b=document.getElementById(a);b&&(jr(a),b.parentNode.removeChild(b))}
function Vv(a,b){a&&b&&(a=""+Na(b),(a=Sv[a])&&hr(a))}
function Rv(a){var b=document.createElement("a");Kh(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Yb(a)}
var Sv={};var Wv=[],Xv=!1;function Yv(){if(!O("disable_biscotti_fetch_for_ad_blocker_detection")&&!O("disable_biscotti_fetch_entirely_for_all_web_clients")&&mt()){var a=M("PLAYER_VARS",{});if("1"!=ob(a)&&!nt(a)){var b=function(){Xv=!0;"google_ad_status"in window?Qk("DCLKSTAT",1):Qk("DCLKSTAT",2)};
try{Pv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Wv.push(qi.oa(function(){if(!(Xv||"google_ad_status"in window)){try{Vv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Xv=!0;Qk("DCLKSTAT",3)}},5E3))}}}
function Zv(){var a=Number(M("DCLKSTAT",0));return isNaN(a)?0:a}
;function $v(a){Br.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.la},{from:"document_active",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"flush_logs",action:this.G},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.G},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w($v,Br);$v.prototype.la=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
$v.prototype.m=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
$v.prototype.G=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
$v.prototype.i=function(){this.h=new Map};function aw(a){Br.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.G},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.m},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.G},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.G},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.m},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.m},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
O("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(aw,Br);aw.prototype.i=function(a,b){a(null==b?void 0:b.event);O("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
aw.prototype.h=function(a,b){a(null==b?void 0:b.event);O("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
aw.prototype.m=function(a,b){a(null==b?void 0:b.event)};
aw.prototype.G=function(a,b){a(null==b?void 0:b.event)};function bw(){this.l=new $v;this.m=new aw}
bw.prototype.install=function(){var a=Ga.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.m.install(c)})};function cw(a){ap.call(this,1,arguments);this.csn=a}
w(cw,ap);var jp=new bp("screen-created",cw),dw=[],ew=0,fw=new Map,gw=new Map,hw=new Map;
function iw(a,b,c,d,e){e=void 0===e?!1:e;for(var f=jw({cttAuthInfo:at(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(mb(k)||!k.trackingParams&&!k.veType)&&Is(Error("Child VE logged with no data"));if(O("no_client_ve_attach_unless_shown")){var l=kw(h,b);if(k.veType&&!gw.has(l)&&!hw.has(l)&&!e){fw.set(l,[a,b,c,h]);return}h=kw(c,b);fw.has(h)?lw(c,b):hw.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:eb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?mw("visualElementAttached",f,c):a?As("visualElementAttached",c,a,f):hn("visualElementAttached",c,f)}
function mw(a,b,c){dw.push({Ce:a,payload:c,Uf:void 0,options:b});ew||(ew=kp())}
function lp(a){if(dw){for(var b=v(dw),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,hn(c.Ce,c.payload,c.options));dw.length=0}ew=0}
function kw(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function lw(a,b){a=kw(a,b);fw.has(a)&&(b=fw.get(a)||[],iw(b[0],b[1],b[2],[b[3]],!0),fw.delete(a))}
function jw(a,b){O("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function nw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
nw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Zs(void 0===c?0:c)){a=this.client;d=new Ss({trackingParams:d});var e=void 0;if(O("no_client_ve_attach_unless_shown")){var f=kw(d,c);gw.set(f,!0);lw(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=jw({cttAuthInfo:at(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?mw("visualElementGestured",f,d):a?As("visualElementGestured",d,a,f):hn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
nw.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Ss({trackingParams:a}),b,void 0===c?0:c)};
nw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=Zs(d);a||(a=(a=Ws(void 0===d?0:d))?new Ss({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=jw({cttAuthInfo:at(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?mw("visualElementStateChanged",d,b):a?As("visualElementStateChanged",b,a,d):hn("visualElementStateChanged",b,d))}};
function ow(a,b){if(void 0===b)for(var c=Ys(),d=0;d<c.length;d++)void 0!==c[d]&&ow(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&iw(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function pw(){bw.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));O("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(pw,bw);pw.prototype.j=function(){hn("finalPayload",{csn:Zs()})};
pw.prototype.h=function(){Ms(Ns)};
pw.prototype.i=function(){var a=ow;nw.h||(nw.h=new nw);a(nw.h)};function qw(){}
function rw(){var a=D("ytglobal.storage_");a||(a=new qw,C("ytglobal.storage_",a));return a}
qw.prototype.estimate=function(){var a,b,c;return z(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(sw()):d.return()})};
function sw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
C("ytglobal.storageClass_",qw);function fn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=jl("ytidb_transaction_ended_event_rate_limit_session",.2)}
fn.prototype.Ga=function(a){this.handleError(a)};
fn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":O("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":O("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":tw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=jl("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function tw(a,b){rw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:uw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:uw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function uw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function vw(a,b,c){F.call(this);var d=this;c=c||M("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.s=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=bb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.s)}
w(vw,F);vw.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Wk(d)}}};
vw.prototype.M=function(){window.removeEventListener("message",this.s);F.prototype.M.call(this)};function ww(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new vw(!!M("WIDGET_ID_ENFORCE")),b=this.Fe.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=M("WIDGET_ID"))this.h.sessionId=a}
m=ww.prototype;m.Fe=function(a,b,c){"addEventListener"===a&&b?this.Fc(b[0],c):this.Vc(a,b,c)};
m.Vc=function(){};
m.zc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Fc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.zc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.de=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Cc());this.sendMessage("onReady");cb(this.i,this.zd,this);this.i=[]};
m.Cc=function(){return null};
function xw(a,b){a.sendMessage("infoDelivery",b)}
m.zd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.zd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var yw={},zw=(yw["api.invalidparam"]=2,yw.auth=150,yw["drm.auth"]=150,yw["heartbeat.net"]=150,yw["heartbeat.servererror"]=150,yw["heartbeat.stop"]=150,yw["html5.unsupportedads"]=5,yw["fmt.noneavailable"]=5,yw["fmt.decode"]=5,yw["fmt.unplayable"]=5,yw["html5.missingapi"]=5,yw["html5.unsupportedlive"]=5,yw["drm.unavailable"]=5,yw["mrm.blocked"]=151,yw);var Aw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Bw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Cw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Aw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Dw(a,b,c,d){if(Ma(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Ew(a){ww.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Re.bind(this));this.addEventListener("onVolumeChange",this.Se.bind(this));this.addEventListener("onApiChange",this.Me.bind(this));this.addEventListener("onPlaybackQualityChange",this.Oe.bind(this));this.addEventListener("onPlaybackRateChange",this.Pe.bind(this));this.addEventListener("onStateChange",this.Qe.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Te.bind(this))}
w(Ew,ww);m=Ew.prototype;
m.Vc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Bw(a)){var d=b;if(Ma(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Cw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Cw(e);break;case "loadPlaylist":case "cuePlaylist":e=Dw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Bw(a)&&xw(this,this.Cc())}};
m.Fc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);ww.prototype.Fc.call(this,a,b)};
m.zc=function(a,b){var c=this,d=ww.prototype.zc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.de.bind(this);this.h.h=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?zw[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Cc=function(){if(!this.api)return null;var a=this.api.getApiInterface();hb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Qe=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());xw(this,a)};
m.Oe=function(a){xw(this,{playbackQuality:a})};
m.Pe=function(a){xw(this,{playbackRate:a})};
m.Me=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Se=function(){xw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Re=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());xw(this,a)};
m.Te=function(){var a={sphericalProperties:this.api.getSphericalProperties()};xw(this,a)};
m.dispose=function(){ww.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Fw(a){F.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.vd,this)}
w(Fw,F);m=Fw.prototype;m.start=function(){this.started||this.Z()||(this.started=!0,this.connection.kb("RECEIVING"))};
m.kb=function(a,b){this.started&&!this.Z()&&this.connection.kb(a,b)};
m.vd=function(a,b,c){if(this.started&&!this.Z()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Gw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Hw(a,c))&&this.kb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Ne.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Ne=function(a,b){this.started&&!this.Z()&&this.connection.kb(a,this.Bc(a,b))};
m.Bc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.M=function(){this.connection.unsubscribe("command",this.vd,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);F.prototype.M.call(this)};function Iw(a,b){Fw.call(this,b);this.api=a;this.start()}
w(Iw,Fw);Iw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Iw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Gw(a,b){switch(a){case "loadVideoById":return a=Cw(b),[a];case "cueVideoById":return a=Cw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Dw(b),[a];case "cuePlaylist":return a=Dw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Hw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Iw.prototype.Bc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Fw.prototype.Bc.call(this,a,b)};
Iw.prototype.M=function(){Fw.prototype.M.call(this);delete this.api};function Jw(a){a=void 0===a?!1:a;F.call(this);this.h=new Pi(a);wc(this,this.h)}
Va(Jw,F);Jw.prototype.subscribe=function(a,b,c){return this.Z()?0:this.h.subscribe(a,b,c)};
Jw.prototype.unsubscribe=function(a,b,c){return this.Z()?!1:this.h.unsubscribe(a,b,c)};
Jw.prototype.l=function(a,b){this.Z()||this.h.ab.apply(this.h,arguments)};function Kw(a,b,c){Jw.call(this);this.j=a;this.i=b;this.id=c}
w(Kw,Jw);Kw.prototype.kb=function(a,b){this.Z()||this.j.kb(this.i,this.id,a,b)};
Kw.prototype.M=function(){this.i=this.j=null;Jw.prototype.M.call(this)};function Lw(a,b,c){F.call(this);this.h=a;this.origin=c;this.i=Uq(window,"message",this.j.bind(this));this.connection=new Kw(this,a,b);wc(this,this.connection)}
w(Lw,F);Lw.prototype.kb=function(a,b,c,d){this.Z()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
Lw.prototype.j=function(a){if(!this.Z()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.Z()||c.l("command",b.command,b.data,a.origin)}}}};
Lw.prototype.M=function(){Vq(this.i);this.h=null;F.prototype.M.call(this)};function Mw(){this.state=1;this.h=null}
m=Mw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=vb();d=f?f.createScript(d):d;d=new Ab(d,zb)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,xb("From proto message. b/166824318"),e=Eb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Nw(this,d,e,a.program,b,c)}else Is(Error("Cannot initialize botguard without program"))};
function Nw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Pv(c,function(){window[g]?Ow(a,d,g,e):(a.state=3,Uv(c),Is(new mm("Unable to load Botguard","from "+c)))},f)):b?(f=Gd("SCRIPT"),b instanceof Ab?(b instanceof Ab&&b.constructor===Ab?b=b.h:(Ka(b),b="type_error:SafeScript"),f.textContent=b,Th(f)):f.textContent=b,f.nonce=Wb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Ow(a,d,g,e):(a.state=4,Is(new mm("Unable to load Botguard from JS")))):Is(new mm("Unable to load VM; no url or JS provided"))}
function Ow(a,b,c,d){a.state=5;try{var e=new Gh({program:b,je:c,Ge:O("att_web_record_metrics")});e.We.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&Is(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Id({ed:a}):null};
m.dispose=function(){this.Qc(null);this.state=8};
m.Tc=function(){return!!this.h};
m.Id=function(a){return this.h.Cd(a)};
m.Qc=function(a){uc(this.h);this.h=a};function Pw(){var a=D("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Qw(){Mw.apply(this,arguments)}
w(Qw,Mw);Qw.prototype.Qc=function(a){var b;null==(b=Pw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Cd.bind(a)},C("yt.abuse.playerAttLoader",b),C("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(C("yt.abuse.playerAttLoader",null),C("yt.abuse.playerAttLoaderRun",null))};
Qw.prototype.Tc=function(){return!!Pw()};
Qw.prototype.Id=function(a){return Pw().bgvmc(a)};var Rw=new Qw;function Sw(){return Rw.Tc()}
function Tw(a){a=void 0===a?{}:a;return Rw.invoke(a)}
;function Uw(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||qb(b);this.assets=a.assets||{};this.attrs=a.attrs||qb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Uw.prototype.clone=function(){var a=new Uw,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ka(c)?a[b]=qb(c):a[b]=c}return a};var Vw=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Ww(a){a=a||"";if(window.spf){var b=a.match(Vw);spf.style.load(a,b?b[1]:"",void 0)}else Xw(a)}
function Xw(a){var b=Yw(a),c=document.getElementById(b),d=c&&Lv(c,"loaded");d||c&&!d||(c=Zw(a,b,function(){if(!Lv(c,"loaded")){Jv(c);ir(b);var e=Ta(jr,b);ol(e,0)}}))}
function Zw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=sk(a);Sh(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Yw(a){var b=Gd("A");Kh(b,new Gb(a,Hb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Yb(a)}
;function $w(){F.call(this);this.h=[]}
w($w,F);$w.prototype.M=function(){for(;this.h.length;){var a=this.h.pop();a.target.removeEventListener(a.name,a.callback,void 0)}F.prototype.M.call(this)};function ax(){$w.apply(this,arguments)}
w(ax,$w);function bx(a,b,c,d,e){F.call(this);var f=this;this.l=b;this.webPlayerContextConfig=d;this.vc=e;this.Ba=!1;this.api={};this.ea=this.s=null;this.S=new Pi;this.h={};this.Y=this.ma=this.elementId=this.Ja=this.config=null;this.W=!1;this.j=this.D=null;this.na={};this.wc=["onReady"];this.lastError=null;this.ob=NaN;this.R={};this.Nd=new ax(this);this.da=0;this.i=this.m=a;wc(this,this.S);cx(this);dx(this);wc(this,this.Nd);c?this.da=ol(function(){f.loadNewVideoConfig(c)},0):d&&(ex(this),fx(this))}
w(bx,F);m=bx.prototype;m.getId=function(){return this.l};
m.loadNewVideoConfig=function(a){if(!this.Z()){this.da&&(window.clearTimeout(this.da),this.da=0);var b=a||{};b instanceof Uw||(b=new Uw(b));this.config=b;this.setConfig(a);fx(this);this.isReady()&&gx(this)}};
function ex(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.l,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.l:a.config.attrs.id=a.l);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Ja=a;this.config=hx(a);ex(this);if(!this.ma){var b;this.ma=ix(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=ii(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=ii(Number(a)||a))};
function gx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function jx(a){var b=!0,c=kx(a);c&&a.config&&(a=lx(a),b=Lv(c,"version")===a);return b&&!!D("yt.player.Application.create")}
function fx(a){if(!a.Z()&&!a.W){var b=jx(a);if(b&&"html5"===(kx(a)?"html5":null))a.Y="html5",a.isReady()||mx(a);else if(nx(a),a.Y="html5",b&&a.j&&a.m)a.m.appendChild(a.j),mx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.D=function(){c=!0;var d=ox(a,"player_bootstrap_method")?D("yt.player.Application.createAlternate")||D("yt.player.Application.create"):D("yt.player.Application.create");var e=a.config?hx(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.vc);mx(a)};
a.W=!0;b?a.D():(Pv(lx(a),a.D),(b=px(a))&&Ww(b),qx(a)&&!c&&C("yt.player.Application.create",null))}}}
function kx(a){var b=Fd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function mx(a){if(!a.Z()){var b=kx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.W=!1;if(!ox(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}rx(a)}else a.ob=ol(function(){mx(a)},50)}}
function rx(a){cx(a);a.Ba=!0;var b=kx(a);if(b){a.s=sx(a,b,"addEventListener");a.ea=sx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=sx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.s&&a.s(g,a.h[g]);gx(a);a.ma&&a.ma(a.api);a.S.ab("onReady",a.api)}
function sx(a,b,c){var d=b[c];return function(){var e=Ga.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,a.Ga(new mm("PlayerProxy error in method call",{error:f,method:c,playerId:a.l}),"WARNING"))}}}
function cx(a){a.Ba=!1;if(a.ea)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ea(b,a.h[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.R={};a.s=null;a.ea=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ja};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Ba};
function dx(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){ir("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){ir("WATCH_LATER_VIDEO_REMOVED",b)})}
m.addEventListener=function(a,b){var c=this,d=ix(this,b);d&&(0<=bb(this.wc,a)||this.h[a]||(b=tx(this,a),this.s&&this.s(a,b)),this.S.subscribe(a,d),"onReady"===a&&this.isReady()&&ol(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.Z()||(b=ix(this,b))&&this.S.unsubscribe(a,b)};
function ix(a,b){var c=b;if("string"===typeof b){if(a.na[b])return a.na[b];c=function(){var d=Ga.apply(0,arguments),e=D(b);if(e)try{e.apply(A,d)}catch(f){a.Ga(new mm("PlayerProxy error when executing callback",{error:f}),"ERROR")}};
a.na[b]=c}return c?c:null}
function tx(a,b){var c="ytPlayer"+b+a.l;a.h[b]=c;A[c]=function(d){var e=ol(function(){if(!a.Z()){try{a.S.ab(b,null!=d?d:void 0)}catch(h){a.Ga(new mm("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.l,data:d}),"WARNING")}var f=a.R,g=String(e);g in f&&delete f[g]}},0);
nb(a.R,String(e))};
return c}
m.getPlayerType=function(){return this.Y||(kx(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function nx(a){a.cancel();cx(a);a.Y=null;a.config&&(a.config.loaded=!1);var b=kx(a);b&&(jx(a)||!qx(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.D&&Vv(lx(this),this.D);window.clearTimeout(this.ob);this.W=!1};
m.M=function(){nx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){this.Ga(new mm("PlayerProxy error during disposal",{error:b}),"ERROR")}this.na=null;for(var a in this.h)this.h.hasOwnProperty(a)&&(A[this.h[a]]=null);this.Ja=this.config=this.api=null;delete this.m;delete this.i;F.prototype.M.call(this)};
function qx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function lx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function px(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function ox(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Zk(c||"","&")[b]}
m.Ga=function(a,b){if(ox(this,"web_player_proxy_errors_immediate"))throw a.level=b,a;ox(this,"web_player_proxy_errors_deferred")?(a.level=b,setTimeout(function(){throw a;},0)):"WARNING"===b?Is(a):"ERROR"===b&&Hs(a)};
function hx(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?qb(e):e}return b}
;var ux={},vx="player_uid_"+(1E9*Math.random()>>>0);function wx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Fd(c):c;var e=vx+"_"+Na(c),f=ux[e];if(f&&d)return xx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new bx(c,e,a,b,void 0);ux[e]=f;ir("player-added",f.api);xc(f,function(){delete ux[f.getId()]});
return f.api}
function xx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var yx=null,zx=null,Ax=null;function Bx(){Cx()}
function Dx(){Cx()}
function Cx(){var a=yx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Ex(){yx&&yx.sendAbandonmentPing&&yx.sendAbandonmentPing();M("PL_ATT")&&Rw.dispose();for(var a=qi,b=0,c=Wv.length;b<c;b++)a.qa(Wv[b]);Wv.length=0;Uv("//static.doubleclick.net/instream/ad_status.js");Xv=!1;Qk("DCLKSTAT",0);vc(Ax,zx);yx&&(yx.removeEventListener("onVideoDataChange",Bx),yx.destroy())}
;function Fx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=M("EVENT_ID");d&&(b.ei||(b.ei=d));b&&St(a,b);if(c)return!1;$t(a);if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=kc(a,e);$t(a);f=a+f;var h=void 0===h?bi:h;a:if(h=void 0===h?bi:h,f instanceof Gb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof $h&&b.se(f)){h=new Gb(f,Hb);break a}h=void 0}g=g.location;h=Jh(h||Ib);void 0!==h&&(g.href=h)}return!0}
;C("yt.setConfig",Qk);C("yt.config.set",Qk);C("yt.setMsg",ct);C("yt.msgs.set",ct);C("yt.logging.errors.log",Hs);
C("writeEmbed",function(){var a=M("PLAYER_CONFIG");if(!a){var b=M("PLAYER_VARS");b&&(a={args:b})}wt(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=M("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Vu("embed",["ol"]);c=M("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=dl(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Vu("watch",["pbs","pbu","pbp"]);yx=wx(a,c);yx.addEventListener("onVideoDataChange",Bx);yx.addEventListener("onReady",Dx);a=M("POST_MESSAGE_ID","player");M("ENABLE_JS_API")?Ax=new Ew(yx):M("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(zx=new Lw(window.parent,a,b),Ax=new Iw(yx,zx.connection));Yv();O("ytidb_create_logger_embed_killswitch")||en();a={};pw.h||(pw.h=new pw);
pw.h.install((a.flush_logs={callback:function(){ms()}},a));
Kq();O("ytidb_clear_embedded_player")&&qi.oa(function(){var f,g;if(!zv){var h=sr(),k={Nc:yv,Gd:xv};h.h.set(k.Nc,k);k={dd:{feedbackEndpoint:Jt(sv),modifyChannelNotificationPreferenceEndpoint:Jt(tv),playlistEditEndpoint:Jt(uv),subscribeEndpoint:Jt(qv),unsubscribeEndpoint:Jt(rv),webPlayerShareEntityServiceEndpoint:Jt(vv)}};var l=Ht(),n={};l&&(n.client_location=l);void 0===f&&(f=Rl());void 0===g&&(g=h.resolve(yv));dv(k,g,f,n);f={Nc:jv,Hd:cv.h};h.h.set(f.Nc,f);zv=h.resolve(jv)}Iv()})});
var Gx=Uk(function(){Zu();xt()}),Hx=Uk(function(a){a.persisted||(Zu(),xt())}),Ix=Uk(function(a){O("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Ex():a.persisted||Ex()}),Jx=Uk(Ex);
window.addEventListener?(window.addEventListener("load",Gx),window.addEventListener("pageshow",Hx),window.addEventListener("pagehide",Ix)):window.attachEvent&&(window.attachEvent("onload",Gx),window.attachEvent("onunload",Jx));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=Rk("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new mm(g),e.name="UnhandledWindowError",e.message=
g,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Hs(e):Is(e))};
je=Js;window.addEventListener("unhandledrejection",function(a){Js(a.reason)});
cb(M("ERRORS")||[],function(a){Hs.apply(null,a)});
Qk("ERRORS",[]);O("embeds_web_enable_scheduler_to_player_binary")&&Vm();C("yt.abuse.player.botguardInitialized",D("yt.abuse.player.botguardInitialized")||Sw);C("yt.abuse.player.invokeBotguard",D("yt.abuse.player.invokeBotguard")||Tw);C("yt.abuse.dclkstatus.checkDclkStatus",D("yt.abuse.dclkstatus.checkDclkStatus")||Zv);C("yt.player.exports.navigate",D("yt.player.exports.navigate")||Fx);C("yt.util.activity.init",D("yt.util.activity.init")||Yq);
C("yt.util.activity.getTimeSinceActive",D("yt.util.activity.getTimeSinceActive")||ar);C("yt.util.activity.setTimestamp",D("yt.util.activity.setTimestamp")||Zq);}).call(this);
