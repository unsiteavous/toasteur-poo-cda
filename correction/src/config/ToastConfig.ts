export class ToastConfig {
  private static instance: ToastConfig;
  
  // Configuration par défaut
  private defaultDuration: number = 3000;
  private maxVisibleToasts: number = 4;
  private defaultPosition: string = 'top-right';
  
  // Couleurs par défaut
  private successColor: string = '#4caf50';
  private errorColor: string = '#f44336';
  private infoColor: string = '#2196f3';
  private warningColor: string = '#ff9800';
  
  // Titres par défaut
  private successTitle: string = 'Succès';
  private errorTitle: string = 'Erreur';
  private infoTitle: string = 'Information';
  private warningTitle: string = 'Avertissement';
  
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