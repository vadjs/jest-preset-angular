"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4887],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8238:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],s={id:"absolute-imports",title:"Absolute Imports"},p=void 0,u={unversionedId:"guides/absolute-imports",id:"version-8.x/guides/absolute-imports",title:"Absolute Imports",description:"TypeScript supports absolute imports. The preset (starting from v3.0.0) by default understands absolute imports referring to src, app, assets and environments directory, so instead:",source:"@site/versioned_docs/version-8.x/guides/absolute-imports.md",sourceDirName:"guides",slug:"/guides/absolute-imports",permalink:"/jest-preset-angular/docs/8.x/guides/absolute-imports",editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-8.x/guides/absolute-imports.md",tags:[],version:"8.x",frontMatter:{id:"absolute-imports",title:"Absolute Imports"},sidebar:"version-8.x-docs",previous:{title:"Using with Babel",permalink:"/jest-preset-angular/docs/8.x/guides/using-with-babel"},next:{title:"Troubleshooting",permalink:"/jest-preset-angular/docs/8.x/guides/troubleshooting"}},l={},c=[],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TypeScript supports absolute imports. The preset (starting from v3.0.0) by default understands absolute imports referring to ",(0,a.kt)("inlineCode",{parentName:"p"},"src"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"app"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"assets")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"environments")," directory, so instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import MyComponent from '../../src/app/my.component';\nimport MyStuff from '../../src/testing/my.stuff';\n")),(0,a.kt)("p",null,"you can use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import MyComponent from 'app/my.component';\nimport MyStuff from 'src/testing/my.stuff';\n")),(0,a.kt)("p",null,"However, if your directory structure differ from that provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"angular-cli")," you can adjust ",(0,a.kt)("inlineCode",{parentName:"p"},"moduleNameMapper")," in Jest config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  jest: {\n    moduleNameMapper: {\n      'app/(.*)': '<rootDir>/src/to/app/$1', // override default, why not\n      'testing/(.*)': '<rootDir>/app/testing/$1', // add new mapping\n    },\n  },\n}\n")),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you wish to use any absolute import paths which are defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"paths")," of your tsconfig, make sure that you create the\nsimilar mapping for ",(0,a.kt)("inlineCode",{parentName:"p"},"moduleNameMapper")," in Jest config"))))}d.isMDXComponent=!0}}]);