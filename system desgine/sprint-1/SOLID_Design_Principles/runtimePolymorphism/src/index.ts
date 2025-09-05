// Problem: You are given the following structure:

// class Animal {
//   makeSound(): void {
//     console.log("Some sound");
//   }
// }

// class Dog extends Animal {
//   makeSound(): void {
//     console.log("Bark!");
//   }
// }

// Task: Demonstrate runtime polymorphism by creating a makeAnimalSound function 
// that accepts an Animal type and shows how substituting a Dog object still works.


class Animal{
    makeSound(): void {
        console.log("Some Sound!!")
    }
}

class Dog extends Animal{
    makeSound(): void {
        console.log("Bark!! Bark!!");
    }
}

class Lion extends Animal{
    makeSound(): void {
        console.log("Sound More...");
    }
}
function makeAnimalSound(animal:Animal){
    animal.makeSound()
}

makeAnimalSound(new Dog)
makeAnimalSound(new Lion)
makeAnimalSound(new Animal)

