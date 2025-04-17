import { ToastFactory } from "./ToastFactory.js";
import { ToastManager } from "./ToastManager.js";
import { ToastConfig } from "./../config/ToastConfig.js";

export class Toasteur {
  private static instance: Toasteur;
  private factory: ToastFactory;
  
  private constructor() {
      this.factory = new ToastFactory();
  }
  
  public static getInstance(): Toasteur {
      if (!Toasteur.instance) {
          Toasteur.instance = new Toasteur();
      }
      return Toasteur.instance;
  }
  
  // API publique
  public success(message: string, duration?: number): void {
      const toast = this.factory.createToast('success', message, duration);
      ToastManager.getInstance().show(toast);
  }
  
  public error(message: string, duration?: number): void {
      const toast = this.factory.createToast('error', message, duration);
      ToastManager.getInstance().show(toast);
  }
  
  public info(message: string, duration?: number): void {
      const toast = this.factory.createToast('info', message, duration);
      ToastManager.getInstance().show(toast);
  }
  
  public warning(message: string, duration?: number): void {
      const toast = this.factory.createToast('warning', message, duration);
      ToastManager.getInstance().show(toast);
  }
  
  // Configuration
  public setPosition(position: string): void {
      ToastManager.getInstance().setPosition(position);
  }
  
  public getConfig(): ToastConfig {
      return ToastConfig.getInstance();
  }
}