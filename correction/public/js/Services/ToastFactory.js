import { SuccessToast } from "../Models/SuccessToast.js";
import { ErrorToast } from "../Models/ErrorToast.js";
import { InfoToast } from "../Models/InfoToast.js";
import { WarningToast } from "../Models/WarningToast.js";
export class ToastFactory {
    createToast(type, message, duration) {
        let toast;
        switch (type.toLowerCase()) {
            case 'success':
                toast = new SuccessToast(message, duration);
                toast.setPriority(2);
                return toast;
            case 'error':
                toast = new ErrorToast(message, duration);
                toast.setPriority(1);
                return toast;
            case 'info':
                toast = new InfoToast(message, duration);
                toast.setPriority(3);
                return toast;
            case 'warning':
                toast = new WarningToast(message, duration);
                toast.setPriority(2);
                return toast;
            default:
                toast = new InfoToast(message, duration);
                toast.setPriority(3);
                return toast;
        }
    }
}
