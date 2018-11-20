
//FASE 1


var nomArray = ["A", "N", "I", "O", "L", " ", "G", "O", "M", "E", "Z", " ", "J", "A", "R", "Q", "U", "E"];
var numLletres = 0;


function mostrarNom() {
    var i = 0;
    var nomString = "";

    for (i = 0; i < nomArray.length; i++) {

        if (nomArray[i] != " ") {
            nomString += nomArray[i];
            numLletres++;
        } else {
            nomString += nomArray[i];
        }
    }

    return nomString;
}

console.log("El nom " + mostrarNom() + " conté " + numLletres + " lletres.");



