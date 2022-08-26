// Swaper start

var swiper = new Swiper(".mySwiper", {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    // Dinamic bullet
                    dinamicBullets: true,
                    }, 
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
        });

// new Swiper('.image-slider', {
//     // Navigation
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },

//     // Pagination
//     pagination: {
//         el: '.swiper-pagination',
//         // Bullet
//         clickable: true,
//         // Dinamic bullet
//         dinamicBullets: true, 
//     },
// });

// Swaper end
