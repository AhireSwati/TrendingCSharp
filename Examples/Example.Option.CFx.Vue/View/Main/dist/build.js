!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e,n){"use strict";function r(t){console.log("here"),t.use(a.a)}function i(){var t=new a.a({locale:"ru",messages:o});return console.log("here2"),{i18n:t}}n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var a=n(8),o={en:{message:{hello:"hello world"}},ja:{message:{hello:"こんにちは、世界"}},ru:{message:{hello:"привет, мир!"}}}},function(t,e,n){"use strict";function r(t){n(6)}var i=n(4),a=n(10),o=n(9),s=r,u=o(i.a,a.a,!1,s,null,null);e.a=u.exports},function(t,e){t.exports=Vue},function(t,e){t.exports=glueHelper},function(t,e,n){"use strict";var r={viewModel:Object,__window__:Object};e.a={name:"app",props:r,data:function(){return this.viewModel}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n.n(r),a=n(1),o=n(0),s=n(3),u=n.n(s);n.i(o.a)(i.a),u.a.setOption(n.i(o.b)()),i.a.component("app",a.a)},function(t,e){},function(t,e,n){t.exports=n.p+"810a1b930979de83478be0f458b51dd8.png"},function(t,e,n){"use strict";/*!
 * vue-i18n v7.3.2 
 * (c) 2017 kazuya kawaguchi
 * Released under the MIT License.
 */
function r(t,e){"undefined"!=typeof console&&(console.warn("[vue-i18n] "+t),e&&console.warn(e.stack))}function i(t){return null!==t&&"object"==typeof t}function a(t){return C.call(t)===V}function o(t){return null===t||void 0===t}function s(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n=null,r=null;return 1===t.length?i(t[0])||Array.isArray(t[0])?r=t[0]:"string"==typeof t[0]&&(n=t[0]):2===t.length&&("string"==typeof t[0]&&(n=t[0]),(i(t[1])||Array.isArray(t[1]))&&(r=t[1])),{locale:n,params:r}}function u(t){return t?t>1?1:0:1}function c(t,e){return t=Math.abs(t),2===e?u(t):t?Math.min(t,2):0}function l(t,e){if(!t&&"string"!=typeof t)return null;var n=t.split("|");return e=c(e,n.length),n[e]?n[e].trim():t}function f(t){return JSON.parse(JSON.stringify(t))}function h(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}function p(t,e){return W.call(t,e)}function _(t){for(var e=arguments,n=Object(t),r=1;r<arguments.length;r++){var a=e[r];if(void 0!==a&&null!==a){var o=void 0;for(o in a)p(a,o)&&(i(a[o])?n[o]=_(n[o],a[o]):n[o]=a[o])}}return n}function m(t,e){if(t===e)return!0;var n=i(t),r=i(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var a=Array.isArray(t),o=Array.isArray(e);if(a&&o)return t.length===e.length&&t.every(function(t,n){return m(t,e[n])});if(a||o)return!1;var s=Object.keys(t),u=Object.keys(e);return s.length===u.length&&s.every(function(n){return m(t[n],e[n])})}catch(t){return!1}}function v(t){t.prototype.$t=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.$i18n;return r._t.apply(r,[t,r.locale,r._getMessages(),this].concat(e))},t.prototype.$tc=function(t,e){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];var i=this.$i18n;return i._tc.apply(i,[t,i.locale,i._getMessages(),this,e].concat(n))},t.prototype.$te=function(t,e){var n=this.$i18n;return n._te(t,n.locale,n._getMessages(),e)},t.prototype.$d=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];return(r=this.$i18n).d.apply(r,[t].concat(e));var r},t.prototype.$n=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];return(r=this.$i18n).n.apply(r,[t].concat(e));var r}}function g(t,e,n){y(t,n)&&w(t,e,n)}function d(t,e,n,r){y(t,n)&&(b(t,n)&&m(e.value,e.oldValue)||w(t,e,n))}function y(t,e){var n=e.context;return n?!!n.$i18n||(r("not exist VueI18n instance in Vue instance"),!1):(r("not exist Vue instance in VNode context"),!1)}function b(t,e){var n=e.context;return t._locale===n.$i18n.locale}function w(t,e,n){var i=e.value,a=$(i),o=a.path,s=a.locale,u=a.args;if(!o&&!s&&!u)return void r("not support value type");if(!o)return void r("required `path` in v-t directive");var c=n.context;t._vt=t.textContent=(l=c.$i18n).t.apply(l,[o].concat(F(s,u))),t._locale=c.$i18n.locale;var l}function $(t){var e,n,r;return"string"==typeof t?e=t:a(t)&&(e=t.path,n=t.locale,r=t.args),{path:e,locale:n,args:r}}function F(t,e){var n=[];return t&&n.push(t),e&&(Array.isArray(e)||a(e))&&n.push(e),n}function k(t){M=t;M.version&&Number(M.version.split(".")[0]);k.installed=!0,Object.defineProperty(M.prototype,"$i18n",{get:function(){return this._i18n}}),v(M),M.mixin(R),M.directive("t",{bind:g,update:d}),M.component(I.name,I);var e=M.config.optionMergeStrategies;e.i18n=e.methods}function x(t){for(var e=[],n=0,r="";n<t.length;){var i=t[n++];if("{"===i){r&&e.push({type:"text",value:r}),r="";var a="";for(i=t[n++];"}"!==i;)a+=i,i=t[n++];var o=U.test(a)?"list":z.test(a)?"named":"unknown";e.push({value:a,type:o})}else"%"===i?"{"!==t[n]&&(r+=i):r+=i}return r&&e.push({type:"text",value:r}),e}function T(t,e){var n=[],r=0,a=Array.isArray(e)?"list":i(e)?"named":"unknown";if("unknown"===a)return n;for(;r<t.length;){var o=t[r];switch(o.type){case"text":n.push(o.value);break;case"list":n.push(e[parseInt(o.value,10)]);break;case"named":"named"===a&&n.push(e[o.value])}r++}return n}function D(t){return et.test(t)}function O(t){var e=t.charCodeAt(0);return e!==t.charCodeAt(t.length-1)||34!==e&&39!==e?t:t.slice(1,-1)}function j(t){if(void 0===t||null===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return t;case 95:case 36:case 45:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return e>=97&&e<=122||e>=65&&e<=90?"ident":e>=49&&e<=57?"number":"else"}function L(t){var e=t.trim();return("0"!==t.charAt(0)||!isNaN(t))&&(D(e)?O(e):"*"+e)}function N(t){var e,n,r,i,a,o,s,u=[],c=-1,l=B,f=0,h=[];for(h[q]=function(){void 0!==n&&(u.push(n),n=void 0)},h[J]=function(){void 0===n?n=r:n+=r},h[X]=function(){h[J](),f++},h[H]=function(){if(f>0)f--,l=G,h[J]();else{if(f=0,!1===(n=L(n)))return!1;h[q]()}};null!==l;)if(c++,"\\"!==(e=t[c])||!function(){var e=t[c+1];if(l===K&&"'"===e||l===Q&&'"'===e)return c++,r="\\"+e,h[J](),!0}()){if(i=j(e),s=tt[l],(a=s[i]||s.else||Z)===Z)return;if(l=a[0],(o=h[a[1]])&&(r=a[2],r=void 0===r?e:r,!1===o()))return;if(l===Y)return u}}function A(t){return!!Array.isArray(t)&&0===t.length}var M,C=Object.prototype.toString,V="[object Object]",W=Object.prototype.hasOwnProperty,S="undefined"!=typeof Intl&&void 0!==Intl.DateTimeFormat,E="undefined"!=typeof Intl&&void 0!==Intl.NumberFormat,R={beforeCreate:function(){var t=this.$options;if(t.i18n=t.i18n||(t.__i18n?{}:null),t.i18n){if(t.i18n instanceof rt){if(t.__i18n)try{var e={};t.__i18n.forEach(function(t){e=_(e,JSON.parse(t))}),Object.keys(e).forEach(function(n){t.i18n.mergeLocaleMessage(n,e[n])})}catch(t){}this._i18n=t.i18n,this._i18nWatcher=this._i18n.watchI18nData(),this._i18n.subscribeDataChanging(this),this._subscribing=!0}else if(a(t.i18n)){if(this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof rt&&(t.i18n.root=this.$root.$i18n,t.i18n.fallbackLocale=this.$root.$i18n.fallbackLocale,t.i18n.silentTranslationWarn=this.$root.$i18n.silentTranslationWarn),t.__i18n)try{var n={};t.__i18n.forEach(function(t){n=_(n,JSON.parse(t))}),t.i18n.messages=n}catch(t){}this._i18n=new rt(t.i18n),this._i18nWatcher=this._i18n.watchI18nData(),this._i18n.subscribeDataChanging(this),this._subscribing=!0,(void 0===t.i18n.sync||t.i18n.sync)&&(this._localeWatcher=this.$i18n.watchLocale())}}else this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof rt?(this._i18n=this.$root.$i18n,this._i18n.subscribeDataChanging(this),this._subscribing=!0):t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof rt&&(this._i18n=t.parent.$i18n,this._i18n.subscribeDataChanging(this),this._subscribing=!0)},beforeDestroy:function(){this._i18n&&(this._subscribing&&(this._i18n.unsubscribeDataChanging(this),delete this._subscribing),this._i18nWatcher&&(this._i18nWatcher(),delete this._i18nWatcher),this._localeWatcher&&(this._localeWatcher(),delete this._localeWatcher),this._i18n=null)}},I={name:"i18n",functional:!0,props:{tag:{type:String,default:"span"},path:{type:String,required:!0},locale:{type:String},places:{type:[Array,Object]}},render:function(t,e){var n=e.props,i=e.data,a=e.children,o=e.parent,s=o.$i18n;if(a=(a||[]).filter(function(t){return t.tag||(t.text=t.text.trim())}),!s)return a;var u=n.path,c=n.locale,l={},f=n.places||{},h=Array.isArray(f)?f.length>0:Object.keys(f).length>0,p=a.every(function(t){if(t.data&&t.data.attrs){var e=t.data.attrs.place;return void 0!==e&&""!==e}});return h&&a.length>0&&!p&&r("If places prop is set, all child elements must have place prop set."),Array.isArray(f)?f.forEach(function(t,e){l[e]=t}):Object.keys(f).forEach(function(t){l[t]=f[t]}),a.forEach(function(t,e){var n=p?""+t.data.attrs.place:""+e;l[n]=t}),t(n.tag,i,s.i(u,c,l))}},P=function(){this._caches=Object.create(null)};P.prototype.interpolate=function(t,e){var n=this._caches[t];return n||(n=x(t),this._caches[t]=n),T(n,e)};var U=/^(\d)+/,z=/^(\w)+/,J=0,q=1,X=2,H=3,B=0,G=4,K=5,Q=6,Y=7,Z=8,tt=[];tt[B]={ws:[B],ident:[3,J],"[":[G],eof:[Y]},tt[1]={ws:[1],".":[2],"[":[G],eof:[Y]},tt[2]={ws:[2],ident:[3,J],0:[3,J],number:[3,J]},tt[3]={ident:[3,J],0:[3,J],number:[3,J],ws:[1,q],".":[2,q],"[":[G,q],eof:[Y,q]},tt[G]={"'":[K,J],'"':[Q,J],"[":[G,X],"]":[1,H],eof:Z,else:[G,J]},tt[K]={"'":[G,J],eof:Z,else:[K,J]},tt[Q]={'"':[G,J],eof:Z,else:[Q,J]};var et=/^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/,nt=function(){this._cache=Object.create(null)};nt.prototype.parsePath=function(t){var e=this._cache[t];return e||(e=N(t))&&(this._cache[t]=e),e||[]},nt.prototype.getPathValue=function(t,e){if(!i(t))return null;var n=this.parsePath(e);if(A(n))return null;for(var r=n.length,a=t,o=0;o<r;){var s=a[n[o]];if(void 0===s){a=null;break}a=s,o++}return a};var rt=function(t){var e=this;void 0===t&&(t={});var n=t.locale||"en-US",r=t.fallbackLocale||"en-US",i=t.messages||{},a=t.dateTimeFormats||{},s=t.numberFormats||{};this._vm=null,this._formatter=t.formatter||new P,this._missing=t.missing||null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._fallbackRoot=void 0===t.fallbackRoot||!!t.fallbackRoot,this._silentTranslationWarn=void 0!==t.silentTranslationWarn&&!!t.silentTranslationWarn,this._dateTimeFormatters={},this._numberFormatters={},this._path=new nt,this._dataListeners=[],this._exist=function(t,n){return!(!t||!n)&&!o(e._path.getPathValue(t,n))},this._initVM({locale:n,fallbackLocale:r,messages:i,dateTimeFormats:a,numberFormats:s})},it={vm:{},messages:{},dateTimeFormats:{},numberFormats:{},locale:{},fallbackLocale:{},missing:{},formatter:{},silentTranslationWarn:{}};rt.prototype._initVM=function(t){var e=M.config.silent;M.config.silent=!0,this._vm=new M({data:t}),M.config.silent=e},rt.prototype.subscribeDataChanging=function(t){this._dataListeners.push(t)},rt.prototype.unsubscribeDataChanging=function(t){h(this._dataListeners,t)},rt.prototype.watchI18nData=function(){var t=this;return this._vm.$watch("$data",function(){for(var e=t._dataListeners.length;e--;)M.nextTick(function(){t._dataListeners[e]&&t._dataListeners[e].$forceUpdate()})},{deep:!0})},rt.prototype.watchLocale=function(){if(!this._sync||!this._root)return null;var t=this._vm;return this._root.vm.$watch("locale",function(e){t.$set(t,"locale",e),t.$forceUpdate()},{immediate:!0})},it.vm.get=function(){return this._vm},it.messages.get=function(){return f(this._getMessages())},it.dateTimeFormats.get=function(){return f(this._getDateTimeFormats())},it.numberFormats.get=function(){return f(this._getNumberFormats())},it.locale.get=function(){return this._vm.locale},it.locale.set=function(t){this._vm.$set(this._vm,"locale",t)},it.fallbackLocale.get=function(){return this._vm.fallbackLocale},it.fallbackLocale.set=function(t){this._vm.$set(this._vm,"fallbackLocale",t)},it.missing.get=function(){return this._missing},it.missing.set=function(t){this._missing=t},it.formatter.get=function(){return this._formatter},it.formatter.set=function(t){this._formatter=t},it.silentTranslationWarn.get=function(){return this._silentTranslationWarn},it.silentTranslationWarn.set=function(t){this._silentTranslationWarn=t},rt.prototype._getMessages=function(){return this._vm.messages},rt.prototype._getDateTimeFormats=function(){return this._vm.dateTimeFormats},rt.prototype._getNumberFormats=function(){return this._vm.numberFormats},rt.prototype._warnDefault=function(t,e,n,r){return o(n)?(this.missing&&this.missing.apply(null,[t,e,r]),e):n},rt.prototype._isFallbackRoot=function(t){return!t&&!o(this._root)&&this._fallbackRoot},rt.prototype._interpolate=function(t,e,n,r,i,s){if(!e)return null;var u=this._path.getPathValue(e,n);if(Array.isArray(u))return u;var c;if(o(u)){if(!a(e))return null;if("string"!=typeof(c=e[n]))return null}else{if("string"!=typeof u)return null;c=u}return c.indexOf("@:")>=0&&(c=this._link(t,e,c,r,i,s)),s?this._render(c,i,s):c},rt.prototype._link=function(t,e,n,r,i,a){var o=this,s=n,u=s.match(/(@:[\w\-_|.]+)/g);for(var c in u)if(u.hasOwnProperty(c)){var l=u[c],f=l.substr(2),h=o._interpolate(t,e,f,r,"raw"===i?"string":i,"raw"===i?void 0:a);if(o._isFallbackRoot(h)){if(!o._root)throw Error("unexpected error");var p=o._root;h=p._translate(p._getMessages(),p.locale,p.fallbackLocale,f,r,i,a)}h=o._warnDefault(t,f,h,r),s=h?s.replace(l,h):s}return s},rt.prototype._render=function(t,e,n){var r=this._formatter.interpolate(t,n);return"string"===e?r.join(""):r},rt.prototype._translate=function(t,e,n,r,i,a,s){var u=this._interpolate(e,t[e],r,i,a,s);return o(u)?(u=this._interpolate(n,t[n],r,i,a,s),o(u)?null:u):u},rt.prototype._t=function(t,e,n,r){for(var i=[],a=arguments.length-4;a-- >0;)i[a]=arguments[a+4];if(!t)return"";var o=s.apply(void 0,i),u=o.locale||e,c=this._translate(n,u,this.fallbackLocale,t,r,"string",o.params);if(this._isFallbackRoot(c)){if(!this._root)throw Error("unexpected error");return(l=this._root).t.apply(l,[t].concat(i))}return this._warnDefault(u,t,c,r);var l},rt.prototype.t=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];return(r=this)._t.apply(r,[t,this.locale,this._getMessages(),null].concat(e));var r},rt.prototype._i=function(t,e,n,r,i){var a=this._translate(n,e,this.fallbackLocale,t,r,"raw",i);if(this._isFallbackRoot(a)){if(!this._root)throw Error("unexpected error");return this._root.i(t,e,i)}return this._warnDefault(e,t,a,r)},rt.prototype.i=function(t,e,n){return t?("string"!=typeof e&&(e=this.locale),this._i(t,e,this._getMessages(),null,n)):""},rt.prototype._tc=function(t,e,n,r,i){for(var a=[],o=arguments.length-5;o-- >0;)a[o]=arguments[o+5];return t?(void 0===i&&(i=1),l((s=this)._t.apply(s,[t,e,n,r].concat(a)),i)):"";var s},rt.prototype.tc=function(t,e){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];return(i=this)._tc.apply(i,[t,this.locale,this._getMessages(),null,e].concat(n));var i},rt.prototype._te=function(t,e,n){for(var r=[],i=arguments.length-3;i-- >0;)r[i]=arguments[i+3];var a=s.apply(void 0,r).locale||e;return this._exist(n[a],t)},rt.prototype.te=function(t,e){return this._te(t,this.locale,this._getMessages(),e)},rt.prototype.getLocaleMessage=function(t){return f(this._vm.messages[t]||{})},rt.prototype.setLocaleMessage=function(t,e){this._vm.messages[t]=e},rt.prototype.mergeLocaleMessage=function(t,e){this._vm.messages[t]=M.util.extend(this._vm.messages[t]||{},e)},rt.prototype.getDateTimeFormat=function(t){return f(this._vm.dateTimeFormats[t]||{})},rt.prototype.setDateTimeFormat=function(t,e){this._vm.dateTimeFormats[t]=e},rt.prototype.mergeDateTimeFormat=function(t,e){this._vm.dateTimeFormats[t]=M.util.extend(this._vm.dateTimeFormats[t]||{},e)},rt.prototype._localizeDateTime=function(t,e,n,r,i){var a=e,s=r[a];if((o(s)||o(s[i]))&&(a=n,s=r[a]),o(s)||o(s[i]))return null;var u=s[i],c=a+"__"+i,l=this._dateTimeFormatters[c];return l||(l=this._dateTimeFormatters[c]=new Intl.DateTimeFormat(a,u)),l.format(t)},rt.prototype._d=function(t,e,n){if(!n)return new Intl.DateTimeFormat(e).format(t);var r=this._localizeDateTime(t,e,this.fallbackLocale,this._getDateTimeFormats(),n);if(this._isFallbackRoot(r)){if(!this._root)throw Error("unexpected error");return this._root.d(t,n,e)}return r||""},rt.prototype.d=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.locale,a=null;return 1===e.length?"string"==typeof e[0]?a=e[0]:i(e[0])&&(e[0].locale&&(r=e[0].locale),e[0].key&&(a=e[0].key)):2===e.length&&("string"==typeof e[0]&&(a=e[0]),"string"==typeof e[1]&&(r=e[1])),this._d(t,r,a)},rt.prototype.getNumberFormat=function(t){return f(this._vm.numberFormats[t]||{})},rt.prototype.setNumberFormat=function(t,e){this._vm.numberFormats[t]=e},rt.prototype.mergeNumberFormat=function(t,e){this._vm.numberFormats[t]=M.util.extend(this._vm.numberFormats[t]||{},e)},rt.prototype._localizeNumber=function(t,e,n,r,i){var a=e,s=r[a];if((o(s)||o(s[i]))&&(a=n,s=r[a]),o(s)||o(s[i]))return null;var u=s[i],c=a+"__"+i,l=this._numberFormatters[c];return l||(l=this._numberFormatters[c]=new Intl.NumberFormat(a,u)),l.format(t)},rt.prototype._n=function(t,e,n){if(!n)return new Intl.NumberFormat(e).format(t);var r=this._localizeNumber(t,e,this.fallbackLocale,this._getNumberFormats(),n);if(this._isFallbackRoot(r)){if(!this._root)throw Error("unexpected error");return this._root.n(t,n,e)}return r||""},rt.prototype.n=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.locale,a=null;return 1===e.length?"string"==typeof e[0]?a=e[0]:i(e[0])&&(e[0].locale&&(r=e[0].locale),e[0].key&&(a=e[0].key)):2===e.length&&("string"==typeof e[0]&&(a=e[0]),"string"==typeof e[1]&&(r=e[1])),this._n(t,r,a)},Object.defineProperties(rt.prototype,it),rt.availabilities={dateTimeFormat:S,numberFormat:E},rt.install=k,rt.version="7.3.2","undefined"!=typeof window&&window.Vue&&window.Vue.use(rt),e.a=rt},function(t,e){t.exports=function(t,e,n,r,i,a){var o,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId=i);var l;if(a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):r&&(l=r),l){var f=c.functional,h=f?c.render:c.beforeCreate;f?(c._injectStyles=l,c.render=function(t,e){return l.call(e),h(t,e)}):c.beforeCreate=h?[].concat(h,l):[l]}return{esModule:o,exports:s,options:c}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{attrs:{src:n(7)}}),t._v(" "),r("p",[t._v(t._s(t.$t("message.hello")))]),t._v(" "),r("h1",[t._v(t._s(t.msg))]),t._v(" "),r("h2",[t._v("Related Links")]),t._v(" "),t._m(0)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{target:"_blank",href:"https://vuejs.org"}},[t._v("Core Vue Docs")])]),t._v(" "),n("li",[n("a",{attrs:{target:"_blank",href:"https://forum.vuejs.org"}},[t._v("Vue Forum")])]),t._v(" "),n("li",[n("a",{attrs:{target:"_blank",href:"https://github.com/David-Desmaisons/Neutronium"}},[t._v("Neutronium")])]),t._v(" "),n("li",[n("a",{attrs:{target:"_blank",href:"https://github.com/David-Desmaisons/neutronium-vue"}},[t._v("Neutronium Vue template")])]),t._v(" "),n("li",[n("a",{attrs:{target:"_blank",href:"https://github.com/David-Desmaisons/NeutoniumDemo"}},[t._v("Neutronium Vue application demo")])])])}],a={render:r,staticRenderFns:i};e.a=a}]);