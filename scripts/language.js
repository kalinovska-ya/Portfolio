//  almost JSON =/

const lang = {
    "title.key": {
      "en": "AK - Portfolio",
      "ru": "АК - Портфолио"
    },
    "about.me.key": {
      "en": "About Me",
      "ru": "Обо Мне"
    },
    "my.skills.key": {
      "en": "Skills",
      "ru": "Навыки"
    },
    "portfolio.key": {
      "en": "Portfolio",
      "ru": "Портфолио"
    },
    "contacts.key": {
      "en": "Contacts",
      "ru": "Контакты"
    },
    "name.key": {
      "en": "Alina Kalinovskaya",
      "ru": "Алина Калиновская"
    },
    "html.coder.key": {
      "en": "HTML/CSS Coder",
      "ru": "Верстальщик"
    },
    "front.end.key": {
      "en": "Junior Front-End Dev.",
      "ru": "Начинающий Front-End разработчик"
    },
    "contacts.key": {
      "en": "Contacts",
      "ru": "Контакты"
    },
    "title.key": {
      "en": "AK - Portfolio",
      "ru": "АК - Портфолио"
    },

    "about.me.text.key": {
      "en": "Hello! I'm 28-years old hotel-segment specialist, currently acting as software consultant for hotel businesses. Starting from the previous year I focused on a different experience and studying front-end development",
      "ru": "Привет! Мне 28 лет на данный момент я работаю консультантом по ПО для отельных бизнесов. С прошлого года я сменила направление и занялась изучением front-end разработки"
    },
    "full.cv.find.key": {
      "en": "Full CV you may see ",
      "ru": "Полное резюме можно посмотреть "
    },
    "work.title.key": {
      "en": "My Portfolio",
      "ru": "Портфолио работ"
    },
    "my.folio.key": {
      "en": "My Portfolio",
      "ru": "Портфолио работ"
    },
    "my.folio.text.key": {
      "en": "Here are several training projects that I've made for last months",
      "ru": "Несколько тестовых мини-проектов, сделанных за последние месяцы"
    },
    "work.button.web.key": {
      "en": "View Webpage",
      "ru": "Открыть страницу"
    },
    "work.button.github.key": {
      "en": "View Repo on GitHub",
      "ru": "Репозиторий на GitHub"
    },
    "work1.title.key": {
      "en": "Telegram Chat Screen",
      "ru": "Экран чата Telegram"
    },
    "work1.text.key": {
      "en": "UI-only adaptive group chat screen. Made to train pixel-perfect feature",
      "ru": "Адаптивная верстка экрана группового чата. Делалось, чтобы потренировать полное соответствие макету"
    },
    "work2.title.key": {
      "en": "Bicycle Shop Langing",
      "ru": "Лэндинг веломагазина"
    },
    "work2.text.key": {
      "en": "Adaptive ladging page with parallax effect and animation",
      "ru": "Адаптивный лэндинг с параллакс-эффектом и анимацией"
    },
    "work3.title.key": {
      "en": "Portfolio Sample Page",
      "ru": "Шаблон для портфолио"
    },
    "work3.text.key": {
      "en": "Small porftolio page with php-form. Non-adaptive",
      "ru": "Небольшой шаблон для портфолио с php-формой. Без адаптива"
    },
    "work4.title.key": {
      "en": "Hotel Website",
      "ru": "Сайт для отеля"
    },
    "work4.text.key": {
      "en": "Multipage website, first training project with JS/Jquery",
      "ru": "Многостраничный сайт, первый тестовый проект с использованием JS/Jquery"
    },
    "work5.title.key": {
      "en": "Social Network",
      "ru": "Социальная сеть"
    },
    "work5.text.key": {
      "en": "SPA photoblogging platform - used for learning React/Redux. In process",
      "ru": "Одностраничная платформа для публикаций фото - в процессе, разрабатывается в ходе изучения React/Redux"
    },
    "get.in.touch.key": {
      "en": "Get in Touch",
      "ru": "Контакты"
    },
    "get.in.touch.text.key": {
      "en": "Will be glad to contact. Send me message without hesitated",
      "ru": "Всегда рада общению. Если у вас появятся какие-либо вопросы - отправьте мне сообщение"
    }
}

const languageChangeSelect = document.querySelector('#language-change-checkbox');

const setNewLanguage = (code) => {
    const tags = document.querySelectorAll('[data-langkey]');
	  
	tags.forEach((el) => {
      	const {langkey} = el.dataset;
      	if (lang[langkey]) el.innerText = lang[langkey][code]
  	})
}

languageChangeSelect.addEventListener('change', (e) => {
  	const lang = e.target.checked ? 'ru' : 'en';
  	localStorage.setItem('language', lang)
  	setNewLanguage(lang)
})

const language = localStorage.getItem('language');

if (language === 'ru' || language === 'en') {
  	languageChangeSelect.checked = language === 'ru';
  	setNewLanguage(language)
}
