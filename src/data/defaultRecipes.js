// NEVER use these directly!
// ALWAYS inject them into localStorage so that
// they interpolate with users' recipes.
// Only inject when the item in localstorage is null
//
// Local storage codename: 'recipes'
// localStorage.getItem('recipes');
// localStorage.setItem('recipes', updatedRecipes);
//
// Fields:
// id - to access recipe details via URL
// category - category id
// title - title
// desc - preparation instructions
// difficulty - number 1-5
// preptime - in minutes
// ratings - array of numbers 1-5
// videos - array of YouTube video links
// pictures - array of picture links
// comments - array of {username: String, comment: String}

const defaultRecipes = [
    {
        id: 1,
        userId: 1,
        category: 2,
        title: 'Sarme',
        desc: 'Da bi vam sarma bila dobra mora i kupus u koji je savijate da bude dobar. Šta to znači? Pa mora da bude čvrst list, al nikako žilav, neka vas ne prevari to što je list mekan ili prvidan ako je čvrst. Kad ga uzmete u ruku da smotate sarmu ne sme da ima žilice, to odstranite, a ne sme ni da bude premekan, možete da se prevarite pa da pomislite da će biti mekši kad se skuva al ne. . . raspašće se.\n\nTakodje, morate da vodite računa i o mesu, najbolja kombinacija je mešano mleveno meso.\n\nJoš morate da vodite i računa i o dodacima koje stavljate u sarmu. Suvo meso, trebalo bi da bude baš suvo, ne prodimljeno, najbolje je domaće.\n\nZačini su jako bitni, na primer crvena paprika, nemojte da stavljate bilo koju, izaberite jednu vrstu koju ćete da koristite zbog boje i arome, trebalo bi da bude proverena, da kad se sarma skuva bude i crvena a ne da paprika u toku kuvanja izgubi svoju boju i sarma ostane bleda i za oko lošeg izleda, jer svako jelo koje lošije izgleda nije ni primamljivo.',
        difficulty: 2,
        preptime: 150,
        ratings: [  { userId: 1, rating: 5 },
                    { userId: 2, rating: 5 },
                    { userId: 3, rating: 2 },
                    { userId: 4, rating: 3 },
                    { userId: 5, rating: 5 },
                    { userId: 6, rating: 4 },
                    { userId: 7, rating: 5 }],
        video: 'https://www.youtube.com/embed/ewXhHgESReQ',
        pictures: ['https://podravkaiovariations.azureedge.net/4bb6d842-631f-11eb-8162-0242ac12001a/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp', 'https://d1uz88p17r663j.cloudfront.net/resized/6b1bb1bc21da019356b0ffde7f979c2a_Doma%C4%87a_Sarma_iStock-535515436_1500_700.jpg'],
        comments: [
            { userId: 1, comment: 'Ja volim sarme' },
            { userId: 2, comment: 'Njam njam' },
        ]
    },
    {
        userId: 1,
        id: 2,
        category: 2,
        title: 'Kaneloni sa pesto sosom',
        desc: '1.\n\nNa malo ulja proprziti iseckani luk,\ndodati meso i vino, i na tihoj vatri\ndinstati 10-tak minuta.\nNa kraju dodati paradajz i zacine po ukusu.\n2.\n\nKanelone pripremiti prema uputstvu sa pakovanja.\n3.\n\nTek sad pripremiti besamel sos.\n\n\nNa zagrejanom ulju proprziti brasno\ndo svetlo- zute boje, skloniti s ringle,\npostepeno dodavati mlako mleko\ni sve vreme mesati sos da se ne\nstvore grudvice.\nVratiti na zagrejanu ringlu, i uz\nmesanje, sacekati da sos prokljuca.\nDodati vegetu i nastrugani muskatni\norascic.\n\n4.\n\nVatrostalnu posudu samo malo podmazati\nuljem, staviti pola besamel sosa i\n100 g rendane mozzarele.\n5.\n\nNapuniti kanelone i poslagati ih po\ndnu posude. Kaneloni moraju biti u\njednom redu, a ne po spratovima\nporedjani.\n6.\n\nPreliti kanelone preostalim besamel\nsosom, posuti ostatak mozzarele i\npeci u zagrejanoj rerni na 200 stepeni do\nrumene boje. Ukaneloniti kanelone i onda ih zakaneloniti od gore kaneloninjima i onda ih tako iskanelonirane poslužiti na kaneloslužavniku.',
        difficulty: 5,
        preptime: 75,
        ratings: [  { userId: 1, rating: 4 },
                    { userId: 2, rating: 2 },
                    { userId: 3, rating: 2 },
                    { userId: 4, rating: 3 },
                    { userId: 5, rating: 1 },
                    { userId: 6, rating: 3 },
                    { userId: 7, rating: 4 }],
        video: "",
        pictures: ["https://bonapeti.rs/files/lib/600x350/kaneloni-mlqko-sos.JPG"],
        comments: [
            { userId: 2, comment: 'Manje začina valja...' },
            { userId: 1, comment: 'Njam njam' },
        ]
    },
    {
        userId: 1,
        id: 3,
        category: 2,
        title: 'Losos na žarku',
        desc: '1.\n\nU posudu u kojoj cete marinirati lososa, stavite izrendani beli luk, limunov sok, sitno iseckan persun, sol i biber. Sve dobro promesajte i dodajte komade lososa ( stekove ili filete). Treba da budu dobro pokriveni marinadom. Tokom mariniranja, obavezno okrenite stekove, da bi se dobro marinirale sa obe strane.\n2.\n\nOstavite da se losos marinira nekolko sati a najbolje je da odstoji preko noci. Sto vise stoji u marinadi bolje je, ukusnije.\n\nPre pecenja, bilo na rostilju ili u pecnici, nozem otstranite odvisak luka i persuna.\n3.\n\nVreme pecenja, zavisi od debljine lososa.\n\n2.5 cm. (1 inch) debelih stekova pecite na rostilju po 5 minuta na stranu.\n4.\n\nKad su skoro gotovi, premazite stekove majonezom,( 1 kasika za svaki komad) samo na gornju stranu. Samo malo da se otopi majonez i gotovi su.',
        difficulty: 4,
        preptime: 45,
        ratings: [  { userId: 1, rating: 4},
                    { userId: 2, rating: 2},
                    { userId: 3, rating: 3},
                    { userId: 4, rating: 5},
                    { userId: 5, rating: 3},
                    { userId: 6, rating: 2}],
        video: "",
        pictures: ["http://www.centarzdravlja.hr/site/assets/files/24757/riba61.jpg"],
        comments: [
            { userId: 3, comment: 'Nisam ljubitelj ovoga.' },
            { userId: 1, comment: 'Njam njam' },
        ]
    },
];

export default defaultRecipes;
