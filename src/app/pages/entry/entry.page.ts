import {Component, OnInit, ViewChild} from "@angular/core";
import {SignaturePad} from "angular2-signaturepad/signature-pad";
import {AlertController} from "@ionic/angular";
import {NgForm, FormGroup, FormControl, Validators} from "@angular/forms";
import {Access} from "../../models/access.model";
import {AccessRegistrationService} from "../../services/access-registration.service";
import {pipe} from "rxjs";
import {first} from "rxjs/operators";

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
    private signatureShowError: boolean;
    entryForm: FormGroup;

    constructor(private alertController: AlertController, private accessRegistrationService: AccessRegistrationService) {
        this.entryForm = new FormGroup({
            "id": new FormControl("", [Validators.required, Validators.minLength(3)]),
            "name": new FormControl("", Validators.required),
            "lastName": new FormControl("", Validators.required),
            "company": new FormControl("", Validators.required),
            "visitReason": new FormControl(),
            "internalOps": new FormControl("false", Validators.requiredTrue)
        });

        this.signatureShowError = false;
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

    drawClear() {
        this
            .signaturePad
            .clear();
        this.signatureShowError = true;
    }

    private entryFormSubmitted(): void {
        if (this.signaturePad.isEmpty()) {
            this.signatureShowError = true;
            return;
        }
        this.signatureShowError = false;

        if (this.entryForm.valid) {
            console.log(this.entryForm);
            let entryAccess = new Access();
            entryAccess.setId = this.entryForm.controls.id.value;
            entryAccess.setName = this.entryForm.controls.name.value;
            entryAccess.setLastName = this.entryForm.controls.lastName.value;
            entryAccess.setcompany = this.entryForm.controls.company.value;
            entryAccess.setVisitReason = this.entryForm.controls.visitReason.value;
            entryAccess.setEntrySignature = this.signaturePad.toDataURL();
            entryAccess.setActualEntryDate();

            this.accessRegistrationService.registerNewAccess(entryAccess)
                .subscribe(resp => {
                    console.log(resp);
                });
        }
    }
}
