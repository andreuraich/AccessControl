import {Component, OnInit, ViewChild} from "@angular/core";
import {SignaturePad} from "angular2-signaturepad/signature-pad";

@Component({
    selector: "app-exit",
    templateUrl: "./exit.page.html",
    styleUrls: ["./exit.page.scss"],
})
export class ExitPage {

    @ViewChild(SignaturePad) public signaturePad: SignaturePad;

    public signaturePadOptions = {
        minWidth: 2,
        canvasWidth: 450,
        canvasHeight: 200

    };
    public signatureImage: string;

    constructor() {
    }

    canvasResize() {
        const canvas = document.querySelector("canvas");
        this
            .signaturePad
            .set("minWidth", 1);
        console.log(canvas.offsetWidth);
        this
            .signaturePad
            .set("canvasWidth", canvas.offsetWidth);

        this
            .signaturePad
            .set("canvasHeight", canvas.offsetHeight);
    }


    // ngAfterViewInit() {
    //     console.log("Reset Model Screen");
    //     this
    //         .signaturePad
    //         .clear();
    //     this.canvasResize();
    // }


    drawComplete() {

        this.signatureImage = this
            .signaturePad
            .toDataURL();

        console.log("completed");
        console.log(this.signatureImage);
    }

    drawClear() {
        this
            .signaturePad
            .clear();
    }
}
