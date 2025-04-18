import * as config from "./../config.js";
export class ToastConfig {
  private static instance: ToastConfig;
  
  // Configuration par défaut
  private defaultDuration: number = config.defaultDuration;
  private maxVisibleToasts: number = config.maxVisibleToasts;
  private defaultPosition: string = config.defaultPosition.toString();
  
  // Couleurs par défaut
  private successColor: string = config.successColor;
  private errorColor: string = config.errorColor;
  private infoColor: string = config.infoColor;
  private warningColor: string = config.warningColor;
  
  // Titres par défaut
  private successTitle: string = config.successTitle;
  private errorTitle: string = config.errorTitle;
  private infoTitle: string = config.infoTitle;
  private warningTitle: string = config.warningTitle;
  
  // Singleton
  private constructor() {}
  
  public static getInstance(): ToastConfig {
      if (!ToastConfig.instance) {
          ToastConfig.instance = new ToastConfig();
      }
      return ToastConfig.instance;
  }
  
  // Getters
  public getDefaultDuration(): number {
      return this.defaultDuration;
  }
  
  public getMaxVisibleToasts(): number {
      return this.maxVisibleToasts;
  }
  
  public getDefaultPosition(): string {
      return this.defaultPosition;
  }
  
  public getSuccessColor(): string {
      return this.successColor;
  }
  
  public getErrorColor(): string {
      return this.errorColor;
  }
  
  public getInfoColor(): string {
      return this.infoColor;
  }
  
  public getWarningColor(): string {
      return this.warningColor;
  }
  
  public getSuccessTitle(): string {
      return this.successTitle;
  }
  
  public getErrorTitle(): string {
      return this.errorTitle;
  }
  
  public getInfoTitle(): string {
      return this.infoTitle;
  }
  
  public getWarningTitle(): string {
      return this.warningTitle;
  }
  
  // Setters pour permettre la configuration
  public setDefaultDuration(duration: number): void {
      this.defaultDuration = duration;
  }
  
  public setMaxVisibleToasts(max: number): void {
      this.maxVisibleToasts = max;
  }
  
  public setDefaultPosition(position: string): void {
      this.defaultPosition = position;
  }
  
  public setSuccessColor(color: string): void {
      this.successColor = color;
  }
  
  public setErrorColor(color: string): void {
      this.errorColor = color;
  }
  
  public setInfoColor(color: string): void {
      this.infoColor = color;
  }
  
  public setWarningColor(color: string): void {
      this.warningColor = color;
  }
  
  public setSuccessTitle(title: string): void {
      this.successTitle = title;
  }
  
  public setErrorTitle(title: string): void {
      this.errorTitle = title;
  }
  
  public setInfoTitle(title: string): void {
      this.infoTitle = title;
  }
  
  public setWarningTitle(title: string): void {
      this.warningTitle = title;
  }
}