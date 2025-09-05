"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paymentSrategy_1 = require("./paymentSrategy");
class Payment {
    constructor(typeOfPayment) {
        this.typeOfPayment = typeOfPayment;
    }
    process(amount) {
        this.typeOfPayment.doPayment(amount);
    }
    setStrategy(typeOfPayment) {
        this.typeOfPayment = typeOfPayment;
    }
}
const payment = new Payment(new paymentSrategy_1.CardPayment());
payment.process(1000);
payment.setStrategy(new paymentSrategy_1.BitcoinPayment());
payment.process(2000);
payment.setStrategy(new paymentSrategy_1.UPIPayment);
payment.process(400);
