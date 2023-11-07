// File: complex_application.js
// Description: This code is a complex application that simulates a library system.
// It manages books, authors, patrons, and borrowing transactions.

// Define Book class
class Book {
  constructor(title, author, genre, publicationYear) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publicationYear = publicationYear;
    this.isAvailable = true;
  }
}

// Define Author class
class Author {
  constructor(name, nationality, birthYear, deathYear) {
    this.name = name;
    this.nationality = nationality;
    this.birthYear = birthYear;
    this.deathYear = deathYear;
  }
}

// Define Patron class
class Patron {
  constructor(name, age, address, phoneNumber) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    if (book.isAvailable) {
      book.isAvailable = false;
      this.borrowedBooks.push(book);
      console.log(`${this.name} has borrowed "${book.title}" by ${book.author}`);
    } else {
      console.log(`Sorry, "${book.title}" is not available for borrowing.`);
    }
  }

  returnBook(book) {
    if (!book.isAvailable) {
      book.isAvailable = true;
      const index = this.borrowedBooks.indexOf(book);
      this.borrowedBooks.splice(index, 1);
      console.log(`${this.name} has returned "${book.title}" by ${book.author}`);
    } else {
      console.log(`"${book.title}" is already available.`);
    }
  }
}

// Create book objects
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", 1960);
const book3 = new Book("1984", "George Orwell", "Dystopian", 1949);

// Create author objects
const author1 = new Author("F. Scott Fitzgerald", "American", 1896, 1940);
const author2 = new Author("Harper Lee", "American", 1926, 2016);
const author3 = new Author("George Orwell", "British", 1903, 1950);

// Create patron objects
const patron1 = new Patron("John Smith", 30, "123 Main St", "555-1234");
const patron2 = new Patron("Jane Doe", 25, "456 Elm St", "555-5678");

// Borrow and return books
patron1.borrowBook(book1);
patron1.borrowBook(book2);
patron2.borrowBook(book2); // Already borrowed by patron1
patron2.borrowBook(book3);

patron1.returnBook(book2);
patron2.returnBook(book1); // Already returned by patron1

// Output:
// John Smith has borrowed "The Great Gatsby" by F. Scott Fitzgerald
// John Smith has borrowed "To Kill a Mockingbird" by Harper Lee
// Sorry, "To Kill a Mockingbird" is not available for borrowing.
// Jane Doe has borrowed "1984" by George Orwell
// John Smith has returned "To Kill a Mockingbird" by Harper Lee
// Jane Doe has returned "The Great Gatsby" by F. Scott Fitzgerald