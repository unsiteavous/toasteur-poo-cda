export class ToastObserver {
    static instance;
    listeners = {};
    constructor() { }
    static getInstance() {
        if (!ToastObserver.instance) {
            ToastObserver.instance = new ToastObserver();
        }
        return ToastObserver.instance;
    }
    subscribe(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }
    unsubscribe(event, callback) {
        if (this.listeners[event]) {
            this.listeners[event] = this.listeners[event].filter(listener => listener !== callback);
        }
    }
    notify(event, data) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(callback => callback(data));
        }
    }
}
