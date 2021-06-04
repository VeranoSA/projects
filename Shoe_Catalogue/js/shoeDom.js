let localShoes = JSON.parse(localStorage.getItem('shoesData'));

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
        id: 0,
        qty: 10,
        size: 5,
        "img-link": "img/le coq black.jpg"
    },
    {
        brand: "Le Coq",
        color: "White",
        price: 1300,
        id: 0,
        qty: 10,
        size: 5,
        "img-link": "img/le coq white.jpg"
    },
    {
        brand: "Le Coq",
        color: "Blue",
        price: 1200,
        id: 0,
        qty: 10,
        size: 5,
        "img-link": "img/le coq blue.jpg"
    },
    {
        brand: "Le Coq",
        color: "Green",
        price: 1300,
        id: 0,
        qty: 10,
        size: 5,
        "img-link": "img/le coq green.jpg"
    },
    {
        brand: "Adidas",
        color: "Black",
        price: 999,
        id: 0,
        qty: 10,
        size: 5,
        "img-link": "img/adidas black.jpg"
    },
    {
        brand: "Adidas",
        color: "White",
        price: 999,
        id: 1,
        qty: 10,
        size: 5,
        "img-link": "img/adidas white.jpg"
    },
    {
        brand: "Adidas",
        color: "Red",
        price: 999,
        id: 2,
        qty: 10,
        size: 5,
        "img-link": "img/adidas red.jpg"
    },
    {
        brand: "Adidas",
        color: "Orange",
        price: 1700,
        id: 3,
        qty: 10,
        size: 5,
        "img-link": "img/adidas orange.jpg"
    },
    {
        brand: "Adidas",
        color: "Grey",
        price: 999,
        id: 4,
        qty: 10,
        size: 5,
        "img-link": "img/adidas grey.jpg"
    },
    {
        brand: "Nike",
        color: "Grey",
        price: 999,
        id: 5,
        qty: 10,
        size: 5,
        "img-link": "img/nike grey.jpg"
    },
    {
        brand: "Nike",
        color: "Pink",
        price: 1500,
        id: 6,
        qty: 10,
        size: 5,
        "img-link": "img/nike pink.jpg"
    },
    {
        brand: "Nike",
        color: "Blue",
        price: 999,
        id: 7,
        qty: 10,
        size: 5,
        "img-link": "img/nike blue.jpg"
    },
    {
        brand: "Nike",
        color: "Yellow",
        price: 1500,
        id: 8,
        qty: 10,
        size: 5,
        "img-link": "img/nike yellow.jpg"
    },
    {
        brand: "Nike",
        color: "Black",
        price: 999,
        id: 9,
        qty: 10,
        size: 5,
        "img-link": "img/nike black.jpg"
    },
]
let shoes;
if (localShoes) {
    console.log('found catalogue on local storage')
    shoes = ShoeFactory(localShoes);
} else {
    console.log('using defualt catalogue')
    shoes = ShoeFactory(shoesArray);
}


let displayShoes = function (shoesToDisplay) {
    let shoesData = {};
    shoesData['shoes'] = shoesToDisplay.reverse()
    var shoesDataElement = document.getElementById("shoesArea");
    var shoesDataTemplateSource = document.getElementById("shoesTemplate").innerHTML;
    var shoesTemplate = Handlebars.compile(shoesDataTemplateSource);
    var shoesHTML = shoesTemplate(shoesData);
    shoesDataElement.innerHTML = shoesHTML;
};

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