import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", loadChildren: "./pages/home/home.module#HomePageModule"},
    {path: "entry", loadChildren: "./pages/entry/entry.module#EntryPageModule"},
    {path: "exit", loadChildren: "./pages/exit/exit.module#ExitPageModule"},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
