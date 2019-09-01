import {Component} from "@angular/core";

import {ModalController, Platform, ToastController} from "@ionic/angular";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {StatusBar} from "@ionic-native/status-bar/ngx";
import {CLOSE_APP_MESSAGE, TOAST_TIME_SLEEP} from "./globals";
import {Router} from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html"
})
export class AppComponent {

    // set up hardware back button event.
    lastTimeBackPress = 0;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router,
        public modalController: ModalController,
        private toastController: ToastController
    ) {
        this.initializeApp();
        this.backButtonEvent();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    backButtonEvent() {
        this.platform.backButton.subscribe(async () => {
            try {
                const element = await this.modalController.getTop();
                if (element) {
                    element.dismiss();
                    return;
                }
            } catch (error) {
                console.log(error);

            }

            if (this.router.url === "/home") {
                if (new Date().getTime() - this.lastTimeBackPress < TOAST_TIME_SLEEP) {
                    navigator["app"].exitApp(); // work for ionic 4
                } else {
                    this.showToast();
                    this.lastTimeBackPress = new Date().getTime();
                }
            }
        });
    }

    async showToast() {
        const toast = await this.toastController.create({
            message: CLOSE_APP_MESSAGE,
            duration: TOAST_TIME_SLEEP,
            showCloseButton: false,
            position: "bottom",
            closeButtonText: "",
            color: "dark"
        });
        toast.present();
    }
}
