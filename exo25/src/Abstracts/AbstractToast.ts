import ToastManager from "../Services/ToastManager.js";
/**
 * AbstractToast est la classe abstraite de tous les toasts.
 * 
 * @property {string} id un ID de 10 caractères généré de manière aléatoire.
 */
export default abstract class AbstractToast {
  protected id: string;
  protected message: string;

  /**
   * Duration : temps d'affichage du toast
   *
   * @property {null|number} duration en millisecondes, par défaut 7000
  */
  protected duration: null|number;
  protected element: HTMLElement;
  protected toastManager: ToastManager;
  public timeout: any;

  constructor(message: string, duration: number = 7000){
    this.message = message;
    this.duration = duration;

    this.initializeId();

    this.element = this.createToast();

    // Appeler le toastManager
    this.toastManager = ToastManager.getInstance();
    this.toastManager.addToast(this);
  }

  private initializeId():boolean{
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for(let i = 0; i < 10; i++ ){
      id += characters[Math.floor(Math.random()*characters.length)]
    }
    if(id.length === 10)  {
      this.id = id;
      return true;
    }
    return false;

  }

  protected createToast():HTMLElement{
    let toast = document.createElement('div');
    toast.id = this.id;
    toast.classList.add('toast');

    // étape intermédiaire :
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
    })

    return toast;
  }

  setTitre(titre:string) {
    let baliseTitre = this.element.querySelector('.titre');
    baliseTitre.textContent = titre;
  }

  private render(toast:HTMLElement):void{
    document.querySelector('.toastContainer').appendChild(toast);
  }

  public removeToast():void{
      document.querySelector('.toastContainer').removeChild(this.element);
      this.toastManager.refreshQueue();
  }

  public getElement():HTMLElement{
    return this.element;  
  }

  public getDuration(): null|number {
    return this.duration;
  }
}