"use strict";
// Hotel Family: HotelBooking, HotelItinerary, HotelInvoice. Each should return a string indicating it's for a hotel
// (e.g., "Hotel booked at Marriott," "Generating hotel invoice...")
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelInvoice = exports.HotelItinerary = exports.HotelBooking = void 0;
class HotelBooking {
    book() {
        return "Hotel booked at Marriott";
    }
}
exports.HotelBooking = HotelBooking;
class HotelItinerary {
    display() {
        return "Displaying Hotel Itinerary";
    }
}
exports.HotelItinerary = HotelItinerary;
class HotelInvoice {
    generate() {
        return "Generating hotel invoice...";
    }
}
exports.HotelInvoice = HotelInvoice;
