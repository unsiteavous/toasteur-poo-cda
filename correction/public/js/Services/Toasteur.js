import { ToastFactory } from "./ToastFactory.js";
import { ToastManager } from "./ToastManager.js";
import { ToastConfig } from "./../config/ToastConfig.js";
export class Toasteur {
    static instance;
    factory;
    constructor() {
        this.factory = new ToastFactory();
    }
    static getInstance() {
        if (!Toasteur.instance) {
            Toasteur.instance = new Toasteur();
        }
        return Toasteur.instance;
    }
    success(message, duration) {
        const toast = this.factory.createToast('success', message, duration);
        ToastManager.getInstance().show(toast);
    }
    error(message, duration) {
        const toast = this.factory.createToast('error', message, duration);
        ToastManager.getInstance().show(toast);
    }
    info(message, duration) {
        const toast = this.factory.createToast('info', message, duration);
        ToastManager.getInstance().show(toast);
    }
    warning(message, duration) {
        const toast = this.factory.createToast('warning', message, duration);
        ToastManager.getInstance().show(toast);
    }
    setPosition(position) {
        ToastManager.getInstance().setPosition(position);
    }
    getConfig() {
        return ToastConfig.getInstance();
    }
}
