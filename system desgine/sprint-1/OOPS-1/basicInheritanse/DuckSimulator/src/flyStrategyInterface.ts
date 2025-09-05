export interface FlyStrategy {
  fly(): void;
}

export class FastFly implements FlyStrategy {
  fly(): void {
    console.log("Flying fast like a rocket!");
  }
}
export class NoFly implements FlyStrategy {
  fly(): void {
    console.log("I cannot fly");
  }
}

export class SuperFly implements FlyStrategy{
    fly(): void {
        console.log("I Can fly with super speed");
    }
}
