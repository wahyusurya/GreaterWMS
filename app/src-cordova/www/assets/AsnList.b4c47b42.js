import{Q as u}from"./QItemLabel.d797dbce.js";import{Q as O,b as S,a as U}from"./QList.961a0366.js";import{_ as W,az as X,J as G,aP as H,r as K,c as t,w as E,o as Y,M as D,O as Z,R as s,f as n,S as r,U as c,X as M,V as q,W as aa,F,$ as ea,aA as ta}from"./index.c1f9df61.js";import{u as na}from"./use-quasar.03141881.js";import{a as sa}from"./index.2885cb15.js";import{u as oa}from"./vue-i18n.runtime.esm-bundler.76c89422.js";const ca=X({name:"ASNList",data(){return{}},setup(){const a=G(),y=H(),m=na(),d=K(0),{t:g}=oa(),A=t({get:()=>a.state.fabchange.fab1}),i=t({get:()=>a.state.fabchange.fab2}),p=t({get:()=>a.state.fabchange.fab3}),N=t({get:()=>a.state.fabchange.fab4}),Q=t({get:()=>a.state.screenchange.screenscroll}),L=t({get:()=>a.state.loginauth.authin}),P=t({get:()=>a.state.loginauth.login_name}),k=t({get:()=>a.state.loginauth.operator}),w=t({get:()=>a.state.settings.openid}),V=t({get:()=>a.state.langchange.lang}),b=t({get:()=>a.state.settings.server}),R=t({get:()=>a.state.scanchanged.scandata,set:e=>{a.commit("scanchanged/ScanChanged",e)}}),j=t({get:()=>a.state.scanchanged.datadetail,set:e=>{a.commit("scanchanged/ScanDataChanged",e)}}),_=t({get:()=>a.state.scanchanged.asndata,set:e=>{a.commit("scanchanged/ASNDataChanged",e)}}),x=t({get:()=>a.state.scanchanged.dndata,set:e=>{a.commit("scanchanged/DNDataChanged",e)}}),z=t({get:()=>a.state.scanchanged.bindata,set:e=>{a.commit("scanchanged/BinDataChanged",e)}}),f=t({get:()=>a.state.scanchanged.tablelist,set:e=>{a.commit("scanchanged/TableDataChanged",e)}}),$=t({get:()=>a.state.scanchanged.scanmode,set:e=>{a.commit("scanchanged/ScanModeChanged",e)}}),h=t({get:()=>a.state.scanchanged.apiurl,set:e=>{a.commit("scanchanged/ApiUrlChanged",e)}}),v=t({get:()=>a.state.scanchanged.apiurlnext,set:e=>{a.commit("scanchanged/ApiUrlNextChanged",e)}}),B=t({get:()=>a.state.scanchanged.apiurlprevious,set:e=>{a.commit("scanchanged/ApiUrlPreviousChanged",e)}});function I(e){if(e!==null){var o=b.value.split(":"),l=e.split(":");return o[0]!==l[0]?o[0]+":"+l[1]:l}else return null}function J(e){_.value=e,$.value="ASN",y.push({name:"asndetail"})}function T(e){sa.get(h.value+e,{headers:{"Content-Type":"application/json",token:w.value,language:V.value,operator:k.value}}).then(o=>{if(o.data.detail)m.notify({type:"negative",message:g("notice.mobile_scan.notice1")});else{var l=[];f.value.forEach(C=>{l.push(C)}),o.data.results.forEach(C=>{l.push(C)}),f.value=l,B.value=I(o.data.previous),v.value=I(o.data.next)}}).catch(o=>{m.notify({type:"negative",message:g("notice.mobile_scan.notice3")})})}return E(Q,(e,o)=>{e>=.95?v.value!==null&&(h.value=v.value,d.value=1):d.value=0}),E(d,(e,o)=>{e===1&&T("")}),Y(()=>{L.value==="0"?m.notify({type:"negative",message:g("notice.mobile_userlogin.notice9")}):($.value="ASN",h.value=b.value+"asn/list/",_.value="",f.value=[],T(""))}),{t:g,fab1:A,fab2:i,fab3:p,fab4:N,screenscroll:Q,authin:L,login_name:P,openid:w,operator:k,lang:V,requestauth:d,baseurl:b,apiurl:h,apiurlnext:v,apiurlprevious:B,scandata:R,datadetail:j,tablelist:f,asndata:_,dndata:x,bindata:z,scanmode:$,DetailLine:J}}});function ia(a,y,m,d,g,A){return D(),Z(O,{bordered:"",padding:""},{default:s(()=>[n(U,null,{default:s(()=>[n(S,null,{default:s(()=>[n(u,{overline:""},{default:s(()=>[r(c(a.$t("notice.mobile_asn.notice1")),1)]),_:1}),n(u,{caption:""},{default:s(()=>[r(c(a.$t("notice.mobile_asn.notice2")),1)]),_:1})]),_:1})]),_:1}),n(M,{spaced:""}),(D(!0),q(F,null,aa(a.tablelist,(i,p)=>(D(),q(F,{key:p},[n(U,null,{default:s(()=>[n(S,{onClick:N=>a.DetailLine(i.asn_code)},{default:s(()=>[n(u,null,{default:s(()=>[r(c(i.asn_code),1)]),_:2},1024),n(u,{caption:"",lines:"2"},{default:s(()=>[r(c(a.$t("notice.mobile_asn.notice3"))+c(i.supplier),1)]),_:2},1024)]),_:2},1032,["onClick"]),n(S,{side:"",top:""},{default:s(()=>[n(u,{caption:""},{default:s(()=>[r(c(a.$t("notice.mobile_asn.notice4"))+":"+c(i.total_cost),1)]),_:2},1024),n(u,{caption:""},{default:s(()=>[r(c(a.$t("notice.mobile_asn.notice5"))+c(i.asn_status),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),ea(n(M,{spaced:"",inset:"item"},null,512),[[ta,p+1!==a.tablelist.length]])],64))),128))]),_:1})}var pa=W(ca,[["render",ia]]);export{pa as default};