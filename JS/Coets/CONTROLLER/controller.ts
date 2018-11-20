
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
        rocketsList += 
        `<li class="list-group-item">
        <i class="fas fa-space-shuttle fa-rotate-270"></i>
        El coet ${rockets[i].id} te ${rockets[i].numDrives} propulsors: ${rockets[i].drives[i].maxPower}.
        </li>`;
    }

    rocketsList += "</ul>";

    return rocketsList;
}

function loadContent() {
    document.getElementById("div_coets").innerHTML = listRockets();
}


