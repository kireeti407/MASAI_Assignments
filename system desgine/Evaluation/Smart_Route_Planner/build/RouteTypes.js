"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortestDistanceRoute = exports.ScenicRoute = exports.FastestRoute = void 0;
class FastestRoute {
    calculate() {
        console.log("Calculating fastest route from Delhi to Jaipur...\nRecommended route: NH48 - 280 km - 4 hours");
    }
}
exports.FastestRoute = FastestRoute;
class ScenicRoute {
    calculate() {
        console.log("Calculating Scenic route from Delhi to Jaipur...\nRecommended route: NH48 - 310 km - 5 hours");
    }
}
exports.ScenicRoute = ScenicRoute;
class ShortestDistanceRoute {
    calculate() {
        console.log("Calculating Shortest distance route from Delhi to Jaipur...\nRecommended route: NH48 - 250 km - 5 hours");
    }
}
exports.ShortestDistanceRoute = ShortestDistanceRoute;
