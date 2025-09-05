// You are developing a Pizza Ordering System where customers can customize their pizzas by choosing different ingredients.
// Implement the Builder Pattern to allow the step-by-step construction of a Pizza object with the following properties:

// size (small, medium, or large)
// cheese (boolean)
// pepperoni (boolean)
// mushrooms (boolean)
// The PizzaBuilder class should allow setting these properties step by step and finally build the Pizza object.
// Demonstrate its usage in the main function by creating a large pizza with cheese and mushrooms and printing its details.

class Pizza {
  size:  "small" | "medium" | "large" ;
  cheese?: boolean;
  pepperoni?: boolean;
  mushrooms?: boolean;

  constructor(
    size:  "small" | "medium" | "large" ,
    cheese: boolean,
    pepperoni: boolean,
    mushrooms: boolean
  ) {
    this.size = size;
    this.cheese = cheese;
    this.mushrooms = mushrooms;
    this.pepperoni = pepperoni;
  }

  getDetails(): void {
    let description = ""
    if(this.size){
        description += `${this.size} pizza `
    }
    if(this.cheese){
        description += ", with cheese"
    }
    if(this.mushrooms){
        description += ", with mushroooms"
    }
    if(this.pepperoni){
        description += ", with pepperoni"
    }
    console.log(description);
  }
}

class PizzaBuilder {
  private size :  "small" | "medium" | "large" = "medium" ;
  private cheese: boolean = false
  private pepperoni: boolean = false;
  private mushrooms: boolean = false;

  setSize(
    size:  "small" | "medium" | "large" 
  ): this {
    this.size = size;
    return this;
  }
  setCheese(cheese: boolean): this {
    this.cheese = cheese;
    return this;
  }
  setPepperoni(pepperoni: boolean): this {
    this.pepperoni = pepperoni;
    return this;
  }
  setMushrooms(mushrooms: boolean): this {
    this.mushrooms = mushrooms;
    return this;
  }
  buildPizza(): Pizza {
    return new Pizza(this.size ,this.cheese,this.mushrooms,this.pepperoni);
  }
}



let myPizza : Pizza = new PizzaBuilder().setSize("large").setCheese(true).setMushrooms(true).buildPizza()
myPizza.getDetails()
