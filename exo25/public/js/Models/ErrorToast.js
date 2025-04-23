import AbstractToast from "../Abstracts/AbstractToast.js";
export default class ErrorToast extends AbstractToast {
    constructor(message, duration) {
        super(message, duration);
        this.setTitre('Echec !');
    }
    createToast() {
        let toast = super.createToast();
        toast.classList.add('error');
        return toast;
    }
}
