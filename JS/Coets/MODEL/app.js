var Drive = /** @class */ (function () {
    function Drive(id, maxPower) {
        this.id = id;
        this.maxPower = maxPower;
    }
    return Drive;
}());
var Rocket = /** @class */ (function () {
    function Rocket(id) {
        this.id = id;
        this.numDrives = 0;
    }
    Rocket.prototype.addDrive = function (idDrive, maxPowerDrive) {
        this.drives.push(new Drive(idDrive, maxPowerDrive));
        ++this.numDrives;
    };
    return Rocket;
}());
//   this.drives.push(new Drive(8));
/*class Rocket {
    id: string;
    drives:Drive[];
    constructor(id: string, drives:array) {
        this.id = id;
        this.drives = drives.length;
     
    }
}
*/ 
