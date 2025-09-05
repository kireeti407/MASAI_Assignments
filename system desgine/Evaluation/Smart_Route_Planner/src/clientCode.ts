import { FastestRoute, ScenicRoute, ShortestDistanceRoute } from "./RouteTypes";
import { RoutePlanner } from "./types";

let fastestRoute = new FastestRoute();
let shortestDistanceRoute = new ShortestDistanceRoute();
let scenicRoute = new ScenicRoute();

let routePlanner = new RoutePlanner(fastestRoute);
routePlanner.getRoute();

routePlanner.setRouteStrategy(scenicRoute);
routePlanner.getRoute();
