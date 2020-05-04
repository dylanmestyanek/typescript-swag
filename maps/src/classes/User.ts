import faker from "faker";
import { Mappable } from "./Map";

export class User implements Mappable {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      latitude: +faker.address.latitude(),
      longitude: +faker.address.longitude(),
    };
  }

  markerContent(): string {
    return `User name is: ${this.name}.`;
  }
}
