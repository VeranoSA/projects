let localShoes = JSON.parse(localStorage.getItem('shoesData'));

//=========================SHOE OBJECT=============================

let shoesArray = [
    {
        brand: "Le Coq",
        color: "Grey",
        price: 1200,
        id: 0,
        qty: 10,
        size: 5,
        "img-link": "img/le coq grey.jpg"
    },
    {
        brand: "Le Coq",
        color: "Black",
        price: 1200,
        id: 1,
        qty: 10,
        size: 5,
        "img-link": "img/le coq black.jpg"
    },
    {
        brand: "Le Coq",
        color: "White",
        price: 1300,
        id: 2,
        qty: 10,
        size: 6,
        "img-link": "img/le coq white.jpg"
    },
    {
        brand: "Le Coq",
        color: "Blue",
        price: 1200,
        id: 3,
        qty: 10,
        size: 6,
        "img-link": "img/le coq blue.jpg"
    },
    {
        brand: "Le Coq",
        color: "Green",
        price: 1300,
        id: 4,
        qty: 10,
        size: 7,
        "img-link": "img/le coq green.jpg"
    },
    {
        brand: "Adidas",
        color: "Black",
        price: 999,
        id: 5,
        qty: 10,
        size: 8,
        "img-link": "img/adidas black.jpg"
    },
    {
        brand: "Adidas",
        color: "White",
        price: 999,
        id: 6,
        qty: 10,
        size: 9,
        "img-link": "img/adidas white.jpg"
    },
    {
        brand: "Adidas",
        color: "Red",
        price: 999,
        id: 7,
        qty: 10,
        size: 10,
        "img-link": "img/adidas red.jpg"
    },
    {
        brand: "Adidas",
        color: "Orange",
        price: 1700,
        id: 8,
        qty: 10,
        size: 11,
        "img-link": "img/adidas orange.jpg"
    },
    {
        brand: "Adidas",
        color: "Grey",
        price: 1650,
        id: 9,
        qty: 10,
        size: 12,
        "img-link": "img/adidas grey.jpg"
    },
    {
        brand: "Nike",
        color: "Grey",
        price: 1700,
        id: 10,
        qty: 10,
        size: 5,
        "img-link": "img/nike grey.jpg"
    },
    {
        brand: "Nike",
        color: "Pink",
        price: 1500,
        id: 11,
        qty: 14,
        size: 9,
        "img-link": "img/nike pink.jpg"
    },
    {
        brand: "Nike",
        color: "Blue",
        price: 999,
        id: 12,
        qty: 10,
        size: 8,
        "img-link": "img/nike blue.jpg"
    },
    {
        brand: "Nike",
        color: "Yellow",
        price: 1500,
        id: 13,
        qty: 10,
        size: 7,
        "img-link": "img/nike yellow.jpg"
    },
    {
        brand: "Nike",
        color: "Black",
        price: 999,
        id: 14,
        qty: 12,
        size: 5,
        "img-link": "img/nike black.jpg"
    },
    {
        brand: "Puma",
        color: "Blue",
        price: 1500,
        id: 14,
        qty: 10,
        size: 11,
        "img-link": "img/puma blue.jpg"
    },
    {
        brand: "Puma",
        color: "Pink",
        price: 1999,
        id: 14,
        qty: 10,
        size: 6,
        "img-link": "img/puma pink.jpg"
    },
    {
        brand: "Puma",
        color: "Purple",
        price: 1900,
        id: 14,
        qty: 10,
        size: 5,
        "img-link": "img/puma purple.jpg"
    },
    {
        brand: "Puma",
        color: "White",
        price: 1900,
        id: 14,
        qty: 20,
        size: 6,
        "img-link": "img/puma white.jpg"
    },
    {
        brand: "Puma",
        color: "Multicolour",
        price: 1200,
        id: 14,
        qty: 10,
        size: 7,
        "img-link": "img/puma multicolour.jpg"
    },
    {
        brand: "Fila",
        color: "White",
        price: 1500,
        id: 14,
        qty: 10,
        size: 6,
        "img-link": "img/fila white.jpg"
    },
    {
        brand: "Fila",
        color: "Grey",
        price: 1700,
        id: 14,
        qty: 10,
        size: 8,
        "img-link": "img/fila grey.jpg"
    },
    {
        brand: "Fila",
        color: "Pink",
        price: 1900,
        id: 14,
        qty: 25,
        size: 9,
        "img-link": "img/fila pink.jpg"
    },
    {
        brand: "Fila",
        color: "White",
        price: 1200,
        id: 14,
        qty: 14,
        size: 5,
        "img-link": "img/fila white 2.jpg"
    },
    
    {
        brand: "Fila",
        color: "Black",
        price: 1600,
        id: 14,
        qty: 10,
        size: 5,
        "img-link": "img/fila black.jpg"
    },
]
let shoes;
if (localShoes) {
    //console.log('found catalogue on local storage')
    shoes = ShoeFactory(localShoes);
} else {
    //console.log('using defualt catalogue')
    shoes = ShoeFactory(shoesArray);
}

//==========================TEMPLATE COMPILATION=========================//
let displayShoes = function (shoesToDisplay) {
    let shoesData = {};
    shoesData['shoes'] = shoesToDisplay.reverse()
    var shoesDataElement = document.getElementById("shoesArea");
    var shoesDataTemplateSource = document.getElementById("shoesTemplate").innerHTML;
    var shoesTemplate = Handlebars.compile(shoesDataTemplateSource);
    var shoesHTML = shoesTemplate(shoesData);
    shoesDataElement.innerHTML = shoesHTML;
};

//===========================SEARCH BUTTON===============================//
let searchBtnElement = document.getElementById('searchButton');

searchBtnElement.addEventListener('click', function search() {
    let shoeBrand = document.getElementById('shoeBrand').value;
    let shoeColor = document.getElementById('shoeColor').value;
    let shoeSize = document.getElementById('shoeSize').value;
    let specs = {};
    try {
        if (shoeBrand !== 'null') {
            specs.brand = shoeBrand
        }
        if (shoeColor !== 'null') {
            specs.color = shoeColor
        }
        if (shoeSize !== 'null') {
            specs.size = shoeSize
        }
    } finally {
        displayShoes(shoes.getShoes(specs));
    }

});