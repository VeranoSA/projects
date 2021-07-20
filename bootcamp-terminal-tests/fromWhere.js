module.exports = function fromWhere(carReg){
      switch(carReg) {
        case 'CA':
            return 'Cape Town';
    	case 'CY':
            return 'Bellville';
        case 'CJ':
            return 'Paarl';
      	default:
			return 'Some other place!';
    }
}
