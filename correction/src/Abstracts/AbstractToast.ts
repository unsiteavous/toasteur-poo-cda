import { ToastObserver } from '../Services/ToastObserver.js';
import { ToastConfig } from '../config/ToastConfig.js';
import { ToastManager } from '../Services/ToastManager.js';

export abstract class AbstractToast {
    protected id: string;
    protected message: string;
    protected duration: number;
    protected element: HTMLElement | null = null;
    protected priority: number;

    constructor(message: string, duration?: number) {
        this.id = this.generateId();
        this.message = message;
        this.duration = duration || ToastConfig.getInstance().getDefaultDuration();
    }

    // Template Method - définit le squelette d'algorithme
    public show(): void {
        this.createElement();
        this.setupListeners();
        this.render();

        // Notification d'Observer
        ToastObserver.getInstance().notify('toast:created', this);

        // Auto-dismiss après la durée spécifiée
        setTimeout(() => {
            this.dismiss();
        }, this.duration);
    }

    // Permet de supprimer un toast
    public dismiss(): void {
        if (this.element) {
            this.element.classList.add('toast-dismissing');

            setTimeout(() => {
                if (this.element && this.element.parentNode) {
                    this.element.parentNode.removeChild(this.element);
                    ToastObserver.getInstance().notify('toast:dismissed', this);
                }
            }, 300); // Temps de l'animation
        }
    }

    public getId(): string {
        return this.id;
    }

    public getElement(): HTMLElement | null {
        return this.element;
    }

    // Méthodes abstraites que les sous-classes doivent implémenter
    protected abstract getType(): string;
    protected abstract getIconClass(): string;
    protected abstract getBackgroundColor(): string;
    protected abstract getDefaultTitle(): string;

    // Méthodes communes avec implémentation par défaut
    protected createElement(): void {
        this.element = document.createElement('div');
        this.element.className = `toast toast-${this.getType()}`;
        this.element.id = this.id;
        this.element.style.backgroundColor = this.getBackgroundColor();

        const config = ToastConfig.getInstance();

        const html = `
          <div class="toast-header">
              <i class="${this.getIconClass()}"></i>
              <span class="toast-title">${this.getDefaultTitle()}</span>
              <button class="toast-close">&times;</button>
          </div>
          <div class="toast-body">${this.message}</div>
      `;

        this.element.innerHTML = html;
    }

    protected setupListeners(): void {
        if (this.element) {
            const closeBtn = this.element.querySelector('.toast-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.dismiss());
            }
        }
    }

    protected render(): void {
        const container = ToastManager.getInstance().getContainer();
        if (container && this.element) {
            if(this.priority < 2 ){
                container.insertBefore(this.element, container.firstChild)
            } else {
                container.appendChild(this.element);
            }

            // Force reflow pour déclencher l'animation
            void this.element.offsetWidth;
            this.element.classList.add('toast-visible');
        }
    }

    private generateId(): string {
        return 'toast-' + Math.random().toString(36).substr(2, 9);
    }

    public getPriority(): number {
        return this.priority;
    }

    public setPriority(priority: number) {
        this.priority = priority;
    }

}