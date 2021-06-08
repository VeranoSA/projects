
let ShoeFactory = function (shoesData) {
    
// ============================== ALLOWS US TO FILTER ================================//
    let getShoes = function (specs) {

        if (!specs.id) {
            localStorage.setItem('specs', JSON.stringify(specs));
        }
        let filteredShoes = shoesData.filter(function (shoe) {
            let objectKeys = Object.keys(specs);
            let holding = 0;
            for (let i = 0; i < objectKeys.length; i++) {
                holding += (shoe[objectKeys[i]] == specs[objectKeys[i]])
            };
            if (holding == objectKeys.length) {
                return true
            };
        });
        return filteredShoes;
    };


// ============================================= ADD TO CART ====================================================== //
    let addToCart = function (item) {
        let tmpCart = JSON.parse(localStorage.getItem('cart')) || [];
        let shoeToAdd = getShoes({
            id: item
        });


        if (!tmpCart.some(function (shoe) {
                return shoe.id === shoeToAdd[0].id;
            })) {
            if (shoeToAdd[0].qty > 0) {
                shoeToAdd[0].qty--;
                tmpCart.push(shoeToAdd[0]);
                localStorage.setItem('shoesData', JSON.stringify(shoesData));
                localStorage.setItem('cart', JSON.stringify(tmpCart));
            };

        };

    };
    return {

        getShoes,
        addToCart

    }

};