export abstract class CourseSubscription {
  abstract getCost(): number;
  abstract getFeatures(): string[];
}

export abstract class Decorator extends CourseSubscription {
  subsciption: CourseSubscription;
  constructor(subsciption: CourseSubscription) {
    super();
    this.subsciption = subsciption;
  }
  abstract getCost(): number;
  abstract getFeatures(): string[];
}
