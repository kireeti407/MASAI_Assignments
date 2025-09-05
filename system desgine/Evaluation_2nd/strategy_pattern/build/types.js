"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProcessor = void 0;
class PaymentProcessor {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    setPaymentStrategy(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    processPayment(details, amount) {
        console.log(details);
        let res = this.paymentStrategy.validateDetails(details);
        if (res) {
            this.paymentStrategy.pay(amount);
        }
        else {
            console.log("validation fails , Please provide valid details");
        }
    }
}
exports.PaymentProcessor = PaymentProcessor;
