"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSSubscriber = exports.EmailSubscriber = void 0;
class EmailSubscriber {
    update(postTitle) {
        console.log(`Email: New blog post titled '${postTitle}'`);
    }
}
exports.EmailSubscriber = EmailSubscriber;
class SMSSubscriber {
    update(postTitle) {
        console.log(`SMS: New blog post titled '${postTitle}'`);
    }
}
exports.SMSSubscriber = SMSSubscriber;
