"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MentorAccessAddon = void 0;
const types_1 = require("../types");
class MentorAccessAddon extends types_1.Decorator {
    getCost() {
        if (this.subsciption.getFeatures().includes("24/7 Doubt Support via Chat")) {
            let totalCost = this.subsciption.getCost() + 500;
            let finalCost = totalCost - totalCost * (15 / 100);
            return finalCost;
        }
        else {
            return this.subsciption.getCost() + 500;
        }
    }
    getFeatures() {
        return [...this.subsciption.getFeatures(), "Weekly 1-on-1 Mentor Sessions"];
    }
}
exports.MentorAccessAddon = MentorAccessAddon;
