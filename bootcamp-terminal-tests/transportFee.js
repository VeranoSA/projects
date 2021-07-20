module.exports = function transportFee(route){
    switch(route) {
        case 'morning':
            return 'R20';
        case 'afternoon':
            return 'R10';
        case 'nightshift':
            return 'free';
    }
}
