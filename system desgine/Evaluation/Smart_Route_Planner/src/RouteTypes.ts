import { Route } from "./types";


export class FastestRoute implements Route {
  calculate(): void {
    console.log(
      "Calculating fastest route from Delhi to Jaipur...\nRecommended route: NH48 - 280 km - 4 hours"
    );
  }
}

export class ScenicRoute implements Route {
  calculate(): void {
    console.log(
      "Calculating Scenic route from Delhi to Jaipur...\nRecommended route: NH48 - 310 km - 5 hours"
    );
  }
}
export class ShortestDistanceRoute implements Route {
  calculate(): void {
    console.log(
      "Calculating Shortest distance route from Delhi to Jaipur...\nRecommended route: NH48 - 250 km - 5 hours"
    );
  }
}
