!function(){"use strict";var n,e={65:function(){var n=window.wp.i18n,e=window.wp.blocks,r=window.wp.element,l=window.wp.blockEditor,o={icon:(0,r.createElement)("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},(0,r.createElement)("path",{fill:"currentColor",d:"M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z"}))};(0,e.registerBlockType)("millan-dev/blank-block",{apiVersion:2,name:"millan-dev/blank-block",title:(0,n.__)("Blank Block","blank-blocks-plugin"),description:(0,n.__)("Simple blank block","blank-blocks-plugin"),category:"widgets",icon:o.icon,supports:{},attributes:{},edit:function(){return(0,r.createElement)("p",(0,l.useBlockProps)(),(0,n.__)("Blank Blocks Plugin - Just a placeholder!","blank-blocks-plugin"))},save:function(){return(0,r.createElement)("p",l.useBlockProps.save(),(0,n.__)("Blank Blocks Plugin - Just a placeholder!","blank-blocks-plugin"))}})}},r={};function l(n){var o=r[n];if(void 0!==o)return o.exports;var t=r[n]={exports:{}};return e[n](t,t.exports,l),t.exports}l.m=e,n=[],l.O=function(e,r,o,t){if(!r){var i=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],t=n[s][2];for(var c=!0,a=0;a<r.length;a++)(!1&t||i>=t)&&Object.keys(l.O).every((function(n){return l.O[n](r[a])}))?r.splice(a--,1):(c=!1,t<i&&(i=t));if(c){n.splice(s--,1);var u=o();void 0!==u&&(e=u)}}return e}t=t||0;for(var s=n.length;s>0&&n[s-1][2]>t;s--)n[s]=n[s-1];n[s]=[r,o,t]},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n={826:0,46:0};l.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,t,i=r[0],c=r[1],a=r[2],u=0;if(i.some((function(e){return 0!==n[e]}))){for(o in c)l.o(c,o)&&(l.m[o]=c[o]);if(a)var s=a(l)}for(e&&e(r);u<i.length;u++)t=i[u],l.o(n,t)&&n[t]&&n[t][0](),n[i[u]]=0;return l.O(s)},r=self.webpackChunkblank_blocks_plugin=self.webpackChunkblank_blocks_plugin||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var o=l.O(void 0,[46],(function(){return l(65)}));o=l.O(o)}();