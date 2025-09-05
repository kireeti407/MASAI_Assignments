import { Subscriber } from "./types";

export class EmailSubscriber implements Subscriber {
  update(postTitle: string): void {
    console.log(`Email: New blog post titled '${postTitle}'`);
  }
}

export class SMSSubscriber implements Subscriber {
  update(postTitle: string): void {
    console.log(`SMS: New blog post titled '${postTitle}'`);
  }
}
