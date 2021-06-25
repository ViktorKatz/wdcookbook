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
        desc: 'Staviti sarmu u lonac',
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
            { userId: 2, comment: 'Ja volim sarme' },
            { userId: 1, comment: 'Njam njam' },
        ]
    },
    {
        userId: 1,
        id: 2,
        category: 2,
        title: 'Kaneloni sa pesto sosom',
        desc: 'Ukaneloniti kanelone i onda ih zakaneloniti od gore kaneloninjima i onda ih tako iskanelonirane poslužiti na kaneloslužavniku.',
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
        desc: 'Užariti lososa i staviti ga na tiganj. I posle poslužiti.',
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
