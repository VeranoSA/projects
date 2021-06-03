let localShoes = JSON.parse(localStorage.getItem('shoesData'));

let shoesArray = [{
        brand: "Adidas",
        color: "Black",
        price: 999,
        id: 0,
        qty: 10,
        size: 5,
        "img-link": "img/adidas black.jpeg"
    },
    {
        brand: "Adidas",
        color: "White",
        price: 999,
        id: 1,
        qty: 10,
        size: 5,
        "img-link": "img/adidas white.jpeg"
    },
    {
        brand: "Adidas",
        color: "Green",
        price: 999,
        id: 1,
        qty: 10,
        size: 5,
        "img-link": "img/adidas green.jpeg"
    },
    {
        brand: "Adidas",
        color: "Pink",
        price: 999,
        id: 1,
        qty: 10,
        size: 5,
        "img-link": "img/adidas blue.jpeg"
    },
    {
        brand: "Gucci",
        color: "Blue",
        price: 999,
        id: 1,
        qty: 10,
        size: 5,
        "img-link": "img/gucci blue.jpg"
    },
    {
        brand: "Gucci",
        color: "Black",
        price: 999,
        id: 1,
        qty: 10,
        size: 5,
        "img-link": "img/gucci black.jpg"
    }
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