// Define your Book class here:
class Book {
  constructor(
    title,
    author,
    copyright,
    isbn,
    numPages,
    numCheckedOut,
    discarded
  ) {
    this.title = title;
    this.author = author;
    this.copyright = copyright;
    this.isbn = isbn;
    this.numPages = numPages;
    this.numCheckedOut = numCheckedOut;
  }
  checkout(uses = 1) {
    this.numCheckedOut += uses;
  }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
  constructor(
    title,
    author,
    copyright,
    isbn,
    numPages,
    numCheckedOut,
    discarded
  ) {
    super(title, author, copyright, isbn, numPages, numCheckedOut, discarded);
  }

  dispose(currentYear) {
    if (currentYear - this.copyright > 5) {
      this.discarded = "Yes";
    }
  }
}

class Novel extends Book {
  constructor(
    title,
    author,
    copyright,
    isbn,
    numPages,
    numCheckedOut,
    discarded
  ) {
    super(title, author, copyright, isbn, numPages, numCheckedOut, discarded);
  }

  dispose() {
    if (this.numCheckedOut > 100) {
      this.discarded = "Yes";
    }
  }
}
// Declare the objects for exercises 2 and 3 here:
let oldBook = new Novel(
  "Pride and Prejudice",
  "Jane Austen",
  1813,
  "1111111111111",
  432,
  32,
  "No",
);

let topSecret = new Manual(
  "Top Secret Shuttle Building Manual",
  "Redacted",
  2013,
  "0000000000000",
  1147,
  1,
  "No"
);
// Code exercises 4 & 5 here:

topSecret.dispose(2024)
oldBook.checkout(5);
oldBook.dispose();
console.log(oldBook, topSecret);