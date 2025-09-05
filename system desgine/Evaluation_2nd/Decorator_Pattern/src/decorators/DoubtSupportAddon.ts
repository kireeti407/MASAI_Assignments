import { Decorator } from "../types";

export class DoubtSupportAddon extends Decorator {
  getCost(): number {
    if (this.subsciption.getFeatures().includes("Weekly 1-on-1 Mentor Sessions")) {
      console.log("inside if condition");
      let totalCost = this.subsciption.getCost() + 300;
      let finalCost = totalCost - totalCost * (15 / 100);
      return finalCost;
    } else {
      return this.subsciption.getCost() + 300;
    }
  }
  getFeatures(): string[] {
    return [...this.subsciption.getFeatures(), "24/7 Doubt Support via Chat"];
  }
}
