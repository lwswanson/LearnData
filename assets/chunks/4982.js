"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[4982],{2113:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(8e3),o=n(1395),s=n(2078);const r=(0,a.aZ)({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=(0,s.yj)(),n=(0,o.iH)();(0,a.YP)((()=>t.path),(()=>n.value.focus()));const r=({target:e})=>{const t=document.querySelector(e.hash);if(t){const e=()=>{t.removeAttribute("tabindex"),t.removeEventListener("blur",e)};t.setAttribute("tabindex","-1"),t.addEventListener("blur",e),t.focus(),window.scrollTo(0,0)}};return()=>[(0,a.h)("span",{ref:n,tabindex:"-1"}),(0,a.h)("a",{href:`#${e.content}`,class:"skip-link sr-only",onClick:r},"Skip to content")]}})},4982:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(8e3),o=n(6765),s=n(9231),r=n(9812);const u=(0,a.aZ)({name:"FadeSlideY",setup(e,{slots:t}){const n=(0,r.P$)(),o=n.resolve,u=n.pending;return()=>(0,a.h)(s.uT,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:o,onBeforeLeave:u},(()=>t.default?.()))}});var l=n(2113);const p=(0,a.aZ)({name:"Layout",setup(){const e=(0,r.BV)(),t=(0,r.X6)(),n=(0,o.Vi)(),s=(0,o.I2)(),p=(0,r.XA)(),i=(0,a.Fl)((()=>t.value.blog.sidebarDisplay||e.value.blog.sidebarDisplay||"mobile"));return()=>[(0,a.h)(l.Z),(0,a.h)((0,a.up)("CommonWrapper"),{},{default:()=>s.value.home?(0,a.h)((0,a.up)("HomePage")):(0,a.h)(u,(()=>(0,a.h)((0,a.up)("NormalPage"),{key:n.value.path}))),..."none"!==i.value?{navScreenBottom:()=>(0,a.h)((0,a.up)("BloggerInfo"))}:{},...p.value||"always"!==i.value?{}:{sidebar:()=>(0,a.h)((0,a.up)("BloggerInfo"))}})]}})}}]);