import {
  AppleLaptop,
  AppleMobile,
  SamsungLaptop,
  SamsungMobile,
} from "./Devices";
import { Device, DeviceBrand } from "./types";

export class AppleFactory implements DeviceBrand {
  createLaptop(name: string, price: number): Device {
    return new AppleLaptop(name, price);
  }
  createMobile(name: string, price: number): Device {
    return new AppleMobile(name, price);
  }
}

export class SamsungFactory implements DeviceBrand {
  createLaptop(name: string, price: number): Device {
    return new SamsungLaptop(name, price);
  }
  createMobile(name: string, price: number): Device {
    return new SamsungMobile(name, price);
  }
}
