(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("Home")],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"text-center justify-center"},[a("v-col",{staticClass:"xs-12",attrs:{cols:"12"}},[a("p",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" COVID-19 U.S. ")])]),a("v-col",{staticClass:"xs-12 red--text",attrs:{cols:"12"}},[a("p",{staticClass:"font-weight-regular"},[e._v(" New ")]),a("h2",{staticClass:"display-3 font-weight-bold mb-3"},[e._v(" "+e._s(e.newConfirmed)+" ")])]),a("v-col",{staticClass:"xs-12 red--text text--darken-4",attrs:{cols:"12"}},[a("p",{staticClass:"subheading font-weight-regular"},[e._v(" Confirmed ")]),a("h2",{staticClass:"display-3 font-weight-bold mb-3"},[e._v(" "+e._s(e.totalConfirmed)+" ")])]),a("v-col",{staticClass:"xs-12 green--text",attrs:{cols:"12"}},[a("p",{staticClass:"subheading font-weight-regular"},[e._v(" Recovered ")]),a("span",{staticClass:"display-3 font-weight-bold mb-3"},[e._v(" "+e._s(e.totalRecovered)+" ")]),a("span",{staticStyle:{"font-size":"26px"}},[e._v(" "+e._s(e.recoveredRate)+"% ")])]),a("v-col",{staticClass:"xs-12 blue-grey--text text--darken-3",attrs:{cols:"12"}},[a("p",{staticClass:"subheading font-weight-regular"},[e._v(" Deceased ")]),a("span",{staticClass:"display-3 font-weight-bold mb-3"},[e._v(" "+e._s(e.totalDeaths)+" ")]),a("span",{staticStyle:{"font-size":"26px"}},[e._v(" "+e._s(e.deathRate)+"% ")])]),a("v-col",{staticClass:"xs-12",attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:e.headers,items:e.states,"items-per-page":10,"sort-by":["cases"],"sort-desc":[!0]}})],1),a("v-col",{staticClass:"xs-12",attrs:{cols:"12"}},[a("div",[e._v("Updated: "+e._s(e.updatedTime))])])],1)],1)},i=[],c=(a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("96cf"),a("1da1")),l={name:"Home",data:function(){return{minutesPerHour:60,hoursPerDay:24,yesterdayConfirmed:0,updated:0,newConfirmed:0,totalConfirmed:0,totalRecovered:0,totalDeaths:0,recoveredRate:0,deathRate:0,headers:[{text:"States",align:"start",sortable:!1,value:"state"},{text:"Confirmed",value:"cases"},{text:"Active",value:"active"},{text:"Tests",value:"tests"},{text:"Tests / Million",value:"testsPerOneMillion"}],statesList:[],polling:null,pollingTime:3e4}},computed:{updatedTime:function(){var e=new Date(this.updated),t=e.toLocaleDateString("en-US")+" "+e.toLocaleTimeString("en-US");return t},states:function(){return this.statesList}},created:function(){this.fetchData(),this.fetchStatesData(),this.pollingData()},beforeDestroy:function(){clearInterval(this.polling)},methods:{fetchData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n,s,r,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://corona.lmao.ninja/v2/countries/USA");case 3:return a=t.sent,t.next=6,a.json();case 6:if(n=t.sent,e.updated=n.updated,e.totalConfirmed=e.numberWithCommas(n.cases),e.totalRecovered=e.numberWithCommas(n.recovered),e.totalDeaths=e.numberWithCommas(n.deaths),e.recoveredRate=(n.recovered/n.cases*100).toFixed(2),e.deathRate=(n.deaths/n.cases*100).toFixed(2),s=new Date,r=s.getTimezoneOffset()/e.minutesPerHour,!(s.getHours()>=e.hoursPerDay-r)){t.next=25;break}return t.next=18,fetch("https://corona.lmao.ninja/v2/countries/USA?yesterday=true");case 18:return o=t.sent,t.next=21,o.json();case 21:i=t.sent,n.todayCases>i.todayCases/2?e.newConfirmed=e.numberWithCommas(n.todayCases):e.newConfirmed=e.numberWithCommas(n.todayCases+i.todayCases),t.next=26;break;case 25:e.newConfirmed=e.numberWithCommas(n.todayCases);case 26:t.next=31;break;case 28:t.prev=28,t.t0=t["catch"](0),console.error(t.t0);case 31:case"end":return t.stop()}}),t,null,[[0,28]])})))()},fetchStatesData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://corona.lmao.ninja/v2/states?sort=cases");case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,e.statesList=n,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},pollingData:function(){var e=this;this.polling=setInterval((function(){e.fetchData(),e.fetchStatesData()}),this.pollingTime)},numberWithCommas:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},u=l,d=(a("6e4e"),a("2877")),f=a("6544"),p=a.n(f),v=a("62ad"),h=a("a523"),m=a("8fea"),b=a("0fd9"),g=Object(d["a"])(u,o,i,!1,null,"36ef2a76",null),C=g.exports;p()(g,{VCol:v["a"],VContainer:h["a"],VDataTable:m["a"],VRow:b["a"]});var x={name:"App",components:{Home:C},data:function(){return{}}},y=x,w=a("7496"),_=a("a75b"),j=Object(d["a"])(y,s,r,!1,null,null,null),D=j.exports;p()(j,{VApp:w["a"],VContent:_["a"]});var S=a("f309");n["a"].use(S["a"]);var O=new S["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:O,render:function(e){return e(D)}}).$mount("#app")},"6e4e":function(e,t,a){"use strict";var n=a("f842"),s=a.n(n);s.a},f842:function(e,t,a){}});
//# sourceMappingURL=app.76ab75cc.js.map