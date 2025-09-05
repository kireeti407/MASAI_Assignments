export interface IPaymentStrategy {
  pay(amount: number): void;
  validateDetails(details: object): boolean;
}


export class PaymentProcessor{
    paymentStrategy : IPaymentStrategy ; 
    constructor(paymentStrategy : IPaymentStrategy){
        this.paymentStrategy = paymentStrategy
    }

    setPaymentStrategy(paymentStrategy : IPaymentStrategy){
        this.paymentStrategy = paymentStrategy
    }
    processPayment(details: object, amount: number):void{
        // console.log(details);
        let res = this.paymentStrategy.validateDetails(details) 
        if(res){
            this.paymentStrategy.pay(amount)
        }else {
            console.log("validation fails , Please provide valid details");
        }
    }
}