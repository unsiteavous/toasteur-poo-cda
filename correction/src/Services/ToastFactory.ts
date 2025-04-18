import { SuccessToast } from "../Models/SuccessToast.js";
import { ErrorToast } from "../Models/ErrorToast.js";
import { InfoToast } from "../Models/InfoToast.js";
import { WarningToast } from "../Models/WarningToast.js";
import { AbstractToast } from "../Abstracts/AbstractToast.js";

// type ToastConstructor = new (
//     message: string, 
//     duration?: number
//   ) => AbstractToast;

// // src/factory/ToastFactory.ts
// export class ToastFactory {
//     // Configuration des types de toasts avec leurs propriétés par défaut
//     private toastTypes: Record<string, { class: ToastConstructor, priority: number }> = {
//         success: {
//             class: SuccessToast,
//             priority: 2  // Priorité normale
//         },
//         error: {
//             class: ErrorToast,
//             priority: 1  // Haute priorité
//         },
//         info: {
//             class: InfoToast,
//             priority: 3  // Basse priorité
//         },
//         warning: {
//             class: WarningToast,
//             priority: 2  // Priorité normale
//         }
//     };

//     // Factory Method avec logique enrichie
//     public createToast(type: string, message: string, duration?: number): AbstractToast {
//         // Normalisation du type (permet des variantes comme "SUCCESS", "Success", etc.)
//         const normalizedType = type.toLowerCase();

//         // Validation du type, avec fallback sur info si type inconnu
//         const toastConfig = this.toastTypes[normalizedType as keyof typeof this.toastTypes] || this.toastTypes.info;

//         // Création de l'instance avec la classe appropriée
//         const ToastClass = toastConfig.class;
//         const toast = new ToastClass(message, duration);

//         // Ajout de métadonnées (utilisées par le ToastManager pour la file d'attente)
//         toast.setPriority(toastConfig.priority);


//         return toast;
//     }

//     // Méthode pour enregistrer un nouveau type de toast personnalisé
//     public registerToastType(type: string, options:  { 
//         class: ToastConstructor, 
//         priority: number 
//     }): void {
//         this.toastTypes[type.toLowerCase()] = options;
//     }
// }

export class ToastFactory {
    // Factory Method pattern
    public createToast(type: string, message: string, duration?: number): AbstractToast {
        let toast;

        switch (type.toLowerCase()) {
            case 'success':
                toast = new SuccessToast(message, duration);
                toast.setPriority(2);
                return toast;
            case 'error':
                toast = new ErrorToast(message, duration);
                toast.setPriority(1);
                return toast;
            case 'info':
                toast = new InfoToast(message, duration);
                toast.setPriority(3);
                return toast;
            case 'warning':
                toast = new WarningToast(message, duration);
                toast.setPriority(2);
                return toast;
            default:
                // Par défaut, on retourne un InfoToast
                toast = new InfoToast(message, duration);
                toast.setPriority(3);
                return toast;
        }
    }
}