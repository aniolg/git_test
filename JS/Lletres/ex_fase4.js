
//FASE 4
 

var name = ["A", "N", "I", "O", "L"];
var surname = ["G", "O", "M", "E", "Z"];

var fullName = [];

function addFullName(lletra){
    fullName.push(lletra);
}

function linkFullName(arrayA,arrayB) {

    for (i = 0; i < arrayA.length; i++) {
        addFullName(arrayA[i]);
    }

    addFullName(" ");

    for (i = 0; i < arrayB.length; i++) {
        addFullName(arrayB[i]);
    }

    return fullName;
}

console.log(linkFullName(name,surname));
