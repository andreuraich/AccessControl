import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";

import {IonicModule} from "@ionic/angular";

import {ExitPage} from "./exit.page";
import {SignaturePadModule} from "angular2-signaturepad";
import {ComponentsModule} from "../../components/shared/components.module";

const routes: Routes = [
    {
        path: "",
        component: ExitPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignaturePadModule,
        ComponentsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ExitPage]
})
export class ExitPageModule {
}
