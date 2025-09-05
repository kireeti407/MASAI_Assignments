import { BitcoinPayment, CardPayment, PaymentStrategy, UPIPayment } from "./paymentSrategy";

class Payment{
    typeOfPayment : PaymentStrategy 
    constructor(typeOfPayment : PaymentStrategy) {
        this.typeOfPayment = typeOfPayment ;
    }
    process(amount:number):void{
        this.typeOfPayment.doPayment(amount)
    }
    setStrategy(typeOfPayment : PaymentStrategy){
        this.typeOfPayment = typeOfPayment
    }
}
const payment = new Payment(new CardPayment());
payment.process(1000);

payment.setStrategy(new BitcoinPayment());
payment.process(2000);
payment.setStrategy(new UPIPayment)
payment.process(400)

