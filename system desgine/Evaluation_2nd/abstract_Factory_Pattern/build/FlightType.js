"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightTravel = void 0;
const FlightMethods_1 = require("./FlightMethods");
class FlightTravel {
    createBooking() {
        return new FlightMethods_1.FlightBooking();
    }
    displayItinerary() {
        return new FlightMethods_1.FlightItinerary();
    }
    generateInvoice() {
        return new FlightMethods_1.FlightInvoice();
    }
}
exports.FlightTravel = FlightTravel;
