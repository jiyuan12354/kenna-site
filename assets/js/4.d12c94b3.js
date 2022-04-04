(window.webpackJsonp=window.webpackJsonp||[]).push([[4,10],{175:function(t,e,a){"use strict";function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){i(t,e,a[e])}))}return t}a.d(e,"a",(function(){return n}))},176:function(t,e,a){},178:function(t,e,a){"use strict";a(176)},179:function(t,e,a){"use strict";a.r(e);a(94);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=[],i=!0,n=!1,s=void 0;try{for(var r,c=t[Symbol.iterator]();!(i=(r=c.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){n=!0,s=t}finally{try{i||null==c.return||c.return()}finally{if(n)throw s}}return a}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a(37);var n={name:"VueLazyYoutubeVideo",props:{url:{type:String,required:!0,validator:function(t){return 1!==t.indexOf("https://www.youtube.com/watch?")}},alt:{type:String,default:"Video alternative image"},buttonLabel:{type:String,default:"Play video"},aspectRatio:{type:String,default:"16:9",validator:function(t){return/^\d+:\d+$/.test(t)}}},data:function(){return{isVideoLoaded:!1}},computed:{id:function(){return/^https:\/\/www\.youtube\.com\/watch\?v=(.+)$/.exec(this.url)[1]},styleObj:function(){return{paddingBottom:this.getPaddingBottom()}}},methods:{generateURL:function(){return"https://www.youtube.com/embed/".concat(this.id).concat("?rel=0&showinfo=0&autoplay=1")},clickHandler:function(){this.isVideoLoaded=!0,this.$emit("videoLoaded")},getPaddingBottom:function(){var t=i(this.aspectRatio.split(":"),2),e=t[0],a=t[1];return"".concat(a/e*100,"%")}}},s=(a(178),a(0)),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"y-video",on:{click:t.clickHandler}},[a("div",{staticClass:"y-video__inner",style:t.styleObj},[t.isVideoLoaded?a("iframe",{staticClass:"y-video__media",attrs:{src:t.generateURL(),allowfullscreen:"",allow:"autoplay"}}):[a("picture",[a("source",{attrs:{srcset:"https://i.ytimg.com/vi_webp/"+t.id+"/maxresdefault.webp",type:"image/webp"}}),t._v(" "),a("img",{staticClass:"y-video__media",attrs:{src:"https://i.ytimg.com/vi/4JS70KB9GS0/maxresdefault.jpg",alt:t.alt}})]),t._v(" "),a("button",{staticClass:"y-video__button",attrs:{type:"button","aria-label":t.buttonLabel}},[a("svg",{attrs:{viewBox:"0 0 68 48",version:"1.1",width:"100%",height:"100%"}},[a("path",{staticClass:"y-video__button-shape",attrs:{d:"M66.5 7.7c-.8-2.9-2.5-5.4-5.4-6.2C55.8.1 34 0 34 0S12.2.1 6.9 1.6c-3 .7-4.6 3.2-5.4 6.1a89.6 89.6 0 0 0 0 32.5c.8 3 2.5 5.5 5.4 6.3C12.2 47.9 34 48 34 48s21.8-.1 27.1-1.6c3-.7 4.6-3.2 5.4-6.1C68 35 68 24 68 24s0-11-1.5-16.3z"}}),t._v(" "),a("path",{staticClass:"y-video__button-icon",attrs:{d:"M45 24L27 14v20"}})])])]],2)])}),[],!1,null,"35a3cc9e",null);e.default=r.exports},187:function(t,e,a){},199:function(t,e,a){"use strict";a(187)},207:function(t,e,a){"use strict";a.r(e);var i=a(175),n={component:{VueLazyYoutubeVideo:a(179).default},data:function(){return{active_el:1}},computed:{data:function(){return Object(i.a)({},this.$page.frontmatter)}},watch:{},methods:{activate:function(t){this.active_el=t}}},s=(a(199),a(0)),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"industry"},[a("div",{staticClass:"sidebar",staticStyle:{dislay:"block"}},[a("ul",{staticClass:"sidebar-links"},[a("li",[a("div",{staticClass:"sidebar-group first"},[t._m(0),t._v(" "),a("ul",{staticClass:"sidebar-group-items"},[a("li",[a("a",{staticClass:"sidebar-link",class:{active:1==t.active_el},attrs:{href:"#aaa"},on:{click:function(e){return t.activate(1)}}},[t._v("运输和物流")])]),t._v(" "),a("li",[a("a",{staticClass:"sidebar-link",class:{active:2==t.active_el},attrs:{href:"#bbb"},on:{click:function(e){return t.activate(2)}}},[t._v("运输和物流")])]),t._v(" "),a("li",[a("a",{staticClass:"sidebar-link",class:{active:3==t.active_el},attrs:{href:"#ccc"},on:{click:function(e){return t.activate(3)}}},[t._v("运输和物流")])]),t._v(" "),a("li",[a("a",{staticClass:"sidebar-link",class:{active:4==t.active_el},attrs:{href:"#ddd"},on:{click:function(e){return t.activate(4)}}},[t._v("运输和物流")])]),t._v(" "),a("li",[a("a",{staticClass:"sidebar-link",class:{active:5==t.active_el},attrs:{href:"#eee"},on:{click:function(e){return t.activate(5)}}},[t._v("运输和物流")])]),t._v(" "),a("li",[a("a",{staticClass:"sidebar-link",class:{active:6==t.active_el},attrs:{href:"#fff"},on:{click:function(e){return t.activate(6)}}},[t._v("运输和物流")])])])])])])]),t._v(" "),t._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"sidebar-heading open"},[e("span",[this._v("行业")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("div",{staticClass:"content"})])}],!1,null,"0fcb0975",null);e.default=r.exports}}]);