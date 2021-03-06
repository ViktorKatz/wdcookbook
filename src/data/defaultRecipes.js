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
        ratings: [{ userId: 1, rating: 5 },
        { userId: 2, rating: 5 },
        { userId: 3, rating: 2 },
        { userId: 4, rating: 3 },
        { userId: 5, rating: 5 },
        { userId: 6, rating: 4 },
        { userId: 7, rating: 5 }],
        video: 'https://www.youtube.com/embed/ewXhHgESReQ',
        pictures: ['https://podravkaiovariations.azureedge.net/4bb6d842-631f-11eb-8162-0242ac12001a/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp', 'https://d1uz88p17r663j.cloudfront.net/resized/6b1bb1bc21da019356b0ffde7f979c2a_Doma%C4%87a_Sarma_iStock-535515436_1500_700.jpg'],
        comments: [
            { userId: 2, comment: 'Ja volim sarme' },
            { userId: 1, comment: 'Njam njam' },
        ]
    },
    {
        id: 4,
        userId: 2,
        category: 4,
        title: 'Langoš',
        desc: 'Meleg tejbe tesszük az 1 mk cukrot, belemorzsoljuk az élesztőt.\n    Tetejére kevés lisztet szórunk.\n    A fokhagymát megpucoljuk, lereszeljük, kevés vízzel, sóval elkeverjük. Ezzel kenjük meg a lángost.\n    A kovászhoz adjuk a többi lisztet, tejet szükség szerint, és jól kidolgozzuk, kelesztjük.\n    Elosztjuk kisebb gombócokra, 15 percig kelesztjük, és olajos kézzel széthúzzuk, majd forró olajban kisütjük.\n\n     Tisztítsunk meg 2-3 gerezd fokhagymát.\n    Törjük össze fokhagymatörővel, vagy aprítsuk fel.\n    Rakjunk egy kis tálkába 1-2 evőkanál olajat, és adjuk hozzá az összetört fokhagymát.\n    Rakjunk egy csipet sót a tetejére, majd keverjük össze.\n    (Vannak akik hozzászoktak adni még egy fél deci vizet is a fokhagymás öntethez.)\r\n\r\n    Hagyjuk állni körülbelül 10 percig, hogy összeérjenek az ízek.',
        difficulty: 2,
        preptime: 15,
        ratings: [{ userId: 1, rating: 5 },
        { userId: 2, rating: 5 },
        { userId: 3, rating: 5 },
        { userId: 1, rating: 5 },],
        video: 'https://www.youtube.com/embed/ffvmzbGS6Xk',
        pictures: ['https://travelfoodatlas.com/wp-content/uploads/2021/04/hungarian-langos.jpg', 'https://497543-1573563-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/02/hungarian-fried-bread-langos-recipe.jpg', 'https://www.thespruceeats.com/thmb/s9G7FfTBy7BdcAFKna9AdvHOv64=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hungarian-fried-bread-recipe-langos-1136590-11_preview-5b2bd96efa6bcc00365d6702.jpeg', 'https://dailynewshungary.com/wp-content/uploads/2019/03/L%C3%A1ngos-Hungarian-meal-potato.jpg'],
        comments: [
            { userId: 2, comment: 'A legjobb étel' },
            { userId: 1, comment: 'Njam njam' },
        ]
    },
    {
        id: 7,
        userId: 1,
        category: 1,
        title: 'Slana rozen torta',
        desc: 'Sastojci: 430 g slanih rozen kora (8 kora), 700 g kisele pavlake, 100 g krem sira, 150 g majoneza, so, 250 g šunke, 4 jajeta, 100 g kiselih krastavčića, 150 g tvrdog sira (kačkavalj, gauda…).\n\nPriprema: Skuvajte jaja i ostavite ih da se ohlade. Izrendajte sir, jaja, šunku i krastavčiće. Pomešajte kiselu pavlaku, majonez i krem sir. Odvojte oko 350 g fila sa strane (za dekoraciju). Ostatak fila podelite na dva jednaka dela.\n\nU jednu polovinu dodajte rendana jaja i šunku. U drugu polovinu dodajte rendane krastavčiće i 100 g kačkavlja. Sastojke dobro promešajte. Ređajte koru – fil sa šunkom i jajima – kora – fil sa krastavčićima i kačkavljom sve dok ne utrošite materijal. Na kraju treba da bude kora. Preko kore stavite krpu ili foliju i stavite knjigu ili neki teret. Ostavite najmanje 30 minuta.\n\nNakon toga celu tortu premažite sa filom od pavlake, majoneza i krem sira (koji ste na početku odvojili). Preko pospite rendani sir.\n\nIsecite na kockice ili štanglice. Uživajte!',
        difficulty: 3,
        preptime: 50,
        ratings: [
            { userId: 1, rating: 3 },
            { userId: 2, rating: 2 },
        ],
        video: 'https://www.youtube.com/embed/rkhzFG7OeBE',
        pictures: ['https://stil.kurir.rs/data/images/2021/04/22/14/248367_slanarozentorta_ls.jpg'],
        comments: [
            { userId: 1, comment: 'Njam njam' },
            { userId: 2, comment: 'Ne njam njam.' },
        ]
    },
    {
        id: 8,
        userId: 4,
        category: 3,
        title: 'Nasuvo sa makom',
        desc: 'Sastojci\n\nZa testo:\n    400 g testenine\n    1 kašika ulja\n    1 kašičica soli\n\nZa fil od maka:\n    200 g mlevenog maka\n    200 ml mleka\n    1 kesica vanilin šećera\n    2 kašike šećera\n	\nPriprema:\nSkuvati makarone u slanoj vodi, procediti i pomešati sa uljem. Dok se makarone kuvaju u šerpu staviti mleko, dodati šećer, vanil šećer i mak. Kuvati na tihoj vatri 10-ak minuta, mleko ispari i masa bude kremasta. Pomešati sa kuvanim makaronama. Po želji možete još pošećeriti naknadno:)',
        difficulty: 1,
        preptime: 40,
        ratings: [
            { userId: 1, rating: 4 },
            { userId: 2, rating: 5 },
            { userId: 3, rating: 5 },
        ],
        video: '',
        pictures: ['https://www.recepti.com/img/recipe/33950-nasuvo-sa-makom_zoom.jpg'],
        comments: [
            { userId: 1, comment: 'Njam njam' },
            { userId: 2, comment: 'Kvalitet na prvom mestu.' },
            { userId: 4, comment: 'Praviti s ljubavlju obavezno!' },
        ]
    },
    {
        userId: 1,
        id: 2,
        category: 2,
        title: 'Kameleoni sa pesto sosom',
        desc: '1.Na malo ulja proprziti iseckani luk, dodati meso i vino, i na tihoj vatri dinstati 10-tak minuta. Na kraju dodati paradajz i zacine po ukusu. \n2. Kanelone pripremiti prema uputstvu sa pakovanja. \n3. Tek sad pripremiti besamel sos.  Na zagrejanom ulju proprziti brasno do svetlo- zute boje, skloniti s ringle, postepeno dodavati mlako mleko i sve vreme mesati sos da se ne stvore grudvice. Vratiti na zagrejanu ringlu, i uz mesanje, sacekati da sos prokljuca. Dodati vegetu i nastrugani muskatni orascic. \n4. Vatrostalnu posudu samo malo podmazati uljem, staviti pola besamel sosa i 100 g rendane mozzarele. \n5. Napuniti kanelone i poslagati ih po dnu posude. Kaneloni moraju biti u jednom redu, a ne po spratovima poredjani. \n6. Preliti kanelone preostalim besamel sosom, posuti ostatak mozzarele i peci u zagrejanoj rerni na 200 stepeni do rumene boje. Ukaneloniti kanelone i onda ih zakaneloniti od gore kaneloninjima i onda ih tako iskanelonirane poslužiti na kaneloslužavniku.',
        difficulty: 5,
        preptime: 75,
        ratings: [{ userId: 1, rating: 4 },
        { userId: 2, rating: 2 },
        { userId: 3, rating: 2 },
        { userId: 4, rating: 3 },
        { userId: 5, rating: 1 },
        { userId: 6, rating: 3 },
        { userId: 7, rating: 4 }],
        video: "https://www.youtube.com/embed/7waOTeAaKjU",
        pictures: ["https://bonapeti.rs/files/lib/600x350/kaneloni-mlqko-sos.JPG"],
        comments: [
            { userId: 2, comment: 'Manje začina valja...' },
            { userId: 1, comment: 'Njam njam' },
        ]
    },
    {
        userId: 3,
        id: 5,
        category: 1,
        title: 'Bistra kokošija supa',
        desc: '1.Meso oprati i iseći na komade ( po želji možete vstaviti samo piletinu ili samo ćureće vratove, ja nekada stavim oba mesa nekad samo jedno ). \n2.Svo povrće oćistiti, osim krompira i dobro oprati, iseći na komade veličine po želji i staviti sve zajedno u veliku šerpu.Ko voli, neka glavicu luka iseče na pola pa neka je zapeče malo na plotni i tek onda staviti u šerpu sa ostalim povrćem ( ja ne volim kad je luk zapečen i stavljam celu glavicu luka u supu,nekad i dve, jer u našoj kući svi vole, osim mene, kuvani luk iz supe ).\nPosoliti po ukusu, dodati biber u zrnu, poklopiti i pustiti da provri,kad provri,smanjiti temperaturu i kuvati tek da vidite da po malo vri sve dotle dok nije povrće kuvano na pola i tek onda dodati oljušten i opran krompir (dodajem ga kasnije da mi se krompir ne raskuva). \n3.Tokom kuvanja skidati penu od mesa,koja se skuplja na površini tečnosti. \n4.Ako volite da vam je supa “jača” obavezno stavljati meso u hladnu vodu, a ako volite da vam je meso bolje od supe onda stavljati meso u provrelu vodu ( ovo sam davno naučila od moje mame ). \n5.Kad je meso i povrće kuvano izvaditi iz šerpe,blago posoliti a tečnost procediti ( mi obično jedemo povrće i meso iz supe sa hrenom posle supe i to nam je dovoljno za ručak ) i zakuvati sa domaćim rezancima ili sa knedlama i po ukusu dodati vegetu, ili bilo koji suvi začin koristite. \n6.Kuvanu šargarepu možete iseckati i vratiti nazad u šerpu ili staviti sa strane pa svako neka sipa sebi koliko voli. Posuti sitno seckanim svežim peršunom \n7.Prijatno!!!!',
        difficulty: 1,
        preptime: 40,
        ratings: [{ userId: 1, rating: 4 },
        { userId: 2, rating: 2 },
        { userId: 3, rating: 2 },
        { userId: 6, rating: 3 },
        { userId: 7, rating: 4 }],
        video: "",
        pictures: ["https://podravkaiovariations.azureedge.net/1f273e90-6403-11eb-bcba-0242ac120045/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp"],
        comments: [
            { userId: 3, comment: 'Poslužiti kutlačom.' },
            { userId: 1, comment: 'Njam njam' },
        ]
    },
    {
        userId: 1,
        id: 3,
        category: 2,
        title: 'Losos na žarku',
        desc: '1.  U posudu u kojoj cete marinirati lososa, stavite izrendani beli luk, limunov sok, sitno iseckan persun, sol i biber. Sve dobro promesajte i dodajte komade lososa ( stekove ili filete). Treba da budu dobro pokriveni marinadom. Tokom mariniranja, obavezno okrenite stekove, da bi se dobro marinirale sa obe strane. \n2.  Ostavite da se losos marinira nekolko sati a najbolje je da odstoji preko noci. Sto vise stoji u marinadi bolje je, ukusnije.  Pre pecenja, bilo na rostilju ili u pecnici, nozem otstranite odvisak luka i persuna. \n3.  Vreme pecenja, zavisi od debljine lososa.  2.5 cm. (1 inch) debelih stekova pecite na rostilju po 5 minuta na stranu. \n4.  Kad su skoro gotovi, premazite stekove majonezom,( 1 kasika za svaki komad) samo na gornju stranu. Samo malo da se otopi majonez i gotovi su.',
        difficulty: 4,
        preptime: 45,
        ratings: [{ userId: 1, rating: 4 },
        { userId: 2, rating: 2 },
        { userId: 3, rating: 3 },
        { userId: 4, rating: 5 },
        { userId: 5, rating: 3 },
        { userId: 6, rating: 2 }],
        video: "",
        pictures: ["http://www.centarzdravlja.hr/site/assets/files/24757/riba61.jpg"],
        comments: [
            { userId: 3, comment: 'Nisam ljubitelj ovoga.' },
            { userId: 1, comment: 'Njam njam' },
        ]
    },
    {
        userId: 2,
        id: 6,
        category: 1,
        title: 'Šufnudle',
        desc: 'Ogulite krompir i obarite ga u slanoj vodiKada je krompir obaren tj. kada postane mekan, ocedite vodu pa ga dobro izgnječiteDok je krompir još topao, dodajte margarin i dobro ga umešajte pa ostavite da se malo prohladi.U krompir dodajte jaja i dobro izmešajte.Postepeno dodajte brašno i mešajte (mesite) dok se testo ne ujednači.Dodajte onoliko brašna koliko je potrebno da se zamesi testo koje se ne lepi za prste.\n\n    Radnu površinu dobro pospite brašnom (da se testo ne bi lepilo) pa premesite testo još maloPodelite testo na nekoliko komada i od svakog napravite manji valjak od kog ćete odsecati komadiće debljine oko 1, a dužine oko 5 cantimetara.Oblikujte testo u valjčiće.\n\n    Posolite vodu i stavite je da proključaUbacite šufnudle u ključalu vodu i kuvajte ih oko pola sata, odnosno, dok ne isplivaju na površinuVodite računa da se šufnudle ne zalepe za dno šerpe kad ih ubacite u ključalu vodu. Ako se to ipak desi, samo ih „odlepite“ varjačom.\n\n    Dobro zagrejte ulje pa dodajte prezle i pržite ih dok malo ne potamneKako šufnudle mogu biti pripremane i kao slatko jelo, u prezle možete dodati šećer i cimetbarene i oceđene šufnudle uvijte u prezle sa svih strana, slažite u činiju i pospite preostalim prezlama.\n\n    Slatka varijanta: Uz tople šufnudle poslužite šećer i cimet.Slana varijanta: Tople šufnudle poslužite kao prilog uz neko meso u sosu. \nPrijatno!',
        difficulty: 3,
        preptime: 90,
        ratings: [
            { userId: 4, rating: 5 },
            { userId: 5, rating: 3 },
            { userId: 6, rating: 2 }],
        video: "https://www.youtube.com/embed/xWPdgvVP2XI",
        pictures: ['https://i.ytimg.com/vi/xWPdgvVP2XI/maxresdefault.jpg'],
        comments: [
            { userId: 1, comment: 'Njam njam' },
        ]
    },
    {
        id: 9,
        userId: 2,
        category: 3,
        title: 'Kurtoš kolač',
        desc: 'Sastojci\nTesto:\n    750 g belog (oštrog) brašna\n    30 g suvog kvasca\n    300 ml mleka\n\nKremica za testo:\n    100 g otopljenog putera/margarina\n    60 g šećera\n    2 cela jajeta\n    2 kesice vanilinog šećera\n    2 prstohvata soli\n\nDekoracija/premaz:\n    oko 70 g sitno seckani ili mleveni lešnik\n    50 g otopljenog putera/margarina\n    1/2 čaše otopljenig meda\n    100 g šećera-beli/smedji\n\nPriprema\n    Sipati brašno u činiju, napraviti kašikom rupu po sredini, posuti so po obodu, a u sredinu sipati nadošli kvasac (u mleku). U to dodati 300 ml mleka, polako mešajući, sve dok ne sipamo svo mleko. Zamesiti testo koje treba da bude "bljuckavo", i da ostane još brašna okolo. Ostaviti poklopljeno krpom oko 15 minuta.\n    Za to vreme pripremiti ostale sastojke: u činiju sa šećerom dodamo otopljen puter, mešamo žicom, dodamo jaja i sve sjedinimo. Kad je testo naraslo dodamo mu ovu kremicu i mešamo kašikom da sjedinimo sa ostatkom brašna. Potom mesimo testo rukom 10 minuta, sve dok ne bude više lepljivo. Testo ostaviti 60 minuta prekriveno, na toplom mestu. Od konzervi ili kartona praviti formu tako što karton ili kozervu umotamo u alu-foliju, tako da i krajevi budu pod folijom. Postoje i originalni kalupi. Kurtos kolač & Dimnjak kolač ~ Kolač iz Transilvanije\n    Kada je testo spremno, pobrašnimo površinu i rastanjimo oklagijom na koru debljine 1cm. Sečemo trake širine oko 1-2 cm. Formu/kalupčić namažemo otopljenim puterom pa navijamo traku i kraj zalepimo četkicom sa otopljenim puterom. Formu rukom srolamo po pobrašnjenoj površini da se trake na kalupu izravnaju, svaku premazati četkicom u otopljenom puteru i uvaljti dobro u šećer. Kurtos kolač & Dimnjak kolač ~ Kolač iz Transilvanije\n    Postaviti kurtose na pleh sa pek papirom. Peći u zagrejanoj rerni 10-15 minuta na 160C (rerna sa ventilatorom max. 10 minuta). Kurtos kolač & Dimnjak kolač ~ Kolač iz Transilvanije\n    Pečene kurtose ostaviti da se ohlade, pa skidati gurajući kalup rukom od užeg ka širem delu, tako da kalup ispadne. Sada kurtos premazati četkicom umoćenom u rastopljeni med i posuti sitno seckanim/mlevenim lešnikom, kokosom, šećerom ili nekom drugom kombinacijom: kokosom, orahom, cimetom, bademom, plazmom, euro-krem + plazma, pekmez od narandže sa čokoladom daje divan ukus jafe, džem od kajsije i orah. ',
        difficulty: 5,
        preptime: 180,
        ratings: [
            { userId: 1, rating: 5 },
            { userId: 2, rating: 5 },
            { userId: 3, rating: 5 },
        ],
        video: '',
        pictures: ['https://www.cover.rs/media/blog/hungary_k_rt_skal_cs-1.jpg', 'http://www.zenasamja.me/images/full/2915.jpg', 'http://4.bp.blogspot.com/-LqnS8DzGgvs/TwMhQDEuAUI/AAAAAAAAHm0/BCXwAvpusTg/s400/chimney_cake.jpg'],
        comments: [
            { userId: 5, comment: 'chimney cake' },
            { userId: 2, comment: 'Kurtoš kolač.' },
            { userId: 5, comment: 'chimney cake' },
            { userId: 2, comment: 'Kurtoš.' },
            { userId: 5, comment: 'chimney' },
            { userId: 1, comment: 'Njam njam' },
            { userId: 2, comment: 'Kurtoš.' },
            { userId: 5, comment: 'chimney bre' },
            { userId: 2, comment: 'Kurtoš.' },
        ]
    },
    {
        id: 10,
        userId: 6,
        category: 3,
        title: 'Žerbo kocke',
        desc: 'Zagrejte mleko da bude mlako, dodajte šećer i izmrvljen svež kvasac, kao i dve kašike brašna, pa ostavite da odstoji desetak minuta da kvasac nadođe. Umutite mast sa žumancima, dodajte ih mešavini sa kvascem, pa postepeno dodajte brašno i sve dobro izmesite. Znaćete da je testo pripremljeno kad počne da se odvaja od prstiju.\nPodelite testo u četiri loptice, pa ih pospite sa malo brašna, prekrijte krpom i ostavite sat vremena da stoji na sobnoj temperaturi.\nPosle sat vremena razvucite sve četiri loptice od testa oklagijom u dimenzijama pleha u kom ćete peći kolač. Pleh namažite mašću ili uljem, spustite prvu koru od testa, premažite je džemom od kajsija, pospite trećinom šećera i trećinom mlevenih oraha, pa preko nje stavite drugi deo testa. Ponovite filovanje i isti postupak primenite i za treću koru od testa. Kad preko trećeg fila stavite četvrtu koru od testa prekrijte kolač krpom i ostavite ga još malo da naraste.\n\nKolač pecite pola sata u rerni na 180 stepeni. Ukoliko primetite da gornja kora brzo tamni, prekrijte kolač aluminijumskom folijom i nastavite da ga pečete.\nIzvadite i pustite da se ohladi, pa ga prelijte vrućom čokoladom rastopljenom sa mlekom i puterom.',
        difficulty: 4,
        preptime: 150,
        ratings: [
            { userId: 1, rating: 5 },
            { userId: 2, rating: 4 },
            { userId: 3, rating: 4 },
        ],
        video: '',
        pictures: ['https://xdn.tf.rs/2020/10/13/zerbo-kocke-830x0.jpg'],
        comments: [
            { userId: 2, comment: 'Ćao tetka!' },
        ]
    },
    {
        id: 11,
        userId: 5,
        category: 4,
        title: 'Granola bar',
        desc: 'Ovo je obrok koji zahteva pripremu, ali takođe može da stoji, pa ga možete raspodeliti za više dana.\nMožete kombinovati doslovno kako hoćete, evo jednog mog predloga.\n\n3 kašike ovsenih pahuljica\n1 kašika mlevenog lana\n1 kašika kakao praha\n1 jaje\nmalo mleka\n150 grama bobičastog voća po izboru\n\nSve pomešate, izlijete na pek papir i stavite da se peče na 180 stepeni oko pola sata do 40 minuta.\n\nOvo ukupno ima oko 350 kalorija što je po kalorijskoj vrednosti više doručak nego užina tako da se od ove mere dobiju 2 užine.\nA vi svakako možete i duplirati smesu, pa da dobijete 4 užine. ',
        difficulty: 3,
        preptime: 40,
        ratings: [
            { userId: 1, rating: 2 },
            { userId: 2, rating: 2 },
            { userId: 3, rating: 4 },
        ],
        video: 'https://www.youtube.com/embed/7_YBUMoYZEE',
        pictures: ['https://fitt.rs/wp-content/uploads/2020/07/ideje-za-u%C5%BEinu-7-1024x819.jpeg', 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_1392,h_1392/k%2Farchive%2F15a57c2b302c7c3dcfabc0ea9e2934dd90bcd27b'],
        comments: [
            { userId: 1, comment: 'Lele ovo nešto zdravo!' },
            { userId: 2, comment: 'Zdravo' },
        ]
    },
    {
        id: 12,
        userId: 1,
        category: 4,
        title: 'Brusketi sa rikotom i narom',
        desc: 'U odgovarajuću posudu sipati balzamiko sirće, šećer i limunov sok. Zagrejati do vrenja i na umerenoj vatri redukovati na pola količine. Preručiti u staklenu teglicu i ostaviti da se ohladi.\n\nU međuvremenu, iseći baget na šnite i grilovati ih par minuta, do zlatno smeđe boje.\n\nNa svaku brusketu naneti sloj rikota sira, rukolu i prstohvat nara.\n\nPreliti redukovanim balzamikom i posuti krupnom morskom solju.\n\nBruskete sa rikotom i narom poslužiti odmah.\n\nPreporuka je servirati uz poveću količinu crnog čaja.',
        difficulty: 1,
        preptime: 20,
        ratings: [
            { userId: 1, rating: 4 },
            { userId: 2, rating: 5 },
            { userId: 3, rating: 4 },
            { userId: 4, rating: 2 },
            { userId: 5, rating: 3 },
        ],
        video: '',
        pictures: ['https://www.bakersdelight.com.au/wp-content/uploads/2018/10/Brie-and-Pomegranate-Bruschetta.jpg', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Pomegranate-Pistachio-Crostini_EXPS_SDDJ17_181270_C08_25_5b-2.jpg', 'https://rs.n1info.com/wp-content/uploads/2019/08/shutterstock-788439151-270892.jpeg'],
        comments: [
            { userId: 1, comment: 'Можете посути и пистаћима ко воли' },
        ]
    },
];

export default defaultRecipes;
