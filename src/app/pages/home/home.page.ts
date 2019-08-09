import {Component} from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"],
})
export class HomePage {

    private accessPoint: string;
    private accessPointDisabled: boolean;

    constructor() {
        this.accessPoint = "";
        this.accessPointDisabled = false;
    }

    private changedAccessPoint(event) {
        // Value === "", nothing selected yet
        if (event.detail.value === "")
            return;
        this.accessPointDisabled = true;
    }

}
