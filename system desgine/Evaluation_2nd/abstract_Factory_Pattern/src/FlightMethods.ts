// Concrete Product Families: Create two families of concrete classes that implement these interfaces:
// Flight Family: FlightBooking, FlightItinerary, FlightInvoice. Each should return a string indicating it's for a flight (e.g., "Flight booked with Indigo," "Displaying flight itinerary...").

import { IBooking, IItinerary, Invoice } from "./types";

export class FlightBooking implements IBooking {
  book(): string {
    return "Booking completed for flight at Banglore";
  }
}
export class FlightItinerary implements IItinerary {
  display(): string {
    return "Displaying flight iternity";
  }
}

export class FlightInvoice implements Invoice {
  generate(): string {
    return "Flight Invoice";
  }
}
