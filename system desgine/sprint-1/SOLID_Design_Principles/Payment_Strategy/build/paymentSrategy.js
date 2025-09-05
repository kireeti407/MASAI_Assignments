"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitcoinPayment = exports.UPIPayment = exports.CardPayment = void 0;
class CardPayment {
    doPayment(amount) {
        let fee = 0;
        let total = amount + fee;
        console.log(`Payment Done by Credit Card , total Payment is : ${total}`);
    }
}
exports.CardPayment = CardPayment;
class UPIPayment {
    doPayment(amount) {
        let fee = 10;
        let total = amount + fee;
        console.log(`Payment Done by UPI , total Payment is : ${total}`);
    }
}
exports.UPIPayment = UPIPayment;
class BitcoinPayment {
    doPayment(amount) {
        let fee = 40;
        let total = amount + fee;
        console.log(`Payment Done by Bit Coin , total Payment is : ${total}`);
    }
}
exports.BitcoinPayment = BitcoinPayment;
