
//FASE 2


var nomArray = ["A", "N", "I", "O", "L", "5",];
var vocals = ["A", "E", "I", "O", "U"];



function identificarLletres() {
    var i;
    var nomString = "";
    for (i = 0; i < nomArray.length; i++) {
        
        if (vocals.indexOf(nomArray[i]) != -1 && isNaN(nomArray[i]) == true){
            nomString += nomArray[i] + " - vocal, ";
        
        } else if (vocals.indexOf(nomArray[i]) == -1 && isNaN(nomArray[i]) == true) {
            nomString += nomArray[i] + " - consonant, ";
        
        } else {
            nomString = "Els noms de persones no contenen números!";
            i = nomArray.length;
        }
    }

    return nomString;
}

console.log(identificarLletres());




/*--------------------------------------------*/

//retorna la posició de les vocals en un array
/*
var nomArray = ["A", "N", "I", "O", "L", " ", "G", "O", "M", "E", "Z", " ", "J", "A", "R", "Q", "U", "E"];
var vocals = ["A", "E", "I", "O", "U"];
var numLletres = 0;
var i;
var nomString = "";
var indexsVocals = [];
var lastIndex = 0;



for (i = 0; i < vocals.length; i++) {
    var iVocal = 0;
    while (iVocal != -1) {
        iVocal = nomArray.indexOf(vocals[i], lastIndex);
        lastIndex = iVocal + 1;
        if (iVocal != -1) {
            indexsVocals.push(iVocal);
        }
    }
}



console.log(indexsVocals);
*/