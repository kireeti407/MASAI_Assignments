"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decorator = exports.CourseSubscription = void 0;
class CourseSubscription {
}
exports.CourseSubscription = CourseSubscription;
class Decorator extends CourseSubscription {
    constructor(subsciption) {
        super();
        this.subsciption = subsciption;
    }
}
exports.Decorator = Decorator;
