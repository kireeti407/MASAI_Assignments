import { Decorator } from "../types";

export class MentorAccessAddon extends Decorator {
  getCost(): number {
    if (this.subsciption.getFeatures().includes("24/7 Doubt Support via Chat")) {
      let totalCost = this.subsciption.getCost() + 500;
      let finalCost =totalCost - totalCost * (15 / 100);
      return finalCost;
    } else {
      return this.subsciption.getCost() + 500;
    }
  }
  getFeatures(): string[] {
    return [...this.subsciption.getFeatures(), "Weekly 1-on-1 Mentor Sessions"];
  }
}
