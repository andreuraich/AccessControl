import {Component, ViewChild} from "@angular/core";
import {SignaturePad} from "angular2-signaturepad/signature-pad";
import {AlertController} from "@ionic/angular";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Access} from "../../models/access.model";
import {AccessRegistrationService} from "../../services/access-registration.service";
import {ToastController} from "@ionic/angular";
import {ANOTHER_ERROR, ERROR, NETWORK_ERROR, SUCCESS, SUCCESSFUL_ENTRY, TOAST_TIME_SLEEP} from "../../globals";
import {Router} from "@angular/router";
import {delay} from "rxjs/operators";


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

    constructor(private alertController: AlertController, private accessRegistrationService: AccessRegistrationService, private toastController: ToastController, private router: Router) {
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

    // canvasResize() {
    //     const canvas = document.querySelector("canvas");
    //     this
    //         .signaturePad
    //         .set("minWidth", 1);
    //     console.log(canvas.offsetWidth);
    //     this
    //         .signaturePad
    //         .set("canvasWidth", canvas.offsetWidth);
    //
    //     this
    //         .signaturePad
    //         .set("canvasHeight", canvas.offsetHeight);
    // }

    drawClear() {
        this
            .signaturePad
            .clear();
        this.signatureShowError = true;
    }

    async presentToast(toastHeader: string, toastMessage: string) {
        const toast = await this.toastController.create({
            header: toastHeader,
            message: toastMessage,
            position: "middle",
            duration: TOAST_TIME_SLEEP
        });
        await toast.present();
    }

    entryFormSubmitted(): void {
        if (this.signaturePad.isEmpty()) {
            this.signatureShowError = true;
            return;
        }
        this.signatureShowError = false;

        if (this.entryForm.valid) {
            const entryAccess = new Access();
            entryAccess.setId = this.entryForm.controls.id.value;
            entryAccess.setName = this.entryForm.controls.name.value;
            entryAccess.setLastName = this.entryForm.controls.lastName.value;
            entryAccess.setcompany = this.entryForm.controls.company.value;
            entryAccess.setVisitReason = this.entryForm.controls.visitReason.value;
            entryAccess.setEntrySignature = this.signaturePad.toDataURL();
            entryAccess.setActualEntryDate();

            // this.accessRegistrationService.registerNewAccess(entryAccess);
            this.accessRegistrationService.registerNewAccess(entryAccess)
                .subscribe(resp => {
                        if (resp.response_code === 200) {
                            this.presentToast(SUCCESS, SUCCESSFUL_ENTRY);
                            setTimeout(() => this.router.navigateByUrl("/"), TOAST_TIME_SLEEP);
                        } else {
                            this.presentToast(ERROR, ANOTHER_ERROR);
                        }
                    },
                    error => {
                        this.presentToast(ERROR, NETWORK_ERROR);
                    }
                );
        }
    }
}
