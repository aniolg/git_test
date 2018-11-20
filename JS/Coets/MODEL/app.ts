
class Drive {
    id: string;
    maxPower: number;
    constructor(id: string, maxPower: number) {
        this.id = id;
        this.maxPower = maxPower;
    }
}

class Rocket {
    id: string;
    numDrives: number;
    drives: Drive[];

    constructor(id: string) {
        this.id = id;
        this.numDrives = 0;
    }

    addDrive(idDrive,maxPowerDrive) {
            this.drives.push(new Drive(idDrive, maxPowerDrive));
            ++this.numDrives;
        }

}