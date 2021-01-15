class Company {
  constructor(companyName) {
    this.companyName = companyName;
    this.employees = [];
    this.bonus = "";
  }

  addEmployee(employee) {
    this.employees.push(employee);
    this.bonus = this.employees[0].calcBonus(this.employees[0].position);
  }

  getEmployeesInfo() {
    this.employees.forEach((employee) => {
      console.log({
        ...employee,
        totalSalary: employee.salary + this.bonus,
        bonus: this.bonus,
      });
    });
  }

  calcSalaries() {
    let totalSalary;
    this.employees.forEach((employee) => {
      this.bonus = employee.calcBonus(employee.position);
      totalSalary = employee.salary + this.bonus;
      //   console.log(totalSalary);
    });
  }
}

class Employee {
  constructor(firstName, lastName, salary, position) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.salary = salary),
      (this.position = position);
  }

  getInfo() {
    return {
      name: this.firstName,
      lastName: this.lastName,
      salary: this.salary,
      position: this.position,
    };
  }

  calcBonus(position) {
    let bonus;
    switch (position) {
      case "WebDeveloper":
        bonus = this.salary * (20 / 100);
      case "QA":
        bonus = this.salary * (10 / 100);
      case "DevOps":
        bonus = this.salary * (30 / 100);
    }
    return bonus;
  }
}

class WebDev extends Employee {
  constructor(firstName, lastName, salary, position) {
    super(firstName, lastName, salary, position);
    this.techStack = { techStack: "JavaScript, CSS3, HTML, SASS" };
    this.position = position;
  }

  calcBonus(position) {
    let bonus = super.calcBonus(position);
    console.log(bonus);
    return super.calcBonus(position);
  }

  getInfo() {
    let info = {
      ...super.getInfo(),
      ...this.techStack,
    };
  }
}

class DevOps extends Employee {
  constructor(firstName, lastName, salary, position) {
    super(firstName, lastName, salary, position);
    this.averageCheckNum = 5;
    this.position = position;
  }

  calcBonus(position) {
    let bonus = super.calcBonus(position);
    console.log(bonus);
    return super.calcBonus(position);
  }

  getInfo() {
    let info = {
      ...super.getInfo(),
      ...this.averageCheckNum,
    };
    console.log(info);
  }
}

class QA extends Employee {
  constructor(firstName, lastName, salary, position) {
    super(firstName, lastName, salary, position);
    this.averageTestsNum = 8;
    this.position = position;
  }

  calcBonus(position) {
    let bonus = super.calcBonus(position);
    return super.calcBonus(position);
  }

  getInfo() {
    let info = {
      ...super.getInfo(),
      ...this.averageTestsNum,
    };
    console.log(info);
  }
}

let company = new Company("Webelinx");

e1 = new WebDev("Maja", "Cvetkovic", 700, "WebDeveloper");
// e1.getInfo();
// e1.calcBonus(e1.position);

e2 = new DevOps("Aleksandar", "Vuckovic", 800, "DevOps");
// e2.getInfo();
// e2.calcBonus(e2.position);

e3 = new QA("Stefan", "Vojinovic", 900, "QA");
// e3.getInfo();
// e3.calcBonus(e3.position);

company.addEmployee(e1);
company.addEmployee(e2);
company.addEmployee(e3);

company.calcSalaries();
company.getEmployeesInfo();
