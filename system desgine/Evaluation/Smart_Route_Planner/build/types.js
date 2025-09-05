"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutePlanner = void 0;
class RoutePlanner {
    constructor(routeStrategy) {
        this.routeStrategy = routeStrategy;
    }
    getRoute() {
        this.routeStrategy.calculate();
    }
    setRouteStrategy(routeStrategy) {
        this.routeStrategy = routeStrategy;
    }
}
exports.RoutePlanner = RoutePlanner;
