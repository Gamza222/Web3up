"use strict";(self.webpackChunkweb3up=self.webpackChunkweb3up||[]).push([[919],{1919:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(6540);const l={};var u=n(7761),r=n.n(u),o=n(5534),i=n(3747),s=n(7101),c=n(9630),d=n(2896),v=function(e){var t;return null===(t=null==e?void 0:e.Login)||void 0===t?void 0:t.data},m=function(e){var t;return null===(t=null==e?void 0:e.Login)||void 0===t?void 0:t.error},p=function(e){var t;return null===(t=null==e?void 0:e.Login)||void 0===t?void 0:t.isLoading},f=n(9095),g=n(13);const w=function(e){e.className;var t=(0,c.j)(),n=(0,a.useState)(""),u=n[0],w=n[1],b=(0,a.useState)(""),E=b[0],h=b[1],k=(0,d.d4)(v),C=((0,d.d4)(m),(0,d.d4)(p),(0,a.useCallback)((function(e){t(f.pc.setEmail(e))}),[t])),L=(0,a.useCallback)((function(e){t(f.pc.setPassword(e))}),[t]);return a.createElement("form",{className:(0,s.x)(l.LoginForm,{},[]),onSubmit:function(e){return function(e){e.preventDefault();var n=r().isEmail(k.email),a=k.password.length>=8;n&&a?(w(""),h(""),t((0,g.T)({email:k.email,password:k.password}))):(a?a&&h(""):h("Пароль должен содержать не меньше 8 символов!"),n?n&&w(""):w("Некорректная почта!"))}(e)}},a.createElement("p",null,u),a.createElement(i.A,{type:"text",value:k.email,onChange:function(e){return C(e.target.value)}}),a.createElement("p",null,E),a.createElement(i.A,{type:"text",value:k.password,onChange:function(e){return L(e.target.value)}}),a.createElement(o.A,{type:"submit",text:"Войти"}))}}}]);