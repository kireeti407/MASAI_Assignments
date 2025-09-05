import { HotelBooking, HotelInvoice, HotelItinerary } from "./HotelMethods";
import { IBooking, IItinerary, Invoice, TravelType } from "./types";

export class HotelTravel implements TravelType{
    createBooking(): IBooking {
        return new HotelBooking()
    }
    displayItinerary(): IItinerary {
        return new HotelItinerary()
    }
    generateInvoice(): Invoice {
        return new HotelInvoice()
    }

}