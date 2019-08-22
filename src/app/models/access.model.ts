export class Access {

    private id: string;
    private name: string;
    private lastName: string;
    private companyName: string;
    private visitReason: string;
    private entryDate: Date;
    private entrySignature: string;
    private exitDate: Date;
    private exitSignature: string;

    constructor() {
    }


    get getName(): string {
        return this.name;
    }

    set setName(value: string) {
        this.name = value;
    }

    get getLastName(): string {
        return this.lastName;
    }

    set setLastName(value: string) {
        this.lastName = value;
    }

    get getCompanyName(): string {
        return this.companyName;
    }

    set setCompanyName(value: string) {
        this.companyName = value;
    }

    get getVisitReason(): string {
        return this.visitReason;
    }

    set setVisitReason(value: string) {
        this.visitReason = value;
    }

    get getEntryDate(): Date {
        return this.entryDate;
    }

    set setEntryDate(value: Date) {
        this.entryDate = value;
    }

    get getEntrySignature(): string {
        return this.entrySignature;
    }

    set setEntrySignature(value: string) {
        this.entrySignature = value;
    }

    get getExitDate(): Date {
        return this.exitDate;
    }

    set setExitDate(value: Date) {
        this.exitDate = value;
    }

    get getExitSignature(): string {
        return this.exitSignature;
    }

    set setExitSignature(value: string) {
        this.exitSignature = value;
    }
}

