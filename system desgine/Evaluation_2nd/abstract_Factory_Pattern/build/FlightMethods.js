"use strict";
// Concrete Product Families: Create two families of concrete classes that implement these interfaces:
// Flight Family: FlightBooking, FlightItinerary, FlightInvoice. Each should return a string indicating it's for a flight (e.g., "Flight booked with Indigo," "Displaying flight itinerary...").
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightInvoice = exports.FlightItinerary = exports.FlightBooking = void 0;
class FlightBooking {
    book() {
        return "Booking completed for flight at Banglore";
    }
}
exports.FlightBooking = FlightBooking;
class FlightItinerary {
    display() {
        return "Displaying flight iternity";
    }
}
exports.FlightItinerary = FlightItinerary;
class FlightInvoice {
    generate() {
        return "Flight Invoice";
    }
}
exports.FlightInvoice = FlightInvoice;
