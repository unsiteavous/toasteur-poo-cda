import Toast from "./../Abstracts/AbstractToast.js";
import ZoneDeToasts from "./ZoneDeToasts.js";
import { errorColor, errorBackgroundColor, errorTitle } from "./../config.js";
export default class ErrorToast extends Toast {
    constructor(message) {
        super(message);
        this._animationEntree = "animationEntreeError";
        ZoneDeToasts.addToast(this);
    }
    miseEnForme() {
        super.miseEnForme(errorBackgroundColor, errorColor, errorColor, 'errorIcone', errorTitle, this._animationEntree);
    }
}
