export default class AbstractToast {
    id;
    message;
    duration;
    element;
    constructor(message, duration = 7000) {
        this.message = message;
        this.duration = duration;
        this.initializeId();
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
}
