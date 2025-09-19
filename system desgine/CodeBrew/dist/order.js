"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class PendingState {
    proceedToNext(order) {
        order.setState(new PreparingState());
    }
    cancelOrder(order) {
        order.setState(new CompletedState());
    }
    getStateName() { return "Pending"; }
}
class PreparingState {
    proceedToNext(order) {
        order.setState(new ReadyState());
    }
    cancelOrder(order) {
        order.setState(new CompletedState());
    }
    getStateName() { return "Preparing"; }
}
class ReadyState {
    proceedToNext(order) {
        order.setState(new CompletedState());
    }
    cancelOrder(order) {
        order.setState(new CompletedState());
    }
    getStateName() { return "Ready"; }
}
class CompletedState {
    proceedToNext(order) {
        // End state
    }
    cancelOrder(order) {
        // Already completed
    }
    getStateName() { return "Completed"; }
}
class Order {
    constructor(coffee) {
        this.coffee = coffee;
        this.observers = [];
        this.id = Order.nextId++;
        this.state = new PendingState();
    }
    setState(state) {
        this.state = state;
        this.notifyObservers();
    }
    proceedToNextState() {
        this.state.proceedToNext(this);
    }
    cancelOrder() {
        this.state.cancelOrder(this);
    }
    getStatus() {
        return this.state.getStateName();
    }
    setPaymentStrategy(strategy) {
        this.paymentStrategy = strategy;
    }
    processPayment() {
        if (!this.paymentStrategy)
            throw new Error("No payment strategy set!");
        this.paymentStrategy.pay(this.coffee.getCost());
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    notifyObservers() {
        for (const obs of this.observers) {
            obs.update(this.id, this.getStatus());
        }
    }
}
exports.Order = Order;
Order.nextId = 1;
