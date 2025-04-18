import { ToastConfig } from "../config/ToastConfig.js";
import { ToastObserver } from "./ToastObserver.js";
import { PositionStrategyFactory } from "./PositionStrategy.js";
export class ToastManager {
    static instance;
    container = null;
    queue = [];
    activeToasts = [];
    positionStrategy;
    priority = 2;
    constructor() {
        const config = ToastConfig.getInstance();
        const strategyFactory = new PositionStrategyFactory();
        this.positionStrategy = strategyFactory.createStrategy(config.getDefaultPosition());
        this.createContainer();
        this.setupObservers();
    }
    static getInstance() {
        if (!ToastManager.instance) {
            ToastManager.instance = new ToastManager();
        }
        return ToastManager.instance;
    }
    getContainer() {
        return this.container;
    }
    show(toast) {
        const config = ToastConfig.getInstance();
        if (this.activeToasts.length < config.getMaxVisibleToasts()) {
            if (toast.getPriority() < 2) {
                this.activeToasts.unshift(toast);
            }
            else {
                this.activeToasts.push(toast);
            }
            toast.show();
        }
        else {
            this.queue.push(toast);
            ToastObserver.getInstance().notify('toast:queue-updated', {
                queueSize: this.queue.length,
                activeToasts: this.activeToasts.length
            });
        }
    }
    setPosition(position) {
        const strategyFactory = new PositionStrategyFactory();
        this.positionStrategy = strategyFactory.createStrategy(position);
        if (this.container) {
            this.container.className = 'toast-container';
            this.container.classList.add(this.positionStrategy.getClassName());
            this.positionStrategy.applyPosition(this.container);
        }
    }
    setupObservers() {
        ToastObserver.getInstance().subscribe('toast:dismissed', (toast) => {
            this.activeToasts = this.activeToasts.filter(t => t.getId() !== toast.getId());
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
    createContainer() {
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
        this.container = container;
        this.container.classList.add(this.positionStrategy.getClassName());
        this.positionStrategy.applyPosition(this.container);
    }
}
