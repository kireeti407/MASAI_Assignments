import { FlightBooking, FlightInvoice, FlightItinerary } from "./FlightMethods";
import { IBooking, IItinerary, Invoice, TravelType } from "./types";

export class FlightTravel implements TravelType {
  createBooking(): IBooking {
    return new FlightBooking();
  }
  displayItinerary(): IItinerary {
    return new FlightItinerary();
  }
  generateInvoice(): Invoice {
    return new FlightInvoice();
  }
}
