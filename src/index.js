/*
  |==============================
  | Mobile menu script
  |==============================
*/

(() => {
    const navOpenBtn = document.querySelector("[open-button]");
    const navCloseBtn = document.querySelector("[close-button]");
    const navMobile = document.querySelector("[nav-mobile]");

    navOpenBtn.addEventListener('click', toggleNav);
    navCloseBtn.addEventListener('click', toggleNav);

    function toggleNav() {
    navMobile.classList.toggle('is-open');
  }
})();