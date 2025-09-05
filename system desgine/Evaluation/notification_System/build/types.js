"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
class Blog {
    constructor() {
        this.subscriberList = [];
    }
    subscribe(subscriber) {
        let isExist = this.subscriberList.includes(subscriber);
        if (isExist) {
            console.log(`${subscriber} already Subscribed`);
            return;
        }
        this.subscriberList.push(subscriber);
    }
    unsubscribe(subscriber) {
        let isExist = this.subscriberList.indexOf(subscriber);
        if (isExist == -1) {
            console.log(`${subscriber} already Unsubscribed`);
        }
        this.subscriberList = this.subscriberList.filter((a, index) => index != isExist);
    }
    publish(postTitle) {
        for (let subscriber of this.subscriberList) {
            subscriber.update(postTitle);
        }
    }
}
exports.Blog = Blog;
