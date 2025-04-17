import AbstractToast from "./../Abstracts/AbstractToast.js";
import ZoneDeToasts from "./ZoneDeToasts.js";
import { successColor, successBackgroundColor, successTitle } from "./../config.js";
export default class SuccessToast extends AbstractToast {
    constructor(message) {
        super(message);
        this._animationEntree = "animationEntreeSuccess";
        ZoneDeToasts.addToast(this);
    }
    miseEnForme() {
        super.miseEnForme(successBackgroundColor, successColor, successColor, 'successIcone', successTitle, this._animationEntree);
        const effet = document.createElement('span');
        effet.style.backgroundColor = successColor;
        effet.style.boxShadow = '0px 0 10px 10px ' + successColor;
        effet.classList.add('successEffect');
        this._toast.append(effet);
    }
}
