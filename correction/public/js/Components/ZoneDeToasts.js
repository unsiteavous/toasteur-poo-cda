import { position, modulePath, fontFamily } from "./../config.js";
import ErrorToast from "./ErrorToast.js";
import SuccessToast from "./SuccessToast.js";
import InfoToast from "./InfoToast.js";
import WarningToast from "./WarningToast.js";
export default class ZoneDeToasts {
    static ZoneDeToasts;
    static init() {
        this.creationZoneDeToasts();
        this.giveAccessToToasts();
    }
    static creationZoneDeToasts() {
        this.addStyleSheet();
        this.addAnimationsStyleSheet();
        this.ZoneDeToasts = document.createElement('div');
        this.ZoneDeToasts.classList.add('zoneDeToasts', position.toString());
        this.ZoneDeToasts.id = "zoneDeToasts";
        this.ZoneDeToasts.style.fontFamily = fontFamily + ', Arial, sans-serif';
        document.body.append(this.ZoneDeToasts);
    }
    static addToast__Recursive(toast) {
        if (this.ZoneDeToasts.querySelectorAll('.toast').length >= 4) {
            setTimeout(() => {
                this.addToast__Recursive(toast);
            }, 500);
        }
        else {
            toast.miseEnForme();
        }
    }
    static async addToast(toast) {
        while (this.ZoneDeToasts.querySelectorAll('.toast').length >= 4) {
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        toast.miseEnForme();
    }
    static addStyleSheet() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = modulePath + '/css/toasteur_style.css';
        document.head.appendChild(link);
    }
    static addAnimationsStyleSheet() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        if (position.toString() === 'top-left' || position.toString() === 'bottom-left') {
            link.href = modulePath + '/css/toasteur_animations-left.css';
        }
        else if (position.toString() === 'top-right' || position.toString() === 'bottom-right') {
            link.href = modulePath + '/css/toasteur_animations-right.css';
        }
        document.head.appendChild(link);
    }
    static giveAccessToToasts() {
        window.SuccessToast = SuccessToast;
        window.ErrorToast = ErrorToast;
        window.InfoToast = InfoToast;
        window.WarningToast = WarningToast;
    }
}
