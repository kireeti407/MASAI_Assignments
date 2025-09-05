import { CourseSubscription } from "../types";

export class BasicSubscription extends CourseSubscription {
  getCost(): number {
    return 499;
  }
  getFeatures(): string[] {
    return ["Access to all basic courses"];
  }
}
