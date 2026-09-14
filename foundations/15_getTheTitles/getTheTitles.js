const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (arr) {
  const newArr = arr.map((item) => item.title);
  return newArr;
};

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
