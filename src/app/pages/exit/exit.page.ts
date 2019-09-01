import {Component, OnInit, ViewChild} from "@angular/core";
import {SignaturePad} from "angular2-signaturepad/signature-pad";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccessRegistrationService} from "../../services/access-registration.service";
import {Access} from "../../models/access.model";
import {ToastController} from "@ionic/angular";
import {ANOTHER_ERROR, ERROR, NOT_FOUND_EXIT, SUCCESS, SUCCESSFUL_ENTRY} from "../../globals";

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
    private signatureShowError: boolean;
    exitForm: FormGroup;

    constructor(private accessRegistrationService: AccessRegistrationService, private toastController: ToastController) {
        this.exitForm = new FormGroup({
            "id": new FormControl("", [Validators.required, Validators.minLength(3)])
        });

        this.signatureShowError = false;
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
    }

    async presentToast(toastHeader: string, toastMessage: string) {
        const toast = await this.toastController.create({
            header: toastHeader,
            message: toastMessage,
            position: "middle",
            duration: 2000
        });
        await toast.present();
    }

    private exitFormSubmitted(): void {
        if (this.signaturePad.isEmpty()) {
            this.signatureShowError = true;
            return;
        }
        this.signatureShowError = false;

        if (this.exitForm.valid) {
            const exitAccess = new Access();
            exitAccess.setId = this.exitForm.controls.id.value;
            exitAccess.setEntrySignature = this.signaturePad.toDataURL();
            exitAccess.setActualExitDate();
            this.accessRegistrationService.registerNewExit(exitAccess)
                .subscribe(resp => {
                    if (resp.response_code === 200) {
                        this.presentToast(SUCCESS, SUCCESSFUL_ENTRY);
                    } else if (resp.response_code === 404) {
                        this.presentToast(ERROR, NOT_FOUND_EXIT);
                    } else {
                        this.presentToast(ERROR, ANOTHER_ERROR);
                    }
                });
        }
    }
}
