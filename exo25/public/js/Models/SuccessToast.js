import AbstractToast from "../Abstracts/AbstractToast.js";
export default class SuccessToast extends AbstractToast {
    constructor(message, duration) {
        super(message, duration);
        this.setTitre('Bravo !');
    }
    createToast() {
        let toast = super.createToast();
        toast.classList.add('success');
        return toast;
    }
}
