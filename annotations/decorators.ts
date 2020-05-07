class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boat color is ${this.color}.`;
  }

  @logError("bitches")
  pilot(): void {
    throw new Error();
    console.log("switchssdadsadwadwadsa");
  }
}

function logError(msg: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(msg);
      }
    };
  };
}

new Boat().pilot();
