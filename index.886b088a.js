(()=>{const e=document.querySelector("[data-menu-open]"),o=document.querySelector("[data-menu-close]"),d=document.querySelector("[data-nav-mobile]");function t(){d.classList.toggle("is-open")}e.addEventListener("click",t),o.addEventListener("click",t)})(),(()=>{var e={openModalBtns:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector("[data-backdrop]"),body:document.querySelector("body")};function o(){e.modal.classList.toggle("modal--is-hidden"),e.backdrop.classList.toggle("backdrop--is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtns.forEach((function(e){e.addEventListener("click",o)})),e.closeModalBtn.addEventListener("click",o),document.addEventListener("keydown",(function(o){"Escape"===o.key&&(e.modal.classList.add("modal--is-hidden"),e.backdrop.classList.add("backdrop--is-hidden"),e.body.classList.remove("no-scroll"))})),e.backdrop.addEventListener("click",o)})();new Swiper(".mySwiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});
//# sourceMappingURL=index.886b088a.js.map
