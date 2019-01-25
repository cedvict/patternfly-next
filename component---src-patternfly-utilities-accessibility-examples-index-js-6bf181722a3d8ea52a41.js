(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1000:function(e,n){e.exports='Content available only to screen reader, open inspector to investigate\n{{#> accessibility accessibility--type="screen-reader"}}\n    This content is intended to be announced by assistive technologies, but not visually presented.\n{{/accessibility}}'},1001:function(e,n){e.exports='{{#> accessibility accessibility--type="visible"}}\n    This class unsets .pf-u-screen-reader and .pf-screen-reader. It will be visible.\n{{/accessibility}}'},1002:function(e,n){e.exports='The text underneath is hidden.\n{{#> accessibility accessibility--type="hidden"}}\n  This text is hidden.\n{{/accessibility}}'},1003:function(e,n,t){var i=t(204);e.exports=(i.default||i).template({1:function(e,n,t,i,a){return"    This content is intended to be announced by assistive technologies, but not visually presented.\n"},compiler:[7,">= 4.0.0"],main:function(e,n,i,a,s){var r;return"Content available only to screen reader, open inspector to investigate\n"+(null!=(r=e.invokePartial(t(377),n,{name:"accessibility",hash:{"accessibility--type":"screen-reader"},fn:e.program(1,s,0),inverse:e.noop,data:s,helpers:i,partials:a,decorators:e.decorators}))?r:"")},usePartial:!0,useData:!0})},1004:function(e,n,t){var i=t(204);e.exports=(i.default||i).template({1:function(e,n,t,i,a){return"    This class unsets .pf-u-screen-reader and .pf-screen-reader. It will be visible.\n"},compiler:[7,">= 4.0.0"],main:function(e,n,i,a,s){var r;return null!=(r=e.invokePartial(t(377),n,{name:"accessibility",hash:{"accessibility--type":"visible"},fn:e.program(1,s,0),inverse:e.noop,data:s,helpers:i,partials:a,decorators:e.decorators}))?r:""},usePartial:!0,useData:!0})},1005:function(e,n,t){var i=t(204);e.exports=(i.default||i).template({1:function(e,n,t,i,a){return"  This text is hidden.\n"},compiler:[7,">= 4.0.0"],main:function(e,n,i,a,s){var r;return"The text underneath is hidden.\n"+(null!=(r=e.invokePartial(t(377),n,{name:"accessibility",hash:{"accessibility--type":"hidden"},fn:e.program(1,s,0),inverse:e.noop,data:s,helpers:i,partials:a,decorators:e.decorators}))?r:"")},usePartial:!0,useData:!0})},1006:function(e,n){e.exports='<h2 id="overview">Overview</h2>\n<p>Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. <strong>Example .pf-u-screen-reader-on-lg</strong></p>\n\x3c!-- ## Overview\n\nOnly if needed write a short description with implementation notes. Design and interaction notes are already written on the design specs, don\'t repeat information.\n\nFor example for buttons: Always add a modifier class to add color to the button. Never use the class `.btn` on its own.\n --\x3e\n\x3c!-- ## Accessibility\n\n| Attribute | Applied To | Outcome |\n| -- | -- | -- |\n| `role` or `aria` | `pf-u-accessibility` |  accessibility notes. | --\x3e\n<h2 id="usage">Usage</h2>\n<table>\n<thead>\n<tr>\n<th>Class</th>\n<th>Applied To</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>.pf-u-screen-reader{-on-[breakpoint]}</code></td>\n<td><code>*</code></td>\n<td>Visually hides element, but leaves accessible to assistive technologies</td>\n</tr>\n<tr>\n<td><code>.pf-u-visible{-on-[breakpoint]}</code></td>\n<td><code>*</code></td>\n<td>Unsets <code>.pf-u-screen-reader</code> and <code>.pf-screen-reader</code></td>\n</tr>\n</tbody>\n</table>\n'},1007:function(e,n,t){},193:function(e,n,t){"use strict";t.r(n),t.d(n,"Docs",function(){return w});var i=t(0),a=t.n(i),s=t(215),r=t(214),l=t(1e3),o=t.n(l),c=t(1001),d=t.n(c),u=t(1002),p=t.n(u),b=t(1003),h=t.n(b),f=t(1004),y=t.n(f),m=t(1005),v=t.n(m),g=t(1006),x=t.n(g),w=(t(1007),x.a);n.default=function(){var e=h()(),n=y()(),t=v()();return a.a.createElement(s.a,{docs:w,heading:"Accessibility",className:"is-utility-page"},a.a.createElement(r.a,{heading:"Screen reader only",handlebars:o.a},e),a.a.createElement(r.a,{heading:"Visible",handlebars:d.a},n),a.a.createElement(r.a,{heading:"Hidden",handlebars:p.a},t))}},377:function(e,n,t){var i=t(204);e.exports=(i.default||i).template({1:function(e,n,t,i,a){var s;return e.escapeExpression("function"==typeof(s=null!=(s=t["accessibility--element"]||(null!=n?n["accessibility--element"]:n))?s:t.helperMissing)?s.call(null!=n?n:e.nullContext||{},{name:"accessibility--element",hash:{},data:a}):s)},3:function(e,n,t,i,a){return"span"},5:function(e,n,t,i,a){var s;return" "+e.escapeExpression("function"==typeof(s=null!=(s=t["accessibility--modifier"]||(null!=n?n["accessibility--modifier"]:n))?s:t.helperMissing)?s.call(null!=n?n:e.nullContext||{},{name:"accessibility--modifier",hash:{},data:a}):s)},7:function(e,n,t,i,a){var s,r;return"    "+(null!=(s="function"==typeof(r=null!=(r=t["accessibility--attribute"]||(null!=n?n["accessibility--attribute"]:n))?r:t.helperMissing)?r.call(null!=n?n:e.nullContext||{},{name:"accessibility--attribute",hash:{},data:a}):r)?s:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,n,t,i,a){var s,r,l=null!=n?n:e.nullContext||{};return"<"+(null!=(s=t.if.call(l,null!=n?n["accessibility--element"]:n,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.program(3,a,0),data:a}))?s:"")+' class="pf-u-'+e.escapeExpression("function"==typeof(r=null!=(r=t["accessibility--type"]||(null!=n?n["accessibility--type"]:n))?r:t.helperMissing)?r.call(l,{name:"accessibility--type",hash:{},data:a}):r)+(null!=(s=t.if.call(l,null!=n?n["accessibility--modifier"]:n,{name:"if",hash:{},fn:e.program(5,a,0),inverse:e.noop,data:a}))?s:"")+'"\n'+(null!=(s=t.if.call(l,null!=n?n["accessibility--attribute"]:n,{name:"if",hash:{},fn:e.program(7,a,0),inverse:e.noop,data:a}))?s:"")+">\n"+(null!=(s=e.invokePartial(i["@partial-block"],n,{name:"@partial-block",data:a,indent:"  ",helpers:t,partials:i,decorators:e.decorators}))?s:"")+"</"+(null!=(s=t.if.call(l,null!=n?n["accessibility--element"]:n,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.program(3,a,0),data:a}))?s:"")+">\n"},usePartial:!0,useData:!0})}}]);
//# sourceMappingURL=component---src-patternfly-utilities-accessibility-examples-index-js-6bf181722a3d8ea52a41.js.map