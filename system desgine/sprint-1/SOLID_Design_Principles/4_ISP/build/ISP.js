"use strict";
// Interface Segregation Principle :
class OldPrinter {
    print() {
        console.log("I can Print!!");
    }
}
class SmartPrinter {
    print() {
        console.log("I can Print!!");
    }
    scan() {
        console.log("I can Scan!!");
    }
    fax() {
        console.log("I can Fax");
    }
}
