"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDisplay = void 0;
class CustomerDisplay {
    update(orderId, status) {
        if (status === "Ready") {
            console.log(`Order #${orderId} is Ready! Please pick up your coffee.`);
        }
    }
}
exports.CustomerDisplay = CustomerDisplay;
