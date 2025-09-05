import { Decorator } from "../types";

export class CertificateAddon extends Decorator {
  getCost(): number {
    return this.subsciption.getCost() + 200;
  }
  getFeatures(): string[] {
    return this.subsciption.getFeatures().concat(["Official Certificate of Completion"]);
  }
}
