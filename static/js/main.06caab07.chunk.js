(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/logo.7baba3c1.svg"},21:function(e,t,a){e.exports=a.p+"static/media/register_ok.e38b395c.svg"},22:function(e,t,a){e.exports=a.p+"static/media/not_register.4072126c.svg"},24:function(e,t,a){e.exports=a(94)},94:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(19),c=a.n(r),i=(a(18),a(5)),s=a(3),l=a(0),u=a(20),m=a.n(u),p=a(6);function d(e){var t=e.loggedIn,a=e.userEmail,n=e.onSignOut;return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:m.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e"}),t?o.a.createElement("div",{className:"header__user-elements"},o.a.createElement("p",{className:"header__user-email"},a),o.a.createElement("button",{className:"header__logout button",onClick:n},"\u0412\u044b\u0439\u0442\u0438")):o.a.createElement("div",{className:""},o.a.createElement(l.d,null,o.a.createElement(l.b,{path:"/sign-up",element:o.a.createElement(p.b,{to:"/sign-in",className:"header__nav-link link"},"\u0412\u043e\u0439\u0442\u0438")}),o.a.createElement(l.b,{path:"/sign-in",element:o.a.createElement(p.b,{to:"/sign-up",className:"header__nav-link link"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")}))))}var _=o.a.createContext();function f(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,r=e.onCardDelete,c=o.a.useContext(_),i=t.owner._id===c._id,s=t.likes.some(function(e){return e._id===c._id}),l="photo-card__like-btn button ".concat(s&&"photo-card__like-btn_active");return o.a.createElement("article",{className:"photo-card"},o.a.createElement("img",{className:"photo-card__photo",src:t.link,alt:t.name,onClick:function(){a(t)}}),i&&o.a.createElement("button",{className:"photo-card__remove-btn button",type:"button",onClick:function(){r(t)}}),o.a.createElement("div",{className:"photo-card__decription"},o.a.createElement("h2",{className:"photo-card__title"},t.name),o.a.createElement("div",{className:"photo-card__like-section"},o.a.createElement("button",{className:l,type:"button",onClick:function(){n(t)}}),o.a.createElement("span",{className:"photo-card__like-count"},t.likes.length))))}function b(e){var t=e.onEditProfile,a=e.onEditAvatar,n=e.onAddPlace,r=e.onCardClick,c=e.cards,i=e.onCardLike,s=e.onCardDelete,l=o.a.useContext(_),u=c.map(function(e){return o.a.createElement(f,{key:e._id,card:e,onCardClick:r,onCardLike:i,onCardDelete:s})});return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__picture"},o.a.createElement("img",{src:l.avatar,className:"profile__avatar",alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),o.a.createElement("button",{onClick:a,className:"profile__picture-btn button",type:"button"})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__title"},l.name),o.a.createElement("p",{className:"profile__job"},l.about),o.a.createElement("button",{onClick:t,className:"profile__edit-btn button",type:"button"})),o.a.createElement("button",{onClick:n,className:"profile__add-btn button",type:"button"})),o.a.createElement("section",{className:"gallery","aria-label":"\u0421\u0435\u043a\u0446\u0438\u044f \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439"},u))}function h(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 ",(new Date).getFullYear(),". \u0410\u043a\u0430\u0435\u0432\u0430 \u0414\u0438\u0430\u043d\u0430"))}function g(e){var t=e.children,a=e.isOpen,r=e.onClose,c=e.classSelector,i=Object(n.useCallback)(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-btn")||"Escape"===e.key)&&r()},[r]);return Object(n.useEffect)(function(){if(a)return document.addEventListener("mousedown",i),document.addEventListener("keydown",i),function(){document.removeEventListener("keydown",i),document.removeEventListener("mousedown",i)}},[a,i]),o.a.createElement("div",{className:"popup popup_type_".concat(c," ").concat(a?"popup_opened":""," ")},t)}function E(e){var t=e.isOpen,a=e.card,n=e.classSelector,r=e.onClose;return o.a.createElement(g,{isOpen:t,classSelector:n,onClose:r},o.a.createElement("div",{className:"popup__container-photo"},o.a.createElement("button",{className:"popup__close-btn button",type:"button"}),o.a.createElement("figure",{className:"popup__figure"},o.a.createElement("img",{className:"popup__photo",src:a.link,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0433\u043e\u0440\u043e\u0434\u0430: ".concat(a.name)}),o.a.createElement("figcaption",{className:"popup__caption"},a.name))))}var v=a(7),O=a(9),j=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(v.a)(this,e),this._url=a,this._headers=n}return Object(O.a)(e,[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText,")"))}},{key:"_request",value:function(e,t){return fetch(e,t).then(this._getResponse)}},{key:"getInitialCards",value:function(){return this._request(this._url+"/cards",{headers:this._headers})}},{key:"getUserInfo",value:function(){return this._request(this._url+"/users/me",{headers:this._headers})}},{key:"setUserInfo",value:function(e){var t=e.name,a=e.about;return this._request(this._url+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t,about:a})})}},{key:"addNewCard",value:function(e){var t=e.name,a=e.link;return this._request(this._url+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:t,link:a})})}},{key:"putLike",value:function(e){return this._request(this._url+"/cards/".concat(e,"/likes"),{headers:this._headers,method:"PUT"})}},{key:"removeCard",value:function(e){return this._request(this._url+"/cards/".concat(e),{headers:this._headers,method:"DELETE"})}},{key:"deleteLike",value:function(e){return this._request(this._url+"/cards/".concat(e,"/likes"),{headers:this._headers,method:"DELETE"})}},{key:"setNewAvatar",value:function(e){return this._request(this._url+"/users/me/avatar",{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.avatar})})}},{key:"getAllStartedInfo",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}}]),e}())({baseUrl:"https://nomoreparties.co/v1/cohort-54",headers:{authorization:"50abc53f-8d3e-448b-b494-88b8f2ced152","Content-Type":"application/json"}});function C(e){var t=e.classSelector,a=e.isOpen,n=e.formName,r=e.title,c=e.submitBtnText,i=e.children,s=e.onSubmit,l=e.onClose,u=e.disabled;return o.a.createElement(g,{isOpen:a,classSelector:t,onClose:l},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{className:"popup__close-btn button",type:"button"}),o.a.createElement("h2",{className:"popup__title"},r),o.a.createElement("form",{className:"form",name:n,onSubmit:s},i,o.a.createElement("button",{className:u?"form__submit-btn  form__submit-btn_disabled":"form__submit-btn  button",type:"submit"},c))))}function N(e){var t=e.isOpen,a=e.onUpdateUser,n=e.isLoading,r=e.onClose,c=o.a.useContext(_),i=o.a.useState(""),l=Object(s.a)(i,2),u=l[0],m=l[1],p=o.a.useState(""),d=Object(s.a)(p,2),f=d[0],b=d[1];return o.a.useEffect(function(){m(c.name),b(c.about)},[c,t]),o.a.createElement(C,{classSelector:"edit-profile",formName:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitBtnText:n?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onSubmit:function(e){e.preventDefault(),a({name:u,about:f})},onClose:r},o.a.createElement("input",{type:"text",className:"form__input form__input_type_name",placeholder:"\u0418\u043c\u044f",name:"nameProfile",id:"name-profile",required:!0,minLength:2,maxLength:40,value:u||"",onChange:function(e){m(e.target.value)}}),o.a.createElement("span",{id:"name-profile-error",className:"error"}),o.a.createElement("input",{type:"text",className:"form__input form__input_type_job",placeholder:"\u041e \u0441\u0435\u0431\u0435",name:"jobProfile",id:"job-profile",required:!0,minLength:2,maxLength:200,value:f||"",onChange:function(e){b(e.target.value)}}),o.a.createElement("span",{id:"job-profile-error",className:"error"}))}var y=a(4),k=a(8);function S(e){var t=e.isOpen,a=e.onAddPlace,r=e.isLoading,c=e.onClose,i=Object(n.useState)({}),l=Object(s.a)(i,2),u=l[0],m=l[1],p=Object(n.useState)({}),d=Object(s.a)(p,2),_=d[0],f=d[1],b=Object(n.useState)(!1),h=Object(s.a)(b,2),g=h[0],E=h[1],v=function(e){var t=e.target,a=t.name,n=t.value;m(Object(k.a)({},u,Object(y.a)({},a,n))),f(Object(k.a)({},_,Object(y.a)({},a,e.target.validationMessage))),E(e.target.closest("form").checkValidity())};return Object(n.useEffect)(function(){f(""),t&&(m(""),E(!1))},[t]),o.a.createElement(C,{disabled:!g,classSelector:"add-card",formName:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitBtnText:r?"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onSubmit:function(e){e.preventDefault(),a({name:u.nameCard,link:u.linkCard})},onClose:c},o.a.createElement("input",{type:"text",className:_.nameCard?"form__input form__input_type_error":"form__input ",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"nameCard",id:"name-card",required:!0,minLength:2,onChange:v,maxLength:30,value:u.nameCard||""}),o.a.createElement("span",{id:"name-card-error",className:"error"},_.nameCard),o.a.createElement("input",{type:"url",className:_.linkCard?"form__input form__input_type_error":"form__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"linkCard",id:"link-card",onChange:v,required:!0,value:u.linkCard||""}),o.a.createElement("span",{id:"link-card-error",className:"error"},_.linkCard))}function L(e){var t=e.isOpen,a=e.onUpdateAvatar,r=e.isLoading,c=e.onClose,i=Object(n.useRef)("");return Object(n.useEffect)(function(){i.current.value=""},[t]),o.a.createElement(C,{classSelector:"set-avatar",formName:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitBtnText:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onSubmit:function(e){e.preventDefault(),a({avatar:i.current.value})},onClose:c},o.a.createElement("input",{type:"url",className:"form__input form__input_type_img-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"avatar",id:"link-avatar",required:!0,ref:i}),o.a.createElement("span",{id:"link-avatar-error",className:"error"}))}function w(e){var t=e.deletingCard,a=e.isOpen,n=e.isLoading,r=e.onCardDelete,c=e.onClose;return o.a.createElement(C,{isOpen:a,classSelector:"confirm",formName:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitBtnText:n?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430",onSubmit:function(e){e.preventDefault(),r(t)},onClose:c})}var x=a(23),T=function(e){var t=e.component,a=Object(x.a)(e,["component"]);return a.loggedIn?o.a.createElement(t,a):o.a.createElement(l.a,{to:"/sign-in",replace:!0})};function P(e){var t=e.children,a=e.submitBtnText,n=e.onSubmit,r=e.disabled;return o.a.createElement("form",{className:"form form_type_login",name:"login",onSubmit:n},t,o.a.createElement("button",{className:r?"form__submit-btn form__submit-btn_type_login form__submit-btn_disabled":"form__submit-btn form__submit-btn_type_login button",type:"submit"},a))}function I(e){var t=e.onRegister,a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],i=r[1],l=Object(n.useState)({}),u=Object(s.a)(l,2),m=u[0],d=u[1],_=Object(n.useState)(!1),f=Object(s.a)(_,2),b=f[0],h=f[1];Object(n.useEffect)(function(){console.log("state is ",c),console.log("state is ",b)},[c]);var g=function(e){var t=e.target,a=t.name,n=t.value;i(Object(k.a)({},c,Object(y.a)({},a,n))),d(Object(k.a)({},m,Object(y.a)({},a,e.target.validationMessage))),h(e.target.closest("form").checkValidity())};return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"login"},o.a.createElement("h2",{className:"login__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),o.a.createElement(P,{submitBtnText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onSubmit:function(e){e.preventDefault(),t(c).then(function(){d(""),i({password:"",email:""})})},disabled:!b},o.a.createElement("input",{className:m.email?"form__input form__input_type_login form__input_type_error":"form__input form__input_type_login",type:"email",name:"email",value:c.email||"",placeholder:"Email",onChange:g,minLength:"2",required:!0}),o.a.createElement("span",{className:"error"},m.email),o.a.createElement("input",{className:m.password?"form__input form__input_type_login form__input_type_error":"form__input form__input_type_login",name:"password",type:"password",value:c.password||"",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:g,minLength:"2",required:!0}),o.a.createElement("span",{className:"error"},m.password)),o.a.createElement(p.b,{to:"/sign-in",className:"login__extra-link link"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438")))}function q(e){var t=e.onLogin,a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],i=r[1],l=Object(n.useState)({}),u=Object(s.a)(l,2),m=u[0],p=u[1],d=Object(n.useState)(!1),_=Object(s.a)(d,2),f=_[0],b=_[1],h=function(e){var t=e.target,a=t.name,n=t.value;i(Object(k.a)({},c,Object(y.a)({},a,n))),p(Object(k.a)({},m,Object(y.a)({},a,e.target.validationMessage))),b(e.target.closest("form").checkValidity())};return Object(n.useEffect)(function(){console.log("state is ",c),console.log("state is ",f)},[c]),o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"login"},o.a.createElement("h2",{className:"login__title"},"\u0412\u0445\u043e\u0434"),o.a.createElement(P,{submitBtnText:"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(e){e.preventDefault(),t(c).then(function(){i({password:"",email:""}),p("")})},disabled:!f},o.a.createElement("input",{className:m.email?"form__input form__input_type_login form__input_type_error":"form__input form__input_type_login",type:"email",name:"email",value:c.email||"",placeholder:"Email",onChange:h,minLength:"2",required:!0}),o.a.createElement("span",{className:"error"},m.email),o.a.createElement("input",{className:m.password?"form__input form__input_type_login form__input_type_error":"form__input form__input_type_login",name:"password",type:"password",value:c.password||"",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:h,minLength:"5",required:!0}),o.a.createElement("span",{className:"error"},m.password))))}var A=a(21),D=a.n(A),U=a(22),B=a.n(U);function J(e){var t=e.onClose,a=e.isOpen,n=e.responseInfo,r=e.classSelector;return o.a.createElement(g,{isOpen:a,classSelector:r,onClose:t},o.a.createElement("div",{className:"popup__container popup__container-info-tooltip"},o.a.createElement("button",{className:"popup__close-btn button",type:"button"}),o.a.createElement("img",{src:n.status?D.a:B.a,className:"popup__image",alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 / \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438"}),o.a.createElement("h2",{className:"popup__title popup__title_type_info-tooltip"},n.text)))}var R="https://auth.nomoreparties.co";function F(e,t){return fetch(e,t).then(function(e){return function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText))}(e)})}var M=function(e,t){return F(R+"/signup",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})})},z=function(e,t){return F(R+"/signin",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})})},V=function(e){return F(R+"/users/me",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}})};function H(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),u=Object(s.a)(c,2),m=u[0],p=u[1],f=Object(n.useState)(!1),g=Object(s.a)(f,2),v=g[0],O=g[1],C=Object(n.useState)(!1),y=Object(s.a)(C,2),k=y[0],x=y[1],P=Object(n.useState)({}),A=Object(s.a)(P,2),D=A[0],U=A[1],B=Object(n.useState)({}),R=Object(s.a)(B,2),F=R[0],H=R[1],Y=Object(n.useState)([]),G=Object(s.a)(Y,2),K=G[0],Q=G[1],W=Object(n.useState)(!1),X=Object(s.a)(W,2),Z=X[0],$=X[1],ee=Object(n.useState)(!1),te=Object(s.a)(ee,2),ae=te[0],ne=te[1],oe=Object(n.useState)(!1),re=Object(s.a)(oe,2),ce=re[0],ie=re[1],se=Object(n.useState)(!1),le=Object(s.a)(se,2),ue=le[0],me=le[1],pe=Object(n.useState)(!1),de=Object(s.a)(pe,2),_e=de[0],fe=de[1],be=Object(n.useState)(null),he=Object(s.a)(be,2),ge=he[0],Ee=he[1],ve=Object(l.n)(),Oe=Object(n.useState)(!1),je=Object(s.a)(Oe,2),Ce=je[0],Ne=je[1],ye=Object(n.useState)(""),ke=Object(s.a)(ye,2),Se=ke[0],Le=ke[1],we=Object(n.useState)(!1),xe=Object(s.a)(we,2),Te=xe[0],Pe=xe[1],Ie=Object(n.useState)({status:!1,text:""}),qe=Object(s.a)(Ie,2),Ae=qe[0],De=qe[1];Object(n.useEffect)(function(){var e=localStorage.getItem("jwt");e?V(e).then(function(e){e&&(Ne(!0),Le(e.data.email),ve("/"))}).catch(function(e){console.log(e)}):ve("/sign-in")},[]),Object(n.useEffect)(function(){Ce&&j.getAllStartedInfo().then(function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];H(a),Q(n)}).catch(function(e){console.log(e)})},[Ce]);var Ue=Object(n.useCallback)(function(){r(!1),p(!1),O(!1),x(!1),fe(!1),Ee(null),Pe(!1)},[]);return o.a.createElement(_.Provider,{value:F},o.a.createElement("div",{className:"page"},o.a.createElement(d,{loggedIn:Ce,userEmail:Se,onSignOut:function(){localStorage.removeItem("jwt"),ve("/sign-in"),Ne(!1),Le("")}}),o.a.createElement(l.d,null,o.a.createElement(l.b,{path:"/sign-up",element:o.a.createElement(I,{onRegister:function(e){var t=e.password,a=e.email;return M(t,a).then(function(){De({status:!0,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),ve("/sign-in",{replace:!0})}).catch(function(e){De({status:!1,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437. ".concat(e)})}).finally(function(){return Pe(!0)})}})}),o.a.createElement(l.b,{path:"/sign-in",element:o.a.createElement(q,{onLogin:function(e){var t=e.password,a=e.email;return z({password:t,email:a}).then(function(e){e&&(localStorage.setItem("jwt",e.token),Ne(!0),Le(a),ve("/"))}).catch(function(e){"\u041e\u0448\u0438\u0431\u043a\u0430: 401 Unauthorized"===e?(Pe(!0),De({status:!1,text:"\u0422\u0430\u043a\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d"})):(Pe(!0),De({status:!1,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437. ".concat(e)}))})}})}),o.a.createElement(l.b,{path:"/",element:o.a.createElement(T,{component:b,loggedIn:Ce,onEditProfile:function(){p(!0)},onAddPlace:function(){O(!0)},onEditAvatar:function(){r(!0)},onCardClick:function(e){x(!0),U(e)},onCardLike:function(e){e.likes.some(function(e){return e._id===F._id})?j.deleteLike(e._id).then(function(t){Q(function(a){return a.map(function(a){return a._id===e._id?t:a})})}).catch(function(e){console.log(e)}):j.putLike(e._id).then(function(t){Q(function(a){return a.map(function(a){return a._id===e._id?t:a})})}).catch(function(e){console.log(e)})},cards:K,onCardDelete:function(e){fe(!0),Ee(e)}})})),o.a.createElement(h,null),o.a.createElement(N,{onClose:Ue,isOpen:m,onUpdateUser:function(e){var t=e.name,a=e.about;$(!0),j.setUserInfo({name:t,about:a}).then(function(e){H(e),Ue()}).catch(function(e){console.log(e)}).finally(function(){$(!1)})},isLoading:Z}),o.a.createElement(S,{onClose:Ue,isOpen:v,onAddPlace:function(e){var t=e.name,a=e.link;ne(!0),j.addNewCard({name:t,link:a}).then(function(e){Q([e].concat(Object(i.a)(K))),Ue()}).catch(function(e){console.log(e)}).finally(function(){ne(!1)})},isLoading:ae}),o.a.createElement(w,{onClose:Ue,isOpen:_e,isLoading:ce,onCardDelete:function(e){ie(!0),j.removeCard(e._id).then(function(){Q(function(t){return t.filter(function(t){return t._id!==e._id})}),Ue()}).catch(function(e){console.log(e)}).finally(function(){ie(!1)})},deletingCard:ge}),o.a.createElement(L,{onClose:Ue,isOpen:a,onUpdateAvatar:function(e){me(!0),j.setNewAvatar(e).then(function(e){H(e),Ue()}).catch(function(e){console.log(e)}).finally(function(){me(!1)})},isLoading:ue}),o.a.createElement(E,{isOpen:k,card:D,onClose:Ue,classSelector:"photo"}),o.a.createElement(J,{isOpen:Te,onClose:Ue,responseInfo:Ae,classSelector:"info-tooltip"})))}var Y=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,95)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p.a,null,o.a.createElement(H,null)))),Y()}},[[24,3,2]]]);
//# sourceMappingURL=main.06caab07.chunk.js.map