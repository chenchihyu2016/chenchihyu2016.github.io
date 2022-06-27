var R=Object.defineProperty;var U=(e,n,o)=>n in e?R(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var h=(e,n,o)=>(U(e,typeof n!="symbol"?n+"":n,o),o);import{d as w,_ as b,o as d,c as s,a,b as C,w as j,e as x,t as i,T as I,F as p,r as f,f as g,g as O,h as T,i as z,z as P,j as A,k as L,s as N,l as y,u as B,m as q,n as $,p as F,q as V}from"./index.1656322463263.js";import{u as M,a as H}from"./scroll.1656322463263.js";const K=w({props:{data:{type:Object,required:!0},store:{type:Object,required:!0}},setup(){const{imageRef:e,clickImageRef:n,imageChange:o}=M();return{rightData:["id","name","username","phone"],imageRef:e,clickImageRef:n,imageChange:o}}}),W={class:"wrapper"},Y={class:"image_container"},G=["src","alt"],J={class:"right_data_container"},Q={class:"data_name"},X={class:"data_value"},Z={class:"bottom_data_container"},ee={class:"data_item"},ae={class:"data_name"},te={class:"data_value"},ne={class:"data_item"},ie={class:"data_name"},de={class:"data_value"},oe={class:"data_item"},se={class:"data_name"},re={class:"data_value"},le={class:"data_item"},ce={class:"data_name"},me={class:"data_value"},_e={class:"button_container"};function pe(e,n,o,l,c,m){return d(),s("div",W,[a("input",{type:"file",ref:"imageRef",accept:"image/*",onChange:n[0]||(n[0]=(...t)=>e.imageChange&&e.imageChange(...t))},null,544),a("div",Y,[C(I,{name:"fade",mode:"out-in"},{default:j(()=>[e.data.image?(d(),s("img",{src:e.data.image,key:e.data.id,alt:e.data.image,onClick:n[1]||(n[1]=t=>e.clickImageRef(e.data.id))},null,8,G)):(d(),s("div",{key:1,onClick:n[2]||(n[2]=x(t=>e.clickImageRef(e.data.id),["self"]))},i(e.$t("CLICK_TO_UPDATE_PHOTO")),1))]),_:1})]),a("div",J,[(d(!0),s(p,null,f(e.rightData,(t,r)=>(d(),s("div",{class:"data_item",key:r},[a("div",Q,i(e.$t(t.toUpperCase())),1),a("div",X,i(e.data[t]),1)]))),128))]),a("div",Z,[a("div",ee,[a("div",ae,i(e.$t("EMAIL")),1),a("div",te,i(e.data.email),1)]),a("div",ne,[a("div",ie,i(e.$t("WEBSITE")),1),a("div",de,i(e.data.website),1)]),a("div",oe,[a("div",se,i(e.$t("ADDRESS")),1),a("div",re,i(`${e.data.address.city},
                        ${e.data.address.street},
                        ${e.data.address.suite},
                        ${e.data.address.zipcode}`),1)]),a("div",le,[a("div",ce,i(e.$t("COMPANY")),1),a("div",me,i(e.data.company.name),1)])]),a("div",_e,[a("button",{class:"success",onClick:n[3]||(n[3]=x(t=>e.$emit("destroy"),["self"]))},i(e.$t("CLOSE")),1)])])}var fe=b(K,[["render",pe],["__scopeId","data-v-53d43566"]]);const ve=w({props:{modals:{type:Object},store:{type:Object},destroyModals:{type:Function}},components:{MUserDetail:fe},setup(e){const n=e.modals,o=e.store,l=e.destroyModals,c=g(n);function m(t){const r=c.value.findIndex(_=>_.id===t);c.value.splice(r,1),c.value.length===0&&l()}return{modals:c,storeProp:o,destroy:m}}}),ge={class:"modal_backdrop"};function ue(e,n,o,l,c,m){return d(),s("div",ge,[(d(!0),s(p,null,f(e.modals,t=>(d(),O(T(t.modalName),{store:e.storeProp,data:t.data,key:t.id,class:"component",onDestroy:r=>e.destroy(t.id),onCallback:t.callback},null,40,["store","data","onDestroy","onCallback"]))),128))])}var he=b(ve,[["render",ue],["__scopeId","data-v-3e3fffaa"]]);class ye{constructor(){h(this,"modals");h(this,"app");this.modals=g([]),this.app=null}userDetail(n,o){const l="MUserDetail";this.create(n,l,o)}create(n,o,l){var r;const m={id:new Date().getTime(),data:n,callback:l,modalName:o},t=z({legacy:!1,locale:(r=localStorage.getItem("locale"))!=null?r:"en-US",fallbackLocale:"en-US",messages:{"zh-TW":P,"en-US":A}});if(this.modals.value.push(m),this.modals.value.length===1){const _=this.modals,v=document.createElement("div"),u=this.destroyModals.bind(this);this.app=L(he,{modals:_,store:N,destroyModals:u}),this.app.use(t),v.id="modalElement",document.body.appendChild(v),this.app.mount(v)}}destroyModals(){const n=document.body.querySelector("#modalElement");this.app.unmount(),document.body.removeChild(n)}}var we=new ye;const be=w({setup(){const e=g(!0),n=g(),o=y(()=>_.isMobile),l=y(()=>v["data/getUsers"]),c=y(()=>o.value?["id","name"]:["id","name","username","email","phone","website"]),{imageRef:m,clickImageRef:t,imageChange:r}=M(),{state:_,getters:v,dispatch:u}=B(),{setScrollTarget:D}=H();q(async()=>{await u("data/getUsers"),D(n.value),setTimeout(()=>{e.value=!1},750)});function S(E){we.userDetail(E)}return{users:l,loading:e,itemList:c,imageRef:m,isMobile:o,elementContainerRef:n,clickImageRef:t,imageChange:r,userDetail:S}}}),k=e=>(F("data-v-3348294d"),e=e(),V(),e),ke={class:"element_container",ref:"elementContainerRef"},xe={class:"image_container"},$e=["src","alt","onClick"],Ce=["onClick"],je={class:"data_container"},Ie={class:"data_name"},Me={class:"data_value"},De={key:0,class:"data_item"},Se={class:"data_name"},Ee={class:"data_value"},Re={key:1,class:"data_item"},Ue={class:"data_name"},Oe={class:"data_value"},Te=["onClick"],ze=k(()=>a("div",{class:"image_container"},[a("div",{class:"image_skeleton"})],-1)),Pe={class:"data_container"},Ae=k(()=>a("div",{class:"data_name_skeleton"},null,-1)),Le=k(()=>a("div",{class:"data_value"},null,-1)),Ne=[Ae,Le];function Be(e,n,o,l,c,m){return d(),s("main",ke,[e.loading?(d(),s(p,{key:1},f(5,t=>a("div",{class:"element",key:t},[ze,a("div",Pe,[(d(),s(p,null,f(9,r=>a("div",{class:"data_item",key:r},Ne)),64))])])),64)):(d(),s(p,{key:0},[a("input",{type:"file",ref:"imageRef",accept:"image/*",onChange:n[0]||(n[0]=(...t)=>e.imageChange&&e.imageChange(...t))},null,544),(d(!0),s(p,null,f(e.users,t=>(d(),s("div",{class:"element",key:t.id},[a("figure",xe,[C(I,{name:"fade",mode:"out-in"},{default:j(()=>[t.image?(d(),s("img",{src:t.image,key:t.image,alt:t.image,class:"image",onClick:r=>e.clickImageRef(t.id)},null,8,$e)):(d(),s("figcaption",{key:1,class:"image",onClick:r=>e.clickImageRef(t.id)},i(e.$t("CLICK_TO_UPDATE_PHOTO")),9,Ce))]),_:2},1024)]),a("div",je,[(d(!0),s(p,null,f(e.itemList,(r,_)=>(d(),s("div",{class:"data_item",key:_},[a("div",Ie,i(e.$t(r.toUpperCase())),1),a("div",Me,i(t[r]),1)]))),128)),e.isMobile?$("",!0):(d(),s("div",De,[a("div",Se,i(e.$t("COMPANY")),1),a("div",Ee,i(t.company.name),1)])),e.isMobile?$("",!0):(d(),s("div",Re,[a("div",Ue,i(e.$t("ADDRESS")),1),a("div",Oe,i(t.address.city)+", "+i(t.address.street),1)])),a("div",{class:"data_item clickable",onClick:r=>e.userDetail(t)},i(e.$t("SEE_MORE")),9,Te)])]))),128))],64))],512)}var He=b(be,[["render",Be],["__scopeId","data-v-3348294d"]]);export{He as default};
