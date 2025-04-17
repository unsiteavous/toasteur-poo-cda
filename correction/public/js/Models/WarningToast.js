import { AbstractToast } from "./../Abstracts/AbstractToast.js";
import { ToastConfig } from "./../config/ToastConfig.js";
export class WarningToast extends AbstractToast {
    getType() {
        return 'warning';
    }
    getIconClass() {
        return 'toast-icon-warning';
    }
    getBackgroundColor() {
        return ToastConfig.getInstance().getWarningColor();
    }
    getDefaultTitle() {
        return ToastConfig.getInstance().getWarningTitle();
    }
}
