(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{288:function(t,e,n){var content=n(295);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("2f3fcffa",content,!0,{sourceMap:!1})},289:function(t,e,n){var content=n(297);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("f0f029ce",content,!0,{sourceMap:!1})},291:function(t,e,n){var content=n(300);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("0557587d",content,!0,{sourceMap:!1})},292:function(t,e,n){"use strict";n(184),n(26),n(11),n(7),n(16),n(37),n(5);var r=n(3),o=n(304),c=n.n(o),l=n(111),d=n(110);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"/aluno/certificados"},{id:4,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:7,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"},{id:8,label:"Apoie a new school",icon:"mdi-volume-high",link:"/construindo"},{id:8,label:"Ranking",icon:"mdi-trophy",link:"/aluno/ranking"}]}},methods:m(m({},Object(l.b)("user",["clearInfoUser"])),{},{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),t.clearInfoUser()}))},pushAdminOnlyOptions:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos",this.menu.push({id:9,label:"Dashboard",icon:"mdi-chart-bar",link:"/admin/dashboard"}))},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.pushAdminOnlyOptions())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:c.a}},h=(n(294),n(35)),x=n(42),k=n.n(x),y=n(280),w=n(279),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page"},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1)]),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link},nativeOn:{click:function(e){return t.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"09cba8c5",null),_=component.exports;k()(component,{VBtn:y.a,VIcon:w.a});var O={components:{SideMenu:_},data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Início",icon:"mdi-home-outline",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account-outline",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school-outline",link:"/aluno/certificados",class:""}]}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].link="/admin/certificados")}}},j=(n(296),n(922)),C=Object(h.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"7d2ee64a",null);e.a=C.exports;k()(C,{VBottomNavigation:j.a,VBtn:y.a,VIcon:w.a})},293:function(t,e,n){"use strict";var r={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},o=(n(299),n(35)),c=n(42),l=n.n(c),d=n(280),f=n(279),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"head__bar"}},[t.backPage?n("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:t.comeBackPage}},[n("v-icon",[t._v("mdi-arrow-left")])],1):t._e(),t._v(" "),n("h1",{staticClass:"h1__theme"},[t._v(t._s(t.title))])],1)}),[],!1,null,"576ed64e",null);e.a=component.exports;l()(component,{VBtn:d.a,VIcon:f.a})},294:function(t,e,n){"use strict";var r=n(288);n.n(r).a},295:function(t,e,n){(e=n(24)(!1)).push([t.i,".container-page[data-v-09cba8c5]{z-index:2}#btnLogout[data-v-09cba8c5]{margin-top:5px}.mdi-close-circle[data-v-09cba8c5]:before{color:var(--primary)}.container-page>main[data-v-09cba8c5]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-09cba8c5],.container-page>main[data-v-09cba8c5]{display:-webkit-box;display:flex}#avatar[data-v-09cba8c5]{margin-right:1rem}.text-menu[data-v-09cba8c5]{text-transform:uppercase}.mdi-library-books[data-v-09cba8c5]:before{content:url(https://api.iconify.design/mdi-library-books.svg?color=rgb%28105%2C0%2C204%29&height=24);vertical-align:-.125em}h1[data-v-09cba8c5]{font-size:1rem;font-weight:500;color:#000;text-transform:capitalize}.container-page[data-v-09cba8c5]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-09cba8c5]{margin-left:0}#close-btn[data-v-09cba8c5]{cursor:pointer;font-size:30px}#flex-info-user[data-v-09cba8c5]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-09cba8c5]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-09cba8c5]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-09cba8c5]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-09cba8c5]{width:100%}.item-menu[data-v-09cba8c5]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:var(--primary)!important;cursor:pointer}.item-menu[data-v-09cba8c5],.item-menu div[data-v-09cba8c5]{display:-webkit-box;display:flex}.item-menu div[data-v-09cba8c5]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-09cba8c5]:hover{background-color:#e8d1ff}.col-flex-center[data-v-09cba8c5]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-09cba8c5]{margin-bottom:0!important}h4[data-v-09cba8c5]{font-weight:600}@media(max-width:320px){.item-menu[data-v-09cba8c5]{height:42px}}",""]),t.exports=e},296:function(t,e,n){"use strict";var r=n(289);n.n(r).a},297:function(t,e,n){(e=n(24)(!1)).push([t.i,"[data-v-7d2ee64a] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-7d2ee64a]{margin-right:0!important;padding-top:5px}#page[data-v-7d2ee64a]{margin-bottom:5rem!important}.btn-fixed[data-v-7d2ee64a]{height:100%!important}.intro-transition[data-v-7d2ee64a]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:var(--primary)}.mdi-library[data-v-7d2ee64a]:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28112%2C112%2C112%29&height=24);vertical-align:-.125em}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content .mdi-library:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28102%2C0%2C204%29&height=24);vertical-align:-.125em}span[data-v-7d2ee64a]{font-size:8px;font-weight:400;color:#737373;margin-top:5px}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content span{color:var(--primary)}@media (max-width:375px){.v-btn[data-v-7d2ee64a]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-7d2ee64a]{font-size:.65rem!important}}.remove-certificates[data-v-7d2ee64a]{display:none}",""]),t.exports=e},299:function(t,e,n){"use strict";var r=n(291);n.n(r).a},300:function(t,e,n){(e=n(24)(!1)).push([t.i,"*[data-v-576ed64e]{font-family:Roboto,sans-serif}.h1__theme[data-v-576ed64e]{font-size:1rem;line-height:1.2;font-weight:900;text-align:center;padding:0 2.5rem!important}#head__bar[data-v-576ed64e]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.2rem 0;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-576ed64e] .btn-back .theme--light.v-icon{color:var(--primary);font-size:35px}[data-v-576ed64e] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},308:function(t,e,n){"use strict";n(298);var r=n(301);e.a=Object(r.a)("flex")},309:function(t,e,n){"use strict";n(298);var r=n(301);e.a=Object(r.a)("layout")},311:function(t,e,n){"use strict";n(26),n(11),n(71),n(36),n(40);var r=n(3),o=(n(46),n(303),n(38),n(7),n(5),n(16),n(55),n(305),n(1)),c=n(302),l=n(6);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],v=m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=m.reduce((function(t,e){return t["offset"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),x=m.reduce((function(t,e){return t["order"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),k={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(x)};function y(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in n)l+=String(n[d]);var f=w.get(l);return f||function(){var t,e;for(e in f=[],k)k[e].forEach((function(t){var r=n[t],o=y(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,f)}(),t(n.tag,Object(c.a)(data,{class:f}),o)}})},318:function(t,e,n){"use strict";n(26),n(11),n(16);var r=n(3),o=(n(72),n(7),n(5),n(132),n(36),n(40),n(43)),c=n(84),l=n(131);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},694:function(t,e,n){var content=n(862);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("ad740d9c",content,!0,{sourceMap:!1})},695:function(t,e){},861:function(t,e,n){"use strict";var r=n(694);n.n(r).a},862:function(t,e,n){(e=n(24)(!1)).push([t.i,".v-input[data-v-90113dee]{width:90%;height:50px}.v-input input[data-v-90113dee]{color:none}[data-v-90113dee] .v-messages__message{text-align:right;margin-top:-.3em}",""]),t.exports=e},863:function(t,e,n){"use strict";var r=n(695),o=n.n(r);e.default=o.a},916:function(t,e,n){"use strict";n.r(e);n(33);var r=n(4),o=n(129),c=n(293),l=n(292),d={components:{HeaderBar:c.a,NavigationBar:l.a},data:function(){return{title:"Gerenciar meus cursos",sendCourse:!1,status:!0,loading:!1,snackbar:!1,snackbarText:"",snackbarStatus:"",rules:[function(t){return!!t||"Obrigatório"}]}},head:function(){return{title:this.title}},methods:{submit:function(){var t=this;this.$refs.form.validate()?(this.course.authorId="null",o.a.put("/api/v1/course",this.course.id,this.course).then((function(e){t.loading=!1,t.sendCourse=!0,t.confirmSnackbar("Curso salvo!","success"),t.$store.commit("courses/setCurrent",e.data),t.gotoAddClass(e.data.id)})).catch((function(e){t.confirmSnackbar("Ocorreu um erro ao cadastrar o curso.","error"),setTimeout((function(){t.loading=!1}),500),console.error(e)}))):this.animateForm(!1)},animateForm:function(t){var e=this;t?(this.$refs.flex.classList.add("hide-form"),document.querySelector("html").style.overflow="hidden",setTimeout((function(){e.loading=!0}),300)):(this.$refs.flex.classList.add("error-form"),setTimeout((function(){e.$refs.flex.classList.remove("error-form")}),500)),document.querySelector("html").style.overflow="scroll"},gotoAddClass:function(t){this.sendCourse?$nuxt._router.push("/admin/course/".concat(t,"/lesson/new")):this.confirmSnackbar("Você precisa salvar o curso antes de adicionar uma aula","error")},confirmSnackbar:function(text,t){this.snackbarText=text,this.snackbarStatus=t,this.snackbar=!0}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.store,t.data,n=t.params,e.next=3,o.a.getById("/api/v1/course",n.id);case 3:return r=e.sent,e.next=6,o.a.getById("/api/v1/lesson/course",n.id);case 6:return c=e.sent,e.abrupt("return",{course:r.data,lessons:c.data});case 8:case"end":return e.stop()}}),e)})))()}},f=(n(861),n(35)),m=n(863),v=n(42),h=n.n(v),x=n(280),k=n(311),y=n(888),w=n(308),_=n(318),O=n(309),j=n(352),C=n(285),S=n(328),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page"}},[n("HeaderBar",{attrs:{title:"Gerenciar Meus Cursos","back-page":!0}}),t._v(" "),n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{staticStyle:{"text-align":"-webkit-left"},attrs:{xs10:"",sm8:"",md4:""}},[n("v-container",[n("v-row",[n("v-col",[n("h3",[t._v("Curso")]),t._v(" "),n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-text-field",{attrs:{rules:t.rules,label:"Título *",name:"title",required:""},model:{value:t.course.title,callback:function(e){t.$set(t.course,"title",e)},expression:"course.title"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.rules,label:"Descrição *",name:"description",required:""},model:{value:t.course.description,callback:function(e){t.$set(t.course,"description",e)},expression:"course.description"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.rules,label:"Professor *",name:"authorName",required:""},model:{value:t.course.authorName,callback:function(e){t.$set(t.course,"authorName",e)},expression:"course.authorName"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.rules,label:"Biografia do Professor *",name:"authorDescription",required:""},model:{value:t.course.authorDescription,callback:function(e){t.$set(t.course,"authorDescription",e)},expression:"course.authorDescription"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.rules,type:"number",label:"Carga Horária *",name:"workload",required:""},model:{value:t.course.workload,callback:function(e){t.$set(t.course,"workload",e)},expression:"course.workload"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.rules,label:"URL da Imagem do Curso",name:"thumbUrl",required:""},model:{value:t.course.thumbUrl,callback:function(e){t.$set(t.course,"thumbUrl",e)},expression:"course.thumbUrl"}}),t._v(" "),n("resources-list",{attrs:{name:"Aula",resources:t.lessons,redirect:"true",path:"lesson"}}),t._v(" "),t.lessons.length?t._e():n("span",{staticClass:"new-lessons-span"},[t._v("Favor, adicionar uma aula")]),t._v(" "),n("v-btn",{staticClass:"btn-block btn-primary",on:{click:t.submit}},[t._v("\n                Salvar\n              ")])],1)],1)],1)],1)],1),t._v(" "),n("v-snackbar",{attrs:{color:t.snackbarStatus,timeout:5e3,top:!0,right:!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n          "+t._s(t.snackbarText)+"\n          "),n("v-btn",{attrs:{color:"#FFF",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Fechar")])],1),t._v(" "),n("client-only",[n("navigation-bar")],1)],1)],1)}),[],!1,null,"90113dee",null);"function"==typeof m.default&&Object(m.default)(component);e.default=component.exports;h()(component,{VBtn:x.a,VCol:k.a,VContainer:y.a,VFlex:w.a,VForm:_.a,VLayout:O.a,VRow:j.a,VSnackbar:C.a,VTextField:S.a})}}]);