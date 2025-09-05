// customized meal app

class Meal {
  mainDish?: string | null;
  dessert?: string | null;
  drink?: string | null;
  constructor(
    mainDish?: string | null,
    dessert?: string | null,
    drink?: string | null
  ) {
    this.dessert = dessert;
    this.drink = drink;
    this.mainDish = mainDish;
  }
  getDescription(): void {
    let description = "";
    if (this.mainDish) {
      description += `Main Dish : ${this.mainDish} `;
    }
    if (this.drink) {
      description += `, Drink : ${this.drink} `;
    }
    if (this.dessert) {
      description += `, Dessert : ${this.dessert}`;
    }
    console.log(description);
  }
}

class MyMeal {
  private mainDish?: string | null;
  private dessert?: string | null;
  private drink?: string | null;

  setMaindish(maindish: string): this {
    this.mainDish = maindish;
    return this;
  }
  setDrink(drink: string): this {
    this.drink = drink;
    return this;
  }
  setDessert(dessert: string): this {
    this.dessert = dessert;
    return this;
  }
  getMeal(): Meal {
    return new Meal(this.mainDish, this.dessert, this.drink);
  }
}

let myMeal:Meal = new MyMeal().setMaindish("Pizza").getMeal()
myMeal.getDescription()


let myMeal1:Meal = new MyMeal().setMaindish("Pizza").setDrink("Coke").setDessert("Kabab").getMeal()
myMeal1.getDescription()

