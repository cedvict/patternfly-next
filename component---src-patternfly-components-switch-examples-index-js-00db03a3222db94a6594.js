webpackJsonp([78428295425742],{868:function(t,e){t.exports="<h2 id=overview>Overview</h2> <p>A Switch is an alternative to the checkbox component.</p> <p>Use a switch when your user needs to perform instantaneous actions without confirmation.</p> <p>Use checkbox if your user has to perform additional steps for changes to become effective.</p> <h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>aria-label=&quot;...&quot;</code></td> <td><code>.pf-c-switch__input</code></td> <td>Indicates the action triggered by the switch. <strong>required</strong></td> </tr> <tr> <td><code>checked</code></td> <td><code>.pf-c-switch__input</code></td> <td>Indicates that the input is checked</td> </tr> <tr> <td><code>disabled</code></td> <td><code>.pf-c-switch__input</code></td> <td>Indicates that the input is disabled</td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-switch</code></td> <td><code>&lt;label&gt;</code></td> <td>Initiates a switch. <strong>required</strong></td> </tr> <tr> <td><code>.pf-c-switch__input</code></td> <td><code>&lt;input type=&quot;checkbox&quot;&gt;</code></td> <td>Hide the checkbox inside the switch. <strong>required</strong></td> </tr> <tr> <td><code>.pf-c-switch__toggle</code></td> <td><code>&lt;span&gt;</code></td> <td>Initiates the toggle inside the switch. <strong>required</strong></td> </tr> <tr> <td><code>.pf-c-switch__label</code></td> <td><code>&lt;span&gt;</code></td> <td>Initiates a label inside the switch.</td> </tr> <tr> <td><code>.pf-m-off</code></td> <td><code>.pf-c-switch__label</code></td> <td>Modifies for the off state.</td> </tr> <tr> <td><code>.pf-m-on</code></td> <td><code>.pf-c-switch__label</code></td> <td>Modifies for the on state.</td> </tr> </tbody> </table> "},310:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.Docs=void 0;var n=a(3),l=i(n),r=a(11),o=i(r),s=a(12),c=i(s),h=a(1156),d=i(h),p=a(1155),u=i(p),f=a(1157),w=i(f),m=a(732),b=i(m),g=a(731),v=i(g),x=a(733),k=i(x),P=a(868),y=i(P);a(1049);var _=e.Docs=y.default;e.default=function(){var t=(0,b.default)(),e=(0,v.default)(),a=(0,k.default)();return l.default.createElement(o.default,{docs:_},l.default.createElement(c.default,{heading:"Switch",handlebars:d.default},t),l.default.createElement(c.default,{heading:"Switch No Label",handlebars:w.default},a),l.default.createElement(c.default,{heading:"Switch Disabled",handlebars:u.default},e))}},1155:function(t,e){t.exports="{{#> switch switch--attribute='for=\"switch-on-disabled-example\"'}}\n  {{#> switch-input switch-input--attribute='type=\"checkbox\" id=\"switch-on-disabled-example\" aria-label=\"...\" disabled checked'}}{{/switch-input}}\n  {{#> switch-label switch-label--modifier='pf-m-off'}}\n  Off\n  {{/switch-label}}\n  {{#> switch-toggle}}{{/switch-toggle}}\n  {{#> switch-label switch-label--modifier='pf-m-on'}}\n  On\n  {{/switch-label}}\n{{/switch}}\n<br/>\n<br/>\n{{#> switch switch--attribute='for=\"switch-off-disabled-example\"'}}\n  {{#> switch-input switch-input--attribute='type=\"checkbox\" id=\"switch-off-disabled-example\" aria-label=\"...\" disabled'}}{{/switch-input}}\n  {{#> switch-label switch-label--modifier='pf-m-off'}}\n  Off\n  {{/switch-label}}\n  {{#> switch-toggle}}{{/switch-toggle}}\n  {{#> switch-label switch-label--modifier='pf-m-on'}}\n  On\n  {{/switch-label}}\n{{/switch}}\n"},731:function(t,e,a){var i=a(1);t.exports=(i.default||i).template({1:function(t,e,i,n,l){var r;return"  "+(null!=(r=t.invokePartial(a(95),e,{name:"switch-input",hash:{"switch-input--attribute":'type="checkbox" id="switch-on-disabled-example" aria-label="..." disabled checked'},fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"\n"+(null!=(r=t.invokePartial(a(61),e,{name:"switch-label",hash:{"switch-label--modifier":"pf-m-off"},fn:t.program(4,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"  "+(null!=(r=t.invokePartial(a(96),e,{name:"switch-toggle",fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"\n"+(null!=(r=t.invokePartial(a(61),e,{name:"switch-label",hash:{"switch-label--modifier":"pf-m-on"},fn:t.program(6,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")},2:function(t,e,a,i,n){return""},4:function(t,e,a,i,n){return"  Off\n"},6:function(t,e,a,i,n){return"  On\n"},8:function(t,e,i,n,l){var r;return"  "+(null!=(r=t.invokePartial(a(95),e,{name:"switch-input",hash:{"switch-input--attribute":'type="checkbox" id="switch-off-disabled-example" aria-label="..." disabled'},fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"\n"+(null!=(r=t.invokePartial(a(61),e,{name:"switch-label",hash:{"switch-label--modifier":"pf-m-off"},fn:t.program(4,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"  "+(null!=(r=t.invokePartial(a(96),e,{name:"switch-toggle",fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"\n"+(null!=(r=t.invokePartial(a(61),e,{name:"switch-label",hash:{"switch-label--modifier":"pf-m-on"},fn:t.program(6,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")},compiler:[7,">= 4.0.0"],main:function(t,e,i,n,l){var r;return(null!=(r=t.invokePartial(a(97),e,{name:"switch",hash:{"switch--attribute":'for="switch-on-disabled-example"'},fn:t.program(1,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"<br/>\n<br/>\n"+(null!=(r=t.invokePartial(a(97),e,{name:"switch",hash:{"switch--attribute":'for="switch-off-disabled-example"'},fn:t.program(8,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")},usePartial:!0,useData:!0})},732:function(t,e,a){var i=a(1);t.exports=(i.default||i).template({1:function(t,e,i,n,l){var r;return"  "+(null!=(r=t.invokePartial(a(95),e,{name:"switch-input",hash:{"switch-input--attribute":'type="checkbox" id="switch-on-example" aria-label="..." checked'},fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"\n"+(null!=(r=t.invokePartial(a(61),e,{name:"switch-label",hash:{"switch-label--modifier":"pf-m-off"},fn:t.program(4,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"  "+(null!=(r=t.invokePartial(a(96),e,{name:"switch-toggle",fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"\n"+(null!=(r=t.invokePartial(a(61),e,{name:"switch-label",hash:{"switch-label--modifier":"pf-m-on"},fn:t.program(6,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")},2:function(t,e,a,i,n){return""},4:function(t,e,a,i,n){return"  Off\n"},6:function(t,e,a,i,n){return"  On\n"},8:function(t,e,i,n,l){var r;return"  "+(null!=(r=t.invokePartial(a(95),e,{name:"switch-input",hash:{"switch-input--attribute":'type="checkbox" id="switch-off-example" aria-label="..."'},fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"\n"+(null!=(r=t.invokePartial(a(61),e,{name:"switch-label",hash:{"switch-label--modifier":"pf-m-off"},fn:t.program(4,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"  "+(null!=(r=t.invokePartial(a(96),e,{name:"switch-toggle",fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"\n"+(null!=(r=t.invokePartial(a(61),e,{name:"switch-label",hash:{"switch-label--modifier":"pf-m-on"},fn:t.program(6,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")},compiler:[7,">= 4.0.0"],main:function(t,e,i,n,l){var r;return(null!=(r=t.invokePartial(a(97),e,{name:"switch",hash:{"switch--attribute":'for="switch-on-example"'},fn:t.program(1,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"<br/>\n<br/>\n"+(null!=(r=t.invokePartial(a(97),e,{name:"switch",hash:{"switch--attribute":'for="switch-off-example"'},fn:t.program(8,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")},usePartial:!0,useData:!0})},1156:function(t,e){t.exports="{{#> switch switch--attribute='for=\"switch-on-example\"'}}\n  {{#> switch-input switch-input--attribute='type=\"checkbox\" id=\"switch-on-example\" aria-label=\"...\" checked'}}{{/switch-input}}\n  {{#> switch-label switch-label--modifier='pf-m-off'}}\n  Off\n  {{/switch-label}}\n  {{#> switch-toggle}}{{/switch-toggle}}\n  {{#> switch-label switch-label--modifier='pf-m-on'}}\n  On\n  {{/switch-label}}\n{{/switch}}\n<br/>\n<br/>\n{{#> switch switch--attribute='for=\"switch-off-example\"'}}\n  {{#> switch-input switch-input--attribute='type=\"checkbox\" id=\"switch-off-example\" aria-label=\"...\"'}}{{/switch-input}}\n  {{#> switch-label switch-label--modifier='pf-m-off'}}\n  Off\n  {{/switch-label}}\n  {{#> switch-toggle}}{{/switch-toggle}}\n  {{#> switch-label switch-label--modifier='pf-m-on'}}\n  On\n  {{/switch-label}}\n{{/switch}}\n"},1157:function(t,e){t.exports='{{#> switch switch--attribute=\'for="switch-off-no-label-example"\'}}\n  {{#> switch-input switch-input--attribute=\'type="checkbox" id="switch-off-no-label-example" aria-label="..."\'}}{{/switch-input}}\n  {{#> switch-toggle}}{{/switch-toggle}}\n{{/switch}}\n\n{{#> switch switch--attribute=\'for="switch-on-no-label-example"\'}}\n  {{#> switch-input switch-input--attribute=\'type="checkbox" id="switch-on-no-label-example" aria-label="..." checked\'}}{{/switch-input}}\n  {{#> switch-toggle}}{{/switch-toggle}}\n{{/switch}}\n'},733:function(t,e,a){var i=a(1);t.exports=(i.default||i).template({1:function(t,e,i,n,l){var r;return"  "+(null!=(r=t.invokePartial(a(95),e,{name:"switch-input",hash:{"switch-input--attribute":'type="checkbox" id="switch-off-no-label-example" aria-label="..."'},fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"\n  "+(null!=(r=t.invokePartial(a(96),e,{name:"switch-toggle",fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"\n"},2:function(t,e,a,i,n){return""},4:function(t,e,i,n,l){var r;return"  "+(null!=(r=t.invokePartial(a(95),e,{name:"switch-input",hash:{"switch-input--attribute":'type="checkbox" id="switch-on-no-label-example" aria-label="..." checked'},fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"\n  "+(null!=(r=t.invokePartial(a(96),e,{name:"switch-toggle",fn:t.program(2,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"\n"},compiler:[7,">= 4.0.0"],main:function(t,e,i,n,l){var r;return(null!=(r=t.invokePartial(a(97),e,{name:"switch",hash:{"switch--attribute":'for="switch-off-no-label-example"'},fn:t.program(1,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")+"\n"+(null!=(r=t.invokePartial(a(97),e,{name:"switch",hash:{"switch--attribute":'for="switch-on-no-label-example"'},fn:t.program(4,l,0),inverse:t.noop,data:l,helpers:i,partials:n,decorators:t.decorators}))?r:"")},usePartial:!0,useData:!0})},95:function(t,e,a){var i=a(1);t.exports=(i.default||i).template({1:function(t,e,a,i,n){var l;return" "+t.escapeExpression((l=null!=(l=a["switch-input--modifier"]||(null!=e?e["switch-input--modifier"]:e))?l:a.helperMissing,"function"==typeof l?l.call(null!=e?e:t.nullContext||{},{name:"switch-input--modifier",hash:{},data:n}):l))},3:function(t,e,a,i,n){var l,r;return"    "+(null!=(r=null!=(r=a["switch-input--attribute"]||(null!=e?e["switch-input--attribute"]:e))?r:a.helperMissing,l="function"==typeof r?r.call(null!=e?e:t.nullContext||{},{name:"switch-input--attribute",hash:{},data:n}):r)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,e,a,i,n){var l,r=null!=e?e:t.nullContext||{};return'<input class="pf-c-switch__input'+(null!=(l=a.if.call(r,null!=e?e["switch-input--modifier"]:e,{name:"if",hash:{},fn:t.program(1,n,0),inverse:t.noop,data:n}))?l:"")+'"\n'+(null!=(l=a.if.call(r,null!=e?e["switch-input--attribute"]:e,{name:"if",hash:{},fn:t.program(3,n,0),inverse:t.noop,data:n}))?l:"")+">\n  "},useData:!0})},61:function(t,e,a){var i=a(1);t.exports=(i.default||i).template({1:function(t,e,a,i,n){var l;return" "+t.escapeExpression((l=null!=(l=a["switch-label--modifier"]||(null!=e?e["switch-label--modifier"]:e))?l:a.helperMissing,"function"==typeof l?l.call(null!=e?e:t.nullContext||{},{name:"switch-label--modifier",hash:{},data:n}):l))},3:function(t,e,a,i,n){var l,r;return"    "+(null!=(r=null!=(r=a["switch-label--attribute"]||(null!=e?e["switch-label--attribute"]:e))?r:a.helperMissing,l="function"==typeof r?r.call(null!=e?e:t.nullContext||{},{name:"switch-label--attribute",hash:{},data:n}):r)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,e,a,i,n){var l,r=null!=e?e:t.nullContext||{};return'<span class="pf-c-switch__label'+(null!=(l=a.if.call(r,null!=e?e["switch-label--modifier"]:e,{name:"if",hash:{},fn:t.program(1,n,0),inverse:t.noop,data:n}))?l:"")+'"\n'+(null!=(l=a.if.call(r,null!=e?e["switch-label--attribute"]:e,{name:"if",hash:{},fn:t.program(3,n,0),inverse:t.noop,data:n}))?l:"")+">\n"+(null!=(l=t.invokePartial(i["@partial-block"],e,{name:"@partial-block",data:n,indent:"  ",helpers:a,partials:i,decorators:t.decorators}))?l:"")+"</span>\n  "},usePartial:!0,useData:!0})},96:function(t,e,a){var i=a(1);t.exports=(i.default||i).template({1:function(t,e,a,i,n){var l;return" "+t.escapeExpression((l=null!=(l=a["switch-toggle--modifier"]||(null!=e?e["switch-toggle--modifier"]:e))?l:a.helperMissing,"function"==typeof l?l.call(null!=e?e:t.nullContext||{},{name:"switch-toggle--modifier",hash:{},data:n}):l))},3:function(t,e,a,i,n){var l,r;return"    "+(null!=(r=null!=(r=a["switch-toggle--attribute"]||(null!=e?e["switch-toggle--attribute"]:e))?r:a.helperMissing,l="function"==typeof r?r.call(null!=e?e:t.nullContext||{},{name:"switch-toggle--attribute",hash:{},data:n}):r)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,e,a,i,n){var l,r=null!=e?e:t.nullContext||{};return'<span class="pf-c-switch__toggle'+(null!=(l=a.if.call(r,null!=e?e["switch-toggle--modifier"]:e,{name:"if",hash:{},fn:t.program(1,n,0),inverse:t.noop,data:n}))?l:"")+'"\n'+(null!=(l=a.if.call(r,null!=e?e["switch-toggle--attribute"]:e,{name:"if",hash:{},fn:t.program(3,n,0),inverse:t.noop,data:n}))?l:"")+">\n"+(null!=(l=t.invokePartial(i["@partial-block"],e,{name:"@partial-block",data:n,indent:"  ",helpers:a,partials:i,decorators:t.decorators}))?l:"")+"</span>\n  "},usePartial:!0,useData:!0})},97:function(t,e,a){var i=a(1);t.exports=(i.default||i).template({1:function(t,e,a,i,n){var l;return" "+t.escapeExpression((l=null!=(l=a["switch--modifier"]||(null!=e?e["switch--modifier"]:e))?l:a.helperMissing,"function"==typeof l?l.call(null!=e?e:t.nullContext||{},{name:"switch--modifier",hash:{},data:n}):l))},3:function(t,e,a,i,n){var l,r;return"    "+(null!=(r=null!=(r=a["switch--attribute"]||(null!=e?e["switch--attribute"]:e))?r:a.helperMissing,l="function"==typeof r?r.call(null!=e?e:t.nullContext||{},{name:"switch--attribute",hash:{},data:n}):r)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,e,a,i,n){var l,r=null!=e?e:t.nullContext||{};return'<label class="pf-c-switch'+(null!=(l=a.if.call(r,null!=e?e["switch--modifier"]:e,{name:"if",hash:{},fn:t.program(1,n,0),inverse:t.noop,data:n}))?l:"")+'"\n'+(null!=(l=a.if.call(r,null!=e?e["switch--attribute"]:e,{name:"if",hash:{},fn:t.program(3,n,0),inverse:t.noop,data:n}))?l:"")+">\n"+(null!=(l=t.invokePartial(i["@partial-block"],e,{name:"@partial-block",data:n,indent:"  ",helpers:a,partials:i,decorators:t.decorators}))?l:"")+"</label>\n  \n"},usePartial:!0,useData:!0})},1049:function(t,e){}});
//# sourceMappingURL=component---src-patternfly-components-switch-examples-index-js-00db03a3222db94a6594.js.map