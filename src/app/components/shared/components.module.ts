import {NgModule} from "@angular/core";
import {NavbarComponent} from "./navbar/navbar.component";
import {HeaderComponent} from "./header/header.component";
import {IonicModule} from "@ionic/angular";

@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [NavbarComponent, HeaderComponent],
    exports: [NavbarComponent, HeaderComponent]
})

export class ComponentsModule {
}
