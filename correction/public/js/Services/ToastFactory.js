import { SuccessToast } from "../Models/SuccessToast.js";
import { ErrorToast } from "../Models/ErrorToast.js";
import { InfoToast } from "../Models/InfoToast.js";
import { WarningToast } from "../Models/WarningToast.js";
export class ToastFactory {
    createToast(type, message, duration) {
        switch (type.toLowerCase()) {
            case 'success':
                return new SuccessToast(message, duration);
            case 'error':
                return new ErrorToast(message, duration);
            case 'info':
                return new InfoToast(message, duration);
            case 'warning':
                return new WarningToast(message, duration);
            default:
                return new InfoToast(message, duration);
        }
    }
}
