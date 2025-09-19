import { Coffee } from './coffee';
import { PaymentStrategy } from './payment';
import { Observer } from './observer';


interface OrderState {
    proceedToNext(order: Order): void;
    cancelOrder(order: Order): void;
    getStateName(): string;
}

class PendingState implements OrderState {
    proceedToNext(order: Order): void {
        order.setState(new PreparingState());
    }
    cancelOrder(order: Order): void {
        order.setState(new CompletedState()); 
    }
    getStateName(): string { return "Pending"; }
}

class PreparingState implements OrderState {
    proceedToNext(order: Order): void {
        order.setState(new ReadyState());
    }
    cancelOrder(order: Order): void {
        order.setState(new CompletedState());
    }
    getStateName(): string { return "Preparing"; }
}

class ReadyState implements OrderState {
    proceedToNext(order: Order): void {
        order.setState(new CompletedState());
    }
    cancelOrder(order: Order): void {
        order.setState(new CompletedState());
    }
    getStateName(): string { return "Ready"; }
}

class CompletedState implements OrderState {
    proceedToNext(order: Order): void {
        console.log("Proceed to next")
    }
    cancelOrder(order: Order): void {
        console.log("order cancel")
    }
    getStateName(): string { return "Completed"; }
}

export class Order {
    private static nextId = 1;
    public readonly id: number;
    private state: OrderState;
    private observers: Observer[] = [];
    private paymentStrategy?: PaymentStrategy;

    constructor(public coffee: Coffee) {
        this.id = Order.nextId++;
        this.state = new PendingState();
    }

    setState(state: OrderState): void {
        this.state = state;
        this.notifyObservers();
    }

    proceedToNextState(): void {
        this.state.proceedToNext(this);
    }

    cancelOrder(): void {
        this.state.cancelOrder(this);
    }

    getStatus(): string {
        return this.state.getStateName();
    }

    setPaymentStrategy(strategy: PaymentStrategy): void {
        this.paymentStrategy = strategy;
    }

    processPayment(): void {
        if (!this.paymentStrategy) throw new Error("No payment strategy set!");
        this.paymentStrategy.pay(this.coffee.getCost());
    }


    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    notifyObservers(): void {
        for (const obs of this.observers) {
            obs.update(this.id, this.getStatus());
        }
    }
}