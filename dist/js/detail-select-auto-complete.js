(window.wpJsonpSelectAutoComplete=window.wpJsonpSelectAutoComplete||[]).push([[0],{3:function(e,t,n){"use strict";n.r(t);var i={name:"SelectedPanelItem",props:{field:{type:Object,required:!0},fieldName:{type:String,default:""}},computed:{label:function(){return this.fieldName||this.field.name},fieldValue:function(){var e=this;if(""===this.field.value||null===this.field.value||void 0===this.field.value)return!1;if(void 0!==this.field.displayUsingLabels&&!0===this.field.displayUsingLabels){var t=this.field.options.find((function(t){return Number(t.value)===Number(e.field.value)}));return t?String(t.label):""}return String(this.field.value)},shouldDisplayAsHtml:function(){return this.field.asHtml}}},l=n(6),s={components:{SelectedPanelItem:Object(l.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex border-b border-40"},[n("div",{staticClass:"w-1/4 py-4"},[e._t("default",[n("h4",{staticClass:"font-normal text-80"},[e._v("\n                "+e._s(e.label)+"\n            ")])])],2),e._v(" "),n("div",{staticClass:"w-3/4 py-4"},[e._t("value",[e.fieldValue&&!e.shouldDisplayAsHtml?n("p",{staticClass:"text-90"},[e._v("\n                "+e._s(e.fieldValue)+"\n            ")]):e.fieldValue&&e.shouldDisplayAsHtml?n("div",{domProps:{innerHTML:e._s(e.field.value)}}):n("p",[e._v("\n                —\n            ")])])],2)])}),[],!1,null,null,null).exports},props:["resource","resourceName","resourceId","field"]},r=Object(l.a)(s,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("selected-panel-item",{attrs:{field:e.field}})}),[],!1,null,null,null);t.default=r.exports},6:function(e,t,n){"use strict";function i(e,t,n,i,l,s,r,a){var o,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),r?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),l&&l.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=o):l&&(o=a?function(){l.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:l),o)if(d.functional){d._injectStyles=o;var u=d.render;d.render=function(e,t){return o.call(t),u(e,t)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,o):[o]}return{exports:e,options:d}}n.d(t,"a",(function(){return i}))}}]);