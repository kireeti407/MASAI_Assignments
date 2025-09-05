export interface Route {
  calculate(): void;
}

export class RoutePlanner {
  routeStrategy: Route;
  constructor(routeStrategy: Route) {
    this.routeStrategy = routeStrategy;
  }
  getRoute(): void {
    this.routeStrategy.calculate();
  }
  setRouteStrategy(routeStrategy: Route) {
    this.routeStrategy = routeStrategy;
  }
}
