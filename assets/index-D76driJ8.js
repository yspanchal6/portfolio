(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function l(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(u){if(u.ep)return;u.ep=!0;const h=l(u);fetch(u.href,h)}})();var ou={exports:{}},Ms={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function o1(){if(Bp)return Ms;Bp=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(o,u,h){var d=null;if(h!==void 0&&(d=""+h),u.key!==void 0&&(d=""+u.key),"key"in u){h={};for(var p in u)p!=="key"&&(h[p]=u[p])}else h=u;return u=h.ref,{$$typeof:a,type:o,key:d,ref:u!==void 0?u:null,props:h}}return Ms.Fragment=i,Ms.jsx=l,Ms.jsxs=l,Ms}var Hp;function r1(){return Hp||(Hp=1,ou.exports=o1()),ou.exports}var f=r1(),ru={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function c1(){if(Yp)return he;Yp=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function T(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,V={};function H(N,L,I){this.props=N,this.context=L,this.refs=V,this.updater=I||C}H.prototype.isReactComponent={},H.prototype.setState=function(N,L){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,L,"setState")},H.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function K(){}K.prototype=H.prototype;function G(N,L,I){this.props=N,this.context=L,this.refs=V,this.updater=I||C}var q=G.prototype=new K;q.constructor=G,k(q,H.prototype),q.isPureReactComponent=!0;var J=Array.isArray;function ue(){}var $={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function ie(N,L,I){var F=I.ref;return{$$typeof:a,type:N,key:L,ref:F!==void 0?F:null,props:I}}function se(N,L){return ie(N.type,L,N.props)}function xe(N){return typeof N=="object"&&N!==null&&N.$$typeof===a}function be(N){var L={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(I){return L[I]})}var Ze=/\/+/g;function He(N,L){return typeof N=="object"&&N!==null&&N.key!=null?be(""+N.key):L.toString(36)}function De(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(ue,ue):(N.status="pending",N.then(function(L){N.status==="pending"&&(N.status="fulfilled",N.value=L)},function(L){N.status==="pending"&&(N.status="rejected",N.reason=L)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function D(N,L,I,F,le){var re=typeof N;(re==="undefined"||re==="boolean")&&(N=null);var Ne=!1;if(N===null)Ne=!0;else switch(re){case"bigint":case"string":case"number":Ne=!0;break;case"object":switch(N.$$typeof){case a:case i:Ne=!0;break;case b:return Ne=N._init,D(Ne(N._payload),L,I,F,le)}}if(Ne)return le=le(N),Ne=F===""?"."+He(N,0):F,J(le)?(I="",Ne!=null&&(I=Ne.replace(Ze,"$&/")+"/"),D(le,L,I,"",function(Dn){return Dn})):le!=null&&(xe(le)&&(le=se(le,I+(le.key==null||N&&N.key===le.key?"":(""+le.key).replace(Ze,"$&/")+"/")+Ne)),L.push(le)),1;Ne=0;var nt=F===""?".":F+":";if(J(N))for(var ge=0;ge<N.length;ge++)F=N[ge],re=nt+He(F,ge),Ne+=D(F,L,I,re,le);else if(ge=T(N),typeof ge=="function")for(N=ge.call(N),ge=0;!(F=N.next()).done;)F=F.value,re=nt+He(F,ge++),Ne+=D(F,L,I,re,le);else if(re==="object"){if(typeof N.then=="function")return D(De(N),L,I,F,le);throw L=String(N),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return Ne}function Q(N,L,I){if(N==null)return N;var F=[],le=0;return D(N,F,"","",function(re){return L.call(I,re,le++)}),F}function P(N){if(N._status===-1){var L=N._result;L=L(),L.then(function(I){(N._status===0||N._status===-1)&&(N._status=1,N._result=I)},function(I){(N._status===0||N._status===-1)&&(N._status=2,N._result=I)}),N._status===-1&&(N._status=0,N._result=L)}if(N._status===1)return N._result.default;throw N._result}var de=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},X={map:Q,forEach:function(N,L,I){Q(N,function(){L.apply(this,arguments)},I)},count:function(N){var L=0;return Q(N,function(){L++}),L},toArray:function(N){return Q(N,function(L){return L})||[]},only:function(N){if(!xe(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return he.Activity=v,he.Children=X,he.Component=H,he.Fragment=l,he.Profiler=u,he.PureComponent=G,he.StrictMode=o,he.Suspense=y,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,he.__COMPILER_RUNTIME={__proto__:null,c:function(N){return $.H.useMemoCache(N)}},he.cache=function(N){return function(){return N.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(N,L,I){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var F=k({},N.props),le=N.key;if(L!=null)for(re in L.key!==void 0&&(le=""+L.key),L)!B.call(L,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&L.ref===void 0||(F[re]=L[re]);var re=arguments.length-2;if(re===1)F.children=I;else if(1<re){for(var Ne=Array(re),nt=0;nt<re;nt++)Ne[nt]=arguments[nt+2];F.children=Ne}return ie(N.type,le,F)},he.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:h,_context:N},N},he.createElement=function(N,L,I){var F,le={},re=null;if(L!=null)for(F in L.key!==void 0&&(re=""+L.key),L)B.call(L,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(le[F]=L[F]);var Ne=arguments.length-2;if(Ne===1)le.children=I;else if(1<Ne){for(var nt=Array(Ne),ge=0;ge<Ne;ge++)nt[ge]=arguments[ge+2];le.children=nt}if(N&&N.defaultProps)for(F in Ne=N.defaultProps,Ne)le[F]===void 0&&(le[F]=Ne[F]);return ie(N,re,le)},he.createRef=function(){return{current:null}},he.forwardRef=function(N){return{$$typeof:p,render:N}},he.isValidElement=xe,he.lazy=function(N){return{$$typeof:b,_payload:{_status:-1,_result:N},_init:P}},he.memo=function(N,L){return{$$typeof:g,type:N,compare:L===void 0?null:L}},he.startTransition=function(N){var L=$.T,I={};$.T=I;try{var F=N(),le=$.S;le!==null&&le(I,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(ue,de)}catch(re){de(re)}finally{L!==null&&I.types!==null&&(L.types=I.types),$.T=L}},he.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},he.use=function(N){return $.H.use(N)},he.useActionState=function(N,L,I){return $.H.useActionState(N,L,I)},he.useCallback=function(N,L){return $.H.useCallback(N,L)},he.useContext=function(N){return $.H.useContext(N)},he.useDebugValue=function(){},he.useDeferredValue=function(N,L){return $.H.useDeferredValue(N,L)},he.useEffect=function(N,L){return $.H.useEffect(N,L)},he.useEffectEvent=function(N){return $.H.useEffectEvent(N)},he.useId=function(){return $.H.useId()},he.useImperativeHandle=function(N,L,I){return $.H.useImperativeHandle(N,L,I)},he.useInsertionEffect=function(N,L){return $.H.useInsertionEffect(N,L)},he.useLayoutEffect=function(N,L){return $.H.useLayoutEffect(N,L)},he.useMemo=function(N,L){return $.H.useMemo(N,L)},he.useOptimistic=function(N,L){return $.H.useOptimistic(N,L)},he.useReducer=function(N,L,I){return $.H.useReducer(N,L,I)},he.useRef=function(N){return $.H.useRef(N)},he.useState=function(N){return $.H.useState(N)},he.useSyncExternalStore=function(N,L,I){return $.H.useSyncExternalStore(N,L,I)},he.useTransition=function(){return $.H.useTransition()},he.version="19.2.6",he}var Gp;function nf(){return Gp||(Gp=1,ru.exports=c1()),ru.exports}var Y=nf(),cu={exports:{}},Cs={},uu={exports:{}},fu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function u1(){return qp||(qp=1,(function(a){function i(D,Q){var P=D.length;D.push(Q);e:for(;0<P;){var de=P-1>>>1,X=D[de];if(0<u(X,Q))D[de]=Q,D[P]=X,P=de;else break e}}function l(D){return D.length===0?null:D[0]}function o(D){if(D.length===0)return null;var Q=D[0],P=D.pop();if(P!==Q){D[0]=P;e:for(var de=0,X=D.length,N=X>>>1;de<N;){var L=2*(de+1)-1,I=D[L],F=L+1,le=D[F];if(0>u(I,P))F<X&&0>u(le,I)?(D[de]=le,D[F]=P,de=F):(D[de]=I,D[L]=P,de=L);else if(F<X&&0>u(le,P))D[de]=le,D[F]=P,de=F;else break e}}return Q}function u(D,Q){var P=D.sortIndex-Q.sortIndex;return P!==0?P:D.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var d=Date,p=d.now();a.unstable_now=function(){return d.now()-p}}var y=[],g=[],b=1,v=null,S=3,T=!1,C=!1,k=!1,V=!1,H=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function q(D){for(var Q=l(g);Q!==null;){if(Q.callback===null)o(g);else if(Q.startTime<=D)o(g),Q.sortIndex=Q.expirationTime,i(y,Q);else break;Q=l(g)}}function J(D){if(k=!1,q(D),!C)if(l(y)!==null)C=!0,ue||(ue=!0,be());else{var Q=l(g);Q!==null&&De(J,Q.startTime-D)}}var ue=!1,$=-1,B=5,ie=-1;function se(){return V?!0:!(a.unstable_now()-ie<B)}function xe(){if(V=!1,ue){var D=a.unstable_now();ie=D;var Q=!0;try{e:{C=!1,k&&(k=!1,K($),$=-1),T=!0;var P=S;try{t:{for(q(D),v=l(y);v!==null&&!(v.expirationTime>D&&se());){var de=v.callback;if(typeof de=="function"){v.callback=null,S=v.priorityLevel;var X=de(v.expirationTime<=D);if(D=a.unstable_now(),typeof X=="function"){v.callback=X,q(D),Q=!0;break t}v===l(y)&&o(y),q(D)}else o(y);v=l(y)}if(v!==null)Q=!0;else{var N=l(g);N!==null&&De(J,N.startTime-D),Q=!1}}break e}finally{v=null,S=P,T=!1}Q=void 0}}finally{Q?be():ue=!1}}}var be;if(typeof G=="function")be=function(){G(xe)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,He=Ze.port2;Ze.port1.onmessage=xe,be=function(){He.postMessage(null)}}else be=function(){H(xe,0)};function De(D,Q){$=H(function(){D(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(D){switch(S){case 1:case 2:case 3:var Q=3;break;default:Q=S}var P=S;S=Q;try{return D()}finally{S=P}},a.unstable_requestPaint=function(){V=!0},a.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var P=S;S=D;try{return Q()}finally{S=P}},a.unstable_scheduleCallback=function(D,Q,P){var de=a.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?de+P:de):P=de,D){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=P+X,D={id:b++,callback:Q,priorityLevel:D,startTime:P,expirationTime:X,sortIndex:-1},P>de?(D.sortIndex=P,i(g,D),l(y)===null&&D===l(g)&&(k?(K($),$=-1):k=!0,De(J,P-de))):(D.sortIndex=X,i(y,D),C||T||(C=!0,ue||(ue=!0,be()))),D},a.unstable_shouldYield=se,a.unstable_wrapCallback=function(D){var Q=S;return function(){var P=S;S=Q;try{return D.apply(this,arguments)}finally{S=P}}}})(fu)),fu}var Xp;function f1(){return Xp||(Xp=1,uu.exports=u1()),uu.exports}var du={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function d1(){if(Kp)return ht;Kp=1;var a=nf();function i(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)g+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function h(y,g,b){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:v==null?null:""+v,children:y,containerInfo:g,implementation:b}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ht.createPortal=function(y,g){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return h(y,g,null,b)},ht.flushSync=function(y){var g=d.T,b=o.p;try{if(d.T=null,o.p=2,y)return y()}finally{d.T=g,o.p=b,o.d.f()}},ht.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(y,g))},ht.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},ht.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var b=g.as,v=p(b,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,T=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;b==="style"?o.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:T}):b==="script"&&o.d.X(y,{crossOrigin:v,integrity:S,fetchPriority:T,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ht.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var b=p(g.as,g.crossOrigin);o.d.M(y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(y)},ht.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var b=g.as,v=p(b,g.crossOrigin);o.d.L(y,b,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ht.preloadModule=function(y,g){if(typeof y=="string")if(g){var b=p(g.as,g.crossOrigin);o.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(y)},ht.requestFormReset=function(y){o.d.r(y)},ht.unstable_batchedUpdates=function(y,g){return y(g)},ht.useFormState=function(y,g,b){return d.H.useFormState(y,g,b)},ht.useFormStatus=function(){return d.H.useHostTransitionStatus()},ht.version="19.2.6",ht}var Qp;function h1(){if(Qp)return du.exports;Qp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),du.exports=d1(),du.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function m1(){if(Zp)return Cs;Zp=1;var a=f1(),i=nf(),l=h1();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(h(e)!==e)throw Error(o(188))}function g(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,s=t;;){var r=n.return;if(r===null)break;var c=r.alternate;if(c===null){if(s=r.return,s!==null){n=s;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===n)return y(r),e;if(c===s)return y(r),t;c=c.sibling}throw Error(o(188))}if(n.return!==s.return)n=r,s=c;else{for(var m=!1,x=r.child;x;){if(x===n){m=!0,n=r,s=c;break}if(x===s){m=!0,s=r,n=c;break}x=x.sibling}if(!m){for(x=c.child;x;){if(x===n){m=!0,n=c,s=r;break}if(x===s){m=!0,s=c,n=r;break}x=x.sibling}if(!m)throw Error(o(189))}}if(n.alternate!==s)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),G=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),xe=Symbol.iterator;function be(e){return e===null||typeof e!="object"?null:(e=xe&&e[xe]||e["@@iterator"],typeof e=="function"?e:null)}var Ze=Symbol.for("react.client.reference");function He(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ze?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case H:return"Profiler";case V:return"StrictMode";case J:return"Suspense";case ue:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case G:return e.displayName||"Context";case K:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:He(e.type)||"Memo";case B:t=e._payload,e=e._init;try{return He(e(t))}catch{}}return null}var De=Array.isArray,D=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},de=[],X=-1;function N(e){return{current:e}}function L(e){0>X||(e.current=de[X],de[X]=null,X--)}function I(e,t){X++,de[X]=e.current,e.current=t}var F=N(null),le=N(null),re=N(null),Ne=N(null);function nt(e,t){switch(I(re,t),I(le,e),I(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?rp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=rp(t),e=cp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(F),I(F,e)}function ge(){L(F),L(le),L(re)}function Dn(e){e.memoizedState!==null&&I(Ne,e);var t=F.current,n=cp(t,e.type);t!==n&&(I(le,e),I(F,n))}function un(e){le.current===e&&(L(F),L(le)),Ne.current===e&&(L(Ne),Ns._currentValue=P)}var Rn,Ha;function Ot(e){if(Rn===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rn=t&&t[1]||"",Ha=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rn+e+Ha}var Xo=!1;function Ko(e,t){if(!e||Xo)return"";Xo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(R){var _=R}Reflect.construct(e,[],U)}else{try{U.call()}catch(R){_=R}e.call(U.prototype)}}else{try{throw Error()}catch(R){_=R}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(R){if(R&&_&&typeof R.stack=="string")return[R.stack,_.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),m=c[0],x=c[1];if(m&&x){var w=m.split(`
`),M=x.split(`
`);for(r=s=0;s<w.length&&!w[s].includes("DetermineComponentFrameRoot");)s++;for(;r<M.length&&!M[r].includes("DetermineComponentFrameRoot");)r++;if(s===w.length||r===M.length)for(s=w.length-1,r=M.length-1;1<=s&&0<=r&&w[s]!==M[r];)r--;for(;1<=s&&0<=r;s--,r--)if(w[s]!==M[r]){if(s!==1||r!==1)do if(s--,r--,0>r||w[s]!==M[r]){var z=`
`+w[s].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=s&&0<=r);break}}}finally{Xo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ot(n):""}function Ux(e,t){switch(e.tag){case 26:case 27:case 5:return Ot(e.type);case 16:return Ot("Lazy");case 13:return e.child!==t&&t!==null?Ot("Suspense Fallback"):Ot("Suspense");case 19:return Ot("SuspenseList");case 0:case 15:return Ko(e.type,!1);case 11:return Ko(e.type.render,!1);case 1:return Ko(e.type,!0);case 31:return Ot("Activity");default:return""}}function Bf(e){try{var t="",n=null;do t+=Ux(e,n),n=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Qo=Object.prototype.hasOwnProperty,Zo=a.unstable_scheduleCallback,Io=a.unstable_cancelCallback,Bx=a.unstable_shouldYield,Hx=a.unstable_requestPaint,Nt=a.unstable_now,Yx=a.unstable_getCurrentPriorityLevel,Hf=a.unstable_ImmediatePriority,Yf=a.unstable_UserBlockingPriority,Is=a.unstable_NormalPriority,Gx=a.unstable_LowPriority,Gf=a.unstable_IdlePriority,qx=a.log,Xx=a.unstable_setDisableYieldValue,Vi=null,jt=null;function zn(e){if(typeof qx=="function"&&Xx(e),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode(Vi,e)}catch{}}var At=Math.clz32?Math.clz32:Zx,Kx=Math.log,Qx=Math.LN2;function Zx(e){return e>>>=0,e===0?32:31-(Kx(e)/Qx|0)|0}var Js=256,Ps=262144,Fs=4194304;function ha(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $s(e,t,n){var s=e.pendingLanes;if(s===0)return 0;var r=0,c=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var x=s&134217727;return x!==0?(s=x&~c,s!==0?r=ha(s):(m&=x,m!==0?r=ha(m):n||(n=x&~e,n!==0&&(r=ha(n))))):(x=s&~c,x!==0?r=ha(x):m!==0?r=ha(m):n||(n=s&~e,n!==0&&(r=ha(n)))),r===0?0:t!==0&&t!==r&&(t&c)===0&&(c=r&-r,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:r}function Li(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ix(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qf(){var e=Fs;return Fs<<=1,(Fs&62914560)===0&&(Fs=4194304),e}function Jo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ui(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Jx(e,t,n,s,r,c){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,w=e.expirationTimes,M=e.hiddenUpdates;for(n=m&~n;0<n;){var z=31-At(n),U=1<<z;x[z]=0,w[z]=-1;var _=M[z];if(_!==null)for(M[z]=null,z=0;z<_.length;z++){var R=_[z];R!==null&&(R.lane&=-536870913)}n&=~U}s!==0&&Xf(e,s,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(m&~t))}function Xf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-At(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|n&261930}function Kf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-At(n),r=1<<s;r&t|e[s]&t&&(e[s]|=t),n&=~r}}function Qf(e,t){var n=t&-t;return n=(n&42)!==0?1:Po(n),(n&(e.suspendedLanes|t))!==0?0:n}function Po(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zf(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Rp(e.type))}function If(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var kn=Math.random().toString(36).slice(2),st="__reactFiber$"+kn,yt="__reactProps$"+kn,Ya="__reactContainer$"+kn,$o="__reactEvents$"+kn,Px="__reactListeners$"+kn,Fx="__reactHandles$"+kn,Jf="__reactResources$"+kn,Bi="__reactMarker$"+kn;function Wo(e){delete e[st],delete e[yt],delete e[$o],delete e[Px],delete e[Fx]}function Ga(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ya]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gp(e);e!==null;){if(n=e[st])return n;e=gp(e)}return t}e=n,n=e.parentNode}return null}function qa(e){if(e=e[st]||e[Ya]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Hi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Xa(e){var t=e[Jf];return t||(t=e[Jf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function at(e){e[Bi]=!0}var Pf=new Set,Ff={};function ma(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(Ff[e]=t,e=0;e<t.length;e++)Pf.add(t[e])}var $x=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$f={},Wf={};function Wx(e){return Qo.call(Wf,e)?!0:Qo.call($f,e)?!1:$x.test(e)?Wf[e]=!0:($f[e]=!0,!1)}function Ws(e,t,n){if(Wx(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function el(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function fn(e,t,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+s)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ed(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function eb(e,t,n){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var r=s.get,c=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(m){n=""+m,c.call(this,m)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function er(e){if(!e._valueTracker){var t=ed(e)?"checked":"value";e._valueTracker=eb(e,t,""+e[t])}}function td(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=ed(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function tl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var tb=/[\n"\\]/g;function Lt(e){return e.replace(tb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function tr(e,t,n,s,r,c,m,x){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?nr(e,m,Vt(t)):n!=null?nr(e,m,Vt(n)):s!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Vt(x):e.removeAttribute("name")}function nd(e,t,n,s,r,c,m,x){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){er(e);return}n=n!=null?""+Vt(n):"",t=t!=null?""+Vt(t):n,x||t===e.value||(e.value=t),e.defaultValue=t}s=s??r,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=x?e.checked:!!s,e.defaultChecked=!!s,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),er(e)}function nr(e,t,n){t==="number"&&tl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Qa(e,t,n,s){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&s&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function ad(e,t,n){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Vt(n):""}function id(e,t,n,s){if(t==null){if(s!=null){if(n!=null)throw Error(o(92));if(De(s)){if(1<s.length)throw Error(o(93));s=s[0]}n=s}n==null&&(n=""),t=n}n=Vt(t),e.defaultValue=n,s=e.textContent,s===n&&s!==""&&s!==null&&(e.value=s),er(e)}function Za(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sd(e,t,n){var s=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,n):typeof n!="number"||n===0||nb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ld(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var s in n)!n.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var r in t)s=t[r],t.hasOwnProperty(r)&&n[r]!==s&&sd(e,r,s)}else for(var c in t)t.hasOwnProperty(c)&&sd(e,c,t[c])}function ar(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ab=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ib=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(e){return ib.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var ir=null;function sr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ia=null,Ja=null;function od(e){var t=qa(e);if(t&&(e=t.stateNode)){var n=e[yt]||null;e:switch(e=t.stateNode,t.type){case"input":if(tr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Lt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var r=s[yt]||null;if(!r)throw Error(o(90));tr(s,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)s=n[t],s.form===e.form&&td(s)}break e;case"textarea":ad(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Qa(e,!!n.multiple,t,!1)}}}var lr=!1;function rd(e,t,n){if(lr)return e(t,n);lr=!0;try{var s=e(t);return s}finally{if(lr=!1,(Ia!==null||Ja!==null)&&(ql(),Ia&&(t=Ia,e=Ja,Ja=Ia=null,od(t),e)))for(t=0;t<e.length;t++)od(e[t])}}function Yi(e,t){var n=e.stateNode;if(n===null)return null;var s=n[yt]||null;if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),or=!1;if(hn)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){or=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{or=!1}var On=null,rr=null,al=null;function cd(){if(al)return al;var e,t=rr,n=t.length,s,r="value"in On?On.value:On.textContent,c=r.length;for(e=0;e<n&&t[e]===r[e];e++);var m=n-e;for(s=1;s<=m&&t[n-s]===r[c-s];s++);return al=r.slice(e,1<s?1-s:void 0)}function il(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function ud(){return!1}function xt(e){function t(n,s,r,c,m){this._reactName=n,this._targetInst=r,this.type=s,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?sl:ud,this.isPropagationStopped=ud,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),t}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=xt(pa),qi=v({},pa,{view:0,detail:0}),sb=xt(qi),cr,ur,Xi,ol=v({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xi&&(Xi&&e.type==="mousemove"?(cr=e.screenX-Xi.screenX,ur=e.screenY-Xi.screenY):ur=cr=0,Xi=e),cr)},movementY:function(e){return"movementY"in e?e.movementY:ur}}),fd=xt(ol),lb=v({},ol,{dataTransfer:0}),ob=xt(lb),rb=v({},qi,{relatedTarget:0}),fr=xt(rb),cb=v({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),ub=xt(cb),fb=v({},pa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),db=xt(fb),hb=v({},pa,{data:0}),dd=xt(hb),mb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gb[e])?!!t[e]:!1}function dr(){return yb}var xb=v({},qi,{key:function(e){if(e.key){var t=mb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dr,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bb=xt(xb),vb=v({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hd=xt(vb),Sb=v({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dr}),wb=xt(Sb),Tb=v({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nb=xt(Tb),jb=v({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ab=xt(jb),Eb=v({},pa,{newState:0,oldState:0}),Mb=xt(Eb),Cb=[9,13,27,32],hr=hn&&"CompositionEvent"in window,Ki=null;hn&&"documentMode"in document&&(Ki=document.documentMode);var _b=hn&&"TextEvent"in window&&!Ki,md=hn&&(!hr||Ki&&8<Ki&&11>=Ki),pd=" ",gd=!1;function yd(e,t){switch(e){case"keyup":return Cb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function Db(e,t){switch(e){case"compositionend":return xd(t);case"keypress":return t.which!==32?null:(gd=!0,pd);case"textInput":return e=t.data,e===pd&&gd?null:e;default:return null}}function Rb(e,t){if(Pa)return e==="compositionend"||!hr&&yd(e,t)?(e=cd(),al=rr=On=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return md&&t.locale!=="ko"?null:t.data;default:return null}}var zb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zb[e.type]:t==="textarea"}function vd(e,t,n,s){Ia?Ja?Ja.push(s):Ja=[s]:Ia=s,t=Pl(t,"onChange"),0<t.length&&(n=new ll("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Qi=null,Zi=null;function kb(e){np(e,0)}function rl(e){var t=Hi(e);if(td(t))return e}function Sd(e,t){if(e==="change")return t}var wd=!1;if(hn){var mr;if(hn){var pr="oninput"in document;if(!pr){var Td=document.createElement("div");Td.setAttribute("oninput","return;"),pr=typeof Td.oninput=="function"}mr=pr}else mr=!1;wd=mr&&(!document.documentMode||9<document.documentMode)}function Nd(){Qi&&(Qi.detachEvent("onpropertychange",jd),Zi=Qi=null)}function jd(e){if(e.propertyName==="value"&&rl(Zi)){var t=[];vd(t,Zi,e,sr(e)),rd(kb,t)}}function Ob(e,t,n){e==="focusin"?(Nd(),Qi=t,Zi=n,Qi.attachEvent("onpropertychange",jd)):e==="focusout"&&Nd()}function Vb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Zi)}function Lb(e,t){if(e==="click")return rl(t)}function Ub(e,t){if(e==="input"||e==="change")return rl(t)}function Bb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Bb;function Ii(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var r=n[s];if(!Qo.call(t,r)||!Et(e[r],t[r]))return!1}return!0}function Ad(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ed(e,t){var n=Ad(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ad(n)}}function Md(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Md(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=tl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tl(e.document)}return t}function gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Hb=hn&&"documentMode"in document&&11>=document.documentMode,Fa=null,yr=null,Ji=null,xr=!1;function _d(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xr||Fa==null||Fa!==tl(s)||(s=Fa,"selectionStart"in s&&gr(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ji&&Ii(Ji,s)||(Ji=s,s=Pl(yr,"onSelect"),0<s.length&&(t=new ll("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=Fa)))}function ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $a={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionrun:ga("Transition","TransitionRun"),transitionstart:ga("Transition","TransitionStart"),transitioncancel:ga("Transition","TransitionCancel"),transitionend:ga("Transition","TransitionEnd")},br={},Dd={};hn&&(Dd=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function ya(e){if(br[e])return br[e];if(!$a[e])return e;var t=$a[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dd)return br[e]=t[n];return e}var Rd=ya("animationend"),zd=ya("animationiteration"),kd=ya("animationstart"),Yb=ya("transitionrun"),Gb=ya("transitionstart"),qb=ya("transitioncancel"),Od=ya("transitionend"),Vd=new Map,vr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vr.push("scrollEnd");function It(e,t){Vd.set(e,t),ma(t,[e])}var cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ut=[],Wa=0,Sr=0;function ul(){for(var e=Wa,t=Sr=Wa=0;t<e;){var n=Ut[t];Ut[t++]=null;var s=Ut[t];Ut[t++]=null;var r=Ut[t];Ut[t++]=null;var c=Ut[t];if(Ut[t++]=null,s!==null&&r!==null){var m=s.pending;m===null?r.next=r:(r.next=m.next,m.next=r),s.pending=r}c!==0&&Ld(n,r,c)}}function fl(e,t,n,s){Ut[Wa++]=e,Ut[Wa++]=t,Ut[Wa++]=n,Ut[Wa++]=s,Sr|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function wr(e,t,n,s){return fl(e,t,n,s),dl(e)}function xa(e,t){return fl(e,null,null,t),dl(e)}function Ld(e,t,n){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n);for(var r=!1,c=e.return;c!==null;)c.childLanes|=n,s=c.alternate,s!==null&&(s.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&t!==null&&(r=31-At(n),e=c.hiddenUpdates,s=e[r],s===null?e[r]=[t]:s.push(t),t.lane=n|536870912),c):null}function dl(e){if(50<ys)throw ys=0,Dc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ei={};function Xb(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,n,s){return new Xb(e,t,n,s)}function Tr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mn(e,t){var n=e.alternate;return n===null?(n=Mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ud(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hl(e,t,n,s,r,c){var m=0;if(s=e,typeof e=="function")Tr(e)&&(m=1);else if(typeof e=="string")m=Jv(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=Mt(31,n,t,r),e.elementType=ie,e.lanes=c,e;case k:return ba(n.children,r,c,t);case V:m=8,r|=24;break;case H:return e=Mt(12,n,t,r|2),e.elementType=H,e.lanes=c,e;case J:return e=Mt(13,n,t,r),e.elementType=J,e.lanes=c,e;case ue:return e=Mt(19,n,t,r),e.elementType=ue,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:m=10;break e;case K:m=9;break e;case q:m=11;break e;case $:m=14;break e;case B:m=16,s=null;break e}m=29,n=Error(o(130,e===null?"null":typeof e,"")),s=null}return t=Mt(m,n,t,r),t.elementType=e,t.type=s,t.lanes=c,t}function ba(e,t,n,s){return e=Mt(7,e,s,t),e.lanes=n,e}function Nr(e,t,n){return e=Mt(6,e,null,t),e.lanes=n,e}function Bd(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function jr(e,t,n){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hd=new WeakMap;function Bt(e,t){if(typeof e=="object"&&e!==null){var n=Hd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Bf(t)},Hd.set(e,t),t)}return{value:e,source:t,stack:Bf(t)}}var ti=[],ni=0,ml=null,Pi=0,Ht=[],Yt=0,Vn=null,en=1,tn="";function pn(e,t){ti[ni++]=Pi,ti[ni++]=ml,ml=e,Pi=t}function Yd(e,t,n){Ht[Yt++]=en,Ht[Yt++]=tn,Ht[Yt++]=Vn,Vn=e;var s=en;e=tn;var r=32-At(s)-1;s&=~(1<<r),n+=1;var c=32-At(t)+r;if(30<c){var m=r-r%5;c=(s&(1<<m)-1).toString(32),s>>=m,r-=m,en=1<<32-At(t)+r|n<<r|s,tn=c+e}else en=1<<c|n<<r|s,tn=e}function Ar(e){e.return!==null&&(pn(e,1),Yd(e,1,0))}function Er(e){for(;e===ml;)ml=ti[--ni],ti[ni]=null,Pi=ti[--ni],ti[ni]=null;for(;e===Vn;)Vn=Ht[--Yt],Ht[Yt]=null,tn=Ht[--Yt],Ht[Yt]=null,en=Ht[--Yt],Ht[Yt]=null}function Gd(e,t){Ht[Yt++]=en,Ht[Yt++]=tn,Ht[Yt++]=Vn,en=t.id,tn=t.overflow,Vn=e}var lt=null,Le=null,je=!1,Ln=null,Gt=!1,Mr=Error(o(519));function Un(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fi(Bt(t,e)),Mr}function qd(e){var t=e.stateNode,n=e.type,s=e.memoizedProps;switch(t[st]=e,t[yt]=s,n){case"dialog":Se("cancel",t),Se("close",t);break;case"iframe":case"object":case"embed":Se("load",t);break;case"video":case"audio":for(n=0;n<bs.length;n++)Se(bs[n],t);break;case"source":Se("error",t);break;case"img":case"image":case"link":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"input":Se("invalid",t),nd(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Se("invalid",t);break;case"textarea":Se("invalid",t),id(t,s.value,s.defaultValue,s.children)}n=s.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||s.suppressHydrationWarning===!0||lp(t.textContent,n)?(s.popover!=null&&(Se("beforetoggle",t),Se("toggle",t)),s.onScroll!=null&&Se("scroll",t),s.onScrollEnd!=null&&Se("scrollend",t),s.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Un(e,!0)}function Xd(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:lt=lt.return}}function ai(e){if(e!==lt)return!1;if(!je)return Xd(e),je=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Qc(e.type,e.memoizedProps)),n=!n),n&&Le&&Un(e),Xd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Le=pp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Le=pp(e)}else t===27?(t=Le,$n(e.type)?(e=Fc,Fc=null,Le=e):Le=t):Le=lt?Xt(e.stateNode.nextSibling):null;return!0}function va(){Le=lt=null,je=!1}function Cr(){var e=Ln;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),Ln=null),e}function Fi(e){Ln===null?Ln=[e]:Ln.push(e)}var _r=N(null),Sa=null,gn=null;function Bn(e,t,n){I(_r,t._currentValue),t._currentValue=n}function yn(e){e._currentValue=_r.current,L(_r)}function Dr(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function Rr(e,t,n,s){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var m=r.child;c=c.firstContext;e:for(;c!==null;){var x=c;c=r;for(var w=0;w<t.length;w++)if(x.context===t[w]){c.lanes|=n,x=c.alternate,x!==null&&(x.lanes|=n),Dr(c.return,n,e),s||(m=null);break e}c=x.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(o(341));m.lanes|=n,c=m.alternate,c!==null&&(c.lanes|=n),Dr(m,n,e),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===e){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function ii(e,t,n,s){e=null;for(var r=t,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(o(387));if(m=m.memoizedProps,m!==null){var x=r.type;Et(r.pendingProps.value,m.value)||(e!==null?e.push(x):e=[x])}}else if(r===Ne.current){if(m=r.alternate,m===null)throw Error(o(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Ns):e=[Ns])}r=r.return}e!==null&&Rr(t,e,n,s),t.flags|=262144}function pl(e){for(e=e.firstContext;e!==null;){if(!Et(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wa(e){Sa=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return Kd(Sa,e)}function gl(e,t){return Sa===null&&wa(e),Kd(e,t)}function Kd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gn===null){if(e===null)throw Error(o(308));gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gn=gn.next=t;return n}var Kb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Qb=a.unstable_scheduleCallback,Zb=a.unstable_NormalPriority,Ie={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zr(){return{controller:new Kb,data:new Map,refCount:0}}function $i(e){e.refCount--,e.refCount===0&&Qb(Zb,function(){e.controller.abort()})}var Wi=null,kr=0,si=0,li=null;function Ib(e,t){if(Wi===null){var n=Wi=[];kr=0,si=Lc(),li={status:"pending",value:void 0,then:function(s){n.push(s)}}}return kr++,t.then(Qd,Qd),t}function Qd(){if(--kr===0&&Wi!==null){li!==null&&(li.status="fulfilled");var e=Wi;Wi=null,si=0,li=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Jb(e,t){var n=[],s={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(s.status="rejected",s.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),s}var Zd=D.S;D.S=function(e,t){_m=Nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ib(e,t),Zd!==null&&Zd(e,t)};var Ta=N(null);function Or(){var e=Ta.current;return e!==null?e:Oe.pooledCache}function yl(e,t){t===null?I(Ta,Ta.current):I(Ta,t.pool)}function Id(){var e=Or();return e===null?null:{parent:Ie._currentValue,pool:e}}var oi=Error(o(460)),Vr=Error(o(474)),xl=Error(o(542)),bl={then:function(){}};function Jd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$d(e),e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=s}},function(s){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$d(e),e}throw ja=t,oi}}function Na(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ja=n,oi):n}}var ja=null;function Fd(){if(ja===null)throw Error(o(459));var e=ja;return ja=null,e}function $d(e){if(e===oi||e===xl)throw Error(o(483))}var ri=null,es=0;function vl(e){var t=es;return es+=1,ri===null&&(ri=[]),Pd(ri,e,t)}function ts(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Sl(e,t){throw t.$$typeof===S?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Wd(e){function t(A,j){if(e){var E=A.deletions;E===null?(A.deletions=[j],A.flags|=16):E.push(j)}}function n(A,j){if(!e)return null;for(;j!==null;)t(A,j),j=j.sibling;return null}function s(A){for(var j=new Map;A!==null;)A.key!==null?j.set(A.key,A):j.set(A.index,A),A=A.sibling;return j}function r(A,j){return A=mn(A,j),A.index=0,A.sibling=null,A}function c(A,j,E){return A.index=E,e?(E=A.alternate,E!==null?(E=E.index,E<j?(A.flags|=67108866,j):E):(A.flags|=67108866,j)):(A.flags|=1048576,j)}function m(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function x(A,j,E,O){return j===null||j.tag!==6?(j=Nr(E,A.mode,O),j.return=A,j):(j=r(j,E),j.return=A,j)}function w(A,j,E,O){var oe=E.type;return oe===k?z(A,j,E.props.children,O,E.key):j!==null&&(j.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===B&&Na(oe)===j.type)?(j=r(j,E.props),ts(j,E),j.return=A,j):(j=hl(E.type,E.key,E.props,null,A.mode,O),ts(j,E),j.return=A,j)}function M(A,j,E,O){return j===null||j.tag!==4||j.stateNode.containerInfo!==E.containerInfo||j.stateNode.implementation!==E.implementation?(j=jr(E,A.mode,O),j.return=A,j):(j=r(j,E.children||[]),j.return=A,j)}function z(A,j,E,O,oe){return j===null||j.tag!==7?(j=ba(E,A.mode,O,oe),j.return=A,j):(j=r(j,E),j.return=A,j)}function U(A,j,E){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Nr(""+j,A.mode,E),j.return=A,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case T:return E=hl(j.type,j.key,j.props,null,A.mode,E),ts(E,j),E.return=A,E;case C:return j=jr(j,A.mode,E),j.return=A,j;case B:return j=Na(j),U(A,j,E)}if(De(j)||be(j))return j=ba(j,A.mode,E,null),j.return=A,j;if(typeof j.then=="function")return U(A,vl(j),E);if(j.$$typeof===G)return U(A,gl(A,j),E);Sl(A,j)}return null}function _(A,j,E,O){var oe=j!==null?j.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return oe!==null?null:x(A,j,""+E,O);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case T:return E.key===oe?w(A,j,E,O):null;case C:return E.key===oe?M(A,j,E,O):null;case B:return E=Na(E),_(A,j,E,O)}if(De(E)||be(E))return oe!==null?null:z(A,j,E,O,null);if(typeof E.then=="function")return _(A,j,vl(E),O);if(E.$$typeof===G)return _(A,j,gl(A,E),O);Sl(A,E)}return null}function R(A,j,E,O,oe){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return A=A.get(E)||null,x(j,A,""+O,oe);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case T:return A=A.get(O.key===null?E:O.key)||null,w(j,A,O,oe);case C:return A=A.get(O.key===null?E:O.key)||null,M(j,A,O,oe);case B:return O=Na(O),R(A,j,E,O,oe)}if(De(O)||be(O))return A=A.get(E)||null,z(j,A,O,oe,null);if(typeof O.then=="function")return R(A,j,E,vl(O),oe);if(O.$$typeof===G)return R(A,j,E,gl(j,O),oe);Sl(j,O)}return null}function W(A,j,E,O){for(var oe=null,Ae=null,ae=j,pe=j=0,Te=null;ae!==null&&pe<E.length;pe++){ae.index>pe?(Te=ae,ae=null):Te=ae.sibling;var Ee=_(A,ae,E[pe],O);if(Ee===null){ae===null&&(ae=Te);break}e&&ae&&Ee.alternate===null&&t(A,ae),j=c(Ee,j,pe),Ae===null?oe=Ee:Ae.sibling=Ee,Ae=Ee,ae=Te}if(pe===E.length)return n(A,ae),je&&pn(A,pe),oe;if(ae===null){for(;pe<E.length;pe++)ae=U(A,E[pe],O),ae!==null&&(j=c(ae,j,pe),Ae===null?oe=ae:Ae.sibling=ae,Ae=ae);return je&&pn(A,pe),oe}for(ae=s(ae);pe<E.length;pe++)Te=R(ae,A,pe,E[pe],O),Te!==null&&(e&&Te.alternate!==null&&ae.delete(Te.key===null?pe:Te.key),j=c(Te,j,pe),Ae===null?oe=Te:Ae.sibling=Te,Ae=Te);return e&&ae.forEach(function(aa){return t(A,aa)}),je&&pn(A,pe),oe}function ce(A,j,E,O){if(E==null)throw Error(o(151));for(var oe=null,Ae=null,ae=j,pe=j=0,Te=null,Ee=E.next();ae!==null&&!Ee.done;pe++,Ee=E.next()){ae.index>pe?(Te=ae,ae=null):Te=ae.sibling;var aa=_(A,ae,Ee.value,O);if(aa===null){ae===null&&(ae=Te);break}e&&ae&&aa.alternate===null&&t(A,ae),j=c(aa,j,pe),Ae===null?oe=aa:Ae.sibling=aa,Ae=aa,ae=Te}if(Ee.done)return n(A,ae),je&&pn(A,pe),oe;if(ae===null){for(;!Ee.done;pe++,Ee=E.next())Ee=U(A,Ee.value,O),Ee!==null&&(j=c(Ee,j,pe),Ae===null?oe=Ee:Ae.sibling=Ee,Ae=Ee);return je&&pn(A,pe),oe}for(ae=s(ae);!Ee.done;pe++,Ee=E.next())Ee=R(ae,A,pe,Ee.value,O),Ee!==null&&(e&&Ee.alternate!==null&&ae.delete(Ee.key===null?pe:Ee.key),j=c(Ee,j,pe),Ae===null?oe=Ee:Ae.sibling=Ee,Ae=Ee);return e&&ae.forEach(function(l1){return t(A,l1)}),je&&pn(A,pe),oe}function ke(A,j,E,O){if(typeof E=="object"&&E!==null&&E.type===k&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case T:e:{for(var oe=E.key;j!==null;){if(j.key===oe){if(oe=E.type,oe===k){if(j.tag===7){n(A,j.sibling),O=r(j,E.props.children),O.return=A,A=O;break e}}else if(j.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===B&&Na(oe)===j.type){n(A,j.sibling),O=r(j,E.props),ts(O,E),O.return=A,A=O;break e}n(A,j);break}else t(A,j);j=j.sibling}E.type===k?(O=ba(E.props.children,A.mode,O,E.key),O.return=A,A=O):(O=hl(E.type,E.key,E.props,null,A.mode,O),ts(O,E),O.return=A,A=O)}return m(A);case C:e:{for(oe=E.key;j!==null;){if(j.key===oe)if(j.tag===4&&j.stateNode.containerInfo===E.containerInfo&&j.stateNode.implementation===E.implementation){n(A,j.sibling),O=r(j,E.children||[]),O.return=A,A=O;break e}else{n(A,j);break}else t(A,j);j=j.sibling}O=jr(E,A.mode,O),O.return=A,A=O}return m(A);case B:return E=Na(E),ke(A,j,E,O)}if(De(E))return W(A,j,E,O);if(be(E)){if(oe=be(E),typeof oe!="function")throw Error(o(150));return E=oe.call(E),ce(A,j,E,O)}if(typeof E.then=="function")return ke(A,j,vl(E),O);if(E.$$typeof===G)return ke(A,j,gl(A,E),O);Sl(A,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,j!==null&&j.tag===6?(n(A,j.sibling),O=r(j,E),O.return=A,A=O):(n(A,j),O=Nr(E,A.mode,O),O.return=A,A=O),m(A)):n(A,j)}return function(A,j,E,O){try{es=0;var oe=ke(A,j,E,O);return ri=null,oe}catch(ae){if(ae===oi||ae===xl)throw ae;var Ae=Mt(29,ae,null,A.mode);return Ae.lanes=O,Ae.return=A,Ae}finally{}}}var Aa=Wd(!0),eh=Wd(!1),Hn=!1;function Lr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ur(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Yn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Me&2)!==0){var r=s.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),s.pending=t,t=dl(e),Ld(e,null,n),t}return fl(e,s,t,n),dl(e)}function ns(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Kf(e,n)}}function Br(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var r=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?r=c=m:c=c.next=m,n=n.next}while(n!==null);c===null?r=c=t:c=c.next=t}else r=c=t;n={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Hr=!1;function as(){if(Hr){var e=li;if(e!==null)throw e}}function is(e,t,n,s){Hr=!1;var r=e.updateQueue;Hn=!1;var c=r.firstBaseUpdate,m=r.lastBaseUpdate,x=r.shared.pending;if(x!==null){r.shared.pending=null;var w=x,M=w.next;w.next=null,m===null?c=M:m.next=M,m=w;var z=e.alternate;z!==null&&(z=z.updateQueue,x=z.lastBaseUpdate,x!==m&&(x===null?z.firstBaseUpdate=M:x.next=M,z.lastBaseUpdate=w))}if(c!==null){var U=r.baseState;m=0,z=M=w=null,x=c;do{var _=x.lane&-536870913,R=_!==x.lane;if(R?(we&_)===_:(s&_)===_){_!==0&&_===si&&(Hr=!0),z!==null&&(z=z.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var W=e,ce=x;_=t;var ke=n;switch(ce.tag){case 1:if(W=ce.payload,typeof W=="function"){U=W.call(ke,U,_);break e}U=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=ce.payload,_=typeof W=="function"?W.call(ke,U,_):W,_==null)break e;U=v({},U,_);break e;case 2:Hn=!0}}_=x.callback,_!==null&&(e.flags|=64,R&&(e.flags|=8192),R=r.callbacks,R===null?r.callbacks=[_]:R.push(_))}else R={lane:_,tag:x.tag,payload:x.payload,callback:x.callback,next:null},z===null?(M=z=R,w=U):z=z.next=R,m|=_;if(x=x.next,x===null){if(x=r.shared.pending,x===null)break;R=x,x=R.next,R.next=null,r.lastBaseUpdate=R,r.shared.pending=null}}while(!0);z===null&&(w=U),r.baseState=w,r.firstBaseUpdate=M,r.lastBaseUpdate=z,c===null&&(r.shared.lanes=0),Zn|=m,e.lanes=m,e.memoizedState=U}}function th(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function nh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)th(n[e],t)}var ci=N(null),wl=N(0);function ah(e,t){e=An,I(wl,e),I(ci,t),An=e|t.baseLanes}function Yr(){I(wl,An),I(ci,ci.current)}function Gr(){An=wl.current,L(ci),L(wl)}var Ct=N(null),qt=null;function qn(e){var t=e.alternate;I(Ke,Ke.current&1),I(Ct,e),qt===null&&(t===null||ci.current!==null||t.memoizedState!==null)&&(qt=e)}function qr(e){I(Ke,Ke.current),I(Ct,e),qt===null&&(qt=e)}function ih(e){e.tag===22?(I(Ke,Ke.current),I(Ct,e),qt===null&&(qt=e)):Xn()}function Xn(){I(Ke,Ke.current),I(Ct,Ct.current)}function _t(e){L(Ct),qt===e&&(qt=null),L(Ke)}var Ke=N(0);function Tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Jc(n)||Pc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xn=0,me=null,Re=null,Je=null,Nl=!1,ui=!1,Ea=!1,jl=0,ss=0,fi=null,Pb=0;function Ge(){throw Error(o(321))}function Xr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function Kr(e,t,n,s,r,c){return xn=c,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Yh:lc,Ea=!1,c=n(s,r),Ea=!1,ui&&(c=lh(t,n,s,r)),sh(e),c}function sh(e){D.H=rs;var t=Re!==null&&Re.next!==null;if(xn=0,Je=Re=me=null,Nl=!1,ss=0,fi=null,t)throw Error(o(300));e===null||Pe||(e=e.dependencies,e!==null&&pl(e)&&(Pe=!0))}function lh(e,t,n,s){me=e;var r=0;do{if(ui&&(fi=null),ss=0,ui=!1,25<=r)throw Error(o(301));if(r+=1,Je=Re=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}D.H=Gh,c=t(n,s)}while(ui);return c}function Fb(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?ls(t):t,e=e.useState()[0],(Re!==null?Re.memoizedState:null)!==e&&(me.flags|=1024),t}function Qr(){var e=jl!==0;return jl=0,e}function Zr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ir(e){if(Nl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Nl=!1}xn=0,Je=Re=me=null,ui=!1,ss=jl=0,fi=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?me.memoizedState=Je=e:Je=Je.next=e,Je}function Qe(){if(Re===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Je===null?me.memoizedState:Je.next;if(t!==null)Je=t,Re=e;else{if(e===null)throw me.alternate===null?Error(o(467)):Error(o(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Je===null?me.memoizedState=Je=e:Je=Je.next=e}return Je}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ls(e){var t=ss;return ss+=1,fi===null&&(fi=[]),e=Pd(fi,e,t),t=me,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Yh:lc),e}function El(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ls(e);if(e.$$typeof===G)return ot(e)}throw Error(o(438,String(e)))}function Jr(e){var t=null,n=me.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var s=me.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Al(),me.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),s=0;s<e;s++)n[s]=se;return t.index++,n}function bn(e,t){return typeof t=="function"?t(e):t}function Ml(e){var t=Qe();return Pr(t,Re,e)}function Pr(e,t,n){var s=e.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=n;var r=e.baseQueue,c=s.pending;if(c!==null){if(r!==null){var m=r.next;r.next=c.next,c.next=m}t.baseQueue=r=c,s.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{t=r.next;var x=m=null,w=null,M=t,z=!1;do{var U=M.lane&-536870913;if(U!==M.lane?(we&U)===U:(xn&U)===U){var _=M.revertLane;if(_===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),U===si&&(z=!0);else if((xn&_)===_){M=M.next,_===si&&(z=!0);continue}else U={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},w===null?(x=w=U,m=c):w=w.next=U,me.lanes|=_,Zn|=_;U=M.action,Ea&&n(c,U),c=M.hasEagerState?M.eagerState:n(c,U)}else _={lane:U,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},w===null?(x=w=_,m=c):w=w.next=_,me.lanes|=U,Zn|=U;M=M.next}while(M!==null&&M!==t);if(w===null?m=c:w.next=x,!Et(c,e.memoizedState)&&(Pe=!0,z&&(n=li,n!==null)))throw n;e.memoizedState=c,e.baseState=m,e.baseQueue=w,s.lastRenderedState=c}return r===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Fr(e){var t=Qe(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var s=n.dispatch,r=n.pending,c=t.memoizedState;if(r!==null){n.pending=null;var m=r=r.next;do c=e(c,m.action),m=m.next;while(m!==r);Et(c,t.memoizedState)||(Pe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,s]}function oh(e,t,n){var s=me,r=Qe(),c=je;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=t();var m=!Et((Re||r).memoizedState,n);if(m&&(r.memoizedState=n,Pe=!0),r=r.queue,ec(uh.bind(null,s,r,e),[e]),r.getSnapshot!==t||m||Je!==null&&Je.memoizedState.tag&1){if(s.flags|=2048,di(9,{destroy:void 0},ch.bind(null,s,r,n,t),null),Oe===null)throw Error(o(349));c||(xn&127)!==0||rh(s,t,n)}return n}function rh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t=Al(),me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ch(e,t,n,s){t.value=n,t.getSnapshot=s,fh(t)&&dh(e)}function uh(e,t,n){return n(function(){fh(t)&&dh(e)})}function fh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function dh(e){var t=xa(e,2);t!==null&&Tt(t,e,2)}function $r(e){var t=mt();if(typeof e=="function"){var n=e;if(e=n(),Ea){zn(!0);try{n()}finally{zn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t}function hh(e,t,n,s){return e.baseState=n,Pr(e,Re,typeof s=="function"?s:bn)}function $b(e,t,n,s,r){if(Dl(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};D.T!==null?n(!0):c.isTransition=!1,s(c),n=t.pending,n===null?(c.next=t.pending=c,mh(t,c)):(c.next=n.next,t.pending=n.next=c)}}function mh(e,t){var n=t.action,s=t.payload,r=e.state;if(t.isTransition){var c=D.T,m={};D.T=m;try{var x=n(r,s),w=D.S;w!==null&&w(m,x),ph(e,t,x)}catch(M){Wr(e,t,M)}finally{c!==null&&m.types!==null&&(c.types=m.types),D.T=c}}else try{c=n(r,s),ph(e,t,c)}catch(M){Wr(e,t,M)}}function ph(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(s){gh(e,t,s)},function(s){return Wr(e,t,s)}):gh(e,t,n)}function gh(e,t,n){t.status="fulfilled",t.value=n,yh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,mh(e,n)))}function Wr(e,t,n){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=n,yh(t),t=t.next;while(t!==s)}e.action=null}function yh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xh(e,t){return t}function bh(e,t){if(je){var n=Oe.formState;if(n!==null){e:{var s=me;if(je){if(Le){t:{for(var r=Le,c=Gt;r.nodeType!==8;){if(!c){r=null;break t}if(r=Xt(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){Le=Xt(r.nextSibling),s=r.data==="F!";break e}}Un(s)}s=!1}s&&(t=n[0])}}return n=mt(),n.memoizedState=n.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xh,lastRenderedState:t},n.queue=s,n=Uh.bind(null,me,s),s.dispatch=n,s=$r(!1),c=sc.bind(null,me,!1,s.queue),s=mt(),r={state:t,dispatch:null,action:e,pending:null},s.queue=r,n=$b.bind(null,me,r,c,n),r.dispatch=n,s.memoizedState=e,[t,n,!1]}function vh(e){var t=Qe();return Sh(t,Re,e)}function Sh(e,t,n){if(t=Pr(e,t,xh)[0],e=Ml(bn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=ls(t)}catch(m){throw m===oi?xl:m}else s=t;t=Qe();var r=t.queue,c=r.dispatch;return n!==t.memoizedState&&(me.flags|=2048,di(9,{destroy:void 0},Wb.bind(null,r,n),null)),[s,c,e]}function Wb(e,t){e.action=t}function wh(e){var t=Qe(),n=Re;if(n!==null)return Sh(t,n,e);Qe(),t=t.memoizedState,n=Qe();var s=n.queue.dispatch;return n.memoizedState=e,[t,s,!1]}function di(e,t,n,s){return e={tag:e,create:n,deps:s,inst:t,next:null},t=me.updateQueue,t===null&&(t=Al(),me.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e),e}function Th(){return Qe().memoizedState}function Cl(e,t,n,s){var r=mt();me.flags|=e,r.memoizedState=di(1|t,{destroy:void 0},n,s===void 0?null:s)}function _l(e,t,n,s){var r=Qe();s=s===void 0?null:s;var c=r.memoizedState.inst;Re!==null&&s!==null&&Xr(s,Re.memoizedState.deps)?r.memoizedState=di(t,c,n,s):(me.flags|=e,r.memoizedState=di(1|t,c,n,s))}function Nh(e,t){Cl(8390656,8,e,t)}function ec(e,t){_l(2048,8,e,t)}function ev(e){me.flags|=4;var t=me.updateQueue;if(t===null)t=Al(),me.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function jh(e){var t=Qe().memoizedState;return ev({ref:t,nextImpl:e}),function(){if((Me&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Ah(e,t){return _l(4,2,e,t)}function Eh(e,t){return _l(4,4,e,t)}function Mh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ch(e,t,n){n=n!=null?n.concat([e]):null,_l(4,4,Mh.bind(null,t,e),n)}function tc(){}function _h(e,t){var n=Qe();t=t===void 0?null:t;var s=n.memoizedState;return t!==null&&Xr(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function Dh(e,t){var n=Qe();t=t===void 0?null:t;var s=n.memoizedState;if(t!==null&&Xr(t,s[1]))return s[0];if(s=e(),Ea){zn(!0);try{e()}finally{zn(!1)}}return n.memoizedState=[s,t],s}function nc(e,t,n){return n===void 0||(xn&1073741824)!==0&&(we&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Rm(),me.lanes|=e,Zn|=e,n)}function Rh(e,t,n,s){return Et(n,t)?n:ci.current!==null?(e=nc(e,n,s),Et(e,t)||(Pe=!0),e):(xn&42)===0||(xn&1073741824)!==0&&(we&261930)===0?(Pe=!0,e.memoizedState=n):(e=Rm(),me.lanes|=e,Zn|=e,t)}function zh(e,t,n,s,r){var c=Q.p;Q.p=c!==0&&8>c?c:8;var m=D.T,x={};D.T=x,sc(e,!1,t,n);try{var w=r(),M=D.S;if(M!==null&&M(x,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var z=Jb(w,s);os(e,t,z,zt(e))}else os(e,t,s,zt(e))}catch(U){os(e,t,{then:function(){},status:"rejected",reason:U},zt())}finally{Q.p=c,m!==null&&x.types!==null&&(m.types=x.types),D.T=m}}function tv(){}function ac(e,t,n,s){if(e.tag!==5)throw Error(o(476));var r=kh(e).queue;zh(e,r,t,P,n===null?tv:function(){return Oh(e),n(s)})}function kh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Oh(e){var t=kh(e);t.next===null&&(t=e.alternate.memoizedState),os(e,t.next.queue,{},zt())}function ic(){return ot(Ns)}function Vh(){return Qe().memoizedState}function Lh(){return Qe().memoizedState}function nv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=zt();e=Yn(n);var s=Gn(t,e,n);s!==null&&(Tt(s,t,n),ns(s,t,n)),t={cache:zr()},e.payload=t;return}t=t.return}}function av(e,t,n){var s=zt();n={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Dl(e)?Bh(t,n):(n=wr(e,t,n,s),n!==null&&(Tt(n,e,s),Hh(n,t,s)))}function Uh(e,t,n){var s=zt();os(e,t,n,s)}function os(e,t,n,s){var r={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dl(e))Bh(t,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var m=t.lastRenderedState,x=c(m,n);if(r.hasEagerState=!0,r.eagerState=x,Et(x,m))return fl(e,t,r,0),Oe===null&&ul(),!1}catch{}finally{}if(n=wr(e,t,r,s),n!==null)return Tt(n,e,s),Hh(n,t,s),!0}return!1}function sc(e,t,n,s){if(s={lane:2,revertLane:Lc(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Dl(e)){if(t)throw Error(o(479))}else t=wr(e,n,s,2),t!==null&&Tt(t,e,2)}function Dl(e){var t=e.alternate;return e===me||t!==null&&t===me}function Bh(e,t){ui=Nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hh(e,t,n){if((n&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Kf(e,n)}}var rs={readContext:ot,use:El,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};rs.useEffectEvent=Ge;var Yh={readContext:ot,use:El,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Nh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Cl(4194308,4,Mh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cl(4194308,4,e,t)},useInsertionEffect:function(e,t){Cl(4,2,e,t)},useMemo:function(e,t){var n=mt();t=t===void 0?null:t;var s=e();if(Ea){zn(!0);try{e()}finally{zn(!1)}}return n.memoizedState=[s,t],s},useReducer:function(e,t,n){var s=mt();if(n!==void 0){var r=n(t);if(Ea){zn(!0);try{n(t)}finally{zn(!1)}}}else r=t;return s.memoizedState=s.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},s.queue=e,e=e.dispatch=av.bind(null,me,e),[s.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=$r(e);var t=e.queue,n=Uh.bind(null,me,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:tc,useDeferredValue:function(e,t){var n=mt();return nc(n,e,t)},useTransition:function(){var e=$r(!1);return e=zh.bind(null,me,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var s=me,r=mt();if(je){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Oe===null)throw Error(o(349));(we&127)!==0||rh(s,t,n)}r.memoizedState=n;var c={value:n,getSnapshot:t};return r.queue=c,Nh(uh.bind(null,s,c,e),[e]),s.flags|=2048,di(9,{destroy:void 0},ch.bind(null,s,c,n,t),null),n},useId:function(){var e=mt(),t=Oe.identifierPrefix;if(je){var n=tn,s=en;n=(s&~(1<<32-At(s)-1)).toString(32)+n,t="_"+t+"R_"+n,n=jl++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Pb++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ic,useFormState:bh,useActionState:bh,useOptimistic:function(e){var t=mt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=sc.bind(null,me,!0,n),n.dispatch=t,[e,t]},useMemoCache:Jr,useCacheRefresh:function(){return mt().memoizedState=nv.bind(null,me)},useEffectEvent:function(e){var t=mt(),n={impl:e};return t.memoizedState=n,function(){if((Me&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},lc={readContext:ot,use:El,useCallback:_h,useContext:ot,useEffect:ec,useImperativeHandle:Ch,useInsertionEffect:Ah,useLayoutEffect:Eh,useMemo:Dh,useReducer:Ml,useRef:Th,useState:function(){return Ml(bn)},useDebugValue:tc,useDeferredValue:function(e,t){var n=Qe();return Rh(n,Re.memoizedState,e,t)},useTransition:function(){var e=Ml(bn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:ls(e),t]},useSyncExternalStore:oh,useId:Vh,useHostTransitionStatus:ic,useFormState:vh,useActionState:vh,useOptimistic:function(e,t){var n=Qe();return hh(n,Re,e,t)},useMemoCache:Jr,useCacheRefresh:Lh};lc.useEffectEvent=jh;var Gh={readContext:ot,use:El,useCallback:_h,useContext:ot,useEffect:ec,useImperativeHandle:Ch,useInsertionEffect:Ah,useLayoutEffect:Eh,useMemo:Dh,useReducer:Fr,useRef:Th,useState:function(){return Fr(bn)},useDebugValue:tc,useDeferredValue:function(e,t){var n=Qe();return Re===null?nc(n,e,t):Rh(n,Re.memoizedState,e,t)},useTransition:function(){var e=Fr(bn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:ls(e),t]},useSyncExternalStore:oh,useId:Vh,useHostTransitionStatus:ic,useFormState:wh,useActionState:wh,useOptimistic:function(e,t){var n=Qe();return Re!==null?hh(n,Re,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Jr,useCacheRefresh:Lh};Gh.useEffectEvent=jh;function oc(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rc={enqueueSetState:function(e,t,n){e=e._reactInternals;var s=zt(),r=Yn(s);r.payload=t,n!=null&&(r.callback=n),t=Gn(e,r,s),t!==null&&(Tt(t,e,s),ns(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=zt(),r=Yn(s);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Gn(e,r,s),t!==null&&(Tt(t,e,s),ns(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zt(),s=Yn(n);s.tag=2,t!=null&&(s.callback=t),t=Gn(e,s,n),t!==null&&(Tt(t,e,n),ns(t,e,n))}};function qh(e,t,n,s,r,c,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,m):t.prototype&&t.prototype.isPureReactComponent?!Ii(n,s)||!Ii(r,c):!0}function Xh(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&rc.enqueueReplaceState(t,t.state,null)}function Ma(e,t){var n=t;if("ref"in t){n={};for(var s in t)s!=="ref"&&(n[s]=t[s])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Kh(e){cl(e)}function Qh(e){console.error(e)}function Zh(e){cl(e)}function Rl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function Ih(e,t,n){try{var s=e.onCaughtError;s(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function cc(e,t,n){return n=Yn(n),n.tag=3,n.payload={element:null},n.callback=function(){Rl(e,t)},n}function Jh(e){return e=Yn(e),e.tag=3,e}function Ph(e,t,n,s){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var c=s.value;e.payload=function(){return r(c)},e.callback=function(){Ih(t,n,s)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Ih(t,n,s),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var x=s.stack;this.componentDidCatch(s.value,{componentStack:x!==null?x:""})})}function iv(e,t,n,s,r){if(n.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=n.alternate,t!==null&&ii(t,n,r,!0),n=Ct.current,n!==null){switch(n.tag){case 31:case 13:return qt===null?Xl():n.alternate===null&&qe===0&&(qe=3),n.flags&=-257,n.flags|=65536,n.lanes=r,s===bl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([s]):t.add(s),kc(e,s,r)),!1;case 22:return n.flags|=65536,s===bl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([s]):n.add(s)),kc(e,s,r)),!1}throw Error(o(435,n.tag))}return kc(e,s,r),Xl(),!1}if(je)return t=Ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,s!==Mr&&(e=Error(o(422),{cause:s}),Fi(Bt(e,n)))):(s!==Mr&&(t=Error(o(423),{cause:s}),Fi(Bt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,s=Bt(s,n),r=cc(e.stateNode,s,r),Br(e,r),qe!==4&&(qe=2)),!1;var c=Error(o(520),{cause:s});if(c=Bt(c,n),gs===null?gs=[c]:gs.push(c),qe!==4&&(qe=2),t===null)return!0;s=Bt(s,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=cc(n.stateNode,s,e),Br(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(In===null||!In.has(c))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Jh(r),Ph(r,e,n,s),Br(n,r),!1}n=n.return}while(n!==null);return!1}var uc=Error(o(461)),Pe=!1;function rt(e,t,n,s){t.child=e===null?eh(t,null,n,s):Aa(t,e.child,n,s)}function Fh(e,t,n,s,r){n=n.render;var c=t.ref;if("ref"in s){var m={};for(var x in s)x!=="ref"&&(m[x]=s[x])}else m=s;return wa(t),s=Kr(e,t,n,m,c,r),x=Qr(),e!==null&&!Pe?(Zr(e,t,r),vn(e,t,r)):(je&&x&&Ar(t),t.flags|=1,rt(e,t,s,r),t.child)}function $h(e,t,n,s,r){if(e===null){var c=n.type;return typeof c=="function"&&!Tr(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,Wh(e,t,c,s,r)):(e=hl(n.type,null,s,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!xc(e,r)){var m=c.memoizedProps;if(n=n.compare,n=n!==null?n:Ii,n(m,s)&&e.ref===t.ref)return vn(e,t,r)}return t.flags|=1,e=mn(c,s),e.ref=t.ref,e.return=t,t.child=e}function Wh(e,t,n,s,r){if(e!==null){var c=e.memoizedProps;if(Ii(c,s)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=s=c,xc(e,r))(e.flags&131072)!==0&&(Pe=!0);else return t.lanes=e.lanes,vn(e,t,r)}return fc(e,t,n,s,r)}function em(e,t,n,s){var r=s.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(s=t.child=e.child,r=0;s!==null;)r=r|s.lanes|s.childLanes,s=s.sibling;s=r&~c}else s=0,t.child=null;return tm(e,t,c,n,s)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yl(t,c!==null?c.cachePool:null),c!==null?ah(t,c):Yr(),ih(t);else return s=t.lanes=536870912,tm(e,t,c!==null?c.baseLanes|n:n,n,s)}else c!==null?(yl(t,c.cachePool),ah(t,c),Xn(),t.memoizedState=null):(e!==null&&yl(t,null),Yr(),Xn());return rt(e,t,r,n),t.child}function cs(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function tm(e,t,n,s,r){var c=Or();return c=c===null?null:{parent:Ie._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&yl(t,null),Yr(),ih(t),e!==null&&ii(e,t,s,!0),t.childLanes=r,null}function zl(e,t){return t=Ol({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function nm(e,t,n){return Aa(t,e.child,null,n),e=zl(t,t.pendingProps),e.flags|=2,_t(t),t.memoizedState=null,e}function sv(e,t,n){var s=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(je){if(s.mode==="hidden")return e=zl(t,s),t.lanes=536870912,cs(null,e);if(qr(t),(e=Le)?(e=mp(e,Gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vn!==null?{id:en,overflow:tn}:null,retryLane:536870912,hydrationErrors:null},n=Bd(e),n.return=t,t.child=n,lt=t,Le=null)):e=null,e===null)throw Un(t);return t.lanes=536870912,null}return zl(t,s)}var c=e.memoizedState;if(c!==null){var m=c.dehydrated;if(qr(t),r)if(t.flags&256)t.flags&=-257,t=nm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Pe||ii(e,t,n,!1),r=(n&e.childLanes)!==0,Pe||r){if(s=Oe,s!==null&&(m=Qf(s,n),m!==0&&m!==c.retryLane))throw c.retryLane=m,xa(e,m),Tt(s,e,m),uc;Xl(),t=nm(e,t,n)}else e=c.treeContext,Le=Xt(m.nextSibling),lt=t,je=!0,Ln=null,Gt=!1,e!==null&&Gd(t,e),t=zl(t,s),t.flags|=4096;return t}return e=mn(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function kl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function fc(e,t,n,s,r){return wa(t),n=Kr(e,t,n,s,void 0,r),s=Qr(),e!==null&&!Pe?(Zr(e,t,r),vn(e,t,r)):(je&&s&&Ar(t),t.flags|=1,rt(e,t,n,r),t.child)}function am(e,t,n,s,r,c){return wa(t),t.updateQueue=null,n=lh(t,s,n,r),sh(e),s=Qr(),e!==null&&!Pe?(Zr(e,t,c),vn(e,t,c)):(je&&s&&Ar(t),t.flags|=1,rt(e,t,n,c),t.child)}function im(e,t,n,s,r){if(wa(t),t.stateNode===null){var c=ei,m=n.contextType;typeof m=="object"&&m!==null&&(c=ot(m)),c=new n(s,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=rc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=s,c.state=t.memoizedState,c.refs={},Lr(t),m=n.contextType,c.context=typeof m=="object"&&m!==null?ot(m):ei,c.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(oc(t,n,m,s),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&rc.enqueueReplaceState(c,c.state,null),is(t,s,c,r),as(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){c=t.stateNode;var x=t.memoizedProps,w=Ma(n,x);c.props=w;var M=c.context,z=n.contextType;m=ei,typeof z=="object"&&z!==null&&(m=ot(z));var U=n.getDerivedStateFromProps;z=typeof U=="function"||typeof c.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,z||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(x||M!==m)&&Xh(t,c,s,m),Hn=!1;var _=t.memoizedState;c.state=_,is(t,s,c,r),as(),M=t.memoizedState,x||_!==M||Hn?(typeof U=="function"&&(oc(t,n,U,s),M=t.memoizedState),(w=Hn||qh(t,n,w,s,_,M,m))?(z||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=M),c.props=s,c.state=M,c.context=m,s=w):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{c=t.stateNode,Ur(e,t),m=t.memoizedProps,z=Ma(n,m),c.props=z,U=t.pendingProps,_=c.context,M=n.contextType,w=ei,typeof M=="object"&&M!==null&&(w=ot(M)),x=n.getDerivedStateFromProps,(M=typeof x=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==U||_!==w)&&Xh(t,c,s,w),Hn=!1,_=t.memoizedState,c.state=_,is(t,s,c,r),as();var R=t.memoizedState;m!==U||_!==R||Hn||e!==null&&e.dependencies!==null&&pl(e.dependencies)?(typeof x=="function"&&(oc(t,n,x,s),R=t.memoizedState),(z=Hn||qh(t,n,z,s,_,R,w)||e!==null&&e.dependencies!==null&&pl(e.dependencies))?(M||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,R,w),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,R,w)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=R),c.props=s,c.state=R,c.context=w,s=z):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),s=!1)}return c=s,kl(e,t),s=(t.flags&128)!==0,c||s?(c=t.stateNode,n=s&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&s?(t.child=Aa(t,e.child,null,r),t.child=Aa(t,null,n,r)):rt(e,t,n,r),t.memoizedState=c.state,e=t.child):e=vn(e,t,r),e}function sm(e,t,n,s){return va(),t.flags|=256,rt(e,t,n,s),t.child}var dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hc(e){return{baseLanes:e,cachePool:Id()}}function mc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function lm(e,t,n){var s=t.pendingProps,r=!1,c=(t.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),m&&(r=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(je){if(r?qn(t):Xn(),(e=Le)?(e=mp(e,Gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vn!==null?{id:en,overflow:tn}:null,retryLane:536870912,hydrationErrors:null},n=Bd(e),n.return=t,t.child=n,lt=t,Le=null)):e=null,e===null)throw Un(t);return Pc(e)?t.lanes=32:t.lanes=536870912,null}var x=s.children;return s=s.fallback,r?(Xn(),r=t.mode,x=Ol({mode:"hidden",children:x},r),s=ba(s,r,n,null),x.return=t,s.return=t,x.sibling=s,t.child=x,s=t.child,s.memoizedState=hc(n),s.childLanes=mc(e,m,n),t.memoizedState=dc,cs(null,s)):(qn(t),pc(t,x))}var w=e.memoizedState;if(w!==null&&(x=w.dehydrated,x!==null)){if(c)t.flags&256?(qn(t),t.flags&=-257,t=gc(e,t,n)):t.memoizedState!==null?(Xn(),t.child=e.child,t.flags|=128,t=null):(Xn(),x=s.fallback,r=t.mode,s=Ol({mode:"visible",children:s.children},r),x=ba(x,r,n,null),x.flags|=2,s.return=t,x.return=t,s.sibling=x,t.child=s,Aa(t,e.child,null,n),s=t.child,s.memoizedState=hc(n),s.childLanes=mc(e,m,n),t.memoizedState=dc,t=cs(null,s));else if(qn(t),Pc(x)){if(m=x.nextSibling&&x.nextSibling.dataset,m)var M=m.dgst;m=M,s=Error(o(419)),s.stack="",s.digest=m,Fi({value:s,source:null,stack:null}),t=gc(e,t,n)}else if(Pe||ii(e,t,n,!1),m=(n&e.childLanes)!==0,Pe||m){if(m=Oe,m!==null&&(s=Qf(m,n),s!==0&&s!==w.retryLane))throw w.retryLane=s,xa(e,s),Tt(m,e,s),uc;Jc(x)||Xl(),t=gc(e,t,n)}else Jc(x)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,Le=Xt(x.nextSibling),lt=t,je=!0,Ln=null,Gt=!1,e!==null&&Gd(t,e),t=pc(t,s.children),t.flags|=4096);return t}return r?(Xn(),x=s.fallback,r=t.mode,w=e.child,M=w.sibling,s=mn(w,{mode:"hidden",children:s.children}),s.subtreeFlags=w.subtreeFlags&65011712,M!==null?x=mn(M,x):(x=ba(x,r,n,null),x.flags|=2),x.return=t,s.return=t,s.sibling=x,t.child=s,cs(null,s),s=t.child,x=e.child.memoizedState,x===null?x=hc(n):(r=x.cachePool,r!==null?(w=Ie._currentValue,r=r.parent!==w?{parent:w,pool:w}:r):r=Id(),x={baseLanes:x.baseLanes|n,cachePool:r}),s.memoizedState=x,s.childLanes=mc(e,m,n),t.memoizedState=dc,cs(e.child,s)):(qn(t),n=e.child,e=n.sibling,n=mn(n,{mode:"visible",children:s.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function pc(e,t){return t=Ol({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ol(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function gc(e,t,n){return Aa(t,e.child,null,n),e=pc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function om(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Dr(e.return,t,n)}function yc(e,t,n,s,r,c){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:r,treeForkCount:c}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=s,m.tail=n,m.tailMode=r,m.treeForkCount=c)}function rm(e,t,n){var s=t.pendingProps,r=s.revealOrder,c=s.tail;s=s.children;var m=Ke.current,x=(m&2)!==0;if(x?(m=m&1|2,t.flags|=128):m&=1,I(Ke,m),rt(e,t,s,n),s=je?Pi:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&om(e,n,t);else if(e.tag===19)om(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Tl(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),yc(t,!1,r,n,c,s);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Tl(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}yc(t,!0,n,null,c,s);break;case"together":yc(t,!1,null,null,void 0,s);break;default:t.memoizedState=null}return t.child}function vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ii(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&pl(e)))}function lv(e,t,n){switch(t.tag){case 3:nt(t,t.stateNode.containerInfo),Bn(t,Ie,e.memoizedState.cache),va();break;case 27:case 5:Dn(t);break;case 4:nt(t,t.stateNode.containerInfo);break;case 10:Bn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,qr(t),null;break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(qn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?lm(e,t,n):(qn(t),e=vn(e,t,n),e!==null?e.sibling:null);qn(t);break;case 19:var r=(e.flags&128)!==0;if(s=(n&t.childLanes)!==0,s||(ii(e,t,n,!1),s=(n&t.childLanes)!==0),r){if(s)return rm(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),I(Ke,Ke.current),s)break;return null;case 22:return t.lanes=0,em(e,t,n,t.pendingProps);case 24:Bn(t,Ie,e.memoizedState.cache)}return vn(e,t,n)}function cm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Pe=!0;else{if(!xc(e,n)&&(t.flags&128)===0)return Pe=!1,lv(e,t,n);Pe=(e.flags&131072)!==0}else Pe=!1,je&&(t.flags&1048576)!==0&&Yd(t,Pi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e=="function")Tr(e)?(s=Ma(e,s),t.tag=1,t=im(null,t,e,s,n)):(t.tag=0,t=fc(null,t,e,s,n));else{if(e!=null){var r=e.$$typeof;if(r===q){t.tag=11,t=Fh(null,t,e,s,n);break e}else if(r===$){t.tag=14,t=$h(null,t,e,s,n);break e}}throw t=He(e)||e,Error(o(306,t,""))}}return t;case 0:return fc(e,t,t.type,t.pendingProps,n);case 1:return s=t.type,r=Ma(s,t.pendingProps),im(e,t,s,r,n);case 3:e:{if(nt(t,t.stateNode.containerInfo),e===null)throw Error(o(387));s=t.pendingProps;var c=t.memoizedState;r=c.element,Ur(e,t),is(t,s,null,n);var m=t.memoizedState;if(s=m.cache,Bn(t,Ie,s),s!==c.cache&&Rr(t,[Ie],n,!0),as(),s=m.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=sm(e,t,s,n);break e}else if(s!==r){r=Bt(Error(o(424)),t),Fi(r),t=sm(e,t,s,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=Xt(e.firstChild),lt=t,je=!0,Ln=null,Gt=!0,n=eh(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(va(),s===r){t=vn(e,t,n);break e}rt(e,t,s,n)}t=t.child}return t;case 26:return kl(e,t),e===null?(n=vp(t.type,null,t.pendingProps,null))?t.memoizedState=n:je||(n=t.type,e=t.pendingProps,s=Fl(re.current).createElement(n),s[st]=t,s[yt]=e,ct(s,n,e),at(s),t.stateNode=s):t.memoizedState=vp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Dn(t),e===null&&je&&(s=t.stateNode=yp(t.type,t.pendingProps,re.current),lt=t,Gt=!0,r=Le,$n(t.type)?(Fc=r,Le=Xt(s.firstChild)):Le=r),rt(e,t,t.pendingProps.children,n),kl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&je&&((r=s=Le)&&(s=Vv(s,t.type,t.pendingProps,Gt),s!==null?(t.stateNode=s,lt=t,Le=Xt(s.firstChild),Gt=!1,r=!0):r=!1),r||Un(t)),Dn(t),r=t.type,c=t.pendingProps,m=e!==null?e.memoizedProps:null,s=c.children,Qc(r,c)?s=null:m!==null&&Qc(r,m)&&(t.flags|=32),t.memoizedState!==null&&(r=Kr(e,t,Fb,null,null,n),Ns._currentValue=r),kl(e,t),rt(e,t,s,n),t.child;case 6:return e===null&&je&&((e=n=Le)&&(n=Lv(n,t.pendingProps,Gt),n!==null?(t.stateNode=n,lt=t,Le=null,e=!0):e=!1),e||Un(t)),null;case 13:return lm(e,t,n);case 4:return nt(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Aa(t,null,s,n):rt(e,t,s,n),t.child;case 11:return Fh(e,t,t.type,t.pendingProps,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:return s=t.pendingProps,Bn(t,t.type,s.value),rt(e,t,s.children,n),t.child;case 9:return r=t.type._context,s=t.pendingProps.children,wa(t),r=ot(r),s=s(r),t.flags|=1,rt(e,t,s,n),t.child;case 14:return $h(e,t,t.type,t.pendingProps,n);case 15:return Wh(e,t,t.type,t.pendingProps,n);case 19:return rm(e,t,n);case 31:return sv(e,t,n);case 22:return em(e,t,n,t.pendingProps);case 24:return wa(t),s=ot(Ie),e===null?(r=Or(),r===null&&(r=Oe,c=zr(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=n),r=c),t.memoizedState={parent:s,cache:r},Lr(t),Bn(t,Ie,r)):((e.lanes&n)!==0&&(Ur(e,t),is(t,null,null,n),as()),r=e.memoizedState,c=t.memoizedState,r.parent!==s?(r={parent:s,cache:s},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Bn(t,Ie,s)):(s=c.cache,Bn(t,Ie,s),s!==r.cache&&Rr(t,[Ie],n,!0))),rt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Sn(e){e.flags|=4}function bc(e,t,n,s,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Vm())e.flags|=8192;else throw ja=bl,Vr}else e.flags&=-16777217}function um(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jp(t))if(Vm())e.flags|=8192;else throw ja=bl,Vr}function Vl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?qf():536870912,e.lanes|=t,gi|=t)}function us(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,s|=r.subtreeFlags&65011712,s|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function ov(e,t,n){var s=t.pendingProps;switch(Er(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return n=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),yn(Ie),ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ai(t)?Sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Cr())),Ue(t),null;case 26:var r=t.type,c=t.memoizedState;return e===null?(Sn(t),c!==null?(Ue(t),um(t,c)):(Ue(t),bc(t,r,null,s,n))):c?c!==e.memoizedState?(Sn(t),Ue(t),um(t,c)):(Ue(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&Sn(t),Ue(t),bc(t,r,e,s,n)),null;case 27:if(un(t),n=re.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Sn(t);else{if(!s){if(t.stateNode===null)throw Error(o(166));return Ue(t),null}e=F.current,ai(t)?qd(t):(e=yp(r,s,n),t.stateNode=e,Sn(t))}return Ue(t),null;case 5:if(un(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Sn(t);else{if(!s){if(t.stateNode===null)throw Error(o(166));return Ue(t),null}if(c=F.current,ai(t))qd(t);else{var m=Fl(re.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?m.createElement("select",{is:s.is}):m.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?m.createElement(r,{is:s.is}):m.createElement(r)}}c[st]=t,c[yt]=s;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=c;e:switch(ct(c,r,s),r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Sn(t)}}return Ue(t),bc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&Sn(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(e=re.current,ai(t)){if(e=t.stateNode,n=t.memoizedProps,s=null,r=lt,r!==null)switch(r.tag){case 27:case 5:s=r.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||s!==null&&s.suppressHydrationWarning===!0||lp(e.nodeValue,n)),e||Un(t,!0)}else e=Fl(e).createTextNode(s),e[st]=t,t.stateNode=e}return Ue(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(s=ai(t),n!==null){if(e===null){if(!s)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[st]=t}else va(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),e=!1}else n=Cr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_t(t),t):(_t(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ue(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ai(t),s!==null&&s.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[st]=t}else va(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),r=!1}else r=Cr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(_t(t),t):(_t(t),null)}return _t(t),(t.flags&128)!==0?(t.lanes=n,t):(n=s!==null,e=e!==null&&e.memoizedState!==null,n&&(s=t.child,r=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(r=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==r&&(s.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Vl(t,t.updateQueue),Ue(t),null);case 4:return ge(),e===null&&Yc(t.stateNode.containerInfo),Ue(t),null;case 10:return yn(t.type),Ue(t),null;case 19:if(L(Ke),s=t.memoizedState,s===null)return Ue(t),null;if(r=(t.flags&128)!==0,c=s.rendering,c===null)if(r)us(s,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Tl(e),c!==null){for(t.flags|=128,us(s,!1),e=c.updateQueue,t.updateQueue=e,Vl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ud(n,e),n=n.sibling;return I(Ke,Ke.current&1|2),je&&pn(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&Nt()>Yl&&(t.flags|=128,r=!0,us(s,!1),t.lanes=4194304)}else{if(!r)if(e=Tl(c),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Vl(t,e),us(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!je)return Ue(t),null}else 2*Nt()-s.renderingStartTime>Yl&&n!==536870912&&(t.flags|=128,r=!0,us(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(e=s.last,e!==null?e.sibling=c:t.child=c,s.last=c)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=Ke.current,I(Ke,r?n&1|2:n&1),je&&pn(t,s.treeForkCount),e):(Ue(t),null);case 22:case 23:return _t(t),Gr(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(n&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),n=t.updateQueue,n!==null&&Vl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==n&&(t.flags|=2048),e!==null&&L(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),yn(Ie),Ue(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function rv(e,t){switch(Er(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(Ie),ge(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return un(t),null;case 31:if(t.memoizedState!==null){if(_t(t),t.alternate===null)throw Error(o(340));va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_t(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Ke),null;case 4:return ge(),null;case 10:return yn(t.type),null;case 22:case 23:return _t(t),Gr(),e!==null&&L(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return yn(Ie),null;case 25:return null;default:return null}}function fm(e,t){switch(Er(t),t.tag){case 3:yn(Ie),ge();break;case 26:case 27:case 5:un(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&_t(t);break;case 13:_t(t);break;case 19:L(Ke);break;case 10:yn(t.type);break;case 22:case 23:_t(t),Gr(),e!==null&&L(Ta);break;case 24:yn(Ie)}}function fs(e,t){try{var n=t.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var r=s.next;n=r;do{if((n.tag&e)===e){s=void 0;var c=n.create,m=n.inst;s=c(),m.destroy=s}n=n.next}while(n!==r)}}catch(x){_e(t,t.return,x)}}function Kn(e,t,n){try{var s=t.updateQueue,r=s!==null?s.lastEffect:null;if(r!==null){var c=r.next;s=c;do{if((s.tag&e)===e){var m=s.inst,x=m.destroy;if(x!==void 0){m.destroy=void 0,r=t;var w=n,M=x;try{M()}catch(z){_e(r,w,z)}}}s=s.next}while(s!==c)}}catch(z){_e(t,t.return,z)}}function dm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{nh(t,n)}catch(s){_e(e,e.return,s)}}}function hm(e,t,n){n.props=Ma(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(s){_e(e,t,s)}}function ds(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof n=="function"?e.refCleanup=n(s):n.current=s}}catch(r){_e(e,t,r)}}function nn(e,t){var n=e.ref,s=e.refCleanup;if(n!==null)if(typeof s=="function")try{s()}catch(r){_e(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function mm(e){var t=e.type,n=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&s.focus();break e;case"img":n.src?s.src=n.src:n.srcSet&&(s.srcset=n.srcSet)}}catch(r){_e(e,e.return,r)}}function vc(e,t,n){try{var s=e.stateNode;_v(s,e.type,n,t),s[yt]=t}catch(r){_e(e,e.return,r)}}function pm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$n(e.type)||e.tag===4}function Sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$n(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wc(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(s!==4&&(s===27&&$n(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(wc(e,t,n),e=e.sibling;e!==null;)wc(e,t,n),e=e.sibling}function Ll(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(s===27&&$n(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ll(e,t,n),e=e.sibling;e!==null;)Ll(e,t,n),e=e.sibling}function gm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var s=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ct(t,s,n),t[st]=e,t[yt]=n}catch(c){_e(e,e.return,c)}}var wn=!1,Fe=!1,Tc=!1,ym=typeof WeakSet=="function"?WeakSet:Set,it=null;function cv(e,t){if(e=e.containerInfo,Xc=io,e=Cd(e),gr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var r=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var m=0,x=-1,w=-1,M=0,z=0,U=e,_=null;t:for(;;){for(var R;U!==n||r!==0&&U.nodeType!==3||(x=m+r),U!==c||s!==0&&U.nodeType!==3||(w=m+s),U.nodeType===3&&(m+=U.nodeValue.length),(R=U.firstChild)!==null;)_=U,U=R;for(;;){if(U===e)break t;if(_===n&&++M===r&&(x=m),_===c&&++z===s&&(w=m),(R=U.nextSibling)!==null)break;U=_,_=U.parentNode}U=R}n=x===-1||w===-1?null:{start:x,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kc={focusedElem:e,selectionRange:n},io=!1,it=t;it!==null;)if(t=it,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,it=e;else for(;it!==null;){switch(t=it,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,r=c.memoizedProps,c=c.memoizedState,s=n.stateNode;try{var W=Ma(n.type,r);e=s.getSnapshotBeforeUpdate(W,c),s.__reactInternalSnapshotBeforeUpdate=e}catch(ce){_e(n,n.return,ce)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ic(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ic(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,it=e;break}it=t.return}}function xm(e,t,n){var s=n.flags;switch(n.tag){case 0:case 11:case 15:Nn(e,n),s&4&&fs(5,n);break;case 1:if(Nn(e,n),s&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){_e(n,n.return,m)}else{var r=Ma(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){_e(n,n.return,m)}}s&64&&dm(n),s&512&&ds(n,n.return);break;case 3:if(Nn(e,n),s&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{nh(e,t)}catch(m){_e(n,n.return,m)}}break;case 27:t===null&&s&4&&gm(n);case 26:case 5:Nn(e,n),t===null&&s&4&&mm(n),s&512&&ds(n,n.return);break;case 12:Nn(e,n);break;case 31:Nn(e,n),s&4&&Sm(e,n);break;case 13:Nn(e,n),s&4&&wm(e,n),s&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=xv.bind(null,n),Uv(e,n))));break;case 22:if(s=n.memoizedState!==null||wn,!s){t=t!==null&&t.memoizedState!==null||Fe,r=wn;var c=Fe;wn=s,(Fe=t)&&!c?jn(e,n,(n.subtreeFlags&8772)!==0):Nn(e,n),wn=r,Fe=c}break;case 30:break;default:Nn(e,n)}}function bm(e){var t=e.alternate;t!==null&&(e.alternate=null,bm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,bt=!1;function Tn(e,t,n){for(n=n.child;n!==null;)vm(e,t,n),n=n.sibling}function vm(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Vi,n)}catch{}switch(n.tag){case 26:Fe||nn(n,t),Tn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Fe||nn(n,t);var s=Ye,r=bt;$n(n.type)&&(Ye=n.stateNode,bt=!1),Tn(e,t,n),Ss(n.stateNode),Ye=s,bt=r;break;case 5:Fe||nn(n,t);case 6:if(s=Ye,r=bt,Ye=null,Tn(e,t,n),Ye=s,bt=r,Ye!==null)if(bt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(n.stateNode)}catch(c){_e(n,t,c)}else try{Ye.removeChild(n.stateNode)}catch(c){_e(n,t,c)}break;case 18:Ye!==null&&(bt?(e=Ye,dp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ni(e)):dp(Ye,n.stateNode));break;case 4:s=Ye,r=bt,Ye=n.stateNode.containerInfo,bt=!0,Tn(e,t,n),Ye=s,bt=r;break;case 0:case 11:case 14:case 15:Kn(2,n,t),Fe||Kn(4,n,t),Tn(e,t,n);break;case 1:Fe||(nn(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"&&hm(n,t,s)),Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:Fe=(s=Fe)||n.memoizedState!==null,Tn(e,t,n),Fe=s;break;default:Tn(e,t,n)}}function Sm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ni(e)}catch(n){_e(t,t.return,n)}}}function wm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ni(e)}catch(n){_e(t,t.return,n)}}function uv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ym),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ym),t;default:throw Error(o(435,e.tag))}}function Ul(e,t){var n=uv(e);t.forEach(function(s){if(!n.has(s)){n.add(s);var r=bv.bind(null,e,s);s.then(r,r)}})}function vt(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var r=n[s],c=e,m=t,x=m;e:for(;x!==null;){switch(x.tag){case 27:if($n(x.type)){Ye=x.stateNode,bt=!1;break e}break;case 5:Ye=x.stateNode,bt=!1;break e;case 3:case 4:Ye=x.stateNode.containerInfo,bt=!0;break e}x=x.return}if(Ye===null)throw Error(o(160));vm(c,m,r),Ye=null,bt=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tm(t,e),t=t.sibling}var Jt=null;function Tm(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),St(e),s&4&&(Kn(3,e,e.return),fs(3,e),Kn(5,e,e.return));break;case 1:vt(t,e),St(e),s&512&&(Fe||n===null||nn(n,n.return)),s&64&&wn&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?s:n.concat(s))));break;case 26:var r=Jt;if(vt(t,e),St(e),s&512&&(Fe||n===null||nn(n,n.return)),s&4){var c=n!==null?n.memoizedState:null;if(s=e.memoizedState,n===null)if(s===null)if(e.stateNode===null){e:{s=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(s){case"title":c=r.getElementsByTagName("title")[0],(!c||c[Bi]||c[st]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(s),r.head.insertBefore(c,r.querySelector("head > title"))),ct(c,s,n),c[st]=e,at(c),s=c;break e;case"link":var m=Tp("link","href",r).get(s+(n.href||""));if(m){for(var x=0;x<m.length;x++)if(c=m[x],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(x,1);break t}}c=r.createElement(s),ct(c,s,n),r.head.appendChild(c);break;case"meta":if(m=Tp("meta","content",r).get(s+(n.content||""))){for(x=0;x<m.length;x++)if(c=m[x],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(x,1);break t}}c=r.createElement(s),ct(c,s,n),r.head.appendChild(c);break;default:throw Error(o(468,s))}c[st]=e,at(c),s=c}e.stateNode=s}else Np(r,e.type,e.stateNode);else e.stateNode=wp(r,s,e.memoizedProps);else c!==s?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,s===null?Np(r,e.type,e.stateNode):wp(r,s,e.memoizedProps)):s===null&&e.stateNode!==null&&vc(e,e.memoizedProps,n.memoizedProps)}break;case 27:vt(t,e),St(e),s&512&&(Fe||n===null||nn(n,n.return)),n!==null&&s&4&&vc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vt(t,e),St(e),s&512&&(Fe||n===null||nn(n,n.return)),e.flags&32){r=e.stateNode;try{Za(r,"")}catch(W){_e(e,e.return,W)}}s&4&&e.stateNode!=null&&(r=e.memoizedProps,vc(e,r,n!==null?n.memoizedProps:r)),s&1024&&(Tc=!0);break;case 6:if(vt(t,e),St(e),s&4){if(e.stateNode===null)throw Error(o(162));s=e.memoizedProps,n=e.stateNode;try{n.nodeValue=s}catch(W){_e(e,e.return,W)}}break;case 3:if(eo=null,r=Jt,Jt=$l(t.containerInfo),vt(t,e),Jt=r,St(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{Ni(t.containerInfo)}catch(W){_e(e,e.return,W)}Tc&&(Tc=!1,Nm(e));break;case 4:s=Jt,Jt=$l(e.stateNode.containerInfo),vt(t,e),St(e),Jt=s;break;case 12:vt(t,e),St(e);break;case 31:vt(t,e),St(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ul(e,s)));break;case 13:vt(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Hl=Nt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ul(e,s)));break;case 22:r=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,M=wn,z=Fe;if(wn=M||r,Fe=z||w,vt(t,e),Fe=z,wn=M,St(e),s&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||w||wn||Fe||Ca(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(c=w.stateNode,r)m=c.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{x=w.stateNode;var U=w.memoizedProps.style,_=U!=null&&U.hasOwnProperty("display")?U.display:null;x.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(W){_e(w,w.return,W)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=r?"":w.memoizedProps}catch(W){_e(w,w.return,W)}}}else if(t.tag===18){if(n===null){w=t;try{var R=w.stateNode;r?hp(R,!0):hp(w.stateNode,!1)}catch(W){_e(w,w.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(n=s.retryQueue,n!==null&&(s.retryQueue=null,Ul(e,n))));break;case 19:vt(t,e),St(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ul(e,s)));break;case 30:break;case 21:break;default:vt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var n,s=e.return;s!==null;){if(pm(s)){n=s;break}s=s.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode,c=Sc(e);Ll(e,c,r);break;case 5:var m=n.stateNode;n.flags&32&&(Za(m,""),n.flags&=-33);var x=Sc(e);Ll(e,x,m);break;case 3:case 4:var w=n.stateNode.containerInfo,M=Sc(e);wc(e,M,w);break;default:throw Error(o(161))}}catch(z){_e(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Nm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)xm(e,t.alternate,t),t=t.sibling}function Ca(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kn(4,t,t.return),Ca(t);break;case 1:nn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&hm(t,t.return,n),Ca(t);break;case 27:Ss(t.stateNode);case 26:case 5:nn(t,t.return),Ca(t);break;case 22:t.memoizedState===null&&Ca(t);break;case 30:Ca(t);break;default:Ca(t)}e=e.sibling}}function jn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,r=e,c=t,m=c.flags;switch(c.tag){case 0:case 11:case 15:jn(r,c,n),fs(4,c);break;case 1:if(jn(r,c,n),s=c,r=s.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(M){_e(s,s.return,M)}if(s=c,r=s.updateQueue,r!==null){var x=s.stateNode;try{var w=r.shared.hiddenCallbacks;if(w!==null)for(r.shared.hiddenCallbacks=null,r=0;r<w.length;r++)th(w[r],x)}catch(M){_e(s,s.return,M)}}n&&m&64&&dm(c),ds(c,c.return);break;case 27:gm(c);case 26:case 5:jn(r,c,n),n&&s===null&&m&4&&mm(c),ds(c,c.return);break;case 12:jn(r,c,n);break;case 31:jn(r,c,n),n&&m&4&&Sm(r,c);break;case 13:jn(r,c,n),n&&m&4&&wm(r,c);break;case 22:c.memoizedState===null&&jn(r,c,n),ds(c,c.return);break;case 30:break;default:jn(r,c,n)}t=t.sibling}}function Nc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&$i(n))}function jc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$i(e))}function Pt(e,t,n,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jm(e,t,n,s),t=t.sibling}function jm(e,t,n,s){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Pt(e,t,n,s),r&2048&&fs(9,t);break;case 1:Pt(e,t,n,s);break;case 3:Pt(e,t,n,s),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$i(e)));break;case 12:if(r&2048){Pt(e,t,n,s),e=t.stateNode;try{var c=t.memoizedProps,m=c.id,x=c.onPostCommit;typeof x=="function"&&x(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){_e(t,t.return,w)}}else Pt(e,t,n,s);break;case 31:Pt(e,t,n,s);break;case 13:Pt(e,t,n,s);break;case 23:break;case 22:c=t.stateNode,m=t.alternate,t.memoizedState!==null?c._visibility&2?Pt(e,t,n,s):hs(e,t):c._visibility&2?Pt(e,t,n,s):(c._visibility|=2,hi(e,t,n,s,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Nc(m,t);break;case 24:Pt(e,t,n,s),r&2048&&jc(t.alternate,t);break;default:Pt(e,t,n,s)}}function hi(e,t,n,s,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,m=t,x=n,w=s,M=m.flags;switch(m.tag){case 0:case 11:case 15:hi(c,m,x,w,r),fs(8,m);break;case 23:break;case 22:var z=m.stateNode;m.memoizedState!==null?z._visibility&2?hi(c,m,x,w,r):hs(c,m):(z._visibility|=2,hi(c,m,x,w,r)),r&&M&2048&&Nc(m.alternate,m);break;case 24:hi(c,m,x,w,r),r&&M&2048&&jc(m.alternate,m);break;default:hi(c,m,x,w,r)}t=t.sibling}}function hs(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,s=t,r=s.flags;switch(s.tag){case 22:hs(n,s),r&2048&&Nc(s.alternate,s);break;case 24:hs(n,s),r&2048&&jc(s.alternate,s);break;default:hs(n,s)}t=t.sibling}}var ms=8192;function mi(e,t,n){if(e.subtreeFlags&ms)for(e=e.child;e!==null;)Am(e,t,n),e=e.sibling}function Am(e,t,n){switch(e.tag){case 26:mi(e,t,n),e.flags&ms&&e.memoizedState!==null&&Pv(n,Jt,e.memoizedState,e.memoizedProps);break;case 5:mi(e,t,n);break;case 3:case 4:var s=Jt;Jt=$l(e.stateNode.containerInfo),mi(e,t,n),Jt=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=ms,ms=16777216,mi(e,t,n),ms=s):mi(e,t,n));break;default:mi(e,t,n)}}function Em(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ps(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];it=s,Cm(s,e)}Em(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mm(e),e=e.sibling}function Mm(e){switch(e.tag){case 0:case 11:case 15:ps(e),e.flags&2048&&Kn(9,e,e.return);break;case 3:ps(e);break;case 12:ps(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bl(e)):ps(e);break;default:ps(e)}}function Bl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];it=s,Cm(s,e)}Em(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kn(8,t,t.return),Bl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Bl(t));break;default:Bl(t)}e=e.sibling}}function Cm(e,t){for(;it!==null;){var n=it;switch(n.tag){case 0:case 11:case 15:Kn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var s=n.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:$i(n.memoizedState.cache)}if(s=n.child,s!==null)s.return=n,it=s;else e:for(n=e;it!==null;){s=it;var r=s.sibling,c=s.return;if(bm(s),s===n){it=null;break e}if(r!==null){r.return=c,it=r;break e}it=c}}}var fv={getCacheForType:function(e){var t=ot(Ie),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ot(Ie).controller.signal}},dv=typeof WeakMap=="function"?WeakMap:Map,Me=0,Oe=null,ve=null,we=0,Ce=0,Dt=null,Qn=!1,pi=!1,Ac=!1,An=0,qe=0,Zn=0,_a=0,Ec=0,Rt=0,gi=0,gs=null,wt=null,Mc=!1,Hl=0,_m=0,Yl=1/0,Gl=null,In=null,We=0,Jn=null,yi=null,En=0,Cc=0,_c=null,Dm=null,ys=0,Dc=null;function zt(){return(Me&2)!==0&&we!==0?we&-we:D.T!==null?Lc():Zf()}function Rm(){if(Rt===0)if((we&536870912)===0||je){var e=Ps;Ps<<=1,(Ps&3932160)===0&&(Ps=262144),Rt=e}else Rt=536870912;return e=Ct.current,e!==null&&(e.flags|=32),Rt}function Tt(e,t,n){(e===Oe&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)&&(xi(e,0),Pn(e,we,Rt,!1)),Ui(e,n),((Me&2)===0||e!==Oe)&&(e===Oe&&((Me&2)===0&&(_a|=n),qe===4&&Pn(e,we,Rt,!1)),an(e))}function zm(e,t,n){if((Me&6)!==0)throw Error(o(327));var s=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Li(e,t),r=s?pv(e,t):zc(e,t,!0),c=s;do{if(r===0){pi&&!s&&Pn(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!hv(n)){r=zc(e,t,!1),c=!1;continue}if(r===2){if(c=t,e.errorRecoveryDisabledLanes&c)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var x=e;r=gs;var w=x.current.memoizedState.isDehydrated;if(w&&(xi(x,m).flags|=256),m=zc(x,m,!1),m!==2){if(Ac&&!w){x.errorRecoveryDisabledLanes|=c,_a|=c,r=4;break e}c=wt,wt=r,c!==null&&(wt===null?wt=c:wt.push.apply(wt,c))}r=m}if(c=!1,r!==2)continue}}if(r===1){xi(e,0),Pn(e,t,0,!0);break}e:{switch(s=e,c=r,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Pn(s,t,Rt,!Qn);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=Hl+300-Nt(),10<r)){if(Pn(s,t,Rt,!Qn),$s(s,0,!0)!==0)break e;En=t,s.timeoutHandle=up(km.bind(null,s,n,wt,Gl,Mc,t,Rt,_a,gi,Qn,c,"Throttled",-0,0),r);break e}km(s,n,wt,Gl,Mc,t,Rt,_a,gi,Qn,c,null,-0,0)}}break}while(!0);an(e)}function km(e,t,n,s,r,c,m,x,w,M,z,U,_,R){if(e.timeoutHandle=-1,U=t.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Am(t,c,U);var W=(c&62914560)===c?Hl-Nt():(c&4194048)===c?_m-Nt():0;if(W=Fv(U,W),W!==null){En=c,e.cancelPendingCommit=W(Gm.bind(null,e,t,c,n,s,r,m,x,w,z,U,null,_,R)),Pn(e,c,m,!M);return}}Gm(e,t,c,n,s,r,m,x,w)}function hv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var s=0;s<n.length;s++){var r=n[s],c=r.getSnapshot;r=r.value;try{if(!Et(c(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pn(e,t,n,s){t&=~Ec,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var r=t;0<r;){var c=31-At(r),m=1<<c;s[c]=-1,r&=~m}n!==0&&Xf(e,n,t)}function ql(){return(Me&6)===0?(xs(0),!1):!0}function Rc(){if(ve!==null){if(Ce===0)var e=ve.return;else e=ve,gn=Sa=null,Ir(e),ri=null,es=0,e=ve;for(;e!==null;)fm(e.alternate,e),e=e.return;ve=null}}function xi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,zv(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),En=0,Rc(),Oe=e,ve=n=mn(e.current,null),we=t,Ce=0,Dt=null,Qn=!1,pi=Li(e,t),Ac=!1,gi=Rt=Ec=_a=Zn=qe=0,wt=gs=null,Mc=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var r=31-At(s),c=1<<r;t|=e[r],s&=~c}return An=t,ul(),n}function Om(e,t){me=null,D.H=rs,t===oi||t===xl?(t=Fd(),Ce=3):t===Vr?(t=Fd(),Ce=4):Ce=t===uc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,ve===null&&(qe=1,Rl(e,Bt(t,e.current)))}function Vm(){var e=Ct.current;return e===null?!0:(we&4194048)===we?qt===null:(we&62914560)===we||(we&536870912)!==0?e===qt:!1}function Lm(){var e=D.H;return D.H=rs,e===null?rs:e}function Um(){var e=D.A;return D.A=fv,e}function Xl(){qe=4,Qn||(we&4194048)!==we&&Ct.current!==null||(pi=!0),(Zn&134217727)===0&&(_a&134217727)===0||Oe===null||Pn(Oe,we,Rt,!1)}function zc(e,t,n){var s=Me;Me|=2;var r=Lm(),c=Um();(Oe!==e||we!==t)&&(Gl=null,xi(e,t)),t=!1;var m=qe;e:do try{if(Ce!==0&&ve!==null){var x=ve,w=Dt;switch(Ce){case 8:Rc(),m=6;break e;case 3:case 2:case 9:case 6:Ct.current===null&&(t=!0);var M=Ce;if(Ce=0,Dt=null,bi(e,x,w,M),n&&pi){m=0;break e}break;default:M=Ce,Ce=0,Dt=null,bi(e,x,w,M)}}mv(),m=qe;break}catch(z){Om(e,z)}while(!0);return t&&e.shellSuspendCounter++,gn=Sa=null,Me=s,D.H=r,D.A=c,ve===null&&(Oe=null,we=0,ul()),m}function mv(){for(;ve!==null;)Bm(ve)}function pv(e,t){var n=Me;Me|=2;var s=Lm(),r=Um();Oe!==e||we!==t?(Gl=null,Yl=Nt()+500,xi(e,t)):pi=Li(e,t);e:do try{if(Ce!==0&&ve!==null){t=ve;var c=Dt;t:switch(Ce){case 1:Ce=0,Dt=null,bi(e,t,c,1);break;case 2:case 9:if(Jd(c)){Ce=0,Dt=null,Hm(t);break}t=function(){Ce!==2&&Ce!==9||Oe!==e||(Ce=7),an(e)},c.then(t,t);break e;case 3:Ce=7;break e;case 4:Ce=5;break e;case 7:Jd(c)?(Ce=0,Dt=null,Hm(t)):(Ce=0,Dt=null,bi(e,t,c,7));break;case 5:var m=null;switch(ve.tag){case 26:m=ve.memoizedState;case 5:case 27:var x=ve;if(m?jp(m):x.stateNode.complete){Ce=0,Dt=null;var w=x.sibling;if(w!==null)ve=w;else{var M=x.return;M!==null?(ve=M,Kl(M)):ve=null}break t}}Ce=0,Dt=null,bi(e,t,c,5);break;case 6:Ce=0,Dt=null,bi(e,t,c,6);break;case 8:Rc(),qe=6;break e;default:throw Error(o(462))}}gv();break}catch(z){Om(e,z)}while(!0);return gn=Sa=null,D.H=s,D.A=r,Me=n,ve!==null?0:(Oe=null,we=0,ul(),qe)}function gv(){for(;ve!==null&&!Bx();)Bm(ve)}function Bm(e){var t=cm(e.alternate,e,An);e.memoizedProps=e.pendingProps,t===null?Kl(e):ve=t}function Hm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=am(n,t,t.pendingProps,t.type,void 0,we);break;case 11:t=am(n,t,t.pendingProps,t.type.render,t.ref,we);break;case 5:Ir(t);default:fm(n,t),t=ve=Ud(t,An),t=cm(n,t,An)}e.memoizedProps=e.pendingProps,t===null?Kl(e):ve=t}function bi(e,t,n,s){gn=Sa=null,Ir(t),ri=null,es=0;var r=t.return;try{if(iv(e,r,t,n,we)){qe=1,Rl(e,Bt(n,e.current)),ve=null;return}}catch(c){if(r!==null)throw ve=r,c;qe=1,Rl(e,Bt(n,e.current)),ve=null;return}t.flags&32768?(je||s===1?e=!0:pi||(we&536870912)!==0?e=!1:(Qn=e=!0,(s===2||s===9||s===3||s===6)&&(s=Ct.current,s!==null&&s.tag===13&&(s.flags|=16384))),Ym(t,e)):Kl(t)}function Kl(e){var t=e;do{if((t.flags&32768)!==0){Ym(t,Qn);return}e=t.return;var n=ov(t.alternate,t,An);if(n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);qe===0&&(qe=5)}function Ym(e,t){do{var n=rv(e.alternate,e);if(n!==null){n.flags&=32767,ve=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ve=e;return}ve=e=n}while(e!==null);qe=6,ve=null}function Gm(e,t,n,s,r,c,m,x,w){e.cancelPendingCommit=null;do Ql();while(We!==0);if((Me&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=Sr,Jx(e,n,c,m,x,w),e===Oe&&(ve=Oe=null,we=0),yi=t,Jn=e,En=n,Cc=c,_c=r,Dm=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vv(Is,function(){return Zm(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=D.T,D.T=null,r=Q.p,Q.p=2,m=Me,Me|=4;try{cv(e,t,n)}finally{Me=m,Q.p=r,D.T=s}}We=1,qm(),Xm(),Km()}}function qm(){if(We===1){We=0;var e=Jn,t=yi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var s=Q.p;Q.p=2;var r=Me;Me|=4;try{Tm(t,e);var c=Kc,m=Cd(e.containerInfo),x=c.focusedElem,w=c.selectionRange;if(m!==x&&x&&x.ownerDocument&&Md(x.ownerDocument.documentElement,x)){if(w!==null&&gr(x)){var M=w.start,z=w.end;if(z===void 0&&(z=M),"selectionStart"in x)x.selectionStart=M,x.selectionEnd=Math.min(z,x.value.length);else{var U=x.ownerDocument||document,_=U&&U.defaultView||window;if(_.getSelection){var R=_.getSelection(),W=x.textContent.length,ce=Math.min(w.start,W),ke=w.end===void 0?ce:Math.min(w.end,W);!R.extend&&ce>ke&&(m=ke,ke=ce,ce=m);var A=Ed(x,ce),j=Ed(x,ke);if(A&&j&&(R.rangeCount!==1||R.anchorNode!==A.node||R.anchorOffset!==A.offset||R.focusNode!==j.node||R.focusOffset!==j.offset)){var E=U.createRange();E.setStart(A.node,A.offset),R.removeAllRanges(),ce>ke?(R.addRange(E),R.extend(j.node,j.offset)):(E.setEnd(j.node,j.offset),R.addRange(E))}}}}for(U=[],R=x;R=R.parentNode;)R.nodeType===1&&U.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<U.length;x++){var O=U[x];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}io=!!Xc,Kc=Xc=null}finally{Me=r,Q.p=s,D.T=n}}e.current=t,We=2}}function Xm(){if(We===2){We=0;var e=Jn,t=yi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var s=Q.p;Q.p=2;var r=Me;Me|=4;try{xm(e,t.alternate,t)}finally{Me=r,Q.p=s,D.T=n}}We=3}}function Km(){if(We===4||We===3){We=0,Hx();var e=Jn,t=yi,n=En,s=Dm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,yi=Jn=null,Qm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(In=null),Fo(n),t=t.stateNode,jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Vi,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=D.T,r=Q.p,Q.p=2,D.T=null;try{for(var c=e.onRecoverableError,m=0;m<s.length;m++){var x=s[m];c(x.value,{componentStack:x.stack})}}finally{D.T=t,Q.p=r}}(En&3)!==0&&Ql(),an(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Dc?ys++:(ys=0,Dc=e):ys=0,xs(0)}}function Qm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$i(t)))}function Ql(){return qm(),Xm(),Km(),Zm()}function Zm(){if(We!==5)return!1;var e=Jn,t=Cc;Cc=0;var n=Fo(En),s=D.T,r=Q.p;try{Q.p=32>n?32:n,D.T=null,n=_c,_c=null;var c=Jn,m=En;if(We=0,yi=Jn=null,En=0,(Me&6)!==0)throw Error(o(331));var x=Me;if(Me|=4,Mm(c.current),jm(c,c.current,m,n),Me=x,xs(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Vi,c)}catch{}return!0}finally{Q.p=r,D.T=s,Qm(e,t)}}function Im(e,t,n){t=Bt(n,t),t=cc(e.stateNode,t,2),e=Gn(e,t,2),e!==null&&(Ui(e,2),an(e))}function _e(e,t,n){if(e.tag===3)Im(e,e,n);else for(;t!==null;){if(t.tag===3){Im(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(In===null||!In.has(s))){e=Bt(n,e),n=Jh(2),s=Gn(t,n,2),s!==null&&(Ph(n,s,t,e),Ui(s,2),an(s));break}}t=t.return}}function kc(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new dv;var r=new Set;s.set(t,r)}else r=s.get(t),r===void 0&&(r=new Set,s.set(t,r));r.has(n)||(Ac=!0,r.add(n),e=yv.bind(null,e,t,n),t.then(e,e))}function yv(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Oe===e&&(we&n)===n&&(qe===4||qe===3&&(we&62914560)===we&&300>Nt()-Hl?(Me&2)===0&&xi(e,0):Ec|=n,gi===we&&(gi=0)),an(e)}function Jm(e,t){t===0&&(t=qf()),e=xa(e,t),e!==null&&(Ui(e,t),an(e))}function xv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jm(e,n)}function bv(e,t){var n=0;switch(e.tag){case 31:case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(t),Jm(e,n)}function vv(e,t){return Zo(e,t)}var Zl=null,vi=null,Oc=!1,Il=!1,Vc=!1,Fn=0;function an(e){e!==vi&&e.next===null&&(vi===null?Zl=vi=e:vi=vi.next=e),Il=!0,Oc||(Oc=!0,wv())}function xs(e,t){if(!Vc&&Il){Vc=!0;do for(var n=!1,s=Zl;s!==null;){if(e!==0){var r=s.pendingLanes;if(r===0)var c=0;else{var m=s.suspendedLanes,x=s.pingedLanes;c=(1<<31-At(42|e)+1)-1,c&=r&~(m&~x),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Wm(s,c))}else c=we,c=$s(s,s===Oe?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Li(s,c)||(n=!0,Wm(s,c));s=s.next}while(n);Vc=!1}}function Sv(){Pm()}function Pm(){Il=Oc=!1;var e=0;Fn!==0&&Rv()&&(e=Fn);for(var t=Nt(),n=null,s=Zl;s!==null;){var r=s.next,c=Fm(s,t);c===0?(s.next=null,n===null?Zl=r:n.next=r,r===null&&(vi=n)):(n=s,(e!==0||(c&3)!==0)&&(Il=!0)),s=r}We!==0&&We!==5||xs(e),Fn!==0&&(Fn=0)}function Fm(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var m=31-At(c),x=1<<m,w=r[m];w===-1?((x&n)===0||(x&s)!==0)&&(r[m]=Ix(x,t)):w<=t&&(e.expiredLanes|=x),c&=~x}if(t=Oe,n=we,n=$s(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,n===0||e===t&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Io(s),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Li(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(s!==null&&Io(s),Fo(n)){case 2:case 8:n=Yf;break;case 32:n=Is;break;case 268435456:n=Gf;break;default:n=Is}return s=$m.bind(null,e),n=Zo(n,s),e.callbackPriority=t,e.callbackNode=n,t}return s!==null&&s!==null&&Io(s),e.callbackPriority=2,e.callbackNode=null,2}function $m(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ql()&&e.callbackNode!==n)return null;var s=we;return s=$s(e,e===Oe?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(zm(e,s,t),Fm(e,Nt()),e.callbackNode!=null&&e.callbackNode===n?$m.bind(null,e):null)}function Wm(e,t){if(Ql())return null;zm(e,t,!0)}function wv(){kv(function(){(Me&6)!==0?Zo(Hf,Sv):Pm()})}function Lc(){if(Fn===0){var e=si;e===0&&(e=Js,Js<<=1,(Js&261888)===0&&(Js=256)),Fn=e}return Fn}function ep(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nl(""+e)}function tp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Tv(e,t,n,s,r){if(t==="submit"&&n&&n.stateNode===r){var c=ep((r[yt]||null).action),m=s.submitter;m&&(t=(t=m[yt]||null)?ep(t.formAction):m.getAttribute("formAction"),t!==null&&(c=t,m=null));var x=new ll("action","action",null,s,r);e.push({event:x,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Fn!==0){var w=m?tp(r,m):new FormData(r);ac(n,{pending:!0,data:w,method:r.method,action:c},null,w)}}else typeof c=="function"&&(x.preventDefault(),w=m?tp(r,m):new FormData(r),ac(n,{pending:!0,data:w,method:r.method,action:c},c,w))},currentTarget:r}]})}}for(var Uc=0;Uc<vr.length;Uc++){var Bc=vr[Uc],Nv=Bc.toLowerCase(),jv=Bc[0].toUpperCase()+Bc.slice(1);It(Nv,"on"+jv)}It(Rd,"onAnimationEnd"),It(zd,"onAnimationIteration"),It(kd,"onAnimationStart"),It("dblclick","onDoubleClick"),It("focusin","onFocus"),It("focusout","onBlur"),It(Yb,"onTransitionRun"),It(Gb,"onTransitionStart"),It(qb,"onTransitionCancel"),It(Od,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Av=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bs));function np(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],r=s.event;s=s.listeners;e:{var c=void 0;if(t)for(var m=s.length-1;0<=m;m--){var x=s[m],w=x.instance,M=x.currentTarget;if(x=x.listener,w!==c&&r.isPropagationStopped())break e;c=x,r.currentTarget=M;try{c(r)}catch(z){cl(z)}r.currentTarget=null,c=w}else for(m=0;m<s.length;m++){if(x=s[m],w=x.instance,M=x.currentTarget,x=x.listener,w!==c&&r.isPropagationStopped())break e;c=x,r.currentTarget=M;try{c(r)}catch(z){cl(z)}r.currentTarget=null,c=w}}}}function Se(e,t){var n=t[$o];n===void 0&&(n=t[$o]=new Set);var s=e+"__bubble";n.has(s)||(ap(t,e,2,!1),n.add(s))}function Hc(e,t,n){var s=0;t&&(s|=4),ap(n,e,s,t)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Yc(e){if(!e[Jl]){e[Jl]=!0,Pf.forEach(function(n){n!=="selectionchange"&&(Av.has(n)||Hc(n,!1,e),Hc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jl]||(t[Jl]=!0,Hc("selectionchange",!1,t))}}function ap(e,t,n,s){switch(Rp(t)){case 2:var r=e1;break;case 8:r=t1;break;default:r=nu}n=r.bind(null,t,n,e),r=void 0,!or||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Gc(e,t,n,s,r){var c=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var m=s.tag;if(m===3||m===4){var x=s.stateNode.containerInfo;if(x===r)break;if(m===4)for(m=s.return;m!==null;){var w=m.tag;if((w===3||w===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;x!==null;){if(m=Ga(x),m===null)return;if(w=m.tag,w===5||w===6||w===26||w===27){s=c=m;continue e}x=x.parentNode}}s=s.return}rd(function(){var M=c,z=sr(n),U=[];e:{var _=Vd.get(e);if(_!==void 0){var R=ll,W=e;switch(e){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":R=bb;break;case"focusin":W="focus",R=fr;break;case"focusout":W="blur",R=fr;break;case"beforeblur":case"afterblur":R=fr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=ob;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=wb;break;case Rd:case zd:case kd:R=ub;break;case Od:R=Nb;break;case"scroll":case"scrollend":R=sb;break;case"wheel":R=Ab;break;case"copy":case"cut":case"paste":R=db;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=hd;break;case"toggle":case"beforetoggle":R=Mb}var ce=(t&4)!==0,ke=!ce&&(e==="scroll"||e==="scrollend"),A=ce?_!==null?_+"Capture":null:_;ce=[];for(var j=M,E;j!==null;){var O=j;if(E=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||E===null||A===null||(O=Yi(j,A),O!=null&&ce.push(vs(j,O,E))),ke)break;j=j.return}0<ce.length&&(_=new R(_,W,null,n,z),U.push({event:_,listeners:ce}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",_&&n!==ir&&(W=n.relatedTarget||n.fromElement)&&(Ga(W)||W[Ya]))break e;if((R||_)&&(_=z.window===z?z:(_=z.ownerDocument)?_.defaultView||_.parentWindow:window,R?(W=n.relatedTarget||n.toElement,R=M,W=W?Ga(W):null,W!==null&&(ke=h(W),ce=W.tag,W!==ke||ce!==5&&ce!==27&&ce!==6)&&(W=null)):(R=null,W=M),R!==W)){if(ce=fd,O="onMouseLeave",A="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ce=hd,O="onPointerLeave",A="onPointerEnter",j="pointer"),ke=R==null?_:Hi(R),E=W==null?_:Hi(W),_=new ce(O,j+"leave",R,n,z),_.target=ke,_.relatedTarget=E,O=null,Ga(z)===M&&(ce=new ce(A,j+"enter",W,n,z),ce.target=E,ce.relatedTarget=ke,O=ce),ke=O,R&&W)t:{for(ce=Ev,A=R,j=W,E=0,O=A;O;O=ce(O))E++;O=0;for(var oe=j;oe;oe=ce(oe))O++;for(;0<E-O;)A=ce(A),E--;for(;0<O-E;)j=ce(j),O--;for(;E--;){if(A===j||j!==null&&A===j.alternate){ce=A;break t}A=ce(A),j=ce(j)}ce=null}else ce=null;R!==null&&ip(U,_,R,ce,!1),W!==null&&ke!==null&&ip(U,ke,W,ce,!0)}}e:{if(_=M?Hi(M):window,R=_.nodeName&&_.nodeName.toLowerCase(),R==="select"||R==="input"&&_.type==="file")var Ae=Sd;else if(bd(_))if(wd)Ae=Ub;else{Ae=Vb;var ae=Ob}else R=_.nodeName,!R||R.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?M&&ar(M.elementType)&&(Ae=Sd):Ae=Lb;if(Ae&&(Ae=Ae(e,M))){vd(U,Ae,n,z);break e}ae&&ae(e,_,M),e==="focusout"&&M&&_.type==="number"&&M.memoizedProps.value!=null&&nr(_,"number",_.value)}switch(ae=M?Hi(M):window,e){case"focusin":(bd(ae)||ae.contentEditable==="true")&&(Fa=ae,yr=M,Ji=null);break;case"focusout":Ji=yr=Fa=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,_d(U,n,z);break;case"selectionchange":if(Hb)break;case"keydown":case"keyup":_d(U,n,z)}var pe;if(hr)e:{switch(e){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Pa?yd(e,n)&&(Te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Te="onCompositionStart");Te&&(md&&n.locale!=="ko"&&(Pa||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Pa&&(pe=cd()):(On=z,rr="value"in On?On.value:On.textContent,Pa=!0)),ae=Pl(M,Te),0<ae.length&&(Te=new dd(Te,e,null,n,z),U.push({event:Te,listeners:ae}),pe?Te.data=pe:(pe=xd(n),pe!==null&&(Te.data=pe)))),(pe=_b?Db(e,n):Rb(e,n))&&(Te=Pl(M,"onBeforeInput"),0<Te.length&&(ae=new dd("onBeforeInput","beforeinput",null,n,z),U.push({event:ae,listeners:Te}),ae.data=pe)),Tv(U,e,M,n,z)}np(U,t)})}function vs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Pl(e,t){for(var n=t+"Capture",s=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=Yi(e,n),r!=null&&s.unshift(vs(e,r,c)),r=Yi(e,t),r!=null&&s.push(vs(e,r,c))),e.tag===3)return s;e=e.return}return[]}function Ev(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ip(e,t,n,s,r){for(var c=t._reactName,m=[];n!==null&&n!==s;){var x=n,w=x.alternate,M=x.stateNode;if(x=x.tag,w!==null&&w===s)break;x!==5&&x!==26&&x!==27||M===null||(w=M,r?(M=Yi(n,c),M!=null&&m.unshift(vs(n,M,w))):r||(M=Yi(n,c),M!=null&&m.push(vs(n,M,w)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var Mv=/\r\n?/g,Cv=/\u0000|\uFFFD/g;function sp(e){return(typeof e=="string"?e:""+e).replace(Mv,`
`).replace(Cv,"")}function lp(e,t){return t=sp(t),sp(e)===t}function ze(e,t,n,s,r,c){switch(n){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||Za(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&Za(e,""+s);break;case"className":el(e,"class",s);break;case"tabIndex":el(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":el(e,n,s);break;case"style":ld(e,s,c);break;case"data":if(t!=="object"){el(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=nl(""+s),e.setAttribute(n,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&ze(e,t,"name",r.name,r,null),ze(e,t,"formEncType",r.formEncType,r,null),ze(e,t,"formMethod",r.formMethod,r,null),ze(e,t,"formTarget",r.formTarget,r,null)):(ze(e,t,"encType",r.encType,r,null),ze(e,t,"method",r.method,r,null),ze(e,t,"target",r.target,r,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=nl(""+s),e.setAttribute(n,s);break;case"onClick":s!=null&&(e.onclick=dn);break;case"onScroll":s!=null&&Se("scroll",e);break;case"onScrollEnd":s!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(n=s.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}n=nl(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""+s):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":s===!0?e.setAttribute(n,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,s):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(n,s):e.removeAttribute(n);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(n):e.setAttribute(n,s);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Ws(e,"popover",s);break;case"xlinkActuate":fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":fn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":fn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":fn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":fn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ws(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ab.get(n)||n,Ws(e,n,s))}}function qc(e,t,n,s,r,c){switch(n){case"style":ld(e,s,c);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(n=s.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof s=="string"?Za(e,s):(typeof s=="number"||typeof s=="bigint")&&Za(e,""+s);break;case"onScroll":s!=null&&Se("scroll",e);break;case"onScrollEnd":s!=null&&Se("scrollend",e);break;case"onClick":s!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ff.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),c=e[yt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,r),typeof s=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,s,r);break e}n in e?e[n]=s:s===!0?e.setAttribute(n,""):Ws(e,n,s)}}}function ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var s=!1,r=!1,c;for(c in n)if(n.hasOwnProperty(c)){var m=n[c];if(m!=null)switch(c){case"src":s=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ze(e,t,c,m,n,null)}}r&&ze(e,t,"srcSet",n.srcSet,n,null),s&&ze(e,t,"src",n.src,n,null);return;case"input":Se("invalid",e);var x=c=m=r=null,w=null,M=null;for(s in n)if(n.hasOwnProperty(s)){var z=n[s];if(z!=null)switch(s){case"name":r=z;break;case"type":m=z;break;case"checked":w=z;break;case"defaultChecked":M=z;break;case"value":c=z;break;case"defaultValue":x=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:ze(e,t,s,z,n,null)}}nd(e,c,x,w,M,m,r,!1);return;case"select":Se("invalid",e),s=m=c=null;for(r in n)if(n.hasOwnProperty(r)&&(x=n[r],x!=null))switch(r){case"value":c=x;break;case"defaultValue":m=x;break;case"multiple":s=x;default:ze(e,t,r,x,n,null)}t=c,n=m,e.multiple=!!s,t!=null?Qa(e,!!s,t,!1):n!=null&&Qa(e,!!s,n,!0);return;case"textarea":Se("invalid",e),c=r=s=null;for(m in n)if(n.hasOwnProperty(m)&&(x=n[m],x!=null))switch(m){case"value":s=x;break;case"defaultValue":r=x;break;case"children":c=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(o(91));break;default:ze(e,t,m,x,n,null)}id(e,s,r,c);return;case"option":for(w in n)if(n.hasOwnProperty(w)&&(s=n[w],s!=null))switch(w){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ze(e,t,w,s,n,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(s=0;s<bs.length;s++)Se(bs[s],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in n)if(n.hasOwnProperty(M)&&(s=n[M],s!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ze(e,t,M,s,n,null)}return;default:if(ar(t)){for(z in n)n.hasOwnProperty(z)&&(s=n[z],s!==void 0&&qc(e,t,z,s,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(s=n[x],s!=null&&ze(e,t,x,s,n,null))}function _v(e,t,n,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,m=null,x=null,w=null,M=null,z=null;for(R in n){var U=n[R];if(n.hasOwnProperty(R)&&U!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":w=U;default:s.hasOwnProperty(R)||ze(e,t,R,null,s,U)}}for(var _ in s){var R=s[_];if(U=n[_],s.hasOwnProperty(_)&&(R!=null||U!=null))switch(_){case"type":c=R;break;case"name":r=R;break;case"checked":M=R;break;case"defaultChecked":z=R;break;case"value":m=R;break;case"defaultValue":x=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,t));break;default:R!==U&&ze(e,t,_,R,s,U)}}tr(e,m,x,w,M,z,c,r);return;case"select":R=m=x=_=null;for(c in n)if(w=n[c],n.hasOwnProperty(c)&&w!=null)switch(c){case"value":break;case"multiple":R=w;default:s.hasOwnProperty(c)||ze(e,t,c,null,s,w)}for(r in s)if(c=s[r],w=n[r],s.hasOwnProperty(r)&&(c!=null||w!=null))switch(r){case"value":_=c;break;case"defaultValue":x=c;break;case"multiple":m=c;default:c!==w&&ze(e,t,r,c,s,w)}t=x,n=m,s=R,_!=null?Qa(e,!!n,_,!1):!!s!=!!n&&(t!=null?Qa(e,!!n,t,!0):Qa(e,!!n,n?[]:"",!1));return;case"textarea":R=_=null;for(x in n)if(r=n[x],n.hasOwnProperty(x)&&r!=null&&!s.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:ze(e,t,x,null,s,r)}for(m in s)if(r=s[m],c=n[m],s.hasOwnProperty(m)&&(r!=null||c!=null))switch(m){case"value":_=r;break;case"defaultValue":R=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==c&&ze(e,t,m,r,s,c)}ad(e,_,R);return;case"option":for(var W in n)if(_=n[W],n.hasOwnProperty(W)&&_!=null&&!s.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:ze(e,t,W,null,s,_)}for(w in s)if(_=s[w],R=n[w],s.hasOwnProperty(w)&&_!==R&&(_!=null||R!=null))switch(w){case"selected":e.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:ze(e,t,w,_,s,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in n)_=n[ce],n.hasOwnProperty(ce)&&_!=null&&!s.hasOwnProperty(ce)&&ze(e,t,ce,null,s,_);for(M in s)if(_=s[M],R=n[M],s.hasOwnProperty(M)&&_!==R&&(_!=null||R!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,t));break;default:ze(e,t,M,_,s,R)}return;default:if(ar(t)){for(var ke in n)_=n[ke],n.hasOwnProperty(ke)&&_!==void 0&&!s.hasOwnProperty(ke)&&qc(e,t,ke,void 0,s,_);for(z in s)_=s[z],R=n[z],!s.hasOwnProperty(z)||_===R||_===void 0&&R===void 0||qc(e,t,z,_,s,R);return}}for(var A in n)_=n[A],n.hasOwnProperty(A)&&_!=null&&!s.hasOwnProperty(A)&&ze(e,t,A,null,s,_);for(U in s)_=s[U],R=n[U],!s.hasOwnProperty(U)||_===R||_==null&&R==null||ze(e,t,U,_,s,R)}function op(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Dv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),s=0;s<n.length;s++){var r=n[s],c=r.transferSize,m=r.initiatorType,x=r.duration;if(c&&x&&op(m)){for(m=0,x=r.responseEnd,s+=1;s<n.length;s++){var w=n[s],M=w.startTime;if(M>x)break;var z=w.transferSize,U=w.initiatorType;z&&op(U)&&(w=w.responseEnd,m+=z*(w<x?1:(x-M)/(w-M)))}if(--s,t+=8*(c+m)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xc=null,Kc=null;function Fl(e){return e.nodeType===9?e:e.ownerDocument}function rp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zc=null;function Rv(){var e=window.event;return e&&e.type==="popstate"?e===Zc?!1:(Zc=e,!0):(Zc=null,!1)}var up=typeof setTimeout=="function"?setTimeout:void 0,zv=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,kv=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(e){return fp.resolve(null).then(e).catch(Ov)}:up;function Ov(e){setTimeout(function(){throw e})}function $n(e){return e==="head"}function dp(e,t){var n=t,s=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(s===0){e.removeChild(r),Ni(t);return}s--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")s++;else if(n==="html")Ss(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ss(n);for(var c=n.firstChild;c;){var m=c.nextSibling,x=c.nodeName;c[Bi]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=m}}else n==="body"&&Ss(e.ownerDocument.body);n=r}while(n);Ni(t)}function hp(e,t){var n=e;e=0;do{var s=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=s}while(n)}function Ic(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ic(n),Wo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Vv(e,t,n,s){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Bi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Xt(e.nextSibling),e===null)break}return null}function Lv(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Xt(e.nextSibling),e===null))return null;return e}function mp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Xt(e.nextSibling),e===null))return null;return e}function Jc(e){return e.data==="$?"||e.data==="$~"}function Pc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Uv(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var s=function(){t(),n.removeEventListener("DOMContentLoaded",s)};n.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Fc=null;function pp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Xt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function gp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function yp(e,t,n){switch(t=Fl(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Ss(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wo(e)}var Kt=new Map,xp=new Set;function $l(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Mn=Q.d;Q.d={f:Bv,r:Hv,D:Yv,C:Gv,L:qv,m:Xv,X:Qv,S:Kv,M:Zv};function Bv(){var e=Mn.f(),t=ql();return e||t}function Hv(e){var t=qa(e);t!==null&&t.tag===5&&t.type==="form"?Oh(t):Mn.r(e)}var Si=typeof document>"u"?null:document;function bp(e,t,n){var s=Si;if(s&&typeof t=="string"&&t){var r=Lt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),xp.has(r)||(xp.add(r),e={rel:e,crossOrigin:n,href:t},s.querySelector(r)===null&&(t=s.createElement("link"),ct(t,"link",e),at(t),s.head.appendChild(t)))}}function Yv(e){Mn.D(e),bp("dns-prefetch",e,null)}function Gv(e,t){Mn.C(e,t),bp("preconnect",e,t)}function qv(e,t,n){Mn.L(e,t,n);var s=Si;if(s&&e&&t){var r='link[rel="preload"][as="'+Lt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Lt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Lt(n.imageSizes)+'"]')):r+='[href="'+Lt(e)+'"]';var c=r;switch(t){case"style":c=wi(e);break;case"script":c=Ti(e)}Kt.has(c)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kt.set(c,e),s.querySelector(r)!==null||t==="style"&&s.querySelector(ws(c))||t==="script"&&s.querySelector(Ts(c))||(t=s.createElement("link"),ct(t,"link",e),at(t),s.head.appendChild(t)))}}function Xv(e,t){Mn.m(e,t);var n=Si;if(n&&e){var s=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Lt(s)+'"][href="'+Lt(e)+'"]',c=r;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ti(e)}if(!Kt.has(c)&&(e=v({rel:"modulepreload",href:e},t),Kt.set(c,e),n.querySelector(r)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ts(c)))return}s=n.createElement("link"),ct(s,"link",e),at(s),n.head.appendChild(s)}}}function Kv(e,t,n){Mn.S(e,t,n);var s=Si;if(s&&e){var r=Xa(s).hoistableStyles,c=wi(e);t=t||"default";var m=r.get(c);if(!m){var x={loading:0,preload:null};if(m=s.querySelector(ws(c)))x.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kt.get(c))&&$c(e,n);var w=m=s.createElement("link");at(w),ct(w,"link",e),w._p=new Promise(function(M,z){w.onload=M,w.onerror=z}),w.addEventListener("load",function(){x.loading|=1}),w.addEventListener("error",function(){x.loading|=2}),x.loading|=4,Wl(m,t,s)}m={type:"stylesheet",instance:m,count:1,state:x},r.set(c,m)}}}function Qv(e,t){Mn.X(e,t);var n=Si;if(n&&e){var s=Xa(n).hoistableScripts,r=Ti(e),c=s.get(r);c||(c=n.querySelector(Ts(r)),c||(e=v({src:e,async:!0},t),(t=Kt.get(r))&&Wc(e,t),c=n.createElement("script"),at(c),ct(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(r,c))}}function Zv(e,t){Mn.M(e,t);var n=Si;if(n&&e){var s=Xa(n).hoistableScripts,r=Ti(e),c=s.get(r);c||(c=n.querySelector(Ts(r)),c||(e=v({src:e,async:!0,type:"module"},t),(t=Kt.get(r))&&Wc(e,t),c=n.createElement("script"),at(c),ct(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(r,c))}}function vp(e,t,n,s){var r=(r=re.current)?$l(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=wi(n.href),n=Xa(r).hoistableStyles,s=n.get(t),s||(s={type:"style",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=wi(n.href);var c=Xa(r).hoistableStyles,m=c.get(e);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,m),(c=r.querySelector(ws(e)))&&!c._p&&(m.instance=c,m.state.loading=5),Kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kt.set(e,n),c||Iv(r,e,n,m.state))),t&&s===null)throw Error(o(528,""));return m}if(t&&s!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ti(n),n=Xa(r).hoistableScripts,s=n.get(t),s||(s={type:"script",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function wi(e){return'href="'+Lt(e)+'"'}function ws(e){return'link[rel="stylesheet"]['+e+"]"}function Sp(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Iv(e,t,n,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),ct(t,"link",n),at(t),e.head.appendChild(t))}function Ti(e){return'[src="'+Lt(e)+'"]'}function Ts(e){return"script[async]"+e}function wp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+Lt(n.href)+'"]');if(s)return t.instance=s,at(s),s;var r=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),at(s),ct(s,"style",r),Wl(s,n.precedence,e),t.instance=s;case"stylesheet":r=wi(n.href);var c=e.querySelector(ws(r));if(c)return t.state.loading|=4,t.instance=c,at(c),c;s=Sp(n),(r=Kt.get(r))&&$c(s,r),c=(e.ownerDocument||e).createElement("link"),at(c);var m=c;return m._p=new Promise(function(x,w){m.onload=x,m.onerror=w}),ct(c,"link",s),t.state.loading|=4,Wl(c,n.precedence,e),t.instance=c;case"script":return c=Ti(n.src),(r=e.querySelector(Ts(c)))?(t.instance=r,at(r),r):(s=n,(r=Kt.get(c))&&(s=v({},n),Wc(s,r)),e=e.ownerDocument||e,r=e.createElement("script"),at(r),ct(r,"link",s),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,Wl(s,n.precedence,e));return t.instance}function Wl(e,t,n){for(var s=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=s.length?s[s.length-1]:null,c=r,m=0;m<s.length;m++){var x=s[m];if(x.dataset.precedence===t)c=x;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function $c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var eo=null;function Tp(e,t,n){if(eo===null){var s=new Map,r=eo=new Map;r.set(n,s)}else r=eo,s=r.get(n),s||(s=new Map,r.set(n,s));if(s.has(e))return s;for(s.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var c=n[r];if(!(c[Bi]||c[st]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(t)||"";m=e+m;var x=s.get(m);x?x.push(c):s.set(m,[c])}}return s}function Np(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Jv(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function jp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Pv(e,t,n,s){if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=wi(s.href),c=t.querySelector(ws(r));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=to.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,at(c);return}c=t.ownerDocument||t,s=Sp(s),(r=Kt.get(r))&&$c(s,r),c=c.createElement("link"),at(c);var m=c;m._p=new Promise(function(x,w){m.onload=x,m.onerror=w}),ct(c,"link",s),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=to.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var eu=0;function Fv(e,t){return e.stylesheets&&e.count===0&&ao(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var s=setTimeout(function(){if(e.stylesheets&&ao(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&eu===0&&(eu=62500*Dv());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ao(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>eu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(r)}}:null}function to(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ao(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var no=null;function ao(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,no=new Map,t.forEach($v,e),no=null,to.call(e))}function $v(e,t){if(!(t.state.loading&4)){var n=no.get(e);if(n)var s=n.get(null);else{n=new Map,no.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var m=r[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),s=m)}s&&n.set(null,s)}r=t.instance,m=r.getAttribute("data-precedence"),c=n.get(m)||s,c===s&&n.set(null,r),n.set(m,r),this.count++,s=to.bind(this),r.addEventListener("load",s),r.addEventListener("error",s),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Ns={$$typeof:G,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Wv(e,t,n,s,r,c,m,x,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.hiddenUpdates=Jo(null),this.identifierPrefix=s,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Ap(e,t,n,s,r,c,m,x,w,M,z,U){return e=new Wv(e,t,n,m,w,M,z,U,x),t=1,c===!0&&(t|=24),c=Mt(3,null,null,t),e.current=c,c.stateNode=e,t=zr(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:s,isDehydrated:n,cache:t},Lr(c),e}function Ep(e){return e?(e=ei,e):ei}function Mp(e,t,n,s,r,c){r=Ep(r),s.context===null?s.context=r:s.pendingContext=r,s=Yn(t),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=Gn(e,s,t),n!==null&&(Tt(n,e,t),ns(n,e,t))}function Cp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tu(e,t){Cp(e,t),(e=e.alternate)&&Cp(e,t)}function _p(e){if(e.tag===13||e.tag===31){var t=xa(e,67108864);t!==null&&Tt(t,e,67108864),tu(e,67108864)}}function Dp(e){if(e.tag===13||e.tag===31){var t=zt();t=Po(t);var n=xa(e,t);n!==null&&Tt(n,e,t),tu(e,t)}}var io=!0;function e1(e,t,n,s){var r=D.T;D.T=null;var c=Q.p;try{Q.p=2,nu(e,t,n,s)}finally{Q.p=c,D.T=r}}function t1(e,t,n,s){var r=D.T;D.T=null;var c=Q.p;try{Q.p=8,nu(e,t,n,s)}finally{Q.p=c,D.T=r}}function nu(e,t,n,s){if(io){var r=au(s);if(r===null)Gc(e,t,s,so,n),zp(e,s);else if(a1(r,e,t,n,s))s.stopPropagation();else if(zp(e,s),t&4&&-1<n1.indexOf(e)){for(;r!==null;){var c=qa(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=ha(c.pendingLanes);if(m!==0){var x=c;for(x.pendingLanes|=2,x.entangledLanes|=2;m;){var w=1<<31-At(m);x.entanglements[1]|=w,m&=~w}an(c),(Me&6)===0&&(Yl=Nt()+500,xs(0))}}break;case 31:case 13:x=xa(c,2),x!==null&&Tt(x,c,2),ql(),tu(c,2)}if(c=au(s),c===null&&Gc(e,t,s,so,n),c===r)break;r=c}r!==null&&s.stopPropagation()}else Gc(e,t,s,null,n)}}function au(e){return e=sr(e),iu(e)}var so=null;function iu(e){if(so=null,e=Ga(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=d(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return so=e,null}function Rp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Yx()){case Hf:return 2;case Yf:return 8;case Is:case Gx:return 32;case Gf:return 268435456;default:return 32}default:return 32}}var su=!1,Wn=null,ea=null,ta=null,js=new Map,As=new Map,na=[],n1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zp(e,t){switch(e){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":ea=null;break;case"mouseover":case"mouseout":ta=null;break;case"pointerover":case"pointerout":js.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":As.delete(t.pointerId)}}function Es(e,t,n,s,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:c,targetContainers:[r]},t!==null&&(t=qa(t),t!==null&&_p(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function a1(e,t,n,s,r){switch(t){case"focusin":return Wn=Es(Wn,e,t,n,s,r),!0;case"dragenter":return ea=Es(ea,e,t,n,s,r),!0;case"mouseover":return ta=Es(ta,e,t,n,s,r),!0;case"pointerover":var c=r.pointerId;return js.set(c,Es(js.get(c)||null,e,t,n,s,r)),!0;case"gotpointercapture":return c=r.pointerId,As.set(c,Es(As.get(c)||null,e,t,n,s,r)),!0}return!1}function kp(e){var t=Ga(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=d(n),t!==null){e.blockedOn=t,If(e.priority,function(){Dp(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,If(e.priority,function(){Dp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=au(e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);ir=s,n.target.dispatchEvent(s),ir=null}else return t=qa(n),t!==null&&_p(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){lo(e)&&n.delete(t)}function i1(){su=!1,Wn!==null&&lo(Wn)&&(Wn=null),ea!==null&&lo(ea)&&(ea=null),ta!==null&&lo(ta)&&(ta=null),js.forEach(Op),As.forEach(Op)}function oo(e,t){e.blockedOn===t&&(e.blockedOn=null,su||(su=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,i1)))}var ro=null;function Vp(e){ro!==e&&(ro=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){ro===e&&(ro=null);for(var t=0;t<e.length;t+=3){var n=e[t],s=e[t+1],r=e[t+2];if(typeof s!="function"){if(iu(s||n)===null)continue;break}var c=qa(n);c!==null&&(e.splice(t,3),t-=3,ac(c,{pending:!0,data:r,method:n.method,action:s},s,r))}}))}function Ni(e){function t(w){return oo(w,e)}Wn!==null&&oo(Wn,e),ea!==null&&oo(ea,e),ta!==null&&oo(ta,e),js.forEach(t),As.forEach(t);for(var n=0;n<na.length;n++){var s=na[n];s.blockedOn===e&&(s.blockedOn=null)}for(;0<na.length&&(n=na[0],n.blockedOn===null);)kp(n),n.blockedOn===null&&na.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(s=0;s<n.length;s+=3){var r=n[s],c=n[s+1],m=r[yt]||null;if(typeof c=="function")m||Vp(n);else if(m){var x=null;if(c&&c.hasAttribute("formAction")){if(r=c,m=c[yt]||null)x=m.formAction;else if(iu(r)!==null)continue}else x=m.action;typeof x=="function"?n[s+1]=x:(n.splice(s,3),s-=3),Vp(n)}}}function Lp(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return r=m})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),s||setTimeout(n,20)}function n(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function lu(e){this._internalRoot=e}co.prototype.render=lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,s=zt();Mp(n,s,e,t,null,null)},co.prototype.unmount=lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mp(e.current,2,null,e,null,null),ql(),t[Ya]=null}};function co(e){this._internalRoot=e}co.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<na.length&&t!==0&&t<na[n].priority;n++);na.splice(n,0,e),n===0&&kp(e)}};var Up=i.version;if(Up!=="19.2.6")throw Error(o(527,Up,"19.2.6"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=g(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var s1={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uo.isDisabled&&uo.supportsFiber)try{Vi=uo.inject(s1),jt=uo}catch{}}return Cs.createRoot=function(e,t){if(!u(e))throw Error(o(299));var n=!1,s="",r=Kh,c=Qh,m=Zh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=Ap(e,1,!1,null,null,n,s,null,r,c,m,Lp),e[Ya]=t.current,Yc(e),new lu(t)},Cs.hydrateRoot=function(e,t,n){if(!u(e))throw Error(o(299));var s=!1,r="",c=Kh,m=Qh,x=Zh,w=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=Ap(e,1,!0,t,n??null,s,r,w,c,m,x,Lp),t.context=Ep(null),n=t.current,s=zt(),s=Po(s),r=Yn(s),r.callback=null,Gn(n,r,s),n=s,t.current.lanes=n,Ui(t,n),an(t),e[Ya]=t.current,Yc(e),new co(t)},Cs.version="19.2.6",Cs}var Ip;function p1(){if(Ip)return cu.exports;Ip=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),cu.exports=m1(),cu.exports}var g1=p1();const af=Y.createContext({});function sf(a){const i=Y.useRef(null);return i.current===null&&(i.current=a()),i.current}const y1=typeof window<"u",Tg=y1?Y.useLayoutEffect:Y.useEffect,Lo=Y.createContext(null);function lf(a,i){a.indexOf(i)===-1&&a.push(i)}function Eo(a,i){const l=a.indexOf(i);l>-1&&a.splice(l,1)}const rn=(a,i,l)=>l>i?i:l<a?a:l;let of=()=>{};const ca={},Ng=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);function jg(a){return typeof a=="object"&&a!==null}const Ag=a=>/^0[^.\s]+$/u.test(a);function Eg(a){let i;return()=>(i===void 0&&(i=a()),i)}const Zt=a=>a,x1=(a,i)=>l=>i(a(l)),Gs=(...a)=>a.reduce(x1),Ls=(a,i,l)=>{const o=i-a;return o===0?1:(l-a)/o};class rf{constructor(){this.subscriptions=[]}add(i){return lf(this.subscriptions,i),()=>Eo(this.subscriptions,i)}notify(i,l,o){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](i,l,o);else for(let h=0;h<u;h++){const d=this.subscriptions[h];d&&d(i,l,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const kt=a=>a*1e3,Qt=a=>a/1e3;function Mg(a,i){return i?a*(1e3/i):0}const Cg=(a,i,l)=>(((1-3*l+3*i)*a+(3*l-6*i))*a+3*i)*a,b1=1e-7,v1=12;function S1(a,i,l,o,u){let h,d,p=0;do d=i+(l-i)/2,h=Cg(d,o,u)-a,h>0?l=d:i=d;while(Math.abs(h)>b1&&++p<v1);return d}function qs(a,i,l,o){if(a===i&&l===o)return Zt;const u=h=>S1(h,0,1,a,l);return h=>h===0||h===1?h:Cg(u(h),i,o)}const _g=a=>i=>i<=.5?a(2*i)/2:(2-a(2*(1-i)))/2,Dg=a=>i=>1-a(1-i),Rg=qs(.33,1.53,.69,.99),cf=Dg(Rg),zg=_g(cf),kg=a=>a>=1?1:(a*=2)<1?.5*cf(a):.5*(2-Math.pow(2,-10*(a-1))),uf=a=>1-Math.sin(Math.acos(a)),Og=Dg(uf),Vg=_g(uf),w1=qs(.42,0,1,1),T1=qs(0,0,.58,1),Lg=qs(.42,0,.58,1),N1=a=>Array.isArray(a)&&typeof a[0]!="number",Ug=a=>Array.isArray(a)&&typeof a[0]=="number",j1={linear:Zt,easeIn:w1,easeInOut:Lg,easeOut:T1,circIn:uf,circInOut:Vg,circOut:Og,backIn:cf,backInOut:zg,backOut:Rg,anticipate:kg},A1=a=>typeof a=="string",Jp=a=>{if(Ug(a)){of(a.length===4);const[i,l,o,u]=a;return qs(i,l,o,u)}else if(A1(a))return j1[a];return a},fo=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function E1(a,i){let l=new Set,o=new Set,u=!1,h=!1;const d=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function y(b){d.has(b)&&(g.schedule(b),a()),b(p)}const g={schedule:(b,v=!1,S=!1)=>{const C=S&&u?l:o;return v&&d.add(b),C.add(b),b},cancel:b=>{o.delete(b),d.delete(b)},process:b=>{if(p=b,u){h=!0;return}u=!0;const v=l;l=o,o=v,l.forEach(y),l.clear(),u=!1,h&&(h=!1,g.process(b))}};return g}const M1=40;function Bg(a,i){let l=!1,o=!0;const u={delta:0,timestamp:0,isProcessing:!1},h=()=>l=!0,d=fo.reduce((G,q)=>(G[q]=E1(h),G),{}),{setup:p,read:y,resolveKeyframes:g,preUpdate:b,update:v,preRender:S,render:T,postRender:C}=d,k=()=>{const G=ca.useManualTiming,q=G?u.timestamp:performance.now();l=!1,G||(u.delta=o?1e3/60:Math.max(Math.min(q-u.timestamp,M1),1)),u.timestamp=q,u.isProcessing=!0,p.process(u),y.process(u),g.process(u),b.process(u),v.process(u),S.process(u),T.process(u),C.process(u),u.isProcessing=!1,l&&i&&(o=!1,a(k))},V=()=>{l=!0,o=!0,u.isProcessing||a(k)};return{schedule:fo.reduce((G,q)=>{const J=d[q];return G[q]=(ue,$=!1,B=!1)=>(l||V(),J.schedule(ue,$,B)),G},{}),cancel:G=>{for(let q=0;q<fo.length;q++)d[fo[q]].cancel(G)},state:u,steps:d}}const{schedule:Ve,cancel:ua,state:ut,steps:hu}=Bg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Zt,!0);let bo;function C1(){bo=void 0}const pt={now:()=>(bo===void 0&&pt.set(ut.isProcessing||ca.useManualTiming?ut.timestamp:performance.now()),bo),set:a=>{bo=a,queueMicrotask(C1)}},Hg=a=>i=>typeof i=="string"&&i.startsWith(a),Yg=Hg("--"),_1=Hg("var(--"),ff=a=>_1(a)?D1.test(a.split("/*")[0].trim()):!1,D1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Pp(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const Ri={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},Us={...Ri,transform:a=>rn(0,1,a)},ho={...Ri,default:1},zs=a=>Math.round(a*1e5)/1e5,df=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function R1(a){return a==null}const z1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,hf=(a,i)=>l=>!!(typeof l=="string"&&z1.test(l)&&l.startsWith(a)||i&&!R1(l)&&Object.prototype.hasOwnProperty.call(l,i)),Gg=(a,i,l)=>o=>{if(typeof o!="string")return o;const[u,h,d,p]=o.match(df);return{[a]:parseFloat(u),[i]:parseFloat(h),[l]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},k1=a=>rn(0,255,a),mu={...Ri,transform:a=>Math.round(k1(a))},ka={test:hf("rgb","red"),parse:Gg("red","green","blue"),transform:({red:a,green:i,blue:l,alpha:o=1})=>"rgba("+mu.transform(a)+", "+mu.transform(i)+", "+mu.transform(l)+", "+zs(Us.transform(o))+")"};function O1(a){let i="",l="",o="",u="";return a.length>5?(i=a.substring(1,3),l=a.substring(3,5),o=a.substring(5,7),u=a.substring(7,9)):(i=a.substring(1,2),l=a.substring(2,3),o=a.substring(3,4),u=a.substring(4,5),i+=i,l+=l,o+=o,u+=u),{red:parseInt(i,16),green:parseInt(l,16),blue:parseInt(o,16),alpha:u?parseInt(u,16)/255:1}}const Du={test:hf("#"),parse:O1,transform:ka.transform},Xs=a=>({test:i=>typeof i=="string"&&i.endsWith(a)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${a}`}),la=Xs("deg"),on=Xs("%"),te=Xs("px"),V1=Xs("vh"),L1=Xs("vw"),Fp={...on,parse:a=>on.parse(a)/100,transform:a=>on.transform(a*100)},Ai={test:hf("hsl","hue"),parse:Gg("hue","saturation","lightness"),transform:({hue:a,saturation:i,lightness:l,alpha:o=1})=>"hsla("+Math.round(a)+", "+on.transform(zs(i))+", "+on.transform(zs(l))+", "+zs(Us.transform(o))+")"},$e={test:a=>ka.test(a)||Du.test(a)||Ai.test(a),parse:a=>ka.test(a)?ka.parse(a):Ai.test(a)?Ai.parse(a):Du.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?ka.transform(a):Ai.transform(a),getAnimatableNone:a=>{const i=$e.parse(a);return i.alpha=0,$e.transform(i)}},U1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function B1(a){var i,l;return isNaN(a)&&typeof a=="string"&&(((i=a.match(df))==null?void 0:i.length)||0)+(((l=a.match(U1))==null?void 0:l.length)||0)>0}const qg="number",Xg="color",H1="var",Y1="var(",$p="${}",G1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ci(a){const i=a.toString(),l=[],o={color:[],number:[],var:[]},u=[];let h=0;const p=i.replace(G1,y=>($e.test(y)?(o.color.push(h),u.push(Xg),l.push($e.parse(y))):y.startsWith(Y1)?(o.var.push(h),u.push(H1),l.push(y)):(o.number.push(h),u.push(qg),l.push(parseFloat(y))),++h,$p)).split($p);return{values:l,split:p,indexes:o,types:u}}function q1(a){return Ci(a).values}function Kg({split:a,types:i}){const l=a.length;return o=>{let u="";for(let h=0;h<l;h++)if(u+=a[h],o[h]!==void 0){const d=i[h];d===qg?u+=zs(o[h]):d===Xg?u+=$e.transform(o[h]):u+=o[h]}return u}}function X1(a){return Kg(Ci(a))}const K1=a=>typeof a=="number"?0:$e.test(a)?$e.getAnimatableNone(a):a,Q1=(a,i)=>typeof a=="number"?i!=null&&i.trim().endsWith("/")?a:0:K1(a);function Z1(a){const i=Ci(a);return Kg(i)(i.values.map((o,u)=>Q1(o,i.split[u])))}const Wt={test:B1,parse:q1,createTransformer:X1,getAnimatableNone:Z1};function pu(a,i,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(i-a)*6*l:l<1/2?i:l<2/3?a+(i-a)*(2/3-l)*6:a}function I1({hue:a,saturation:i,lightness:l,alpha:o}){a/=360,i/=100,l/=100;let u=0,h=0,d=0;if(!i)u=h=d=l;else{const p=l<.5?l*(1+i):l+i-l*i,y=2*l-p;u=pu(y,p,a+1/3),h=pu(y,p,a),d=pu(y,p,a-1/3)}return{red:Math.round(u*255),green:Math.round(h*255),blue:Math.round(d*255),alpha:o}}function Mo(a,i){return l=>l>0?i:a}const Be=(a,i,l)=>a+(i-a)*l,gu=(a,i,l)=>{const o=a*a,u=l*(i*i-o)+o;return u<0?0:Math.sqrt(u)},J1=[Du,ka,Ai],P1=a=>J1.find(i=>i.test(a));function Wp(a){const i=P1(a);if(!i)return!1;let l=i.parse(a);return i===Ai&&(l=I1(l)),l}const e0=(a,i)=>{const l=Wp(a),o=Wp(i);if(!l||!o)return Mo(a,i);const u={...l};return h=>(u.red=gu(l.red,o.red,h),u.green=gu(l.green,o.green,h),u.blue=gu(l.blue,o.blue,h),u.alpha=Be(l.alpha,o.alpha,h),ka.transform(u))},Ru=new Set(["none","hidden"]);function F1(a,i){return Ru.has(a)?l=>l<=0?a:i:l=>l>=1?i:a}function $1(a,i){return l=>Be(a,i,l)}function mf(a){return typeof a=="number"?$1:typeof a=="string"?ff(a)?Mo:$e.test(a)?e0:t2:Array.isArray(a)?Qg:typeof a=="object"?$e.test(a)?e0:W1:Mo}function Qg(a,i){const l=[...a],o=l.length,u=a.map((h,d)=>mf(h)(h,i[d]));return h=>{for(let d=0;d<o;d++)l[d]=u[d](h);return l}}function W1(a,i){const l={...a,...i},o={};for(const u in l)a[u]!==void 0&&i[u]!==void 0&&(o[u]=mf(a[u])(a[u],i[u]));return u=>{for(const h in o)l[h]=o[h](u);return l}}function e2(a,i){const l=[],o={color:0,var:0,number:0};for(let u=0;u<i.values.length;u++){const h=i.types[u],d=a.indexes[h][o[h]],p=a.values[d]??0;l[u]=p,o[h]++}return l}const t2=(a,i)=>{const l=Wt.createTransformer(i),o=Ci(a),u=Ci(i);return o.indexes.var.length===u.indexes.var.length&&o.indexes.color.length===u.indexes.color.length&&o.indexes.number.length>=u.indexes.number.length?Ru.has(a)&&!u.values.length||Ru.has(i)&&!o.values.length?F1(a,i):Gs(Qg(e2(o,u),u.values),l):Mo(a,i)};function Zg(a,i,l){return typeof a=="number"&&typeof i=="number"&&typeof l=="number"?Be(a,i,l):mf(a)(a,i)}const n2=a=>{const i=({timestamp:l})=>a(l);return{start:(l=!0)=>Ve.update(i,l),stop:()=>ua(i),now:()=>ut.isProcessing?ut.timestamp:pt.now()}},Ig=(a,i,l=10)=>{let o="";const u=Math.max(Math.round(i/l),2);for(let h=0;h<u;h++)o+=Math.round(a(h/(u-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},Co=2e4;function pf(a){let i=0;const l=50;let o=a.next(i);for(;!o.done&&i<Co;)i+=l,o=a.next(i);return i>=Co?1/0:i}function a2(a,i=100,l){const o=l({...a,keyframes:[0,i]}),u=Math.min(pf(o),Co);return{type:"keyframes",ease:h=>o.next(u*h).value/i,duration:Qt(u)}}const Xe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function zu(a,i){return a*Math.sqrt(1-i*i)}const i2=12;function s2(a,i,l){let o=l;for(let u=1;u<i2;u++)o=o-a(o)/i(o);return o}const yu=.001;function l2({duration:a=Xe.duration,bounce:i=Xe.bounce,velocity:l=Xe.velocity,mass:o=Xe.mass}){let u,h,d=1-i;d=rn(Xe.minDamping,Xe.maxDamping,d),a=rn(Xe.minDuration,Xe.maxDuration,Qt(a)),d<1?(u=g=>{const b=g*d,v=b*a,S=b-l,T=zu(g,d),C=Math.exp(-v);return yu-S/T*C},h=g=>{const v=g*d*a,S=v*l+l,T=Math.pow(d,2)*Math.pow(g,2)*a,C=Math.exp(-v),k=zu(Math.pow(g,2),d);return(-u(g)+yu>0?-1:1)*((S-T)*C)/k}):(u=g=>{const b=Math.exp(-g*a),v=(g-l)*a+1;return-yu+b*v},h=g=>{const b=Math.exp(-g*a),v=(l-g)*(a*a);return b*v});const p=5/a,y=s2(u,h,p);if(a=kt(a),isNaN(y))return{stiffness:Xe.stiffness,damping:Xe.damping,duration:a};{const g=Math.pow(y,2)*o;return{stiffness:g,damping:d*2*Math.sqrt(o*g),duration:a}}}const o2=["duration","bounce"],r2=["stiffness","damping","mass"];function t0(a,i){return i.some(l=>a[l]!==void 0)}function c2(a){let i={velocity:Xe.velocity,stiffness:Xe.stiffness,damping:Xe.damping,mass:Xe.mass,isResolvedFromDuration:!1,...a};if(!t0(a,r2)&&t0(a,o2))if(i.velocity=0,a.visualDuration){const l=a.visualDuration,o=2*Math.PI/(l*1.2),u=o*o,h=2*rn(.05,1,1-(a.bounce||0))*Math.sqrt(u);i={...i,mass:Xe.mass,stiffness:u,damping:h}}else{const l=l2({...a,velocity:0});i={...i,...l,mass:Xe.mass},i.isResolvedFromDuration=!0}return i}function _o(a=Xe.visualDuration,i=Xe.bounce){const l=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:i}:a;let{restSpeed:o,restDelta:u}=l;const h=l.keyframes[0],d=l.keyframes[l.keyframes.length-1],p={done:!1,value:h},{stiffness:y,damping:g,mass:b,duration:v,velocity:S,isResolvedFromDuration:T}=c2({...l,velocity:-Qt(l.velocity||0)}),C=S||0,k=g/(2*Math.sqrt(y*b)),V=d-h,H=Qt(Math.sqrt(y/b)),K=Math.abs(V)<5;o||(o=K?Xe.restSpeed.granular:Xe.restSpeed.default),u||(u=K?Xe.restDelta.granular:Xe.restDelta.default);let G,q,J,ue,$,B;if(k<1)J=zu(H,k),ue=(C+k*H*V)/J,G=se=>{const xe=Math.exp(-k*H*se);return d-xe*(ue*Math.sin(J*se)+V*Math.cos(J*se))},$=k*H*ue+V*J,B=k*H*V-ue*J,q=se=>Math.exp(-k*H*se)*($*Math.sin(J*se)+B*Math.cos(J*se));else if(k===1){G=xe=>d-Math.exp(-H*xe)*(V+(C+H*V)*xe);const se=C+H*V;q=xe=>Math.exp(-H*xe)*(H*se*xe-C)}else{const se=H*Math.sqrt(k*k-1);G=He=>{const De=Math.exp(-k*H*He),D=Math.min(se*He,300);return d-De*((C+k*H*V)*Math.sinh(D)+se*V*Math.cosh(D))/se};const xe=(C+k*H*V)/se,be=k*H*xe-V*se,Ze=k*H*V-xe*se;q=He=>{const De=Math.exp(-k*H*He),D=Math.min(se*He,300);return De*(be*Math.sinh(D)+Ze*Math.cosh(D))}}const ie={calculatedDuration:T&&v||null,velocity:se=>kt(q(se)),next:se=>{if(!T&&k<1){const be=Math.exp(-k*H*se),Ze=Math.sin(J*se),He=Math.cos(J*se),De=d-be*(ue*Ze+V*He),D=kt(be*($*Ze+B*He));return p.done=Math.abs(D)<=o&&Math.abs(d-De)<=u,p.value=p.done?d:De,p}const xe=G(se);if(T)p.done=se>=v;else{const be=kt(q(se));p.done=Math.abs(be)<=o&&Math.abs(d-xe)<=u}return p.value=p.done?d:xe,p},toString:()=>{const se=Math.min(pf(ie),Co),xe=Ig(be=>ie.next(se*be).value,se,30);return se+"ms "+xe},toTransition:()=>{}};return ie}_o.applyToOptions=a=>{const i=a2(a,100,_o);return a.ease=i.ease,a.duration=kt(i.duration),a.type="keyframes",a};const u2=5;function Jg(a,i,l){const o=Math.max(i-u2,0);return Mg(l-a(o),i-o)}function ku({keyframes:a,velocity:i=0,power:l=.8,timeConstant:o=325,bounceDamping:u=10,bounceStiffness:h=500,modifyTarget:d,min:p,max:y,restDelta:g=.5,restSpeed:b}){const v=a[0],S={done:!1,value:v},T=B=>p!==void 0&&B<p||y!==void 0&&B>y,C=B=>p===void 0?y:y===void 0||Math.abs(p-B)<Math.abs(y-B)?p:y;let k=l*i;const V=v+k,H=d===void 0?V:d(V);H!==V&&(k=H-v);const K=B=>-k*Math.exp(-B/o),G=B=>H+K(B),q=B=>{const ie=K(B),se=G(B);S.done=Math.abs(ie)<=g,S.value=S.done?H:se};let J,ue;const $=B=>{T(S.value)&&(J=B,ue=_o({keyframes:[S.value,C(S.value)],velocity:Jg(G,B,S.value),damping:u,stiffness:h,restDelta:g,restSpeed:b}))};return $(0),{calculatedDuration:null,next:B=>{let ie=!1;return!ue&&J===void 0&&(ie=!0,q(B),$(B)),J!==void 0&&B>=J?ue.next(B-J):(!ie&&q(B),S)}}}function f2(a,i,l){const o=[],u=l||ca.mix||Zg,h=a.length-1;for(let d=0;d<h;d++){let p=u(a[d],a[d+1]);if(i){const y=Array.isArray(i)?i[d]||Zt:i;p=Gs(y,p)}o.push(p)}return o}function d2(a,i,{clamp:l=!0,ease:o,mixer:u}={}){const h=a.length;if(of(h===i.length),h===1)return()=>i[0];if(h===2&&i[0]===i[1])return()=>i[1];const d=a[0]===a[1];a[0]>a[h-1]&&(a=[...a].reverse(),i=[...i].reverse());const p=f2(i,o,u),y=p.length,g=b=>{if(d&&b<a[0])return i[0];let v=0;if(y>1)for(;v<a.length-2&&!(b<a[v+1]);v++);const S=Ls(a[v],a[v+1],b);return p[v](S)};return l?b=>g(rn(a[0],a[h-1],b)):g}function h2(a,i){const l=a[a.length-1];for(let o=1;o<=i;o++){const u=Ls(0,i,o);a.push(Be(l,1,u))}}function m2(a){const i=[0];return h2(i,a.length-1),i}function p2(a,i){return a.map(l=>l*i)}function g2(a,i){return a.map(()=>i||Lg).splice(0,a.length-1)}function ks({duration:a=300,keyframes:i,times:l,ease:o="easeInOut"}){const u=N1(o)?o.map(Jp):Jp(o),h={done:!1,value:i[0]},d=p2(l&&l.length===i.length?l:m2(i),a),p=d2(d,i,{ease:Array.isArray(u)?u:g2(i,u)});return{calculatedDuration:a,next:y=>(h.value=p(y),h.done=y>=a,h)}}const y2=a=>a!==null;function Uo(a,{repeat:i,repeatType:l="loop"},o,u=1){const h=a.filter(y2),p=u<0||i&&l!=="loop"&&i%2===1?0:h.length-1;return!p||o===void 0?h[p]:o}const x2={decay:ku,inertia:ku,tween:ks,keyframes:ks,spring:_o};function Pg(a){typeof a.type=="string"&&(a.type=x2[a.type])}class gf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,l){return this.finished.then(i,l)}}const b2=a=>a/100;class Do extends gf{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var o,u;const{motionValue:l}=this.options;l&&l.updatedAt!==pt.now()&&this.tick(pt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(u=(o=this.options).onStop)==null||u.call(o))},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Pg(i);const{type:l=ks,repeat:o=0,repeatDelay:u=0,repeatType:h,velocity:d=0}=i;let{keyframes:p}=i;const y=l||ks;y!==ks&&typeof p[0]!="number"&&(this.mixKeyframes=Gs(b2,Zg(p[0],p[1])),p=[0,100]);const g=y({...i,keyframes:p});h==="mirror"&&(this.mirroredGenerator=y({...i,keyframes:[...p].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=pf(g));const{calculatedDuration:b}=g;this.calculatedDuration=b,this.resolvedDuration=b+u,this.totalDuration=this.resolvedDuration*(o+1)-u,this.generator=g}updateTime(i){const l=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(i,l=!1){const{generator:o,totalDuration:u,mixKeyframes:h,mirroredGenerator:d,resolvedDuration:p,calculatedDuration:y}=this;if(this.startTime===null)return o.next(0);const{delay:g=0,keyframes:b,repeat:v,repeatType:S,repeatDelay:T,type:C,onUpdate:k,finalKeyframe:V}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-u/this.speed,this.startTime)),l?this.currentTime=i:this.updateTime(i);const H=this.currentTime-g*(this.playbackSpeed>=0?1:-1),K=this.playbackSpeed>=0?H<0:H>u;this.currentTime=Math.max(H,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let G=this.currentTime,q=o;if(v){const B=Math.min(this.currentTime,u)/p;let ie=Math.floor(B),se=B%1;!se&&B>=1&&(se=1),se===1&&ie--,ie=Math.min(ie,v+1),!!(ie%2)&&(S==="reverse"?(se=1-se,T&&(se-=T/p)):S==="mirror"&&(q=d)),G=rn(0,1,se)*p}let J;K?(this.delayState.value=b[0],J=this.delayState):J=q.next(G),h&&!K&&(J.value=h(J.value));let{done:ue}=J;!K&&y!==null&&(ue=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const $=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ue);return $&&C!==ku&&(J.value=Uo(b,this.options,V,this.speed)),k&&k(J.value),$&&this.finish(),J}then(i,l){return this.finished.then(i,l)}get duration(){return Qt(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Qt(i)}get time(){return Qt(this.currentTime)}set time(i){i=kt(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=i,this.tick(i))}getGeneratorVelocity(){const i=this.currentTime;if(i<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(i);const l=this.generator.next(i).value;return Jg(o=>this.generator.next(o).value,i,l)}get speed(){return this.playbackSpeed}set speed(i){const l=this.playbackSpeed!==i;l&&this.driver&&this.updateTime(pt.now()),this.playbackSpeed=i,l&&this.driver&&(this.time=Qt(this.currentTime))}play(){var u,h;if(this.isStopped)return;const{driver:i=n2,startTime:l}=this.options;this.driver||(this.driver=i(d=>this.tick(d))),(h=(u=this.options).onPlay)==null||h.call(u);const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=l??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(pt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var i,l;this.notifyFinished(),this.teardown(),this.state="finished",(l=(i=this.options).onComplete)==null||l.call(i)}cancel(){var i,l;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(l=(i=this.options).onCancel)==null||l.call(i)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){var l;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(l=this.driver)==null||l.stop(),i.observe(this)}}function v2(a){for(let i=1;i<a.length;i++)a[i]??(a[i]=a[i-1])}const Oa=a=>a*180/Math.PI,Ou=a=>{const i=Oa(Math.atan2(a[1],a[0]));return Vu(i)},S2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:Ou,rotateZ:Ou,skewX:a=>Oa(Math.atan(a[1])),skewY:a=>Oa(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},Vu=a=>(a=a%360,a<0&&(a+=360),a),n0=Ou,a0=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),i0=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),w2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:a0,scaleY:i0,scale:a=>(a0(a)+i0(a))/2,rotateX:a=>Vu(Oa(Math.atan2(a[6],a[5]))),rotateY:a=>Vu(Oa(Math.atan2(-a[2],a[0]))),rotateZ:n0,rotate:n0,skewX:a=>Oa(Math.atan(a[4])),skewY:a=>Oa(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function Lu(a){return a.includes("scale")?1:0}function Uu(a,i){if(!a||a==="none")return Lu(i);const l=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,u;if(l)o=w2,u=l;else{const p=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=S2,u=p}if(!u)return Lu(i);const h=o[i],d=u[1].split(",").map(N2);return typeof h=="function"?h(d):d[h]}const T2=(a,i)=>{const{transform:l="none"}=getComputedStyle(a);return Uu(l,i)};function N2(a){return parseFloat(a.trim())}const zi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ki=new Set(zi),s0=a=>a===Ri||a===te,j2=new Set(["x","y","z"]),A2=zi.filter(a=>!j2.has(a));function E2(a){const i=[];return A2.forEach(l=>{const o=a.getValue(l);o!==void 0&&(i.push([l,o.get()]),o.set(l.startsWith("scale")?1:0))}),i}const ra={width:({x:a},{paddingLeft:i="0",paddingRight:l="0",boxSizing:o})=>{const u=a.max-a.min;return o==="border-box"?u:u-parseFloat(i)-parseFloat(l)},height:({y:a},{paddingTop:i="0",paddingBottom:l="0",boxSizing:o})=>{const u=a.max-a.min;return o==="border-box"?u:u-parseFloat(i)-parseFloat(l)},top:(a,{top:i})=>parseFloat(i),left:(a,{left:i})=>parseFloat(i),bottom:({y:a},{top:i})=>parseFloat(i)+(a.max-a.min),right:({x:a},{left:i})=>parseFloat(i)+(a.max-a.min),x:(a,{transform:i})=>Uu(i,"x"),y:(a,{transform:i})=>Uu(i,"y")};ra.translateX=ra.x;ra.translateY=ra.y;const Va=new Set;let Bu=!1,Hu=!1,Yu=!1;function Fg(){if(Hu){const a=Array.from(Va).filter(o=>o.needsMeasurement),i=new Set(a.map(o=>o.element)),l=new Map;i.forEach(o=>{const u=E2(o);u.length&&(l.set(o,u),o.render())}),a.forEach(o=>o.measureInitialState()),i.forEach(o=>{o.render();const u=l.get(o);u&&u.forEach(([h,d])=>{var p;(p=o.getValue(h))==null||p.set(d)})}),a.forEach(o=>o.measureEndState()),a.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Hu=!1,Bu=!1,Va.forEach(a=>a.complete(Yu)),Va.clear()}function $g(){Va.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(Hu=!0)})}function M2(){Yu=!0,$g(),Fg(),Yu=!1}class yf{constructor(i,l,o,u,h,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=l,this.name=o,this.motionValue=u,this.element=h,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Va.add(this),Bu||(Bu=!0,Ve.read($g),Ve.resolveKeyframes(Fg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:l,element:o,motionValue:u}=this;if(i[0]===null){const h=u==null?void 0:u.get(),d=i[i.length-1];if(h!==void 0)i[0]=h;else if(o&&l){const p=o.readValue(l,d);p!=null&&(i[0]=p)}i[0]===void 0&&(i[0]=d),u&&h===void 0&&u.set(i[0])}v2(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Va.delete(this)}cancel(){this.state==="scheduled"&&(Va.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const C2=a=>a.startsWith("--");function Wg(a,i,l){C2(i)?a.style.setProperty(i,l):a.style[i]=l}const _2={};function ey(a,i){const l=Eg(a);return()=>_2[i]??l()}const D2=ey(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),ty=ey(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Rs=([a,i,l,o])=>`cubic-bezier(${a}, ${i}, ${l}, ${o})`,l0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Rs([0,.65,.55,1]),circOut:Rs([.55,0,1,.45]),backIn:Rs([.31,.01,.66,-.59]),backOut:Rs([.33,1.53,.69,.99])};function ny(a,i){if(a)return typeof a=="function"?ty()?Ig(a,i):"ease-out":Ug(a)?Rs(a):Array.isArray(a)?a.map(l=>ny(l,i)||l0.easeOut):l0[a]}function R2(a,i,l,{delay:o=0,duration:u=300,repeat:h=0,repeatType:d="loop",ease:p="easeOut",times:y}={},g=void 0){const b={[i]:l};y&&(b.offset=y);const v=ny(p,u);Array.isArray(v)&&(b.easing=v);const S={delay:o,duration:u,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:h+1,direction:d==="reverse"?"alternate":"normal"};return g&&(S.pseudoElement=g),a.animate(b,S)}function ay(a){return typeof a=="function"&&"applyToOptions"in a}function z2({type:a,...i}){return ay(a)&&ty()?a.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class iy extends gf{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!i)return;const{element:l,name:o,keyframes:u,pseudoElement:h,allowFlatten:d=!1,finalKeyframe:p,onComplete:y}=i;this.isPseudoElement=!!h,this.allowFlatten=d,this.options=i,of(typeof i.type!="string");const g=z2(i);this.animation=R2(l,o,u,g,h),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!h){const b=Uo(u,this.options,p,this.speed);this.updateMotionValue&&this.updateMotionValue(b),Wg(l,o,b),this.animation.cancel()}y==null||y(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var i,l;(l=(i=this.animation).finish)==null||l.call(i)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var l,o,u;const i=(l=this.options)==null?void 0:l.element;!this.isPseudoElement&&(i!=null&&i.isConnected)&&((u=(o=this.animation).commitStyles)==null||u.call(o))}get duration(){var l,o;const i=((o=(l=this.animation.effect)==null?void 0:l.getComputedTiming)==null?void 0:o.call(l).duration)||0;return Qt(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+Qt(i)}get time(){return Qt(Number(this.animation.currentTime)||0)}set time(i){const l=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=kt(i),l&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(i){this.manualStartTime=this.animation.startTime=i}attachTimeline({timeline:i,rangeStart:l,rangeEnd:o,observe:u}){var h;return this.allowFlatten&&((h=this.animation.effect)==null||h.updateTiming({easing:"linear"})),this.animation.onfinish=null,i&&D2()?(this.animation.timeline=i,l&&(this.animation.rangeStart=l),o&&(this.animation.rangeEnd=o),Zt):u(this)}}const sy={anticipate:kg,backInOut:zg,circInOut:Vg};function k2(a){return a in sy}function O2(a){typeof a.ease=="string"&&k2(a.ease)&&(a.ease=sy[a.ease])}const xu=10;class V2 extends iy{constructor(i){O2(i),Pg(i),super(i),i.startTime!==void 0&&i.autoplay!==!1&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:l,onUpdate:o,onComplete:u,element:h,...d}=this.options;if(!l)return;if(i!==void 0){l.set(i);return}const p=new Do({...d,autoplay:!1}),y=Math.max(xu,pt.now()-this.startTime),g=rn(0,xu,y-xu),b=p.sample(y).value,{name:v}=this.options;h&&v&&Wg(h,v,b),l.setWithVelocity(p.sample(Math.max(0,y-g)).value,b,g),p.stop()}}const o0=(a,i)=>i==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Wt.test(a)||a==="0")&&!a.startsWith("url("));function L2(a){const i=a[0];if(a.length===1)return!0;for(let l=0;l<a.length;l++)if(a[l]!==i)return!0}function U2(a,i,l,o){const u=a[0];if(u===null)return!1;if(i==="display"||i==="visibility")return!0;const h=a[a.length-1],d=o0(u,i),p=o0(h,i);return!d||!p?!1:L2(a)||(l==="spring"||ay(l))&&o}function Gu(a){a.duration=0,a.type="keyframes"}const ly=new Set(["opacity","clipPath","filter","transform"]),B2=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function H2(a){for(let i=0;i<a.length;i++)if(typeof a[i]=="string"&&B2.test(a[i]))return!0;return!1}const Y2=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),G2=Eg(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function q2(a){var v;const{motionValue:i,name:l,repeatDelay:o,repeatType:u,damping:h,type:d,keyframes:p}=a;if(!(((v=i==null?void 0:i.owner)==null?void 0:v.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:b}=i.owner.getProps();return G2()&&l&&(ly.has(l)||Y2.has(l)&&H2(p))&&(l!=="transform"||!b)&&!g&&!o&&u!=="mirror"&&h!==0&&d!=="inertia"}const X2=40;class K2 extends gf{constructor({autoplay:i=!0,delay:l=0,type:o="keyframes",repeat:u=0,repeatDelay:h=0,repeatType:d="loop",keyframes:p,name:y,motionValue:g,element:b,...v}){var C;super(),this.stop=()=>{var k,V;this._animation&&(this._animation.stop(),(k=this.stopTimeline)==null||k.call(this)),(V=this.keyframeResolver)==null||V.cancel()},this.createdAt=pt.now();const S={autoplay:i,delay:l,type:o,repeat:u,repeatDelay:h,repeatType:d,name:y,motionValue:g,element:b,...v},T=(b==null?void 0:b.KeyframeResolver)||yf;this.keyframeResolver=new T(p,(k,V,H)=>this.onKeyframesResolved(k,V,S,!H),y,g,b),(C=this.keyframeResolver)==null||C.scheduleResolve()}onKeyframesResolved(i,l,o,u){var H,K;this.keyframeResolver=void 0;const{name:h,type:d,velocity:p,delay:y,isHandoff:g,onUpdate:b}=o;this.resolvedAt=pt.now();let v=!0;U2(i,h,d,p)||(v=!1,(ca.instantAnimations||!y)&&(b==null||b(Uo(i,o,l))),i[0]=i[i.length-1],Gu(o),o.repeat=0);const T={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>X2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...o,keyframes:i},C=v&&!g&&q2(T),k=(K=(H=T.motionValue)==null?void 0:H.owner)==null?void 0:K.current;let V;if(C)try{V=new V2({...T,element:k})}catch{V=new Do(T)}else V=new Do(T);V.finished.then(()=>{this.notifyFinished()}).catch(Zt),this.pendingTimeline&&(this.stopTimeline=V.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=V}get finished(){return this._animation?this.animation.finished:this._finished}then(i,l){return this.finished.finally(i).then(()=>{})}get animation(){var i;return this._animation||((i=this.keyframeResolver)==null||i.resume(),M2()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var i;this._animation&&this.animation.cancel(),(i=this.keyframeResolver)==null||i.cancel()}}function oy(a,i,l,o=0,u=1){const h=Array.from(a).sort((g,b)=>g.sortNodePosition(b)).indexOf(i),d=a.size,p=(d-1)*o;return typeof l=="function"?l(h,d):u===1?h*o:p-h*o}const Q2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Z2(a){const i=Q2.exec(a);if(!i)return[,];const[,l,o,u]=i;return[`--${l??o}`,u]}function ry(a,i,l=1){const[o,u]=Z2(a);if(!o)return;const h=window.getComputedStyle(i).getPropertyValue(o);if(h){const d=h.trim();return Ng(d)?parseFloat(d):d}return ff(u)?ry(u,i,l+1):u}const I2={type:"spring",stiffness:500,damping:25,restSpeed:10},J2=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),P2={type:"keyframes",duration:.8},F2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},$2=(a,{keyframes:i})=>i.length>2?P2:ki.has(a)?a.startsWith("scale")?J2(i[1]):I2:F2;function cy(a,i){if(a!=null&&a.inherit&&i){const{inherit:l,...o}=a;return{...i,...o}}return a}function xf(a,i){const l=(a==null?void 0:a[i])??(a==null?void 0:a.default)??a;return l!==a?cy(l,a):l}const W2=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function eS(a){for(const i in a)if(!W2.has(i))return!0;return!1}const bf=(a,i,l,o={},u,h)=>d=>{const p=xf(o,a)||{},y=p.delay||o.delay||0;let{elapsed:g=0}=o;g=g-kt(y);const b={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:i.getVelocity(),...p,delay:-g,onUpdate:S=>{i.set(S),p.onUpdate&&p.onUpdate(S)},onComplete:()=>{d(),p.onComplete&&p.onComplete()},name:a,motionValue:i,element:h?void 0:u};eS(p)||Object.assign(b,$2(a,b)),b.duration&&(b.duration=kt(b.duration)),b.repeatDelay&&(b.repeatDelay=kt(b.repeatDelay)),b.from!==void 0&&(b.keyframes[0]=b.from);let v=!1;if((b.type===!1||b.duration===0&&!b.repeatDelay)&&(Gu(b),b.delay===0&&(v=!0)),(ca.instantAnimations||ca.skipAnimations||u!=null&&u.shouldSkipAnimations)&&(v=!0,Gu(b),b.delay=0),b.allowFlatten=!p.type&&!p.ease,v&&!h&&i.get()!==void 0){const S=Uo(b.keyframes,p);if(S!==void 0){Ve.update(()=>{b.onUpdate(S),b.onComplete()});return}}return p.isSync?new Do(b):new K2(b)};function r0(a){const i=[{},{}];return a==null||a.values.forEach((l,o)=>{i[0][o]=l.get(),i[1][o]=l.getVelocity()}),i}function vf(a,i,l,o){if(typeof i=="function"){const[u,h]=r0(o);i=i(l!==void 0?l:a.custom,u,h)}if(typeof i=="string"&&(i=a.variants&&a.variants[i]),typeof i=="function"){const[u,h]=r0(o);i=i(l!==void 0?l:a.custom,u,h)}return i}function La(a,i,l){const o=a.getProps();return vf(o,i,l!==void 0?l:o.custom,a)}const uy=new Set(["width","height","top","left","right","bottom",...zi]),c0=30,tS=a=>!isNaN(parseFloat(a));class nS{constructor(i,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{var h;const u=pt.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&((h=this.events.change)==null||h.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=l.owner}setCurrent(i){this.current=i,this.updatedAt=pt.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=tS(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,l){this.events[i]||(this.events[i]=new rf);const o=this.events[i].add(l);return i==="change"?()=>{o(),Ve.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,l){this.passiveEffect=i,this.stopPassiveEffect=l}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,l,o){this.set(l),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-o}jump(i,l=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var i;(i=this.events.change)==null||i.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=pt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>c0)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,c0);return Mg(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(i){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=i(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var i,l;(i=this.dependents)==null||i.clear(),(l=this.events.destroy)==null||l.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function _i(a,i){return new nS(a,i)}const qu=a=>Array.isArray(a);function aS(a,i,l){a.hasValue(i)?a.getValue(i).set(l):a.addValue(i,_i(l))}function iS(a){return qu(a)?a[a.length-1]||0:a}function sS(a,i){const l=La(a,i);let{transitionEnd:o={},transition:u={},...h}=l||{};h={...h,...o};for(const d in h){const p=iS(h[d]);aS(a,d,p)}}const dt=a=>!!(a&&a.getVelocity);function lS(a){return!!(dt(a)&&a.add)}function Xu(a,i){const l=a.getValue("willChange");if(lS(l))return l.add(i);if(!l&&ca.WillChange){const o=new ca.WillChange("auto");a.addValue("willChange",o),o.add(i)}}function Sf(a){return a.replace(/([A-Z])/g,i=>`-${i.toLowerCase()}`)}const oS="framerAppearId",fy="data-"+Sf(oS);function dy(a){return a.props[fy]}function rS({protectedKeys:a,needsAnimating:i},l){const o=a.hasOwnProperty(l)&&i[l]!==!0;return i[l]=!1,o}function hy(a,i,{delay:l=0,transitionOverride:o,type:u}={}){let{transition:h,transitionEnd:d,...p}=i;const y=a.getDefaultTransition();h=h?cy(h,y):y;const g=h==null?void 0:h.reduceMotion;o&&(h=o);const b=[],v=u&&a.animationState&&a.animationState.getState()[u];for(const S in p){const T=a.getValue(S,a.latestValues[S]??null),C=p[S];if(C===void 0||v&&rS(v,S))continue;const k={delay:l,...xf(h||{},S)},V=T.get();if(V!==void 0&&!T.isAnimating()&&!Array.isArray(C)&&C===V&&!k.velocity){Ve.update(()=>T.set(C));continue}let H=!1;if(window.MotionHandoffAnimation){const q=dy(a);if(q){const J=window.MotionHandoffAnimation(q,S,Ve);J!==null&&(k.startTime=J,H=!0)}}Xu(a,S);const K=g??a.shouldReduceMotion;T.start(bf(S,T,C,K&&uy.has(S)?{type:!1}:k,a,H));const G=T.animation;G&&b.push(G)}if(d){const S=()=>Ve.update(()=>{d&&sS(a,d)});b.length?Promise.all(b).then(S):S()}return b}function Ku(a,i,l={}){var y;const o=La(a,i,l.type==="exit"?(y=a.presenceContext)==null?void 0:y.custom:void 0);let{transition:u=a.getDefaultTransition()||{}}=o||{};l.transitionOverride&&(u=l.transitionOverride);const h=o?()=>Promise.all(hy(a,o,l)):()=>Promise.resolve(),d=a.variantChildren&&a.variantChildren.size?(g=0)=>{const{delayChildren:b=0,staggerChildren:v,staggerDirection:S}=u;return cS(a,i,g,b,v,S,l)}:()=>Promise.resolve(),{when:p}=u;if(p){const[g,b]=p==="beforeChildren"?[h,d]:[d,h];return g().then(()=>b())}else return Promise.all([h(),d(l.delay)])}function cS(a,i,l=0,o=0,u=0,h=1,d){const p=[];for(const y of a.variantChildren)y.notify("AnimationStart",i),p.push(Ku(y,i,{...d,delay:l+(typeof o=="function"?0:o)+oy(a.variantChildren,y,o,u,h)}).then(()=>y.notify("AnimationComplete",i)));return Promise.all(p)}function uS(a,i,l={}){a.notify("AnimationStart",i);let o;if(Array.isArray(i)){const u=i.map(h=>Ku(a,h,l));o=Promise.all(u)}else if(typeof i=="string")o=Ku(a,i,l);else{const u=typeof i=="function"?La(a,i,l.custom):i;o=Promise.all(hy(a,u,l))}return o.then(()=>{a.notify("AnimationComplete",i)})}const fS={test:a=>a==="auto",parse:a=>a},my=a=>i=>i.test(a),py=[Ri,te,on,la,L1,V1,fS],u0=a=>py.find(my(a));function dS(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||Ag(a):!0}const hS=new Set(["brightness","contrast","saturate","opacity"]);function mS(a){const[i,l]=a.slice(0,-1).split("(");if(i==="drop-shadow")return a;const[o]=l.match(df)||[];if(!o)return a;const u=l.replace(o,"");let h=hS.has(i)?1:0;return o!==l&&(h*=100),i+"("+h+u+")"}const pS=/\b([a-z-]*)\(.*?\)/gu,Qu={...Wt,getAnimatableNone:a=>{const i=a.match(pS);return i?i.map(mS).join(" "):a}},Zu={...Wt,getAnimatableNone:a=>{const i=Wt.parse(a);return Wt.createTransformer(a)(i.map(o=>typeof o=="number"?0:typeof o=="object"?{...o,alpha:1}:o))}},f0={...Ri,transform:Math.round},gS={rotate:la,rotateX:la,rotateY:la,rotateZ:la,scale:ho,scaleX:ho,scaleY:ho,scaleZ:ho,skew:la,skewX:la,skewY:la,distance:te,translateX:te,translateY:te,translateZ:te,x:te,y:te,z:te,perspective:te,transformPerspective:te,opacity:Us,originX:Fp,originY:Fp,originZ:te},wf={borderWidth:te,borderTopWidth:te,borderRightWidth:te,borderBottomWidth:te,borderLeftWidth:te,borderRadius:te,borderTopLeftRadius:te,borderTopRightRadius:te,borderBottomRightRadius:te,borderBottomLeftRadius:te,width:te,maxWidth:te,height:te,maxHeight:te,top:te,right:te,bottom:te,left:te,inset:te,insetBlock:te,insetBlockStart:te,insetBlockEnd:te,insetInline:te,insetInlineStart:te,insetInlineEnd:te,padding:te,paddingTop:te,paddingRight:te,paddingBottom:te,paddingLeft:te,paddingBlock:te,paddingBlockStart:te,paddingBlockEnd:te,paddingInline:te,paddingInlineStart:te,paddingInlineEnd:te,margin:te,marginTop:te,marginRight:te,marginBottom:te,marginLeft:te,marginBlock:te,marginBlockStart:te,marginBlockEnd:te,marginInline:te,marginInlineStart:te,marginInlineEnd:te,fontSize:te,backgroundPositionX:te,backgroundPositionY:te,...gS,zIndex:f0,fillOpacity:Us,strokeOpacity:Us,numOctaves:f0},yS={...wf,color:$e,backgroundColor:$e,outlineColor:$e,fill:$e,stroke:$e,borderColor:$e,borderTopColor:$e,borderRightColor:$e,borderBottomColor:$e,borderLeftColor:$e,filter:Qu,WebkitFilter:Qu,mask:Zu,WebkitMask:Zu},gy=a=>yS[a],xS=new Set([Qu,Zu]);function yy(a,i){let l=gy(a);return xS.has(l)||(l=Wt),l.getAnimatableNone?l.getAnimatableNone(i):void 0}const bS=new Set(["auto","none","0"]);function vS(a,i,l){let o=0,u;for(;o<a.length&&!u;){const h=a[o];typeof h=="string"&&!bS.has(h)&&Ci(h).values.length&&(u=a[o]),o++}if(u&&l)for(const h of i)a[h]=yy(l,u)}class SS extends yf{constructor(i,l,o,u,h){super(i,l,o,u,h,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:l,name:o}=this;if(!l||!l.current)return;super.readKeyframes();for(let b=0;b<i.length;b++){let v=i[b];if(typeof v=="string"&&(v=v.trim(),ff(v))){const S=ry(v,l.current);S!==void 0&&(i[b]=S),b===i.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!uy.has(o)||i.length!==2)return;const[u,h]=i,d=u0(u),p=u0(h),y=Pp(u),g=Pp(h);if(y!==g&&ra[o]){this.needsMeasurement=!0;return}if(d!==p)if(s0(d)&&s0(p))for(let b=0;b<i.length;b++){const v=i[b];typeof v=="string"&&(i[b]=parseFloat(v))}else ra[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:l}=this,o=[];for(let u=0;u<i.length;u++)(i[u]===null||dS(i[u]))&&o.push(u);o.length&&vS(i,o,l)}measureInitialState(){const{element:i,unresolvedKeyframes:l,name:o}=this;if(!i||!i.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ra[o](i.measureViewportBox(),window.getComputedStyle(i.current)),l[0]=this.measuredOrigin;const u=l[l.length-1];u!==void 0&&i.getValue(o,u).jump(u,!1)}measureEndState(){var p;const{element:i,name:l,unresolvedKeyframes:o}=this;if(!i||!i.current)return;const u=i.getValue(l);u&&u.jump(this.measuredOrigin,!1);const h=o.length-1,d=o[h];o[h]=ra[l](i.measureViewportBox(),window.getComputedStyle(i.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(p=this.removedTransforms)!=null&&p.length&&this.removedTransforms.forEach(([y,g])=>{i.getValue(y).set(g)}),this.resolveNoneKeyframes()}}function xy(a,i,l){if(a==null)return[];if(a instanceof EventTarget)return[a];if(typeof a=="string"){let o=document;const u=(l==null?void 0:l[a])??o.querySelectorAll(a);return u?Array.from(u):[]}return Array.from(a).filter(o=>o!=null)}const by=(a,i)=>i&&typeof a=="number"?i.transform(a):a;function vo(a){return jg(a)&&"offsetHeight"in a&&!("ownerSVGElement"in a)}const{schedule:Tf}=Bg(queueMicrotask,!1),$t={x:!1,y:!1};function vy(){return $t.x||$t.y}function wS(a){return a==="x"||a==="y"?$t[a]?null:($t[a]=!0,()=>{$t[a]=!1}):$t.x||$t.y?null:($t.x=$t.y=!0,()=>{$t.x=$t.y=!1})}function Sy(a,i){const l=xy(a),o=new AbortController,u={passive:!0,...i,signal:o.signal};return[l,u,()=>o.abort()]}function TS(a){return!(a.pointerType==="touch"||vy())}function NS(a,i,l={}){const[o,u,h]=Sy(a,l);return o.forEach(d=>{let p=!1,y=!1,g;const b=()=>{d.removeEventListener("pointerleave",C)},v=V=>{g&&(g(V),g=void 0),b()},S=V=>{p=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),y&&(y=!1,v(V))},T=()=>{p=!0,window.addEventListener("pointerup",S,u),window.addEventListener("pointercancel",S,u)},C=V=>{if(V.pointerType!=="touch"){if(p){y=!0;return}v(V)}},k=V=>{if(!TS(V))return;y=!1;const H=i(d,V);typeof H=="function"&&(g=H,d.addEventListener("pointerleave",C,u))};d.addEventListener("pointerenter",k,u),d.addEventListener("pointerdown",T,u)}),h}const wy=(a,i)=>i?a===i?!0:wy(a,i.parentElement):!1,Nf=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,jS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function AS(a){return jS.has(a.tagName)||a.isContentEditable===!0}const ES=new Set(["INPUT","SELECT","TEXTAREA"]);function MS(a){return ES.has(a.tagName)||a.isContentEditable===!0}const So=new WeakSet;function d0(a){return i=>{i.key==="Enter"&&a(i)}}function bu(a,i){a.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const CS=(a,i)=>{const l=a.currentTarget;if(!l)return;const o=d0(()=>{if(So.has(l))return;bu(l,"down");const u=d0(()=>{bu(l,"up")}),h=()=>bu(l,"cancel");l.addEventListener("keyup",u,i),l.addEventListener("blur",h,i)});l.addEventListener("keydown",o,i),l.addEventListener("blur",()=>l.removeEventListener("keydown",o),i)};function h0(a){return Nf(a)&&!vy()}const m0=new WeakSet;function _S(a,i,l={}){const[o,u,h]=Sy(a,l),d=p=>{const y=p.currentTarget;if(!h0(p)||m0.has(p))return;So.add(y),l.stopPropagation&&m0.add(p);const g=i(y,p),b=(T,C)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",S),So.has(y)&&So.delete(y),h0(T)&&typeof g=="function"&&g(T,{success:C})},v=T=>{b(T,y===window||y===document||l.useGlobalTarget||wy(y,T.target))},S=T=>{b(T,!1)};window.addEventListener("pointerup",v,u),window.addEventListener("pointercancel",S,u)};return o.forEach(p=>{(l.useGlobalTarget?window:p).addEventListener("pointerdown",d,u),vo(p)&&(p.addEventListener("focus",g=>CS(g,u)),!AS(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),h}function jf(a){return jg(a)&&"ownerSVGElement"in a}const wo=new WeakMap;let oa;const Ty=(a,i,l)=>(o,u)=>u&&u[0]?u[0][a+"Size"]:jf(o)&&"getBBox"in o?o.getBBox()[i]:o[l],DS=Ty("inline","width","offsetWidth"),RS=Ty("block","height","offsetHeight");function zS({target:a,borderBoxSize:i}){var l;(l=wo.get(a))==null||l.forEach(o=>{o(a,{get width(){return DS(a,i)},get height(){return RS(a,i)}})})}function kS(a){a.forEach(zS)}function OS(){typeof ResizeObserver>"u"||(oa=new ResizeObserver(kS))}function VS(a,i){oa||OS();const l=xy(a);return l.forEach(o=>{let u=wo.get(o);u||(u=new Set,wo.set(o,u)),u.add(i),oa==null||oa.observe(o)}),()=>{l.forEach(o=>{const u=wo.get(o);u==null||u.delete(i),u!=null&&u.size||oa==null||oa.unobserve(o)})}}const To=new Set;let Ei;function LS(){Ei=()=>{const a={get width(){return window.innerWidth},get height(){return window.innerHeight}};To.forEach(i=>i(a))},window.addEventListener("resize",Ei)}function US(a){return To.add(a),Ei||LS(),()=>{To.delete(a),!To.size&&typeof Ei=="function"&&(window.removeEventListener("resize",Ei),Ei=void 0)}}function p0(a,i){return typeof a=="function"?US(a):VS(a,i)}function BS(a){return jf(a)&&a.tagName==="svg"}const HS=[...py,$e,Wt],YS=a=>HS.find(my(a)),g0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Mi=()=>({x:g0(),y:g0()}),y0=()=>({min:0,max:0}),tt=()=>({x:y0(),y:y0()}),GS=new WeakMap;function Bo(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function Bs(a){return typeof a=="string"||Array.isArray(a)}const Af=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ef=["initial",...Af];function Ho(a){return Bo(a.animate)||Ef.some(i=>Bs(a[i]))}function Ny(a){return!!(Ho(a)||a.variants)}function qS(a,i,l){for(const o in i){const u=i[o],h=l[o];if(dt(u))a.addValue(o,u);else if(dt(h))a.addValue(o,_i(u,{owner:a}));else if(h!==u)if(a.hasValue(o)){const d=a.getValue(o);d.liveStyle===!0?d.jump(u):d.hasAnimated||d.set(u)}else{const d=a.getStaticValue(o);a.addValue(o,_i(d!==void 0?d:u,{owner:a}))}}for(const o in l)i[o]===void 0&&a.removeValue(o);return i}const Iu={current:null},jy={current:!1},XS=typeof window<"u";function KS(){if(jy.current=!0,!!XS)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),i=()=>Iu.current=a.matches;a.addEventListener("change",i),i()}else Iu.current=!1}const x0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ro={};function Ay(a){Ro=a}function QS(){return Ro}class ZS{scrapeMotionValuesFromProps(i,l,o){return{}}constructor({parent:i,props:l,presenceContext:o,reducedMotionConfig:u,skipAnimations:h,blockInitialAnimation:d,visualState:p},y={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=yf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const T=pt.now();this.renderScheduledAt<T&&(this.renderScheduledAt=T,Ve.render(this.render,!1,!0))};const{latestValues:g,renderState:b}=p;this.latestValues=g,this.baseTarget={...g},this.initialValues=l.initial?{...g}:{},this.renderState=b,this.parent=i,this.props=l,this.presenceContext=o,this.depth=i?i.depth+1:0,this.reducedMotionConfig=u,this.skipAnimationsConfig=h,this.options=y,this.blockInitialAnimation=!!d,this.isControllingVariants=Ho(l),this.isVariantNode=Ny(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:v,...S}=this.scrapeMotionValuesFromProps(l,{},this);for(const T in S){const C=S[T];g[T]!==void 0&&dt(C)&&C.set(g[T])}}mount(i){var l,o;if(this.hasBeenMounted)for(const u in this.initialValues)(l=this.values.get(u))==null||l.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=i,GS.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,h)=>this.bindToMotionValue(h,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(jy.current||KS(),this.shouldReduceMotion=Iu.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(o=this.parent)==null||o.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var i;this.projection&&this.projection.unmount(),ua(this.notifyUpdate),ua(this.render),this.valueSubscriptions.forEach(l=>l()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(i=this.parent)==null||i.removeChild(this);for(const l in this.events)this.events[l].clear();for(const l in this.features){const o=this.features[l];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,l){if(this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)(),l.accelerate&&ly.has(i)&&this.current instanceof HTMLElement){const{factory:d,keyframes:p,times:y,ease:g,duration:b}=l.accelerate,v=new iy({element:this.current,name:i,keyframes:p,times:y,ease:g,duration:kt(b)}),S=d(v);this.valueSubscriptions.set(i,()=>{S(),v.cancel()});return}const o=ki.has(i);o&&this.onBindTransform&&this.onBindTransform();const u=l.on("change",d=>{this.latestValues[i]=d,this.props.onUpdate&&Ve.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let h;typeof window<"u"&&window.MotionCheckAppearSync&&(h=window.MotionCheckAppearSync(this,i,l)),this.valueSubscriptions.set(i,()=>{u(),h&&h(),l.owner&&l.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Ro){const l=Ro[i];if(!l)continue;const{isEnabled:o,Feature:u}=l;if(!this.features[i]&&u&&o(this.props)&&(this.features[i]=new u(this)),this.features[i]){const h=this.features[i];h.isMounted?h.update():(h.mount(),h.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):tt()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,l){this.latestValues[i]=l}update(i,l){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let o=0;o<x0.length;o++){const u=x0[o];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const h="on"+u,d=i[h];d&&(this.propEventSubscriptions[u]=this.on(u,d))}this.prevMotionValues=qS(this,this.scrapeMotionValuesFromProps(i,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(i),()=>l.variantChildren.delete(i)}addValue(i,l){const o=this.values.get(i);l!==o&&(o&&this.removeValue(i),this.bindToMotionValue(i,l),this.values.set(i,l),this.latestValues[i]=l.get())}removeValue(i){this.values.delete(i);const l=this.valueSubscriptions.get(i);l&&(l(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,l){if(this.props.values&&this.props.values[i])return this.props.values[i];let o=this.values.get(i);return o===void 0&&l!==void 0&&(o=_i(l===null?void 0:l,{owner:this}),this.addValue(i,o)),o}readValue(i,l){let o=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return o!=null&&(typeof o=="string"&&(Ng(o)||Ag(o))?o=parseFloat(o):!YS(o)&&Wt.test(l)&&(o=yy(i,l)),this.setBaseTarget(i,dt(o)?o.get():o)),dt(o)?o.get():o}setBaseTarget(i,l){this.baseTarget[i]=l}getBaseTarget(i){var h;const{initial:l}=this.props;let o;if(typeof l=="string"||typeof l=="object"){const d=vf(this.props,l,(h=this.presenceContext)==null?void 0:h.custom);d&&(o=d[i])}if(l&&o!==void 0)return o;const u=this.getBaseTargetFromProps(this.props,i);return u!==void 0&&!dt(u)?u:this.initialValues[i]!==void 0&&o===void 0?void 0:this.baseTarget[i]}on(i,l){return this.events[i]||(this.events[i]=new rf),this.events[i].add(l)}notify(i,...l){this.events[i]&&this.events[i].notify(...l)}scheduleRenderMicrotask(){Tf.render(this.render)}}class Ey extends ZS{constructor(){super(...arguments),this.KeyframeResolver=SS}sortInstanceNodePosition(i,l){return i.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(i,l){const o=i.style;return o?o[l]:void 0}removeValueFromRenderState(i,{vars:l,style:o}){delete l[i],delete o[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;dt(i)&&(this.childSubscription=i.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}class fa{constructor(i){this.isMounted=!1,this.node=i}update(){}}function My({top:a,left:i,right:l,bottom:o}){return{x:{min:i,max:l},y:{min:a,max:o}}}function IS({x:a,y:i}){return{top:i.min,right:a.max,bottom:i.max,left:a.min}}function JS(a,i){if(!i)return a;const l=i({x:a.left,y:a.top}),o=i({x:a.right,y:a.bottom});return{top:l.y,left:l.x,bottom:o.y,right:o.x}}function vu(a){return a===void 0||a===1}function Ju({scale:a,scaleX:i,scaleY:l}){return!vu(a)||!vu(i)||!vu(l)}function za(a){return Ju(a)||Cy(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function Cy(a){return b0(a.x)||b0(a.y)}function b0(a){return a&&a!=="0%"}function zo(a,i,l){const o=a-l,u=i*o;return l+u}function v0(a,i,l,o,u){return u!==void 0&&(a=zo(a,u,o)),zo(a,l,o)+i}function Pu(a,i=0,l=1,o,u){a.min=v0(a.min,i,l,o,u),a.max=v0(a.max,i,l,o,u)}function _y(a,{x:i,y:l}){Pu(a.x,i.translate,i.scale,i.originPoint),Pu(a.y,l.translate,l.scale,l.originPoint)}const S0=.999999999999,w0=1.0000000000001;function PS(a,i,l,o=!1){var p;const u=l.length;if(!u)return;i.x=i.y=1;let h,d;for(let y=0;y<u;y++){h=l[y],d=h.projectionDelta;const{visualElement:g}=h.options;g&&g.props.style&&g.props.style.display==="contents"||(o&&h.options.layoutScroll&&h.scroll&&h!==h.root&&(ln(a.x,-h.scroll.offset.x),ln(a.y,-h.scroll.offset.y)),d&&(i.x*=d.x.scale,i.y*=d.y.scale,_y(a,d)),o&&za(h.latestValues)&&No(a,h.latestValues,(p=h.layout)==null?void 0:p.layoutBox))}i.x<w0&&i.x>S0&&(i.x=1),i.y<w0&&i.y>S0&&(i.y=1)}function ln(a,i){a.min+=i,a.max+=i}function T0(a,i,l,o,u=.5){const h=Be(a.min,a.max,u);Pu(a,i,l,h,o)}function N0(a,i){return typeof a=="string"?parseFloat(a)/100*(i.max-i.min):a}function No(a,i,l){const o=l??a;T0(a.x,N0(i.x,o.x),i.scaleX,i.scale,i.originX),T0(a.y,N0(i.y,o.y),i.scaleY,i.scale,i.originY)}function Dy(a,i){return My(JS(a.getBoundingClientRect(),i))}function FS(a,i,l){const o=Dy(a,l),{scroll:u}=i;return u&&(ln(o.x,u.offset.x),ln(o.y,u.offset.y)),o}const $S={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},WS=zi.length;function ew(a,i,l){let o="",u=!0;for(let h=0;h<WS;h++){const d=zi[h],p=a[d];if(p===void 0)continue;let y=!0;if(typeof p=="number")y=p===(d.startsWith("scale")?1:0);else{const g=parseFloat(p);y=d.startsWith("scale")?g===1:g===0}if(!y||l){const g=by(p,wf[d]);if(!y){u=!1;const b=$S[d]||d;o+=`${b}(${g}) `}l&&(i[d]=g)}}return o=o.trim(),l?o=l(i,u?"":o):u&&(o="none"),o}function Mf(a,i,l){const{style:o,vars:u,transformOrigin:h}=a;let d=!1,p=!1;for(const y in i){const g=i[y];if(ki.has(y)){d=!0;continue}else if(Yg(y)){u[y]=g;continue}else{const b=by(g,wf[y]);y.startsWith("origin")?(p=!0,h[y]=b):o[y]=b}}if(i.transform||(d||l?o.transform=ew(i,a.transform,l):o.transform&&(o.transform="none")),p){const{originX:y="50%",originY:g="50%",originZ:b=0}=h;o.transformOrigin=`${y} ${g} ${b}`}}function Ry(a,{style:i,vars:l},o,u){const h=a.style;let d;for(d in i)h[d]=i[d];u==null||u.applyProjectionStyles(h,o);for(d in l)h.setProperty(d,l[d])}function j0(a,i){return i.max===i.min?0:a/(i.max-i.min)*100}const _s={correct:(a,i)=>{if(!i.target)return a;if(typeof a=="string")if(te.test(a))a=parseFloat(a);else return a;const l=j0(a,i.target.x),o=j0(a,i.target.y);return`${l}% ${o}%`}},tw={correct:(a,{treeScale:i,projectionDelta:l})=>{const o=a,u=Wt.parse(a);if(u.length>5)return o;const h=Wt.createTransformer(a),d=typeof u[0]!="number"?1:0,p=l.x.scale*i.x,y=l.y.scale*i.y;u[0+d]/=p,u[1+d]/=y;const g=Be(p,y,.5);return typeof u[2+d]=="number"&&(u[2+d]/=g),typeof u[3+d]=="number"&&(u[3+d]/=g),h(u)}},Fu={borderRadius:{..._s,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:_s,borderTopRightRadius:_s,borderBottomLeftRadius:_s,borderBottomRightRadius:_s,boxShadow:tw};function zy(a,{layout:i,layoutId:l}){return ki.has(a)||a.startsWith("origin")||(i||l!==void 0)&&(!!Fu[a]||a==="opacity")}function Cf(a,i,l){var d;const o=a.style,u=i==null?void 0:i.style,h={};if(!o)return h;for(const p in o)(dt(o[p])||u&&dt(u[p])||zy(p,a)||((d=l==null?void 0:l.getValue(p))==null?void 0:d.liveStyle)!==void 0)&&(h[p]=o[p]);return h}function nw(a){return window.getComputedStyle(a)}class aw extends Ey{constructor(){super(...arguments),this.type="html",this.renderInstance=Ry}readValueFromInstance(i,l){var o;if(ki.has(l))return(o=this.projection)!=null&&o.isProjecting?Lu(l):T2(i,l);{const u=nw(i),h=(Yg(l)?u.getPropertyValue(l):u[l])||0;return typeof h=="string"?h.trim():h}}measureInstanceViewportBox(i,{transformPagePoint:l}){return Dy(i,l)}build(i,l,o){Mf(i,l,o.transformTemplate)}scrapeMotionValuesFromProps(i,l,o){return Cf(i,l,o)}}const iw={offset:"stroke-dashoffset",array:"stroke-dasharray"},sw={offset:"strokeDashoffset",array:"strokeDasharray"};function lw(a,i,l=1,o=0,u=!0){a.pathLength=1;const h=u?iw:sw;a[h.offset]=`${-o}`,a[h.array]=`${i} ${l}`}const ow=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function ky(a,{attrX:i,attrY:l,attrScale:o,pathLength:u,pathSpacing:h=1,pathOffset:d=0,...p},y,g,b){if(Mf(a,p,g),y){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:v,style:S}=a;v.transform&&(S.transform=v.transform,delete v.transform),(S.transform||v.transformOrigin)&&(S.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),S.transform&&(S.transformBox=(b==null?void 0:b.transformBox)??"fill-box",delete v.transformBox);for(const T of ow)v[T]!==void 0&&(S[T]=v[T],delete v[T]);i!==void 0&&(v.x=i),l!==void 0&&(v.y=l),o!==void 0&&(v.scale=o),u!==void 0&&lw(v,u,h,d,!1)}const Oy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Vy=a=>typeof a=="string"&&a.toLowerCase()==="svg";function rw(a,i,l,o){Ry(a,i,void 0,o);for(const u in i.attrs)a.setAttribute(Oy.has(u)?u:Sf(u),i.attrs[u])}function Ly(a,i,l){const o=Cf(a,i,l);for(const u in a)if(dt(a[u])||dt(i[u])){const h=zi.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;o[h]=a[u]}return o}class cw extends Ey{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=tt}getBaseTargetFromProps(i,l){return i[l]}readValueFromInstance(i,l){if(ki.has(l)){const o=gy(l);return o&&o.default||0}return l=Oy.has(l)?l:Sf(l),i.getAttribute(l)}scrapeMotionValuesFromProps(i,l,o){return Ly(i,l,o)}build(i,l,o){ky(i,l,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(i,l,o,u){rw(i,l,o,u)}mount(i){this.isSVGTag=Vy(i.tagName),super.mount(i)}}const uw=Ef.length;function Uy(a){if(!a)return;if(!a.isControllingVariants){const l=a.parent?Uy(a.parent)||{}:{};return a.props.initial!==void 0&&(l.initial=a.props.initial),l}const i={};for(let l=0;l<uw;l++){const o=Ef[l],u=a.props[o];(Bs(u)||u===!1)&&(i[o]=u)}return i}function By(a,i){if(!Array.isArray(i))return!1;const l=i.length;if(l!==a.length)return!1;for(let o=0;o<l;o++)if(i[o]!==a[o])return!1;return!0}const fw=[...Af].reverse(),dw=Af.length;function hw(a){return i=>Promise.all(i.map(({animation:l,options:o})=>uS(a,l,o)))}function mw(a){let i=hw(a),l=A0(),o=!0,u=!1;const h=g=>(b,v)=>{var T;const S=La(a,v,g==="exit"?(T=a.presenceContext)==null?void 0:T.custom:void 0);if(S){const{transition:C,transitionEnd:k,...V}=S;b={...b,...V,...k}}return b};function d(g){i=g(a)}function p(g){const{props:b}=a,v=Uy(a.parent)||{},S=[],T=new Set;let C={},k=1/0;for(let H=0;H<dw;H++){const K=fw[H],G=l[K],q=b[K]!==void 0?b[K]:v[K],J=Bs(q),ue=K===g?G.isActive:null;ue===!1&&(k=H);let $=q===v[K]&&q!==b[K]&&J;if($&&(o||u)&&a.manuallyAnimateOnMount&&($=!1),G.protectedKeys={...C},!G.isActive&&ue===null||!q&&!G.prevProp||Bo(q)||typeof q=="boolean")continue;if(K==="exit"&&G.isActive&&ue!==!0){G.prevResolvedValues&&(C={...C,...G.prevResolvedValues});continue}const B=pw(G.prevProp,q);let ie=B||K===g&&G.isActive&&!$&&J||H>k&&J,se=!1;const xe=Array.isArray(q)?q:[q];let be=xe.reduce(h(K),{});ue===!1&&(be={});const{prevResolvedValues:Ze={}}=G,He={...Ze,...be},De=P=>{ie=!0,T.has(P)&&(se=!0,T.delete(P)),G.needsAnimating[P]=!0;const de=a.getValue(P);de&&(de.liveStyle=!1)};for(const P in He){const de=be[P],X=Ze[P];if(C.hasOwnProperty(P))continue;let N=!1;qu(de)&&qu(X)?N=!By(de,X):N=de!==X,N?de!=null?De(P):T.add(P):de!==void 0&&T.has(P)?De(P):G.protectedKeys[P]=!0}G.prevProp=q,G.prevResolvedValues=be,G.isActive&&(C={...C,...be}),(o||u)&&a.blockInitialAnimation&&(ie=!1);const D=$&&B;ie&&(!D||se)&&S.push(...xe.map(P=>{const de={type:K};if(typeof P=="string"&&(o||u)&&!D&&a.manuallyAnimateOnMount&&a.parent){const{parent:X}=a,N=La(X,P);if(X.enteringChildren&&N){const{delayChildren:L}=N.transition||{};de.delay=oy(X.enteringChildren,a,L)}}return{animation:P,options:de}}))}if(T.size){const H={};if(typeof b.initial!="boolean"){const K=La(a,Array.isArray(b.initial)?b.initial[0]:b.initial);K&&K.transition&&(H.transition=K.transition)}T.forEach(K=>{const G=a.getBaseTarget(K),q=a.getValue(K);q&&(q.liveStyle=!0),H[K]=G??null}),S.push({animation:H})}let V=!!S.length;return o&&(b.initial===!1||b.initial===b.animate)&&!a.manuallyAnimateOnMount&&(V=!1),o=!1,u=!1,V?i(S):Promise.resolve()}function y(g,b){var S;if(l[g].isActive===b)return Promise.resolve();(S=a.variantChildren)==null||S.forEach(T=>{var C;return(C=T.animationState)==null?void 0:C.setActive(g,b)}),l[g].isActive=b;const v=p(g);for(const T in l)l[T].protectedKeys={};return v}return{animateChanges:p,setActive:y,setAnimateFunction:d,getState:()=>l,reset:()=>{l=A0(),u=!0}}}function pw(a,i){return typeof i=="string"?i!==a:Array.isArray(i)?!By(i,a):!1}function Da(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function A0(){return{animate:Da(!0),whileInView:Da(),whileHover:Da(),whileTap:Da(),whileDrag:Da(),whileFocus:Da(),exit:Da()}}function $u(a,i){a.min=i.min,a.max=i.max}function Ft(a,i){$u(a.x,i.x),$u(a.y,i.y)}function E0(a,i){a.translate=i.translate,a.scale=i.scale,a.originPoint=i.originPoint,a.origin=i.origin}const Hy=1e-4,gw=1-Hy,yw=1+Hy,Yy=.01,xw=0-Yy,bw=0+Yy;function gt(a){return a.max-a.min}function vw(a,i,l){return Math.abs(a-i)<=l}function M0(a,i,l,o=.5){a.origin=o,a.originPoint=Be(i.min,i.max,a.origin),a.scale=gt(l)/gt(i),a.translate=Be(l.min,l.max,a.origin)-a.originPoint,(a.scale>=gw&&a.scale<=yw||isNaN(a.scale))&&(a.scale=1),(a.translate>=xw&&a.translate<=bw||isNaN(a.translate))&&(a.translate=0)}function Os(a,i,l,o){M0(a.x,i.x,l.x,o?o.originX:void 0),M0(a.y,i.y,l.y,o?o.originY:void 0)}function C0(a,i,l,o=0){const u=o?Be(l.min,l.max,o):l.min;a.min=u+i.min,a.max=a.min+gt(i)}function Sw(a,i,l,o){C0(a.x,i.x,l.x,o==null?void 0:o.x),C0(a.y,i.y,l.y,o==null?void 0:o.y)}function _0(a,i,l,o=0){const u=o?Be(l.min,l.max,o):l.min;a.min=i.min-u,a.max=a.min+gt(i)}function ko(a,i,l,o){_0(a.x,i.x,l.x,o==null?void 0:o.x),_0(a.y,i.y,l.y,o==null?void 0:o.y)}function D0(a,i,l,o,u){return a-=i,a=zo(a,1/l,o),u!==void 0&&(a=zo(a,1/u,o)),a}function ww(a,i=0,l=1,o=.5,u,h=a,d=a){if(on.test(i)&&(i=parseFloat(i),i=Be(d.min,d.max,i/100)-d.min),typeof i!="number")return;let p=Be(h.min,h.max,o);a===h&&(p-=i),a.min=D0(a.min,i,l,p,u),a.max=D0(a.max,i,l,p,u)}function R0(a,i,[l,o,u],h,d){ww(a,i[l],i[o],i[u],i.scale,h,d)}const Tw=["x","scaleX","originX"],Nw=["y","scaleY","originY"];function z0(a,i,l,o){R0(a.x,i,Tw,l?l.x:void 0,o?o.x:void 0),R0(a.y,i,Nw,l?l.y:void 0,o?o.y:void 0)}function k0(a){return a.translate===0&&a.scale===1}function Gy(a){return k0(a.x)&&k0(a.y)}function O0(a,i){return a.min===i.min&&a.max===i.max}function jw(a,i){return O0(a.x,i.x)&&O0(a.y,i.y)}function V0(a,i){return Math.round(a.min)===Math.round(i.min)&&Math.round(a.max)===Math.round(i.max)}function qy(a,i){return V0(a.x,i.x)&&V0(a.y,i.y)}function L0(a){return gt(a.x)/gt(a.y)}function U0(a,i){return a.translate===i.translate&&a.scale===i.scale&&a.originPoint===i.originPoint}function sn(a){return[a("x"),a("y")]}function Aw(a,i,l){let o="";const u=a.x.translate/i.x,h=a.y.translate/i.y,d=(l==null?void 0:l.z)||0;if((u||h||d)&&(o=`translate3d(${u}px, ${h}px, ${d}px) `),(i.x!==1||i.y!==1)&&(o+=`scale(${1/i.x}, ${1/i.y}) `),l){const{transformPerspective:g,rotate:b,rotateX:v,rotateY:S,skewX:T,skewY:C}=l;g&&(o=`perspective(${g}px) ${o}`),b&&(o+=`rotate(${b}deg) `),v&&(o+=`rotateX(${v}deg) `),S&&(o+=`rotateY(${S}deg) `),T&&(o+=`skewX(${T}deg) `),C&&(o+=`skewY(${C}deg) `)}const p=a.x.scale*i.x,y=a.y.scale*i.y;return(p!==1||y!==1)&&(o+=`scale(${p}, ${y})`),o||"none"}const Xy=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Ew=Xy.length,B0=a=>typeof a=="string"?parseFloat(a):a,H0=a=>typeof a=="number"||te.test(a);function Mw(a,i,l,o,u,h){u?(a.opacity=Be(0,l.opacity??1,Cw(o)),a.opacityExit=Be(i.opacity??1,0,_w(o))):h&&(a.opacity=Be(i.opacity??1,l.opacity??1,o));for(let d=0;d<Ew;d++){const p=Xy[d];let y=Y0(i,p),g=Y0(l,p);if(y===void 0&&g===void 0)continue;y||(y=0),g||(g=0),y===0||g===0||H0(y)===H0(g)?(a[p]=Math.max(Be(B0(y),B0(g),o),0),(on.test(g)||on.test(y))&&(a[p]+="%")):a[p]=g}(i.rotate||l.rotate)&&(a.rotate=Be(i.rotate||0,l.rotate||0,o))}function Y0(a,i){return a[i]!==void 0?a[i]:a.borderRadius}const Cw=Ky(0,.5,Og),_w=Ky(.5,.95,Zt);function Ky(a,i,l){return o=>o<a?0:o>i?1:l(Ls(a,i,o))}function Dw(a,i,l){const o=dt(a)?a:_i(a);return o.start(bf("",o,i,l)),o.animation}function Hs(a,i,l,o={passive:!0}){return a.addEventListener(i,l,o),()=>a.removeEventListener(i,l)}const Rw=(a,i)=>a.depth-i.depth;class zw{constructor(){this.children=[],this.isDirty=!1}add(i){lf(this.children,i),this.isDirty=!0}remove(i){Eo(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(Rw),this.isDirty=!1,this.children.forEach(i)}}function kw(a,i){const l=pt.now(),o=({timestamp:u})=>{const h=u-l;h>=i&&(ua(o),a(h-i))};return Ve.setup(o,!0),()=>ua(o)}function jo(a){return dt(a)?a.get():a}class Ow{constructor(){this.members=[]}add(i){lf(this.members,i);for(let l=this.members.length-1;l>=0;l--){const o=this.members[l];if(o===i||o===this.lead||o===this.prevLead)continue;const u=o.instance;(!u||u.isConnected===!1)&&!o.snapshot&&(Eo(this.members,o),o.unmount())}i.scheduleRender()}remove(i){if(Eo(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(i){var l;for(let o=this.members.indexOf(i)-1;o>=0;o--){const u=this.members[o];if(u.isPresent!==!1&&((l=u.instance)==null?void 0:l.isConnected)!==!1)return this.promote(u),!0}return!1}promote(i,l){var u;const o=this.lead;if(i!==o&&(this.prevLead=o,this.lead=i,i.show(),o)){o.updateSnapshot(),i.scheduleRender();const{layoutDependency:h}=o.options,{layoutDependency:d}=i.options;(h===void 0||h!==d)&&(i.resumeFrom=o,l&&(o.preserveOpacity=!0),o.snapshot&&(i.snapshot=o.snapshot,i.snapshot.latestValues=o.animationValues||o.latestValues),(u=i.root)!=null&&u.isUpdating&&(i.isLayoutDirty=!0)),i.options.crossfade===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(i=>{var l,o,u,h,d;(o=(l=i.options).onExitComplete)==null||o.call(l),(d=(u=i.resumingFrom)==null?void 0:(h=u.options).onExitComplete)==null||d.call(h)})}scheduleRender(){this.members.forEach(i=>i.instance&&i.scheduleRender(!1))}removeLeadSnapshot(){var i;(i=this.lead)!=null&&i.snapshot&&(this.lead.snapshot=void 0)}}const Ao={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Su=["","X","Y","Z"],Vw=1e3;let Lw=0;function wu(a,i,l,o){const{latestValues:u}=i;u[a]&&(l[a]=u[a],i.setStaticValue(a,0),o&&(o[a]=0))}function Qy(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:i}=a.options;if(!i)return;const l=dy(i);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:u,layoutId:h}=a.options;window.MotionCancelOptimisedAnimation(l,"transform",Ve,!(u||h))}const{parent:o}=a;o&&!o.hasCheckedOptimisedAppear&&Qy(o)}function Zy({attachResizeListener:a,defaultParent:i,measureScroll:l,checkIsScrollRoot:o,resetTransform:u}){return class{constructor(d={},p=i==null?void 0:i()){this.id=Lw++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Hw),this.nodes.forEach(Qw),this.nodes.forEach(Zw),this.nodes.forEach(Yw)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let y=0;y<this.path.length;y++)this.path[y].shouldResetTransform=!0;this.root===this&&(this.nodes=new zw)}addEventListener(d,p){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new rf),this.eventHandlers.get(d).add(p)}notifyListeners(d,...p){const y=this.eventHandlers.get(d);y&&y.notify(...p)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=jf(d)&&!BS(d),this.instance=d;const{layoutId:p,layout:y,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(y||p)&&(this.isLayoutDirty=!0),a){let b,v=0;const S=()=>this.root.updateBlockedByResize=!1;Ve.read(()=>{v=window.innerWidth}),a(d,()=>{const T=window.innerWidth;T!==v&&(v=T,this.root.updateBlockedByResize=!0,b&&b(),b=kw(S,250),Ao.hasAnimatedSinceResize&&(Ao.hasAnimatedSinceResize=!1,this.nodes.forEach(X0)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||y)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:v,hasRelativeLayoutChanged:S,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||g.getDefaultTransition()||$w,{onLayoutAnimationStart:k,onLayoutAnimationComplete:V}=g.getProps(),H=!this.targetLayout||!qy(this.targetLayout,T),K=!v&&S;if(this.options.layoutRoot||this.resumeFrom||K||v&&(H||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const G={...xf(C,"layout"),onPlay:k,onComplete:V};(g.shouldReduceMotion||this.options.layoutRoot)&&(G.delay=0,G.type=!1),this.startAnimation(G),this.setAnimationOrigin(b,K)}else v||X0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ua(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Iw),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Qy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let b=0;b<this.path.length;b++){const v=this.path[b];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:p,layout:y}=this.options;if(p===void 0&&!y)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const y=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),y&&this.nodes.forEach(qw),this.nodes.forEach(G0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(q0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Xw),this.nodes.forEach(Kw),this.nodes.forEach(Uw),this.nodes.forEach(Bw)):this.nodes.forEach(q0),this.clearAllSnapshots();const p=pt.now();ut.delta=rn(0,1e3/60,p-ut.timestamp),ut.timestamp=p,ut.isProcessing=!0,hu.update.process(ut),hu.preRender.process(ut),hu.render.process(ut),ut.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Tf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Gw),this.sharedNodes.forEach(Jw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ve.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ve.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!gt(this.snapshot.measuredBox.x)&&!gt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let y=0;y<this.path.length;y++)this.path[y].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=tt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(p=!1),p&&this.instance){const y=o(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:y,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:y}}}resetTransform(){if(!u)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!Gy(this.projectionDelta),y=this.getTransformTemplate(),g=y?y(this.latestValues,""):void 0,b=g!==this.prevTransformTemplateValue;d&&this.instance&&(p||za(this.latestValues)||b)&&(u(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const p=this.measurePageBox();let y=this.removeElementScroll(p);return d&&(y=this.removeTransform(y)),Ww(y),{animationId:this.root.animationId,measuredBox:p,layoutBox:y,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return tt();const p=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(eT))){const{scroll:b}=this.root;b&&(ln(p.x,b.offset.x),ln(p.y,b.offset.y))}return p}removeElementScroll(d){var y;const p=tt();if(Ft(p,d),(y=this.scroll)!=null&&y.wasRoot)return p;for(let g=0;g<this.path.length;g++){const b=this.path[g],{scroll:v,options:S}=b;b!==this.root&&v&&S.layoutScroll&&(v.wasRoot&&Ft(p,d),ln(p.x,v.offset.x),ln(p.y,v.offset.y))}return p}applyTransform(d,p=!1,y){var b,v;const g=y||tt();Ft(g,d);for(let S=0;S<this.path.length;S++){const T=this.path[S];!p&&T.options.layoutScroll&&T.scroll&&T!==T.root&&(ln(g.x,-T.scroll.offset.x),ln(g.y,-T.scroll.offset.y)),za(T.latestValues)&&No(g,T.latestValues,(b=T.layout)==null?void 0:b.layoutBox)}return za(this.latestValues)&&No(g,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),g}removeTransform(d){var y;const p=tt();Ft(p,d);for(let g=0;g<this.path.length;g++){const b=this.path[g];if(!za(b.latestValues))continue;let v;b.instance&&(Ju(b.latestValues)&&b.updateSnapshot(),v=tt(),Ft(v,b.measurePageBox())),z0(p,b.latestValues,(y=b.snapshot)==null?void 0:y.layoutBox,v)}return za(this.latestValues)&&z0(p,this.latestValues),p}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ut.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var T;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const y=!!this.resumingFrom||this!==p;if(!(d||y&&this.isSharedProjectionDirty||this.isProjectionDirty||(T=this.parent)!=null&&T.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:v}=this.options;if(!this.layout||!(b||v))return;this.resolvedRelativeTargetAt=ut.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=tt(),this.targetWithTransforms=tt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Sw(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ft(this.target,this.layout.layoutBox),_y(this.target,this.targetDelta)):Ft(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ju(this.parent.latestValues)||Cy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,p,y){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tt(),this.relativeTargetOrigin=tt(),ko(this.relativeTargetOrigin,p,y,this.options.layoutAnchor||void 0),Ft(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var C;const d=this.getLead(),p=!!this.resumingFrom||this!==d;let y=!0;if((this.isProjectionDirty||(C=this.parent)!=null&&C.isProjectionDirty)&&(y=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(y=!1),this.resolvedRelativeTargetAt===ut.timestamp&&(y=!1),y)return;const{layout:g,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||b))return;Ft(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,S=this.treeScale.y;PS(this.layoutCorrected,this.treeScale,this.path,p),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=tt());const{target:T}=d;if(!T){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(E0(this.prevProjectionDelta.x,this.projectionDelta.x),E0(this.prevProjectionDelta.y,this.projectionDelta.y)),Os(this.projectionDelta,this.layoutCorrected,T,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==S||!U0(this.projectionDelta.x,this.prevProjectionDelta.x)||!U0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var p;if((p=this.options.visualElement)==null||p.scheduleRender(),d){const y=this.getStack();y&&y.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Mi(),this.projectionDelta=Mi(),this.projectionDeltaWithTransform=Mi()}setAnimationOrigin(d,p=!1){const y=this.snapshot,g=y?y.latestValues:{},b={...this.latestValues},v=Mi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const S=tt(),T=y?y.source:void 0,C=this.layout?this.layout.source:void 0,k=T!==C,V=this.getStack(),H=!V||V.members.length<=1,K=!!(k&&!H&&this.options.crossfade===!0&&!this.path.some(Fw));this.animationProgress=0;let G;this.mixTargetDelta=q=>{const J=q/1e3;K0(v.x,d.x,J),K0(v.y,d.y,J),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ko(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Pw(this.relativeTarget,this.relativeTargetOrigin,S,J),G&&jw(this.relativeTarget,G)&&(this.isProjectionDirty=!1),G||(G=tt()),Ft(G,this.relativeTarget)),k&&(this.animationValues=b,Mw(b,g,this.latestValues,J,K,H)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=J},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var p,y,g;this.notifyListeners("animationStart"),(p=this.currentAnimation)==null||p.stop(),(g=(y=this.resumingFrom)==null?void 0:y.currentAnimation)==null||g.stop(),this.pendingAnimation&&(ua(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ve.update(()=>{Ao.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=_i(0)),this.motionValue.jump(0,!1),this.currentAnimation=Dw(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:b=>{this.mixTargetDelta(b),d.onUpdate&&d.onUpdate(b)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Vw),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:p,target:y,layout:g,latestValues:b}=d;if(!(!p||!y||!g)){if(this!==d&&this.layout&&g&&Iy(this.options.animationType,this.layout.layoutBox,g.layoutBox)){y=this.target||tt();const v=gt(this.layout.layoutBox.x);y.x.min=d.target.x.min,y.x.max=y.x.min+v;const S=gt(this.layout.layoutBox.y);y.y.min=d.target.y.min,y.y.max=y.y.min+S}Ft(p,y),No(p,b),Os(this.projectionDeltaWithTransform,this.layoutCorrected,p,b)}}registerSharedNode(d,p){this.sharedNodes.has(d)||this.sharedNodes.set(d,new Ow),this.sharedNodes.get(d).add(p);const g=p.options.initialPromotionConfig;p.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(p):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var p;const{layoutId:d}=this.options;return d?((p=this.getStack())==null?void 0:p.lead)||this:this}getPrevLead(){var p;const{layoutId:d}=this.options;return d?(p=this.getStack())==null?void 0:p.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:p,preserveFollowOpacity:y}={}){const g=this.getStack();g&&g.promote(this,y),d&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let p=!1;const{latestValues:y}=d;if((y.z||y.rotate||y.rotateX||y.rotateY||y.rotateZ||y.skewX||y.skewY)&&(p=!0),!p)return;const g={};y.z&&wu("z",d,g,this.animationValues);for(let b=0;b<Su.length;b++)wu(`rotate${Su[b]}`,d,g,this.animationValues),wu(`skew${Su[b]}`,d,g,this.animationValues);d.render();for(const b in g)d.setStaticValue(b,g[b]),this.animationValues&&(this.animationValues[b]=g[b]);d.scheduleRender()}applyProjectionStyles(d,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const y=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=jo(p==null?void 0:p.pointerEvents)||"",d.transform=y?y(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=jo(p==null?void 0:p.pointerEvents)||""),this.hasProjected&&!za(this.latestValues)&&(d.transform=y?y({},""):"none",this.hasProjected=!1);return}d.visibility="";const b=g.animationValues||g.latestValues;this.applyTransformsToTarget();let v=Aw(this.projectionDeltaWithTransform,this.treeScale,b);y&&(v=y(b,v)),d.transform=v;const{x:S,y:T}=this.projectionDelta;d.transformOrigin=`${S.origin*100}% ${T.origin*100}% 0`,g.animationValues?d.opacity=g===this?b.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:b.opacityExit:d.opacity=g===this?b.opacity!==void 0?b.opacity:"":b.opacityExit!==void 0?b.opacityExit:0;for(const C in Fu){if(b[C]===void 0)continue;const{correct:k,applyTo:V,isCSSVariable:H}=Fu[C],K=v==="none"?b[C]:k(b[C],g);if(V){const G=V.length;for(let q=0;q<G;q++)d[V[q]]=K}else H?this.options.visualElement.renderState.vars[C]=K:d[C]=K}this.options.layoutId&&(d.pointerEvents=g===this?jo(p==null?void 0:p.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var p;return(p=d.currentAnimation)==null?void 0:p.stop()}),this.root.nodes.forEach(G0),this.root.sharedNodes.clear()}}}function Uw(a){a.updateLayout()}function Bw(a){var l;const i=((l=a.resumeFrom)==null?void 0:l.snapshot)||a.snapshot;if(a.isLead()&&a.layout&&i&&a.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:u}=a.layout,{animationType:h}=a.options,d=i.source!==a.layout.source;if(h==="size")sn(v=>{const S=d?i.measuredBox[v]:i.layoutBox[v],T=gt(S);S.min=o[v].min,S.max=S.min+T});else if(h==="x"||h==="y"){const v=h==="x"?"y":"x";$u(d?i.measuredBox[v]:i.layoutBox[v],o[v])}else Iy(h,i.layoutBox,o)&&sn(v=>{const S=d?i.measuredBox[v]:i.layoutBox[v],T=gt(o[v]);S.max=S.min+T,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[v].max=a.relativeTarget[v].min+T)});const p=Mi();Os(p,o,i.layoutBox);const y=Mi();d?Os(y,a.applyTransform(u,!0),i.measuredBox):Os(y,o,i.layoutBox);const g=!Gy(p);let b=!1;if(!a.resumeFrom){const v=a.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:S,layout:T}=v;if(S&&T){const C=a.options.layoutAnchor||void 0,k=tt();ko(k,i.layoutBox,S.layoutBox,C);const V=tt();ko(V,o,T.layoutBox,C),qy(k,V)||(b=!0),v.options.layoutRoot&&(a.relativeTarget=V,a.relativeTargetOrigin=k,a.relativeParent=v)}}}a.notifyListeners("didUpdate",{layout:o,snapshot:i,delta:y,layoutDelta:p,hasLayoutChanged:g,hasRelativeLayoutChanged:b})}else if(a.isLead()){const{onExitComplete:o}=a.options;o&&o()}a.options.transition=void 0}function Hw(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function Yw(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function Gw(a){a.clearSnapshot()}function G0(a){a.clearMeasurements()}function qw(a){a.isLayoutDirty=!0,a.updateLayout()}function q0(a){a.isLayoutDirty=!1}function Xw(a){a.isAnimationBlocked&&a.layout&&!a.isLayoutDirty&&(a.snapshot=a.layout,a.isLayoutDirty=!0)}function Kw(a){const{visualElement:i}=a.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),a.resetTransform()}function X0(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function Qw(a){a.resolveTargetDelta()}function Zw(a){a.calcProjection()}function Iw(a){a.resetSkewAndRotation()}function Jw(a){a.removeLeadSnapshot()}function K0(a,i,l){a.translate=Be(i.translate,0,l),a.scale=Be(i.scale,1,l),a.origin=i.origin,a.originPoint=i.originPoint}function Q0(a,i,l,o){a.min=Be(i.min,l.min,o),a.max=Be(i.max,l.max,o)}function Pw(a,i,l,o){Q0(a.x,i.x,l.x,o),Q0(a.y,i.y,l.y,o)}function Fw(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const $w={duration:.45,ease:[.4,0,.1,1]},Z0=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),I0=Z0("applewebkit/")&&!Z0("chrome/")?Math.round:Zt;function J0(a){a.min=I0(a.min),a.max=I0(a.max)}function Ww(a){J0(a.x),J0(a.y)}function Iy(a,i,l){return a==="position"||a==="preserve-aspect"&&!vw(L0(i),L0(l),.2)}function eT(a){var i;return a!==a.root&&((i=a.scroll)==null?void 0:i.wasRoot)}const tT=Zy({attachResizeListener:(a,i)=>Hs(a,"resize",i),measureScroll:()=>{var a,i;return{x:document.documentElement.scrollLeft||((a=document.body)==null?void 0:a.scrollLeft)||0,y:document.documentElement.scrollTop||((i=document.body)==null?void 0:i.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Tu={current:void 0},Jy=Zy({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!Tu.current){const a=new tT({});a.mount(window),a.setOptions({layoutScroll:!0}),Tu.current=a}return Tu.current},resetTransform:(a,i)=>{a.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),_f=Y.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function P0(a,i){if(typeof a=="function")return a(i);a!=null&&(a.current=i)}function nT(...a){return i=>{let l=!1;const o=a.map(u=>{const h=P0(u,i);return!l&&typeof h=="function"&&(l=!0),h});if(l)return()=>{for(let u=0;u<o.length;u++){const h=o[u];typeof h=="function"?h():P0(a[u],null)}}}}function aT(...a){return Y.useCallback(nT(...a),a)}class iT extends Y.Component{getSnapshotBeforeUpdate(i){const l=this.props.childRef.current;if(vo(l)&&i.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const o=l.offsetParent,u=vo(o)&&o.offsetWidth||0,h=vo(o)&&o.offsetHeight||0,d=getComputedStyle(l),p=this.props.sizeRef.current;p.height=parseFloat(d.height),p.width=parseFloat(d.width),p.top=l.offsetTop,p.left=l.offsetLeft,p.right=u-p.width-p.left,p.bottom=h-p.height-p.top}return null}componentDidUpdate(){}render(){return this.props.children}}function sT({children:a,isPresent:i,anchorX:l,anchorY:o,root:u,pop:h}){var S;const d=Y.useId(),p=Y.useRef(null),y=Y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=Y.useContext(_f),b=((S=a.props)==null?void 0:S.ref)??(a==null?void 0:a.ref),v=aT(p,b);return Y.useInsertionEffect(()=>{const{width:T,height:C,top:k,left:V,right:H,bottom:K}=y.current;if(i||h===!1||!p.current||!T||!C)return;const G=l==="left"?`left: ${V}`:`right: ${H}`,q=o==="bottom"?`bottom: ${K}`:`top: ${k}`;p.current.dataset.motionPopId=d;const J=document.createElement("style");g&&(J.nonce=g);const ue=u??document.head;return ue.appendChild(J),J.sheet&&J.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${T}px !important;
            height: ${C}px !important;
            ${G}px !important;
            ${q}px !important;
          }
        `),()=>{var $;($=p.current)==null||$.removeAttribute("data-motion-pop-id"),ue.contains(J)&&ue.removeChild(J)}},[i]),f.jsx(iT,{isPresent:i,childRef:p,sizeRef:y,pop:h,children:h===!1?a:Y.cloneElement(a,{ref:v})})}const lT=({children:a,initial:i,isPresent:l,onExitComplete:o,custom:u,presenceAffectsLayout:h,mode:d,anchorX:p,anchorY:y,root:g})=>{const b=sf(oT),v=Y.useId();let S=!0,T=Y.useMemo(()=>(S=!1,{id:v,initial:i,isPresent:l,custom:u,onExitComplete:C=>{b.set(C,!0);for(const k of b.values())if(!k)return;o&&o()},register:C=>(b.set(C,!1),()=>b.delete(C))}),[l,b,o]);return h&&S&&(T={...T}),Y.useMemo(()=>{b.forEach((C,k)=>b.set(k,!1))},[l]),Y.useEffect(()=>{!l&&!b.size&&o&&o()},[l]),a=f.jsx(sT,{pop:d==="popLayout",isPresent:l,anchorX:p,anchorY:y,root:g,children:a}),f.jsx(Lo.Provider,{value:T,children:a})};function oT(){return new Map}function Py(a=!0){const i=Y.useContext(Lo);if(i===null)return[!0,null];const{isPresent:l,onExitComplete:o,register:u}=i,h=Y.useId();Y.useEffect(()=>{if(a)return u(h)},[a]);const d=Y.useCallback(()=>a&&o&&o(h),[h,o,a]);return!l&&o?[!1,d]:[!0]}const mo=a=>a.key||"";function F0(a){const i=[];return Y.Children.forEach(a,l=>{Y.isValidElement(l)&&i.push(l)}),i}const _n=({children:a,custom:i,initial:l=!0,onExitComplete:o,presenceAffectsLayout:u=!0,mode:h="sync",propagate:d=!1,anchorX:p="left",anchorY:y="top",root:g})=>{const[b,v]=Py(d),S=Y.useMemo(()=>F0(a),[a]),T=d&&!b?[]:S.map(mo),C=Y.useRef(!0),k=Y.useRef(S),V=sf(()=>new Map),H=Y.useRef(new Set),[K,G]=Y.useState(S),[q,J]=Y.useState(S);Tg(()=>{C.current=!1,k.current=S;for(let B=0;B<q.length;B++){const ie=mo(q[B]);T.includes(ie)?(V.delete(ie),H.current.delete(ie)):V.get(ie)!==!0&&V.set(ie,!1)}},[q,T.length,T.join("-")]);const ue=[];if(S!==K){let B=[...S];for(let ie=0;ie<q.length;ie++){const se=q[ie],xe=mo(se);T.includes(xe)||(B.splice(ie,0,se),ue.push(se))}return h==="wait"&&ue.length&&(B=ue),J(F0(B)),G(S),null}const{forceRender:$}=Y.useContext(af);return f.jsx(f.Fragment,{children:q.map(B=>{const ie=mo(B),se=d&&!b?!1:S===q||T.includes(ie),xe=()=>{if(H.current.has(ie))return;if(V.has(ie))H.current.add(ie),V.set(ie,!0);else return;let be=!0;V.forEach(Ze=>{Ze||(be=!1)}),be&&($==null||$(),J(k.current),d&&(v==null||v()),o&&o())};return f.jsx(lT,{isPresent:se,initial:!C.current||l?void 0:!1,custom:i,presenceAffectsLayout:u,mode:h,root:g,onExitComplete:se?void 0:xe,anchorX:p,anchorY:y,children:B},ie)})})},Fy=Y.createContext({strict:!1}),$0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let W0=!1;function rT(){if(W0)return;const a={};for(const i in $0)a[i]={isEnabled:l=>$0[i].some(o=>!!l[o])};Ay(a),W0=!0}function $y(){return rT(),QS()}function cT(a){const i=$y();for(const l in a)i[l]={...i[l],...a[l]};Ay(i)}const uT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Oo(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||uT.has(a)}let Wy=a=>!Oo(a);function fT(a){typeof a=="function"&&(Wy=i=>i.startsWith("on")?!Oo(i):a(i))}try{fT(require("@emotion/is-prop-valid").default)}catch{}function dT(a,i,l){const o={};for(const u in a)u==="values"&&typeof a.values=="object"||dt(a[u])||(Wy(u)||l===!0&&Oo(u)||!i&&!Oo(u)||a.draggable&&u.startsWith("onDrag"))&&(o[u]=a[u]);return o}const Yo=Y.createContext({});function hT(a,i){if(Ho(a)){const{initial:l,animate:o}=a;return{initial:l===!1||Bs(l)?l:void 0,animate:Bs(o)?o:void 0}}return a.inherit!==!1?i:{}}function mT(a){const{initial:i,animate:l}=hT(a,Y.useContext(Yo));return Y.useMemo(()=>({initial:i,animate:l}),[eg(i),eg(l)])}function eg(a){return Array.isArray(a)?a.join(" "):a}const Df=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ex(a,i,l){for(const o in i)!dt(i[o])&&!zy(o,l)&&(a[o]=i[o])}function pT({transformTemplate:a},i){return Y.useMemo(()=>{const l=Df();return Mf(l,i,a),Object.assign({},l.vars,l.style)},[i])}function gT(a,i){const l=a.style||{},o={};return ex(o,l,a),Object.assign(o,pT(a,i)),o}function yT(a,i){const l={},o=gT(a,i);return a.drag&&a.dragListener!==!1&&(l.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(l.tabIndex=0),l.style=o,l}const tx=()=>({...Df(),attrs:{}});function xT(a,i,l,o){const u=Y.useMemo(()=>{const h=tx();return ky(h,i,Vy(o),a.transformTemplate,a.style),{...h.attrs,style:{...h.style}}},[i]);if(a.style){const h={};ex(h,a.style,a),u.style={...h,...u.style}}return u}const bT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Rf(a){return typeof a!="string"||a.includes("-")?!1:!!(bT.indexOf(a)>-1||/[A-Z]/u.test(a))}function vT(a,i,l,{latestValues:o},u,h=!1,d){const y=(d??Rf(a)?xT:yT)(i,o,u,a),g=dT(i,typeof a=="string",h),b=a!==Y.Fragment?{...g,...y,ref:l}:{},{children:v}=i,S=Y.useMemo(()=>dt(v)?v.get():v,[v]);return Y.createElement(a,{...b,children:S})}function ST({scrapeMotionValuesFromProps:a,createRenderState:i},l,o,u){return{latestValues:wT(l,o,u,a),renderState:i()}}function wT(a,i,l,o){const u={},h=o(a,{});for(const S in h)u[S]=jo(h[S]);let{initial:d,animate:p}=a;const y=Ho(a),g=Ny(a);i&&g&&!y&&a.inherit!==!1&&(d===void 0&&(d=i.initial),p===void 0&&(p=i.animate));let b=l?l.initial===!1:!1;b=b||d===!1;const v=b?p:d;if(v&&typeof v!="boolean"&&!Bo(v)){const S=Array.isArray(v)?v:[v];for(let T=0;T<S.length;T++){const C=vf(a,S[T]);if(C){const{transitionEnd:k,transition:V,...H}=C;for(const K in H){let G=H[K];if(Array.isArray(G)){const q=b?G.length-1:0;G=G[q]}G!==null&&(u[K]=G)}for(const K in k)u[K]=k[K]}}}return u}const nx=a=>(i,l)=>{const o=Y.useContext(Yo),u=Y.useContext(Lo),h=()=>ST(a,i,o,u);return l?h():sf(h)},TT=nx({scrapeMotionValuesFromProps:Cf,createRenderState:Df}),NT=nx({scrapeMotionValuesFromProps:Ly,createRenderState:tx}),jT=Symbol.for("motionComponentSymbol");function AT(a,i,l){const o=Y.useRef(l);Y.useInsertionEffect(()=>{o.current=l});const u=Y.useRef(null);return Y.useCallback(h=>{var p;h&&((p=a.onMount)==null||p.call(a,h));const d=o.current;if(typeof d=="function")if(h){const y=d(h);typeof y=="function"&&(u.current=y)}else u.current?(u.current(),u.current=null):d(h);else d&&(d.current=h);i&&(h?i.mount(h):i.unmount())},[i])}const ax=Y.createContext({});function ji(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function ET(a,i,l,o,u,h){var G,q;const{visualElement:d}=Y.useContext(Yo),p=Y.useContext(Fy),y=Y.useContext(Lo),g=Y.useContext(_f),b=g.reducedMotion,v=g.skipAnimations,S=Y.useRef(null),T=Y.useRef(!1);o=o||p.renderer,!S.current&&o&&(S.current=o(a,{visualState:i,parent:d,props:l,presenceContext:y,blockInitialAnimation:y?y.initial===!1:!1,reducedMotionConfig:b,skipAnimations:v,isSVG:h}),T.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const C=S.current,k=Y.useContext(ax);C&&!C.projection&&u&&(C.type==="html"||C.type==="svg")&&MT(S.current,l,u,k);const V=Y.useRef(!1);Y.useInsertionEffect(()=>{C&&V.current&&C.update(l,y)});const H=l[fy],K=Y.useRef(!!H&&typeof window<"u"&&!((G=window.MotionHandoffIsComplete)!=null&&G.call(window,H))&&((q=window.MotionHasOptimisedAnimation)==null?void 0:q.call(window,H)));return Tg(()=>{T.current=!0,C&&(V.current=!0,window.MotionIsMounted=!0,C.updateFeatures(),C.scheduleRenderMicrotask(),K.current&&C.animationState&&C.animationState.animateChanges())}),Y.useEffect(()=>{C&&(!K.current&&C.animationState&&C.animationState.animateChanges(),K.current&&(queueMicrotask(()=>{var J;(J=window.MotionHandoffMarkAsComplete)==null||J.call(window,H)}),K.current=!1),C.enteringChildren=void 0)}),C}function MT(a,i,l,o){const{layoutId:u,layout:h,drag:d,dragConstraints:p,layoutScroll:y,layoutRoot:g,layoutAnchor:b,layoutCrossfade:v}=i;a.projection=new l(a.latestValues,i["data-framer-portal-id"]?void 0:ix(a.parent)),a.projection.setOptions({layoutId:u,layout:h,alwaysMeasureLayout:!!d||p&&ji(p),visualElement:a,animationType:typeof h=="string"?h:"both",initialPromotionConfig:o,crossfade:v,layoutScroll:y,layoutRoot:g,layoutAnchor:b})}function ix(a){if(a)return a.options.allowProjection!==!1?a.projection:ix(a.parent)}function Nu(a,{forwardMotionProps:i=!1,type:l}={},o,u){o&&cT(o);const h=l?l==="svg":Rf(a),d=h?NT:TT;function p(g,b){let v;const S={...Y.useContext(_f),...g,layoutId:CT(g)},{isStatic:T}=S,C=mT(g),k=d(g,T);if(!T&&typeof window<"u"){_T();const V=DT(S);v=V.MeasureLayout,C.visualElement=ET(a,k,S,u,V.ProjectionNode,h)}return f.jsxs(Yo.Provider,{value:C,children:[v&&C.visualElement?f.jsx(v,{visualElement:C.visualElement,...S}):null,vT(a,g,AT(k,C.visualElement,b),k,T,i,h)]})}p.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const y=Y.forwardRef(p);return y[jT]=a,y}function CT({layoutId:a}){const i=Y.useContext(af).id;return i&&a!==void 0?i+"-"+a:a}function _T(a,i){Y.useContext(Fy).strict}function DT(a){const i=$y(),{drag:l,layout:o}=i;if(!l&&!o)return{};const u={...l,...o};return{MeasureLayout:l!=null&&l.isEnabled(a)||o!=null&&o.isEnabled(a)?u.MeasureLayout:void 0,ProjectionNode:u.ProjectionNode}}function RT(a,i){if(typeof Proxy>"u")return Nu;const l=new Map,o=(h,d)=>Nu(h,d,a,i),u=(h,d)=>o(h,d);return new Proxy(u,{get:(h,d)=>d==="create"?o:(l.has(d)||l.set(d,Nu(d,void 0,a,i)),l.get(d))})}const zT=(a,i)=>i.isSVG??Rf(a)?new cw(i):new aw(i,{allowProjection:a!==Y.Fragment});class kT extends fa{constructor(i){super(i),i.animationState||(i.animationState=mw(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Bo(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:l}=this.node.prevProps||{};i!==l&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)==null||i.call(this)}}let OT=0;class VT extends fa{constructor(){super(...arguments),this.id=OT++,this.isExitComplete=!1}update(){var h;if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:l}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===o)return;if(i&&o===!1){if(this.isExitComplete){const{initial:d,custom:p}=this.node.getProps();if(typeof d=="string"){const y=La(this.node,d,p);if(y){const{transition:g,transitionEnd:b,...v}=y;for(const S in v)(h=this.node.getValue(S))==null||h.jump(v[S])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const u=this.node.animationState.setActive("exit",!i);l&&!i&&u.then(()=>{this.isExitComplete=!0,l(this.id)})}mount(){const{register:i,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const LT={animation:{Feature:kT},exit:{Feature:VT}};function Ks(a){return{point:{x:a.pageX,y:a.pageY}}}const UT=a=>i=>Nf(i)&&a(i,Ks(i));function Vs(a,i,l,o){return Hs(a,i,UT(l),o)}const sx=({current:a})=>a?a.ownerDocument.defaultView:null,tg=(a,i)=>Math.abs(a-i);function BT(a,i){const l=tg(a.x,i.x),o=tg(a.y,i.y);return Math.sqrt(l**2+o**2)}const ng=new Set(["auto","scroll"]);class lx{constructor(i,l,{transformPagePoint:o,contextWindow:u=window,dragSnapToOrigin:h=!1,distanceThreshold:d=3,element:p}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=T=>{this.handleScroll(T.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=po(this.lastRawMoveEventInfo,this.transformPagePoint));const T=ju(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,k=BT(T.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!k)return;const{point:V}=T,{timestamp:H}=ut;this.history.push({...V,timestamp:H});const{onStart:K,onMove:G}=this.handlers;C||(K&&K(this.lastMoveEvent,T),this.startEvent=this.lastMoveEvent),G&&G(this.lastMoveEvent,T)},this.handlePointerMove=(T,C)=>{this.lastMoveEvent=T,this.lastRawMoveEventInfo=C,this.lastMoveEventInfo=po(C,this.transformPagePoint),Ve.update(this.updatePoint,!0)},this.handlePointerUp=(T,C)=>{this.end();const{onEnd:k,onSessionEnd:V,resumeAnimation:H}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&H&&H(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const K=ju(T.type==="pointercancel"?this.lastMoveEventInfo:po(C,this.transformPagePoint),this.history);this.startEvent&&k&&k(T,K),V&&V(T,K)},!Nf(i))return;this.dragSnapToOrigin=h,this.handlers=l,this.transformPagePoint=o,this.distanceThreshold=d,this.contextWindow=u||window;const y=Ks(i),g=po(y,this.transformPagePoint),{point:b}=g,{timestamp:v}=ut;this.history=[{...b,timestamp:v}];const{onSessionStart:S}=l;S&&S(i,ju(g,this.history)),this.removeListeners=Gs(Vs(this.contextWindow,"pointermove",this.handlePointerMove),Vs(this.contextWindow,"pointerup",this.handlePointerUp),Vs(this.contextWindow,"pointercancel",this.handlePointerUp)),p&&this.startScrollTracking(p)}startScrollTracking(i){let l=i.parentElement;for(;l;){const o=getComputedStyle(l);(ng.has(o.overflowX)||ng.has(o.overflowY))&&this.scrollPositions.set(l,{x:l.scrollLeft,y:l.scrollTop}),l=l.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(i){const l=this.scrollPositions.get(i);if(!l)return;const o=i===window,u=o?{x:window.scrollX,y:window.scrollY}:{x:i.scrollLeft,y:i.scrollTop},h={x:u.x-l.x,y:u.y-l.y};h.x===0&&h.y===0||(o?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=h.x,this.lastMoveEventInfo.point.y+=h.y):this.history.length>0&&(this.history[0].x-=h.x,this.history[0].y-=h.y),this.scrollPositions.set(i,u),Ve.update(this.updatePoint,!0))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ua(this.updatePoint)}}function po(a,i){return i?{point:i(a.point)}:a}function ag(a,i){return{x:a.x-i.x,y:a.y-i.y}}function ju({point:a},i){return{point:a,delta:ag(a,ox(i)),offset:ag(a,HT(i)),velocity:YT(i,.1)}}function HT(a){return a[0]}function ox(a){return a[a.length-1]}function YT(a,i){if(a.length<2)return{x:0,y:0};let l=a.length-1,o=null;const u=ox(a);for(;l>=0&&(o=a[l],!(u.timestamp-o.timestamp>kt(i)));)l--;if(!o)return{x:0,y:0};o===a[0]&&a.length>2&&u.timestamp-o.timestamp>kt(i)*2&&(o=a[1]);const h=Qt(u.timestamp-o.timestamp);if(h===0)return{x:0,y:0};const d={x:(u.x-o.x)/h,y:(u.y-o.y)/h};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function GT(a,{min:i,max:l},o){return i!==void 0&&a<i?a=o?Be(i,a,o.min):Math.max(a,i):l!==void 0&&a>l&&(a=o?Be(l,a,o.max):Math.min(a,l)),a}function ig(a,i,l){return{min:i!==void 0?a.min+i:void 0,max:l!==void 0?a.max+l-(a.max-a.min):void 0}}function qT(a,{top:i,left:l,bottom:o,right:u}){return{x:ig(a.x,l,u),y:ig(a.y,i,o)}}function sg(a,i){let l=i.min-a.min,o=i.max-a.max;return i.max-i.min<a.max-a.min&&([l,o]=[o,l]),{min:l,max:o}}function XT(a,i){return{x:sg(a.x,i.x),y:sg(a.y,i.y)}}function KT(a,i){let l=.5;const o=gt(a),u=gt(i);return u>o?l=Ls(i.min,i.max-o,a.min):o>u&&(l=Ls(a.min,a.max-u,i.min)),rn(0,1,l)}function QT(a,i){const l={};return i.min!==void 0&&(l.min=i.min-a.min),i.max!==void 0&&(l.max=i.max-a.min),l}const Wu=.35;function ZT(a=Wu){return a===!1?a=0:a===!0&&(a=Wu),{x:lg(a,"left","right"),y:lg(a,"top","bottom")}}function lg(a,i,l){return{min:og(a,i),max:og(a,l)}}function og(a,i){return typeof a=="number"?a:a[i]||0}const IT=new WeakMap;class JT{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=tt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:l=!1,distanceThreshold:o}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const h=v=>{l&&this.snapToCursor(Ks(v).point),this.stopAnimation()},d=(v,S)=>{const{drag:T,dragPropagation:C,onDragStart:k}=this.getProps();if(T&&!C&&(this.openDragLock&&this.openDragLock(),this.openDragLock=wS(T),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),sn(H=>{let K=this.getAxisMotionValue(H).get()||0;if(on.test(K)){const{projection:G}=this.visualElement;if(G&&G.layout){const q=G.layout.layoutBox[H];q&&(K=gt(q)*(parseFloat(K)/100))}}this.originPoint[H]=K}),k&&Ve.update(()=>k(v,S),!1,!0),Xu(this.visualElement,"transform");const{animationState:V}=this.visualElement;V&&V.setActive("whileDrag",!0)},p=(v,S)=>{this.latestPointerEvent=v,this.latestPanInfo=S;const{dragPropagation:T,dragDirectionLock:C,onDirectionLock:k,onDrag:V}=this.getProps();if(!T&&!this.openDragLock)return;const{offset:H}=S;if(C&&this.currentDirection===null){this.currentDirection=FT(H),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",S.point,H),this.updateAxis("y",S.point,H),this.visualElement.render(),V&&Ve.update(()=>V(v,S),!1,!0)},y=(v,S)=>{this.latestPointerEvent=v,this.latestPanInfo=S,this.stop(v,S),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:b}=this.getProps();this.panSession=new lx(i,{onSessionStart:h,onStart:d,onMove:p,onSessionEnd:y,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:b,distanceThreshold:o,contextWindow:sx(this.visualElement),element:this.visualElement.current})}stop(i,l){const o=i||this.latestPointerEvent,u=l||this.latestPanInfo,h=this.isDragging;if(this.cancel(),!h||!u||!o)return;const{velocity:d}=u;this.startAnimation(d);const{onDragEnd:p}=this.getProps();p&&Ve.postRender(()=>p(o,u))}cancel(){this.isDragging=!1;const{projection:i,animationState:l}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(i,l,o){const{drag:u}=this.getProps();if(!o||!go(i,u,this.currentDirection))return;const h=this.getAxisMotionValue(i);let d=this.originPoint[i]+o[i];this.constraints&&this.constraints[i]&&(d=GT(d,this.constraints[i],this.elastic[i])),h.set(d)}resolveConstraints(){var h;const{dragConstraints:i,dragElastic:l}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(h=this.visualElement.projection)==null?void 0:h.layout,u=this.constraints;i&&ji(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&o?this.constraints=qT(o.layoutBox,i):this.constraints=!1,this.elastic=ZT(l),u!==this.constraints&&!ji(i)&&o&&this.constraints&&!this.hasMutatedConstraints&&sn(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=QT(o.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:l}=this.getProps();if(!i||!ji(i))return!1;const o=i.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const h=FS(o,u.root,this.visualElement.getTransformPagePoint());let d=XT(u.layout.layoutBox,h);if(l){const p=l(IS(d));this.hasMutatedConstraints=!!p,p&&(d=My(p))}return d}startAnimation(i){const{drag:l,dragMomentum:o,dragElastic:u,dragTransition:h,dragSnapToOrigin:d,onDragTransitionEnd:p}=this.getProps(),y=this.constraints||{},g=sn(b=>{if(!go(b,l,this.currentDirection))return;let v=y&&y[b]||{};(d===!0||d===b)&&(v={min:0,max:0});const S=u?200:1e6,T=u?40:1e7,C={type:"inertia",velocity:o?i[b]:0,bounceStiffness:S,bounceDamping:T,timeConstant:750,restDelta:1,restSpeed:10,...h,...v};return this.startAxisValueAnimation(b,C)});return Promise.all(g).then(p)}startAxisValueAnimation(i,l){const o=this.getAxisMotionValue(i);return Xu(this.visualElement,i),o.start(bf(i,o,0,l,this.visualElement,!1))}stopAnimation(){sn(i=>this.getAxisMotionValue(i).stop())}getAxisMotionValue(i){const l=`_drag${i.toUpperCase()}`,o=this.visualElement.getProps(),u=o[l];return u||this.visualElement.getValue(i,(o.initial?o.initial[i]:void 0)||0)}snapToCursor(i){sn(l=>{const{drag:o}=this.getProps();if(!go(l,o,this.currentDirection))return;const{projection:u}=this.visualElement,h=this.getAxisMotionValue(l);if(u&&u.layout){const{min:d,max:p}=u.layout.layoutBox[l],y=h.get()||0;h.set(i[l]-Be(d,p,.5)+y)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:l}=this.getProps(),{projection:o}=this.visualElement;if(!ji(l)||!o||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};sn(d=>{const p=this.getAxisMotionValue(d);if(p&&this.constraints!==!1){const y=p.get();u[d]=KT({min:y,max:y},this.constraints[d])}});const{transformTemplate:h}=this.visualElement.getProps();this.visualElement.current.style.transform=h?h({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.constraints=!1,this.resolveConstraints(),sn(d=>{if(!go(d,i,null))return;const p=this.getAxisMotionValue(d),{min:y,max:g}=this.constraints[d];p.set(Be(y,g,u[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;IT.set(this.visualElement,this);const i=this.visualElement.current,l=Vs(i,"pointerdown",g=>{const{drag:b,dragListener:v=!0}=this.getProps(),S=g.target,T=S!==i&&MS(S);b&&v&&!T&&this.start(g)});let o;const u=()=>{const{dragConstraints:g}=this.getProps();ji(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),o||(o=PT(i,g.current,()=>this.scalePositionWithinConstraints())))},{projection:h}=this.visualElement,d=h.addEventListener("measure",u);h&&!h.layout&&(h.root&&h.root.updateScroll(),h.updateLayout()),Ve.read(u);const p=Hs(window,"resize",()=>this.scalePositionWithinConstraints()),y=h.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:b})=>{this.isDragging&&b&&(sn(v=>{const S=this.getAxisMotionValue(v);S&&(this.originPoint[v]+=g[v].translate,S.set(S.get()+g[v].translate))}),this.visualElement.render())}));return()=>{p(),l(),d(),y&&y(),o&&o()}}getProps(){const i=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:o=!1,dragPropagation:u=!1,dragConstraints:h=!1,dragElastic:d=Wu,dragMomentum:p=!0}=i;return{...i,drag:l,dragDirectionLock:o,dragPropagation:u,dragConstraints:h,dragElastic:d,dragMomentum:p}}}function rg(a){let i=!0;return()=>{if(i){i=!1;return}a()}}function PT(a,i,l){const o=p0(a,rg(l)),u=p0(i,rg(l));return()=>{o(),u()}}function go(a,i,l){return(i===!0||i===a)&&(l===null||l===a)}function FT(a,i=10){let l=null;return Math.abs(a.y)>i?l="y":Math.abs(a.x)>i&&(l="x"),l}class $T extends fa{constructor(i){super(i),this.removeGroupControls=Zt,this.removeListeners=Zt,this.controls=new JT(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Zt}update(){const{dragControls:i}=this.node.getProps(),{dragControls:l}=this.node.prevProps||{};i!==l&&(this.removeGroupControls(),i&&(this.removeGroupControls=i.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Au=a=>(i,l)=>{a&&Ve.update(()=>a(i,l),!1,!0)};class WT extends fa{constructor(){super(...arguments),this.removePointerDownListener=Zt}onPointerDown(i){this.session=new lx(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:sx(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:l,onPan:o,onPanEnd:u}=this.node.getProps();return{onSessionStart:Au(i),onStart:Au(l),onMove:Au(o),onEnd:(h,d)=>{delete this.session,u&&Ve.postRender(()=>u(h,d))}}}mount(){this.removePointerDownListener=Vs(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Eu=!1;class e5 extends Y.Component{componentDidMount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:o,layoutId:u}=this.props,{projection:h}=i;h&&(l.group&&l.group.add(h),o&&o.register&&u&&o.register(h),Eu&&h.root.didUpdate(),h.addEventListener("animationComplete",()=>{this.safeToRemove()}),h.setOptions({...h.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ao.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:l,visualElement:o,drag:u,isPresent:h}=this.props,{projection:d}=o;return d&&(d.isPresent=h,i.layoutDependency!==l&&d.setOptions({...d.options,layoutDependency:l}),Eu=!0,u||i.layoutDependency!==l||l===void 0||i.isPresent!==h?d.willUpdate():this.safeToRemove(),i.isPresent!==h&&(h?d.promote():d.relegate()||Ve.postRender(()=>{const p=d.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:i,layoutAnchor:l}=this.props,{projection:o}=i;o&&(o.options.layoutAnchor=l,o.root.didUpdate(),Tf.postRender(()=>{!o.currentAnimation&&o.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:o}=this.props,{projection:u}=i;Eu=!0,u&&(u.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(u),o&&o.deregister&&o.deregister(u))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function rx(a){const[i,l]=Py(),o=Y.useContext(af);return f.jsx(e5,{...a,layoutGroup:o,switchLayoutGroup:Y.useContext(ax),isPresent:i,safeToRemove:l})}const t5={pan:{Feature:WT},drag:{Feature:$T,ProjectionNode:Jy,MeasureLayout:rx}};function cg(a,i,l){const{props:o}=a;a.animationState&&o.whileHover&&a.animationState.setActive("whileHover",l==="Start");const u="onHover"+l,h=o[u];h&&Ve.postRender(()=>h(i,Ks(i)))}class n5 extends fa{mount(){const{current:i}=this.node;i&&(this.unmount=NS(i,(l,o)=>(cg(this.node,o,"Start"),u=>cg(this.node,u,"End"))))}unmount(){}}class a5 extends fa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Gs(Hs(this.node.current,"focus",()=>this.onFocus()),Hs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ug(a,i,l){const{props:o}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&o.whileTap&&a.animationState.setActive("whileTap",l==="Start");const u="onTap"+(l==="End"?"":l),h=o[u];h&&Ve.postRender(()=>h(i,Ks(i)))}class i5 extends fa{mount(){const{current:i}=this.node;if(!i)return;const{globalTapTarget:l,propagate:o}=this.node.props;this.unmount=_S(i,(u,h)=>(ug(this.node,h,"Start"),(d,{success:p})=>ug(this.node,d,p?"End":"Cancel")),{useGlobalTarget:l,stopPropagation:(o==null?void 0:o.tap)===!1})}unmount(){}}const ef=new WeakMap,Mu=new WeakMap,s5=a=>{const i=ef.get(a.target);i&&i(a)},l5=a=>{a.forEach(s5)};function o5({root:a,...i}){const l=a||document;Mu.has(l)||Mu.set(l,{});const o=Mu.get(l),u=JSON.stringify(i);return o[u]||(o[u]=new IntersectionObserver(l5,{root:a,...i})),o[u]}function r5(a,i,l){const o=o5(i);return ef.set(a,l),o.observe(a),()=>{ef.delete(a),o.unobserve(a)}}const c5={some:0,all:1};class u5 extends fa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var y;(y=this.stopObserver)==null||y.call(this);const{viewport:i={}}=this.node.getProps(),{root:l,margin:o,amount:u="some",once:h}=i,d={root:l?l.current:void 0,rootMargin:o,threshold:typeof u=="number"?u:c5[u]},p=g=>{const{isIntersecting:b}=g;if(this.isInView===b||(this.isInView=b,h&&!b&&this.hasEnteredView))return;b&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",b);const{onViewportEnter:v,onViewportLeave:S}=this.node.getProps(),T=b?v:S;T&&T(g)};this.stopObserver=r5(this.node.current,d,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:l}=this.node;["amount","margin","root"].some(f5(i,l))&&this.startObserver()}unmount(){var i;(i=this.stopObserver)==null||i.call(this),this.hasEnteredView=!1,this.isInView=!1}}function f5({viewport:a={}},{viewport:i={}}={}){return l=>a[l]!==i[l]}const d5={inView:{Feature:u5},tap:{Feature:i5},focus:{Feature:a5},hover:{Feature:n5}},h5={layout:{ProjectionNode:Jy,MeasureLayout:rx}},m5={...LT,...d5,...t5,...h5},Z=RT(m5,zT);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g5=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,l,o)=>o?o.toUpperCase():l.toLowerCase()),fg=a=>{const i=g5(a);return i.charAt(0).toUpperCase()+i.slice(1)},cx=(...a)=>a.filter((i,l,o)=>!!i&&i.trim()!==""&&o.indexOf(i)===l).join(" ").trim(),y5=a=>{for(const i in a)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var x5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=Y.forwardRef(({color:a="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:u="",children:h,iconNode:d,...p},y)=>Y.createElement("svg",{ref:y,...x5,width:i,height:i,stroke:a,strokeWidth:o?Number(l)*24/Number(i):l,className:cx("lucide",u),...!h&&!y5(p)&&{"aria-hidden":"true"},...p},[...d.map(([g,b])=>Y.createElement(g,b)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=(a,i)=>{const l=Y.forwardRef(({className:o,...u},h)=>Y.createElement(b5,{ref:h,iconNode:i,className:cx(`lucide-${p5(fg(a))}`,`lucide-${a}`,o),...u}));return l.displayName=fg(a),l};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Ua=fe("activity",v5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],w5=fe("arrow-up",S5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],N5=fe("award",T5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],A5=fe("binary",j5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],M5=fe("bot",E5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],_5=fe("box",C5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],zf=fe("brain-circuit",D5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],z5=fe("brain",R5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],O5=fe("briefcase",k5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ux=fe("chevron-right",V5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],U5=fe("chevron-up",L5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Cu=fe("circle-alert",B5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Y5=fe("circle-check",H5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],q5=fe("clock",G5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],K5=fe("code-xml",X5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],cn=fe("cpu",Q5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],I5=fe("database",Z5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],fx=fe("external-link",J5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Ys=fe("github",P5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],$5=fe("graduation-cap",F5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Go=fe("globe",W5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],tN=fe("history",eN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aN=fe("layers",nN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],dx=fe("linkedin",iN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],lN=fe("loader-circle",sN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],rN=fe("lock",oN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],uN=fe("mail",cN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],dN=fe("map-pin",fN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],mN=fe("menu",hN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],gN=fe("message-square",pN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN=[["path",{d:"M18 12h2",key:"quuxs7"}],["path",{d:"M18 16h2",key:"zsn3lv"}],["path",{d:"M18 20h2",key:"9x5y9y"}],["path",{d:"M18 4h2",key:"1luxfb"}],["path",{d:"M18 8h2",key:"nxqzg"}],["path",{d:"M4 12h2",key:"1ltxp0"}],["path",{d:"M4 16h2",key:"8a5zha"}],["path",{d:"M4 20h2",key:"27dk57"}],["path",{d:"M4 4h2",key:"10groj"}],["path",{d:"M4 8h2",key:"18vq6w"}],["path",{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z",key:"1681fp"}]],xN=fe("microchip",yN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],vN=fe("monitor",bN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SN=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],wN=fe("network",SN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],NN=fe("search",TN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",key:"117uat"}],["path",{d:"M6 12h16",key:"s4cdu5"}]],AN=fe("send-horizontal",jN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],MN=fe("send",EN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CN=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],_N=fe("server",CN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],qo=fe("shield-check",DN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Qs=fe("shield",RN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],kN=fe("sparkles",zN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ON=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],kf=fe("target",ON);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Of=fe("terminal",VN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LN=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],hx=fe("trophy",LN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UN=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],BN=fe("twitter",UN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HN=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],YN=fe("user",HN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GN=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],qN=fe("workflow",GN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],mx=fe("x",XN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KN=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Di=fe("zap",KN);function px(a){var i,l,o="";if(typeof a=="string"||typeof a=="number")o+=a;else if(typeof a=="object")if(Array.isArray(a)){var u=a.length;for(i=0;i<u;i++)a[i]&&(l=px(a[i]))&&(o&&(o+=" "),o+=l)}else for(l in a)a[l]&&(o&&(o+=" "),o+=l);return o}function QN(){for(var a,i,l=0,o="",u=arguments.length;l<u;l++)(a=arguments[l])&&(i=px(a))&&(o&&(o+=" "),o+=i);return o}const ZN=(a,i)=>{const l=new Array(a.length+i.length);for(let o=0;o<a.length;o++)l[o]=a[o];for(let o=0;o<i.length;o++)l[a.length+o]=i[o];return l},IN=(a,i)=>({classGroupId:a,validator:i}),gx=(a=new Map,i=null,l)=>({nextPart:a,validators:i,classGroupId:l}),Vo="-",dg=[],JN="arbitrary..",PN=a=>{const i=$N(a),{conflictingClassGroups:l,conflictingClassGroupModifiers:o}=a;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return FN(d);const p=d.split(Vo),y=p[0]===""&&p.length>1?1:0;return yx(p,y,i)},getConflictingClassGroupIds:(d,p)=>{if(p){const y=o[d],g=l[d];return y?g?ZN(g,y):y:g||dg}return l[d]||dg}}},yx=(a,i,l)=>{if(a.length-i===0)return l.classGroupId;const u=a[i],h=l.nextPart.get(u);if(h){const g=yx(a,i+1,h);if(g)return g}const d=l.validators;if(d===null)return;const p=i===0?a.join(Vo):a.slice(i).join(Vo),y=d.length;for(let g=0;g<y;g++){const b=d[g];if(b.validator(p))return b.classGroupId}},FN=a=>a.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const i=a.slice(1,-1),l=i.indexOf(":"),o=i.slice(0,l);return o?JN+o:void 0})(),$N=a=>{const{theme:i,classGroups:l}=a;return WN(l,i)},WN=(a,i)=>{const l=gx();for(const o in a){const u=a[o];Vf(u,l,o,i)}return l},Vf=(a,i,l,o)=>{const u=a.length;for(let h=0;h<u;h++){const d=a[h];ej(d,i,l,o)}},ej=(a,i,l,o)=>{if(typeof a=="string"){tj(a,i,l);return}if(typeof a=="function"){nj(a,i,l,o);return}aj(a,i,l,o)},tj=(a,i,l)=>{const o=a===""?i:xx(i,a);o.classGroupId=l},nj=(a,i,l,o)=>{if(ij(a)){Vf(a(o),i,l,o);return}i.validators===null&&(i.validators=[]),i.validators.push(IN(l,a))},aj=(a,i,l,o)=>{const u=Object.entries(a),h=u.length;for(let d=0;d<h;d++){const[p,y]=u[d];Vf(y,xx(i,p),l,o)}},xx=(a,i)=>{let l=a;const o=i.split(Vo),u=o.length;for(let h=0;h<u;h++){const d=o[h];let p=l.nextPart.get(d);p||(p=gx(),l.nextPart.set(d,p)),l=p}return l},ij=a=>"isThemeGetter"in a&&a.isThemeGetter===!0,sj=a=>{if(a<1)return{get:()=>{},set:()=>{}};let i=0,l=Object.create(null),o=Object.create(null);const u=(h,d)=>{l[h]=d,i++,i>a&&(i=0,o=l,l=Object.create(null))};return{get(h){let d=l[h];if(d!==void 0)return d;if((d=o[h])!==void 0)return u(h,d),d},set(h,d){h in l?l[h]=d:u(h,d)}}},tf="!",hg=":",lj=[],mg=(a,i,l,o,u)=>({modifiers:a,hasImportantModifier:i,baseClassName:l,maybePostfixModifierPosition:o,isExternal:u}),oj=a=>{const{prefix:i,experimentalParseClassName:l}=a;let o=u=>{const h=[];let d=0,p=0,y=0,g;const b=u.length;for(let k=0;k<b;k++){const V=u[k];if(d===0&&p===0){if(V===hg){h.push(u.slice(y,k)),y=k+1;continue}if(V==="/"){g=k;continue}}V==="["?d++:V==="]"?d--:V==="("?p++:V===")"&&p--}const v=h.length===0?u:u.slice(y);let S=v,T=!1;v.endsWith(tf)?(S=v.slice(0,-1),T=!0):v.startsWith(tf)&&(S=v.slice(1),T=!0);const C=g&&g>y?g-y:void 0;return mg(h,T,S,C)};if(i){const u=i+hg,h=o;o=d=>d.startsWith(u)?h(d.slice(u.length)):mg(lj,!1,d,void 0,!0)}if(l){const u=o;o=h=>l({className:h,parseClassName:u})}return o},rj=a=>{const i=new Map;return a.orderSensitiveModifiers.forEach((l,o)=>{i.set(l,1e6+o)}),l=>{const o=[];let u=[];for(let h=0;h<l.length;h++){const d=l[h],p=d[0]==="[",y=i.has(d);p||y?(u.length>0&&(u.sort(),o.push(...u),u=[]),o.push(d)):u.push(d)}return u.length>0&&(u.sort(),o.push(...u)),o}},cj=a=>({cache:sj(a.cacheSize),parseClassName:oj(a),sortModifiers:rj(a),...PN(a)}),uj=/\s+/,fj=(a,i)=>{const{parseClassName:l,getClassGroupId:o,getConflictingClassGroupIds:u,sortModifiers:h}=i,d=[],p=a.trim().split(uj);let y="";for(let g=p.length-1;g>=0;g-=1){const b=p[g],{isExternal:v,modifiers:S,hasImportantModifier:T,baseClassName:C,maybePostfixModifierPosition:k}=l(b);if(v){y=b+(y.length>0?" "+y:y);continue}let V=!!k,H=o(V?C.substring(0,k):C);if(!H){if(!V){y=b+(y.length>0?" "+y:y);continue}if(H=o(C),!H){y=b+(y.length>0?" "+y:y);continue}V=!1}const K=S.length===0?"":S.length===1?S[0]:h(S).join(":"),G=T?K+tf:K,q=G+H;if(d.indexOf(q)>-1)continue;d.push(q);const J=u(H,V);for(let ue=0;ue<J.length;++ue){const $=J[ue];d.push(G+$)}y=b+(y.length>0?" "+y:y)}return y},dj=(...a)=>{let i=0,l,o,u="";for(;i<a.length;)(l=a[i++])&&(o=bx(l))&&(u&&(u+=" "),u+=o);return u},bx=a=>{if(typeof a=="string")return a;let i,l="";for(let o=0;o<a.length;o++)a[o]&&(i=bx(a[o]))&&(l&&(l+=" "),l+=i);return l},hj=(a,...i)=>{let l,o,u,h;const d=y=>{const g=i.reduce((b,v)=>v(b),a());return l=cj(g),o=l.cache.get,u=l.cache.set,h=p,p(y)},p=y=>{const g=o(y);if(g)return g;const b=fj(y,l);return u(y,b),b};return h=d,(...y)=>h(dj(...y))},mj=[],et=a=>{const i=l=>l[a]||mj;return i.isThemeGetter=!0,i},vx=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Sx=/^\((?:(\w[\w-]*):)?(.+)\)$/i,pj=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,gj=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,yj=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,xj=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,bj=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,vj=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ia=a=>pj.test(a),ye=a=>!!a&&!Number.isNaN(Number(a)),sa=a=>!!a&&Number.isInteger(Number(a)),_u=a=>a.endsWith("%")&&ye(a.slice(0,-1)),Cn=a=>gj.test(a),wx=()=>!0,Sj=a=>yj.test(a)&&!xj.test(a),Lf=()=>!1,wj=a=>bj.test(a),Tj=a=>vj.test(a),Nj=a=>!ee(a)&&!ne(a),jj=a=>da(a,jx,Lf),ee=a=>vx.test(a),Ra=a=>da(a,Ax,Sj),pg=a=>da(a,zj,ye),Aj=a=>da(a,Mx,wx),Ej=a=>da(a,Ex,Lf),gg=a=>da(a,Tx,Lf),Mj=a=>da(a,Nx,Tj),yo=a=>da(a,Cx,wj),ne=a=>Sx.test(a),Ds=a=>Ba(a,Ax),Cj=a=>Ba(a,Ex),yg=a=>Ba(a,Tx),_j=a=>Ba(a,jx),Dj=a=>Ba(a,Nx),xo=a=>Ba(a,Cx,!0),Rj=a=>Ba(a,Mx,!0),da=(a,i,l)=>{const o=vx.exec(a);return o?o[1]?i(o[1]):l(o[2]):!1},Ba=(a,i,l=!1)=>{const o=Sx.exec(a);return o?o[1]?i(o[1]):l:!1},Tx=a=>a==="position"||a==="percentage",Nx=a=>a==="image"||a==="url",jx=a=>a==="length"||a==="size"||a==="bg-size",Ax=a=>a==="length",zj=a=>a==="number",Ex=a=>a==="family-name",Mx=a=>a==="number"||a==="weight",Cx=a=>a==="shadow",kj=()=>{const a=et("color"),i=et("font"),l=et("text"),o=et("font-weight"),u=et("tracking"),h=et("leading"),d=et("breakpoint"),p=et("container"),y=et("spacing"),g=et("radius"),b=et("shadow"),v=et("inset-shadow"),S=et("text-shadow"),T=et("drop-shadow"),C=et("blur"),k=et("perspective"),V=et("aspect"),H=et("ease"),K=et("animate"),G=()=>["auto","avoid","all","avoid-page","page","left","right","column"],q=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],J=()=>[...q(),ne,ee],ue=()=>["auto","hidden","clip","visible","scroll"],$=()=>["auto","contain","none"],B=()=>[ne,ee,y],ie=()=>[ia,"full","auto",...B()],se=()=>[sa,"none","subgrid",ne,ee],xe=()=>["auto",{span:["full",sa,ne,ee]},sa,ne,ee],be=()=>[sa,"auto",ne,ee],Ze=()=>["auto","min","max","fr",ne,ee],He=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],De=()=>["start","end","center","stretch","center-safe","end-safe"],D=()=>["auto",...B()],Q=()=>[ia,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...B()],P=()=>[ia,"screen","full","dvw","lvw","svw","min","max","fit",...B()],de=()=>[ia,"screen","full","lh","dvh","lvh","svh","min","max","fit",...B()],X=()=>[a,ne,ee],N=()=>[...q(),yg,gg,{position:[ne,ee]}],L=()=>["no-repeat",{repeat:["","x","y","space","round"]}],I=()=>["auto","cover","contain",_j,jj,{size:[ne,ee]}],F=()=>[_u,Ds,Ra],le=()=>["","none","full",g,ne,ee],re=()=>["",ye,Ds,Ra],Ne=()=>["solid","dashed","dotted","double"],nt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ge=()=>[ye,_u,yg,gg],Dn=()=>["","none",C,ne,ee],un=()=>["none",ye,ne,ee],Rn=()=>["none",ye,ne,ee],Ha=()=>[ye,ne,ee],Ot=()=>[ia,"full",...B()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Cn],breakpoint:[Cn],color:[wx],container:[Cn],"drop-shadow":[Cn],ease:["in","out","in-out"],font:[Nj],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Cn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Cn],shadow:[Cn],spacing:["px",ye],text:[Cn],"text-shadow":[Cn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ia,ee,ne,V]}],container:["container"],columns:[{columns:[ye,ee,ne,p]}],"break-after":[{"break-after":G()}],"break-before":[{"break-before":G()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:J()}],overflow:[{overflow:ue()}],"overflow-x":[{"overflow-x":ue()}],"overflow-y":[{"overflow-y":ue()}],overscroll:[{overscroll:$()}],"overscroll-x":[{"overscroll-x":$()}],"overscroll-y":[{"overscroll-y":$()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:ie()}],"inset-x":[{"inset-x":ie()}],"inset-y":[{"inset-y":ie()}],start:[{"inset-s":ie(),start:ie()}],end:[{"inset-e":ie(),end:ie()}],"inset-bs":[{"inset-bs":ie()}],"inset-be":[{"inset-be":ie()}],top:[{top:ie()}],right:[{right:ie()}],bottom:[{bottom:ie()}],left:[{left:ie()}],visibility:["visible","invisible","collapse"],z:[{z:[sa,"auto",ne,ee]}],basis:[{basis:[ia,"full","auto",p,...B()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ye,ia,"auto","initial","none",ee]}],grow:[{grow:["",ye,ne,ee]}],shrink:[{shrink:["",ye,ne,ee]}],order:[{order:[sa,"first","last","none",ne,ee]}],"grid-cols":[{"grid-cols":se()}],"col-start-end":[{col:xe()}],"col-start":[{"col-start":be()}],"col-end":[{"col-end":be()}],"grid-rows":[{"grid-rows":se()}],"row-start-end":[{row:xe()}],"row-start":[{"row-start":be()}],"row-end":[{"row-end":be()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Ze()}],"auto-rows":[{"auto-rows":Ze()}],gap:[{gap:B()}],"gap-x":[{"gap-x":B()}],"gap-y":[{"gap-y":B()}],"justify-content":[{justify:[...He(),"normal"]}],"justify-items":[{"justify-items":[...De(),"normal"]}],"justify-self":[{"justify-self":["auto",...De()]}],"align-content":[{content:["normal",...He()]}],"align-items":[{items:[...De(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...De(),{baseline:["","last"]}]}],"place-content":[{"place-content":He()}],"place-items":[{"place-items":[...De(),"baseline"]}],"place-self":[{"place-self":["auto",...De()]}],p:[{p:B()}],px:[{px:B()}],py:[{py:B()}],ps:[{ps:B()}],pe:[{pe:B()}],pbs:[{pbs:B()}],pbe:[{pbe:B()}],pt:[{pt:B()}],pr:[{pr:B()}],pb:[{pb:B()}],pl:[{pl:B()}],m:[{m:D()}],mx:[{mx:D()}],my:[{my:D()}],ms:[{ms:D()}],me:[{me:D()}],mbs:[{mbs:D()}],mbe:[{mbe:D()}],mt:[{mt:D()}],mr:[{mr:D()}],mb:[{mb:D()}],ml:[{ml:D()}],"space-x":[{"space-x":B()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":B()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],"inline-size":[{inline:["auto",...P()]}],"min-inline-size":[{"min-inline":["auto",...P()]}],"max-inline-size":[{"max-inline":["none",...P()]}],"block-size":[{block:["auto",...de()]}],"min-block-size":[{"min-block":["auto",...de()]}],"max-block-size":[{"max-block":["none",...de()]}],w:[{w:[p,"screen",...Q()]}],"min-w":[{"min-w":[p,"screen","none",...Q()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[d]},...Q()]}],h:[{h:["screen","lh",...Q()]}],"min-h":[{"min-h":["screen","lh","none",...Q()]}],"max-h":[{"max-h":["screen","lh",...Q()]}],"font-size":[{text:["base",l,Ds,Ra]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,Rj,Aj]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",_u,ee]}],"font-family":[{font:[Cj,Ej,i]}],"font-features":[{"font-features":[ee]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[u,ne,ee]}],"line-clamp":[{"line-clamp":[ye,"none",ne,pg]}],leading:[{leading:[h,...B()]}],"list-image":[{"list-image":["none",ne,ee]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ne,ee]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:X()}],"text-color":[{text:X()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ne(),"wavy"]}],"text-decoration-thickness":[{decoration:[ye,"from-font","auto",ne,Ra]}],"text-decoration-color":[{decoration:X()}],"underline-offset":[{"underline-offset":[ye,"auto",ne,ee]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:B()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ne,ee]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ne,ee]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:N()}],"bg-repeat":[{bg:L()}],"bg-size":[{bg:I()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},sa,ne,ee],radial:["",ne,ee],conic:[sa,ne,ee]},Dj,Mj]}],"bg-color":[{bg:X()}],"gradient-from-pos":[{from:F()}],"gradient-via-pos":[{via:F()}],"gradient-to-pos":[{to:F()}],"gradient-from":[{from:X()}],"gradient-via":[{via:X()}],"gradient-to":[{to:X()}],rounded:[{rounded:le()}],"rounded-s":[{"rounded-s":le()}],"rounded-e":[{"rounded-e":le()}],"rounded-t":[{"rounded-t":le()}],"rounded-r":[{"rounded-r":le()}],"rounded-b":[{"rounded-b":le()}],"rounded-l":[{"rounded-l":le()}],"rounded-ss":[{"rounded-ss":le()}],"rounded-se":[{"rounded-se":le()}],"rounded-ee":[{"rounded-ee":le()}],"rounded-es":[{"rounded-es":le()}],"rounded-tl":[{"rounded-tl":le()}],"rounded-tr":[{"rounded-tr":le()}],"rounded-br":[{"rounded-br":le()}],"rounded-bl":[{"rounded-bl":le()}],"border-w":[{border:re()}],"border-w-x":[{"border-x":re()}],"border-w-y":[{"border-y":re()}],"border-w-s":[{"border-s":re()}],"border-w-e":[{"border-e":re()}],"border-w-bs":[{"border-bs":re()}],"border-w-be":[{"border-be":re()}],"border-w-t":[{"border-t":re()}],"border-w-r":[{"border-r":re()}],"border-w-b":[{"border-b":re()}],"border-w-l":[{"border-l":re()}],"divide-x":[{"divide-x":re()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":re()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Ne(),"hidden","none"]}],"divide-style":[{divide:[...Ne(),"hidden","none"]}],"border-color":[{border:X()}],"border-color-x":[{"border-x":X()}],"border-color-y":[{"border-y":X()}],"border-color-s":[{"border-s":X()}],"border-color-e":[{"border-e":X()}],"border-color-bs":[{"border-bs":X()}],"border-color-be":[{"border-be":X()}],"border-color-t":[{"border-t":X()}],"border-color-r":[{"border-r":X()}],"border-color-b":[{"border-b":X()}],"border-color-l":[{"border-l":X()}],"divide-color":[{divide:X()}],"outline-style":[{outline:[...Ne(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ye,ne,ee]}],"outline-w":[{outline:["",ye,Ds,Ra]}],"outline-color":[{outline:X()}],shadow:[{shadow:["","none",b,xo,yo]}],"shadow-color":[{shadow:X()}],"inset-shadow":[{"inset-shadow":["none",v,xo,yo]}],"inset-shadow-color":[{"inset-shadow":X()}],"ring-w":[{ring:re()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:X()}],"ring-offset-w":[{"ring-offset":[ye,Ra]}],"ring-offset-color":[{"ring-offset":X()}],"inset-ring-w":[{"inset-ring":re()}],"inset-ring-color":[{"inset-ring":X()}],"text-shadow":[{"text-shadow":["none",S,xo,yo]}],"text-shadow-color":[{"text-shadow":X()}],opacity:[{opacity:[ye,ne,ee]}],"mix-blend":[{"mix-blend":[...nt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":nt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ye]}],"mask-image-linear-from-pos":[{"mask-linear-from":ge()}],"mask-image-linear-to-pos":[{"mask-linear-to":ge()}],"mask-image-linear-from-color":[{"mask-linear-from":X()}],"mask-image-linear-to-color":[{"mask-linear-to":X()}],"mask-image-t-from-pos":[{"mask-t-from":ge()}],"mask-image-t-to-pos":[{"mask-t-to":ge()}],"mask-image-t-from-color":[{"mask-t-from":X()}],"mask-image-t-to-color":[{"mask-t-to":X()}],"mask-image-r-from-pos":[{"mask-r-from":ge()}],"mask-image-r-to-pos":[{"mask-r-to":ge()}],"mask-image-r-from-color":[{"mask-r-from":X()}],"mask-image-r-to-color":[{"mask-r-to":X()}],"mask-image-b-from-pos":[{"mask-b-from":ge()}],"mask-image-b-to-pos":[{"mask-b-to":ge()}],"mask-image-b-from-color":[{"mask-b-from":X()}],"mask-image-b-to-color":[{"mask-b-to":X()}],"mask-image-l-from-pos":[{"mask-l-from":ge()}],"mask-image-l-to-pos":[{"mask-l-to":ge()}],"mask-image-l-from-color":[{"mask-l-from":X()}],"mask-image-l-to-color":[{"mask-l-to":X()}],"mask-image-x-from-pos":[{"mask-x-from":ge()}],"mask-image-x-to-pos":[{"mask-x-to":ge()}],"mask-image-x-from-color":[{"mask-x-from":X()}],"mask-image-x-to-color":[{"mask-x-to":X()}],"mask-image-y-from-pos":[{"mask-y-from":ge()}],"mask-image-y-to-pos":[{"mask-y-to":ge()}],"mask-image-y-from-color":[{"mask-y-from":X()}],"mask-image-y-to-color":[{"mask-y-to":X()}],"mask-image-radial":[{"mask-radial":[ne,ee]}],"mask-image-radial-from-pos":[{"mask-radial-from":ge()}],"mask-image-radial-to-pos":[{"mask-radial-to":ge()}],"mask-image-radial-from-color":[{"mask-radial-from":X()}],"mask-image-radial-to-color":[{"mask-radial-to":X()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":q()}],"mask-image-conic-pos":[{"mask-conic":[ye]}],"mask-image-conic-from-pos":[{"mask-conic-from":ge()}],"mask-image-conic-to-pos":[{"mask-conic-to":ge()}],"mask-image-conic-from-color":[{"mask-conic-from":X()}],"mask-image-conic-to-color":[{"mask-conic-to":X()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:N()}],"mask-repeat":[{mask:L()}],"mask-size":[{mask:I()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ne,ee]}],filter:[{filter:["","none",ne,ee]}],blur:[{blur:Dn()}],brightness:[{brightness:[ye,ne,ee]}],contrast:[{contrast:[ye,ne,ee]}],"drop-shadow":[{"drop-shadow":["","none",T,xo,yo]}],"drop-shadow-color":[{"drop-shadow":X()}],grayscale:[{grayscale:["",ye,ne,ee]}],"hue-rotate":[{"hue-rotate":[ye,ne,ee]}],invert:[{invert:["",ye,ne,ee]}],saturate:[{saturate:[ye,ne,ee]}],sepia:[{sepia:["",ye,ne,ee]}],"backdrop-filter":[{"backdrop-filter":["","none",ne,ee]}],"backdrop-blur":[{"backdrop-blur":Dn()}],"backdrop-brightness":[{"backdrop-brightness":[ye,ne,ee]}],"backdrop-contrast":[{"backdrop-contrast":[ye,ne,ee]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ye,ne,ee]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ye,ne,ee]}],"backdrop-invert":[{"backdrop-invert":["",ye,ne,ee]}],"backdrop-opacity":[{"backdrop-opacity":[ye,ne,ee]}],"backdrop-saturate":[{"backdrop-saturate":[ye,ne,ee]}],"backdrop-sepia":[{"backdrop-sepia":["",ye,ne,ee]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":B()}],"border-spacing-x":[{"border-spacing-x":B()}],"border-spacing-y":[{"border-spacing-y":B()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ne,ee]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ye,"initial",ne,ee]}],ease:[{ease:["linear","initial",H,ne,ee]}],delay:[{delay:[ye,ne,ee]}],animate:[{animate:["none",K,ne,ee]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[k,ne,ee]}],"perspective-origin":[{"perspective-origin":J()}],rotate:[{rotate:un()}],"rotate-x":[{"rotate-x":un()}],"rotate-y":[{"rotate-y":un()}],"rotate-z":[{"rotate-z":un()}],scale:[{scale:Rn()}],"scale-x":[{"scale-x":Rn()}],"scale-y":[{"scale-y":Rn()}],"scale-z":[{"scale-z":Rn()}],"scale-3d":["scale-3d"],skew:[{skew:Ha()}],"skew-x":[{"skew-x":Ha()}],"skew-y":[{"skew-y":Ha()}],transform:[{transform:[ne,ee,"","none","gpu","cpu"]}],"transform-origin":[{origin:J()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ot()}],"translate-x":[{"translate-x":Ot()}],"translate-y":[{"translate-y":Ot()}],"translate-z":[{"translate-z":Ot()}],"translate-none":["translate-none"],accent:[{accent:X()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:X()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ne,ee]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":B()}],"scroll-mx":[{"scroll-mx":B()}],"scroll-my":[{"scroll-my":B()}],"scroll-ms":[{"scroll-ms":B()}],"scroll-me":[{"scroll-me":B()}],"scroll-mbs":[{"scroll-mbs":B()}],"scroll-mbe":[{"scroll-mbe":B()}],"scroll-mt":[{"scroll-mt":B()}],"scroll-mr":[{"scroll-mr":B()}],"scroll-mb":[{"scroll-mb":B()}],"scroll-ml":[{"scroll-ml":B()}],"scroll-p":[{"scroll-p":B()}],"scroll-px":[{"scroll-px":B()}],"scroll-py":[{"scroll-py":B()}],"scroll-ps":[{"scroll-ps":B()}],"scroll-pe":[{"scroll-pe":B()}],"scroll-pbs":[{"scroll-pbs":B()}],"scroll-pbe":[{"scroll-pbe":B()}],"scroll-pt":[{"scroll-pt":B()}],"scroll-pr":[{"scroll-pr":B()}],"scroll-pb":[{"scroll-pb":B()}],"scroll-pl":[{"scroll-pl":B()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ne,ee]}],fill:[{fill:["none",...X()]}],"stroke-w":[{stroke:[ye,Ds,Ra,pg]}],stroke:[{stroke:["none",...X()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Oj=hj(kj);function Vj(...a){return Oj(QN(a))}const xg=[{name:"FILES",href:"#about",id:"01"},{name:"MASTERY",href:"#skills",id:"02"},{name:"LOGS",href:"#projects",id:"03"},{name:"CHRONO",href:"#experience",id:"04"},{name:"TRANS",href:"#contact",id:"05"}];function Lj(){const[a,i]=Y.useState(!1),[l,o]=Y.useState(!1);return Y.useEffect(()=>{const u=()=>{o(window.scrollY>20)};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]),Y.useEffect(()=>(document.body.style.overflow=a?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[a]),f.jsxs("nav",{className:Vj(`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        border-b
        `,l?`
            py-3
            bg-cyber-black/60
            supports-[backdrop-filter]:bg-cyber-black/40
            backdrop-blur-xl
            border-white/10
          `:`
            py-5
            lg:py-6
            bg-transparent
            border-transparent
          `),children:[f.jsx("div",{className:`
          max-w-7xl
          mx-auto
          overflow-hidden
          px-4
          sm:px-6
          lg:px-8
        `,children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs(Z.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:`
              flex
              items-center
              gap-3
              group
              cursor-pointer
              select-none
            `,children:[f.jsxs("div",{className:"relative",children:[f.jsx(cn,{className:`
                  text-neon-blue
                  w-7
                  h-7
                  sm:w-8
                  sm:h-8
                  group-hover:rotate-[360deg]
                  transition-transform
                  duration-700
                `}),f.jsx("div",{className:`
                  absolute
                  inset-0
                  bg-neon-blue
                  blur-[10px]
                  opacity-20
                  animate-pulse
                `})]}),f.jsxs("span",{className:`
                font-display
                font-bold
                text-xl
                sm:text-2xl
                tracking-tighter
                text-white
              `,children:["YASH",f.jsx("span",{className:"text-neon-blue",children:".SYS"})]})]}),f.jsxs("div",{className:"hidden md:flex items-center gap-10",children:[f.jsx("div",{className:"flex items-baseline space-x-1",children:xg.map(u=>f.jsxs("a",{href:u.href,className:`
                    group
                    relative
                    px-4
                    py-2
                  `,children:[f.jsx("span",{className:`
                      relative
                      z-10
                      text-gray-500
                      group-hover:text-white
                      font-mono
                      text-[11px]
                      tracking-[0.2em]
                      transition-colors
                      uppercase
                    `,children:u.name}),f.jsx("div",{className:`
                      absolute
                      bottom-0
                      left-0
                      w-0
                      h-[1px]
                      bg-neon-blue
                      transition-all
                      duration-300
                      group-hover:w-full
                      opacity-50
                      shadow-[0_0_8px_rgba(0,209,255,0.8)]
                    `})]},u.name))}),f.jsx("div",{className:"h-6 w-[1px] bg-white/10"}),f.jsxs("div",{className:"flex items-center gap-6",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(Ua,{className:`
                    w-3
                    h-3
                    text-neon-green
                    animate-pulse
                  `}),f.jsx("span",{className:`
                    font-mono
                    text-[9px]
                    text-gray-500
                    uppercase
                    tracking-widest
                  `,children:"NETWORK_SECURE"})]}),f.jsx(Z.a,{whileHover:{scale:1.1,rotate:12},href:"#",className:`
                  text-gray-500
                  hover:text-white
                  transition-colors
                `,children:f.jsx(Ys,{className:"w-5 h-5"})})]})]}),f.jsx("div",{className:"md:hidden",children:f.jsx("button",{onClick:()=>i(!a),className:`
                p-2
                rounded-md
                text-gray-300
                hover:text-neon-blue
                transition-colors
              `,children:a?f.jsx(mx,{className:"w-6 h-6 text-neon-blue"}):f.jsx(mN,{className:"w-6 h-6"})})})]})}),f.jsx(_n,{children:a&&f.jsx(Z.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"100vh"},exit:{opacity:0,height:0},transition:{duration:.35,ease:"easeOut"},className:`
              md:hidden
              overflow-y-auto
              bg-cyber-black/90
              supports-[backdrop-filter]:bg-cyber-black/70
              backdrop-blur-2xl
              border-b
              border-white/5
            `,children:f.jsxs("div",{className:`
                px-5
                pt-24
                pb-12
                space-y-4
                min-h-screen
              `,children:[xg.map((u,h)=>f.jsxs(Z.a,{href:u.href,onClick:()=>i(!1),initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:h*.05},className:`
                    flex
                    items-center
                    justify-between
                    group
                    px-5
                    py-5
                    rounded-xl
                    bg-white/[0.03]
                    border
                    border-white/10
                    hover:border-neon-blue/40
                    hover:bg-neon-blue/[0.03]
                    transition-all
                    duration-300
                  `,children:[f.jsx("span",{className:`
                      text-gray-300
                      group-hover:text-neon-blue
                      font-mono
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      transition-colors
                      font-bold
                    `,children:u.name}),f.jsxs("span",{className:`
                      font-mono
                      text-[10px]
                      text-gray-600
                    `,children:["/",u.id]})]},u.name)),f.jsxs("div",{className:`
                  pt-10
                  flex
                  justify-center
                  gap-14
                `,children:[f.jsxs("div",{className:`
                    flex
                    flex-col
                    items-center
                    gap-2
                    text-gray-500
                  `,children:[f.jsx(Ua,{className:"w-4 h-4"}),f.jsx("span",{className:`
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-widest
                    `,children:"ACTIVE"})]}),f.jsxs(Z.a,{whileTap:{scale:.9},href:"#",className:`
                    flex
                    flex-col
                    items-center
                    gap-2
                    text-gray-500
                    hover:text-neon-blue
                    transition-colors
                  `,children:[f.jsx(Ys,{className:"w-4 h-4"}),f.jsx("span",{className:`
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-widest
                    `,children:"SOURCE"})]})]})]})})})]})}const bg=["Cybersecurity Specialist","System Architect","AI Integration Engineer","Scalable Systems Engineer","Ethical Bug Hunter","GATE Aspirant"];function Uj(){const[a,i]=Y.useState(0),[l,o]=Y.useState(""),[u,h]=Y.useState(!1);return Y.useEffect(()=>{const d=bg[a],y=setTimeout(()=>{!u&&l===d?setTimeout(()=>h(!0),1500):u&&l===""?(h(!1),i(g=>(g+1)%bg.length)):o(d.substring(0,u?l.length-1:l.length+1))},u?50:100);return()=>clearTimeout(y)},[l,u,a]),f.jsxs("section",{id:"home",className:`
        relative
        min-h-[100svh]
        lg:min-h-screen
        flex
        items-center
        justify-center
        pt-24
        lg:pt-20
        overflow-hidden
        bg-cyber-black
      `,children:[f.jsxs("div",{className:"absolute inset-0 z-0 pointer-events-none opacity-10 lg:opacity-20",children:[f.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"}),f.jsx(Z.div,{animate:{background:["radial-gradient(circle at 50% 50%, rgba(0,255,0,0.08) 0%, transparent 50%)","radial-gradient(circle at 60% 40%, rgba(0,209,255,0.08) 0%, transparent 50%)","radial-gradient(circle at 40% 60%, rgba(0,255,0,0.08) 0%, transparent 50%)"]},transition:{duration:10,repeat:1/0,ease:"linear"},className:"absolute inset-0"})]}),f.jsx("div",{className:"hidden md:block absolute inset-0 pointer-events-none opacity-5",children:f.jsx(Z.div,{initial:{top:"-10%"},animate:{top:"110%"},transition:{duration:8,repeat:1/0,ease:"linear"},className:"w-full h-[1px] bg-neon-blue shadow-[0_0_20px_rgba(0,209,255,1)]"})}),f.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-cyber-black/20 to-cyber-black z-0"}),f.jsxs("div",{className:`
          max-w-7xl
          mx-auto
          overflow-hidden
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          lg:gap-20
          items-center
        `,children:[f.jsxs(Z.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8},className:"text-center lg:text-left",children:[f.jsxs("div",{className:`
              inline-flex
              items-center
              gap-3
              px-4
              py-2
              rounded-full
              bg-neon-blue/10
              border
              neon-border-blue
              text-neon-blue
              text-[9px]
              sm:text-[10px]
              font-mono
              uppercase
              tracking-[0.25em]
              mb-8
            `,children:[f.jsx(kf,{className:"w-3.5 h-3.5 animate-pulse"}),"SYSTEM_ARCHITECT v4.2.0_STABLE"]}),f.jsxs("h1",{className:`
              font-display
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-8xl
              font-bold
              tracking-tight
              mb-6
              leading-[1]
              lg:leading-[0.9]
            `,children:["HI, I'M ",f.jsx("span",{className:"text-white",children:"YASH"}),f.jsx("br",{}),f.jsx("span",{className:"text-neon-blue drop-shadow-[0_0_15px_rgba(0,209,255,0.5)]",children:"PANCHAL"})]}),f.jsxs("div",{className:`
              min-h-[50px]
              mb-8
              lg:mb-10
              flex
              items-center
              justify-center
              lg:justify-start
              font-mono
              text-sm
              sm:text-base
              md:text-xl
              text-neon-green
            `,children:[f.jsx("span",{className:"mr-3 text-white/40",children:">"}),f.jsx("span",{className:"uppercase tracking-[0.1em] font-bold",children:l}),f.jsx(Z.span,{animate:{opacity:[1,0]},transition:{duration:.8,repeat:1/0},className:"ml-2 w-2 sm:w-3 h-5 sm:h-7 bg-neon-green"})]}),f.jsxs("p",{className:`
              text-gray-400
              text-base
              sm:text-lg
              md:text-xl
              font-sans
              max-w-xl
              mx-auto
              lg:mx-0
              mb-10
              lg:mb-12
              leading-relaxed
            `,children:["Architecting robust digital ecosystems for the next generation of web infrastructure. Specializing in"," ",f.jsx("span",{className:"text-white",children:"secure scalability"})," ","and"," ",f.jsx("span",{className:"text-white",children:"AI integration"}),"."]}),f.jsxs("div",{className:`
              flex
              flex-col
              sm:flex-row
              gap-4
              sm:gap-5
              w-full
              sm:w-auto
              justify-center
              lg:justify-start
            `,children:[f.jsxs(Z.a,{whileHover:{scale:1.05},whileTap:{scale:.95},href:"#projects",className:`
                px-6
                sm:px-8
                lg:px-10
                py-4
                lg:py-5
                bg-neon-blue
                text-black
                font-mono
                font-bold
                uppercase
                tracking-widest
                hover:bg-white
                transition-all
                flex
                items-center
                justify-center
                gap-3
                shadow-[0_0_25px_rgba(0,209,255,0.4)]
              `,children:["EXECUTE_INIT()",f.jsx(ux,{className:"w-5 h-5"})]}),f.jsxs(Z.a,{whileHover:{scale:1.05},whileTap:{scale:.95},href:"https://drive.google.com/uc?export=download&id=1PHxOVy0hVEYOuDOCGR7sUQ9x_DlDB0aM",target:"_blank",rel:"noopener noreferrer",className:`
    px-6
    sm:px-8
    lg:px-10
    py-4
    lg:py-5
    border
    border-neon-green/30
    text-neon-green
    font-mono
    font-bold
    uppercase
    tracking-widest
    hover:bg-neon-green/5
    transition-all
    flex
    items-center
    justify-center
    gap-3
  `,children:["DOWNLOAD_CV",f.jsx(Di,{className:"w-4 h-4"})]})]})]}),f.jsx(Z.div,{initial:{opacity:0,scale:.9,rotateY:-10},animate:{opacity:1,scale:1,rotateY:0},transition:{duration:1.2,ease:"easeOut"},className:"relative hidden lg:block perspective-1000",children:f.jsxs("div",{className:`
              relative
              w-full
              aspect-square
              neon-border-blue
              border
              rounded-3xl
              p-6
              overflow-hidden
              bg-cyber-gray/20
              backdrop-blur-3xl
              shadow-2xl
            `,children:[f.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent"}),f.jsxs("div",{className:`
                relative
                h-full
                bg-black/80
                rounded-2xl
                p-8
                font-mono
                text-sm
                border
                border-white/5
              `,children:[f.jsxs("div",{className:"flex items-center justify-between mb-8",children:[f.jsxs("div",{className:"flex gap-2",children:[f.jsx("div",{className:"w-3 h-3 rounded-full bg-red-400/30"}),f.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-400/30"}),f.jsx("div",{className:"w-3 h-3 rounded-full bg-neon-green/30"})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(Ua,{className:"w-3 h-3 text-neon-blue animate-pulse"}),f.jsx("span",{className:"text-[10px] text-gray-400 uppercase tracking-widest whitespace-nowrap",children:"Core_Process: Active"})]})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-6 mb-10",children:[f.jsxs("div",{className:"p-4 bg-white/5 border border-white/5 rounded-xl",children:[f.jsx("div",{className:"text-[9px] text-gray-500 uppercase mb-2 tracking-widest",children:"NETWORK_BANDWIDTH"}),f.jsx("div",{className:"flex items-end gap-2 h-12",children:[40,70,45,90,60,80].map((d,p)=>f.jsx(Z.div,{initial:{height:0},animate:{height:`${d}%`},transition:{duration:1,delay:p*.1},className:"flex-1 bg-neon-blue/60 rounded-t-sm"},p))})]}),f.jsxs("div",{className:"p-4 bg-white/5 border border-white/5 rounded-xl flex flex-col justify-center items-center",children:[f.jsx("div",{className:"text-[9px] text-gray-500 uppercase mb-2 tracking-widest",children:"ENCRYPTION_LVL"}),f.jsx("div",{className:"text-3xl text-neon-green font-bold",children:"256-BIT"}),f.jsx("div",{className:"text-[8px] text-neon-green/50 mt-1 uppercase tracking-tighter",children:"AES_PROTOCOL_ACTIVE"})]})]}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"flex justify-between items-center text-[10px] text-gray-600 uppercase border-b border-white/5 pb-2",children:[f.jsx("span",{children:"SUBSYSTEM"}),f.jsx("span",{children:"LATENCY"})]}),[{name:"Firewall_Node",val:"0.4ms",icon:f.jsx(Qs,{className:"text-neon-green"})},{name:"Neural_Engine",val:"1.2ms",icon:f.jsx(cn,{className:"text-neon-blue"})},{name:"Sync_Cluster",val:"Synced",icon:f.jsx(wN,{className:"text-white/40"})}].map((d,p)=>f.jsxs("div",{className:"flex justify-between items-center",children:[f.jsxs("span",{className:"flex items-center gap-3 text-xs text-white/80",children:[f.jsx("span",{className:"opacity-50",children:d.icon}),d.name]}),f.jsx("span",{className:"text-neon-blue text-xs font-bold",children:d.val})]},p))]}),f.jsxs("div",{className:"mt-10 pt-10 border-t border-white/5",children:[f.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[f.jsx("div",{className:"w-1.5 h-1.5 bg-neon-green rounded-full animate-ping"}),f.jsx("span",{className:"text-[10px] text-gray-500 uppercase tracking-widest",children:"System_Logs"})]}),f.jsxs("div",{className:"text-[11px] text-gray-400 space-y-1",children:[f.jsxs("p",{className:"flex gap-2",children:[f.jsx("span",{className:"text-neon-green",children:"$"}),f.jsx("span",{children:"boot --secure_layer_active"})]}),f.jsxs("p",{className:"flex gap-2",children:[f.jsx("span",{className:"text-neon-green",children:"$"}),f.jsx("span",{className:"opacity-50",children:"verifying_neural_handshake..."})]}),f.jsxs("p",{className:"flex gap-2",children:[f.jsx("span",{className:"text-neon-green",children:"$"}),f.jsx("span",{className:"animate-pulse",children:"listening_for_intercepts..."})]})]})]})]}),f.jsx("div",{className:"absolute top-0 right-0 p-8",children:f.jsx(Di,{className:"w-8 h-8 text-neon-blue/20 rotate-12"})}),f.jsx("div",{className:"absolute -top-1 -left-1 w-12 h-12 border-t-2 border-l-2 border-neon-blue opacity-30"}),f.jsx("div",{className:"absolute -bottom-1 -right-1 w-12 h-12 border-b-2 border-r-2 border-neon-blue opacity-30"})]})})]})]})}function Oi({title:a,subtitle:i,number:l}){return f.jsxs(Z.div,{initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},transition:{duration:.65},viewport:{once:!0},className:`
        relative
        mb-10
        md:mb-14
        overflow-hidden
      `,children:[f.jsx("div",{className:`
          absolute
          -top-10
          left-0
          w-40
          h-40
          bg-neon-green/5
          blur-3xl
          rounded-full
          pointer-events-none
        `}),f.jsx("div",{className:`
          absolute
          bottom-0
          right-0
          w-32
          h-32
          bg-neon-blue/5
          blur-3xl
          rounded-full
          pointer-events-none
        `}),f.jsxs("div",{className:`
          relative
          z-10
          flex
          items-center
          gap-3
          md:gap-4
          mb-3
        `,children:[f.jsxs(Z.div,{initial:{opacity:0,x:-10},whileInView:{opacity:1,x:0},transition:{delay:.1},className:`
            flex
            items-center
            gap-2
            shrink-0
          `,children:[f.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse"}),f.jsxs("span",{className:`
              font-mono
              text-neon-green
              text-[10px]
              sm:text-xs
              md:text-sm
              uppercase
              tracking-[0.25em]
              md:tracking-[0.4em]
              whitespace-nowrap
            `,children:["SECTION_",l]})]}),f.jsx("div",{className:`
            relative
            flex-1
            h-px
            overflow-hidden
            bg-white/5
          `,children:f.jsx(Z.div,{initial:{width:0},whileInView:{width:"100%"},transition:{duration:1,delay:.2},className:`
              absolute
              inset-y-0
              left-0
              bg-gradient-to-r
              from-neon-green
              via-neon-blue/40
              to-transparent
            `})}),f.jsxs(Z.div,{initial:{opacity:0,x:10},whileInView:{opacity:1,x:0},transition:{delay:.25},className:`
            hidden
            sm:flex
            items-center
            gap-2
            px-2.5
            py-1
            rounded-md
            bg-neon-green/5
            border
            border-neon-green/10
            backdrop-blur-sm
            whitespace-nowrap
          `,children:[f.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse"}),f.jsx("span",{className:`
              font-mono
              text-[7px]
              text-neon-green
              uppercase
              tracking-widest
            `,children:"ACTIVE_NODE"})]})]}),f.jsxs("div",{className:"relative z-10",children:[f.jsx("div",{className:`
            absolute
            inset-0
            pointer-events-none
            select-none
            opacity-[0.04]
            overflow-hidden
          `,children:f.jsx("h2",{className:`
              font-display
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              uppercase
              tracking-tight
              md:tracking-tighter
              leading-none
              text-transparent
              [-webkit-text-stroke:1px_rgba(255,255,255,0.35)]
            `,children:a})}),f.jsxs(Z.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.7,delay:.15},className:`
            relative
            font-display
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-black
            uppercase
            tracking-tight
            md:tracking-tighter
            leading-none
            text-white
            break-words
          `,children:[f.jsx("span",{className:"relative z-10",children:a}),f.jsx(Z.span,{animate:{opacity:[1,.4,1],scale:[1,1.08,1]},transition:{repeat:1/0,duration:2},className:`
              ml-1
              md:ml-2
              text-neon-green
              inline-block
            `,children:"."})]}),f.jsx(Z.div,{initial:{width:0},whileInView:{width:"140px"},transition:{duration:.8,delay:.3},className:`
            mt-4
            h-[2px]
            bg-gradient-to-r
            from-neon-green
            via-neon-blue/50
            to-transparent
            rounded-full
          `})]}),i&&f.jsxs(Z.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.25},className:`
            relative
            z-10
            mt-4
            flex
            items-start
            gap-3
            max-w-3xl
          `,children:[f.jsx("div",{className:`
              mt-1
              w-1.5
              h-1.5
              rounded-full
              bg-neon-blue
              shrink-0
            `}),f.jsx("p",{className:`
              text-gray-500
              font-mono
              text-[10px]
              sm:text-xs
              md:text-sm
              uppercase
              tracking-[0.15em]
              sm:tracking-[0.25em]
              leading-relaxed
            `,children:i})]}),f.jsx(Z.div,{animate:{x:["-100%","120%"]},transition:{repeat:1/0,duration:5,ease:"linear"},className:`
          absolute
          top-0
          w-40
          h-full
          bg-gradient-to-r
          from-transparent
          via-white/[0.03]
          to-transparent
          pointer-events-none
        `})]})}const vg={"neon-blue":{text:"text-neon-blue",border:"border-neon-blue",bg:"bg-neon-blue",glow:"shadow-[0_0_25px_rgba(0,209,255,0.25)]"},"neon-green":{text:"text-neon-green",border:"border-neon-green",bg:"bg-neon-green",glow:"shadow-[0_0_25px_rgba(0,255,0,0.25)]"}},Bj=[{id:"gate",icon:f.jsx(kf,{className:"w-5 h-5"}),title:"GATE_ASPIRANT",desc:"Deep-diving into Computer Science fundamentals and architectural theory for high-level specialization.",color:"neon-blue"},{id:"scale",icon:f.jsx(A5,{className:"w-5 h-5"}),title:"SCALABILITY_LOGIC",desc:"Passionate about building distributed systems that handle high-concurrency traffic efficiently.",color:"neon-green"},{id:"hunt",icon:f.jsx(NN,{className:"w-5 h-5"}),title:"BUG_HUNTER",desc:"Focused on security analysis, OWASP concepts, and proactive vulnerability assessment.",color:"neon-blue"},{id:"ai",icon:f.jsx(z5,{className:"w-5 h-5"}),title:"AI_INTEGRATOR",desc:"Bridging neural intelligence with production-ready scalable infrastructures.",color:"neon-green"}],Hj=[{value:12,label:"Projects_Built",color:"neon-green"},{value:5,label:"Certifications",color:"neon-blue"},{value:500,label:"Learning_Hours",color:"neon-green"},{value:8,label:"Tech_Stacks",color:"neon-blue"}],Yj=[{period:"2021 - 2025",title:"DIPLOMA IN IT",org:"B & B Institute of Technology",status:"FOUNDATION_SECURED",desc:"Built strong engineering foundations in networking, programming, database systems, and web development.",skills:["Python","SQL","Networking","Web Dev"]},{period:"2025 - PRESENT",title:"B.TECH IN IT",org:"Madhuben & Bhanubhai Patel Institute of Technology",status:"SYS_EXPANSION_ACTIVE",desc:"Advancing into scalable infrastructures, cybersecurity, AI systems, and system architecture engineering.",skills:["Cybersecurity","Scalable Systems","AI","GATE"]}];function Gj(){const[a,i]=Y.useState([]),[l,o]=Y.useState(null),u=Y.useMemo(()=>["> INITIALIZING_CORE_DRIVES...","> SCANNING_DIPLOMA_ENGINEERING_PATHWAY...","> LOADING_BTECH_INFRASTRUCTURE_MODULE...","> SECURITY_PROTOCOL: ENABLED","> STATUS: SYSTEM_ARCHITECTURE_ACTIVE","> DEPLOYMENT_READY."],[]);return Y.useEffect(()=>{let h=0;const d=setInterval(()=>{h<u.length?(i(p=>[...p,u[h]]),h++):clearInterval(d)},900);return()=>clearInterval(d)},[u]),f.jsxs("section",{id:"about",className:`
        relative
        py-20
        md:py-32
        bg-cyber-black
        overflow-hidden
        border-y
        border-white/5
      `,children:[f.jsx("div",{className:`
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.02),transparent)]
          pointer-events-none
        `}),f.jsx("div",{className:"absolute inset-0 cyber-grid opacity-[0.08] pointer-events-none"}),f.jsx("div",{className:"hidden md:block",children:[...Array(14)].map((h,d)=>f.jsx(Z.div,{className:`
              absolute
              w-1
              h-1
              bg-neon-blue
              rounded-full
              opacity-20
              pointer-events-none
            `,animate:{y:[Math.random()*800,Math.random()*-800],x:[Math.random()*1e3,Math.random()*1200],opacity:[0,.4,0]},transition:{duration:15+Math.random()*10,repeat:1/0,ease:"linear"},style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`}},d))}),f.jsxs("div",{className:`
          max-w-7xl
          mx-auto
          overflow-hidden
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        `,children:[f.jsx(Oi,{title:"IDENTITY_PROFILE",subtitle:"System Architect & Security Engineer",number:"01"}),f.jsxs("div",{className:`
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
            md:gap-10
            mt-12
            md:mt-16
          `,children:[f.jsxs(Z.div,{initial:{opacity:0,x:-40},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},className:`
              lg:col-span-7
              space-y-8
              md:space-y-10
            `,children:[f.jsxs("div",{className:`
                relative
                group
                p-5
                sm:p-6
                lg:p-8
                bg-cyber-gray/40
                border
                border-neon-blue/30
                rounded-2xl
                backdrop-blur-md
                md:backdrop-blur-xl
              `,children:[f.jsx("div",{className:"absolute top-0 left-0 w-24 md:w-32 h-[1px] bg-neon-blue"}),f.jsx("div",{className:"absolute top-0 left-0 w-[1px] h-24 md:h-32 bg-neon-blue"}),f.jsxs("div",{className:`
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  gap-4
                  mb-6
                `,children:[f.jsx("div",{className:"p-3 bg-neon-blue/10 rounded-xl w-fit",children:f.jsx(Ua,{className:"w-7 h-7 text-neon-blue animate-pulse"})}),f.jsxs("div",{children:[f.jsx("h3",{className:`
                      font-display
                      text-xl
                      sm:text-2xl
                      font-bold
                      uppercase
                      text-white
                      tracking-widest
                    `,children:"MISSION_PROTOCOL"}),f.jsx("span",{className:`
                      font-mono
                      text-[8px]
                      sm:text-[9px]
                      text-gray-500
                      uppercase
                      tracking-[0.3em]
                    `,children:"System.State: Continuous_Evolution"})]})]}),f.jsxs("div",{className:`
                  space-y-5
                  text-gray-400
                  text-base
                  sm:text-lg
                  leading-relaxed
                `,children:[f.jsxs("p",{children:["I am a"," ",f.jsx("span",{className:"text-white font-bold",children:"System-Oriented Thinker"})," ","with a security-first mindset focused on scalable and secure engineering systems."]}),f.jsxs("p",{children:["My journey began at"," ",f.jsx("span",{className:"text-neon-green font-semibold",children:"B & B Institute of Technology"})," ","during my Diploma in Information Technology where I established strong foundations in programming, networking, databases, and web systems."]}),f.jsxs("p",{children:["Currently pursuing"," ",f.jsx("span",{className:"text-neon-blue font-semibold",children:"B.Tech Information Technology"}),", I am actively exploring scalable infrastructures, cybersecurity, AI-driven systems, and advanced system architecture."]}),f.jsx("div",{className:`
                    bg-neon-green/5
                    border-l-2
                    border-neon-green
                    p-4
                    font-mono
                    text-sm
                    italic
                  `,children:'"Engineering secure digital systems where scalability, resilience, and intelligence coexist seamlessly."'})]})]}),f.jsx("div",{className:`
                grid
                grid-cols-1
                md:grid-cols-2
                gap-5
              `,children:Yj.map((h,d)=>f.jsxs(Z.div,{whileHover:{y:-5},className:`
                    p-5
                    sm:p-6
                    bg-white/[0.03]
                    border
                    border-neon-green/20
                    rounded-xl
                    transition-all
                    duration-500
                    group
                  `,children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("span",{className:`
                        font-mono
                        text-[9px]
                        sm:text-[10px]
                        text-neon-green
                        tracking-widest
                      `,children:h.period}),f.jsx("div",{className:`
                        px-2
                        py-1
                        bg-neon-green/10
                        border
                        border-neon-green/30
                        rounded
                        text-[8px]
                        font-mono
                        text-neon-green
                        uppercase
                      `,children:h.status})]}),f.jsx("h4",{className:`
                      font-display
                      text-lg
                      sm:text-xl
                      font-bold
                      uppercase
                      text-white
                      mb-1
                    `,children:h.title}),f.jsx("p",{className:`
                      font-mono
                      text-[9px]
                      sm:text-[10px]
                      text-gray-500
                      mb-4
                      uppercase
                      tracking-wider
                    `,children:h.org}),f.jsx("p",{className:`
                      text-sm
                      text-gray-500
                      mb-5
                      leading-relaxed
                    `,children:h.desc}),f.jsx("div",{className:"flex flex-wrap gap-2",children:h.skills.map(p=>f.jsxs("span",{className:`
                            px-2
                            py-1
                            bg-white/5
                            rounded
                            text-[9px]
                            font-mono
                            text-gray-400
                          `,children:["//",p]},p))})]},d))}),f.jsxs("div",{className:`
                p-5
                sm:p-6
                lg:p-8
                bg-gradient-to-br
                from-neon-blue/10
                via-transparent
                to-transparent
                border
                border-neon-blue/30
                rounded-2xl
                relative
                overflow-hidden
                group
              `,children:[f.jsx("div",{className:"absolute top-4 right-4",children:f.jsx(O5,{className:"w-10 h-10 md:w-12 md:h-12 text-neon-blue opacity-10 group-hover:opacity-30 transition-opacity"})}),f.jsxs("div",{className:`
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  gap-8
                `,children:[f.jsxs("div",{className:"flex-1",children:[f.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[f.jsx(tN,{className:"w-4 h-4 text-neon-blue"}),f.jsx("span",{className:`
                        font-mono
                        text-[9px]
                        sm:text-[10px]
                        text-neon-blue
                        uppercase
                        tracking-widest
                      `,children:"Field_Report: Active_Duty"})]}),f.jsx("h3",{className:`
                      font-display
                      text-xl
                      sm:text-2xl
                      font-bold
                      uppercase
                      text-white
                      mb-2
                    `,children:"Tech Elecon Pvt Ltd"}),f.jsx("p",{className:`
                      text-sm
                      text-gray-400
                      leading-relaxed
                      max-w-xl
                    `,children:"Practical cybersecurity engineering exposure involving security analysis, vulnerability awareness, and system security practices."})]}),f.jsxs("div",{className:"flex flex-col gap-3",children:[f.jsxs("div",{className:`
                      px-4
                      py-3
                      border
                      border-white/10
                      bg-black/40
                      rounded-lg
                      flex
                      items-center
                      gap-2
                    `,children:[f.jsx(Qs,{className:"w-3 h-3 text-neon-green"}),f.jsx("span",{className:`
                        text-[9px]
                        sm:text-[10px]
                        font-mono
                        text-white
                        uppercase
                      `,children:"Cybersecurity Analyst"})]}),f.jsxs("div",{className:`
                      px-4
                      py-3
                      border
                      border-white/10
                      bg-black/40
                      rounded-lg
                      flex
                      items-center
                      gap-2
                    `,children:[f.jsx(Di,{className:"w-3 h-3 text-neon-blue"}),f.jsx("span",{className:`
                        text-[9px]
                        sm:text-[10px]
                        font-mono
                        text-white
                        uppercase
                      `,children:"Ethical Hacking"})]})]})]})]})]}),f.jsxs(Z.div,{initial:{opacity:0,x:40},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},className:`
              lg:col-span-5
              space-y-8
            `,children:[f.jsx("div",{className:`
                grid
                grid-cols-2
                gap-4
              `,children:Hj.map((h,d)=>{const p=vg[h.color];return f.jsxs("div",{className:`
                      p-5
                      sm:p-6
                      bg-cyber-gray/30
                      border
                      border-white/5
                      rounded-xl
                      text-center
                      group
                      relative
                      overflow-hidden
                    `,children:[f.jsxs("div",{className:"relative z-10",children:[f.jsxs("div",{className:`
                          font-mono
                          text-2xl
                          sm:text-3xl
                          font-bold
                          mb-1
                          ${p.text}
                        `,children:[h.value,"+"]}),f.jsx("div",{className:`
                          font-mono
                          text-[8px]
                          sm:text-[9px]
                          text-gray-600
                          uppercase
                          tracking-widest
                        `,children:h.label})]}),f.jsx("div",{className:"absolute inset-0 bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors"})]},d)})}),f.jsx("div",{className:"space-y-4",children:Bj.map(h=>{const d=vg[h.color];return f.jsx(Z.div,{onHoverStart:()=>o(h.id),onHoverEnd:()=>o(null),className:`
                      relative
                      p-5
                      sm:p-6
                      border
                      rounded-xl
                      transition-all
                      duration-500
                      cursor-pointer
                      group

                      ${l===h.id?`
                            bg-cyber-gray/50
                            ${d.border}
                            ${d.glow}
                          `:`
                            bg-cyber-gray/20
                            border-white/5
                            opacity-80
                            hover:opacity-100
                          `}
                    `,children:f.jsxs("div",{className:"flex items-start gap-5",children:[f.jsx("div",{className:`
                          p-3
                          bg-black/40
                          rounded-lg
                          border
                          ${d.border}/20
                          ${d.text}
                        `,children:h.icon}),f.jsxs("div",{children:[f.jsx("h4",{className:`
                            font-display
                            text-sm
                            font-bold
                            uppercase
                            text-white
                            mb-2
                            tracking-wider
                          `,children:h.title}),f.jsx("p",{className:`
                            text-xs
                            text-gray-500
                            leading-relaxed
                          `,children:h.desc})]})]})},h.id)})}),f.jsxs("div",{className:"relative",children:[f.jsx("div",{className:"absolute inset-0 bg-neon-green/5 blur-3xl opacity-20"}),f.jsxs("div",{className:`
                  relative
                  bg-black/80
                  rounded-2xl
                  border
                  border-white/10
                  overflow-hidden
                  font-mono
                  shadow-2xl
                `,children:[f.jsxs("div",{className:`
                    px-5
                    py-3
                    bg-white/5
                    border-b
                    border-white/10
                    flex
                    items-center
                    justify-between
                  `,children:[f.jsxs("div",{className:"flex gap-2",children:[f.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500/20"}),f.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-500/20"}),f.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-neon-green/30"})]}),f.jsx("span",{className:`
                      text-[8px]
                      sm:text-[9px]
                      text-gray-600
                      uppercase
                      tracking-widest
                    `,children:"USER: YASH_PANCHAL_SYS"})]}),f.jsxs("div",{className:`
                    p-5
                    sm:p-6
                    md:p-8
                    h-40
                    sm:h-48
                    text-[10px]
                    sm:text-[11px]
                    text-neon-green
                    leading-loose
                    overflow-y-auto
                    uppercase
                  `,children:[a.map((h,d)=>f.jsxs("div",{className:"flex gap-3",children:[f.jsxs("span",{className:"text-white/20",children:["[",1024+d,"]"]}),f.jsx(Z.span,{initial:{opacity:0},animate:{opacity:1},children:h})]},d)),f.jsx(Z.span,{animate:{opacity:[1,0]},transition:{duration:.8,repeat:1/0},className:`
                      inline-block
                      w-2.5
                      h-1.5
                      bg-neon-green
                      align-middle
                      ml-1
                    `})]})]})]}),f.jsxs("div",{className:`
                p-5
                sm:p-6
                bg-neon-blue/5
                border
                border-neon-blue/30
                rounded-2xl
                flex
                items-center
                justify-between
                group
              `,children:[f.jsxs("div",{className:"flex items-center gap-4",children:[f.jsx("div",{className:"p-2 bg-neon-blue/10 rounded-lg",children:f.jsx(xN,{className:"w-5 h-5 text-neon-blue"})}),f.jsxs("div",{children:[f.jsx("div",{className:`
                      text-[8px]
                      sm:text-[9px]
                      text-gray-500
                      uppercase
                      tracking-widest
                    `,children:"Future_Status"}),f.jsx("div",{className:`
                      text-xs
                      font-bold
                      text-white
                      uppercase
                    `,children:"System Architect v5.0"})]})]}),f.jsx(hx,{className:"w-5 h-5 text-neon-blue opacity-20 group-hover:opacity-100 transition-opacity"})]})]})]}),f.jsxs(Z.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},className:`
            mt-16
            md:mt-24
            text-center
            max-w-4xl
            mx-auto
            space-y-8
          `,children:[f.jsx("div",{className:`
              inline-block
              px-4
              py-2
              bg-neon-green/10
              border
              border-neon-green/30
              rounded-full
              font-mono
              text-[8px]
              sm:text-[10px]
              text-neon-green
              uppercase
              tracking-[0.3em]
            `,children:"Mission_Statement_Protocol"}),f.jsxs("h2",{className:`
              font-display
              text-2xl
              sm:text-3xl
              md:text-5xl
              font-black
              text-white
              uppercase
              italic
              tracking-tight
              leading-tight
            `,children:["Engineering secure and scalable digital ecosystems where"," ",f.jsx("span",{className:"text-neon-blue",children:"AI intelligence"})," ","meets"," ",f.jsx("span",{className:"text-neon-green",children:"resilient architecture."})]}),f.jsx("div",{className:`
              flex
              flex-wrap
              justify-center
              gap-4
              sm:gap-6
              md:gap-10
              pt-4
            `,children:[{color:"bg-neon-green",text:"Analytical_Thinker"},{color:"bg-neon-blue",text:"Security_First"},{color:"bg-white",text:"Future_Engineer"}].map((h,d)=>f.jsxs("div",{className:`
                  flex
                  items-center
                  gap-2
                `,children:[f.jsx("div",{className:`
                    w-1.5
                    h-1.5
                    rounded-full
                    ${h.color}
                  `}),f.jsx("span",{className:`
                    font-mono
                    text-[8px]
                    sm:text-[10px]
                    text-gray-500
                    uppercase
                  `,children:h.text})]},d))})]})]})]})}const qj={"neon-blue":{bg:"bg-neon-blue",text:"text-neon-blue",shadow:"shadow-[0_0_10px_rgba(0,209,255,0.3)]"},"red-500":{bg:"bg-red-500",text:"text-red-500",shadow:"shadow-[0_0_10px_rgba(239,68,68,0.3)]"},"neon-green":{bg:"bg-neon-green",text:"text-neon-green",shadow:"shadow-[0_0_10px_rgba(57,255,20,0.3)]"}},Xj=[{id:"core",title:"CORE_LOGIC_PROTOCOLS",skills:[{name:"Python",level:90,icon:f.jsx(K5,{}),desc:"Neural synthesis & automation logic."},{name:"Java",level:85,icon:f.jsx(cn,{}),desc:"Enterprise-grade system structures."},{name:"JavaScript",level:88,icon:f.jsx(Go,{}),desc:"Dynamic interface orchestration."}],color:"neon-blue"},{id:"security",title:"SECURITY_&_INTEGRITY",skills:[{name:"Cybersecurity",level:78,icon:f.jsx(Qs,{}),desc:"Offensive hardening & threat mitigation."},{name:"SQL",level:92,icon:f.jsx(I5,{}),desc:"Optimized relational data protocols."},{name:"DB Management",level:89,icon:f.jsx(_N,{}),desc:"Scaling high-concurrency clusters."}],color:"red-500"},{id:"architecture",title:"SYSTEM_ARCHITECTURE",skills:[{name:"Architecture",level:80,icon:f.jsx(aN,{}),desc:"Hyper-scalable global infrastructure."},{name:"HTML/CSS",level:95,icon:f.jsx(_5,{}),desc:"Modern responsive markup paradigms."},{name:"UI/UX Basics",level:82,icon:f.jsx(kf,{}),desc:"Human-centric digital experiences."}],color:"neon-green"}],Kj=({level:a,color:i})=>{const o=2*Math.PI*24,u=o-a/100*o;return f.jsxs("div",{className:`
        relative
        w-16
        h-16
        sm:w-[72 px]
        sm:h-[72 px]
        overflow-hidden
        shrink-0
        flex
        items-center
        justify-center
      `,children:[f.jsxs("svg",{viewBox:"0 0 56 56",className:"w-full h-full -rotate-90",children:[f.jsx("circle",{cx:"28",cy:"28",r:24,stroke:"currentColor",strokeWidth:"2.5",fill:"transparent",className:"text-white/5"}),f.jsx(Z.circle,{cx:"28",cy:"28",r:24,stroke:"currentColor",strokeWidth:"2.5",fill:"transparent",strokeDasharray:o,initial:{strokeDashoffset:o},whileInView:{strokeDashoffset:u},viewport:{once:!0},transition:{duration:1.5,ease:"easeOut"},className:i})]}),f.jsxs("span",{className:`
          absolute
          text-[9px]
          sm:text-[10px]
          font-mono
          text-white/50
        `,children:[a,"%"]})]})};function Qj(){return f.jsxs("section",{id:"skills",className:`
        py-20
        md:py-32
        bg-cyber-black
        relative
        overflow-hidden
      `,children:[f.jsx("div",{className:"absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none"}),f.jsx("div",{className:`
          absolute
          top-1/2
          left-0
          w-[800px]
          h-[800px]
          bg-neon-blue/5
          blur-[80px]
          md:blur-[150px]
          rounded-full
          -translate-x-1/2
          -translate-y-1/2
          pointer-events-none
        `}),f.jsxs("div",{className:`
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        `,children:[f.jsx(Oi,{title:"TECHNICAL_STACK",subtitle:"Operational Readiness & Competencies",number:"02"}),f.jsx("div",{className:`
            space-y-16
            md:space-y-24
          `,children:Xj.map((a,i)=>{const l=qj[a.color];return f.jsxs("div",{className:"relative",children:[f.jsxs("div",{className:`
                      flex
                      items-center
                      gap-4
                      mb-8
                      md:mb-12
                      border-b
                      border-white/5
                      pb-4
                    `,children:[f.jsx("div",{className:`
                        w-2
                        h-8
                        rounded-full
                        ${l.bg}
                        ${l.shadow}
                      `}),f.jsx("h3",{className:`
                        font-display
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-white
                        tracking-widest
                        uppercase
                      `,children:a.title}),f.jsx("div",{className:`
                        flex-1
                        h-[1px]
                        bg-gradient-to-r
                        from-white/10
                        to-transparent
                      `})]}),f.jsx("div",{className:`
                      grid
                      grid-cols-1
                      md:grid-cols-2
                      lg:grid-cols-3
                      gap-5
                      md:gap-8
                    `,children:a.skills.map((o,u)=>f.jsxs(Z.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:u*.1},viewport:{once:!0},className:`
                            group
                            relative
                            isolate
                            min-h-[320px]
                            p-5
                            sm:p-6
                            md:p-8
                            bg-cyber-gray/30
                            border
                            neon-border-blue
                            rounded-xl
                            hover:border-white/20
                            transition-all
                            duration-500
                            overflow-hidden
                            touch-manipulation
                          `,children:[f.jsx("div",{className:`
                              absolute
                              inset-0
                              bg-gradient-to-br
                              from-white/0
                              via-white/5
                              to-white/0
                              opacity-0
                              group-hover:opacity-100
                              transition-opacity
                              pointer-events-none
                            `}),f.jsxs("div",{className:"relative z-10",children:[f.jsxs("div",{className:`
                                flex
                                items-start
                                justify-between
                                gap-4
                                mb-8
                              `,children:[f.jsx("div",{className:`
                                  p-3
                                  bg-black/40
                                  rounded-lg
                                  border
                                  border-white/5
                                  text-white
                                  transition-transform
                                  md:group-hover:scale-110
                                  md:group-hover:rotate-3
                                  will-change-transform
                                `,children:f.jsx("div",{className:"w-5 h-5 sm:w-6 sm:h-6",children:o.icon})}),f.jsx(Kj,{level:o.level,color:l.text})]}),f.jsx("h4",{className:`
                                font-display
                                text-lg
                                sm:text-xl
                                font-bold
                                text-white
                                uppercase
                                tracking-tight
                                mb-3
                              `,children:o.name}),f.jsx("p",{className:`
                                text-gray-500
                                text-sm
                                font-sans
                                mb-8
                                leading-relaxed
                                min-h-[48px]
                              `,children:o.desc}),f.jsxs("div",{className:`
                                flex
                                items-center
                                gap-2
                                pt-4
                                border-t
                                border-white/5
                              `,children:[f.jsx("div",{className:`
                                  w-1.5
                                  h-1.5
                                  rounded-full
                                  bg-neon-green
                                  animate-pulse
                                `}),f.jsx("span",{className:`
                                  font-mono
                                  text-[9px]
                                  uppercase
                                  tracking-widest
                                  text-gray-500
                                `,children:"Node_Stable"})]})]})]},o.name))})]},a.id)})}),f.jsxs(Z.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:`
            mt-20
            md:mt-32
            p-5
            sm:p-6
            md:p-8
            bg-cyber-gray/40
            border
            neon-border-blue
            rounded-2xl
            flex
            flex-col
            gap-8
            overflow-hidden
            isolate
          `,children:[f.jsxs("div",{className:`
              flex
              flex-col
              gap-3
            `,children:[f.jsx("span",{className:`
                font-mono
                text-[9px]
                text-gray-600
                uppercase
                tracking-widest
              `,children:"Protocol_Health"}),f.jsx("div",{className:"flex gap-1 items-end",children:[14,22,18,28,20,26,16,24,18,22,20,16].map((a,i)=>f.jsx(Z.div,{animate:{height:[a,a+8,a]},transition:{duration:.8,repeat:1/0,delay:i*.05},className:`
                      w-1.5
                      rounded-full
                      bg-neon-blue
                      shadow-[0_0_8px_rgba(0,209,255,0.4)]
                    `},i))})]}),f.jsxs("div",{className:`
              flex
              items-center
              gap-4
            `,children:[f.jsx(Ua,{className:`
                w-5
                h-5
                text-neon-green
                animate-pulse
              `}),f.jsxs("div",{children:[f.jsx("span",{className:`
                  block
                  font-mono
                  text-[10px]
                  text-gray-600
                  uppercase
                  tracking-widest
                `,children:"Learning_In_Progress"}),f.jsx("span",{className:`
                  block
                  font-display
                  text-lg
                  sm:text-xl
                  font-bold
                  text-white
                  uppercase
                  tracking-wide
                `,children:"Quantum_Synthesis"})]})]}),f.jsxs("div",{className:"w-full",children:[f.jsxs("div",{className:`
                flex
                items-center
                justify-between
                mb-3
                gap-4
              `,children:[f.jsx("span",{className:`
                  font-mono
                  text-[9px]
                  text-gray-500
                  uppercase
                  tracking-widest
                `,children:"Mastery_Convergence"}),f.jsx("span",{className:`
                  font-mono
                  text-[9px]
                  text-neon-blue
                  uppercase
                  whitespace-nowrap
                `,children:"94.2%_OPTIMIZED"})]}),f.jsx("div",{className:`
                h-2
                bg-white/5
                rounded-full
                overflow-hidden
              `,children:f.jsx(Z.div,{initial:{width:0},whileInView:{width:"94.2%"},transition:{duration:2,delay:.5},className:`
                  h-full
                  bg-neon-blue
                  shadow-[0_0_10px_rgba(0,209,255,0.5)]
                `})})]}),f.jsxs(Z.button,{whileHover:{scale:1.03},whileTap:{scale:.98},className:`
              flex
              items-center
              justify-center
              gap-4
              px-6
              py-4
              border
              border-neon-blue/20
              bg-neon-blue/5
              rounded-full
              group
              cursor-pointer
              hover:bg-neon-blue/10
              transition-all
              duration-300
              touch-manipulation
              w-fit
              overflow-hidden
              relative
              isolate
            `,children:[f.jsx("div",{className:`
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                bg-neon-blue/5
              `}),f.jsx(Di,{className:`
                relative
                z-10
                w-4
                h-4
                text-neon-blue
                md:group-hover:scale-125
                transition-transform
              `}),f.jsx("span",{className:`
                relative
                z-10
                font-mono
                text-[9px]
                sm:text-[10px]
                text-neon-blue
                font-bold
                tracking-[0.15em]
                sm:tracking-[0.3em]
                uppercase
                whitespace-nowrap
              `,children:"Connect_Neural_Node"})]})]})]})]})}const Zj=["ALL_NODES","SYSTEMS_ARCHITECTURE","CYBER_SECURITY","STARTUP_INFRASTRUCTURE"],Sg=[{id:"01",title:"STUDENT INFO SYSTEM (SIS)",description:"Developed a scalable relational ecosystem for managing multi-departmental student records, authentication workflows, and database automation systems.",achievement:"40% LATENCY_REDUCTION",tags:["Java","SQL","Database","JavaFX"],category:"SYSTEMS_ARCHITECTURE",role:"LEAD_ARCHITECT",icon:f.jsx(cn,{className:"w-4 h-4"}),image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=1200",github:"https://github.com/yspanchal6",demo:"#"},{id:"02",title:"UIDAI HACKATHON PROTOCOL",description:"Engineered a secure Aadhaar verification dashboard with encrypted authentication workflows and real-time citizen service validation systems.",achievement:"SECURE_API_ENFORCED",tags:["Python","Cybersecurity","API","JavaScript"],category:"CYBER_SECURITY",role:"SECURITY_ENGINEER",icon:f.jsx(Qs,{className:"w-4 h-4"}),image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",github:"https://github.com/yspanchal6",demo:"#"},{id:"03",title:"MYTH STARTUP INITIATIVE",description:"Technical leadership for a modular AI-driven infrastructure prototype focused on scalable automation and decentralized architecture workflows. This sovereign-grade identity intelligence platform cross-references biometric data against government databases.",achievement:"SCALABLE_CORE_V1.0",tags:["React","AI","Python","Tailwind"],category:"STARTUP_INFRASTRUCTURE",role:"FOUNDING_CTO",icon:f.jsx(zf,{className:"w-4 h-4"}),image:"/images/myth_initiative.png",images:["/images/myth_initiative.png","https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"],github:"https://github.com/yspanchal6/deepfake.git",demo:"https://myth-system.vercel.app/"}];function Ij({project:a}){const i=a.images||[a.image],[l,o]=Y.useState(0),[u,h]=Y.useState(!1);return Y.useEffect(()=>{if(i.length<=1)return;const d=setInterval(()=>{u||o(p=>(p+1)%i.length)},4e3);return()=>clearInterval(d)},[i.length,u]),f.jsxs("div",{className:"relative w-full h-full",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[f.jsx(_n,{mode:"wait",children:f.jsx(Z.img,{loading:"lazy",src:i[l],alt:`${a.title} - View ${l+1}`,initial:{opacity:0,scale:1.1},animate:{opacity:1,scale:1},exit:{opacity:.5,scale:.95},transition:{duration:.8,ease:"easeInOut"},className:"w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110 md:group-hover:rotate-1",onError:d=>{const p=d.target;p.src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"}},l)}),i.length>1&&f.jsx("div",{className:"absolute bottom-4 right-4 flex gap-1.5 z-20",children:i.map((d,p)=>f.jsx("div",{className:`h-1 rounded-full transition-all duration-500 ${p===l?"w-4 bg-neon-blue":"w-1 bg-white/30"}`},p))})]})}function Jj(){const[a,i]=Y.useState("ALL_NODES"),l=a==="ALL_NODES"?Sg:Sg.filter(o=>o.category===a);return f.jsxs("section",{id:"projects",className:"relative py-20 md:py-32 bg-cyber-black overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 right-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-neon-green/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"}),f.jsx("div",{className:"absolute bottom-0 left-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-neon-blue/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"}),f.jsx("div",{className:"absolute inset-0 cyber-grid opacity-[0.04] pointer-events-none"}),f.jsxs("div",{className:"max-w-7xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8 relative z-10",children:[f.jsx(Oi,{title:"PROJECT_REGISTRY",subtitle:"Deployment & Architecture Showcase",number:"03"}),f.jsx("div",{className:"flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-20",children:Zj.map(o=>f.jsxs("button",{onClick:()=>i(o),className:`relative px-4 sm:px-6 py-2.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] border transition-all duration-500 ${a===o?"border-neon-blue text-white bg-neon-blue/10 shadow-[0_0_15px_rgba(0,209,255,0.2)]":"border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300"}`,children:[o,a===o&&f.jsx(Z.div,{layoutId:"activeTabGlow",className:"absolute inset-0 border border-neon-blue animate-pulse"})]},o))}),f.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10",children:f.jsx(_n,{mode:"popLayout",children:l.map((o,u)=>f.jsxs(Z.div,{layout:!0,initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},whileHover:{scale:1.02},exit:{opacity:0,scale:.95},transition:{duration:.5,delay:u*.1},className:"group relative will-change-transform",children:[f.jsx("div",{className:"absolute -inset-1 bg-gradient-to-br from-neon-blue/20 to-neon-green/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"}),f.jsxs("div",{className:"relative p-5 sm:p-6 bg-cyber-gray/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm group-hover:bg-cyber-gray/60 group-hover:border-neon-blue/30 transition-all duration-500",children:[f.jsxs("div",{className:"relative h-48 sm:h-56 rounded-xl overflow-hidden mb-8 border border-white/5",children:[f.jsx(Ij,{project:o}),f.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-80 pointer-events-none z-10"}),f.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-neon-blue/50 shadow-[0_0_15px_rgba(0,209,255,0.8)] animate-scanner z-10 pointer-events-none"}),f.jsxs("div",{className:"absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-neon-green/30 rounded-lg flex items-center gap-2 z-10",children:[f.jsx(Di,{className:"w-3 h-3 text-neon-green animate-pulse"}),f.jsx("span",{className:"font-mono text-[8px] sm:text-[9px] text-neon-green uppercase tracking-tight font-bold",children:o.achievement})]}),f.jsx("div",{className:"absolute bottom-4 left-4 z-10",children:f.jsxs("span",{className:"px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded-lg font-mono text-[8px] text-neon-blue uppercase tracking-widest flex items-center gap-2",children:[o.icon," ",o.id," // ",o.role]})})]}),f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{className:"flex items-start justify-between gap-4",children:[f.jsx("h4",{className:"font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white group-hover:text-neon-blue transition-colors leading-snug",children:o.title}),f.jsx(Of,{className:"w-4 h-4 text-gray-700 group-hover:text-neon-blue transition-colors flex-shrink-0"})]}),f.jsx("p",{className:"text-xs sm:text-[13px] text-gray-500 leading-relaxed line-clamp-3",children:o.description}),f.jsx("div",{className:"flex flex-wrap gap-2",children:o.tags.map(h=>f.jsxs("span",{className:"text-[9px] sm:text-[10px] font-mono text-gray-500 bg-white/5 border border-white/5 px-2 py-1 rounded",children:["#",h]},h))}),f.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/5",children:[f.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[f.jsxs("div",{className:"flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono text-gray-500",children:[f.jsx(cn,{className:"w-3 h-3"})," NODE_READY"]}),f.jsxs("div",{className:"flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono text-gray-500",children:[f.jsx(vN,{className:"w-3 h-3"})," V1.0.4"]})]}),f.jsxs("div",{className:"flex gap-5",children:[f.jsx(Z.a,{whileHover:{scale:1.15,rotate:10},whileTap:{scale:.95},href:o.github,target:"_blank",rel:"noopener noreferrer",className:"text-gray-500 hover:text-white transition-colors",children:f.jsx(Ys,{className:"w-5 h-5"})}),f.jsx(Z.a,{whileHover:{scale:1.15,rotate:-10},whileTap:{scale:.95},href:o.demo,target:"_blank",rel:"noopener noreferrer",className:"text-neon-blue hover:text-white transition-colors",children:f.jsx(fx,{className:"w-5 h-5"})})]})]})]})]})]},o.id))})}),f.jsxs("div",{className:"mt-20 md:mt-24 p-5 sm:p-6 md:p-8 border border-neon-green/20 rounded-2xl bg-white/[0.02] backdrop-blur-sm flex flex-wrap items-center justify-center gap-8 md:gap-12",children:[f.jsxs("div",{className:"text-center",children:[f.jsx("div",{className:"font-mono text-2xl text-white mb-1",children:"200+"}),f.jsx("div",{className:"font-mono text-[8px] sm:text-[9px] text-gray-600 uppercase tracking-widest",children:"Commits_Logged"})]}),f.jsx("div",{className:"hidden md:block w-[1px] h-10 bg-white/5"}),f.jsxs("div",{className:"text-center",children:[f.jsx("div",{className:"font-mono text-2xl text-neon-green mb-1",children:"04"}),f.jsx("div",{className:"font-mono text-[8px] sm:text-[9px] text-gray-600 uppercase tracking-widest",children:"Beta_Testing"})]}),f.jsx("div",{className:"hidden md:block w-[1px] h-10 bg-white/5"}),f.jsxs("div",{className:"text-center",children:[f.jsx("div",{className:"font-mono text-2xl text-white mb-1",children:"08"}),f.jsx("div",{className:"font-mono text-[8px] sm:text-[9px] text-gray-600 uppercase tracking-widest",children:"Active_Nodes"})]})]})]})]})}const Pj={"neon-blue":{text:"text-neon-blue",border:"border-neon-blue",glow:"from-neon-blue/10"},"neon-green":{text:"text-neon-green",border:"border-neon-green",glow:"from-neon-green/10"}},Fj=[{id:"01",title:"CYBER SECURITY ANALYST",org:"TCS Job Simulation",date:"2024",desc:"Enterprise-level vulnerability assessment, security analysis, and threat mitigation workflows.",icon:f.jsx(qo,{className:"w-5 h-5 sm:w-6 sm:h-6"}),color:"neon-blue"},{id:"02",title:"ETHICAL HACKING ESSENTIALS",org:"Cybersecurity Training",date:"2023",desc:"Hands-on ethical hacking concepts including penetration testing and network security fundamentals.",icon:f.jsx(rN,{className:"w-5 h-5 sm:w-6 sm:h-6"}),color:"neon-green"},{id:"03",title:"CYBER AWARENESS PROTOCOL",org:"Security Governance",date:"2023",desc:"Focused on social engineering defense, digital hygiene, and enterprise-level cybersecurity awareness.",icon:f.jsx(Go,{className:"w-5 h-5 sm:w-6 sm:h-6"}),color:"neon-blue"},{id:"04",title:"CYBER SECURITY ENGINEERING",org:"Tech Elecon Pvt Ltd",date:"2024",desc:"Real-world cybersecurity engineering internship focused on monitoring, infrastructure security, and operational defense.",icon:f.jsx(N5,{className:"w-5 h-5 sm:w-6 sm:h-6"}),color:"neon-green"}];function $j(){return f.jsxs("section",{id:"certifications",className:`
        relative
        py-20
        md:py-32
        bg-cyber-black
        overflow-hidden
        border-t
        border-white/5
      `,children:[f.jsx("div",{className:`
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,10,0.05),transparent_50%)]
          pointer-events-none
        `}),f.jsx("div",{className:`
          absolute
          bottom-0
          right-0
          w-[350px]
          md:w-[600px]
          h-[350px]
          md:h-[600px]
          bg-neon-blue/5
          blur-[80px]
          md:blur-[120px]
          rounded-full
          pointer-events-none
        `}),f.jsx("div",{className:"absolute inset-0 cyber-grid opacity-[0.04] pointer-events-none"}),f.jsxs("div",{className:`
          max-w-7xl
          mx-auto
          overflow-hidden
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        `,children:[f.jsx(Oi,{title:"ACCREDITATION_VAULT",subtitle:"Verified Skills & Security Certifications",number:"05"}),f.jsx("div",{className:`
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-5
            md:gap-6
            mt-12
            md:mt-20
          `,children:Fj.map((a,i)=>{const l=Pj[a.color];return f.jsxs(Z.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:i*.1},viewport:{once:!0},className:`
                    group
                    relative
                    h-full
                  `,children:[f.jsx("div",{className:`
                      absolute
                      -inset-[1px]
                      rounded-2xl
                      bg-gradient-to-br
                      ${l.glow}
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      blur-xl
                      transition-opacity
                      duration-500
                    `}),f.jsxs("div",{className:`
                      relative
                      h-full
                      p-5
                      sm:p-6
                      lg:p-8
                      bg-cyber-gray/40
                      border
                      rounded-2xl
                      overflow-hidden
                      backdrop-blur-sm
                      md:backdrop-blur-md
                      transition-all
                      duration-500
                      hover:border-white/20
                      ${l.border}/30
                    `,children:[f.jsx("div",{className:"absolute inset-0 cyber-grid opacity-[0.03]"}),f.jsxs("div",{className:"relative z-10 flex flex-col h-full",children:[f.jsxs("div",{className:"flex justify-between items-start mb-6",children:[f.jsx("div",{className:`
                            p-3
                            sm:p-4
                            rounded-xl
                            bg-black/40
                            border
                            border-white/5
                            ${l.text}
                            transition-transform
                            duration-500
                            group-hover:scale-110
                          `,children:a.icon}),f.jsx(hx,{className:`
                            w-4
                            h-4
                            text-gray-700
                            group-hover:text-neon-green
                            transition-colors
                          `})]}),f.jsxs("div",{className:"mb-5",children:[f.jsxs("div",{className:`
                            flex
                            flex-wrap
                            items-center
                            gap-2
                            mb-2
                          `,children:[f.jsx("span",{className:`
                              font-mono
                              text-[9px]
                              text-gray-600
                              uppercase
                              tracking-widest
                            `,children:a.date}),f.jsx("div",{className:"w-1 h-1 rounded-full bg-white/20"}),f.jsx("span",{className:`
                              font-mono
                              text-[9px]
                              uppercase
                              tracking-widest
                              ${l.text}
                            `,children:a.org})]}),f.jsx("h4",{className:`
                            font-display
                            text-base
                            sm:text-lg
                            font-bold
                            text-white
                            uppercase
                            tracking-tight
                            leading-tight
                            transition-colors
                            group-hover:text-neon-blue
                          `,children:a.title})]}),f.jsx("p",{className:`
                          text-[11px]
                          sm:text-xs
                          text-gray-500
                          leading-relaxed
                          font-sans
                          line-clamp-4
                          flex-grow
                        `,children:a.desc}),f.jsxs("div",{className:`
                          pt-6
                          mt-6
                          border-t
                          border-white/5
                          flex
                          items-center
                          justify-between
                          gap-4
                        `,children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(Di,{className:"w-3 h-3 text-neon-green animate-pulse"}),f.jsx("span",{className:`
                              font-mono
                              text-[8px]
                              text-gray-600
                              uppercase
                              tracking-widest
                            `,children:"VERIFIED_BLOCK"})]}),f.jsx(Z.button,{whileHover:{scale:1.1},whileTap:{scale:.95},className:`
                            p-2
                            bg-white/5
                            border
                            border-white/10
                            rounded-lg
                            text-gray-500
                            hover:text-white
                            transition-colors
                          `,children:f.jsx(fx,{className:"w-4 h-4"})})]})]})]})]},a.id)})}),f.jsxs(Z.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:`
            mt-16
            md:mt-24
            p-5
            sm:p-6
            md:p-8
            bg-gradient-to-r
            from-cyber-gray/40
            to-transparent
            border
            border-white/5
            rounded-2xl
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
            md:gap-10
            overflow-hidden
            relative
          `,children:[f.jsx("div",{className:`
              absolute
              top-0
              right-0
              w-60
              h-60
              bg-neon-blue/5
              blur-3xl
              pointer-events-none
            `}),f.jsxs("div",{className:`
              flex
              flex-col
              sm:flex-row
              items-center
              gap-6
              md:gap-8
              relative
              z-10
            `,children:[f.jsxs("div",{className:"relative flex-shrink-0",children:[f.jsx("div",{className:`
                  w-14
                  h-14
                  sm:w-16
                  sm:h-16
                  rounded-full
                  border-2
                  border-neon-blue/20
                  flex
                  items-center
                  justify-center
                  bg-black/30
                `,children:f.jsx(cn,{className:"w-7 h-7 sm:w-8 sm:h-8 text-neon-blue animate-pulse"})}),f.jsx(Z.div,{animate:{rotate:360},transition:{duration:8,repeat:1/0,ease:"linear"},className:`
                  absolute
                  inset-0
                  border
                  border-dashed
                  border-neon-blue
                  rounded-full
                `})]}),f.jsxs("div",{className:"text-center sm:text-left",children:[f.jsxs("div",{className:"flex items-center gap-2 justify-center sm:justify-start mb-2",children:[f.jsx(zf,{className:"w-4 h-4 text-neon-green"}),f.jsx("span",{className:`
                    font-mono
                    text-[9px]
                    text-neon-green
                    uppercase
                    tracking-widest
                  `,children:"ACTIVE_LEARNING_PROTOCOL"})]}),f.jsx("h4",{className:`
                  font-display
                  text-lg
                  sm:text-xl
                  font-bold
                  text-white
                  uppercase
                  tracking-widest
                `,children:"Neural Capability Score"}),f.jsx("p",{className:`
                  text-xs
                  sm:text-sm
                  text-gray-500
                  font-mono
                  mt-2
                  leading-relaxed
                  max-w-xl
                `,children:"Continuous learning architecture focused on cybersecurity, scalable systems, AI, and advanced software engineering workflows."})]})]}),f.jsx("div",{className:`
              flex
              items-end
              gap-4
              relative
              z-10
            `,children:[85,92,78,88].map((a,i)=>f.jsxs("div",{className:`
                    flex
                    flex-col
                    items-center
                    gap-2
                  `,children:[f.jsx("div",{className:`
                      relative
                      h-10
                      sm:h-12
                      w-2
                      bg-white/5
                      rounded-full
                      overflow-hidden
                    `,children:f.jsx(Z.div,{initial:{height:0},whileInView:{height:`${a}%`},transition:{duration:1.5,delay:i*.2},className:`
                        absolute
                        bottom-0
                        left-0
                        w-full
                        bg-neon-green
                        rounded-full
                      `})}),f.jsxs("span",{className:`
                      font-mono
                      text-[8px]
                      text-gray-600
                    `,children:[a,"%"]})]},i))})]})]})]})}const Wj={blue:{border:"border-neon-blue",text:"text-neon-blue",bg:"bg-neon-blue",glow:"shadow-[0_0_25px_rgba(0,209,255,0.35)]",gradient:"from-neon-blue/20"},green:{border:"border-neon-green",text:"text-neon-green",bg:"bg-neon-green",glow:"shadow-[0_0_25px_rgba(0,255,0,0.35)]",gradient:"from-neon-green/20"},red:{border:"border-red-500",text:"text-red-500",bg:"bg-red-500",glow:"shadow-[0_0_25px_rgba(239,68,68,0.35)]",gradient:"from-red-500/20"}},eA=[{date:"2021 - 2025",title:"DIPLOMA IN INFORMATION TECHNOLOGY",org:"B & B Institute of Technology, Vallabh Vidyanagar (GTU)",desc:"Built strong engineering foundations through hands-on learning in programming, networking, database management, and system fundamentals. Developed practical technical skills through real-world technology exposure.",metrics:["Python","SQL","Networking","Web Dev"],type:"FOUNDATION_PHASE",color:"blue",icon:f.jsx($5,{className:"w-5 h-5"})},{date:"SUMMER 2024",title:"CYBER SECURITY ENGINEERING INTERN",org:"Tech Elecon Pvt Ltd",desc:"Worked on cybersecurity engineering concepts including security analysis, vulnerability awareness, and technical security workflows. Gained practical exposure to real-world security operations.",metrics:["Cybersecurity","Security Analysis","Ethical Hacking","Security Engineering"],type:"SECURITY_OPERATION_PHASE",color:"red",icon:f.jsx(qo,{className:"w-5 h-5"})},{date:"2025 - PRESENT",title:"B.TECH IN INFORMATION TECHNOLOGY",org:"Madhuben & Bhanubhai Patel Institute of Technology (CVMU)",desc:"Currently focusing on Cybersecurity, System Architecture, AI-driven systems, and scalable infrastructures while balancing academics with practical technical projects and GATE preparation.",metrics:["Cybersecurity","AI Systems","Scalable Arch","GATE Prep"],type:"ADVANCED_ENGINEERING_PHASE",color:"green",icon:f.jsx(cn,{className:"w-5 h-5"})},{date:"2026 - PRESENT",title:"TECHNICAL LEADERSHIP & ARCHITECTURE",org:"MYTH Startup Initiative & Projects",desc:"Focused on scalable system thinking, architecture planning, and engineering leadership. Spearheading technical roadmaps and innovation-driven development.",metrics:["System Design","Architecture","Leadership","Scalability"],type:"SYSTEM_ARCHITECT_PHASE",color:"blue",icon:f.jsx(qN,{className:"w-5 h-5"})}];function tA(){return f.jsxs("section",{id:"experience",className:`
        py-20
        md:py-32
        bg-cyber-black
        relative
        overflow-hidden
      `,children:[f.jsx("div",{className:"absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none"}),f.jsx("div",{className:`
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          md:w-[1000px]
          h-[700px]
          md:h-[1000px]
          bg-neon-green/5
          blur-[100px]
          md:blur-[180px]
          rounded-full
          pointer-events-none
        `}),f.jsx("div",{className:"hidden md:block",children:[...Array(12)].map((a,i)=>f.jsx(Z.div,{className:"absolute w-1 h-1 bg-white/20 rounded-full",animate:{y:[Math.random()*800,-800],opacity:[0,.5,0],scale:[0,1.5,0]},transition:{duration:10+Math.random()*10,repeat:1/0,ease:"linear"},style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`}},i))}),f.jsxs("div",{className:`
          max-w-7xl
          mx-auto
          overflow-hidden
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        `,children:[f.jsx(Oi,{title:"MISSION_LOG",subtitle:"Operational Journey & Progression",number:"04"}),f.jsxs("div",{className:"relative mt-16 md:mt-20",children:[f.jsx(Z.div,{initial:{height:0},whileInView:{height:"100%"},viewport:{once:!0},transition:{duration:1.5,ease:"easeInOut"},className:`
              absolute
              left-3
              md:left-1/2
              top-4
              bottom-4
              w-[2px]
              bg-gradient-to-b
              from-neon-blue
              via-neon-green
              to-transparent
              md:-translate-x-1/2
              pointer-events-none
            `}),f.jsx("div",{className:"space-y-16 md:space-y-24",children:eA.map((a,i)=>{const l=Wj[a.color];return f.jsxs(Z.div,{initial:{opacity:0,x:i%2===0?-50:50},whileInView:{opacity:1,x:0},transition:{duration:.8,delay:i*.1},viewport:{once:!0},className:`
                    relative
                    flex
                    flex-col
                    md:flex-row
                    items-start
                    md:items-center
                    gap-10
                    md:gap-12
                    ${i%2===0?"md:flex-row-reverse":""}
                  `,children:[f.jsxs("div",{className:`
                      absolute
                      left-3
                      md:left-1/2
                      top-2
                      md:top-1/2
                      -translate-x-1/2
                      md:-translate-y-1/2
                      z-20
                    `,children:[f.jsx("div",{className:`
                        w-6
                        h-6
                        md:w-8
                        md:h-8
                        rounded-full
                        bg-cyber-black
                        border-2
                        ${l.border}
                        flex
                        items-center
                        justify-center
                        ${l.glow}
                      `,children:f.jsx("div",{className:`
                          w-2
                          h-2
                          md:w-3
                          md:h-3
                          rounded-full
                          ${l.bg}
                          animate-pulse
                        `})}),f.jsx("div",{className:`
                        absolute
                        inset-0
                        rounded-full
                        border
                        ${l.border}
                        animate-ping
                        opacity-20
                      `})]}),f.jsx("div",{className:`
                      hidden
                      md:block
                      w-1/2
                      px-12
                      ${i%2===0?"text-left":"text-right"}
                    `,children:f.jsxs("div",{className:`
                        flex
                        flex-col
                        ${i%2===0?"items-start":"items-end"}
                      `,children:[f.jsx("span",{className:`
                          font-mono
                          text-sm
                          font-bold
                          uppercase
                          tracking-[0.5em]
                          mb-2
                          ${l.text}
                        `,children:a.date}),f.jsxs("div",{className:`
                          flex
                          items-center
                          gap-2
                          text-gray-500
                          font-mono
                          text-[10px]
                          uppercase
                        `,children:[f.jsx(q5,{className:"w-3 h-3"}),"Phase_Status: Synchronized"]})]})}),f.jsx("div",{className:`
                      w-full
                      md:w-1/2
                      pl-10
                      md:pl-0
                    `,children:f.jsxs("div",{className:`
                        group
                        relative
                        p-5
                        sm:p-6
                        lg:p-8
                        bg-cyber-gray/40
                        border
                        ${l.border}
                        rounded-2xl
                        backdrop-blur-md
                        md:backdrop-blur-xl
                        transition-all
                        duration-500
                        hover:border-white/20
                        hover:bg-white/[0.05]
                        ${i%2===0?"md:mr-12":"md:ml-12"}
                      `,children:[f.jsx("div",{className:`
                          absolute
                          -inset-[1px]
                          bg-gradient-to-br
                          ${l.gradient}
                          via-transparent
                          to-transparent
                          rounded-2xl
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-500
                          -z-10
                        `}),f.jsx("div",{className:`
                          absolute
                          top-0
                          right-0
                          p-5
                          md:p-6
                          opacity-5
                          group-hover:opacity-20
                          transition-opacity
                          duration-500
                          transform
                          group-hover:rotate-12
                        `,children:a.icon}),f.jsx("div",{className:"md:hidden mb-4",children:f.jsx("span",{className:`
                            font-mono
                            text-[10px]
                            uppercase
                            tracking-[0.3em]
                            font-bold
                            ${l.text}
                          `,children:a.date})}),f.jsxs("div",{className:"mb-6",children:[f.jsxs("span",{className:`
                            inline-block
                            font-mono
                            text-[9px]
                            sm:text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            pb-1
                            border-b
                            ${l.border}
                            ${l.text}
                          `,children:["[ ",a.type," ]"]}),f.jsx("h3",{className:`
                            font-display
                            text-xl
                            sm:text-2xl
                            font-bold
                            text-white
                            uppercase
                            mt-4
                            leading-tight
                          `,children:a.title}),f.jsxs("div",{className:`
                            flex
                            items-start
                            gap-2
                            text-gray-400
                            font-mono
                            text-[10px]
                            sm:text-[11px]
                            mt-3
                            uppercase
                            tracking-wider
                          `,children:[f.jsx(dN,{className:"w-3.5 h-3.5 text-gray-600 mt-[1px]"}),f.jsx("span",{children:a.org})]})]}),f.jsx("p",{className:`
                          text-gray-500
                          text-sm
                          leading-relaxed
                          mb-8
                          font-sans
                        `,children:a.desc}),f.jsx("div",{className:`
                          flex
                          flex-wrap
                          gap-2
                          sm:gap-3
                          pt-6
                          border-t
                          border-white/5
                        `,children:a.metrics.map((o,u)=>f.jsxs("div",{className:`
                                px-3
                                py-1.5
                                bg-white/5
                                border
                                border-white/5
                                rounded-md
                                flex
                                items-center
                                gap-2
                                transition-colors
                                hover:border-white/10
                              `,children:[f.jsx("div",{className:`
                                  w-1
                                  h-1
                                  rounded-full
                                  ${l.bg}
                                `}),f.jsx("span",{className:`
                                  font-mono
                                  text-[10px]
                                  text-gray-400
                                  uppercase
                                  tracking-tight
                                `,children:o})]},u))})]})})]},i)})})]}),f.jsxs(Z.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},className:`
            mt-20
            md:mt-32
            p-6
            md:p-8
            bg-white/[0.02]
            border
            border-white/5
            rounded-3xl
            backdrop-blur-sm
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-8
            text-center
            md:text-left
          `,children:[f.jsxs("div",{className:"space-y-2",children:[f.jsx("div",{className:`
                font-mono
                text-[10px]
                text-neon-blue
                uppercase
                tracking-[0.4em]
              `,children:"Current_Trajectory"}),f.jsx("h4",{className:`
                font-display
                text-lg
                md:text-xl
                font-bold
                text-white
                uppercase
                tracking-tight
              `,children:"System Architecture & Engineering Mastery"})]}),f.jsxs("div",{className:"flex flex-wrap justify-center gap-8",children:[f.jsxs("div",{className:"text-center",children:[f.jsx("div",{className:"font-mono text-neon-green text-xl font-bold",children:"2021"}),f.jsx("div",{className:`
                  font-mono
                  text-[9px]
                  text-gray-600
                  uppercase
                `,children:"Genesis"})]}),f.jsx("div",{className:"w-[1px] h-10 bg-white/5 hidden md:block"}),f.jsxs("div",{className:"text-center",children:[f.jsx("div",{className:"font-mono text-neon-blue text-xl font-bold",children:"ACTIVE"}),f.jsx("div",{className:`
                  font-mono
                  text-[9px]
                  text-gray-600
                  uppercase
                `,children:"Execution"})]})]})]})]})]})}class Zs{constructor(i=0,l="Network Error"){this.status=i,this.text=l}}const nA=()=>{if(!(typeof localStorage>"u"))return{get:a=>Promise.resolve(localStorage.getItem(a)),set:(a,i)=>Promise.resolve(localStorage.setItem(a,i)),remove:a=>Promise.resolve(localStorage.removeItem(a))}},ft={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:nA()},Uf=a=>a?typeof a=="string"?{publicKey:a}:a.toString()==="[object Object]"?a:{}:{},aA=(a,i="https://api.emailjs.com")=>{if(!a)return;const l=Uf(a);ft.publicKey=l.publicKey,ft.blockHeadless=l.blockHeadless,ft.storageProvider=l.storageProvider,ft.blockList=l.blockList,ft.limitRate=l.limitRate,ft.origin=l.origin||i},_x=async(a,i,l={})=>{const o=await fetch(ft.origin+a,{method:"POST",headers:l,body:i}),u=await o.text(),h=new Zs(o.status,u);if(o.ok)return h;throw h},Dx=(a,i,l)=>{if(!a||typeof a!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!i||typeof i!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!l||typeof l!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},iA=a=>{if(a&&a.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Rx=a=>a.webdriver||!a.languages||a.languages.length===0,zx=()=>new Zs(451,"Unavailable For Headless Browser"),sA=(a,i)=>{if(!Array.isArray(a))throw"The BlockList list has to be an array";if(typeof i!="string")throw"The BlockList watchVariable has to be a string"},lA=a=>{var i;return!((i=a.list)!=null&&i.length)||!a.watchVariable},oA=(a,i)=>a instanceof FormData?a.get(i):a[i],kx=(a,i)=>{if(lA(a))return!1;sA(a.list,a.watchVariable);const l=oA(i,a.watchVariable);return typeof l!="string"?!1:a.list.includes(l)},Ox=()=>new Zs(403,"Forbidden"),rA=(a,i)=>{if(typeof a!="number"||a<0)throw"The LimitRate throttle has to be a positive number";if(i&&typeof i!="string")throw"The LimitRate ID has to be a non-empty string"},cA=async(a,i,l)=>{const o=Number(await l.get(a)||0);return i-Date.now()+o},Vx=async(a,i,l)=>{if(!i.throttle||!l)return!1;rA(i.throttle,i.id);const o=i.id||a;return await cA(o,i.throttle,l)>0?!0:(await l.set(o,Date.now().toString()),!1)},Lx=()=>new Zs(429,"Too Many Requests"),uA=async(a,i,l,o)=>{const u=Uf(o),h=u.publicKey||ft.publicKey,d=u.blockHeadless||ft.blockHeadless,p=u.storageProvider||ft.storageProvider,y={...ft.blockList,...u.blockList},g={...ft.limitRate,...u.limitRate};return d&&Rx(navigator)?Promise.reject(zx()):(Dx(h,a,i),iA(l),l&&kx(y,l)?Promise.reject(Ox()):await Vx(location.pathname,g,p)?Promise.reject(Lx()):_x("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:h,service_id:a,template_id:i,template_params:l}),{"Content-type":"application/json"}))},fA=a=>{if(!a||a.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},dA=a=>typeof a=="string"?document.querySelector(a):a,hA=async(a,i,l,o)=>{const u=Uf(o),h=u.publicKey||ft.publicKey,d=u.blockHeadless||ft.blockHeadless,p=ft.storageProvider||u.storageProvider,y={...ft.blockList,...u.blockList},g={...ft.limitRate,...u.limitRate};if(d&&Rx(navigator))return Promise.reject(zx());const b=dA(l);Dx(h,a,i),fA(b);const v=new FormData(b);return kx(y,v)?Promise.reject(Ox()):await Vx(location.pathname,g,p)?Promise.reject(Lx()):(v.append("lib_version","4.4.1"),v.append("service_id",a),v.append("template_id",i),v.append("user_id",h),_x("/api/v1.0/email/send-form",v))},mA={init:aA,send:uA,sendForm:hA,EmailJSResponseStatus:Zs},pA={"neon-blue":{text:"text-neon-blue",border:"neon-border-blue"},"neon-green":{text:"text-neon-green",border:"neon-border-green"}},gA=[{icon:f.jsx(uN,{}),label:"Neural_Endpoint",value:"yspanchal6@gmail.com",color:"neon-blue",link:"mailto:yspanchal6@gmail.com"},{icon:f.jsx(dx,{}),label:"Social_Linkage",value:"linkedin/yashpanchal2106",color:"neon-green",link:"https://linkedin.com/in/yashpanchal2106"},{icon:f.jsx(Ys,{}),label:"Source_Access",value:"github/yspanchal6",color:"neon-blue",link:"https://github.com/yspanchal6"},{icon:f.jsx(Go,{}),label:"Web_Locator",value:"yashpanchal.sys",color:"neon-green",link:"#"}];function yA(){const a=Y.useRef(null),[i,l]=Y.useState({name:"",email:"",type:"Project",message:""}),[o,u]=Y.useState({}),[h,d]=Y.useState(!1),[p,y]=Y.useState(!1),[g,b]=Y.useState(!1),v=()=>{const T={};i.name.trim()||(T.name="IDENTITY_REQUIRED");const C=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return i.email.trim()?C.test(i.email)||(T.email="INVALID_ENCRYPTION_FORMAT"):T.email="CHANNEL_REQUIRED",u(T),Object.keys(T).length===0},S=async T=>{if(T.preventDefault(),v()){d(!0),b(!1);try{const C={name:i.name,email:i.email,category:i.type,message:i.message};await mA.send("service_g2h15ax","template_kmpcv56",C,"v4YIb6NEEeW4CXkZc"),y(!0),l({name:"",email:"",type:"Project",message:""}),setTimeout(()=>{y(!1)},8e3)}catch(C){console.error("Transmission_Failure:",C),b(!0),setTimeout(()=>b(!1),8e3)}finally{d(!1)}}};return f.jsxs("section",{id:"contact",className:`
        py-20
        md:py-32
        bg-cyber-black
        relative
        overflow-hidden
      `,children:[f.jsx("div",{className:`
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          md:w-[1000px]
          h-[700px]
          md:h-[1000px]
          bg-neon-blue/5
          rounded-full
          blur-[80px]
          md:blur-[150px]
          pointer-events-none
        `}),f.jsx("div",{className:`
          absolute
          bottom-0
          right-0
          w-[250px]
          md:w-[400px]
          h-[250px]
          md:h-[400px]
          bg-neon-green/5
          rounded-full
          blur-[60px]
          md:blur-[100px]
          pointer-events-none
        `}),f.jsx("div",{className:"absolute inset-0 cyber-grid opacity-[0.04] pointer-events-none"}),f.jsxs("div",{className:`
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
          overflow-hidden
        `,children:[f.jsx(Oi,{title:"TRANSMISSION_HUB",subtitle:"Establish Secure Link-Up",number:"06"}),f.jsxs("div",{className:`
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-10
            md:gap-16
          `,children:[f.jsxs(Z.div,{initial:{opacity:0,x:-40},whileInView:{opacity:1,x:0},transition:{duration:.7},viewport:{once:!0},className:`
              lg:col-span-5
              space-y-10
            `,children:[f.jsxs("div",{className:"space-y-6",children:[f.jsxs("h3",{className:`
                  font-display
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-bold
                  uppercase
                  leading-tight
                  text-white
                `,children:["Initiate",f.jsx("br",{}),f.jsx("span",{className:"text-neon-blue",children:"Digital Handshake."})]}),f.jsx("p",{className:`
                  text-base
                  sm:text-lg
                  text-gray-400
                  leading-relaxed
                  max-w-md
                `,children:"Bridging the gap between raw code and secure scalable infrastructure. Let's collaborate on futuristic engineering systems and digital resilience."}),f.jsx("div",{className:`
                  p-4
                  rounded-xl
                  bg-neon-green/5
                  border
                  neon-border-green
                `,children:f.jsxs("p",{className:`
                    text-xs
                    font-mono
                    text-neon-green
                    leading-relaxed
                  `,children:[f.jsx("span",{className:"opacity-50",children:'"TECH_QUOTE":'})," ",'"Security is not an afterthought. It is the foundation."']})})]}),f.jsxs("div",{className:`
                relative
                overflow-hidden
                p-5
                sm:p-6
                rounded-2xl
                bg-cyber-gray/30
                border
                neon-border-blue
                backdrop-blur-sm
                md:backdrop-blur-xl
              `,children:[f.jsx("div",{className:`
                  absolute
                  top-0
                  left-0
                  w-full
                  h-[1px]
                  bg-gradient-to-r
                  from-transparent
                  via-neon-blue/40
                  to-transparent
                `}),f.jsxs("div",{className:`
                  flex
                  items-center
                  justify-between
                  gap-4
                  mb-6
                `,children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(Ua,{className:"w-4 h-4 text-neon-blue animate-pulse"}),f.jsx("span",{className:`
                      font-mono
                      text-[8px]
                      sm:text-[9px]
                      text-gray-500
                      uppercase
                      tracking-widest
                    `,children:"Signal_Status: Optimal"})]}),f.jsx("div",{className:`
                    px-2
                    py-1
                    rounded
                    bg-neon-blue/10
                    border
                    border-neon-blue/30
                    text-[8px]
                    font-mono
                    text-neon-blue
                  `,children:"ENCRYPTED_V2"})]}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:`
                    flex
                    items-center
                    justify-between
                    gap-4
                  `,children:[f.jsx("span",{className:`
                      font-mono
                      text-[10px]
                      text-gray-400
                    `,children:"Transmission_Security"}),f.jsx("span",{className:`
                      font-mono
                      text-[10px]
                      text-neon-green
                    `,children:"AUTHENTICATED"})]}),f.jsx("div",{className:`
                    h-1
                    rounded-full
                    overflow-hidden
                    bg-white/5
                  `,children:f.jsx(Z.div,{initial:{width:0},whileInView:{width:"100%"},transition:{duration:1.5},className:`
                      h-full
                      bg-neon-blue
                      shadow-[0_0_10px_rgba(0,209,255,0.5)]
                    `})})]})]}),f.jsx("div",{className:`
                grid
                grid-cols-1
                md:grid-cols-2
                gap-4
              `,children:gA.map((T,C)=>{const k=pA[T.color];return f.jsxs(Z.a,{href:T.link,target:"_blank",rel:"noreferrer",whileHover:{scale:1.02},className:`
                        p-4
                        sm:p-5
                        rounded-xl
                        bg-cyber-gray/30
                        border
                        ${k.border}
                        hover:border-white/20
                        transition-all
                        group
                        touch-manipulation
                      `,children:[f.jsx("div",{className:`
                          p-2
                          rounded-lg
                          w-fit
                          mb-4
                          bg-black/40
                          ${k.text}
                        `,children:T.icon}),f.jsx("div",{className:`
                          font-mono
                          text-[9px]
                          text-gray-600
                          uppercase
                          tracking-widest
                          mb-1
                        `,children:T.label}),f.jsx("div",{className:`
                          font-mono
                          text-xs
                          text-white
                          truncate
                        `,children:T.value})]},C)})})]}),f.jsx(Z.div,{initial:{opacity:0,x:40},whileInView:{opacity:1,x:0},transition:{duration:.7},viewport:{once:!0},className:`
              lg:col-span-7
            `,children:f.jsxs("form",{ref:a,onSubmit:S,className:`
                relative
                space-y-8
                rounded-2xl
                p-5
                sm:p-8
                md:p-10
                bg-cyber-gray/30
                border
                neon-border-blue
                backdrop-blur-sm
                md:backdrop-blur-xl
                overflow-hidden
              `,children:[f.jsx("div",{className:`
                  absolute
                  top-0
                  left-0
                  w-full
                  h-[1px]
                  bg-gradient-to-r
                  from-transparent
                  via-neon-blue/40
                  to-transparent
                `}),f.jsxs("div",{className:`
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-5
                  md:gap-8
                `,children:[f.jsxs("div",{className:"space-y-3",children:[f.jsxs("label",{className:`
                      flex
                      justify-between
                      gap-3
                      font-mono
                      text-[10px]
                      text-neon-blue
                      uppercase
                      tracking-[0.25em]
                    `,children:["User_Identity",f.jsx(_n,{children:o.name&&f.jsxs(Z.span,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0},className:`
                            flex
                            items-center
                            gap-1
                            text-[8px]
                            text-red-500
                          `,children:[f.jsx(Cu,{className:"w-2 h-2"}),o.name]})})]}),f.jsx("input",{type:"text",placeholder:"ENTER_NAME",value:i.name,onChange:T=>l({...i,name:T.target.value}),className:`
                      w-full
                      rounded-xl
                      bg-black/40
                      border
                      px-4
                      sm:px-5
                      py-3.5
                      sm:py-4
                      font-mono
                      text-xs
                      text-white
                      focus:outline-none
                      transition-all

                      ${o.name?"border-red-500/50":"border-white/10 focus:border-neon-blue"}
                    `})]}),f.jsxs("div",{className:"space-y-3",children:[f.jsxs("label",{className:`
                      flex
                      justify-between
                      gap-3
                      font-mono
                      text-[10px]
                      text-neon-blue
                      uppercase
                      tracking-[0.25em]
                    `,children:["Communication_Channel",f.jsx(_n,{children:o.email&&f.jsxs(Z.span,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0},className:`
                            flex
                            items-center
                            gap-1
                            text-[8px]
                            text-red-500
                          `,children:[f.jsx(Cu,{className:"w-2 h-2"}),o.email]})})]}),f.jsx("input",{type:"email",placeholder:"USER@DOMAIN.SYS",value:i.email,onChange:T=>l({...i,email:T.target.value}),className:`
                      w-full
                      rounded-xl
                      bg-black/40
                      border
                      px-4
                      sm:px-5
                      py-3.5
                      sm:py-4
                      font-mono
                      text-xs
                      text-white
                      focus:outline-none
                      transition-all

                      ${o.email?"border-red-500/50":"border-white/10 focus:border-neon-blue"}
                    `})]})]}),f.jsxs("div",{className:"space-y-3",children:[f.jsx("label",{className:`
                    font-mono
                    text-[10px]
                    text-neon-blue
                    uppercase
                    tracking-[0.25em]
                  `,children:"Payload_Description"}),f.jsx("div",{className:"flex flex-wrap gap-3",children:["Project","Collab","Security","Other"].map(T=>f.jsx("button",{type:"button",onClick:()=>l({...i,type:T}),className:`
                          px-3
                          sm:px-4
                          py-2.5
                          rounded-lg
                          border
                          font-mono
                          text-[9px]
                          transition-all
                          touch-manipulation

                          ${i.type===T?`
                                bg-neon-blue/20
                                border-neon-blue
                                text-white
                              `:`
                                bg-white/5
                                border-white/10
                                text-gray-500
                                hover:text-white
                              `}
                        `,children:T},T))})]}),f.jsxs("div",{className:"space-y-3",children:[f.jsx("label",{className:`
                    font-mono
                    text-[10px]
                    text-neon-blue
                    uppercase
                    tracking-[0.25em]
                  `,children:"Message_Data_Stream"}),f.jsx("textarea",{rows:4,style:{minHeight:"120px"},placeholder:"INPUT_TRANSMISSION_DATA_HERE...",value:i.message,onChange:T=>l({...i,message:T.target.value}),className:`
                    w-full
                    resize-none
                    rounded-xl
                    bg-black/40
                    border
                    border-white/10
                    px-4
                    sm:px-5
                    py-4
                    font-mono
                    text-xs
                    text-white
                    focus:outline-none
                    focus:border-neon-blue
                    transition-all
                  `})]}),f.jsxs("button",{type:"submit",disabled:h||p,className:`
                  relative
                  overflow-hidden
                  w-full
                  py-4
                  sm:py-5
                  rounded-xl
                  font-mono
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  sm:tracking-[0.4em]
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition-all
                  touch-manipulation

                  ${p?"bg-neon-green text-black":g?"bg-red-500 text-white":"bg-neon-blue text-black hover:bg-white"}
                `,children:[f.jsx("span",{className:"relative z-10",children:h?"UPLOADING...":p?"TRANSMISSION_SUCCESSFUL":g?"PROTOCOL_ERROR":"UPLOAD_MESSAGE"}),h?f.jsx(lN,{className:"relative z-10 w-5 h-5 animate-spin text-black"}):p?f.jsx(Y5,{className:"relative z-10 w-5 h-5"}):g?f.jsx(Cu,{className:"relative z-10 w-5 h-5"}):f.jsx(AN,{className:"relative z-10 w-5 h-5"}),f.jsx(_n,{children:h&&f.jsx(Z.div,{initial:{scaleX:0},animate:{scaleX:1},exit:{opacity:0},style:{originX:0},transition:{duration:2,ease:"linear",repeat:1/0},className:"absolute bottom-0 left-0 right-0 h-1 bg-black/40 z-20"})}),!p&&f.jsx("div",{className:`
                      absolute
                      inset-0
                      opacity-0
                      hover:opacity-100
                      transition-opacity
                      bg-gradient-to-r
                      from-neon-blue
                      via-white
                      to-neon-blue
                    `})]}),f.jsxs("div",{className:`
                  flex
                  items-center
                  justify-center
                  gap-3
                  pt-2
                  opacity-60
                `,children:[f.jsx(qo,{className:"w-4 h-4 text-neon-green"}),f.jsx("span",{className:`
                    font-mono
                    text-[7px]
                    sm:text-[9px]
                    text-gray-400
                    uppercase
                    tracking-widest
                    text-center
                  `,children:"Secure_Layer_Active // End-to-End Encryption"})]})]})})]})]})]})}function xA(){const a=new Date().getFullYear(),i=[{icon:Ys,link:"https://github.com/yspanchal6",label:"GitHub"},{icon:dx,link:"https://linkedin.com/in/yashpanchal2106",label:"LinkedIn"},{icon:BN,link:"#",label:"Twitter"},{icon:Go,link:"#",label:"Portfolio"}],l=["Home","About","Skills","Projects"],o=["Security","Status","Archives","Terminal"];return f.jsxs("footer",{className:`
        relative
        py-16
        md:py-20
        border-t
        border-white/5
        bg-cyber-black
        overflow-hidden
      `,children:[f.jsx("div",{className:`
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          font-display
          text-[20vw]
          md:text-[15vw]
          font-black
          text-white/[0.015]
          tracking-tighter
          whitespace-nowrap
          pointer-events-none
          uppercase
          select-none
        `,children:"YASH_PROTOCOL"}),f.jsx("div",{className:`
          absolute
          bottom-0
          left-0
          w-[300px]
          md:w-[500px]
          h-[300px]
          md:h-[500px]
          bg-neon-blue/5
          blur-[80px]
          md:blur-[120px]
          rounded-full
          pointer-events-none
        `}),f.jsx("div",{className:"absolute inset-0 cyber-grid opacity-[0.04] pointer-events-none"}),f.jsxs("div",{className:`
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        `,children:[f.jsxs("div",{className:`
            grid
            grid-cols-1
            md:grid-cols-12
            gap-10
            md:gap-12
            mb-14
            md:mb-16
          `,children:[f.jsxs("div",{className:`
              md:col-span-4
              space-y-5
              md:space-y-6
            `,children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:`
                  p-2.5
                  rounded-xl
                  bg-neon-blue/10
                  border
                  border-neon-blue/30
                  shadow-[0_0_20px_rgba(0,209,255,0.1)]
                `,children:f.jsx(cn,{className:"text-neon-blue w-5 h-5 sm:w-6 sm:h-6 animate-pulse"})}),f.jsxs("span",{className:`
                  font-display
                  font-bold
                  text-xl
                  sm:text-2xl
                  tracking-tighter
                  text-white
                `,children:["YASH",f.jsx("span",{className:"text-neon-blue",children:".SYS"})]})]}),f.jsx("p",{className:`
                text-gray-500
                font-sans
                text-sm
                leading-relaxed
                max-w-sm
              `,children:"Architecting secure, scalable digital ecosystems through advanced logic, cybersecurity, AI systems, and zero-trust infrastructures for next-generation platforms."}),f.jsx("div",{className:`
                flex
                flex-wrap
                gap-3
                sm:gap-4
              `,children:i.map((u,h)=>f.jsx(Z.a,{href:u.link,target:"_blank",rel:"noreferrer",whileHover:{scale:1.08,y:-2},whileTap:{scale:.95},"aria-label":u.label,className:`
                      p-2.5
                      sm:p-2
                      rounded-lg
                      bg-white/5
                      border
                      border-white/5
                      text-gray-500
                      hover:text-neon-blue
                      hover:border-neon-blue/30
                      transition-all
                      touch-manipulation
                    `,children:f.jsx(u.icon,{className:"w-4 h-4"})},h))}),f.jsx("div",{className:`
                pt-4
                border-t
                border-white/5
              `,children:f.jsx("p",{className:`
                  text-[10px]
                  font-mono
                  text-gray-600
                  italic
                  leading-relaxed
                `,children:'"CODE_PRINCIPLE": Clean code is not written — it is architected with purpose.'})})]}),f.jsxs("div",{className:`
              md:col-span-4
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-8
            `,children:[f.jsxs("div",{className:"space-y-4",children:[f.jsx("h4",{className:`
                  font-mono
                  text-[10px]
                  text-white
                  uppercase
                  tracking-[0.3em]
                  font-bold
                `,children:"DIRECTORY"}),f.jsx("ul",{className:"space-y-3",children:l.map(u=>f.jsx("li",{children:f.jsxs("a",{href:`#${u.toLowerCase()}`,className:`
                          font-mono
                          text-[10px]
                          sm:text-[11px]
                          text-gray-500
                          hover:text-neon-blue
                          transition-colors
                          uppercase
                          touch-manipulation
                        `,children:["// ",u]})},u))})]}),f.jsxs("div",{className:"space-y-4",children:[f.jsx("h4",{className:`
                  font-mono
                  text-[10px]
                  text-white
                  uppercase
                  tracking-[0.3em]
                  font-bold
                `,children:"SYSTEM"}),f.jsx("ul",{className:"space-y-3",children:o.map(u=>f.jsx("li",{children:f.jsxs("a",{href:"#",className:`
                          font-mono
                          text-[10px]
                          sm:text-[11px]
                          text-gray-500
                          hover:text-neon-green
                          transition-colors
                          uppercase
                          touch-manipulation
                        `,children:[":: ",u]})},u))})]})]}),f.jsxs("div",{className:`
              md:col-span-4
              space-y-6
            `,children:[f.jsx("h4",{className:`
                font-mono
                text-[10px]
                text-white
                uppercase
                tracking-[0.15em]
                sm:tracking-[0.3em]
                font-bold
                underline
                decoration-neon-blue/50
                underline-offset-8
              `,children:"REAL-TIME_TELEMETRY"}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:`
                  flex
                  items-center
                  justify-between
                  gap-4
                `,children:[f.jsxs("div",{className:`
                    flex
                    items-center
                    gap-2
                    flex-wrap
                  `,children:[f.jsx(Ua,{className:"w-3 h-3 text-neon-green"}),f.jsx("span",{className:`
                      font-mono
                      text-[10px]
                      text-gray-500
                      uppercase
                    `,children:"System_Health"})]}),f.jsx("span",{className:`
                    font-mono
                    text-[10px]
                    text-neon-green
                  `,children:"99.99%"})]}),f.jsxs("div",{className:`
                  flex
                  items-center
                  justify-between
                  gap-4
                `,children:[f.jsxs("div",{className:`
                    flex
                    items-center
                    gap-2
                    flex-wrap
                  `,children:[f.jsx(qo,{className:"w-3 h-3 text-neon-blue"}),f.jsx("span",{className:`
                      font-mono
                      text-[10px]
                      text-gray-500
                      uppercase
                    `,children:"Security_Layer"}),f.jsx("span",{className:`
                      px-1.5
                      py-0.5
                      rounded
                      bg-neon-blue/10
                      border
                      border-neon-blue/30
                      text-[6px]
                      sm:text-[7px]
                      text-neon-blue
                      font-mono
                    `,children:"V4.0"})]}),f.jsx("span",{className:`
                    font-mono
                    text-[10px]
                    text-neon-blue
                  `,children:"ACTIVE"})]}),f.jsxs("div",{className:`
                  flex
                  items-center
                  justify-between
                  gap-4
                `,children:[f.jsxs("div",{className:`
                    flex
                    items-center
                    gap-2
                    flex-wrap
                  `,children:[f.jsx(Of,{className:"w-3 h-3 text-gray-700"}),f.jsx("span",{className:`
                      font-mono
                      text-[10px]
                      text-gray-500
                      uppercase
                    `,children:"Deployment"})]}),f.jsx("span",{className:`
                    font-mono
                    text-[10px]
                    text-gray-400
                  `,children:"V4.3.1_DEV"})]})]}),f.jsxs("div",{className:`
                pt-6
                border-t
                border-white/5
                flex
                items-center
                gap-2
                flex-wrap
              `,children:[f.jsx("div",{className:"w-2 h-2 rounded-full bg-neon-green animate-pulse"}),f.jsx("span",{className:`
                  font-mono
                  text-[8px]
                  text-gray-600
                  uppercase
                  tracking-widest
                `,children:"Awaiting_Instructions..."})]})]})]}),f.jsxs("div",{className:`
            pt-10
            md:pt-12
            border-t
            border-white/5
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
            md:gap-6
          `,children:[f.jsxs("div",{className:`
              flex
              gap-3
              sm:gap-6
              md:gap-8
              flex-wrap
              justify-center
              font-mono
              text-[7px]
              sm:text-[9px]
              text-gray-600
              uppercase
              tracking-widest
            `,children:[f.jsx("span",{children:"REG_INIT: 2024"}),f.jsx("span",{children:"IP_STACK: IPv6_ACTIVE"}),f.jsx("span",{children:"LOC: IN_DEL_ZONE"})]}),f.jsxs("div",{className:`
              text-gray-600
              font-mono
              text-[7px]
              sm:text-[9px]
              uppercase
              tracking-widest
              text-center
              md:text-right
              leading-relaxed
            `,children:["© ",a," ","YASH_PAN_ARCHIVE_SECURE.",f.jsx("br",{className:"md:hidden"}),"ALL RIGHTS RESERVED. // SYSTEM_READY"]})]})]})]})}function bA(){const[a,i]=Y.useState(!1),[l,o]=Y.useState(0);Y.useEffect(()=>{const h=()=>{const d=window.scrollY,p=document.documentElement.scrollHeight-window.innerHeight,y=d/p*100;o(y),d>300?i(!0):i(!1)};return window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[]);const u=()=>{window.scrollTo({top:0,behavior:"smooth"})};return f.jsx(_n,{children:a&&f.jsx(Z.div,{initial:{opacity:0,y:30,scale:.7},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.7},transition:{duration:.3},className:`
            fixed
            bottom-5
            right-4
            sm:bottom-8
            sm:right-8
            z-[120]
          `,children:f.jsxs("div",{className:"relative group",children:[f.jsxs("svg",{className:`
                absolute
                inset-0
                w-14
                h-14
                sm:w-16
                sm:h-16
                -rotate-90
              `,viewBox:"0 0 100 100",children:[f.jsx("circle",{cx:"50",cy:"50",r:"45",strokeWidth:"5",className:"stroke-white/5 fill-none"}),f.jsx(Z.circle,{cx:"50",cy:"50",r:"45",strokeWidth:"5",strokeLinecap:"round",className:`
                  stroke-neon-blue
                  fill-none
                `,style:{pathLength:l/100}})]}),f.jsxs(Z.button,{whileHover:{scale:1.08},whileTap:{scale:.92},onClick:u,"aria-label":"Scroll to top",className:`
                relative
                w-14
                h-14
                sm:w-16
                sm:h-16
                rounded-2xl
                bg-cyber-black/90
                backdrop-blur-sm
                md:backdrop-blur-xl
                border
                border-neon-blue/20
                text-neon-blue
                flex
                items-center
                justify-center
                overflow-hidden
                shadow-[0_0_30px_rgba(0,209,255,0.18)]
                touch-manipulation
              `,children:[f.jsx("div",{className:`
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-neon-blue/10
                  via-transparent
                  to-neon-green/5
                  opacity-80
                `}),f.jsx(Z.div,{animate:{rotate:360},transition:{duration:12,repeat:1/0,ease:"linear"},className:`
                  absolute
                  inset-1
                  rounded-[14px]
                  border
                  border-dashed
                  border-neon-blue/15
                `}),f.jsx(Z.div,{animate:{opacity:[.2,.5,.2]},transition:{duration:2,repeat:1/0},className:`
                  absolute
                  inset-0
                  rounded-2xl
                  border
                  border-neon-blue/20
                `}),f.jsxs("div",{className:`
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                  justify-center
                `,children:[f.jsxs(Z.div,{whileHover:{y:-2},className:"relative",children:[f.jsx(U5,{className:`
                      w-5
                      h-5
                      sm:w-6
                      sm:h-6
                    `}),f.jsx(w5,{className:`
                      absolute
                      inset-0
                      w-5
                      h-5
                      sm:w-6
                      sm:h-6
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                    `})]}),f.jsx(cn,{className:`
                    absolute
                    -bottom-3
                    w-3
                    h-3
                    text-neon-green
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                  `})]}),f.jsx(Z.div,{animate:{y:["-100%","100%"]},transition:{repeat:1/0,duration:2.5,ease:"linear"},className:`
                  absolute
                  left-0
                  w-full
                  h-6
                  bg-gradient-to-b
                  from-transparent
                  via-neon-blue/10
                  to-transparent
                  pointer-events-none
                `})]}),f.jsx("div",{className:`
                absolute
                -top-9
                left-1/2
                -translate-x-1/2
                px-2.5
                py-1
                rounded-md
                bg-black/90
                border
                border-white/10
                text-[7px]
                sm:text-[8px]
                font-mono
                uppercase
                tracking-widest
                text-gray-400
                whitespace-nowrap
                pointer-events-none
                opacity-0
                translate-y-2
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all
                duration-300
              `,children:"RETURN_TOP"}),f.jsxs("div",{className:`
                absolute
                -bottom-7
                left-1/2
                -translate-x-1/2
                text-[7px]
                sm:text-[8px]
                font-mono
                text-gray-600
                uppercase
                tracking-widest
                whitespace-nowrap
              `,children:[Math.round(l),"% SYNC"]})]})})})}const wg={"who are you":"I am Yash's Autonomous Portfolio Assistant (v2.0). I can provide detailed information about his education, projects, cybersecurity expertise, AI interests, and technical journey.","tell me about yourself":"Yash Panchal is a security-focused System Architecture enthusiast currently pursuing B.Tech Information Technology. His core interests include Cybersecurity, AI Systems, Scalable Infrastructure, and Enterprise-level engineering.","what are your skills":"Primary skills include Python, Java, SQL, JavaScript, HTML/CSS, React, Database Management, Networking, Cybersecurity, System Design, and scalable architecture engineering.","what projects have you built":"Major projects include Student Information System (SIS), UIDAI Hackathon Security Infrastructure, MYTH Identity Intelligence Platform, Credit Card Fraud Detection System, and custom cybersecurity tools.","what is myth":"MYTH is a sovereign-grade identity intelligence platform that cross-references biometric data against government databases for secure, instant verification.","tell me about your education":"Yash completed a Diploma in Information Technology at B & B Institute of Technology (2021-2025) and is currently pursuing B.Tech Information Technology at MBIT (CVMU).",internship:"Completed Cyber Security Engineering Internship at Tech Elecon Pvt Ltd with practical exposure to infrastructure security and vulnerability analysis.","career goals":"Goal: Become a world-class System Architect specializing in secure, scalable, and AI-driven infrastructures.",cybersecurity:"Yash actively studies ethical hacking, security analysis, vulnerability assessment, and secure infrastructure engineering.",contact:"You can connect through LinkedIn, GitHub, Instagram, or the contact form on this portfolio website.",default:"I currently do not have enough information about that topic. Try asking about projects, education, cybersecurity, AI, skills, certifications, or career goals."},vA=["Who are you?","Skills","Projects","Cybersecurity","Education","Career Goals"];function SA(){const[a,i]=Y.useState(!1),[l,o]=Y.useState(""),[u,h]=Y.useState(!1),[d,p]=Y.useState([{id:"1",type:"bot",content:"SYSTEM READY. I am Yash Panchal's AI Assistant. Ask me about his projects, cybersecurity journey, skills, education, or technical expertise.",timestamp:new Date}]),y=Y.useRef(null);Y.useEffect(()=>{y.current&&(y.current.scrollTop=y.current.scrollHeight)},[d,u]),Y.useEffect(()=>(a?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[a]);const g=v=>{const S=v.toLowerCase();for(const[T,C]of Object.entries(wg))if(S.includes(T))return C;return wg.default},b=v=>{if(!v.trim())return;const S={id:Date.now().toString(),type:"user",content:v,timestamp:new Date};p(T=>[...T,S]),o(""),h(!0),setTimeout(()=>{const T={id:(Date.now()+1).toString(),type:"bot",content:g(v),timestamp:new Date};p(C=>[...C,T]),h(!1)},1200)};return f.jsxs(f.Fragment,{children:[f.jsx(Z.button,{whileHover:{scale:1.08},whileTap:{scale:.92},onClick:()=>i(!a),className:`
          fixed
          bottom-5
          right-4
          sm:bottom-24
          sm:right-8
          z-[120]
          w-14
          h-14
          sm:w-16
          sm:h-16
          rounded-full
          bg-cyber-black
          border-2
          border-neon-blue
          flex
          items-center
          justify-center
          text-neon-blue
          shadow-[0_0_30px_rgba(0,209,255,0.35)]
          touch-manipulation
        `,children:f.jsx(_n,{mode:"wait",children:a?f.jsx(Z.div,{initial:{opacity:0,rotate:-90},animate:{opacity:1,rotate:0},exit:{opacity:0},children:f.jsx(mx,{className:"w-6 h-6 sm:w-7 sm:h-7"})},"close"):f.jsxs(Z.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"relative",children:[f.jsx(gN,{className:"w-6 h-6 sm:w-7 sm:h-7"}),f.jsx(Z.div,{animate:{scale:[1,1.2,1]},transition:{duration:2,repeat:1/0},className:`
                  absolute
                  -top-1
                  -right-1
                  w-3
                  h-3
                  bg-neon-green
                  rounded-full
                  border-2
                  border-cyber-black
                `})]},"open")})}),f.jsx(_n,{children:a&&f.jsxs(Z.div,{initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.95},transition:{duration:.25},className:`
              fixed
              bottom-24
              right-3
              sm:right-8
              z-[120]
              w-[calc(100vw-1.5rem)]
              sm:w-[420px]
              h-[75vh]
              sm:h-[600px]
              max-h-[85vh]
              pb-[env(safe-area-inset-bottom)]
              bg-cyber-black/95
              backdrop-blur-sm
              md:backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              flex
              flex-col
              shadow-[0_20px_60px_rgba(0,0,0,0.7)]
            `,children:[f.jsx("div",{className:"absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none"}),f.jsx("div",{className:`
                absolute
                top-0
                left-0
                w-40
                h-40
                bg-neon-blue/10
                blur-3xl
                rounded-full
              `}),f.jsxs("div",{className:`
                relative
                z-10
                p-4
                sm:p-6
                border-b
                border-white/10
                bg-gradient-to-r
                from-neon-blue/10
                to-neon-green/5
                flex
                items-center
                justify-between
              `,children:[f.jsxs("div",{className:"flex items-center gap-4",children:[f.jsxs("div",{className:`
                    relative
                    w-10
                    h-10
                    sm:w-12
                    sm:h-12
                    rounded-xl
                    bg-black/40
                    border
                    border-neon-blue/20
                    flex
                    items-center
                    justify-center
                    text-neon-blue
                  `,children:[f.jsx(zf,{className:"w-5 h-5"}),f.jsx("div",{className:`
                      absolute
                      -bottom-1
                      -right-1
                      w-3
                      h-3
                      rounded-full
                      bg-neon-green
                      border-2
                      border-cyber-black
                      animate-pulse
                    `})]}),f.jsxs("div",{children:[f.jsx("h3",{className:`
                      text-xs
                      sm:text-sm
                      font-bold
                      text-white
                      uppercase
                      tracking-widest
                    `,children:"YP_NEURAL_CORE"}),f.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[f.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-neon-green"}),f.jsx("span",{className:`
                        text-[7px]
                        sm:text-[8px]
                        font-mono
                        text-gray-500
                        uppercase
                        tracking-[0.2em]
                      `,children:"Autonomous Active"})]})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(Qs,{className:"w-4 h-4 text-neon-blue opacity-50"}),f.jsx(cn,{className:"w-4 h-4 text-neon-green opacity-50"})]})]}),f.jsxs("div",{ref:y,className:`
                relative
                z-10
                flex-1
                overflow-y-auto
                overscroll-contain
                p-4
                sm:p-6
                space-y-5
                bg-black/30
              `,children:[f.jsx("div",{className:"flex justify-center",children:f.jsx("span",{className:`
                    px-3
                    py-1
                    rounded-full
                    bg-white/[0.03]
                    border
                    border-white/5
                    text-[7px]
                    sm:text-[8px]
                    font-mono
                    text-gray-600
                    uppercase
                    tracking-[0.25em]
                  `,children:"SESSION ACTIVE"})}),d.map(v=>f.jsx(Z.div,{initial:{opacity:0,x:v.type==="user"?20:-20},animate:{opacity:1,x:0},className:`
                      flex
                      ${v.type==="user"?"justify-end":"justify-start"}
                    `,children:f.jsxs("div",{className:`
                        max-w-[92%]
                        sm:max-w-[85%]
                        flex
                        gap-3

                        ${v.type==="user"?"flex-row-reverse":"flex-row"}
                      `,children:[f.jsx("div",{className:`
                          w-7
                          h-7
                          sm:w-8
                          sm:h-8
                          shrink-0
                          rounded-lg
                          flex
                          items-center
                          justify-center
                          border

                          ${v.type==="user"?`
                                bg-neon-blue/10
                                border-neon-blue/20
                                text-neon-blue
                              `:`
                                bg-neon-green/10
                                border-neon-green/20
                                text-neon-green
                              `}
                        `,children:v.type==="user"?f.jsx(YN,{className:"w-4 h-4"}):f.jsx(M5,{className:"w-4 h-4"})}),f.jsxs("div",{children:[f.jsx("div",{className:`
                            p-4
                            rounded-2xl
                            text-sm
                            leading-relaxed
                            border

                            ${v.type==="user"?`
                                  bg-neon-blue/10
                                  border-neon-blue/20
                                  text-white
                                  rounded-tr-none
                                `:`
                                  bg-white/[0.03]
                                  border-white/10
                                  text-gray-300
                                  rounded-tl-none
                                `}
                          `,children:v.content}),f.jsx("span",{className:`
                            mt-1
                            block
                            text-[7px]
                            sm:text-[8px]
                            font-mono
                            text-gray-600

                            ${v.type==="user"?"text-right":"text-left"}
                          `,children:v.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]})},v.id)),u&&f.jsx(Z.div,{initial:{opacity:0},animate:{opacity:1},className:"flex justify-start",children:f.jsx("div",{className:`
                      px-4
                      py-3
                      rounded-2xl
                      rounded-tl-none
                      bg-white/[0.03]
                      border
                      border-white/10
                    `,children:f.jsxs("div",{className:"flex gap-1.5",children:[f.jsx(Z.div,{animate:{y:[0,-4,0]},transition:{repeat:1/0,duration:.8},className:`
                          w-2
                          h-2
                          rounded-full
                          bg-neon-green
                        `}),f.jsx(Z.div,{animate:{y:[0,-4,0]},transition:{repeat:1/0,duration:.8,delay:.2},className:`
                          w-2
                          h-2
                          rounded-full
                          bg-neon-green
                        `}),f.jsx(Z.div,{animate:{y:[0,-4,0]},transition:{repeat:1/0,duration:.8,delay:.4},className:`
                          w-2
                          h-2
                          rounded-full
                          bg-neon-green
                        `})]})})})]}),f.jsx("div",{className:`
                px-3
                sm:px-4
                pt-3
                flex
                gap-2
                overflow-x-auto
                no-scrollbar
              `,children:vA.map((v,S)=>f.jsxs(Z.button,{whileHover:{scale:1.03},whileTap:{scale:.95},onClick:()=>b(v),className:`
                      flex-shrink-0
                      px-3
                      sm:px-4
                      py-2
                      rounded-full
                      bg-white/[0.03]
                      border
                      border-white/10
                      text-[10px]
                      font-mono
                      text-gray-400
                      hover:text-neon-blue
                      hover:border-neon-blue/20
                      transition-all
                      flex
                      items-center
                      gap-2
                      touch-manipulation
                    `,children:[v,f.jsx(ux,{className:"w-3 h-3"})]},S))}),f.jsxs("div",{className:`
                relative
                z-10
                p-3
                sm:p-4
                border-t
                border-white/10
                bg-black/40
              `,children:[f.jsxs("div",{className:`
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/40
                  px-4
                  py-3
                  sm:py-4
                `,children:[f.jsx("input",{type:"text",value:l,onChange:v=>o(v.target.value),onKeyDown:v=>{v.key==="Enter"&&b(l)},placeholder:"Communicate with Neural_Core...",className:`
                    flex-1
                    bg-transparent
                    outline-none
                    text-sm
                    text-white
                    placeholder:text-gray-600
                    font-mono
                  `}),f.jsx(Z.button,{whileHover:{scale:1.08},whileTap:{scale:.92},onClick:()=>b(l),className:`
                    w-10
                    h-10
                    rounded-xl
                    bg-gradient-to-br
                    from-neon-blue
                    to-neon-green
                    flex
                    items-center
                    justify-center
                    text-black
                    shadow-[0_0_20px_rgba(0,209,255,0.2)]
                    touch-manipulation
                  `,children:f.jsx(MN,{className:"w-4 h-4"})})]}),f.jsxs("div",{className:`
                  mt-3
                  flex
                  items-center
                  justify-between
                `,children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(kN,{className:"w-3 h-3 text-yellow-500"}),f.jsx("span",{className:`
                      text-[7px]
                      sm:text-[8px]
                      font-mono
                      text-gray-600
                      uppercase
                    `,children:"AI_MODEL: PortAssist_v2"})]}),f.jsxs("div",{className:`
                    flex
                    items-center
                    gap-2
                  `,children:[f.jsx(Of,{className:"w-3 h-3 text-neon-green"}),f.jsx("span",{className:`
                      text-[7px]
                      sm:text-[8px]
                      font-mono
                      text-gray-700
                      uppercase
                    `,children:"SECURED"})]})]})]})]})})]})}function wA(){return f.jsxs("div",{className:"flex flex-col min-h-screen bg-cyber-black text-white selection:bg-neon-blue selection:text-black",children:[f.jsx(Lj,{}),f.jsxs("main",{className:"flex-grow",children:[f.jsx(Uj,{}),f.jsx(Gj,{}),f.jsx(Qj,{}),f.jsx(Jj,{}),f.jsx($j,{}),f.jsx(tA,{}),f.jsx(yA,{})]}),f.jsx(xA,{}),f.jsx(bA,{}),f.jsx(SA,{})]})}g1.createRoot(document.getElementById("root")).render(f.jsx(Y.StrictMode,{children:f.jsx(wA,{})}));
