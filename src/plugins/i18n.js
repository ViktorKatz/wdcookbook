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
            passwordAgain: 'Potvrdite šifru',
            usernamedesc: 'Korisničko ime se sastoji samo od slova i brojeva',
            passworddesc: 'Šifra mora imati makar 8 karaktera',
            greeting: 'Zdravo',
            yourRecipes: 'Vaši recepti',
            yourComments: 'Vaši komentari',
            yourRatings: 'Vaše ocene',
            logout: 'Izloguj se',
            logoutQuestion: 'Da li želite da se izlogujete?',
            error: {
                userExists: 'Već postoji korisnik sa tim korisničkim imenom',
                userNotFound: 'Korisnik sa tim korisničkim imenom nije pronađen',
                wrongPassword: 'Uneta šifra nije ispravna',
                passwordsDontMatch: 'Šifre se ne poklapaju',
            },
            regSuccess: 'Uspešno registrovan nalog',
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
            all: 'Svi recepti',
            appetizers: 'Predjela',
            mainCourses: 'Glavna jela',
            desserts: 'Deserti',
            snacks: 'Užine',
            sort: "Sortirajte po",
            order: {
                id: "Redosledu dodavanja",
                difficulty: "Težini pripreme",
                rating: "Prosečnoj oceni",
                asc: "rastuće",
                desc: "opadajuće"
            }
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
            sitedesc: 'Kulinarski kutak',
            authorship: 'Copyright 2021,  Viktor Katzenberger, Dragan Milovančević,  Odsek za softversko inženjerstvo Elektrotehničkog fakulteta univerziteta u Beogradu',
        },
        homepage: {
            title: 'Dobrodošli na CookBook!',
            subtitle: 'Gde svi vaši kulinarski snovi postaju javascript',
            bestRatedRecipes: 'Najbolje ocenjeni recepti',
        },
        recipe: {
            rating: 'Ocena',
            difficulty: 'Težina pripreme',
            by: 'od',
            instructions: 'Upustvo za pripremu',
            comments: 'Komentari',
            pictures: 'Slike',
            next: 'Sledeća',
            prev: 'Prethodna',
            noVideo: 'Video nije dostupan',
            addComment: 'Komentariši',
            duration: 'Vreme pripreme',
            login: 'Ulogujte se da biste komentarisali',
            addPicture: {
                button: 'Dodaj sliku',
                title: 'Dodaj sliku',
                cancel: 'Odustani',
                ok: 'Dodaj'
            },
            addVideo: {
                button: 'Dodaj video',
                title: 'Dodaj video',
                cancel: 'Odustani',
                ok: 'Dodaj'
            }
        },
        blog: {
            haveAlook: 'Pogledajte najnovije novosti iz sveta kulinarstva',
            author: 'Autor',
            date: 'Datum',
            moreinfo: 'Više informacija...',
        },
        breadcrumbs: {
            home: 'Početna stranica',
            about: 'O nama',
            myAccount: 'Moj nalog',
            addRecipe: 'Dodaj recept',
        },
        title: {
            home: "Početna",
            myAccount: "Moj profil",
            about: "O nama",
            addRecipe: "Novi recept"
        }
    },
    'en': {
        about: {
            title: 'About us',
            whereWeAre: 'Where we are',
            address: 'Address',
            contact: 'Contact',
            telephone: 'Telephone',
            email: 'E-mail',
            director: 'Director',
            altRole: 'Señor CEO',
            aboutUsText: 'Portal CookBook.rs was founded way back in 1912 with mission to promote culinary arts among young population across the world. During the golden sixties, the portal was subjected to massive changes, and since then is offered in more than 1000 languages. Today, the portal is visited by more than 4 million monthly users. Some of the numerous features include national recipes, visual representation of instructions, as well as a lot of fun for the whole family.',
            missionAndVision: 'Mission and Vision',
        },
        account: {
            pagedesc: 'Log in or register',
            login: 'Log in',
            register: 'Register',
            username: 'Username',
            password: 'Password',
            passwordAgain: 'Confirm password',
            usernamedesc: 'Username may only contain letters and numbers',
            passworddesc: 'Password must be at least 8 characters long',
            greeting: 'Hello',
            yourRecipes: 'Your recipes',
            yourComments: 'Your comments',
            yourRatings: 'Your ratings',
            logout: 'Log out',
            logoutQuestion: 'Are you sure you want to log out?',
            error: {
                userExists: 'A user with that username already exists',
                userNotFound: 'User with that username does not exist',
                wrongPassword: 'Wrong password',
                passwordsDontMatch: 'Passwords do not match',
            },
            regSuccess: 'Successfully registered account',
        },
        addRecipe: {
            login: "Please log in to add a recipe",
            pagedesc: "Add a new recipe",
            name: "Title",
            type: "Category",
            duration: "Preparation time (minutes)",
            difficulty: "Difficulty",
            instructions: "Instructions",
            add: "Add",
            confirm: "Are you sure",
            confirmQ: "Are you sure you want to delete the recipe",
            ok: "Yes",
            cancel: "No"
        },
        categories: {
            all: 'All recipes',
            appetizers: 'Appetizers',
            mainCourses: 'Main courses',
            desserts: 'Desserts',
            snacks: 'Snacks',
            sort: "Sort by",
            order: {
                id: "Order added",
                difficulty: "Difficulty",
                rating: "Average rating",
                asc: "ascending",
                desc: "descending"
            }
        },
        header: {
            lang: 'Language',
            search: 'Search',
            home: 'Home',
            recipes: 'Recipes',
            addRecipe: 'Add recipe',
            myAccount: 'My account',
            aboutUs: 'About us',
        },
        footer: {
            sitedesc: 'Culinary corner',
            authorship: 'Copyright 2021,  Viktor Katzenberger, Dragan Milovančević,  Software Engineering Department, School of Electrical Engineering, Belgrade',
        },
        homepage: {
            title: 'Welcome to the CookBook!',
            subtitle: 'Where all your culinary dreams come vue',
            bestRatedRecipes: 'Best rated recipes',
        },
        recipe: {
            rating: 'Rating',
            difficulty: 'Difficulty',
            by: 'by',
            instructions: 'Instructions',
            comments: 'Comments',
            pictures: 'Pictures',
            next: 'Next',
            prev: 'Previous',
            noVideo: 'Video not available',
            addComment: 'Comment',
            duration: 'Preparation time',
            login: 'Please log in to comment',
            addPicture: {
                button: 'Add picture',
                title: 'Add picture',
                cancel: 'Cancel',
                ok: 'Add'
            },
            addVideo: {
                button: 'Add video',
                title: 'Add video',
                cancel: 'Cancel',
                ok: 'Add'
            }
        },
        blog: {
            haveAlook: 'Take a look at the freshest news from the culinary world',
            author: 'Author',
            date: 'Date',
            moreinfo: 'More information...',
        },
        breadcrumbs: {
            home: 'Home',
            about: 'About us',
            myAccount: 'My account',
            addRecipe: 'Add recipe',
        },
        title: {
            home: "Homepage",
            myAccount: "My account",
            about: "About us",
            addRecipe: "New recipe"
        }
    },
    'hu': {
        about: {
            title: 'Rólunk',
            whereWeAre: 'Hol vagyunk',
            address: 'Cimunk',
            contact: 'Kontaktunk',
            telephone: 'Telefonszám',
            email: 'E-mail',
            director: 'Főnök',
            altRole: 'Señor CEO',
            aboutUsText: 'A CookBook.rs portált 1912-ben alapították azzal a céllal, hogy népszerűsítse a konyhaművészetet a fiatal lakosság körében az egész világon. Az arany hatvanas évek alatt a portál hatalmas változásoknak volt kitéve, és azóta több mint 1000 nyelven kínálják. Ma a portált havonta több mint 4 millió felhasználó keresi fel. A számos funkció közül néhány tartalmaz nemzeti recepteket, az utasítások vizuális megjelenítését, valamint az egész család szórakozását. ',
            missionAndVision: 'Küldetés és jövőkép ',
        },
        account: {
            pagedesc: 'Belépés vagy registració',
            login: 'Belépés',
            register: 'Registració',
            username: 'Név',
            password: 'Jelszó',
            passwordAgain: 'Jelszó megerősítése',
            usernamedesc: 'Név lehet csak bétűkat es számokat tartalmaz',
            passworddesc: 'Jelszó kell nyolc bétűktől lenni',
            greeting: 'Szia',
            yourRecipes: 'Receptjeit',
            yourComments: 'Megjegyzésjeit',
            yourRatings: 'Értékelésjeit',
            logout: 'Kilépés',
            logoutQuestion: 'Biztosan hogy kilépsz?',
            error: {
                userExists: 'Az a név mar veszik',
                userNotFound: 'Nincs a hasnáló azonos nevel',
                wrongPassword: 'Rossz jelszó',
                passwordsDontMatch: 'Jelszók nem ugyanaz',
            },
            regSuccess: 'Sikeres registració',
        },
        addRecipe: {
            login: "Kérjük lépj be, es akkor receptet teszheted",
            pagedesc: "A receptet teszz",
            name: "Cim",
            type: "Kategória",
            duration: "Készítmény idő (percek)",
            difficulty: "Nehézség",
            instructions: "Utasítás",
            add: "Teszz",
            confirm: "Biztosan",
            confirmQ: "Biztosan törölöd a receptet",
            ok: "Igen",
            cancel: "Nem"
        },
        categories: {
            all: 'Minden recept',
            appetizers: 'Előételek',
            mainCourses: 'Főételek',
            desserts: 'Édessegek',
            snacks: 'Falatozok',
            sort: "Rendezés",
            order: {
                id: "Tenni rend",
                difficulty: "Nehezés",
                rating: "Ártlagos értékelés",
                asc: "felmenő",
                desc: "lemenő"
            }
        },
        header: {
            lang: 'Nyelv',
            search: 'Keresni',
            home: 'Home',
            recipes: 'Receptek',
            addRecipe: 'Teszz receptet',
            myAccount: 'Hasnálóm',
            aboutUs: 'Rólunk',
        },
        footer: {
            sitedesc: 'Culinary corner',
            authorship: 'Copyright 2021,  Viktor Katzenberger, Dragan Milovančević,  Software-mernöki osztály, Gépesmernöki egyetem, Belgrad',
        },
        homepage: {
            title: 'Üdvözöljük!',
            subtitle: 'Ahol minden konyhai almaid való lennek',
            bestRatedRecipes: 'Legjobb receptek',
        },
        recipe: {
            rating: 'Értékelés',
            difficulty: 'Nehezés',
            by: 'Iró',
            instructions: 'Utasítás',
            comments: 'Megjegyzések',
            pictures: 'Képek',
            next: 'Következő',
            prev: 'Előző',
            noVideo: 'Nincs a video',
            addComment: 'Teszz a megjegyzést',
            duration: 'Idő',
            login: 'Kérjük lep be, hogy tenned a megjegyzést',
            addPicture: {
                button: 'Teszz egy képet',
                title: 'Teszz egy képet',
                cancel: 'Törölj',
                ok: 'Teszz'
            },
            addVideo: {
                button: 'Teszz egy video',
                title: 'Teszz egy video',
                cancel: 'Törölj',
                ok: 'Teszz'
            }
        },
        blog: {
            haveAlook: 'Újság',
            author: 'Iró',
            date: 'Dátum',
            moreinfo: 'Több informació...',
        },
        breadcrumbs: {
            home: 'Honlap',
            about: 'Rólunk',
            myAccount: 'Hasnálóm',
            addRecipe: 'Tessz egy receptet',
        },
        title: {
            home: "Honlap",
            about: "Rólunk",
            myAccount: "Hasnálóm",
            addRecipe: "Tessz egy új receptet"
        }
    }
};

const i18n = new VueI18n({
    locale: 'sr', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;