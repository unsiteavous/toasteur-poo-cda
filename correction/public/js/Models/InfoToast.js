import { AbstractToast } from "./../Abstracts/AbstractToast.js";
import { ToastConfig } from "./../config/ToastConfig.js";
export class InfoToast extends AbstractToast {
    getType() {
        return 'info';
    }
    getIconClass() {
        return 'toast-icon-info';
    }
    getBackgroundColor() {
        return ToastConfig.getInstance().getInfoColor();
    }
    getDefaultTitle() {
        return ToastConfig.getInstance().getInfoTitle();
    }
}
