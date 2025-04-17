import { AbstractToast } from "./../Abstracts/AbstractToast.js";
import { ToastConfig } from "./../config/ToastConfig.js";

export class SuccessToast extends AbstractToast {
  protected getType(): string {
      return 'success';
  }
  
  protected getIconClass(): string {
      return 'toast-icon-success';
  }
  
  protected getBackgroundColor(): string {
      return ToastConfig.getInstance().getSuccessColor();
  }
  
  protected getDefaultTitle(): string {
      return ToastConfig.getInstance().getSuccessTitle();
  }
}