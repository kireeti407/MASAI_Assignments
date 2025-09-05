"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicSubscription = void 0;
const types_1 = require("../types");
class BasicSubscription extends types_1.CourseSubscription {
    getCost() {
        return 499;
    }
    getFeatures() {
        return ["Access to all basic courses"];
    }
}
exports.BasicSubscription = BasicSubscription;
