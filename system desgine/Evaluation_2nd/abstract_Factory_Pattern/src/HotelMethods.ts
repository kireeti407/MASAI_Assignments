// Hotel Family: HotelBooking, HotelItinerary, HotelInvoice. Each should return a string indicating it's for a hotel
// (e.g., "Hotel booked at Marriott," "Generating hotel invoice...")

import { IBooking, IItinerary, Invoice } from "./types";

export class HotelBooking implements IBooking {
  book(): string {
    return "Hotel booked at Marriott";
  }
}

export class HotelItinerary implements IItinerary {
  display(): string {
    return "Displaying Hotel Itinerary";
  }
}

export class HotelInvoice implements Invoice {
  generate(): string {
    return "Generating hotel invoice...";
  }
}
