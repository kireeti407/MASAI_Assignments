"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoPayment = void 0;
class CryptoPayment {
    pay(amount) {
        let total = amount + 50;
        console.log(`Payment done by Crypto , total Payment : ${total}`);
    }
    validateDetails(details) {
        if (details.walletAddress == false) {
            return false;
        }
        else
            return true;
    }
}
exports.CryptoPayment = CryptoPayment;
