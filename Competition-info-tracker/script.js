class Championship {
  constructor() {
    this.competitorList = [];
  }

  addCompetitor(competitor) {
    this.competitorList.push(competitor);
  }

  removeCompetitor(competitor) {
    this.competitorList = this.competitorList.filter(
      (c) => c.id !== competitor.id
    );
  }

  calcHighestScoring() {
    let highScore = this.competitorList[0].finalScore;
    let highestScoring = this.competitorList[0];
    for (let i = 0; i < this.competitorList.length; i++) {
      if (this.competitorList[i].finalScore > highScore) {
        highestScoring = this.competitorList[i];
      }
    }
    return `The highest scoring competitor is ${highestScoring.firstName} (scored ${highestScoring.finalScore})`;
  }

  filterCountry(country) {
    let competitorsFromCountry = [];
    return (competitorsFromCountry = this.competitorList.filter(
      (c) => c.country === country
    ));
  }
}

class Competitor {
  constructor(firstName, lastName, country, readinessFactor, numOfTries) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = getId();
    this.country = country;
    this.readinessFactor = readinessFactor;
    this.numOfAttempts = numOfTries;
    this.finalScore = this.readinessFactor * this.numOfAttempts;
  }
}

function getId() {
  let chars = "abcdefg123456789";
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

//tests
const competitor1 = new Competitor("Maja", "Cvetkovic", "Serbia", 8, 6);
const competitor2 = new Competitor("Nikola", "Jovanovic", "Austria", 9, 4);
const competitor3 = new Competitor("Sanja", "Cvetkovic", "Canada", 10, 2);
const competitor4 = new Competitor("Jovana", "Veljkovic", "Austria", 7, 3);

const championship = new Championship();
championship.addCompetitor(competitor1);
championship.addCompetitor(competitor2);
championship.addCompetitor(competitor3);
championship.addCompetitor(competitor4);
console.log(championship.competitorList);
championship.removeCompetitor(competitor1);
console.log(championship.competitorList);
console.log(championship.calcHighestScoring());
console.log(championship.filterCountry("Austria"));
