
let ShoeFactory = function (shoesData) {

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
    return {

        getShoes,

    }

};