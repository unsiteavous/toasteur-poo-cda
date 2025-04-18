

/**
 * @type {ToastPosition} position Position de la zone de toasts. choix possibles :
 *  - "top-left"
 *  - "top-right"
 *  - "bottom-left"
 *  - "bottom-right"
 * @default "bottom-left"
 * 
*/
export enum defaultPosition {
    TopLeft,
    TopRight,
    BottomLeft,
    BottomRight,
}

export const position: defaultPosition = defaultPosition.BottomLeft;

// Couleurs des icones et fonds
// * Les couleurs doivent être en hexadécimal !
export const infoColor: string = "#4caf50";
export const errorColor: string = "#f44336";
export const successColor: string = "#2196f3";
export const warningColor: string = "#ff9800";

// Titres des toasts
export const infoTitle: string = "Info";
export const errorTitle: string = "Erreur !";
export const successTitle: string = "Succès !";
export const warningTitle: string = "Attention !";

/**
 * @type {number} displayDuration Durée d'affichage des toasts.
 */
export const defaultDuration: number = 7000;

// Nombre maximum de toasts affichés en même temps
export const maxVisibleToasts = 4;