var Drive = /** @class */ (function () {
    function Drive(id, maxPower) {
        this.id = id;
        this.maxPower = maxPower;
    }
    return Drive;
}());
var Rocket = /** @class */ (function () {
    function Rocket(id) {
        this.drives = [];
        this.id = id;
        this.numDrives = 0;
    }
    Rocket.prototype.checkedId = function (idIn) {
        if (idIn.length >= 8) {
            return idIn;
        }
        else {
            return " ";
        }
    };
    Rocket.prototype.addDrive = function (idDrive, maxPowerDrive) {
        this.drives.push(new Drive(idDrive, maxPowerDrive));
        ++this.numDrives;
    };
    return Rocket;
}());
