export var defaultPosition;
(function (defaultPosition) {
    defaultPosition[defaultPosition["TopLeft"] = 0] = "TopLeft";
    defaultPosition[defaultPosition["TopRight"] = 1] = "TopRight";
    defaultPosition[defaultPosition["BottomLeft"] = 2] = "BottomLeft";
    defaultPosition[defaultPosition["BottomRight"] = 3] = "BottomRight";
})(defaultPosition || (defaultPosition = {}));
export const position = defaultPosition.BottomLeft;
export const infoColor = "#4caf50";
export const errorColor = "#f44336";
export const successColor = "#2196f3";
export const warningColor = "#ff9800";
export const infoTitle = "Info";
export const errorTitle = "Erreur !";
export const successTitle = "Succès !";
export const warningTitle = "Attention !";
export const defaultDuration = 7000;
export const maxVisibleToasts = 4;
