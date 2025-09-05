export interface Subscriber {
  update(postTitle: string): void;
}
export class Blog {
  subscriberList: Subscriber[] = [];

  subscribe(subscriber: Subscriber): void {
    let isExist = this.subscriberList.includes(subscriber);
    if (isExist) {
      console.log(`${subscriber} already Subscribed`);
      return;
    }
    this.subscriberList.push(subscriber);
  }
  unsubscribe(subscriber: Subscriber): void {
    let isExist = this.subscriberList.indexOf(subscriber);
    if (isExist == -1) {
      console.log(`${subscriber} already Unsubscribed`);
    }
    this.subscriberList = this.subscriberList.filter((a,index)=>index!=isExist)
  }
  publish(postTitle: string): void {
    for (let subscriber of this.subscriberList) {
      subscriber.update(postTitle);
    }
  }
}
