(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(e,n,a){"use strict";a.r(n);a("pJf4");var r=a("1rdg"),t=a("q1tI"),o=a.n(t),s=a("Bl7J");n.default=function(e){var n=r.data;console.log(e,n);var a=e.uri,t="";for(var m in(a=a.substr(1))||(a="introduction"),n.allMarkdownRemark.nodes)if("page"===n.allMarkdownRemark.nodes[m].parent.sourceInstanceName&&n.allMarkdownRemark.nodes[m].parent.name===a){t=n.allMarkdownRemark.nodes[m].html;break}return o.a.createElement(s.a,{page:a,components:n.index.edges.map((function(e,n){var a=e.node;return{title:"-"===a.name[0]?a.name.substr(1)+" Components":a.name.substr(1),path:"components/"+a.name,isActive:!1,state:{name:a.name}}}))},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-f265410fa0a7b92461df.js.map