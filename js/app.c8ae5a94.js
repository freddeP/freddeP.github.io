(function(e){function t(t){for(var r,s,c=t[0],i=t[1],u=t[2],d=0,f=[];d<c.length;d++)s=c[d],a[s]&&f.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/</>/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"14f3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/admin"}},[e._v("admin")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/"}},[e._v("fp´s favoriter")])],1),n("router-view")],1)},o=[],s=(n("034f"),n("2877")),c={},i=Object(s["a"])(c,a,o,!1,null,null,null),u=i.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Channel"),n("Program"),n("PoddFile")],1)},f=[],p={},m=p,h=(n("cccb"),Object(s["a"])(m,d,f,!1,null,null,null)),v=h.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("FP´s Favourites")]),n("FavProg")],1)},P=[],_={},b=Object(s["a"])(_,g,P,!1,null,null,null),y=b.exports;r["a"].use(l["a"]);var w=new l["a"]({routes:[{path:"/admin",name:"home",component:v},{path:"/",name:"about",component:y}]}),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"channel"}},[n("h1",[e._v("Channel Component")]),n("p",[e._v("favChannels_id:  "+e._s(e.favChannels)+" ")]),n("div",e._l(e.channels,function(t){return n("p",{key:t.id},[n("img",{attrs:{src:t.image,alt:""},on:{click:function(n){return e.changeChannelId(t.id)}}}),e._v("    "+e._s(t.name)+"\n           "),n("span",{on:{click:function(n){return e.addToFavChannel(t.id)}}},[e._v(" + ")])])}),0)])},I=[],x=(n("96cf"),n("3b8d")),k=n("e814"),O=n.n(k),j=(n("ac6a"),n("f499")),F=n.n(j),S={data:{favChannels:[],channelId:[132],programs:[],programId:[4058],podfiles:[],favProg:[]},methods:{syncFavProgram:function(){var e=JSON.parse(localStorage.favProg);S.data.favProg=e},addFavProgram:function(e){var t=S.data.favProg.indexOf(e);-1===t&&S.data.favProg.push(e),localStorage.favProg="",localStorage.favProg=F()(S.data.favProg)},addFavChannel:function(e){var t=S.data.favChannels.indexOf(e);-1===t&&S.data.favChannels.push(e)},getChannelId:function(){return S.data.channelId[0]},changeChannelId:function(e){S.data.channelId.pop(),S.data.channelId.push(e),S.methods.getPrograms()},getPrograms:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="https://api.sr.se/api/v2/programs/index?pagination=false&format=json&channelid="+S.data.channelId[0],e.next=3,S.methods.getData(t);case 3:n=e.sent.programs,S.data.programs.splice(0),n.forEach(function(e){S.data.programs.push(e)});case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),getPodfiles:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="https://api.sr.se/api/v2/podfiles?size=20&format=json&programid="+S.data.programId[0],e.next=3,S.methods.getData(t);case 3:n=e.sent.podfiles,S.data.podfiles.splice(0),n.forEach(function(e){S.data.podfiles.push(e)});case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),setProgramId:function(e){S.data.programId.pop(),S.data.programId.push(O()(e)),S.methods.getPodfiles()},getData:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}},E=S,R={data:function(){return{channelId:12,channels:[],favChannels:E.data.favChannels}},methods:{addToFavChannel:function(e){E.methods.addFavChannel(e)},changeChannelId:function(e){E.methods.changeChannelId(e)}},created:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="https://api.sr.se/api/v2/channels?format=json&pagination=false",e.next=3,E.methods.getData(t);case 3:n=e.sent,this.channels=n.channels;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},V=R,$=(n("90a2"),Object(s["a"])(V,C,I,!1,null,"32202f96",null)),L=$.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"program"}},[n("h1",[e._v("Program Component")]),e._v("\n     channelId:  "+e._s(e.channelId)+" "),n("br"),e._v(" programId: "+e._s(e.programId)+" "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{type:"text",placeholder:"sök program"},domProps:{value:e.searchValue},on:{keydown:[function(t){return t.type.indexOf("key")||13===t.keyCode?e.selectProgram(t):null},function(t){return t.type.indexOf("key")||39===t.keyCode||40===t.keyCode?e.arrowSelect(t):null}],input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),n("hr"),e._l(e.filteredPrograms,function(t){return n("div",{key:t.id,staticClass:"programs",attrs:{id:t.id},on:{click:function(n){return e.selectProgram(t.id)}}},[n("span",[n("img",{attrs:{src:t.programimage,alt:""}}),e._v("  "+e._s(t.name)+"  ")]),n("button",{on:{click:function(n){return e.saveFav(e.ev,t.id)}}},[e._v(" + ")])])})],2)},q=[],T=(n("386d"),n("7f7f"),n("4917"),{data:function(){return{programs:E.data.programs,channelId:E.data.channelId,programId:E.data.programId,searchValue:"",count:0}},created:function(){E.methods.getPrograms()},computed:{filteredPrograms:function(){var e=this;return this.programs.filter(function(t){return t.name.toLowerCase().match(e.searchValue.toLowerCase())})}},methods:{saveFav:function(e,t){window.event.stopPropagation(),E.methods.addFavProgram(t)},searchPrograms:function(){var e=this;this.results=this.programs.filter(function(t){if(""!=e.searchValue){var n=t.name.toLowerCase().search(e.searchValue.toLowerCase());if(-1!=n)return t}})},arrowSelect:function(){var e=document.getElementsByClassName("programs");document.querySelector(".selected")&&document.querySelector(".selected").classList.remove("selected"),e[this.count].classList.add("selected"),this.count++,this.count>e.length-1&&(this.count=0)},selectProgram:function(e){if(O()(e)===e)E.methods.setProgramId(e);else if(document.querySelector(".selected")){var t=document.querySelector(".selected").id;E.methods.setProgramId(t)}}}}),M=T,J=(n("84fc"),Object(s["a"])(M,D,q,!1,null,"112799e5",null)),N=J.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"poddFile"}},[n("h1",[e._v("Podfiles")]),e._v("\n    programId: "+e._s(e.programId)+"\n    "),n("br"),n("div",{staticClass:"allPodFiles"},e._l(e.podfiles,function(t){return n("div",{key:t.id},[n("h3",[e._v(" "+e._s(t.title)+" ")]),n("audio",{attrs:{src:t.url}}),n("audio",{attrs:{controls:""}},[n("source",{attrs:{src:t.url,type:"audio/mpeg"}}),e._v("\n                    Your browser does not support the audio element.\n                ")]),n("p",[e._v(" "+e._s(Date(t.publishdateutc))+" ")])])}),0)])},z=[],Y={data:function(){return{programId:E.data.programId,podfiles:E.data.podfiles}},created:function(){E.methods.getPodfiles()}},A=Y,G=Object(s["a"])(A,B,z,!1,null,"42c00ef0",null),H=G.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"favProg"}},[n("hr"),n("div",{attrs:{id:"menuButton"},on:{click:function(t){return e.toggle("allPrograms")}}},[e._v("≡ Program")]),n("div",{staticClass:"allPrograms"},e._l(e.favPrograms,function(t){return n("div",{key:t.id,staticClass:"programs",on:{click:function(n){return e.setProgramId(t.id)}}},[n("span",[n("img",{attrs:{src:t.programimage,alt:""}}),e._v(" "+e._s(t.name)+" ")])])}),0),n("hr"),n("PoddFile")],1)},Q=[],U={data:function(){return{favProg:E.data.favProg,favPrograms:[]}},beforeCreate:function(){E.methods.syncFavProgram()},created:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){var t,n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="https://api.sr.se/api/v2/programs/?format=json&pagination=false",e.next=3,E.methods.getData(t);case 3:n=e.sent.programs,n.forEach(function(e){for(var t in r.favProg)r.favProg[t]==e.id&&r.favPrograms.push(e)});case 5:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),methods:{setProgramId:function(e){E.methods.setProgramId(e),this.toggle("allPrograms")},toggle:function(e){document.querySelector("."+e).classList.toggle("hidden")}}},W=U,X=(n("e81c"),Object(s["a"])(W,K,Q,!1,null,"b4c284b0",null)),Z=X.exports;r["a"].config.productionTip=!1,r["a"].use(w),r["a"].component("Channel",L),r["a"].component("Program",N),r["a"].component("PoddFile",H),r["a"].component("FavProg",Z),new r["a"]({router:w,render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,t,n){},"84fc":function(e,t,n){"use strict";var r=n("a82a"),a=n.n(r);a.a},"90a2":function(e,t,n){"use strict";var r=n("14f3"),a=n.n(r);a.a},a82a:function(e,t,n){},b370:function(e,t,n){},cccb:function(e,t,n){"use strict";var r=n("d563"),a=n.n(r);a.a},d563:function(e,t,n){},e81c:function(e,t,n){"use strict";var r=n("b370"),a=n.n(r);a.a}});
//# sourceMappingURL=app.c8ae5a94.js.map