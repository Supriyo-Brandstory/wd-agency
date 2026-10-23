(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,506163,t=>{"use strict";var e=t.i(843476),r=t.i(271645);t.s(["default",0,function({content:t}){let n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(n.current){n.current.querySelectorAll("script").forEach(t=>{if("application/ld+json"===t.type)return;let e=document.createElement("script");Array.from(t.attributes).forEach(t=>{e.setAttribute(t.name,t.value)});let r=t.textContent||"";r&&(e.textContent=r=`
          (function() {
            try {
              ${r}
            } catch (err) {
              console.warn("Custom page script error:", err);
            }
          })();
        `),t.parentNode.replaceChild(e,t)});try{window.dispatchEvent(new Event("DOMContentLoaded"))}catch(t){}}},[t]),(0,e.jsx)("div",{ref:n,className:"custom-page-content",dangerouslySetInnerHTML:{__html:t}})}])}]);