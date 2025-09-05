import { FlightTravel } from "./FlightType";
import { HotelTravel } from "./HotelTravel";
import { TravelType } from "./types";

export class ProvideFactory {
  static provideTravel(name: string): TravelType {
    switch (name) {
      case "flight":
        return new FlightTravel();
      case "hotel":
        return new HotelTravel();
      default:
        throw new Error("Invalid travel type");
    }
  }
}
