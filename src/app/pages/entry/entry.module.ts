import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";

import {IonicModule} from "@ionic/angular";

import {EntryPage} from "./entry.page";
import {NavbarComponent} from "../../components/shared/navbar/navbar.component";
import {HeaderComponent} from "../../components/shared/header/header.component";
import {SignaturePadModule} from "angular2-signaturepad";

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
        RouterModule.forChild(routes)
    ],
    declarations: [EntryPage, NavbarComponent, HeaderComponent]
})
export class EntryPageModule {
}
