import { SuccessToast } from "../Models/SuccessToast.js";
import { ErrorToast } from "../Models/ErrorToast.js";
import { InfoToast } from "../Models/InfoToast.js";
import { WarningToast } from "../Models/WarningToast.js";
import { AbstractToast } from "../Abstracts/AbstractToast.js";


export class ToastFactory {
  // Factory Method pattern
  public createToast(type: string, message: string, duration?: number): AbstractToast {
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
              // Par défaut, on retourne un InfoToast
              return new InfoToast(message, duration);
      }
  }
}