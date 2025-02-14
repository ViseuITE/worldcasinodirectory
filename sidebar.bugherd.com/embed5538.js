!function(){var e={87851:function(e,t,o){"use strict";var r=o(9571),n=o(73355);t.Z=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];const s=(0,r.Z)().toString();return(0,n.U)()?new Promise(((e,o)=>{const r=t=>{try{if(t.data){const{data:n}=t,{payload:a}=n;if("PROXY_FETCH_RESPONSE"===n.EVENT_NAME&&a.token===s){if(a.fetchResponseBlob){const t=new Response(a.fetchResponseBlob.stream(),a.fetchResponseProps);e(t)}else a.fetchError?o(a.fetchError):o("Need to handle this");window.removeEventListener("message",r)}}}catch(e){console.log(e)}};window.addEventListener("message",r),(0,n.Z)({EVENT_NAME:"PROXY_FETCH",payload:{fetch:t,token:s}},"*")})):window.fetch(...t)}},73355:function(e,t,o){"use strict";o.d(t,{U:function(){return r}});const r=()=>!!window.BUGHERD_REACT_APP_SIDEBAR_MOUNT&&(window.document.querySelector("#bugherd_embed_communication_frame")||window.BUGHERD_EXTENSION_CONFIG&&window.BUGHERD_EXTENSION_CONFIG.extensionId);t.Z=function(){if(window.BUGHERD_REACT_APP_SIDEBAR_MOUNT){const e=window.document.querySelector("#bugherd_embed_communication_frame");if(e)return void e.contentWindow.postMessage(...arguments)}window.BUGHERD_EXTENSION_CONFIG&&window.BUGHERD_EXTENSION_CONFIG.extensionId?window.postMessage(...arguments):console.error("Couldn't find bugherd_embed_communication_frame iframe or window.BUGHERD_EXTENSION_CONFIG.extensionId to use for postMessage")}},40629:function(e){var t={cmd:"Cmd",ctrl:"Ctrl",alt:"Alt",shift:"Shift",joinWith:" + "},o={},r={8:"Backspace",9:"Tab",13:"Enter",27:"Escape",32:"Space",36:"Home",33:"Page Up",34:"Page Down",35:"End",37:"Left",38:"Up",39:"Right",40:"Down",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",186:";",187:"=",188:",",189:"-",190:".",192:"`",222:"'"};function n(e){return{character:-1!==[16,17,18,91,93,224].indexOf(e.keyCode)?null:r[e.keyCode]||String.fromCharCode(e.keyCode),modifiers:{cmd:e.metaKey,ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey}}}function s(e){return function(e){var t=n(e),r=t.modifiers,s=[];return r.cmd&&s.push(o.cmd),r.ctrl&&s.push(o.ctrl),r.alt&&s.push(o.alt),r.shift&&s.push(o.shift),t.character&&s.push(t.character),s}(e).join(o.joinWith)}e.exports=function(e){return o=Object.assign(t,e),s},e.exports.details=function(e){var t=n(e),o=t.modifiers,r=o.cmd||o.ctrl||o.alt||o.shift;return{hasKey:null!=t.character,hasModifier:r,map:t}}},9571:function(e,t,o){"use strict";var r;o.d(t,{Z:function(){return u}});var n=new Uint8Array(16);function s(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(n)}for(var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,i=[],c=0;c<256;++c)i.push((c+256).toString(16).substr(1));var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase();if(!function(e){return"string"==typeof e&&a.test(e)}(o))throw TypeError("Stringified UUID is invalid");return o},u=function(e,t,o){var r=(e=e||{}).random||(e.rng||s)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){o=o||0;for(var n=0;n<16;++n)t[o+n]=r[n];return t}return d(r)}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";const e=(e,t,o)=>{o&&e.setAttribute(`data-${t}`,o)};const t=function(){};var r=(()=>{const e=new URLSearchParams(window.location.search).keys(),o=Array.from(e).map((e=>"bugherddebug"===e.toLowerCase())).some((e=>e)),r="true"===window.BugHerdConfig?.debug;return o||r?(console.log("[BUGHERD] BugHerd debug logging is enabled"),function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return console.log("[BUGHERD]",...t)}):t})();const n={default:{width:300,height:80,right:0},warning:{width:330,height:144,right:0}},s=()=>document.getElementById("bugherd_embed_communication_frame");let a=null;const i=(e,t)=>{t&&(a=t);const o=s(),{width:r,height:i,right:c}=n[e];o.style.width=`${r}px`,o.style.height=`${i}px`,o.style.top=function(e){return e?`calc((100% - ${(arguments.length>1&&void 0!==arguments[1]?arguments[1]:70)+10}px) * ${e/100})`:"0px"}(t||a,i),o.style.right=`${c}px`},c=e=>{s().style.display=e?"block":"none"},d=()=>{r("[AUTH] Destroying auth iframe"),window.removeEventListener("bugherd_loaded",d),c(!1),window._bugHerd_sidebar2021=void 0};var u=o(40629),l=o.n(u);let p=window.location.search.includes("showBugherd=true"),g=!1;const m=(e,t)=>{document.addEventListener("keyup",(function(e){const o=document.getElementById("bugherd_embed_communication_frame"),r=l()({})(e);"string"==typeof r&&o&&r===(t||"Cmd + Ctrl + B")&&(o.style.display="block")}));const o=document.referrer.includes(e),r="proxy"===window.BUGHERD_SIDEBAR_CONFIG?.source;if(g||(r&&(navigator.sendBeacon(`${e}/binoculars`,JSON.stringify({event:"Sidebar displayed",properties:{source:"proxy"}})),window.parent.postMessage({message:"Sidebar is loaded"},"*")),g=!0),p){const e=setTimeout((()=>{const e=new URLSearchParams(window.location.search);e.delete("showBugherd");const t=`${window.location.protocol}//${window.location.host}${window.location.pathname}?${e.toString()}`;window.history.pushState({path:t},"",t)}),1e3);return()=>{clearTimeout(e)}}return!(!o&&!r)},w=(e,t)=>{const o=document.getElementById("bugherd_embed_communication_frame"),r=l()({})(t),n=e.shortcut_to_show_widget||"Cmd + Ctrl + B";"string"==typeof r&&o&&r===n&&(o.style.display="block")},h={hasStorageAccess:void 0,project:null,resources:null},_=e=>{let{origin:t,search:o}=e;return(async e=>{let{origin:t,search:o}=e;try{await new Promise(((e,t)=>{if(document.body)return e(document.body);const o=setTimeout((()=>{t()}),4e3),r=new MutationObserver((function(){document.body&&document.head&&(r.disconnect(),clearTimeout(o),e(document.body))}));r.observe(document.documentElement,{childList:!0})}))}catch(e){return console.error("BugHerd wanted to start but document.body or document.head is null"),null}let r="allow-scripts allow-popups allow-same-origin allow-popups-to-escape-sandbox";"requestStorageAccess"in document&&(r+=" allow-storage-access-by-user-activation");const n=document.createElement("iframe");return n.id="bugherd_embed_communication_frame",n.name="embedCommunication",n.sandbox=r,n.style.display="none",n.style.border="none",n.style.position="fixed",n.style.zIndex="2147483647",n.style.right="0",n.style.height="calc((100% - 154px) * 0.9)",n.src=`${t}/sidebar/embed_html${o}`,document.body.appendChild(n),n})({origin:t,search:o}).then((e=>{if(null===e)throw Error("iFrame wasnt created");return new Promise(((o,n)=>{const s=t.replace("sidebar.","www.");window.addEventListener("bugherd_loaded",d);const a=e=>{let{project:t,resources:r}=e;const n=t.shortcut_to_show_widget;let a=!0;a=m(s,n),c(a),i("default",t.toggle_vertical_position),o({authenticated:!0,resources:r})},u=e=>{o({resources:e})};e.onload=()=>{window.addEventListener("message",(o=>{o.data?((e,t)=>{let{onSuccess:o,onShowPublicFeedback:n,reject:s,iframe:a,origin:u}=t;const l=`${u.replace("sidebar.","www.")}/users/sign_in?source=sidebar&utm_campaign=sidebar&redirect_to=${window.location.href}&anonymous_user_id=${e.data?.payload?.anonymousUserId}`,p=u.replace("sidebar.","www.");if("COOKIE_CHECK_RESPONSE"===e.data.eventName){h.project=e.data.payload.resources.project,h.resources=e.data.payload.resources,g=h.project,document.removeEventListener("keyup",w.bind(null,g)),document.addEventListener("keyup",w.bind(null,g));const t=h.project?.shortcut_to_show_widget,l=window.location.search.includes("showBugherd=true")||document.referrer.includes(p);let _=!0;_=m(p,t),h.project.is_active?null===h.project.id?(r("[BUGHERD] There is no project associated with this API Key"),s(),d()):!h.project.is_public||h.project.authenticated||l?!1!==h.hasStorageAccess||h.resources?.project.authenticated?e.data.payload.success&&!h.project.has_access?(c(_),i("warning",h.project.toggle_vertical_position)):e.data.payload.success?(c(_),o(h)):null===h.hasStorageAccess?(i("default",h.project.toggle_vertical_position),c(_)):(a.contentWindow.postMessage({eventName:"SHOW_UNAUTHENTICATED_UI",payload:{origin:u,projectOrigin:window.location.origin}},u),i("warning",h.project.toggle_vertical_position),h.project.authenticated&&c(_)):(i("default",h.project.toggle_vertical_position),c(_),a.contentWindow.postMessage({eventName:"AUTH_REQUEST_STORAGE_ACCESS",payload:{origin:u}},u)):n(h.resources):(r(`[BUGHERD] Project (${h.project.id}) is disabled`),s(),d())}else"AUTH_HAS_STORAGE_ACCESS_RESPONSE"===e.data.eventName?(h.hasStorageAccess=e.data.payload.success,null===e.data.payload.success?(r("[AUTH] hasStorageAccess: no api"),a.contentWindow.postMessage({eventName:"COOKIE_CHECK",payload:{origin:u}},u)):e.data.payload.success?(r("[AUTH] hasStorageAccess: true"),a.contentWindow.postMessage({eventName:"COOKIE_CHECK",payload:{origin:u}},u)):(r("[AUTH] hasStorageAccess: false"),a.contentWindow.postMessage({eventName:"COOKIE_CHECK",payload:{origin:u}},u))):"AUTH_REQUEST_STORAGE_ACCESS_RESPONSE"===e.data.eventName?e.data.payload.success?(h.hasStorageAccess=!0,r("[AUTH] requestStorageAccess: true"),i("default"),a.contentWindow.postMessage({eventName:"COOKIE_CHECK",payload:{origin:u,manuallyAuthenticated:!0}},u)):(r("[AUTH] requestStorageAccess: false"),i("warning"),e.data.payload.isAutoDenied&&(window.location.href=l)):"AUTH_REDIRECT_TO_LOGIN"===e.data.eventName&&(window.location.href=l);var g})(o,{onSuccess:a,onShowPublicFeedback:u,reject:n,iframe:e,origin:t}):console.warn("Received message with null or undefined data")})),e.contentWindow.postMessage({eventName:"AUTH_HAS_STORAGE_ACCESS",payload:{origin:t}},t)}}))})).catch((e=>{throw console.error(e),new Error("Cannot initialize BugHerd")}))},E="hasStorageAccess"in document&&"requestStorageAccess"in document,y=e=>document.requestStorageAccess().then((()=>{e(!0)}),(()=>{e(!1)})),f=()=>document.getElementById("bugherd_toggle"),b=e=>{f().onclick=e},S=(e,t)=>{if(!e)return;e.custom_logo_dark_background&&(document.getElementById("logo").src=e.custom_logo_dark_background);const o=f();if(o?.style){if(e.id){const r=t({projectId:e.id,preference:"togglePosition"});r&&(o.style.transform=`translate(0px, ${r}px)`)}e.toggle_vertical_position&&(o.style.top=`calc((100% - 70px) * ${e.toggle_vertical_position/100})`)}};var A=o(87851).Z;var v=o(9571);const T=e=>{let{projectId:t,preferences:o}=e;try{const e={...JSON.parse(window.localStorage.getItem(`sidebar_project_${t}`)),...o};window.localStorage.setItem(`sidebar_project_${t}`,JSON.stringify(e))}catch(e){console.log("Couldnt save user preferences to local storage",e)}},C=e=>{let{projectId:t,preference:o}=e;try{const e=JSON.parse(window.localStorage.getItem(`sidebar_project_${t}`));if(!e)return;return e[o]}catch(e){console.log("Couldnt get user preferences from local storage",e)}},N=e=>{let{sidebarOrigin:t,apiKey:o}=e;f();const n=(0,v.Z)();let s=!1;window.addEventListener("message",(e=>{if("COOKIE_CHECK"===e.data.eventName)r("[AUTH] Check cookies"),(async(e,t)=>{try{return await(async(e,t)=>{const o=new URL(`${e}/sidebar/resources?apikey=${t}`),n=await A(o.href,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}),s=await n.json();return s.project.is_active?s.project.authenticated?(r("[AUTH] _bugherd_session5 cookie valid"),{state:"AUTHENTICATED",resources:s}):(document.cookie.includes("_bugherd_session5")?r("[AUTH] _bugherd_session5 cookie invalid"):r("[AUTH] _bugherd_session5 cookie does not exist"),{state:"UNAUTHENTICATED",resources:s}):(r("[AUTH] Bugherd project disabled"),{state:"PROJECT_DISABLED",resources:s})})(e,t)}catch(e){if(r("[AUTH] _bugherd_session5 ping error"),e instanceof Error)throw e;throw r("[AUTH] unknown error raised",e),new Error("Unknown Error")}})(t,o).then((t=>{let{resources:o,state:a}=t;const{project:i}=o;if("UNAUTHENTICATED"===a)return r("[AUTH] Unauthenticated"),S(i,C),void e.source.postMessage({eventName:"COOKIE_CHECK_RESPONSE",payload:{success:!1,resources:o}},e.origin);if(r("[AUTH] Authenticated"),i.active_task_id&&T({projectId:i.id,preferences:{route:`/sidebar/tasks/${i.active_task_id}`}}),!i.is_active)return e.source.postMessage({eventName:"COOKIE_CHECK_RESPONSE",payload:{success:!1,resources:o}},e.origin);i.has_access?f().className="loading":i.authenticated?S(i,C):f().className="noAccess",S(i,C);const c=C({projectId:i.id,preference:"route"});let d=e.data.manuallyAuthenticated;window.sessionStorage.getItem("bugherdSidebarManuallyAuthenticated")&&(d=!0,window.sessionStorage.removeItem("bugherdSidebarManuallyAuthenticated")),c&&"/toggle"!==c||!d||T({projectId:i.id,preferences:{route:"/sidebar"}}),(d||s)&&T({projectId:i.id,preferences:{anonymousUserId:n,route:"/sidebar"}}),e.source.postMessage({eventName:"COOKIE_CHECK_RESPONSE",payload:{success:!0,resources:o}},e.origin)}));else if("AUTH_HAS_STORAGE_ACCESS"===e.data.eventName){r("[AUTH] AUTH_HAS_STORAGE_ACCESS");const t=t=>{e.source.postMessage({eventName:"AUTH_HAS_STORAGE_ACCESS_RESPONSE",payload:{success:t}},e.origin)};if(!E)return t(null);navigator.permissions.query({name:"storage-access"}).then((e=>{if("granted"===e.state)return y(t);document.hasStorageAccess().then((e=>{t(!!e)})).catch((()=>{t(!1)}))})).catch((e=>{"Type error"===e?.message?document.hasStorageAccess().then((e=>{t(!!e)})).catch((()=>{t(!1)})):(r("[AUTH] AUTH_HAS_STORAGE_ACCESS error",e),t(!1))}))}else if("AUTH_REQUEST_STORAGE_ACCESS"===e.data.eventName){let t;r("[AUTH] AUTH_REQUEST_STORAGE_ACCESS");const o=o=>{o||(f().className="error");const r=(new Date).getTime()-t<=250;e.source.postMessage({eventName:"AUTH_REQUEST_STORAGE_ACCESS_RESPONSE",payload:{success:o,isAutoDenied:r,anonymousUserId:n}},e.origin)};b((()=>{t=(new Date).getTime(),y(o),s=!0}))}else"SHOW_UNAUTHENTICATED_UI"===e.data.eventName&&(f().className="",b((()=>{e.source.postMessage({eventName:"AUTH_REDIRECT_TO_LOGIN",payload:{anonymousUserId:n}},e.origin)})))}),!1)},O=(e,t)=>{let{eventName:o,responseEventName:r,eventData:n={}}=e;r&&t&&((e,t)=>{const o=r=>{try{const n=JSON.parse(r.detail);t(n),window.removeEventListener(e,o)}catch(e){console.warn(e)}};window.addEventListener(e,o)})(r,t);const s=new CustomEvent(o,{bubbles:!0,cancelable:!0,detail:JSON.stringify(n)});window.document.dispatchEvent(s)};function U(t){if(O({eventName:"bugherdSidebarParsed",eventData:{status:"success",apiKey:t.apiKey}}),"loading"===document.readyState)return void document.addEventListener("readystatechange",(e=>{"interactive"===e.target.readyState&&U(t)}));const{resources:o,apiKey:r,origin:n,embeddedByOldExtension:s}=t,{project:a,user:i}=o,c=["app-images","app-vendor",a.is_public&&!a.authenticated?"public":"app"];(t=>{let{apiKey:o,origin:r,project:n,bugsnagSidebarNewKey:s,embeddedByOldExtension:a,files:i,user:c}=t;const d=document.createElement("bugherd-sidebar");d.style.cssText="\n    display: block;\n    position: absolute;\n    right: 0; \n    top: 0;\n    width: 100%;\n    height: unset;\n  ",e(d,"projectid",n.id.toString()),e(d,"project",JSON.stringify(n)),e(d,"user",JSON.stringify(c)),e(d,"bugsnagsidebarnewkey",s),e(d,"embeddedByOldExtension",a.toString()),d.addEventListener("keydown",(e=>{e.stopPropagation()})),d.addEventListener("focusin",(e=>{e.stopPropagation()}));const u=d.attachShadow({mode:"open"});u.innerHTML='<div id="sidebar-root"></div>',window.BUGHERD_REACT_APP_SIDEBAR_MOUNT=u.getElementById("sidebar-root"),window.BUGHERD_API_KEY=o,(e=>{let{origin:t,files:o}=e;o.forEach((e=>{const o=document.createElement("script");o.src=`${t.replace("www.","sidebar.")}/clients/sidebar/${e}.1739414048772.js`,window.document.head.appendChild(o)}))})({origin:r,files:i}),document.body.appendChild(d)})({apiKey:r,origin:n,project:a,bugsnagSidebarNewKey:o.config.bugsnag_sidebar_new_key,embeddedByOldExtension:s,files:c,user:i})}(async()=>{let e=(e=>{let{embedUrl:t}=e;try{const e=JSON.parse(window.localStorage.getItem("BugHerd_change_project")||"[]"),o=window.localStorage.getItem("BugHerd_change_project_api_key"),r=new URL(t).search.replace(/^\?/,"").split("&").map((e=>e.split("="))).reduce(((e,t)=>(e[t[0]]=t[1],e)),{apikey:""}),n=r&&r.apikey?r.apikey:null,s=e.find((e=>e.from===n));return s?.to||o||n}catch{return null}})({embedUrl:document?.currentScript?.src||window.embedUrl});window.BUGHERD_EXTENSION_CONFIG?.apiKey&&(e=window.BUGHERD_EXTENSION_CONFIG.apiKey);let t=window.BUGHERD_EXTENSION_CONFIG?.domain||"https://localhost:3000",o="";if(document?.currentScript?.src){const e=new URL(document?.currentScript?.src);t=e.origin,o=e.search}const r=t.replace("www.","sidebar.");if("/sidebar/embed_html"===window.document.location.pathname)N({sidebarOrigin:r,apiKey:e});else{const n=document.getElementsByTagName("bugherd-sidebar")[0],s=document.querySelector('script[src*="sidebarv2"]')&&!document.currentScript?.getAttribute("src").includes("sidebarv2"),a=document.querySelector('script[src*="sidebarv2"]')&&document.currentScript?.getAttribute("src").includes("source=extension");if(n){const t=n.getAttribute("data-projectid");console.warn(`Bugherd: Wanted to embed project with apiKey ${e} but project with id ${t} was already embedded.`)}else if(s)console.warn("Bugherd: Wanted to embed project via new embed code (embed.js) but looks like old embed code exists (sidebarv2.js).");else if(window._bugHerd_sidebar2021)console.warn("Bugherd: Wanted to embed new sidebar but _bugHerd_sidebar2021 was already set");else{if(window._bugHerd_sidebar2021=!0,!e)throw new Error("Bugherd: sidebar is missing apiKey");try{const{resources:n}=await _({origin:r,search:o}),s=document.getElementsByTagName("bugherd-sidebar")[0];if(s){const t=s.getAttribute("data-projectid");console.warn(`Bugherd: Wanted to embed project with apiKey ${e} but project with id ${t} was already embedded after checking authentication.`)}U({apiKey:e,origin:t,resources:n,embeddedByOldExtension:!!a})}catch(e){console.error("[AUTH] Unauthenticated",e)}}}})()}()}();
//# sourceMappingURL=embed.1739414048772.js.map;
