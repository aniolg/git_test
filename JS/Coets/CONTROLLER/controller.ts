
var rockets = [];
rockets[0] = new Rocket("32WESSDS");
rockets[0].addDrive("D1_" + rockets[0].id, 10);
rockets[0].addDrive("D2_" + rockets[0].id, 30);
rockets[0].addDrive("D3_" + rockets[0].id, 80);
rockets[1] = new Rocket("LDSFJA32");
rockets[1].addDrive("D1_" + rockets[1].id, 30);
rockets[1].addDrive("D1_" + rockets[1].id, 40);
rockets[1].addDrive("D1_" + rockets[1].id, 50);
rockets[1].addDrive("D1_" + rockets[1].id, 50);
rockets[1].addDrive("D1_" + rockets[1].id, 30);
rockets[1].addDrive("D1_" + rockets[1].id, 10);

function listRockets() {
    var rocketsList = `<ul class="list-group">`;

    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].checkedId(rockets[i].id) == " ") {
            rocketsList +=
                `<li class="list-group-item list-group-item-warning">
                <i class="fas fa-exclamation-triangle"></i> 
                La ID del coet és massa curta! (introdueixi una ID de mínim 8 caràcters)
                </li>`
        } else {
            rocketsList +=
                `<li class="list-group-item">
                <i class="fas fa-space-shuttle fa-rotate-270"></i> 
                El coet ${rockets[i].id} te ${rockets[i].numDrives} propulsors:`;

            for (var j = 0; j < rockets[i].drives.length; j++) {

                if (j != rockets[i].drives.length - 1) {
                    rocketsList += ` ${rockets[i].drives[j].maxPower},`;
                } else {
                    rocketsList += ` ${rockets[i].drives[j].maxPower}</li>`;
                }
            }
        }
    }

    rocketsList += "</ul>";

    return rocketsList;
}

function loadContent() {
    document.getElementById("div_coets").innerHTML = listRockets();
}

