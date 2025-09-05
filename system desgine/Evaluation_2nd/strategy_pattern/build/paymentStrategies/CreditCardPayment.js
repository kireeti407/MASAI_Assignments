"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPayment = void 0;
class CreditCardPayment {
    pay(amount) {
        let total = amount + amount * (1.5 / 100);
        console.log(`Payment done by card , total Payment : ${total}`);
    }
    validateDetails(details) {
        // Must check for cardNumber, expiryDate, and cvv in the details object.
        if (!details.cardNumber && details.expiryDate && !details.cvv) {
            return false;
        }
        return true;
    }
}
exports.CreditCardPayment = CreditCardPayment;
