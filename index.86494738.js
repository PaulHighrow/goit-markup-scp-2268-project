!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),function(){var e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),r=document.querySelector("[data-nav-mobile]");function n(){r.classList.toggle("is-open")}e.addEventListener("click",n),t.addEventListener("click",n)}(),function(){var e={openModalBtns:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector("[data-backdrop]"),body:document.querySelector("body")};function t(){e.modal.classList.toggle("modal--is-hidden"),e.backdrop.classList.toggle("backdrop--is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtns.forEach((function(e){e.addEventListener("click",t)})),e.closeModalBtn.addEventListener("click",t),document.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.modal.classList.add("modal--is-hidden"),e.backdrop.classList.add("backdrop--is-hidden"),e.body.classList.remove("no-scroll"))})),e.backdrop.addEventListener("click",t)}();var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){return u.default(e)||d.default(e,t)||i.default(e,t)||l.default()};var u=c(o("8slrw")),d=c(o("7AJDX")),l=c(o("ifqQW")),i=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e){return p.default(e)||v.default(e)||b.default(e)||y.default()};var p=m(o("kMC0W")),v=m(o("7AJDX")),y=m(o("8CtQK")),b=m(o("auk6i"));function m(e){return e&&e.__esModule?e:{default:e}}function _(){var t=e(s)([""]);return _=function(){return t},t}document.addEventListener("DOMContentLoaded",(function(){var t=!0,r=!1,n=void 0;try{for(var o,u=function(t,r){var n,o=r.value,u=o.getAttribute("placeholder"),d=new Set(o.dataset.slots||"_"),l=(n=0,Array.from(u,(function(e,t){return d.has(e)?n=t+1:n}))),i=e(f)(u).findIndex((function(e){return d.has(e)})),c=new RegExp(o.dataset.accept||"\\d","g"),s=function(e){return e=e.match(c)||[],Array.from(u,(function(t){return(e[0]===t||d.has(t))&&e.shift()||t}))},p=function(){var t=e(a)([o.selectionStart,o.selectionEnd].map((function(e){return(e=s(o.value.slice(0,e)).findIndex((function(e){return d.has(e)})))<0?l[l.length-1]:v?l[e-1]||i:e})),2),r=t[0],n=t[1];o.value=s(o.value).join(_()),o.setSelectionRange(r,n),v=!1},v=!1;o.addEventListener("keydown",(function(e){return v="Backspace"===e.key})),o.addEventListener("input",p),o.addEventListener("focus",p),o.addEventListener("blur",(function(){return o.value===u&&(o.value="")}))},d=document.querySelectorAll("[placeholder][data-slots]")[Symbol.iterator]();!(t=(o=d.next()).done);t=!0)u(0,o)}catch(e){r=!0,n=e}finally{try{t||null==d.return||d.return()}finally{if(r)throw n}}}));new Swiper(".mySwiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}();
//# sourceMappingURL=index.86494738.js.map
