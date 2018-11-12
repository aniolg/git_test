
//FASE 4
 

var name = ["A", "N", "I", "O", "L"];
var surname = ["G", "O", "M", "E", "Z"];

function linkFullName() {
    var fullName = [];

    for (i = 0; i < name.length; i++) {
        fullName.push(name[i]);
    }

    fullName.push(" ");

    for (i = 0; i < surname.length; i++) {
        fullName.push(surname[i]);
    }

    return fullName;
}

console.log(linkFullName());
