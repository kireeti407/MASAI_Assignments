"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateAddon = void 0;
const types_1 = require("../types");
class CertificateAddon extends types_1.Decorator {
    getCost() {
        return this.subsciption.getCost() + 200;
    }
    getFeatures() {
        return this.subsciption.getFeatures().concat(["Official Certificate of Completion"]);
    }
}
exports.CertificateAddon = CertificateAddon;
