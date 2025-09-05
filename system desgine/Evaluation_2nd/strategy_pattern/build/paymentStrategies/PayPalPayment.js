"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalPayment = void 0;
class PayPalPayment {
    pay(amount) {
        let total = amount + amount * (2.5 / 100);
        console.log(`Payment done by paypal , total Payment : ${total}`);
    }
    validateDetails(details) {
        if (details.email == false) {
            return false;
        }
        else
            return true;
    }
}
exports.PayPalPayment = PayPalPayment;
