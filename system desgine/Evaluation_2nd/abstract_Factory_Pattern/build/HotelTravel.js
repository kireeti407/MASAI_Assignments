"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelTravel = void 0;
const HotelMethods_1 = require("./HotelMethods");
class HotelTravel {
    createBooking() {
        return new HotelMethods_1.HotelBooking();
    }
    displayItinerary() {
        return new HotelMethods_1.HotelItinerary();
    }
    generateInvoice() {
        return new HotelMethods_1.HotelInvoice();
    }
}
exports.HotelTravel = HotelTravel;
