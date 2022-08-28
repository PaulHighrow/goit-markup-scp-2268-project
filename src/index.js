/*
  |==============================
  | Mobile menu script
  |==============================
*/

(() => {
  const navOpenBtn = document.querySelector('[open-button]');
  const navCloseBtn = document.querySelector('[close-button]');
  const navMobile = document.querySelector('[nav-mobile]');

  navOpenBtn.addEventListener('click', toggleNav);
  navCloseBtn.addEventListener('click', toggleNav);

  function toggleNav() {
    navMobile.classList.toggle('is-open');
  }
})();


/*
  |==============================
  | Modal window script
  |==============================
*/

(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-open]'),
    closeModalBtn: document.querySelector('[modal-close]'),
    modal: document.querySelector('[modal]'),
    backdrop: document.querySelector('[backdrop]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // Добавлена возможность закрытия модального окна по нажатию кнопки Escape
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      refs.modal.classList.add('modal--is-hidden'), refs.backdrop.classList.add('backdrop--is-hidden'), refs.body.classList.remove('no-scroll');
    }
  });

  refs.backdrop.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('modal--is-hidden');
    refs.backdrop.classList.toggle('backdrop--is-hidden');
    // Отключение скролла при вызове модальной формы
    refs.body.classList.toggle('no-scroll');
  }
})();

/*
  |==============================
  | Swiper script
  |==============================
*/

var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
