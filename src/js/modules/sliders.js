import Swiper from 'swiper';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

export function initPortfolioSwiper() {
    if (!document.querySelector('.portfolio__swiper')) return;

    new Swiper('.portfolio__swiper', {
        modules: [Navigation, Autoplay],
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        navigation: {
            nextEl: '.portfolio-swiperBtn-next',
            prevEl: '.portfolio-swiperBtn-prev'
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1250: { slidesPerView: 3 }
        }
    });
}

export function initMasterSwiper() {
    if (!document.querySelector('.master__swiper')) return;

    new Swiper('.master__swiper', {
        modules: [Navigation, Autoplay],
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        navigation: {
            nextEl: '.master__swiperBtn-next',
            prevEl: '.master__swiperBtn-prev'
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
}



export function initHeaderMainSwiper() {
    if (!document.querySelector('.headerMain__swiper')) return;

    new Swiper('.headerMain__swiper', {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: '.headerMain__pagination',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3
        },
        navigation: {
            prevEl: '.headerMain__button-prev',
            nextEl: '.headerMain__button-next'
        }
    });
}

export function initReviewsSwiper() {
    const el = document.querySelector('.reviews__swiper');
    if (!el) return;

    new Swiper(el, {
        modules: [Navigation, Autoplay],
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        navigation: {
            nextEl: '.reviews__butNext',
            prevEl: '.reviews__butPrev'
        },
        breakpoints: {
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
}
