(()=>{const e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),o=document.querySelector("[data-nav-mobile]");function d(){o.classList.toggle("is-open")}e.addEventListener("click",d),t.addEventListener("click",d)})(),(()=>{var e={openModalBtns:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector("[data-backdrop]"),body:document.querySelector("body")};function t(){e.modal.classList.toggle("modal--is-hidden"),e.backdrop.classList.toggle("backdrop--is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtns.forEach((function(e){e.addEventListener("click",t)})),e.closeModalBtn.addEventListener("click",t),document.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.modal.classList.add("modal--is-hidden"),e.backdrop.classList.add("backdrop--is-hidden"),e.body.classList.remove("no-scroll"))})),e.backdrop.addEventListener("click",t)})();let e,t=e=>e;document.addEventListener("DOMContentLoaded",(()=>{for(const o of document.querySelectorAll("[placeholder][data-slots]")){const d=o.getAttribute("placeholder"),n=new Set(o.dataset.slots||"_"),a=(e=>Array.from(d,((t,o)=>n.has(t)?e=o+1:e)))(0),c=[...d].findIndex((e=>n.has(e))),l=new RegExp(o.dataset.accept||"\\d","g"),s=e=>(e=e.match(l)||[],Array.from(d,(t=>(e[0]===t||n.has(t))&&e.shift()||t))),r=()=>{const[d,l]=[o.selectionStart,o.selectionEnd].map((e=>(e=s(o.value.slice(0,e)).findIndex((e=>n.has(e))))<0?a[a.length-1]:i?a[e-1]||c:e));o.value=s(o.value).join(e||(e=t``)),o.setSelectionRange(d,l),i=!1};let i=!1;o.addEventListener("keydown",(e=>i="Backspace"===e.key)),o.addEventListener("input",r),o.addEventListener("focus",r),o.addEventListener("blur",(()=>o.value===d&&(o.value="")))}}));new Swiper(".mySwiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});
//# sourceMappingURL=index.347e43a3.js.map
