//1
const people = [
  {
    firstName: "Maja",
    lastName: "Cvetkovic",
    birthYear: 1991,
    height: 1.71,
    weight: 58,
  },
  {
    firstName: "Nikola",
    lastName: "Jovanovic",
    birthYear: 1991,
    height: 1.85,
    weight: 87,
  },
  {
    firstName: "Sanja",
    lastName: "Cvetkovic",
    birthYear: 1992,
    height: 1.76,
    weight: 60,
  },
];

//1.a
let arr = [];
people
  .filter((person) => person.height > 1.75)
  .forEach((filtered) =>
    arr.push(`${filtered.firstName} ${filtered.lastName}`)
  );
console.log(arr);
//1.b
console.log(
  people.sort((firstEl, secondEl) => firstEl.weight - secondEl.weight)
);
//1.c
console.log(
  people.map((person) => new Date().getFullYear() - person.birthYear)
);

//2
const movies = [
  {
    name: "Whiplash",
    year: 2014,
    score: 4,
  },
  {
    name: "Hannah and Her Sisters",
    year: 1986,
    score: 8.1,
  },
  {
    name: "Hamilton",
    year: 2020,
    score: 8.6,
  },
  {
    name: "The Dark Knight",
    year: 2008,
    score: 8.4,
  },
  {
    name: "Little women",
    year: 2019,
    score: 7.3,
  },
];

//2.a
console.log(movies.filter((movie) => movie.year > 2000));
//2.b
console.log(movies.reduce((acc, curr) => acc + curr.score, 0) / movies.length);
//3.c
console.log(
  movies
    .filter((movie) => movie.score > 4)
    .sort((a, b) => (a.name > b.name ? 1 : -1))
);
