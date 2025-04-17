import { AbstractToast } from "./../Abstracts/AbstractToast.js";
import { ToastConfig } from "./../config/ToastConfig.js";

export class ErrorToast extends AbstractToast {
  protected getType(): string {
      return 'error';
  }
  
  protected getIconClass(): string {
      return 'toast-icon-error';
  }
  
  protected getBackgroundColor(): string {
      return ToastConfig.getInstance().getErrorColor();
  }
  
  protected getDefaultTitle(): string {
      return ToastConfig.getInstance().getErrorTitle();
  }
}