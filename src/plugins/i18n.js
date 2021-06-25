import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// We group this by a page or a component.
const messages = {
    'sr': {
        about: {
            title: 'O nama',
            whereWeAre: 'Gde se nalazimo',
            address: 'Adresa',
            contact: 'Kontakt',
            telephone: 'Telefon',
            email: 'Elektronska pošta',
            director: 'Upravnik',
            altRole: 'Šef voznog parka',
            aboutUsText: 'Portal CookBook.rs je osnovan 1912. godine sa ciljem da promoviše kulinarstvo među mladim ljudima širom sveta. Tokom šezdesetih godina prošlog veka, portal je pretrpeo velike promene i od tada se nudi na više od 1000 jezika. Danas portal posećuje više od četiri miliona korisnika mesečno, a samo neke od usluga koje nudi su recepti na srpskom jeziku, podrška vizuelne reprezentacije receptura, kao i kutak za najmlađe.',
            missionAndVision: 'Misija i vizija',
        },
        account: {
            pagedesc: 'Ulogujte se ili napravite novi nalog',
            login: 'Ulogujte se',
            register: 'Napravite nov nalog',
            username: 'Korisničko ime',
            password: 'Šifra',
            usernamedesc: 'Korisničko ime se sastoji samo od slova i brojeva',
            passworddesc: 'Šifra mora imati makar 8 karaktera',
            greeting: 'Zdravo',
            yourRecipes: 'Vaši recepti',
            logout: 'Izloguj se',
            logoutQuestion: 'Da li želite da se izlogujete?',
            error: {
                userExists: 'Već postoji korisnik sa tim korisničkim imenom',
                userNotFound: 'Korisnik sa tim korisničkim imenom nije pronađen',
                wrongPassword: 'Uneta šifra nije ispravna',
            },
        },
        addRecipe: {
            login: "Molimo vas da se ulogujete da biste dodali recept",
            pagedesc: "Dodavanje novog recepta",
            name: "Ime",
            type: "Kategorija",
            duration: "Dužina pripreme u minutima",
            difficulty: "Težina pripreme",
            instructions: "Uputsvo za pripremu",
            add: "Dodaj",
            confirm: "Da li ste sigurni",
            confirmQ: "Da li ste sigurni da želite da obrišete recept",
            ok: "Da",
            cancel: "Ne"
        },
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
        footer: {

        },
        homepage: {
            welcomeMsg: 'TEST PODATAK SRB: Dobrodošli na cookbook!',
        },
        recipe: {
            rating: 'Ocena',
            difficulty: 'Težina pripreme'
        },
        breadcrumbs: {
            home: 'Početna stranica',
            about: 'O nama',
            myAccount: 'Moj nalog',
            addRecipe: 'Dodaj recept',
        },
    },
    'en': {
        header: {
            lang: 'Language',
            search: 'Search',
        },
        homepage: {
            welcomeMsg: 'TEST DATA ENG: Welcome to the cookbook!',
        }
    },
};

const i18n = new VueI18n({
    locale: 'sr', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;