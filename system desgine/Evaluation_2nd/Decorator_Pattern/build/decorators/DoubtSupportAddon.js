"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubtSupportAddon = void 0;
const types_1 = require("../types");
class DoubtSupportAddon extends types_1.Decorator {
    getCost() {
        if (this.subsciption.getFeatures().includes("Weekly 1-on-1 Mentor Sessions")) {
            console.log("inside if condition");
            let totalCost = this.subsciption.getCost() + 300;
            let finalCost = totalCost - totalCost * (15 / 100);
            return finalCost;
        }
        else {
            return this.subsciption.getCost() + 300;
        }
    }
    getFeatures() {
        return [...this.subsciption.getFeatures(), "24/7 Doubt Support via Chat"];
    }
}
exports.DoubtSupportAddon = DoubtSupportAddon;
