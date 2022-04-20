/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, Parallax } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector(".slider-main__body")) {
		// Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper(".slider-main__body", {
			// Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Parallax],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 32,
			watchOverflow: true,
			speed: 800,
			parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			loopAdditionalSlides: 5,
			preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			pagination: {
				el: ".controls-slider-main__dotts",
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: ".slider-arrow_prev",
				nextEl: ".slider-arrow_next",
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {},
		});
	}
	if (document.querySelector(".slider-rooms__body")) {
		// Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper(".slider-rooms__body", {
			// Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Parallax],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 24,
			watchOverflow: true,
			speed: 800,
			parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			loopAdditionalSlides: 5,
			preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			pagination: {
				el: ".slider-rooms__dotts",
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: ".slider-rooms .slider-arrow_prev",
				nextEl: ".slider-rooms .slider-arrow_next",
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector(".swiper-scrollbar");
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: "vertical",
				slidesPerView: "auto",
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
