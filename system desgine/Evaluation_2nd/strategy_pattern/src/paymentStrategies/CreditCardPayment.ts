import { IPaymentStrategy } from "../types";

export class CreditCardPayment implements IPaymentStrategy{
    
    pay(amount: number): void {
        let total = amount + amount* (1.5/100) 
        console.log(`Payment done by card , total Payment : ${total}`);
    }
    validateDetails(details: any): boolean {
        // Must check for cardNumber, expiryDate, and cvv in the details object.

       if(!details.cardNumber && details.expiryDate && !details.cvv){
        return false
       }
       return true
    }

}