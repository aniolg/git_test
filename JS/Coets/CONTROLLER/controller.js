//Accelerar 3 cops
for (var i = 0; i < 3; i++) {
    rockets[0].accelerate();
    rockets[1].accelerate();
}
rockets[0].getActualVelocity();
rockets[1].getActualVelocity();
//alert (`Velocitat coet ${rockets[0].id}: ${rockets[0].actualVelocity} || Velocitat coet ${rockets[1].id}: ${rockets[1].actualVelocity}`);
//Frena 5 cops
for (var i = 0; i < 5; i++) {
    rockets[0].slowDown();
    rockets[1].slowDown();
}
rockets[0].getActualVelocity();
rockets[1].getActualVelocity();
//alert (`Velocitat coet ${rockets[0].id}: ${rockets[0].actualVelocity} || Velocitat coet ${rockets[1].id}: ${rockets[1].actualVelocity}`);
//Accelerar 15 cops
for (var i = 0; i < 15; i++) {
    rockets[0].accelerate();
    rockets[1].accelerate();
}
rockets[0].getActualVelocity();
rockets[1].getActualVelocity();
//alert (`Velocitat coet ${rockets[0].id}: ${rockets[0].actualVelocity} || Velocitat coet ${rockets[1].id}: ${rockets[1].actualVelocity}`);
function listRockets() {
    var rocketsList = "<ul class=\"list-group\">";
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].checkedId != rockets[i].id) {
            rocketsList +=
                "<li class=\"list-group-item list-group-item-warning\">\n                <i class=\"fas fa-exclamation-triangle\"></i> \n                " + rockets[i].checkedId + "\n                </li>";
        }
        else {
            rocketsList +=
                "<li class=\"list-group-item\">\n                <p><i class=\"fas fa-space-shuttle fa-rotate-270\"></i> \n                El coet " + rockets[i].id + " te " + rockets[i].numDrives + " propulsors:</p>";
            for (var j = 0; j < rockets[i].drives.length; j++) {
                if (rockets[i].drives[j].actualPower == rockets[i].drives[j].maxPower) {
                    rocketsList += " \n                        <p class=\"badge badge-secondary\">\n                        <i class=\"fas fa-battery-full\"></i>\n                        Pact: " + rockets[i].drives[j].actualPower + " (Pmax:" + rockets[i].drives[j].maxPower + ")</p>\n                        ";
                }
                else if (rockets[i].drives[j].actualPower == 0) {
                    rocketsList += " \n                        <p class=\"badge badge-secondary\">\n                        <i class=\"fas fa-battery-empty\"></i>\n                        Pact: " + rockets[i].drives[j].actualPower + " (Pmax:" + rockets[i].drives[j].maxPower + ")</p>\n                        ";
                }
                else {
                    rocketsList += " \n                        <p class=\"badge badge-secondary\">\n                        <i class=\"fas fa-battery-half\"></i>\n                        Pact: " + rockets[i].drives[j].actualPower + " (Pmax:" + rockets[i].drives[j].maxPower + ")</p>\n                        ";
                }
            }
            rockets[i].getActualVelocity();
            rocketsList += "\n                <span class=\"badge badge-pill badge-primary\">\n                <i class=\"fas fa-stopwatch\"></i>\n                Velocitat: " + rockets[i].actualVelocity + "\n                </span></li>";
        }
    }
    rocketsList += "</ul>";
    return rocketsList;
}
function loadContent() {
    document.getElementById("div_coets").innerHTML = listRockets();
}
var iFormDrive = 2;
function addFormDrive() {
    var contentDriveForm = "\n    \n    <H6>Propulsor " + iFormDrive + "</H6>\n    <div class=\"btn-group btn-group-toggle from_drive\" data-toggle=\"buttons\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">Pot\u00E8ncia M\u00E0xima</span>\n    </div>\n    <label class=\"btn btn-outline-primary active\">\n        <input type=\"radio\" name=\"potencia\" value=\"10\" autocomplete=\"off\" checked>10\n    </label>\n    <label class=\"btn btn-outline-primary\">\n        <input type=\"radio\" name=\"potencia\" value=\"20\" autocomplete=\"off\">20\n    </label>\n    <label class=\"btn btn-outline-primary\">\n        <input type=\"radio\" name=\"potencia\" value=\"30\" autocomplete=\"off\">30\n    </label>\n    <label class=\"btn btn-outline-primary\">\n        <input type=\"radio\" name=\"potencia\" value=\"40\" autocomplete=\"off\">40\n    </label>\n    <label class=\"btn btn-outline-primary\">\n        <input type=\"radio\" name=\"potencia\" value=\"50\" autocomplete=\"off\">50\n    </label>\n    <label class=\"btn btn-outline-primary\">\n        <input type=\"radio\" name=\"potencia\" value=\"60\" autocomplete=\"off\">60\n    </label>\n    <label class=\"btn btn-outline-primary\">\n        <input type=\"radio\" name=\"potencia\" value=\"70\" autocomplete=\"off\">70\n    </label>\n    <label class=\"btn btn-outline-primary\">\n        <input type=\"radio\" name=\"potencia\" value=\"80\" autocomplete=\"off\">80\n    </label>\n    <label class=\"btn btn-outline-primary\">\n        <input type=\"radio\" name=\"potencia\" value=\"90\" autocomplete=\"off\">90\n    </label>\n    <label class=\"btn btn-outline-primary\">\n        <input type=\"radio\" name=\"potencia\" value=\"100\" autocomplete=\"off\">100\n    </label>\n    </div>\n    <a id=\"delete_drive\" onclick=\"deleteFormDrive(" + iFormDrive + ")\"><i class=\"fas fa-times-circle\"></i></a>\n    </div>\n    ";
    var nodeLi = document.createElement("li");
    nodeLi.id = "form_drive_" + iFormDrive;
    nodeLi.className = "group_drive_cross";
    nodeLi.innerHTML = contentDriveForm;
    document.getElementById("list_forms_drives").appendChild(nodeLi);
    iFormDrive++;
}
function deleteFormDrive(idForm) {
    var formToDelete = document.getElementById("form_drive_" + idForm);
    document.getElementById("list_forms_drives").removeChild(formToDelete);
}
