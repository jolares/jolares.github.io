"use strict";(self.webpackChunkai_blog=self.webpackChunkai_blog||[]).push([[9738],{876:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var n=t(2784);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2094:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(7896),o=(t(7294),t(876));const a={sidebar_position:4},i="Dynamic Programming",l={unversionedId:"algorithms/dynamic-programming/dp",id:"algorithms/dynamic-programming/dp",title:"Dynamic Programming",description:"DP techniques have a broad applications. They are often useful when more specialized methods fail, but are generally less efficient.",source:"@site/docs/algorithms/dynamic-programming/dp.md",sourceDirName:"algorithms/dynamic-programming",slug:"/algorithms/dynamic-programming/dp",permalink:"/docs/algorithms/dynamic-programming/dp",draft:!1,editUrl:"https://github.com/jolares/jolares.github.io/tree/master/apps/ai-blog/docs/docs/algorithms/dynamic-programming/dp.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Dynamic Programming (DP)",permalink:"/docs/category/dynamic-programming-dp"},next:{title:"Backend Development",permalink:"/docs/category/backend-development"}},s={},c=[{value:"References",id:"references",level:2}],p={toc:c},m="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dynamic-programming"},"Dynamic Programming"),(0,o.kt)("p",null,"DP techniques have a broad applications. They are often useful when more specialized methods fail, but are generally less efficient."),(0,o.kt)("p",null,"DP is an algorithmic paradigm where we solve a problem by identifying a collection\nof subproblems, which we solve one by one, starting with the smallest problems and\nusing their solutions to solve the larger problems, until we solve the entire collection of problems we are interested in."),(0,o.kt)("p",null,"DP does not require DAGs explicitly, but rather implicitly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Nodes are subproblems we define\n- Edges are dependencies between subproblems, where a larger subproblem depends in [solving first] a smaller subproblem.\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.goodreads.com/book/show/138563.Algorithms"},"Algorithms by Dasgupta, Papadimitriou, and Vazirani")))}d.isMDXComponent=!0}}]);