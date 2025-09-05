// Product Interfaces: Define interfaces for a family of related products:
// IBooking: with a method book(): string.
// IItinerary: with a method display(): string.
// IInvoice: with a method generate(): string.

export interface IBooking {
  book(): string;
}

export interface IItinerary {
  display(): string;
}
export interface Invoice {
  generate(): string;
}

export interface TravelType{
    createBooking (): IBooking ;
    displayItinerary (): IItinerary ;
    generateInvoice (): Invoice ;
}


