import faker from "faker";
import { Mappable } from "./Map";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    latitude: number;
    longitude: number;
  };
  color: string = "red";

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      latitude: +faker.address.latitude(),
      longitude: +faker.address.longitude(),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company name is: ${this.companyName}.</h1>
        <h3>Company catchphrase is: ${this.catchPhrase}.</h3>
      <div>
    `;
  }
}
