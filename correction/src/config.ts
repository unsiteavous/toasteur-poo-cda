

/**
 * @type {ToastPosition} position Position de la zone de toasts. choix possibles :
 *  - "top-left"
 *  - "top-right"
 *  - "bottom-left"
 *  - "bottom-right"
 * @default "bottom-left"
 * 
*/
export enum ToastPosition {
    TopLeft,
    TopRight,
    BottomLeft,
    BottomRight,
}

export const position: ToastPosition = ToastPosition.BottomLeft;

// Couleurs des toasts
export const infoBackgroundColor: string = "#78dfff";
export const errorBackgroundColor: string = "#ff9898";
export const successBackgroundColor: string = "chartreuse";
export const warningBackgroundColor: string = "#ffb300";

// Couleurs des icones et textes
// * Les couleurs doivent être en hexadécimal !
export const infoColor: string = "#000000";
export const errorColor: string = "#000000";
export const successColor: string = "#000000";
export const warningColor: string = "#000000";

// Titres des toasts
export const infoTitle: string = "Info";
export const errorTitle: string = "Erreur !";
export const successTitle: string = "Succès !";
export const warningTitle: string = "Attention !";

// Police des toasts
export const fontFamily: string = "Arial, Helvetica, sans-serif";

/**
 * @type {number} displayDuration Durée d'affichage des toasts.
 */
export const displayDuration: number = 7000;

// Afficher une barre de progression du temps restant : true ou false
export const showProgressBar: boolean = true;

// NE PAS MODIFIER CETTE LIGNE.
export const modulePath = import.meta.url.split('/').slice(0, -2).join('/');