"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvideFactory = void 0;
const FlightType_1 = require("./FlightType");
const HotelTravel_1 = require("./HotelTravel");
class ProvideFactory {
    static provideTravel(name) {
        switch (name) {
            case "flight":
                return new FlightType_1.FlightTravel();
            case "hotel":
                return new HotelTravel_1.HotelTravel();
            default:
                throw new Error("Invalid travel type");
        }
    }
}
exports.ProvideFactory = ProvideFactory;
