
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
    drives: Drive[]=[];

    constructor(id: string) {
        this.id = id;
        this.numDrives = 0;
    }

    checkedId(idIn:string){
        if (idIn.length >= 8){
            return idIn;
        }else{
            return " ";
        }
    }

    addDrive(idDrive,maxPowerDrive) {
            this.drives.push(new Drive(idDrive, maxPowerDrive));
            ++this.numDrives;
        }
    

}
