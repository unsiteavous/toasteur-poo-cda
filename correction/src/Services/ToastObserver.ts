export type ToastEventType = 'toast:created' | 'toast:dismissed' | 'toast:queue-updated';

export class ToastObserver {
  private static instance: ToastObserver;
  private listeners: Record<string, Array<(data: any) => void>> = {};
  
  private constructor() {}
  
  public static getInstance(): ToastObserver {
      if (!ToastObserver.instance) {
          ToastObserver.instance = new ToastObserver();
      }
      return ToastObserver.instance;
  }
  
  public subscribe(event: ToastEventType, callback: (data: any) => void): void {
      if (!this.listeners[event]) {
          this.listeners[event] = [];
      }
      this.listeners[event].push(callback);
  }
  
  public unsubscribe(event: ToastEventType, callback: (data: any) => void): void {
      if (this.listeners[event]) {
          this.listeners[event] = this.listeners[event].filter(
              listener => listener !== callback
          );
      }
  }
  
  public notify(event: ToastEventType, data: any): void {
      if (this.listeners[event]) {
          this.listeners[event].forEach(callback => callback(data));
      }
  }
}