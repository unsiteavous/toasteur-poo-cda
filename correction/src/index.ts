import { addStylesheet } from './Services/StylesheetManager.js';
import { Toasteur } from './Services/Toasteur.js';
import { ToastConfig } from './config/ToastConfig.js';

addStylesheet();

const toasteur = Toasteur.getInstance();

// Exposition globale via window
interface Window {
  toasteur: {
      success: (message: string, duration?: number) => void;
      error: (message: string, duration?: number) => void;
      info: (message: string, duration?: number) => void;
      warning: (message: string, duration?: number) => void;
      setPosition: (position: string) => void;
      config: ToastConfig;
  };
}

// Exposition globale de l'API
(window as any).toasteur = {
  success: (message: string, duration?: number) => toasteur.success(message, duration),
  error: (message: string, duration?: number) => toasteur.error(message, duration),
  info: (message: string, duration?: number) => toasteur.info(message, duration),
  warning: (message: string, duration?: number) => toasteur.warning(message, duration),
  setPosition: (position: string) => toasteur.setPosition(position),
  config: toasteur.getConfig()
};

// Exporter pour les utilisateurs de modules
export default toasteur;