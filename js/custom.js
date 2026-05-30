
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    toggleClass: {
        targets: "#header",
        className: "scrolled"
    }
    });

    lucide.createIcons();


    var swiper = new Swiper(".ourworkSwiper", {
      slidesPerView: 4,
      spaceBetween: 16,
      centeredSlides: true,
      loop: false,
      autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },

        speed: 1000,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


    var swiper = new Swiper(".logoSwiper", {
        slidesPerView: 'auto',
        spaceBetween: 40,
        loop: true,
        freeMode: true,
        centeredSlides: false,
        allowTouchMove: true,

        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        speed: 5000,

    });
