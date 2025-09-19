import { Order } from "./order";


export class OrderManager {
    private static instance: OrderManager;
    private orders: Map<number, Order> = new Map();

    private constructor() {}

    static getInstance(): OrderManager {
        if (!OrderManager.instance) {
            OrderManager.instance = new OrderManager();
        }
        return OrderManager.instance;
    }

    addOrder(order: Order): void {
        this.orders.set(order.id, order);
    }

    getOrder(id: number): Order | undefined {
        return this.orders.get(id);
    }

    getAllOrders(): Order[] {
        return Array.from(this.orders.values());
    }
}