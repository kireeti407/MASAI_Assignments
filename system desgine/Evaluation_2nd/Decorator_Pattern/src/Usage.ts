import { CertificateAddon } from "./decorators/CertificateAddon";
import { DoubtSupportAddon } from "./decorators/DoubtSupportAddon";
import { MentorAccessAddon } from "./decorators/MentorAccessAddon";
import { BasicSubscription } from "./subscriptions/basicSubcription";

console.log("Aswartha");
let basicSub = new BasicSubscription()
console.log(basicSub.getCost());
let mySubscription = new CertificateAddon(new MentorAccessAddon(basicSub))
console.log(mySubscription.getCost());
console.log(mySubscription.getFeatures());

let mySpecialSub = new MentorAccessAddon(new DoubtSupportAddon(basicSub))
console.log(mySpecialSub.getCost());
console.log(mySpecialSub.getFeatures());

