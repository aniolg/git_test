
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

//accelerar 3 cops
for (var i = 0; i < 3; i++){
    rockets[0].accelerate();
    rockets[1].accelerate();
}
rockets[0].getActualVelocity();
rockets[1].getActualVelocity();
alert (`Velocitat coet ${rockets[0].id}: ${rockets[0].actualVelocity} || Velocitat coet ${rockets[1].id}: ${rockets[1].actualVelocity}`);

//frena 5 cops
for (var i = 0; i < 5; i++){
    rockets[0].slowDown();
    rockets[1].slowDown();
}
rockets[0].getActualVelocity();
rockets[1].getActualVelocity();
alert (`Velocitat coet ${rockets[0].id}: ${rockets[0].actualVelocity} || Velocitat coet ${rockets[1].id}: ${rockets[1].actualVelocity}`);

//accelerar 15 cops
for (var i = 0; i < 15; i++){
    rockets[0].accelerate();
    rockets[1].accelerate();
}
rockets[0].getActualVelocity();
rockets[1].getActualVelocity();
alert (`Velocitat coet ${rockets[0].id}: ${rockets[0].actualVelocity} || Velocitat coet ${rockets[1].id}: ${rockets[1].actualVelocity}`);

function listRockets() {
    var rocketsList = `<ul class="list-group">`;

    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].checkedId != rockets[i].id) {
            rocketsList +=
                `<li class="list-group-item list-group-item-warning">
                <i class="fas fa-exclamation-triangle"></i> 
                ${rockets[i].checkedId}
                </li>`
        } else {
            rocketsList +=
                `<li class="list-group-item">
                <p><i class="fas fa-space-shuttle fa-rotate-270"></i> 
                El coet ${rockets[i].id} te ${rockets[i].numDrives} propulsors:</p>`;

            for (var j = 0; j < rockets[i].drives.length; j++) {


                if (rockets[i].drives[j].actualPower == rockets[i].drives[j].maxPower) {
                    rocketsList += ` 
                        <p class="badge badge-secondary">
                        <i class="fas fa-battery-full"></i>
                        Pact: ${rockets[i].drives[j].actualPower} (Pmax:${rockets[i].drives[j].maxPower})</p>
                        `;
                } else if (rockets[i].drives[j].actualPower == 0) {
                    rocketsList += ` 
                        <p class="badge badge-secondary">
                        <i class="fas fa-battery-empty"></i>
                        Pact: ${rockets[i].drives[j].actualPower} (Pmax:${rockets[i].drives[j].maxPower})</p>
                        `;
                } else {
                    rocketsList += ` 
                        <p class="badge badge-secondary">
                        <i class="fas fa-battery-half"></i>
                        Pact: ${rockets[i].drives[j].actualPower} (Pmax:${rockets[i].drives[j].maxPower})</p>
                        `;
                }
            }

            rockets[i].getActualVelocity();
            rocketsList += `
                <span class="badge badge-pill badge-primary">
                <i class="fas fa-stopwatch"></i>
                Velocitat: ${rockets[i].actualVelocity}
                </span></li>`
        }
    }

    rocketsList += "</ul>";

    return rocketsList;
}

function loadContent() {
    document.getElementById("div_coets").innerHTML = listRockets();
}


