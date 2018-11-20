
//FASE 3


var lletresArray = ["A", "N", "I", "O", "L", " ", "G", "O", "M", "E", "Z", " ", "J", "A", "R", "Q", "U", "E"];

function comptarLletres() {
    var lletresMap = new Map();
    var i;


    for (i = 0; i < lletresArray.length; i++) {

        if (lletresMap.has(lletresArray[i]) == true) {
            lletresMap.set(lletresArray[i], lletresMap.get(lletresArray[i]) + 1);
        } else {
            lletresMap.set(lletresArray[i], 1)
        }
    }

    return lletresMap;
}

console.log(comptarLletres());



/*--------------------------------------------*/

//Utilitzatnt boolean
/*
var lletresArray = ["A", "N", "I", "O", "L", " ", "G", "O", "M", "E", "Z", " ", "J", "A", "R", "Q", "U", "E"];



function comptarLletres() {
    var lletresMap = new Map();
    var i = 0;

    
    for (i = 0; i < lletresArray.length; i++) {

        var afegirLletra = true;

        for (var [lletra, valor] of lletresMap) {
            if (lletresArray[i] == lletra) {
                lletresMap.set(lletresArray[i], valor + 1);
                afegirLletra = false;
            }
        }

        for (var [lletra, valor] of lletresMap){}
        if (afegirLletra == true) {
            lletresMap.set(lletresArray[i], 1)
        }
    }

    return lletresMap;
}

console.log(comptarLletres());
*/