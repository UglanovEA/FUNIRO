// Подключение функционала "Чертогов Фрилансера"
import { isMobile, removeClasses } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.onload = function () {
	document.addEventListener("click", documentActions);
	// Actions (делегирование события click)
	function documentActions(e) {
		const targetElement = e.target;

		// Событие "Click" на мобильных
		if (window.innerWidth > 768 && isMobile.any()) {
			if (targetElement.classList.contains("menu__arrow")) {
				targetElement.closest(".menu__item").classList.toggle("_hover");
			}
			if (!targetElement.closest(".menu__item") && document.querySelectorAll(".menu__item._hover").length > 0) {
				removeClasses(document.querySelectorAll(".menu__item._hover"), "_hover");
			}
		}
		// Открытие меню поиска
		if (targetElement.classList.contains("search-form__icon")) {
			document.querySelector(".search-form").classList.toggle("_active");
		} else if (!targetElement.closest(".search-form") && document.querySelector(".search-form._active")) {
			document.querySelector(".search-form").classList.remove("_active");
		}
	}

	// Фиксированная шапка
	const headerElement = document.querySelector(".header");
	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove("_scroll");
		} else {
			headerElement.classList.add("_scroll");
		}
	};
	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);
};
