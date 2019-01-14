(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{180:function(e,a,n){"use strict";n.r(a),n.d(a,"Docs",function(){return v});var t=n(0),r=n.n(t),d=n(205),o=n(204),i=n(984),s=n.n(i),l=n(985),p=n.n(l),c=n(986),g=n.n(c),u=n(987),f=n.n(u),m=n(988),b=n.n(m),h=n(989),v=n.n(h).a;a.default=function(){var e=g()(),a=f()();return r.a.createElement(d.a,{docs:v,heading:"Badge Upgrade Examples"},r.a.createElement(o.a,{heading:"Patternfly 3 Badges",handlebars:s.a},e),r.a.createElement(o.a,{heading:"Patternfly 4 Badges",handlebars:p.a,docs:b.a},a))}},232:function(e,a,n){var t=n(196);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var d;return" "+e.escapeExpression("function"==typeof(d=null!=(d=n["badge--modifier"]||(null!=a?a["badge--modifier"]:a))?d:n.helperMissing)?d.call(null!=a?a:e.nullContext||{},{name:"badge--modifier",hash:{},data:r}):d)},3:function(e,a,n,t,r){var d,o;return"    "+(null!=(d="function"==typeof(o=null!=(o=n["badge--attribute"]||(null!=a?a["badge--attribute"]:a))?o:n.helperMissing)?o.call(null!=a?a:e.nullContext||{},{name:"badge--attribute",hash:{},data:r}):o)?d:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var d,o=null!=a?a:e.nullContext||{};return'<span class="pf-c-badge'+(null!=(d=n.if.call(o,null!=a?a["badge--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?d:"")+'"\n'+(null!=(d=n.if.call(o,null!=a?a["badge--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?d:"")+">\n"+(null!=(d=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?d:"")+"</span>\n"},usePartial:!0,useData:!0})},395:function(e,a,n){var t=n(196);e.exports=(t.default||t).template({compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var d;return null!=(d=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,helpers:n,partials:t,decorators:e.decorators}))?d:""},usePartial:!0,useData:!0})},984:function(e,a){e.exports='{{#> badge-upgrade-examples}}\n  <span class="badge">7</span>\n  <span class="badge">24</span>\n  <span class="badge">240</span>\n  <span class="badge">999+</span>\n{{/badge-upgrade-examples}}'},985:function(e,a){e.exports='{{#> badge-upgrade-examples}}\n  {{#> badge badge--modifier="pf-m-read"}}\n    7\n  {{/badge}}\n  {{#> badge badge--modifier="pf-m-read"}}\n    24\n  {{/badge}}\n  {{#> badge badge--modifier="pf-m-read"}}\n    240\n  {{/badge}}\n  {{#> badge badge--modifier="pf-m-read"}}\n    999+\n  {{/badge}}\n  <br>\n  <br>\n  {{#> badge badge--modifier="pf-m-unread"}}\n  7\n  {{/badge}}\n  {{#> badge badge--modifier="pf-m-unread"}}\n    24\n  {{/badge}}\n  {{#> badge badge--modifier="pf-m-unread"}}\n    240\n  {{/badge}}\n  {{#> badge badge--modifier="pf-m-unread"}}\n    999+\n  {{/badge}}\n{{/badge-upgrade-examples}}'},986:function(e,a,n){var t=n(196);e.exports=(t.default||t).template({1:function(e,a,n,t,r){return'  <span class="badge">7</span>\n  <span class="badge">24</span>\n  <span class="badge">240</span>\n  <span class="badge">999+</span>\n'},compiler:[7,">= 4.0.0"],main:function(e,a,t,r,d){var o;return null!=(o=e.invokePartial(n(395),a,{name:"badge-upgrade-examples",fn:e.program(1,d,0),inverse:e.noop,data:d,helpers:t,partials:r,decorators:e.decorators}))?o:""},usePartial:!0,useData:!0})},987:function(e,a,n){var t=n(196);e.exports=(t.default||t).template({1:function(e,a,t,r,d){var o;return(null!=(o=e.invokePartial(n(232),a,{name:"badge",hash:{"badge--modifier":"pf-m-read"},fn:e.program(2,d,0),inverse:e.noop,data:d,helpers:t,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(n(232),a,{name:"badge",hash:{"badge--modifier":"pf-m-read"},fn:e.program(4,d,0),inverse:e.noop,data:d,helpers:t,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(n(232),a,{name:"badge",hash:{"badge--modifier":"pf-m-read"},fn:e.program(6,d,0),inverse:e.noop,data:d,helpers:t,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(n(232),a,{name:"badge",hash:{"badge--modifier":"pf-m-read"},fn:e.program(8,d,0),inverse:e.noop,data:d,helpers:t,partials:r,decorators:e.decorators}))?o:"")+"  <br>\n  <br>\n"+(null!=(o=e.invokePartial(n(232),a,{name:"badge",hash:{"badge--modifier":"pf-m-unread"},fn:e.program(10,d,0),inverse:e.noop,data:d,helpers:t,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(n(232),a,{name:"badge",hash:{"badge--modifier":"pf-m-unread"},fn:e.program(4,d,0),inverse:e.noop,data:d,helpers:t,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(n(232),a,{name:"badge",hash:{"badge--modifier":"pf-m-unread"},fn:e.program(6,d,0),inverse:e.noop,data:d,helpers:t,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(n(232),a,{name:"badge",hash:{"badge--modifier":"pf-m-unread"},fn:e.program(8,d,0),inverse:e.noop,data:d,helpers:t,partials:r,decorators:e.decorators}))?o:"")},2:function(e,a,n,t,r){return"    7\n"},4:function(e,a,n,t,r){return"    24\n"},6:function(e,a,n,t,r){return"    240\n"},8:function(e,a,n,t,r){return"    999+\n"},10:function(e,a,n,t,r){return"  7\n"},compiler:[7,">= 4.0.0"],main:function(e,a,t,r,d){var o;return null!=(o=e.invokePartial(n(395),a,{name:"badge-upgrade-examples",fn:e.program(1,d,0),inverse:e.noop,data:d,helpers:t,partials:r,decorators:e.decorators}))?o:""},usePartial:!0,useData:!0})},988:function(e,a){e.exports=""},989:function(e,a){e.exports='<h2 id="overview">Overview</h2>\n<p>These examples highlight the differences in implementing Badges in Patternfly 4 compared with Patternfly 3.\nWhen converting PatternFly 3 components to PatternFly 4 components, you must also take into consideration the layouts and sizings that PatternFly 3 utilized from Bootstrap 3.</p>\n<h2 id="usage">Usage</h2>\n<table>\n<thead>\n<tr>\n<th>PF3 Class</th>\n<th>Applied To</th>\n<th>PF4 Class</th>\n<th>Applied To</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>.badge</code></td>\n<td><code>&lt;span&gt;</code></td>\n<td><code>.pf-c-badge</code></td>\n<td><code>&lt;span&gt;</code></td>\n<td><code>Initiates a badge. Always use with a modifier class.</code></td>\n</tr>\n<tr>\n<td><code>--</code></td>\n<td><code>--</code></td>\n<td><code>.pf-m-read</code></td>\n<td><code>.pf-c-badge</code></td>\n<td><code>Applies read badge styling.</code></td>\n</tr>\n<tr>\n<td><code>--</code></td>\n<td><code>--</code></td>\n<td><code>.pf-m-unread</code></td>\n<td><code>.pf-c-badge</code></td>\n<td><code>Applies unread badge styling.</code></td>\n</tr>\n</tbody>\n</table>\n<table>\n<thead>\n<tr>\n<th>Main Differences in pf3</th>\n<th>Main differences in pf4</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td>Badges have different styles for read and unread to make the state of that badge clearer.</td>\n</tr>\n</tbody>\n</table>\n'}}]);
//# sourceMappingURL=component---src-patternfly-upgrade-examples-badge-upgrade-examples-examples-index-js-70db6961cf56ec49e4ef.js.map