"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3906],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4782:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(4137)),o=["components"],l={sidebar_position:20,pagination_next:"guides/index"},s="FAQ",d={unversionedId:"get-started/faq",id:"get-started/faq",isDocsHomePage:!1,title:"FAQ",description:"You can ask your question in telegram chat / github-issues / github-discussions",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/get-started/faq.md",sourceDirName:"get-started",slug:"/get-started/faq",permalink:"/en/docs/get-started/faq",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/get-started/faq.md",tags:[],version:"current",lastUpdatedAt:1641734520,formattedLastUpdatedAt:"1/9/2022",sidebarPosition:20,frontMatter:{sidebar_position:20,pagination_next:"guides/index"},sidebar:"getstartedSidebar",previous:{title:"Motivation",permalink:"/en/docs/get-started/motivation"},next:{title:"\ud83c\udfaf Guides",permalink:"/en/docs/guides"}},u=[{value:"Structure = Architecture?",id:"structure--architecture",children:[],level:3},{value:"Do I need a methodology only for &quot;understanding and clarity&quot; of what is happening in the project?",id:"do-i-need-a-methodology-only-for-understanding-and-clarity-of-what-is-happening-in-the-project",children:[],level:3},{value:"Does a novice developer need an architecture/methodology?",id:"does-a-novice-developer-need-an-architecturemethodology",children:[],level:3},{value:"Why do we need another methodology when everything is based on principles?",id:"why-do-we-need-another-methodology-when-everything-is-based-on-principles",children:[],level:3},{value:"Where can I find examples of applying the methodology?",id:"where-can-i-find-examples-of-applying-the-methodology",children:[],level:3},{value:"Are there some useful resources / articles / etc about FeatureSliced and related things?",id:"are-there-some-useful-resources--articles--etc-about-featuresliced-and-related-things",children:[],level:3},{value:"The project is written on feature-slices v1, how to update and is it worth it?",id:"the-project-is-written-on-feature-slices-v1-how-to-update-and-is-it-worth-it",children:[],level:3},{value:"Can I embed pages/features/entities into each other?",id:"can-i-embed-pagesfeaturesentities-into-each-other",children:[],level:3},{value:"How do I work with the authorization context?",id:"how-do-i-work-with-the-authorization-context",children:[],level:3},{value:"What about Atomic Design?",id:"what-about-atomic-design",children:[],level:3},{value:"What is the difference between feature and entity?",id:"what-is-the-difference-between-feature-and-entity",children:[],level:3},{value:"Where to store the layout/template of pages?",id:"where-to-store-the-layouttemplate-of-pages",children:[],level:3},{value:"Will there be a toolkit / linters?",id:"will-there-be-a-toolkit--linters",children:[],level:3},{value:"Can I store the features used on one page directly in the page directory?",id:"can-i-store-the-features-used-on-one-page-directly-in-the-page-directory",children:[],level:3}],p={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can ask your question in ",(0,i.kt)("a",{parentName:"p",href:"https://t.me/feature_sliced"},"telegram chat")," / ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/issues"},"github-issues")," / ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions"},"github-discussions")))),(0,i.kt)("h3",{id:"structure--architecture"},"Structure = Architecture?"),(0,i.kt)("p",null,"Architecture defines abstractions and relations between them (shared/features/pages/...)"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"But without a proper structure, it's difficult to design a good architecture")),(0,i.kt)("h3",{id:"do-i-need-a-methodology-only-for-understanding-and-clarity-of-what-is-happening-in-the-project"},'Do I need a methodology only for "understanding and clarity" of what is happening in the project?'),(0,i.kt)("p",null,"Rather yes than no"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Otherwise, you have to read huge directories ",(0,i.kt)("inlineCode",{parentName:"em"},"components/"),"...")),(0,i.kt)("h3",{id:"does-a-novice-developer-need-an-architecturemethodology"},"Does a novice developer need an architecture/methodology?"),(0,i.kt)("p",null,"Rather yes than no"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Usually, when you design and develop a project in one person, everything goes smoothly. But if there are pauses in development, new developers are added to the team - then problems come")),(0,i.kt)("h3",{id:"why-do-we-need-another-methodology-when-everything-is-based-on-principles"},"Why do we need another methodology when everything is based on principles?"),(0,i.kt)("p",null,"Answered ",(0,i.kt)("a",{parentName:"p",href:"/docs/get-started/motivation"},"here")),(0,i.kt)("h3",{id:"where-can-i-find-examples-of-applying-the-methodology"},"Where can I find examples of applying the methodology?"),(0,i.kt)("p",null,"There are only such ones in the public domain so far, not all of them have been fully adapted to the latest version"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"In the near future, the list will be updated and will be placed in a separate section")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/examples"},"Internal Examples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/examples"},"External Examples"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Also, you can get acquainted with our ",(0,i.kt)("a",{parentName:"em",href:"/docs/guides"},"guides")," and ",(0,i.kt)("a",{parentName:"em",href:"/docs/get-started"},"tutorials"))),(0,i.kt)("h3",{id:"are-there-some-useful-resources--articles--etc-about-featuresliced-and-related-things"},"Are there some useful resources / articles / etc about FeatureSliced and related things?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/awesome"},"https://github.com/feature-sliced/awesome")),(0,i.kt)("h3",{id:"the-project-is-written-on-feature-slices-v1-how-to-update-and-is-it-worth-it"},"The project is written on feature-slices v1, how to update and is it worth it?"),(0,i.kt)("p",null,"Answered ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/migration/from-v1"},"here")),(0,i.kt)("h3",{id:"can-i-embed-pagesfeaturesentities-into-each-other"},"Can I embed pages/features/entities into each other?"),(0,i.kt)("p",null,"Answered ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/app-splitting#group-slices"},"here")),(0,i.kt)("h3",{id:"how-do-i-work-with-the-authorization-context"},"How do I work with the authorization context?"),(0,i.kt)("p",null,"Answered ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/examples/auth"},"here")),(0,i.kt)("h3",{id:"what-about-atomic-design"},"What about Atomic Design?"),(0,i.kt)("p",null,"The current version of the methodology does not oblige, but also does not prohibit the use of Atomic Design together with feature-sliced"),(0,i.kt)("p",null,"At the same time, Atomic Design ",(0,i.kt)("a",{parentName:"p",href:"https://t.me/feature_sliced/1653"},"is well applied")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"ui")," segment of modules"),(0,i.kt)("h3",{id:"what-is-the-difference-between-feature-and-entity"},"What is the difference between feature and entity?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Entity")," - business ",(0,i.kt)("strong",{parentName:"li"},"entity"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"blog-post / user / order / product / ..."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Feature")," - business feature, ",(0,i.kt)("strong",{parentName:"li"},"action on an entity"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"create-blog-post / login-by-oauth / edit-account / publish-video / ...")))),(0,i.kt)("p",null,"See also ","[comparison reference]"," (/docs/reference/layers/overview), ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/examples/auth"},"viewer implementation of logic by layers")),(0,i.kt)("h3",{id:"where-to-store-the-layouttemplate-of-pages"},"Where to store the layout/template of pages?"),(0,i.kt)("p",null,"It is better to store general templates for markup in ",(0,i.kt)("inlineCode",{parentName:"p"},"shared/ui"),", but there are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions/129"},"different cases")),(0,i.kt)("h3",{id:"will-there-be-a-toolkit--linters"},"Will there be a toolkit / linters?"),(0,i.kt)("p",null,"It will be, at the moment - in development =)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For now, to sort / prohibit imports, you can use"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eslint-plugin-import")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eslint-plugin-simple-import-sort")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eslint-plugin-boundaries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dependency-cruiser"))),(0,i.kt)("p",{parentName:"blockquote"},"See ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/azinit/4cb940a1d4a3e05ef47e15aa18a9ecc5"},"basic config example"))),(0,i.kt)("h3",{id:"can-i-store-the-features-used-on-one-page-directly-in-the-page-directory"},"Can I store the features used on one page directly in the page directory?"),(0,i.kt)("p",null,"The methodology strongly recommends against doing this, since ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/app-splitting"},"each module has a corresponding place in the structure")),(0,i.kt)("p",null,"Otherwise , there is a risk of complicating the project's code base"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},'"Today, the feature can only be used on one page. Next week - on three. And in a month - it may be removed at all. We cannot predict the future, and we need to refrain from premature optimizations every time"'))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"See also the example from ",(0,i.kt)("a",{parentName:"em",href:"/docs/get-started/quick-start#normal-approach"},"quick-start"))))}c.isMDXComponent=!0}}]);