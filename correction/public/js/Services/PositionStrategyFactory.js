import { TopRightStrategy, TopLeftStrategy, BottomRightStrategy, BottomLeftStrategy } from "./PositionStrategy.js";
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
