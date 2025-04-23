export interface PositionStrategy {
  applyPosition(container: HTMLElement): void;
  getClassName(): string;
}

export class TopRightStrategy implements PositionStrategy {
  applyPosition(container: HTMLElement): void {
      container.style.top = '20px';
      container.style.right = '20px';
      container.style.bottom = 'auto';
      container.style.left = 'auto';
  }
  
  getClassName(): string {
      return 'toast-container-top-right';
  }
}

export class TopLeftStrategy implements PositionStrategy {
  applyPosition(container: HTMLElement): void {
      container.style.top = '20px';
      container.style.left = '20px';
      container.style.bottom = 'auto';
      container.style.right = 'auto';
  }
  
  getClassName(): string {
      return 'toast-container-top-left';
  }
}

export class BottomRightStrategy implements PositionStrategy {
  applyPosition(container: HTMLElement): void {
      container.style.bottom = '20px';
      container.style.right = '20px';
      container.style.top = 'auto';
      container.style.left = 'auto';
  }
  
  getClassName(): string {
      return 'toast-container-bottom-right';
  }
}

export class BottomLeftStrategy implements PositionStrategy {
  applyPosition(container: HTMLElement): void {
      container.style.bottom = '20px';
      container.style.left = '20px';
      container.style.top = 'auto';
      container.style.right = 'auto';
  }
  
  getClassName(): string {
      return 'toast-container-bottom-left';
  }
}

export class PositionStrategyFactory {
  public createStrategy(position: string): PositionStrategy {
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
              return new TopRightStrategy(); // Stratégie par défaut
      }
  }
}