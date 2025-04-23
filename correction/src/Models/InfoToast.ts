import { AbstractToast } from "./../Abstracts/AbstractToast.js";
import { ToastConfig } from "./../config/ToastConfig.js";

export class InfoToast extends AbstractToast {
  protected getType(): string {
      return 'info';
  }
  
  protected getIconClass(): string {
      return 'toast-icon-info';
  }
  
  protected getBackgroundColor(): string {
      return ToastConfig.getInstance().getInfoColor();
  }
  
  protected getDefaultTitle(): string {
      return ToastConfig.getInstance().getInfoTitle();
  }
}