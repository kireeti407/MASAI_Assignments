import { Blog } from "./types";
import { EmailSubscriber, SMSSubscriber } from "./subscribers";

let blog = new Blog();

let emailSubscriber = new EmailSubscriber();
let smsSubscriber = new SMSSubscriber();

blog.subscribe(emailSubscriber);
blog.subscribe(smsSubscriber);

blog.publish("Design Patterns in JavaScript");
blog.publish("Observer Pattern Simplified");

// blog.unsubscribe(smsSubscriber);
