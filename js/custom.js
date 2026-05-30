
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    toggleClass: {
        targets: "#header",
        className: "scrolled"
    }
    });

    document.querySelectorAll('.before-after').forEach((container) => {
        const slider = container.querySelector('.slider');
        const beforeWrapper = container.querySelector('.before-wrapper');
        let isDragging = false;
        const moveSlider = (x) => {
            const rect = container.getBoundingClientRect();
            let offsetX = x - rect.left;
            if (offsetX < 0) offsetX = 0;
            if (offsetX > rect.width) offsetX = rect.width;
            const percent = (offsetX / rect.width) * 100;
            beforeWrapper.style.width = percent + '%';
            slider.style.left = percent + '%';
        };

        // Mouse Events
        slider.addEventListener('mousedown', () => {
            isDragging = true;
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            moveSlider(e.clientX);
        });

        // Touch Events
        slider.addEventListener('touchstart', () => {
            isDragging = true;
        });

        window.addEventListener('touchend', () => {
            isDragging = false;
        });

        window.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            moveSlider(e.touches[0].clientX);
        });
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
        spaceBetween: 16,
        loop: true,
        freeMode: true,
        centeredSlides: false,
        allowTouchMove: false,

        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        speed: 5000,

    });
