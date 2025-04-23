export default class ToastManager {
    toastContainer = null;
    queue = [];
    static instance;
    constructor() {
        this.toastContainer = document.querySelector('.toastContainer');
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ToastManager();
        }
        return this.instance;
    }
    addToast(toast) {
        if (this.isSomePlace()) {
            this.render(toast);
        }
        else {
            this.queue.push(toast);
        }
    }
    isSomePlace() {
        return this.toastContainer.childElementCount < 4;
    }
    refreshQueue() {
        if (this.isSomePlace()) {
            const toast = this.queue.shift();
            if (toast) {
                this.render(toast);
            }
        }
    }
    render(toast) {
        this.toastContainer.appendChild(toast.getElement());
        toast.timeout = setTimeout(() => {
            toast.removeToast();
        }, toast.getDuration());
    }
}
