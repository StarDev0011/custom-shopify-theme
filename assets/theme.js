window.slate = window.slate || {};
window.theme = window.theme || {};

/*= =============== Vendor ================*/
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},_=function(){w=(0,h.default)(),O()},S=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},z=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},A=function(e){return j=i(j,e),w=(0,h.default)(),z(j.disable)||x?S():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},j.throttleDelay)),j.disableMutationObserver||(0,d.default)("[data-aos]",_),w)};e.exports={init:A,refresh:O,refreshHard:_}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=new r(o);a=t,n.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&a()})}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});
/* ===================================================================================== @preserve =
___  _   _    _
/   || | | |  | |
\__  | | | |  | |  __
/    |/  |/_) |/  /  \_/\/
\___/|__/| \_/|__/\__/  /\_/
            |\
            |/
Ajaxinate
version v2.0.11
https://github.com/Elkfox/Ajaxinate
Copyright (c) 2017 Elkfox Co Pty Ltd
https://elkfox.com
MIT License
================================================================================================= */

var Ajaxinate = function ajaxinateConstructor(config) {
  var settings = config || {};
  /*
    pagination: Selector of pagination container
    method: [options are 'scroll', 'click']
    container: Selector of repeating content
    offset: 0, offset the number of pixels before the bottom to start loading more on scroll
    callback: null, function to callback after a new page is loaded
  */
  var defaultSettings = {
    pagination: '.AjaxinatePagination',
    method: 'scroll',
    namespace: '.Ajaxinate',
    container: '.AjaxinateLoop',
    offset: 0,
    callback: null
  };
  // Merge configs
  this.settings = Object.assign(defaultSettings, settings);

  // Bind 'this' to applicable prototype functions
  this.addScrollListeners = this.addScrollListeners.bind(this);
  this.addClickListener = this.addClickListener.bind(this);
  this.checkIfPaginationInView = this.checkIfPaginationInView.bind(this);
  this.stopMultipleClicks = this.stopMultipleClicks.bind(this);
  this.destroy = this.destroy.bind(this);
  this.namespace = this.settings.namespace;

  // Set up our element selectors
  this.containerElement = document.querySelector(this.settings.container);
  this.paginationElement = document.querySelector(this.settings.pagination);

  this.initialize();
};

Ajaxinate.prototype.initialize = function initializeTheCorrectFunctionsBasedOnTheMethod() {
  // Find and initialise the correct function based on the method set in the config
  if (this.containerElement) {
    var initializers = {
      click: this.addClickListener,
      scroll: this.addScrollListeners
    };
    initializers[this.settings.method]();
  }
};

Ajaxinate.prototype.addScrollListeners = function addEventListenersForScrolling() {
  if (this.paginationElement) {
    $(window)
      .on('scroll' + this.namespace, this.checkIfPaginationInView)
      .on('resize' + this.namespace, this.checkIfPaginationInView)
      .on('orientationchange' + this.namespace, this.checkIfPaginationInView);
  }
};

Ajaxinate.prototype.addClickListener = function addEventListenerForClicking() {
  if (this.paginationElement) {
    this.nextPageLinkElement = this.paginationElement.querySelector('a');
    this.clickActive = true;
    if (this.nextPageLinkElement !== null) {
      this.nextPageLinkElement.addEventListener('click', this.stopMultipleClicks);
    }
  }
};

Ajaxinate.prototype.stopMultipleClicks = function handleClickEvent(event) {
  event.preventDefault();
  if (this.clickActive) {
    this.nextPageUrl = this.nextPageLinkElement.href;
    this.clickActive = false;
    this.loadMore();
  }
};

Ajaxinate.prototype.checkIfPaginationInView = function handleScrollEvent() {
  var top = this.paginationElement.getBoundingClientRect().top - this.settings.offset;
  var bottom = this.paginationElement.getBoundingClientRect().bottom + this.settings.offset;
  if (top <= window.innerHeight && bottom >= 0) {
    this.nextPageLinkElement = this.paginationElement.querySelector('a');
    this.removeScrollListener();
    if (this.nextPageLinkElement) {
      this.nextPageUrl = this.nextPageLinkElement.href;
      this.loadMore();
    }
  }
};

Ajaxinate.prototype.loadMore = function getTheHtmlOfTheNextPageWithAnAjaxRequest() {
  this.request = new XMLHttpRequest();
  this.request.onreadystatechange = function success() {
    if (this.request.readyState === 4 && this.request.status === 200) {
      var newContainer = $(this.request.response).find( this.settings.container );
      var newPagination = $(this.request.response).find( this.settings.pagination );
      this.containerElement.insertAdjacentHTML('beforeend', newContainer.html());
      this.paginationElement.innerHTML = newPagination.html();
      if (this.settings.callback && typeof this.settings.callback === 'function') {
        this.settings.callback( this.request.response );
      }
      this.initialize();
    }
  }.bind(this);
  this.request.open('GET', this.nextPageUrl);
  this.request.send();
};

Ajaxinate.prototype.removeClickListener = function removeClickEventListener() {
  this.nextPageLinkElement.addEventListener('click', this.stopMultipleClicks);
};

Ajaxinate.prototype.removeScrollListener = function removeScrollEventListener() {
  $(window)
    .off('scroll' + this.namespace, this.checkIfPaginationInView)
    .off('resize' + this.namespace, this.checkIfPaginationInView)
    .off('orientationchange' + this.namespace, this.checkIfPaginationInView);
};

Ajaxinate.prototype.destroy = function removeEventListenersAndReturnThis() {
  // This method is used to unbind event listeners from the DOM
  // This function is called manually to destroy "this" Ajaxinate instance
  var destroyers = {
    click: this.removeClickListener.bind(this),
    scroll: this.removeScrollListener.bind(this)
  };
  destroyers[this.settings.method]();
  return this;
};
/*
 * Debounce function
 * based on unminified version from http://davidwalsh.name/javascript-debounce-function
 */
PaloAlto.debounce = function(n,t,u){var e;return function(){var a=this,r=arguments,i=function(){e=null,u||n.apply(a,r)},o=u&&!e;clearTimeout(e),e=setTimeout(i,t),o&&n.apply(a,r)}};
/*!
 * Flickity PACKAGED v2.3.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */
(function(e,i){if(typeof define=="function"&&define.amd){define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("jquery"))}else{e.jQueryBridget=i(e,e.jQuery)}})(window,function t(e,r){"use strict";var o=Array.prototype.slice;var i=e.console;var u=typeof i=="undefined"?function(){}:function(t){i.error(t)};function n(h,s,c){c=c||r||e.jQuery;if(!c){return}if(!s.prototype.option){s.prototype.option=function(t){if(!c.isPlainObject(t)){return}this.options=c.extend(true,this.options,t)}}c.fn[h]=function(t){if(typeof t=="string"){var e=o.call(arguments,1);return i(this,t,e)}n(this,t);return this};function i(t,r,o){var a;var l="$()."+h+'("'+r+'")';t.each(function(t,e){var i=c.data(e,h);if(!i){u(h+" not initialized. Cannot call methods, i.e. "+l);return}var n=i[r];if(!n||r.charAt(0)=="_"){u(l+" is not a valid method");return}var s=n.apply(i,o);a=a===undefined?s:a});return a!==undefined?a:t}function n(t,n){t.each(function(t,e){var i=c.data(e,h);if(i){i.option(n);i._init()}else{i=new s(e,n);c.data(e,h,i)}})}a(c)}function a(t){if(!t||t&&t.bridget){return}t.bridget=n}a(r||e.jQuery);return n});(function(t,e){if(typeof define=="function"&&define.amd){define("ev-emitter/ev-emitter",e)}else if(typeof module=="object"&&module.exports){module.exports=e()}else{t.EvEmitter=e()}})(typeof window!="undefined"?window:this,function(){function t(){}var e=t.prototype;e.on=function(t,e){if(!t||!e){return}var i=this._events=this._events||{};var n=i[t]=i[t]||[];if(n.indexOf(e)==-1){n.push(e)}return this};e.once=function(t,e){if(!t||!e){return}this.on(t,e);var i=this._onceEvents=this._onceEvents||{};var n=i[t]=i[t]||{};n[e]=true;return this};e.off=function(t,e){var i=this._events&&this._events[t];if(!i||!i.length){return}var n=i.indexOf(e);if(n!=-1){i.splice(n,1)}return this};e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(!i||!i.length){return}i=i.slice(0);e=e||[];var n=this._onceEvents&&this._onceEvents[t];for(var s=0;s<i.length;s++){var r=i[s];var o=n&&n[r];if(o){this.off(t,r);delete n[r]}r.apply(this,e)}return this};e.allOff=function(){delete this._events;delete this._onceEvents};return t});
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
(function(t,e){if(typeof define=="function"&&define.amd){define("get-size/get-size",e)}else if(typeof module=="object"&&module.exports){module.exports=e()}else{t.getSize=e()}})(window,function t(){"use strict";function m(t){var e=parseFloat(t);var i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}var i=typeof console=="undefined"?e:function(t){console.error(t)};var y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];var b=y.length;function E(){var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};for(var e=0;e<b;e++){var i=y[e];t[i]=0}return t}function S(t){var e=getComputedStyle(t);if(!e){i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? "+"See https://bit.ly/getsizebug1")}return e}var n=false;var C;function x(){if(n){return}n=true;var t=document.createElement("div");t.style.width="200px";t.style.padding="1px 2px 3px 4px";t.style.borderStyle="solid";t.style.borderWidth="1px 2px 3px 4px";t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=S(t);C=Math.round(m(i.width))==200;s.isBoxSizeOuter=C;e.removeChild(t)}function s(t){x();if(typeof t=="string"){t=document.querySelector(t)}if(!t||typeof t!="object"||!t.nodeType){return}var e=S(t);if(e.display=="none"){return E()}var i={};i.width=t.offsetWidth;i.height=t.offsetHeight;var n=i.isBorderBox=e.boxSizing=="border-box";for(var s=0;s<b;s++){var r=y[s];var o=e[r];var a=parseFloat(o);i[r]=!isNaN(a)?a:0}var l=i.paddingLeft+i.paddingRight;var h=i.paddingTop+i.paddingBottom;var c=i.marginLeft+i.marginRight;var u=i.marginTop+i.marginBottom;var d=i.borderLeftWidth+i.borderRightWidth;var f=i.borderTopWidth+i.borderBottomWidth;var p=n&&C;var v=m(e.width);if(v!==false){i.width=v+(p?0:l+d)}var g=m(e.height);if(g!==false){i.height=g+(p?0:h+f)}i.innerWidth=i.width-(l+d);i.innerHeight=i.height-(h+f);i.outerWidth=i.width+c;i.outerHeight=i.height+u;return i}return s});(function(t,e){"use strict";if(typeof define=="function"&&define.amd){define("desandro-matches-selector/matches-selector",e)}else if(typeof module=="object"&&module.exports){module.exports=e()}else{t.matchesSelector=e()}})(window,function t(){"use strict";var n=function(){var t=window.Element.prototype;if(t.matches){return"matches"}if(t.matchesSelector){return"matchesSelector"}var e=["webkit","moz","ms","o"];for(var i=0;i<e.length;i++){var n=e[i];var s=n+"MatchesSelector";if(t[s]){return s}}}();return function t(e,i){return e[n](i)}});(function(e,i){if(typeof define=="function"&&define.amd){define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("desandro-matches-selector"))}else{e.fizzyUIUtils=i(e,e.matchesSelector)}})(window,function t(h,r){var c={};c.extend=function(t,e){for(var i in e){t[i]=e[i]}return t};c.modulo=function(t,e){return(t%e+e)%e};var i=Array.prototype.slice;c.makeArray=function(t){if(Array.isArray(t)){return t}if(t===null||t===undefined){return[]}var e=typeof t=="object"&&typeof t.length=="number";if(e){return i.call(t)}return[t]};c.removeFrom=function(t,e){var i=t.indexOf(e);if(i!=-1){t.splice(i,1)}};c.getParent=function(t,e){while(t.parentNode&&t!=document.body){t=t.parentNode;if(r(t,e)){return t}}};c.getQueryElement=function(t){if(typeof t=="string"){return document.querySelector(t)}return t};c.handleEvent=function(t){var e="on"+t.type;if(this[e]){this[e](t)}};c.filterFindElements=function(t,n){t=c.makeArray(t);var s=[];t.forEach(function(t){if(!(t instanceof HTMLElement)){return}if(!n){s.push(t);return}if(r(t,n)){s.push(t)}var e=t.querySelectorAll(n);for(var i=0;i<e.length;i++){s.push(e[i])}});return s};c.debounceMethod=function(t,e,n){n=n||100;var s=t.prototype[e];var r=e+"Timeout";t.prototype[e]=function(){var t=this[r];clearTimeout(t);var e=arguments;var i=this;this[r]=setTimeout(function(){s.apply(i,e);delete i[r]},n)}};c.docReady=function(t){var e=document.readyState;if(e=="complete"||e=="interactive"){setTimeout(t)}else{document.addEventListener("DOMContentLoaded",t)}};c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var u=h.console;c.htmlInit=function(a,l){c.docReady(function(){var t=c.toDashed(l);var s="data-"+t;var e=document.querySelectorAll("["+s+"]");var i=document.querySelectorAll(".js-"+t);var n=c.makeArray(e).concat(c.makeArray(i));var r=s+"-options";var o=h.jQuery;n.forEach(function(e){var t=e.getAttribute(s)||e.getAttribute(r);var i;try{i=t&&JSON.parse(t)}catch(t){if(u){u.error("Error parsing "+s+" on "+e.className+": "+t)}return}var n=new a(e,i);if(o){o.data(e,l,n)}})})};return c});(function(e,i){if(typeof define=="function"&&define.amd){define("flickity/js/cell",["get-size/get-size"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("get-size"))}else{e.Flickity=e.Flickity||{};e.Flickity.Cell=i(e,e.getSize)}})(window,function t(e,i){function n(t,e){this.element=t;this.parent=e;this.create()}var s=n.prototype;s.create=function(){this.element.style.position="absolute";this.element.setAttribute("aria-hidden","true");this.x=0;this.shift=0;this.element.style[this.parent.originSide]=0};s.destroy=function(){this.unselect();this.element.style.position="";var t=this.parent.originSide;this.element.style[t]="";this.element.style.transform="";this.element.removeAttribute("aria-hidden")};s.getSize=function(){this.size=i(this.element)};s.setPosition=function(t){this.x=t;this.updateTarget();this.renderPosition(t)};s.updateTarget=s.setDefaultTarget=function(){var t=this.parent.originSide=="left"?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign};s.renderPosition=function(t){var e=this.parent.originSide==="left"?1:-1;var i=this.parent.options.percentPosition?t*e*(this.parent.size.innerWidth/this.size.width):t*e;this.element.style.transform="translateX("+this.parent.getPositionValue(i)+")"};s.select=function(){this.element.classList.add("is-selected");this.element.removeAttribute("aria-hidden")};s.unselect=function(){this.element.classList.remove("is-selected");this.element.setAttribute("aria-hidden","true")};s.wrapShift=function(t){this.shift=t;this.renderPosition(this.x+this.parent.slideableWidth*t)};s.remove=function(){this.element.parentNode.removeChild(this.element)};return n});(function(t,e){if(typeof define=="function"&&define.amd){define("flickity/js/slide",e)}else if(typeof module=="object"&&module.exports){module.exports=e()}else{t.Flickity=t.Flickity||{};t.Flickity.Slide=e()}})(window,function t(){"use strict";function e(t){this.parent=t;this.isOriginLeft=t.originSide=="left";this.cells=[];this.outerWidth=0;this.height=0}var i=e.prototype;i.addCell=function(t){this.cells.push(t);this.outerWidth+=t.size.outerWidth;this.height=Math.max(t.size.outerHeight,this.height);if(this.cells.length==1){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}};i.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft";var e=this.getLastCell();var i=e?e.size[t]:0;var n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign};i.getLastCell=function(){return this.cells[this.cells.length-1]};i.select=function(){this.cells.forEach(function(t){t.select()})};i.unselect=function(){this.cells.forEach(function(t){t.unselect()})};i.getCellElements=function(){return this.cells.map(function(t){return t.element})};return e});(function(e,i){if(typeof define=="function"&&define.amd){define("flickity/js/animate",["fizzy-ui-utils/utils"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("fizzy-ui-utils"))}else{e.Flickity=e.Flickity||{};e.Flickity.animatePrototype=i(e,e.fizzyUIUtils)}})(window,function t(e,i){var n={};n.startAnimation=function(){if(this.isAnimating){return}this.isAnimating=true;this.restingFrames=0;this.animate()};n.animate=function(){this.applyDragForce();this.applySelectedAttraction();var t=this.x;this.integratePhysics();this.positionSlider();this.settle(t);if(this.isAnimating){var e=this;requestAnimationFrame(function t(){e.animate()})}};n.positionSlider=function(){var t=this.x;if(this.options.wrapAround&&this.cells.length>1){t=i.modulo(t,this.slideableWidth);t-=this.slideableWidth;this.shiftWrapCells(t)}this.setTranslateX(t,this.isAnimating);this.dispatchScrollEvent()};n.setTranslateX=function(t,e){t+=this.cursorPosition;t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"};n.dispatchScrollEvent=function(){var t=this.slides[0];if(!t){return}var e=-this.x-t.target;var i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])};n.positionSliderAtSelected=function(){if(!this.cells.length){return}this.x=-this.selectedSlide.target;this.velocity=0;this.positionSlider()};n.getPositionValue=function(t){if(this.options.percentPosition){return Math.round(t/this.size.innerWidth*1e4)*.01+"%"}else{return Math.round(t)+"px"}};n.settle=function(t){var e=!this.isPointerDown&&Math.round(this.x*100)==Math.round(t*100);if(e){this.restingFrames++}if(this.restingFrames>2){this.isAnimating=false;delete this.isFreeScrolling;this.positionSlider();this.dispatchEvent("settle",null,[this.selectedIndex])}};n.shiftWrapCells=function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)};n._shiftCells=function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n];var r=e>0?i:0;s.wrapShift(r);e-=s.size.outerWidth}};n._unshiftCells=function(t){if(!t||!t.length){return}for(var e=0;e<t.length;e++){t[e].wrapShift(0)}};n.integratePhysics=function(){this.x+=this.velocity;this.velocity*=this.getFrictionFactor()};n.applyForce=function(t){this.velocity+=t};n.getFrictionFactor=function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]};n.getRestingPosition=function(){return this.x+this.velocity/(1-this.getFrictionFactor())};n.applyDragForce=function(){if(!this.isDraggable||!this.isPointerDown){return}var t=this.dragX-this.x;var e=t-this.velocity;this.applyForce(e)};n.applySelectedAttraction=function(){var t=this.isDraggable&&this.isPointerDown;if(t||this.isFreeScrolling||!this.slides.length){return}var e=this.selectedSlide.target*-1-this.x;var i=e*this.options.selectedAttraction;this.applyForce(i)};return n});(function(o,a){if(typeof define=="function"&&define.amd){define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(t,e,i,n,s,r){return a(o,t,e,i,n,s,r)})}else if(typeof module=="object"&&module.exports){module.exports=a(o,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"))}else{var t=o.Flickity;o.Flickity=a(o,o.EvEmitter,o.getSize,o.fizzyUIUtils,t.Cell,t.Slide,t.animatePrototype)}})(window,function t(n,e,i,a,s,o,r){var l=n.jQuery;var h=n.getComputedStyle;var c=n.console;function u(t,e){t=a.makeArray(t);while(t.length){e.appendChild(t.shift())}}var d=0;var f={};function p(t,e){var i=a.getQueryElement(t);if(!i){if(c){c.error("Bad element for Flickity: "+(i||t))}return}this.element=i;if(this.element.flickityGUID){var n=f[this.element.flickityGUID];if(n)n.option(e);return n}if(l){this.$element=l(this.element)}this.options=a.extend({},this.constructor.defaults);this.option(e);this._create()}p.defaults={accessibility:true,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:true,percentPosition:true,resize:true,selectedAttraction:.025,setGallerySize:true};p.createMethods=[];var v=p.prototype;a.extend(v,e.prototype);v._create=function(){var t=this.guid=++d;this.element.flickityGUID=t;f[t]=this;this.selectedIndex=0;this.restingFrames=0;this.x=0;this.velocity=0;this.originSide=this.options.rightToLeft?"right":"left";this.viewport=document.createElement("div");this.viewport.className="flickity-viewport";this._createSlider();if(this.options.resize||this.options.watchCSS){n.addEventListener("resize",this)}for(var e in this.options.on){var i=this.options.on[e];this.on(e,i)}p.createMethods.forEach(function(t){this[t]()},this);if(this.options.watchCSS){this.watchCSS()}else{this.activate()}};v.option=function(t){a.extend(this.options,t)};v.activate=function(){if(this.isActive){return}this.isActive=true;this.element.classList.add("flickity-enabled");if(this.options.rightToLeft){this.element.classList.add("flickity-rtl")}this.getSize();var t=this._filterFindCellElements(this.element.children);u(t,this.slider);this.viewport.appendChild(this.slider);this.element.appendChild(this.viewport);this.reloadCells();if(this.options.accessibility){this.element.tabIndex=0;this.element.addEventListener("keydown",this)}this.emitEvent("activate");this.selectInitialIndex();this.isInitActivated=true;this.dispatchEvent("ready")};v._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider";t.style[this.originSide]=0;this.slider=t};v._filterFindCellElements=function(t){return a.filterFindElements(t,this.options.cellSelector)};v.reloadCells=function(){this.cells=this._makeCells(this.slider.children);this.positionCells();this._getWrapShiftCells();this.setGallerySize()};v._makeCells=function(t){var e=this._filterFindCellElements(t);var i=e.map(function(t){return new s(t,this)},this);return i};v.getLastCell=function(){return this.cells[this.cells.length-1]};v.getLastSlide=function(){return this.slides[this.slides.length-1]};v.positionCells=function(){this._sizeCells(this.cells);this._positionCells(0)};v._positionCells=function(t){t=t||0;this.maxCellHeight=t?this.maxCellHeight||0:0;var e=0;if(t>0){var i=this.cells[t-1];e=i.x+i.size.outerWidth}var n=this.cells.length;for(var s=t;s<n;s++){var r=this.cells[s];r.setPosition(e);e+=r.size.outerWidth;this.maxCellHeight=Math.max(r.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e;this.updateSlides();this._containSlides();this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0};v._sizeCells=function(t){t.forEach(function(t){t.getSize()})};v.updateSlides=function(){this.slides=[];if(!this.cells.length){return}var n=new o(this);this.slides.push(n);var t=this.originSide=="left";var s=t?"marginRight":"marginLeft";var r=this._getCanCellFit();this.cells.forEach(function(t,e){if(!n.cells.length){n.addCell(t);return}var i=n.outerWidth-n.firstMargin+(t.size.outerWidth-t.size[s]);if(r.call(this,e,i)){n.addCell(t)}else{n.updateTarget();n=new o(this);this.slides.push(n);n.addCell(t)}},this);n.updateTarget();this.updateSelectedSlide()};v._getCanCellFit=function(){var t=this.options.groupCells;if(!t){return function(){return false}}else if(typeof t=="number"){var e=parseInt(t,10);return function(t){return t%e!==0}}var i=typeof t=="string"&&t.match(/^(\d+)%$/);var n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}};v._init=v.reposition=function(){this.positionCells();this.positionSliderAtSelected()};v.getSize=function(){this.size=i(this.element);this.setCellAlign();this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};v.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign};v.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}};v._getWrapShiftCells=function(){if(!this.options.wrapAround){return}this._unshiftCells(this.beforeShiftCells);this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition;var e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1);t=this.size.innerWidth-this.cursorPosition;this.afterShiftCells=this._getGapCells(t,0,1)};v._getGapCells=function(t,e,i){var n=[];while(t>0){var s=this.cells[e];if(!s){break}n.push(s);e+=i;t-=s.size.outerWidth}return n};v._containSlides=function(){if(!this.options.contain||this.options.wrapAround||!this.cells.length){return}var t=this.options.rightToLeft;var e=t?"marginRight":"marginLeft";var i=t?"marginLeft":"marginRight";var n=this.slideableWidth-this.getLastCell().size[i];var s=n<this.size.innerWidth;var r=this.cursorPosition+this.cells[0].size[e];var o=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){if(s){t.target=n*this.cellAlign}else{t.target=Math.max(t.target,r);t.target=Math.min(t.target,o)}},this)};v.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;this.emitEvent(t,n);if(l&&this.$element){t+=this.options.namespaceJQueryEvents?".flickity":"";var s=t;if(e){var r=new l.Event(e);r.type=t;s=r}this.$element.trigger(s,i)}};v.select=function(t,e,i){if(!this.isActive){return}t=parseInt(t,10);this._wrapSelect(t);if(this.options.wrapAround||e){t=a.modulo(t,this.slides.length)}if(!this.slides[t]){return}var n=this.selectedIndex;this.selectedIndex=t;this.updateSelectedSlide();if(i){this.positionSliderAtSelected()}else{this.startAnimation()}if(this.options.adaptiveHeight){this.setGallerySize()}this.dispatchEvent("select",null,[t]);if(t!=n){this.dispatchEvent("change",null,[t])}this.dispatchEvent("cellSelect")};v._wrapSelect=function(t){var e=this.slides.length;var i=this.options.wrapAround&&e>1;if(!i){return t}var n=a.modulo(t,e);var s=Math.abs(n-this.selectedIndex);var r=Math.abs(n+e-this.selectedIndex);var o=Math.abs(n-e-this.selectedIndex);if(!this.isDragSelect&&r<s){t+=e}else if(!this.isDragSelect&&o<s){t-=e}if(t<0){this.x-=this.slideableWidth}else if(t>=e){this.x+=this.slideableWidth}};v.previous=function(t,e){this.select(this.selectedIndex-1,t,e)};v.next=function(t,e){this.select(this.selectedIndex+1,t,e)};v.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];if(!t){return}this.unselectSelectedSlide();this.selectedSlide=t;t.select();this.selectedCells=t.cells;this.selectedElements=t.getCellElements();this.selectedCell=t.cells[0];this.selectedElement=this.selectedElements[0]};v.unselectSelectedSlide=function(){if(this.selectedSlide){this.selectedSlide.unselect()}};v.selectInitialIndex=function(){var t=this.options.initialIndex;if(this.isInitActivated){this.select(this.selectedIndex,false,true);return}if(t&&typeof t=="string"){var e=this.queryCell(t);if(e){this.selectCell(t,false,true);return}}var i=0;if(t&&this.slides[t]){i=t}this.select(i,false,true)};v.selectCell=function(t,e,i){var n=this.queryCell(t);if(!n){return}var s=this.getCellSlideIndex(n);this.select(s,e,i)};v.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){var i=this.slides[e];var n=i.cells.indexOf(t);if(n!=-1){return e}}};v.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t){return i}}};v.getCells=function(t){t=a.makeArray(t);var i=[];t.forEach(function(t){var e=this.getCell(t);if(e){i.push(e)}},this);return i};v.getCellElements=function(){return this.cells.map(function(t){return t.element})};v.getParentCell=function(t){var e=this.getCell(t);if(e){return e}t=a.getParent(t,".flickity-slider > *");return this.getCell(t)};v.getAdjacentCellElements=function(t,e){if(!t){return this.selectedSlide.getCellElements()}e=e===undefined?this.selectedIndex:e;var i=this.slides.length;if(1+t*2>=i){return this.getCellElements()}var n=[];for(var s=e-t;s<=e+t;s++){var r=this.options.wrapAround?a.modulo(s,i):s;var o=this.slides[r];if(o){n=n.concat(o.getCellElements())}}return n};v.queryCell=function(t){if(typeof t=="number"){return this.cells[t]}if(typeof t=="string"){if(t.match(/^[#.]?[\d/]/)){return}t=this.element.querySelector(t)}return this.getCell(t)};v.uiChange=function(){this.emitEvent("uiChange")};v.childUIPointerDown=function(t){if(t.type!="touchstart"){t.preventDefault()}this.focus()};v.onresize=function(){this.watchCSS();this.resize()};a.debounceMethod(p,"onresize",150);v.resize=function(){if(!this.isActive||this.isAnimating||this.isDragging){return}this.getSize();if(this.options.wrapAround){this.x=a.modulo(this.x,this.slideableWidth)}this.positionCells();this._getWrapShiftCells();this.setGallerySize();this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,false,true)};v.watchCSS=function(){var t=this.options.watchCSS;if(!t){return}var e=h(this.element,":after").content;if(e.indexOf("flickity")!=-1){this.activate()}else{this.deactivate()}};v.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(!this.options.accessibility||e){return}var i=p.keyboardHandlers[t.keyCode];if(i){i.call(this)}};p.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange();this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange();this[t]()}};v.focus=function(){var t=n.pageYOffset;this.element.focus({preventScroll:true});if(n.pageYOffset!=t){n.scrollTo(n.pageXOffset,t)}};v.deactivate=function(){if(!this.isActive){return}this.element.classList.remove("flickity-enabled");this.element.classList.remove("flickity-rtl");this.unselectSelectedSlide();this.cells.forEach(function(t){t.destroy()});this.element.removeChild(this.viewport);u(this.slider.children,this.element);if(this.options.accessibility){this.element.removeAttribute("tabIndex");this.element.removeEventListener("keydown",this)}this.isActive=false;this.emitEvent("deactivate")};v.destroy=function(){this.deactivate();n.removeEventListener("resize",this);this.allOff();this.emitEvent("destroy");if(l&&this.$element){l.removeData(this.element,"flickity")}delete this.element.flickityGUID;delete f[this.guid]};a.extend(v,r);p.data=function(t){t=a.getQueryElement(t);var e=t&&t.flickityGUID;return e&&f[e]};a.htmlInit(p,"flickity");if(l&&l.bridget){l.bridget("flickity",p)}p.setJQuery=function(t){l=t};p.Cell=s;p.Slide=o;return p});
/*!
 * Unipointer v2.4.0
 * base class for doing one thing with pointer event
 * MIT license
 */
(function(e,i){if(typeof define=="function"&&define.amd){define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("ev-emitter"))}else{e.Unipointer=i(e,e.EvEmitter)}})(window,function t(s,e){function i(){}function n(){}var r=n.prototype=Object.create(e.prototype);r.bindStartEvent=function(t){this._bindStartEvent(t,true)};r.unbindStartEvent=function(t){this._bindStartEvent(t,false)};r._bindStartEvent=function(t,e){e=e===undefined?true:e;var i=e?"addEventListener":"removeEventListener";var n="mousedown";if("ontouchstart"in s){n="touchstart"}else if(s.PointerEvent){n="pointerdown"}t[i](n,this)};r.handleEvent=function(t){var e="on"+t.type;if(this[e]){this[e](t)}};r.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier){return i}}};r.onmousedown=function(t){var e=t.button;if(e&&(e!==0&&e!==1)){return}this._pointerDown(t,t)};r.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])};r.onpointerdown=function(t){this._pointerDown(t,t)};r._pointerDown=function(t,e){if(t.button||this.isPointerDown){return}this.isPointerDown=true;this.pointerIdentifier=e.pointerId!==undefined?e.pointerId:e.identifier;this.pointerDown(t,e)};r.pointerDown=function(t,e){this._bindPostStartEvents(t);this.emitEvent("pointerDown",[t,e])};var o={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};r._bindPostStartEvents=function(t){if(!t){return}var e=o[t.type];e.forEach(function(t){s.addEventListener(t,this)},this);this._boundPointerEvents=e};r._unbindPostStartEvents=function(){if(!this._boundPointerEvents){return}this._boundPointerEvents.forEach(function(t){s.removeEventListener(t,this)},this);delete this._boundPointerEvents};r.onmousemove=function(t){this._pointerMove(t,t)};r.onpointermove=function(t){if(t.pointerId==this.pointerIdentifier){this._pointerMove(t,t)}};r.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);if(e){this._pointerMove(t,e)}};r._pointerMove=function(t,e){this.pointerMove(t,e)};r.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])};r.onmouseup=function(t){this._pointerUp(t,t)};r.onpointerup=function(t){if(t.pointerId==this.pointerIdentifier){this._pointerUp(t,t)}};r.ontouchend=function(t){var e=this.getTouch(t.changedTouches);if(e){this._pointerUp(t,e)}};r._pointerUp=function(t,e){this._pointerDone();this.pointerUp(t,e)};r.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])};r._pointerDone=function(){this._pointerReset();this._unbindPostStartEvents();this.pointerDone()};r._pointerReset=function(){this.isPointerDown=false;delete this.pointerIdentifier};r.pointerDone=i;r.onpointercancel=function(t){if(t.pointerId==this.pointerIdentifier){this._pointerCancel(t,t)}};r.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);if(e){this._pointerCancel(t,e)}};r._pointerCancel=function(t,e){this._pointerDone();this.pointerCancel(t,e)};r.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])};n.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}};return n});
/*!
 * Unidragger v2.4.0
 * Draggable base class
 * MIT license
 */
(function(e,i){if(typeof define=="function"&&define.amd){define("unidragger/unidragger",["unipointer/unipointer"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("unipointer"))}else{e.Unidragger=i(e,e.Unipointer)}})(window,function t(r,e){function i(){}var n=i.prototype=Object.create(e.prototype);n.bindHandles=function(){this._bindHandles(true)};n.unbindHandles=function(){this._bindHandles(false)};n._bindHandles=function(t){t=t===undefined?true:t;var e=t?"addEventListener":"removeEventListener";var i=t?this._touchActionValue:"";for(var n=0;n<this.handles.length;n++){var s=this.handles[n];this._bindStartEvent(s,t);s[e]("click",this);if(r.PointerEvent){s.style.touchAction=i}}};n._touchActionValue="none";n.pointerDown=function(t,e){var i=this.okayPointerDown(t);if(!i){return}this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY};t.preventDefault();this.pointerDownBlur();this._bindPostStartEvents(t);this.emitEvent("pointerDown",[t,e])};var s={TEXTAREA:true,INPUT:true,SELECT:true,OPTION:true};var o={radio:true,checkbox:true,button:true,submit:true,image:true,file:true};n.okayPointerDown=function(t){var e=s[t.target.nodeName];var i=o[t.target.type];var n=!e||i;if(!n){this._pointerReset()}return n};n.pointerDownBlur=function(){var t=document.activeElement;var e=t&&t.blur&&t!=document.body;if(e){t.blur()}};n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]);this._dragMove(t,e,i)};n._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};if(!this.isDragging&&this.hasDragStarted(i)){this._dragStart(t,e)}return i};n.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3};n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]);this._dragPointerUp(t,e)};n._dragPointerUp=function(t,e){if(this.isDragging){this._dragEnd(t,e)}else{this._staticClick(t,e)}};n._dragStart=function(t,e){this.isDragging=true;this.isPreventingClicks=true;this.dragStart(t,e)};n.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])};n._dragMove=function(t,e,i){if(!this.isDragging){return}this.dragMove(t,e,i)};n.dragMove=function(t,e,i){t.preventDefault();this.emitEvent("dragMove",[t,e,i])};n._dragEnd=function(t,e){this.isDragging=false;setTimeout(function(){delete this.isPreventingClicks}.bind(this));this.dragEnd(t,e)};n.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])};n.onclick=function(t){if(this.isPreventingClicks){t.preventDefault()}};n._staticClick=function(t,e){if(this.isIgnoringMouseUp&&t.type=="mouseup"){return}this.staticClick(t,e);if(t.type!="mouseup"){this.isIgnoringMouseUp=true;setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)}};n.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])};i.getPointerPoint=e.getPointerPoint;return i});(function(n,s){if(typeof define=="function"&&define.amd){define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)})}else if(typeof module=="object"&&module.exports){module.exports=s(n,require("./flickity"),require("unidragger"),require("fizzy-ui-utils"))}else{n.Flickity=s(n,n.Flickity,n.Unidragger,n.fizzyUIUtils)}})(window,function t(n,e,i,a){a.extend(e.defaults,{draggable:">1",dragThreshold:3});e.createMethods.push("_createDrag");var s=e.prototype;a.extend(s,i.prototype);s._touchActionValue="pan-y";s._createDrag=function(){this.on("activate",this.onActivateDrag);this.on("uiChange",this._uiChangeDrag);this.on("deactivate",this.onDeactivateDrag);this.on("cellChange",this.updateDraggable)};s.onActivateDrag=function(){this.handles=[this.viewport];this.bindHandles();this.updateDraggable()};s.onDeactivateDrag=function(){this.unbindHandles();this.element.classList.remove("is-draggable")};s.updateDraggable=function(){if(this.options.draggable==">1"){this.isDraggable=this.slides.length>1}else{this.isDraggable=this.options.draggable}if(this.isDraggable){this.element.classList.add("is-draggable")}else{this.element.classList.remove("is-draggable")}};s.bindDrag=function(){this.options.draggable=true;this.updateDraggable()};s.unbindDrag=function(){this.options.draggable=false;this.updateDraggable()};s._uiChangeDrag=function(){delete this.isFreeScrolling};s.pointerDown=function(t,e){if(!this.isDraggable){this._pointerDownDefault(t,e);return}var i=this.okayPointerDown(t);if(!i){return}this._pointerDownPreventDefault(t);this.pointerDownFocus(t);if(document.activeElement!=this.element){this.pointerDownBlur()}this.dragX=this.x;this.viewport.classList.add("is-pointer-down");this.pointerDownScroll=o();n.addEventListener("scroll",this);this._pointerDownDefault(t,e)};s._pointerDownDefault=function(t,e){this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY};this._bindPostStartEvents(t);this.dispatchEvent("pointerDown",t,[e])};var r={INPUT:true,TEXTAREA:true,SELECT:true};s.pointerDownFocus=function(t){var e=r[t.target.nodeName];if(!e){this.focus()}};s._pointerDownPreventDefault=function(t){var e=t.type=="touchstart";var i=t.pointerType=="touch";var n=r[t.target.nodeName];if(!e&&!i&&!n){t.preventDefault()}};s.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold};s.pointerUp=function(t,e){delete this.isTouchScrolling;this.viewport.classList.remove("is-pointer-down");this.dispatchEvent("pointerUp",t,[e]);this._dragPointerUp(t,e)};s.pointerDone=function(){n.removeEventListener("scroll",this);delete this.pointerDownScroll};s.dragStart=function(t,e){if(!this.isDraggable){return}this.dragStartPosition=this.x;this.startAnimation();n.removeEventListener("scroll",this);this.dispatchEvent("dragStart",t,[e])};s.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]);this._dragMove(t,e,i)};s.dragMove=function(t,e,i){if(!this.isDraggable){return}t.preventDefault();this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;if(this.options.wrapAround){i.x%=this.slideableWidth}var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var r=Math.max(-this.slides[0].target,this.dragStartPosition);s=s>r?(s+r)*.5:s;var o=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<o?(s+o)*.5:s}this.dragX=s;this.dragMoveTime=new Date;this.dispatchEvent("dragMove",t,[e,i])};s.dragEnd=function(t,e){if(!this.isDraggable){return}if(this.options.freeScroll){this.isFreeScrolling=true}var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else if(!this.options.freeScroll&&i==this.selectedIndex){i+=this.dragEndBoostSelect()}delete this.previousDragX;this.isDragSelect=this.options.wrapAround;this.select(i);delete this.isDragSelect;this.dispatchEvent("dragEnd",t,[e])};s.dragEndRestingSelect=function(){var t=this.getRestingPosition();var e=Math.abs(this.getSlideDistance(-t,this.selectedIndex));var i=this._getClosestResting(t,e,1);var n=this._getClosestResting(t,e,-1);var s=i.distance<n.distance?i.index:n.index;return s};s._getClosestResting=function(t,e,i){var n=this.selectedIndex;var s=Infinity;var r=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};while(r(e,s)){n+=i;s=e;e=this.getSlideDistance(-t,n);if(e===null){break}e=Math.abs(e)}return{distance:s,index:n-i}};s.getSlideDistance=function(t,e){var i=this.slides.length;var n=this.options.wrapAround&&i>1;var s=n?a.modulo(e,i):e;var r=this.slides[s];if(!r){return null}var o=n?this.slideableWidth*Math.floor(e/i):0;return t-(r.target+o)};s.dragEndBoostSelect=function(){if(this.previousDragX===undefined||!this.dragMoveTime||new Date-this.dragMoveTime>100){return 0}var t=this.getSlideDistance(-this.dragX,this.selectedIndex);var e=this.previousDragX-this.dragX;if(t>0&&e>0){return 1}else if(t<0&&e<0){return-1}return 0};s.staticClick=function(t,e){var i=this.getParentCell(t.target);var n=i&&i.element;var s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])};s.onscroll=function(){var t=o();var e=this.pointerDownScroll.x-t.x;var i=this.pointerDownScroll.y-t.y;if(Math.abs(e)>3||Math.abs(i)>3){this._pointerDone()}};function o(){return{x:n.pageXOffset,y:n.pageYOffset}}return e});(function(n,s){if(typeof define=="function"&&define.amd){define("flickity/js/prev-next-button",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)})}else if(typeof module=="object"&&module.exports){module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils"))}else{s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}})(window,function t(e,i,n,s){"use strict";var r="http://www.w3.org/2000/svg";function o(t,e){this.direction=t;this.parent=e;this._create()}o.prototype=Object.create(n.prototype);o.prototype._create=function(){this.isEnabled=true;this.isPrevious=this.direction==-1;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button";e.className+=this.isPrevious?" previous":" next";e.setAttribute("type","button");this.disable();e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i);this.parent.on("select",this.update.bind(this));this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))};o.prototype.activate=function(){this.bindStartEvent(this.element);this.element.addEventListener("click",this);this.parent.element.appendChild(this.element)};o.prototype.deactivate=function(){this.parent.element.removeChild(this.element);this.unbindStartEvent(this.element);this.element.removeEventListener("click",this)};o.prototype.createSVG=function(){var t=document.createElementNS(r,"svg");t.setAttribute("class","flickity-button-icon");t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(r,"path");var i=a(this.parent.options.arrowShape);e.setAttribute("d",i);e.setAttribute("class","arrow");if(!this.isLeft){e.setAttribute("transform","translate(100, 100) rotate(180) ")}t.appendChild(e);return t};function a(t){if(typeof t=="string"){return t}return"M "+t.x0+",50"+" L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50 "+" L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z"}o.prototype.handleEvent=s.handleEvent;o.prototype.onclick=function(){if(!this.isEnabled){return}this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()};o.prototype.enable=function(){if(this.isEnabled){return}this.element.disabled=false;this.isEnabled=true};o.prototype.disable=function(){if(!this.isEnabled){return}this.element.disabled=true;this.isEnabled=false};o.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&t.length>1){this.enable();return}var e=t.length?t.length-1:0;var i=this.isPrevious?0:e;var n=this.parent.selectedIndex==i?"disable":"enable";this[n]()};o.prototype.destroy=function(){this.deactivate();this.allOff()};s.extend(i.defaults,{prevNextButtons:true,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}});i.createMethods.push("_createPrevNextButtons");var l=i.prototype;l._createPrevNextButtons=function(){if(!this.options.prevNextButtons){return}this.prevButton=new o(-1,this);this.nextButton=new o(1,this);this.on("activate",this.activatePrevNextButtons)};l.activatePrevNextButtons=function(){this.prevButton.activate();this.nextButton.activate();this.on("deactivate",this.deactivatePrevNextButtons)};l.deactivatePrevNextButtons=function(){this.prevButton.deactivate();this.nextButton.deactivate();this.off("deactivate",this.deactivatePrevNextButtons)};i.PrevNextButton=o;return i});(function(n,s){if(typeof define=="function"&&define.amd){define("flickity/js/page-dots",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)})}else if(typeof module=="object"&&module.exports){module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils"))}else{s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}})(window,function t(e,i,n,s){function r(t){this.parent=t;this._create()}r.prototype=Object.create(n.prototype);r.prototype._create=function(){this.holder=document.createElement("ol");this.holder.className="flickity-page-dots";this.dots=[];this.handleClick=this.onClick.bind(this);this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))};r.prototype.activate=function(){this.setDots();this.holder.addEventListener("click",this.handleClick);this.bindStartEvent(this.holder);this.parent.element.appendChild(this.holder)};r.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick);this.unbindStartEvent(this.holder);this.parent.element.removeChild(this.holder)};r.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;if(t>0){this.addDots(t)}else if(t<0){this.removeDots(-t)}};r.prototype.addDots=function(t){var e=document.createDocumentFragment();var i=[];var n=this.dots.length;var s=n+t;for(var r=n;r<s;r++){var o=document.createElement("li");o.className="dot";o.setAttribute("aria-label","Page dot "+(r+1));e.appendChild(o);i.push(o)}this.holder.appendChild(e);this.dots=this.dots.concat(i)};r.prototype.removeDots=function(t){var e=this.dots.splice(this.dots.length-t,t);e.forEach(function(t){this.holder.removeChild(t)},this)};r.prototype.updateSelected=function(){if(this.selectedDot){this.selectedDot.className="dot";this.selectedDot.removeAttribute("aria-current")}if(!this.dots.length){return}this.selectedDot=this.dots[this.parent.selectedIndex];this.selectedDot.className="dot is-selected";this.selectedDot.setAttribute("aria-current","step")};r.prototype.onTap=r.prototype.onClick=function(t){var e=t.target;if(e.nodeName!="LI"){return}this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)};r.prototype.destroy=function(){this.deactivate();this.allOff()};i.PageDots=r;s.extend(i.defaults,{pageDots:true});i.createMethods.push("_createPageDots");var o=i.prototype;o._createPageDots=function(){if(!this.options.pageDots){return}this.pageDots=new r(this);this.on("activate",this.activatePageDots);this.on("select",this.updateSelectedPageDots);this.on("cellChange",this.updatePageDots);this.on("resize",this.updatePageDots);this.on("deactivate",this.deactivatePageDots)};o.activatePageDots=function(){this.pageDots.activate()};o.updateSelectedPageDots=function(){this.pageDots.updateSelected()};o.updatePageDots=function(){this.pageDots.setDots()};o.deactivatePageDots=function(){this.pageDots.deactivate()};i.PageDots=r;return i});(function(t,n){if(typeof define=="function"&&define.amd){define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,e,i){return n(t,e,i)})}else if(typeof module=="object"&&module.exports){module.exports=n(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity"))}else{n(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}})(window,function t(e,i,n){function s(t){this.parent=t;this.state="stopped";this.onVisibilityChange=this.visibilityChange.bind(this);this.onVisibilityPlay=this.visibilityPlay.bind(this)}s.prototype=Object.create(e.prototype);s.prototype.play=function(){if(this.state=="playing"){return}var t=document.hidden;if(t){document.addEventListener("visibilitychange",this.onVisibilityPlay);return}this.state="playing";document.addEventListener("visibilitychange",this.onVisibilityChange);this.tick()};s.prototype.tick=function(){if(this.state!="playing"){return}var t=this.parent.options.autoPlay;t=typeof t=="number"?t:3e3;var e=this;this.clear();this.timeout=setTimeout(function(){e.parent.next(true);e.tick()},t)};s.prototype.stop=function(){this.state="stopped";this.clear();document.removeEventListener("visibilitychange",this.onVisibilityChange)};s.prototype.clear=function(){clearTimeout(this.timeout)};s.prototype.pause=function(){if(this.state=="playing"){this.state="paused";this.clear()}};s.prototype.unpause=function(){if(this.state=="paused"){this.play()}};s.prototype.visibilityChange=function(){var t=document.hidden;this[t?"pause":"unpause"]()};s.prototype.visibilityPlay=function(){this.play();document.removeEventListener("visibilitychange",this.onVisibilityPlay)};i.extend(n.defaults,{pauseAutoPlayOnHover:true});n.createMethods.push("_createPlayer");var r=n.prototype;r._createPlayer=function(){this.player=new s(this);this.on("activate",this.activatePlayer);this.on("uiChange",this.stopPlayer);this.on("pointerDown",this.stopPlayer);this.on("deactivate",this.deactivatePlayer)};r.activatePlayer=function(){if(!this.options.autoPlay){return}this.player.play();this.element.addEventListener("mouseenter",this)};r.playPlayer=function(){this.player.play()};r.stopPlayer=function(){this.player.stop()};r.pausePlayer=function(){this.player.pause()};r.unpausePlayer=function(){this.player.unpause()};r.deactivatePlayer=function(){this.player.stop();this.element.removeEventListener("mouseenter",this)};r.onmouseenter=function(){if(!this.options.pauseAutoPlayOnHover){return}this.player.pause();this.element.addEventListener("mouseleave",this)};r.onmouseleave=function(){this.player.unpause();this.element.removeEventListener("mouseleave",this)};n.Player=s;return n});(function(i,n){if(typeof define=="function"&&define.amd){define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)})}else if(typeof module=="object"&&module.exports){module.exports=n(i,require("./flickity"),require("fizzy-ui-utils"))}else{n(i,i.Flickity,i.fizzyUIUtils)}})(window,function t(e,i,n){function l(t){var e=document.createDocumentFragment();t.forEach(function(t){e.appendChild(t.element)});return e}var s=i.prototype;s.insert=function(t,e){var i=this._makeCells(t);if(!i||!i.length){return}var n=this.cells.length;e=e===undefined?n:e;var s=l(i);var r=e==n;if(r){this.slider.appendChild(s)}else{var o=this.cells[e].element;this.slider.insertBefore(s,o)}if(e===0){this.cells=i.concat(this.cells)}else if(r){this.cells=this.cells.concat(i)}else{var a=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(a)}this._sizeCells(i);this.cellChange(e,true)};s.append=function(t){this.insert(t,this.cells.length)};s.prepend=function(t){this.insert(t,0)};s.remove=function(t){var e=this.getCells(t);if(!e||!e.length){return}var i=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);i=Math.min(e,i);n.removeFrom(this.cells,t)},this);this.cellChange(i,true)};s.cellSizeChange=function(t){var e=this.getCell(t);if(!e){return}e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)};s.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t);this._getWrapShiftCells();this.setGallerySize();var n=this.getCell(i);if(n){this.selectedIndex=this.getCellSlideIndex(n)}this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex);this.emitEvent("cellChange",[t]);this.select(this.selectedIndex);if(e){this.positionSliderAtSelected()}};return i});(function(i,n){if(typeof define=="function"&&define.amd){define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)})}else if(typeof module=="object"&&module.exports){module.exports=n(i,require("./flickity"),require("fizzy-ui-utils"))}else{n(i,i.Flickity,i.fizzyUIUtils)}})(window,function t(e,i,o){"use strict";i.createMethods.push("_createLazyload");var n=i.prototype;n._createLazyload=function(){this.on("select",this.lazyLoad)};n.lazyLoad=function(){var t=this.options.lazyLoad;if(!t){return}var e=typeof t=="number"?t:0;var i=this.getAdjacentCellElements(e);var n=[];i.forEach(function(t){var e=s(t);n=n.concat(e)});n.forEach(function(t){new r(t,this)},this)};function s(t){if(t.nodeName=="IMG"){var e=t.getAttribute("data-flickity-lazyload");var i=t.getAttribute("data-flickity-lazyload-src");var n=t.getAttribute("data-flickity-lazyload-srcset");if(e||i||n){return[t]}}var s="img[data-flickity-lazyload], "+"img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]";var r=t.querySelectorAll(s);return o.makeArray(r)}function r(t,e){this.img=t;this.flickity=e;this.load()}r.prototype.handleEvent=o.handleEvent;r.prototype.load=function(){this.img.addEventListener("load",this);this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src");var e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t;if(e){this.img.setAttribute("srcset",e)}this.img.removeAttribute("data-flickity-lazyload");this.img.removeAttribute("data-flickity-lazyload-src");this.img.removeAttribute("data-flickity-lazyload-srcset")};r.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")};r.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")};r.prototype.complete=function(t,e){this.img.removeEventListener("load",this);this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img);var n=i&&i.element;this.flickity.cellSizeChange(n);this.img.classList.add(e);this.flickity.dispatchEvent("lazyLoad",t,n)};i.LazyLoader=r;return i});
/*!
 * Flickity v2.3.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */
(function(t,e){if(typeof define=="function"&&define.amd){define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e)}else if(typeof module=="object"&&module.exports){module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload"))}})(window,function t(e){return e});
/*!
 * Flickity asNavFor v2.0.2
 * enable asNavFor for Flickity
 */
(function(t,e){if(typeof define=="function"&&define.amd){define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e)}else if(typeof module=="object"&&module.exports){module.exports=e(require("flickity"),require("fizzy-ui-utils"))}else{t.Flickity=e(t.Flickity,t.fizzyUIUtils)}})(window,function t(n,s){n.createMethods.push("_createAsNavFor");var e=n.prototype;e._createAsNavFor=function(){this.on("activate",this.activateAsNavFor);this.on("deactivate",this.deactivateAsNavFor);this.on("destroy",this.destroyAsNavFor);var e=this.options.asNavFor;if(!e){return}var i=this;setTimeout(function t(){i.setNavCompanion(e)})};e.setNavCompanion=function(t){t=s.getQueryElement(t);var e=n.data(t);if(!e||e==this){return}this.navCompanion=e;var i=this;this.onNavCompanionSelect=function(){i.navCompanionSelect()};e.on("select",this.onNavCompanionSelect);this.on("staticClick",this.onNavStaticClick);this.navCompanionSelect(true)};e.navCompanionSelect=function(t){var e=this.navCompanion&&this.navCompanion.selectedCells;if(!e){return}var i=e[0];var n=this.navCompanion.cells.indexOf(i);var s=n+e.length-1;var r=Math.floor(a(n,s,this.navCompanion.cellAlign));this.selectCell(r,false,t);this.removeNavSelectedElements();if(r>=this.cells.length){return}var o=this.cells.slice(n,s+1);this.navSelectedElements=o.map(function(t){return t.element});this.changeNavSelectedClass("add")};function a(t,e,i){return(e-t)*i+t}e.changeNavSelectedClass=function(e){this.navSelectedElements.forEach(function(t){t.classList[e]("is-nav-selected")})};e.activateAsNavFor=function(){this.navCompanionSelect(true)};e.removeNavSelectedElements=function(){if(!this.navSelectedElements){return}this.changeNavSelectedClass("remove");delete this.navSelectedElements};e.onNavStaticClick=function(t,e,i,n){if(typeof n=="number"){this.navCompanion.selectCell(n)}};e.deactivateAsNavFor=function(){this.removeNavSelectedElements()};e.destroyAsNavFor=function(){if(!this.navCompanion){return}this.navCompanion.off("select",this.onNavCompanionSelect);this.off("staticClick",this.onNavStaticClick);delete this.navCompanion};return n});
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(e,i){"use strict";if(typeof define=="function"&&define.amd){define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("ev-emitter"))}else{e.imagesLoaded=i(e,e.EvEmitter)}})(typeof window!=="undefined"?window:this,function t(e,i){var s=e.jQuery;var r=e.console;function o(t,e){for(var i in e){t[i]=e[i]}return t}var n=Array.prototype.slice;function a(t){if(Array.isArray(t)){return t}var e=typeof t=="object"&&typeof t.length=="number";if(e){return n.call(t)}return[t]}function l(t,e,i){if(!(this instanceof l)){return new l(t,e,i)}var n=t;if(typeof t=="string"){n=document.querySelectorAll(t)}if(!n){r.error("Bad element for imagesLoaded "+(n||t));return}this.elements=a(n);this.options=o({},this.options);if(typeof e=="function"){i=e}else{o(this.options,e)}if(i){this.on("always",i)}this.getImages();if(s){this.jqDeferred=new s.Deferred}setTimeout(this.check.bind(this))}l.prototype=Object.create(i.prototype);l.prototype.options={};l.prototype.getImages=function(){this.images=[];this.elements.forEach(this.addElementImages,this)};l.prototype.addElementImages=function(t){if(t.nodeName=="IMG"){this.addImage(t)}if(this.options.background===true){this.addElementBackgroundImages(t)}var e=t.nodeType;if(!e||!h[e]){return}var i=t.querySelectorAll("img");for(var n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if(typeof this.options.background=="string"){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var o=r[n];this.addElementBackgroundImages(o)}}};var h={1:true,9:true,11:true};l.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(!e){return}var i=/url\((['"])?(.*?)\1\)/gi;var n=i.exec(e.backgroundImage);while(n!==null){var s=n&&n[2];if(s){this.addBackground(s,t)}n=i.exec(e.backgroundImage)}};l.prototype.addImage=function(t){var e=new c(t);this.images.push(e)};l.prototype.addBackground=function(t,e){var i=new u(t,e);this.images.push(i)};l.prototype.check=function(){var n=this;this.progressedCount=0;this.hasAnyBroken=false;if(!this.images.length){this.complete();return}function e(t,e,i){setTimeout(function(){n.progress(t,e,i)})}this.images.forEach(function(t){t.once("progress",e);t.check()})};l.prototype.progress=function(t,e,i){this.progressedCount++;this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded;this.emitEvent("progress",[this,t,e]);if(this.jqDeferred&&this.jqDeferred.notify){this.jqDeferred.notify(this,t)}if(this.progressedCount==this.images.length){this.complete()}if(this.options.debug&&r){r.log("progress: "+i,t,e)}};l.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";this.isComplete=true;this.emitEvent(t,[this]);this.emitEvent("always",[this]);if(this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}};function c(t){this.img=t}c.prototype=Object.create(i.prototype);c.prototype.check=function(){var t=this.getIsImageComplete();if(t){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image;this.proxyImage.addEventListener("load",this);this.proxyImage.addEventListener("error",this);this.img.addEventListener("load",this);this.img.addEventListener("error",this);this.proxyImage.src=this.img.src};c.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth};c.prototype.confirm=function(t,e){this.isLoaded=t;this.emitEvent("progress",[this,this.img,e])};c.prototype.handleEvent=function(t){var e="on"+t.type;if(this[e]){this[e](t)}};c.prototype.onload=function(){this.confirm(true,"onload");this.unbindEvents()};c.prototype.onerror=function(){this.confirm(false,"onerror");this.unbindEvents()};c.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this);this.proxyImage.removeEventListener("error",this);this.img.removeEventListener("load",this);this.img.removeEventListener("error",this)};function u(t,e){this.url=t;this.element=e;this.img=new Image}u.prototype=Object.create(c.prototype);u.prototype.check=function(){this.img.addEventListener("load",this);this.img.addEventListener("error",this);this.img.src=this.url;var t=this.getIsImageComplete();if(t){this.confirm(this.img.naturalWidth!==0,"naturalWidth");this.unbindEvents()}};u.prototype.unbindEvents=function(){this.img.removeEventListener("load",this);this.img.removeEventListener("error",this)};u.prototype.confirm=function(t,e){this.isLoaded=t;this.emitEvent("progress",[this,this.element,e])};l.makeJQueryPlugin=function(t){t=t||e.jQuery;if(!t){return}s=t;s.fn.imagesLoaded=function(t,e){var i=new l(this,t,e);return i.jqDeferred.promise(s(this))}};l.makeJQueryPlugin();return l});
/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */
(function(i,n){if(typeof define=="function"&&define.amd){define(["flickity/js/index","imagesloaded/imagesloaded"],function(t,e){return n(i,t,e)})}else if(typeof module=="object"&&module.exports){module.exports=n(i,require("flickity"),require("imagesloaded"))}else{i.Flickity=n(i,i.Flickity,i.imagesLoaded)}})(window,function t(e,i,s){"use strict";i.createMethods.push("_createImagesLoaded");var n=i.prototype;n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)};n.imagesLoaded=function(){if(!this.options.imagesLoaded){return}var n=this;function t(t,e){var i=n.getParentCell(e.img);n.cellSizeChange(i&&i.element);if(!n.options.freeScroll){n.positionSliderAtSelected()}}s(this.slider).on("progress",t)};return i});
/*!
 * Flickity sync v2.0.0
 * enable sync for Flickity
 */

/*jshint browser: true, undef: true, unused: true, strict: true*/

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'flickity/js/index',
      'fizzy-ui-utils/utils'
    ], factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( Flickity, utils ) {

'use strict';

// -------------------------- sync prototype -------------------------- //

// Flickity.defaults.sync = false;

Flickity.createMethods.push('_createSync');

Flickity.prototype._createSync = function() {
  this.syncers = {};
  var syncOption = this.options.sync;

  this.on( 'destroy', this.unsyncAll );

  if ( !syncOption ) {
    return;
  }
  // HACK do async, give time for other flickity to be initalized
  var _this = this;
  setTimeout( function initSyncCompanion() {
    _this.sync( syncOption );
  });
};

/**
 * sync
 * @param {Element} or {String} elem
 */
Flickity.prototype.sync = function( elem ) {
  elem = utils.getQueryElement( elem );
  var companion = Flickity.data( elem );
  if ( !companion ) {
    return;
  }
  // two hearts, that beat as one
  this._syncCompanion( companion );
  companion._syncCompanion( this );
};

/**
 * @param {Flickity} companion
 */
Flickity.prototype._syncCompanion = function( companion ) {
  var _this = this;
  function syncListener() {
    var index = _this.selectedIndex;
    // do not select if already selected, prevent infinite loop
    if ( companion.selectedIndex != index ) {
      companion.select( index );
    }
  }
  this.on( 'select', syncListener );
  // keep track of all synced flickities
  // hold on to listener to unsync
  this.syncers[ companion.guid ] = {
    flickity: companion,
    listener: syncListener
  };
};

/**
 * unsync
 * @param {Element} or {String} elem
 */
Flickity.prototype.unsync = function( elem ) {
  elem = utils.getQueryElement( elem );
  var companion = Flickity.data( elem );
  this._unsync( companion );
};

/**
 * @param {Flickity} companion
 */
Flickity.prototype._unsync = function( companion ) {
  if ( !companion ) {
    return;
  }
  // I love you but I've chosen darkness
  this._unsyncCompanion( companion );
  companion._unsyncCompanion( this );
};

/**
 * @param {Flickity} companion
 */
Flickity.prototype._unsyncCompanion = function( companion ) {
  var id = companion.guid;
  var syncer = this.syncers[ id ];
  this.off( 'select', syncer.listener );
  delete this.syncers[ id ];
};

Flickity.prototype.unsyncAll = function() {
  for ( var id in this.syncers ) {
    var syncer = this.syncers[ id ];
    this._unsync( syncer.flickity );
  }
};

// -----  ----- //

return Flickity;

}));
/**
 * Flickity fade v1.0.0
 * Fade between Flickity slides
 */

/* jshint browser: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'flickity/js/index',
      'fizzy-ui-utils/utils',
    ], factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( this, function factory( Flickity, utils ) {

// ---- Slide ---- //

var Slide = Flickity.Slide;

var slideUpdateTarget = Slide.prototype.updateTarget;
Slide.prototype.updateTarget = function() {
  slideUpdateTarget.apply( this, arguments );
  if ( !this.parent.options.fade ) {
    return;
  }
  // position cells at selected target
  var slideTargetX = this.target - this.x;
  var firstCellX = this.cells[0].x;
  this.cells.forEach( function( cell ) {
    var targetX = cell.x - firstCellX - slideTargetX;
    cell.renderPosition( targetX );
  });
};

Slide.prototype.setOpacity = function( alpha ) {
  this.cells.forEach( function( cell ) {
    cell.element.style.opacity = alpha;
  });
};

// ---- Flickity ---- //

var proto = Flickity.prototype;

Flickity.createMethods.push('_createFade');

proto._createFade = function() {
  this.fadeIndex = this.selectedIndex;
  this.prevSelectedIndex = this.selectedIndex;
  this.on( 'select', this.onSelectFade );
  this.on( 'dragEnd', this.onDragEndFade );
  this.on( 'settle', this.onSettleFade );
  this.on( 'activate', this.onActivateFade );
  this.on( 'deactivate', this.onDeactivateFade );
};

var updateSlides = proto.updateSlides;
proto.updateSlides = function() {
  updateSlides.apply( this, arguments );
  if ( !this.options.fade ) {
    return;
  }
  // set initial opacity
  this.slides.forEach( function( slide, i ) {
    var alpha = i == this.selectedIndex ? 1 : 0;
    slide.setOpacity( alpha );
  }, this );
};

/* ---- events ---- */

proto.onSelectFade = function() {
  // in case of resize, keep fadeIndex within current count
  this.fadeIndex = Math.min( this.prevSelectedIndex, this.slides.length - 1 );
  this.prevSelectedIndex = this.selectedIndex;
};

proto.onSettleFade = function() {
  delete this.didDragEnd;
  if ( !this.options.fade ) {
    return;
  }
  // set full and 0 opacity on selected & faded slides
  this.selectedSlide.setOpacity( 1 );
  var fadedSlide = this.slides[ this.fadeIndex ];
  if ( fadedSlide && this.fadeIndex != this.selectedIndex ) {
    this.slides[ this.fadeIndex ].setOpacity( 0 );
  }
};

proto.onDragEndFade = function() {
  // set flag
  this.didDragEnd = true;
};

proto.onActivateFade = function() {
  if ( this.options.fade ) {
    this.element.classList.add('is-fade');
  }
};

proto.onDeactivateFade = function() {
  if ( !this.options.fade ) {
    return;
  }
  this.element.classList.remove('is-fade');
  // reset opacity
  this.slides.forEach( function( slide ) {
    slide.setOpacity('');
  });
};

/* ---- position & fading ---- */

var positionSlider = proto.positionSlider;
proto.positionSlider = function() {
  if ( !this.options.fade ) {
    positionSlider.apply( this, arguments );
    return;
  }

  this.fadeSlides();
  this.dispatchScrollEvent();
};

var positionSliderAtSelected = proto.positionSliderAtSelected;
proto.positionSliderAtSelected = function() {
  if ( this.options.fade ) {
    // position fade slider at origin
    this.setTranslateX( 0 );
  }
  positionSliderAtSelected.apply( this, arguments );
};

proto.fadeSlides = function() {
  if ( this.slides.length < 2 ) {
    return;
  }
  // get slides to fade-in & fade-out
  var indexes = this.getFadeIndexes();
  var fadeSlideA = this.slides[ indexes.a ];
  var fadeSlideB = this.slides[ indexes.b ];
  var distance = this.wrapDifference( fadeSlideA.target, fadeSlideB.target );
  var progress = this.wrapDifference( fadeSlideA.target, -this.x );
  progress = progress / distance;

  fadeSlideA.setOpacity( 1 - progress );
  fadeSlideB.setOpacity( progress );

  // hide previous slide
  var fadeHideIndex = indexes.a;
  if ( this.isDragging ) {
    fadeHideIndex = progress > 0.5 ? indexes.a : indexes.b;
  }
  var isNewHideIndex = this.fadeHideIndex != undefined &&
    this.fadeHideIndex != fadeHideIndex &&
    this.fadeHideIndex != indexes.a &&
    this.fadeHideIndex != indexes.b;
  if ( isNewHideIndex ) {
    // new fadeHideSlide set, hide previous
    this.slides[ this.fadeHideIndex ].setOpacity( 0 );
  }
  this.fadeHideIndex = fadeHideIndex;
};

proto.getFadeIndexes = function() {
  if ( !this.isDragging && !this.didDragEnd ) {
    return {
      a: this.fadeIndex,
      b: this.selectedIndex,
    };
  }
  if ( this.options.wrapAround ) {
    return this.getFadeDragWrapIndexes();
  } else {
    return this.getFadeDragLimitIndexes();
  }
};

proto.getFadeDragWrapIndexes = function() {
  var distances = this.slides.map( function( slide, i ) {
    return this.getSlideDistance( -this.x, i );
  }, this );
  var absDistances = distances.map( function( distance ) {
    return Math.abs( distance );
  });
  var minDistance = Math.min.apply( Math, absDistances );
  var closestIndex = absDistances.indexOf( minDistance );
  var distance = distances[ closestIndex ];
  var len = this.slides.length;

  var delta = distance >= 0 ? 1 : -1;
  return {
    a: closestIndex,
    b: utils.modulo( closestIndex + delta, len ),
  };
};

proto.getFadeDragLimitIndexes = function() {
  // calculate closest previous slide
  var dragIndex = 0;
  for ( var i=0; i < this.slides.length - 1; i++ ) {
    var slide = this.slides[i];
    if ( -this.x < slide.target ) {
      break;
    }
    dragIndex = i;
  }
  return {
    a: dragIndex,
    b: dragIndex + 1,
  };
};

proto.wrapDifference = function( a, b ) {
  var diff = b - a;

  if ( !this.options.wrapAround ) {
    return diff;
  }

  var diffPlus = diff + this.slideableWidth;
  var diffMinus = diff - this.slideableWidth;
  if ( Math.abs( diffPlus ) < Math.abs( diff ) ) {
    diff = diffPlus;
  }
  if ( Math.abs( diffMinus ) < Math.abs( diff ) ) {
    diff = diffMinus;
  }
  return diff;
};

// ---- wrapAround ---- //

var _getWrapShiftCells = proto._getWrapShiftCells;
proto._getWrapShiftCells = function() {
  if ( !this.options.fade ) {
    _getWrapShiftCells.apply( this, arguments );
  }
};

var shiftWrapCells = proto.shiftWrapCells;
proto.shiftWrapCells = function() {
  if ( !this.options.fade ) {
    shiftWrapCells.apply( this, arguments );
  }
};

return Flickity;

}));
/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipe=b()}(this,function(){"use strict";var a=function(a,b,c,d){var e={features:null,bind:function(a,b,c,d){var e=(d?"remove":"add")+"EventListener";b=b.split(" ");for(var f=0;f<b.length;f++)b[f]&&a[e](b[f],c,!1)},isArray:function(a){return a instanceof Array},createEl:function(a,b){var c=document.createElement(b||"div");return a&&(c.className=a),c},getScrollY:function(){var a=window.pageYOffset;return void 0!==a?a:document.documentElement.scrollTop},unbind:function(a,b,c){e.bind(a,b,c,!0)},removeClass:function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(a,b){e.hasClass(a,b)||(a.className+=(a.className?" ":"")+b)},hasClass:function(a,b){return a.className&&new RegExp("(^|\\s)"+b+"(\\s|$)").test(a.className)},getChildByClass:function(a,b){for(var c=a.firstChild;c;){if(e.hasClass(c,b))return c;c=c.nextSibling}},arraySearch:function(a,b,c){for(var d=a.length;d--;)if(a[d][c]===b)return d;return-1},extend:function(a,b,c){for(var d in b)if(b.hasOwnProperty(d)){if(c&&a.hasOwnProperty(d))continue;a[d]=b[d]}},easing:{sine:{out:function(a){return Math.sin(a*(Math.PI/2))},inOut:function(a){return-(Math.cos(Math.PI*a)-1)/2}},cubic:{out:function(a){return--a*a*a+1}}},detectFeatures:function(){if(e.features)return e.features;var a=e.createEl(),b=a.style,c="",d={};if(d.oldIE=document.all&&!document.addEventListener,d.touch="ontouchstart"in window,window.requestAnimationFrame&&(d.raf=window.requestAnimationFrame,d.caf=window.cancelAnimationFrame),d.pointerEvent=!!window.PointerEvent||navigator.msPointerEnabled,!d.pointerEvent){var f=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var g=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);g&&g.length>0&&(g=parseInt(g[1],10),g>=1&&g<8&&(d.isOldIOSPhone=!0))}var h=f.match(/Android\s([0-9\.]*)/),i=h?h[1]:0;i=parseFloat(i),i>=1&&(i<4.4&&(d.isOldAndroid=!0),d.androidVersion=i),d.isMobileOpera=/opera mini|opera mobi/i.test(f)}for(var j,k,l=["transform","perspective","animationName"],m=["","webkit","Moz","ms","O"],n=0;n<4;n++){c=m[n];for(var o=0;o<3;o++)j=l[o],k=c+(c?j.charAt(0).toUpperCase()+j.slice(1):j),!d[j]&&k in b&&(d[j]=k);c&&!d.raf&&(c=c.toLowerCase(),d.raf=window[c+"RequestAnimationFrame"],d.raf&&(d.caf=window[c+"CancelAnimationFrame"]||window[c+"CancelRequestAnimationFrame"]))}if(!d.raf){var p=0;d.raf=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-p)),d=window.setTimeout(function(){a(b+c)},c);return p=b+c,d},d.caf=function(a){clearTimeout(a)}}return d.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,e.features=d,d}};e.detectFeatures(),e.features.oldIE&&(e.bind=function(a,b,c,d){b=b.split(" ");for(var e,f=(d?"detach":"attach")+"Event",g=function(){c.handleEvent.call(c)},h=0;h<b.length;h++)if(e=b[h])if("object"==typeof c&&c.handleEvent){if(d){if(!c["oldIE"+e])return!1}else c["oldIE"+e]=g;a[f]("on"+e,c["oldIE"+e])}else a[f]("on"+e,c)});var f=this,g=25,h=3,i={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(a){return"A"===a.tagName},getDoubleTapZoom:function(a,b){return a?1:b.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};e.extend(i,d);var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma=function(){return{x:0,y:0}},na=ma(),oa=ma(),pa=ma(),qa={},ra=0,sa={},ta=ma(),ua=0,va=!0,wa=[],xa={},ya=!1,za=function(a,b){e.extend(f,b.publicMethods),wa.push(a)},Aa=function(a){var b=ac();return a>b-1?a-b:a<0?b+a:a},Ba={},Ca=function(a,b){return Ba[a]||(Ba[a]=[]),Ba[a].push(b)},Da=function(a){var b=Ba[a];if(b){var c=Array.prototype.slice.call(arguments);c.shift();for(var d=0;d<b.length;d++)b[d].apply(f,c)}},Ea=function(){return(new Date).getTime()},Fa=function(a){ja=a,f.bg.style.opacity=a*i.bgOpacity},Ga=function(a,b,c,d,e){(!ya||e&&e!==f.currItem)&&(d/=e?e.fitRatio:f.currItem.fitRatio),a[E]=u+b+"px, "+c+"px"+v+" scale("+d+")"},Ha=function(a){ea&&(a&&(s>f.currItem.fitRatio?ya||(mc(f.currItem,!1,!0),ya=!0):ya&&(mc(f.currItem),ya=!1)),Ga(ea,pa.x,pa.y,s))},Ia=function(a){a.container&&Ga(a.container.style,a.initialPosition.x,a.initialPosition.y,a.initialZoomLevel,a)},Ja=function(a,b){b[E]=u+a+"px, 0px"+v},Ka=function(a,b){if(!i.loop&&b){var c=m+(ta.x*ra-a)/ta.x,d=Math.round(a-tb.x);(c<0&&d>0||c>=ac()-1&&d<0)&&(a=tb.x+d*i.mainScrollEndFriction)}tb.x=a,Ja(a,n)},La=function(a,b){var c=ub[a]-sa[a];return oa[a]+na[a]+c-c*(b/t)},Ma=function(a,b){a.x=b.x,a.y=b.y,b.id&&(a.id=b.id)},Na=function(a){a.x=Math.round(a.x),a.y=Math.round(a.y)},Oa=null,Pa=function(){Oa&&(e.unbind(document,"mousemove",Pa),e.addClass(a,"pswp--has_mouse"),i.mouseUsed=!0,Da("mouseUsed")),Oa=setTimeout(function(){Oa=null},100)},Qa=function(){e.bind(document,"keydown",f),N.transform&&e.bind(f.scrollWrap,"click",f),i.mouseUsed||e.bind(document,"mousemove",Pa),e.bind(window,"resize scroll orientationchange",f),Da("bindEvents")},Ra=function(){e.unbind(window,"resize scroll orientationchange",f),e.unbind(window,"scroll",r.scroll),e.unbind(document,"keydown",f),e.unbind(document,"mousemove",Pa),N.transform&&e.unbind(f.scrollWrap,"click",f),V&&e.unbind(window,p,f),clearTimeout(O),Da("unbindEvents")},Sa=function(a,b){var c=ic(f.currItem,qa,a);return b&&(da=c),c},Ta=function(a){return a||(a=f.currItem),a.initialZoomLevel},Ua=function(a){return a||(a=f.currItem),a.w>0?i.maxSpreadZoom:1},Va=function(a,b,c,d){return d===f.currItem.initialZoomLevel?(c[a]=f.currItem.initialPosition[a],!0):(c[a]=La(a,d),c[a]>b.min[a]?(c[a]=b.min[a],!0):c[a]<b.max[a]&&(c[a]=b.max[a],!0))},Wa=function(){if(E){var b=N.perspective&&!G;return u="translate"+(b?"3d(":"("),void(v=N.perspective?", 0px)":")")}E="left",e.addClass(a,"pswp--ie"),Ja=function(a,b){b.left=a+"px"},Ia=function(a){var b=a.fitRatio>1?1:a.fitRatio,c=a.container.style,d=b*a.w,e=b*a.h;c.width=d+"px",c.height=e+"px",c.left=a.initialPosition.x+"px",c.top=a.initialPosition.y+"px"},Ha=function(){if(ea){var a=ea,b=f.currItem,c=b.fitRatio>1?1:b.fitRatio,d=c*b.w,e=c*b.h;a.width=d+"px",a.height=e+"px",a.left=pa.x+"px",a.top=pa.y+"px"}}},Xa=function(a){var b="";i.escKey&&27===a.keyCode?b="close":i.arrowKeys&&(37===a.keyCode?b="prev":39===a.keyCode&&(b="next")),b&&(a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||(a.preventDefault?a.preventDefault():a.returnValue=!1,f[b]()))},Ya=function(a){a&&(Y||X||fa||T)&&(a.preventDefault(),a.stopPropagation())},Za=function(){f.setScrollOffset(0,e.getScrollY())},$a={},_a=0,ab=function(a){$a[a]&&($a[a].raf&&I($a[a].raf),_a--,delete $a[a])},bb=function(a){$a[a]&&ab(a),$a[a]||(_a++,$a[a]={})},cb=function(){for(var a in $a)$a.hasOwnProperty(a)&&ab(a)},db=function(a,b,c,d,e,f,g){var h,i=Ea();bb(a);var j=function(){if($a[a]){if(h=Ea()-i,h>=d)return ab(a),f(c),void(g&&g());f((c-b)*e(h/d)+b),$a[a].raf=H(j)}};j()},eb={shout:Da,listen:Ca,viewportSize:qa,options:i,isMainScrollAnimating:function(){return fa},getZoomLevel:function(){return s},getCurrentIndex:function(){return m},isDragging:function(){return V},isZooming:function(){return aa},setScrollOffset:function(a,b){sa.x=a,M=sa.y=b,Da("updateScrollOffset",sa)},applyZoomPan:function(a,b,c,d){pa.x=b,pa.y=c,s=a,Ha(d)},init:function(){if(!j&&!k){var c;f.framework=e,f.template=a,f.bg=e.getChildByClass(a,"pswp__bg"),J=a.className,j=!0,N=e.detectFeatures(),H=N.raf,I=N.caf,E=N.transform,L=N.oldIE,f.scrollWrap=e.getChildByClass(a,"pswp__scroll-wrap"),f.container=e.getChildByClass(f.scrollWrap,"pswp__container"),n=f.container.style,f.itemHolders=y=[{el:f.container.children[0],wrap:0,index:-1},{el:f.container.children[1],wrap:0,index:-1},{el:f.container.children[2],wrap:0,index:-1}],y[0].el.style.display=y[2].el.style.display="none",Wa(),r={resize:f.updateSize,orientationchange:function(){clearTimeout(O),O=setTimeout(function(){qa.x!==f.scrollWrap.clientWidth&&f.updateSize()},500)},scroll:Za,keydown:Xa,click:Ya};var d=N.isOldIOSPhone||N.isOldAndroid||N.isMobileOpera;for(N.animationName&&N.transform&&!d||(i.showAnimationDuration=i.hideAnimationDuration=0),c=0;c<wa.length;c++)f["init"+wa[c]]();if(b){var g=f.ui=new b(f,e);g.init()}Da("firstUpdate"),m=m||i.index||0,(isNaN(m)||m<0||m>=ac())&&(m=0),f.currItem=_b(m),(N.isOldIOSPhone||N.isOldAndroid)&&(va=!1),a.setAttribute("aria-hidden","false"),i.modal&&(va?a.style.position="fixed":(a.style.position="absolute",a.style.top=e.getScrollY()+"px")),void 0===M&&(Da("initialLayout"),M=K=e.getScrollY());var l="pswp--open ";for(i.mainClass&&(l+=i.mainClass+" "),i.showHideOpacity&&(l+="pswp--animate_opacity "),l+=G?"pswp--touch":"pswp--notouch",l+=N.animationName?" pswp--css_animation":"",l+=N.svg?" pswp--svg":"",e.addClass(a,l),f.updateSize(),o=-1,ua=null,c=0;c<h;c++)Ja((c+o)*ta.x,y[c].el.style);L||e.bind(f.scrollWrap,q,f),Ca("initialZoomInEnd",function(){f.setContent(y[0],m-1),f.setContent(y[2],m+1),y[0].el.style.display=y[2].el.style.display="block",i.focus&&a.focus(),Qa()}),f.setContent(y[1],m),f.updateCurrItem(),Da("afterInit"),va||(w=setInterval(function(){_a||V||aa||s!==f.currItem.initialZoomLevel||f.updateSize()},1e3)),e.addClass(a,"pswp--visible")}},close:function(){j&&(j=!1,k=!0,Da("close"),Ra(),cc(f.currItem,null,!0,f.destroy))},destroy:function(){Da("destroy"),Xb&&clearTimeout(Xb),a.setAttribute("aria-hidden","true"),a.className=J,w&&clearInterval(w),e.unbind(f.scrollWrap,q,f),e.unbind(window,"scroll",f),zb(),cb(),Ba=null},panTo:function(a,b,c){c||(a>da.min.x?a=da.min.x:a<da.max.x&&(a=da.max.x),b>da.min.y?b=da.min.y:b<da.max.y&&(b=da.max.y)),pa.x=a,pa.y=b,Ha()},handleEvent:function(a){a=a||window.event,r[a.type]&&r[a.type](a)},goTo:function(a){a=Aa(a);var b=a-m;ua=b,m=a,f.currItem=_b(m),ra-=b,Ka(ta.x*ra),cb(),fa=!1,f.updateCurrItem()},next:function(){f.goTo(m+1)},prev:function(){f.goTo(m-1)},updateCurrZoomItem:function(a){if(a&&Da("beforeChange",0),y[1].el.children.length){var b=y[1].el.children[0];ea=e.hasClass(b,"pswp__zoom-wrap")?b.style:null}else ea=null;da=f.currItem.bounds,t=s=f.currItem.initialZoomLevel,pa.x=da.center.x,pa.y=da.center.y,a&&Da("afterChange")},invalidateCurrItems:function(){x=!0;for(var a=0;a<h;a++)y[a].item&&(y[a].item.needsUpdate=!0)},updateCurrItem:function(a){if(0!==ua){var b,c=Math.abs(ua);if(!(a&&c<2)){f.currItem=_b(m),ya=!1,Da("beforeChange",ua),c>=h&&(o+=ua+(ua>0?-h:h),c=h);for(var d=0;d<c;d++)ua>0?(b=y.shift(),y[h-1]=b,o++,Ja((o+2)*ta.x,b.el.style),f.setContent(b,m-c+d+1+1)):(b=y.pop(),y.unshift(b),o--,Ja(o*ta.x,b.el.style),f.setContent(b,m+c-d-1-1));if(ea&&1===Math.abs(ua)){var e=_b(z);e.initialZoomLevel!==s&&(ic(e,qa),mc(e),Ia(e))}ua=0,f.updateCurrZoomItem(),z=m,Da("afterChange")}}},updateSize:function(b){if(!va&&i.modal){var c=e.getScrollY();if(M!==c&&(a.style.top=c+"px",M=c),!b&&xa.x===window.innerWidth&&xa.y===window.innerHeight)return;xa.x=window.innerWidth,xa.y=window.innerHeight,a.style.height=xa.y+"px"}if(qa.x=f.scrollWrap.clientWidth,qa.y=f.scrollWrap.clientHeight,Za(),ta.x=qa.x+Math.round(qa.x*i.spacing),ta.y=qa.y,Ka(ta.x*ra),Da("beforeResize"),void 0!==o){for(var d,g,j,k=0;k<h;k++)d=y[k],Ja((k+o)*ta.x,d.el.style),j=m+k-1,i.loop&&ac()>2&&(j=Aa(j)),g=_b(j),g&&(x||g.needsUpdate||!g.bounds)?(f.cleanSlide(g),f.setContent(d,j),1===k&&(f.currItem=g,f.updateCurrZoomItem(!0)),g.needsUpdate=!1):d.index===-1&&j>=0&&f.setContent(d,j),g&&g.container&&(ic(g,qa),mc(g),Ia(g));x=!1}t=s=f.currItem.initialZoomLevel,da=f.currItem.bounds,da&&(pa.x=da.center.x,pa.y=da.center.y,Ha(!0)),Da("resize")},zoomTo:function(a,b,c,d,f){b&&(t=s,ub.x=Math.abs(b.x)-pa.x,ub.y=Math.abs(b.y)-pa.y,Ma(oa,pa));var g=Sa(a,!1),h={};Va("x",g,h,a),Va("y",g,h,a);var i=s,j={x:pa.x,y:pa.y};Na(h);var k=function(b){1===b?(s=a,pa.x=h.x,pa.y=h.y):(s=(a-i)*b+i,pa.x=(h.x-j.x)*b+j.x,pa.y=(h.y-j.y)*b+j.y),f&&f(b),Ha(1===b)};c?db("customZoomTo",0,1,c,d||e.easing.sine.inOut,k):k(1)}},fb=30,gb=10,hb={},ib={},jb={},kb={},lb={},mb=[],nb={},ob=[],pb={},qb=0,rb=ma(),sb=0,tb=ma(),ub=ma(),vb=ma(),wb=function(a,b){return a.x===b.x&&a.y===b.y},xb=function(a,b){return Math.abs(a.x-b.x)<g&&Math.abs(a.y-b.y)<g},yb=function(a,b){return pb.x=Math.abs(a.x-b.x),pb.y=Math.abs(a.y-b.y),Math.sqrt(pb.x*pb.x+pb.y*pb.y)},zb=function(){Z&&(I(Z),Z=null)},Ab=function(){V&&(Z=H(Ab),Qb())},Bb=function(){return!("fit"===i.scaleMode&&s===f.currItem.initialZoomLevel)},Cb=function(a,b){return!(!a||a===document)&&(!(a.getAttribute("class")&&a.getAttribute("class").indexOf("pswp__scroll-wrap")>-1)&&(b(a)?a:Cb(a.parentNode,b)))},Db={},Eb=function(a,b){return Db.prevent=!Cb(a.target,i.isClickableElement),Da("preventDragEvent",a,b,Db),Db.prevent},Fb=function(a,b){return b.x=a.pageX,b.y=a.pageY,b.id=a.identifier,b},Gb=function(a,b,c){c.x=.5*(a.x+b.x),c.y=.5*(a.y+b.y)},Hb=function(a,b,c){if(a-Q>50){var d=ob.length>2?ob.shift():{};d.x=b,d.y=c,ob.push(d),Q=a}},Ib=function(){var a=pa.y-f.currItem.initialPosition.y;return 1-Math.abs(a/(qa.y/2))},Jb={},Kb={},Lb=[],Mb=function(a){for(;Lb.length>0;)Lb.pop();return F?(la=0,mb.forEach(function(a){0===la?Lb[0]=a:1===la&&(Lb[1]=a),la++})):a.type.indexOf("touch")>-1?a.touches&&a.touches.length>0&&(Lb[0]=Fb(a.touches[0],Jb),a.touches.length>1&&(Lb[1]=Fb(a.touches[1],Kb))):(Jb.x=a.pageX,Jb.y=a.pageY,Jb.id="",Lb[0]=Jb),Lb},Nb=function(a,b){var c,d,e,g,h=0,j=pa[a]+b[a],k=b[a]>0,l=tb.x+b.x,m=tb.x-nb.x;return c=j>da.min[a]||j<da.max[a]?i.panEndFriction:1,j=pa[a]+b[a]*c,!i.allowPanToNext&&s!==f.currItem.initialZoomLevel||(ea?"h"!==ga||"x"!==a||X||(k?(j>da.min[a]&&(c=i.panEndFriction,h=da.min[a]-j,d=da.min[a]-oa[a]),(d<=0||m<0)&&ac()>1?(g=l,m<0&&l>nb.x&&(g=nb.x)):da.min.x!==da.max.x&&(e=j)):(j<da.max[a]&&(c=i.panEndFriction,h=j-da.max[a],d=oa[a]-da.max[a]),(d<=0||m>0)&&ac()>1?(g=l,m>0&&l<nb.x&&(g=nb.x)):da.min.x!==da.max.x&&(e=j))):g=l,"x"!==a)?void(fa||$||s>f.currItem.fitRatio&&(pa[a]+=b[a]*c)):(void 0!==g&&(Ka(g,!0),$=g!==nb.x),da.min.x!==da.max.x&&(void 0!==e?pa.x=e:$||(pa.x+=b.x*c)),void 0!==g)},Ob=function(a){if(!("mousedown"===a.type&&a.button>0)){if($b)return void a.preventDefault();if(!U||"mousedown"!==a.type){if(Eb(a,!0)&&a.preventDefault(),Da("pointerDown"),F){var b=e.arraySearch(mb,a.pointerId,"id");b<0&&(b=mb.length),mb[b]={x:a.pageX,y:a.pageY,id:a.pointerId}}var c=Mb(a),d=c.length;_=null,cb(),V&&1!==d||(V=ha=!0,e.bind(window,p,f),S=ka=ia=T=$=Y=W=X=!1,ga=null,Da("firstTouchStart",c),Ma(oa,pa),na.x=na.y=0,Ma(kb,c[0]),Ma(lb,kb),nb.x=ta.x*ra,ob=[{x:kb.x,y:kb.y}],Q=P=Ea(),Sa(s,!0),zb(),Ab()),!aa&&d>1&&!fa&&!$&&(t=s,X=!1,aa=W=!0,na.y=na.x=0,Ma(oa,pa),Ma(hb,c[0]),Ma(ib,c[1]),Gb(hb,ib,vb),ub.x=Math.abs(vb.x)-pa.x,ub.y=Math.abs(vb.y)-pa.y,ba=ca=yb(hb,ib))}}},Pb=function(a){if(a.preventDefault(),F){var b=e.arraySearch(mb,a.pointerId,"id");if(b>-1){var c=mb[b];c.x=a.pageX,c.y=a.pageY}}if(V){var d=Mb(a);if(ga||Y||aa)_=d;else if(tb.x!==ta.x*ra)ga="h";else{var f=Math.abs(d[0].x-kb.x)-Math.abs(d[0].y-kb.y);Math.abs(f)>=gb&&(ga=f>0?"h":"v",_=d)}}},Qb=function(){if(_){var a=_.length;if(0!==a)if(Ma(hb,_[0]),jb.x=hb.x-kb.x,jb.y=hb.y-kb.y,aa&&a>1){if(kb.x=hb.x,kb.y=hb.y,!jb.x&&!jb.y&&wb(_[1],ib))return;Ma(ib,_[1]),X||(X=!0,Da("zoomGestureStarted"));var b=yb(hb,ib),c=Vb(b);c>f.currItem.initialZoomLevel+f.currItem.initialZoomLevel/15&&(ka=!0);var d=1,e=Ta(),g=Ua();if(c<e)if(i.pinchToClose&&!ka&&t<=f.currItem.initialZoomLevel){var h=e-c,j=1-h/(e/1.2);Fa(j),Da("onPinchClose",j),ia=!0}else d=(e-c)/e,d>1&&(d=1),c=e-d*(e/3);else c>g&&(d=(c-g)/(6*e),d>1&&(d=1),c=g+d*e);d<0&&(d=0),ba=b,Gb(hb,ib,rb),na.x+=rb.x-vb.x,na.y+=rb.y-vb.y,Ma(vb,rb),pa.x=La("x",c),pa.y=La("y",c),S=c>s,s=c,Ha()}else{if(!ga)return;if(ha&&(ha=!1,Math.abs(jb.x)>=gb&&(jb.x-=_[0].x-lb.x),Math.abs(jb.y)>=gb&&(jb.y-=_[0].y-lb.y)),kb.x=hb.x,kb.y=hb.y,0===jb.x&&0===jb.y)return;if("v"===ga&&i.closeOnVerticalDrag&&!Bb()){na.y+=jb.y,pa.y+=jb.y;var k=Ib();return T=!0,Da("onVerticalDrag",k),Fa(k),void Ha()}Hb(Ea(),hb.x,hb.y),Y=!0,da=f.currItem.bounds;var l=Nb("x",jb);l||(Nb("y",jb),Na(pa),Ha())}}},Rb=function(a){if(N.isOldAndroid){if(U&&"mouseup"===a.type)return;a.type.indexOf("touch")>-1&&(clearTimeout(U),U=setTimeout(function(){U=0},600))}Da("pointerUp"),Eb(a,!1)&&a.preventDefault();var b;if(F){var c=e.arraySearch(mb,a.pointerId,"id");if(c>-1)if(b=mb.splice(c,1)[0],navigator.msPointerEnabled){var d={4:"mouse",2:"touch",3:"pen"};b.type=d[a.pointerType],b.type||(b.type=a.pointerType||"mouse")}else b.type=a.pointerType||"mouse"}var g,h=Mb(a),j=h.length;if("mouseup"===a.type&&(j=0),2===j)return _=null,!0;1===j&&Ma(lb,h[0]),0!==j||ga||fa||(b||("mouseup"===a.type?b={x:a.pageX,y:a.pageY,type:"mouse"}:a.changedTouches&&a.changedTouches[0]&&(b={x:a.changedTouches[0].pageX,y:a.changedTouches[0].pageY,type:"touch"})),Da("touchRelease",a,b));var k=-1;if(0===j&&(V=!1,e.unbind(window,p,f),zb(),aa?k=0:sb!==-1&&(k=Ea()-sb)),sb=1===j?Ea():-1,g=k!==-1&&k<150?"zoom":"swipe",aa&&j<2&&(aa=!1,1===j&&(g="zoomPointerUp"),Da("zoomGestureEnded")),_=null,Y||X||fa||T)if(cb(),R||(R=Sb()),R.calculateSwipeSpeed("x"),T){var l=Ib();if(l<i.verticalDragRange)f.close();else{var m=pa.y,n=ja;db("verticalDrag",0,1,300,e.easing.cubic.out,function(a){pa.y=(f.currItem.initialPosition.y-m)*a+m,Fa((1-n)*a+n),Ha()}),Da("onVerticalDrag",1)}}else{if(($||fa)&&0===j){var o=Ub(g,R);if(o)return;g="zoomPointerUp"}if(!fa)return"swipe"!==g?void Wb():void(!$&&s>f.currItem.fitRatio&&Tb(R))}},Sb=function(){var a,b,c={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(d){ob.length>1?(a=Ea()-Q+50,b=ob[ob.length-2][d]):(a=Ea()-P,b=lb[d]),c.lastFlickOffset[d]=kb[d]-b,c.lastFlickDist[d]=Math.abs(c.lastFlickOffset[d]),c.lastFlickDist[d]>20?c.lastFlickSpeed[d]=c.lastFlickOffset[d]/a:c.lastFlickSpeed[d]=0,Math.abs(c.lastFlickSpeed[d])<.1&&(c.lastFlickSpeed[d]=0),c.slowDownRatio[d]=.95,c.slowDownRatioReverse[d]=1-c.slowDownRatio[d],c.speedDecelerationRatio[d]=1},calculateOverBoundsAnimOffset:function(a,b){c.backAnimStarted[a]||(pa[a]>da.min[a]?c.backAnimDestination[a]=da.min[a]:pa[a]<da.max[a]&&(c.backAnimDestination[a]=da.max[a]),void 0!==c.backAnimDestination[a]&&(c.slowDownRatio[a]=.7,c.slowDownRatioReverse[a]=1-c.slowDownRatio[a],c.speedDecelerationRatioAbs[a]<.05&&(c.lastFlickSpeed[a]=0,c.backAnimStarted[a]=!0,db("bounceZoomPan"+a,pa[a],c.backAnimDestination[a],b||300,e.easing.sine.out,function(b){pa[a]=b,Ha()}))))},calculateAnimOffset:function(a){c.backAnimStarted[a]||(c.speedDecelerationRatio[a]=c.speedDecelerationRatio[a]*(c.slowDownRatio[a]+c.slowDownRatioReverse[a]-c.slowDownRatioReverse[a]*c.timeDiff/10),c.speedDecelerationRatioAbs[a]=Math.abs(c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]),c.distanceOffset[a]=c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]*c.timeDiff,pa[a]+=c.distanceOffset[a])},panAnimLoop:function(){if($a.zoomPan&&($a.zoomPan.raf=H(c.panAnimLoop),c.now=Ea(),c.timeDiff=c.now-c.lastNow,c.lastNow=c.now,c.calculateAnimOffset("x"),c.calculateAnimOffset("y"),Ha(),c.calculateOverBoundsAnimOffset("x"),c.calculateOverBoundsAnimOffset("y"),c.speedDecelerationRatioAbs.x<.05&&c.speedDecelerationRatioAbs.y<.05))return pa.x=Math.round(pa.x),pa.y=Math.round(pa.y),Ha(),void ab("zoomPan")}};return c},Tb=function(a){return a.calculateSwipeSpeed("y"),da=f.currItem.bounds,a.backAnimDestination={},a.backAnimStarted={},Math.abs(a.lastFlickSpeed.x)<=.05&&Math.abs(a.lastFlickSpeed.y)<=.05?(a.speedDecelerationRatioAbs.x=a.speedDecelerationRatioAbs.y=0,a.calculateOverBoundsAnimOffset("x"),a.calculateOverBoundsAnimOffset("y"),!0):(bb("zoomPan"),a.lastNow=Ea(),void a.panAnimLoop())},Ub=function(a,b){var c;fa||(qb=m);var d;if("swipe"===a){var g=kb.x-lb.x,h=b.lastFlickDist.x<10;g>fb&&(h||b.lastFlickOffset.x>20)?d=-1:g<-fb&&(h||b.lastFlickOffset.x<-20)&&(d=1)}var j;d&&(m+=d,m<0?(m=i.loop?ac()-1:0,j=!0):m>=ac()&&(m=i.loop?0:ac()-1,j=!0),j&&!i.loop||(ua+=d,ra-=d,c=!0));var k,l=ta.x*ra,n=Math.abs(l-tb.x);return c||l>tb.x==b.lastFlickSpeed.x>0?(k=Math.abs(b.lastFlickSpeed.x)>0?n/Math.abs(b.lastFlickSpeed.x):333,k=Math.min(k,400),k=Math.max(k,250)):k=333,qb===m&&(c=!1),fa=!0,Da("mainScrollAnimStart"),db("mainScroll",tb.x,l,k,e.easing.cubic.out,Ka,function(){cb(),fa=!1,qb=-1,(c||qb!==m)&&f.updateCurrItem(),Da("mainScrollAnimComplete")}),c&&f.updateCurrItem(!0),c},Vb=function(a){return 1/ca*a*t},Wb=function(){var a=s,b=Ta(),c=Ua();s<b?a=b:s>c&&(a=c);var d,g=1,h=ja;return ia&&!S&&!ka&&s<b?(f.close(),!0):(ia&&(d=function(a){Fa((g-h)*a+h)}),f.zoomTo(a,0,200,e.easing.cubic.out,d),!0)};za("Gestures",{publicMethods:{initGestures:function(){var a=function(a,b,c,d,e){A=a+b,B=a+c,C=a+d,D=e?a+e:""};F=N.pointerEvent,F&&N.touch&&(N.touch=!1),F?navigator.msPointerEnabled?a("MSPointer","Down","Move","Up","Cancel"):a("pointer","down","move","up","cancel"):N.touch?(a("touch","start","move","end","cancel"),G=!0):a("mouse","down","move","up"),p=B+" "+C+" "+D,q=A,F&&!G&&(G=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),f.likelyTouchDevice=G,r[A]=Ob,r[B]=Pb,r[C]=Rb,D&&(r[D]=r[C]),N.touch&&(q+=" mousedown",p+=" mousemove mouseup",r.mousedown=r[A],r.mousemove=r[B],r.mouseup=r[C]),G||(i.allowPanToNext=!1)}}});var Xb,Yb,Zb,$b,_b,ac,bc,cc=function(b,c,d,g){Xb&&clearTimeout(Xb),$b=!0,Zb=!0;var h;b.initialLayout?(h=b.initialLayout,b.initialLayout=null):h=i.getThumbBoundsFn&&i.getThumbBoundsFn(m);var j=d?i.hideAnimationDuration:i.showAnimationDuration,k=function(){ab("initialZoom"),d?(f.template.removeAttribute("style"),f.bg.removeAttribute("style")):(Fa(1),c&&(c.style.display="block"),e.addClass(a,"pswp--animated-in"),Da("initialZoom"+(d?"OutEnd":"InEnd"))),g&&g(),$b=!1};if(!j||!h||void 0===h.x)return Da("initialZoom"+(d?"Out":"In")),s=b.initialZoomLevel,Ma(pa,b.initialPosition),Ha(),a.style.opacity=d?0:1,Fa(1),void(j?setTimeout(function(){k()},j):k());var n=function(){var c=l,g=!f.currItem.src||f.currItem.loadError||i.showHideOpacity;b.miniImg&&(b.miniImg.style.webkitBackfaceVisibility="hidden"),d||(s=h.w/b.w,pa.x=h.x,pa.y=h.y-K,f[g?"template":"bg"].style.opacity=.001,Ha()),bb("initialZoom"),d&&!c&&e.removeClass(a,"pswp--animated-in"),g&&(d?e[(c?"remove":"add")+"Class"](a,"pswp--animate_opacity"):setTimeout(function(){e.addClass(a,"pswp--animate_opacity")},30)),Xb=setTimeout(function(){if(Da("initialZoom"+(d?"Out":"In")),d){var f=h.w/b.w,i={x:pa.x,y:pa.y},l=s,m=ja,n=function(b){1===b?(s=f,pa.x=h.x,pa.y=h.y-M):(s=(f-l)*b+l,pa.x=(h.x-i.x)*b+i.x,pa.y=(h.y-M-i.y)*b+i.y),Ha(),g?a.style.opacity=1-b:Fa(m-b*m)};c?db("initialZoom",0,1,j,e.easing.cubic.out,n,k):(n(1),Xb=setTimeout(k,j+20))}else s=b.initialZoomLevel,Ma(pa,b.initialPosition),Ha(),Fa(1),g?a.style.opacity=1:Fa(1),Xb=setTimeout(k,j+20)},d?25:90)};n()},dc={},ec=[],fc={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Yb.length}},gc=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},hc=function(a,b,c){var d=a.bounds;d.center.x=Math.round((dc.x-b)/2),d.center.y=Math.round((dc.y-c)/2)+a.vGap.top,d.max.x=b>dc.x?Math.round(dc.x-b):d.center.x,d.max.y=c>dc.y?Math.round(dc.y-c)+a.vGap.top:d.center.y,d.min.x=b>dc.x?0:d.center.x,d.min.y=c>dc.y?a.vGap.top:d.center.y},ic=function(a,b,c){if(a.src&&!a.loadError){var d=!c;if(d&&(a.vGap||(a.vGap={top:0,bottom:0}),Da("parseVerticalMargin",a)),dc.x=b.x,dc.y=b.y-a.vGap.top-a.vGap.bottom,d){var e=dc.x/a.w,f=dc.y/a.h;a.fitRatio=e<f?e:f;var g=i.scaleMode;"orig"===g?c=1:"fit"===g&&(c=a.fitRatio),c>1&&(c=1),a.initialZoomLevel=c,a.bounds||(a.bounds=gc())}if(!c)return;return hc(a,a.w*c,a.h*c),d&&c===a.initialZoomLevel&&(a.initialPosition=a.bounds.center),a.bounds}return a.w=a.h=0,a.initialZoomLevel=a.fitRatio=1,a.bounds=gc(),a.initialPosition=a.bounds.center,a.bounds},jc=function(a,b,c,d,e,g){b.loadError||d&&(b.imageAppended=!0,mc(b,d,b===f.currItem&&ya),c.appendChild(d),g&&setTimeout(function(){b&&b.loaded&&b.placeholder&&(b.placeholder.style.display="none",b.placeholder=null)},500))},kc=function(a){a.loading=!0,a.loaded=!1;var b=a.img=e.createEl("pswp__img","img"),c=function(){a.loading=!1,a.loaded=!0,a.loadComplete?a.loadComplete(a):a.img=null,b.onload=b.onerror=null,b=null};return b.onload=c,b.onerror=function(){a.loadError=!0,c()},b.src=a.src,b},lc=function(a,b){if(a.src&&a.loadError&&a.container)return b&&(a.container.innerHTML=""),a.container.innerHTML=i.errorMsg.replace("%url%",a.src),!0},mc=function(a,b,c){if(a.src){b||(b=a.container.lastChild);var d=c?a.w:Math.round(a.w*a.fitRatio),e=c?a.h:Math.round(a.h*a.fitRatio);a.placeholder&&!a.loaded&&(a.placeholder.style.width=d+"px",a.placeholder.style.height=e+"px"),b.style.width=d+"px",b.style.height=e+"px"}},nc=function(){if(ec.length){for(var a,b=0;b<ec.length;b++)a=ec[b],a.holder.index===a.index&&jc(a.index,a.item,a.baseDiv,a.img,!1,a.clearPlaceholder);ec=[]}};za("Controller",{publicMethods:{lazyLoadItem:function(a){a=Aa(a);var b=_b(a);b&&(!b.loaded&&!b.loading||x)&&(Da("gettingData",a,b),b.src&&kc(b))},initController:function(){e.extend(i,fc,!0),f.items=Yb=c,_b=f.getItemAt,ac=i.getNumItemsFn,bc=i.loop,ac()<3&&(i.loop=!1),Ca("beforeChange",function(a){var b,c=i.preload,d=null===a||a>=0,e=Math.min(c[0],ac()),g=Math.min(c[1],ac());for(b=1;b<=(d?g:e);b++)f.lazyLoadItem(m+b);for(b=1;b<=(d?e:g);b++)f.lazyLoadItem(m-b)}),Ca("initialLayout",function(){f.currItem.initialLayout=i.getThumbBoundsFn&&i.getThumbBoundsFn(m)}),Ca("mainScrollAnimComplete",nc),Ca("initialZoomInEnd",nc),Ca("destroy",function(){for(var a,b=0;b<Yb.length;b++)a=Yb[b],a.container&&(a.container=null),a.placeholder&&(a.placeholder=null),a.img&&(a.img=null),a.preloader&&(a.preloader=null),a.loadError&&(a.loaded=a.loadError=!1);ec=null})},getItemAt:function(a){return a>=0&&(void 0!==Yb[a]&&Yb[a])},allowProgressiveImg:function(){return i.forceProgressiveLoading||!G||i.mouseUsed||screen.width>1200},setContent:function(a,b){i.loop&&(b=Aa(b));var c=f.getItemAt(a.index);c&&(c.container=null);var d,g=f.getItemAt(b);if(!g)return void(a.el.innerHTML="");Da("gettingData",b,g),a.index=b,a.item=g;var h=g.container=e.createEl("pswp__zoom-wrap");if(!g.src&&g.html&&(g.html.tagName?h.appendChild(g.html):h.innerHTML=g.html),lc(g),ic(g,qa),!g.src||g.loadError||g.loaded)g.src&&!g.loadError&&(d=e.createEl("pswp__img","img"),d.style.opacity=1,d.src=g.src,mc(g,d),jc(b,g,h,d,!0));else{if(g.loadComplete=function(c){if(j){if(a&&a.index===b){if(lc(c,!0))return c.loadComplete=c.img=null,ic(c,qa),Ia(c),void(a.index===m&&f.updateCurrZoomItem());c.imageAppended?!$b&&c.placeholder&&(c.placeholder.style.display="none",c.placeholder=null):N.transform&&(fa||$b)?ec.push({item:c,baseDiv:h,img:c.img,index:b,holder:a,clearPlaceholder:!0}):jc(b,c,h,c.img,fa||$b,!0)}c.loadComplete=null,c.img=null,Da("imageLoadComplete",b,c)}},e.features.transform){var k="pswp__img pswp__img--placeholder";k+=g.msrc?"":" pswp__img--placeholder--blank";var l=e.createEl(k,g.msrc?"img":"");g.msrc&&(l.src=g.msrc),mc(g,l),h.appendChild(l),g.placeholder=l}g.loading||kc(g),f.allowProgressiveImg()&&(!Zb&&N.transform?ec.push({item:g,baseDiv:h,img:g.img,index:b,holder:a}):jc(b,g,h,g.img,!0,!0))}Zb||b!==m?Ia(g):(ea=h.style,cc(g,d||g.img)),a.el.innerHTML="",a.el.appendChild(h)},cleanSlide:function(a){a.img&&(a.img.onload=a.img.onerror=null),a.loaded=a.loading=a.img=a.imageAppended=!1}}});var oc,pc={},qc=function(a,b,c){var d=document.createEvent("CustomEvent"),e={origEvent:a,target:a.target,releasePoint:b,pointerType:c||"touch"};d.initCustomEvent("pswpTap",!0,!0,e),a.target.dispatchEvent(d)};za("Tap",{publicMethods:{initTap:function(){Ca("firstTouchStart",f.onTapStart),Ca("touchRelease",f.onTapRelease),Ca("destroy",function(){pc={},oc=null})},onTapStart:function(a){a.length>1&&(clearTimeout(oc),oc=null)},onTapRelease:function(a,b){if(b&&!Y&&!W&&!_a){var c=b;if(oc&&(clearTimeout(oc),oc=null,xb(c,pc)))return void Da("doubleTap",c);if("mouse"===b.type)return void qc(a,b,"mouse");var d=a.target.tagName.toUpperCase();if("BUTTON"===d||e.hasClass(a.target,"pswp__single-tap"))return void qc(a,b);Ma(pc,c),oc=setTimeout(function(){qc(a,b),oc=null},300)}}}});var rc;za("DesktopZoom",{publicMethods:{initDesktopZoom:function(){L||(G?Ca("mouseUsed",function(){f.setupDesktopZoom()}):f.setupDesktopZoom(!0))},setupDesktopZoom:function(b){rc={};var c="wheel mousewheel DOMMouseScroll";Ca("bindEvents",function(){e.bind(a,c,f.handleMouseWheel)}),Ca("unbindEvents",function(){rc&&e.unbind(a,c,f.handleMouseWheel)}),f.mouseZoomedIn=!1;var d,g=function(){f.mouseZoomedIn&&(e.removeClass(a,"pswp--zoomed-in"),f.mouseZoomedIn=!1),s<1?e.addClass(a,"pswp--zoom-allowed"):e.removeClass(a,"pswp--zoom-allowed"),h()},h=function(){d&&(e.removeClass(a,"pswp--dragging"),d=!1)};Ca("resize",g),Ca("afterChange",g),Ca("pointerDown",function(){f.mouseZoomedIn&&(d=!0,e.addClass(a,"pswp--dragging"))}),Ca("pointerUp",h),b||g()},handleMouseWheel:function(a){if(s<=f.currItem.fitRatio)return i.modal&&(!i.closeOnScroll||_a||V?a.preventDefault():E&&Math.abs(a.deltaY)>2&&(l=!0,f.close())),!0;if(a.stopPropagation(),rc.x=0,"deltaX"in a)1===a.deltaMode?(rc.x=18*a.deltaX,rc.y=18*a.deltaY):(rc.x=a.deltaX,rc.y=a.deltaY);else if("wheelDelta"in a)a.wheelDeltaX&&(rc.x=-.16*a.wheelDeltaX),a.wheelDeltaY?rc.y=-.16*a.wheelDeltaY:rc.y=-.16*a.wheelDelta;else{if(!("detail"in a))return;rc.y=a.detail}Sa(s,!0);var b=pa.x-rc.x,c=pa.y-rc.y;(i.modal||b<=da.min.x&&b>=da.max.x&&c<=da.min.y&&c>=da.max.y)&&a.preventDefault(),f.panTo(b,c)},toggleDesktopZoom:function(b){b=b||{x:qa.x/2+sa.x,y:qa.y/2+sa.y};var c=i.getDoubleTapZoom(!0,f.currItem),d=s===c;f.mouseZoomedIn=!d,f.zoomTo(d?f.currItem.initialZoomLevel:c,b,333),e[(d?"remove":"add")+"Class"](a,"pswp--zoomed-in")}}});var sc,tc,uc,vc,wc,xc,yc,zc,Ac,Bc,Cc,Dc,Ec={history:!0,galleryUID:1},Fc=function(){return Cc.hash.substring(1)},Gc=function(){sc&&clearTimeout(sc),uc&&clearTimeout(uc)},Hc=function(){var a=Fc(),b={};if(a.length<5)return b;var c,d=a.split("&");for(c=0;c<d.length;c++)if(d[c]){var e=d[c].split("=");e.length<2||(b[e[0]]=e[1])}if(i.galleryPIDs){var f=b.pid;for(b.pid=0,c=0;c<Yb.length;c++)if(Yb[c].pid===f){b.pid=c;break}}else b.pid=parseInt(b.pid,10)-1;return b.pid<0&&(b.pid=0),b},Ic=function(){if(uc&&clearTimeout(uc),_a||V)return void(uc=setTimeout(Ic,500));vc?clearTimeout(tc):vc=!0;var a=m+1,b=_b(m);b.hasOwnProperty("pid")&&(a=b.pid);var c=yc+"&gid="+i.galleryUID+"&pid="+a;zc||Cc.hash.indexOf(c)===-1&&(Bc=!0);var d=Cc.href.split("#")[0]+"#"+c;Dc?"#"+c!==window.location.hash&&history[zc?"replaceState":"pushState"]("",document.title,d):zc?Cc.replace(d):Cc.hash=c,zc=!0,tc=setTimeout(function(){vc=!1},60)};za("History",{publicMethods:{initHistory:function(){if(e.extend(i,Ec,!0),i.history){Cc=window.location,Bc=!1,Ac=!1,zc=!1,yc=Fc(),Dc="pushState"in history,yc.indexOf("gid=")>-1&&(yc=yc.split("&gid=")[0],yc=yc.split("?gid=")[0]),Ca("afterChange",f.updateURL),Ca("unbindEvents",function(){e.unbind(window,"hashchange",f.onHashChange)});var a=function(){xc=!0,Ac||(Bc?history.back():yc?Cc.hash=yc:Dc?history.pushState("",document.title,Cc.pathname+Cc.search):Cc.hash=""),Gc()};Ca("unbindEvents",function(){l&&a()}),Ca("destroy",function(){xc||a()}),Ca("firstUpdate",function(){m=Hc().pid});var b=yc.indexOf("pid=");b>-1&&(yc=yc.substring(0,b),"&"===yc.slice(-1)&&(yc=yc.slice(0,-1))),setTimeout(function(){j&&e.bind(window,"hashchange",f.onHashChange)},40)}},onHashChange:function(){return Fc()===yc?(Ac=!0,void f.close()):void(vc||(wc=!0,f.goTo(Hc().pid),wc=!1))},updateURL:function(){Gc(),wc||(zc?sc=setTimeout(Ic,800):Ic())}}}),e.extend(f,eb)};return a});
/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipeUI_Default=b()}(this,function(){"use strict";var a=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=this,w=!1,x=!0,y=!0,z={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(a,b){return a.title?(b.children[0].innerHTML=a.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return a.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return a.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},A=function(a){if(r)return!0;a=a||window.event,q.timeToIdle&&q.mouseUsed&&!k&&K();for(var c,d,e=a.target||a.srcElement,f=e.getAttribute("class")||"",g=0;g<S.length;g++)c=S[g],c.onTap&&f.indexOf("pswp__"+c.name)>-1&&(c.onTap(),d=!0);if(d){a.stopPropagation&&a.stopPropagation(),r=!0;var h=b.features.isOldAndroid?600:30;s=setTimeout(function(){r=!1},h)}},B=function(){return!a.likelyTouchDevice||q.mouseUsed||screen.width>q.fitControlsWidth},C=function(a,c,d){b[(d?"add":"remove")+"Class"](a,"pswp__"+c)},D=function(){var a=1===q.getNumItemsFn();a!==p&&(C(d,"ui--one-slide",a),p=a)},E=function(){C(i,"share-modal--hidden",y)},F=function(){return y=!y,y?(b.removeClass(i,"pswp__share-modal--fade-in"),setTimeout(function(){y&&E()},300)):(E(),setTimeout(function(){y||b.addClass(i,"pswp__share-modal--fade-in")},30)),y||H(),!1},G=function(b){b=b||window.event;var c=b.target||b.srcElement;return a.shout("shareLinkClick",b,c),!!c.href&&(!!c.hasAttribute("download")||(window.open(c.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),y||F(),!1))},H=function(){for(var a,b,c,d,e,f="",g=0;g<q.shareButtons.length;g++)a=q.shareButtons[g],c=q.getImageURLForShare(a),d=q.getPageURLForShare(a),e=q.getTextForShare(a),b=a.url.replace("{{url}}",encodeURIComponent(d)).replace("{{image_url}}",encodeURIComponent(c)).replace("{{raw_image_url}}",c).replace("{{text}}",encodeURIComponent(e)),f+='<a href="'+b+'" target="_blank" class="pswp__share--'+a.id+'"'+(a.download?"download":"")+">"+a.label+"</a>",q.parseShareButtonOut&&(f=q.parseShareButtonOut(a,f));i.children[0].innerHTML=f,i.children[0].onclick=G},I=function(a){for(var c=0;c<q.closeElClasses.length;c++)if(b.hasClass(a,"pswp__"+q.closeElClasses[c]))return!0},J=0,K=function(){clearTimeout(u),J=0,k&&v.setIdle(!1)},L=function(a){a=a?a:window.event;var b=a.relatedTarget||a.toElement;b&&"HTML"!==b.nodeName||(clearTimeout(u),u=setTimeout(function(){v.setIdle(!0)},q.timeToIdleOutside))},M=function(){q.fullscreenEl&&!b.features.isOldAndroid&&(c||(c=v.getFullscreenAPI()),c?(b.bind(document,c.eventK,v.updateFullscreen),v.updateFullscreen(),b.addClass(a.template,"pswp--supports-fs")):b.removeClass(a.template,"pswp--supports-fs"))},N=function(){q.preloaderEl&&(O(!0),l("beforeChange",function(){clearTimeout(o),o=setTimeout(function(){a.currItem&&a.currItem.loading?(!a.allowProgressiveImg()||a.currItem.img&&!a.currItem.img.naturalWidth)&&O(!1):O(!0)},q.loadingIndicatorDelay)}),l("imageLoadComplete",function(b,c){a.currItem===c&&O(!0)}))},O=function(a){n!==a&&(C(m,"preloader--active",!a),n=a)},P=function(a){var c=a.vGap;if(B()){var g=q.barsSize;if(q.captionEl&&"auto"===g.bottom)if(f||(f=b.createEl("pswp__caption pswp__caption--fake"),f.appendChild(b.createEl("pswp__caption__center")),d.insertBefore(f,e),b.addClass(d,"pswp__ui--fit")),q.addCaptionHTMLFn(a,f,!0)){var h=f.clientHeight;c.bottom=parseInt(h,10)||44}else c.bottom=g.top;else c.bottom="auto"===g.bottom?0:g.bottom;c.top=g.top}else c.top=c.bottom=0},Q=function(){q.timeToIdle&&l("mouseUsed",function(){b.bind(document,"mousemove",K),b.bind(document,"mouseout",L),t=setInterval(function(){J++,2===J&&v.setIdle(!0)},q.timeToIdle/2)})},R=function(){l("onVerticalDrag",function(a){x&&a<.95?v.hideControls():!x&&a>=.95&&v.showControls()});var a;l("onPinchClose",function(b){x&&b<.9?(v.hideControls(),a=!0):a&&!x&&b>.9&&v.showControls()}),l("zoomGestureEnded",function(){a=!1,a&&!x&&v.showControls()})},S=[{name:"caption",option:"captionEl",onInit:function(a){e=a}},{name:"share-modal",option:"shareEl",onInit:function(a){i=a},onTap:function(){F()}},{name:"button--share",option:"shareEl",onInit:function(a){h=a},onTap:function(){F()}},{name:"button--zoom",option:"zoomEl",onTap:a.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(a){g=a}},{name:"button--close",option:"closeEl",onTap:a.close},{name:"button--arrow--left",option:"arrowEl",onTap:a.prev},{name:"button--arrow--right",option:"arrowEl",onTap:a.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(a){m=a}}],T=function(){var a,c,e,f=function(d){if(d)for(var f=d.length,g=0;g<f;g++){a=d[g],c=a.className;for(var h=0;h<S.length;h++)e=S[h],c.indexOf("pswp__"+e.name)>-1&&(q[e.option]?(b.removeClass(a,"pswp__element--disabled"),e.onInit&&e.onInit(a)):b.addClass(a,"pswp__element--disabled"))}};f(d.children);var g=b.getChildByClass(d,"pswp__top-bar");g&&f(g.children)};v.init=function(){b.extend(a.options,z,!0),q=a.options,d=b.getChildByClass(a.scrollWrap,"pswp__ui"),l=a.listen,R(),l("beforeChange",v.update),l("doubleTap",function(b){var c=a.currItem.initialZoomLevel;a.getZoomLevel()!==c?a.zoomTo(c,b,333):a.zoomTo(q.getDoubleTapZoom(!1,a.currItem),b,333)}),l("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.getAttribute("class")&&a.type.indexOf("mouse")>-1&&(d.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),l("bindEvents",function(){b.bind(d,"pswpTap click",A),b.bind(a.scrollWrap,"pswpTap",v.onGlobalTap),a.likelyTouchDevice||b.bind(a.scrollWrap,"mouseover",v.onMouseOver)}),l("unbindEvents",function(){y||F(),t&&clearInterval(t),b.unbind(document,"mouseout",L),b.unbind(document,"mousemove",K),b.unbind(d,"pswpTap click",A),b.unbind(a.scrollWrap,"pswpTap",v.onGlobalTap),b.unbind(a.scrollWrap,"mouseover",v.onMouseOver),c&&(b.unbind(document,c.eventK,v.updateFullscreen),c.isFullscreen()&&(q.hideAnimationDuration=0,c.exit()),c=null)}),l("destroy",function(){q.captionEl&&(f&&d.removeChild(f),b.removeClass(e,"pswp__caption--empty")),i&&(i.children[0].onclick=null),b.removeClass(d,"pswp__ui--over-close"),b.addClass(d,"pswp__ui--hidden"),v.setIdle(!1)}),q.showAnimationDuration||b.removeClass(d,"pswp__ui--hidden"),l("initialZoomIn",function(){q.showAnimationDuration&&b.removeClass(d,"pswp__ui--hidden")}),l("initialZoomOut",function(){b.addClass(d,"pswp__ui--hidden")}),l("parseVerticalMargin",P),T(),q.shareEl&&h&&i&&(y=!0),D(),Q(),M(),N()},v.setIdle=function(a){k=a,C(d,"ui--idle",a)},v.update=function(){x&&a.currItem?(v.updateIndexIndicator(),q.captionEl&&(q.addCaptionHTMLFn(a.currItem,e),C(e,"caption--empty",!a.currItem.title)),w=!0):w=!1,y||F(),D()},v.updateFullscreen=function(d){d&&setTimeout(function(){a.setScrollOffset(0,b.getScrollY())},50),b[(c.isFullscreen()?"add":"remove")+"Class"](a.template,"pswp--fs")},v.updateIndexIndicator=function(){q.counterEl&&(g.innerHTML=a.getCurrentIndex()+1+q.indexIndicatorSep+q.getNumItemsFn())},v.onGlobalTap=function(c){c=c||window.event;var d=c.target||c.srcElement;if(!r)if(c.detail&&"mouse"===c.detail.pointerType){if(I(d))return void a.close();b.hasClass(d,"pswp__img")&&(1===a.getZoomLevel()&&a.getZoomLevel()<=a.currItem.fitRatio?q.clickToCloseNonZoomable&&a.close():a.toggleDesktopZoom(c.detail.releasePoint))}else if(q.tapToToggleControls&&(x?v.hideControls():v.showControls()),q.tapToClose&&(b.hasClass(d,"pswp__img")||I(d)))return void a.close()},v.onMouseOver=function(a){a=a||window.event;var b=a.target||a.srcElement;C(d,"ui--over-close",I(b))},v.hideControls=function(){b.addClass(d,"pswp__ui--hidden"),x=!1},v.showControls=function(){x=!0,w||v.update(),b.removeClass(d,"pswp__ui--hidden")},v.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},v.getFullscreenAPI=function(){var b,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){return j=q.closeOnScroll,q.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?a.template[this.enterK]():void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},b.exit=function(){return q.closeOnScroll=j,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return a});

/*!
 * imagesLoaded PACKAGED v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||[];return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
/* isElementVisible */
PaloAlto.isInViewport = function(el) {
  if (el) {
    const rect = el.getBoundingClientRect();
    const vertInView = (rect.top <= window.innerHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= window.innerWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
  }
};

/**
 * @license
 * Lodash 4.17.15 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash core -o ./dist/lodash.core.js`
 */
 ;(function(){function n(n){return H(n)&&pn.call(n,"callee")&&!yn.call(n,"callee")}function t(n,t){return n.push.apply(n,t),n}function r(n){return function(t){return null==t?Z:t[n]}}function e(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function u(n,t){return j(t,function(t){return n[t]})}function o(n){return n instanceof i?n:new i(n)}function i(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t}function c(n,t,r){if(typeof n!="function")throw new TypeError("Expected a function");
 return setTimeout(function(){n.apply(Z,r)},t)}function f(n,t){var r=true;return mn(n,function(n,e,u){return r=!!t(n,e,u)}),r}function a(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],i=t(o);if(null!=i&&(c===Z?i===i:r(i,c)))var c=i,f=o}return f}function l(n,t){var r=[];return mn(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function p(n,r,e,u,o){var i=-1,c=n.length;for(e||(e=R),o||(o=[]);++i<c;){var f=n[i];0<r&&e(f)?1<r?p(f,r-1,e,u,o):t(o,f):u||(o[o.length]=f)}return o}function s(n,t){return n&&On(n,t,Dn);
 }function h(n,t){return l(t,function(t){return U(n[t])})}function v(n,t){return n>t}function b(n,t,r,e,u){return n===t||(null==n||null==t||!H(n)&&!H(t)?n!==n&&t!==t:y(n,t,r,e,b,u))}function y(n,t,r,e,u,o){var i=Nn(n),c=Nn(t),f=i?"[object Array]":hn.call(n),a=c?"[object Array]":hn.call(t),f="[object Arguments]"==f?"[object Object]":f,a="[object Arguments]"==a?"[object Object]":a,l="[object Object]"==f,c="[object Object]"==a,a=f==a;o||(o=[]);var p=An(o,function(t){return t[0]==n}),s=An(o,function(n){
 return n[0]==t});if(p&&s)return p[1]==t;if(o.push([n,t]),o.push([t,n]),a&&!l){if(i)r=T(n,t,r,e,u,o);else n:{switch(f){case"[object Boolean]":case"[object Date]":case"[object Number]":r=J(+n,+t);break n;case"[object Error]":r=n.name==t.name&&n.message==t.message;break n;case"[object RegExp]":case"[object String]":r=n==t+"";break n}r=false}return o.pop(),r}return 1&r||(i=l&&pn.call(n,"__wrapped__"),f=c&&pn.call(t,"__wrapped__"),!i&&!f)?!!a&&(r=B(n,t,r,e,u,o),o.pop(),r):(i=i?n.value():n,f=f?t.value():t,
 r=u(i,f,r,e,o),o.pop(),r)}function g(n){return typeof n=="function"?n:null==n?X:(typeof n=="object"?d:r)(n)}function _(n,t){return n<t}function j(n,t){var r=-1,e=M(n)?Array(n.length):[];return mn(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function d(n){var t=_n(n);return function(r){var e=t.length;if(null==r)return!e;for(r=Object(r);e--;){var u=t[e];if(!(u in r&&b(n[u],r[u],3)))return false}return true}}function m(n,t){return n=Object(n),C(t,function(t,r){return r in n&&(t[r]=n[r]),t},{})}function O(n){return xn(I(n,void 0,X),n+"");
 }function x(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Array(u);++e<u;)r[e]=n[e+t];return r}function A(n){return x(n,0,n.length)}function E(n,t){var r;return mn(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function w(n,r){return C(r,function(n,r){return r.func.apply(r.thisArg,t([n],r.args))},n)}function k(n,t,r){var e=!r;r||(r={});for(var u=-1,o=t.length;++u<o;){var i=t[u],c=Z;if(c===Z&&(c=n[i]),e)r[i]=c;else{var f=r,a=f[i];pn.call(f,i)&&J(a,c)&&(c!==Z||i in f)||(f[i]=c);
 }}return r}function N(n){return O(function(t,r){var e=-1,u=r.length,o=1<u?r[u-1]:Z,o=3<n.length&&typeof o=="function"?(u--,o):Z;for(t=Object(t);++e<u;){var i=r[e];i&&n(t,i,e,o)}return t})}function F(n){return function(){var t=arguments,r=dn(n.prototype),t=n.apply(r,t);return V(t)?t:r}}function S(n,t,r){function e(){for(var o=-1,i=arguments.length,c=-1,f=r.length,a=Array(f+i),l=this&&this!==on&&this instanceof e?u:n;++c<f;)a[c]=r[c];for(;i--;)a[c++]=arguments[++o];return l.apply(t,a)}if(typeof n!="function")throw new TypeError("Expected a function");
 var u=F(n);return e}function T(n,t,r,e,u,o){var i=n.length,c=t.length;if(i!=c&&!(1&r&&c>i))return false;for(var c=-1,f=true,a=2&r?[]:Z;++c<i;){var l=n[c],p=t[c];if(void 0!==Z){f=false;break}if(a){if(!E(t,function(n,t){if(!P(a,t)&&(l===n||u(l,n,r,e,o)))return a.push(t)})){f=false;break}}else if(l!==p&&!u(l,p,r,e,o)){f=false;break}}return f}function B(n,t,r,e,u,o){var i=1&r,c=Dn(n),f=c.length,a=Dn(t).length;if(f!=a&&!i)return false;for(var l=f;l--;){var p=c[l];if(!(i?p in t:pn.call(t,p)))return false}for(a=true;++l<f;){var p=c[l],s=n[p],h=t[p];
 if(void 0!==Z||s!==h&&!u(s,h,r,e,o)){a=false;break}i||(i="constructor"==p)}return a&&!i&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(a=false)),a}function R(t){return Nn(t)||n(t)}function D(n){var t=[];if(null!=n)for(var r in Object(n))t.push(r);return t}function I(n,t,r){return t=jn(t===Z?n.length-1:t,0),function(){for(var e=arguments,u=-1,o=jn(e.length-t,0),i=Array(o);++u<o;)i[u]=e[t+u];for(u=-1,
 o=Array(t+1);++u<t;)o[u]=e[u];return o[t]=r(i),n.apply(this,o)}}function $(n){return(null==n?0:n.length)?p(n,1):[]}function q(n){return n&&n.length?n[0]:Z}function P(n,t,r){var e=null==n?0:n.length;r=typeof r=="number"?0>r?jn(e+r,0):r:0,r=(r||0)-1;for(var u=t===t;++r<e;){var o=n[r];if(u?o===t:o!==o)return r}return-1}function z(n,t){return mn(n,g(t))}function C(n,t,r){return e(n,g(t),r,3>arguments.length,mn)}function G(n,t){var r;if(typeof t!="function")throw new TypeError("Expected a function");return n=Fn(n),
 function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=Z),r}}function J(n,t){return n===t||n!==n&&t!==t}function M(n){var t;return(t=null!=n)&&(t=n.length,t=typeof t=="number"&&-1<t&&0==t%1&&9007199254740991>=t),t&&!U(n)}function U(n){return!!V(n)&&(n=hn.call(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n)}function V(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function H(n){return null!=n&&typeof n=="object"}function K(n){
 return typeof n=="number"||H(n)&&"[object Number]"==hn.call(n)}function L(n){return typeof n=="string"||!Nn(n)&&H(n)&&"[object String]"==hn.call(n)}function Q(n){return typeof n=="string"?n:null==n?"":n+""}function W(n){return null==n?[]:u(n,Dn(n))}function X(n){return n}function Y(n,r,e){var u=Dn(r),o=h(r,u);null!=e||V(r)&&(o.length||!u.length)||(e=r,r=n,n=this,o=h(r,Dn(r)));var i=!(V(e)&&"chain"in e&&!e.chain),c=U(n);return mn(o,function(e){var u=r[e];n[e]=u,c&&(n.prototype[e]=function(){var r=this.__chain__;
 if(i||r){var e=n(this.__wrapped__);return(e.__actions__=A(this.__actions__)).push({func:u,args:arguments,thisArg:n}),e.__chain__=r,e}return u.apply(n,t([this.value()],arguments))})}),n}var Z,nn=1/0,tn=/[&<>"']/g,rn=RegExp(tn.source),en=/^(?:0|[1-9]\d*)$/,un=typeof self=="object"&&self&&self.Object===Object&&self,on=typeof global=="object"&&global&&global.Object===Object&&global||un||Function("return this")(),cn=(un=typeof exports=="object"&&exports&&!exports.nodeType&&exports)&&typeof module=="object"&&module&&!module.nodeType&&module,fn=function(n){
 return function(t){return null==n?Z:n[t]}}({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),an=Array.prototype,ln=Object.prototype,pn=ln.hasOwnProperty,sn=0,hn=ln.toString,vn=on._,bn=Object.create,yn=ln.propertyIsEnumerable,gn=on.isFinite,_n=function(n,t){return function(r){return n(t(r))}}(Object.keys,Object),jn=Math.max,dn=function(){function n(){}return function(t){return V(t)?bn?bn(t):(n.prototype=t,t=new n,n.prototype=Z,t):{}}}();i.prototype=dn(o.prototype),i.prototype.constructor=i;
 var mn=function(n,t){return function(r,e){if(null==r)return r;if(!M(r))return n(r,e);for(var u=r.length,o=t?u:-1,i=Object(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}(s),On=function(n){return function(t,r,e){var u=-1,o=Object(t);e=e(t);for(var i=e.length;i--;){var c=e[n?i:++u];if(false===r(o[c],c,o))break}return t}}(),xn=X,An=function(n){return function(t,r,e){var u=Object(t);if(!M(t)){var o=g(r);t=Dn(t),r=function(n){return o(u[n],n,u)}}return r=n(t,r,e),-1<r?u[o?t[r]:r]:Z}}(function(n,t,r){var e=null==n?0:n.length;
 if(!e)return-1;r=null==r?0:Fn(r),0>r&&(r=jn(e+r,0));n:{for(t=g(t),e=n.length,r+=-1;++r<e;)if(t(n[r],r,n)){n=r;break n}n=-1}return n}),En=O(function(n,t,r){return S(n,t,r)}),wn=O(function(n,t){return c(n,1,t)}),kn=O(function(n,t,r){return c(n,Sn(t)||0,r)}),Nn=Array.isArray,Fn=Number,Sn=Number,Tn=N(function(n,t){k(t,_n(t),n)}),Bn=N(function(n,t){k(t,D(t),n)}),Rn=O(function(n,t){n=Object(n);var r,e=-1,u=t.length,o=2<u?t[2]:Z;if(r=o){r=t[0];var i=t[1];if(V(o)){var c=typeof i;if("number"==c){if(c=M(o))var c=o.length,f=typeof i,c=null==c?9007199254740991:c,c=!!c&&("number"==f||"symbol"!=f&&en.test(i))&&-1<i&&0==i%1&&i<c;
 }else c="string"==c&&i in o;r=!!c&&J(o[i],r)}else r=false}for(r&&(u=1);++e<u;)for(o=t[e],r=In(o),i=-1,c=r.length;++i<c;){var f=r[i],a=n[f];(a===Z||J(a,ln[f])&&!pn.call(n,f))&&(n[f]=o[f])}return n}),Dn=_n,In=D,$n=function(n){return xn(I(n,Z,$),n+"")}(function(n,t){return null==n?{}:m(n,t)});o.assignIn=Bn,o.before=G,o.bind=En,o.chain=function(n){return n=o(n),n.__chain__=true,n},o.compact=function(n){return l(n,Boolean)},o.concat=function(){var n=arguments.length;if(!n)return[];for(var r=Array(n-1),e=arguments[0];n--;)r[n-1]=arguments[n];
 return t(Nn(e)?A(e):[e],p(r,1))},o.create=function(n,t){var r=dn(n);return null==t?r:Tn(r,t)},o.defaults=Rn,o.defer=wn,o.delay=kn,o.filter=function(n,t){return l(n,g(t))},o.flatten=$,o.flattenDeep=function(n){return(null==n?0:n.length)?p(n,nn):[]},o.iteratee=g,o.keys=Dn,o.map=function(n,t){return j(n,g(t))},o.matches=function(n){return d(Tn({},n))},o.mixin=Y,o.negate=function(n){if(typeof n!="function")throw new TypeError("Expected a function");return function(){return!n.apply(this,arguments)}},o.once=function(n){
 return G(2,n)},o.pick=$n,o.slice=function(n,t,r){var e=null==n?0:n.length;return r=r===Z?e:+r,e?x(n,null==t?0:+t,r):[]},o.sortBy=function(n,t){var e=0;return t=g(t),j(j(n,function(n,r,u){return{value:n,index:e++,criteria:t(n,r,u)}}).sort(function(n,t){var r;n:{r=n.criteria;var e=t.criteria;if(r!==e){var u=r!==Z,o=null===r,i=r===r,c=e!==Z,f=null===e,a=e===e;if(!f&&r>e||o&&c&&a||!u&&a||!i){r=1;break n}if(!o&&r<e||f&&u&&i||!c&&i||!a){r=-1;break n}}r=0}return r||n.index-t.index}),r("value"))},o.tap=function(n,t){
 return t(n),n},o.thru=function(n,t){return t(n)},o.toArray=function(n){return M(n)?n.length?A(n):[]:W(n)},o.values=W,o.extend=Bn,Y(o,o),o.clone=function(n){return V(n)?Nn(n)?A(n):k(n,_n(n)):n},o.escape=function(n){return(n=Q(n))&&rn.test(n)?n.replace(tn,fn):n},o.every=function(n,t,r){return t=r?Z:t,f(n,g(t))},o.find=An,o.forEach=z,o.has=function(n,t){return null!=n&&pn.call(n,t)},o.head=q,o.identity=X,o.indexOf=P,o.isArguments=n,o.isArray=Nn,o.isBoolean=function(n){return true===n||false===n||H(n)&&"[object Boolean]"==hn.call(n);
 },o.isDate=function(n){return H(n)&&"[object Date]"==hn.call(n)},o.isEmpty=function(t){return M(t)&&(Nn(t)||L(t)||U(t.splice)||n(t))?!t.length:!_n(t).length},o.isEqual=function(n,t){return b(n,t)},o.isFinite=function(n){return typeof n=="number"&&gn(n)},o.isFunction=U,o.isNaN=function(n){return K(n)&&n!=+n},o.isNull=function(n){return null===n},o.isNumber=K,o.isObject=V,o.isRegExp=function(n){return H(n)&&"[object RegExp]"==hn.call(n)},o.isString=L,o.isUndefined=function(n){return n===Z},o.last=function(n){
 var t=null==n?0:n.length;return t?n[t-1]:Z},o.max=function(n){return n&&n.length?a(n,X,v):Z},o.min=function(n){return n&&n.length?a(n,X,_):Z},o.noConflict=function(){return on._===this&&(on._=vn),this},o.noop=function(){},o.reduce=C,o.result=function(n,t,r){return t=null==n?Z:n[t],t===Z&&(t=r),U(t)?t.call(n):t},o.size=function(n){return null==n?0:(n=M(n)?n:_n(n),n.length)},o.some=function(n,t,r){return t=r?Z:t,E(n,g(t))},o.uniqueId=function(n){var t=++sn;return Q(n)+t},o.each=z,o.first=q,Y(o,function(){
 var n={};return s(o,function(t,r){pn.call(o.prototype,r)||(n[r]=t)}),n}(),{chain:false}),o.VERSION="4.17.15",mn("pop join replace reverse split push shift sort splice unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?String.prototype:an)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|join|replace|shift)$/.test(n);o.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(Nn(u)?u:[],n)}return this[r](function(r){return t.apply(Nn(r)?r:[],n);
 })}}),o.prototype.toJSON=o.prototype.valueOf=o.prototype.value=function(){return w(this.__wrapped__,this.__actions__)},typeof define=="function"&&typeof define.amd=="object"&&define.amd?(on._=o, define(function(){return o})):cn?((cn.exports=o)._=o,un._=o):on._=o}).call(this);
PaloAlto.Listeners = {
  add: function(element, event, fn) {
    this.entries = [];
    this.entries.push({element: element, event: event, fn: fn});
    element.addEventListener(event, fn);
  },

  removeAll: function(container) {
    this.entries = this.entries.filter(function (listener) {
      listener.element.removeEventListener(listener.event, listener.fn);
      return false;
    });
  },
};

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("mousedown"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
PaloAlto.Modals = (function() {
  function Modal(id, name, options) {
    var defaults = {
      close: '.js-modal-close',
      open: '.js-modal-open-' + name,
      openClass: 'modal--is-active',
      openBodyClass: 'modal--is-visible',
      closeModalOnClick: false,
      scrollIntoView: false
    };
    this.modal = document.getElementById(id);
    if (!this.modal) return false;
    this.nodes = {
      parents: [document.querySelector('html'), document.body]
    };
    this.config = Object.assign(defaults, options);
    this.modalIsOpen = false;
    this.focusOnOpen = this.config.focusOnOpen
      ? document.getElementById(this.config.focusOnOpen)
      : this.modal;
    this.openElement = document.querySelector(this.config.open);
    this.init();
  }
  Modal.prototype.init = function() {
    this.openElement.addEventListener('click', this.open.bind(this));
    this.modal.querySelector(this.config.close).addEventListener('click', this.closeModal.bind(this));
  };
  Modal.prototype.open = function(evt) {
    // Keep track if modal was opened from a click, or called by another function
    let externalCall = false;
    // if (this.modalIsOpen) return;
    // Prevent following href if link is clicked
    if (evt) {
      evt.preventDefault();
    } else {
      externalCall = true;
    }

    if (this.modalIsOpen && !externalCall) {
      this.closeModal();
      return;
    }

    this.modal.classList.add(this.config.openClass);
    this.nodes.parents.forEach((node) => {
      node.classList.add(this.config.openBodyClass);
    });
    this.modalIsOpen = true;

    const scrollableElement = document.querySelector( '.store-availabilities-list' );
    document.dispatchEvent(new CustomEvent('theme:scroll:lock', {bubbles: true, detail: scrollableElement}));

    if (this.config.scrollIntoView) {
      this.scrollIntoView();
    }
    this.bindEvents();
  };
  Modal.prototype.closeModal = function() {
    if (!this.modalIsOpen) return;
    document.activeElement.blur();
    this.modal.classList.remove(this.config.openClass);
    var self = this;
    this.nodes.parents.forEach(function(node) {
      node.classList.remove(self.config.openBodyClass);
    });
    this.modalIsOpen = false;
    this.openElement.focus();
    this.unbindEvents();

    // Enable page scroll right after the closing animation ends
    const timeout = 400;
    document.dispatchEvent(new CustomEvent('theme:scroll:unlock', {bubbles: true, detail: timeout }));
  };
  Modal.prototype.bindEvents = function() {
    this.keyupHandler = this.keyupHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    document.body.addEventListener('keyup', this.keyupHandler);
    document.body.addEventListener('click', this.clickHandler);
  };
  Modal.prototype.unbindEvents = function() {
    document.body.removeEventListener('keyup', this.keyupHandler);
    document.body.removeEventListener('click', this.clickHandler);
  };
  Modal.prototype.keyupHandler = function(event) {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
  Modal.prototype.clickHandler = function(event) {
    if (this.config.closeModalOnClick && !this.modal.contains(event.target) && !event.target.matches(this.config.open)) {
      this.closeModal();
    }
  };
  Modal.prototype.scrollIntoView = function() {
    this.focusOnOpen.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return Modal;
})();
/* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
!function(n){n.fn.prepareTransition=function(){return this.each(function(){var i=n(this);i.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd",function(){i.removeClass("is-transitioning")});var t=["transition-duration","-moz-transition-duration","-webkit-transition-duration","-o-transition-duration"],o=0;n.each(t,function(n,t){o||(o=parseFloat(i.css(t)))}),0!=o&&(i.addClass("is-transitioning"),i[0].offsetWidth)})}}(jQuery);
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():e.Rellax=t()}("undefined"!=typeof window?window:global,function(){var y=function(e,t){"use strict";var l=Object.create(y.prototype),a=0,d=0,c=[],n=!0,o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},i=null,r=!1;try{var s=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassive",null,s),window.removeEventListener("testPassive",null,s)}catch(e){}var m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,u=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t,n=["Webkit","Moz","ms"];for(t in n)if(void 0!==e.style[n[t]+"Transform"])return n[t]+"Transform"}return"transform"}();l.options={round:!0,frame:null,callback:function(){}},t&&Object.keys(t).forEach(function(e){l.options[e]=t[e]});e="string"==typeof(e=e||".rellax")?document.querySelectorAll(e):[e];if(0<e.length){if(l.elems=e,l.options.frame&&!l.options.frame.nodeType){e=document.querySelector(l.options.frame);if(!e)return void console.warn("Rellax: The frame you're trying to use doesn't exist.");l.options.frame=e}var f=function(){for(var e=0;e<c.length;e++)l.elems[e].style.cssText=c[e].style;c=[],d=window.innerHeight,window.innerWidth,v(),function(){for(var e=0;e<l.elems.length;e++){var t=w(l.elems[e]);c.push(t)}}(),p(),n&&(window.addEventListener("resize",f),n=!1,g())},w=function(e){var t=e.getAttribute("data-rellax-zindex")||0,n=0+e.getBoundingClientRect().top,o=e.clientHeight||e.offsetHeight||e.scrollHeight,i=0+e.getBoundingClientRect().left,r=e.clientWidth||e.offsetWidth||e.scrollWidth,s=e.style.cssText,l="",a=/transform\s*:/i.exec(s);return a&&(e=a.index,l=(e=(a=s.slice(e)).indexOf(";"))?" "+a.slice(11,e).replace(/\s/g,""):" "+a.slice(11).replace(/\s/g,"")),{top:n,left:i,height:o,width:r,style:s,transform:l,zindex:t}},v=function(){return a!=(a=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset)},h=function(){window.removeEventListener("resize",h),window.removeEventListener("orientationchange",h),window.removeEventListener("scroll",h),document.removeEventListener("touchmove",h),i=o(g)},g=function(){v()&&!1===n?(p(),i=o(g)):(i=null,window.addEventListener("resize",h),window.addEventListener("orientationchange",h),window.addEventListener("scroll",h,!!r&&{passive:!0}),document.addEventListener("touchmove",h,!!r&&{passive:!0}))},p=function(){for(var e=0;e<l.elems.length;e++){var t=l.elems[e].parentNode,n=t.clientHeight||t.offsetHeight||t.scrollHeight,o=t.getBoundingClientRect().top+a,i=n+o,r=c[e].height-n;if(i<a||a+d<o)return;var s=document.body,t=document.documentElement,t=Math.max(s.scrollHeight,s.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight),r="translate3d(0px,"+(o<d?r/(n+o)*-(a+o-o)+r/2:t-i<d?r/(n+(t-i))*-(a+d-o)+r/2:r/(n+d)*-(a+d-o)+r/2)+"px,"+c[e].zindex+"px) "+c[e].transform;l.elems[e].style[u]=r}};return l.destroy=function(){for(var e=0;e<l.elems.length;e++)l.elems[e].style.cssText=c[e].style;n||(window.removeEventListener("resize",f),n=!0),m(i),i=null},f(),l.refresh=f,l}console.warn("Rellax: The elements you're trying to select don't exist.")};return y});
/* replaceUrlParam - http://stackoverflow.com/questions/7171099/how-to-replace-url-parameter-with-javascript-jquery */
function replaceUrlParam(e,r,a){var n=new RegExp("("+r+"=).*?(&|$)"),c=e;return c=e.search(n)>=0?e.replace(n,"$1"+a+"$2"):c+(c.indexOf("?")>0?"&":"?")+r+"="+a};
/*!
 * Scroll lock
 * https://github.com/FL3NKEY/scroll-lock
*/
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.scrollLock=t():e.scrollLock=t()}(this,function(){return function(l){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=l,o.c=r,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(l,r,function(e){return t[e]}.bind(null,r));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,l){"use strict";l.r(t);var r=function(e){return Array.isArray(e)?e:[e]},a=function(e){return e instanceof Node},o=function(e,t){if(e&&t){e=e instanceof NodeList?e:[e];for(var l=0;l<e.length&&!0!==t(e[l],l,e.length);l++);}},n=function(e){return console.error("[scroll-lock] ".concat(e))},b=function(e){if(Array.isArray(e))return e.join(", ")},c=function(e){var t=[];return o(e,function(e){return t.push(e)}),t},h=function(e,t){var l=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:document;if(l&&-1!==c(r.querySelectorAll(t)).indexOf(e))return e;for(;(e=e.parentElement)&&-1===c(r.querySelectorAll(t)).indexOf(e););return e},v=function(e,t){var l=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;return-1!==c(l.querySelectorAll(t)).indexOf(e)},i=function(e){if(e)return"hidden"===getComputedStyle(e).overflow},m=function(e){if(e)return!!i(e)||e.scrollTop<=0},S=function(e){if(e){if(i(e))return!0;var t=e.scrollTop;return e.scrollHeight<=t+e.offsetHeight}},y=function(e){if(e)return!!i(e)||e.scrollLeft<=0},k=function(e){if(e){if(i(e))return!0;var t=e.scrollLeft;return e.scrollWidth<=t+e.offsetWidth}};l.d(t,"disablePageScroll",function(){return d}),l.d(t,"enablePageScroll",function(){return s}),l.d(t,"getScrollState",function(){return f}),l.d(t,"clearQueueScrollLocks",function(){return p}),l.d(t,"getTargetScrollBarWidth",function(){return g}),l.d(t,"getCurrentTargetScrollBarWidth",function(){return A}),l.d(t,"getPageScrollBarWidth",function(){return G}),l.d(t,"getCurrentPageScrollBarWidth",function(){return T}),l.d(t,"addScrollableTarget",function(){return L}),l.d(t,"removeScrollableTarget",function(){return W}),l.d(t,"addScrollableSelector",function(){return x}),l.d(t,"removeScrollableSelector",function(){return F}),l.d(t,"addLockableTarget",function(){return Y}),l.d(t,"addLockableSelector",function(){return E}),l.d(t,"setFillGapMethod",function(){return O}),l.d(t,"addFillGapTarget",function(){return P}),l.d(t,"removeFillGapTarget",function(){return j}),l.d(t,"addFillGapSelector",function(){return q}),l.d(t,"removeFillGapSelector",function(){return M}),l.d(t,"refillGaps",function(){return N});var u=["padding","margin","width","max-width","none"],w={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:u[0],startTouchY:0,startTouchX:0},d=function(e){w.queue<=0&&(w.scroll=!1,B(),X()),L(e),w.queue++},s=function(e){0<w.queue&&w.queue--,w.queue<=0&&(w.scroll=!0,C(),Q()),W(e)},f=function(){return w.scroll},p=function(){w.queue=0},g=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(a(e)){var l=e.style.overflowY;t?f()||(e.style.overflowY=e.getAttribute("data-scroll-lock-saved-overflow-y-property")):e.style.overflowY="scroll";var r=A(e);return e.style.overflowY=l,r}return 0},A=function(e){if(a(e)){if(e===document.body){var t=document.documentElement.clientWidth;return window.innerWidth-t}var l=e.style.borderLeftWidth,r=e.style.borderRightWidth;e.style.borderLeftWidth="0px",e.style.borderRightWidth="0px";var o=e.offsetWidth-e.clientWidth;return e.style.borderLeftWidth=l,e.style.borderRightWidth=r,o}return 0},G=function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];return g(document.body,e)},T=function(){return A(document.body)},L=function(e){e&&r(e).map(function(e){o(e,function(e){a(e)?e.setAttribute("data-scroll-lock-scrollable",""):n('"'.concat(e,'" is not a Element.'))})})},W=function(e){e&&r(e).map(function(e){o(e,function(e){a(e)?e.removeAttribute("data-scroll-lock-scrollable"):n('"'.concat(e,'" is not a Element.'))})})},x=function(e){e&&r(e).map(function(e){w.scrollableSelectors.push(e)})},F=function(e){e&&r(e).map(function(t){w.scrollableSelectors=w.scrollableSelectors.filter(function(e){return e!==t})})},Y=function(e){e&&(r(e).map(function(e){o(e,function(e){a(e)?e.setAttribute("data-scroll-lock-lockable",""):n('"'.concat(e,'" is not a Element.'))})}),f()||B())},E=function(e){e&&(r(e).map(function(e){w.lockableSelectors.push(e)}),f()||B(),q(e))},O=function(e){if(e)if(-1!==u.indexOf(e))w.fillGapMethod=e,N();else{var t=u.join(", ");n('"'.concat(e,'" method is not available!\nAvailable fill gap methods: ').concat(t,"."))}},P=function(e){e&&r(e).map(function(e){o(e,function(e){a(e)?(e.setAttribute("data-scroll-lock-fill-gap",""),w.scroll||H(e)):n('"'.concat(e,'" is not a Element.'))})})},j=function(e){e&&r(e).map(function(e){o(e,function(e){a(e)?(e.removeAttribute("data-scroll-lock-fill-gap"),w.scroll||I(e)):n('"'.concat(e,'" is not a Element.'))})})},q=function(e){e&&r(e).map(function(e){-1===w.fillGapSelectors.indexOf(e)&&(w.fillGapSelectors.push(e),w.scroll||D(e))})},M=function(e){e&&r(e).map(function(t){w.fillGapSelectors=w.fillGapSelectors.filter(function(e){return e!==t}),w.scroll||z(t)})},N=function(){w.scroll||X()},B=function(){var e=b(w.lockableSelectors);K(e)},C=function(){var e=b(w.lockableSelectors);R(e)},K=function(e){var t=document.querySelectorAll(e);o(t,function(e){U(e)})},R=function(e){var t=document.querySelectorAll(e);o(t,function(e){_(e)})},U=function(e){if(a(e)&&"true"!==e.getAttribute("data-scroll-lock-locked")){var t=window.getComputedStyle(e);e.setAttribute("data-scroll-lock-saved-overflow-y-property",t.overflowY),e.setAttribute("data-scroll-lock-saved-inline-overflow-property",e.style.overflow),e.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",e.style.overflowY),e.style.overflow="hidden",e.setAttribute("data-scroll-lock-locked","true")}},_=function(e){a(e)&&"true"===e.getAttribute("data-scroll-lock-locked")&&(e.style.overflow=e.getAttribute("data-scroll-lock-saved-inline-overflow-property"),e.style.overflowY=e.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-saved-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-locked"))},X=function(){w.fillGapSelectors.map(function(e){D(e)})},Q=function(){w.fillGapSelectors.map(function(e){z(e)})},D=function(e){var t=document.querySelectorAll(e),l=-1!==w.lockableSelectors.indexOf(e);o(t,function(e){H(e,l)})},H=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(a(e)){var l;if(""===e.getAttribute("data-scroll-lock-lockable")||t)l=g(e,!0);else{var r=h(e,b(w.lockableSelectors));l=g(r,!0)}"true"===e.getAttribute("data-scroll-lock-filled-gap")&&I(e);var o=window.getComputedStyle(e);if(e.setAttribute("data-scroll-lock-filled-gap","true"),e.setAttribute("data-scroll-lock-current-fill-gap-method",w.fillGapMethod),"margin"===w.fillGapMethod){var n=parseFloat(o.marginRight);e.style.marginRight="".concat(n+l,"px")}else if("width"===w.fillGapMethod)e.style.width="calc(100% - ".concat(l,"px)");else if("max-width"===w.fillGapMethod)e.style.maxWidth="calc(100% - ".concat(l,"px)");else if("padding"===w.fillGapMethod){var c=parseFloat(o.paddingRight);e.style.paddingRight="".concat(c+l,"px")}}},z=function(e){var t=document.querySelectorAll(e);o(t,function(e){I(e)})},I=function(e){if(a(e)&&"true"===e.getAttribute("data-scroll-lock-filled-gap")){var t=e.getAttribute("data-scroll-lock-current-fill-gap-method");e.removeAttribute("data-scroll-lock-filled-gap"),e.removeAttribute("data-scroll-lock-current-fill-gap-method"),"margin"===t?e.style.marginRight="":"width"===t?e.style.width="":"max-width"===t?e.style.maxWidth="":"padding"===t&&(e.style.paddingRight="")}};"undefined"!=typeof window&&window.addEventListener("resize",function(e){N()}),"undefined"!=typeof document&&(document.addEventListener("touchstart",function(e){w.scroll||(w.startTouchY=e.touches[0].clientY,w.startTouchX=e.touches[0].clientX)}),document.addEventListener("touchmove",function(n){if(!w.scroll){var e=w.startTouchY,t=w.startTouchX,l=n.touches[0].clientY,r=n.touches[0].clientX;if(n.touches.length<2){var c=b(w.scrollableSelectors),a=e<l,i=l<e,u=t<r,d=r<t,s=e+3<l,f=l<e-3,p=t+3<r,g=r<t-3;!function e(t){var l=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(t){var r=h(t,c,!1);if(v(t,'input[type="range"]'))return!1;if(l||v(t,'textarea, [contenteditable="true"]')&&h(t,c)||v(t,c)){var o=!1;y(t)&&k(t)?(a&&m(t)||i&&S(t))&&(o=!0):m(t)&&S(t)?(u&&y(t)||d&&k(t))&&(o=!0):(s&&m(t)||f&&S(t)||p&&y(t)||g&&k(t))&&(o=!0),o&&(r?e(r,!0):n.preventDefault())}else e(r)}else n.preventDefault()}(n.target)}}},{passive:!1}),document.addEventListener("touchend",function(e){w.scroll||(w.startTouchY=0,w.startTouchX=0)}));var J={hide:function(e){n('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'),d(e)},show:function(e){n('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'),s(e)},toggle:function(e){n('"toggle" is deprecated! Do not use it.'),f()?d():s(e)},getState:function(){return n('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'),f()},getWidth:function(){return n('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'),G()},getCurrentWidth:function(){return n('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'),T()},setScrollableTargets:function(e){n('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'),L(e)},setFillGapSelectors:function(e){n('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'),q(e)},setFillGapTargets:function(e){n('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'),P(e)},clearQueue:function(){n('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'),p()}},V=function(o){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(e){var t,l,r;t=o,r=n[l=e],l in t?Object.defineProperty(t,l,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[l]=r})}return o}({disablePageScroll:d,enablePageScroll:s,getScrollState:f,clearQueueScrollLocks:p,getTargetScrollBarWidth:g,getCurrentTargetScrollBarWidth:A,getPageScrollBarWidth:G,getCurrentPageScrollBarWidth:T,addScrollableSelector:x,removeScrollableSelector:F,addScrollableTarget:L,removeScrollableTarget:W,addLockableSelector:E,addLockableTarget:Y,addFillGapSelector:q,removeFillGapSelector:M,addFillGapTarget:P,removeFillGapTarget:j,setFillGapMethod:O,refillGaps:N,_state:w},J);t.default=V}]).default});
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Sqrl={})}(this,(function(e){"use strict";function t(e){var n,r,a=new Error(e);return n=a,r=t.prototype,Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r,a}function n(e,n,r){var a=n.slice(0,r).split(/\n/),i=a.length,s=a[i-1].length+1;throw t(e+=" at line "+i+" col "+s+":\n\n  "+n.split(/\n/)[i-1]+"\n  "+Array(s).join(" ")+"^")}t.prototype=Object.create(Error.prototype,{name:{value:"Squirrelly Error",enumerable:!1}});var r=new Function("return this")().Promise,a=!1;try{a=new Function("return (async function(){}).constructor")()}catch(e){if(!(e instanceof SyntaxError))throw e}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function s(e,t,n){for(var r in t)i(t,r)&&(null==t[r]||"object"!=typeof t[r]||"storage"!==r&&"prefixes"!==r||n?e[r]=t[r]:e[r]=s({},t[r]));return e}var c=/^async +/,o=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,l=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,f=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g,u=/[.*+\-?^${}()|[\]\\]/g;function p(e){return u.test(e)?e.replace(u,"\\$&"):e}function h(e,r){r.rmWhitespace&&(e=e.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),o.lastIndex=0,l.lastIndex=0,f.lastIndex=0;var a=r.prefixes,i=[a.h,a.b,a.i,a.r,a.c,a.e].reduce((function(e,t){return e&&t?e+"|"+p(t):t?p(t):e}),""),s=new RegExp("([|()]|=>)|('|\"|`|\\/\\*)|\\s*((\\/)?(-|_)?"+p(r.tags[1])+")","g"),u=new RegExp("([^]*?)"+p(r.tags[0])+"(-|_)?\\s*("+i+")?\\s*","g"),h=0,d=!1;function g(t,a){var i,p={f:[]},g=0,v="c";function m(t){var a=e.slice(h,t),i=a.trim();if("f"===v)"safe"===i?p.raw=!0:r.async&&c.test(i)?(i=i.replace(c,""),p.f.push([i,"",!0])):p.f.push([i,""]);else if("fp"===v)p.f[p.f.length-1][1]+=i;else if("err"===v){if(i){var s=a.search(/\S/);n("invalid syntax",e,h+s)}}else p[v]=i;h=t+1}for("h"===a||"b"===a||"c"===a?v="n":"r"===a&&(p.raw=!0,a="i"),s.lastIndex=h;null!==(i=s.exec(e));){var y=i[1],x=i[2],b=i[3],w=i[4],F=i[5],S=i.index;if(y)"("===y?(0===g&&("n"===v?(m(S),v="p"):"f"===v&&(m(S),v="fp")),g++):")"===y?0===--g&&"c"!==v&&(m(S),v="err"):0===g&&"|"===y?(m(S),v="f"):"=>"===y&&(m(S),h+=1,v="res");else if(x){if("/*"===x){var I=e.indexOf("*/",s.lastIndex);-1===I&&n("unclosed comment",e,i.index),s.lastIndex=I+2}else if("'"===x){l.lastIndex=i.index,l.exec(e)?s.lastIndex=l.lastIndex:n("unclosed string",e,i.index)}else if('"'===x){f.lastIndex=i.index,f.exec(e)?s.lastIndex=f.lastIndex:n("unclosed string",e,i.index)}else if("`"===x){o.lastIndex=i.index,o.exec(e)?s.lastIndex=o.lastIndex:n("unclosed string",e,i.index)}}else if(b)return m(S),h=S+i[0].length,u.lastIndex=h,d=F,w&&"h"===a&&(a="s"),p.t=a,p}return n("unclosed tag",e,t),p}var v=function i(s,o){s.b=[],s.d=[];var l,f=!1,p=[];function v(e,t){e&&(e=function(e,t,n,r){var a,i;return"string"==typeof t.autoTrim?a=i=t.autoTrim:Array.isArray(t.autoTrim)&&(a=t.autoTrim[1],i=t.autoTrim[0]),(n||!1===n)&&(a=n),(r||!1===r)&&(i=r),"slurp"===a&&"slurp"===i?e.trim():("_"===a||"slurp"===a?e=String.prototype.trimLeft?e.trimLeft():e.replace(/^[\s\uFEFF\xA0]+/,""):"-"!==a&&"nl"!==a||(e=e.replace(/^(?:\n|\r|\r\n)/,"")),"_"===i||"slurp"===i?e=String.prototype.trimRight?e.trimRight():e.replace(/[\s\uFEFF\xA0]+$/,""):"-"!==i&&"nl"!==i||(e=e.replace(/(?:\n|\r|\r\n)$/,"")),e)}(e,r,d,t))&&(e=e.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),p.push(e))}for(;null!==(l=u.exec(e));){var m,y=l[1],x=l[2],b=l[3]||"";for(var w in a)if(a[w]===b){m=w;break}v(y,x),h=l.index+l[0].length,m||n("unrecognized tag type: "+b,e,h);var F=g(l.index,m),S=F.t;if("h"===S){var I=F.n||"";r.async&&c.test(I)&&(F.a=!0,F.n=I.replace(c,"")),F=i(F),p.push(F)}else if("c"===S){if(s.n===F.n)return f?(f.d=p,s.b.push(f)):s.d=p,s;n("Helper start and end don't match",e,l.index+l[0].length)}else if("b"===S){f?(f.d=p,s.b.push(f)):s.d=p;var R=F.n||"";r.async&&c.test(R)&&(F.a=!0,F.n=R.replace(c,"")),f=F,p=[]}else if("s"===S){var T=F.n||"";r.async&&c.test(T)&&(F.a=!0,F.n=T.replace(c,"")),p.push(F)}else p.push(F)}if(!o)throw t('unclosed helper "'+s.n+'"');return v(e.slice(h,e.length),!1),s.d=p,s}({f:[]},!0);if(r.plugins)for(var m=0;m<r.plugins.length;m++){var y=r.plugins[m];y.processAST&&(v.d=y.processAST(v.d,r))}return v.d}function d(e,t){var n=h(e,t),r="var tR='';"+(t.useWith?"with("+t.varName+"||{}){":"")+x(n,t)+"if(cb){cb(null,tR)} return tR"+(t.useWith?"}":"");if(t.plugins)for(var a=0;a<t.plugins.length;a++){var i=t.plugins[a];i.processFnString&&(r=i.processFnString(r,t))}return r}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n][0],a=t[n][1];e=(t[n][2]?"await ":"")+"c.l('F','"+r+"')("+e,a&&(e+=","+a),e+=")"}return e}function v(e,t,n,r,a,i){var s="{exec:"+(a?"async ":"")+y(n,t,e)+",params:["+r+"]";return i&&(s+=",name:'"+i+"'"),a&&(s+=",async:true"),s+="}"}function m(e,t){for(var n="[",r=0;r<e.length;r++){var a=e[r];n+=v(t,a.res||"",a.d,a.p||"",a.a,a.n),r<e.length&&(n+=",")}return n+="]"}function y(e,t,n){return"function("+t+"){var tR='';"+x(e,n)+"return tR}"}function x(e,t){for(var n=0,r=e.length,a="";n<r;n++){var i=e[n];if("string"==typeof i){a+="tR+='"+i+"';"}else{var s=i.t,c=i.c||"",o=i.f,l=i.n||"",f=i.p||"",u=i.res||"",p=i.b,h=!!i.a;if("i"===s){t.defaultFilter&&(c="c.l('F','"+t.defaultFilter+"')("+c+")");var d=g(c,o);!i.raw&&t.autoEscape&&(d="c.l('F','e')("+d+")"),a+="tR+="+d+";"}else if("h"===s)if(t.storage.nativeHelpers.get(l))a+=t.storage.nativeHelpers.get(l)(i,t);else{var y=(h?"await ":"")+"c.l('H','"+l+"')("+v(t,u,i.d,f,h);y+=p?","+m(p,t):",[]",a+="tR+="+g(y+=",c)",o)+";"}else"s"===s?a+="tR+="+g((h?"await ":"")+"c.l('H','"+l+"')({params:["+f+"]},[],c)",o)+";":"e"===s&&(a+=c+"\n")}}return a}var b=function(){function e(e){this.cache=e}return e.prototype.define=function(e,t){this.cache[e]=t},e.prototype.get=function(e){return this.cache[e]},e.prototype.remove=function(e){delete this.cache[e]},e.prototype.reset=function(){this.cache={}},e.prototype.load=function(e){s(this.cache,e,!0)},e}(),w=new b({});function F(e,n,r,a){if(n&&n.length>0)throw t((a?"Native":"")+"Helper '"+e+"' doesn't accept blocks");if(r&&r.length>0)throw t((a?"Native":"")+"Helper '"+e+"' doesn't accept filters")}var S=new b({each:function(e,t){var n="",r=e.params[0];if(F("each",t,!1),e.async)return new Promise((function(t){!function e(t,n,r,a,i){r(t[n],n).then((function(s){a+=s,n===t.length-1?i(a):e(t,n+1,r,a,i)}))}(r,0,e.exec,n,t)}));for(var a=0;a<r.length;a++)n+=e.exec(r[a],a);return n},foreach:function(e,t){var n=e.params[0];if(F("foreach",t,!1),e.async)return new Promise((function(t){!function e(t,n,r,a,i,s){a(n[r],t[n[r]]).then((function(c){i+=c,r===n.length-1?s(i):e(t,n,r+1,a,i,s)}))}(n,Object.keys(n),0,e.exec,"",t)}));var r="";for(var a in n)i(n,a)&&(r+=e.exec(a,n[a]));return r},include:function(e,n,r){F("include",n,!1);var a=r.storage.templates.get(e.params[0]);if(!a)throw t('Could not fetch template "'+e.params[0]+'"');return a(e.params[1],r)},extends:function(e,n,r){var a=e.params[1]||{};a.content=e.exec();for(var i=0;i<n.length;i++){var s=n[i];a[s.name]=s.exec()}var c=r.storage.templates.get(e.params[0]);if(!c)throw t('Could not fetch template "'+e.params[0]+'"');return c(a,r)},useScope:function(e,t){return F("useScope",t,!1),e.exec(e.params[0])}}),I=new b({if:function(e,t){F("if",!1,e.f,!0);var n="if("+e.p+"){"+x(e.d,t)+"}";if(e.b)for(var r=0;r<e.b.length;r++){var a=e.b[r];"else"===a.n?n+="else{"+x(a.d,t)+"}":"elif"===a.n&&(n+="else if("+a.p+"){"+x(a.d,t)+"}")}return n},try:function(e,n){if(F("try",!1,e.f,!0),!e.b||1!==e.b.length||"catch"!==e.b[0].n)throw t("native helper 'try' only accepts 1 block, 'catch'");var r="try{"+x(e.d,n)+"}",a=e.b[0];return r+="catch"+(a.res?"("+a.res+")":"")+"{"+x(a.d,n)+"}"},block:function(e,t){return F("block",e.b,e.f,!0),"if(!"+t.varName+"["+e.p+"]){tR+=("+y(e.d,"",t)+")()}else{tR+="+t.varName+"["+e.p+"]}"}}),R={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function T(e){return R[e]}var E=new b({e:function(e){var t=String(e);return/[&<>"']/.test(t)?t.replace(/[&<>"']/g,T):t}}),j={varName:"it",autoTrim:[!1,"nl"],autoEscape:!0,defaultFilter:!1,tags:["{{","}}"],l:function(e,n){if("H"===e){var r=this.storage.helpers.get(n);if(r)return r;throw t("Can't find helper '"+n+"'")}if("F"===e){var a=this.storage.filters.get(n);if(a)return a;throw t("Can't find filter '"+n+"'")}},async:!1,storage:{helpers:S,nativeHelpers:I,filters:E,templates:w},prefixes:{h:"@",b:"#",i:"",r:"*",c:"/",e:"!"},cache:!1,plugins:[],useWith:!1};function H(e,t){var n={};return s(n,j),t&&s(n,t),e&&s(n,e),n.l.bind(n),n}function O(e,n){var r=H(n||{}),i=Function;if(r.async){if(!a)throw t("This environment doesn't support async/await");i=a}try{return new i(r.varName,"c","cb",d(e,r))}catch(n){throw n instanceof SyntaxError?t("Bad template syntax\n\n"+n.message+"\n"+Array(n.message.length+1).join("=")+"\n"+d(e,r)):n}}function _(e,t){var n;return t.cache&&t.name&&t.storage.templates.get(t.name)?t.storage.templates.get(t.name):(n="function"==typeof e?e:O(e,t),t.cache&&t.name&&t.storage.templates.define(t.name,n),n)}j.l.bind(j),e.compile=O,e.compileScope=x,e.compileScopeIntoFunction=y,e.compileToString=d,e.defaultConfig=j,e.filters=E,e.getConfig=H,e.helpers=S,e.nativeHelpers=I,e.parse=h,e.render=function(e,n,a,i){var s=H(a||{});if(!s.async)return _(e,s)(n,s);if(!i){if("function"==typeof r)return new r((function(t,r){try{t(_(e,s)(n,s))}catch(e){r(e)}}));throw t("Please provide a callback function, this env doesn't support Promises")}try{_(e,s)(n,s,i)}catch(e){return i(e)}},e.templates=w,Object.defineProperty(e,"__esModule",{value:!0})}));
/* Throttle ES6 */
const throttle = (fn, wait) => {
  let prev, next;
  return function invokeFn(...args) {
    const now = Date.now();
    next = clearTimeout(next);
    if (!prev || now - prev >= wait) {
      // eslint-disable-next-line prefer-spread
      fn.apply(null, args);
      prev = now;
    } else {
      next = setTimeout(invokeFn.bind(null, ...args), wait - (now - prev));
    }
  };
};
/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * https://github.com/Shopify/slate.git.
 *
 */

/**
 * Preloads an image in memory and uses the browsers cache to store it until needed.
 *
 * @param {Array} images - A list of image urls
 * @param {String} size - A shopify image size attribute
 */

  function preload(images, size) {
  if (typeof images === 'string') {
    images = [images];
  }

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    loadImage(getSizedImageUrl(image, size));
  }
}

/**
 * Loads and caches an image in the browsers cache.
 * @param {string} path - An image url
 */
function loadImage(path) {
  new Image().src = path;
}

/**
 * Find the Shopify image attribute size
 *
 * @param {string} src
 * @returns {null}
 */
function imageSize(src) {
  const match = src.match(
    /.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/
  );

  if (match) {
    return match[1];
  } else {
    return null;
  }
}

/**
 * Adds a Shopify size attribute to a URL
 *
 * @param src
 * @param size
 * @returns {*}
 */
function getSizedImageUrl(src, size) {
  if (size === null) {
    return src;
  }

  if (size === 'master') {
    return removeProtocol(src);
  }

  const match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

  if (match) {
    const prefix = src.split(match[0]);
    const suffix = match[0];

    return removeProtocol(`${prefix[0]}_${size}${suffix}`);
  } else {
    return null;
  }
}

function removeProtocol(path) {
  return path.replace(/http(s)?:/, '');
}

var images = /*#__PURE__*/Object.freeze({
  __proto__: null,
  preload: preload,
  loadImage: loadImage,
  imageSize: imageSize,
  getSizedImageUrl: getSizedImageUrl,
  removeProtocol: removeProtocol
});
PaloAlto.ThemeProduct = {
  getVariantFromId: function(product, value) {
    this._validateProductStructure(product);

    if (typeof value !== 'number') {
      throw new TypeError(value + ' is not a Number.');
    }

    var result = product.variants.filter(function (variant) {
      return variant.id === value;
    });

    return result[0] || null;
  },

  getVariantFromSerializedArray: function(product, collection) {
    this._validateProductStructure(product);

    // If value is an array of options
    var optionArray = this._createOptionArrayFromOptionCollection(product, collection);
    return this.getVariantFromOptionArray(product, optionArray);
  },

  getVariantFromOptionArray: function(product, options) {
    this._validateProductStructure(product);
    this._validateOptionsArray(options);

    var result = product.variants.filter(function (variant) {
      return options.every(function (option, index) {
        return variant.options[index] === option;
      });
    });

    return result[0] || null;
  },

  _createOptionArrayFromOptionCollection: function(product, collection) {
    this._validateProductStructure(product);
    this._validateSerializedArray(collection);

    var optionArray = [];

    collection.forEach(function (option) {
      for (var i = 0; i < product.options.length; i++) {
        var name = product.options[i].name || product.options[i];
        if (name.toLowerCase() === option.name.toLowerCase()) {
          optionArray[i] = option.value;
          break;
        }
      }
    });

    return optionArray;
  },

  _validateProductStructure: function(product) {
    if (typeof product !== 'object') {
      throw new TypeError(product + ' is not an object.');
    }

    if (Object.keys(product).length === 0 && product.constructor === Object) {
      throw new Error(product + ' is empty.');
    }
  },

  _validateSerializedArray: function(collection) {
    if (!Array.isArray(collection)) {
      throw new TypeError(collection + ' is not an array.');
    }

    if (collection.length === 0) {
      throw new Error(collection + ' is empty.');
    }

    if (collection[0].hasOwnProperty('name')) {
      if (typeof collection[0].name !== 'string') {
        throw new TypeError('Invalid value type passed for name of option ' + collection[0].name + '. Value should be string.');
      }
    } else {
      throw new Error(collection[0] + 'does not contain name key.');
    }
  },

  _validateOptionsArray: function(options) {
    if (Array.isArray(options) && typeof options[0] === 'object') {
      throw new Error(options + 'is not a valid array of options.');
    }
  },
};

PaloAlto.ProductForm = (function() {
  const selectors = {
    idInput: '[name="id"]',
    planInput: '[name="selling_plan"]',
    optionInput: '[name^="options"]',
    quantityInput: '[name="quantity"]',
    propertyInput: '[name^="properties"]',
  };

  function ProductForm(element, product, options) {
    this.element = element;
    this.form = this.element.tagName == 'FORM' ? this.element : this.element.querySelector('form');
    this.product = this._validateProductObject(product);
    this.variantElement = this.element.querySelector(selectors.idInput);

    options = options || {};

    PaloAlto.Listeners.add(this.element, 'submit', this._onSubmit.bind(this, options));

    this.optionInputs = this._initInputs(selectors.optionInput, options.onOptionChange);

    this.planInputs = this._initInputs(selectors.planInput, options.onPlanChange);

    this.quantityInputs = this._initInputs(selectors.quantityInput, options.onQuantityChange);

    this.propertyInputs = this._initInputs(selectors.propertyInput, options.onPropertyChange);
  }

  ProductForm.prototype = $.extend({}, ProductForm.prototype, {
    /**
     * Cleans up all event handlers that were assigned when the Product Form was constructed.
     * Useful for use when a section needs to be reloaded in the theme editor.
     */
    destroy() {
      PaloAlto.Listeners.removeAll();
    },

    /**
     * Getter method which returns the array of currently selected option values
     *
     * @returns {Array} An array of option values
     */
    options() {
      return this._serializeInputValues(this.optionInputs, function (item) {
        var regex = /(?:^(options\[))(.*?)(?:\])/;
        item.name = regex.exec(item.name)[2]; // Use just the value between 'options[' and ']'
        return item;
      });
    },

    /**
     * Getter method which returns the currently selected variant, or `null` if variant
     * doesn't exist.
     *
     * @returns {Object|null} Variant object
     */
    variant() {
      const opts = this.options();
      if (opts.length) {
        return PaloAlto.ThemeProduct.getVariantFromSerializedArray(this.product, opts);
      } else {
        return this.product.variants[0];
      }
    },

    /**
     * Getter method which returns the current selling plan, or `null` if plan
     * doesn't exist.
     *
     * @returns {Object|null} Variant object
     */
    plan(variant) {
      let plan = {
        allocation: null,
        group: null,
        detail: null,
      };
      const formData = new FormData(this.form);
      const id = formData.get('selling_plan');

      if (id && variant) {
        plan.allocation = variant.selling_plan_allocations.find(function (item) {
          return item.selling_plan_id.toString() === id.toString();
        });
      }
      if (plan.allocation) {
        plan.group = this.product.selling_plan_groups.find(function (item) {
          return item.id.toString() === plan.allocation.selling_plan_group_id.toString();
        });
      }
      if (plan.group) {
        plan.detail = plan.group.selling_plans.find(function (item) {
          return item.id.toString() === id.toString();
        });
      }

      if (plan && plan.allocation && plan.detail && plan.allocation) {
        return plan;
      } else return null;
    },

    /**
     * Getter method which returns a collection of objects containing name and values
     * of property inputs
     *
     * @returns {Array} Collection of objects with name and value keys
     */
    properties() {
      return this._serializeInputValues(this.propertyInputs, function (item) {
        var regex = /(?:^(properties\[))(.*?)(?:\])/;
        item.name = regex.exec(item.name)[2]; // Use just the value between 'properties[' and ']'
        return item;
      });
    },

    /**
     * Getter method which returns the current quantity or 1 if no quantity input is
     * included in the form
     *
     * @returns {Array} Collection of objects with name and value keys
     */
    quantity() {
      return this.quantityInputs[0] ? Number.parseInt(this.quantityInputs[0].value, 10) : 1;
    },

    getFormState() {
      const variant = this.variant();
      return {
        options: this.options(),
        variant: variant,
        properties: this.properties(),
        quantity: this.quantity(),
        plan: this.plan(variant),
      };
    },

    // Private Methods
    // -----------------------------------------------------------------------------
    _setIdInputValue(variant) {
      if (variant && variant.id) {
        this.variantElement.value = variant.id.toString();
      } else {
        this.variantElement.value = '';
      }

      this.variantElement.dispatchEvent(new Event('change'));
    },

    _onSubmit(options, event) {
      event.dataset = this.getFormState();
      if (options.onFormSubmit) {
        options.onFormSubmit(event);
      }
    },

    _onOptionChange(event) {
      this._setIdInputValue(event.dataset.variant);
    },

    _onFormEvent(cb) {
      if (typeof cb === 'undefined') {
        return Function.prototype.bind();
      }

      return function (event) {
        event.dataset = this.getFormState();
        this._setIdInputValue(event.dataset.variant);
        cb(event);
      }.bind(this);
    },

    _initInputs(selector, cb) {
      var elements = Array.prototype.slice.call(this.element.querySelectorAll(selector));

      return elements.map(
        function (element) {
          PaloAlto.Listeners.add(element, 'change', this._onFormEvent(cb));
          return element;
        }.bind(this)
      );
    },

    _serializeInputValues(inputs, transform) {
      return inputs.reduce(function (options, input) {
        if (
          input.checked || // If input is a checked (means type radio or checkbox)
          (input.type !== 'radio' && input.type !== 'checkbox') // Or if its any other type of input
        ) {
          options.push(transform({name: input.name, value: input.value}));
        }

        return options;
      }, []);
    },

    _validateProductObject(product) {
      if (typeof product !== 'object') {
        throw new TypeError(product + ' is not an object.');
      }

      if (typeof product.variants[0].options === 'undefined') {
        throw new TypeError('Product object is invalid. Make sure you use the product object that is output from {{ product | json }} or from the http://[your-product-url].js route');
      }
      return product;
    }
  });

  return ProductForm;
})();

/* YoutTube API */
window.isYoutubeAPILoaded = false;

function loadYoutubeAPI() {
	if (isYoutubeAPILoaded) {
		return;
	} else {
		// Load Youtube API script
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}
}

function onYouTubeIframeAPIReady() {
	window.isYoutubeAPILoaded = true;
	document.dispatchEvent(new CustomEvent('youtubeAPIReady'), {bubbles: true});
}

/*= =============== Slate ================*/
slate.a11y = {
/**
 * For use when focus shifts to a container rather than a link
 * eg for In-page links, after scroll, focus shifts to content area so that
 * next `tab` is where user expects if focusing a link, just $link.focus();
 *
 * @param {JQuery} $element - The element to be acted upon
 */
  state: {
    firstFocusable: null,
    lastFocusable: null,
    trigger: null
  },

  pageLinkFocus: function($element) {
    var focusClass = 'js-focus-hidden';

    $element
      .first()
      .attr('tabIndex', '-1')
      .focus()
      .addClass(focusClass)
      .one('blur', callback);

    function callback() {
      $element
        .first()
        .removeClass(focusClass)
        .removeAttr('tabindex');
    }
  },

  trapFocus: function(options) {
    var focusableElements = Array.from(
      options.container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex^="-"])'
      )
    ).filter(function(element) {
      var width = element.offsetWidth;
      var height = element.offsetHeight;

      return (
        width !== 0 &&
        height !== 0 &&
        getComputedStyle(element).getPropertyValue('display') !== 'none'
      );
    });

    this.state.firstFocusable = focusableElements[0];
    this.state.lastFocusable = focusableElements[focusableElements.length - 1];

    if (!options.elementToFocus) {
      options.elementToFocus = this.state.firstFocusable || options.container;
    }
    options.container.setAttribute('tabindex', '-1');
    options.elementToFocus.focus();

    this._setupHandlers();

    document.addEventListener('focusin', this._onFocusInHandler);
    document.addEventListener('focusout', this._onFocusOutHandler);
  },

  removeTrapFocus: function(options) {
    const focusVisible = !document.body.classList.contains('no-outline');
    if (options && options.container) {
      options.container.removeAttribute('tabindex');
    }
    document.removeEventListener('focusin', this._onFocusInHandler);

    if (this.state.trigger && focusVisible) {
      this.state.trigger.focus();
    }
  },

  _manageFocus: function(evt) {
    if (evt.keyCode !== slate.utils.keyboardKeys.TAB) return;

    /**
     * On the last focusable element and tab forward,
     * focus the first element.
     */
    if (evt.target === this.state.lastFocusable && !evt.shiftKey) {
      evt.preventDefault();
      this.state.firstFocusable.focus();
    }
    /**
     * On the first focusable element and tab backward,
     * focus the last element.
     */
    if (evt.target === this.state.firstFocusable && evt.shiftKey) {
      evt.preventDefault();
      this.state.lastFocusable.focus();
    }
  },

  _onFocusOut: function() {
    document.removeEventListener('keydown', this._manageFocusHandler);
  },

  _onFocusIn: function(evt) {
    if (
      evt.target !== this.state.lastFocusable &&
      evt.target !== this.state.firstFocusable
    )
    return;

    document.addEventListener('keydown', this._manageFocusHandler);
  },

  _setupHandlers: function() {
    if (!this._onFocusInHandler) {
      this._onFocusInHandler = this._onFocusIn.bind(this);
    }

    if (!this._onFocusOutHandler) {
      this._onFocusOutHandler = this._onFocusIn.bind(this);
    }

    if (!this._manageFocusHandler) {
      this._manageFocusHandler = this._manageFocus.bind(this);
    }
  }
};
/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 * Alternatives
 * - Accounting.js - http://openexchangerates.github.io/accounting.js/
 *
 */

slate.Currency = (function() {
	var moneyFormat = '${{amount}}'; // eslint-disable-line camelcase

	function formatMoney(cents, format) {
		if (typeof cents === 'string') {
			cents = cents.replace('.', '');
		}
		var value = '';
		var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
		var formatString = format || moneyFormat;

		function formatWithDelimiters(number, precision, thousands, decimal) {
			thousands = thousands || ',';
			decimal = decimal || '.';

			if (isNaN(number) || number === null) {
				return 0;
			}

			number = (number / 100.0).toFixed(precision);

			var parts = number.split('.');
			var dollarsAmount = parts[0].replace(
				/(\d)(?=(\d\d\d)+(?!\d))/g,
				'$1' + thousands
			);
			var centsAmount = parts[1] ? decimal + parts[1] : '';

			return dollarsAmount + centsAmount;
		}

		switch (formatString.match(placeholderRegex)[1]) {
			case 'amount':
				value = formatWithDelimiters(cents, 2);
				break;
			case 'amount_no_decimals':
				value = formatWithDelimiters(cents, 0);
				break;
			case 'amount_with_comma_separator':
				value = formatWithDelimiters(cents, 2, '.', ',');
				break;
			case 'amount_no_decimals_with_comma_separator':
				value = formatWithDelimiters(cents, 0, '.', ',');
				break;
			case 'amount_no_decimals_with_space_separator':
				value = formatWithDelimiters(cents, 0, ' ');
				break;
			case 'amount_with_apostrophe_separator':
				value = formatWithDelimiters(cents, 2, "'");
				break;
		}

		return formatString.replace(placeholderRegex, value);
	}

	return {
		formatMoney: formatMoney
	};
})();
/**
 * Utility helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions for dealing with arrays and objects
 *
 * @namespace utils
 */

slate.utils = {

	/**
	 * Return an object from an array of objects that matches the provided key and value
	 *
	 * @param {array} array - Array of objects
	 * @param {string} key - Key to match the value against
	 * @param {string} value - Value to get match of
	 */
	findInstance: function(array, key, value) {
		for (var i = 0; i < array.length; i++) {
			if (array[i][key] === value) {
				return array[i];
			}
		}
	},

	/**
	 * Remove an object from an array of objects by matching the provided key and value
	 *
	 * @param {array} array - Array of objects
	 * @param {string} key - Key to match the value against
	 * @param {string} value - Value to get match of
	 */
	removeInstance: function(array, key, value) {
		var i = array.length;
		while(i--) {
			if (array[i][key] === value) {
				array.splice(i, 1);
				break;
			}
		}

		return array;
	},

	/**
	 * _.compact from lodash
	 * Remove empty/false items from array
	 * Source: https://github.com/lodash/lodash/blob/master/compact.js
	 *
	 * @param {array} array
	 */
	compact: function(array) {
		var index = -1;
		var length = array == null ? 0 : array.length;
		var resIndex = 0;
		var result = [];

		while (++index < length) {
			var value = array[index];
			if (value) {
				result[resIndex++] = value;
			}
		}
		return result;
	},

	/**
	 * _.defaultTo from lodash
	 * Checks `value` to determine whether a default value should be returned in
	 * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
	 * or `undefined`.
	 * Source: https://github.com/lodash/lodash/blob/master/defaultTo.js
	 *
	 * @param {*} value - Value to check
	 * @param {*} defaultValue - Default value
	 * @returns {*} - Returns the resolved value
	 */
	defaultTo: function(value, defaultValue) {
		return (value == null || value !== value) ? defaultValue : value
	},

	keyboardKeys: {
		TAB: 9,
		ENTER: 13,
		ESCAPE: 27,
		SPACE: 32,
		LEFTARROW: 37,
		RIGHTARROW: 39
	}
};


/*= =============== Global ================*/
PaloAlto.CartDrawer = (function() {
  const settings = {
    cartDrawerEnabled: window.theme.settings.cartType === 'drawer',
    timers: {
      addProductTimeout: 1000,
    },
    isQuickViewEnabled: theme.settings.quickButton == 'view',
  };

  const selectors = {
    outerSection: '[data-section-id]',
    additionalCheckoutButtons: '[data-additional-checkout-button]',
    apiContent: '[data-api-content]',
    buttonAddToCart: '[data-add-to-cart]',
    cartCloseError: '[data-cart-error-close]',
    cartDrawer: '[data-cart-drawer]',
    cartDrawerTemplate: '[data-cart-drawer-template]',
    cartDrawerToggle: '[data-cart-drawer-toggle]',
    cartDrawerBody: '[data-cart-drawer-body]',
    cartErrors: '[data-cart-errors]',
    cartForm: '[data-cart-form]',
    cartTermsCheckbox: '[data-cart-acceptance-checkbox]',
    cartCheckoutButtonWrapper: '[data-cart-checkout-buttons]',
    cartCheckoutButton: '[data-cart-checkout-button]',
    cartTotalDiscountsTemplate: '[data-cart-total-discount]',
    cartItemRemove: '[data-item-remove]',
    cartItemQty: '[data-quantity-field]',
    cartItemsQty: '[data-cart-items-qty]',
    cartTotal: '[data-cart-total]',
    cartMessage: '[data-cart-message]',
    cartMessageDefault: '[data-message-default]',
    cartProgress: '[data-cart-message-progress]',
    cartOriginalTotal: '[data-cart-original-total]',
    cartOriginalTotalPrice: '[data-cart-original-total-price]',
    cartDiscountsHolder: '[data-cart-discounts-holder]',
    emptyMessage: '[data-empty-message]',
    buttonHolder: '[data-foot-holder]',
    item: '[data-cart-item]',
    itemsHolder: '[data-items-holder]',
    itemsWrapper: '[data-items-wrapper]',
    formCloseError: '[data-close-error]',
    formErrorsContainer: '[data-cart-errors-container]',
    upsellHolder: '[data-upsell-holder]',
    errorMessage: '[data-error-message]',
    termsErrorMessage: '[data-terms-error-message]',
    pairProductsHolder: '[data-pair-products-holder]',
    pairProducts: '[data-pair-products]',
    pairProductsScript: '[data-pair-products-script]',
    buttonSkipPairProduct: '[data-skip-pair-product]',
    productIDAttribute: 'data-product-id',
    leftToSpend: '[data-left-to-spend]',
    quickBuyForm: '[data-quickbuy-form]',
    productMediaContainer: '[data-product-media-container]',
    popupContent: '.mfp-content',
  };

  const classes = {
    hidden: 'hidden',
    added: 'is-added',
    isHidden: 'is-hidden',
    cartDrawerOpen: 'js-drawer-open-cart',
    open: 'is-open',
    visible: 'is-visible',
    loading: 'is-loading',
    disabled: 'is-disabled',
    success: 'is-success',
    error: 'has-error',
    cartItems: 'cart__toggle--has-items',
  };

  const attributes = {
    shippingMessageLimit: 'data-limit',
    cartMessageValue: 'data-cart-message',
    ariaExpanded: 'aria-expanded',
    disabled: 'disabled',
    value: 'value',
    dataId: 'data-id',
    focusElement: 'data-focus-element',
    upsellButton: 'data-upsell-btn',
    errorContainerQuickBuy: 'data-cart-errors-container-quickbuy',
  };

  function CartDrawer() {
    if (window.location.pathname === '/password') {
      return;
    }

    this.init();
  }

  CartDrawer.prototype = $.extend({}, CartDrawer.prototype, {
    init() {
      // DOM Elements
      this.cartToggleButtons = document.querySelectorAll(selectors.cartDrawerToggle);
      this.cartDrawer = document.querySelector(selectors.cartDrawer);

      this.assignArguments();

      this.form = null;

      this.build = this.build.bind(this);

      // AJAX request
      this.addToCart = this.addToCart.bind(this);
      this.updateCart = this.updateCart.bind(this);

      // Cart events
      this.openCartDrawer = this.openCartDrawer.bind(this);
      this.closeCartDrawer = this.closeCartDrawer.bind(this);
      this.toggleCartDrawer = this.toggleCartDrawer.bind(this);
      this.formSubmitHandler = throttle(this.formSubmitHandler.bind(this), 50);
      this.closeCartError = PaloAlto.debounce(() => PaloAlto.Slide.up(this.cartErrorHolder, 400), 250);
      this.cartDrawerCloseEvent = null;
      this.errorTimer = 0;

      // Checking
      this.hasItemsInCart = this.hasItemsInCart.bind(this);

      // Set classes
      this.toggleClassesOnContainers = this.toggleClassesOnContainers.bind(this);

      // Flags
      this.totalItems = 0;
      this.isCartDrawerOpen = false;
      this.isCartDrawerLoaded = false;
      this.cartDiscounts = 0;
      this.cartDrawerEnabled = settings.cartDrawerEnabled;
      this.cartLimitErrorIsHidden = true;

      // Cart Events
      this.cartEvents();
      this.cartAddEvent();
      this.cartDrawerToggleEvents();

      // Init quantity for fields
      this.initQuantity();

      // Pair with
      this.pairWithArray = window.pairWithProducts;
      this.sessionStorage = window.sessionStorage;
      this.getPairProducts();
      this.renderPairProducts();
      this.pairProductSkipEvent();

      document.addEventListener('theme:upsell:unavailable', () => {
        this.checkPairProductIsSoldOut();
      });
    },

    /**
     * Assign cart constructor arguments on page load or after cart drawer is loaded
     *
     * @return  {Void}
     */
    assignArguments() {
      this.cartDrawerBody = document.querySelector(selectors.cartDrawerBody);
      this.emptyMessage = document.querySelector(selectors.emptyMessage);
      this.buttonHolder = document.querySelector(selectors.buttonHolder);
      this.itemsHolder = document.querySelector(selectors.itemsHolder);
      this.cartItemsQty = document.querySelector(selectors.cartItemsQty);
      this.itemsWrapper = document.querySelector(selectors.itemsWrapper);
      this.items = document.querySelectorAll(selectors.item);
      this.cartTotal = document.querySelector(selectors.cartTotal);
      this.cartMessage = document.querySelectorAll(selectors.cartMessage);
      this.cartOriginalTotal = document.querySelector(selectors.cartOriginalTotal);
      this.cartOriginalTotalPrice = document.querySelector(selectors.cartOriginalTotalPrice);
      this.cartTotalDiscountTemplate = document.querySelector(selectors.cartTotalDiscountsTemplate).innerHTML;
      this.cartErrorHolder = document.querySelector(selectors.cartErrors);
      this.cartCloseErrorMessage = document.querySelector(selectors.cartCloseError);
      this.pairProductsHolder = document.querySelector(selectors.pairProductsHolder);
      this.pairProducts = document.querySelector(selectors.pairProducts);
      this.cartTermsCheckbox = document.querySelector(selectors.cartTermsCheckbox);
      this.cartCheckoutButtonWrapper = document.querySelector(selectors.cartCheckoutButtonWrapper);
      this.cartCheckoutButton = document.querySelector(selectors.cartCheckoutButton);
      this.cartForm = document.querySelector(selectors.cartForm);

      if (this.cartMessage.length > 0) {
        this.cartFreeLimitShipping = Number(this.cartMessage[0].getAttribute(attributes.shippingMessageLimit)) * 100;
        this.subtotal = 0;
      }
    },

    /**
     * Init quantity field functionality
     *
     * @return  {Void}
     */

    initQuantity() {
      this.items = document.querySelectorAll(selectors.item);

      if (this.items.length) {
        this.items.forEach((item) => {
          const quantity = new PaloAlto.QuantityCounter(item, true);

          quantity.init();
          this.customEventsHandle(item);
        });
      }
    },

    /**
     * Custom event who change the cart
     *
     * @return  {Void}
     */

    customEventsHandle(holder) {
      holder.addEventListener(
        'theme:cart:update',
        PaloAlto.debounce((event) => {
          this.updateCart(
            {
              id: event.detail.id,
              quantity: event.detail.quantity,
            },
            holder,
            event.detail.valueIsEmpty,
          );
        }, 250),
      );
    },

    /**
     * Cart events
     *
     * @return  {Void}
     */

    cartEvents() {
      const cartItemRemove = document.querySelectorAll(selectors.cartItemRemove);

      if (cartItemRemove.length) {
        this.totalItems = cartItemRemove.length;
        cartItemRemove.forEach((item) => {
          item.addEventListener('click', (event) => {
            event.preventDefault();

            this.updateCart({
              id: item.getAttribute(attributes.dataId),
              quantity: 0,
            });
          });
        });
      }

      if (this.cartCloseErrorMessage) {
        this.cartCloseErrorMessage.removeEventListener('click', this.closeCartError);
        this.cartCloseErrorMessage.addEventListener('click', this.closeCartError);
      }

      if (this.cartTermsCheckbox) {
        this.cartTermsCheckbox.removeEventListener('change', this.formSubmitHandler);
        this.cartCheckoutButtonWrapper.removeEventListener('click', this.formSubmitHandler);
        this.cartForm.removeEventListener('submit', this.formSubmitHandler);

        this.cartTermsCheckbox.addEventListener('change', this.formSubmitHandler);
        this.cartCheckoutButtonWrapper.addEventListener('click', this.formSubmitHandler);
        this.cartForm.addEventListener('submit', this.formSubmitHandler);
      }
    },

    /**
     * Cart event add product to cart
     *
     * @return  {Void}
     */

    cartAddEvent() {
      document.addEventListener('click', (event) => {
        const clickedElement = event.target;

        if (clickedElement.matches(selectors.buttonAddToCart) || (clickedElement.closest(selectors.buttonAddToCart) && clickedElement)) {
          const button = clickedElement.matches(selectors.buttonAddToCart) ? clickedElement : clickedElement.closest(selectors.buttonAddToCart);
          let formData = '';

          if (button.hasAttribute(selectors.productIDAttribute)) {
            formData = `id=${Number(button.getAttribute(selectors.productIDAttribute))}`;
          } else {
            this.form = clickedElement.closest('form');
            formData = new FormData(this.form);
            formData = new URLSearchParams(formData).toString();
          }

          if (this.form !== null && this.form.querySelector('[type="file"]')) {
            return;
          }

          event.preventDefault();

          if (clickedElement.hasAttribute(attributes.disabled) || clickedElement.parentNode.hasAttribute(attributes.disabled)) {
            return;
          }

          this.addToCart(formData, button);

          // Hook for cart/add.js event
          document.dispatchEvent(
            new CustomEvent('theme:cart:add', {
              bubbles: true,
              detail: {
                selector: clickedElement,
              },
            }),
          );
        }
      });
    },

    /**
     * Get response from the cart
     *
     * @return  {Void}
     */

    getCart() {
      // Render cart drawer if it exists but it's not loaded yet
      if (this.cartDrawer && !this.isCartDrawerLoaded) {
        const alwaysOpen = false;
        this.renderCartDrawer(alwaysOpen);
      }

      fetch(theme.routes.root + 'cart.js')
        .then(this.handleErrors)
        .then((response) => response.json())
        .then((response) => {
          this.newTotalItems = response.items.length;

          this.buildTotalPrice(response);
          this.freeShippingMessageHandle(response.total_price);

          if (this.cartMessage.length > 0) {
            this.subtotal = response.total_price;
            this.updateProgress();
          }

          return fetch(theme.routes.root + 'cart?section_id=api-cart-items');
        })
        .then((response) => response.text())
        .then((response) => {
          const element = document.createElement('div');
          element.innerHTML = response;

          if (element.querySelector(selectors.pairProductsScript)) {
            this.pairWithArray = JSON.parse(element.querySelector(selectors.pairProductsScript).innerText.split('=')[1].replace(';', ''));
          } else {
            this.pairWithArray = undefined;
          }

          this.getPairProducts();
          this.renderPairProducts();
          this.pairProductSkipEvent();

          this.removeLoadingClass();

          this.cartToggleButtons.forEach((button) => {
            button.classList.remove(classes.cartItems);

            if (this.newTotalItems > 0) {
              button.classList.add(classes.cartItems);
            }
          });

          const cleanResponse = element.querySelector(selectors.apiContent).innerHTML;
          this.build(cleanResponse);

          this.updateItemsQuantity();
        })
        .catch((error) => console.log(error));
    },

    /**
     * Add item(s) to the cart and show the added item(s)
     *
     * @param   {String}  data
     * @param   {DOM Element}  button
     *
     * @return  {Void}
     */

    addToCart(data, button = null) {
      if (this.cartDrawerEnabled && button) {
        button.classList.add(classes.loading);
      }

      fetch(theme.routes.root + 'cart/add.js', {
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
      })
        .then((response) => response.json())
        .then((response) => {
          if (button) {
            button.setAttribute(attributes.disabled, attributes.disabled);
          }

          this.addLoadingClass();

          if (response.status) {
            this.addToCartError(response, button);

            this.removeLoadingClass();

            return;
          }

          if (this.cartDrawerEnabled) {
            this.getCart();

            if (button !== null) {
              button.classList.remove(classes.loading);
              button.removeAttribute(attributes.disabled);
              button.classList.add(classes.success);

              if (settings.isQuickViewEnabled && button.closest(selectors.popupContent)) {
                $.magnificPopup.close();
              }

              if (button.closest(selectors.pairProductsHolder)) {
                setTimeout(() => {
                  button.classList.remove(classes.success);
                }, settings.timers.addProductTimeout * 2);
              }
            }
          } else {
            window.location = theme.routes.cart_url;
          }
        })
        .catch((error) => console.log(error));
    },

    /**
     * Update cart
     *
     * @param   {Object}  updateData
     *
     * @return  {Void}
     */

    updateCart(updateData = {}, holder = null, valueIsEmpty = false) {
      let newCount = null;
      let oldCount = null;
      let newItem = null;
      let quantity = updateData.quantity;

      this.addLoadingClass();

      this.items.forEach((item) => {
        item.classList.add(classes.disabled);
        item.querySelector('input').blur();
        item.querySelectorAll('input, button').forEach((el) => {
          el.setAttribute('disabled', true);
        });
      });

      fetch(theme.routes.root + 'cart.js')
        .then(this.handleErrors)
        .then((response) => response.json())
        .then((response) => {
          const matchKeys = (item) => item.key === updateData.id;
          const index = response.items.findIndex(matchKeys);
          oldCount = response.item_count;
          newItem = response.items[index].title;

          const data = {
            line: `${index + 1}`,
            quantity: quantity,
          };

          return fetch(theme.routes.root + 'cart/change.js', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
          });
        })
        .then(this.handleErrors)
        .then((response) => response.json())
        .then((response) => {
          newCount = response.item_count;

          if (valueIsEmpty) {
            quantity = 1;
          }

          if (quantity !== 0) {
            this.cartLimitErrorIsHidden = newCount !== oldCount;

            this.toggleLimitError(newItem);
          }

          // Change the cart total, total items quantity and hide message if missing discounts and the changed product is not deleted
          this.buildTotalPrice(response);
          this.freeShippingMessageHandle(response.total_price);
          this.cartDiscounts = response.total_discount;
          this.updateItemsQuantity(newCount);

          // Build cart again if the quantity of the changed product is 0 or cart discounts are changed
          if (this.cartMessage.length > 0) {
            this.subtotal = response.total_price;
            this.updateProgress();
          }

          this.getCart();
        })
        .catch((error) => console.log(error));
    },

    /**
     * Show/hide limit error
     *
     * @param   {String}  itemTitle
     *
     * @return  {Void}
     */

    toggleLimitError(itemTitle) {
      this.cartErrorHolder.querySelector(selectors.errorMessage).innerText = itemTitle;

      if (this.cartLimitErrorIsHidden) {
        PaloAlto.Slide.up(this.cartErrorHolder, 400);
      } else {
        PaloAlto.Slide.down(this.cartErrorHolder, 400);
      }
    },

    /**
     * Handle errors
     *
     * @param   {Object}  response
     *
     * @return  {Object}
     */

    handleErrors(response) {
      if (!response.ok) {
        return response.json().then(function(json) {
          const e = new PaloAlto.FetchError({
            status: response.statusText,
            headers: response.headers,
            json: json,
          });
          throw e;
        });
      }
      return response;
    },

    /**
     * Add to cart error handle
     *
     * @param   {Object}  data
     * @param   {DOM Element/Null} button
     *
     * @return  {Void}
     */

    addToCartError(data, button) {
      if (this.cartDrawerEnabled && button && button.closest(selectors.cartDrawer) !== null && !button.closest(selectors.cartDrawer)) {
        this.closeCartDrawer();
      }

      let outerSection = button.closest(selectors.outerSection);

      if (!outerSection) {
        outerSection = button.closest(selectors.pairProducts);
      }

      let errorContainer = outerSection.querySelector(selectors.formErrorsContainer);

      if (button !== null) {
        const buttonUpsellHolder = button.closest(selectors.upsellHolder);
        const buttonQuickBuyForm = button.closest(selectors.quickBuyForm);

        if (buttonUpsellHolder && buttonUpsellHolder.querySelector(selectors.formErrorsContainer)) {
          errorContainer = buttonUpsellHolder.querySelector(selectors.formErrorsContainer);
        }

        if (buttonQuickBuyForm && buttonQuickBuyForm.closest(selectors.productMediaContainer)) {
          errorContainer = buttonQuickBuyForm.closest(selectors.productMediaContainer).querySelector(selectors.formErrorsContainer);
        }

        button.classList.remove(classes.loading);
        button.removeAttribute(attributes.disabled);
      }

      if (errorContainer) {
        errorContainer.classList.add(classes.visible);
        errorContainer.innerHTML = `<div class="errors">${data.message}: ${data.description}<button type="button" class="product__errors__close" data-close-error>${theme.icons.closeSmall}</button></div>`;

        if (errorContainer.hasAttribute(attributes.errorContainerQuickBuy)) {
          if (this.errorTimer) { clearTimeout(this.errorTimer); }

          this.errorTimer = setTimeout(() => {
            errorContainer.classList.remove(classes.visible);
            setTimeout(() => {
              errorContainer.innerHTML = '';
            }, 300);
          }, 3000);
        }
      }

      const formErrorClose = document.querySelector(selectors.formCloseError);
      if (formErrorClose) {
        formErrorClose.addEventListener('click', (event) => {
          const clickedElement = event.target;
          if (clickedElement.matches(selectors.formCloseError) || clickedElement.closest(selectors.formCloseError)) {
            event.preventDefault();

            if (this.errorTimer) { clearTimeout(this.errorTimer); }

            errorContainer.classList.remove(classes.visible);
            setTimeout(() => {
              errorContainer.innerHTML = '';
            }, 300);
          }
        });
      }
    },

    /**
     * Render cart and define all elements after cart drawer is open for a first time
     *
     * @return  {Void}
     */
    renderCartDrawer(alwaysOpen = true) {
      const cartDrawerTemplate = document.querySelector(selectors.cartDrawerTemplate);

      if (!cartDrawerTemplate) { return; }

      // Append cart items HTML to the cart drawer container
      this.cartDrawer.innerHTML = cartDrawerTemplate.innerHTML;
      this.assignArguments();

      // Bind cart quantity events
      this.initQuantity();

      // Bind cart events
      this.cartEvents();

      // Init pair products
      if (this.cartDrawer.querySelector(selectors.pairProductsScript)) {
        this.pairWithArray = JSON.parse(this.cartDrawer.querySelector(selectors.pairProductsScript).innerText.split('=')[1].replace(';', ''));
      }

      this.getPairProducts();
      this.renderPairProducts();
      this.pairProductSkipEvent();

      // Init collapsible function for the cart drawer accordions
      PaloAlto.initCollapsible();

      // Bind cart drawer close button event
      this.cartDrawerToggle = this.cartDrawer.querySelector(selectors.cartDrawerToggle);
      this.cartDrawerToggle.addEventListener('click', this.cartDrawerToggleClickEvent);

      this.isCartDrawerLoaded = true;

      // Hook for cart drawer loaded event
      document.dispatchEvent(new CustomEvent('theme:cart:loaded', {bubbles: true}));

      // Open cart drawer after cart items and events are loaded
      if (alwaysOpen) {
        this.openCartDrawer();
      }
    },

    /**
     * Open cart dropdown and add class on body
     *
     * @return  {Void}
     */

    openCartDrawer() {
      if (this.isCartDrawerOpen) { return; }

      if (!this.isCartDrawerLoaded) {
        this.renderCartDrawer();
        return;
      }

      // Hook for cart drawer open event
      document.dispatchEvent(new CustomEvent('theme:cart:open', {bubbles: true}));
      document.dispatchEvent(new CustomEvent('theme:scroll:lock', {bubbles: true, detail: this.cartDrawer}));
      document.dispatchEvent(new CustomEvent('theme:scroll:lock', {bubbles: true, detail: this.cartDrawerBody}));

      document.body.classList.add(classes.cartDrawerOpen);
      this.cartDrawer.classList.add(classes.open);

      this.cartToggleButtons.forEach((button) => {
        button.setAttribute(attributes.ariaExpanded, true);
      });

      slate.a11y.trapFocus({
        container: this.cartDrawer,
      });

      // Observe Additional Checkout Buttons
      this.observeAdditionalCheckoutButtons();
      this.isCartDrawerOpen = true;
    },

    /**
     * Close cart dropdown and remove class on body
     *
     * @return  {Void}
     */

    closeCartDrawer() {
      if (!this.isCartDrawerOpen) { return; }

      // Hook for cart drawer close event
      document.dispatchEvent(new CustomEvent('theme:cart:close', {bubbles: true}));

      PaloAlto.Slide.up(this.cartErrorHolder, 400);

      slate.a11y.removeTrapFocus();

      this.cartToggleButtons.forEach((button) => {
        button.setAttribute(attributes.ariaExpanded, false);
      });

      const upsellButton = document.querySelector(`[${attributes.upsellButton}].${classes.success}`);

      if (upsellButton) {
        setTimeout(() => {
          upsellButton.classList.remove(classes.success);
        }, 2000);
      }

      document.body.classList.remove(classes.cartDrawerOpen);
      this.cartDrawer.classList.remove(classes.open);

      // Enable page scroll right after the closing animation ends
      const timeout = 400;
      document.dispatchEvent(new CustomEvent('theme:scroll:unlock', {bubbles: true, detail: timeout }));

      this.isCartDrawerOpen = false;
    },

    /**
     * Toggle cart dropdown
     *
     * @return  {Void}
     */

    toggleCartDrawer() {
      if (this.isCartDrawerOpen) {
        this.closeCartDrawer();
      } else {
        this.openCartDrawer();
      }
    },

    /**
     * Cart drawer toggle events
     *
     * @return  {Void}
     */

    cartDrawerToggleEvents() {
      if (!this.cartDrawer) { return; }

      // Close cart drawer on ESC key pressed
      this.cartDrawer.addEventListener('keyup', (e) => {
        if (e.which === slate.utils.keyboardKeys.ESCAPE) {
          this.closeCartDrawer();
        }
      });

      // Define cart drawer toggle button click event
      this.cartDrawerToggleClickEvent = (e) => {
        e.preventDefault();
        const button = e.target;

        if (button.getAttribute(attributes.ariaExpanded) === 'false') {
          slate.a11y.state.trigger = button;
        }

        this.toggleCartDrawer();
      };

      // Define cart drawer close event
      this.cartDrawerCloseEvent = (e) => {
        const isCartDrawerToggle = e.target.matches(selectors.cartDrawerToggle);
        const isCartDrawerChild = document.querySelector(selectors.cartDrawer).contains(e.target);

        if (!isCartDrawerToggle && !isCartDrawerChild) {
          this.closeCartDrawer();
        }
      };

      // Bind cart drawer toggle buttons click event
      this.cartToggleButtons.forEach((button) => {
        button.addEventListener('click', this.cartDrawerToggleClickEvent);
      });

      // Close drawers on click outside
      document.addEventListener('click', this.cartDrawerCloseEvent);
    },

    /**
     * Toggle classes on different containers and messages
     *
     * @return  {Void}
     */

    toggleClassesOnContainers() {
      const that = this;

      this.emptyMessage.classList.toggle(classes.hidden, that.hasItemsInCart());
      this.buttonHolder.classList.toggle(classes.hidden, !that.hasItemsInCart());
      this.itemsHolder.classList.toggle(classes.hidden, !that.hasItemsInCart());
      this.cartItemsQty.classList.toggle(classes.hidden, !that.hasItemsInCart());
    },

    /**
     * Build cart depends on results
     *
     * @param   {Object}  data
     *
     * @return  {Void}
     */

    build(data) {
      if (this.totalItems !== this.newTotalItems) {
        this.totalItems = this.newTotalItems;

        this.toggleClassesOnContainers();
      }

      this.itemsHolder.innerHTML = data;

      this.cartEvents();
      this.initQuantity();

      if (this.cartDrawer) {
        this.openCartDrawer();
      }
    },

    /**
     * Check for items in the cart
     *
     * @return  {Void}
     */

    hasItemsInCart() {
      return this.totalItems > 0;
    },

    /**
     * Build total cart total price
     *
     * @param   {Object}  data
     *
     * @return  {Void}
     */

    buildTotalPrice(data) {
      const cartDiscountsHolder = document.querySelector(selectors.cartDiscountsHolder);

      if (data.original_total_price > data.total_price && data.cart_level_discount_applications.length > 0) {
        this.cartOriginalTotal.classList.remove(classes.hidden);
        this.cartOriginalTotalPrice.innerHTML = data.original_total_price === 0 ? window.theme.strings.free : slate.Currency.formatMoney(data.original_total_price, theme.moneyFormat);
      } else {
        this.cartOriginalTotal.classList.add(classes.hidden);
      }

      this.cartTotal.innerHTML = data.total_price === 0 ? window.theme.strings.free : slate.Currency.formatMoney(data.total_price, theme.moneyFormat);

      if (data.cart_level_discount_applications.length > 0) {
        const discountsMarkup = this.buildCartTotalDiscounts(data.cart_level_discount_applications);

        cartDiscountsHolder.classList.remove(classes.hidden);
        cartDiscountsHolder.innerHTML = discountsMarkup;
      } else {
        cartDiscountsHolder.classList.add(classes.hidden);
      }
    },

    /**
     * Build cart total discounts
     *
     * @param   {Array}  discounts
     *
     * @return  {String}
     */

    buildCartTotalDiscounts(discounts) {
      let discountMarkup = '';

      discounts.forEach((discount) => {
        discountMarkup += Sqrl.render(this.cartTotalDiscountTemplate, {
          discountTitle: discount.title,
          discountTotalAllocatedAmount: slate.Currency.formatMoney(discount.total_allocated_amount, theme.moneyFormat),
        });
      });

      return discountMarkup;
    },

    /**
     * Show/hide free shipping message
     *
     * @param   {Number}  total
     *
     * @return  {Void}
     */

    freeShippingMessageHandle(total) {
      if (this.cartMessage.length > 0) {
        document.querySelectorAll(selectors.cartMessage).forEach((message) => {
          const hasFreeShipping = message.hasAttribute(attributes.cartMessageValue) && message.getAttribute(attributes.cartMessageValue) === 'true' && total !== 0;
          const cartMessageDefault = message.querySelector(selectors.cartMessageDefault);

          message.classList.toggle(classes.success, total >= this.cartFreeLimitShipping && hasFreeShipping);
          message.classList.toggle(classes.isHidden, total === 0);
          cartMessageDefault.classList.toggle(classes.isHidden, total >= this.cartFreeLimitShipping);
        });
      }
    },

    /**
     * Update progress when update cart
     *
     * @return  {Void}
     */

    updateProgress() {
      const newPercentValue = (this.subtotal / this.cartFreeLimitShipping) * 100;
      const leftToSpend = slate.Currency.formatMoney(this.cartFreeLimitShipping - this.subtotal, theme.moneyFormat);

      if (this.cartMessage.length > 0) {
        document.querySelectorAll(selectors.cartMessage).forEach((message) => {
          const cartMessageProgress = message.querySelector(selectors.cartProgress);
          const leftToSpendMessage = message.querySelector(selectors.leftToSpend);

          if (leftToSpendMessage) {
            leftToSpendMessage.innerHTML = leftToSpend.replace('.00', '');
          }

          if (cartMessageProgress) {
            cartMessageProgress.classList.toggle(classes.isHidden, (this.subtotal / this.cartFreeLimitShipping) >= 1);
            cartMessageProgress.setAttribute(attributes.value, newPercentValue);
          }
        });
      }
    },

    /**
     * Render pair with products
     */
    renderPairProducts() {
      if (this.pairProductsHolder === null) {
        return;
      }

      if (this.pairWithArray === undefined || this.pairWithArray.length <= 0) {
        this.pairProductsHolder.classList.add(classes.hidden);

        return;
      }

      new PaloAlto.PairWithProduct(this.pairWithArray[0]);

      document.addEventListener('theme:upsell:product-error', () => {
        this.checkPairProductIsSoldOut();
      });

      this.pairProductsHolder.classList.remove(classes.hidden);
    },

    /**
     * Update pairWithArray only with uniq and available handles
     */
    getPairProducts() {
      if (this.pairWithArray !== undefined && this.sessionStorage !== undefined && this.sessionStorage.getItem('pair_products') !== null) {
        this.pairWithArray = this.pairWithArray.filter((handle) => {
          return this.sessionStorage.getItem('pair_products').indexOf(`,${handle},`) === -1;
        });
      }
    },

    updateItemsQuantity(itemsQty) {
      let allItemsQty = 0;
      let oneItemText = theme.strings.cart_items_one;
      let manyItemsText = theme.strings.cart_items_many;
      oneItemText = oneItemText.split('}} ')[1];
      manyItemsText = manyItemsText.split('}} ')[1];

      if (this.cartItemsQty) {
        if (itemsQty) {
          this.cartItemsQty.textContent = itemsQty === 1 ? `${itemsQty} ${oneItemText}` : `${itemsQty} ${manyItemsText}`;
        } else {
          document.querySelectorAll(selectors.cartItemQty).forEach(element => {
            allItemsQty += Number(element.value);
          });

          this.cartItemsQty.textContent = allItemsQty === 1 ? `${allItemsQty} ${oneItemText}` : `${allItemsQty} ${manyItemsText}`;
        }
      }
    },

    /**
     * Skip pair product
     */
    pairProductSkipEvent() {
      if (this.pairProductsHolder === null) {
        return;
      }

      this.pairProductsHolder.addEventListener('click', (event) => {
        const target = event.target;

        if (target.matches(selectors.buttonSkipPairProduct) || target.closest(selectors.buttonSkipPairProduct)) {
          event.preventDefault();

          // Add to session storage
          if (this.sessionStorage !== undefined && this.pairWithArray.length) {
            this.sessionStorage.setItem(
              'pair_products',
              this.sessionStorage.getItem('pair_products') !== null ? `${this.sessionStorage.getItem('pair_products')},${this.pairWithArray[0]},` : `,${this.pairWithArray[0]},`,
            );
          }

          this.getPairProducts();

          if (this.pairWithArray.length === 0) {
            this.pairProductsHolder.classList.add(classes.hidden);
          } else {
            new PaloAlto.PairWithProduct(this.pairWithArray[0]);
          }
        }
      });
    },

    /**
     * Check pair product is sold out
     */
    checkPairProductIsSoldOut() {
      if (this.sessionStorage !== undefined && this.pairWithArray.length) {
        this.sessionStorage.setItem(
          'pair_products',
          this.sessionStorage.getItem('pair_products') !== null ? `${this.sessionStorage.getItem('pair_products')},${this.pairWithArray[0]},` : `,${this.pairWithArray[0]},`,
        );

        this.getPairProducts();

        if (this.pairWithArray.length === 0) {
          this.pairProductsHolder.classList.add(classes.hidden);
        } else {
          this.renderPairProducts();
        }
      }
    },

    observeAdditionalCheckoutButtons() {
      // identify an element to observe
      const additionalCheckoutButtons = this.cartDrawer.querySelector(selectors.additionalCheckoutButtons);
      if (additionalCheckoutButtons) {
        // create a new instance of `MutationObserver` named `observer`,
        // passing it a callback function
        const observer = new MutationObserver(() => {
          slate.a11y.removeTrapFocus();
          slate.a11y.trapFocus({
            container: this.cartDrawer,
            elementToFocus: this.cartDrawer.querySelector('a:first-child, input:first-child'),
          });
          observer.disconnect();
        });

        // call `observe()` on that MutationObserver instance,
        // passing it the element to observe, and the options object
        observer.observe(additionalCheckoutButtons, {subtree: true, childList: true});
      }
    },

    formSubmitHandler() {
      const termsAccepted = document.querySelector(selectors.cartTermsCheckbox).checked;
      const termsError = document.querySelector(selectors.termsErrorMessage);

      // Disable form submit if terms and conditions are not accepted
      if (!termsAccepted) {
        if (document.querySelector(selectors.termsErrorMessage).length > 0) { return; }

        termsError.innerText = theme.strings.cart_acceptance_error;
        this.cartCheckoutButton.setAttribute(attributes.disabled, true);
        PaloAlto.Slide.down(termsError, 400);
      } else {
        PaloAlto.Slide.up(termsError, 400);
        this.cartCheckoutButton.removeAttribute(attributes.disabled);
      }
    },

    addLoadingClass() {
      if (this.cartDrawer) {
        this.cartDrawer.classList.add(classes.loading);
      } else if (this.itemsWrapper) {
        this.itemsWrapper.classList.add(classes.loading);
      }
    },

    removeLoadingClass() {
      if (this.cartDrawer) {
        this.cartDrawer.classList.remove(classes.loading);
      } else if (this.itemsWrapper) {
        this.itemsWrapper.classList.remove(classes.loading);
      }
    },

    destroy() {
      if (this.cartDrawerToggle) {
        this.cartDrawerToggle.removeEventListener('click', this.cartDrawerToggleClickEvent);
      }

      this.cartToggleButtons.forEach((button) => {
        button.removeEventListener('click', this.cartDrawerToggleClickEvent);
      });

      // Close drawers on click outside
      document.removeEventListener('click', this.cartDrawerCloseEvent);
    },
  });

  return CartDrawer;
})();

PaloAlto.initCollapsible = function() {
  var selectors = {
    collapsibleTrigger: '[data-collapsible-trigger]',
    collapsibleTriggerMobile: '[data-collapsible-trigger-mobile]',
    collapsibleContent: '[data-collapsible-content]',
    collapsibleContentMobile: '[data-collapsible-content-mobile]',
  };

  var classes = {
    isExpanded: 'is-expanded',
  };

  var isTransitioning = false;
  var resetHeight = 0;

  var collapsibleToggleEvent = function(e) {
    e.preventDefault();
		// Do nothing if any different than ESC key pressed
    if (e.keyCode && e.keyCode !== slate.utils.keyboardKeys.ESCAPE) { return; }

		// Do nothing if transitioning
    if (isTransitioning) { return; }

    var isMobile = window.innerWidth < theme.sizes.small;
    var trigger = $(this);
    var triggerMobile = $(this).is(selectors.collapsibleTriggerMobile);
    var dropdownId = $(this).attr('aria-controls');
    var dropdown = $('#' + dropdownId);
    var dropdownHeight = $(dropdown).find(selectors.collapsibleContent).eq(0)
.outerHeight() || $(dropdown).find(selectors.collapsibleContentMobile).eq(0)
.outerHeight();
    var isExpanded = $(trigger).hasClass(classes.isExpanded);

    if (triggerMobile && !isMobile) { return; }

    if (!isExpanded && e.keyCode === slate.utils.keyboardKeys.ESCAPE) { return; }

    isTransitioning = true;

    if (isExpanded) {
      setTimeout(function() {
        dropdownHeight = 0;
        setDropdownHeight(dropdown, dropdownHeight, isExpanded);
      }, 0);
    }

    $(trigger)
      .attr('aria-expanded', !isExpanded)
      .toggleClass(classes.isExpanded, !isExpanded);

    setDropdownHeight(dropdown, dropdownHeight, isExpanded);
  };

  function setDropdownHeight(dropdown, dropdownHeight, isExpanded) {
    $(dropdown)
      .prepareTransition()
      .css('height', dropdownHeight)
      .attr('aria-hidden', isExpanded)
      .toggleClass(classes.isExpanded, !isExpanded);

    if (resetHeight) { clearTimeout(resetHeight); }

    if (dropdownHeight == 0) {
      resetHeight = setTimeout(function() {
        $(dropdown).css('height', '');
      }, 500);
    }

    if (!isExpanded) {
      setTimeout(function() {
        $(dropdown).css('height', 'auto');
        isTransitioning = false;
      }, 500);
    } else {
      isTransitioning = false;
    }
  }

  $(selectors.collapsibleTrigger)
    .off('click keyup')
    .on('click keyup', collapsibleToggleEvent);

  $(selectors.collapsibleTriggerMobile)
    .off('click keyup')
    .on('click keyup', collapsibleToggleEvent);
};

PaloAlto.flickitySmoothScrolling = function(slider) {
  // iOS smooth scrolling fix
  const flkty = Flickity.data(slider);

  if (!flkty) { return; }

  flkty.on('dragStart', (event, pointer) => {
    document.ontouchmove = function(e) {
      e.preventDefault();
    };
  });

  flkty.on('dragEnd', (event, pointer) => {
    document.ontouchmove = function(e) {
      return true;
    };
  });
};

let screenOrientation = getScreenOrientation();

function readHeights() {
  const h = {};
  h.windowHeight = window.innerHeight;
  h.footerHeight = getHeight('[data-section-type*="footer"]');
  h.headerHeight = getHeight('[data-header-height]');
  h.collectionStickyBarHeight = getHeight('[data-collection-sticky-bar]');
  return h;
}

function setVarsOnResize() {
  document.addEventListener('theme:resize', resizeVars);
  setVars();
}

function setVars() {
  const {windowHeight, headerHeight, footerHeight, collectionStickyBarHeight} = readHeights();
  document.documentElement.style.setProperty('--full-height', `${windowHeight}px`);
  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

  document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
  document.documentElement.style.setProperty('--content-full', `${windowHeight - headerHeight}px`);
  document.documentElement.style.setProperty('--content-min', `${windowHeight - headerHeight - footerHeight}px`);

  document.documentElement.style.setProperty('--collection-sticky-bar-height', `${collectionStickyBarHeight}px`);
}

function resizeVars() {
  // restrict the heights that are changed on resize to avoid iOS jump when URL bar is shown and hidden
  const {windowHeight, headerHeight, footerHeight, collectionStickyBarHeight} = readHeights();
  const currentScreenOrientation = getScreenOrientation();

  if (currentScreenOrientation !== screenOrientation) {
    // Only update the heights on screen orientation change
    document.documentElement.style.setProperty('--full-height', `${windowHeight}px`);

    // Update the screen orientation state
    screenOrientation = currentScreenOrientation;
  }

  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

  document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
  document.documentElement.style.setProperty('--content-full', `${windowHeight - headerHeight}px`);
  document.documentElement.style.setProperty('--content-min', `${windowHeight - headerHeight - footerHeight}px`);

  document.documentElement.style.setProperty('--collection-sticky-bar-height', `${collectionStickyBarHeight}px`);
}

function getHeight(selector) {
  const el = document.querySelector(selector);
  if (el) {
    return el.clientHeight;
  } else {
    return 0;
  }
}

function getScreenOrientation() {
  if (window.matchMedia('(orientation: portrait)').matches) {
    return 'portrait';
  }

  if (window.matchMedia('(orientation: landscape)').matches) {
    return 'landscape';
  }
}

PaloAlto.initFocusVisibility = function() {
  const classes = {
    noOutline: 'no-outline',
  };

  document.addEventListener('keyup', (event) => {
    if (event.keyCode === slate.utils.keyboardKeys.TAB) {
      document.body.classList.remove(classes.noOutline);
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.add(classes.noOutline);
  });
};

PaloAlto.initTransparentHeader = function() {
  const selectors = {
    body: 'body',
    main: '[data-main]',
    header: '[data-site-header]',
    shopifySection: '.shopify-section',
    preventTransparentHeader: '[data-prevent-transparent-header]',
  };
  const classes = {
    transparentHeader: 'transparent-header',
    siteHeaderTransparent: 'site-header--transparent',
    hasTransparentHeader: 'has-transparent-header',
  };

  const attributes = {
    dataTransparent: 'data-transparent',
  };

  // Determine what is the first
  const body = document.querySelector(selectors.body);
  const header = body.querySelector(selectors.header);
  const headerTransparent = header.getAttribute(attributes.dataTransparent) === 'true';
  const firstSection = body.querySelector(selectors.main).children[0];

  if (!firstSection) { return; }

  const preventTransparentHeader = firstSection.querySelector(`${selectors.preventTransparentHeader}:first-of-type`);
  isHeaderTransparent = headerTransparent && firstSection.classList.contains(classes.transparentHeader) && !preventTransparentHeader;

  // Set transparent header class
  if (isHeaderTransparent) {
    header.classList.add(classes.siteHeaderTransparent);
    body.classList.add(classes.hasTransparentHeader);
  } else {
    header.classList.remove(classes.siteHeaderTransparent);
    body.classList.remove(classes.hasTransparentHeader);
  }
};

PaloAlto.initSections = function() {
  var sections = new PaloAlto.Sections();

  sections.register('header', PaloAlto.Header);
  sections.register('footer', PaloAlto.Footer);
  sections.register('announcement-bar', PaloAlto.AnnouncementBar);
  sections.register('article', PaloAlto.Article);
  sections.register('product-template', PaloAlto.Product);
  sections.register('related-products', PaloAlto.RelatedProducts);
  sections.register('store-availability', PaloAlto.StoreAvailability);
  sections.register('collection-template', PaloAlto.CollectionTemplate);
  sections.register('list-collections', PaloAlto.ListCollections);
  sections.register('featured-collection', PaloAlto.FeaturedCollection);
  sections.register('products-list', PaloAlto.ProductsList);
  sections.register('custom-content', PaloAlto.CustomContent);
  sections.register('tab-collections', PaloAlto.TabCollections);
  sections.register('featured-product', PaloAlto.Product);
  sections.register('slider', PaloAlto.Slider);
  sections.register('image-with-text', PaloAlto.RichText);
  sections.register('image-accordions', PaloAlto.ImageAccordions);
  sections.register('shoppable-blog', PaloAlto.ShoppableBlog);
  sections.register('blog-posts', PaloAlto.BlogPosts);
  sections.register('featured-video', PaloAlto.FeaturedVideo);
  sections.register('logo-list', PaloAlto.LogoList);
  sections.register('icons-row', PaloAlto.IconsRow);
  sections.register('locations', PaloAlto.Locations);
  sections.register('testimonials', PaloAlto.Testimonials);
  sections.register('accordions', PaloAlto.Accordions);
  sections.register('press', PaloAlto.Press);
  sections.register('overlapping-images', PaloAlto.OverlappingImages);
  sections.register('popups', PaloAlto.Popups);
  sections.register('look', PaloAlto.Look);
  sections.register('mosaic', PaloAlto.Mosaic);
  sections.register('columns-with-image', PaloAlto.ColumnsWithImage);
  sections.register('about-page', PaloAlto.AboutPage);
  sections.register('password-template', PaloAlto.PasswordTemplate);
  sections.register('search-template', PaloAlto.SearchTemplate);
  sections.register('subcollections', PaloAlto.Subcollections);
  sections.register('newsletter', PaloAlto.NewsletterSection);
  sections.register('marquee', PaloAlto.AnnouncementBar);

  // Recheck sticky header settings if section is set to hidden
  // Refresh AOS
  $(document).on('shopify:section:load shopify:section:reorder shopify:section:unload', function() {
    setTimeout(() => {
      PaloAlto.initTransparentHeader();
      PaloAlto.setMainSpacing();
      AOS.refreshHard();
    }, 300);
  });
};

PaloAlto.initSwatches = {
  makeSwatch: function(container) {
    this.swatches = [];
    const els = container.querySelectorAll('[data-swatch]');
    els.forEach((el) => {
      this.swatches.push(new PaloAlto.Swatches.Swatch(el));
    });
  },

  makeGridSwatch: function(container) {
    const gridSwatchWrappers = container.querySelectorAll('[data-grid-swatches]');
    gridSwatchWrappers.forEach((wrap) => {
      new PaloAlto.Swatches.GridSwatch(wrap);
    });
  },
};

function loadingAnimation() {
  document.documentElement.classList.remove('is-loading');
}

function lazyImageBackgrounds() {
  document.addEventListener('lazyloaded', (e) => {
    const lazyImage = e.target.parentNode;
    if (lazyImage.classList.contains('lazy-image')) {
      // Wait for the fade in images animation to complete
      setTimeout(() => {
        lazyImage.style.backgroundImage = 'none';
      }, 500);
    }
  });
}

PaloAlto.Drawer = {
  attributes: {
    ariaExpanded: 'aria-expanded',
  },
  selectors: {
    drawer: '[data-drawer]',
    drawerToggle: '[data-drawer-toggle]',
    scroller: '[data-scroll]',
  },
  classes: {
    open: 'is-open',
    drawerOpen: 'js-drawer-open',
  },
  init: function() {
    this.drawers = document.querySelectorAll(this.selectors.drawer);
    this.drawerToggleButtons = document.querySelectorAll(this.selectors.drawerToggle);

    this.drawerToggleEvent = throttle((e) => {
      this.toggle(e);
    }, 150);

    this.keyPressCloseEvent = throttle((e) => {
      if (e.keyCode === slate.utils.keyboardKeys.ESCAPE) {
        this.close(e);
      }
    }, 150);

    // Define drawer close event
    this.drawerCloseEvent = (e) => {
      const activeDrawer = document.querySelector(`${this.selectors.drawer}.${this.classes.open}`);
      const isDrawerToggle = e.target.matches(this.selectors.drawerToggle);
      const isDrawerChild = activeDrawer ? activeDrawer.contains(e.target) : false;

      if (!isDrawerToggle && !isDrawerChild) {
        this.close(e);
      }
    };

    // Toggle event for each drawer button
    this.drawerToggleButtons.forEach((button) => {
      button.addEventListener('click', this.drawerToggleEvent);
    });

    // Close drawers if escape key pressed
    this.drawers.forEach((drawer) => {
      drawer.addEventListener('keyup', this.keyPressCloseEvent);
    });

    // Close drawers on click outside
    document.addEventListener('click', this.drawerCloseEvent);
  },
  toggle: function(e) {
    e.preventDefault();
    const drawer = document.querySelector(`#${e.target.getAttribute('aria-controls')}`);
    if (!drawer) { return; }

    const isDrawerOpen = drawer.classList.contains(this.classes.open);

    if (isDrawerOpen) {
      this.close();
    } else {
      this.open(e);
    }
  },
  open: function(e) {
    const drawerOpenButton = e.target;
    const drawer = document.querySelector(`#${e.target.getAttribute('aria-controls')}`);

    if (!drawer) { return; }
    const drawerScroller = drawer.querySelector(this.selectors.scroller) || drawer;
    const drawerCloseButton = drawer.querySelector(this.selectors.drawerToggle);

    // Disable page scroll right away
    document.dispatchEvent(new CustomEvent('theme:scroll:lock', {bubbles: true, detail: drawerScroller }));
    document.dispatchEvent(new CustomEvent('theme:drawer:open'), {bubbles: true});
    document.body.classList.add(this.classes.drawerOpen);

    drawer.classList.add(this.classes.open);
    drawerOpenButton.setAttribute(this.attributes.ariaExpanded, true);

    setTimeout(() => {
      slate.a11y.state.trigger = drawerOpenButton;
      slate.a11y.trapFocus({
        container: drawer,
        elementToFocus: drawerCloseButton,
      });
    });
  },
  close: function() {
    if (!document.body.classList.contains(this.classes.drawerOpen)) { return; }

    const drawer = document.querySelector(`${this.selectors.drawer}.${this.classes.open}`);

    this.drawerToggleButtons.forEach((button) => {
      button.setAttribute(this.attributes.ariaExpanded, false);
    });

    // Enable page scroll right after the closing animation ends
    const timeout = 400;
    document.dispatchEvent(new CustomEvent('theme:scroll:unlock', {bubbles: true, detail: timeout}));

    slate.a11y.removeTrapFocus({
      container: drawer,
    });

    drawer.classList.remove(this.classes.open);
    document.body.classList.remove(this.classes.drawerOpen);
    document.dispatchEvent(new CustomEvent('theme:drawer:close'), {bubbles: true});
  },
  destroy: function() {
    // Close drawer
    this.close();

    // Unbind all event listeners for drawers
    this.drawerToggleButtons.forEach((button) => {
      button.removeEventListener('click', this.drawerToggleEvent);
    });
    this.drawers.forEach((drawer) => {
      drawer.removeEventListener('keyup', this.keyPressCloseEvent);
    });
    document.removeEventListener('click', this.drawerCloseEvent);
  },
};

PaloAlto.Newsletter = (function() {
  const selectors = {
    popup: '[data-popup]',
  };

  const classes = {
    success: 'has-success',
    error: 'has-error',
  };

  const attributes = {
    storageNewsletterFormId: 'newsletter_form_id',
  };

  function Newsletter(newsletter) {
    this.newsletter = newsletter;
    this.sessionStorage = window.sessionStorage;
    this.popup = this.newsletter.closest(selectors.popup);
    this.stopSubmit = true;
    this.isChallengePage = false;
    this.formID = null;
    this.formIdSuccess = null;

    this.checkForChallengePage();

    this.newsletterSubmit = (e) => this.newsletterSubmitEvent(e);

    if (!this.isChallengePage) {
      this.init();
    }
  }

  Newsletter.prototype = $.extend({}, Newsletter.prototype, {
    init() {
      this.newsletter.addEventListener('submit', this.newsletterSubmit);

      this.showMessage();
    },

    newsletterSubmitEvent(e) {
      if (this.stopSubmit) {
        e.preventDefault();

        this.removeStorage();
        this.writeStorage();
        this.stopSubmit = false;
        this.newsletter.submit();
      }
    },

    checkForChallengePage() {
      this.isChallengePage = window.location.pathname === theme.routes.root + 'challenge';
    },

    writeStorage() {
      if (this.sessionStorage !== undefined) {
        this.sessionStorage.setItem(attributes.storageNewsletterFormId, this.newsletter.id);
      }
    },

    readStorage() {
      this.formID = this.sessionStorage.getItem(attributes.storageNewsletterFormId);
    },

    removeStorage() {
      this.sessionStorage.removeItem(attributes.storageNewsletterFormId);
    },

    showMessage() {
      this.readStorage();

      if (this.newsletter.id === this.formID) {
        const newsletter = document.getElementById(this.formID);
        const submissionSuccess = window.location.search.indexOf('?customer_posted=true') !== -1;
        const submissionFailure = window.location.search.indexOf('accepts_marketing') !== -1;

        if (submissionSuccess) {
          newsletter.classList.remove(classes.error);
          newsletter.classList.add(classes.success);

          if (this.popup) {
            this.cookie = new PopupCookie(this.popup.dataset.cookieName, 'user_has_closed');
            this.cookie.write();
          }
        } else if (submissionFailure) {
          newsletter.classList.remove(classes.success);
          newsletter.classList.add(classes.error);
        }

        if (submissionSuccess || submissionFailure) {
          this.scrollToForm(newsletter);
        }
      }
    },

    /**
     * Scroll to the last submitted newsletter form
     */
    scrollToForm(newsletter) {
      const rect = newsletter.getBoundingClientRect();
      const isVisible = PaloAlto.isInViewport(newsletter);

      if (!isVisible) {
        setTimeout(() => {
          window.scroll({
            top: rect.top,
            left: 0,
            behavior: 'smooth',
          });
        }, 400);
      }
    },

    /**
     * Event callback for Theme Editor `section:unload` event
     */
    onUnload() {
      this.newsletter.removeEventListener('submit', this.newsletterSubmit);
    },
  });

  return Newsletter;
})();

function PopupCookie(name, value) {
  this.configuration = {
    expires: null, // session cookie
    path: '/',
    domain: window.location.hostname,
  };
  this.name = name;
  this.value = value;
}

PopupCookie.prototype = $.extend({}, PopupCookie.prototype, {
  write() {
    const hasCookie = document.cookie.indexOf('; ') !== -1 && !document.cookie.split('; ').find((row) => row.startsWith(this.name));
    if (hasCookie || document.cookie.indexOf('; ') === -1) {
      document.cookie = `${this.name}=${this.value}; expires=${this.configuration.expires}; path=${this.configuration.path}; domain=${this.configuration.domain}`;
    }
  },

  read() {
    if (document.cookie.indexOf('; ') !== -1 && document.cookie.split('; ').find((row) => row.startsWith(this.name))) {
      const returnCookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith(this.name))
        .split('=')[1];

      return returnCookie;
    } else { return false; }
  },

  destroy() {
    if (document.cookie.split('; ').find((row) => row.startsWith(this.name))) {
      document.cookie = `${this.name}=null; expires=${this.configuration.expires}; path=${this.configuration.path}; domain=${this.configuration.domain}`;
    }
  },
});
PaloAlto.QuantityCounter = (function() {
  const selectors = {
    quantityHolder: '[data-quantity-holder]',
    quantityField: '[data-quantity-field]',
    quantityButton: '[data-quantity-button]',
    quantityMinusButton: '[data-quantity-minus]',
    quantityPlusButton: '[data-quantity-plus]',
  };

  const classes = {
    quantityReadOnly: 'read-only',
    isDisabled: 'is-disabled',
  };

  function QuantityCounter(holder, inCart = false) {
    this.holder = holder;
    this.quantityUpdateCart = inCart;
  }

  QuantityCounter.prototype = $.extend({}, QuantityCounter.prototype, {

    init() {
      // DOM Elements
      this.quantity = this.holder.querySelector(selectors.quantityHolder);

      if (!this.quantity) {
        return;
      }

      this.field = this.quantity.querySelector(selectors.quantityField);
      this.buttons = this.quantity.querySelectorAll(selectors.quantityButton);
      this.increaseButton = this.quantity.querySelector(selectors.quantityPlusButton);

      // Set value or classes
      this.quantityValue = Number(this.field.value || 0);
      this.cartItemID = this.field.getAttribute('data-id');
      this.maxValue = Number(this.field.getAttribute('max')) > 0 ? Number(this.field.getAttribute('max')) : null;
      this.minValue = Number(this.field.getAttribute('min')) > 0 ? Number(this.field.getAttribute('min')) : 0;
      this.disableIncrease = this.disableIncrease.bind(this);

      // Flags
      this.emptyField = false;

      // Methods
      this.updateQuantity = this.updateQuantity.bind(this);
      this.decrease = this.decrease.bind(this);
      this.increase = this.increase.bind(this);

      this.disableIncrease();

      // Events
      if (!this.quantity.classList.contains(classes.quantityReadOnly)) {
        this.changeValueOnClick();
        this.changeValueOnInput();
      }
    },

    /**
     * Change field value when click on quantity buttons
     *
     * @return  {Void}
     */

    changeValueOnClick() {
      this.buttons.forEach((element) => {
        element.addEventListener('click', (event) => {
          event.preventDefault();
          const clickedElement = event.target;
          const isDescrease = clickedElement.matches(selectors.quantityMinusButton) || clickedElement.closest(selectors.quantityMinusButton);
          const isIncrease = clickedElement.matches(selectors.quantityPlusButton) || clickedElement.closest(selectors.quantityPlusButton);

          if (isDescrease) {
            this.decrease();
          }

          if (isIncrease) {
            this.increase();
          }

          this.updateQuantity();
        });
      });
    },

    /**
     * Change field value when input new value in a field
     *
     * @return  {Void}
     */

    changeValueOnInput() {
      this.field.addEventListener('input', (e) => {
        this.quantityValue = this.field.value;

        if (this.value === '') {
          this.emptyField = true;
        }

        this.updateQuantity();
      });
    },

    /**
     * Update field value
     *
     * @return  {Void}
     */

    updateQuantity() {
      if (this.maxValue < this.quantityValue && this.maxValue !== null) {
        this.quantityValue = this.maxValue;
      }

      if (this.minValue > this.quantityValue) {
        this.quantityValue = this.minValue;
      }

      this.field.value = this.quantityValue;

      this.disableIncrease();

      document.dispatchEvent(new CustomEvent('theme:cart:update'));

      if (this.quantityUpdateCart) {
        this.updateCart();
      }
    },

    /**
     * Decrease value
     *
     * @return  {Void}
     */

    decrease() {
      if (this.quantityValue > this.minValue) {
        this.quantityValue--;

        return;
      }

      this.quantityValue = 0;
    },

    /**
     * Increase value
     *
     * @return  {Void}
     */

    increase() {
      this.quantityValue++;
    },

    /**
     * Disable increase
     *
     * @return  {[type]}  [return description]
     */

    disableIncrease() {
      this.increaseButton.classList.toggle(classes.isDisabled, this.quantityValue >= this.maxValue && this.maxValue !== null);
    },

    updateCart() {
      const event = new CustomEvent('theme:cart:update', {
        bubbles: true,
        detail: {
          id: this.cartItemID,
          quantity: this.quantityValue,
          valueIsEmpty: this.emptyField,
        },
      });

      this.holder.dispatchEvent(event);
    },
  });

  return QuantityCounter;
})();

PaloAlto.QuickViewPopup = {
  init: function(container) {
    var self = this;

    this.$container = $(container);
    this.container = container;
    this.sectionId = $(container).data('section-id');
    this.product = {};
    this.isFlickityDragging = false;
    this.selectors = {
      addToCart: '[data-add-to-cart]',
      deferredMedia: '[data-deferred-media]',
      deferredMediaButton: '[data-deferred-media-button]',
      popout: '[data-popout]',
      product: '[data-product]',
      productForm: '[data-product-form]',
      productMediaSlider: '[data-product-single-media-slider]',
      productMediaThumb: '[data-thumbnail-id]',
      productMediaThumbLink: '.product-single__thumbnail-link',
      productMediaThumbs: '[data-product-single-media-thumbs]',
      productMediaWrapper: '[data-product-single-media-wrapper]',
      productModel: '[data-model]',
      productSingleThumbnailLink: '.product-single__thumbnail-link',
      productJSON: '[data-product-json]',
      buttonQuickView: '[data-button-quick-view]',
      progressBar: '[data-product-slideshow-progress]',
    };

    this.classes = {
      hasMediaActive: 'has-media-active',
      isSelected: 'is-selected',
      isLoading: 'is-loading',
      mediaHidden: 'media--hidden',
      noOutline: 'no-outline',
      quickViewVisible: 'quick-view-visible',
      fill: 'fill',
    };

    this.attributes = {
      mediaId: 'data-media-id',
      sectionId: 'data-section-id',
      thumbId: 'data-thumbnail-id',
      loaded: 'loaded',
      tabindex: 'tabindex',
    };

    this.ids = {
      addToCartFormId: 'AddToCartForm--',
      addToCartId: 'AddToCart--',
    };
    const quickView = $(".column__item__image-wrapper .btn--quick");
    quickView.click(function (e) {
      e.preventDefault();
      console.log("Live")
      slate.a11y.state.trigger = this;

      var productUrl = theme.routes.root + 'products/' + $(this).data('handle') + '?section_id=api-quickview';
      $.magnificPopup.open({
        items: {
          src: productUrl,
        },
        type: 'ajax',
        cache: false,
        removalDelay: 300,
        mainClass: 'popup-quick-view mfp-fade',
        autoFocusLast: false,
        closeMarkup: '<button title="%title%" class="mfp-close">' + theme.icons.close + '</i></button>',
        callbacks: {
          parseAjax: function(mfpResponse) {
            
            var $mfpContent = $(mfpResponse.data).children();
            var $productContainer = $mfpContent.filter(self.selectors.product);

            var sectionId = $productContainer.attr('data-section-id');

            const product = JSON.parse($mfpContent.find(self.selectors.productJSON)[0].innerHTML);
            self.container = $productContainer[0];
            self.$container = $productContainer;
            self.$container.addClass(self.classes.isLoading);
            self.sectionId = sectionId;
            self.product = product;

            return mfpResponse.data = $mfpContent;
          },
          ajaxContentAdded: function() {
            // Ajax content is loaded and appended to DOM
            var formSuffix = self.sectionId + '-' + self.product.handle;

            self.addFormSuffix(self.$container, formSuffix);
            self.initProductSlider();
            self.initMediaSwitch();
            self.initProductVideo();
            self.initProductModel();
            self.initShopifyXrLaunch();
            PaloAlto.initSwatches.makeSwatch(self.$container[0]);

            const popoutElements = self.container.querySelectorAll(self.selectors.popout);
            let popouts = {};

            if (popoutElements.length) {
              popoutElements.forEach((popout, index) => {
                popouts[index] = new PaloAlto.Popout(popout);
              });
            }

            new PaloAlto.ProductAddForm(self.$container.parent()[0]);

            PaloAlto.videoLink();

            slate.a11y.trapFocus({
              container: document.querySelector('.mfp-content'),
              elementToFocus: document.querySelector('.mfp-content .mfp-close'),
            });

            if (Shopify.PaymentButton) {
              Shopify.PaymentButton.init();
            }

            self.$container.removeClass(self.classes.isLoading);
          },
          open: function() {
            document.body.classList.add(self.classes.quickViewVisible);
          },
          afterClose: function() {
            const slider = self.container.querySelector(self.selectors.productMediaSlider);
            const flkty = Flickity.data(slider) || null;
            if (flkty) {
              flkty.pausePlayer();
            }
            slate.a11y.removeTrapFocus();
            document.body.classList.remove(self.classes.quickViewVisible);
          },
        },
      });
    })
    $(this.selectors.buttonQuickView, container).on('click', function(e) {
      e.preventDefault();

      // Set the trigger element before calling trapFocus
      slate.a11y.state.trigger = this;

      var productUrl = theme.routes.root + 'products/' + $(this).data('handle') + '?section_id=api-quickview';
      console.log(productUrl, this)      

      $.magnificPopup.open({
        items: {
          src: productUrl,
        },
        type: 'ajax',
        cache: false,
        removalDelay: 300,
        mainClass: 'popup-quick-view mfp-fade',
        autoFocusLast: false,
        closeMarkup: '<button title="%title%" class="mfp-close">' + theme.icons.close + '</i></button>',
        callbacks: {
          parseAjax: function(mfpResponse) {
            
            var $mfpContent = $(mfpResponse.data).children();
            var $productContainer = $mfpContent.filter(self.selectors.product);

            var sectionId = $productContainer.attr('data-section-id');

            const product = JSON.parse($mfpContent.find(self.selectors.productJSON)[0].innerHTML);
            self.container = $productContainer[0];
            self.$container = $productContainer;
            self.$container.addClass(self.classes.isLoading);
            self.sectionId = sectionId;
            self.product = product;

            return mfpResponse.data = $mfpContent;
          },
          ajaxContentAdded: function() {
            // Ajax content is loaded and appended to DOM
            var formSuffix = self.sectionId + '-' + self.product.handle;

            self.addFormSuffix(self.$container, formSuffix);
            self.initProductSlider();
            self.initMediaSwitch();
            self.initProductVideo();
            self.initProductModel();
            self.initShopifyXrLaunch();
            PaloAlto.initSwatches.makeSwatch(self.$container[0]);

            const popoutElements = self.container.querySelectorAll(self.selectors.popout);
            let popouts = {};

            if (popoutElements.length) {
              popoutElements.forEach((popout, index) => {
                popouts[index] = new PaloAlto.Popout(popout);
              });
            }

            new PaloAlto.ProductAddForm(self.$container.parent()[0]);

            PaloAlto.videoLink();

            slate.a11y.trapFocus({
              container: document.querySelector('.mfp-content'),
              elementToFocus: document.querySelector('.mfp-content .mfp-close'),
            });

            if (Shopify.PaymentButton) {
              Shopify.PaymentButton.init();
            }

            self.$container.removeClass(self.classes.isLoading);
          },
          open: function() {
            document.body.classList.add(self.classes.quickViewVisible);
          },
          afterClose: function() {
            const slider = self.container.querySelector(self.selectors.productMediaSlider);
            const flkty = Flickity.data(slider) || null;
            if (flkty) {
              flkty.pausePlayer();
            }
            slate.a11y.removeTrapFocus();
            document.body.classList.remove(self.classes.quickViewVisible);
          },
        },
      });
    });
  },

  initProductSlider: function() {
    const slider = this.container.querySelector(this.selectors.productMediaSlider);
    const thumbs = this.container.querySelector(this.selectors.productMediaThumbs);
    const media = this.container.querySelectorAll(this.selectors.productMediaWrapper);
    const progressBar = this.container.querySelector(this.selectors.progressBar);
    const autoplaySpeed = 3500;
    let timer = 0;

    if (media.length > 1) {
      this.container.style.setProperty('--autoplay-speed', `${autoplaySpeed}ms`);

      progressBar.classList.add(this.classes.fill);
      timer = setTimeout(() => {
        progressBar.classList.remove(this.classes.fill);
      }, autoplaySpeed);

      const flkty = new Flickity(slider, {
        wrapAround: true,
        pageDots: false,
        prevNextButtons: false,
        adaptiveHeight: false,
        pauseAutoPlayOnHover: false,
        selectedAttraction: 0.2,
        friction: 1,
        autoPlay: autoplaySpeed,
        on: {
          ready: () => {
            slider.setAttribute(this.attributes.tabindex, '-1');
          },
          settle: (event, index) => {
            const currentSlide = flkty.selectedElement;
            const mediaId = currentSlide.getAttribute(this.attributes.mediaId);
            currentSlide.setAttribute(this.attributes.tabindex, '0');
            [...currentSlide.parentNode.children].forEach((el) => {
              if (el === currentSlide) { return; }

              el.setAttribute(this.attributes.tabindex, '-1');
            });
            this.switchMedia(mediaId);
          },
          change: () => {
            if (timer) { clearTimeout(timer); }

            progressBar.classList.remove(this.classes.fill);

            setTimeout(() => {
              progressBar.classList.add(this.classes.fill);
            });

            timer = setTimeout(() => {
              progressBar.classList.remove(this.classes.fill);
            }, autoplaySpeed);
          },
          dragEnd: () => {
            flkty.playPlayer();
          },
        },
      });

      // Toggle flickity draggable functionality based on media play/pause state
      if (media.length) {
        media.forEach((el) => {
          el.addEventListener('theme:media:play', () => {
            flkty.options.draggable = false;
            flkty.updateDraggable();
            el.closest(this.selectors.productMediaSlider).classList.add(this.classes.hasMediaActive);
          });

          el.addEventListener('theme:media:pause', () => {
            flkty.options.draggable = true;
            flkty.updateDraggable();
            el.closest(this.selectors.productMediaSlider).classList.remove(this.classes.hasMediaActive);
          });
        });
      }

      // iOS smooth scrolling fix
      PaloAlto.flickitySmoothScrolling(slider);

      // Check if thumbs exist on Quick View
      if (thumbs) {
        const flktyNav = new Flickity(thumbs, {
          asNavFor: slider,
          contain: true,
          pageDots: false,
          prevNextButtons: false,
          on: {
            ready: () => {
              thumbs.setAttribute(this.attributes.tabindex, '-1');
            },
          },
        });

        // iOS smooth scrolling fix
        PaloAlto.flickitySmoothScrolling(thumbs);

        // Disable link click
        const thumbLinks = this.container.querySelectorAll(this.selectors.productSingleThumbnailLink);
        if (thumbLinks.length) {
          thumbLinks.forEach((el) => {
            el.addEventListener('click', (e) => {
              e.preventDefault();
            });
          });
        }
      }
    }
  },

  handleMediaFocus: function(e) {
    // Do nothing if not ENTER key (13) or TAB key (9)
    if (e.keyCode !== 13 && e.keyCode !== 9) { return; }

    const mediaId = e.currentTarget.getAttribute(this.attributes.thumbId);
    const activeSlide = this.container.querySelector(`[${this.attributes.mediaId}="${mediaId}"]`);
    const slideIndex = parseInt([...activeSlide.parentNode.children].indexOf(activeSlide));
    const slider = this.container.querySelector(this.selectors.productMediaSlider);
    const sliderNav = this.container.querySelector(this.selectors.productMediaThumbs);
    const flkty = Flickity.data(slider) || null;
    const flktyNav = Flickity.data(sliderNav) || null;

    // Go to the related slide media
    if (flkty && flkty.isActive && slideIndex > -1 && e.keyCode === 13) {
      flkty.select(slideIndex);
    }

    // Move thumbs to the selected one
    if (flktyNav && flktyNav.isActive && slideIndex > -1) {
      flktyNav.select(slideIndex);
    }
  },

  switchMedia: function(mediaId) {
    const selectedMedia = this.container.querySelector(`${this.selectors.productMediaWrapper}[${this.attributes.mediaId}="${mediaId}"]`);
    const isFocusEnabled = !document.body.classList.contains(this.classes.noOutline);

    if (isFocusEnabled) { selectedMedia.focus(); }

    selectedMedia.closest(this.selectors.productMediaSlider).classList.remove(this.classes.hasMediaActive);
    selectedMedia.classList.remove(this.classes.mediaHidden);
    selectedMedia.dispatchEvent(new CustomEvent('theme:media:visible'), {bubbles: true});

    // If media is not loaded, trigger poster button click to load it
    const deferredMedia = selectedMedia.querySelector(this.selectors.deferredMedia);
    if (deferredMedia && deferredMedia.getAttribute(this.attributes.loaded) !== 'true') {
      selectedMedia.querySelector(this.selectors.deferredMediaButton).dispatchEvent(new Event('click'));
    }
  },

  initMediaSwitch: function() {
    const productThumbImages = this.container.querySelectorAll(this.selectors.productMediaThumb);
    if (productThumbImages.length) {
      productThumbImages.forEach((el) => {
        el.addEventListener('keyup', this.handleMediaFocus.bind(this));
        el.addEventListener('click', (e) => {
          e.preventDefault();
        });
      });
    }
  },

  initProductVideo: function() {
    this.videos = new PaloAlto.ProductVideo(this.container);
  },

  initProductModel: function() {
    const modelItems = this.container.querySelectorAll(this.selectors.productModel);
    if (modelItems.length) {
      modelItems.forEach((element) => {
        PaloAlto.ProductModel.init(element, this.sectionId);
      });
    }
  },

  initShopifyXrLaunch: function() {
    document.addEventListener('shopify_xr_launch', () => {
      const currentMedia = this.container.querySelector(`${this.selectors.productModel}:not(.${this.classes.mediaHidden})`);
      currentMedia.dispatchEvent(new CustomEvent('xrLaunch'));
    });
  },

  addFormSuffix: function(container, formSuffix) {
    var formId = this.ids.addToCartFormId + formSuffix;
    var addToCartId = this.ids.addToCartId + formSuffix;

    $(this.selectors.productForm, container).attr('id', formId);
    $(this.selectors.addToCart, container).attr('id', addToCartId);
  },
};

window.lastWindowWidth = window.innerWidth;

function dispatchResizeEvent() {
  document.dispatchEvent(
    new CustomEvent('theme:resize', {
      bubbles: true,
    }),
  );

  if (window.lastWindowWidth !== window.innerWidth) {
    document.dispatchEvent(
      new CustomEvent('theme:resize:width', {
        bubbles: true,
      }),
    );

    window.lastWindowWidth = window.innerWidth;
  }
}

function resizeListener() {
  window.addEventListener('resize', PaloAlto.debounce(dispatchResizeEvent, 50));
}

PaloAlto.Sections = function Sections() {
	this.constructors = {};
	this.instances = [];

	$(document)
		.on('shopify:section:load', this._onSectionLoad.bind(this))
		.on('shopify:section:unload', this._onSectionUnload.bind(this))
		.on('shopify:section:select', this._onSelect.bind(this))
		.on('shopify:section:deselect', this._onDeselect.bind(this))
		.on('shopify:block:select', this._onBlockSelect.bind(this))
		.on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

PaloAlto.Sections.prototype = _.assignIn({}, PaloAlto.Sections.prototype, {
	_createInstance: function(container, constructor) {
		var $container = $(container);
		var id = $container.attr('data-section-id');
		var type = $container.attr('data-section-type');

		constructor = constructor || this.constructors[type];

		if (_.isUndefined(constructor)) {
			return;
		}

		var instance = _.assignIn(new constructor(container), {
			id: id,
			type: type,
			container: container
		});

		this.instances.push(instance);
	},

	_onSectionLoad: function(evt) {
		var container = $('[data-section-id]', evt.target)[0];
		if (container) {
			this._createInstance(container);
		}
	},

	_onSectionUnload: function(evt) {
		this.instances = _.filter(this.instances, function(instance) {
			var isEventInstance = (instance.id === evt.detail.sectionId);

			if (isEventInstance) {
				if (_.isFunction(instance.onUnload)) {
					instance.onUnload(evt);
				}
			}

			return !isEventInstance;
		});
	},

	_onSelect: function(evt) {
		// eslint-disable-next-line no-shadow
		var instance = _.find(this.instances, function(instance) {
			return instance.id === evt.detail.sectionId;
		});

		if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)) {
			instance.onSelect(evt);
		}
	},

	_onDeselect: function(evt) {
		// eslint-disable-next-line no-shadow
		var instance = _.find(this.instances, function(instance) {
			return instance.id === evt.detail.sectionId;
		});

		if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)) {
			instance.onDeselect(evt);
		}
	},

	_onBlockSelect: function(evt) {
		// eslint-disable-next-line no-shadow
		var instance = _.find(this.instances, function(instance) {
			return instance.id === evt.detail.sectionId;
		});

		if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)) {
			instance.onBlockSelect(evt);
		}
	},

	_onBlockDeselect: function(evt) {
		// eslint-disable-next-line no-shadow
		var instance = _.find(this.instances, function(instance) {
			return instance.id === evt.detail.sectionId;
		});

		if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)) {
			instance.onBlockDeselect(evt);
		}
	},

	register: function(type, constructor) {
		this.constructors[type] = constructor;

		$('[data-section-type=' + type + ']').each(function(index, container) {
			this._createInstance(container, constructor);
		}.bind(this));
	}
});
PaloAlto.setMainSpacing = function() {
  const selectors = {
    header: '[data-site-header]',
    pageContainer: '[data-page-container]',
    templateListCollections: '.template-list-collections',
    collectionFilters: '[data-collection-filters]',
  };
  const classes = {
    hasScrolled: 'has-scrolled',
    headerSticky: 'header--sticky',
    headerRelative: 'header--relative',
  };

  // Reset header to its initial state in order to calculate the proper header height
  document.body.classList.remove(classes.hasScrolled);

  const pageContainer = document.querySelector(selectors.pageContainer);
  const header = document.querySelector(selectors.header);
  const headerSection = header.parentNode;
  const isHeaderSticky = header.dataset.position == 'fixed';
  const isListCollectionsTemplate = document.querySelector(selectors.templateListCollections);
  const hasCollectionFilters = document.querySelector(selectors.collectionFilters);
  const headerHeight = !isHeaderTransparent ? parseInt(header.clientHeight) : 0;

  // Define the initial header height
  window.initialHeaderHeight = parseInt(header.dataset.height);

  // Set main header push if the first section doesn't use transparent header
  pageContainer.style.paddingTop = headerHeight + 'px';

  // Update header position
  if (isHeaderSticky && !hasCollectionFilters) {
    headerSection.classList.add(classes.headerSticky);
  } else {
    headerSection.classList.remove(classes.headerSticky);
  }

  if (!isHeaderSticky && isListCollectionsTemplate) {
    headerSection.classList.add(classes.headerRelative);
  }

  // Update header state
  document.dispatchEvent(new CustomEvent('theme:scroll'), {bubbles: false});
};

let prev = window.pageYOffset;
let up = null;
let down = null;
let wasUp = null;
let wasDown = null;
let scrollLockTimer = 0;
let closingTimeout = 0;

function dispatchScrollEvent() {
  const position = window.pageYOffset;
  if (position > prev) {
    down = true;
    up = false;
  } else if (position < prev) {
    down = false;
    up = true;
  } else {
    up = null;
    down = null;
  }
  prev = position;
  document.dispatchEvent(
    new CustomEvent('theme:scroll', {
      detail: {
        up,
        down,
        position,
      },
      bubbles: false,
    })
  );
  if (up && !wasUp) {
    document.dispatchEvent(
      new CustomEvent('theme:scroll:up', {
        detail: {position},
        bubbles: false,
      })
    );
  }
  if (down && !wasDown) {
    document.dispatchEvent(
      new CustomEvent('theme:scroll:down', {
        detail: {position},
        bubbles: false,
      })
    );
  }
  wasDown = down;
  wasUp = up;
}

function lock(e) {
  // Prevent body scroll lock race conditions
  setTimeout(() => {
    if (scrollLockTimer) {
      clearTimeout(scrollLockTimer);
    }

    scrollLock.disablePageScroll(e.detail, {
      allowTouchMove: (el) => el.tagName === 'TEXTAREA',
    });

    document.documentElement.setAttribute('data-scroll-locked', '');
  });
}

function unlock(e) {
  const timeout = e.detail;

  if (timeout) {
    scrollLockTimer = setTimeout(removeScrollLock, timeout);
  } else {
    removeScrollLock();
  }
}

function removeScrollLock() {
  scrollLock.clearQueueScrollLocks();
  scrollLock.enablePageScroll();
  document.documentElement.removeAttribute('data-scroll-locked');
}

function scrollListener() {
  let timeout;
  window.addEventListener(
    'scroll',
    function () {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }
      timeout = window.requestAnimationFrame(function () {
        dispatchScrollEvent();
      });
    },
    {passive: true}
  );

  window.addEventListener('theme:scroll:lock', lock);
  window.addEventListener('theme:scroll:unlock', unlock);
}
// Scroll to top button
const scrollTopButton = document.querySelector('[data-scroll-top-button]');
if (scrollTopButton) {
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
  document.addEventListener('scroll', throttle(() => {
    scrollTopButton.classList.toggle('is-visible', window.pageYOffset > window.innerHeight);
  }, 150));
}

Sqrl.filters.define('handle', function(str) {
  str = str.toLowerCase();

  var toReplace = ['"', "'", '\\', '(', ')', '[', ']'];

  // For the old browsers
  for (var i = 0; i < toReplace.length; ++i) {
    str = str.replace(toReplace[i], '');
  }

  str = str.replace(/\W+/g, '-');

  if (str.charAt(str.length - 1) == '-') {
    str = str.replace(/-+\z/, '');
  }

  if (str.charAt(0) == '-') {
    str = str.replace(/\A-+/, '');
  }

  return str;
});

Sqrl.filters.define('last', function(str) {
  const words = str.split('-');
  return words[words.length - 1];
});

Sqrl.filters.define('asset_url', function(str) {
  let asset = theme.assets.image;
  asset = asset.replace('image', str);
  return asset;
});

function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}
PaloAlto.videoLink = function() {
  var $playButton = $('[data-play-button]');

  if ($playButton.length) {
    $playButton.each(function() {
      $(this).magnificPopup({
        disableOn: 200,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        preloader: false,
        fixedContentPos: false,
        closeMarkup: '<button title="%title%" class="mfp-close">' + theme.icons.close + '</i></button>',
        closeOnBgClick: true,
        tClose: 'Close (Esc)',
        iframe: {
          markup: '<div class="mfp-iframe-scaler">' +
						'<div class="mfp-close"></div>' +
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay; fullscreen"></iframe>' +
					'</div>',
          patterns: {
            youtube_short: {
              index: 'youtu.be/',
              id: 'youtu.be/',
              src: '//www.youtube.com/embed/%id%?autoplay=1&autohide=0&branding=0&cc_load_policy=0&controls=0&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&quality=hd720&rel=0&showinfo=0&wmode=opaque',
            },
          },
        },
      });
    });
  }
};


/*= =============== Utilities ================*/
PaloAlto.BgSet = {
  render: function(image, imageAspectRatio) {
    let bgset = '';
    const blankImageAspectRatio = 1;

    if (image.indexOf('no-image') != -1 && image.indexOf('2048x.gif') != -1) {
      imageAspectRatio = blankImageAspectRatio;
    }

    bgset += image.replace('_2048x.', '_180x.') + ' 180w ' + Math.round(180 / imageAspectRatio) + 'h,';
    bgset += image.replace('_2048x.', '_360x.') + ' 360w ' + Math.round(360 / imageAspectRatio) + 'h,';
    bgset += image.replace('_2048x.', '_540x.') + ' 540w ' + Math.round(540 / imageAspectRatio) + 'h,';
    bgset += image.replace('_2048x.', '_720x.') + ' 720w ' + Math.round(720 / imageAspectRatio) + 'h,';
    bgset += image.replace('_2048x.', '_900x.') + ' 900w ' + Math.round(900 / imageAspectRatio) + 'h,';
    bgset += image.replace('_2048x.', '_1080x.') + ' 1080w ' + Math.round(1080 / imageAspectRatio) + 'h,';
    bgset += image.replace('_2048x.', '_1296x.') + ' 1296w ' + Math.round(1296 / imageAspectRatio) + 'h,';
    bgset += image.replace('_2048x.', '_1512x.') + ' 1512w ' + Math.round(1512 / imageAspectRatio) + 'h,';
    bgset += image.replace('_2048x.', '_1728x.') + ' 1728w ' + Math.round(1728 / imageAspectRatio) + 'h,';
    bgset += image.replace('_2048x.', '_1950x.') + ' 1950w ' + Math.round(1950 / imageAspectRatio) + 'h,';
    bgset += image + ' 2048w ' + Math.round(2048 / imageAspectRatio) + 'h';

    return bgset;
  },
};

PaloAlto.FetchError = (function() {
  function FetchError(object) {
    this.status = object.status || null;
    this.headers = object.headers || null;
    this.json = object.json || null;
    this.body = object.body || null;
  }
  FetchError.prototype = Error.prototype;

  return FetchError;
})();

PaloAlto.fetchProduct = function(handle) {
  const requestRoute = `${theme.routes.root}products/${handle}.js`;
  return window
    .fetch(requestRoute)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch((e) => {
      console.error(e);
    });
};

PaloAlto.formatPrices = function(product, pairProduct = false) {
  const onSale = product.price <= product.compare_at_price_min;
  const soldOut = !product.available;
  const showSoldOut = theme.settings.showSoldBadge;
  const showBadge = theme.settings.showBadge;
  const showSavingBadge = theme.settings.showSavingBadge;
  const savingBadgeType = theme.settings.savingBadgeType;
  let customBadgeText = false;
  let soldBadgeText = false;
  let preorderBadgeText = false;
  let saleBadgeText = false;
  let savingBadgeText = false;
  let price = product.price;
  let priceCompare = product.compare_at_price;
  let priceDifference = priceCompare - price;

  // Custom and Preorder badges
  if (showBadge && product.tags) {
    for (let i = 0; i < product.tags.length; i++) {
      if (product.tags[i].includes('_badge_')) {
        customBadgeText = product.tags[i].replace('_badge_', '').split('_').join(' ');
      }

      if (product.tags[i].includes('_preorder') && !soldOut) {
        preorderBadgeText = theme.strings.preorder;
      }
    }
  }

  if (showSavingBadge && !pairProduct) {
    if (product.variants.length > 1) {
      product.variants.forEach(variant => {
        const variantPriceDifference = variant.compare_at_price - variant.price;

        if (variantPriceDifference > priceDifference) {
          priceDifference = variantPriceDifference;
          price = variant.price;
          priceCompare = variant.compare_at_price;
        }
      });
    }

    if (priceDifference > 0) {
      if (savingBadgeType === 'percentage') {
        price = `${Math.round(((-(price / priceCompare) + 1) * 100).toFixed(2))}%`;
      } else {
        price = slate.Currency.formatMoney(priceDifference, theme.moneyFormat);
      }

      savingBadgeText = theme.strings.saving_badge.replace('{{ discount }}', price);

      if (product.variants.length > 1) {
        savingBadgeText = theme.strings.saving_up_to_badge.replace('{{ discount }}', price);
      }
    }
  }

  // Sold out badge
  if (showSoldOut && soldOut) {
    soldBadgeText = theme.strings.sold_out;
  }

  // Sale badge
  if (showBadge && onSale && !soldOut && !savingBadgeText) {
    saleBadgeText = theme.strings.sale_badge_text;
  }

  const formatted = {
    ...product,
    customBadgeText,
    soldBadgeText,
    saleBadgeText,
    preorderBadgeText,
    savingBadgeText,
    compare_at_price_max: slate.Currency.formatMoney(product.compare_at_price_max, theme.moneyFormat),
    compare_at_price_min: slate.Currency.formatMoney(product.compare_at_price_min, theme.moneyFormat),
    price_max: slate.Currency.formatMoney(product.price_max, theme.moneyFormat),
    price_min: slate.Currency.formatMoney(product.price_min, theme.moneyFormat),
    unit_price: slate.Currency.formatMoney(product.unit_price, theme.moneyFormat),
  };

  return formatted;
};

const loaders = {};

function loadScript(options = {}) {
  if (options.url) {
    if (loaders[options.url]) {
      return loaders[options.url];
    } else {
      return getScriptWithPromise(options.url);
    }
  } else if (options.json) {
    if (loaders[options.json]) {
      return Promise.resolve(loaders[options.json]);
    } else {
      return window
        .fetch(options.json)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          loaders[options.json] = response;
          return response;
        });
    }
  } else if (options.name) {
    const key = ''.concat(options.name, options.version);
    if (loaders[key]) {
      return loaders[key];
    } else {
      return loadShopifyWithPromise(options);
    }
  } else {
    return Promise.reject();
  }
}

function getScriptWithPromise(url) {
  const loader = new Promise((resolve, reject) => {
    $.getScript(url)
      .done(function(data) {
        resolve(data);
      })
      .fail(function(error) {
        reject(error);
      });
  });
  loaders[url] = loader;
  return loader;
}

function loadShopifyWithPromise(options) {
  const key = ''.concat(options.name, options.version);
  const loader = new Promise((resolve, reject) => {
    try {
      window.Shopify.loadFeatures([
        {
          name: options.name,
          version: options.version,
          onLoad: (err) => {
            onLoadFromShopify(resolve, reject, err);
          },
        },
      ]);
    } catch (err) {
      reject(err);
    }
  });
  loaders[key] = loader;
  return loader;
}

function onLoadFromShopify(resolve, reject, err) {
  if (err) {
    return reject(err);
  } else {
    return resolve();
  }
}

PaloAlto.Element = {
  show: function(elem, removeProp = false, prop = 'block') {
    if (elem) {
      if (removeProp) {
        elem.style.removeProperty('display');
      } else {
        elem.style.display = prop;
      }
    }
  },
  hide: function(elem) {
    if (elem) {
      elem.style.display = 'none';
    }
  },
};

PaloAlto.Slide = {
  up: function(target, duration = 500) {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  },

  down: function(target, duration = 500, showDisplay = 'block', checkHidden = true) {
    let display = window.getComputedStyle(target).display;
    if (checkHidden && display !== 'none') {
      return;
    }
    target.style.removeProperty('display');
    if (display === 'none') { display = showDisplay; }
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  },
};

PaloAlto.TableWrap = (function() {
  function TableWrap() {
    const wrap = (toWrap, wrapperClass = '', wrapper) => {
      wrapper = wrapper || document.createElement('div');
      wrapper.classList.add(wrapperClass);
      wrapper.setAttribute('data-scroll-lock-scrollable', '');
      toWrap.parentNode.insertBefore(wrapper, toWrap);
      return wrapper.appendChild(toWrap);
    };

    // Target tables to make them scrollable
    const tableSelectors = 'table';
    const tables = document.querySelectorAll(tableSelectors);
    tables.forEach((table) => {
      wrap(table, 'table-wrapper');
    });
  }

  return TableWrap;
})();

PaloAlto.fadeIn = (el, display, callback = null) => {
  el.style.opacity = 0;
  el.style.display = display || 'block';
  let flag = true;

  (function fade() {
    let val = parseFloat(el.style.opacity);
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }

    if (parseInt(val) === 1 && flag && typeof callback === 'function') {
      flag = false;
      callback();
    }
  })();
};

PaloAlto.fadeOut = function(el, callback = null) {
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = 'none';
    } else {
      requestAnimationFrame(fade);
    }

    if (parseFloat(el.style.opacity) === 0 && typeof callback === 'function') {
      callback();
    }
  })();
};


/*= =============== Features ================*/
PaloAlto.Filters = (function() {
  const selectors = {
    buttons: 'button',
    buttonFiltersToggle: '[data-toggle-filters]',
    buttonFiltersClose: '[data-close-filters]',
    buttonFiltersOpen: '[data-open-filters]',
    collectionWrapper: '[data-collection-wrapper]',
    inputs: 'input, select, label, textarea',
    inputSort: '[data-input-sort]',
    filters: '[data-collection-filters]',
    filtersWrapper: '[data-collection-filters-wrapper]',
    filtersList: '[data-collection-filters-list]',
    filtersStickyBar: '[data-collection-sticky-bar]',
    filter: '[data-collection-filter]',
    filterTag: '[data-collection-filter-tag]',
    filterTagButton: '[data-collection-filter-tag-button]',
    filtersForm: '[data-collection-filters-form]',
    filterResetButton: '[data-filter-reset-button]',
    filterTagClearButton: '[data-filter-tag-reset-button]',
    productGrid: '[data-collection-products]',
    productMediaSlideshow: '[data-product-media-slideshow]',
    productMediaSlide: '[data-product-media-slideshow-slide]',
    priceMin: '[data-field-price-min]',
    priceMax: '[data-field-price-max]',
    rangeMin: '[data-se-min-value]',
    rangeMax: '[data-se-max-value]',
    rangeMinValue: 'data-se-min-value',
    rangeMaxValue: 'data-se-max-value',
    rangeMinDefault: 'data-se-min',
    rangeMaxDefault: 'data-se-max',
    searchForm: '[data-search-form]',
    swatchesWrapper: '[data-grid-swatches]',
    swatch: '[data-swatch]',
  };

  const classes = {
    filtersVisible: 'collection__filters--visible',
    isActive: 'is-active',
    isExpanded: 'is-expanded',
    isVisible: 'is-visible',
    isLoading: 'is-loading',
  };

  function Filters(container) {
    this.container = container;
    this.sectionId = container.dataset.sectionId;
    this.namespace = '.' + container.dataset.sectionId;
    this.enableFilters = container.dataset.enableFilters === 'true';
    this.filterMode = container.dataset.filterMode;
    this.collectionHandle = this.container.dataset.collection;
    this.productGrid = this.container.querySelector(selectors.productGrid);
    this.filters = this.container.querySelector(selectors.filters);
    this.filtersStickyBar = this.container.querySelector(selectors.filtersStickyBar);
    this.filtersForm = this.container.querySelector(selectors.filtersForm);
    this.searchForm = this.container.querySelector(selectors.searchForm);
    this.inputSort = this.container.querySelectorAll(selectors.inputSort);
    this.filterData = [];
    this.hideFilters = this.hideFilters.bind(this);
    this.showFilters = this.showFilters.bind(this);
    this.onFilterResetClick = this.onFilterResetClick.bind(this);
    this.onFilterTagResetClick = this.onFilterTagResetClick.bind(this);
    this.onFilterTagClearClick = this.onFilterTagClearClick.bind(this);
    this.onFilterToggleClick = this.onFilterToggleClick.bind(this);
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
    this.updateRangeEvent = this.updateRange.bind(this);
    this.debouncedSubmitEvent = PaloAlto.debounce(function(event) {
      this.onSubmitHandler(event);
    }, 500);
    this.debouncedSortEvent = PaloAlto.debounce(function(event) {
      this.onSortChange(event);
    }, 500);
    this.productGridEvents = {};

    this.initTagFilters();
    this.initFacetedFilters();
    this.bindToggleButtonsEvents();
    this.bindFilterButtonsEvents();
    this.initInfinityScroll();
    this.initProductGridEvents();

    PaloAlto.initSwatches.makeSwatch(this.container);
    PaloAlto.initCollapsible();


    // Update css variable for collection sticky bar height
    setVars();

    window.addEventListener('popstate', this.onHistoryChange.bind(this));
  }

  Filters.prototype = $.extend({}, Filters.prototype, {

    /*
     * Init faceted filters
     */
    initFacetedFilters: function() {
      if (this.filterMode == 'tag' || !this.enableFilters) { return; }

      new PaloAlto.RangeSlider(this.container);
    },

    /*
     * Price range slider update
     */
    updateRange: function() {
      const rangeMin = this.filtersForm.querySelector(selectors.rangeMin);
      const rangeMax = this.filtersForm.querySelector(selectors.rangeMax);
      const priceMin = this.filtersForm.querySelector(selectors.priceMin);
      const priceMax = this.filtersForm.querySelector(selectors.priceMax);

      if (rangeMin.hasAttribute(selectors.rangeMinValue) && rangeMax.hasAttribute(selectors.rangeMaxValue)) {
        const priceMinValue = parseFloat(priceMin.placeholder, 10);
        const priceMaxValue = parseFloat(priceMax.placeholder, 10);
        const rangeMinValue = parseFloat(rangeMin.getAttribute(selectors.rangeMinValue), 10);
        const rangeMaxValue = parseFloat(rangeMax.getAttribute(selectors.rangeMaxValue), 10);

        if (priceMinValue !== rangeMinValue || priceMaxValue !== rangeMaxValue) {
          priceMin.value = parseInt(rangeMinValue);
          priceMax.value = parseInt(rangeMaxValue);

          this.filtersForm.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
    },

    /*
     * Render product grid and filters on form submission
     */
    onSubmitHandler: function(event) {
      event.preventDefault();
      const formData = new FormData(event.target.closest('form'));
      const searchParams = new URLSearchParams(formData);

      // if submitted price equal to price range min and max remove price parameters
      const rangeMin = this.filtersForm.querySelector(selectors.rangeMin);
      const rangeMax = this.filtersForm.querySelector(selectors.rangeMax);
      const priceMin = this.filtersForm.querySelector(selectors.priceMin);
      const priceMax = this.filtersForm.querySelector(selectors.priceMax);
      const checkElements = rangeMin && rangeMax && priceMin && priceMax;

      if (checkElements && rangeMin.hasAttribute(selectors.rangeMinDefault) && rangeMax.hasAttribute(selectors.rangeMaxDefault)) {
        const rangeMinDefault = parseFloat(rangeMin.getAttribute(selectors.rangeMinDefault), 10);
        const rangeMaxDefault = parseFloat(rangeMax.getAttribute(selectors.rangeMaxDefault), 10);
        const priceMinValue = !priceMin.value ? rangeMinDefault : parseFloat(priceMin.value, 10);
        const priceMaxValue = !priceMax.value ? rangeMaxDefault : parseFloat(priceMax.value, 10);

        if (priceMinValue <= rangeMinDefault && priceMaxValue >= rangeMaxDefault) {
          searchParams.delete('filter.v.price.gte');
          searchParams.delete('filter.v.price.lte');
        }
      }

      this.renderSection(searchParams.toString(), event);
    },

    /*
     * Call renderSection on history change
     */
    onHistoryChange: function(event) {
      const searchParams = event.state?.searchParams || '';
      this.renderSection(searchParams, null, false);
    },

    /*
     * Render section on history change or filter/sort change event
     */
    renderSection: function(searchParams, event, updateURLHash = true) {
      this.startLoading();
      const url = `${window.location.pathname}?section_id=${this.sectionId}&${searchParams}`;
      const filterDataUrl = element => element.url === url;
      this.filterData.some(filterDataUrl)
        ? this.renderSectionFromCache(filterDataUrl, event)
        : this.renderSectionFromFetch(url, event);

      if (updateURLHash) { this.updateURLHash(searchParams); }
    },

    /*
     * Render section from fetch call
     */
    renderSectionFromFetch: function(url, event) {
      fetch(url)
        .then(response => response.text())
        .then((responseText) => {
          const html = responseText;
          this.filterData = [...this.filterData, { html, url }];
          this.renderFilters(html);
          this.renderProductGrid(html);
          this.finishLoading();
        });
    },

    /*
     * Render section from Cache
     */
    renderSectionFromCache: function(filterDataUrl, event) {
      const html = this.filterData.find(filterDataUrl).html;
      this.renderFilters(html, event);
      this.renderProductGrid(html);
      this.finishLoading();
    },

    /*
     * Render product grid items on fetch call
     */
    renderProductGrid: function(html) {
      const productGridHTML = new DOMParser()
        .parseFromString(html, 'text/html')
        .querySelector(selectors.productGrid).innerHTML;

      this.productGrid.innerHTML = productGridHTML;

      this.initProductGridEvents();
    },

    /*
     * Render filters on fetch call
     */
    renderFilters: function(html) {
      const filtersHTML = new DOMParser()
        .parseFromString(html, 'text/html')
        .querySelector(selectors.filters).innerHTML;
      this.filters.innerHTML = filtersHTML;
      this.filtersForm = document.querySelector(selectors.filtersForm);
      this.bindFilterButtonsEvents();
      this.bindToggleButtonsEvents();
      PaloAlto.initSwatches.makeSwatch(this.container);

      PaloAlto.initCollapsible();
      // Init price range slider
      document.dispatchEvent(new CustomEvent('theme:filters:init', { bubbles: true }));
    },

    /*
     * Update URL when filter/sort is changed
     */
    updateURLHash: function(searchParams) {
      history.pushState({ searchParams }, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);
    },

    /*
     * Bind filter buttons events
     */
    bindFilterButtonsEvents: function() {
      this.container.querySelectorAll(selectors.filterResetButton).forEach((button) => {
        button.addEventListener('click', this.onFilterResetClick, { once: true });
      });

      if (this.filtersForm) {
        this.filtersForm.addEventListener('input', this.debouncedSubmitEvent.bind(this));
        this.filtersForm.addEventListener('theme:filter:range-update', this.updateRangeEvent);
      }
    },

    /*
     * Render products on specific filter click event
     */
    onFilterResetClick: function(event) {
      event.preventDefault();
      this.renderSection(new URL(event.currentTarget.href).searchParams.toString());
    },

    /*
     * Bind filter title click events to toggle options visibility
     */
    bindToggleButtonsEvents: function() {
      this.container.querySelectorAll(selectors.buttonFiltersToggle).forEach((button) => {
        button.addEventListener('click', this.onFilterToggleClick);
      });
      this.container.querySelectorAll(selectors.buttonFiltersClose).forEach((button) => {
        button.addEventListener('click', this.hideFilters);
      });
      this.container.querySelectorAll(selectors.buttonFiltersOpen).forEach((button) => {
        button.addEventListener('click', this.showFilters);
      });

      this.container.querySelector(selectors.collectionWrapper).addEventListener('keyup', this.onKeyUpHandler);
    },

    /*
     * Event handler on user ESC key press
     */
    onKeyUpHandler: function(event) {
      if (event.keyCode === slate.utils.keyboardKeys.ESCAPE) {
        this.hideFilters();
      }
    },

    /*
     * Toggle filter options on title click
     */
    onFilterToggleClick: function(event) {
      event.preventDefault();

      const filtersVisible = this.filters.classList.contains(classes.filtersVisible);

      filtersVisible ? this.hideFilters() : this.showFilters();
    },

    /*
     * Scroll down and open collection filters if they are hidden
     */
    showFilters: function() {
      const instance = this;
      const scrollableElement = document.querySelector(selectors.filtersList);

      slate.a11y.state.trigger = document.querySelector(selectors.buttonFiltersToggle);

      // Trap focus
      slate.a11y.trapFocus({
        container: instance.filters,
        elementToFocus: instance.filters.querySelector(selectors.buttons),
      });

      // Open filters and scroll lock if only they are hidden on lower sized screens
      if (window.innerWidth < theme.sizes.widescreen) {
        this.filters.classList.add(classes.filtersVisible);

        document.dispatchEvent(new CustomEvent('theme:scroll:lock', {bubbles: true, detail: scrollableElement}));
      }

      // Scroll filters into view
      if (this.filtersStickyBar) {
        let stickyBarOffsetTop = this.getStickyBarOffsetTop();

        window.scrollTo({
          top: stickyBarOffsetTop,
          left: 0,
          behavior: 'smooth',
        });
      }
    },

    /*
     * Hide filters dropdown
     */
    hideFilters: function() {
      let filtersVisible = this.filters.classList.contains(classes.filtersVisible);
      let loading = this.container.classList.contains(classes.isLoading);

      if (filtersVisible) {
        this.filters.classList.remove(classes.filtersVisible);
        slate.a11y.removeTrapFocus();
      }

      // Enable page scroll if no loading state
      if (!loading) {
        const timeout = 300;
        document.dispatchEvent(new CustomEvent('theme:scroll:unlock', {bubbles: true, detail: timeout}));
      }
    },

    /*
     * Init functions required when "Filter by tag/group" is selected from Collection page -> Collection pages -> Filter mode
     */
    initTagFilters: function() {
      if (this.filterMode != 'tag' && this.filterMode != 'group' || !this.enableFilters) { return; }

      this.tags = this.container.dataset.tags.split('+').filter(item => item);
      this.bindFilterTagButtonsEvents();
      this.bindSortChangeEvent();
      this.resizeEvent = PaloAlto.debounce(this.hideFilters.bind(this), 250);

      document.addEventListener('theme:resize:width', this.resizeEvent);
    },

    /*
     * Render products when tag filter is selected
     */
    renderTagFiltersProducts: function(url) {
      var instance = this;

      this.startLoading();

      if (typeof this.endlessCollection === 'object') { this.endlessCollection.destroy(); }

      fetch(url)
        .then(response => response.text())
        .then((responseText) => {
          const html = responseText;
          const parsedData = new DOMParser().parseFromString(html, 'text/html');
          const productsHTML = parsedData.querySelector(selectors.productGrid).innerHTML;
          const filtersHTML = parsedData.querySelector(selectors.filters).innerHTML;

          this.productGrid.innerHTML = productsHTML;
          this.filters.innerHTML = filtersHTML;
          this.inputSort = this.container.querySelectorAll(selectors.inputSort);
          this.filtersForm = document.querySelector(selectors.filtersForm);
          this.filterData = [...this.filterData, { html, url }];

          instance.initInfinityScroll();

          this.bindFilterTagButtonsEvents();
          this.bindSortChangeEvent();
          this.bindToggleButtonsEvents();
          this.initProductGridEvents();
          PaloAlto.initCollapsible();
          PaloAlto.initSwatches.makeSwatch(this.container);
          AOS.refreshHard();

          // Update page URL if supported by the browser
          if (history.replaceState) {
            window.history.pushState({ path: url }, '', url);
          }
        })
        .catch((error) => {
          this.finishLoading();
          console.log(`Error: ${error}`);
        });
    },

    /*
     * Bind Filter by tag buttons
     */
    bindFilterTagButtonsEvents: function() {
      this.container.querySelectorAll(selectors.filterTagButton).forEach((button) => {
        button.addEventListener('click', this.onFilterTagButtonClick.bind(this), { once: true });
      });

      this.container.querySelectorAll(selectors.filterTagClearButton).forEach((button) => {
        button.addEventListener('click', this.onFilterTagClearClick, { once: true });
      });

      this.container.querySelectorAll(selectors.filterResetButton).forEach((button) => {
        button.addEventListener('click', this.onFilterTagResetClick, { once: true });
      });
    },

    /*
     * Bind input Sort by change event for "filters by tag/group" only
     */
    bindSortChangeEvent: function() {
      this.container.querySelectorAll(selectors.inputSort).forEach((input) => {
        input.addEventListener('input', this.debouncedSortEvent.bind(this));
      });
    },

    /*
     * Filter by tag buttons click event
     */
    onFilterTagButtonClick: function(e) {
      e.preventDefault();
      const button = e.currentTarget;
      const selectedTag = button.dataset.tag;
      let isTagSelected = button.parentNode.classList.contains(classes.isActive);

      if (isTagSelected) {
        let tagIndex = this.tags.indexOf(selectedTag);

        button.parentNode.classList.remove(classes.isActive);

        if (tagIndex > -1) {
          this.tags.splice(tagIndex, 1);
        }
      } else {
        button.parentNode.classList.add(classes.isActive);

        this.tags.push(selectedTag);
      }

      let url = this.collectionHandle + '/' + this.tags.join('+') + '?sort_by=' + this.getSortValue();

      // Close filters dropdown on tag select
      this.container.querySelector(selectors.filter).classList.remove(classes.isExpanded);
      this.container.querySelector(selectors.filter).setAttribute('aria-expanded', false);
      this.container.setAttribute('data-tags', '[' + this.tags + ']');
      this.renderTagFiltersProducts(url);
    },

    /*
     * Remove a specific tag filter
     */
    onFilterTagClearClick: function(e) {
      e.preventDefault();
      const button = e.currentTarget;
      const selectedTag = button.dataset.tag;
      const tagIndex = this.tags.indexOf(selectedTag);

      if (tagIndex > -1) {
        this.tags.splice(tagIndex, 1);
      }
      const url = this.collectionHandle + '/' + this.tags.join('+') + '?sort_by=' + this.getSortValue();

      this.container.setAttribute('data-tags', '[' + this.tags + ']');
      this.renderTagFiltersProducts(url);
    },

    /*
     * Re-render products with the new sort option selected
     */
    onSortChange: function() {
      let url = this.collectionHandle + '/' + this.tags.join('+') + '?sort_by=' + this.getSortValue();

      this.renderTagFiltersProducts(url);
    },

    /*
     * Get the selected sort option value
     */
    getSortValue: function() {
      let sortValue = '';
      this.inputSort.forEach((input) => {
        if (input.checked) {
          sortValue = input.value;
        }
      });

      return sortValue;
    },

    /*
     * Filter by tag reset button click event
     */
    onFilterTagResetClick: function(e) {
      e.preventDefault();

      this.container.querySelectorAll(selectors.filterTag).forEach((element) => {
        element.classList.remove(classes.isActive);
      });

      this.container.querySelectorAll(selectors.filter).forEach((element) => {
        element.classList.remove(classes.isExpanded);
        element.setAttribute('aria-expanded', false);
      });

      // Reset saved tags
      this.tags = [];
      this.container.setAttribute('data-tags', '');

      let url = this.collectionHandle + '/?sort_by=' + this.getSortValue();

      this.renderTagFiltersProducts(url);
    },

    /*
     * Get products container top position
     */
    getProductsOffsetTop: function() {
      return this.productGrid.getBoundingClientRect().top - document.body.getBoundingClientRect().top - this.filtersStickyBar.offsetHeight;
    },

    /*
     * Get collection page sticky bar top position
     */
    getStickyBarOffsetTop: function() {
      return this.filtersStickyBar.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    },

    /*
     * Init all the events required on product grid items
     */
    initProductGridEvents: function() {
      this.productGridEvents = new PaloAlto.ProductGrid(this.container);
      this.initInfinityScroll();

      // Stop loading animation
      setTimeout(() => {
        this.finishLoading();
      }, 450);
    },

    /*
     * Init Infinity scroll functionality
     */
    initInfinityScroll: function() {
      if (!theme.settings.enableInfinityScroll) { return; }

      const namespace = this.namespace;

      this.endlessCollection = new Ajaxinate({
        container: '#AjaxinateLoop',
        pagination: '#AjaxinatePagination',
        method: 'scroll',
        namespace: namespace,
        callback: () => {
          this.initProductGridEvents();
          AOS.refreshHard();
        },
      });
    },

    /*
     * Show loading animation and lock body scroll
     */
    startLoading: function() {
      this.container.classList.add(classes.isLoading);
      this.hideFilters();

      document.dispatchEvent(new CustomEvent('theme:scroll:lock', {bubbles: true}));

      let productsTop = this.getProductsOffsetTop();

      window.scrollTo({
        top: productsTop,
        left: 0,
        behavior: 'smooth',
      });
    },

    /*
     * Hide loading animation and unlock body scroll
     */
    finishLoading: function() {
      this.container.classList.remove(classes.isLoading);

      const timeout = 300;
      document.dispatchEvent(new CustomEvent('theme:scroll:unlock', {bubbles: true, detail: timeout}));

      AOS.refreshHard();
    },

    /*
     * On block:deselect event
     */
    onDeselect: function() {
      $.magnificPopup.close();
    },

    /*
     * On section:unload event
     */
    onUnload: function(evt) {
      if (typeof (this.endlessCollection) === 'object') { this.endlessCollection.destroy(); }

      $.magnificPopup.close();
    },
  });

  return Filters;
})();

PaloAlto.HoverDisclosure = (function() {
  const selectors = {
    disclosureToggle: 'data-hover-disclosure-toggle',
    header: '[data-site-header]',
    link: '[data-top-link]',
    stagger: '[data-stagger]',
    staggerPair: '[data-stagger-first]',
    staggerAfter: '[data-stagger-second]',
    focusable: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  };

  const classes = {
    isVisible: 'is-visible',
    meganavVisible: 'meganav--visible',
    meganavIsTransitioning: 'meganav--is-transitioning',
    grandparent: 'grandparent',
  };

  function HoverDisclosure(el) {
    this.disclosure = el;
    this.wrapper = el.closest(selectors.header);
    this.key = this.disclosure.id;
    this.trigger = document.querySelector(`[${selectors.disclosureToggle}='${this.key}']`);
    this.link = this.trigger.querySelector(selectors.link);
    this.grandparent = this.trigger.classList.contains(classes.grandparent);
    this.transitionTimeout = 0;
    this.trigger.setAttribute('aria-haspopup', true);
    this.trigger.setAttribute('aria-expanded', false);
    this.trigger.setAttribute('aria-controls', this.key);

    this.connectHoverToggle();
    this.handleTablets();
    this.staggerChildAnimations();
  }

  HoverDisclosure.prototype = $.extend({}, HoverDisclosure.prototype, {
    showDisclosure(e) {
      if (e && e.type && e.type === 'mouseenter') {
        this.wrapper.classList.add(classes.meganavIsTransitioning);
      }

      if (this.grandparent) {
        this.wrapper.classList.add(classes.meganavVisible);
      } else {
        this.wrapper.classList.remove(classes.meganavVisible);
      }
      this.trigger.setAttribute('aria-expanded', true);
      this.trigger.classList.add(classes.isVisible);
      this.disclosure.classList.add(classes.isVisible);

      if (this.transitionTimeout) {
        clearTimeout(this.transitionTimeout);
      }

      this.transitionTimeout = setTimeout(() => {
        this.wrapper.classList.remove(classes.meganavIsTransitioning);
      }, 200);
    },

    hideDisclosure() {
      this.disclosure.classList.remove(classes.isVisible);
      this.trigger.classList.remove(classes.isVisible);
      this.trigger.setAttribute('aria-expanded', false);
      this.wrapper.classList.remove(classes.meganavVisible, classes.meganavIsTransitioning);
    },

    staggerChildAnimations() {
      const simple = this.disclosure.querySelectorAll(selectors.stagger);
      simple.forEach((el, index) => {
        el.style.transitionDelay = `${index * 50 + 10}ms`;
      });

      const pairs = this.disclosure.querySelectorAll(selectors.staggerPair);
      pairs.forEach((child, i) => {
        const d1 = i * 150;
        child.style.transitionDelay = `${d1}ms`;
        child.parentElement.querySelectorAll(selectors.staggerAfter).forEach((grandchild, i2) => {
          const di1 = i2 + 1;
          const d2 = di1 * 20;
          grandchild.style.transitionDelay = `${d1 + d2}ms`;
        });
      });
    },

    handleTablets() {
      // first click opens the popup, second click opens the link
      this.trigger.addEventListener(
        'touchstart',
        function(e) {
          const isOpen = this.disclosure.classList.contains(classes.isVisible);
          if (!isOpen) {
            e.preventDefault();
            this.showDisclosure(e);
          }
        }.bind(this),
        {passive: true},
      );
    },

    connectHoverToggle() {
      this.trigger.addEventListener('mouseenter', (e) => this.showDisclosure(e));
      this.link.addEventListener('focus', (e) => this.showDisclosure(e));

      this.trigger.addEventListener('mouseleave', () => this.hideDisclosure());
      this.trigger.addEventListener('focusout', (e) => {
        const inMenu = this.trigger.contains(e.relatedTarget);
        if (!inMenu) {
          this.hideDisclosure();
        }
      });
      this.disclosure.addEventListener('keyup', (evt) => {
        if (evt.which !== slate.utils.keyboardKeys.ESCAPE) {
          return;
        }
        this.hideDisclosure();
      });
    },

    onBlockSelect(evt) {
      if (this.disclosure.contains(evt.target)) {
        this.showDisclosure(evt);
      }
    },

    onBlockDeselect(evt) {
      if (this.disclosure.contains(evt.target)) {
        this.hideDisclosure();
      }
    },
  });

  return HoverDisclosure;
})();

// Library loader for 3D Model and YT video player
var LibraryLoader = (function() {
	var types = {
		link: 'link',
		script: 'script'
	};

	var status = {
		requested: 'requested',
		loaded: 'loaded'
	};

	var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';

	var libraries = {
		youtubeSdk: {
			tagId: 'youtube-sdk',
			src: 'https://www.youtube.com/iframe_api',
			type: types.script
		},
		modelViewerUiStyles: {
			tagId: 'shopify-model-viewer-ui-styles',
			src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
			type: types.link
		}
	};

	function load(libraryName, callback) {
		var library = libraries[libraryName];

		if (!library) return;
		if (library.status === status.requested) return;

		callback = callback || function() {};
		if (library.status === status.loaded) {
			callback();
			return;
		}

		library.status = status.requested;

		var tag;

		switch (library.type) {
			case types.script:
				tag = createScriptTag(library, callback);
				break;
			case types.link:
				tag = createLinkTag(library, callback);
				break;
		}

		tag.id = library.tagId;
		library.element = tag;

		var firstScriptTag = document.getElementsByTagName(library.type)[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}

	function createScriptTag(library, callback) {
		var tag = document.createElement('script');
		tag.src = library.src;
		tag.addEventListener('load', function() {
			library.status = status.loaded;
			callback();
		});
		return tag;
	}

	function createLinkTag(library, callback) {
		var tag = document.createElement('link');
		tag.href = library.src;
		tag.rel = 'stylesheet';
		tag.type = 'text/css';
		tag.addEventListener('load', function() {
			library.status = status.loaded;
			callback();
		});
		return tag;
	}

	return {
		load: load
	};
})();
PaloAlto.CustomScrollbar = (function() {
  const selectors = {
    scrollbar: '[data-custom-scrollbar]',
    scrollbarItems: '[data-custom-scrollbar-items]',
    scrollbarThumb: '[data-custom-scrollbar-thumb]',
  };

  function CustomScrollbar(container) {
    this.scrollbarItems = container.querySelector(selectors.scrollbarItems);
    this.scrollbar = container.querySelector(selectors.scrollbar);
    this.scrollbarThumb = container.querySelector(selectors.scrollbarThumb);
    this.trackWidth = 0;
    this.calcScrollbarEvent = () => this.calculateScrollbar();
    this.onScrollbarChangeEvent = (e) => this.onScrollbarChange(e);

    if (this.scrollbar && this.scrollbarItems) {
      this.events();
      this.calculateScrollbar();
      if (this.scrollbarItems.children.length) {
        this.calculateTrack(this.scrollbarItems.children[0]);
      }
    }
  }

  CustomScrollbar.prototype = $.extend({}, CustomScrollbar.prototype, {
    calculateTrack(element) {
      const thumbScale = element.clientWidth / this.scrollbarThumb.parentElement.clientWidth;
      const thumbPosition = element.offsetLeft / this.scrollbarThumb.parentElement.clientWidth;
      this.scrollbar.style.setProperty('--thumb-scale', thumbScale);
      this.scrollbar.style.setProperty('--thumb-position', `${this.trackWidth * thumbPosition}px`);
    },

    calculateScrollbar() {
      if (this.scrollbarItems.children.length) {
        const childrenArr = [...this.scrollbarItems.children];
        this.trackWidth = 0;

        childrenArr.forEach(element => {
          this.trackWidth += element.offsetWidth + parseInt(window.getComputedStyle(element).marginRight);
        });
        this.scrollbar.style.setProperty('--track-width', `${this.trackWidth}px`);
      }
    },

    onScrollbarChange(e) {
      if (e && e.detail && e.detail.element) {
        this.calculateTrack(e.detail.element);
      }
    },

    events() {
      document.addEventListener('theme:resize:width', this.calcScrollbarEvent);
      document.addEventListener('theme:custom-scrollbar:change', this.onScrollbarChangeEvent);
    },

    destroy() {
      document.removeEventListener('theme:resize:width', this.calcScrollbarEvent);
      document.removeEventListener('theme:custom-scrollbar:change', this.onScrollbarChangeEvent);
    },
  });

  return CustomScrollbar;
})();

PaloAlto.LoadPhotoswipe = (function() {
  const selectors = {
    popupContainer: '.pswp',
    popupCloseBtn: '.pswp__custom-close',
    popupIframe: 'iframe, video',
    popupThumbs: '.pswp__thumbs',
  };

  const classes = {
    classCurrent: 'is-current',
    classCustomLoader: 'pswp--custom-loader',
    classCustomOpen: 'pswp--custom-opening',
    classLoader: 'pswp__loader',
  };

  const attributes = {
    dataOptionClasses: 'data-pswp-option-classes',
  };

  const loaderHTML = `<div class="${classes.classLoader}"><div class="loader loader--image"><div class="loader__image"></div></div></div>`;

  function LoadPhotoswipe(items, options) {
    this.items = items;
    this.pswpElement = document.querySelectorAll(selectors.popupContainer)[0];
    this.popup = null;
    this.popupThumbs = null;
    this.popupThumbsContainer = this.pswpElement.querySelector(selectors.popupThumbs);
    this.closeBtn = this.pswpElement.querySelector(selectors.popupCloseBtn);
    const defaultOptions = {
      history: false,
      focus: false,
      mainClass: '',
    };
    this.options = options !== '' ? options : defaultOptions;

    this.init();
  }

  LoadPhotoswipe.prototype = $.extend({}, LoadPhotoswipe.prototype, {
    init() {
      document.dispatchEvent(new CustomEvent('theme:scroll:lock', {bubbles: true}));

      this.pswpElement.classList.add(classes.classCustomOpen);

      this.initLoader();

      this.loadPopup();
    },

    initLoader() {
      if (this.pswpElement.classList.contains(classes.classCustomLoader) && this.options !== '' && this.options.mainClass) {
        this.pswpElement.setAttribute(attributes.dataOptionClasses, this.options.mainClass);
        let loaderElem = document.createElement('div');
        loaderElem.innerHTML = loaderHTML;
        loaderElem = loaderElem.firstChild;
        this.pswpElement.appendChild(loaderElem);
      } else {
        this.pswpElement.setAttribute(attributes.dataOptionClasses, '');
      }
    },

    loadPopup() {
      if (this.pswpElement.classList.contains(classes.classCustomLoader)) {
        this.pswpElement.classList.remove(classes.classCustomLoader);
      }

      this.pswpElement.classList.remove(classes.classCustomOpen);

      this.popup = new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, this.items, this.options);
      this.popup.init();

      this.thumbsActions();

      this.popup.listen('close', () => this.onClose());

      if (this.closeBtn) {
        this.closeBtn.addEventListener('click', () => this.popup.close());
      }
    },

    thumbsActions() {
      if (this.popupThumbsContainer && this.popupThumbsContainer.firstChild) {
        this.popupThumbsContainer.addEventListener('wheel', (e) => this.stopDisabledScroll(e));
        this.popupThumbsContainer.addEventListener('mousewheel', (e) => this.stopDisabledScroll(e));
        this.popupThumbsContainer.addEventListener('DOMMouseScroll', (e) => this.stopDisabledScroll(e));

        this.popupThumbs = this.pswpElement.querySelectorAll(`${selectors.popupThumbs} > *`);
        this.popupThumbs.forEach((element, i) => {
          element.addEventListener('click', (e) => {
            e.preventDefault();
            element.parentElement.querySelector(`.${classes.classCurrent}`).classList.remove(classes.classCurrent);
            element.classList.add(classes.classCurrent);
            this.popup.goTo(i);
          });
        });

        this.popup.listen('imageLoadComplete', () => this.setCurrentThumb());
        this.popup.listen('beforeChange', () => this.setCurrentThumb());
      }
    },

    stopDisabledScroll(e) {
      e.stopPropagation();
    },

    onClose() {
      const popupIframe = this.pswpElement.querySelector(selectors.popupIframe);
      if (popupIframe) {
        popupIframe.parentNode.removeChild(popupIframe);
      }

      if (this.popupThumbsContainer && this.popupThumbsContainer.firstChild) {
        while (this.popupThumbsContainer.firstChild) { this.popupThumbsContainer.removeChild(this.popupThumbsContainer.firstChild); }
      }

      this.pswpElement.setAttribute(attributes.dataOptionClasses, '');
      const loaderElem = this.pswpElement.querySelector(`.${classes.classLoader}`);
      if (loaderElem) {
        this.pswpElement.removeChild(loaderElem);
      }

      setTimeout(() => {
        document.dispatchEvent(new CustomEvent('theme:scroll:unlock', {bubbles: true}));
      }, 250);
    },

    setCurrentThumb() {
      const lastCurrentThumb = this.pswpElement.querySelector(`${selectors.popupThumbs} > .${classes.classCurrent}`);
      if (lastCurrentThumb) {
        lastCurrentThumb.classList.remove(classes.classCurrent);
      }

      if (!this.popupThumbs) { return; }
      const currentThumb = this.popupThumbs[this.popup.getCurrentIndex()];
      currentThumb.classList.add(classes.classCurrent);
      this.scrollThumbs(currentThumb);
    },

    scrollThumbs(currentThumb) {
      const thumbsContainerLeft = this.popupThumbsContainer.scrollLeft;
      const thumbsContainerWidth = this.popupThumbsContainer.offsetWidth;
      const thumbsContainerPos = thumbsContainerLeft + thumbsContainerWidth;
      const currentThumbLeft = currentThumb.offsetLeft;
      const currentThumbWidth = currentThumb.offsetWidth;
      const currentThumbPos = currentThumbLeft + currentThumbWidth;

      if (thumbsContainerPos <= currentThumbPos || thumbsContainerPos > currentThumbLeft) {
        const currentThumbMarginLeft = parseInt(window.getComputedStyle(currentThumb).marginLeft);
        this.popupThumbsContainer.scrollTo({
          top: 0,
          left: currentThumbLeft - currentThumbMarginLeft,
          behavior: 'smooth',
        });
      }
    },
  });

  return LoadPhotoswipe;
})();

PaloAlto.Popout = (function() {
  var selectors = {
    form: 'form',
    popoutWrapper: '[data-popout]',
    popoutList: '[data-popout-list]',
    popoutToggle: '[data-popout-toggle]',
    popoutInput: '[data-popout-input]',
    popoutOptions: '[data-popout-option]',
    popoutText: '[data-popout-text]',
    popoutPrevent: 'data-popout-prevent',
    popoutQuantity: 'data-quantity-field',
    dataValue: 'data-value',
    ariaExpanded: 'aria-expanded',
    ariaCurrent: 'aria-current',
    productGridImage: '[data-product-image]',
    productGrid: '[data-product-grid-item]',
  };

  var classes = {
    listVisible: 'select-popout__list--visible',
    popoutAlternative: 'select-popout--alt',
    currentSuffix: '--current',
    visible: 'is-visible',
  };

  function Popout(popout) {
    this.popout = popout;
    this.popoutList = this.popout.querySelector(selectors.popoutList);
    this.popoutToggle = this.popout.querySelector(selectors.popoutToggle);
    this.popoutText = this.popout.querySelector(selectors.popoutText);
    this.popoutInput = this.popout.querySelector(selectors.popoutInput);
    this.popoutOptions = this.popout.querySelectorAll(selectors.popoutOptions);
    this.popoutPrevent = this.popout.getAttribute(selectors.popoutPrevent) === 'true';
    this.popupToggleFocusoutEvent = (evt) => this.popupToggleFocusout(evt);
    this.popupListFocusoutEvent = (evt) => this.popupListFocusout(evt);
    this.popupToggleClickEvent = (evt) => this.popupToggleClick(evt);
    this.popoutKeyupEvent = (evt) => this.popoutKeyup(evt);
    this.popupOptionsClickEvent = (evt) => this.popupOptionsClick(evt);
    this._connectOptionsDispatchEvent = (evt) => this._connectOptionsDispatch(evt);

    this._connectOptions();
    this._connectToggle();
    this._onFocusOut();

    if (this.popoutInput && this.popoutInput.hasAttribute(selectors.popoutQuantity)) {
      document.addEventListener('theme:cart:update', this.updatePopout.bind(this));
    }
  }

  Popout.prototype = $.extend({}, Popout.prototype, {
    unload() {
      if (this.popoutOptions.length) {
        this.popoutOptions.forEach((element) => {
          element.removeEventListener('theme:popout:click', this.popupOptionsClickEvent);
          element.removeEventListener('click', this._connectOptionsDispatchEvent);
        });
      }

      this.popoutToggle.removeEventListener('click', this.popupToggleClickEvent);
      this.popoutToggle.removeEventListener('focusout', this.popupToggleFocusoutEvent);
      this.popoutList.removeEventListener('focusout', this.popupListFocusoutEvent);
      this.popout.removeEventListener('keyup', this.popoutKeyupEvent);
    },

    popupToggleClick(evt) {
      const ariaExpanded = evt.currentTarget.getAttribute(selectors.ariaExpanded) === 'true';

      if (this.popoutList.closest(selectors.productGrid)) {
        const productGridItemImage = this.popoutList.closest(selectors.productGrid).querySelector(selectors.productGridImage);

        if (productGridItemImage) {
          productGridItemImage.classList.toggle(classes.visible, !ariaExpanded);
        }
      }

      evt.currentTarget.setAttribute(selectors.ariaExpanded, !ariaExpanded);
      this.popoutList.classList.toggle(classes.listVisible);
    },

    popupToggleFocusout(evt) {
      const popoutLostFocus = this.popout.contains(evt.relatedTarget);

      if (!popoutLostFocus) {
        this._hideList();
      }
    },

    popupListFocusout(evt) {
      const childInFocus = evt.currentTarget.contains(evt.relatedTarget);
      const isVisible = this.popoutList.classList.contains(classes.listVisible);

      if (isVisible && !childInFocus) {
        this._hideList();
      }
    },

    popupOptionsClick(evt) {
      const link = evt.target.closest(selectors.popoutOptions);
      if (link.attributes.href.value === '#') {
        evt.preventDefault();

        let attrValue = '';

        if (evt.currentTarget.getAttribute(selectors.dataValue)) {
          attrValue = evt.currentTarget.getAttribute(selectors.dataValue);
        }

        this.popoutInput.value = attrValue;

        if (this.popoutPrevent) {
          this.popoutInput.dispatchEvent(new Event('change'));

          if (!evt.detail.preventTrigger && this.popoutInput.hasAttribute(selectors.popoutQuantity)) {
            this.popoutInput.dispatchEvent(new Event('input'));
          }

          const currentElement = this.popoutList.querySelector(`[class*="${classes.currentSuffix}"]`);
          let targetClass = classes.currentSuffix;

          if (currentElement && currentElement.classList.length) {
            for (const currentElementClass of currentElement.classList) {
              if (currentElementClass.includes(classes.currentSuffix)) {
                targetClass = currentElementClass;
                break;
              }
            }
          }

          const listTargetElement = this.popoutList.querySelector(`.${targetClass}`);

          if (listTargetElement) {
            listTargetElement.classList.remove(`${targetClass}`);
            evt.currentTarget.parentElement.classList.add(`${targetClass}`);
          }

          const targetAttribute = this.popoutList.querySelector(`[${selectors.ariaCurrent}]`);

          if (targetAttribute && targetAttribute.hasAttribute(`${selectors.ariaCurrent}`)) {
            targetAttribute.removeAttribute(`${selectors.ariaCurrent}`);
            evt.currentTarget.setAttribute(`${selectors.ariaCurrent}`, 'true');
          }

          if (attrValue !== '') {
            this.popoutText.textContent = attrValue;
          }

          this.popupToggleFocusout(evt);
          this.popupListFocusout(evt);
        } else {
          this._submitForm(attrValue);
        }
      }
    },

    updatePopout() {
      const targetElement = this.popoutList.querySelector(`[${selectors.dataValue}="${this.popoutInput.value}"]`);
      if (targetElement) {
        targetElement.dispatchEvent(
          new CustomEvent('theme:popout:click', {
            cancelable: true,
            bubbles: true,
            detail: {
              preventTrigger: true,
            },
          }),
        );

        if (!targetElement.parentElement.nextSibling) {
          this.popout.classList.add(classes.popoutAlternative);
        }
      } else {
        this.popout.classList.add(classes.popoutAlternative);
      }
    },

    popoutKeyup(evt) {
      if (evt.which !== slate.utils.keyboardKeys.ESCAPE) {
        return;
      }
      this._hideList();
      this.popoutToggle.focus();
    },

    bodyClick(evt) {
      const isOption = this.popout.contains(evt.target);
      const isVisible = this.popoutList.classList.contains(classes.listVisible);

      if (isVisible && !isOption) {
        this._hideList();
      }
    },

    _connectToggle() {
      this.popoutToggle.addEventListener('click', this.popupToggleClickEvent);
    },

    _connectOptions() {
      if (this.popoutOptions.length) {
        this.popoutOptions.forEach((element) => {
          element.addEventListener('theme:popout:click', this.popupOptionsClickEvent);
          element.addEventListener('click', this._connectOptionsDispatchEvent);
        });
      }
    },

    _connectOptionsDispatch(evt) {
      const event = new CustomEvent('theme:popout:click', {
        cancelable: true,
        bubbles: true,
        detail: {
          preventTrigger: false,
        },
      });

      if (!evt.target.dispatchEvent(event)) {
        evt.preventDefault();
      }
    },

    _onFocusOut() {
      this.popoutToggle.addEventListener('focusout', this.popupToggleFocusoutEvent);
      this.popoutList.addEventListener('focusout', this.popupListFocusoutEvent);
      this.popout.addEventListener('keyup', this.popoutKeyupEvent);

      document.body.addEventListener('click', this.bodyClick.bind(this));
    },

    _submitForm() {
      const form = this.popout.closest(selectors.form);
      if (form) {
        form.submit();
      }
    },

    _hideList() {
      this.popoutList.classList.remove(classes.listVisible);
      this.popoutToggle.setAttribute(selectors.ariaExpanded, false);
    },
  });

  return Popout;
})();

PaloAlto.NavSearch = {
  selectors: {
    body: 'body',
    header: '[data-site-header]',
    search: '[data-nav-search]',
    searchOpen: '[data-nav-search-open]',
    searchClose: '[data-nav-search-close]',
    searchForm: '[data-nav-search-form]',
    searchContainer: '[data-nav-search-container]',
    searchScroller: '[data-nav-search-scroller]',
    searchResultsContainer: '[data-nav-search-results]',
    searchInput: '[data-nav-search-input]',
    popularSearchLink: '[data-popular-search-link]',
    productTemplate: '[product-grid-item-template]',
    productsWrapper: '[data-products-wrap]',
    noresultTemplate: '[noresult-item-template]',
    resultsPagination: '[data-results-pagination]',
  },
  classes: {
    pushUp: 'push-up',
    cartDrawerOpen: 'js-drawer-open-cart',
    drawerOpen: 'js-drawer-open',
    isSearching: 'is-searching',
    isSearchVisible: 'is-search-visible',
    navSearchIsVisible: 'nav-search--is-visible',
    loading: 'loading',
    isPaginationVisible: 'is-pagination-visible',
  },
  init: function() {
    this.namespace = '.search';
    this.productTemplate = document.querySelector(this.selectors.productTemplate).innerHTML;
    this.noresultTemplate = document.querySelector(this.selectors.noresultTemplate).innerHTML;
    this.searchContainer = document.querySelector(this.selectors.search);
    this.result = null;
    this.openSearchTimeout = 0;

    this.initListeners();
  },
  initListeners: function() {
    const instance = this;

    $(this.selectors.searchForm).on('keyup', this.selectors.searchInput, PaloAlto.debounce(function(e) {
      let query = $(this).val();

      if (query.length > 1 && e.keyCode !== slate.utils.keyboardKeys.ENTER) {
        $(instance.selectors.searchContainer).addClass([instance.classes.isSearching, instance.classes.pushUp]);
        instance.fetchProductSuggestions(query);
      }
    }, 300));

    $(this.selectors.search).on('keyup', function(e) {
      if (e.keyCode === slate.utils.keyboardKeys.ESCAPE) {
        e.stopImmediatePropagation();
        instance.close();
      }
    });

    $(this.selectors.searchOpen).on('click', function(e) {
      e.preventDefault();
      instance.open();
    });

    $(this.selectors.searchClose).on('click', function(e) {
      e.preventDefault();
      instance.close();
    });

    $(this.selectors.popularSearchLink).on('click', function(e) {
      e.preventDefault();
      const searchText = $(this).text();
      $(instance.selectors.searchInput).val(searchText);
      window.location.href = `${theme.routes.search_url}?type=product&q=${searchText}&options[prefix]=last`;
    });
  },
  open: function() {
    const instance = this;
    const isNavDrawerOpen = $(this.selectors.body).hasClass(this.classes.drawerOpen);
    const isCartDrawerOpen = $(this.selectors.body).hasClass(this.classes.cartDrawerOpen);

    if (isNavDrawerOpen || isCartDrawerOpen) {
      PaloAlto.Drawer.close();

      if (this.openSearchTimeout) {
        clearTimeout(this.openSearchTimeout);
      }
      this.openSearchTimeout = setTimeout(openSearch, 400);
    } else {
      openSearch();
    }

    function openSearch() {
      const scrollableElement = document.querySelector(instance.selectors.searchScroller);

      $(instance.selectors.header).addClass(instance.classes.isSearchVisible);
      $(instance.selectors.search).addClass(instance.classes.navSearchIsVisible);

      document.dispatchEvent(new CustomEvent('theme:scroll:lock', {bubbles: true, detail: scrollableElement}));

      setTimeout(function() {
        slate.a11y.trapFocus({
          container: instance.searchContainer,
          elementToFocus: $(instance.selectors.searchInput),
        });
        $(instance.selectors.searchInput).focus().select();
      }, 100);
    }
  },
  close: function() {
    const isSearchVisible = $(this.selectors.header).hasClass(this.classes.isSearchVisible);

    if (!isSearchVisible) { return; }

    const instance = this;

    this.reset();

    slate.a11y.removeTrapFocus({
      container: instance.searchContainer,
    });

    $(this.selectors.header).removeClass(this.classes.isSearchVisible);
    $(this.selectors.search).removeClass(this.classes.navSearchIsVisible);
    $(this.selectors.searchOpen).trigger('focus');

    setTimeout(() => {
      document.dispatchEvent(new CustomEvent('theme:scroll:unlock', {bubbles: true}));
    }, 250);
  },
  reset: function() {
    $(this.selectors.searchForm)[0].reset();
    $(this.selectors.productsWrapper).empty();
    $(this.selectors.searchContainer).removeClass([this.classes.isSearching, this.classes.pushUp]);
    $(this.selectors.searchResultsContainer).removeClass(this.classes.isPaginationVisible);
  },
  fetchProductSuggestions: function(terms) {
    const instance = this;

    fetch(`/search/suggest.json?q=${encodeURIComponent(terms)}&resources[type]=product&resources[limit]=10&resources[options][unavailable_products]=last`)
      .then(this.handleErrors)
      .then((response) => response.json())
      .then((response) => {
        this.result = response.resources.results;

        return this.fetchProducts(this.result.products);
      })
      .then((response) => {
        $(this.selectors.productsWrapper).empty();
        $(this.selectors.searchResultsContainer).removeClass(this.classes.isPaginationVisible);

        if (response === '') {
          this.injectHTML($(this.selectors.productsWrapper)[0], this.renderNoResult());
        } else {
          this.injectHTML($(this.selectors.productsWrapper)[0], response);

          if (this.result.products.length > 9) {
            $(`${this.selectors.resultsPagination} > a`).attr('href', `${theme.routes.search_url}?type=product&q=${terms}&options[prefix]=last`);
            $(this.selectors.searchResultsContainer).addClass(this.classes.isPaginationVisible);
          }

          slate.a11y.removeTrapFocus({
            container: instance.searchContainer,
          });
          slate.a11y.trapFocus({
            container: instance.searchContainer,
            elementToFocus: $(instance.selectors.searchInput),
          });
        }

        $(this.selectors.searchContainer).removeClass(this.classes.isSearching);
      })
      .catch((e) => {
        console.error(e);
      });
  },
  injectHTML(target, pageHTML) {
    target.innerHTML += pageHTML;
  },
  renderNoResult() {
    const text = theme.strings.no_results;

    const updateValues = {
      text,
    };

    return Sqrl.render(this.noresultTemplate, {item: updateValues});
  },
  fetchProducts(products) {
    const promises = [];
    products.forEach((product) => {
      // because of a translation bug in the predictive search API
      // we need to fetch the product JSON from the handle
      promises.push(
        PaloAlto.fetchProduct(product.handle).then((productJSON) => {
          const formatted = PaloAlto.formatPrices(productJSON);
          return this.renderProduct(formatted);
        }),
      );
    });

    return Promise.all(promises).then((result) => {
      let str = '';
      result.forEach((render) => {
        str += render;
      });
      return str;
    });
  },
  renderProduct(product) {
    const stripHtmlRegex = /(<([^>]+)>)/gi;
    const title = product.title.replace(stripHtmlRegex, '');
    let media = null;
    let image = '';

    if (product.media !== undefined) {
      media = product.media[0];
    }

    if (media) {
      let layout = false;

      if (theme.settings.gridImageSize == 'contain') {
        layout = media.preview_image.aspect_ratio > theme.settings.gridImageAspectRatio ? 'landscape' : 'portrait';
      }

      image = {
        thumb: PaloAlto.BgSet.render(getSizedImageUrl(media.preview_image.src, '2048x'), media.preview_image.aspect_ratio),
        aspectRatio: media.preview_image.aspect_ratio,
        layout: layout,
      };
    } else {
      image = {
        thumb: theme.assets.no_image,
        alt: '',
        aspectRatio: 1,
      };
    }

    const updateValues = {
      ...product,
      title,
      image,
    };

    return Sqrl.render(this.productTemplate, {product: updateValues});
  },
  handleErrors(response) {
    if (!response.ok) {
      return response.json().then(function(json) {
        const e = new PaloAlto.FetchError({
          status: response.statusText,
          headers: response.headers,
          json: json,
        });
        throw e;
      });
    }
    return response;
  },
};

function singles(frame, wrappers) {
  // sets the height of any frame passed in with the
  // tallest preventOverflowContent as well as any image in that frame
  let padding = 0;
  let tallest = 0;

  wrappers.forEach((wrap) => {
    if (wrap.offsetHeight > tallest) {
      const getMarginTop = parseInt(window.getComputedStyle(wrap).marginTop);
      const getMarginBottom = parseInt(window.getComputedStyle(wrap).marginBottom);
      const getMargin = getMarginTop + getMarginBottom;

      if (getMargin > padding) {
        padding = getMargin;
      }

      tallest = wrap.offsetHeight;
    }
  });
  const images = frame.querySelectorAll('[data-overflow-background]');
  const frames = [frame, ...images];
  frames.forEach((el) => {
    el.style.setProperty('min-height', `calc(${tallest + padding}px + var(--header-height)`);
  });
}

function doubles(section) {
  if (window.innerWidth < window.theme.sizes.small) {
    // if we are below the small breakpoint, the double section acts like two independent
    // single frames
    let singleFrames = section.querySelectorAll('[data-overflow-frame]');
    singleFrames.forEach((singleframe) => {
      const wrappers = singleframe.querySelectorAll('[data-overflow-content]');
      singles(singleframe, wrappers);
    });
    return;
  }

  const padding = parseInt(getComputedStyle(section).getPropertyValue('--outer')) * 2;
  let tallest = 0;

  const frames = section.querySelectorAll('[data-overflow-frame]');
  const contentWrappers = section.querySelectorAll('[data-overflow-content]');
  contentWrappers.forEach((content) => {
    if (content.offsetHeight > tallest) {
      tallest = content.offsetHeight;
    }
  });
  const images = section.querySelectorAll('[data-overflow-background]');
  let applySizes = [...frames, ...images];
  applySizes.forEach((el) => {
    el.style.setProperty('min-height', `${tallest}px`);
  });
  section.style.setProperty('min-height', `${tallest + padding}px`);
}

function preventOverflow(container) {
  const singleFrames = container.querySelectorAll('[data-overflow-container]');
  if (singleFrames) {
    singleFrames.forEach((frame) => {
      const wrappers = frame.querySelectorAll('[data-overflow-content]');
      singles(frame, wrappers);
      document.addEventListener('theme:resize', () => {
        singles(frame, wrappers);
      });
    });
  }

  const doubleSections = container.querySelectorAll('[data-overflow-wrapper]');
  if (doubleSections) {
    doubleSections.forEach((section) => {
      doubles(section);
      document.addEventListener('theme:resize', () => {
        doubles(section);
      });
    });
  }
}

PaloAlto.ProductAddForm = (function() {
  const selectors = {
    product: '[data-product]',
    productForm: '[data-product-form]',
    addToCart: '[data-add-to-cart]',
    addToCartText: '[data-add-to-cart-text]',
    comparePrice: '[data-compare-price]',
    formWrapper: '[data-form-wrapper]',
    originalSelectorId: '[data-product-select]',
    priceWrapper: '[data-price-wrapper]',
    priceOffWrap: '[data-price-off]',
    priceOffType: '[data-price-off-type]',
    priceOffAmount: '[data-price-off-amount]',
    productMediaSlider: '[data-product-single-media-slider]',
    productJson: '[data-product-json]',
    productPrice: '[data-product-price]',
    unitPrice: '[data-product-unit-price]',
    unitBase: '[data-product-base]',
    unitWrapper: '[data-product-unit]',
    preOrderTag: '_preorder',
    dataEnableHistoryState: 'data-enable-history-state',
    subPrices: '[data-subscription-watch-price]',
    subSelectors: '[data-subscription-selectors]',
    subsToggle: '[data-toggles-group]',
    subsChild: 'data-group-toggle',
    subDescription: '[data-plan-description]',
    remainingCount: '[data-remaining-count]',
    remainingMax: '[data-remaining-max]',
    remainingMaxAttr: 'data-remaining-max',
    remainingWrapper: '[data-remaining-wrapper]',
    remainingJSON: '[data-product-remaining-json]',
    idInput: '[name="id"]',
    notificationForm: '[data-notification-form]',
    storeAvailabilityContainer: '[data-store-availability-container]',
    upsellButton: '[data-upsell-btn]',
  };

  const classes = {
    hidden: 'hidden',
    variantSoldOut: 'variant--soldout',
    variantUnavailable: 'variant--unavailabe',
    productPriceSale: 'product__price--sale',
    notificationFormHidden: 'product__notification--hidden',
    remainingLow: 'count-is-low',
    remainingIn: 'count-is-in',
    remainingOut: 'count-is-out',
    remainingUnavailable: 'count-is-unavailable',
  };

  function ProductAddForm(container) {
    this.container = container;
    this.product = this.container.querySelector(selectors.product);
    this.productForm = this.container.querySelector(selectors.productForm);

    // Stop parsing if we don't have the product
    if (!this.product || !this.productForm) {
      const counter = new PaloAlto.QuantityCounter(this.container);
      counter.init();
      return;
    }

    this.storeAvailabilityContainer = this.container.querySelector(selectors.storeAvailabilityContainer);
    this.enableHistoryState = this.container.getAttribute(selectors.dataEnableHistoryState) === 'true';
    this.hasUnitPricing = this.container.querySelector(selectors.unitWrapper);
    this.subSelectors = this.container.querySelector(selectors.subSelectors);
    this.subPrices = this.container.querySelector(selectors.subPrices);

    this.priceOffWrap = this.container.querySelector(selectors.priceOffWrap);
    this.priceOffAmount = this.container.querySelector(selectors.priceOffAmount);
    this.priceOffType = this.container.querySelector(selectors.priceOffType);
    this.planDecription = this.container.querySelector(selectors.subDescription);

    this.sellout = null;

    this.remainingWrapper = this.container.querySelector(selectors.remainingWrapper);
    if (this.remainingWrapper) {
      const remainingMaxWrap = this.container.querySelector(selectors.remainingMax);
      this.remainingMaxInt = parseInt(remainingMaxWrap.getAttribute(selectors.remainingMaxAttr), 10);
      this.remainingCount = this.container.querySelector(selectors.remainingCount);
      this.remainingJSONWrapper = this.container.querySelector(selectors.remainingJSON);
      this.remainingJSON = null;
      if (this.remainingJSONWrapper && this.remainingJSONWrapper.innerHTML !== '') {
        this.remainingJSON = JSON.parse(this.remainingJSONWrapper.innerHTML);
      } else {
        console.warn('Missing product quantity JSON');
      }
    }

    if (this.storeAvailabilityContainer) {
      this.storeAvailability = new PaloAlto.StoreAvailability(this.storeAvailabilityContainer);
    }

    const counter = new PaloAlto.QuantityCounter(this.container);
    counter.init();

    this.init();
  }

  ProductAddForm.prototype = $.extend({}, ProductAddForm.prototype, {
    init() {
      let productJSON = null;
      const productElemJSON = this.container.querySelector(selectors.productJson);

      if (productElemJSON) {
        productJSON = productElemJSON.innerHTML;
      }
      if (productJSON) {
        this.productJSON = JSON.parse(productJSON);
        this.linkForm();
        this.sellout = new PaloAlto.SelloutVariants(this.container, this.productJSON);
      } else {
        console.error('Missing product JSON');
      }
    },

    destroy() {
      this.productForm.destroy();
    },

    linkForm() {
      this.productForm = new PaloAlto.ProductForm(this.productForm, this.productJSON, {
        onOptionChange: this.onOptionChange.bind(this),
        onPlanChange: this.onPlanChange.bind(this),
      });
      this.pushState(this.productForm.getFormState());
      this.subsToggleListeners();
    },

    onOptionChange(evt) {
      this.pushState(evt.dataset);
      this.updateProductImage(evt);
    },

    onPlanChange(evt) {
      if (this.subPrices) {
        this.pushState(evt.dataset);
      }
    },

    pushState(formState) {
      this.productState = this.setProductState(formState);
      this.updateAddToCartState(formState);
      this.updateProductPrices(formState);
      this.updateSaleText(formState);
      this.updateSubscriptionText(formState);
      this.fireHookEvent(formState);
      this.updateRemaining(formState);
      this.sellout?.update(formState);
      if (this.enableHistoryState) {
        this.updateHistoryState(formState);
      }

      if (this.storeAvailability) {
        this.storeAvailability.updateContent(
          formState.variant.id,
          this.productForm.product.title,
        );
      }
    },

    updateAddToCartState(formState) {
      const variant = formState.variant;
      const priceWrapper = this.container.querySelectorAll(selectors.priceWrapper);
      const addToCart = this.container.querySelectorAll(selectors.addToCart);
      const addToCartText = this.container.querySelectorAll(selectors.addToCartText);
      const formWrapper = this.container.querySelectorAll(selectors.formWrapper);
      const notificationForm = this.container.querySelectorAll(selectors.notificationForm);
      let addText = theme.strings.add_to_cart;

      if (this.productJSON.tags.includes(selectors.preOrderTag)) {
        addText = theme.strings.preorder;
      }

      if (priceWrapper.length && variant) {
        priceWrapper.forEach((element) => {
          element.classList.remove(classes.hidden);
        });
      }

      if (addToCart.length) {
        addToCart.forEach((element) => {
          // Skip the upsell "add to cart" button
          if (element.matches(selectors.upsellButton)) { return; }

          if (variant) {
            if (variant.available) {
              element.disabled = false;
            } else {
              element.disabled = true;
            }
          } else {
            element.disabled = true;
          }
        });
      }

      if (addToCartText.length) {
        addToCartText.forEach((element) => {
          if (variant) {
            if (variant.available) {
              element.innerHTML = addText;
            } else {
              element.innerHTML = theme.strings.sold_out;
            }
          } else {
            element.innerHTML = theme.strings.unavailable;
          }
        });
      }

      if (formWrapper.length) {
        formWrapper.forEach((element) => {
          if (variant) {
            if (variant.available) {
              element.classList.remove(classes.variantSoldOut, classes.variantUnavailable);
            } else {
              element.classList.add(classes.variantSoldOut);
              element.classList.remove(classes.variantUnavailable);
            }
            const formSelect = element.querySelector(selectors.originalSelectorId);
            if (formSelect) {
              formSelect.value = variant.id;
            }
          } else {
            element.classList.add(classes.variantUnavailable);
            element.classList.remove(classes.variantSoldOut);
          }
        });
      }

      if (notificationForm.length) {
        notificationForm.forEach((element) => {
          if (variant) {
            if (variant.available) {
              element.classList.add(classes.notificationFormHidden);
            } else {
              element.classList.remove(classes.notificationFormHidden);
            }
          } else {
            element.classList.remove(classes.notificationFormHidden);
          }
        });
      }
    },

    updateHistoryState(formState) {
      const variant = formState.variant;
      const plan = formState.plan;
      const location = window.location.href;
      if (variant && location.includes('/product')) {
        const url = new window.URL(location);
        const params = url.searchParams;
        params.set('variant', variant.id);
        if (plan && plan.detail && plan.detail.id && this.productState.hasPlan) {
          params.set('selling_plan', plan.detail.id);
        } else {
          params.delete('selling_plan');
        }
        url.search = params.toString();
        const urlString = url.toString();
        window.history.replaceState({path: urlString}, '', urlString);
      }
    },

    updateRemaining(formState) {
      const variant = formState.variant;
      if (variant && this.remainingWrapper && this.remainingJSON && this.remainingCount) {
        const newQuantity = this.remainingJSON[variant.id];
        if (newQuantity && newQuantity <= this.remainingMaxInt && newQuantity > 0) {
          this.remainingWrapper.classList.remove(classes.remainingIn, classes.remainingOut, classes.remainingUnavailable);
          this.remainingWrapper.classList.add(classes.remainingLow);
          this.remainingCount.innerHTML = newQuantity;
        } else if (this.productState.soldOut) {
          this.remainingWrapper.classList.remove(classes.remainingLow, classes.remainingIn, classes.remainingUnavailable);
          this.remainingWrapper.classList.add(classes.remainingOut);
        } else if (this.productState.available) {
          this.remainingWrapper.classList.remove(classes.remainingLow, classes.remainingOut, classes.remainingUnavailable);
          this.remainingWrapper.classList.add(classes.remainingIn);
        }
      } else if (this.remainingWrapper) {
        this.remainingWrapper.classList.remove(classes.remainingIn, classes.remainingOut, classes.remainingLow);
        this.remainingWrapper.classList.add(classes.remainingUnavailable);
      }
    },

    getBaseUnit(variant) {
      return variant.unit_price_measurement.reference_value === 1
        ? variant.unit_price_measurement.reference_unit
        : variant.unit_price_measurement.reference_value + variant.unit_price_measurement.reference_unit;
    },

    subsToggleListeners() {
      const toggles = this.container.querySelectorAll(selectors.subsToggle);

      toggles.forEach((toggle) => {
        toggle.addEventListener(
          'change',
          function(e) {
            const val = e.target.value.toString();
            const selected = this.container.querySelector(`[${selectors.subsChild}="${val}"]`);
            const groups = this.container.querySelectorAll(`[${selectors.subsChild}]`);
            if (selected) {
              selected.classList.remove(classes.hidden);
              const first = selected.querySelector('[name="selling_plan"]');
              first.checked = true;
              first.dispatchEvent(new Event('change'));
            }
            groups.forEach((group) => {
              if (group !== selected) {
                group.classList.add(classes.hidden);
                const plans = group.querySelectorAll('[name="selling_plan"]');
                plans.forEach((plan) => {
                  plan.checked = false;
                  plan.dispatchEvent(new Event('change'));
                });
              }
            });
          }.bind(this),
        );
      });
    },

    updateSaleText(formState) {
      if (this.productState.planSale) {
        this.updateSaleTextSubscription(formState);
      } else if (this.productState.onSale) {
        this.updateSaleTextStandard(formState);
      } else if (this.priceOffWrap) {
        this.priceOffWrap.classList.add(classes.hidden);
      }
    },

    updateSaleTextStandard(formState) {
      if (!this.priceOffType) { return; }
      this.priceOffType.innerHTML = window.theme.strings.sale_badge_text || 'sale';
      const variant = formState.variant;
      if (window.theme.settings.savingBadgeType && window.theme.settings.savingBadgeType === 'percentage') {
        const discountFloat = (variant.compare_at_price - variant.price) / variant.compare_at_price;
        const discountInt = Math.floor(discountFloat * 100);
        this.priceOffAmount.innerHTML = `${discountInt}%`;
      } else {
        const discount = variant.compare_at_price - variant.price;
        this.priceOffAmount.innerHTML = slate.Currency.formatMoney(discount, theme.moneyFormat);
      }
      this.priceOffWrap.classList.remove(classes.hidden);
    },

    updateSaleTextSubscription(formState) {
      this.priceOffType.innerHTML = window.theme.strings.subscription || 'subscripton';
      const variant = formState.variant;
      const adjustment = formState.plan.detail.price_adjustments[0];
      const discount = adjustment.value;
      if (adjustment && adjustment.value_type === 'percentage') {
        this.priceOffAmount.innerHTML = `${discount}%`;
      } else if (adjustment && adjustment.value_type === 'price') {
        this.priceOffAmount.innerHTML = slate.Currency.formatMoney(variant.price - adjustment.value, theme.moneyFormat);
      } else {
        this.priceOffAmount.innerHTML = slate.Currency.formatMoney(discount, theme.moneyFormat);
      }
      this.priceOffWrap.classList.remove(classes.hidden);
    },

    updateSubscriptionText(formState) {
      if (formState.plan && this.planDecription && formState.plan.detail.description !== null) {
        this.planDecription.innerHTML = formState.plan.detail.description;
        this.planDecription.classList.remove(classes.hidden);
      } else if (this.planDecription) {
        this.planDecription.classList.add(classes.hidden);
      }
    },

    updateProductPrices(formState) {
      const variant = formState.variant;
      const plan = formState.plan;
      const priceWrappers = this.container.querySelectorAll(selectors.priceWrapper);

      priceWrappers.forEach((wrap) => {
        const comparePriceEl = wrap.querySelector(selectors.comparePrice);
        const productPriceEl = wrap.querySelector(selectors.productPrice);

        let comparePrice = '';
        let price = '';

        if (this.productState.available) {
          comparePrice = variant.compare_at_price;
          price = variant.price;
        }

        if (this.productState.hasPlan) {
          price = plan.allocation.price;
        }

        if (this.productState.planSale) {
          comparePrice = plan.allocation.compare_at_price;
          price = plan.allocation.price;
        }

        if (comparePriceEl) {
          if (this.productState.onSale || this.productState.planSale) {
            comparePriceEl.classList.remove(classes.hidden);
            productPriceEl.classList.add(classes.productPriceSale);
          } else {
            comparePriceEl.classList.add(classes.hidden);
            productPriceEl.classList.remove(classes.productPriceSale);
          }
          comparePriceEl.innerHTML = slate.Currency.formatMoney(comparePrice, theme.moneyFormat);
        }

        productPriceEl.innerHTML = price === 0 ? window.theme.strings.free : slate.Currency.formatMoney(price, theme.moneyFormat);
      });

      if (this.hasUnitPricing) {
        this.updateProductUnits(formState);
      }
    },

    updateProductUnits(formState) {
      const variant = formState.variant;
      const plan = formState.plan;
      let unitPrice = null;

      if (variant && variant.unit_price) {
        unitPrice = variant.unit_price;
      }
      if (plan && plan.allocation && plan.allocation.unit_price) {
        unitPrice = plan.allocation.unit_price;
      }

      if (unitPrice) {
        const base = this.getBaseUnit(variant);
        const formattedPrice = unitPrice === 0 ? window.theme.strings.free : slate.Currency.formatMoney(unitPrice, theme.moneyFormat);
        this.container.querySelector(selectors.unitPrice).innerHTML = formattedPrice;
        this.container.querySelector(selectors.unitBase).innerHTML = base;
        PaloAlto.Element.show(this.container.querySelector(selectors.unitWrapper));
      } else {
        PaloAlto.Element.hide(this.container.querySelector(selectors.unitWrapper));
      }
    },

    fireHookEvent(formState) {
      const variant = formState.variant;

      // Hook for product variant change event
      this.container.dispatchEvent(
        new CustomEvent('theme:variant:change', {
          detail: {
            variant: variant,
          },
          bubbles: true,
        }),
      );
    },

    /**
     * Tracks aspects of the product state that are relevant to UI updates
     * @param {object} evt - variant change event
     * @return {object} productState - represents state of variant + plans
     *  productState.available - current variant and selling plan options result in valid offer
     *  productState.soldOut - variant is sold out
     *  productState.onSale - variant is on sale
     *  productState.showUnitPrice - variant has unit price
     *  productState.requiresPlan - all the product variants requires a selling plan
     *  productState.hasPlan - there is a valid selling plan
     *  productState.planSale - plan has a discount to show next to price
     *  productState.planPerDelivery - plan price does not equal per_delivery_price - a prepaid subscribtion
     */
    setProductState(dataset) {
      const variant = dataset.variant;
      const plan = dataset.plan;

      const productState = {
        available: true,
        soldOut: false,
        onSale: false,
        showUnitPrice: false,
        requiresPlan: false,
        hasPlan: false,
        planPerDelivery: false,
        planSale: false,
      };

      if (!variant || (variant.requires_selling_plan && !plan)) {
        productState.available = false;
      } else {
        if (!variant.available) {
          productState.soldOut = true;
        }

        if (variant.compare_at_price > variant.price) {
          productState.onSale = true;
        }

        if (variant.unit_price) {
          productState.showUnitPrice = true;
        }

        if (this.product && this.product.requires_selling_plan) {
          productState.requiresPlan = true;
        }

        if (plan && this.subPrices) {
          productState.hasPlan = true;
          if (plan.allocation.per_delivery_price !== plan.allocation.price) {
            productState.planPerDelivery = true;
          }
          if (variant.price > plan.allocation.price) {
            productState.planSale = true;
          }
        }
      }
      return productState;
    },

    updateProductImage(evt) {
      const variant = evt.dataset.variant;

      if (variant) {
        // Update variant image, if one is set
        const variantMediaId = variant.featured_media ? variant.featured_media.id : '';
        const imgSlider = this.container.querySelector(selectors.productMediaSlider);
        const flkty = Flickity.data(imgSlider);

        // Activate image slide in mobile view
        if (flkty && flkty.isActive) {
          const variantSlide = imgSlider.querySelector(`[data-id="${variantMediaId}"]`);

          if (variantSlide) {
            const slideIndex = parseInt([...variantSlide.parentNode.children].indexOf(variantSlide));
            flkty.select(slideIndex);
          }
        }
      }
    },
  });

  return ProductAddForm;
})();

PaloAlto.SelloutVariants = (function() {
  const selectors = {
    form: '[data-product-form]',
    optionPosition: '[data-option-position]',
    optionInput: '[name^="options"], [data-popout-option]',
  };

  const classes = {
    soldOut: 'sold-out',
    unavailable: 'unavailable',
  };

  const attributes = {
    optionPosition: 'data-option-position',
    selectOptionValue: 'data-value',
  };

  /**
   * Variant Sellout Precrime Click Preview
   * I think of this like the precrime machine in Minority report.  It gives a preview
   * of every possible click action, given the current form state.  The logic is:
   *
   * for each clickable name=options[] variant selection element
   * find the value of the form if the element were clicked
   * lookup the variant with those value in the product json
   * clear the classes, add .unavailable if it's not found,
   * and add .sold-out if it is out of stock
   *
   * Caveat: we rely on the option position so we don't need
   * to keep a complex map of keys and values.
   */

  function SelloutVariants(container, productJSON) {
    this.container = container;
    this.productJSON = productJSON;
    this.form = this.container.querySelector(selectors.form);
    this.formData = new FormData(this.form);
    this.optionElements = this.container.querySelectorAll(selectors.optionInput);

    if (this.productJSON && this.form) {
      this.init();
    }
  }

  SelloutVariants.prototype = $.extend({}, SelloutVariants.prototype, {
    init() {
      this.update();
    },

    update() {
      this.getCurrentState();

      this.optionElements.forEach((el) => {
        const val = el.value || el.getAttribute(attributes.selectOptionValue);
        const optionSelector = el.closest(selectors.optionPosition);

        if (!optionSelector) {
          return;
        }

        const positionString = optionSelector.getAttribute(attributes.optionPosition);
        // subtract one because option.position in liquid does not count form zero, but JS arrays do
        const position = parseInt(positionString, 10) - 1;

        let newVals = [...this.selections];
        newVals[position] = val;

        const found = this.productJSON.variants.find((element) => {
          // only return true if every option matches our hypothetical selection
          let perfectMatch = true;
          for (let index = 0; index < newVals.length; index++) {
            if (element.options[index] !== newVals[index]) {
              perfectMatch = false;
            }
          }
          return perfectMatch;
        });

        el.classList.remove(classes.soldOut, classes.unavailable);
        if (typeof found === 'undefined') {
          el.classList.add(classes.unavailable);
        } else if (found?.available === false) {
          el.classList.add(classes.soldOut);
        }
      });
    },

    getCurrentState() {
      this.formData = new FormData(this.form);
      this.selections = [];
      for (var value of this.formData.entries()) {
        if (value[0].includes('options[')) {
          // push the current state of the form, dont worry about the group name
          // we will be using the array position instead of the name to match values
          this.selections.push(value[1]);
        }
      }
    },
  });

  return SelloutVariants;
})();

PaloAlto.ProductVideo = (function() {
  const hosts = {
    html5: 'html5',
    youtube: 'youtube',
    vimeo: 'vimeo',
  };

  const selectors = {
    deferredMedia: '[data-deferred-media]',
    deferredMediaButton: '[data-deferred-media-button]',
    productMediaWrapper: '[data-product-single-media-wrapper]',
    productMediaSlider: '[data-product-single-media-slider]',
    mediaContainer: '[data-video]',
    mediaHidden: '.media--hidden',
    mediaId: 'data-media-id',
    dataAutoplayVideo: 'data-autoplay-video',
  };

  const classes = {
    mediaHidden: 'media--hidden',
    isSelected: 'is-selected',
  };

  const attributes = {
    loaded: 'loaded',
    sectionId: 'data-section-id',
  };

  function ProductVideo(container) {
    this.container = container;
    this.id = container.getAttribute(attributes.sectionId);
    this.autoplayVideo = this.container.getAttribute(selectors.dataAutoplayVideo) === 'true';
    this.players = {};
    this.init();
  }

  ProductVideo.prototype = $.extend({}, ProductVideo.prototype, {

    init: function() {
      const mediaContainers = this.container.querySelectorAll(selectors.mediaContainer);

      mediaContainers.forEach((mediaContainer) => {
        const deferredMediaButton = mediaContainer.querySelector(selectors.deferredMediaButton);

        if (deferredMediaButton) {
          deferredMediaButton.addEventListener('click', this.loadContent.bind(this, mediaContainer));
        }

        if (this.autoplayVideo) {
          this.loadContent(mediaContainer);
        }
      });
    },

    loadContent: function(mediaContainer) {
      if (mediaContainer.querySelector(selectors.deferredMedia).getAttribute(attributes.loaded)) {
        return;
      }

      const content = document.createElement('div');
      content.appendChild(mediaContainer.querySelector('template').content.firstElementChild.cloneNode(true));
      const mediaId = mediaContainer.dataset.mediaId;
      const element = content.querySelector('video, iframe');
      const host = this.hostFromVideoElement(element);
      const deferredMedia = mediaContainer.querySelector(selectors.deferredMedia);
      deferredMedia.appendChild(element);
      deferredMedia.setAttribute('loaded', true);

      this.players[mediaId] = {
        mediaId: mediaId,
        sectionId: this.id,
        container: mediaContainer,
        element: element,
        host: host,
        ready: () => {
          this.createPlayer(mediaId);
        },
      };

      const video = this.players[mediaId];

      switch (video.host) {
        case hosts.html5:
          this.loadVideo(video, hosts.html5);
          break;
        case hosts.vimeo:
          if (window.isVimeoAPILoaded) {
            this.loadVideo(video, hosts.vimeo);
          } else {
            loadScript({url: 'https://player.vimeo.com/api/player.js'}).then(() => this.loadVideo(video, hosts.vimeo));
          }
          break;
        case hosts.youtube:
          if (window.isYoutubeAPILoaded) {
            this.loadVideo(video, hosts.youtube);
          } else {
            loadScript({url: 'https://www.youtube.com/iframe_api'}).then(() => this.loadVideo(video, hosts.youtube));
          }
          break;
      }
    },

    hostFromVideoElement: function(video) {
      if (video.tagName === 'VIDEO') {
        return hosts.html5;
      }

      if (video.tagName === 'IFRAME') {
        if (/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(video.src)) {
          return hosts.youtube;
        } else if (video.src.includes('vimeo.com')) {
          return hosts.vimeo;
        }
      }

      return null;
    },

    loadVideo: function(video, host) {
      if (video.host === host) {
        video.ready();
      }
    },

    createPlayer: function(mediaId) {
      const video = this.players[mediaId];

      video.container.addEventListener('theme:media:play', () => this.pauseOtherMedia(mediaId));
      video.container.addEventListener('theme:media:visible', (event) => this.onVisible(event));
      video.container.addEventListener('theme:media:hidden', (event) => this.onHidden(event));
      video.container.addEventListener('xrLaunch', (event) => this.onHidden(event));

      if (this.autoplayVideo) {
        this.observeVideo(video, mediaId);
      }

      switch (video.host) {
        case hosts.html5:
          video.element.addEventListener('play', () => {
            video.container.dispatchEvent(new CustomEvent('theme:media:play'), {bubbles: true});
          });

          const playPromise = video.element.play();
          if (playPromise !== undefined) {
            playPromise.then(_ => {
              // Automatic playback started!
              // Show playing UI.
            })
              .catch(error => {
              // Auto-play was prevented
              // Show paused UI.
              });
          }

          break;
        case hosts.vimeo:
          this.players[mediaId].player = new Vimeo.Player(video.element);
          this.players[mediaId].player.play(); // Force video play on iOS
          video.container.dispatchEvent(new CustomEvent('theme:media:play'), {bubbles: true});

          window.isVimeoAPILoaded = true;

          break;
        case hosts.youtube:
          if (video.host == hosts.youtube && video.player) {
            return;
          }

          YT.ready(() => {
            const videoId = video.container.dataset.videoId;

            this.players[mediaId].player = new YT.Player(video.element, {
              videoId: videoId,
              events: {
                onReady: (event) => {
                  event.target.playVideo(); // Force video play on iOS
                  video.container.dispatchEvent(new CustomEvent('theme:media:play'), {bubbles: true});
                },
                onStateChange: (event) => {
                  // Playing
                  if (event.data == 1) {
                    video.container.dispatchEvent(new CustomEvent('theme:media:play'), {bubbles: true});
                  }

                  // Paused
                  if (event.data == 2) {
                    video.container.dispatchEvent(new CustomEvent('theme:media:pause'), {bubbles: true});
                  }
                },
              },
            });

            window.isYoutubeAPILoaded = true;
          });

          break;
      }
    },

    observeVideo: function(video, mediaId) {
      let observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            const outsideViewport = entry.intersectionRatio == 0;
            const isVisible = !video.element.closest(selectors.mediaHidden);

            if (outsideViewport) {
              this.pauseVideo(video);
            } else if (isVisible) {
              this.playVideo(video);
            }
          });
        },
        {threshold: 0},
      );
      observer.observe(video.element);
    },

    playVideo: function(video) {
      if (video.player && video.player.playVideo) {
        video.player.playVideo();
      } else if (video.element && video.element.play) {
        video.element.play();
      } else if (video.player && video.player.play) {
        video.player.play();
      }
      video.container.dispatchEvent(new CustomEvent('theme:media:play'), {bubbles: true});
    },

    pauseVideo: function(video) {
      if (video.player && video.player.pauseVideo) {
        video.player.pauseVideo();
      } else if (video.element && video.element.pause) {
        video.element.pause();
      } else if (video.player && video.player.pause) {
        video.player.pause();
      }
      video.container.dispatchEvent(new CustomEvent('theme:media:pause'), {bubbles: true});
    },

    onHidden: function(event) {
      if (typeof event.target.dataset.mediaId !== 'undefined') {
        const mediaId = event.target.dataset.mediaId;
        const video = this.players[mediaId];
        this.pauseVideo(video);
      }
    },

    onVisible: function(event) {
      if (typeof event.target.dataset.mediaId !== 'undefined') {
        const mediaId = event.target.dataset.mediaId;
        const video = this.players[mediaId];
        this.playVideo(video);
        this.pauseOtherMedia(mediaId);
      }
    },

    pauseOtherMedia: function(mediaId) {
      const currentMedia = `[${selectors.mediaId}="${mediaId}"]`;
      const otherMedia = document.querySelectorAll(`${selectors.productMediaWrapper}:not(${currentMedia})`);

      if (otherMedia.length) {
        otherMedia.forEach((media) => {
          media.dispatchEvent(new CustomEvent('theme:media:hidden'), {bubbles: true});
          media.classList.add(classes.mediaHidden);
        });
      }
    },
  });

  return ProductVideo;
})();

PaloAlto.ProductModel = (function() {
  let modelJsonSections = {};
  let models = {};
  let xrButtons = {};

  const selectors = {
    productMediaWrapper: '[data-product-single-media-wrapper]',
    mediaGroup: '[data-product-single-media-group]',
    productXr: '[data-shopify-xr]',
    mediaId: 'data-media-id',
    model3d: 'data-shopify-model3d-id',
    modelViewer: 'model-viewer',
    modelJson: '#ModelJson-',
    deferredMedia: '[data-deferred-media]',
    deferredMediaButton: '[data-deferred-media-button]',
  };
  const classes = {
    isLoading: 'is-loading',
    mediaHidden: 'media--hidden',
  };

  function init(mediaContainer, sectionId) {
    modelJsonSections[sectionId] = {
      loaded: false,
    };

    const deferredMediaButton = mediaContainer.querySelector(selectors.deferredMediaButton);

    if (deferredMediaButton) {
      deferredMediaButton.addEventListener('click', loadContent.bind(this, mediaContainer, sectionId));
    }
  }

  function loadContent(mediaContainer, sectionId) {
    if (mediaContainer.querySelector(selectors.deferredMedia).getAttribute('loaded')) {
      return;
    }

    mediaContainer.classList.add(classes.isLoading);
    const content = document.createElement('div');
    content.appendChild(mediaContainer.querySelector('template').content.firstElementChild.cloneNode(true));
    const modelViewerElement = content.querySelector('model-viewer');
    const deferredMedia = mediaContainer.querySelector(selectors.deferredMedia);
    deferredMedia.appendChild(modelViewerElement);
    deferredMedia.setAttribute('loaded', true);
    const mediaId = mediaContainer.dataset.mediaId;
    const modelId = modelViewerElement.dataset.modelId;
    const xrButton = mediaContainer.closest(selectors.mediaGroup).parentElement.querySelector(selectors.productXr);
    xrButtons[sectionId] = {
      element: xrButton,
      defaultId: modelId,
    };

    models[mediaId] = {
      modelId: modelId,
      mediaId: mediaId,
      sectionId: sectionId,
      container: mediaContainer,
      element: modelViewerElement,
    };

    if (!window.ShopifyXR) {
      window.Shopify.loadFeatures([
        {
          name: 'shopify-xr',
          version: '1.0',
          onLoad: setupShopifyXr,
        },
        {
          name: 'model-viewer-ui',
          version: '1.0',
          onLoad: setupModelViewerUi,
        },
      ]);
    } else {
      setupModelViewerUi();
    }
  }

  function setupShopifyXr(errors) {
    if (errors) {
      console.warn(errors);
      return;
    }
    if (!window.ShopifyXR) {
      document.addEventListener('shopify_xr_initialized', function() {
        setupShopifyXr();
      });
      return;
    }

    for (const sectionId in modelJsonSections) {
      if (modelJsonSections.hasOwnProperty(sectionId)) {
        const modelSection = modelJsonSections[sectionId];

        if (modelSection.loaded) {
          continue;
        }

        const modelJson = document.querySelector(`${selectors.modelJson}${sectionId}`);

        if (modelJson) {
          window.ShopifyXR.addModels(JSON.parse(modelJson.innerHTML));
          modelSection.loaded = true;
        }
      }
    }

    window.ShopifyXR.setupXRElements();
  }

  function setupModelViewerUi(errors) {
    if (errors) {
      console.warn(errors);
      return;
    }

    for (const key in models) {
      if (models.hasOwnProperty(key)) {
        const model = models[key];
        if (!model.modelViewerUi) {
          model.modelViewerUi = new Shopify.ModelViewerUI(model.element);
          setupModelViewerListeners(model);
        }
      }
    }
  }

  function setupModelViewerListeners(model) {
    const xrButton = xrButtons[model.sectionId];
    model.container.addEventListener('theme:media:visible', function() {
      xrButton.element.setAttribute(selectors.model3d, model.modelId);

      if (window.theme.touch) {
        return;
      }

      model.modelViewerUi.play();
      model.container.dispatchEvent(new CustomEvent('theme:media:play'), {bubbles: true});
    });

    model.container.addEventListener('theme:media:hidden', function() {
      model.modelViewerUi.pause();
    });

    model.container.addEventListener('xrLaunch', function() {
      model.modelViewerUi.pause();
    });

    model.element.addEventListener('load', () => {
      xrButton.element.setAttribute(selectors.model3d, model.modelId);
      model.container.classList.remove(classes.isLoading);
      model.container.dispatchEvent(new CustomEvent('theme:media:play'), {bubbles: true});
    });

    model.element.addEventListener('shopify_model_viewer_ui_toggle_play', function() {
      pauseOtherMedia(model.mediaId);
      model.container.dispatchEvent(new CustomEvent('theme:media:play'), {bubbles: true});
    });
    model.element.addEventListener('shopify_model_viewer_ui_toggle_pause', function() {
      model.container.dispatchEvent(new CustomEvent('theme:media:pause'), {bubbles: true});
    });

    pauseOtherMedia(model.mediaId);
  }

  function pauseOtherMedia(mediaId) {
    const currentMedia = `[${selectors.mediaId}="${mediaId}"]`;
    const otherMedia = document.querySelectorAll(`${selectors.productMediaWrapper}:not(${currentMedia})`);

    if (otherMedia.length) {
      otherMedia.forEach((media) => {
        media.dispatchEvent(new CustomEvent('theme:media:hidden'), {bubbles: true});
        media.classList.add(classes.mediaHidden);
      });
    }
  }

  function removeSectionModels(sectionId) {
    for (const key in models) {
      if (models.hasOwnProperty(key)) {
        const model = models[key];
        if (model.sectionId === sectionId) {
          delete models[key];
        }
      }
    }
    delete modelJsonSections[sectionId];
    delete theme.mediaInstances[sectionId];
  }

  return {
    init: init,
    loadContent: loadContent,
    removeSectionModels: removeSectionModels,
  };
})();

PaloAlto.RangeSlider = (function() {
  const selectors = {
    rangeSlider: '[data-range-slider]',
    rangeDotLeft: '[data-range-left]',
    rangeDotRight: '[data-range-right]',
    rangeLine: '[data-range-line]',
    rangeHolder: '[data-range-holder]',
    dataMin: 'data-se-min',
    dataMax: 'data-se-max',
    dataMinValue: 'data-se-min-value',
    dataMaxValue: 'data-se-max-value',
    dataStep: 'data-se-step',
    dataFilterUpdate: 'data-range-filter-update',
    priceMin: '[data-field-price-min]',
    priceMax: '[data-field-price-max]',
  };

  const classes = {
    isInitialized: 'is-initialized',
  };

  function RangeSlider(container) {
    this.container = container;
    this.init();

    document.addEventListener('theme:filters:init', () => {
      this.init();
    });
  }

  RangeSlider.prototype = $.extend({}, RangeSlider.prototype, {
    init: function() {
      this.slider = this.container.querySelector(selectors.rangeSlider);

      if (!this.slider) { return; }

      this.resizeFilters = PaloAlto.debounce(this.reset.bind(this), 50);

      this.onMoveEvent = (event) => this.onMove(event);
      this.onStopEvent = (event) => this.onStop(event);
      this.onStartEvent = (event) => this.onStart(event);
      this.startX = 0;
      this.x = 0;

      // retrieve touch button
      this.touchLeft = this.slider.querySelector(selectors.rangeDotLeft);
      this.touchRight = this.slider.querySelector(selectors.rangeDotRight);
      this.lineSpan = this.slider.querySelector(selectors.rangeLine);

      // get some properties
      this.min = parseFloat(this.slider.getAttribute(selectors.dataMin));
      this.max = parseFloat(this.slider.getAttribute(selectors.dataMax));

      this.step = 0.0;

      // normalize flag
      this.normalizeFact = 26;

      // retrieve default values
      let defaultMinValue = this.min;
      if (this.slider.hasAttribute(selectors.dataMinValue)) {
        defaultMinValue = parseFloat(this.slider.getAttribute(selectors.dataMinValue));
      }
      let defaultMaxValue = this.max;

      if (this.slider.hasAttribute(selectors.dataMaxValue)) {
        defaultMaxValue = parseFloat(this.slider.getAttribute(selectors.dataMaxValue));
      }

      // check values are correct
      if (defaultMinValue < this.min) {
        defaultMinValue = this.min;
      }

      if (defaultMaxValue > this.max) {
        defaultMaxValue = this.max;
      }

      if (defaultMinValue > defaultMaxValue) {
        defaultMinValue = defaultMaxValue;
      }

      if (this.slider.getAttribute(selectors.dataStep)) {
        this.step = Math.abs(parseFloat(this.slider.getAttribute(selectors.dataStep)));
      }

      // initial reset
      this.reset();
      window.addEventListener('resize', this.resizeFilters);

      // usefull values, min, max, normalize fact is the width of both touch buttons
      this.maxX = this.slider.offsetWidth - this.touchRight.offsetWidth;
      this.selectedTouch = null;
      this.initialValue = this.lineSpan.offsetWidth - this.normalizeFact;

      // set defualt values
      this.setMinValue(defaultMinValue);
      this.setMaxValue(defaultMaxValue);

      // link events
      this.touchLeft.addEventListener('mousedown', this.onStartEvent);
      this.touchRight.addEventListener('mousedown', this.onStartEvent);
      this.touchLeft.addEventListener('touchstart', this.onStartEvent, { passive: true });
      this.touchRight.addEventListener('touchstart', this.onStartEvent, { passive: true });

      // initialize
      this.slider.classList.add(classes.isInitialized);
    },

    reset() {
      this.touchLeft.style.left = '0px';
      this.touchRight.style.left = this.slider.offsetWidth - this.touchLeft.offsetWidth + 'px';
      this.lineSpan.style.marginLeft = '0px';
      this.lineSpan.style.width = this.slider.offsetWidth - this.touchLeft.offsetWidth + 'px';
      this.startX = 0;
      this.x = 0;

      this.maxX = this.slider.offsetWidth - this.touchRight.offsetWidth;
      this.initialValue = this.lineSpan.offsetWidth - this.normalizeFact;
    },

    setMinValue(minValue) {
      const ratio = (minValue - this.min) / (this.max - this.min);
      this.touchLeft.style.left = Math.ceil(ratio * (this.slider.offsetWidth - (this.touchLeft.offsetWidth + this.normalizeFact))) + 'px';
      this.lineSpan.style.marginLeft = this.touchLeft.offsetLeft + 'px';
      this.lineSpan.style.width = this.touchRight.offsetLeft - this.touchLeft.offsetLeft + 'px';
      this.slider.setAttribute(selectors.dataMinValue, minValue);
    },

    setMaxValue(maxValue) {
      const ratio = (maxValue - this.min) / (this.max - this.min);
      this.touchRight.style.left = Math.ceil(ratio * (this.slider.offsetWidth - (this.touchLeft.offsetWidth + this.normalizeFact)) + this.normalizeFact) + 'px';
      this.lineSpan.style.marginLeft = this.touchLeft.offsetLeft + 'px';
      this.lineSpan.style.width = this.touchRight.offsetLeft - this.touchLeft.offsetLeft + 'px';
      this.slider.setAttribute(selectors.dataMaxValue, maxValue);
    },

    onStart(event) {
      // Prevent default dragging of selected content
      event.preventDefault();
      let eventTouch = event;

      if (event.touches) {
        eventTouch = event.touches[0];
      }

      if (event.currentTarget === this.touchLeft) {
        this.x = this.touchLeft.offsetLeft;
      } else if (event.currentTarget === this.touchRight) {
        this.x = this.touchRight.offsetLeft;
      }

      this.startX = eventTouch.pageX - this.x;
      this.selectedTouch = event.currentTarget;
      document.addEventListener('mousemove', this.onMoveEvent);
      document.addEventListener('mouseup', this.onStopEvent);
      document.addEventListener('touchmove', this.onMoveEvent, { passive: true });
      document.addEventListener('touchend', this.onStopEvent, { passive: true });
    },

    onMove(event) {
      let eventTouch = event;

      if (event.touches) {
        eventTouch = event.touches[0];
      }

      this.x = eventTouch.pageX - this.startX;

      if (this.selectedTouch === this.touchLeft) {
        if (this.x > this.touchRight.offsetLeft - this.selectedTouch.offsetWidth + 10) {
          this.x = this.touchRight.offsetLeft - this.selectedTouch.offsetWidth + 10;
        } else if (this.x < 0) {
          this.x = 0;
        }

        this.selectedTouch.style.left = this.x + 'px';
      } else if (this.selectedTouch === this.touchRight) {
        if (this.x < this.touchLeft.offsetLeft + this.touchLeft.offsetWidth - 10) {
          this.x = this.touchLeft.offsetLeft + this.touchLeft.offsetWidth - 10;
        } else if (this.x > this.maxX) {
          this.x = this.maxX;
        }
        this.selectedTouch.style.left = this.x + 'px';
      }

      // update line span
      this.lineSpan.style.marginLeft = this.touchLeft.offsetLeft + 'px';
      this.lineSpan.style.width = this.touchRight.offsetLeft - this.touchLeft.offsetLeft + 'px';

      // write new value
      this.calculateValue();

      // call on change
      if (this.slider.getAttribute('on-change')) {
        const fn = new Function('min, max', this.slider.getAttribute('on-change'));
        fn(this.slider.getAttribute(selectors.dataMinValue), this.slider.getAttribute(selectors.dataMaxValue));
      }

      this.onChange(this.slider.getAttribute(selectors.dataMinValue), this.slider.getAttribute(selectors.dataMaxValue));
    },

    onStop(event) {
      document.removeEventListener('mousemove', this.onMoveEvent);
      document.removeEventListener('mouseup', this.onStopEvent);
      document.removeEventListener('touchmove', this.onMoveEvent, { passive: true });
      document.removeEventListener('touchend', this.onStopEvent, { passive: true });

      this.selectedTouch = null;

      // write new value
      this.calculateValue();

      // call did changed
      this.onChanged(this.slider.getAttribute(selectors.dataMinValue), this.slider.getAttribute(selectors.dataMaxValue));
    },

    onChange(min, max) {
      const rangeHolder = this.slider.closest(selectors.rangeHolder);
      if (rangeHolder) {
        const priceMin = rangeHolder.querySelector(selectors.priceMin);
        const priceMax = rangeHolder.querySelector(selectors.priceMax);

        if (priceMin && priceMax) {
          priceMin.value = parseInt(min);
          priceMax.value = parseInt(max);
        }
      }
    },

    onChanged(min, max) {
      if (this.slider.hasAttribute(selectors.dataFilterUpdate)) {
        this.slider.dispatchEvent(new CustomEvent('theme:filter:range-update', {bubbles: true}));
      }
    },

    calculateValue() {
      const newValue = (this.lineSpan.offsetWidth - this.normalizeFact) / this.initialValue;
      let minValue = this.lineSpan.offsetLeft / this.initialValue;
      let maxValue = minValue + newValue;

      minValue = minValue * (this.max - this.min) + this.min;
      maxValue = maxValue * (this.max - this.min) + this.min;

      if (this.step !== 0.0) {
        let multi = Math.floor(minValue / this.step);
        minValue = this.step * multi;

        multi = Math.floor(maxValue / this.step);
        maxValue = this.step * multi;
      }

      if (this.selectedTouch === this.touchLeft) {
        this.slider.setAttribute(selectors.dataMinValue, minValue);
      }

      if (this.selectedTouch === this.touchRight) {
        this.slider.setAttribute(selectors.dataMaxValue, maxValue);
      }
    },
  });

  return RangeSlider;
})();

PaloAlto.PairWithProduct = (function() {
  const selectors = {
    template: '[pair-product-template]',
    pairProducts: '[data-pair-products]',
  };

  function PairWithProduct(handle) {
    this.handle = handle;
    this.template = document.querySelector(selectors.template).innerHTML;
    this.pairProducts = document.querySelector(selectors.pairProducts);
    this.variant = null;
    this.variantObject = null;

    this.init();
  }

  PairWithProduct.prototype = $.extend({}, PairWithProduct.prototype, {
    init() {
      if (this.handle.includes('_')) {
        const parts = this.handle.split('_');
        this.handle = parts[0];
        this.variant = parts[1];
      }

      PaloAlto.fetchProduct(this.handle)
        .then((response) => {
          if (response === undefined) {
            document.dispatchEvent(new CustomEvent('theme:upsell:product-error'));

            return;
          }

          const formatted = PaloAlto.formatPrices(response, true);

          let availableVariant = false;

          if (this.variant !== null) {
            formatted.variants.filter((variant) => {
              if (variant.id === Number(this.variant) && variant.available) {
                this.variantObject = variant;
                availableVariant = true;
              }

              return variant;
            });
          }

          if (formatted.available && this.variant === null) {
            this.renderPairProduct(formatted);
          } else if (availableVariant) {
            this.renderPairProduct(formatted);
          } else {
            this.pairProducts.innerHTML = '';
            document.dispatchEvent(new CustomEvent('theme:upsell:unavailable'));
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },

    renderPairProduct(formatted) {
      const productMarkup = this.renderProduct(formatted);

      this.pairProducts.innerHTML = productMarkup;
    },

    renderProduct(currentProduct) {
      let media = null;
      let image = '';
      let firstAvailableVariant = '';
      let hasVariants = true;

      if (currentProduct.media !== undefined) {
        media = currentProduct.media[0];
      }

      if (this.variantObject !== null && this.variantObject.featured_media !== undefined) {
        media = this.variantObject.featured_media;
      }

      if (media) {
        image = {
          thumb: PaloAlto.BgSet.render(getSizedImageUrl(media.preview_image.src, '2048x'), media.preview_image.aspect_ratio),
          aspectRatio: media.preview_image.aspect_ratio,
        };
      } else {
        image = {
          thumb: window.theme.assets.no_image,
          aspectRatio: 1,
        };
      }

      if (currentProduct.options[0].name === 'Title' && currentProduct.options.length === 1 && currentProduct.options[0].values[0] === 'Default Title') {
        hasVariants = false;
      }

      if (this.variantObject === null) {
        for (let index = 0; index < currentProduct.variants.length; index++) {
          const variant = currentProduct.variants[index];

          if (variant.available) {
            const title = variant.title.replaceAll('/', '<span>&nbsp;</span>');
            const formatedVariant = PaloAlto.formatPrices(variant, true);

            firstAvailableVariant = {
              ...formatedVariant,
              title,
            };

            break;
          }
        }
      }

      if (this.variantObject !== null) {
        const title = this.variantObject.title.replaceAll('/', '<span>&nbsp;</span>');
        const formatedVariant = PaloAlto.formatPrices(this.variantObject, true);

        firstAvailableVariant = {
          ...formatedVariant,
          title,
        };
      }

      if (firstAvailableVariant === '') {
        return '';
      }

      const title = currentProduct.title.replace(/(<([^>]+)>)/gi, '');

      if (firstAvailableVariant.unit_price_measurement) {
        firstAvailableVariant.unitValue = firstAvailableVariant.unit_price_measurement.reference_unit;

        if (firstAvailableVariant.unit_price_measurement.reference_value !== 1) {
          firstAvailableVariant.unitCount = firstAvailableVariant.unit_price_measurement.reference_value;
        }
      }
      firstAvailableVariant.compare_at_price = slate.Currency.formatMoney(firstAvailableVariant.compare_at_price, theme.moneyFormat);
      if (firstAvailableVariant.price === 0) {
        firstAvailableVariant.price = theme.strings.free;
      } else {
        firstAvailableVariant.price = slate.Currency.formatMoney(firstAvailableVariant.price, theme.moneyFormat);
      }

      const updateValues = {
        ...currentProduct,
        title,
        image,
        firstAvailableVariant,
        hasVariants,
        addToCartText: theme.strings.add_to_cart,
      };

      return Sqrl.render(this.template, {product: updateValues});
    },

    onUnload: function() {
      document.removeEventListener('theme:resize:width', this.resizeEventUpsell);
    },
  });

  return PairWithProduct;
})();

PaloAlto.Swatches = (function() {
  const defaults = {
    color: 'ash',
  };

  const selectors = {
    swatch: 'data-swatch',
    swatchColor: '[data-swatch-color]',
    wrapper: '[data-grid-swatches]',
    template: '[data-swatch-template]',
    handle: 'data-swatch-handle',
    label: 'data-swatch-label',
  };

  function ColorMatch(options) {
    this.settings = {
      ...defaults,
      ...options,
    };

    this.match = this.init();
  }

  ColorMatch.prototype = $.extend({}, ColorMatch.prototype, {
    getColor() {
      return this.match;
    },

    init() {
      const getColors = loadScript({json: theme.assets.swatches});
      return getColors
        .then((colors) => {
          return this.matchColors(colors, this.settings.color);
        })
        .catch((e) => {
          console.log('failed to load swatch colors script');
          console.log(e);
        });
    },

    matchColors(colors, name) {
      let bg = '#E5E5E5';
      let img = null;
      const path = theme.assets.base || '/';
      const comparisonName = name.toLowerCase().replace(/\s/g, '');
      const array = colors.colors;

      if (array) {
        let indexArray = null;

        const hexColorArr = array.filter((colorObj, index) => {
          const neatName = Object.keys(colorObj).toString().toLowerCase()
.replace(/\s/g, '');

          if (neatName === comparisonName) {
            indexArray = index;

            return colorObj;
          }
        });

        if (hexColorArr.length && indexArray !== null) {
          const value = Object.values(array[indexArray])[0];
          bg = value;

          if (value.includes('.jpg') || value.includes('.jpeg') || value.includes('.png') || value.includes('.svg')) {
            img = `${path}${value}`;
            bg = '#888888';
          }
        }
      }

      return {
        color: this.settings.color,
        path: img,
        hex: bg,
      };
    },
  });

  function Swatch(element) {
    this.element = element;
    this.colorString = element.getAttribute(selectors.swatch);
    const matcher = new ColorMatch({color: this.colorString});
    matcher.getColor().then((result) => {
      this.colorMatch = result;
      this.init();
    });
  }

  Swatch.prototype = $.extend({}, Swatch.prototype, {

    init() {
      if (this.colorMatch && this.colorMatch.hex) {
        this.element.style.setProperty('--swatch', `${this.colorMatch.hex}`);
      }
      if (this.colorMatch && this.colorMatch.path) {
        this.element.style.setProperty('background-image', `url(${this.colorMatch.path})`);
      }
    },
  });

  function GridSwatch(wrap) {
    this.template = document.querySelector(selectors.template).innerHTML;
    this.wrap = wrap;
    this.handle = wrap.getAttribute(selectors.handle);
    const label = wrap.getAttribute(selectors.label).trim().toLowerCase();

    PaloAlto.fetchProduct(this.handle).then((product) => {
      this.product = product;
      this.colorOption = product.options.find(function(element) {
        return element.name.toLowerCase() === label || null;
      });

      if (this.colorOption) {
        this.swatches = this.colorOption.values;
        this.init();
      }
    });
  }

  GridSwatch.prototype = $.extend({}, GridSwatch.prototype, {

    init() {
      this.wrap.innerHTML = '';

      this.swatches.forEach((swatch) => {
        let variant = this.product.variants.find((variant) => {
          return variant.options.includes(swatch);
        });

        if (variant) {
          this.wrap.innerHTML += Sqrl.render(this.template, {
            color: swatch,
            uniq: `${this.product.id}-${variant.id}`,
            variant: variant.id,
            variantUrl: `${this.product.url}?variant=${variant.id}`,
          });
        }
      });

      this.swatchElements = this.wrap.querySelectorAll(`[${selectors.swatch}]`);

      this.swatchElements.forEach((el) => {
        new Swatch(el);
      });
    },
  });

  return {Swatch, GridSwatch};
})();

PaloAlto.ShareButton = (function() {
  const selectors = {
    button: '[data-share-button]',
    tooltip: '[data-share-button-tooltip]',
  };

  const classes = {
    visible: 'is-visible',
    hiding: 'is-hiding',
  };

  function ShareButton(container) {
    this.container = container;
    this.button = this.container.querySelector(selectors.button);
    this.tooltip = this.container.querySelector(selectors.tooltip);
    this.transitionSpeed = 200;
    this.hideTransitionTimeout = 0;
    this.init();
  }

  ShareButton.prototype = $.extend({}, ShareButton.prototype, {
    init() {
      if (this.button) {
        this.button.addEventListener('click', () => {
          let targetUrl = window.location.href;
          if (this.button.dataset.shareLink) {
            targetUrl = this.button.dataset.shareLink;
          }

          if (!this.tooltip.classList.contains(classes.visible)) {
            navigator.clipboard.writeText(targetUrl).then(() => {
              this.tooltip.classList.add(classes.visible);
              setTimeout(() => {
                this.tooltip.classList.add(classes.hiding);
                this.tooltip.classList.remove(classes.visible);

                if (this.hideTransitionTimeout) {
                  clearTimeout(this.hideTransitionTimeout);
                }

                this.hideTransitionTimeout = setTimeout(() => {
                  this.tooltip.classList.remove(classes.hiding);
                }, this.transitionSpeed);
              }, 1500);
            });
          }
        });
      }
    },
  });

  return ShareButton;
})();


PaloAlto.Tabs = (function() {
  const selectors = {
    body: 'body',
    tabLink: '[data-tab-link]',
    tabContent: '[data-tab-content]',
    scrollable: '[data-custom-scrollbar]',
    scrollableHolder: '[data-custom-scrollbar-holder]',
    slider: '[data-slider]',
  };

  const classes = {
    current: 'current',
    hide: 'hide',
    alt: 'alt',
    aosAnimate: 'aos-animate',
  };

  const attributes = {
    tabLink: 'data-tab-link',
    tabContent: 'data-tab-content',
    tabStartIndex: 'data-start-index',
  };

  function Tabs(container) {
    this.container = container;
    this.body = document.querySelector(selectors.body);

    if (this.container) {
      this.scrollable = this.container.querySelector(`${selectors.scrollable}`);

      this.init();
      this.initCustomScrollbar();
    }
  }

  Tabs.prototype = $.extend({}, Tabs.prototype, {
    init() {
      const tabsNavList = this.container.querySelectorAll(selectors.tabLink);
      const firstTabLink = this.container.querySelector(`[${attributes.tabLink}="${this.container.hasAttribute(attributes.tabStartIndex) ? this.container.getAttribute(attributes.tabStartIndex) : 0}"]`);
      const firstTabContent = this.container.querySelector(`[${attributes.tabContent}="${this.container.hasAttribute(attributes.tabStartIndex) ? this.container.getAttribute(attributes.tabStartIndex) : 0}"]`);

      if (firstTabContent) {
        firstTabContent.classList.add(classes.current);
      }

      if (firstTabLink) {
        firstTabLink.classList.add(classes.current);
      }

      this.checkVisibleTabLinks();

      if (tabsNavList.length) {
        tabsNavList.forEach((element) => {
          const tabId = parseInt(element.getAttribute(attributes.tabLink));
          const tab = this.container.querySelector(`[${attributes.tabContent}="${tabId}"]`);

          element.addEventListener('click', () => {
            this.tabChange(element, tab);
          });

          element.addEventListener('keyup', (event) => {
            if ((event.which === slate.utils.keyboardKeys.SPACE || event.which === slate.utils.keyboardKeys.ENTER)) {
              this.tabChange(element, tab);
            }
          });
        });
      }
    },

    initCustomScrollbar() {
      if (!this.scrollable) {
        return;
      }

      this.customScrollbar = new PaloAlto.CustomScrollbar(this.container);
    },

    tabChange(element, tab) {
      const parent = element.closest(selectors.scrollableHolder) ? element.closest(selectors.scrollableHolder) : element.parentElement;
      const parentPadding = parseInt(window.getComputedStyle(parent).getPropertyValue('padding-left'));
      this.container.querySelector(`${selectors.tabLink}.${classes.current}`).classList.remove(classes.current);
      const lastActiveTab = this.container.querySelector(`${selectors.tabContent}.${classes.current}`);
      const slider = tab.querySelector(selectors.slider);

      lastActiveTab.classList.remove(classes.current);
      element.classList.add(classes.current);
      tab.classList.add(classes.current);

      // Trigger theme:tab:change custom event to reset the selected tab slider position
      if (slider) {
        slider.dispatchEvent(new CustomEvent('theme:tab:change', {bubbles: false}));
      }

      // Scroll to current tab link
      parent.scrollTo({
        top: 0,
        left: element.offsetLeft - (parent.offsetWidth / 2) + (element.offsetWidth / 2) + parentPadding,
        behavior: 'smooth',
      });

      element.dispatchEvent(
        new CustomEvent('theme:custom-scrollbar:change', {
          bubbles: true,
          detail: {
            element: element,
          },
        }),
      );

      // Trigger animations if they are enabled
      if (theme.settings.animations) {
        tab.querySelectorAll(`.${classes.aosAnimate}`).forEach(element => {
          element.classList.remove(classes.aosAnimate);
          setTimeout(() => {
            element.classList.add(classes.aosAnimate);
          });
        });
      }

      if (element.classList.contains(classes.hide)) {
        tab.classList.add(classes.hide);
      }

      this.checkVisibleTabLinks();
    },

    checkVisibleTabLinks() {
      const tabsNavList = this.container.querySelectorAll(selectors.tabLink);
      const tabsNavListHidden = this.container.querySelectorAll(`${selectors.tabLink}.${classes.hide}`);
      const difference = tabsNavList.length - tabsNavListHidden.length;

      if (difference < 2) {
        this.container.classList.add(classes.alt);
      } else {
        this.container.classList.remove(classes.alt);
      }
    },

    onBlockSelect: function(evt) {
      const element = evt.target;
      if (element) {
        element.dispatchEvent(new Event('click'));

        element.parentNode.scrollTo({
          top: 0,
          left: element.offsetLeft - element.clientWidth,
          behavior: 'smooth',
        });
      }
    },
  });

  return Tabs;
})();

PaloAlto.Ticker = (function() {
  const selectors = {
    frame: '[data-ticker-frame]',
    scale: '[data-ticker-scale]',
    text: '[data-ticker-text]',
    clone: 'data-clone',
    animationClass: 'ticker--animated',
    unloadedClass: 'ticker--unloaded',
    comparitorClass: 'ticker__comparitor',
    moveTime: 1.63, // 100px going to move for 1.63s
    space: 100, // 100px
  };

  const attributes = {
    speed: 'data-marquee-speed',
  };

  function Ticker(el, stopClone = false) {
    this.frame = el;
    this.stopClone = stopClone;
    this.scale = this.frame.querySelector(selectors.scale);
    this.text = this.frame.querySelector(selectors.text);

    this.comparitor = this.text.cloneNode(true);
    this.comparitor.classList.add(selectors.comparitorClass);
    this.frame.appendChild(this.comparitor);
    this.scale.classList.remove(selectors.unloadedClass);
    this.resizeEvent = PaloAlto.debounce(() => this.checkWidth(), 100);
    this.listen();
  }

  Ticker.prototype = $.extend({}, Ticker.prototype, {

    listen() {
      document.addEventListener('theme:resize:width', this.resizeEvent);
      this.checkWidth();
    },

    checkWidth() {
      const padding = window.getComputedStyle(this.frame).paddingLeft.replace('px', '') * 2;

      if (this.frame.clientWidth - padding < this.comparitor.clientWidth || this.stopClone) {
        this.text.classList.add(selectors.animationClass);
        if (this.scale.childElementCount === 1) {
          this.clone = this.text.cloneNode(true);
          this.clone.setAttribute(selectors.clone, '');
          this.scale.appendChild(this.clone);

          if (this.stopClone) {
            for (let index = 0; index < 10; index++) {
              const cloneSecond = this.text.cloneNode(true);
              cloneSecond.setAttribute(selectors.clone, '');
              this.scale.appendChild(cloneSecond);
            }
          }

          let frameSpeed = this.frame.getAttribute(attributes.speed);
          if (frameSpeed === null) {
            frameSpeed = 100;
          }
          const speed = selectors.moveTime * (100 / parseInt(frameSpeed, 10));
          const animationTimeFrame = (this.text.clientWidth / selectors.space) * speed;

          this.scale.style.setProperty('--animation-time', `${animationTimeFrame}s`);
        }
      } else {
        this.text.classList.add(selectors.animationClass);
        let clone = this.scale.querySelector(`[${selectors.clone}]`);
        if (clone) {
          this.scale.removeChild(clone);
        }
        this.text.classList.remove(selectors.animationClass);
      }
    },

    unload() {
      document.removeEventListener('theme:resize:width', this.resizeEvent);
    },
  });

  return Ticker;
})();

/*
Usage:

  const tooltips = this.container.querySelectorAll('[data-tooltip]');
  tooltips.forEach((tooltip) => {
    new PaloAlto.Tooltip(tooltip);
  });

*/
PaloAlto.Tooltip = (function() {
  const selectors = {
    tooltip: 'data-tooltip',
    tooltipContainer: 'data-tooltip-container',
    tooltipStopMouseEnter: 'data-tooltip-stop-mouseenter',
  };

  const classes = {
    root: 'tooltip-default',
    visible: 'is-visible',
    hiding: 'is-hiding',
  };

  function Tooltip(el) {
    this.tooltip = el;
    if (!this.tooltip.hasAttribute(selectors.tooltip)) { return; }

    this.rootClass = classes.root;
    this.label = this.tooltip.getAttribute(selectors.tooltip);
    this.transitionSpeed = 200;
    this.hideTransitionTimeout = 0;
    this.addPinEvent = () => this.addPin();
    this.addPinMouseEvent = () => this.addPin(true);
    this.removePinEvent = (event) => throttle(this.removePin(event), 50);
    this.removePinMouseEvent = (event) => this.removePin(event, true, true);
    this.init();
  }

  Tooltip.prototype = $.extend({}, Tooltip.prototype, {
    init() {
      if (!document.querySelector(`[${selectors.tooltipContainer}]`)) {
        const tooltipTemplate = `<div class="${this.rootClass}__inner"><div class="${this.rootClass}__arrow"></div><div class="${this.rootClass}__text"></div></div>`;
        const tooltipElement = document.createElement('div');
        tooltipElement.className = this.rootClass;
        tooltipElement.setAttribute(selectors.tooltipContainer, '');
        tooltipElement.innerHTML = tooltipTemplate;
        document.body.appendChild(tooltipElement);
      }

      this.tooltip.addEventListener('mouseenter', this.addPinMouseEvent);
      this.tooltip.addEventListener('mouseleave', this.removePinMouseEvent);
      this.tooltip.addEventListener('theme:tooltip:init', this.addPinEvent);
      document.addEventListener('theme:tooltip:close', this.removePinEvent);
    },

    addPin(stopMouseEnter = false) {
      const tooltipTarget = document.querySelector(`[${selectors.tooltipContainer}]`);

      if (tooltipTarget && ((stopMouseEnter && !this.tooltip.hasAttribute(selectors.tooltipStopMouseEnter)) || !stopMouseEnter)) {
        const tooltipTargetInner = tooltipTarget.querySelector(`.${this.rootClass}__inner`);
        const tooltipTargetText = tooltipTarget.querySelector(`.${this.rootClass}__text`);
        tooltipTargetText.textContent = this.label;

        const tooltipTargetWidth = tooltipTargetInner.offsetWidth;
        const tooltipRect = this.tooltip.getBoundingClientRect();
        const tooltipTop = tooltipRect.top;
        const tooltipWidth = tooltipRect.width;
        const tooltipHeight = tooltipRect.height;
        const tooltipTargetPositionTop = tooltipTop + tooltipHeight + window.scrollY;
        let tooltipTargetPositionLeft = tooltipRect.left - tooltipTargetWidth / 2 + tooltipWidth / 2;
        const tooltipLeftWithWidth = tooltipTargetPositionLeft + tooltipTargetWidth;
        const tooltipTargetWindowDifference = tooltipLeftWithWidth - window.innerWidth;

        if (tooltipTargetWindowDifference > 0) {
          tooltipTargetPositionLeft -= tooltipTargetWindowDifference;
        }

        if (tooltipTargetPositionLeft < 0) {
          tooltipTargetPositionLeft = 0;
        }

        tooltipTarget.style.transform = `translate(${tooltipTargetPositionLeft}px, ${tooltipTargetPositionTop}px)`;
        tooltipTarget.classList.remove(classes.hiding);
        tooltipTarget.classList.add(classes.visible);

        document.addEventListener('theme:scroll', this.removePinEvent);
      }
    },

    removePin(event, stopMouseEnter = false, hideTransition = false) {
      const tooltipTarget = document.querySelector(`[${selectors.tooltipContainer}]`);
      const tooltipVisible = tooltipTarget.classList.contains(classes.visible);

      if (tooltipTarget && ((stopMouseEnter && !this.tooltip.hasAttribute(selectors.tooltipStopMouseEnter)) || !stopMouseEnter)) {
        if (tooltipVisible && (hideTransition || event.detail.hideTransition)) {
          tooltipTarget.classList.add(classes.hiding);

          if (this.hideTransitionTimeout) {
            clearTimeout(this.hideTransitionTimeout);
          }

          this.hideTransitionTimeout = setTimeout(() => {
            tooltipTarget.classList.remove(classes.hiding);
          }, this.transitionSpeed);
        }

        tooltipTarget.classList.remove(classes.visible);

        document.removeEventListener('theme:scroll', this.removePinEvent);
      }
    },

    unload() {
      this.tooltip.removeEventListener('mouseenter', this.addPinMouseEvent);
      this.tooltip.removeEventListener('mouseleave', this.removePinMouseEvent);
      this.tooltip.removeEventListener('theme:tooltip:init', this.addPinEvent);
      document.removeEventListener('theme:tooltip:close', this.removePinEvent);
      document.removeEventListener('theme:scroll', this.removePinEvent);
    },
  });

  return Tooltip;
})();

PaloAlto.Zoom = (function() {
  const selectors = {
    mediaContainer: '[data-product-single-media-group]',
    productMediaSlider: '[data-product-single-media-slider]',
    zoomWrapper: '[data-zoom-wrapper]',
  };

  const classes = {
    popupClass: 'pswp-zoom-gallery',
    popupClassNoThumbs: 'pswp-zoom-gallery--single',
    isMoving: 'is-moving',
  };

  const attributes = {
    dataImageWidth: 'data-image-width',
    dataImageHeight: 'data-image-height',
  };

  function Zoom(container) {
    this.container = container;
    this.mediaContainer = this.container.querySelector(selectors.mediaContainer);
    this.slider = this.container.querySelector(selectors.productMediaSlider);
    this.zoomWrappers = this.container.querySelectorAll(selectors.zoomWrapper);
    this.zoomEnable = this.mediaContainer.dataset.gallery === 'true';

    if (this.zoomEnable) {
      this.init();
    }
  }

  Zoom.prototype = $.extend({}, Zoom.prototype, {
    init() {
      if (this.zoomWrappers.length) {
        this.zoomWrappers.forEach((element, i) => {
          element.addEventListener('click', (e) => {
            e.preventDefault();

            const isMoving = this.slider && this.slider.classList.contains(classes.isMoving);

            if (!isMoving) {
              this.createZoom(i);
            }
          });

          element.addEventListener('keyup', (e) => {
            // On keypress Enter move the focus to the first focusable element in the related slide
            if (e.keyCode === theme.keyboardKeys.ENTER) {
              e.preventDefault();

              this.createZoom(i);
            }
          });
        });
      }
    },

    createZoom(indexImage) {
      const instance = this;
      let items = [];
      let counter = 0;

      this.zoomWrappers.forEach((elementImage) => {
        const imgSrc = elementImage.getAttribute('href');
        const imgWidth = parseInt(elementImage.getAttribute(attributes.dataImageWidth));
        const imgHeight = parseInt(elementImage.getAttribute(attributes.dataImageHeight));

        items.push({
          src: imgSrc,
          w: imgWidth,
          h: imgHeight,
          msrc: imgSrc,
        });

        counter += 1;
        if (instance.zoomWrappers.length === counter) {
          let popupClass = `${classes.popupClass}`;
          if (counter === 1) {
            popupClass = `${classes.popupClass} ${classes.popupClassNoThumbs}`;
          }
          const options = {
            barsSize: {top: 60, bottom: 60},
            history: false,
            focus: false,
            index: indexImage,
            mainClass: popupClass,
            showHideOpacity: true,
            showAnimationDuration: 250,
            hideAnimationDuration: 250,
            closeOnScroll: false,
            closeOnVerticalDrag: false,
            captionEl: false,
            closeEl: true,
            closeElClasses: ['caption-close'],
            tapToClose: false,
            clickToCloseNonZoomable: false,
            maxSpreadZoom: 2,
            loop: true,
            spacing: 0,
            allowPanToNext: true,
            pinchToClose: false,
          };

          new PaloAlto.LoadPhotoswipe(items, options);
        }
      });
    },
  });

  return Zoom;
})();


/*= =============== Sections ================*/
PaloAlto.Accordions = (function() {
  const selectors = {
    trigger: '[data-collapsible-trigger]',
  };

  const classes = {
    isExpanded: 'is-expanded',
  };

  function Accordions(container) {
    PaloAlto.initCollapsible();
  }

  Accordions.prototype = $.extend({}, Accordions.prototype, {

    /**
     * Event callback for Theme Editor `section:block:select` event
     */
    onBlockSelect(evt) {
      const trigger = evt.target.querySelector(selectors.trigger);
      if (!trigger.classList.contains(classes.isExpanded)) {
        trigger.dispatchEvent(new Event('click'));
      }
    },

    /**
     * Event callback for Theme Editor `section:block:deselect` event
     */
    onBlockDeselect(evt) {
      const trigger = evt.target.querySelector(selectors.trigger);
      if (trigger.classList.contains(classes.isExpanded)) {
        trigger.dispatchEvent(new Event('click'));
      }
    },
  });

  return Accordions;
})();

PaloAlto.AnnouncementBar = (function() {
  const selectors = {
    barSlide: '[data-slide]',
    frame: '[data-ticker-frame]',
    slider: '[data-slider]',
    tickerScale: '[data-ticker-scale]',
    tickerText: '[data-ticker-text]',
    dataTargetReferrer: 'data-target-referrer',
  };

  const attributes = {
    slide: 'data-slide',
    speed: 'data-slider-speed',
    stop: 'data-stop',
    style: 'style',
  };

  const classes = {
    desktop: 'desktop',
    mobile: 'mobile',
    tickerAnimated: 'ticker--animated',
  };

  function AnnouncementBar(container) {
    this.barHolder = container;
    this.locationPath = location.href;
    this.slides = this.barHolder.querySelectorAll(selectors.barSlide);
    this.slider = this.barHolder.querySelector(selectors.slider);
    this.flkty = null;

    this.init();
  }

  AnnouncementBar.prototype = $.extend({}, AnnouncementBar.prototype, {
    init() {
      this.removeAnnouncement();

      if (this.slider) {
        this.initSlider();
        document.addEventListener('theme:resize:width', this.initSlider.bind(this));
      }

      if (!this.slider) {
        this.initTickers(true);
      }
    },

    /**
     * Delete announcement which has a target referrer attribute and it is not contained in page URL
     */
    removeAnnouncement() {
      for (let i = 0; i < this.slides.length; i++) {
        const element = this.slides[i];

        if (!element.hasAttribute(selectors.dataTargetReferrer)) {
          continue;
        }

        if (this.locationPath.indexOf(element.getAttribute(selectors.dataTargetReferrer)) === -1 && !window.Shopify.designMode) {
          element.parentNode.removeChild(element);
        }
      }
    },

    /**
     * Init slider
     */
    initSlider() {
      const slides = this.slider.querySelectorAll(selectors.barSlide);

      if (slides) {
        let slideSelector = `${selectors.barSlide}`;

        if (window.innerWidth < theme.sizes.small) {
          slideSelector = `${selectors.barSlide}:not(.${classes.desktop})`;
        } else {
          slideSelector = `${selectors.barSlide}:not(.${classes.mobile})`;
        }

        if (this.flkty != null) {
          this.flkty.destroy();
        }

        this.flkty = new Flickity(this.slider, {
          cellSelector: slideSelector,
          pageDots: false,
          prevNextButtons: false,
          wrapAround: true,
          autoPlay: parseInt(this.slider.getAttribute(attributes.speed), 10),
          on: {
            ready: () => {
              setTimeout(() => {
                this.slider.dispatchEvent(
                  new CustomEvent('slider-is-loaded', {
                    bubbles: true,
                    detail: {
                      slider: this,
                    },
                  }),
                );
              }, 10);
            },
          },
        });
        this.flkty.reposition();
      }

      this.slider.addEventListener('slider-is-loaded', () => {
        this.initTickers();
      });
    },

    /**
     * Init tickers in sliders
     */
    initTickers(stopClone = false) {
      const frames = this.barHolder.querySelectorAll(selectors.frame);

      frames.forEach((element) => {
        new PaloAlto.Ticker(element, stopClone);

        const slides = element.querySelectorAll(selectors.barSlide);
        if (slides.length !== 0) {
          const slidesMobile = element.querySelectorAll(`${selectors.barSlide}.${classes.mobile}`);
          const slidesDesktop = element.querySelectorAll(`${selectors.barSlide}.${classes.desktop}`);

          if (slides.length === slidesMobile.length) {
            element.parentNode.classList.add(classes.mobile);
          } else if (slides.length === slidesDesktop.length) {
            element.parentNode.classList.add(classes.desktop);
          }
        }
      });
    },

    toggleTicker(e, isStoped) {
      const tickerScale = e.target.closest(selectors.tickerScale);
      const element = document.querySelector(`[${attributes.slide}="${e.detail.blockId}"]`);

      if (isStoped && element) {
        tickerScale.setAttribute(attributes.stop, '');
        tickerScale.querySelectorAll(selectors.tickerText).forEach((textHolder) => {
          textHolder.classList.remove(classes.tickerAnimated);
          textHolder.style.transform = `translate3d(${-(element.offsetLeft - parseInt(getComputedStyle(element).marginLeft, 10))}px, 0, 0)`;
        });
      }

      if (!isStoped && element) {
        tickerScale.querySelectorAll(selectors.tickerText).forEach((textHolder) => {
          textHolder.classList.add(classes.tickerAnimated);
          textHolder.removeAttribute(attributes.style);
        });
        tickerScale.removeAttribute(attributes.stop);
      }
    },

    onBlockSelect(evt) {
      const index = parseInt([...evt.target.parentNode.children].indexOf(evt.target));

      if (this.slider && this.flkty !== null) {
        this.flkty.select(index);
        this.flkty.pausePlayer();
      }
      if (!this.slider) {
        this.toggleTicker(evt, true);
      }
    },

    onBlockDeselect(evt) {
      if (this.slider && this.flkty !== null) {
        this.flkty.unpausePlayer();
      }
      if (!this.slider) {
        this.toggleTicker(evt, false);
      }
    },

    onUnload() {
      document.removeEventListener('theme:resize:width', this.initSlider.bind(this));
    },
  });

  return AnnouncementBar;
})();

PaloAlto.BlogPosts = (function() {

  function BlogPosts(container) {
    this.endlessBlogPosts = {};
    this.initInfinityScroll();
  }

  BlogPosts.prototype = $.extend({}, BlogPosts.prototype, {
    initInfinityScroll: function() {
      if (!theme.settings.enableInfinityScroll) { return; }

      this.endlessBlogPosts = new Ajaxinate({
        container: '#AjaxinateLoop',
        pagination: '#AjaxinatePagination',
        method: 'scroll',
        callback: function() {
          AOS.refreshHard();
        },
      });
    },

    onUnload: function() {
      if (theme.settings.enableInfinityScroll && typeof this.endlessBlogPosts === 'object' && this.endlessBlogPosts.destroy === 'function') {
        this.endlessBlogPosts.destroy();
      }
    },
  });

  return BlogPosts;

})();

PaloAlto.CustomContent = (function() {
  const selectors = {
    videoWrapper: '[data-video-wrapper]',
    product: '[data-product]',
    productSlider: '[data-slider]',
    productSlide: '[data-slide]',
    productGridItemImage: '[data-product-media-container]',
    flickityButton: '.flickity-button',
  };

  function CustomContent(container) {
    this.container = container;
    this.videoWrapper = this.container.querySelectorAll(selectors.videoWrapper);
    this.product = this.container.querySelectorAll(selectors.product);
    this.productSlider = this.container.querySelectorAll(selectors.productSlider);
    this.checkSliderOnResize = this.checkSlider.bind(this);
    this.flkty = [];
    this.videoObj = [];
    this.quickViewObj = [];

    if (this.videoWrapper !== null) {
      this.videoWrapper.forEach(video => {
        this.videoObj.push(new PaloAlto.FeaturedVideo(video));
      });
    }

    if (this.product !== null) {
      new PaloAlto.ProductGrid(container);
    }

    PaloAlto.QuickViewPopup.init(container);
    this.listen();
  }

  CustomContent.prototype = $.extend({}, CustomContent.prototype, {
    checkSlider() {
      if (window.innerWidth >= theme.sizes.small) {
        this.productSlider.forEach(slider => {
          this.initProductSlider(slider);
        });
      } else {
        this.productSlider.forEach(slider => {
          this.destroyProductSlider(slider);
        });
      }
    },

    initProductSlider(slider) {
      const slidesCount = slider.querySelectorAll(selectors.productSlide).length;
      const sliderId = slider.dataset.slider;

      if (slidesCount > 1) {
        if (this.flkty[sliderId] === undefined || !this.flkty[sliderId].isActive) {
          this.flkty[sliderId] = new Flickity(slider, {
            prevNextButtons: true,
            pageDots: true,
            wrapAround: true,
            on: {
              ready: () => {
                this.setSliderArrowsPosition(slider);
              },
            },
          });
        } else {
          this.setSliderArrowsPosition(slider);
        }
      }
    },

    destroyProductSlider(slider) {
      const sliderId = slider.dataset.slider;
      if (this.flkty[sliderId] !== null) {
        if (typeof this.flkty[sliderId] === 'object') {
          this.flkty[sliderId].destroy();
          this.flkty[sliderId] = null;
        }
      }
    },

    setSliderArrowsPosition: function(slider) {
      const arrows = slider.querySelectorAll(selectors.flickityButton);
      const image = slider.querySelector(selectors.productGridItemImage);

      if (arrows.length && image) {
        arrows.forEach((arrow) => {
          arrow.style.top = `${image.offsetHeight / 2}px`;
        });
      }
    },

    listen: function() {
      this.checkSlider();
      document.addEventListener('theme:resize:width', this.checkSliderOnResize);
    },

    onUnload: function() {
      if (this.flkty) {
        for (const key in this.flkty) {
          if (this.flkty.hasOwnProperty(key)) {
            this.flkty[key].destroy();
          }
        }
      }

      document.removeEventListener('theme:resize:width', this.checkSliderOnResize);
    },
  });

  return CustomContent;
})();

PaloAlto.ShoppableBlog = (function() {
  const selectors = {
    article: '[data-blog-item]',
    slider: '[data-slider]',
    sliderItem: '[data-item]',
    buttonProductsShow: '[data-button-show]',
    buttonProductsHide: '[data-button-hide]',
    itemProducts: '[data-item-products]',
    itemProductSlider: '[data-item-products-slider]',
    itemProduct: '[data-item-product]',
  };

  const classes = {
    itemActive: 'blog-item--active',
    itemProductsVisible: 'blog-item__products--visible',
    featuredBlogSlider: 'shoppable-blog__slider',
  };

  const attributes = {
    sectionId: 'data-section-id',
  };

  function ShoppableBlog(container) {
    this.container = container;
    this.flkty = null;
    this.article = this.container.querySelector(selectors.article);
    this.slider = this.container.querySelector(selectors.slider);
    this.checkSlidesSizeOnResize = this.checkSlidesSize.bind(this);
    this.isFullWidth = container.hasAttribute(attributes.fullWidth);
    this.gutter = 0;
    this.clickOutsideItemEvent = (e) => {
      const clickOutsideSliderItem = !(e.target.matches(selectors.sliderItem) || e.target.closest(selectors.sliderItem));

      if (clickOutsideSliderItem) {
        const sliderItem = this.container.querySelectorAll(selectors.sliderItem);
        if (sliderItem.length) {
          sliderItem.forEach((item) => {
            const itemProducts = item.querySelector(selectors.itemProducts);
            if (itemProducts) {
              itemProducts.classList.remove(classes.itemProductsVisible);
            }
            item.classList.remove(classes.itemActive);
          });
        }
      }
    };

    this.bindButtons();
    this.listen();
  }

  ShoppableBlog.prototype = $.extend({}, ShoppableBlog.prototype, {
    initSlider: function() {
      this.flkty = new Flickity(this.slider, {
        prevNextButtons: true,
        pageDots: false,
        cellAlign: 'left',
        wrapAround: false,
        groupCells: true,
        contain: true,
      });

      this.flkty.on('change.flickity', (event) => {
        if (event.target.classList.contains(classes.featuredBlogSlider)) {
          const slides = this.container.querySelectorAll(selectors.sliderItem);

          if (slides.length) {
            slides.forEach((el) => {
              el.classList.remove(classes.itemActive);
              el.querySelector(selectors.itemProducts).classList.remove(classes.itemProductsVisible);
            });
          }

          if (this.flkty && !this.flkty.options.draggable) {
            this.flkty.options.draggable = true;
            this.flkty.updateDraggable();
          }
        }
      });
    },

    destroySlider: function() {
      if (this.flkty !== null) {
        this.flkty.destroy();
        this.flkty = null;
      }
    },

    checkSlidesSize: function() {
      const sliderItemStyle = this.container.querySelector(selectors.sliderItem).currentStyle || window.getComputedStyle(this.container.querySelector(selectors.sliderItem));
      this.gutter = parseInt(sliderItemStyle.marginRight);
      const containerWidth = this.slider.offsetWidth + this.gutter;
      const itemsWidth = this.getItemsWidth();
      const itemsOverflowViewport = containerWidth < itemsWidth;

      if (window.innerWidth >= theme.sizes.small && itemsOverflowViewport) {
        this.initSlider();
      } else {
        this.destroySlider();
      }
    },

    getItemsWidth: function() {
      let itemsWidth = 0;
      const slides = this.slider.querySelectorAll(selectors.sliderItem);
      if (slides.length) {
        slides.forEach((item) => {
          itemsWidth += item.offsetWidth + this.gutter;
        });
      }

      return itemsWidth;
    },

    bindButtons: function() {
      const itemProductSlider = this.container.querySelectorAll(selectors.itemProductSlider);
      const buttonProductsShow = this.container.querySelectorAll(selectors.buttonProductsShow);
      const buttonProductsHide = this.container.querySelectorAll(selectors.buttonProductsHide);

      if (buttonProductsShow.length) {
        buttonProductsShow.forEach((button) => {
          button.addEventListener('click', (e) => {
            e.preventDefault();
            this.container.querySelectorAll(selectors.sliderItem).forEach((item) => {
              const itemProducts = item.querySelector(selectors.itemProducts);
              item.classList.remove(classes.itemActive);

              if (itemProducts) {
                itemProducts.classList.remove(classes.itemProductsVisible);
              }
            });

            const item = button.closest(selectors.sliderItem);
            const itemProducts = item.querySelector(selectors.itemProducts);
            item.classList.add(classes.itemActive);

            if (itemProducts) {
              itemProducts.classList.add(classes.itemProductsVisible);
            }

            if (this.flkty !== null) {
              this.flkty.options.draggable = false;
              this.flkty.updateDraggable();
            }
          });
        });
      }

      if (buttonProductsHide.length) {
        buttonProductsHide.forEach((button) => {
          button.addEventListener('click', (e) => {
            e.preventDefault();
            const item = button.closest(selectors.sliderItem);
            const itemProducts = item.querySelector(selectors.itemProducts);
            item.classList.remove(classes.itemActive);

            if (itemProducts) {
              itemProducts.classList.remove(classes.itemProductsVisible);
            }

            if (this.flkty !== null) {
              this.flkty.options.draggable = true;
              this.flkty.updateDraggable();
            }
          });
        });
      }

      if (itemProductSlider.length) {
        itemProductSlider.forEach((slider) => {
          const countSlides = slider.querySelectorAll(selectors.itemProduct).length;

          if (countSlides > 1) {
            new Flickity(slider, {
              prevNextButtons: true,
              contain: true,
              pageDots: false,
              wrapAround: true,
            });
          }
        });
      }

      this.slider.addEventListener('keyup', (e) => {
        if (e.keyCode === slate.utils.keyboardKeys.ESCAPE) {
          const sliderItem = e.target.querySelectorAll(selectors.sliderItem);
          if (sliderItem.length) {
            sliderItem.forEach((item) => {
              const itemProducts = item.querySelector(selectors.itemProducts);
              item.classList.remove(classes.itemActive);
              if (itemProducts) {
                itemProducts.classList.remove(classes.itemProductsVisible);
              }
            });

            if (this.flkty) {
              this.flkty.options.draggable = true;
              this.flkty.updateDraggable();
            }
          }
        }
      });
    },

    listen: function() {
      if (this.slider) {
        this.checkSlidesSize();
        document.addEventListener('theme:resize:width', this.checkSlidesSizeOnResize);
      }

      document.addEventListener('mousedown', this.clickOutsideItemEvent);
    },

    onBlockSelect: function(evt) {
      if (this.flkty !== null) {
        const index = parseInt([...evt.target.parentNode.children].indexOf(evt.target));
        const slidesPerPage = parseInt(this.flkty.slides[0].cells.length);
        const groupIndex = Math.floor(index / slidesPerPage);

        this.flkty.select(groupIndex);
      } else {
        const sliderStyle = this.slider.currentStyle || window.getComputedStyle(this.slider);
        const sliderPadding = parseInt(sliderStyle.paddingLeft);
        const blockPositionLeft = evt.target.offsetLeft - sliderPadding;

        // Native scroll to item
        this.slider.scrollTo({
          top: 0,
          left: blockPositionLeft,
          behavior: 'smooth',
        });
      }
    },

    onUnload: function() {
      document.removeEventListener('theme:resize:width', this.checkSlidesSizeOnResize);
      document.removeEventListener('click', this.clickOutsideItemEvent);
    },
  });

  return ShoppableBlog;
})();

PaloAlto.FeaturedCollection = (function() {
  function FeaturedCollection(container) {
    this.productGrid = new PaloAlto.ProductGrid(container);
    this.gridSlider = new PaloAlto.GridSlider(container);
  }

  FeaturedCollection.prototype = $.extend({}, FeaturedCollection.prototype, {

    /**
     * Event callback for Theme Editor `section:select` event
     */
    onSelect: function() {
      if (this.productGrid) {
        this.productGrid.onSelect();
      }
    },

    /**
     * Event callback for Theme Editor `section:deselect` event
     */
    onDeselect: function() {
      if (this.productGrid) {
        this.productGrid.onDeselect();
      }
    },

    /**
     * Event callback for Theme Editor `section:unload` event
     */
    onUnload: function() {
      if (this.productGrid) {
        this.productGrid.onUnload();
      }
    },
  });

  return FeaturedCollection;
})();

/**
 * FeaturedVideo Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the FeaturedVideo template.
 *
 * @namespace FeaturedVideo
 */

PaloAlto.FeaturedVideo = (function() {
  let players = [];

  const defaultYoutubeOptions = {
    height: '720',
    width: '1280',
    playerVars: {
      showinfo: 0,
      controls: 0,
      fs: 0,
      rel: 0,
      height: '100%',
      width: '100%',
      iv_load_policy: 3,
      html5: 1,
      loop: 1,
      playsinline: 1,
      modestbranding: 1,
      disablekb: 1,
      wmode: 'opaque',
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  };

  const selectors = {
    video: '[data-video]',
  };

  const attributes = {
    tabindex: 'tabindex',
  };

  const classes = {
    loaded: 'loaded',
  };

  function FeaturedVideo(container) {
    this.container = container;
    this.player = container.querySelector(selectors.video);
    this.enableSound = container.dataset.enableSound === 'true';
    this.playVideoEvent = (e) => {
      if (players[this.playerId] && players[this.playerId].playVideo === 'function') {
        players[this.playerId].playVideo();
      }
    };
    this.setVideoFullscreenSizeEvent = this.setVideoFullscreenSize.bind(this);

    if (this.player) {
      this.playerId = this.player.id;
      this.videoId = this.player.dataset.video;
      this.init();
    }
  }

  function onPlayerReady(event) {
    const iframe = event.target.getIframe();
    const iframeId = iframe.id;

    if (iframeId) {
      if (this.enableSound) {
        event.target.unMute();
      } else {
        event.target.mute();
      }

      event.target.playVideo();

      iframe.setAttribute(attributes.tabindex, '-1');
      iframe.parentNode.classList.add(classes.loaded);

      checkPlayerVisibility(iframeId);

      document.addEventListener('theme:scroll', () => {
        checkPlayerVisibility(iframeId);
      });
    }
  }

  function onPlayerStateChange(event) {
    // Loop video if state is ended
    if (event.data == 0) {
      event.target.playVideo();
    }
  }

  function checkPlayerVisibility(iframeId) {
    let playerId;
    if (typeof iframeId === 'string') {
      playerId = iframeId;
    } else if (iframeId.data != undefined) {
      playerId = iframeId.data.id;
    } else {
      return false;
    }

    const playerElement = document.getElementById(playerId + '-container');
    const player = players[playerId];
    const isVisible = PaloAlto.isInViewport(playerElement);

    if (isVisible && player && typeof player.playVideo === 'function') {
      player.playVideo();
    } else if (!isVisible && player && typeof player.pauseVideo === 'function') {
      player.pauseVideo();
    }
  }

  FeaturedVideo.prototype = $.extend({}, FeaturedVideo.prototype, {
    init: function() {
      this.container.addEventListener('click', this.playVideoEvent);
      this.container.addEventListener('touchstart', this.playVideoEvent);
      this.setVideoFullscreenSize();
      document.addEventListener('theme:resize', this.setVideoFullscreenSizeEvent);

      if (window.isYoutubeAPILoaded) {
        this.loadYoutubePlayer();
      } else {
        // Load Youtube API if not loaded yet
        window.loadYoutubeAPI();
        document.addEventListener('youtubeAPIReady', this.loadYoutubePlayer.bind(this));
      }
    },

    loadYoutubePlayer: function() {
      const currentYoutubeOptions = {...defaultYoutubeOptions};
      currentYoutubeOptions.videoId = this.videoId;
      players[this.playerId] = new YT.Player(this.playerId, currentYoutubeOptions);
      window.isYoutubeAPILoaded = true;
    },

    setVideoFullscreenSize: function() {
      const videoAspectRatio = 16 / 9;
      const containerAspectRatio = this.container.offsetWidth / this.container.offsetHeight;
      let videoWidth = 0;
      let videoHeight = 0;

      if (videoAspectRatio > containerAspectRatio) {
        videoWidth = this.container.offsetHeight * videoAspectRatio;
        videoHeight = this.container.offsetHeight;
      } else {
        videoWidth = this.container.offsetWidth;
        videoHeight = this.container.offsetWidth / videoAspectRatio;
      }

      this.player.style.width = videoWidth + 'px';
      this.player.style.height = videoHeight + 'px';
    },

    onUnload: function(evt) {
      this.container.removeEventListener('click', this.playVideoEvent);
      this.container.removeEventListener('touchstart', this.playVideoEvent);
      document.removeEventListener('theme:resize', this.setVideoFullscreenSizeEvent);

      delete players[this.playerId];
    },
  });

  return FeaturedVideo;
})();

PaloAlto.Footer = (function() {
  const selectors = {
    newsletterForm: '[data-newsletter-form]',
    popoutLocale: '[data-popout-locale]',
    popoutCurrency: '[data-popout-currency]',
  };

  function Footer(container) {
    this.container = container;
    this.newsletter = this.container.querySelector(selectors.newsletterForm);
    this.popoutLocale = this.container.querySelector(selectors.popoutLocale);
    this.popoutCurrency = this.container.querySelector(selectors.popoutCurrency);

    if (this.popoutLocale) {
      new PaloAlto.Popout(this.popoutLocale);
    }
    if (this.popoutCurrency) {
      new PaloAlto.Popout(this.popoutCurrency);
    }

    PaloAlto.initCollapsible();

    if (this.newsletter) {
      new PaloAlto.Newsletter(this.newsletter);
    }
  }

  return Footer;
})();

PaloAlto.GridSlider = (function() {
  const selectors = {
    slider: '[data-slider]',
    sliderItem: '[data-slide]',
    productGridItemImage: '[data-product-media-container]',
    flickityButton: '.flickity-button',
  };

  const classes = {
    carouselInactive: 'carousel--inactive',
  };

  const attributes = {
    sliderId: 'data-slider-id',
    showImage: 'data-slider-show-image',
  };

  function GridSlider(container) {
    this.container = container;
    this.columns = parseInt(this.container.dataset.columns);
    this.sliders = this.container.querySelectorAll(selectors.slider);
    this.checkSlidesSizeOnResize = this.checkSlidesSize.bind(this);
    this.resetSliderEvent = (e) => this.resetSlider(e);
    this.flkty = [];
    this.listen();
  }

  GridSlider.prototype = $.extend({}, GridSlider.prototype, {
    initSlider: function(slider) {
      const sliderId = slider.getAttribute(attributes.sliderId);
      slider.classList.remove(classes.carouselInactive);

      if (this.flkty[sliderId] === undefined || !this.flkty[sliderId].isActive) {
        this.flkty[sliderId] = new Flickity(slider, {
          pageDots: false,
          cellSelector: selectors.sliderItem,
          cellAlign: 'left',
          groupCells: true,
          contain: true,
          wrapAround: false,
          adaptiveHeight: false,
          on: {
            ready: () => {
              this.setSliderArrowsPosition(slider);
            },
          },
        });
      } else {
        this.setSliderArrowsPosition(slider);
      }
    },

    destroySlider: function(slider) {
      const sliderId = slider.getAttribute(attributes.sliderId);
      slider.classList.add(classes.carouselInactive);

      if (typeof this.flkty[sliderId] === 'object') {
        this.flkty[sliderId].destroy();
      }
    },

    // Move slides to their initial position
    resetSlider: function(e) {
      const slider = e.target;
      const sliderId = slider.getAttribute(attributes.sliderId);

      if (typeof this.flkty[sliderId] === 'object') {
        this.flkty[sliderId].select(0, false, true);
      }
    },

    checkSlidesSize: function() {
      if (this.sliders.length) {
        this.sliders.forEach((slider) => {
          const columns = this.columns;
          const isDesktop = window.innerWidth >= theme.sizes.large;
          const isTablet = window.innerWidth >= theme.sizes.small && window.innerWidth < theme.sizes.large;
          let itemsCount = slider.querySelectorAll(selectors.sliderItem).length;

          // If tab collection has show image enabled
          if (slider.hasAttribute(attributes.showImage)) {
            itemsCount += 1;
          }

          if ((isDesktop && itemsCount > columns) || (isTablet && itemsCount > 2)) {
            this.initSlider(slider);
          } else {
            this.destroySlider(slider);
          }
        });
      }
    },

    setSliderArrowsPosition: function(slider) {
      const arrows = slider.querySelectorAll(selectors.flickityButton);
      const image = slider.querySelector(selectors.productGridItemImage);

      if (arrows.length && image) {
        arrows.forEach((arrow) => {
          arrow.style.top = `${image.offsetHeight / 2}px`;
        });
      }
    },

    listen: function() {
      if (this.sliders.length) {
        this.checkSlidesSize();
        document.addEventListener('theme:resize:width', this.checkSlidesSizeOnResize);

        this.sliders.forEach((slider) => {
          slider.addEventListener('theme:tab:change', this.resetSliderEvent);
        });
      }
    },

    /**
     * Event callback for Theme Editor `section:block:select` event
     */
    onBlockSelect: function(evt) {
      const slider = evt.target.closest(selectors.slider);
      const flkty = Flickity.data(slider) || null;

      if (!slider) {
        return;
      }

      if (flkty !== null && flkty.isActive) {
        const index = parseInt([...evt.target.parentNode.children].indexOf(evt.target));
        const slidesPerPage = parseInt(flkty.slides[0].cells.length);
        const groupIndex = Math.floor(index / slidesPerPage);

        flkty.select(groupIndex);
      } else {
        const sliderStyle = slider.currentStyle || window.getComputedStyle(slider);
        const sliderPadding = parseInt(sliderStyle.paddingLeft);
        const blockPositionLeft = evt.target.offsetLeft - sliderPadding;

        // Native scroll to item
        slider.scrollTo({
          top: 0,
          left: blockPositionLeft,
          behavior: 'smooth',
        });
      }
    },

    /**
     * Event callback for Theme Editor `section:unload` event
     */
    onUnload: function() {
      if (this.flkty) {
        for (const key in this.flkty) {
          if (this.flkty.hasOwnProperty(key)) {
            this.flkty[key].destroy();
          }
        }
      }

      document.removeEventListener('theme:resize:width', this.checkSlidesSizeOnResize);

      if (this.sliders.length) {
        this.sliders.forEach((slider) => {
          slider.addEventListener('theme:tab:change', this.resetSliderEvent);
        });
      }
    },
  });

  return GridSlider;
})();

PaloAlto.Header = (function() {
  const selectors = {
    announcementBar: '[data-announcement-wrapper]',
    collectionFilters: '[data-collection-filters]',
    disclosureWrappper: '[data-hover-disclosure]',
    logo: '[data-logo]',
    mobileNavDropdownTrigger: '[data-collapsible-trigger]',
    nav: '[data-nav]',
    navIcons: '[data-nav-icons]',
    navItem: '[data-nav-item]',
    navLinkMobile: '[data-nav-link-mobile]',
    navSearch: '[data-nav-search]',
    wrapper: '[data-wrapper]',
  };

  const classes = {
    jsDrawerOpenAll: ['js-drawer-open', 'js-drawer-open-cart'],
    headerTransparent: 'site-header--transparent',
    headerLoading: 'site-header--loading',
    hasScrolled: 'has-scrolled',
    hideHeader: 'hide-header',
    navCompress: 'nav--compress',
    headerSticky: 'header--sticky',
  };

  function Header(container) {
    this.container = container;
    this.header = container;
    this.headerSection = container.parentNode;
    this.headerWrapper = container.querySelector(selectors.wrapper);
    this.logo = container.querySelector(selectors.logo);
    this.nav = container.querySelector(selectors.nav);
    this.navIcons = container.querySelector(selectors.navIcons);
    this.navDrawerCloseEvent = null;
    this.headerStateEvent = (evt) => this.headerState(evt);

    PaloAlto.initCollapsible();
    PaloAlto.initTransparentHeader();
    PaloAlto.setMainSpacing();

    window.cart = new PaloAlto.CartDrawer();

    this.sections = [];
    const disclosures = this.container.querySelectorAll(selectors.disclosureWrappper);
    if (disclosures.length) {
      disclosures.forEach((el) => {
        this.sections.push(new PaloAlto.HoverDisclosure(el));
      });
    }

    this.controlNav();
    this.initMobileNav();

    window.addEventListener('load', this.controlNav.bind(this));
    document.addEventListener('theme:resize:width', this.controlNav.bind(this));

    const navSearch = document.querySelector(selectors.navSearch);
    const hasCollectionFilters = document.querySelector(selectors.collectionFilters);

    // Init ajax search if only search icon is shown
    if (navSearch) {
      PaloAlto.NavSearch.init();
    }

    if (!hasCollectionFilters) {
      this.initStickyHeader();
    } else {
      this.header.classList.remove(classes.headerLoading);
    }
  }

  Header.prototype = $.extend({}, Header.prototype, {
    initStickyHeader: function() {
      this.position = this.header.dataset.position;

      if (this.position === 'fixed') {
        this.headerSection.classList.add(classes.headerSticky);
      } else {
        this.headerSection.classList.remove(classes.headerSticky);
      }

      this.header.classList.remove(classes.headerLoading);
      this.headerState();
      document.addEventListener('theme:scroll', this.headerStateEvent);
    },

    // Switch to "compact" header on scroll
    headerState: function(evt) {
      const headerHeight = parseInt(this.header.dataset.height || this.header.offsetHeight);
      const announcementBar = document.querySelector(selectors.announcementBar);
      const announcementHeight = announcementBar ? announcementBar.offsetHeight : 0;
      const pageOffset = headerHeight + announcementHeight;
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollUp = evt && evt.detail && evt.detail.up;

      if (this.position === 'fixed') {
        // Show compact header when scroll down
        if (currentScrollTop > pageOffset) {
          document.body.classList.add(classes.hasScrolled);
          this.header.classList.remove(classes.headerTransparent);
        } else {
          document.body.classList.remove(classes.hasScrolled);

          if (window.isHeaderTransparent) { this.header.classList.add(classes.headerTransparent); }
        }

        // Hide compact header when scroll back to top
        if (currentScrollTop < pageOffset && scrollUp) {
          document.body.classList.add(classes.hideHeader);
        } else {
          document.body.classList.remove(classes.hideHeader);
        }
      }
    },

    controlNav: function() {
      // Reset nav to normal state
      this.nav.classList.remove(classes.navCompress);

      // Subtract 50 from width to give space between the logo and links
      const gap = 20; // Gap between Logo and Nav links
      const isNavCentered = this.header.dataset.navAlignment === 'center';
      const isNavLeft = this.header.dataset.navAlignment === 'left';
      const headerWrapperStyles = this.headerWrapper.currentStyle || window.getComputedStyle(this.headerWrapper);
      const headerWidth = this.headerWrapper.clientWidth - parseFloat(headerWrapperStyles.paddingLeft) - parseFloat(headerWrapperStyles.paddingRight);
      const logoWidth = this.logo ? this.logo.offsetWidth : 0;
      const navIconsWidth = this.navIcons ? this.navIcons.offsetWidth : 0;
      let maxNavWidth = headerWidth - logoWidth - navIconsWidth - gap;
      let navItemsWidth = this.getNavItemsWidth();

      if (isNavCentered) {
        maxNavWidth = headerWidth - (Math.max(logoWidth, navIconsWidth) + gap) * 2;
      }

      if (isNavLeft) {
        maxNavWidth = (headerWidth - (logoWidth + gap * 2)) / 2;
      }

      if (navItemsWidth > maxNavWidth) {
        this.nav.classList.add(classes.navCompress);
      } else {
        this.nav.classList.remove(classes.navCompress);
      }
    },

    getNavItemsWidth: function() {
      // Reset nav items width
      let navItemsWidth = 0;
      const navItems = this.nav.querySelectorAll(selectors.navItem);

      if (navItems.length) {
        navItems.forEach((item) => {
          // Round up to be safe
          navItemsWidth += Math.ceil(item.offsetWidth);
        });
      }

      return navItemsWidth;
    },

    initMobileNav: function() {
      if (theme.settings.mobileMenuBehaviour === 'link') { return; }

      const navMobileLinks = this.headerSection.querySelectorAll(selectors.navLinkMobile);
      if (navMobileLinks.length) {
        navMobileLinks.forEach((link) => {
          link.addEventListener('click', (e) => {
            const hasDropdown = link.parentNode.querySelectorAll(selectors.mobileNavDropdownTrigger).length;
            const dropdownTrigger = link.nextElementSibling;

            if (hasDropdown) {
              e.preventDefault();
              dropdownTrigger.dispatchEvent(new Event('click'), {bubbles: true});
            }
          });
        });
      }
    },

    onUnload: function() {
      PaloAlto.Drawer.close();

      document.body.classList.remove(...classes.jsDrawerOpenAll);
      document.removeEventListener('theme:scroll', this.headerStateEvent);
      document.removeEventListener('theme:resize:width', this.controlNav);
      document.dispatchEvent(new CustomEvent('theme:scroll:unlock', {bubbles: true}));

      if (typeof window.cart.destroy === 'function') {
        window.cart.destroy();
      }
    },
  });

  return Header;
})();

PaloAlto.IconsRow = (function() {
  const selectors = {
    slider: '[data-slider]',
  };

  function IconsRow(container) {
    this.container = container;
  }

  IconsRow.prototype = $.extend({}, IconsRow.prototype, {
    onBlockSelect(evt) {
      const slider = this.container.querySelector(selectors.slider);
      const sliderStyle = slider.currentStyle || window.getComputedStyle(slider);
      const sliderPadding = parseInt(sliderStyle.paddingLeft);
      const blockPositionLeft = evt.target.offsetLeft - sliderPadding;

      slider.scrollTo({
        top: 0,
        left: blockPositionLeft,
        behavior: 'smooth',
      });
    },
  });

  return IconsRow;
})();

PaloAlto.ImageAccordions = (function() {
  const selectors = {
    item: '[data-accordion-item]',
    button: '[data-accordion-button]',
  };

  const classes = {
    isExpanded: 'is-expanded',
  };

  function ImageAccordions(container) {
    this.container = container;
    this.imageAccordionsItems = this.container.querySelectorAll(selectors.item);
    this.buttons = this.container.querySelectorAll(selectors.button);
    this.accordionExpandEvent = (item) => this.accordionExpand(item);
    this.accordionFocusEvent = (item) => this.accordionFocus(item);

    this.init();
  }

  ImageAccordions.prototype = $.extend({}, ImageAccordions.prototype, {
    init() {
      this.imageAccordionsItems.forEach(item => {
        item.addEventListener('mouseenter', this.accordionExpandEvent.bind(this, item));
      });

      this.buttons.forEach(button => {
        button.addEventListener('focusin', this.accordionFocusEvent.bind(this, button));
      });
    },

    accordionExpand(item) {
      if (!item.classList.contains(classes.isExpanded)) {
        this.imageAccordionsItems.forEach((item) => {
          item.classList.remove(classes.isExpanded);
        });
        item.classList.add(classes.isExpanded);
      }
    },

    accordionFocus(button) {
      button.closest(selectors.item).dispatchEvent(new Event('mouseenter'));
    },

    onBlockSelect: function(evt) {
      const element = evt.target;
      if (element) {
        element.dispatchEvent(new Event('mouseenter'));
      }
    },
  });

  return ImageAccordions;
})();

PaloAlto.Look = (function() {
  const selectors = {
    pointer: '[data-pointer]'
  };

  const classes = {
    pointerEnd: 'pointer--end',
    pointerReverse: 'pointer--reverse',
    pointerReverseEnd: 'pointer--reverse-end',
    pointerBottom: 'pointer--bottom',
  };

  const attributes = {
    dataLeft: 'data-left',
    dataTop: 'data-top',
  }

  function Look(container) {
    this.container = container;
    this.init();
  }

  Look.prototype = $.extend({}, Look.prototype, {
    init: function() {
      var pointers = this.container.querySelectorAll(selectors.pointer);

      if (pointers.length) {
        pointers.forEach((pointer) => {
          if (pointer.getAttribute(attributes.dataLeft) < 25) {
            pointer.classList.add(classes.pointerEnd);
          } else if (pointer.getAttribute(attributes.dataLeft) > 50 && pointer.getAttribute(attributes.dataLeft) <= 75) {
            pointer.classList.add(classes.pointerReverse);
          } else if (pointer.getAttribute(attributes.dataLeft) > 75) {
            pointer.classList.add(classes.pointerReverse, classes.pointerReverseEnd);
          }

          if (pointer.getAttribute(attributes.dataTop) < 35) {
            pointer.classList.add(classes.pointerBottom);
          }
        });
      }
    },
  });

  return Look;
})();

PaloAlto.ColumnsWithImage = (function() {
  const selectors = {
    slider: '[data-slider]',
    sliderItem: '[data-slider-item]',
    sliderItemImage: '[data-media-container]',
    flickityButton: '.flickity-button',
  };

  const classes = {
    carouselInactive: 'carousel--inactive',
  };

  function ColumnsWithImage(container) {
    this.container = container;
    this.slider = this.container.querySelector(selectors.slider);
    this.flkty = null;
    this.gutter = 0;
    this.checkSlidesSizeOnResize = this.checkSlidesSize.bind(this);
    this.listen();

    PaloAlto.videoLink();
  }

  ColumnsWithImage.prototype = $.extend({}, ColumnsWithImage.prototype, {
    initSlider: function() {
      this.slider.classList.remove(classes.carouselInactive);

      this.flkty = new Flickity(this.slider, {
        pageDots: false,
        cellAlign: 'left',
        groupCells: true,
        contain: true,
        on: {
          ready: () => {
            this.setSliderArrowsPosition(this.slider);
          },
        },
      });
    },

    destroySlider: function() {
      this.slider.classList.add(classes.carouselInactive);

      if (this.flkty !== null) {
        this.flkty.destroy();
        this.flkty = null;
      }
    },

    checkSlidesSize: function() {
      const sliderItemStyle = this.container.querySelector(selectors.sliderItem).currentStyle || window.getComputedStyle(this.container.querySelector(selectors.sliderItem));
      this.gutter = parseInt(sliderItemStyle.marginRight);
      const containerWidth = this.slider.offsetWidth;
      const itemsWidth = this.getItemsWidth();
      const itemsOverflowViewport = containerWidth < itemsWidth;

      if (window.innerWidth >= theme.sizes.small && itemsOverflowViewport) {
        this.initSlider();
      } else {
        this.destroySlider();
      }
    },

    getItemsWidth: function() {
      let itemsWidth = 0;
      const slides = this.slider.querySelectorAll(selectors.sliderItem);
      if (slides.length) {
        slides.forEach((item) => {
          itemsWidth += item.offsetWidth + this.gutter;
        });
      }

      return itemsWidth;
    },

    listen: function() {
      if (this.slider) {
        this.checkSlidesSize();
        document.addEventListener('theme:resize:width', this.checkSlidesSizeOnResize);
      }
    },

    setSliderArrowsPosition: function(slider) {
      const arrows = slider.querySelectorAll(selectors.flickityButton);
      const image = slider.querySelector(selectors.sliderItemImage);

      if (arrows.length && image) {
        arrows.forEach((arrow) => {
          arrow.style.top = `${image.offsetHeight / 2}px`;
        });
      }
    },

    onBlockSelect: function(evt) {
      if (this.flkty !== null) {
        const index = parseInt([...evt.target.parentNode.children].indexOf(evt.target));
        const slidesPerPage = parseInt(this.flkty.slides[0].cells.length);
        const groupIndex = Math.floor(index / slidesPerPage);

        this.flkty.select(groupIndex);
      } else {
        const sliderStyle = this.slider.currentStyle || window.getComputedStyle(this.slider);
        const sliderPadding = parseInt(sliderStyle.paddingLeft);
        const blockPositionLeft = evt.target.offsetLeft - sliderPadding;

        // Native scroll to item
        this.slider.scrollTo({
          top: 0,
          left: blockPositionLeft,
          behavior: 'smooth',
        });
      }
    },

    onUnload: function() {
      document.removeEventListener('theme:resize:width', this.checkSlidesSizeOnResize);
    },
  });

  return ColumnsWithImage;
})();

PaloAlto.ListCollections = (function() {
  function ListCollections(container) {
    this.gridSlider = new PaloAlto.GridSlider(container);
  }

  ListCollections.prototype = $.extend({}, ListCollections.prototype, {

    /**
     * Event callback for Theme Editor `section:block:select` event
     */
    onBlockSelect: function(evt) {
      if (this.gridSlider) {
        this.gridSlider.onBlockSelect(evt);
      }
    },

    /**
     * Event callback for Theme Editor `section:unload` event
     */
    onUnload: function() {
      if (this.gridSlider) {
        this.gridSlider.onUnload();
      }
    },
  });

  return ListCollections;
})();

PaloAlto.LogoList = (function() {
  const selectors = {
    slider: '[data-slider]',
    sliderItem: '[data-slider-item]',
  };

  function LogoList(container) {
    this.container = container;
    this.slider = this.container.querySelector(selectors.slider);
    this.sliderResizeEvent = this.checkSlides.bind(this);
    this.flkty = null;
    this.checkSlides();

    document.addEventListener('theme:resize:width', this.sliderResizeEvent);
  }

  LogoList.prototype = $.extend({}, LogoList.prototype, {
    checkSlides() {
      const containerWidth = this.container.offsetWidth;
      let slidesTotalWidth = this.getSlidesWidth();

      if (window.innerWidth >= theme.sizes.small && slidesTotalWidth > containerWidth) {
        this.initSlider();
      } else {
        this.destroySlider();
      }
    },

    getSlidesWidth() {
      let slidesTotalWidth = 0;
      const slides = this.container.querySelectorAll(selectors.sliderItem);

      if (slides.length) {
        slides.forEach(slide => {
          slidesTotalWidth += slide.offsetWidth;
        });
      }
      return slidesTotalWidth;
    },

    initSlider() {
      const flkty = Flickity.data(this.slider);

      if (flkty !== null) {
        this.flkty = new Flickity(this.slider, {
          contain: true,
          wrapAround: true,
          pageDots: false,
        });

				// iOS smooth scrolling fix
        PaloAlto.flickitySmoothScrolling(this.slider);
      }
    },

    destroySlider() {
      const flkty = Flickity.data(this.slider);

      if (flkty) {
        this.flkty.destroy();
      }
    },

    onBlockSelect(evt) {
      const index = parseInt([...evt.target.parentNode.children].indexOf(evt.target));

      if (this.flkty !== null) {
        this.flkty.select(index);
      } else {
        const sliderStyle = this.slider.currentStyle || window.getComputedStyle(this.slider);
        const sliderPadding = parseInt(sliderStyle.paddingLeft);
        const blockPositionLeft = evt.target.offsetLeft - sliderPadding;

        this.slider.scrollTo({
          top: 0,
          left: blockPositionLeft,
          behavior: 'smooth',
        });
      }
    },

    onUnload() {
      const flkty = Flickity.data(this.slider);

      if (flkty) {
        this.flkty.destroy();
      }
      document.removeEventListener('theme:resize:width', this.sliderResizeEvent);
    },
  });

  return LogoList;
})();

PaloAlto.Locations = (function() {
  const selectors = {
    slider: '[data-slider-gallery]',
    sliderNav: '[data-slider-info]',
    item: '[data-slide-item]',
  };

  function Locations(container) {
    this.container = container;
    this.slider = this.container.querySelector(selectors.slider);
    this.sliderNav = this.container.querySelector(selectors.sliderNav);

    this.initSlider();
  }

  Locations.prototype = $.extend({}, Locations.prototype, {

    /* Init slider */
    initSlider() {
      const slidesCount = this.container.querySelectorAll(selectors.item).length;
      let flkty = Flickity.data(this.slider) || null;
      let flktyNav = Flickity.data(this.sliderNav) || null;

      if (slidesCount <= 1) { return; }

      flkty = new Flickity(this.slider, {
        fade: true,
        wrapAround: true,
        adaptiveHeight: true,
        prevNextButtons: false,
        pageDots: false,
      });

      // iOS smooth scrolling fix
      PaloAlto.flickitySmoothScrolling(this.slider);

      flktyNav = new Flickity(this.sliderNav, {
        fade: true,
        wrapAround: true,
        imagesLoaded: true,
        lazyLoad: true,
        asNavFor: this.slider,
        prevNextButtons: true,
        pageDots: false,
      });

      // Trigger text change on image move/drag
      flktyNav.on('change', () => {
        flkty.selectCell(flktyNav.selectedIndex);
      });

       // Trigger text change on image move/drag
      flkty.on('change', () => {
        flktyNav.selectCell(flkty.selectedIndex);
      });
    },

    onBlockSelect(evt) {
      const flkty = Flickity.data(this.slider) || null;
      const flktyNav = Flickity.data(this.sliderNav) || null;
      const index = parseInt([...evt.target.parentNode.children].indexOf(evt.target));

      if (flkty !== null) {
        flkty.select(index);
      }
      if (flktyNav !== null) {
        flktyNav.select(index);
      }
    },
  });

  return Locations;
})();

PaloAlto.Mosaic = (function() {
  const selectors = {
    grid: '[data-grid]',
    item: '[data-item]',
  };

  function Mosaic(container) {
    this.container = container;
    this.grid = this.container.querySelector(selectors.grid);
  }

  Mosaic.prototype = $.extend({}, Mosaic.prototype, {
    onBlockSelect: function(evt) {
      const wrapperStyle = this.grid.currentStyle || window.getComputedStyle(this.grid);
      const wrapperPadding = parseInt(wrapperStyle.paddingLeft);
      const blockPositionLeft = evt.target.offsetLeft - wrapperPadding;

      // Native scroll to item
      this.grid.scrollTo({
        top: 0,
        left: blockPositionLeft,
        behavior: 'smooth',
      });
    },
  });

  return Mosaic;
})();

PaloAlto.NewsletterSection = (function() {
  const selectors = {
    newsletterForm: '[data-newsletter-form]',
  };

  function NewsletterSection(container) {
    this.container = container;
    this.newsletters = this.container.querySelectorAll(selectors.newsletterForm);

    if (this.newsletters) {
      this.newsletters.forEach((newsletter) => {
        new PaloAlto.Newsletter(newsletter);
      });
    }
  }

  return NewsletterSection;
})();

PaloAlto.OverlappingImages = (function() {
  function OverlappingImages(container) {
    PaloAlto.videoLink();
  }

  return OverlappingImages;
})();

PaloAlto.Popups = (function() {
  const selectors = {
    largePromo: '[data-large-promo]',
    largePromoInner: '[data-large-promo-inner]',
    tracking: '[data-tracking-consent]',
    trackingInner: '[data-tracking-consent-inner]',
    trackingAccept: '[data-confirm-cookies]',
    popupBar: '[data-popup-bar]',
    popupBarHolder: '[data-popup-bar-holder]',
    popupBarToggle: '[data-popup-bar-toggle]',
    popupBody: '[data-popup-body]',
    popupClose: '[data-popup-close]',
    popupUnderlay: '[data-popup-underlay]',
    newsletterForm: '[data-newsletter-form]',
  };

  const attributes = {
    cookieName: 'data-cookie-name',
    targetReferrer: 'data-target-referrer',
  };

  const classes = {
    success: 'has-success',
    error: 'has-error',
    selected: 'selected',
    hasBlockSelected: 'has-block-selected',
    expanded: 'popup--expanded',
    visible: 'popup--visible',
  };

  let sections = {};

  function DelayShow(popupContainer, popup, callback = null) {
    this.popupContainer = popupContainer;
    this.popup = popup;
    this.popupBody = popup.querySelector(selectors.popupBody);
    this.delay = popupContainer.dataset.popupDelay;
    this.isSubmitted = window.location.href.indexOf('accepts_marketing') !== -1 || window.location.href.indexOf('customer_posted=true') !== -1;
    this.callback = callback;
    this.showPopupOnScrollEvent = () => this.showPopupOnScroll();

    if (this.delay === 'always' || this.isSubmitted) {
      this.always();
    }

    if (this.delay && this.delay.includes('delayed') && !this.isSubmitted) {
      const seconds = this.delay.includes('_') ? parseInt(this.delay.split('_')[1]) : 10;
      this.delayed(seconds);
    }

    if (this.delay === 'bottom' && !this.isSubmitted) {
      this.bottom();
    }

    if (this.delay === 'idle' && !this.isSubmitted) {
      this.idle();
    }
  }

  DelayShow.prototype = $.extend({}, DelayShow.prototype, {
    always() {
      this.showPopup();
    },

    delayed(seconds = 10) {
      // Show popup after specific seconds
      setTimeout(() => {
        this.showPopup();
      }, seconds * 1000);
    },

    // Scroll to the bottom of the page
    bottom() {
      document.addEventListener('theme:scroll', this.showPopupOnScrollEvent);
    },

    // Idle for 1 min
    idle() {
      let timer = 0;
      let idleTime = 60000;
      const documentEvents = ['mousemove', 'mousedown', 'click', 'touchmove', 'touchstart', 'touchend', 'keydown', 'keypress'];
      const windowEvents = ['load', 'resize', 'scroll'];

      const startTimer = () => {
        timer = setTimeout(() => {
          timer = 0;
          this.showPopup();
        }, idleTime);

        documentEvents.forEach((eventType) => {
          document.addEventListener(eventType, resetTimer);
        });

        windowEvents.forEach((eventType) => {
          window.addEventListener(eventType, resetTimer);
        });
      };

      const resetTimer = () => {
        if (timer) {
          clearTimeout(timer);
        }

        documentEvents.forEach((eventType) => {
          document.removeEventListener(eventType, resetTimer);
        });

        windowEvents.forEach((eventType) => {
          window.removeEventListener(eventType, resetTimer);
        });

        startTimer();
      };

      startTimer();
    },

    showPopup() {
      this.popup.classList.add(classes.visible);

      if (typeof this.callback === 'function') {
        this.callback();
      }
    },

    hidePopup() {
      this.popup.classList.remove(classes.visible);
      this.scrollUnlock();
    },

    scrollLock() {
      this.a11y.trapFocus({
        container: this.popupBody,
      });
      document.dispatchEvent(new CustomEvent('theme:scroll:lock', {bubbles: true, detail: this.popupBody}));
    },

    scrollUnlock() {
      this.a11y.removeTrapFocus();
      // Unlock scrollbar after popup animation completes
      setTimeout(() => {
        document.dispatchEvent(new CustomEvent('theme:scroll:unlock', {bubbles: true}));
      }, 300);
    },

    showPopupOnScroll() {
      if (window.scrollY + window.innerHeight >= document.body.clientHeight) {
        this.showPopup();
        document.removeEventListener('theme:scroll', this.showPopupOnScrollEvent);
      }
    },

    onUnload() {
      document.removeEventListener('theme:scroll', this.showPopupOnScrollEvent);
    },
  });

  function TargetReferrer(el) {
    this.popupContainer = el;
    this.locationPath = location.href;

    if (!this.popupContainer.hasAttribute(attributes.targetReferrer)) {
      return false;
    }

    if (this.locationPath.indexOf(this.popupContainer.getAttribute(attributes.targetReferrer)) === -1 && !window.Shopify.designMode) {
      this.popupContainer.parentNode.removeChild(this.popupContainer);
    }
  }

  function LargePopup(el) {
    this.popupContainer = el;
    this.popup = this.popupContainer.querySelector(selectors.largePromoInner);
    this.popupBody = this.popup.querySelector(selectors.popupBody);
    this.close = this.popup.querySelector(selectors.popupClose);
    this.underlay = this.popup.querySelector(selectors.popupUnderlay);
    this.form = this.popup.querySelector(selectors.newsletterForm);
    this.cookie = new PopupCookie(this.popupContainer.dataset.cookieName, 'user_has_closed');
    this.isTargeted = new TargetReferrer(this.popupContainer);
    this.a11y = slate.a11y;

    this.init();
  }

  LargePopup.prototype = $.extend({}, LargePopup.prototype, {
    init() {
      const cookieExists = this.cookie.read() !== false;

      if (!cookieExists || window.Shopify.designMode) {
        if (!window.Shopify.designMode) {
          new DelayShow(this.popupContainer, this.popup, () => this.scrollLock());
        }

        if (this.form) {
          setTimeout(() => {
            if (this.form.classList.contains(classes.success)) {
              this.showPopupIfNoCookie();
            }
          });
        }

        this.initClosers();
      }
    },

    showPopupIfNoCookie() {
      this.showPopup();
      this.scrollLock();
    },

    initClosers() {
      this.close.addEventListener('click', this.closePopup.bind(this));
      this.underlay.addEventListener('click', this.closePopup.bind(this));
      this.popupContainer.addEventListener('keyup', (e) => {
        if (e.keyCode === slate.utils.keyboardKeys.ESCAPE) {
          this.closePopup(e);
        }
      });
    },

    closePopup(e) {
      e.preventDefault();
      this.hidePopup();
      this.cookie.write();
      this.scrollUnlock();
    },

    scrollLock() {
      this.a11y.trapFocus({
        container: this.popupBody,
      });
      document.dispatchEvent(new CustomEvent('theme:scroll:lock', {bubbles: true, detail: this.popupBody}));
    },

    scrollUnlock() {
      this.a11y.removeTrapFocus();
      // Unlock scrollbar after popup animation completes
      setTimeout(() => {
        document.dispatchEvent(new CustomEvent('theme:scroll:unlock', {bubbles: true}));
      }, 300);
    },

    showPopup() {
      this.popup.classList.add(classes.visible);
    },

    hidePopup() {
      this.popup.classList.remove(classes.visible);
    },

    onBlockSelect(evt) {
      if (this.popupContainer.contains(evt.target)) {
        this.popup.classList.add(classes.selected);
        this.popupContainer.classList.add(classes.hasBlockSelected);
        this.showPopup();
        this.scrollLock();
      }
    },

    onBlockDeselect(evt) {
      if (this.popupContainer.contains(evt.target)) {
        this.popup.classList.remove(classes.selected);
        this.popupContainer.classList.remove(classes.hasBlockSelected);
        this.hidePopup();
        this.scrollUnlock();
      }
    },
  });

  function Tracking(el) {
    this.popupContainer = el;
    this.popup = this.popupContainer.querySelector(selectors.trackingInner);
    this.close = this.popup.querySelector(selectors.popupClose);
    this.acceptButton = this.popup.querySelector(selectors.trackingAccept);
    this.enable = this.popupContainer.dataset.enable === 'true';

    window.Shopify.loadFeatures(
      [
        {
          name: 'consent-tracking-api',
          version: '0.1',
        },
      ],
      (error) => {
        if (error) {
          throw error;
        }

        const userCanBeTracked = window.Shopify.customerPrivacy.userCanBeTracked();
        const userTrackingConsent = window.Shopify.customerPrivacy.getTrackingConsent();

        this.enableTracking = !userCanBeTracked && userTrackingConsent === 'no_interaction' && this.enable;

        if (window.Shopify.designMode) {
          this.enableTracking = true;
        }

        this.init();
      },
    );
  }

  Tracking.prototype = $.extend({}, Tracking.prototype, {
    init() {
      if (this.enableTracking) {
        this.showPopup();
      }

      this.clickEvents();
    },

    clickEvents() {
      this.close.addEventListener('click', (event) => {
        event.preventDefault();

        window.Shopify.customerPrivacy.setTrackingConsent(false, () => this.hidePopup());
      });

      this.acceptButton.addEventListener('click', (event) => {
        event.preventDefault();

        window.Shopify.customerPrivacy.setTrackingConsent(true, () => this.hidePopup());
      });

      document.addEventListener('trackingConsentAccepted', () => {
        console.log('trackingConsentAccepted event fired');
      });
    },

    showPopup() {
      this.popup.classList.add(classes.visible);
    },

    hidePopup() {
      this.popup.classList.remove(classes.visible);
    },

    onBlockSelect(evt) {
      if (this.popupContainer.contains(evt.target) && this.enableTracking) {
        this.showPopup();
        this.popup.classList.add(classes.selected);
        this.popup.parentNode.classList.add(classes.hasBlockSelected);
      }
    },

    onBlockDeselect(evt) {
      if (this.popupContainer.contains(evt.target)) {
        this.popup.classList.remove(classes.selected);
        this.popupContainer.classList.remove(classes.hasBlockSelected);
        this.hidePopup();
        this.scrollUnlock();
      }
    },
  });

  function PopupBar(el) {
    this.popupContainer = el;
    this.popup = this.popupContainer.querySelector(selectors.popupBarHolder);
    this.popupBody = this.popup.querySelector(selectors.popupBody);
    this.close = this.popup.querySelector(selectors.popupClose);
    this.underlay = this.popup.querySelector(selectors.popupUnderlay);
    this.toggle = this.popup.querySelector(selectors.popupBarToggle);
    this.cookie = new PopupCookie(this.popupContainer.dataset.cookieName, 'user_has_closed');
    this.form = this.popup.querySelector(selectors.newsletterForm);
    this.isTargeted = new TargetReferrer(this.popupContainer);
    this.a11y = slate.a11y;

    this.init();
  }

  PopupBar.prototype = $.extend({}, PopupBar.prototype, {
    init() {
      const cookieExists = this.cookie.read() !== false;

      if (!cookieExists || window.Shopify.designMode) {
        if (!window.Shopify.designMode) {
          new DelayShow(this.popupContainer, this.popup);
        } else {
          this.showPopup();
        }

        this.initPopupToggleButton();
        this.initClosers();

        if (this.form) {
          setTimeout(() => {
            if (this.form.classList.contains(classes.success)) {
              this.showPopupIfNoCookie();
            }

            if (this.form.classList.contains(classes.error)) {
              // Expand popup if form has error
              this.toggle.dispatchEvent(new Event('click'));
            }
          });
        }
      }
    },

    showPopupIfNoCookie() {
      this.showPopup();
      this.toggle.dispatchEvent(new Event('click'));
    },

    initPopupToggleButton() {
      this.toggle.addEventListener('click', (event) => {
        event.preventDefault();

        this.popup.classList.toggle(classes.expanded);

        if (this.popup.classList.contains(classes.expanded)) {
          this.scrollLock();
        } else {
          this.scrollUnlock();
        }
      });
    },

    showPopup() {
      this.popup.classList.add(classes.visible);
    },

    hidePopup() {
      this.popup.classList.remove(classes.visible);
    },

    initClosers() {
      this.close.addEventListener('click', this.closePopup.bind(this));
      this.underlay.addEventListener('click', () => this.toggle.dispatchEvent(new Event('click')));
      this.popupContainer.addEventListener('keyup', (e) => {
        if (e.keyCode === slate.utils.keyboardKeys.ESCAPE) {
          this.popup.classList.remove(classes.expanded);
          this.scrollUnlock();
        }
      });
    },

    closePopup(e) {
      e.preventDefault();

      this.cookie.write();
      this.hidePopup();
      this.scrollUnlock();
    },

    scrollLock() {
      this.a11y.trapFocus({
        container: this.popupBody,
      });
      document.dispatchEvent(new CustomEvent('theme:scroll:lock', {bubbles: true, detail: this.popupBody}));
    },

    scrollUnlock() {
      this.a11y.removeTrapFocus();
      document.dispatchEvent(new CustomEvent('theme:scroll:unlock', {bubbles: true}));
    },

    onBlockSelect(evt) {
      if (this.popupContainer.contains(evt.target)) {
        this.showPopup();
        this.popup.classList.add(classes.expanded);
        this.popup.classList.add(classes.selected);
        this.popup.parentNode.classList.add(classes.hasBlockSelected);
        this.scrollLock();
      }
    },

    onBlockDeselect(evt) {
      if (this.popupContainer.contains(evt.target)) {
        this.popup.classList.remove(classes.expanded);
        this.popup.classList.remove(classes.selected);
        this.popup.parentNode.classList.remove(classes.hasBlockSelected);
        this.hidePopup();
        this.scrollUnlock();
      }
    },
  });

  function Popups(container) {
    this.container = container;
    sections[this.container.id] = [];

    const popups = this.container.querySelectorAll(selectors.largePromo);
    if (popups.length) {
      popups.forEach((el) => {
        sections[this.container.id].push(new LargePopup(el));
      });
    }

    const popupBars = this.container.querySelectorAll(selectors.popupBar);
    if (popupBars.length) {
      popupBars.forEach((el) => {
        sections[this.container.id].push(new PopupBar(el));
      });
    }

    const cookiesPopups = this.container.querySelectorAll(selectors.tracking);
    if (cookiesPopups.length) {
      cookiesPopups.forEach((el) => {
        sections[this.container.id].push(new Tracking(el));
      });
    }

    const newsletterForms = this.container.querySelectorAll(selectors.newsletterForm);
    if (newsletterForms.length) {
      newsletterForms.forEach((form) => {
        sections[this.container.id].push(new PaloAlto.Newsletter(form));
      });
    }
  }

  Popups.prototype = $.extend({}, Popups.prototype, {
    onBlockSelect: function(evt) {
      sections[this.container.id].forEach((el) => {
        if (typeof el.onBlockSelect === 'function') {
          el.onBlockSelect(evt);
        }
      });
    },
    onBlockDeselect: function(evt) {
      sections[this.container.id].forEach((el) => {
        if (typeof el.onBlockDeselect === 'function') {
          el.onBlockDeselect(evt);
        }
      });
    },
    onUnload: function(evt) {
      sections[this.container.id].forEach((el) => {
        if (typeof el.onUnload === 'function') {
          el.onUnload(evt);
        }
      });
    },
  });

  return Popups;
})();

PaloAlto.Press = (function() {
  const selectors = {
    pressItems: '[data-press-items]',
    logoSlider: '[data-logo-slider]',
    logoSlide: '[data-logo-slide]',
  };

  function Press(container) {
    this.container = container;
    this.slider = this.container.querySelector(selectors.pressItems);
    this.sliderNav = this.container.querySelector(selectors.logoSlider);
    this.sliderResizeEvent = this.checkSlides.bind(this);

    this.initSlider();
    this.checkSlides();

    window.addEventListener('load', this.resizeSlider.bind(this));
    document.addEventListener('theme:resize:width', this.sliderResizeEvent);
  }

  Press.prototype = $.extend({}, Press.prototype, {
    checkSlides() {
      const containerWidth = this.container.offsetWidth;
      const slides = this.container.querySelectorAll(selectors.logoSlide);
      const sliderNav = Flickity.data(this.sliderNav) || null;

      if (sliderNav !== null) {
        sliderNav.options.draggable = false;
        sliderNav.options.wrapAround = false;
        sliderNav.options.contain = true;

        if (this.getSlidesWidth() > containerWidth && slides.length > 2) {
          sliderNav.options.draggable = true;
          sliderNav.options.wrapAround = true;
          sliderNav.options.contain = false;
        }
        sliderNav.resize();
        sliderNav.updateDraggable();
      }
    },

    getSlidesWidth() {
      const slides = this.container.querySelectorAll(selectors.logoSlide);
      let slidesTotalWidth = 0;

      if (slides.length) {
        slides.forEach(slide => {
          slidesTotalWidth += slide.offsetWidth;
        });
      }
      return slidesTotalWidth;
    },

    /* Init slider */
    initSlider() {
      let flkty = Flickity.data(this.slider) || null;
      let flktyNav = Flickity.data(this.sliderNav) || null;

      flkty = new Flickity(this.slider, {
        fade: true,
        wrapAround: true,
        adaptiveHeight: true,
        prevNextButtons: false,
        pageDots: false,
      });

      flktyNav = new Flickity(this.sliderNav, {
        draggable: false,
        wrapAround: false,
        contain: true,
        imagesLoaded: true,
        lazyLoad: true,
        asNavFor: this.slider,
        prevNextButtons: false,
        adaptiveHeight: false,
        pageDots: false,
      });

      // iOS smooth scrolling fix
      PaloAlto.flickitySmoothScrolling(this.slider);
      PaloAlto.flickitySmoothScrolling(this.sliderNav);

      // Trigger text change on image move/drag
      flktyNav.on('change', () => {
        flkty.selectCell(flktyNav.selectedIndex);
      });

        // Trigger text change on image move/drag
      flkty.on('change', () => {
        flktyNav.selectCell(flkty.selectedIndex);
      });
    },

    // slider height fix on window load
    resizeSlider() {
      const hasSlider = Flickity.data(this.slider);

      if (hasSlider) {
        hasSlider.resize();
      }
    },

    onBlockSelect(evt) {
      const slider = Flickity.data(this.slider) || null;
      const sliderNav = Flickity.data(this.sliderNav) || null;
      const index = parseInt([...evt.target.parentNode.children].indexOf(evt.target));

      if (slider !== null) {
        slider.select(index);
      }

      if (sliderNav !== null) {
        sliderNav.select(index);
      }
    },

    onUnload() {
      document.removeEventListener('theme:resize:width', this.sliderResizeEvent);
    },
  });

  return Press;
})();

PaloAlto.Product = (function() {
  const selectors = {
    option: '[data-option]',
    popout: '[data-popout]',
    productMediaSlider: '[data-product-single-media-slider]',
    productMediaThumb: '[data-thumbnail-id]',
    productMediaThumbs: '[data-product-single-media-thumbs]',
    productMediaWrapper: '[data-product-single-media-wrapper]',
    productModel: '[data-model]',
    productSingleThumbnailLink: '.product-single__thumbnail-link',
    deferredMedia: '[data-deferred-media]',
    deferredMediaButton: '[data-deferred-media-button]',
    modalScrollContainer: '[data-tabs-holder]',
    formWrapper: '[data-form-wrapper]',
    tooltip: '[data-tooltip]',
  };

  const classes = {
    featuredProduct: 'featured-product',
    featuredProductOnboarding: 'featured-product--onboarding',
    hasMediaActive: 'has-media-active',
    isSelected: 'is-selected',
    mediaHidden: 'media--hidden',
    noOutline: 'no-outline',
    hasPopup: 'has-popup',
    isMoving: 'is-moving',
  };

  const attributes = {
    mediaId: 'data-media-id',
    sectionId: 'data-section-id',
    thumbId: 'data-thumbnail-id',
    loaded: 'loaded',
    tabindex: 'tabindex',
  };

  function Product(container) {
    this.container = container;
    this.sectionId = container.getAttribute(attributes.sectionId);
    this.formWrapper = this.container.querySelector(selectors.formWrapper);
    this.isFlickityDragging = false;
    this.flktyNavResize = null;
    this.enableHistoryState = !this.container.classList.contains(classes.featuredProduct);
    this.tooltips = [];

    this.initTooltips();
    this.initPopouts();

    PaloAlto.initCollapsible();
    PaloAlto.initSwatches.makeSwatch(container);
    new PaloAlto.ShareButton(container);

    // Skip initialization of product form, slider and media functions if section has onboarding content only
    if (container.classList.contains(classes.featuredProductOnboarding)) {
      return;
    }

    new PaloAlto.ProductAddForm(container);
    new PaloAlto.Zoom(container);

    this.initProductSlider();
    this.initMediaSwitch();
    this.initProductVideo();
    this.initProductModel();
    this.initShopifyXrLaunch();
  }

  Product.prototype = $.extend({}, Product.prototype, {

    /* Product Slider */
    initProductSlider: function() {
      const slider = this.container.querySelector(selectors.productMediaSlider);
      const thumbs = this.container.querySelector(selectors.productMediaThumbs);
      const media = this.container.querySelectorAll(selectors.productMediaWrapper);

      if (media.length > 1) {
        const flkty = new Flickity(slider, {
          wrapAround: true,
          pageDots: false,
          adaptiveHeight: true,
          on: {
            ready: () => {
              slider.setAttribute(attributes.tabindex, '-1');
            },
            dragStart: () => {
              slider.classList.add(classes.isMoving);
            },
            dragMove: () => {
              // Prevent lightbox trigger on dragMove
              this.isFlickityDragging = true;
            },
            staticClick: () => {
              this.isFlickityDragging = false;
            },
            settle: (event, index) => {
              const currentSlide = flkty.selectedElement;
              const mediaId = currentSlide.getAttribute(attributes.mediaId);
              currentSlide.setAttribute(attributes.tabindex, '0');
              [...currentSlide.parentNode.children].forEach((el) => {
                if (el === currentSlide) { return; }

                el.setAttribute(attributes.tabindex, '-1');
              });
              this.switchMedia(mediaId);
              slider.classList.remove(classes.isMoving);
            },
          },
        });

        // Toggle flickity draggable functionality based on media play/pause state
        if (media.length) {
          media.forEach((el) => {
            el.addEventListener('theme:media:play', () => {
              flkty.options.draggable = false;
              flkty.updateDraggable();
              el.closest(selectors.productMediaSlider).classList.add(classes.hasMediaActive);
            });

            el.addEventListener('theme:media:pause', () => {
              flkty.options.draggable = true;
              flkty.updateDraggable();
              el.closest(selectors.productMediaSlider).classList.remove(classes.hasMediaActive);
            });
          });
        }

        // iOS smooth scrolling fix
        PaloAlto.flickitySmoothScrolling(slider);

        if (thumbs !== null) {
          const flktyNav = new Flickity(thumbs, {
            asNavFor: slider,
            contain: true,
            pageDots: false,
            prevNextButtons: false,
            resize: true,
            on: {
              ready: () => {
                thumbs.setAttribute(attributes.tabindex, '-1');
              },
            },
          });

          this.flktyNavResize = () => {
            flktyNav.resize();
          };

          document.addEventListener('theme:resize:width', this.flktyNavResize);

          // iOS smooth scrolling fix
          PaloAlto.flickitySmoothScrolling(thumbs);

          // Disable link click
          const thumbLinks = this.container.querySelectorAll(selectors.productSingleThumbnailLink);
          if (thumbLinks.length) {
            thumbLinks.forEach((el) => {
              el.addEventListener('click', (e) => {
                e.preventDefault();
              });
            });
          }
        }
      }
    },

    handleMediaFocus: function(e) {
      // Do nothing if not ENTER key (13) or TAB key (9)
      if (e.keyCode !== 13 && e.keyCode !== 9) { return; }

      const mediaId = e.currentTarget.getAttribute(attributes.thumbId);
      const activeSlide = this.container.querySelector(`[${attributes.mediaId}="${mediaId}"]`);
      const slideIndex = parseInt([...activeSlide.parentNode.children].indexOf(activeSlide));
      const slider = this.container.querySelector(selectors.productMediaSlider);
      const sliderNav = this.container.querySelector(selectors.productMediaThumbs);
      const flkty = Flickity.data(slider) || null;
      const flktyNav = Flickity.data(sliderNav) || null;

      // Go to the related slide media
      if (flkty && flkty.isActive && slideIndex > -1 && e.keyCode === 13) {
        flkty.select(slideIndex);
      }

      // Move thumbs to the selected one
      if (flktyNav && flktyNav.isActive && slideIndex > -1) {
        flktyNav.select(slideIndex);
      }
    },

    switchMedia: function(mediaId) {
      const selectedMedia = this.container.querySelector(`${selectors.productMediaWrapper}[${attributes.mediaId}="${mediaId}"]`);
      const isFocusEnabled = !document.body.classList.contains(classes.noOutline);

      if (isFocusEnabled) { selectedMedia.focus(); }

      selectedMedia.closest(selectors.productMediaSlider).classList.remove(classes.hasMediaActive);
      selectedMedia.classList.remove(classes.mediaHidden);
      selectedMedia.dispatchEvent(new CustomEvent('theme:media:visible'), {bubbles: true});

      // If media is not loaded, trigger poster button click to load it
      const deferredMedia = selectedMedia.querySelector(selectors.deferredMedia);
      if (deferredMedia && deferredMedia.getAttribute(attributes.loaded) !== 'true') {
        selectedMedia.querySelector(selectors.deferredMediaButton).dispatchEvent(new Event('click'));
      }
    },

    initMediaSwitch: function() {
      const productThumbImages = this.container.querySelectorAll(selectors.productMediaThumb);
      if (productThumbImages.length) {
        productThumbImages.forEach((el) => {
          el.addEventListener('keyup', this.handleMediaFocus.bind(this));
          el.addEventListener('click', (e) => {
            e.preventDefault();
          });
        });
      }
    },

    initProductVideo: function() {
      this.videos = new PaloAlto.ProductVideo(this.container);
    },

    initProductModel: function() {
      const modelItems = this.container.querySelectorAll(selectors.productModel);
      if (modelItems.length) {
        modelItems.forEach((element) => {
          PaloAlto.ProductModel.init(element, this.sectionId);
        });
      }
    },

    initShopifyXrLaunch: function() {
      document.addEventListener('shopify_xr_launch', () => {
        const currentMedia = this.container.querySelector(`${selectors.productModel}:not(.${classes.mediaHidden})`);
        currentMedia.dispatchEvent(new CustomEvent('xrLaunch'));
      });
    },

    initTooltips: function() {
      const tooltips = this.container.querySelectorAll(selectors.tooltip);
      if (tooltips.length) {
        tooltips.forEach((tooltip) => {
          this.tooltips.push(new PaloAlto.Tooltip(tooltip));
        });
      }
    },

    initPopouts: function() {
      const popoutElements = this.container.querySelectorAll(selectors.popout);
      let popouts = {};

      if (popoutElements.length) {
        popoutElements.forEach((popout, index) => {
          popouts[index] = new PaloAlto.Popout(popout);
        });
      }
    },

    onUnload: function() {
      if (this.flktyNavResize !== null) {
        document.removeEventListener('theme:resize:width', this.flktyNavResize);
      }

      this.tooltips.forEach((el) => {
        if (typeof el.unload === 'function') {
          el.unload();
        }
      });
    },
  });

  return Product;
})();

PaloAlto.ProductGrid = (function() {
  const selectors = {
    slider: '[data-slider]',
    productMediaContainer: '[data-product-media-container]',
    productMediaSlider: '[data-product-media-slideshow]',
    productMediaSlide: '[data-product-media-slideshow-slide]',
    productImage: '[data-product-image]',
    progressBar: '[data-product-slideshow-progress]',
    flickityButton: '.flickity-button',
    quickButton: '[data-button-quick-view]',
  };

  const classes = {
    fill: 'fill',
  };

  function ProductGrid(container) {
    this.container = container;
    this.sliders = this.container.querySelectorAll(selectors.slider);

    if (theme.settings.productGridHover === 'slideshow' && !window.theme.touch) {
      this.productGridSlideshow();
    }

    PaloAlto.QuickViewPopup.init(this.container);
    PaloAlto.initSwatches.makeGridSwatch(this.container);
  }

  ProductGrid.prototype = $.extend({}, ProductGrid.prototype, {

    /* Product grid slideshow */
    productGridSlideshow: function() {
      const productMediaSlider = this.container.querySelectorAll(selectors.productMediaSlider);
      const linkedImages = this.container.querySelectorAll(selectors.productMediaContainer);

      if (productMediaSlider.length) {
        productMediaSlider.forEach((slider) => {
          const mediaContainer = slider.closest(selectors.productMediaContainer);
          const progressBar = mediaContainer.querySelector(selectors.progressBar);
          const countImages = slider.querySelectorAll(selectors.productMediaSlide).length;
          const autoplaySpeed = 2200;
          const draggable = !this.sliders.length; // Enable dragging if only layout is not Carousel
          let flkty = new Flickity.data(slider);
          let timer = 0;
          let cellSelector = selectors.productMediaSlide;

          if (!flkty.isActive && countImages > 1) {
            flkty = new Flickity(slider, {
              draggable: draggable,
              cellSelector: cellSelector,
              contain: true,
              wrapAround: true,
              imagesLoaded: true,
              lazyLoad: true,
              pageDots: false,
              prevNextButtons: false,
              adaptiveHeight: false,
              pauseAutoPlayOnHover: false,
              selectedAttraction: 0.2,
              friction: 1,
              on: {
                ready: () => {
                  this.container.style.setProperty('--autoplay-speed', `${autoplaySpeed}ms`);
                },
                change: () => {
                  if (timer) { clearTimeout(timer); }

                  progressBar.classList.remove(classes.fill);

                  setTimeout(() => {
                    progressBar.classList.add(classes.fill);
                  });

                  timer = setTimeout(() => {
                    progressBar.classList.remove(classes.fill);
                  }, autoplaySpeed);
                },
                dragEnd: () => {
                  flkty.playPlayer();
                },
              },
            });

            if (!window.theme.touch) {
              mediaContainer.addEventListener('mouseenter', () => {
                progressBar.classList.add(classes.fill);

                if (timer) { clearTimeout(timer); }

                timer = setTimeout(() => {
                  progressBar.classList.remove(classes.fill);
                }, autoplaySpeed);

                flkty.options.autoPlay = autoplaySpeed;
                flkty.playPlayer();
              });
              mediaContainer.addEventListener('mouseleave', () => {
                flkty.stopPlayer();
                if (timer) { clearTimeout(timer); }
                progressBar.classList.remove(classes.fill);
              });
            }
          }
        });
      }

      // Prevent page redirect on slideshow arrow click
      if (linkedImages.length) {
        linkedImages.forEach((item) => {
          item.addEventListener('click', (e) => {
            if (e.target.matches(selectors.flickityButton)) {
              e.preventDefault();
            }
          });
        });
      }
    },

    /**
     * Event callback for Theme Editor `section:block:select` event
     */
    onBlockSelect: function() {
      $.magnificPopup.close();
    },

    /**
     * Event callback for Theme Editor `section:select` event
     */
    onSelect: function() {
      PaloAlto.QuickViewPopup.init(this.container);
    },

    /**
     * Event callback for Theme Editor `section:deselect` event
     */
    onDeselect: function() {
      $.magnificPopup.close();
    },

    /**
     * Event callback for Theme Editor `section:unload` event
     */
    onUnload: function() {
      $.magnificPopup.close();
    },
  });

  return ProductGrid;
})();

PaloAlto.RelatedProducts = (function() {
  const selectors = {
    product: '[data-product-block]',
    relatedProducts: '[data-related-products]',
  };

  const attributes = {
    sectionId: 'data-section-id',
    productId: 'data-product-id',
    limit: 'data-limit',
  };

  function RelatedProducts(container) {
    this.container = container;
    this.relatedProducts = this.container.querySelector(selectors.relatedProducts);
    this.init();
  }

  RelatedProducts.prototype = $.extend({}, RelatedProducts.prototype, {
    init: function() {
      const sectionId = this.container.getAttribute(attributes.sectionId);
      const productId = this.container.getAttribute(attributes.productId);
      const limit = this.container.getAttribute(attributes.limit);
      const requestUrl = `${theme.routes.product_recommendations_url}?section_id=${sectionId}&limit=${limit}&product_id=${productId}`;

      fetch(requestUrl)
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          const createdElement = document.createElement('div');
          createdElement.innerHTML = data;
          const inner = createdElement.querySelector(selectors.relatedProducts);

          if (inner.querySelectorAll(selectors.product).length) {
            this.relatedProducts.innerHTML = inner.innerHTML;

            this.productGrid = new PaloAlto.ProductGrid(this.container);
            this.gridSlider = new PaloAlto.GridSlider(this.container);
            AOS.refreshHard();
          }
        });
    },

    /**
     * Event callback for Theme Editor `section:select` event
     */
    onSelect: function() {
      if (this.productGrid) {
        this.productGrid.onSelect();
      }
    },

    /**
     * Event callback for Theme Editor `section:deselect` event
     */
    onDeselect: function() {
      if (this.productGrid) {
        this.productGrid.onDeselect();
      }
    },

    /**
     * Event callback for Theme Editor `section:unload` event
     */
    onUnload: function() {
      if (this.productGrid) {
        this.productGrid.onUnload();
      }
    },
  });

  return RelatedProducts;
})();

PaloAlto.StoreAvailability = (function() {
  var selectors = {
    body: 'body',
    storeAvailabilityModal: '[data-store-availability-modal]',
    storeAvailabilityModalOpen: '[data-store-availability-modal-open]',
    storeAvailabilityModalProductTitle: '[data-store-availability-modal-product__title]',
  };

  function StoreAvailability(container) {
    this.container = container;
  }

  StoreAvailability.prototype = Object.assign({}, StoreAvailability.prototype, {
    updateContent: function(variantId, productTitle) {
      this._fetchStoreAvailabilities(variantId, productTitle);
    },

    clearContent: function() {
      this.container.innerHTML = '';
    },

    _initModal: function() {
      return new PaloAlto.Modals(
				'StoreAvailabilityModal',
				'store-availability-modal',
        {
          close: '.js-modal-close-store-availability-modal',
          closeModalOnClick: true,
          openClass: 'store-availabilities-modal--active',
          scrollIntoView: false,
        },
			);
    },

    _fetchStoreAvailabilities: function(variantId, productTitle) {
      var variantSectionUrl = '/variants/' + variantId + '/?section_id=store-availability';
      this.clearContent();
      var self = this;
      fetch(variantSectionUrl)
        .then(function(response) {
          return response.text();
        })
        .then(function(storeAvailabilityHTML) {
          if (storeAvailabilityHTML.trim() === '') {
            return;
          }

          var body = document.querySelector(selectors.body);
          var storeAvailabilityModal = body.querySelector(selectors.storeAvailabilityModal);
          if (storeAvailabilityModal) {
            storeAvailabilityModal.remove();
          }

          self.container.innerHTML = storeAvailabilityHTML;
          self.container.innerHTML = self.container.firstElementChild.innerHTML;

          var storeAvailabilityModalOpen = self.container.querySelector(
						selectors.storeAvailabilityModalOpen,
					);
					// Only create modal if open modal element exists
          if (!storeAvailabilityModalOpen) {
            return;
          }

          self.modal = self._initModal();
          self._updateProductTitle(productTitle);

          var storeAvailabilityModal = self.container.querySelector(selectors.storeAvailabilityModal);
          if (storeAvailabilityModal) {
            body.appendChild(storeAvailabilityModal);
          }
        });
    },

    _updateProductTitle: function(productTitle) {
      var storeAvailabilityModalProductTitle = this.container.querySelector(
				selectors.storeAvailabilityModalProductTitle,
			);
      storeAvailabilityModalProductTitle.textContent = productTitle;
    },
  });
  return StoreAvailability;
})();

PaloAlto.RichText = (function() {
	function RichText(container) {
		PaloAlto.videoLink();
	}

	return RichText;
})();
PaloAlto.Slider = (function() {
  const selectors = {
    arrowLeft: '[data-arrow-left]',
    arrowRight: '[data-arrow-right]',
    arrowScrollDown: '[data-scroll-down]',
    header: '[data-site-header]',
    item: '[data-slide]',
    links: 'a, button',
    main: '[data-main]',
    slider: '[data-slider]',
    slidePosition: 'data-slide-position',
  };

  const attributes = {
    style: 'data-style',
    currentStyle: 'data-current-style',
    tabIndex: 'tabindex',
  };

  const classes = {
    headerFixed: 'site-header--fixed',
  };

  function Slider(container) {
    this.container = container;
    this.header = document.querySelector(selectors.header);
    this.flkty = null;

    this.initSlider();
    this.initZoomAnimation();
    this.bindScrollButton();

    PaloAlto.videoLink();
  }

  Slider.prototype = $.extend({}, Slider.prototype, {
    initSlider() {
      const slidesCount = this.container.querySelectorAll(selectors.item).length;
      const duration = this.container.dataset.duration;
      const pageDots = this.container.dataset.pageDots === 'true' && slidesCount > 1;
      const prevNextButtons = this.container.dataset.navArrows === 'true' && slidesCount > 1;
      const fade = this.container.dataset.transition !== 'slide';
      let autoplay = this.container.dataset.autoplay === 'true';

      if (autoplay) { autoplay = duration; }

      if (slidesCount > 1) {
        this.flkty = new Flickity(this.container, {
          fade: fade,
          cellSelector: selectors.item,
          autoPlay: autoplay,
          wrapAround: true,
          adaptiveHeight: true,
          setGallerySize: true,
          imagesLoaded: true,
          pageDots: pageDots,
          prevNextButtons: prevNextButtons,
          on: {
            ready: () => {
              const currentStyle = this.container.querySelector(`${selectors.item}[${selectors.slidePosition}="1"]`).getAttribute(attributes.style);
              this.container.setAttribute(attributes.currentStyle, currentStyle);
            },
            change: (index) => {
              const currentSlide = this.container.querySelector(`${selectors.item}[${selectors.slidePosition}="${index + 1}"]`);
              const currentStyle = currentSlide.getAttribute(attributes.style);
              const allSlides = [...currentSlide.parentNode.children];

              this.container.setAttribute(attributes.currentStyle, currentStyle);

              allSlides.forEach((slide, i) => {
                slide.querySelectorAll(selectors.links).forEach(link => {
                  if (i === index) {
                    link.removeAttribute(attributes.tabIndex);
                  } else {
                    link.setAttribute(attributes.tabIndex, '-1');
                  }
                });
              });
            },
          },
        });

        // iOS smooth scrolling fix
        PaloAlto.flickitySmoothScrolling(this.container);
      } else if (slidesCount === 1) {
        const currentStyle = this.container.querySelector(selectors.item).getAttribute(attributes.style);
        this.container.setAttribute(attributes.currentStyle, currentStyle);
      }
    },

    // Parallax effect to zoom image on scroll
    initZoomAnimation() {
      if (this.container.dataset.zoomAnimation !== 'true') { return; }

      // Target element to be observed.
      const observedElement = this.container;
      const firstSection = document.body.querySelector(selectors.main).children[0];
      const isFirstSection = this.container.parentNode === firstSection;
      const hasTransparentHeader = this.header.dataset.transparent == 'true';

      const renderZoomEffect = () => {
        const headerHeight = isFirstSection & hasTransparentHeader ? 0 : parseInt(this.header.dataset.height || this.header.offsetHeight);
        const rect = observedElement.getBoundingClientRect();
        const sectionHeight = observedElement.offsetHeight;
        const scrolled = isFirstSection
            ? headerHeight - rect.top
            : headerHeight - rect.top + window.innerHeight;
        const scrolledPercentage = scrolled / sectionHeight;
        let transitionSpeed = 0.1; // Set value between 0 and 1. Bigger value will make the zoom more aggressive
        if (isFirstSection) {
          transitionSpeed *= 1.5;
        }

        let scale = 1 + (scrolledPercentage * transitionSpeed);

        // Prevent image scale down under 100%
        scale = scale > 1 ? scale : 1;
        observedElement.style.setProperty('--scale', scale);
      };

      renderZoomEffect();

      this.zoomOnScrollEvent = throttle(renderZoomEffect, 5);

      // Intersection Observer Configuration
      const observerOptions = {
        root: null,
        rootMargin: '0px', // important: needs units on all values
        threshold: 0,
      };

      // Intersection Observer Callback Function
      const intersectionCallback = (entry) => {
        if (entry[0].isIntersecting) {
          window.addEventListener('scroll', this.zoomOnScrollEvent);
        } else {
          window.removeEventListener('scroll', this.zoomOnScrollEvent);
        }
      };

      // Intersection Observer Constructor.
      const observer = new IntersectionObserver(
        intersectionCallback,
        observerOptions,
      );

      observer.observe(observedElement);
    },

    // Scroll down function
    bindScrollButton() {
      const arrowDown = this.container.querySelector(selectors.arrowScrollDown);

      if (arrowDown) {
        arrowDown.addEventListener('click', (e) => {
          e.preventDefault();

          const headerHeight = this.header.classList.contains(classes.headerFixed) ? 60 : 0;
          const scrollToPosition = parseInt(Math.ceil(this.container.offsetTop + this.container.offsetHeight - headerHeight));

          window.scrollTo({
            top: scrollToPosition,
            left: 0,
            behavior: 'smooth',
          });
        });
      }
    },

    onBlockSelect(evt) {
      const index = parseInt([...evt.target.parentNode.children].indexOf(evt.target));

      if (this.flkty !== null) {
        this.flkty.select(index);
        this.flkty.pausePlayer();
      }
    },

    onBlockDeselect(evt) {
      const autoplay = evt.target.dataset.autoplay;
      if (autoplay && this.flkty !== null) {
        this.flkty.playPlayer();
      }
    },

    onUnload() {
      if (this.flkty !== null) {
        this.flkty.destroy();
        this.flkty = null;
      }

      if (this.zoomOnScrollEvent !== null) {
        window.removeEventListener('scroll', this.zoomOnScrollEvent);
      }
    },
  });

  return Slider;
})();

PaloAlto.Subcollections = (function() {
  function Subcollections(container) {
    this.gridSlider = new PaloAlto.GridSlider(container);
  }

  Subcollections.prototype = $.extend({}, Subcollections.prototype, {

    /**
     * Event callback for Theme Editor `section:unload` event
     */
    onUnload: function() {
      if (this.gridSlider) {
        this.gridSlider.onUnload();
      }
    },
  });

  return Subcollections;
})();

PaloAlto.ProductsList = (function() {
  const attributes = {
    href: 'href',
    mediaId: 'data-media-id',
  };

  const selectors = {
    deferredMedia: '[data-deferred-media]',
    deferredMediaButton: '[data-deferred-media-button]',
    productContentWrapper: '[data-product-content-wrapper]',
    productMediaWrapper: '[data-product-single-media-wrapper]',
    productModel: '[data-model]',
    productLink: '[data-product-link]',
    productSingleMediaImage: '[data-product-single-media-image]',
    sliderContents: '[data-slider-contents]',
    sliderImages: '[data-slider-images]',
    tabButton: '[data-tab-button]',
    tabItem: '[data-tab-item]',
  };

  const classes = {
    aosAnimate: 'aos-animate',
    tabButtonActive: 'products-list__nav__button--active',
    tabItemActive: 'products-list__item--active',
    mediaHidden: 'media--hidden',
  };

  function ProductsList(container) {
    this.container = container;
    this.sectionId = container.dataset.sectionId;
    this.tabButtons = this.container.querySelectorAll(selectors.tabButton);
    this.tabItems = this.container.querySelectorAll(selectors.tabItem);
    this.slidersImages = this.container.querySelectorAll(selectors.sliderImages);
    this.slidersContents = this.container.querySelectorAll(selectors.sliderContents);
    this.videos = {};

    this.initButtons();
    this.initSliders();
    this.initProductVideo();
    this.initProductModel();
    this.initShopifyXrLaunch();
  }

  ProductsList.prototype = $.extend({}, ProductsList.prototype, {
    initButtons() {
      this.tabButtons.forEach((tabButton) => {
        tabButton.addEventListener('click', (e) => {
          if (tabButton.classList.contains(classes.tabButtonActive)) { return; }

          const currentTabAnchor = tabButton.getAttribute(attributes.href);
          const currentTab = this.container.querySelector(currentTabAnchor);
          const currentMedia = currentTab.querySelector(selectors.productMediaWrapper);
          const mediaId = currentMedia ? currentMedia.dataset.mediaId : null;

          this.tabButtons.forEach((button) => {
            button.classList.remove(classes.tabButtonActive);
          });
          this.tabItems.forEach((item) => {
            item.classList.remove(classes.tabItemActive);

            if (theme.settings.animations) {
              item.querySelectorAll(`.${classes.aosAnimate}`).forEach(element => {
                element.classList.remove(classes.aosAnimate);
                setTimeout(() => {
                  element.classList.add(classes.aosAnimate);
                });
              });
            }
          });

          tabButton.classList.add(classes.tabButtonActive);
          currentTab.classList.add(classes.tabItemActive);

          if (mediaId) {
            this.switchMedia(mediaId);
          } else {
            this.pauseAllMedia();
          }

          e.preventDefault();
        });
      });
    },

    initSliders() {
      this.slidersImages.forEach((sliderImages) => {
        const flktyImages = new Flickity(sliderImages, {
          fade: true,
          sync: sliderImages.parentNode.querySelector(selectors.sliderContents),
          pageDots: false,
          prevNextButtons: true,
          wrapAround: true,
          adaptiveHeight: true,
        });

        flktyImages.on('settle', (index) => {
          const elements = sliderImages.querySelectorAll(selectors.productMediaWrapper);

          for (let i = 0; i < elements.length; i++) {
            if (i === index) {
              elements[i].querySelector(selectors.productSingleMediaImage).removeAttribute('tabindex');
            } else {
              elements[i].querySelector(selectors.productSingleMediaImage).setAttribute('tabindex', '-1');
            }
          }
        });
      });

      this.slidersContents.forEach((sliderContent) => {
        const flktyContent = new Flickity(sliderContent, {
          fade: true,
          sync: sliderContent.parentNode.querySelector(selectors.sliderImages),
          pageDots: false,
          prevNextButtons: false,
          wrapAround: true,
          adaptiveHeight: true,
          autoPlay: 4000,
          pauseAutoPlayOnHover: true,
        });

        flktyContent.on('settle', (index) => {
          const elements = sliderContent.querySelectorAll(selectors.productContentWrapper);

          for (let i = 0; i < elements.length; i++) {
            if (i === index) {
              elements[i].querySelectorAll(selectors.productLink).forEach(element => {
                element.removeAttribute('tabindex');
              });
            } else {
              elements[i].querySelectorAll(selectors.productLink).forEach(element => {
                element.setAttribute('tabindex', '-1');
              });
            }
          }
        });
      });
    },

    initProductVideo: function() {
      this.videos = new PaloAlto.ProductVideo(this.container);
    },

    initProductModel: function() {
      const modelItems = this.container.querySelectorAll(selectors.productModel);
      if (modelItems.length) {
        modelItems.forEach((element) => {
          PaloAlto.ProductModel.init(element, this.sectionId);
        });
      }
    },

    initShopifyXrLaunch: function() {
      document.addEventListener('shopify_xr_launch', () => {
        const currentMedia = this.container.querySelector(`${selectors.productModel}:not(.${classes.mediaHidden})`);
        currentMedia.dispatchEvent(new CustomEvent('xrLaunch'));
      });
    },

    switchMedia: function(mediaId) {
      const selectedMedia = this.container.querySelector(`${selectors.productMediaWrapper}[${attributes.mediaId}="${mediaId}"]`);
      const isFocusEnabled = !document.body.classList.contains(classes.noOutline);

      if (isFocusEnabled) { selectedMedia.focus(); }

      selectedMedia.classList.remove(classes.mediaHidden);
      selectedMedia.dispatchEvent(new CustomEvent('theme:media:visible'), {bubbles: true});

      // If media is not loaded, trigger poster button click to load it
      const deferredMedia = selectedMedia.querySelector(selectors.deferredMedia);
      if (deferredMedia && deferredMedia.getAttribute(attributes.loaded) !== 'true') {
        selectedMedia.querySelector(selectors.deferredMediaButton).dispatchEvent(new Event('click'));
      }
    },

    pauseAllMedia: function() {
      const mediaItems = document.querySelectorAll(`${selectors.productMediaWrapper}`);

      if (mediaItems.length) {
        mediaItems.forEach((media) => {
          media.dispatchEvent(new CustomEvent('theme:media:hidden'), {bubbles: true});
          media.classList.add(classes.mediaHidden);
        });
      }
    },

    onBlockSelect(evt) {
      // Show selected tab
      evt.target.dispatchEvent(new Event('click'));
    },
  });

  return ProductsList;
})();

PaloAlto.TabCollections = (function() {
  function TabCollections(container) {
    this.container = container;
    this.productGrid = new PaloAlto.ProductGrid(container);
    this.gridSlider = new PaloAlto.GridSlider(container);
    this.tabs = new PaloAlto.Tabs(container);
  }

  TabCollections.prototype = $.extend({}, TabCollections.prototype, {

    /**
     * Event callback for Theme Editor `section:block:select` event
     */
    onBlockSelect: function(evt) {
      if (this.tabs) {
        this.tabs.onBlockSelect(evt);
      }

      if (this.productGrid) {
        this.productGrid.onBlockSelect(evt);
      }
    },

    /**
     * Event callback for Theme Editor `section:select` event
     */
    onSelect: function() {
      if (this.productGrid) {
        this.productGrid.onSelect();
      }
    },

    /**
     * Event callback for Theme Editor `section:deselect` event
     */
    onDeselect: function() {
      if (this.productGrid) {
        this.productGrid.onDeselect();
      }
    },

    /**
     * Event callback for Theme Editor `section:unload` event
     */
    onUnload: function() {
      if (this.productGrid) {
        this.productGrid.onUnload();
      }
    },
  });

  return TabCollections;
})();

PaloAlto.Testimonials = (function() {
  const selectors = {
    slider: '[data-slider]',
    item: '[data-item]',
  };
  const classes = {
    flickityEnabled: 'flickity-enabled',
  };
  const attributes = {
    sectionId: 'data-section-id',
  };

  function Testimonials(container) {
    this.container = container;
    this.sectionId = this.container.getAttribute(attributes.sectionId);
    this.slider = this.container.querySelector(selectors.slider);
    this.sliderResizeEvent = this.initSlider.bind(this);
    this.flkty = null;
    this.initSlider();

    document.addEventListener('theme:resize:width', this.sliderResizeEvent);
  }

  Testimonials.prototype = $.extend({}, Testimonials.prototype, {

    /* Init Slider */
    initSlider: function() {
      const slidesCount = this.slider.querySelectorAll(selectors.item).length;
      let flickityEnabled = this.slider.classList.contains(classes.flickityEnabled);

      // Destroy slider if there are 3 slides on desktop or 2 on tablet
      // Use native scrolling on mobile
      if ((slidesCount == 3 && window.innerWidth >= theme.sizes.large) ||
        (slidesCount == 2 && window.innerWidth >= theme.sizes.small) ||
        slidesCount == 1 || window.innerWidth < theme.sizes.small) {

        if (flickityEnabled) {
          this.flkty.destroy();
        }

        return;
      }

      this.flkty = new Flickity(this.slider, {
        cellSelector: selectors.item,
        prevNextButtons: true,
        pageDots: false,
        groupCells: true,
        cellAlign: 'left',
        contain: true,
        adaptiveHeight: false,
      });
    },

    onBlockSelect: function(evt) {
      if (this.flkty !== null) {
        const index = parseInt([...evt.target.parentNode.children].indexOf(evt.target));
        const slidesPerPage = parseInt(this.flkty.slides[0].cells.length);
        const groupIndex = Math.floor(index / slidesPerPage);

        this.flkty.select(groupIndex);
      } else {
        const sliderStyle = this.slider.currentStyle || window.getComputedStyle(this.slider);
        const sliderPadding = parseInt(sliderStyle.paddingLeft);
        const blockPositionLeft = evt.target.offsetLeft - sliderPadding;

        // Native scroll to item
        this.slider.scrollTo({
          top: 0,
          left: blockPositionLeft,
          behavior: 'smooth',
        });
      }
    },

    onUnload: function() {
      document.removeEventListener('theme:resize:width', this.sliderResizeEvent);
    },
  });

  return Testimonials;
})();


/*= =============== Templates ================*/
PaloAlto.Article = (function() {
  const selectors = {
    shareButton: '[data-share-button]',
  };

  function Article(container) {
    this.container = container;
    this.shareButton = this.container.querySelector(selectors.shareButton);
    this.init();
  }

  Article.prototype = $.extend({}, Article.prototype, {
    init() {
      if (this.shareButton) {
        new PaloAlto.ShareButton(this.container);
      }
    },
  });

  return Article;
})();

PaloAlto.AboutPage = (function() {
	function AboutPage(container) {
		PaloAlto.videoLink();
	}

	return AboutPage;
})();
PaloAlto.CollectionTemplate = (function() {
  function CollectionTemplate(container) {
    new PaloAlto.Filters(container);
  }

  CollectionTemplate.prototype = $.extend({}, CollectionTemplate.prototype, {
    onDeselect: function() {
      $.magnificPopup.close();
    },

    onUnload: function(evt) {
      $.magnificPopup.close();
    },
  });

  return CollectionTemplate;
})();

PaloAlto.Addresses = function() {
  const selectors = {
    templateAddresses: '.template-customers-addresses',
    accountForm: '[data-form]',
    addressNewForm: '[data-form-new]',
    btnNew: '[data-button-new]',
    btnEdit: '[data-button-edit]',
    btnDelete: '[data-button-delete]',
    btnCancel: '[data-button-cancel]',
    editAddress: 'data-form-edit',
    addressCountryNew: 'AddressCountryNew',
    addressProvinceNew: 'AddressProvinceNew',
    addressProvinceContainerNew: 'AddressProvinceContainerNew',
    addressCountryOption: '[data-country-option]',
    addressCountry: 'AddressCountry',
    addressProvince: 'AddressProvince',
    addressProvinceContainer: 'AddressProvinceContainer',
    requiredInputs: 'input[type="text"]:not(.optional)',
  };

  const attributes = {
    dataFormId: 'data-form-id',
  };

  const classes = {
    hidden: 'is-hidden',
    validation: 'validation--showup',
  };

  function Addresses(section) {
    this.section = section;
    this.addressNewForm = this.section.querySelector(selectors.addressNewForm);
    this.accountForms = this.section.querySelectorAll(selectors.accountForm);

    this.init();
    this.validate();
  }

  Addresses.prototype = $.extend({}, Addresses.prototype, {
    init() {
      if (this.addressNewForm) {
        const section = this.section;
        const newAddressForm = this.addressNewForm;
        this.customerAddresses();

        const newButtons = section.querySelectorAll(selectors.btnNew);
        if (newButtons.length) {
          newButtons.forEach((button) => {
            button.addEventListener('click', function(e) {
              e.preventDefault();
              button.classList.add(classes.hidden);
              newAddressForm.classList.remove(classes.hidden);
            });
          });
        }

        const editButtons = section.querySelectorAll(selectors.btnEdit);
        if (editButtons.length) {
          editButtons.forEach((button) => {
            button.addEventListener('click', function(e) {
              e.preventDefault();
              const formId = this.getAttribute(attributes.dataFormId);
              section.querySelector(`[${selectors.editAddress}="${formId}"]`).classList.toggle(classes.hidden);
            });
          });
        }

        const deleteButtons = section.querySelectorAll(selectors.btnDelete);
        if (deleteButtons.length) {
          deleteButtons.forEach((button) => {
            button.addEventListener('click', function(e) {
              e.preventDefault();
              const formId = this.getAttribute(attributes.dataFormId);
              if (confirm(theme.strings.delete_confirm)) {
                Shopify.postLink('/account/addresses/' + formId, {parameters: {_method: 'delete'}});
              }
            });
          });
        }

        const cancelButtons = section.querySelectorAll(selectors.btnCancel);
        if (cancelButtons.length) {
          cancelButtons.forEach((button) => {
            button.addEventListener('click', function(e) {
              e.preventDefault();
              this.closest(selectors.accountForm).classList.add(classes.hidden);
              document.querySelector(selectors.btnNew).classList.remove(classes.hidden);
            });
          });
        }
      }
    },

    customerAddresses() {
      // Initialize observers on address selectors, defined in shopify_common.js
      if (Shopify.CountryProvinceSelector) {
        new Shopify.CountryProvinceSelector(selectors.addressCountryNew, selectors.addressProvinceNew, {
          hideElement: selectors.addressProvinceContainerNew,
        });
      }

      // Initialize each edit form's country/province selector
      const countryOptions = this.section.querySelectorAll(selectors.addressCountryOption);
      countryOptions.forEach((element) => {
        const formId = element.getAttribute(attributes.dataFormId);
        const countrySelector = `${selectors.addressCountry}_${formId}`;
        const provinceSelector = `${selectors.addressProvince}_${formId}`;
        const containerSelector = `${selectors.addressProvinceContainer}_${formId}`;

        new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
          hideElement: containerSelector,
        });
      });
    },

    validate() {
      this.accountForms.forEach((accountForm) => {
        const form = accountForm.querySelector('form');
        const inputs = form.querySelectorAll(selectors.requiredInputs);

        form.addEventListener('submit', (event) => {
          let isEmpty = false;

          // Display notification if input is empty
          inputs.forEach((input) => {
            if (!input.value) {
              input.nextElementSibling.classList.add(classes.validation);
              isEmpty = true;
            } else {
              input.nextElementSibling.classList.remove(classes.validation);
            }
          });

          if (isEmpty) {
            event.preventDefault();
          }
        });
      });
    },
  });

  const template = document.querySelector(selectors.templateAddresses);
  if (template) {
    new Addresses(template);
  }
};

PaloAlto.loginForms = function() {
  const selectors = {
    form: '[data-account-form]',
    showReset: '[data-show-reset]',
    hideReset: '[data-hide-reset]',
    recover: '[data-recover-password]',
    login: '[data-login-form]',
    recoverSuccess: '[data-recover-success]',
    recoverSuccessText: '[data-recover-success-text]',
    recoverHash: '#recover',
  };

  const classes = {
    hidden: 'is-hidden',
  };

  function Login(form) {
    this.form = form;
    this.showButton = form.querySelector(selectors.showReset);
    this.hideButton = form.querySelector(selectors.hideReset);
    this.recover = form.querySelector(selectors.recover);
    this.login = form.querySelector(selectors.login);
    this.success = form.querySelector(selectors.recoverSuccess);
    this.successText = form.querySelector(selectors.recoverSuccessText);
    this.init();
  }

  Login.prototype = $.extend({}, Login.prototype, {
    init() {
      if (window.location.hash == selectors.recoverHash) {
        this.showRecoverPasswordForm();
      } else {
        this.hideRecoverPasswordForm();
      }

      if (this.success) {
        this.successText.classList.remove(classes.hidden);
      }

      this.showButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.showRecoverPasswordForm();
      }, false);
      this.hideButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.hideRecoverPasswordForm();
      }, false);
    },

    showRecoverPasswordForm() {
      this.recover.classList.remove(classes.hidden);
      this.login.classList.add(classes.hidden);
      window.location.hash = selectors.recoverHash;
      return false;
    },

    hideRecoverPasswordForm() {
      this.login.classList.remove(classes.hidden);
      this.recover.classList.add(classes.hidden);
      window.location.hash = '';
      return false;
    },
  });

  const loginForm = document.querySelector(selectors.form);
  if (loginForm) {
    new Login(loginForm);
  }
};

PaloAlto.PasswordTemplate = (function() {
  const selectors = {
    toggleAdmin: '[data-toggle-admin]',
    toggleNewsletter: '[data-toggle-newsletter]',
    adminForm: '[data-form-admin]',
    newsletterForm: '[data-form-newsletter]',
  };

  function Password(container) {
    this.container = container;
    this.toggleAdmin = this.container.querySelector(selectors.toggleAdmin);
    this.toggleNewsletter = this.container.querySelector(selectors.toggleNewsletter);
    this.adminForm = this.container.querySelector(selectors.adminForm);
    this.newsletterForm = this.container.querySelector(selectors.newsletterForm);
    this.adminErrors = this.adminForm.querySelector('.errors');
    this.newsletterErrors = this.newsletterForm.querySelector('.errors');

    this.init();
  }

  Password.prototype = $.extend({}, Password.prototype, {
    init() {
      this.toggleAdmin.addEventListener('click', (e) => {
        e.preventDefault();
        this.showPasswordForm();
      });

      this.toggleNewsletter.addEventListener('click', (e) => {
        e.preventDefault();
        this.hidePasswordForm();
      });

      if (window.location.hash == '#login' || this.adminErrors) {
        this.showPasswordForm();
      } else {
        this.hidePasswordForm();
      }
    },

    showPasswordForm() {
      PaloAlto.Element.show(this.adminForm);
      PaloAlto.Element.hide(this.newsletterForm);
      window.location.hash = '#login';
    },

    hidePasswordForm() {
      PaloAlto.Element.show(this.newsletterForm);
      PaloAlto.Element.hide(this.adminForm);
      window.location.hash = '';
    },
  });

  return Password;
})();

PaloAlto.SearchTemplate = (function() {
  function SearchTemplate(container) {
    new PaloAlto.Filters(container);

    if (theme.settings.enableInfinityScroll) {
      this.endlessCollection = new Ajaxinate({
        container: '#AjaxinateLoop',
        pagination: '#AjaxinatePagination',
        method: 'scroll',
        callback: function() {
          AOS.refreshHard();
        },
      });
    }
  }

  SearchTemplate.prototype = $.extend({}, SearchTemplate.prototype, {
    onDeselect: function(evt) {
      $.magnificPopup.close();
    },

    onUnload: function(evt) {
      if (theme.settings.enableInfinityScroll && typeof this.endlessCollection === 'object' && this.endlessCollection.destroy === 'function') {
        this.endlessBlogPosts.destroy();
      }

      $.magnificPopup.close();
    },
  });

  return SearchTemplate;
})();


$.ajaxSetup({ cache: false });

document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);

document.addEventListener('DOMContentLoaded', function() {
  setVars();
  PaloAlto.initSections();
  PaloAlto.initFocusVisibility();
  PaloAlto.loginForms();
  PaloAlto.Addresses();
  PaloAlto.Drawer.init();

  document.addEventListener('theme:resize:width', PaloAlto.setMainSpacing);

  // We need to check if hash tag is different than #! because slate.a11y throws an error in this case
  const hash = window.location.hash;
  const elementId = hash.substr(1, hash.length);
  const element = document.getElementById(elementId);

  if (element !== null) {
    slate.a11y.pageLinkFocus($(window.location.hash));
  }

  const skipLink = document.querySelector('.in-page-link');
  if (skipLink) {
    skipLink.addEventListener('click', function(evt) {
      slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
    });
  }

  // Wrap all tables so they can be scrollable
  PaloAlto.TableWrap();

  // Safari smoothscroll polyfill
  const hasNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;

  if (!hasNativeSmoothScroll) {
    loadScript({url: theme.assets.smoothscroll});
  }
});

PaloAlto.updateHash = function(hash) {
  window.location.hash = '#' + hash;
  $('#' + hash).attr('tabindex', -1).focus();
};

const isTouchDevice = () => {
  return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
};
if (isTouchDevice()) {
  document.documentElement.className = document.documentElement.className.replace('no-touch', 'supports-touch');
  window.theme.touch = true;
} else {
  window.theme.touch = false;
}

document.addEventListener('shopify:section:unload', () => {
  PaloAlto.Drawer.destroy();
});
document.addEventListener('shopify:section:load', () => {
  window.dispatchEvent(new Event('resize'), {bubbles: true});
  preventOverflow(document);
  PaloAlto.Drawer.init();
});

if (typeof theme.settings.newHash !== 'undefined') {
  PaloAlto.updateHash(theme.settings.newHash);
}

const showAnimations = document.body.dataset.animations === 'true';
if (showAnimations) {
  AOS.init({
    once: true,
    offset: 50,
    duration: 1000,
    startEvent: 'load',
  });
}

// Global event listeners
resizeListener();
scrollListener();
lazyImageBackgrounds();

window.addEventListener('load', () => {
  setVarsOnResize();
  preventOverflow(document);
  loadingAnimation();
});
