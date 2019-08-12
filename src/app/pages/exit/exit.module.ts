import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";

import {IonicModule} from "@ionic/angular";

import {ExitPage} from "./exit.page";
import {SignaturePadModule} from "angular2-signaturepad";
import {NavbarComponent} from "../../components/shared/navbar/navbar.component";
import {HeaderComponent} from "../../components/shared/header/header.component";

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
        RouterModule.forChild(routes)
    ],
    declarations: [ExitPage, NavbarComponent, HeaderComponent]
})
export class ExitPageModule {
}
