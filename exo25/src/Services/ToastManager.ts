import AbstractToast from "../Abstracts/AbstractToast.js";

export default class ToastManager {
  private toastContainer: HTMLElement | null = null;
  private queue: AbstractToast[] = [];

  private static instance: ToastManager;

  public constructor() {
    this.toastContainer = document.querySelector('.toastContainer');
  }

  public static getInstance(): ToastManager {
    if (!this.instance) {
      this.instance = new ToastManager();
    }
    return this.instance;
  }

  public addToast(toast: AbstractToast) {
    if(this.isSomePlace()) {
      this.render(toast);
    } else {
      this.queue.push(toast);
    }
  }

  /**
   * Méthode qui me précise si je peux mettre un nouveau toast dans la page ou pas. 4 toasts max.
   *
   * @return  {boolean} true si il y a de la place, false sinon
   */
  private isSomePlace(): boolean {
    return this.toastContainer.childElementCount < 4;
  }

  public refreshQueue() {
    if(this.isSomePlace()) {
      const toast = this.queue.shift();
      if(toast) {
        this.render(toast);
      }
    }
  }

  private render(toast: AbstractToast) {
    this.toastContainer.appendChild(toast.getElement());
      toast.timeout = setTimeout(() => {
        toast.removeToast();
      }, toast.getDuration());
    }
}