import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// We group this by a page or a component.
const messages = {
    'sr': {
        categories: {
            appetizers: 'Predjela',
            mainCourses: 'Glavna jela',
            desserts: 'Deserti',
            snacks: 'Užine',
        },
        header: {
            lang: 'Jezik',
            search: 'Pretraži',
            home: 'Početna',
            recipes: 'Recepti',
            addRecipe: 'Dodaj recept',
            myAccount: 'Moj nalog',
            aboutUs: 'O nama',
        },
        homepage: {
            welcomeMsg: 'Dobrodošli na cookbook!',
        }
    },
    'en': {
        header: {
            lang: 'Language',
            search: 'Search',
        },
        homepage: {
            welcomeMsg: 'Welcome to the cookbook!',
        }
    },
};

const i18n = new VueI18n({
    locale: 'sr', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;