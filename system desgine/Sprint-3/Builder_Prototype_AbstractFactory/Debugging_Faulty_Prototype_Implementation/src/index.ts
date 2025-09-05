interface IBook {
  BookClone(): this;
}

class Book implements IBook {
  private title: string;
  private author: string;
  private reviews: string[];

  constructor(title: string, author: string, reviews: string[]) {
    this.title = title;
    this.author = author;
    this.reviews = reviews;
  }

  BookClone(): this {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
  getBook(): void {
    console.log(
      `Title: ${this.title} , Author : ${this.author} , Reviews : ${this.reviews}`
    );
  }
}

let book1 = new Book("Jersey", "Thinnanuri", ["Good", "Super Hit"]);
book1.getBook();
let book2 = book1.BookClone();
book2.getBook()