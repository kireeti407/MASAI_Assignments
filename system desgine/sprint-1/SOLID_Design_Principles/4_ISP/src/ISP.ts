// Interface Segregation Principle :


// Problem: You are modeling a device interface:

// interface Device {
//   print(): void;
//   scan(): void;
//   fax(): void;
// }

// Task: Refactor this interface to follow the Interface Segregation Principle and create two classes:

// OldPrinter (can only print)
// SmartPrinter (can print, scan, and fax)


// Solution :

interface PrintableDevice{
    print():void 
}
interface ScannableDevice{
    scan():void
}
interface FaxableDevice{
    fax():void
}

class OldPrinter implements PrintableDevice{
    print(): void {
        console.log("I can Print!!")
    }
}
class SmartPrinter implements PrintableDevice,ScannableDevice,FaxableDevice{
    print(): void {
        console.log("I can Print!!")
    }
    scan(): void {
        console.log("I can Scan!!")
    }
    fax(): void {
        console.log("I can Fax");
    }
}