const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//*** Dustructuring lesson ***//

//* using Quokka to generate in-line text suggestions
//* open comman pallet (ctrl + p) and type ">Quokka.js: Start on Current File" (this should auto fill if you have it installed on vs code)
//* any time we log or call a object, it will create a new line in the Quokka tool tab (could be bottom or left, up to you) and reference the object's data and what line its on

const books = getBooks();
books;

const book1 = getBook(2);
const title1 = book1.title;
const author1 = book1.author;
title1;
author1;
console.log(author1, title1);

//*** obj destructuring....

const book = getBook(1);
book;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title, genres);

//***** Array Destructuring *****//
//* Destructuring also works with arrays, but instead of relying on property names, it relies on the order of elements.

//*** Examples
//* js example
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

//* destructured array example
// const [primaryGenre, secondaryGenre] = genres;
// console.log("Array Destructuring:" + genres);

//*** the 'Rest' operator
//* the arrest operator (as the teacher pronounces it) or more commonly known asthe 'rest' parameter/operator (rest makes more sense, as in, 'all the rest').
//* The rest operator only works as the last parameter in the array as it's a catch-all for anything not defined
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(
  "Array Destructuring Lesson.",
  "primaryGenre: " + primaryGenre,
  "secondaryGenre: " + secondaryGenre,
  "otherGenres: " + otherGenres
);

//*** the Spread operator on Arrays
//* takes values out of the array and places them in the new array
const newGenres = [...genres, "epic fantasy"]; // or ["epic fantasy", ...genres];
newGenres;

//*** the Spread operator on Objects
//* use destructure and spread operator to update/overwrite information
//* order of operations matter if you are updating information this way. 'Spread' out the exsisting information first before adding duplicate information (thus overwriting)
const updatedBook = {
  //* 'Spread' out exsisting info into the new object
  ...book,
  // Adding in a new property (because it did not exsist before)
  moviePublicationDate: "2001-12-19",
  // Overwriting an exsisting property
  pages: 1210,
};
//* so for example, the below example would not overwrite information that was 'Spread' out from book
// const updatedBook = {
//   pages: 1210,
//   ...book,
//   moviePublicationDate: "2001-12-19",
// };
updatedBook;

// when we learn about State next, we will be using the above fundimentals, so it's important to understand destructuring in order to manipulate State(data)
