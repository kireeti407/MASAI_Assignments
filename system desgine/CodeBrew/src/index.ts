import { Latte, Milk, CaramelSyrup } from "./coffee";
import { Order } from "./order";
import { CustomerDisplay } from "./observer";
import { CreditCardPayment } from "./payment";
import { OrderManager } from "./ordermanager";


let coffee = new Latte();

coffee = new Milk(coffee);
coffee = new CaramelSyrup(coffee);


const order = new Order(coffee);


const display = new CustomerDisplay();
order.addObserver(display);


const orderManager = OrderManager.getInstance();
orderManager.addOrder(order);


order.setPaymentStrategy(new CreditCardPayment());
order.processPayment();


console.log(`Status: ${order.getStatus()}`);
order.proceedToNextState(); // Preparing
console.log(`Status: ${order.getStatus()}`);
order.proceedToNextState(); // Ready 
console.log(`Status: ${order.getStatus()}`);
order.proceedToNextState(); // Completed
console.log(`Status: ${order.getStatus()}`);
