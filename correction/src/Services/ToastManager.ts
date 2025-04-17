import { ToastConfig } from "../config/ToastConfig.js";
import { ToastObserver } from "./ToastObserver.js";
import { AbstractToast } from "./../Abstracts/AbstractToast.js";
import { PositionStrategy } from "./PositionStrategy.js";
import { PositionStrategyFactory } from "./PositionStrategyFactory.js";

export class ToastManager {
  private static instance: ToastManager;
  private container: HTMLElement | null = null;
  private queue: AbstractToast[] = [];
  private activeToasts: AbstractToast[] = [];
  private positionStrategy: PositionStrategy;
  
  private constructor() {
      const config = ToastConfig.getInstance();
      const strategyFactory = new PositionStrategyFactory();
      this.positionStrategy = strategyFactory.createStrategy(config.getDefaultPosition());
      
      this.createContainer();
      this.setupObservers();
  }
  
  public static getInstance(): ToastManager {
      if (!ToastManager.instance) {
          ToastManager.instance = new ToastManager();
      }
      return ToastManager.instance;
  }
  
  public getContainer(): HTMLElement | null {
      return this.container;
  }
  
  public show(toast: AbstractToast): void {
      const config = ToastConfig.getInstance();
      
      if (this.activeToasts.length < config.getMaxVisibleToasts()) {
          this.activeToasts.push(toast);
          toast.show();
      } else {
          // Chain of Responsibility - Si trop de toasts sont actifs, on met en file d'attente
          this.queue.push(toast);
          ToastObserver.getInstance().notify('toast:queue-updated', {
              queueSize: this.queue.length,
              activeToasts: this.activeToasts.length
          });
      }
  }
  
  public setPosition(position: string): void {
      const strategyFactory = new PositionStrategyFactory();
      this.positionStrategy = strategyFactory.createStrategy(position);
      
      if (this.container) {
          // Réinitialiser les classes
          this.container.className = 'toast-container';
          this.container.classList.add(this.positionStrategy.getClassName());
          this.positionStrategy.applyPosition(this.container);
      }
  }
  
  private setupObservers(): void {
      ToastObserver.getInstance().subscribe('toast:dismissed', (toast: AbstractToast) => {
          this.activeToasts = this.activeToasts.filter(t => t.getId() !== toast.getId());
          
          // Si on a des toasts en attente et de la place, on en affiche un nouveau
          if (this.queue.length > 0 && this.activeToasts.length < ToastConfig.getInstance().getMaxVisibleToasts()) {
              const nextToast = this.queue.shift();
              if (nextToast) {
                  this.activeToasts.push(nextToast);
                  nextToast.show();
              }
              
              ToastObserver.getInstance().notify('toast:queue-updated', {
                  queueSize: this.queue.length,
                  activeToasts: this.activeToasts.length
              });
          }
      });
  }
  
  private createContainer(): void {
      // Vérifier si le conteneur existe déjà
      let container = document.querySelector('.toast-container');
      
      if (!container) {
          container = document.createElement('div');
          container.className = 'toast-container';
          document.body.appendChild(container);
      }
      
      this.container = container as HTMLElement;
      this.container.classList.add(this.positionStrategy.getClassName());
      this.positionStrategy.applyPosition(this.container);
  }
}