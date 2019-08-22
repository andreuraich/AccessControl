import {Component, OnInit, ViewChild} from "@angular/core";
import {SignaturePad} from "angular2-signaturepad/signature-pad";
import {AlertController} from "@ionic/angular";
import {NgForm, FormGroup, FormControl, Validators} from "@angular/forms";
import {Access} from "../../models/access.model";

@Component({
    selector: "app-entry",
    templateUrl: "./entry.page.html",
    styleUrls: ["./entry.page.scss"],
})
export class EntryPage {
    @ViewChild(SignaturePad) public signaturePad: SignaturePad;

    public signaturePadOptions = {
        minWidth: 2,
        canvasWidth: 450,
        canvasHeight: 200

    };
    public signatureImage: string;

    entryForm: FormGroup;
    entryAccess: Access;

    constructor(private alertController: AlertController) {

        this.entryAccess = new Access();

        this.entryForm = new FormGroup({
            "id": new FormControl("", [Validators.required, Validators.minLength(3)]),
            "name": new FormControl("", Validators.required),
            "lastName": new FormControl("", Validators.required),
            "company": new FormControl("", Validators.required),
            "visitReason": new FormControl(),
            "internalOps": new FormControl("false", Validators.requiredTrue)
        });
    }

    async presentAlertMultipleButtons(event) {
        console.log(event);
        const alert = await this.alertController.create({
            header: "COMPANY NAME internal operating rules",
            message: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
            buttons: [{
                text: "Decline",
                role: "cancel",
                handler: () => {
                    event.target.checked = false;
                }
            },
                {
                    text: "Accept",
                    handler: () => {
                        event.target.checked = true;
                    }
                }]
        });

        await alert.present();
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

    private entryFormSubmitted(): void {
        console.log("Form submitted!");
        if (this.entryForm.valid && !this.signaturePad.isEmpty()){
            console.log("Valid form");
        }
    }
}
