import{j as O,c as u,h as b,k as H,u as Ve,r as S,l as me,w as L,o as pe,Q as te,m as Q,g as E,s as Le,i as ne,n as Oe,p as $e,q as le,t as we,v as ye,x as ae,y as Qe,z as ze,A as Pe,B as oe,C as Te,D as Ie,E as J,G as j,a as ie,H as He,I as Ee,J as Z,K as Re,_ as Me,L as Fe,M as je,O as De,R,S as D,U as p,V as T,W as Ue,X as I,f,Y as ue,Z as X,$ as Ne,a0 as We,F as Ke,a1 as Ge,a2 as ce,a3 as U}from"./index.837f820d.js";import{Q as Je,a as Xe,b as Ye}from"./QList.e3038926.js";import{Q as ke}from"./QMenu.f01e24c7.js";import{Q as ee}from"./QResizeObserver.1bedec00.js";import{Q as N}from"./QPageSticky.6d0da840.js";import{Q as Ze}from"./QScrollObserver.56080228.js";import{C as et}from"./ClosePopup.2326aeaa.js";import{u as tt}from"./use-quasar.b63451cd.js";import{u as nt}from"./vue-i18n.runtime.esm-bundler.d7d40c0b.js";import{a as lt}from"./index.9b9dbd7c.js";import"./selection.90c39012.js";import"./axios.d3fea899.js";var at=O({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const l=u(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>b("div",{class:l.value},H(t.default))}}),ot=O({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const l=u(()=>{const n=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(o=>e[o]===!0).map(o=>`q-btn-group--${o}`).join(" ");return`q-btn-group row no-wrap${n.length>0?" "+n:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>b("div",{class:l.value},H(t.default))}}),it=O({name:"QBtnDropdown",props:{...Ve,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","before-show","show","before-hide","hide"],setup(e,{slots:t,emit:l}){const{proxy:n}=E(),o=S(e.modelValue),r=S(null),s=me(),i=u(()=>{const a={"aria-expanded":o.value===!0?"true":"false","aria-haspopup":"true","aria-controls":s,"aria-owns":s,"aria-label":e.toggleAriaLabel||n.$q.lang.label[o.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(a["aria-disabled"]="true"),a}),v=u(()=>"q-btn-dropdown__arrow"+(o.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":""));L(()=>e.modelValue,a=>{r.value!==null&&r.value[a?"show":"hide"]()}),L(()=>e.split,k);function g(a){o.value=!0,l("before-show",a)}function x(a){l("show",a),l("update:modelValue",!0)}function h(a){o.value=!1,l("before-hide",a)}function _(a){l("hide",a),l("update:modelValue",!1)}function w(a){l("click",a)}function y(a){Le(a),k(),l("click",a)}function B(a){r.value!==null&&r.value.toggle(a)}function q(a){r.value!==null&&r.value.show(a)}function k(a){r.value!==null&&r.value.hide(a)}return Object.assign(n,{show:q,hide:k,toggle:B}),pe(()=>{e.modelValue===!0&&q()}),()=>{const a=[b(te,{class:v.value,name:e.dropdownIcon||n.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&a.push(b(ke,{ref:r,id:s,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,onBeforeShow:g,onShow:x,onBeforeHide:h,onHide:_},t.default)),e.split===!1?b(Q,{class:"q-btn-dropdown q-btn-dropdown--simple",...e,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,...i.value,onClick:w},{default:()=>H(t.label,[]).concat(a),loading:t.loading}):b(ot,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",outline:e.outline,flat:e.flat,rounded:e.rounded,square:e.square,push:e.push,unelevated:e.unelevated,glossy:e.glossy,stretch:e.stretch},()=>[b(Q,{class:"q-btn-dropdown--current",...e,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,iconRight:e.iconRight,round:!1,onClick:y},{default:t.label,loading:t.loading}),b(Q,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...i.value,disable:e.disable===!0||e.disableDropdown===!0,outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,size:e.size,color:e.color,textColor:e.textColor,dense:e.dense,ripple:e.ripple},()=>a)])}}}),rt=O({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const l=u(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>b("div",{class:l.value},H(t.default))}}),st=O({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:l}){const{proxy:{$q:n}}=E(),o=ne(le,()=>{console.error("QHeader needs to be child of QLayout")}),r=S(parseInt(e.heightHint,10)),s=S(!0),i=u(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||n.platform.is.ios&&o.isContainer.value===!0),v=u(()=>{if(e.modelValue!==!0)return 0;if(i.value===!0)return s.value===!0?r.value:0;const a=r.value-o.scroll.value.position;return a>0?a:0}),g=u(()=>e.modelValue!==!0||i.value===!0&&s.value!==!0),x=u(()=>e.modelValue===!0&&g.value===!0&&e.reveal===!0),h=u(()=>"q-header q-layout__section--marginal "+(i.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(g.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),_=u(()=>{const a=o.rows.value.top,C={};return a[0]==="l"&&o.left.space===!0&&(C[n.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),a[2]==="r"&&o.right.space===!0&&(C[n.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),C});function w(a,C){o.update("header",a,C)}function y(a,C){a.value!==C&&(a.value=C)}function B({height:a}){y(r,a),w("size",a)}function q(a){x.value===!0&&y(s,!0),l("focusin",a)}L(()=>e.modelValue,a=>{w("space",a),y(s,!0),o.animate()}),L(v,a=>{w("offset",a)}),L(()=>e.reveal,a=>{a===!1&&y(s,e.modelValue)}),L(s,a=>{o.animate(),l("reveal",a)}),L(o.scroll,a=>{e.reveal===!0&&y(s,a.direction==="up"||a.position<=e.revealOffset||a.position-a.inflectionPoint<100)});const k={};return o.instances.header=k,e.modelValue===!0&&w("size",r.value),w("space",e.modelValue),w("offset",v.value),Oe(()=>{o.instances.header===k&&(o.instances.header=void 0,w("size",0),w("offset",0),w("space",!1))}),()=>{const a=$e(t.default,[]);return e.elevated===!0&&a.push(b("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(b(ee,{debounce:0,onResize:B})),b("header",{class:h.value,style:_.value,onFocusin:q},a)}}});const ut=["top","right","bottom","left"],Ce={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>ut.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function Se(e,t){return{formClass:u(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:u(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:u(()=>{if(e.externalLabel===!0){const l=e.hideLabel===null?t.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(l===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const qe={start:"self-end",center:"self-center",end:"self-start"},ct=Object.keys(qe);var A=O({name:"QFabAction",props:{...Ce,icon:{type:String,default:""},anchor:{type:String,validator:e=>ct.includes(e)},to:[String,Object],replace:Boolean},emits:["click"],setup(e,{slots:t,emit:l}){const n=ne(ye,()=>({showing:{value:!0},onChildClick:we})),{formClass:o,labelProps:r}=Se(e,n.showing),s=u(()=>{const h=qe[e.anchor];return o.value+(h!==void 0?` ${h}`:"")}),i=u(()=>e.disable===!0||n.showing.value!==!0);function v(h){n.onChildClick(h),l("click",h)}function g(){const h=[];return t.icon!==void 0?h.push(t.icon()):e.icon!==""&&h.push(b(te,{name:e.icon})),(e.label!==""||t.label!==void 0)&&h[r.value.action](b("div",r.value.data,t.label!==void 0?t.label():[e.label])),ae(t.default,h)}const x=E();return Object.assign(x.proxy,{click:v}),()=>b(Q,{class:s.value,...e,noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:i.value,onClick:v},g)}});const dt=["up","right","down","left"],ft=["left","center","right"];var W=O({name:"QFab",props:{...Ce,...Qe,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>dt.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>ft.includes(e)}},emits:ze,setup(e,{slots:t}){const l=S(null),n=S(e.modelValue===!0),o=me(),{proxy:{$q:r}}=E(),{formClass:s,labelProps:i}=Se(e,n),v=u(()=>e.persistent!==!0),{hide:g,toggle:x}=Pe({showing:n,hideOnRouteChange:v}),h=u(()=>({opened:n.value})),_=u(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${s.value}`+(n.value===!0?" q-fab--opened":" q-fab--closed")),w=u(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${n.value===!0?"opened":"closed"}`),y=u(()=>{const a={id:o};return n.value===!0?a.role="menu":a["aria-hidden"]="true",a}),B=u(()=>`q-fab__icon-holder  q-fab__icon-holder--${n.value===!0?"opened":"closed"}`);function q(a,C){const d=t[a],m=`q-fab__${a} absolute-full`;return d===void 0?b(te,{class:m,name:e[C]||r.iconSet.fab[C]}):b("div",{class:m},d(h.value))}function k(){const a=[];return e.hideIcon!==!0&&a.push(b("div",{class:B.value},[q("icon","icon"),q("active-icon","activeIcon")])),(e.label!==""||t.label!==void 0)&&a[i.value.action](b("div",i.value.data,t.label!==void 0?t.label(h.value):[e.label])),ae(t.tooltip,a)}return oe(ye,{showing:n,onChildClick(a){g(a),l.value!==null&&l.value.$el.focus()}}),()=>b("div",{class:_.value},[b(Q,{ref:l,class:s.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":n.value===!0?"true":"false","aria-haspopup":"true","aria-controls":o,"aria-owns":o,onClick:x},k),b("div",{class:w.value,...y.value},H(t.default))])}}),bt=O({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:l}}=E(),n=ne(le,()=>{console.error("QPageContainer needs to be child of QLayout")});oe(Te,!0);const o=u(()=>{const r={};return n.header.space===!0&&(r.paddingTop=`${n.header.size}px`),n.right.space===!0&&(r[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(r.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(r[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),r});return()=>b("div",{class:"q-page-container",style:o.value},H(t.default))}}),vt=O({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:l}){const{proxy:{$q:n}}=E(),o=S(null),r=S(n.screen.height),s=S(e.container===!0?0:n.screen.width),i=S({position:0,direction:"down",inflectionPoint:0}),v=S(0),g=S(Ie.value===!0?0:J()),x=u(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),h=u(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),_=u(()=>g.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${g.value}px`}:null),w=u(()=>g.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${g.value}px`,width:`calc(100% + ${g.value}px)`}:null);function y(d){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:d.position.top,direction:d.direction,directionChanged:d.directionChanged,inflectionPoint:d.inflectionPoint.top,delta:d.delta.top};i.value=m,e.onScroll!==void 0&&l("scroll",m)}}function B(d){const{height:m,width:V}=d;let $=!1;r.value!==m&&($=!0,r.value=m,e.onScrollHeight!==void 0&&l("scroll-height",m),k()),s.value!==V&&($=!0,s.value=V),$===!0&&e.onResize!==void 0&&l("resize",d)}function q({height:d}){v.value!==d&&(v.value=d,k())}function k(){if(e.container===!0){const d=r.value>v.value?J():0;g.value!==d&&(g.value=d)}}let a;const C={instances:{},view:u(()=>e.view),isContainer:u(()=>e.container),rootRef:o,height:r,containerHeight:v,scrollbarWidth:g,totalWidth:u(()=>s.value+g.value),rows:u(()=>{const d=e.view.toLowerCase().split(" ");return{top:d[0].split(""),middle:d[1].split(""),bottom:d[2].split("")}}),header:j({size:0,offset:0,space:!1}),right:j({size:300,offset:0,space:!1}),footer:j({size:0,offset:0,space:!1}),left:j({size:300,offset:0,space:!1}),scroll:i,animate(){a!==void 0?clearTimeout(a):document.body.classList.add("q-body--layout-animate"),a=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),a=void 0},155)},update(d,m,V){C[d][m]=V}};if(oe(le,C),J()>0){let V=function(){d=null,m.classList.remove("hide-scrollbar")},$=function(){if(d===null){if(m.scrollHeight>n.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(d);d=setTimeout(V,300)},z=function(P){d!==null&&P==="remove"&&(clearTimeout(d),V()),window[`${P}EventListener`]("resize",$)},d=null;const m=document.body;L(()=>e.container!==!0?"add":"remove",z),e.container!==!0&&z("add"),ie(()=>{z("remove")})}return()=>{const d=ae(t.default,[b(Ze,{onScroll:y}),b(ee,{onResize:B})]),m=b("div",{class:x.value,style:h.value,ref:e.container===!0?void 0:o,tabindex:-1},d);return e.container===!0?b("div",{class:"q-layout-container overflow-hidden",ref:o},[b(ee,{onResize:q}),b("div",{class:"absolute-full",style:_.value},[b("div",{class:"scroll",style:w.value},[m])])]):m}}});const gt=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,ht=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(e=>"[object "+e+"]"));function de(e){if(e!==Object(e)||ht.has(gt.call(e))===!0||e.constructor&&Y.call(e,"constructor")===!1&&Y.call(e.constructor.prototype,"isPrototypeOf")===!1)return!1;let t;for(t in e);return t===void 0||Y.call(e,t)}function Be(){let e,t,l,n,o,r,s=arguments[0]||{},i=1,v=!1;const g=arguments.length;for(typeof s=="boolean"&&(v=s,s=arguments[1]||{},i=2),Object(s)!==s&&typeof s!="function"&&(s={}),g===i&&(s=this,i--);i<g;i++)if((e=arguments[i])!==null)for(t in e)l=s[t],n=e[t],s!==n&&(v===!0&&n&&((o=Array.isArray(n))||de(n)===!0)?(o===!0?r=Array.isArray(l)===!0?l:[]:r=de(l)===!0?l:{},s[t]=Be(v,r,n)):n!==void 0&&(s[t]=n));return s}let fe,be;const F=[];function mt(e){e.title&&(e.title=e.titleTemplate?e.titleTemplate(e.title):e.title,delete e.titleTemplate),[["meta","content"],["link","href"]].forEach(t=>{const l=e[t[0]],n=t[1];for(const o in l){const r=l[o];r.template&&(Object.keys(r).length===1?delete l[o]:(r[n]=r.template(r[n]||""),delete r.template))}})}function pt(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!0;for(const l in e)if(e[l]!==t[l])return!0}function ve(e){return["class","style"].includes(e)===!1}function ge(e){return["lang","dir"].includes(e)===!1}function wt(e,t){const l={},n={};return e===void 0?{add:t,remove:n}:(e.title!==t.title&&(l.title=t.title),["meta","link","script","htmlAttr","bodyAttr"].forEach(o=>{const r=e[o],s=t[o];if(n[o]=[],r==null){l[o]=s;return}l[o]={};for(const i in r)s.hasOwnProperty(i)===!1&&n[o].push(i);for(const i in s)r.hasOwnProperty(i)===!1?l[o][i]=s[i]:pt(r[i],s[i])===!0&&(n[o].push(i),l[o][i]=s[i])}),{add:l,remove:n})}function yt({add:e,remove:t}){e.title&&(document.title=e.title),Object.keys(t).length>0&&(["meta","link","script"].forEach(l=>{t[l].forEach(n=>{document.head.querySelector(`${l}[data-qmeta="${n}"]`).remove()})}),t.htmlAttr.filter(ge).forEach(l=>{document.documentElement.removeAttribute(l)}),t.bodyAttr.filter(ve).forEach(l=>{document.body.removeAttribute(l)})),["meta","link","script"].forEach(l=>{const n=e[l];for(const o in n){const r=document.createElement(l);for(const s in n[o])s!=="innerHTML"&&r.setAttribute(s,n[o][s]);r.setAttribute("data-qmeta",o),l==="script"&&(r.innerHTML=n[o].innerHTML||""),document.head.appendChild(r)}}),Object.keys(e.htmlAttr).filter(ge).forEach(l=>{document.documentElement.setAttribute(l,e.htmlAttr[l]||"")}),Object.keys(e.bodyAttr).filter(ve).forEach(l=>{document.body.setAttribute(l,e.bodyAttr[l]||"")})}function kt(){const e={title:"",titleTemplate:null,meta:{},link:{},script:{},htmlAttr:{},bodyAttr:{}};for(let t=0;t<F.length;t++){const{active:l,val:n}=F[t];l===!0&&Be(!0,e,n)}mt(e),yt(wt(be,e)),be=e}function M(){clearTimeout(fe),fe=setTimeout(kt,50)}function Ct(e){{const t={active:!0};if(typeof e=="function"){const l=u(e);t.val=l.value,L(l,n=>{t.val=n,t.active===!0&&M()})}else t.val=e;F.push(t),M(),He(()=>{t.active=!0,M()}),Ee(()=>{t.active=!1,M()}),ie(()=>{F.splice(F.indexOf(t),1),M()})}}function St(e){const t=Object.assign({noopener:!0},e),l=[];for(const n in t){const o=t[n];o===!0?l.push(n):(Re(o)||typeof o=="string"&&o!=="")&&l.push(n+"="+o)}return l.join(",")}function he(e,t,l){let n=window.open;if(Z.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)n=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(e,{openExternal:!0})}const o=n(e,"_blank",St(l));if(o)return Z.is.desktop&&o.focus(),o;t&&t()}var qt=(e,t,l)=>{if(Z.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(n=>{n?window.SafariViewController.show({url:e},we,t):he(e,t,l)});return}return he(e,t,l)};const Bt={data(){return{}},setup(){const e=Fe(),t=tt(),l=je(),{t:n}=nt(),o=S([18,40]),r=S([18,40]),s=S([18,40]),i=S([18,40]),v=S(0),g=[{value:"en-US",label:"English"},{value:"zh-hans",label:"\u4E2D\u6587\u7B80\u4F53"},{value:"zh-hant",label:"\u4E2D\u6587\u7E41\u9AD4"},{value:"fr",label:"Fran\xE7ais"},{value:"pt",label:"Portugu\xEAs"},{value:"sp",label:"Espa\xF1ol"},{value:"de",label:"Deutsch"},{value:"ru",label:"\u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A"},{value:"ar",label:"Arabic"},{value:"it",label:"Italiano"},{value:"ja",label:"\u65E5\u672C\u8A9E"}],x=u({get:()=>e.state.langchange.lang,set:c=>{e.commit("langchange/langChanged",c)}}),h=u({get:()=>e.state.settings.apptitle,set:c=>{e.commit("settings/APPTitle",c)}}),_=u({get:()=>e.state.settings.server,set:c=>{e.commit("settings/Server",c)}}),w=u({get:()=>e.state.settings.openid,set:c=>{e.commit("settings/Openid",c)}}),y=u({get:()=>e.state.fabchange.fab1,set:c=>{e.commit("fabchange/fabChanged1",c)}}),B=u({get:()=>e.state.fabchange.fab2,set:c=>{e.commit("fabchange/fabChanged2",c)}}),q=u({get:()=>e.state.fabchange.fab3,set:c=>{e.commit("fabchange/fabChanged3",c)}}),k=u({get:()=>e.state.fabchange.fab4,set:c=>{e.commit("fabchange/fabChanged4",c)}}),a=u({get:()=>e.state.linkchange.oldlink,set:c=>{e.commit("linkchange/OldLinkChanged",c)}}),C=u({get:()=>e.state.linkchange.newlink,set:c=>{e.commit("linkchange/NewLinkChanged",c)}}),d=u({get:()=>e.state.loginauth.authin,set:c=>{e.commit("loginauth/loginAuth",c)}}),m=u({get:()=>e.state.loginauth.login_name,set:c=>{e.commit("loginauth/loginName",c)}}),V=u({get:()=>e.state.loginauth.operator,set:c=>{e.commit("loginauth/loginId",c)}}),$=u({get:()=>e.state.screenchange.screenwidth,set:c=>{e.commit("screenchange/screenwidthChanged",c)}}),z=u({get:()=>e.state.screenchange.screenheight,set:c=>{e.commit("screenchange/screenheightChanged",c)}}),P=u({get:()=>e.state.appversion.app_version,set:c=>{e.commit("appversion/AppVersionChanged",c)}}),K=u({get:()=>e.state.appversion.app_new_version,set:c=>{e.commit("appversion/AppNewVersionChanged",c)}});Ct(()=>({title:h.value}));function xe(){let c=t.screen.width,G=t.screen.height;$.value=c,z.value=G,o.value=[18,40],i.value=[18+(c-86)/3,40],r.value=[18+(c-86)/3*2,40],s.value=[18+(c-86),40]}function Ae(){if(t.platform.is.desktop&&window.device){let c={model:device.model,platform:device.platform,uuid:device.uuid,version:device.version,manufacturer:device.manufacturer,isVirtual:device.isVirtual,serial:device.serial};lt.post("https://www.56yhz.com/appversion/",c).then(G=>{K.value=G.data.detail,_e()})}}function _e(){P.value="1.0",K.value!==P.value&&t.dialog({title:n("notice.version.new"),message:n("notice.version.detail"),cancel:!0,persistent:!0}).onOk(()=>{qt("https://www.56yhz.com/")})}function re(c){v.value=c.keyboardHeight}function se(c){v.value=c.keyboardHeight||0}return pe(()=>{window.device&&window.plugins.insomnia.keepAwake(),Ae(),xe(),window.addEventListener("native.keyboardshow",re),window.addEventListener("native.keyboardhide",se)}),ie(()=>{window.removeEventListener("native.keyboardshow",re),window.removeEventListener("native.keyboardhide",se)}),{app_version:P,app_new_version:K,t:n,langOptions:g,apptitle:h,server:_,openid:w,lang:x,fab1:y,fab2:B,fab3:q,fab4:k,menuShow:v,oldlink:a,newlink:C,Outbound:i,Settings:s,Stock:r,Inbound:o,screenwidth:$,screenheight:z,authin:d,login_name:m,operator:V,langChange(c){x.value=c},fabshow1(){y.value===!0&&(B.value=!1,q.value=!1,k.value=!1)},fabshow2(){B.value===!0&&(y.value=!1,q.value=!1,k.value=!1)},fabshow3(){q.value===!0&&(y.value=!1,B.value=!1,k.value=!1)},fabshow4(){k.value===!0&&(y.value=!1,B.value=!1,q.value=!1)},onClick(c){a.value=l.name,C.value=c}}},watch:{lang(e){var t=this;t.$i18n.locale=e}}},xt={class:"row no-wrap q-pa-md"},At={class:"column",style:{width:"150px"}},_t={style:{width:"100%","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},Vt={style:{"margin-left":"6%","font-weight":"bold"}},Lt=I("hr",{style:{height:"2px",border:"none","border-top":"1px solid #e1e1e1",width:"121%","margin-left":"-10.5%","margin-top":"8%"}},null,-1);function Ot(e,t,l,n,o,r){const s=De("router-view");return R(),D(vt,{view:"hHh lpR fFf"},{default:p(()=>[T(I("input",{id:"showThisMenu","onUpdate:modelValue":t[0]||(t[0]=i=>n.menuShow=i),type:"number",style:{display:"none"}},null,512),[[Ue,n.menuShow]]),f(st,{elevated:"",class:"bg-primary text-white"},{default:p(()=>[f(rt,{class:"main-headers text-white shadow-18 rounded-borders"},{default:p(()=>[f(at,{onClick:t[1]||(t[1]=i=>e.$router.push({name:"home"}))},{default:p(()=>[ue(X(n.apptitle),1)]),_:1}),f(Q,{round:"",dense:"",flat:"",color:"white",icon:"translate",style:{margin:"0 10px 0 10px"}},{default:p(()=>[f(ke,null,{default:p(()=>[f(Je,{style:{"min-width":"100px"}},{default:p(()=>[(R(!0),Ne(Ke,null,We(n.langOptions,(i,v)=>T((R(),D(Xe,{clickable:"",key:v,onClick:g=>n.langChange(i.value)},{default:p(()=>[f(Ye,null,{default:p(()=>[ue(X(i.label),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[et]])),128))]),_:1})]),_:1})]),_:1}),f(Ge,{vertical:""}),n.authin==="1"?(R(),D(it,{key:0,stretch:"",flat:"",color:"white-8",icon:"account_circle"},{default:p(()=>[I("div",xt,[I("div",At,[I("div",_t,[I("span",Vt,X(n.login_name),1)]),Lt,f(Q,{flat:"",rounded:"",class:"full-width",align:"left",label:e.$t("index.change_user"),to:{name:"login"}},null,8,["label"])])])]),_:1})):ce("",!0),n.authin==="0"?(R(),D(Q,{key:1,label:e.$t("index.login"),color:"primary",style:{"margin-left":"10px"},to:{name:"login"}},null,8,["label"])):ce("",!0)]),_:1})]),_:1}),f(bt,null,{default:p(()=>[f(s),T(f(N,{position:"bottom-left",offset:n.Inbound},{default:p(()=>[f(W,{modelValue:n.fab1,"onUpdate:modelValue":t[4]||(t[4]=i=>n.fab1=i),icon:"speaker_notes",label:e.$t("menuItem.inbound"),"label-position":"bottom","external-label":"","vertical-actions-align":"left",direction:"up","hide-label":"",color:"blue-grey-7","label-style":"background-color: rgb(85 0 0 / 0%); color: black",onClick:n.fabshow1},{default:p(()=>[f(A,{padding:"10px",label:e.$t("inbound.asn"),to:{name:"asnlist"},flat:"",icon:"img:statics/inbound/polist.png",onClick:t[2]||(t[2]=i=>n.onClick("asnlist"))},null,8,["label"]),f(A,{padding:"10px",label:e.$t("inbound.asnfinish"),to:{name:"asndetail"},flat:"",icon:"img:statics/inbound/preloadstock.png",onClick:t[3]||(t[3]=i=>n.onClick("asndetail"))},null,8,["label"])]),_:1},8,["modelValue","label","onClick"])]),_:1},8,["offset"]),[[U,n.menuShow===0]]),T(f(N,{position:"bottom-left",offset:n.Outbound},{default:p(()=>[f(W,{modelValue:n.fab2,"onUpdate:modelValue":t[8]||(t[8]=i=>n.fab2=i),icon:"rv_hookup",label:e.$t("menuItem.outbound"),"label-position":"bottom","external-label":"","hide-label":"","vertical-actions-align":"left",direction:"up",color:"blue-grey-7","label-style":"background-color: rgb(85 0 0 / 0%); color: black",onClick:n.fabshow2},{default:p(()=>[f(A,{padding:"10px",label:e.$t("outbound.dn"),to:{name:"dnlist"},flat:"",icon:"img:statics/outbound/dnlist.png",onClick:t[5]||(t[5]=i=>n.onClick("dnlist"))},null,8,["label"]),f(A,{padding:"10px",label:e.$t("notice.mobile_dn.notice1"),to:{name:"dndetail"},flat:"",icon:"img:statics/outbound/outbound.png",onClick:t[6]||(t[6]=i=>n.onClick("dndetail"))},null,8,["label"]),f(A,{padding:"10px",label:e.$t("outbound.pickinglist"),to:{name:"pickinglist"},flat:"",icon:"img:statics/outbound/pickinglist.png",onClick:t[7]||(t[7]=i=>n.onClick("pickinglist"))},null,8,["label"])]),_:1},8,["modelValue","label","onClick"])]),_:1},8,["offset"]),[[U,n.menuShow===0]]),T(f(N,{position:"bottom-left",offset:n.Stock},{default:p(()=>[f(W,{modelValue:n.fab3,"onUpdate:modelValue":t[14]||(t[14]=i=>n.fab3=i),icon:"speaker_notes",label:e.$t("menuItem.stock"),"label-position":"bottom","external-label":"","hide-label":"","vertical-actions-align":"right",direction:"up",color:"blue-grey-7","label-style":"background-color: rgb(85 0 0 / 0%); color: black",onClick:n.fabshow3},{default:p(()=>[f(A,{padding:"10px",label:e.$t("scan.scan_goodsquery"),to:{name:"goods"},flat:"","icon-right":"img:statics/stock/stocklist.png",onClick:t[9]||(t[9]=i=>n.onClick("goods"))},null,8,["label"]),f(A,{padding:"10px",label:e.$t("stock.stocklist"),to:{name:"goodsstock"},flat:"","icon-right":"img:statics/stock/stocklist.png",onClick:t[10]||(t[10]=i=>n.onClick("goodsstock"))},null,8,["label"]),f(A,{padding:"10px",label:e.$t("stock.stockbinlist"),to:{name:"binstock"},flat:"","icon-right":"img:statics/stock/binset.png",onClick:t[11]||(t[11]=i=>n.onClick("binstock"))},null,8,["label"]),f(A,{padding:"10px",label:e.$t("stock.emptybin"),to:{name:"emptybin"},flat:"","icon-right":"all_out",onClick:t[12]||(t[12]=i=>n.onClick("emptybin"))},null,8,["label"]),f(A,{padding:"10px",label:e.$t("notice.handcount.notice2"),to:{name:"handcount"},flat:"","icon-right":"img:statics/stock/cyclecount.png",onClick:t[13]||(t[13]=i=>n.onClick("handcount"))},null,8,["label"])]),_:1},8,["modelValue","label","onClick"])]),_:1},8,["offset"]),[[U,n.menuShow===0]]),T(f(N,{position:"bottom-left",offset:n.Settings},{default:p(()=>[f(W,{modelValue:n.fab4,"onUpdate:modelValue":t[17]||(t[17]=i=>n.fab4=i),icon:"widgets",label:e.$t("Settings.index"),"label-position":"bottom","external-label":"","hide-label":"","vertical-actions-align":"right",direction:"up",color:"blue-grey-7","label-style":"background-color: rgb(85 0 0 / 0%); color: black",onClick:n.fabshow4},{default:p(()=>[f(A,{padding:"10px",label:e.$t("Settings.server"),to:{name:"server"},flat:"","icon-right":"dns",onClick:t[15]||(t[15]=i=>n.onClick("server"))},null,8,["label"]),f(A,{padding:"10px",label:e.$t("Settings.equipment"),to:{name:"equipment"},flat:"","icon-right":"barcode_reader",onClick:t[16]||(t[16]=i=>n.onClick("equipment"))},null,8,["label"])]),_:1},8,["modelValue","label","onClick"])]),_:1},8,["offset"]),[[U,n.menuShow===0]])]),_:1})]),_:1})}var Dt=Me(Bt,[["render",Ot]]);export{Dt as default};