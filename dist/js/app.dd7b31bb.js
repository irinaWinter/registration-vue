(function(t){function e(e){for(var n,i,o=e[0],u=e[1],c=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,o=1;o<r.length;o++){var u=r[o];0!==s[u]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},s={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"3bf4":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],i=r("2877"),o={},u=Object(i["a"])(o,s,a,!1,null,null,null),c=u.exports,l=r("8c4f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"auth"},[r("div",{staticClass:"auth__container container"},[r("h1",{staticClass:"auth__heading"},[t._v("Регистрация")]),r("p",{staticClass:"auth__text"},[t._v("Введите свои данные")]),t.validationErrors?r("rv-validation-errors",{attrs:{"validation-errors":t.validationErrors}}):t._e(),r("form",{staticClass:"auth__form form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form__field",attrs:{type:"text",placeholder:"Имя"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form__field",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form__field",attrs:{type:"password",placeholder:"Пароль"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),r("button",{staticClass:"form__button",attrs:{disabled:t.isSubmitting}},[t._v(" Зарегистрироваться ")])])],1)])},p=[],f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"auth__errros errors"},[r("h3",{staticClass:"visually-hidden"},[t._v("Ошибки валидации")]),r("ul",{staticClass:"errors__list"},t._l(t.errorMessages,(function(e){return r("li",{key:e,staticClass:"errors__item"},[t._v(" "+t._s(e)+" ")])})),0)])},m=[],v=(r("d81d"),r("b64b"),r("a15b"),r("99af"),r("8f17"),{name:"RvValidationErrors",props:{validationErrors:{type:Object,required:!0}},computed:{errorMessages:function(){var t=this;return Object.keys(this.validationErrors).map((function(e){var r=t.validationErrors[e].join(", ");return"".concat(e," ").concat(r)}))}}}),g=v,h=Object(i["a"])(g,f,m,!1,null,null,null),_=h.exports,b=r("ade3"),S=(r("d3b7"),r("bc3a")),y=r.n(S);y.a.defaults.baseURL="https://conduit.productionready.io/api";var w,O=y.a,j=function(t){return O.post("/users",{user:t})},E={register:j},C=function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(r){console.log("Error saving data in localStorage",r)}},x={isSubmitting:!1,currentUser:null,validationErrors:null,isLoggedIn:null},P={registerStart:"[auth] registerStart",registerSuccess:"[auth] registerSuccess",registerFailure:"[auth] registerFailure"},$={register:"[auth] register"},k=(w={},Object(b["a"])(w,P.registerStart,(function(t){t.isSubmitting=!0,t.validationErrors=null})),Object(b["a"])(w,P.registerSuccess,(function(t,e){t.isSubmitting=!1,t.currentUser=e,t.isLoggedIn=!0})),Object(b["a"])(w,P.registerFailure,(function(t,e){t.isSubmitting=!1,t.validationErrors=e})),w),M=Object(b["a"])({},$.register,(function(t,e){return new Promise((function(r){t.commit(P.registerStart),E.register(e).then((function(e){t.commit(P.registerSuccess,e.data.user),C("accessToken",e.data.user.token),r(e.data.user)})).catch((function(e){t.commit(P.registerFailure,e.response.data.errors)}))}))})),R={state:x,mutations:k,actions:M},F={name:"RvRegister",components:{RvValidationErrors:_},data:function(){return{username:"",email:"",password:""}},computed:{isSubmitting:function(){return this.$store.state.auth.isSubmitting},validationErrors:function(){return this.$store.state.auth.validationErrors}},methods:{onSubmit:function(){var t=this;this.$store.dispatch($.register,{username:this.username,email:this.email,password:this.password}).then((function(){t.$router.push({name:"registerSuccess"})}))}}},N=F,T=Object(i["a"])(N,d,p,!1,null,null,null),I=T.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"success"},[r("div",{staticClass:"success__container container"},[r("h1",{staticClass:"success__heading"},[t._v("Вы зарегистрированы")])])])}],U={},V=Object(i["a"])(U,J,L,!1,null,null,null),q=V.exports;n["a"].use(l["a"]);var D=[{path:"/",name:"register",component:I},{path:"/registerSuccess",name:"registerSuccess",component:q}],z=new l["a"]({routes:D}),A=z,B=r("2f62");n["a"].use(B["a"]);var G=new B["a"].Store({state:{},mutations:{},actions:{},modules:{auth:R}});r("3bf4"),r("f5df1");n["a"].config.productionTip=!1,new n["a"]({router:A,store:G,render:function(t){return t(c)}}).$mount("#app")},"8f17":function(t,e,r){}});
//# sourceMappingURL=app.dd7b31bb.js.map