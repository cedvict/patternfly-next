(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1006:function(e,n){e.exports='Content available only to screen reader, open inspector to investigate\n{{#> accessibility accessibility--type="screen-reader"}}\n    This content is intended to be announced by assistive technologies, but not visually presented.\n{{/accessibility}}'},1007:function(e,n){e.exports='{{#> accessibility accessibility--type="visible"}}\n    This class unsets .pf-u-screen-reader and .pf-screen-reader. It will be visible.\n{{/accessibility}}'},1008:function(e,n){e.exports='The text underneath is hidden.\n{{#> accessibility accessibility--type="hidden"}}\n  This text is hidden.\n{{/accessibility}}'},1009:function(e,n,i){var t=i(196);e.exports=(t.default||t).template({1:function(e,n,i,t,a){return"    This content is intended to be announced by assistive technologies, but not visually presented.\n"},compiler:[7,">= 4.0.0"],main:function(e,n,t,a,s){var r;return"Content available only to screen reader, open inspector to investigate\n"+(null!=(r=e.invokePartial(i(360),n,{name:"accessibility",hash:{"accessibility--type":"screen-reader"},fn:e.program(1,s,0),inverse:e.noop,data:s,helpers:t,partials:a,decorators:e.decorators}))?r:"")},usePartial:!0,useData:!0})},1010:function(e,n,i){var t=i(196);e.exports=(t.default||t).template({1:function(e,n,i,t,a){return"    This class unsets .pf-u-screen-reader and .pf-screen-reader. It will be visible.\n"},compiler:[7,">= 4.0.0"],main:function(e,n,t,a,s){var r;return null!=(r=e.invokePartial(i(360),n,{name:"accessibility",hash:{"accessibility--type":"visible"},fn:e.program(1,s,0),inverse:e.noop,data:s,helpers:t,partials:a,decorators:e.decorators}))?r:""},usePartial:!0,useData:!0})},1011:function(e,n,i){var t=i(196);e.exports=(t.default||t).template({1:function(e,n,i,t,a){return"  This text is hidden.\n"},compiler:[7,">= 4.0.0"],main:function(e,n,t,a,s){var r;return"The text underneath is hidden.\n"+(null!=(r=e.invokePartial(i(360),n,{name:"accessibility",hash:{"accessibility--type":"hidden"},fn:e.program(1,s,0),inverse:e.noop,data:s,helpers:t,partials:a,decorators:e.decorators}))?r:"")},usePartial:!0,useData:!0})},1012:function(e,n){e.exports='<h2 id="overview">Overview</h2>\n<p>Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. <strong>Example .pf-u-screen-reader-on-lg</strong></p>\n\x3c!-- ## Overview\n\nOnly if needed write a short description with implementation notes. Design and interaction notes are already written on the design specs, don\'t repeat information.\n\nFor example for buttons: Always add a modifier class to add color to the button. Never use the class `.btn` on its own.\n --\x3e\n\x3c!-- ## Accessibility\n\n| Attribute | Applied To | Outcome |\n| -- | -- | -- |\n| `role` or `aria` | `pf-u-accessibility` |  accessibility notes. | --\x3e\n<h2 id="usage">Usage</h2>\n<table>\n<thead>\n<tr>\n<th>Class</th>\n<th>Applied To</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>.pf-u-screen-reader{-on-[breakpoint]}</code></td>\n<td><code>*</code></td>\n<td>Visually hides element, but leaves accessible to assistive technologies</td>\n</tr>\n<tr>\n<td><code>.pf-u-visible{-on-[breakpoint]}</code></td>\n<td><code>*</code></td>\n<td>Unsets <code>.pf-u-screen-reader</code> and <code>.pf-screen-reader</code></td>\n</tr>\n</tbody>\n</table>\n'},1013:function(e,n,i){var t=i(1014);"string"==typeof t&&(t=[[e.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(207)(t,a);t.locals&&(e.exports=t.locals)},1014:function(e,n,i){(e.exports=i(206)(!1)).push([e.i,"/* stylelint-enable */\n.pf-u-screen-reader {\n  position: fixed;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0; }\n\n.pf-u-visible {\n  position: static;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n  border: inherit; }\n\n.pf-u-hidden {\n  /* stylelint-disable */\n  display: none !important;\n  /* stylelint-enable */ }\n\n@media screen and (min-width: 576px) {\n  .pf-u-screen-reader-on-sm {\n    position: fixed;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0; } }\n\n@media screen and (min-width: 576px) {\n  .pf-u-visible-on-sm {\n    position: static;\n    overflow: visible;\n    clip: auto;\n    white-space: normal;\n    border: inherit; } }\n\n@media screen and (min-width: 576px) {\n  .pf-u-hidden-on-sm {\n    /* stylelint-disable */\n    display: none !important;\n    /* stylelint-enable */ } }\n\n@media screen and (min-width: 768px) {\n  .pf-u-screen-reader-on-md {\n    position: fixed;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0; } }\n\n@media screen and (min-width: 768px) {\n  .pf-u-visible-on-md {\n    position: static;\n    overflow: visible;\n    clip: auto;\n    white-space: normal;\n    border: inherit; } }\n\n@media screen and (min-width: 768px) {\n  .pf-u-hidden-on-md {\n    /* stylelint-disable */\n    display: none !important;\n    /* stylelint-enable */ } }\n\n@media screen and (min-width: 992px) {\n  .pf-u-screen-reader-on-lg {\n    position: fixed;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0; } }\n\n@media screen and (min-width: 992px) {\n  .pf-u-visible-on-lg {\n    position: static;\n    overflow: visible;\n    clip: auto;\n    white-space: normal;\n    border: inherit; } }\n\n@media screen and (min-width: 992px) {\n  .pf-u-hidden-on-lg {\n    /* stylelint-disable */\n    display: none !important;\n    /* stylelint-enable */ } }\n\n@media screen and (min-width: 1200px) {\n  .pf-u-screen-reader-on-xl {\n    position: fixed;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0; } }\n\n@media screen and (min-width: 1200px) {\n  .pf-u-visible-on-xl {\n    position: static;\n    overflow: visible;\n    clip: auto;\n    white-space: normal;\n    border: inherit; } }\n\n@media screen and (min-width: 1200px) {\n  .pf-u-hidden-on-xl {\n    /* stylelint-disable */\n    display: none !important;\n    /* stylelint-enable */ } }\n",""])},185:function(e,n,i){"use strict";i.r(n),i.d(n,"Docs",function(){return g});var t=i(0),a=i.n(t),s=i(205),r=i(204),l=i(1006),o=i.n(l),c=i(1007),d=i.n(c),p=i(1008),u=i.n(p),h=i(1009),b=i.n(h),f=i(1010),m=i.n(f),y=i(1011),v=i.n(y),w=i(1012),x=i.n(w),g=(i(1013),x.a);n.default=function(){var e=b()(),n=m()(),i=v()();return a.a.createElement(s.a,{docs:g,heading:"Accessibility",className:"is-utility-page"},a.a.createElement(r.a,{heading:"Screen reader only",handlebars:o.a},e),a.a.createElement(r.a,{heading:"Visible",handlebars:d.a},n),a.a.createElement(r.a,{heading:"Hidden",handlebars:u.a},i))}},360:function(e,n,i){var t=i(196);e.exports=(t.default||t).template({1:function(e,n,i,t,a){var s;return e.escapeExpression("function"==typeof(s=null!=(s=i["accessibility--element"]||(null!=n?n["accessibility--element"]:n))?s:i.helperMissing)?s.call(null!=n?n:e.nullContext||{},{name:"accessibility--element",hash:{},data:a}):s)},3:function(e,n,i,t,a){return"span"},5:function(e,n,i,t,a){var s;return" "+e.escapeExpression("function"==typeof(s=null!=(s=i["accessibility--modifier"]||(null!=n?n["accessibility--modifier"]:n))?s:i.helperMissing)?s.call(null!=n?n:e.nullContext||{},{name:"accessibility--modifier",hash:{},data:a}):s)},7:function(e,n,i,t,a){var s,r;return"    "+(null!=(s="function"==typeof(r=null!=(r=i["accessibility--attribute"]||(null!=n?n["accessibility--attribute"]:n))?r:i.helperMissing)?r.call(null!=n?n:e.nullContext||{},{name:"accessibility--attribute",hash:{},data:a}):r)?s:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,n,i,t,a){var s,r,l=null!=n?n:e.nullContext||{};return"<"+(null!=(s=i.if.call(l,null!=n?n["accessibility--element"]:n,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.program(3,a,0),data:a}))?s:"")+' class="pf-u-'+e.escapeExpression("function"==typeof(r=null!=(r=i["accessibility--type"]||(null!=n?n["accessibility--type"]:n))?r:i.helperMissing)?r.call(l,{name:"accessibility--type",hash:{},data:a}):r)+(null!=(s=i.if.call(l,null!=n?n["accessibility--modifier"]:n,{name:"if",hash:{},fn:e.program(5,a,0),inverse:e.noop,data:a}))?s:"")+'"\n'+(null!=(s=i.if.call(l,null!=n?n["accessibility--attribute"]:n,{name:"if",hash:{},fn:e.program(7,a,0),inverse:e.noop,data:a}))?s:"")+">\n"+(null!=(s=e.invokePartial(t["@partial-block"],n,{name:"@partial-block",data:a,indent:"  ",helpers:i,partials:t,decorators:e.decorators}))?s:"")+"</"+(null!=(s=i.if.call(l,null!=n?n["accessibility--element"]:n,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.program(3,a,0),data:a}))?s:"")+">\n"},usePartial:!0,useData:!0})}}]);
//# sourceMappingURL=component---src-patternfly-utilities-accessibility-examples-index-js-dfb10ebebd35abbeca31.js.map