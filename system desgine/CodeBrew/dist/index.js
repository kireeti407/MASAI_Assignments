"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coffee_1 = require("./coffee");
const order_1 = require("./order");
const observer_1 = require("./observer");
const payment_1 = require("./payment");
const ordermanager_1 = require("./ordermanager");
// Create coffee order (Latte)
let coffee = new coffee_1.Latte();
// Add Milk and Caramel
coffee = new coffee_1.Milk(coffee);
coffee = new coffee_1.CaramelSyrup(coffee);
// Create order
const order = new order_1.Order(coffee);
// Attach display observer
const display = new observer_1.CustomerDisplay();
order.addObserver(display);
// Add to Order Manager (singleton)
const orderManager = ordermanager_1.OrderManager.getInstance();
orderManager.addOrder(order);
// Set payment strategy
order.setPaymentStrategy(new payment_1.CreditCardPayment());
order.processPayment();
// Order state transitions
console.log(`Status: ${order.getStatus()}`);
order.proceedToNextState(); // Preparing
console.log(`Status: ${order.getStatus()}`);
order.proceedToNextState(); // Ready (will notify observer)
console.log(`Status: ${order.getStatus()}`);
order.proceedToNextState(); // Completed
console.log(`Status: ${order.getStatus()}`);
