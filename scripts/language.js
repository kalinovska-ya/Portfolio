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

    "title.index.key": {
      "ru": "Онлайн-платформа Голос. В этот раз ваш Голос решает все!",
      "en": "Online Platform - Voice. This time your voice decides it all!"
    },
    "title.thankyou.key": {
      "ru": "Спасибо за ваш голос!",
      "en": "Дзякуй за ваш голас!"
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
