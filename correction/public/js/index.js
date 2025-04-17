import { addStylesheet } from './Services/StylesheetManager.js';
import { Toasteur } from './Services/Toasteur.js';
addStylesheet();
const toasteur = Toasteur.getInstance();
window.toasteur = {
    success: (message, duration) => toasteur.success(message, duration),
    error: (message, duration) => toasteur.error(message, duration),
    info: (message, duration) => toasteur.info(message, duration),
    warning: (message, duration) => toasteur.warning(message, duration),
    setPosition: (position) => toasteur.setPosition(position),
    config: toasteur.getConfig()
};
export default toasteur;
