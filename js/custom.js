
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
      slidesPerView: 1,
      spaceBetween: 16,
      centeredSlides: true,
      loop: false,
      autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        speed: 1000,
        breakpoints: {
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
        }
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


    var swiper = new Swiper(".homeMakeoversSwiper", {
        allowTouchMove: false,
      navigation: {
        nextEl: ".home-makeovers-n",
        prevEl: ".home-makeovers-p",
      },
    });

    var swiper = new Swiper(".landscapeMakeoversSwiper", {
        allowTouchMove: false,
      navigation: {
        nextEl: ".landscape-makeovers-n",
        prevEl: ".landscape-makeovers-p",
      },
    });


    