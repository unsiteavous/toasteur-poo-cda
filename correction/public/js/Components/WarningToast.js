import Toast from "./../Abstracts/AbstractToast.js";
import ZoneDeToasts from "./ZoneDeToasts.js";
import { warningColor, warningBackgroundColor, warningTitle } from "./../config.js";
export default class WarningToast extends Toast {
    constructor(message) {
        super(message);
        this._animationEntree = "animationEntreeWarning";
        ZoneDeToasts.addToast(this);
    }
    miseEnForme() {
        super.miseEnForme(warningBackgroundColor, warningColor, warningColor, 'warningIcone', warningTitle, this._animationEntree);
    }
}
