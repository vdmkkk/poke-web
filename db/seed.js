const client = require('./index')
const {dropTables, createTables} = require('./initdb');
const {createCartItem, getCartItemsByUserId} = require('./cart')
const { createUser } = require('./users')
const {createProduct, getAllProducts, getOneProduct} = require('./products')
const {createCondition} = require('./condition')
const {createRarity, getAllRarities} = require('./rarity')
const {createOrderDetail, createOrderItem, getAllOrders} = require('./orders')
// should use classes for the seed data? probably not
// class pokemonCard = {
//     constructor(id, pokemonId, name, type, type1, type2, condition, rarity, img_url){
//         this.id = id;
//         this.pokemonId = pokemonId;
//         this.name = name;
//         this.type.type1 = type1;
//         this.type.type2 = type2;
//         this.condition = condition;
//         this.rarity = rarity;
//         this.img_url = img_url;
//     }
// }


// see  product data
// price is writted as 100.00 (with cents value)
const seedRarity = [{
    name: 'Common',
},
{
    name: 'Holo',
},
{
    name: 'Reverse Holo',
},
{
    name: 'Rainbow Rare',
}
]
const seedCondition = [
    {
        name: 'Fair'
    },
    {
        name: 'Good'
    },
    {
        name: 'Very Good'
    },

    {
        name: 'Near Mint'
    },
    {
        name: 'Mint'
    }

    
]
const seedProduct = [
    {
        id: 46,
        pokedexId: 708,
        name: "Phantump",
        cost: 9010.0,
        type1: "ghost",
        type2: "grass",
        condition: 2,
        rarity: 3,
        quantity: 41,
        img_url: "https://www.cardsbybrammers.com.au/assets/full/rhxyb054.jpg?20180107041825"
    },
    {
        id: 49,
        pokedexId: 52,
        name: "Meowth",
        cost: 8530.0,
        type1: "normal",
        type2: null,
        condition: 2,
        rarity: 1,
        quantity: 7,
        img_url: "https://i.ebayimg.com/images/g/QzwAAOSwifhefo0d/s-l640.jpg"
    },
    {
        id: 19,
        pokedexId: 20,
        name: "Raticate",
        cost: 5000.0,
        type1: "dark",
        type2: "normal",
        condition: 2,
        rarity: 1,
        quantity: 1,
        img_url: "https://m.media-amazon.com/images/I/51YVpIMtQSL._AC_.jpg"
    },
    {
        id: 3,
        pokedexId: 94,
        name: "Gastly",
        cost: 2599.0,
        type1: "psychic",
        type2: null,
        condition: 3,
        rarity: 3,
        quantity: 2,
        img_url: "https://m.media-amazon.com/images/I/51TIWx7DDIL._AC_.jpg"
    },
    {
        id: 14,
        pokedexId: 524,
        name: "Rogenrola",
        cost: 3990.0,
        type1: "rock",
        type2: null,
        condition:2,
        rarity: 1,
        quantity: 1,
        img_url: "https://m.media-amazon.com/images/I/51ZXBM0ddVL._AC_.jpg"
    },
    {
        id: 5,
        pokedexId: 144,
        name: "Articuno",
        cost: 5760.0,
        type1: "water",
        type2: "flying",
        condition: 1,
        rarity: 1,
        quantity: 2,
        img_url: "https://m.media-amazon.com/images/I/51PtkDlud4L._AC_.jpg"
    },
    {
        id: 39,
        pokedexId: 717,
        name: "Yveltal",
        cost: 3560.0,
        type1: "dark",
        type2: "flying",
        condition: 3,
        rarity: 1,
        quantity: 7,
        img_url: "https://www.cardsbybrammers.com.au/assets/full/pokemon-team-up095.png?1549416148"
    },
    {
        id: 6,
        pokedexId: 143,
        name: "Zapdos",
        cost: 4000.0,
        type1: "electric",
        type2: "flying",
        condition: 3,
        rarity: 1,
        quantity: 2,
        img_url: "https://m.media-amazon.com/images/I/51l4OIDKQSL._AC_.jpg"
    },
    {
        id: 8,
        pokedexId: 74,
        name: "Geodude",
        cost: 3980.0,
        type1: "fighting",
        type2: null,
        condition:5,
        rarity: 1,
        quantity: 3,
        img_url: "https://m.media-amazon.com/images/I/41DaseWiS4L._AC_.jpg"
    },
    {
        id: 11,
        pokedexId: 623,
        name: "Golurk",
        cost: 1110.0,
        type1: "ground",
        type2: "ghost",
        condition: 2,
        rarity: 1,
        quantity: 1,
        img_url: "https://m.media-amazon.com/images/I/51JKgaWf8hL._AC_.jpg"
    },
    {
        id: 12,
        pokedexId: 11,
        name: "Metapod",
        cost: 500.0,
        type1: "bug",
        type2: null,
        condition: 2,
        rarity: 1,
        quantity: 1,
        img_url: "https://m.media-amazon.com/images/I/511vS3mhjeL._AC_.jpg"
    },
    {
        id: 13,
        pokedexId: 149,
        name: "Dragonite",
        cost: 1200.0,
        type1: "dragon",
        type2: "flying",
        condition: 4,
        rarity: 1,
        quantity: 1,
        img_url: "https://m.media-amazon.com/images/I/A1aaGfGbpUL._AC_SY879_.jpg"
    },
    {
        id: 49,
        pokedexId: 52,
        name: "Galarian Meowth",
        cost: 1500.0,
        type1: "steel",
        type2: null,
        condition: 2,
        rarity: 2,
        quantity: 3,
        img_url: "https://den-cards.pokellector.com/301/Galarian-Meowth.S4A.285.36582.png"
    },
    {
        id: 1,
        pokedexId: 1,
        name: "Bulbasaur",
        cost: 1000.0,
        type1: "plant",
        type2: null,
        condition:1,
        rarity: 1,
        quantity: 10,
        img_url: "https://m.media-amazon.com/images/I/410qBt1e7LL._AC_.jpg",
    },
    {
        id: 15,
        pokedexId: 92,
        name: "Gastly",
        cost: 2500.0,
        type1: "ghost",
        type2: "poison",
        condition: 3,
        rarity: 3,
        quantity: 1,
        img_url: "https://m.media-amazon.com/images/I/51-F+NSJ4rL._AC_.jpg"
    },
    {
        id: 9,
        pokedexId: 799,
        name: "Guzzlord",
        cost: 5440.0,
        type1: "dark",
        type2: "psychic",
        condition: 3,
        rarity: 1,
        quantity: 1,
        img_url: "https://m.media-amazon.com/images/I/51fJUJhWNBL._AC_.jpg"
    },
    {
        id: 2,
        pokedexId: 7,
        name: "Squirtle",
        cost: 1500.0,
        type1: "water",
        type2: null,
        condition: 2,
        rarity: 1,
        quantity: 4,
        img_url: "https://m.media-amazon.com/images/I/51TxlvrsoBL._AC_.jpg",
    },
    {
        id: 16,
        pokedexId: 532,
        name: "Timburr",
        cost: 8500.0,
        type1: "fighting",
        type2: "fighting",
        condition: 2,
        rarity: 1,
        quantity: 1,
        img_url: "https://m.media-amazon.com/images/I/71m5Hk24e5L._AC_SY879_.jpg"
    },
    {
        id: 47,
        pokedexId: 52,
        name: "Meowth",
        cost: 9760.0,
        type1: "normal",
        type2: null,
        condition: 2,
        rarity: 1,
        quantity: 6,
        img_url: "https://www.pkmncollectors.com/images/cards/pokemon-meowth-burning-shadows-101-card.jpg"
    },
    {
        id: 20,
        pokedexId: 20,
        name: "Lt. Surge Raticate",
        cost: 5970.0,
        type1: "normal",
        type2: null,
        condition: 3,
        rarity: 1,
        quantity: 1,
        img_url: "https://m.media-amazon.com/images/I/51zRqAgIeRL._AC_.jpg"
    },
    {
        id: 10,
        pokedexId: 782,
        name: "Jangmo-o",
        cost: 1011.0,
        type1: "dragon",
        type2: "electric",
        condition: 4,
        rarity: 1,
        quantity: 2,
        img_url: "https://m.media-amazon.com/images/I/51Xd8iVTl7L._AC_.jpg"
    },
    {
        id: 21,
        pokedexId: 20,
        name: "Dark Raticate",
        cost: 1500.0,
        type1: "normal",
        type2: null,
        condition: 5,
        rarity: 1,
        quantity: 1,
        img_url: "https://m.media-amazon.com/images/I/41inYuyVJLL._AC_.jpg"
    },
    {
        id: 18,
        pokedexId: 20,
        name: "Raticate",
        cost: 5000.0,
        type1: "normal",
        type2: "normal",
        condition: 3,
        rarity: 3,
        quantity: 1,
        img_url: "https://m.media-amazon.com/images/I/51l6AzFprBL._AC_.jpg"
    },
    {
        id: 22,
        pokedexId: 6,
        name: "Charizard VMax",
        cost: 1276.0,
        type1: "fire",
        type2: "flying",
        condition: 5,
        rarity: 4,
        quantity: 1,
        img_url: "https://media.karousell.com/media/photos/products/2020/11/8/charizard_vmax_rainbow_rare_se_1604849818_8a5c7508_progressive.jpg"
    },
    {
        id: 17,
        pokedexId: 20,
        name: "Raticate",
        cost: 2450.0,
        type1: "normal",
        type2: null,
        condition: 4,
        rarity: 1,
        quantity: 1,
        img_url: "https://m.media-amazon.com/images/I/51RzedXZWcL._AC_.jpg"
    },
    {
        id: 24,
        pokedexId: 237,
        name: "Hitmontop",
        cost: 4398.0,
        type1: "fighting",
        type2: null,
        condition: 2,
        rarity: 1,
        quantity: 2,
        img_url: "https://i.etsystatic.com/23915599/r/il/8f0d68/2430542365/il_794xN.2430542365_n7js.jpg"
    },
    {
        id: 27,
        pokedexId: 380,
        name: "Latios",
        cost: 1000.0,
        type1: "dragon",
        type2: "psychic",
        condition: 4,
        rarity: 1,
        quantity: 1,
        img_url: "https://pkmncards.com/wp-content/uploads/en_US-Promo_HGSS-HGSS11-latios.jpg"
    },
    {
        id: 23,
        pokedexId: 197,
        name: "Umbreon GX",
        cost: 9055.0,
        type1: "dark",
        type2: null,
        condition: 5,
        rarity: 3,
        quantity: 100,
        img_url: "https://i.ebayimg.com/images/g/kVMAAOSweSxe~dOQ/s-l640.jpg"
    },
    {
        id: 7,
        pokedexId: 653,
        name: "Fennekin",
        cost: 1690.0,
        type1: "fire",
        type2: null,
        condition: 4,
        rarity: 2,
        quantity: 3,
        img_url: "https://m.media-amazon.com/images/I/51Jr8J1R2-L._AC_.jpg"
    },
    {
        id: 30,
        pokedexId: 577,
        name: "Solosis",
        cost: 8500.0,
        type1: "psychic",
        type2: null,
        condition: 3,
        rarity: 3,
        quantity: 77,
        img_url: "https://crystal-cdn4.crystalcommerce.com/photos/943064/073rh.jpg"
    },
    {
        id: 26,
        pokedexId: 590,
        name: "Foongus",
        cost: 3980.0,
        type1: "grass",
        type2: "poison",
        condition: 3,
        rarity: 3,
        quantity: 5,
        img_url: "https://assets.listia.com/photos/ebab43089390f92b9b74/original.png?s=320x320m&sig=2bd0cfd16260e8b2&ts=1619988779"
    },
    {
        id: 33,
        pokedexId: 643,
        name: "Reshiram",
        cost: 2095.0,
        type1: "dragon",
        type2: "fire",
        condition: 2,
        rarity: 3,
        quantity: 8,
        img_url: "https://i.pinimg.com/originals/82/d9/6e/82d96e05554eb2dd0b13081b4e240ba7.jpg"
    },
    {
        id: 45,
        pokedexId: 19,
        name: "Rattata",
        cost: 1101.0,
        type1: "normal",
        type2: null,
        condition: 3,
        rarity: 3,
        quantity: 4,
        img_url: "https://crystal-cdn3.crystalcommerce.com/photos/6293643/pkm_xyev_066rev.jpg"
    },
    {
        id: 34,
        pokedexId: 708,
        name: "Phantump",
        cost: 2000.0,
        type1: "ghost",
        type2: "grass",
        condition: 1,
        rarity: 1,
        quantity: 11,
        img_url: "https://cdn.shopify.com/s/files/1/1715/6019/products/Phantump_903da29c-911c-4ec7-8539-62aeecf416ac_1600x.jpg?v=1596635696"
    },
    {
        id: 25,
        pokedexId: 237,
        name: "Hitmontop",
        cost: 4398.0,
        type1: "fighting",
        type2: null,
        condition: 2,
        rarity: 1,
        quantity: 2,
        img_url: "https://i.etsystatic.com/23915599/r/il/8f0d68/2430542365/il_794xN.2430542365_n7js.jpg"
    },
    {
        id: 38,
        pokedexId: 146,
        name: "Moltres",
        cost: 3560.0,
        type1: "fire",
        type2: "flying",
        condition: 4,
        rarity: 1,
        quantity: 1,
        img_url: "https://www.mypokecard.com/my/galery/VaCBJ3IKMLDx.jpg"
    },
    {
        id: 40,
        pokedexId: 588,
        name: "Karrablast",
        cost: 1990.0,
        type1: "bug",
        type2: null,
        condition: 2,
        rarity: 1,
        quantity: 4,
        img_url: "https://images.pokemontcg.io/sm11/12_hires.png"
    },
    {
        id: 35,
        pokedexId: 43,
        name: "Oddish",
        cost: 2000.0,
        type1: "grass",
        type2: "poison",
        condition: 5,
        rarity: 1,
        quantity: 50,
        img_url: "https://i.ebayimg.com/images/g/dRcAAOSwRkhe28Iv/s-l640.jpg"
    },
    {
        id: 41,
        pokedexId: 826,
        name: "Orbeetle",
        cost: 3990.0,
        type1: "bug",
        type2: "psychic",
        condition: 3,
        rarity: 1,
        quantity: 10,
        img_url: "https://crystal-cdn1.crystalcommerce.com/photos/6546284/pku_swsh_19.jpg"
    },
    {
        id: 36,
        pokedexId: 708,
        name: "Phantump",
        cost: 1200.0,
        type1: "ghost",
        type2: "grass",
        condition: 4,
        rarity: 3,
        quantity: 5,
        img_url: "https://www.cardsbybrammers.com.au/assets/full/rhxyb054.jpg?20180107041825"
    },
    {
        id: 42,
        pokedexId: 10,
        name: "Caterpie",
        cost: 990.0,
        type1: "bug",
        type2: null,
        condition: 5,
        rarity: 1,
        quantity: 100,
        img_url: "https://i.pinimg.com/originals/23/c0/1c/23c01c0e4cd4fc9e045f9f43279050da.jpg"
    },
    {
        id: 43,
        pokedexId: 253,
        name: "Grovyle",
        cost: 1300.0,
        type1: "grass",
        type2: null,
        condition: 4,
        rarity: 3,
        quantity: 9,
        img_url: "https://i.ebayimg.com/images/g/IBcAAOSwgrlgJuda/s-l640.jpg"
    },
    {
        id: 44,
        pokedexId: 19,
        name: "Rattata",
        cost: 490.0,
        type1: "normal",
        type2: null,
        condition: 1,
        rarity: 1,
        quantity: 1,
        img_url: "https://i.ebayimg.com/images/g/7AsAAOSwXMNdPkKY/s-l640.jpg"
    },
    {
        id: 47,
        pokedexId: 19,
        name: "Alolan Rattata",
        cost: 9900.0,
        type1: "dark",
        type2: "normal",
        condition: 5,
        rarity: 1,
        quantity: 4,
        img_url: "https://images.pokemontcg.io/sm7/84_hires.png"
    },
    {
        id: 48,
        pokedexId: 52,
        name: "Alolan Meowth",
        cost: 5000.0,
        type1: "dark",
        type2: null,
        condition: 3,
        rarity: 1,
        quantity: 66,
        img_url: "https://www.cardsbybrammers.com.au/assets/full/400051.jpg?20171220044353"
    },
    {
        id: 4,
        pokedexId: 150,
        name: "Mewto",
        cost: 1500.0,
        type1: "psychic",
        type2: null,
        condition: 4,
        rarity: 1,
        quantity: 2,
        img_url: "https://m.media-amazon.com/images/I/51QO4llkk7L._AC_.jpg"
    },
    {
        id: 31,
        pokedexId: 577,
        name: "Solosis",
        cost: 1850.0,
        type1: "psychic",
        type2: null,
        condition: 5,
        rarity: 3,
        quantity: 7,
        img_url: "https://i.ebayimg.com/images/g/sm8AAOSw1DtXKSl8/s-l640.jpg"
    },

]

// for condition === 1=fair, 2=good, 3=very good 4=near mint, 5=mint
// for rarity === 1=normal 2=holo 3=reverse holo 4=rainbow rare

const seedUsers = [
    {
        username: "fastAndy",
        firstName: "Andrew",
        lastName: "Smith",
        emailAddress: "a_wallenberg@yahoo.org",
        password: "iHa8PoekMen",
        address: {
            addressLine1: "150 Wallenberg Way",
            addressLine2: "Apt 2",
            city: "Orlando",
            state: "FL",
            zip: 90956,
        },
        cart: {
            products: [1, 2, 3] // references productNumber
        },
        isAdmin: true, //user role, admin role?
    },
    {
        username: "JAllen",
        firstName: "Jennifer",
        lastName: "Allensborough",
        emailAddress: "jborough@hotmail.gov",
        password: "What1nTheWorld.!",
        address: {
            addressLine1: "1250 Sidways Drive",
            addressLine2: null,
            city: "Allentown",
            state: "WV",
            zip: 40740,
        },
        cart: {
            products: [8] // references productNumber
        },
    },
    {
        username: "JOKER-D",
        firstName: "Devonte",
        lastName: "Jochik",
        emailAddress: "theJoker45@gmail.comp",
        password: "theJokerIsBack123",
        address: {
            addressLine1: "18750 County Line Road 45",
            addressLine2: null,
            city: "Second Junction",
            state: "OH",
            zip: 60556,
        },
        cart: {
            products: [] // references productNumber
        },
    },
    {
        username: "HorsePerson",
        firstName: "Sarah",
        lastName: "Jessica-Parker",
        emailAddress: "horseface2001@hotmail.web",
        password: "oneletters",
        address: {
            addressLine1: "300 West 42nd Street",
            addressLine2: "Unit 203",
            city: "New York",
            state: "NY",
            zip: 12042,
        },
        cart: {
            products: [1, 2, 3, 4, 5, 6, 7, 8, 9] // references productNumber
        },
    },
    {
        username: "The1",
        firstName: "Neo",
        lastName: null,
        emailAddress: "the0ne@matrix.dev",
        password: "passw0rd123!",
        address: {
            addressLine1: "Edge of the Way Lane",
            addressLine2: null,
            city: "Las Vegas",
            state: "NV",
            zip: 70707,
        },
        cart: {
            products: [1] // references productNumber
        },
    },
    {
        username: "MrAnderson",
        firstName: "Mr",
        lastName: "Anderson",
        emailAddress: "thedirector@email.net",
        password: "Thi1sPasswordRocks@",
        address: {
            addressLine1: null,
            addressLine2: null,
            city: null,
            state: null,
            zip: null,
        },
        cart: {
            products: [5] // references productNumber
        },
    },
    {
        username: "NicDaQuick",
        firstName: "Nicholas",
        lastName: "Worffen-Styme",
        emailAddress: "not1that2wharf3@aol.org",
        password: "password1234password",
        address: {
            addressLine1: "1204 Center Circle",
            addressLine2: null,
            city: "White Fish",
            state: "ID",
            zip: 78430,
        },
        cart: {
            products: [1, 9] // references productNumber
        },
    }
]

const insertPoductCondition = async() => {
    await Promise.all(seedCondition.map((condition) => {
         createCondition(condition.name)
    }))
}


const insertProductsIntoBd = async () => {
    await Promise.all(seedProduct.map((product) => 
         createProduct({
            pokedexId: product.pokedexId,
            name: product.name,
            price: product.cost,
            type1: product.type1,
            type2: product.type1,
            condition:product.condition,
            rarity:product.rarity,
            quantity: product.quantity,
            imageUrl: product.img_url
        })
    ))
}

const insertRarities = async() => {
    await Promise.all(seedRarity.map(rare=>
         createRarity(rare.name)
        ))
}

const insertUsersIntoDB = async() => {
     await Promise.all(seedUsers.map(user => 
           createUser(user)
    ))
    console.log('done inserting seed users');
};
const createOrders = async () => {
    await createOrderDetail ({
    address: "New York 124 Mexico", 
    orderTotal: 222,
    userId: 1,
    date: 'Sun Dec 17 1995 03:24:00 GMT-0600 (Central Standard Time)',
    zip: 1004,
    city: 'New Orleans',
    state: 'Louisiana'
})
await createOrderDetail ({
    address: "New York 124 Mexico", 
    orderTotal: 10,
    userId: 1,
    date: 'Sun Seo 20 1995 03:24:00 GMT-0600 (Central Standard Time)',
    zip: 1004,
    city: 'New Orleans',
    state: 'Louisiana'
})
await createOrderDetail ({
    address: '12345 Lousiana', 
    orderTotal: 120,
    userId: 2,
    date: 'Sun Sep 1 1995 03:24:00 GMT-0600 (Central Standard Time)',
    zip: 1004,
    city: 'New Orleans',
    state: 'Louisiana'
})
}
const createOrderItemss = async() => {
    await createOrderItem ({
        order_id: 1,
        product_id: 1,
        quantity: 4
    })
    await createOrderItem ({
        order_id: 1,
        product_id: 2,
        quantity: 1
    })


    await createOrderItem ({
        order_id: 2,
        product_id: 3,
        quantity: 1
    })
    await createOrderItem ({
        order_id: 2,
        product_id: 4,
        quantity: 13
    })
    await createOrderItem ({
        order_id: 3,
        product_id: 4,
        quantity: 13
    })
}


const rebuildDB = async () => {
    
     await dropTables();
     await createTables();
     await insertUsersIntoDB()
     await insertPoductCondition();
     await insertRarities();
     await insertProductsIntoBd ();
     
     
     
    await createOrders();
    await createOrderItemss();
    await getAllOrders(1)
}
client.connect();
// close client, client.end()
rebuildDB().catch(console.error).finally(() => client.end())

