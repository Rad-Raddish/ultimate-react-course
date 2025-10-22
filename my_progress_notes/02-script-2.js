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
      // librarything: {
      //   rating: 4.53,
      //   ratingsCount: 47166,
      //   reviewsCount: 452,
      // },
      bookClubReviews: {
        rating: 3.53,
        ratingsCount: 6,
        reviewsCount: 0,
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

const books = getBooks();
books;

//****************************************************************************************************************//
//*********************************************** Array Map Method ***********************************************//
//* the map method is basically to create a new array, based on the original array with some operation applied, to each element of the original array.
//* for this example, books is a function, even if it's just returning data

//****************************************************************************************************************//
//* I recommend taking some time to learn more about the map method
//****************************************************************************************************************//

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

//* el represents the current element in the array. Think of this like an i in a forloop
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

//* using a function block but we have to return it
const essentialDataEx = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});
essentialDataEx;

//* using a function block but streamlined by using () so we can skip needing to write 'return'
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

//****************************************************************************************************************//
//********************************************** Array Filter Method *********************************************//
//* So again, we pass in a callback function which should return something. So again, each element of the array is a book.
// And now here, instead of returning the value that we want in a new array, we need to return a condition which will
// either be true or false And if the result of that condition is true, then the current element will go into the filtered array.
// But if it's false, then it will get filtered out

//* filter, like map, returns a new array
//* if the expression evaluates to true, it's returned in the new array
const longBooks = books
  .filter((book) => book.pages > 800)
  .filter((book) => book.hasMovieAdaptation);
//* long books over 800 pages and has a movie adaptation
longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

//****************************************************************************************************************//
//********************************************** Array Reduce Method *********************************************//
//* most powerful of them all!
//* takes a callback and a starter value (Optional?)
//* the goal of reduce is to boil down the array to a single value

//****************************************************************************************************************//
//* I recommend taking some time to learn more about the reduce method
//****************************************************************************************************************//

//* declare two values as our callback functions: acc and book.
//* acc will hold our accumulative value, which we've set to start at 0 here
//* so the reduce method will call our function (acc, book) here for the first elment and the acc will be 0
//* then we say, acc + book.pages, which we then set book = to acc+book.pages for this first iteration
//* when we go to the next iteration, acc will already be 1216 (the previous acc+book.pages)
//* another way to read this is to replace "acc" with "sum" as that makes intuitive sense as well
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;
//* we can do operations here that we can do with map and filter and do work on objects not just numerals

//****************************************************************************************************************//
//*********************************************** Array Sort Method **********************************************//

const num = [3, 54, 5, 1, 8, 5];
const numSort = num.sort((a, b) => a - b);
const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);

numSort;
sortedByPages;

//* so what happens is js loops through each element through your callback function ((a,b)=>a-b) and in this case 'a' is the current value and 'b' is the next value
//* when we return a negative number it will be sorted in an ascending way, if you return a positive number, it will be sorted in a descending way, we figure this out by returning one number by another

//****************************************************************************************************************//
//*********************************************** Immutable Arrays ***********************************************//
//* aka don't modify underlaying array

// 1. add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
  publicationDate: "2011-02-11",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2. delete book object from array
// if it returns a false value, that object is removed from the array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3. update a book object in an array
// we want to update the one book
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 9999 } : book
);
booksAfterUpdate;

//****************************************************************************************************************//
//***********************************************    Async JS    *************************************************//
//* promises... see 03-script-3.js
