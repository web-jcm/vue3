var i=Object.defineProperty;var a=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var s=(e,t,o)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,r=(e,t)=>{for(var o in t||(t={}))_.call(t,o)&&s(e,o,t[o]);if(a)for(var o of a(t))h.call(t,o)&&s(e,o,t[o]);return e};import{g as f,u as g,h as n,m as x,r as m,o as V,c as v,w as c,j as l,t as u,k as w}from"./vendor.2ea18b92.js";import{_ as T}from"./index.eb3a994c.js";const $=f({name:"Home",setup(){const e=g(),t=()=>e.dispatch("home/getText");return{title:n(()=>e.state.home.title),subtitle:n(()=>e.state.home.subtitle),getText:t}},data(){return{}},computed:r({},x({someValue:e=>e.someValue})),mounted(){this.getText()}});function b(e,t,o,k,C,S){const p=m("el-tag"),d=m("el-card");return V(),v(d,{shadow:"hover"},{default:c(()=>[l(u(e.someValue+"."+e.title),1),w(p,{shadow:"hover"},{default:c(()=>[l(u(e.subtitle),1)]),_:1})]),_:1})}var j=T($,[["render",b]]);export{j as default};
