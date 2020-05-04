import { Sorter } from "../Sorter";

export class CharacterCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(left: number, right: number): boolean {
    return this.data[left].toLowerCase() > this.data[right].toLowerCase();
  }

  swap(left: number, right: number): void {
    const splitString = this.data.split("");
    const leftHand = splitString[left];
    splitString[left] = splitString[right];
    splitString[right] = leftHand;

    this.data = splitString.join("");
  }
}
