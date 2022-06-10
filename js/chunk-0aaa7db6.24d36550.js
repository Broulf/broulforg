(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0aaa7db6"],{"0223":function(t,e,n){},"154c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Generic",{attrs:{item:t.item},scopedSlots:t._u([{key:"indicator",fn:function(){return[n("div",{staticClass:"notifs"},[t.activity>0?n("strong",{staticClass:"notif activity",attrs:{title:"Activity"}},[t._v(" "+t._s(t.activity)+" ")]):t._e(),t.warnings>0?n("strong",{staticClass:"notif warnings",attrs:{title:"Warning"}},[t._v(" "+t._s(t.warnings)+" ")]):t._e(),t.errors>0?n("strong",{staticClass:"notif errors",attrs:{title:"Error"}},[t._v(" "+t._s(t.errors)+" ")]):t._e(),t.serverError?n("strong",{staticClass:"notif errors",attrs:{title:"Connection error to Sonarr API, check url and apikey in config.yml"}},[t._v(" ? ")]):t._e()])]},proxy:!0}])})},i=[],s=n("b85c"),a=(n("99af"),n("c55c")),o=n("fd6b"),c="/api/v3",u="/api",f={name:"Sonarr",mixins:[a["a"]],props:{item:Object},components:{Generic:o["default"]},computed:{apiPath:function(){return this.item.legacyApi?u:c}},data:function(){return{activity:null,warnings:null,errors:null,serverError:!1}},created:function(){this.fetchConfig()},methods:{fetchConfig:function(){var t=this;this.fetch("".concat(this.apiPath,"/health?apikey=").concat(this.item.apikey)).then((function(e){t.warnings=0,t.errors=0;for(var n=0;n<e.length;n++)"warning"==e[n].type?t.warnings++:"error"==e[n].type&&t.errors++})).catch((function(e){console.error(e),t.serverError=!0})),this.fetch("".concat(this.apiPath,"/queue?apikey=").concat(this.item.apikey)).then((function(e){if(t.activity=0,t.item.legacyApi)for(var n=0;n<e.length;n++)e[n].series&&t.activity++;else{var r,i=Object(s["a"])(e.records);try{for(i.s();!(r=i.n()).done;){var a=r.value;a.seriesId&&t.activity++}}catch(o){i.e(o)}finally{i.f()}}})).catch((function(e){console.error(e),t.serverError=!0}))}}},h=f,l=(n("4c25"),n("2877")),d=Object(l["a"])(h,r,i,!1,null,"ccf2d372",null);e["default"]=d.exports},"25f0":function(t,e,n){"use strict";var r=n("e330"),i=n("5e77").PROPER,s=n("6eeb"),a=n("825a"),o=n("3a9b"),c=n("577e"),u=n("d039"),f=n("ad6d"),h="toString",l=RegExp.prototype,d=l[h],p=r(f),v=u((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),g=i&&d.name!=h;(v||g)&&s(RegExp.prototype,h,(function(){var t=a(this),e=c(t.source),n=t.flags,r=c(void 0===n&&o(l,t)&&!("flags"in l)?p(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"2ca0":function(t,e,n){"use strict";var r=n("23e7"),i=n("e330"),s=n("06cf").f,a=n("50c4"),o=n("577e"),c=n("5a34"),u=n("1d80"),f=n("ab13"),h=n("c430"),l=i("".startsWith),d=i("".slice),p=Math.min,v=f("startsWith"),g=!h&&!v&&!!function(){var t=s(String.prototype,"startsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!g&&!v},{startsWith:function(t){var e=o(u(this));c(t);var n=a(p(arguments.length>1?arguments[1]:void 0,e.length)),r=o(t);return l?l(e,r,n):d(e,n,n+r.length)===r}})},"4c25":function(t,e,n){"use strict";n("0223")},"8a79":function(t,e,n){"use strict";var r=n("23e7"),i=n("e330"),s=n("06cf").f,a=n("50c4"),o=n("577e"),c=n("5a34"),u=n("1d80"),f=n("ab13"),h=n("c430"),l=i("".endsWith),d=i("".slice),p=Math.min,v=f("endsWith"),g=!h&&!v&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!g&&!v},{endsWith:function(t){var e=o(u(this));c(t);var n=arguments.length>1?arguments[1]:void 0,r=e.length,i=void 0===n?r:p(a(n),r),s=o(t);return l?l(e,s,i):d(e,i-s.length,i)===s}})},c55c:function(t,e,n){"use strict";n("8a79"),n("fb6a"),n("d3b7"),n("25f0"),n("2ca0"),n("99af");e["a"]={props:{proxy:Object},created:function(){this.endpoint=this.item.endpoint||this.item.url,this.endpoint.endsWith("/")&&(this.endpoint=this.endpoint.slice(0,-1))},methods:{fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var n,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i={};return null!==(n=this.proxy)&&void 0!==n&&n.useCredentials&&(i.credentials="include"),void 0!==this.item.useCredentials&&(i.credentials=!0===this.item.useCredentials?"include":"omit"),i=Object.assign(i,e),t.startsWith("/")&&(t=t.slice(1)),fetch("".concat(this.endpoint,"/").concat(t),i).then((function(t){if(!t.ok)throw new Error("Not 2xx response");return r?t.json():t}))}))}}}}]);
//# sourceMappingURL=chunk-0aaa7db6.24d36550.js.map