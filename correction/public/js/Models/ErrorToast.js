import { AbstractToast } from "./../Abstracts/AbstractToast.js";
import { ToastConfig } from "./../config/ToastConfig.js";
export class ErrorToast extends AbstractToast {
    getType() {
        return 'error';
    }
    getIconClass() {
        return 'toast-icon-error';
    }
    getBackgroundColor() {
        return ToastConfig.getInstance().getErrorColor();
    }
    getDefaultTitle() {
        return ToastConfig.getInstance().getErrorTitle();
    }
}
