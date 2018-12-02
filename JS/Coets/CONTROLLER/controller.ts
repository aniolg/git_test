

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

var iFormDrive = 2;

function addFormDrive() {
    
    var contentDriveForm = `
    
    <H6>Propulsor ${iFormDrive}</H6>
    <div class="btn-group btn-group-toggle from_drive" data-toggle="buttons">
    <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Potència Màxima</span>
    </div>
    <label class="btn btn-outline-primary active">
        <input type="radio" name="potencia" value="10" autocomplete="off" checked>10
    </label>
    <label class="btn btn-outline-primary">
        <input type="radio" name="potencia" value="20" autocomplete="off">20
    </label>
    <label class="btn btn-outline-primary">
        <input type="radio" name="potencia" value="30" autocomplete="off">30
    </label>
    <label class="btn btn-outline-primary">
        <input type="radio" name="potencia" value="40" autocomplete="off">40
    </label>
    <label class="btn btn-outline-primary">
        <input type="radio" name="potencia" value="50" autocomplete="off">50
    </label>
    <label class="btn btn-outline-primary">
        <input type="radio" name="potencia" value="60" autocomplete="off">60
    </label>
    <label class="btn btn-outline-primary">
        <input type="radio" name="potencia" value="70" autocomplete="off">70
    </label>
    <label class="btn btn-outline-primary">
        <input type="radio" name="potencia" value="80" autocomplete="off">80
    </label>
    <label class="btn btn-outline-primary">
        <input type="radio" name="potencia" value="90" autocomplete="off">90
    </label>
    <label class="btn btn-outline-primary">
        <input type="radio" name="potencia" value="100" autocomplete="off">100
    </label>
    </div>
    <a id="delete_drive" onclick="deleteFormDrive(${iFormDrive})"><i class="fas fa-times-circle"></i></a>
    </div>
    `;

    var nodeLi = document.createElement("li");
    nodeLi.id = "form_drive_"+iFormDrive;
    nodeLi.className = "group_drive_cross"
    nodeLi.innerHTML = contentDriveForm;

    document.getElementById("list_forms_drives").appendChild(nodeLi);


    iFormDrive++;
}


function deleteFormDrive(idForm){
    var formToDelete = document.getElementById("form_drive_"+idForm);
    document.getElementById("list_forms_drives").removeChild(formToDelete);
}