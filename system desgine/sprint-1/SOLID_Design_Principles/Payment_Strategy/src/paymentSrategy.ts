export interface PaymentStrategy{
doPayment(amount:number):void ;
}


export class CardPayment implements PaymentStrategy{
    doPayment(amount:number): void {
        let fee = 0  
        let total = amount + fee
        console.log(`Payment Done by Credit Card , total Payment is : ${total}`)
    }
}

export class UPIPayment implements PaymentStrategy{
    doPayment(amount:number): void {
        let fee = 10 
        let total = amount + fee
        console.log(`Payment Done by UPI , total Payment is : ${total}`)
    }
}

export class BitcoinPayment implements PaymentStrategy{
    doPayment(amount:number): void {
        let fee = 40 
        let total = amount + fee
        console.log(`Payment Done by Bit Coin , total Payment is : ${total}`)
    }
}