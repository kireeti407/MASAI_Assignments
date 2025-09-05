import { IPaymentStrategy } from "../types";

export class PayPalPayment implements IPaymentStrategy {
  pay(amount: number): void {
    let total = amount + amount * (2.5 / 100);
    console.log(`Payment done by paypal , total Payment : ${total}`);
  }
  validateDetails(details: any): boolean {
    if (details.email == false) {
      return false;
    } else return true;
  }
}
