module.exports=[235034,a=>{"use strict";var b=a.i(187924),c=a.i(572131);a.s(["default",0,function({content:a}){let d=(0,c.useRef)(null);return(0,c.useEffect)(()=>{if(d.current){d.current.querySelectorAll("script").forEach(a=>{if("application/ld+json"===a.type)return;let b=document.createElement("script");Array.from(a.attributes).forEach(a=>{b.setAttribute(a.name,a.value)});let c=a.textContent||"";c&&(b.textContent=c=`
          (function() {
            try {
              ${c}
            } catch (err) {
              console.warn("Custom page script error:", err);
            }
          })();
        `),a.parentNode.replaceChild(b,a)});try{window.dispatchEvent(new Event("DOMContentLoaded"))}catch(a){}}},[a]),(0,b.jsx)("div",{ref:d,className:"custom-page-content",dangerouslySetInnerHTML:{__html:a}})}])}];

//# sourceMappingURL=src_app_%28frontend%29_%28pages%29_%5Bslug%5D_CustomPageRenderer_jsx_01jgl3z._.js.map