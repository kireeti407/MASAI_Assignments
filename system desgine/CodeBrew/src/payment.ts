// Payment strategy interface
export interface PaymentStrategy {
    pay(amount: number): void;
}

// Credit Card Payment
export class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ₹${amount} using Credit Card`);
    }
}

// digital Card Payment
export class DigitalWalletPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ₹${amount} using Digital Wallet`);
    }
}