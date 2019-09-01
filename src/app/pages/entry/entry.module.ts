import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";

import {IonicModule} from "@ionic/angular";

import {EntryPage} from "./entry.page";
import {SignaturePadModule} from "angular2-signaturepad";
import {ComponentsModule} from "../../components/shared/components.module";

const routes: Routes = [
    {
        path: "",
        component: EntryPage
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
    declarations: [EntryPage]
})
export class EntryPageModule {
}
