(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f95"],{"0bfb":function(e,t,r){"use strict";var a=r("cb7c");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},3846:function(e,t,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"6b54":function(e,t,r){"use strict";r("3846");var a=r("cb7c"),i=r("0bfb"),n=r("9e1e"),s="toString",o=/./[s],d=function(e){r("2aba")(RegExp.prototype,s,e,!0)};r("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?d(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!n&&e instanceof RegExp?i.call(e):void 0)}):o.name!=s&&d(function(){return o.call(this)})},bd76:function(e,t,r){"use strict";var a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik Dávid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"Enéas Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tadeáš",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold Gáspár",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius René",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Paĉjo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto Šimun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyněk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Einar Randall",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:24,name:"Félix Troels",registered:"2018/03/21",role:"Staff",status:"Active"},{id:25,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefex",registered:"2001/05/21",role:"Alien",status:"Don't panic!"}];t["a"]=a},eeca:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[r("b-col",{attrs:{cols:"12",lg:"6"}},[r("b-card",{attrs:{"no-header":""}},[r("template",{slot:"header"},[e._v("\n        User id:  "+e._s(e.$route.params.id)+"\n      ")]),r("b-table",{attrs:{striped:"",small:"",fixed:"",responsive:"sm",items:e.items(e.$route.params.id),fields:e.fields},scopedSlots:e._u([{key:"value",fn:function(t){return[r("strong",[e._v(e._s(t.item.value))])]}}])}),r("template",{slot:"footer"},[r("b-button",{on:{click:e.goBack}},[e._v("Back")])],1)],2)],1)],1)},i=[];function n(e){if(Array.isArray(e))return e}function s(e,t){var r=[],a=!0,i=!1,n=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done);a=!0)if(r.push(s.value),t&&r.length===t)break}catch(e){i=!0,n=e}finally{try{a||null==o["return"]||o["return"]()}finally{if(i)throw n}}return r}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function d(e,t){return n(e)||s(e,t)||o()}r("ac6a"),r("ffc1"),r("6b54"),r("7514"),r("cadf"),r("551c"),r("097d");var u=r("bd76"),l={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{items:function(e){var t=u["a"].find(function(t){return t.id.toString()===e}),r=t?Object.entries(t):[["id","Not found"]];return r.map(function(e){var t=d(e,2),r=t[0],a=t[1];return{key:r,value:a}})},fields:[{key:"key"},{key:"value"}]}},methods:{goBack:function(){this.$router.go(-1)}}},c=l,f=r("2877"),m=Object(f["a"])(c,a,i,!1,null,null,null);m.options.__file="User.vue";t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-7f95.719f5a25.js.map