webpackJsonp([4],{"84VM":function(e,t,n){var r={"./home.js":"kbIZ","./login.js":"e6oD","./manager.js":"JjtP"};function u(e){return n(o(e))}function o(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}u.keys=function(){return Object.keys(r)},u.resolve=o,e.exports=u,u.id="84VM"},"93P3":function(e,t){},IcnI:function(e,t,n){"use strict";var r=n("/5sW"),u=n("NYxO"),o={state:{a:1},mutations:{},actions:{},modules:{}};r.default.use(u.b);var a=n("gNcp"),i=o.modules=o.modules||{};a.keys().forEach(function(e){var t=e.replace(/\.\//,"").replace(/\.js/,""),n=a(e).default;i[t]=n,i[t].namespaced=!0});t.a=new u.b.Store(o)},JjtP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/manager",component:function(){return n.e(0).then(n.bind(null,"/52R"))},children:[{path:"/manager/device",component:function(){return n.e(0).then(n.bind(null,"r+uF"))}},{path:"/manager/channel",component:function(){return n.e(0).then(n.bind(null,"ybRc"))}},{path:"/manager/video",component:function(){return n.e(0).then(n.bind(null,"J8pJ"))}}]}]},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("/5sW"),u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},u,!1,function(e){n("V2Kt")},null,null).exports,a=n("YaEn"),i=n("IcnI"),c=n("zL8q"),s=n.n(c);n("93P3");r.default.use(s.a),r.default.config.productionTip=!1,new r.default({el:"#app",router:a.a,store:i.a,render:function(e){return e(o)}})},SA8j:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={state:{},mutations:{},actions:{}}},V2Kt:function(e,t){},YaEn:function(e,t,n){"use strict";var r=n("gRE1"),u=n.n(r),o=n("Gu7T"),a=n.n(o),i=n("/5sW"),c=n("/ocq");n("IcnI");i.default.use(c.a);var s=n("84VM"),d=[];s.keys().forEach(function(e){d.push.apply(d,a()(s(e).default))});var l=new c.a({base:"",routes:d});u()({}).forEach(function(e){l.beforeEach(e.bind(l))});t.a=l},e6oD:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/login",component:function(){return n.e(1).then(n.bind(null,"6Qob"))},meta:{needLogin:!0}}]},gNcp:function(e,t,n){var r={"./device.js":"m4YS","./moduleA.js":"vEuI","./moduleB.js":"SA8j"};function u(e){return n(o(e))}function o(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}u.keys=function(){return Object.keys(r)},u.resolve=o,e.exports=u,u.id="gNcp"},kbIZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/",redirect:"/manager/device"},{path:"/home",redirect:"/manager/device"},{path:"*",component:function(){return n.e(2).then(n.bind(null,"jEQS"))}}]},m4YS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("xV2B");t.default={state:{loading:!1,deviceConfig:{deviceList:[]},channelConfig:{channelList:[]}},mutations:{setDevice:function(e,t){e.deviceConfig=t},setLoading:function(e,t){e.loading=t},setChannel:function(e,t){e.channelConfig=t}},actions:{getDeviceList:function(e,t){var n=e.commit;e.state;n("setLoading",!0),Object(r.b)(t).then(function(e){n("setLoading",!1),n("setDevice",e)})},getChannelList:function(e,t){var n=e.commit;e.state;console.log(t),n("setLoading",!0),Object(r.a)(t).then(function(e){n("setLoading",!1),n("setChannel",e)})}}}},vEuI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={state:{},mutations:{},actions:{}}},vLgD:function(e,t,n){"use strict";var r=n("//Fk"),u=n.n(r),o=n("Dd8w"),a=n.n(o),i=n("Zrlr"),c=n.n(i),s=n("wxAW"),d=n.n(s),l=n("mtWM"),f=n.n(l),p=(n("IcnI"),n("YaEn")),v=(n("zL8q"),n("mvHQ"),n("pFYg"),function(e){var t=localStorage.getItem(e)||"";return t.startsWith("[")||t.includes("{")?JSON.parse(t):t}),h=function(){function e(){c()(this,e),console.log("production"),this.baseURL="http://47.99.122.92:18080"}return d()(e,[{key:"mergeOptions",value:function(e){return a()({timeout:this.timeout,baseURL:this.baseURL},e)}},{key:"setInterceptor",value:function(e,t){e.interceptors.request.use(function(e){return e}),e.interceptors.response.use(function(e){return 200==e.status?401==e.data.errCode?(console.log(p.a),p.a.push("/login"),u.a.reject(e.data)):u.a.resolve(e.data):401!=e.status?u.a.reject(e):(p.a.push("/login"),e.data)},function(e){return u.a.reject(e)})}},{key:"request",value:function(e){var t=this.mergeOptions(e),n=f.a.create();return this.setInterceptor(n,t.url),n(t)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.authCode=v("authCode"),this.request({url:e,method:"get",params:t})}},{key:"post",value:function(e,t){return t.authCode=v("authCode"),this.request({method:"post",url:e,data:t})}}]),e}();t.a=new h},xV2B:function(e,t,n){"use strict";var r=n("vLgD");n.d(t,"b",function(){return u}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return i});var u=function(e){return r.a.get("/api/v1/device/list",e)},o=function(e){return r.a.get("/api/v1/device/channelList",e)},a=function(e){return r.a.get("/api/v1/stream/start",e)},i=function(e){return r.a.get("/api/v1/stream/stop",e)}}},["NHnr"]);
//# sourceMappingURL=app.d6c451a8b5479ae66786.js.map