(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{348:function(t,s,e){"use strict";e.r(s);var a=e(33),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("a",{attrs:{href:"https://github.com/three11/optisize/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/github/release/three11/optisize.svg",alt:"GitHub release"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/three11/optisize/issues",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/github/issues/three11/optisize.svg",alt:"GitHub issues"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/three11/optisize/commits/master",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/github/last-commit/three11/optisize.svg",alt:"GitHub last commit"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/three11/optisize/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/github/size/three11/optisize/index.js.svg",alt:"Github file size"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://travis-ci.org/three11/optisize",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://travis-ci.org/three11/optisize.svg?branch=master",alt:"Build Status"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.npmjs.com/package/@three11/optisize",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/dt/@three11/optisize.svg",alt:"npm"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.npmjs.com/package/@three11/optisize",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/v/@three11/optisize.svg",alt:"npm"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/three11/optisize/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/optisize/README.md",alt:"Analytics"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/three11/optisize/master/logo/optisize-logo-horizontal.png",alt:"Optisize Logo"}})]),t._v(" "),e("h1",{attrs:{id:"optisize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optisize"}},[t._v("#")]),t._v(" Optisize")]),t._v(" "),e("p",[t._v("Tool for resizing and optimizing images with NodeJS")]),t._v(" "),e("h2",{attrs:{id:"about"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#about"}},[t._v("#")]),t._v(" About")]),t._v(" "),e("p",[t._v("There are many packages and tools which do that.")]),t._v(" "),e("p",[t._v("Most of them are doing a lot of other things.")]),t._v(" "),e("p",[t._v("This package is focused on two tasks and does them pretty well:")]),t._v(" "),e("ol",[e("li",[t._v("Resizes your images and")]),t._v(" "),e("li",[t._v("Optimizes their size")])]),t._v(" "),e("h2",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @three11/optisize\n")])])]),e("p",[t._v("or")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @three11/optisize\n")])])]),e("h2",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("p",[t._v("This tool accepts the following arguments:")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("src")]),t._v(": String - Source folder or file (Required)")]),t._v(" "),e("li",[e("code",[t._v("width")]),t._v(": Number - Target width (Optional)")]),t._v(" "),e("li",[e("code",[t._v("height")]),t._v(": Number - Target height (Optional)")])]),t._v(" "),e("ul",[e("li",[t._v("The "),e("code",[t._v("src")]),t._v(" argument should represent a relative path to your images folder or to your single image. The path is relative to your project's root folder. If the "),e("code",[t._v("src")]),t._v(" is a folder, all images located inside other folders in that folder will be recursively optisized as well.")])]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("h3",{attrs:{id:"default"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default"}},[t._v("#")]),t._v(" Default:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" optisize "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@three11/optisize'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" optisizeSettings "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tsrc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/images'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\twidth"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\theight"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("360")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("optisize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("optisizeSettings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"as-package-json-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#as-package-json-script"}},[t._v("#")]),t._v(" As package.json script:")]),t._v(" "),e("p",[t._v("Add the following in the "),e("code",[t._v("scripts")]),t._v(" section of your "),e("code",[t._v("package.json")]),t._v(" file:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"optisize"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"optisize"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Then invoke the script and supply the required arguments:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" optisize --src"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/images"')]),t._v(" --width"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),t._v(" --height"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("360")]),t._v("\n")])])]),e("p",[t._v("or")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run optisize --src"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/images"')]),t._v(" --width"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),t._v(" --height"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("360")]),t._v("\n")])])]),e("h2",{attrs:{id:"important-note"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#important-note"}},[t._v("#")]),t._v(" Important note!")]),t._v(" "),e("p",[e("code",[t._v("width")]),t._v(" and "),e("code",[t._v("height")]),t._v(" settings are not required and can be supplied together, alone and also can be missing.")]),t._v(" "),e("p",[t._v("If they are missing, the images will only be optimized.")]),t._v(" "),e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),e("p",[t._v("GNU GENERAL PUBLIC LICENSE\nVersion 3, 29 June 2007")])])}),[],!1,null,null,null);s.default=r.exports}}]);