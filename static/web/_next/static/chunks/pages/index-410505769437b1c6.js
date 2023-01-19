(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(56152)}])},78696:function(e,t,n){"use strict";n.d(t,{e:function(){return d}});var o=n(85893),s=n(71577),a=n(5152),i=n.n(a),r=n(13959),l=n.n(r);let c=i()(()=>n.e(5903).then(n.t.bind(n,5903,23)),{loadableGenerated:{webpack:()=>[5903]},ssr:!1}),d=e=>{let{onClick:t,props:n}=e;return(0,o.jsx)(s.Z,{...n,type:"primary",className:l().button,icon:(0,o.jsx)(c,{}),onClick:t,id:"follow-button",children:"Follow"})}},6097:function(e,t,n){"use strict";n.d(t,{h:function(){return p}});var o=n(85893),s=n(94199),a=n(20550),i=n(94184),r=n.n(i),l=n(5152),c=n.n(l),d=n(50738),u=n(31764),m=n.n(u);let h=c()(()=>Promise.all([n.e(4931),n.e(3013),n.e(850)]).then(n.bind(n,80850)).then(e=>e.UserDropdown),{loadableGenerated:{webpack:()=>[80850]},ssr:!1}),p=e=>{let{name:t="Your stream title",chatAvailable:n,chatDisabled:i}=e;return(0,o.jsxs)("header",{className:r()(["".concat(m().header)],"global-header"),children:[(0,o.jsxs)("div",{className:m().logo,children:[(0,o.jsx)("div",{id:"header-logo",className:m().logoImage,children:(0,o.jsx)(d.C,{variant:"contrast"})}),(0,o.jsx)("h1",{className:m().title,id:"global-header-text",title:t,children:t})]}),n&&!i&&(0,o.jsx)(h,{}),!n&&!i&&(0,o.jsx)(s.Z,{title:"Chat is available when the stream is live.",placement:"left",children:(0,o.jsx)(a.Z,{style:{cursor:"pointer"},children:"Chat offline"})})]})};t.Z=p},14761:function(e,t,n){"use strict";n.r(t),n.d(t,{Modal:function(){return d}});var o=n(85893),s=n(85402),a=n(26303),i=n(11382),r=n(67294),l=n(77011),c=n.n(l);let d=e=>{let{title:t,url:n,open:l,handleOk:d,handleCancel:u,afterClose:m,height:h,width:p,children:x}=e,[f,j]=(0,r.useState)(!!n),_="100%",g="520px";n&&(_="70vh",g="900px");let v={padding:"0px",minHeight:h,height:null!=h?h:_},b=n&&(0,o.jsx)("iframe",{title:t,src:n,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,style:{display:"block"},onLoad:()=>j(!1)});return(0,o.jsx)(s.Z,{title:t,open:l,onOk:d,onCancel:u,afterClose:m,bodyStyle:v,width:null!=p?p:g,zIndex:999,footer:null,centered:!0,destroyOnClose:!0,children:(0,o.jsxs)("div",{id:"modal-container",style:{height:"100%"},children:[f&&(0,o.jsx)(a.Z,{active:f,style:{padding:"10px"},paragraph:{rows:10}}),b&&(0,o.jsx)("div",{style:{display:f?"none":"inline"},children:b}),x&&(0,o.jsx)("div",{className:c().content,children:x}),f&&(0,o.jsx)(i.Z,{className:c().spinner,spinning:f,size:"large"})]})})};t.default=d,d.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0}},51513:function(e,t,n){"use strict";n.d(t,{R:function(){return u}});var o=n(85893),s=n(27049),a=n(45938),i=n(5152),r=n.n(i),l=n(88335),c=n.n(l);let d=r()(()=>Promise.all([n.e(2074),n.e(2138),n.e(9095)]).then(n.t.bind(n,69095,23)),{loadableGenerated:{webpack:()=>[69095]},ssr:!1}),u=e=>{let t,{streamName:n,customText:i,lastLive:r,notificationsEnabled:l,fediverseAccount:u,onNotifyClick:m,onFollowClick:h}=e;return t=i||(!i&&l&&u?(0,o.jsxs)("span",{children:["This stream is offline. You can"," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:c().actionLink,onClick:m,children:"be notified"})," ","the next time ",n," goes live or"," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:c().actionLink,onClick:h,children:"follow"})," ",u," on the Fediverse."]}):!i&&l?(0,o.jsxs)("span",{children:["This stream is offline."," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:c().actionLink,onClick:m,children:"Be notified"})," ","the next time ",n," goes live."]}):!i&&u?(0,o.jsxs)("span",{children:["This stream is offline."," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:c().actionLink,onClick:h,children:"Follow"})," ",u," on the Fediverse to see the next time ",n," goes live."]}):"This stream is offline. Check back soon!"),(0,o.jsx)("div",{id:"offline-banner",className:c().outerContainer,children:(0,o.jsxs)("div",{className:c().innerContainer,children:[(0,o.jsx)("div",{className:c().header,children:n}),(0,o.jsx)(s.Z,{className:c().separator}),(0,o.jsx)("div",{className:c().bodyText,children:t}),r&&(0,o.jsxs)("div",{className:c().lastLiveDate,children:[(0,o.jsx)(d,{className:c().clockIcon}),"Last live ".concat((0,a.Z)(new Date(r))," ago.")]})]})})}},69357:function(e,t,n){"use strict";n.d(t,{X:function(){return m}});var o=n(85893),s=n(45938),a=n(68730),i=n(67294),r=n(5152),l=n.n(r),c=n(37970),d=n.n(c);let u=l()(()=>Promise.all([n.e(2074),n.e(2138),n.e(1965)]).then(n.t.bind(n,41965,23)),{loadableGenerated:{webpack:()=>[41965]},ssr:!1}),m=e=>{let t,{online:n,lastConnectTime:r,lastDisconnectTime:l,viewerCount:c}=e,[,m]=(0,i.useState)(new Date);(0,i.useEffect)(()=>{let e=setInterval(()=>m(new Date),1e3);return()=>{clearInterval(e)}},[]);let h="";if(n&&r){let p=function(e){let t=(0,a.Z)({start:e,end:new Date});return t.days>1?"".concat(t.days," days ").concat(t.hours," hours"):t.hours>=1?"".concat(t.hours," hours ").concat(t.minutes," minutes"):"".concat(t.minutes," minutes ").concat(t.seconds," seconds")}(new Date(r));h=n?"Live for  ".concat(p):"Offline",t=c>0&&(0,o.jsxs)("div",{className:d().right,children:[(0,o.jsx)("span",{children:(0,o.jsx)(u,{})}),(0,o.jsx)("span",{children:" ".concat(c)})]})}else!n&&(h="Offline",l&&(t="Last live ".concat((0,s.Z)(new Date(l))," ago.")));return(0,o.jsxs)("div",{className:d().statusbar,children:[(0,o.jsx)("div",{children:h}),(0,o.jsx)("div",{children:t})]})};m.defaultProps={lastConnectTime:null,lastDisconnectTime:null}},56152:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eM}});var o=n(85893),s=n(4480),a=n(9008),i=n.n(a),r=n(67294),l=n(97183),c=n(5152),d=n.n(c),u=n(4298),m=n.n(u),h=n(77466),p=n(26303),x=n(72581),f=n(83469),j=n(10808),_=n.n(j);let g=e=>{let{content:t}=e;return(0,o.jsx)("div",{className:_().pageContentContainer,id:"custom-page-content",children:(0,o.jsx)("div",{className:_().customPageContent,dangerouslySetInnerHTML:{__html:t}})})};var v=n(17725),b=n.n(v),w=n(87412),y=n(12341),k=n.n(y);let C=d()(()=>Promise.all([n.e(1272),n.e(8700),n.e(4986),n.e(4977),n.e(1496)]).then(n.bind(n,94977)).then(e=>e.ChatContainer),{loadableGenerated:{webpack:()=>[94977]},ssr:!1}),N=()=>{let e=(0,s.sJ)(h.db),t=(0,s.sJ)(h.pH);if(!e)return(0,o.jsx)(w.ZP,{className:k().root,collapsedWidth:0,width:320});let{id:n,isModerator:a,displayName:i}=e;return(0,o.jsx)(w.ZP,{className:k().root,collapsedWidth:0,width:320,children:(0,o.jsx)(C,{messages:t,usernameToHighlight:i,chatUserId:n,isModerator:a})})};var S=n(67917),L=n.n(S);let T=e=>{let{version:t}=e;return(0,o.jsxs)("footer",{className:L().footer,children:[(0,o.jsxs)("span",{children:["Powered by ",(0,o.jsx)("a",{href:"https://owncast.online",children:t})]}),(0,o.jsxs)("span",{className:L().links,children:[(0,o.jsx)("a",{href:"https://owncast.online/docs",target:"_blank",rel:"noreferrer",children:"Documentation"}),(0,o.jsx)("a",{href:"https://owncast.online/help",target:"_blank",rel:"noreferrer",children:"Contribute"}),(0,o.jsx)("a",{href:"https://github.com/owncast/owncast",target:"_blank",rel:"noreferrer",children:"Source"})]})]})};var B=n(12270),D=n.n(B);let I=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:"".concat(D().row),children:t})};var M=n(71577),Z=n(94184),A=n.n(Z),E=n(13959),H=n.n(E);let F=e=>{let{action:t,primary:n=!0,externalActionSelected:s}=e,{title:a,description:i,icon:r,color:l}=t;return(0,o.jsxs)(M.Z,{type:n?"primary":"default",className:A()(["".concat(H().button),"action-button"]),onClick:()=>s(t),style:{backgroundColor:l},children:[r&&(0,o.jsx)("img",{src:r,className:"".concat(H().icon),alt:i}),a]})};var P=n(51513),R=n(78696);let z=d()(()=>n.e(62).then(n.t.bind(n,30062,23)),{loadableGenerated:{webpack:()=>[30062]},ssr:!1}),G=e=>{let{onClick:t,text:n}=e;return(0,o.jsx)(M.Z,{type:"primary",className:"".concat(H().button),icon:(0,o.jsx)(z,{}),onClick:t,id:"notify-button",children:n||"Notify"})};var O=n(53731),J=n(74933),U=n.n(J);let W=e=>{let{src:t}=e;return(0,o.jsx)("div",{className:U().root,children:(0,o.jsx)("div",{className:U().container,children:(0,o.jsx)("img",{src:t,alt:"Logo",className:U().image,loading:"lazy"})})})};var q=n(25675),Y=n.n(q),Q=n(573),V=n.n(Q);let K=e=>{let{links:t}=e;return(0,o.jsx)("div",{className:V().links,children:t.map(e=>(0,o.jsx)("a",{href:e.url,className:V().link,target:"_blank",rel:"noreferrer me",children:(0,o.jsx)(Y(),{src:e.icon||"/img/platformlogos/default.svg",alt:e.platform,title:e.platform,className:V().link,width:"30",height:"30"})},e.platform))})};var X=n(47900),$=n.n(X);let ee=e=>{let{name:t,title:n,summary:s,logo:a,tags:i,links:r}=e;return(0,o.jsx)("div",{className:$().root,children:(0,o.jsxs)("div",{className:$().logoTitleSection,children:[(0,o.jsx)("div",{className:$().logo,children:(0,o.jsx)(W,{src:a})}),(0,o.jsxs)("div",{className:$().titleSection,children:[(0,o.jsx)("div",{className:A()($().title,$().row,"header-title"),children:t}),(0,o.jsx)("div",{className:A()($().subtitle,$().row,"header-subtitle"),children:(0,o.jsx)(O.Z,{children:n||s})}),(0,o.jsx)("div",{className:A()($().tagList,$().row),children:i.length>0&&i.map(e=>(0,o.jsxs)("span",{children:["#",e,"\xa0"]},e))}),(0,o.jsx)("div",{className:A()($().socialLinks,$().row),children:(0,o.jsx)(K,{links:r})})]})]})})};var et=n(69357),en=n(14761),eo=n(66516),es=n(13013),ea=n(97038),ei=n.n(ea);let er=d()(()=>n.e(6937).then(n.t.bind(n,26937,23)),{loadableGenerated:{webpack:()=>[26937]},ssr:!1}),el=d()(()=>n.e(6820).then(n.t.bind(n,96820,23)),{loadableGenerated:{webpack:()=>[96820]},ssr:!1}),ec=d()(()=>n.e(1008).then(n.t.bind(n,11008,23)),{loadableGenerated:{webpack:()=>[11008]},ssr:!1}),ed="notify",eu="follow",em=e=>{let{actions:t,externalActionSelected:n,notifyItemSelected:s,followItemSelected:a,showFollowItem:i,showNotifyItem:r,className:l}=e,c=e=>{if(e.key===ed){s();return}if(e.key===eu){a();return}let o=t.find(t=>t.url===e.key);n(o)},d=t.map(e=>({key:e.url,label:(0,o.jsxs)("span",{className:ei().item,children:[e.icon&&(0,o.jsx)("img",{className:ei().icon,src:e.icon,alt:e.title})," ",e.title]})}));i&&d.unshift({key:eu,label:(0,o.jsxs)("span",{className:ei().item,children:[(0,o.jsx)(el,{className:ei().icon})," Follow this stream"]})}),r&&d.unshift({key:ed,label:(0,o.jsxs)("span",{className:ei().item,children:[(0,o.jsx)(ec,{className:ei().icon}),"Notify when live"]})});let u=(0,o.jsx)(eo.Z,{items:d,onClick:c}),m=A()([ei().menu,l]);return(0,o.jsx)(es.Z,{overlay:u,placement:"bottomRight",trigger:["click"],className:m,children:(0,o.jsx)("div",{className:ei().buttonWrap,children:(0,o.jsx)(M.Z,{type:"default",onClick:e=>e.preventDefault(),size:"large",icon:(0,o.jsx)(er,{size:6,style:{rotate:"90deg"}})})})})},eh=d()(()=>Promise.all([n.e(6386),n.e(3698),n.e(5817)]).then(n.bind(n,15508)).then(e=>e.FollowerCollection),{loadableGenerated:{webpack:()=>[15508]},ssr:!1}),ep=d()(()=>Promise.all([n.e(173),n.e(2231),n.e(7177)]).then(n.bind(n,77177)).then(e=>e.FollowModal),{loadableGenerated:{webpack:()=>[77177]},ssr:!1}),ex=d()(()=>Promise.all([n.e(173),n.e(5818),n.e(1424)]).then(n.bind(n,11424)).then(e=>e.BrowserNotifyModal),{loadableGenerated:{webpack:()=>[11424]},ssr:!1}),ef=d()(()=>n.e(7815).then(n.bind(n,17815)).then(e=>e.NotifyReminderPopup),{loadableGenerated:{webpack:()=>[17815]},ssr:!1}),ej=d()(()=>Promise.all([n.e(2544),n.e(7689),n.e(2239),n.e(5202)]).then(n.bind(n,8888)).then(e=>e.OwncastPlayer),{loadableGenerated:{webpack:()=>[8888]},ssr:!1}),e_=d()(()=>Promise.all([n.e(1272),n.e(8700),n.e(4986),n.e(4977),n.e(1496)]).then(n.bind(n,94977)).then(e=>e.ChatContainer),{loadableGenerated:{webpack:()=>[94977]},ssr:!1}),eg=d()(()=>Promise.all([n.e(4885),n.e(173),n.e(2231),n.e(5818),n.e(9915),n.e(6386),n.e(3698),n.e(4398),n.e(4381),n.e(5101),n.e(7910),n.e(4763),n.e(9292),n.e(9816),n.e(7916),n.e(3859),n.e(4768)]).then(n.bind(n,74768)).then(e=>e.Tabs),{loadableGenerated:{webpack:()=>[74768]},ssr:!1}),ev=e=>{let{name:t,streamTitle:n,summary:s,tags:a,socialHandles:i,extraPageContent:r,setShowFollowModal:l,supportFediverseFeatures:c}=e,d=(0,o.jsx)(g,{content:r}),u=(0,o.jsx)("div",{style:{minHeight:"16vh"},children:(0,o.jsx)(eh,{name:t,onFollowButtonClick:()=>l(!0)})}),m=[{label:"About",key:"2",children:d}];return c&&m.push({label:"Followers",key:"3",children:u}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:b().lowerHalf,children:(0,o.jsx)(ee,{name:t,title:n,summary:s,tags:a,links:i,logo:"/logo"})}),(0,o.jsx)("div",{className:b().lowerSection,children:m.length>1?(0,o.jsx)(eg,{defaultActiveKey:"0",items:m}):d})]})},eb=e=>{let{name:t,streamTitle:n,summary:s,tags:a,socialHandles:i,extraPageContent:r,messages:l,currentUser:c,showChat:d,actions:u,setExternalActionToDisplay:m,setShowNotifyPopup:h,setShowFollowModal:x,supportFediverseFeatures:f,supportsBrowserNotifications:j}=e;if(!c)return(0,o.jsx)(p.Z,{loading:!0,active:!0,paragraph:{rows:7}});let{id:_,displayName:v}=c,w=d&&(0,o.jsx)(e_,{messages:l,usernameToHighlight:v,chatUserId:_,isModerator:!1}),y=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ee,{name:t,title:n,summary:s,tags:a,links:i,logo:"/logo"}),(0,o.jsx)(g,{content:r})]}),k=(0,o.jsx)(eh,{name:t,onFollowButtonClick:()=>x(!0)}),C=(e,t)=>(0,o.jsxs)("div",{className:b().replacementBar,children:[(0,o.jsx)(t,{...e,className:b().defaultTabBar}),(0,o.jsx)(em,{className:b().actionButtonMenu,showFollowItem:f,showNotifyItem:j,actions:u,externalActionSelected:m,notifyItemSelected:()=>h(!0),followItemSelected:()=>x(!0)})]});return(0,o.jsx)("div",{className:b().lowerSectionMobile,children:(0,o.jsx)(eg,{className:b().tabs,defaultActiveKey:"0",items:[d&&{label:"Chat",key:"0",children:w},{label:"About",key:"2",children:y},{label:"Followers",key:"3",children:k}],renderTabBar:C})})},ew=e=>{let{externalActionToDisplay:t,setExternalActionToDisplay:n}=e,{title:s,description:a,url:i}=t;return(0,o.jsx)(en.Modal,{title:a||s,url:i,open:!!t,height:"80vh",handleCancel:()=>n(null)})},ey=()=>{let e=(0,s.sJ)(h.Q),t=(0,s.sJ)(h.g1),n=(0,s.sJ)(h.pT),a=(0,s.sJ)(h.di),i=(0,s.sJ)(h.db),[l,c]=(0,s.FV)(h.hz),d=(0,s.sJ)(h.j$),u=(0,s.sJ)(h.YW),{viewerCount:m,lastConnectTime:j,lastDisconnectTime:_,streamTitle:g}=(0,s.sJ)(h.RI),{extraPageContent:v,version:w,name:y,summary:k,socialHandles:C,tags:S,externalActions:L,offlineMessage:B,chatDisabled:D,federation:M,notifications:Z}=t,[A,E]=(0,r.useState)(!1),[H,z]=(0,r.useState)(!1),[O,J]=(0,r.useState)(!1),{account:U,enabled:W}=M,{browser:q}=Z,{enabled:Y}=q,[Q,V]=(0,r.useState)(null),[K,X]=(0,r.useState)(!1),$=e=>{let{openExternally:t,url:n}=e;t?window.open(n,"_blank"):V(e)},ee=L.map(e=>(0,o.jsx)(F,{action:e,externalActionSelected:$},e.url)),eo=()=>{let e=parseInt((0,x.$o)(x.dA.userVisitCount),10);Number.isNaN(e)&&(e=0),(0,x.qQ)(x.dA.userVisitCount,e+1),e>2&&!(0,x.$o)(x.dA.hasDisplayedNotificationModal)&&E(!0)},es=()=>{z(!1),E(!1),(0,x.qQ)(x.dA.hasDisplayedNotificationModal,!0)},ea=()=>{let e=window.innerWidth;void 0===l&&(e<=768?c(!0):c(!1)),!l&&e<=768&&c(!0),l&&e>768&&c(!1)};(0,r.useEffect)(()=>(eo(),ea(),window.addEventListener("resize",ea),()=>{window.removeEventListener("resize",ea)}),[]),(0,r.useEffect)(()=>{X((0,f.Z)()&&Y)},[Y]);let ei=!D&&a&&n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:b().main,children:(0,o.jsxs)("div",{className:b().root,children:[(0,o.jsxs)("div",{className:b().mainSection,children:[(0,o.jsxs)("div",{className:b().topSection,children:[e.appLoading&&(0,o.jsx)(p.Z,{loading:!0,active:!0,paragraph:{rows:7}}),u&&(0,o.jsx)(ej,{source:"/hls/stream.m3u8",online:u}),!u&&!e.appLoading&&(0,o.jsx)(P.R,{streamName:y,customText:B,notificationsEnabled:Y,fediverseAccount:U,lastLive:_,onNotifyClick:()=>z(!0),onFollowClick:()=>J(!0)}),u&&(0,o.jsx)(et.X,{online:u,lastConnectTime:j,lastDisconnectTime:_,viewerCount:m})]}),(0,o.jsx)("div",{className:b().midSection,children:(0,o.jsxs)("div",{className:b().buttonsLogoTitleSection,children:[!l&&(0,o.jsxs)(I,{children:[ee,W&&(0,o.jsx)(R.e,{size:"small",onClick:()=>J(!0)}),K&&(0,o.jsx)(ef,{open:A,notificationClicked:()=>z(!0),notificationClosed:()=>es(),children:(0,o.jsx)(G,{onClick:()=>z(!0)})})]}),(0,o.jsx)(en.Modal,{title:"Browser Notifications",open:H,afterClose:()=>es(),handleCancel:()=>es(),children:(0,o.jsx)(ex,{})})]})}),l?(0,o.jsx)(eb,{name:y,streamTitle:g,summary:k,tags:S,socialHandles:C,extraPageContent:v,messages:d,currentUser:i,showChat:ei,actions:L,setExternalActionToDisplay:$,setShowNotifyPopup:z,setShowFollowModal:J,supportFediverseFeatures:W,supportsBrowserNotifications:K}):(0,o.jsx)(ev,{name:y,streamTitle:g,summary:k,tags:S,socialHandles:C,extraPageContent:v,setShowFollowModal:J,supportFediverseFeatures:W}),!l&&(0,o.jsx)(T,{version:w})]}),ei&&!l&&(0,o.jsx)(N,{})]})}),Q&&(0,o.jsx)(ew,{externalActionToDisplay:Q,setExternalActionToDisplay:V}),(0,o.jsx)(en.Modal,{title:"Follow ".concat(y),open:O,handleCancel:()=>J(!1),width:"550px",children:(0,o.jsx)(ep,{account:U,name:y,handleClose:()=>J(!1)})})]})};var ek=n(6097);let eC=e=>{let{name:t}=e,n=(0,s.sJ)(h.j$),o=(0,s.sJ)(h.RI),[a,i]=(0,r.useState)(!1),{online:l}=o,c=e=>{document.title=e},d=()=>{i(!0)},u=()=>{i(!1),c(t)},m=()=>{window.addEventListener("blur",d),window.addEventListener("focus",u)},p=()=>{window.removeEventListener("blur",d),window.removeEventListener("focus",u)};return(0,r.useEffect)(()=>(m(),()=>{p()}),[t]),(0,r.useEffect)(()=>{if(!a||!l)return;let e=n[n.length-1];"CHAT"===e.type&&c("\uD83D\uDCAC :: ".concat(t))},[n,t]),(0,r.useEffect)(()=>{a&&(l?c(" \uD83D\uDFE2 :: ".concat(t)):l||c(" \uD83D\uDD34 :: ".concat(t)))},[l,t]),null},eN=()=>(0,o.jsx)("script",{id:"server-side-hydration",nonce:"{{.Nonce}}",dangerouslySetInnerHTML:{__html:"\n	window.configHydration = {{.ServerConfigJSON}};\n	window.statusHydration = {{.StatusJSON}};\n	"}}),eS=()=>{let e=(0,s.sJ)(h.g1),{appearanceVariables:t,customStyles:n}=e,a=Object.keys(t).filter(e=>!!t[e]).map(e=>"--".concat(e,": ").concat(t[e]));return(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n				:root {\n					".concat(a.join(";\n"),"\n				}\n				").concat(n,"\n			")}})};var eL=n(94636),eT=n.n(eL);let eB=()=>{let e=()=>{navigator.serviceWorker.register("/serviceWorker.js").then(e=>{console.debug("Service Worker registration successful with scope: ",e.scope)},e=>{console.error("Service Worker registration failed: ",e)})};return(0,r.useEffect)(()=>("serviceWorker"in navigator&&window.addEventListener("load",e),()=>{window.removeEventListener("load",e)}),[]),null},eD=d()(()=>n.e(3625).then(n.bind(n,3625)).then(e=>e.FatalErrorStateModal),{loadableGenerated:{webpack:()=>[3625]},ssr:!1}),eI=()=>{let e=(0,s.sJ)(h.g1),{name:t,title:n,customStyles:a}=e,c=(0,s.sJ)(h.di),d=(0,s.sJ)(h.ap),u=(0,r.useRef)(null),{chatDisabled:p}=e;return(0,r.useEffect)(()=>{!function(e){let t=e=>{let t=e.getAttribute("rel");e.setAttribute("rel","".concat(t," noopener noreferrer"))};e.querySelectorAll("a").forEach(e=>t(e));let n=new MutationObserver(function(e){for(let n of e)for(let o of n.addedNodes)o instanceof HTMLElement&&"a"===o.tagName.toLowerCase()&&t(o)});n.observe(e,{attributes:!1,childList:!0,subtree:!0})}(u.current)},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i(),{children:[(0,o.jsx)(eN,{}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/img/favicon/apple-icon-57x57.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/img/favicon/apple-icon-60x60.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/img/favicon/apple-icon-72x72.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/img/favicon/apple-icon-76x76.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/img/favicon/apple-icon-114x114.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/img/favicon/apple-icon-120x120.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/img/favicon/apple-icon-144x144.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/img/favicon/apple-icon-152x152.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/favicon/apple-icon-180x180.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/img/favicon/android-icon-192x192.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/img/favicon/favicon-96x96.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/img/favicon/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,o.jsx)("link",{href:"/api/auth/provider/indieauth"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,o.jsx)("meta",{name:"msapplication-TileImage",content:"/img/favicon/ms-icon-144x144.png"}),(0,o.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,o.jsxs)("style",{children:[a,"\nbody {\n  overflow: hidden;\n}\n"]}),(0,o.jsx)("base",{target:"_blank"})]}),(0,o.jsxs)(i(),{children:[t?(0,o.jsx)("title",{children:t}):(0,o.jsx)("title",{children:"{{.Name}}"}),(0,o.jsx)("meta",{name:"description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"og:title",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"og:site_name",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"og:url",content:"{{.RequestedURL}}"}),(0,o.jsx)("meta",{property:"og:description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"og:type",content:"video.other"}),(0,o.jsx)("meta",{property:"video:tag",content:"{{.TagsString}}"}),(0,o.jsx)("meta",{property:"og:image",content:"{{.RequestedURL}}{{.Thumbnail}}"}),(0,o.jsx)("meta",{property:"og:image:url",content:"{{.RequestedURL}}{{.Thumbnail}}"}),(0,o.jsx)("meta",{property:"og:image:alt",content:"{{.RequestedURL}}{{.Image}}"}),(0,o.jsx)("meta",{property:"og:video",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"og:video:secure_url",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"og:video:height",content:"315"}),(0,o.jsx)("meta",{property:"og:video:width",content:"560"}),(0,o.jsx)("meta",{property:"og:video:type",content:"text/html"}),(0,o.jsx)("meta",{property:"og:video:actor",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"twitter:title",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"twitter:url",content:"{{.RequestedURL}}"}),(0,o.jsx)("meta",{property:"twitter:description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"twitter:image",content:"{{.Image}}"}),(0,o.jsx)("meta",{property:"twitter:card",content:"player"}),(0,o.jsx)("meta",{property:"twitter:player",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"twitter:player:width",content:"560"}),(0,o.jsx)("meta",{property:"twitter:player:height",content:"315"})]}),(0,o.jsx)(h.me,{}),(0,o.jsx)(eB,{}),(0,o.jsx)(eC,{name:t}),(0,o.jsx)(eS,{}),(0,o.jsx)(m(),{strategy:"afterInteractive",src:"/customjavascript"}),(0,o.jsxs)(l.Z,{ref:u,className:eT().layout,children:[(0,o.jsx)(ek.h,{name:n||t,chatAvailable:c,chatDisabled:p}),(0,o.jsx)(ey,{}),d&&(0,o.jsx)(eD,{title:d.title,message:d.message})]})]})};function eM(){return(0,o.jsx)(eI,{})}eM.getLayout=function(e){return e}},83469:function(e,t,n){"use strict";function o(){return"serviceWorker"in navigator&&"PushManager"in window}n.d(t,{Z:function(){return o}})},13959:function(e){e.exports={button:"ActionButton_button__z5Z2c",icon:"ActionButton_icon__EPp7Q"}},97038:function(e){e.exports={item:"ActionButtonMenu_item__OJQdr",buttonWrap:"ActionButtonMenu_buttonWrap__WQ9kt",icon:"ActionButtonMenu_icon__edY1D",menu:"ActionButtonMenu_menu__GChDk"}},12270:function(e){e.exports={row:"ActionButtonRow_row__SiEGe"}},47900:function(e){e.exports={root:"ContentHeader_root__HaUG0",row:"ContentHeader_row__9Q8gH",logoTitleSection:"ContentHeader_logoTitleSection__Z8pUc",logo:"ContentHeader_logo__wo_HN",titleSection:"ContentHeader_titleSection___6Y15",title:"ContentHeader_title__E_DsI",subtitle:"ContentHeader_subtitle__n1Wew",tagList:"ContentHeader_tagList__rx3jY"}},94636:function(e){e.exports={layout:"Main_layout__Bm6Gz"}},17725:function(e){e.exports={root:"Content_root__h1mNK",mainSection:"Content_mainSection__Gk78Y",topSection:"Content_topSection__JIZi0",lowerSection:"Content_lowerSection__BZHYI",lowerSectionMobile:"Content_lowerSectionMobile__hRr0_",leftCol:"Content_leftCol__U2TDq",loadingSpinner:"Content_loadingSpinner__mDlYC",main:"Content_main__XVf63",replacementBar:"Content_replacementBar__yLglI",defaultTabBar:"Content_defaultTabBar__BjyV0",actionButtonMenu:"Content_actionButtonMenu__dQUjK",tabs:"Content_tabs__LMcZ1"}},10808:function(e){e.exports={pageContentContainer:"CustomPageContent_pageContentContainer__EG4tU",customPageContent:"CustomPageContent_customPageContent__Mr981",summary:"CustomPageContent_summary___Zgps"}},67917:function(e){e.exports={footer:"Footer_footer__mPuvf",links:"Footer_links__7bBxV"}},31764:function(e){e.exports={header:"Header_header__U4Ro1",logoImage:"Header_logoImage__beIL2",logo:"Header_logo__HLZ6Z",title:"Header_title__FIts2"}},74933:function(e){e.exports={root:"Logo_root__jKiJC",container:"Logo_container__A4UYT",image:"Logo_image__Ahkom"}},77011:function(e){e.exports={spinner:"Modal_spinner__GiSS0",content:"Modal_content__h9my9"}},88335:function(e){e.exports={outerContainer:"OfflineBanner_outerContainer__3AbsB",innerContainer:"OfflineBanner_innerContainer__zTm13",bodyText:"OfflineBanner_bodyText__nNNy0",separator:"OfflineBanner_separator___j_Ss",lastLiveDate:"OfflineBanner_lastLiveDate___UZdO",clockIcon:"OfflineBanner_clockIcon__s0DB_",header:"OfflineBanner_header__Vu20o",footer:"OfflineBanner_footer__o3Zl5",actionLink:"OfflineBanner_actionLink__b4Mwa"}},12341:function(e){e.exports={root:"Sidebar_root__8HE0A"}},573:function(e){e.exports={link:"SocialLinks_link___CcSm",links:"SocialLinks_links__gOAb7"}},37970:function(e){e.exports={statusbar:"Statusbar_statusbar__AtVnB"}}},function(e){e.O(0,[2074,164,2138,31,4931,5402,3013,5938,6395,1082,9863,4252,7920,710,7466,9774,2888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);
//# sourceMappingURL=index-410505769437b1c6.js.map