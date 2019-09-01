export class Access {

    private id: string;
    private name: string;
    private lastName: string;
    private company: string;
    private visitReason: string;
    private entryDate: string;
    private entrySignature: string;
    private exitDate: string;
    private exitSignature: string;

    constructor() {
    }

    get getId(): string {
        return this.id;
    }

    set setId(value) {
        this.id = value;
    }

    get getName(): string {
        return this.name;
    }

    set setName(value) {
        this.name = value;
    }

    get getLastName(): string {
        return this.lastName;
    }

    set setLastName(value) {
        this.lastName = value;
    }

    get getcompany(): string {
        return this.company;
    }

    set setcompany(value) {
        this.company = value;
    }

    get getVisitReason(): string {
        return this.visitReason;
    }

    set setVisitReason(value) {
        this.visitReason = value;
    }

    get getEntryDate(): string {
        return this.entryDate;
    }

    set setEntryDate(value: string) {
        this.entryDate = value;
    }

    get getEntrySignature(): string {
        return this.entrySignature;
    }

    set setEntrySignature(value) {
        this.entrySignature = value;
    }

    get getExitDate(): string {
        return this.exitDate;
    }

    set setExitDate(value: string) {
        this.exitDate = value;
    }

    get getExitSignature(): string {
        return this.exitSignature;
    }

    set setExitSignature(value) {
        this.exitSignature = value;
    }

    setActualEntryDate() {
        this.setEntryDate = this.generateActualDate();
    }

    setActualExitDate() {
        this.setExitDate = this.generateActualDate();
    }

    private generateActualDate() {
        let now = new Date();
        let year = "" + now.getFullYear();
        let month = "" + (now.getMonth() + 1);
        if (month.length === 1) {
            month = "0" + month;
        }
        let day = "" + now.getDate();
        if (day.length === 1) {
            day = "0" + day;
        }
        let hour = "" + now.getHours();
        if (hour.length === 1) {
            hour = "0" + hour;
        }
        let minute = "" + now.getMinutes();
        if (minute.length === 1) {
            minute = "0" + minute;
        }
        let second = "" + now.getSeconds();
        if (second.length === 1) {
            second = "0" + second;
        }
        return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    }
}

