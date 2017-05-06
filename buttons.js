(function(){var e,t,n,a,r,o,i,c,l,s,d,u,h,p,f,b,m,g,w,y,v,C,x,E,S,_,N,A,L;"undefined"!=typeof window&&(p=window.document,f=window.encodeURIComponent,u=window.decodeURIComponent,s=function(e){return p.createElement(e)},d=function(e){return p.createTextNode(e)},o=window.Math,e=(/^http:/.test(p.location)?"http":"https")+"://buttons.github.io/",t="github-button",n="https://api.github.com",a="octicon",r=a+"-mark-github",i="faa75404-3b97-5585-b449-4bc51338fbd1",L=function(e){var t,n,a;n=[];for(t in e)null!=(a=e[t])&&n.push(f(t)+"="+f(a));return n.join("&")},C=function(e){var t,n,a,r,o,i;for(r={},i=e.split("&"),t=0,n=i.length;t<n;t++)""!==(a=i[t])&&(o=a.split("="),""!==o[0]&&(r[u(o[0])]=u(o.slice(1).join("="))));return r},g=function(e,t,n){e.addEventListener?e.addEventListener(""+t,n):e.attachEvent("on"+t,n)},w=function(e,t,n){var a;a=function(r){return e.removeEventListener?e.removeEventListener(""+t,a):e.detachEvent("on"+t,a),n(r||window.event)},g(e,t,a)},y=function(e,t){var n,a;a=0,n=function(){!a&&(a=1)&&t()},g(e,"load",n),g(e,"error",n),g(e,"readystatechange",function(){/i/.test(e.readyState)||n()})},h=function(e){var t;/m/.test(p.readyState)||!/g/.test(p.readyState)&&!p.documentElement.doScroll?window.setTimeout(e):p.addEventListener?w(p,"DOMContentLoaded",e):(t=function(){/m/.test(p.readyState)&&(p.detachEvent("onreadystatechange",t),e())},p.attachEvent("onreadystatechange",t))},m=function(e,t){var n,a,r,o;o=s("script"),o.async=!0,r=e.split("?"),a=C(r.slice(1).join("?")),a.callback="_",o.src=r[0]+"?"+L(a),window._=function(e){delete window._,t(e)},window._.$=o,g(o,"error",function(){delete window._}),o.readyState&&g(o,"readystatechange",function(){"loaded"===o.readyState&&o.children&&"loading"===o.readyState&&delete window._}),n=p.getElementsByTagName("head")[0],"[object Opera]"==={}.toString.call(window.opera)?g(p,"DOMContentLoaded",function(){n.appendChild(o)}):n.appendChild(o)},c=function(e){var t;return t=window.devicePixelRatio||1,(t>1?o.ceil(o.round(e*t)/t*2)/2:o.ceil(e))||0},b=function(e){var t,n,a,r,i,l;return a=e.contentWindow.document,i=a.documentElement,t=a.body,l=i.scrollWidth,r=i.scrollHeight,t.getBoundingClientRect&&(t.style.display="inline-block",n=t.getBoundingClientRect(),l=o.max(l,c(n.width||n.right-n.left)),r=o.max(r,c(n.height||n.bottom-n.top)),t.style.display=""),[l,r]},A=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},v=function(e){var t,n,a,r,o,i;for(n={href:e.href,"aria-label":e.getAttribute("aria-label")},i=["icon","text","size","show-count"],r=0,o=i.length;r<o;r++)t=i[r],t="data-"+t,n[t]=e.getAttribute(t);return null==n["data-text"]&&(n["data-text"]=e.textContent||e.innerText),a=function(t,a,r){e.getAttribute(t)&&(n[a]=r,console&&console.warn("GitHub Buttons deprecated `"+t+"`: use `"+a+'="'+r+'"` instead. Please refer to https://github.com/ntkme/github-buttons#readme for more info.'))},a("data-count-api","data-show-count","true"),a("data-style","data-size","large"),n},l=function(e,t){var n,a,r,o,i;if(n=s("a"),i="javascript:",(n.href=t)&&n.protocol!==i)try{if(null==(o=new URL(e,t).href))throw o;n.href=o}catch(o){a=p.getElementsByTagName("base")[0],a.href=t,n.href=e,r=s("div"),r.innerHTML=n.outerHTML,n.href=r.lastChild.href,r=null,a.href=p.location.href,a.removeAttribute("href")}else n.href=e;return n.protocol!==i&&/\.github\.com$/.test("."+n.hostname)||(n.href="#",n.target="_self"),/^https?:\/\/((gist\.)?github\.com\/[^\/?#]+\/[^\/?#]+\/archive\/|github\.com\/[^\/?#]+\/[^\/?#]+\/releases\/download\/|codeload\.github\.com\/)/.test(n.href)&&(n.target="_top"),n},S=function(e){var t,n,o,i;return t=l(e.href,null),t.className="button",(n=e["aria-label"])&&t.setAttribute("aria-label",n),o=t.appendChild(s("i")),o.className=a+" "+(e["data-icon"]||r),o.setAttribute("aria-hidden","true"),t.appendChild(d(" ")),i=t.appendChild(s("span")),i.appendChild(d(e["data-text"]||"")),p.body.appendChild(t)},_=function(e){var t,a,r,o;"github.com"===e.hostname&&(r=e.pathname.replace(/^(?!\/)/,"/").match(/^\/([^\/?#]+)(?:\/([^\/?#]+)(?:\/(?:(subscription)|(fork)|(issues)|([^\/?#]+)))?)?(?:[\/?#]|$)/))&&!r[6]&&(r[2]?(a="/"+r[1]+"/"+r[2],t="/repos"+a,r[3]?(o="subscribers_count",a+="/watchers"):r[4]?(o="forks_count",a+="/network"):r[5]?(o="open_issues_count",a+="/issues"):(o="stargazers_count",a+="/stargazers")):(t="/users/"+r[1],o="followers",a="/"+r[1]+"/"+o),m(n+t,function(t){var n,r,i;200===t.meta.status&&(r=t.data[o],n=l(a,e.href),n.className="count",n.setAttribute("aria-label",r+" "+o.replace(/_count$/,"").replace("_"," ")+" on GitHub"),n.appendChild(s("b")),n.appendChild(s("i")),i=n.appendChild(s("span")),i.appendChild(d((""+r).replace(/\B(?=(\d{3})+(?!\d))/g,","))),e.parentNode.insertBefore(n,e.nextSibling))}))},N=function(e){var t;e&&(/^large$/i.test(e["data-size"])&&(p.body.className="large"),t=S(e),/^(true|1)$/i.test(e["data-show-count"])&&_(t))},x=function(t,n){var a,r,o,c,l,d,u;if(null==t)return E();null==n&&(n=v(t)),r="#"+L(n),o=s("iframe"),d={allowtransparency:!0,scrolling:"no",frameBorder:0};for(c in d)u=d[c],o.setAttribute(c,u);A(o,[1,0]),o.style.border="none",o.src="javascript:0",p.body.appendChild(o),l=function(){var n;n=b(o),o.parentNode.removeChild(o),w(o,"load",function(){A(o,n)}),o.src=e+"buttons.html"+r,t.parentNode.replaceChild(o,t)},w(o,"load",function(){var e;(e=o.contentWindow._)?y(e.$,l):l()}),a=o.contentWindow.document,a.open().write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+i+'</title><base>\x3c!--[if lte IE 6]></base><![endif]--\x3e<link rel="stylesheet" href="'+e+'assets/css/buttons.css"><script>document.location.hash = "'+r+'";<\/script></head><body><script src="'+e+'buttons.js"><\/script></body></html>'),a.close()},E=function(){var e,n,a,r,o,i,c;if(n=[],p.querySelectorAll)n=n.slice.call(p.querySelectorAll("a."+t));else for(c=p.getElementsByTagName("a"),a=0,o=c.length;a<o;a++)e=c[a],~(" "+e.className+" ").replace(/[ \t\n\f\r]+/g," ").indexOf(" "+t+" ")&&n.push(e);for(r=0,i=n.length;r<i;r++)e=n[r],x(e)},"function"==typeof define&&define.amd?define([],{render:x}):"object"==typeof exports&&"string"!=typeof exports.nodeName?exports.render=x:(!{}.hasOwnProperty.call(p,"currentScript")&&p.currentScript&&delete p.currentScript&&p.currentScript&&(e=p.currentScript.src.replace(/[^\/]*([?#].*)?$/,"")),p.title===i?N(C(p.location.hash.replace(/^#/,""))):h(x)))}).call(this);
//# sourceMappingURL=buttons.js.map