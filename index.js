const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const output = inventors.filter((x) => x.year >= 1500 && x.year < 1600);
console.log(output);

// Array.prototype.map()
// gives the same length
// 2. Give us an array of the inventors first and last names
const output1 = inventors.map((x) => x.first + " " + x.last);
console.log(output1);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// const output2=inventors.sort(function(a,b){
//   if(a.year>b.year){
//     return 1;
//   } else {
//     return -1;
//   }
// })
const output2 = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.log(output2);
// 4. How many years did all the inventors live all together?
const output3 = inventors.reduce(function (acc, curr) {
  return acc + (curr.passed - curr.year);
}, 0);
console.log(output3);
// 5. Sort the inventors by years lived
const output4 = inventors.sort((a, b) =>
  a.passed - a.year > b.passed - b.year ? -1 : 1
);
console.log(output4);

// 7. sort Exercise
// Sort the people alphabetically by last name
const output5 = people.sort(function (a, b) {
  const [last, first] = a.split(", ");
  const [last1, first1] = b.split(", ");
  return a.last > b.last1 ? -1 : 1;
});
console.log(output5);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
const output7 = data.reduce(function (acc, cur) {
  if (!acc[cur]) {
    acc[cur] = 1;
  } else {
    acc[cur] = acc[cur] + 1;
  }
  return acc;
}, {});
console.log(output7);

// DAY 7
const people1 = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const out = people1.some((x) => 2023 - x.year >= 19);
console.log(out);
// Array.prototype.every() // is everyone 19 or older?
const out1 = people1.every((x) => 2023 - x.year >= 19);
console.log(out1);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const out2 = comments.find((x) => x.id == 823423);
console.log(out2);
const index = comments.findIndex((comment) => comment.id == 823423);
console.log(index);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const out3 = comments.filter((x) => x.id != 823423);
console.log(out3);
