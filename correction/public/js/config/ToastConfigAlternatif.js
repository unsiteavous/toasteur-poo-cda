import * as config from "./../config.js";
export class ToastConfig {
    static instance;
    defaultDuration = config.defaultDuration;
    maxVisibleToasts = config.maxVisibleToasts;
    defaultPosition = config.defaultPosition.toString();
    successColor = config.successColor;
    errorColor = config.errorColor;
    infoColor = config.infoColor;
    warningColor = config.warningColor;
    successTitle = config.successTitle;
    errorTitle = config.errorTitle;
    infoTitle = config.infoTitle;
    warningTitle = config.warningTitle;
    constructor() { }
    static getInstance() {
        if (!ToastConfig.instance) {
            ToastConfig.instance = new ToastConfig();
        }
        return ToastConfig.instance;
    }
    getDefaultDuration() {
        return this.defaultDuration;
    }
    getMaxVisibleToasts() {
        return this.maxVisibleToasts;
    }
    getDefaultPosition() {
        return this.defaultPosition;
    }
    getSuccessColor() {
        return this.successColor;
    }
    getErrorColor() {
        return this.errorColor;
    }
    getInfoColor() {
        return this.infoColor;
    }
    getWarningColor() {
        return this.warningColor;
    }
    getSuccessTitle() {
        return this.successTitle;
    }
    getErrorTitle() {
        return this.errorTitle;
    }
    getInfoTitle() {
        return this.infoTitle;
    }
    getWarningTitle() {
        return this.warningTitle;
    }
    setDefaultDuration(duration) {
        this.defaultDuration = duration;
    }
    setMaxVisibleToasts(max) {
        this.maxVisibleToasts = max;
    }
    setDefaultPosition(position) {
        this.defaultPosition = position;
    }
    setSuccessColor(color) {
        this.successColor = color;
    }
    setErrorColor(color) {
        this.errorColor = color;
    }
    setInfoColor(color) {
        this.infoColor = color;
    }
    setWarningColor(color) {
        this.warningColor = color;
    }
    setSuccessTitle(title) {
        this.successTitle = title;
    }
    setErrorTitle(title) {
        this.errorTitle = title;
    }
    setInfoTitle(title) {
        this.infoTitle = title;
    }
    setWarningTitle(title) {
        this.warningTitle = title;
    }
}
