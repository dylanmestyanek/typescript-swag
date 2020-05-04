interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const soda = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drin has ${this.sugar} grams of sugar.`;
  },
};

const printItemSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printItemSummary(oldCivic);
printItemSummary(soda);
