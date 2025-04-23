import ToastManager from "../Services/ToastManager.js";
export default class AbstractToast {
    id;
    message;
    duration;
    element;
    toastManager;
    timeout;
    constructor(message, duration = 7000) {
        this.message = message;
        this.duration = duration;
        this.initializeId();
        this.element = this.createToast();
        this.toastManager = ToastManager.getInstance();
        this.toastManager.addToast(this);
    }
    initializeId() {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let id = '';
        for (let i = 0; i < 10; i++) {
            id += characters[Math.floor(Math.random() * characters.length)];
        }
        if (id.length === 10) {
            this.id = id;
            return true;
        }
        return false;
    }
    createToast() {
        let toast = document.createElement('div');
        toast.id = this.id;
        toast.classList.add('toast');
        let entete = document.createElement('div');
        entete.classList.add('entete');
        let close = document.createElement('button');
        close.classList.add('close');
        close.innerHTML = '&times;';
        let h4 = document.createElement('h4');
        h4.textContent = "Titre du toast";
        h4.classList.add('titre');
        let p = document.createElement('p');
        p.innerText = this.message;
        entete.append(h4, close);
        toast.append(entete, p);
        close.addEventListener('click', () => {
            this.removeToast();
            clearTimeout(this.timeout);
        });
        return toast;
    }
    setTitre(titre) {
        let baliseTitre = this.element.querySelector('.titre');
        baliseTitre.textContent = titre;
    }
    render(toast) {
        document.querySelector('.toastContainer').appendChild(toast);
    }
    removeToast() {
        document.querySelector('.toastContainer').removeChild(this.element);
        this.toastManager.refreshQueue();
    }
    getElement() {
        return this.element;
    }
    getDuration() {
        return this.duration;
    }
}
