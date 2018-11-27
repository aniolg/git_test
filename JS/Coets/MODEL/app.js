var Drive = /** @class */ (function () {
    function Drive(id, maxPower) {
        this.actualPower = 0;
        this.id = id;
        this.maxPower = maxPower;
    }
    return Drive;
}());
var Rocket = /** @class */ (function () {
    function Rocket(id) {
        this.drives = [];
        this.actualVelocity = 0;
        this.id = id;
        this.idChecker(id);
        this.checkedId = this.idChecker(id);
        this.numDrives = 0;
    }
    Rocket.prototype.idChecker = function (idIn) {
        if (idIn.length >= 8) {
            return idIn;
        }
        else {
            try {
                throw new Error("La ID del coet " + idIn + " és massa curta! (introdueixi una ID de mínim 8 caràcters)");
            }
            catch (e) {
                return e.message;
            }
        }
    };
    Rocket.prototype.addDrive = function (idDrive, maxPowerDrive) {
        this.drives.push(new Drive(idDrive, maxPowerDrive));
        ++this.numDrives;
    };
    Rocket.prototype.accelerate = function () {
        for (var i = 0; i < this.drives.length; i++) {
            if (this.drives[i].actualPower < this.drives[i].maxPower) {
                this.drives[i].actualPower += 10;
                i = this.drives.length;
            }
        }
    };
    Rocket.prototype.slowDown = function () {
        for (var i = this.drives.length - 1; i >= 0; i--) {
            if (this.drives[i].actualPower > 0) {
                this.drives[i].actualPower -= 10;
                i = -1;
            }
        }
    };
    Rocket.prototype.getActualVelocity = function () {
        this.actualVelocity = 0;
        for (var i = 0; i < this.drives.length; i++) {
            this.actualVelocity += this.drives[i].actualPower;
        }
    };
    return Rocket;
}());
