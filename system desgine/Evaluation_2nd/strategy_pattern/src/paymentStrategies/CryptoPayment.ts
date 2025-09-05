import { IPaymentStrategy } from "../types";

export class CryptoPayment implements IPaymentStrategy{
    pay(amount: number): void {
        let total = amount + 50 
        console.log(`Payment done by Crypto , total Payment : ${total}`);
    }
    validateDetails(details: any): boolean {
        if(details.walletAddress==false){
            return false
        }else return true
    }

}