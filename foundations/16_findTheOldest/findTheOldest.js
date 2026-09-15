const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

function calculateAge(people) {
  if (people.yearOfDeath) {
    deathYear = people.yearOfDeath;
  } else {
    deathYear = new Date().getFullYear();
  }
  return deathYear - people.yearOfBirth;
}

const findTheOldest = function (people) {
  let oldestPerson = people.reduce((oldest, person) => {
    if (calculateAge(person) > calculateAge(oldest)) {
      return person;
    } else {
      return oldest;
    }
  });
  return oldestPerson;
};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
