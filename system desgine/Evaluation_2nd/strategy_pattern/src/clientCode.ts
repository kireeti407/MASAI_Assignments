import { CreditCardPayment } from "./paymentStrategies/CreditCardPayment";
import { CryptoPayment } from "./paymentStrategies/CryptoPayment";
import { PayPalPayment } from "./paymentStrategies/PayPalPayment";
import { PaymentProcessor } from "./types";



let creditCardPayment = new CreditCardPayment()
let paymentProcessor = new PaymentProcessor(creditCardPayment)
paymentProcessor.processPayment({cardNumber:100,expiryDate:"Tommorrow",cvv:"Correct"},400)


paymentProcessor.setPaymentStrategy(new PayPalPayment())
paymentProcessor.processPayment({email:"aswarth03@gmail.com"},400)

paymentProcessor.setPaymentStrategy(new CryptoPayment)
paymentProcessor.processPayment({walletAddress:"ATP"},500)