"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperFly = exports.NoFly = exports.FastFly = void 0;
class FastFly {
    fly() {
        console.log("Flying fast like a rocket!");
    }
}
exports.FastFly = FastFly;
class NoFly {
    fly() {
        console.log("I cannot fly");
    }
}
exports.NoFly = NoFly;
class SuperFly {
    fly() {
        console.log("I Can fly with super speed");
    }
}
exports.SuperFly = SuperFly;
