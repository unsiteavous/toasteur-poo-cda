import Toast from "./../Abstracts/AbstractToast.js";
import ZoneDeToasts from "./ZoneDeToasts.js";
import { infoColor, infoBackgroundColor, infoTitle } from "./../config.js";
export default class InfoToast extends Toast {
    constructor(message) {
        super(message);
        this._animationEntree = "animationEntreeInfo";
        ZoneDeToasts.addToast(this);
    }
    miseEnForme() {
        super.miseEnForme(infoBackgroundColor, infoColor, infoColor, 'infoIcone', infoTitle, this._animationEntree);
    }
}
