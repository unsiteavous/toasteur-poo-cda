export class TopRightStrategy {
    applyPosition(container) {
        container.style.top = '20px';
        container.style.right = '20px';
        container.style.bottom = 'auto';
        container.style.left = 'auto';
    }
    getClassName() {
        return 'toast-container-top-right';
    }
}
export class TopLeftStrategy {
    applyPosition(container) {
        container.style.top = '20px';
        container.style.left = '20px';
        container.style.bottom = 'auto';
        container.style.right = 'auto';
    }
    getClassName() {
        return 'toast-container-top-left';
    }
}
export class BottomRightStrategy {
    applyPosition(container) {
        container.style.bottom = '20px';
        container.style.right = '20px';
        container.style.top = 'auto';
        container.style.left = 'auto';
    }
    getClassName() {
        return 'toast-container-bottom-right';
    }
}
export class BottomLeftStrategy {
    applyPosition(container) {
        container.style.bottom = '20px';
        container.style.left = '20px';
        container.style.top = 'auto';
        container.style.right = 'auto';
    }
    getClassName() {
        return 'toast-container-bottom-left';
    }
}
export class PositionStrategyFactory {
    createStrategy(position) {
        switch (position.toLowerCase()) {
            case 'top-right':
                return new TopRightStrategy();
            case 'top-left':
                return new TopLeftStrategy();
            case 'bottom-right':
                return new BottomRightStrategy();
            case 'bottom-left':
                return new BottomLeftStrategy();
            default:
                return new TopRightStrategy();
        }
    }
}
