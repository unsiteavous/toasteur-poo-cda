import AbstractToast from "../Abstracts/AbstractToast.js";

export default class SuccessToast extends AbstractToast {
  constructor(message:string, duration:number) {
    super(message, duration);

    this.setTitre('Bravo !');
  }

  createToast(): HTMLElement 
  {
      let toast = super.createToast();
      toast.classList.add('success');

      return toast;
  }
}