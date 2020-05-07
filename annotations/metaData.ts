import "reflect-metadata";

@printMetadata
class Plane {
  color: string = "red";

  @markFunction("fuck")
  fly(): void {
    console.log("bitch");
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    console.log(Reflect.getMetadata("secret", target.prototype, key));
  }
}
