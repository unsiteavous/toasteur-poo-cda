import { AbstractToast } from "./../Abstracts/AbstractToast.js";
import { ToastConfig } from "./../config/ToastConfig.js";

export class WarningToast extends AbstractToast {
  protected getType(): string {
      return 'warning';
  }
  
  protected getIconClass(): string {
      return 'toast-icon-warning';
  }
  
  protected getBackgroundColor(): string {
      return ToastConfig.getInstance().getWarningColor();
  }
  
  protected getDefaultTitle(): string {
      return ToastConfig.getInstance().getWarningTitle();
  }
}