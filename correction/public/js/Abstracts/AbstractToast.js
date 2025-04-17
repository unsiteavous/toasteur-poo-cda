import { ToastObserver } from '../Services/ToastObserver.js';
import { ToastConfig } from '../config/ToastConfig.js';
import { ToastManager } from '../Services/ToastManager.js';
export class AbstractToast {
    id;
    message;
    duration;
    element = null;
    constructor(message, duration) {
        this.id = this.generateId();
        this.message = message;
        this.duration = duration || ToastConfig.getInstance().getDefaultDuration();
    }
    show() {
        this.createElement();
        this.setupListeners();
        this.render();
        ToastObserver.getInstance().notify('toast:created', this);
        setTimeout(() => {
            this.dismiss();
        }, this.duration);
    }
    dismiss() {
        if (this.element) {
            this.element.classList.add('toast-dismissing');
            setTimeout(() => {
                if (this.element && this.element.parentNode) {
                    this.element.parentNode.removeChild(this.element);
                    ToastObserver.getInstance().notify('toast:dismissed', this);
                }
            }, 300);
        }
    }
    getId() {
        return this.id;
    }
    getElement() {
        return this.element;
    }
    createElement() {
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
    setupListeners() {
        if (this.element) {
            const closeBtn = this.element.querySelector('.toast-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.dismiss());
            }
        }
    }
    render() {
        const container = ToastManager.getInstance().getContainer();
        if (container && this.element) {
            container.appendChild(this.element);
            void this.element.offsetWidth;
            this.element.classList.add('toast-visible');
        }
    }
    generateId() {
        return 'toast-' + Math.random().toString(36).substr(2, 9);
    }
}
