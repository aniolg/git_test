
var rockets = [];
rockets[0] = new Rocket("32WESSDS");
rockets[0].addDrive("D1_" + rockets[0].id, 10);
rockets[0].addDrive("D2_" + rockets[0].id, 30);
rockets[0].addDrive("D3_" + rockets[0].id, 80);
rockets[1] = new Rocket("LDSFJA32");
rockets[1].addDrive("D1_" + rockets[1].id, 30);
rockets[1].addDrive("D2_" + rockets[1].id, 40);
rockets[1].addDrive("D3_" + rockets[1].id, 50);
rockets[1].addDrive("D4_" + rockets[1].id, 50);
rockets[1].addDrive("D5_" + rockets[1].id, 30);
rockets[1].addDrive("D6_" + rockets[1].id, 10);

function newRocket(){
    newIdRocket = document.getElementById("id_rocket").value;
    rockets[rockets.length] = new Rocket(newIdRocket);

}

