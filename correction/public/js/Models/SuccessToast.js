import { AbstractToast } from "./../Abstracts/AbstractToast.js";
import { ToastConfig } from "./../config/ToastConfig.js";
export class SuccessToast extends AbstractToast {
    getType() {
        return 'success';
    }
    getIconClass() {
        return 'toast-icon-success';
    }
    getBackgroundColor() {
        return ToastConfig.getInstance().getSuccessColor();
    }
    getDefaultTitle() {
        return ToastConfig.getInstance().getSuccessTitle();
    }
}
