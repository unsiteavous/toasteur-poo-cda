import AbstractToast from "../Abstracts/AbstractToast.js";

export default class ErrorToast extends AbstractToast {
  constructor(message:string, duration:number) {
    super(message, duration);

    this.setTitre('Echec !');
  }

  createToast(): HTMLElement 
  {
      let toast = super.createToast();
      toast.classList.add('error');

      return toast;
  }
}