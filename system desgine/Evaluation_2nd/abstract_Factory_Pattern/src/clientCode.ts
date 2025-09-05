import { FlightTravel } from "./FlightType";
import { ProvideFactory } from "./ProvideTravel";





let flightProvider = ProvideFactory.provideTravel("flight")
console.log(flightProvider.createBooking().book());
console.log(flightProvider.displayItinerary().display());
console.log(flightProvider.generateInvoice().generate());


let hotelProvider = ProvideFactory.provideTravel("hotel") 
console.log(hotelProvider.createBooking().book());
console.log(hotelProvider.displayItinerary().display());
console.log(hotelProvider.generateInvoice().generate());